// src/script/index.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import '../styles/styles.css'; // Mengimpor CSS kustom Anda
import logo from '../public/image/logo.png'; // Mengimpor gambar logo
import App from './app.js';

document.addEventListener('DOMContentLoaded', () => {
  const brandLink = document.querySelector('.navbar-brand');
  if (brandLink) {
    const logoImg = document.createElement('img');
    logoImg.src = logo;
    logoImg.alt = 'CoReer Logo';
    logoImg.className = 'logo-image';

    brandLink.innerHTML = ''; // Hapus teks "CoReer"
    brandLink.appendChild(logoImg); // Ganti dengan gambar logo
  }

  const app = new App();
  app.init();
});
