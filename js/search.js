/* ============================================
   SEARCH.JS - ARTICLE SEARCH PAGE
   ============================================ */

(function () {
  const MAX_ARTICLE_ID = 41;

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
    const lower = String(value).toLowerCase();

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
        .replace(/[\u0300-\u036f]+/g, '')
        .replace(/[^0-9a-z\u00C0-\u024F\u1E00-\u1EFF\s]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
    }
  }

  function stripHtml(html) {
    if (!html) return '';
    const temp = document.createElement('div');
    temp.innerHTML = html;
    return temp.textContent || temp.innerText || '';
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

  function scoreArticle({ titleText, bodyText }, query) {
    const q = safeNormalize(query);
    if (!q) return 0;

    const title = safeNormalize(titleText);
    const body = safeNormalize(bodyText);

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

  function renderEmptyState(container, message) {
    container.innerHTML = `
      <div class="empty-state" style="margin-top: 2rem;">
        <div class="empty-state-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="44" height="44" focusable="false">
            <path d="M10 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm9.71 16.29-4.01-4.01a1 1 0 0 0-1.42 1.42l4.01 4.01a1 1 0 0 0 1.42-1.42Z" fill="currentColor"/>
          </svg>
        </div>
        <h2 style="color: var(--primary-color); margin-bottom: 0.75rem;">${escapeHtml(message)}</h2>
        <p style="margin-bottom: 0;">Try different words from the title or the article text.</p>
      </div>
    `;
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
      renderEmptyState(resultsEl, 'Start typing to search');
      return;
    }

    if (!results.length) {
      summaryEl.textContent = `No results for "${q}".`;
      renderEmptyState(resultsEl, `No results for "${q}"`);
      return;
    }

    summaryEl.textContent = `Showing ${results.length} result${results.length === 1 ? '' : 's'} for "${q}".`;

    resultsEl.innerHTML = results
      .map((r) => {
        const href = `article-detail.html?id=${encodeURIComponent(r.id)}`;
        const date = r.date ? formatDate(r.date) : '';
        const meta = [
          date ? { icon: '📅', value: date } : null,
          r.readTime ? { icon: '⏱', value: r.readTime } : null
        ].filter(Boolean);

        return `
          <article class="article-card" onclick="window.location.href='${href}'" role="link" tabindex="0" aria-label="Open article: ${escapeHtml(r.title)}">
            <div class="article-header">
              <h2 class="article-title">${escapeHtml(r.title)}</h2>
              <div class="article-meta">
                ${meta.map(item => `<span>${item.icon} ${escapeHtml(item.value)}</span>`).join('')}
              </div>
            </div>
            <p class="article-excerpt">${escapeHtml(r.excerpt)}</p>
            <a class="read-more" href="${href}">Read Article</a>
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

  function getAllArticlesForSearch() {
    if (typeof ArticleDetail !== 'function') {
      throw new Error('ArticleDetail is not available. Ensure js/article-detail.js is loaded.');
    }

    const detail = new ArticleDetail({ autoInit: false });
    const items = [];

    for (let id = 1; id <= MAX_ARTICLE_ID; id += 1) {
      const article = detail.getArticleById(id);
      if (!article || !article.title) continue;

      const bodyText = stripHtml(article.body || '');
      items.push({
        id: article.id || id,
        title: article.title,
        bodyText,
        date: article.date,
        readTime: article.readTime,
      });
    }

    return items;
  }

  function runSearch(query) {
    const resultsEl = document.getElementById('searchResults');
    const summaryEl = document.getElementById('searchSummary');

    if (!resultsEl || !summaryEl) return;

    const q = query.trim();
    const articles = getAllArticlesForSearch();

    const scored = articles
      .map((a) => {
        const s = scoreArticle({ titleText: a.title, bodyText: a.bodyText }, q);
        return {
          ...a,
          score: s,
          excerpt: buildExcerpt(a.bodyText),
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
