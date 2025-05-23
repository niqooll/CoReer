// src/script/app.js
import routes from './routes/routes.js';
import AuthHelper from './utils/auth-helper.js';
import { applyViewTransition } from './utils/index.js';

class App {
  constructor({ appContainerId = 'app' } = {}) {
    this.appContainer = document.getElementById(appContainerId);
    this.publicRoutes = ['/', '/login', '/register'];
    this._bindEvents();
  }

  _bindEvents() {
    document.querySelectorAll('a.nav-link.dropdown-toggle').forEach(dropdownToggle => {
      dropdownToggle.addEventListener('click', e => e.preventDefault());
    });

    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => this.logout());
    }

    window.addEventListener('hashchange', () => {
      this.updateNavLinks();
      this.renderPage();
    });
  }

  updateNavLinks() {
    const user = AuthHelper.getCurrentUser();

    const loginLink = document.getElementById('login-link');
    const registerLink = document.getElementById('register-link');
    const profileDropdown = document.getElementById('profile-dropdown');
    const landingLink = document.getElementById('landing-link');

    if (user) {
      if (loginLink) loginLink.style.display = 'none';
      if (registerLink) registerLink.style.display = 'none';
      if (profileDropdown) profileDropdown.style.display = 'block';
      if (landingLink) landingLink.style.display = 'block';
    } else {
      if (loginLink) loginLink.style.display = 'block';
      if (registerLink) registerLink.style.display = 'block';
      if (profileDropdown) profileDropdown.style.display = 'none';
      if (landingLink) landingLink.style.display = 'none';
    }
  }

  async renderPage() {
    const user = AuthHelper.getCurrentUser();
    const hash = window.location.hash || '#/';
    const path = hash.slice(1);

    if (!user && !this.publicRoutes.includes(path)) {
      window.location.hash = '#/login';
      return;
    }

    const presenter = routes[path];

    if (!presenter) {
      this.appContainer.innerHTML = '<h1>404 Page Not Found</h1>';
      return;
    }

    await applyViewTransition('#app', async () => {
      if (typeof presenter === 'function' && presenter.prototype?.init instanceof Function) {
        const instance = new presenter(this.appContainer);
        if (instance.init instanceof Function) {
          await instance.init();
        }
      } else if (presenter.init instanceof Function) {
        await presenter.init();
      } else {
        this.appContainer.innerHTML = '<h1>Presenter Invalid</h1>';
      }
    });
  }

  logout() {
    AuthHelper.clearAuth();
    this.updateNavLinks();
    window.location.hash = '#/';
  }

  async init() {
    this.updateNavLinks();
    await this.renderPage();
  }
}

export default App;
