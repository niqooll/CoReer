// src/script/app.js
import routes from './routes/routes.js';
import { getCurrentUser, logout as performLogout } from './models/auth-model.js';
import { applyViewTransition } from './utils/index.js';

class App {
  constructor({ appContainerId = 'app' } = {}) {
    this.appContainer = document.getElementById(appContainerId);
    // Tambahkan '/FAQ' ke rute publik agar bisa diakses tanpa login
    this.publicRoutes = ['/', '/login', '/register', '/FAQ'];
    this._bindEvents();
  }

  _bindEvents() {
    // Pastikan listener logout menangani kedua tombol (desktop dan mobile)
    const logoutBtnDesktop = document.getElementById('logout-btn-desktop');
    const logoutBtnMobile = document.getElementById('logout-btn-mobile');

    if (logoutBtnDesktop) {
      logoutBtnDesktop.addEventListener('click', () => this.logout());
    }
    if (logoutBtnMobile) {
      logoutBtnMobile.addEventListener('click', () => this.logout());
    }

    window.addEventListener('hashchange', () => {
      this.updateNavLinks();
      this.renderPage();
    });
  }

  updateNavLinks() {
    const user = getCurrentUser();
    console.log('--- updateNavLinks called ---');
    console.log('Current user status:', user); // Log status pengguna

    const landingLink = document.getElementById('landing-link');
    const faqLink = document.getElementById('FAQ-link');
    const loginLink = document.getElementById('login-link');
    const registerLink = document.getElementById('register-link');
    const profileDropdownDesktop = document.getElementById('profile-dropdown-desktop');
    const profileLinksMobile = document.getElementById('profile-links-mobile');

    if (user) {
      // Jika user login:
      // Tampilkan Home dan FAQ
      if (landingLink) landingLink.style.display = 'block';
      if (faqLink) faqLink.style.display = 'block';

      // Sembunyikan Login dan Register
      if (loginLink) loginLink.style.display = 'none';
      if (registerLink) registerLink.style.display = 'none';

      // Tampilkan bagian profil (Desktop atau Mobile akan diatur oleh Bootstrap d-none/d-lg-block)
      // Mengatur display ke string kosong ("") akan menghapus properti style inline
      // sehingga kelas responsif Bootstrap (d-none, d-lg-block, d-lg-none) mengambil alih.
      if (profileDropdownDesktop) {
        profileDropdownDesktop.style.display = ''; // Biarkan Bootstrap memutuskan tampilan
        console.log('Profile Desktop display reset to "" for Bootstrap control');
      }
      if (profileLinksMobile) {
        profileLinksMobile.style.display = ''; // Biarkan Bootstrap memutuskan tampilan
        console.log('Profile Mobile display reset to "" for Bootstrap control');
      }
    } else {
      // Jika user belum login:
      // Sembunyikan Home
      if (landingLink) landingLink.style.display = 'none';

      // Tampilkan FAQ, Login, dan Register
      if (faqLink) faqLink.style.display = 'block';
      if (loginLink) loginLink.style.display = 'block';
      if (registerLink) registerLink.style.display = 'block';

      // Sembunyikan kedua bagian profil secara eksplisit
      if (profileDropdownDesktop) {
        profileDropdownDesktop.style.display = 'none';
        console.log('Profile Desktop set to display: none (logged out)');
      }
      if (profileLinksMobile) {
        profileLinksMobile.style.display = 'none';
        console.log('Profile Mobile set to display: none (logged out)');
      }
    }
    console.log('--- End updateNavLinks ---');
  }

  async renderPage() {
    const user = getCurrentUser();
    const hash = window.location.hash || '#/';
    const path = hash.slice(1);

    // Redirect ke halaman login jika user belum login dan mencoba mengakses rute non-publik
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