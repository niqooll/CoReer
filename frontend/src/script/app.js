import { getCurrentUser, logout as performLogout, verifyToken } from './models/auth-model.js';
import { applyViewTransition } from './utils/index.js';

class App {
  constructor({ appContainerId = 'app' } = {}) {
    this.appContainer = document.getElementById(appContainerId);
    this.publicRoutes = ['/', '/login', '/register', '/FAQ'];
    this._bindEvents(); // Pastikan ini dipanggil di konstruktor

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
    // Event listener untuk tombol logout (desktop dan mobile)
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

    // Event listener untuk perubahan hash URL dan DOMContentLoaded
    window.addEventListener('hashchange', () => {
      this.updateNavLinks();
      this.renderPage();
    });

    window.addEventListener('DOMContentLoaded', () => {
      this.updateNavLinks();
      this.renderPage();
    });

    // --- LOGIKA BARU UNTUK MENUTUP DRAWER NAVIGASI DI MOBILE ---
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.getElementById('navbarNav');

    // Pastikan elemen-elemennya ada sebelum menambahkan event listener
    if (navbarCollapse && navbarToggler) {
      // Dapatkan semua nav-link di dalam navbar-collapse
      const navLinksInDrawer = navbarCollapse.querySelectorAll('.nav-link');

      // Iterasi setiap link dan tambahkan event listener
      navLinksInDrawer.forEach(link => {
        link.addEventListener('click', () => {
          // Periksa apakah drawer sedang terbuka (memiliki class 'show')
          // dan apakah itu di mode mobile (navbarToggler terlihat)
          const isDrawerOpen = navbarCollapse.classList.contains('show');
          // Memeriksa display style dari toggler untuk menentukan mode mobile
          // display: 'none' berarti desktop, selain itu (misal 'block') berarti mobile
          const isTogglerVisible = window.getComputedStyle(navbarToggler).display !== 'none';

          if (isDrawerOpen && isTogglerVisible) {
            // Jika drawer terbuka di mode mobile, picu klik pada toggler
            // untuk menutup drawer secara otomatis
            navbarToggler.click();
          }
        });
      });
    }
    // --- AKHIR LOGIKA BARU ---
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
    // PERHATIAN: window.confirm tidak direkomendasikan dalam iframe Canvas.
    // Sebaiknya ganti dengan modal UI kustom jika ini adalah aplikasi di Canvas.
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