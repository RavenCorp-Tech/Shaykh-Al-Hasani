/* ============================================
   ARTICLES.JS - ARTICLES PAGE FUNCTIONALITY
   ============================================ */

class ArticlesManager {
  constructor() {
    this.articleData = this.getArticleData();
    this.init();
  }

  init() {
    this.renderArticles();
    this.setupArticleInteractions();
  }

  /* ============================================
     ARTICLE DATA
     ============================================ */

  getArticleData() {
    return [
      {
        id: 1,
        slug: 'weakening-hadith-ammar-rebellious',
        title: 'Weakening the Ḥadīth: "ʿAmmār will be killed by the rebellious group"',
        excerpt: 'What has been reported of Ibn al-Madīnī declaring it authentic is not established from him. The stronger view regarding it from Aḥmad—and likewise what is preserved from Ibn Maʿīn, Abū Khaythamah, and al-Muʿayṭī—is that it is weak and rejected. This is also the apparent approach of al-Khallāl and Ibn al-Jawzī in weakening it and rejecting it, and al-Bukhārī turned away from it…',
        date: new Date('2024-10-21'),
        author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
        category: 'Ḥadīth Sciences',
        featured: true,
        readTime: '45 min read'
      },
      {
        id: 2,
        slug: 'weakening-hadith-none-loves-you',
        title: 'Weakening of the ḥadīth: “None loves you except a believer, and none hates you except a hypocrite”',
        excerpt: 'Narrated to us (ḥaddathanā): Wakīʿ narrated to us, al-Aʿmash narrated to us, from ʿAdī ibn Thābit, from Zir ibn Ḥubaysh, from ʿAlī, who said: The Prophet ﷺ made a covenant with me: “None loves you except a believer, and none hates you except a hypocrite.”',
        date: new Date('2025-10-21'),
        author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
        category: 'Ḥadīth Sciences',
        featured: true,
        readTime: '12 min read'
      },
      {
        id: 3,
        slug: 'weakening-hadith-hasan-husayn-leaders-youth-paradise',
        title: 'Weakening of the ḥadīth: “Al-Ḥasan and al-Ḥusayn are the leaders of the youth of Paradise”',
        excerpt: 'Ḥadīth: “Al-Ḥasan and al-Ḥusayn are the leaders of the youth of Paradise” [A ḥadīth that is not authentic]. This report is defective, and its routes do not authenticate one another according to the critical analysis presented.',
        date: new Date('2025-06-21'),
        author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
        category: 'Ḥadīth Sciences',
        featured: true,
        readTime: '20 min read'
      },
      {
        id: 4,
        slug: 'much-spread-today-neglected-sunnah',
        title: 'Much of what is spread today and labeled as “a neglected Sunnah”...',
        excerpt: 'Much of what is spread today and labeled as “a neglected Sunnah” is, upon verification, without any basis. Rather, they are false, denounced, fabricated, and rejected ḥadīths which the early ḥadīth masters gave no weight to and did not consider.',
        date: new Date('2024-03-21'),
        author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
        category: 'Ḥadīth Sciences',
        featured: true,
        readTime: '8 min read'
      },
      {
        id: 5,
        slug: 'what-has-been-reported-laughter-prophet',
        title: '[What has been reported regarding the laughter of the Prophet ﷺ]',
        excerpt: 'There have come various descriptions regarding the manner of the Prophet’s ﷺ laughter, including: smiling, laughing, laughing until his molar teeth became visible, and at times he would smile the smile of one who is displeased...',
        date: new Date('2024-03-21'),
        author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
        category: 'Ḥadīth Sciences',
        featured: true,
        readTime: '6 min read'
      },
      {
        id: 6,
        slug: 'weak-inauthentic-reports-in-the-sirah',
        title: 'Weak (Inauthentic) Reports in the Sīrah',
        excerpt: 'Weak (Inauthentic) Reports in the Sīrah: a critical numbered listing of widespread narratives that are false, munkar, fabricated, weak, or not authentic.',
        date: new Date('2024-03-21'),
        author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
        category: 'Sīrah & Ḥadīth Criticism',
        featured: true,
        readTime: '30 min read'
      },
      {
        id: 7,
        slug: 'hadith-istighfar-forgiven-even-fled-battlefield',
        title: 'Ḥadīth: “Whoever says: ‘I seek forgiveness from Allah, besides whom there is no deity, the Ever-Living, the Sustainer, and I repent to Him,’ he will be forgiven-even if he fled from the battlefield.”',
        excerpt: 'This report is not authentic, neither as marfūʿ nor as mawqūf. Its transmitted routes are either obscure or defective due to inconsistency and interruption in narration.',
        date: new Date('2024-03-22'),
        author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
        category: 'Ḥadīth Criticism',
        featured: true,
        readTime: '7 min read'
      },
      {
        id: 8,
        slug: 'hadith-alhamdulillah-equal-to-what-he-created',
        title: 'Ḥadīth: “All praise is due to Allah, equal to the number of what He created, and all praise is due to Allah filling what He created…”',
        excerpt: 'A hadith-critical review showing this report is not established: its known routes are either disconnected or very weak, with chains containing unknown, weak, or abandoned narrators.',
        date: new Date('2024-03-22'),
        author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
        category: 'Ḥadīth Criticism',
        featured: true,
        readTime: '8 min read'
      },
      {
        id: 9,
        slug: 'hadith-allah-perfect-my-character',
        title: 'Ḥadīth: “O Allah, You have perfected my creation, so perfect my character.”',
        excerpt: 'This report is judged defective: its transmitted routes are disputed and weak, with reliance on unknown narrators and chains containing accused or rejected transmitters.',
        date: new Date('2024-03-22'),
        author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
        category: 'Ḥadīth Criticism',
        featured: true,
        readTime: '6 min read'
      },
      {
        id: 10,
        slug: 'hadith-indeed-your-lord-hayy-karim',
        title: 'Ḥadīth: “Indeed your Lord is ḥayy (modest/shy) and karīm (generous); He is shy that when His servant raises his hands to Him, He returns them empty-or he said: disappointed.”',
        excerpt: 'A critical review of this narration and its variants: the principal marfūʿ route is weak and opposed by a mawqūf version, while supporting chains contain severe weakness and do not strengthen one another.',
        date: new Date('2024-03-22'),
        author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
        category: 'Ḥadīth Criticism',
        featured: true,
        readTime: '8 min read'
      }
    ];
  }

  /* ============================================
     RENDER ARTICLES
     ============================================ */

  renderArticles() {
    const container = document.querySelector('.articles-container');
    if (!container) return;

    container.innerHTML = '';

    if (this.articleData.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">📚</div>
          <p>No articles available yet.</p>
          <p style="font-size: 0.9rem; color: var(--text-tertiary);">Check back soon for new content.</p>
        </div>
      `;
      return;
    }

    this.articleData.forEach((article, index) => {
      const card = this.createArticleCard(article, index);
      container.appendChild(card);
    });
  }

  createArticleCard(article, index) {
    const card = document.createElement('div');
    card.className = 'article-card';
    card.style.animationDelay = `${index * 0.1}s`;

    card.innerHTML = `
      <div class="article-header">
        <div class="article-tags" style="margin-bottom: 0.75rem;">
          <span style="
            display: inline-block;
            background: rgba(212, 165, 116, 0.1);
            color: var(--accent-color);
            padding: 0.25rem 0.75rem;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 600;
          ">${article.category}</span>
        </div>
        <h3 class="article-title">${this.escapeHtml(article.title)}</h3>
        <div class="article-meta">
          <span>👤 ${article.author}</span>
          <span>⏱️ ${article.readTime}</span>
        </div>
      </div>
      <p class="article-excerpt">${this.escapeHtml(article.excerpt)}</p>
      <a href="article-detail.html?id=${article.id}" class="read-more">Read Full Article</a>
    `;

    // Add click interaction
    card.addEventListener('click', () => {
      navigateTo(`article-detail.html?id=${article.id}`);
    });

    return card;
  }

  /* ============================================
     ARTICLE INTERACTIONS
     ============================================ */

  setupArticleInteractions() {
    const cards = document.querySelectorAll('.article-card');

    cards.forEach(card => {
      // Hover effect
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(8px)';
      });

      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
      });

      // Keyboard navigation
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          const link = card.querySelector('.read-more');
          if (link) {
            e.preventDefault();
            navigateTo(link.href);
          }
        }
      });
    });
  }

  /* ============================================
     UTILITY METHODS
     ============================================ */

  formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  }

  getTimeAgo(date) {
    const now = new Date();
    const diff = now - date;

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (years > 0) return years === 1 ? '1 year ago' : `${years} years ago`;
    if (months > 0) return months === 1 ? '1 month ago' : `${months} months ago`;
    if (weeks > 0) return weeks === 1 ? '1 week ago' : `${weeks} weeks ago`;
    if (days > 0) return days === 1 ? '1 day ago' : `${days} days ago`;
    if (hours > 0) return hours === 1 ? '1 hour ago' : `${hours} hours ago`;
    if (minutes > 0) return minutes === 1 ? '1 minute ago' : `${minutes} minutes ago`;
    return 'just now';
  }

  escapeHtml(text) {
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.articlesManager = new ArticlesManager();
});

/* ============================================
   SEARCH AND FILTER FUNCTIONALITY
   ============================================ */

class ArticleSearch {
  constructor() {
    this.searchInput = document.querySelector('.article-search');
    this.filterBtns = document.querySelectorAll('.filter-btn');
    this.setupSearchAndFilter();
  }

  setupSearchAndFilter() {
    if (this.searchInput) {
      this.searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        this.filterArticles(query);
      });
    }

    this.filterBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.filterBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        this.filterArticlesByCategory(e.target.dataset.category);
      });
    });
  }

  filterArticles(query) {
    const articles = document.querySelectorAll('.article-card');
    articles.forEach(article => {
      const title = article.querySelector('.article-title').textContent.toLowerCase();
      const excerpt = article.querySelector('.article-excerpt').textContent.toLowerCase();

      if (title.includes(query) || excerpt.includes(query)) {
        article.style.display = '';
        article.style.opacity = '1';
      } else {
        article.style.opacity = '0.3';
      }
    });
  }

  filterArticlesByCategory(category) {
    const articles = document.querySelectorAll('.article-card');
    articles.forEach(article => {
      const articleCategory = article.dataset.category;
      if (category === 'all' || articleCategory === category) {
        article.style.display = '';
      } else {
        article.style.display = 'none';
      }
    });
  }
}

// Initialize search if elements exist
document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.article-search') || document.querySelector('.filter-btn')) {
    window.articleSearch = new ArticleSearch();
  }
});
