import { getCurrentUser, logout as performLogout, verifyToken } from './models/auth-model.js';
import { applyViewTransition } from './utils/index.js';

class App {
  constructor({ appContainerId = 'app', bootstrapInstance } = {}) {
    this.appContainer = document.getElementById(appContainerId);
    this.publicRoutes = ['/', '/login', '/register', '/FAQ'];
    this.bootstrap = bootstrapInstance;

    this.routePresenters = {
      '/': import('./presenters/landing-presenter.js').then(m => m.default),
      '/landing': import('./presenters/landing-presenter.js').then(m => m.default),
      '/login': import('./presenters/login-presenter.js').then(m => m.default),
      '/register': import('./presenters/register-presenter.js').then(m => m.default),
      '/FAQ': import('./presenters/faq-presenter.js').then(m => m.default),
      '/main': import('./presenters/main-presenter.js').then(m => m.default),
      '/edit-profile': import('./presenters/edit-profile-presenter.js').then(m => m.default),
      '/history': import('./presenters/history-presenter.js').then(m => m.default),
    };

    this._bindEvents();
  }

  _bindEvents() {
    const logoutBtnDesktop = document.getElementById('logout-btn-desktop');
    const logoutBtnMobile = document.getElementById('logout-btn-mobile');

    if (logoutBtnDesktop) {
      logoutBtnDesktop.addEventListener('click', (e) => {
        e.preventDefault();
        this.confirmLogout();
      });
    }

    if (logoutBtnMobile) {
      logoutBtnMobile.addEventListener('click', (e) => {
        e.preventDefault();
        this.confirmLogout();
      });
    }

    window.addEventListener('hashchange', () => {
      this.updateNavLinks();
      this.renderPage();
    });

    window.addEventListener('DOMContentLoaded', () => {
      this.updateNavLinks();
      this.renderPage();
    });

    // Collapse navbar on link click
    const navbarCollapse = document.getElementById('navbarNav');
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
          const bsCollapse = this.bootstrap.Collapse.getInstance(navbarCollapse) || new this.bootstrap.Collapse(navbarCollapse, { toggle: false });
          bsCollapse.hide();
        }
      });
    });
  }

  updateNavLinks() {
    const user = getCurrentUser();

    const landingLink = document.getElementById('landing-link');
    const faqLink = document.getElementById('FAQ-link');
    const loginLink = document.getElementById('login-link');
    const registerLink = document.getElementById('register-link');
    const profileDropdownDesktop = document.getElementById('profile-dropdown-desktop');
    const profileLinksMobile = document.getElementById('profile-links-mobile');
    const historyLink = document.getElementById('history-link');

    if (user) {
      if (landingLink) landingLink.style.display = 'block';
      if (faqLink) faqLink.style.display = 'block';
      if (historyLink) historyLink.style.display = 'block';

      if (loginLink) loginLink.style.display = 'none';
      if (registerLink) registerLink.style.display = 'none';

      if (profileDropdownDesktop) profileDropdownDesktop.classList.remove('d-none');
      if (profileLinksMobile) profileLinksMobile.classList.remove('d-none');
    } else {
      if (landingLink) landingLink.style.display = 'none';
      if (historyLink) historyLink.style.display = 'none';

      if (faqLink) faqLink.style.display = 'block';
      if (loginLink) loginLink.style.display = 'block';
      if (registerLink) registerLink.style.display = 'block';

      if (profileDropdownDesktop) profileDropdownDesktop.classList.add('d-none');
      if (profileLinksMobile) profileLinksMobile.classList.add('d-none');
    }
  }

  async renderPage() {
    let user = getCurrentUser();
    const hash = window.location.hash || '#/';
    const path = hash.slice(1);

    if (user?.token) {
      const valid = await verifyToken();
      if (!valid) {
        console.warn('Token invalid, logging out');
        performLogout();
        this.updateNavLinks();
        window.location.hash = '#/login';
        return;
      }
    }

    if (!user && !this.publicRoutes.includes(path)) {
      window.location.hash = '#/login';
      return;
    }

    try {
      const module = await this.routePresenters[path];
      if (!module) {
        this.appContainer.innerHTML = '<h1>404 Page Not Found</h1>';
        return;
      }

      await applyViewTransition('#app', async () => {
        if (typeof module === 'function' && module.prototype?.init) {
          const presenter = new module(this.appContainer);
          await presenter.init();
        } else if (module?.init) {
          await module.init(this.appContainer);
        } else {
          this.appContainer.innerHTML = '<h1>Invalid Presenter</h1>';
        }
      });
    } catch (err) {
      console.error(`Failed to load presenter for ${path}`, err);
      this.appContainer.innerHTML = '<h1>Error Loading Page</h1>';
    }
  }

  confirmLogout() {
    if (window.confirm('Apakah Anda yakin ingin keluar dari akun?')) {
      this.logout();
    }
  }

  logout() {
    performLogout();
    this.updateNavLinks();
    window.location.hash = '#/';
  }

  async init() {
    this.updateNavLinks();
    await this.renderPage();
  }
}

export default App;
