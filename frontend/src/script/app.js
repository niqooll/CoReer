// src/script/app.js
// Import fungsionalitas utama aplikasi dan model autentikasi.
import { getCurrentUser, logout as performLogout } from './models/auth-model.js';
import { applyViewTransition } from './utils/index.js';

/**
 * Kelas utama aplikasi yang mengelola routing, navigasi, dan rendering halaman.
 */
class App {
  /**
   * Konstruktor untuk kelas App.
   * @param {object} options - Opsi konfigurasi aplikasi.
   * @param {string} options.appContainerId - ID elemen DOM tempat aplikasi akan dirender.
   */
  constructor({ appContainerId = 'app' } = {}) {
    this.appContainer = document.getElementById(appContainerId);
    // Definisi rute publik yang dapat diakses tanpa autentikasi.
    this.publicRoutes = ['/', '/login', '/register', '/FAQ'];
    // Mengikat event listener penting ke DOM.
    this._bindEvents();

    /**
     * Objek yang memetakan hash URL ke modul presenter yang sesuai.
     * Menggunakan dynamic import (import()) untuk lazy loading,
     * yang berarti kode presenter hanya dimuat saat rute tersebut diakses.
     */
    this.routePresenters = {
      // Rute utama dan landing page
      '/': import('./presenters/landing-presenter.js').then(m => m.default),
      '/landing': import('./presenters/landing-presenter.js').then(m => m.default),
      // Rute autentikasi
      '/login': import('./presenters/login-presenter.js').then(m => m.default),
      '/register': import('./presenters/register-presenter.js').then(m => m.default),
      // Rute informasi
      '/FAQ': import('./presenters/faq-presenter.js').then(m => m.default),
      // Rute Main Analyze
      '/main': import('./presenters/main-presenter.js').then(m => m.default),
      // Rute profil pengguna
      '/edit-profile': import('./presenters/edit-profile-presenter.js').then(m => m.default),
      // Rute riwayat analisis CV (baru ditambahkan)
      '/history': import('./presenters/history-presenter.js').then(m => m.default),
      // Tambahkan rute lain di sini jika diperlukan
    };
  }

  /**
   * Mengikat event listener ke elemen-elemen DOM.
   * Ini termasuk tombol logout dan event hashchange/DOMContentLoaded.
   */
  _bindEvents() {
    // Mendapatkan referensi tombol logout untuk desktop dan mobile
    const logoutBtnDesktop = document.getElementById('logout-btn-desktop');
    const logoutBtnMobile = document.getElementById('logout-btn-mobile');

    // Menambahkan event listener click ke tombol logout (jika ada)
    if (logoutBtnDesktop) {
      logoutBtnDesktop.addEventListener('click', () => this.logout());
    }
    if (logoutBtnMobile) {
      logoutBtnMobile.addEventListener('click', () => this.logout());
    }

    // Menambahkan event listener untuk perubahan hash di URL (navigasi SPA)
    window.addEventListener('hashchange', () => {
      this.updateNavLinks(); // Perbarui tampilan link navigasi
      this.renderPage(); // Render halaman yang sesuai dengan hash baru
    });

    // Menambahkan event listener saat DOM selesai dimuat untuk inisialisasi awal aplikasi
    window.addEventListener('DOMContentLoaded', () => {
      this.updateNavLinks(); // Inisialisasi tampilan link navigasi
      this.renderPage(); // Render halaman awal aplikasi
    });
  }

  /**
   * Memperbarui visibilitas link navigasi di navbar berdasarkan status login pengguna.
   */
  updateNavLinks() {
    const user = getCurrentUser(); // Mendapatkan objek pengguna yang sedang login (jika ada)
    console.log('--- updateNavLinks called ---');
    console.log('Current user status:', user); // Log status pengguna untuk debugging

    // Mendapatkan referensi elemen link navigasi
    const landingLink = document.getElementById('landing-link');
    const faqLink = document.getElementById('FAQ-link');
    const loginLink = document.getElementById('login-link');
    const registerLink = document.getElementById('register-link');
    const profileDropdownDesktop = document.getElementById('profile-dropdown-desktop');
    const profileLinksMobile = document.getElementById('profile-links-mobile');
    const historyLink = document.getElementById('history-link'); // Referensi ke link history

    // Logika untuk menampilkan/menyembunyikan link berdasarkan status login
    if (user) {
      // Jika pengguna login:
      // Tampilkan link yang relevan untuk pengguna yang login
      if (landingLink) landingLink.style.display = 'block';
      if (faqLink) faqLink.style.display = 'block';
      if (historyLink) historyLink.style.display = 'block'; // Tampilkan link History

      // Sembunyikan link yang relevan untuk pengguna yang belum login
      if (loginLink) loginLink.style.display = 'none';
      if (registerLink) registerLink.style.display = 'none';

      // Tampilkan elemen profil (desktop dan mobile)
      if (profileDropdownDesktop) {
        profileDropdownDesktop.classList.remove('d-none'); // Hapus d-none untuk menampilkan
      }
      if (profileLinksMobile) {
        profileLinksMobile.classList.remove('d-none'); // Hapus d-none untuk menampilkan
      }
    } else {
      // Jika pengguna belum login:
      // Sembunyikan link yang relevan untuk pengguna yang login
      if (landingLink) landingLink.style.display = 'none';
      if (historyLink) historyLink.style.display = 'none'; // Sembunyikan link History

      // Tampilkan link yang relevan untuk pengguna yang belum login
      if (faqLink) faqLink.style.display = 'block';
      if (loginLink) loginLink.style.display = 'block';
      if (registerLink) registerLink.style.display = 'block';

      // Sembunyikan elemen profil (desktop dan mobile)
      if (profileDropdownDesktop) {
        profileDropdownDesktop.classList.add('d-none'); // Tambahkan d-none untuk menyembunyikan
      }
      if (profileLinksMobile) {
        profileLinksMobile.classList.add('d-none'); // Tambahkan d-none untuk menyembunyikan
      }
    }
    console.log('--- End updateNavLinks ---');
  }

  /**
   * Merender halaman yang sesuai berdasarkan hash URL.
   * Termasuk logika untuk pengalihan (redirect) dan penanganan presenter.
   */
  async renderPage() {
    const user = getCurrentUser(); // Dapatkan status autentikasi terbaru
    const hash = window.location.hash || '#/'; // Dapatkan hash URL, default ke '/'
    const path = hash.slice(1); // Ambil path tanpa karakter '#'

    // Logika pengalihan: Jika pengguna tidak login dan mencoba mengakses rute non-publik,
    // alihkan ke halaman login.
    if (!user && !this.publicRoutes.includes(path)) {
      window.location.hash = '#/login';
      return; // Hentikan proses rendering halaman saat ini
    }

    // Ambil modul presenter secara dinamis berdasarkan path
    let PresenterModule;
    try {
      // Tunggu hingga promise dynamic import selesai di-resolve
      const module = await this.routePresenters[path];
      PresenterModule = module;

      // Jika presenter tidak ditemukan untuk path ini, tampilkan halaman 404
      if (!PresenterModule) {
        this.appContainer.innerHTML = '<h1>404 Page Not Found</h1>';
        return;
      }
    } catch (error) {
      // Tangani error jika gagal memuat modul presenter (misalnya, masalah jaringan)
      console.error(`Failed to load presenter for path: ${path}`, error);
      this.appContainer.innerHTML = '<h1>Error loading page</h1>';
      return;
    }

    // Terapkan View Transition API untuk animasi navigasi yang mulus
    await applyViewTransition('#app', async () => {
      // Inisialisasi dan jalankan presenter
      // Periksa apakah presenter adalah kelas dengan metode 'init' atau objek dengan metode 'init'
      if (typeof PresenterModule === 'function' && PresenterModule.prototype?.init instanceof Function) {
        const instance = new PresenterModule(this.appContainer);
        if (instance.init instanceof Function) {
          await instance.init();
        }
      } else if (PresenterModule && typeof PresenterModule.init === 'function') {
        // Ini untuk kasus di mana presenter mungkin bukan kelas (misalnya, objek singleton)
        await PresenterModule.init(this.appContainer);
      } else {
        // Kasus jika presenter tidak valid atau tidak memiliki metode init
        this.appContainer.innerHTML = '<h1>Presenter Invalid</h1>';
      }
    });
  }

  /**
   * Menangani proses logout pengguna.
   * Menghapus sesi pengguna, memperbarui navigasi, dan mengarahkan ke halaman utama.
   */
  logout() {
    performLogout(); // Memanggil fungsi logout dari model autentikasi
    this.updateNavLinks(); // Memperbarui tampilan navbar setelah logout
    window.location.hash = '#/'; // Mengarahkan kembali ke halaman utama
  }

  /**
   * Metode inisialisasi aplikasi secara keseluruhan.
   * Dipanggil sekali saat aplikasi pertama kali dimuat.
   */
  async init() {
    this.updateNavLinks(); // Inisialisasi tampilan navbar
    await this.renderPage(); // Render halaman awal
  }
}

export default App;
