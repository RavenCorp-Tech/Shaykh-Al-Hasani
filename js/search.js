/* ============================================
   SEARCH.JS - ARTICLE SEARCH PAGE
   ============================================ */

(function () {
  let cachedIndex = null;
  let indexBuildPromise = null;

  function getQueryParam(name) {
    const url = new URL(window.location.href);
    return url.searchParams.get(name) || '';
  }

  function setQueryParam(name, value) {
    const url = new URL(window.location.href);
    if (value) {
      url.searchParams.set(name, value);
    } else {
      url.searchParams.delete(name);
    }
    window.history.replaceState({}, '', url.toString());
  }

  function safeNormalize(value) {
    if (!value) return '';
    let lower = String(value).toLowerCase();

    // Arabic-aware normalization (common variants + harakat/tatweel removal)
    lower = lower
      // Common transliteration markers: treat as ignorable
      .replace(/[ʿʾʼ’‘']/g, '')
      .replace(/\u0640/g, '') // tatweel
      .replace(/[إأآٱ]/g, 'ا')
      .replace(/[ى]/g, 'ي')
      .replace(/[ة]/g, 'ه')
      .replace(/[ؤ]/g, 'و')
      .replace(/[ئ]/g, 'ي')
      .replace(/[ء]/g, '')
      // Persian/Urdu variants → Arabic
      .replace(/[ک]/g, 'ك')
      .replace(/[ی]/g, 'ي');

    try {
      // Remove diacritics (best-effort)
      return lower
        .normalize('NFD')
        .replace(/\p{Diacritic}+/gu, '')
        .replace(/[^\p{L}\p{N}\s]+/gu, ' ')
        .replace(/\s+/g, ' ')
        .trim();
    } catch {
      // Fallback for environments without Unicode property escapes
      // Keep extended Latin letters for transliteration.
      return lower
        .normalize('NFD')
        .replace(/[\u0300-\u036f\u064B-\u065F\u0670\u06D6-\u06ED]+/g, '')
        .replace(/[^0-9a-z\u00C0-\u024F\u1E00-\u1EFF\s]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
    }
  }

  function tokenize(value) {
    return safeNormalize(value)
      .split(' ')
      .map((t) => t.trim())
      .filter((t) => t.length >= 2);
  }

  function boundedEditDistance(a, b, maxDistance) {
    if (a === b) return 0;
    if (!a || !b) return maxDistance + 1;

    const lenA = a.length;
    const lenB = b.length;
    if (Math.abs(lenA - lenB) > maxDistance) return maxDistance + 1;

    // Ensure a is the shorter string to reduce memory
    if (lenA > lenB) return boundedEditDistance(b, a, maxDistance);

    const prev = new Array(lenA + 1);
    const curr = new Array(lenA + 1);

    for (let i = 0; i <= lenA; i += 1) prev[i] = i;

    for (let j = 1; j <= lenB; j += 1) {
      curr[0] = j;
      let rowMin = curr[0];
      const bj = b.charCodeAt(j - 1);

      for (let i = 1; i <= lenA; i += 1) {
        const cost = a.charCodeAt(i - 1) === bj ? 0 : 1;
        const del = prev[i] + 1;
        const ins = curr[i - 1] + 1;
        const sub = prev[i - 1] + cost;
        const val = Math.min(del, ins, sub);
        curr[i] = val;
        if (val < rowMin) rowMin = val;
      }

      if (rowMin > maxDistance) return maxDistance + 1;

      for (let i = 0; i <= lenA; i += 1) prev[i] = curr[i];
    }

    return prev[lenA];
  }

  function bestFuzzyDistance(term, tokens, maxDistance) {
    if (!term || !tokens || !tokens.length) return maxDistance + 1;
    let best = maxDistance + 1;

    for (const token of tokens) {
      if (Math.abs(token.length - term.length) > maxDistance) continue;
      const d = boundedEditDistance(term, token, maxDistance);
      if (d < best) best = d;
      if (best === 0) return 0;
    }

    return best;
  }

  function maxFuzzyDistanceForTerm(term) {
    const len = term.length;
    if (len <= 3) return 0; // too noisy; require exact
    if (len <= 5) return 1;
    if (len <= 8) return 2;
    return 3;
  }

  function stripHtml(html) {
    if (!html) return '';
    const temp = document.createElement('div');
    temp.innerHTML = html;
    return temp.textContent || temp.innerText || '';
  }

  function stripAndNormalizeDomText(doc) {
    if (!doc) return '';
    doc.querySelectorAll('script, style, noscript').forEach((el) => el.remove());

    const main = doc.querySelector('main') || doc.body;
    const text = (main && (main.textContent || '')) || '';
    return String(text).replace(/\s+/g, ' ').trim();
  }

  function isProbablyHtmlUrl(url) {
    if (!url) return false;
    if (url.startsWith('#')) return false;
    if (url.startsWith('mailto:') || url.startsWith('tel:')) return false;
    return true;
  }

  function toRelativeHtmlPath(url) {
    try {
      const u = new URL(url, window.location.href);
      if (u.origin !== window.location.origin) return null;
      const path = u.pathname.split('/').pop() || '';
      if (!path.endsWith('.html')) return null;
      return path;
    } catch {
      return null;
    }
  }

  function countOccurrences(haystack, needle) {
    if (!haystack || !needle) return 0;
    let count = 0;
    let start = 0;

    while (true) {
      const idx = haystack.indexOf(needle, start);
      if (idx === -1) break;
      count += 1;
      start = idx + needle.length;
    }

    return count;
  }

  function scoreArticle(doc, query) {
    const q = safeNormalize(query);
    if (!q) return 0;

    const title = doc.titleNorm;
    const body = doc.bodyNorm;

    let score = 0;

    // Phrase match boosts
    if (title.includes(q)) score += 80;
    if (body.includes(q)) score += 12;

    const terms = q.split(' ').filter(t => t.length >= 2);
    for (const term of terms) {
      const inTitle = countOccurrences(title, term);
      const inBody = countOccurrences(body, term);

      if (inTitle) score += 40 + inTitle * 12;
      if (inBody) score += inBody * 2;

      if (!inTitle && !inBody) {
        const maxDist = maxFuzzyDistanceForTerm(term);
        if (maxDist > 0) {
          const dTitle = bestFuzzyDistance(term, doc.titleTokens, maxDist);
          const dBody = bestFuzzyDistance(term, doc.bodyTokens, Math.min(2, maxDist));
          const best = Math.min(dTitle, dBody);
          if (best <= maxDist) {
            score += 8 + (maxDist - best) * 5;
          }
        }
      }
    }

    return score;
  }

  function buildExcerpt(bodyText) {
    const plain = String(bodyText || '')
      .replace(/\s+/g, ' ')
      .trim();

    if (!plain) return '';

    const maxLen = 180;
    if (plain.length <= maxLen) return plain;
    return plain.slice(0, maxLen - 1).trimEnd() + '…';
  }

  function renderEmptyState(container, message, suggestions) {
    const suggestionItems = Array.isArray(suggestions) ? suggestions : [];
    const suggestionsHtml = suggestionItems.length
      ? `
        <div class="search-suggestions" style="margin-top: 1rem; display: flex; flex-wrap: wrap; gap: 0.6rem; justify-content: center;">
          ${suggestionItems
            .map((s) => {
              const label = s.label || s.value;
              return `<button type="button" class="btn btn-secondary" data-suggest="${escapeHtml(s.value)}">${escapeHtml(label)}</button>`;
            })
            .join('')}
        </div>
      `
      : '';

    container.innerHTML = `
      <div class="empty-state" style="margin-top: 2rem;">
        <div class="empty-state-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="44" height="44" focusable="false">
            <path d="M10 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm9.71 16.29-4.01-4.01a1 1 0 0 0-1.42 1.42l4.01 4.01a1 1 0 0 0 1.42-1.42Z" fill="currentColor"/>
          </svg>
        </div>
        <h2 style="color: var(--primary-color); margin-bottom: 0.75rem;">${escapeHtml(message)}</h2>
        <p style="margin-bottom: 0;">Try different words from the title or the article text.</p>
        ${suggestionsHtml}
      </div>
    `;
  }

  function trigramSet(text) {
    const s = `  ${safeNormalize(text)}  `;
    const grams = new Set();
    for (let i = 0; i < s.length - 2; i += 1) {
      grams.add(s.slice(i, i + 3));
    }
    return grams;
  }

  function jaccard(a, b) {
    if (!a.size || !b.size) return 0;
    let inter = 0;
    for (const x of a) if (b.has(x)) inter += 1;
    return inter / (a.size + b.size - inter);
  }

  function getSuggestions(query, docs) {
    const q = query.trim();
    if (!q) return [];

    const qGrams = trigramSet(q);
    const scored = docs
      .map((d) => {
        const sim = jaccard(qGrams, d.titleTrigrams);
        return { id: d.id, title: d.title, sim };
      })
      .filter((x) => x.sim >= 0.22)
      .sort((a, b) => b.sim - a.sim)
      .slice(0, 5);

    return scored.map((s) => ({ label: s.title, value: s.title }));
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function formatDate(date) {
    try {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString('en-US', options);
    } catch {
      return '';
    }
  }

  function renderResults(resultsEl, summaryEl, query, results) {
    const q = query.trim();

    if (!q) {
      summaryEl.textContent = '';
      renderEmptyState(resultsEl, 'Start typing to search', []);
      return;
    }

    if (!results.length) {
      summaryEl.textContent = `No results for "${q}".`;
      const suggestions = getSuggestions(q, getAllArticlesForSearch());
      renderEmptyState(resultsEl, `No results for "${q}"`, suggestions);

      resultsEl.querySelectorAll('[data-suggest]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const suggested = btn.getAttribute('data-suggest') || '';
          const input = document.getElementById('searchInput');
          if (input) input.value = suggested;
          setQueryParam('q', suggested);
          runSearch(suggested);
        });
      });
      return;
    }

    summaryEl.textContent = `Showing ${results.length} result${results.length === 1 ? '' : 's'} for "${q}".`;

    resultsEl.innerHTML = results
      .map((r) => {
        const href = r.href || (r.type === 'article'
          ? `article-detail.html?id=${encodeURIComponent(r.id)}`
          : '#');

        const date = r.date ? formatDate(r.date) : '';
        const meta = [];

        if (r.type === 'article') {
          if (date) meta.push({ icon: '📅', value: date });
          if (r.readTime) meta.push({ icon: '⏱', value: r.readTime });
          meta.push({ icon: '📝', value: 'Article' });
        } else {
          meta.push({ icon: '📄', value: r.pageTypeLabel || 'Page' });
          if (r.href) meta.push({ icon: '🔗', value: r.href });
        }

        return `
          <article class="article-card" onclick="window.location.href='${href}'" role="link" tabindex="0" aria-label="Open result: ${escapeHtml(r.title)}">
            <div class="article-header">
              <h2 class="article-title">${escapeHtml(r.title)}</h2>
              <div class="article-meta">
                ${meta.map(item => `<span>${item.icon} ${escapeHtml(item.value)}</span>`).join('')}
              </div>
            </div>
            <p class="article-excerpt">${escapeHtml(r.excerpt)}</p>
            <a class="read-more" href="${href}">${r.type === 'article' ? 'Read Article' : 'Open Page'}</a>
          </article>
        `;
      })
      .join('');

    // Keyboard accessibility for the clickable card
    resultsEl.querySelectorAll('.article-card').forEach(card => {
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          card.click();
        }
      });
    });
  }

  function makeIndexItem(raw) {
    const bodyText = raw.bodyText || '';
    const title = raw.title || '';
    const titleNorm = safeNormalize(title);
    const bodyNorm = safeNormalize(bodyText);

    const titleTokens = tokenize(title);
    const bodyTokensRaw = tokenize(bodyText);
    const bodyTokens = [];
    const seen = new Set();
    for (const tok of bodyTokensRaw) {
      if (seen.has(tok)) continue;
      seen.add(tok);
      bodyTokens.push(tok);
      if (bodyTokens.length >= 450) break;
    }

    return {
      ...raw,
      title,
      bodyText,
      titleNorm,
      bodyNorm,
      titleTokens,
      bodyTokens,
      titleTrigrams: trigramSet(title),
    };
  }

  function getAllArticlesForSearch() {
    if (cachedIndex) return cachedIndex;

    if (typeof ArticleDetail !== 'function') {
      throw new Error('ArticleDetail is not available. Ensure js/article-detail.js is loaded.');
    }

    const detail = new ArticleDetail({ autoInit: false });
    const articles = typeof detail.getAllArticles === 'function'
      ? detail.getAllArticles()
      : (typeof detail.getAllArticleIds === 'function'
        ? detail.getAllArticleIds().map((id) => detail.getArticleById(id)).filter(Boolean)
        : []);

    const items = articles
      .map((article) => makeIndexItem({
        type: 'article',
        id: article.id,
        href: `article-detail.html?id=${encodeURIComponent(article.id)}`,
        title: article.title,
        bodyText: stripHtml(article.body || ''),
        date: article.date,
        readTime: article.readTime,
      }))
      .filter((a) => a && a.id && a.title);

    cachedIndex = items;
    return cachedIndex;
  }

  async function crawlHtmlPagesForSearch() {
    const seedPaths = new Set([
      'index.html',
      'articles.html',
      'books.html',
      'videos.html',
      'images.html',
      'fatwah.html',
      'hadith.html',
      'encyclopedia.html'
    ]);

    const excluded = new Set(['search.html', 'article-detail.html']);
    const visited = new Set();
    const queue = [];

    for (const p of seedPaths) queue.push(p);

    const maxPages = 80;
    const discovered = [];

    while (queue.length && visited.size < maxPages) {
      const path = queue.shift();
      if (!path || visited.has(path) || excluded.has(path)) continue;
      visited.add(path);

      let html = '';
      try {
        const res = await fetch(path, { cache: 'no-cache' });
        if (!res.ok) continue;
        const contentType = (res.headers.get('content-type') || '').toLowerCase();
        if (contentType && !contentType.includes('text/html')) {
          // Local servers sometimes omit content-type; tolerate empty
          if (contentType !== '') continue;
        }
        html = await res.text();
      } catch {
        continue;
      }

      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const rawTitle = (doc.querySelector('title')?.textContent || '').trim();
      const h1 = (doc.querySelector('main h1, h1')?.textContent || '').trim();
      const title = h1 || rawTitle || path;

      const text = stripAndNormalizeDomText(doc);
      const excerpt = buildExcerpt(text);

      // Add this page into index
      discovered.push(makeIndexItem({
        type: 'page',
        id: path,
        href: path,
        title,
        bodyText: text,
        pageTypeLabel: 'Page',
        excerpt,
      }));

      // Discover more internal html links
      doc.querySelectorAll('a[href]').forEach((a) => {
        const href = a.getAttribute('href') || '';
        if (!isProbablyHtmlUrl(href)) return;
        const rel = toRelativeHtmlPath(href);
        if (!rel) return;
        if (excluded.has(rel)) return;
        if (!visited.has(rel)) queue.push(rel);
      });
    }

    return discovered;
  }

  async function ensureIndexBuilt(summaryEl) {
    if (cachedIndex) return cachedIndex;
    if (indexBuildPromise) return indexBuildPromise;

    indexBuildPromise = (async () => {
      const items = getAllArticlesForSearch();
      if (summaryEl) summaryEl.textContent = 'Indexing site pages…';
      const pages = await crawlHtmlPagesForSearch();
      cachedIndex = [...items, ...pages]
        .filter((x) => x && x.title)
        .reduce((acc, item) => {
          const key = `${item.type}:${item.id}`;
          if (acc._seen.has(key)) return acc;
          acc._seen.add(key);
          acc.items.push(item);
          return acc;
        }, { items: [], _seen: new Set() }).items;
      return cachedIndex;
    })();

    return indexBuildPromise;
  }

  async function runSearch(query) {
    const resultsEl = document.getElementById('searchResults');
    const summaryEl = document.getElementById('searchSummary');

    if (!resultsEl || !summaryEl) return;

    const q = query.trim();
    const docs = await ensureIndexBuilt(summaryEl);

    const scored = docs
      .map((a) => {
        const s = scoreArticle(a, q);
        return {
          ...a,
          score: s,
          excerpt: a.excerpt || buildExcerpt(a.bodyText),
        };
      })
      .filter((a) => a.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 30);

    renderResults(resultsEl, summaryEl, q, scored);
  }

  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('searchForm');
    const input = document.getElementById('searchInput');

    if (!form || !input) return;

    const initialQ = getQueryParam('q');
    if (initialQ) {
      input.value = initialQ;
    }

    runSearch(initialQ);

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const q = input.value || '';
      setQueryParam('q', q);
      runSearch(q);
    });

    // Convenience: search while typing (no extra UI)
    let typingTimer = null;
    input.addEventListener('input', () => {
      window.clearTimeout(typingTimer);
      typingTimer = window.setTimeout(() => {
        const q = input.value || '';
        setQueryParam('q', q);
        runSearch(q);
      }, 200);
    });
  });
})();
