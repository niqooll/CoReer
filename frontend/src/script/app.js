import { getCurrentUser, logout as performLogout, verifyToken } from './models/auth-model.js';
import { applyViewTransition } from './utils/index.js';

class App {
  constructor({ appContainerId = 'app' } = {}) {
    this.appContainer = document.getElementById(appContainerId);
    this.publicRoutes = ['/', '/login', '/register', '/FAQ'];
    this._bindEvents();

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
  }

  _bindEvents() {
    const logoutBtnDesktop = document.getElementById('logout-btn-desktop');
    const logoutBtnMobile = document.getElementById('logout-btn-mobile');

    if (logoutBtnDesktop) {
      logoutBtnDesktop.addEventListener('click', (event) => {
        event.preventDefault();
        this.confirmLogout();
      });
    }
    if (logoutBtnMobile) {
      logoutBtnMobile.addEventListener('click', (event) => {
        event.preventDefault();
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

      if (profileDropdownDesktop) {
        profileDropdownDesktop.classList.remove('d-none');
      }
      if (profileLinksMobile) {
        profileLinksMobile.classList.remove('d-none');
      }
    } else {
      if (landingLink) landingLink.style.display = 'none';
      if (historyLink) historyLink.style.display = 'none';

      if (faqLink) faqLink.style.display = 'block';
      if (loginLink) loginLink.style.display = 'block';
      if (registerLink) registerLink.style.display = 'block';

      if (profileDropdownDesktop) {
        profileDropdownDesktop.classList.add('d-none');
      }
      if (profileLinksMobile) {
        profileLinksMobile.classList.add('d-none');
      }
    }
  }

  async renderPage() {
    let user = getCurrentUser();
    const hash = window.location.hash || '#/';
    const path = hash.slice(1);

    if (user && user.token) {
      const isTokenValid = await verifyToken();
      if (!isTokenValid) {
        console.warn('Token kedaluwarsa atau tidak valid. Memaksa logout dan mengarahkan ke halaman login.');
        performLogout();
        user = null;
        window.location.hash = '#/login';
        return;
      }
    }

    if (!user && !this.publicRoutes.includes(path)) {
      window.location.hash = '#/login';
      return;
    }

    let PresenterModule;
    try {
      const module = await this.routePresenters[path];
      PresenterModule = module;

      if (!PresenterModule) {
        this.appContainer.innerHTML = '<h1>404 Page Not Found</h1>';
        return;
      }
    } catch (error) {
      console.error(`Gagal memuat presenter untuk path: ${path}`, error);
      this.appContainer.innerHTML = '<h1>Gagal memuat halaman</h1>';
      return;
    }

    await applyViewTransition('#app', async () => {
      if (typeof PresenterModule === 'function' && PresenterModule.prototype?.init instanceof Function) {
        const instance = new PresenterModule(this.appContainer);
        if (instance.init instanceof Function) {
          await instance.init();
        }
      } else if (PresenterModule && typeof PresenterModule.init === 'function') {
        await PresenterModule.init(this.appContainer);
      } else {
        this.appContainer.innerHTML = '<h1>Presenter Tidak Valid</h1>';
      }
    });
  }

  confirmLogout() {
    const isConfirmed = window.confirm('Apakah Anda yakin ingin keluar dari akun?');
    if (isConfirmed) {
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