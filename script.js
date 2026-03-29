// ============================================
// MAIN APPLICATION LOGIC
// ============================================

(function () {
  'use strict';

  // --- State ---
  let currentCategory = 'All';
  let articles = [];

  // --- Init ---
  document.addEventListener('DOMContentLoaded', () => {
    loadArticles();
    renderTickerBar();
    renderBreakingNews();
    renderCategoryTabs();
    renderArticles();
    initSearch();
    initMobileNav();
    initNewsletter();
  });

  // --- Load articles from localStorage + sample data ---
  function loadArticles() {
    const stored = JSON.parse(localStorage.getItem('blog_articles') || '[]');
    // Merge: use stored if any, else fallback to sample
    if (stored.length > 0) {
      articles = stored;
    } else {
      articles = [...SAMPLE_ARTICLES];
      localStorage.setItem('blog_articles', JSON.stringify(articles));
    }
  }

  // --- Ticker Bar ---
  function renderTickerBar() {
    const container = document.getElementById('ticker-bar');
    if (!container) return;

    const tickerHTML = MARKET_DATA.map((item, i) => {
      const divider = i < MARKET_DATA.length - 1 ? '<span class="ticker-divider"></span>' : '';
      return `
        <span class="ticker-item">
          <span class="ticker-item__symbol">${item.symbol}</span>
          <span class="ticker-item__price">${item.price}</span>
          <span class="ticker-item__change ${item.direction}">${item.change}</span>
        </span>
        ${divider}
      `;
    }).join('');

    // Duplicate for seamless scroll
    container.innerHTML = `<div class="ticker-bar__track">${tickerHTML}${tickerHTML}</div>`;
  }

  // --- Breaking News ---
  function renderBreakingNews() {
    const container = document.getElementById('breaking-news');
    if (!container) return;

    const newsText = BREAKING_NEWS.join('  ●  ');
    container.innerHTML = `
      <span class="breaking-banner__tag">Breaking</span>
      <span class="breaking-banner__dot"></span>
      <span class="breaking-banner__text">${newsText}  ●  ${newsText}</span>
    `;
  }

  // --- Category Tabs ---
  function renderCategoryTabs() {
    const container = document.getElementById('category-tabs');
    if (!container) return;

    container.innerHTML = CATEGORIES.map(cat => `
      <button class="category-tab${cat === currentCategory ? ' active' : ''}" data-category="${cat}">
        ${cat}
      </button>
    `).join('');

    container.addEventListener('click', (e) => {
      const tab = e.target.closest('.category-tab');
      if (!tab) return;
      currentCategory = tab.dataset.category;
      renderCategoryTabs();
      renderArticles();
    });
  }

  // --- Render Articles ---
  function renderArticles() {
    const container = document.getElementById('articles-grid');
    if (!container) return;

    const publishedArticles = articles.filter(a => a.status === 'published');
    const filtered = currentCategory === 'All'
      ? publishedArticles
      : publishedArticles.filter(a => a.category === currentCategory);

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 4rem 2rem; text-align: center;">
          <p style="color: var(--text-secondary); font-size: 1rem; font-weight: 300;">No articles found in this category.</p>
        </div>
      `;
      return;
    }

    let html = '';

    // Featured article (first one)
    const featured = filtered.find(a => a.featured) || filtered[0];
    const rest = filtered.filter(a => a.id !== featured.id);

    html += `
      <a href="article.html?id=${featured.id}" class="article-card--featured" id="article-featured">
        <img class="article-card__image" src="${featured.image || generatePlaceholderImage(featured.category)}" alt="${featured.title}" />
        <div class="article-card__content">
          <span class="article-card__category">${featured.category}</span>
          <h2 class="article-card__title">${featured.title}</h2>
          <p class="article-card__excerpt">${featured.excerpt}</p>
          <div class="article-card__meta">
            <span>${featured.author}</span>
            <span class="article-card__meta-divider"></span>
            <span>${formatDate(featured.date)}</span>
            <span class="article-card__meta-divider"></span>
            <span>${featured.readTime} read</span>
          </div>
        </div>
      </a>
    `;

    // Regular cards
    rest.forEach(article => {
      html += `
        <a href="article.html?id=${article.id}" class="article-card" id="article-${article.id}">
          <img class="article-card__image" src="${article.image || generatePlaceholderImage(article.category)}" alt="${article.title}" />
          <div class="article-card__content">
            <span class="article-card__category">${article.category}</span>
            <h3 class="article-card__title">${article.title}</h3>
            <p class="article-card__excerpt">${article.excerpt}</p>
            <div class="article-card__meta">
              <span>${article.author}</span>
              <span class="article-card__meta-divider"></span>
              <span>${formatDate(article.date)}</span>
            </div>
          </div>
        </a>
      `;
    });

    container.innerHTML = html;
  }

  // --- Search ---
  function initSearch() {
    const searchBtn = document.getElementById('search-btn');
    const overlay = document.getElementById('search-overlay');
    const closeBtn = document.getElementById('search-close');
    const input = document.getElementById('search-input');
    const resultsContainer = document.getElementById('search-results');

    if (!searchBtn || !overlay) return;

    searchBtn.addEventListener('click', () => {
      overlay.classList.add('active');
      setTimeout(() => input.focus(), 100);
    });

    closeBtn.addEventListener('click', () => {
      overlay.classList.remove('active');
      input.value = '';
      resultsContainer.innerHTML = '';
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('active')) {
        overlay.classList.remove('active');
        input.value = '';
        resultsContainer.innerHTML = '';
      }
    });

    input.addEventListener('input', () => {
      const query = input.value.toLowerCase().trim();
      if (query.length < 2) {
        resultsContainer.innerHTML = '';
        return;
      }

      const matches = articles.filter(a =>
        a.status === 'published' && (
          a.title.toLowerCase().includes(query) ||
          a.excerpt.toLowerCase().includes(query) ||
          a.category.toLowerCase().includes(query) ||
          a.author.toLowerCase().includes(query)
        )
      );

      if (matches.length === 0) {
        resultsContainer.innerHTML = `
          <div style="padding: 2rem 0; color: var(--text-secondary); font-size: 0.85rem;">
            No results found for "${input.value}"
          </div>
        `;
        return;
      }

      resultsContainer.innerHTML = matches.map(a => `
        <a href="article.html?id=${a.id}" class="search-result-item">
          <span class="search-result-item__category">${a.category}</span>
          <span class="search-result-item__title">${a.title}</span>
        </a>
      `).join('');
    });
  }

  // --- Mobile Nav ---
  function initMobileNav() {
    const hamburger = document.getElementById('nav-hamburger');
    const links = document.getElementById('nav-links');
    if (!hamburger || !links) return;

    hamburger.addEventListener('click', () => {
      links.classList.toggle('mobile-open');
    });
  }

  // --- Newsletter ---
  function initNewsletter() {
    const form = document.getElementById('newsletter-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = form.querySelector('input').value;
      if (email) {
        showToast('Subscribed successfully');
        form.querySelector('input').value = '';
      }
    });
  }

  // --- Helpers ---
  function formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }

  function generatePlaceholderImage(category) {
    // Generate SVG placeholder based on category
    const colors = {
      'Markets': { bg: '#1a2332', accent: '#DC9F85' },
      'Personal Finance': { bg: '#1a2820', accent: '#6bcf7f' },
      'Economy': { bg: '#2a1f1a', accent: '#EBDCC4' },
      'World News': { bg: '#1a1a2a', accent: '#8fa5dc' },
      'Opinion': { bg: '#2a1a26', accent: '#dc8fb5' },
      'Tech': { bg: '#1a2a2a', accent: '#8fdcdc' }
    };
    const c = colors[category] || { bg: '#1e1e1e', accent: '#DC9F85' };

    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'>
      <rect fill='${c.bg}' width='800' height='450'/>
      <text x='400' y='200' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='600' fill='${c.accent}' letter-spacing='4' text-transform='uppercase'>${category.toUpperCase()}</text>
      <line x1='360' y1='230' x2='440' y2='230' stroke='${c.accent}' stroke-width='1' opacity='0.4'/>
      <rect x='200' y='260' width='400' height='1' fill='${c.accent}' opacity='0.1'/>
      <rect x='250' y='280' width='300' height='1' fill='${c.accent}' opacity='0.08'/>
      <rect x='300' y='300' width='200' height='1' fill='${c.accent}' opacity='0.05'/>
    </svg>`;

    return `data:image/svg+xml,${encodeURIComponent(svg)}`;
  }

  // --- Toast ---
  window.showToast = function (message) {
    let toast = document.getElementById('toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast';
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('visible');
    setTimeout(() => toast.classList.remove('visible'), 3000);
  };

})();
