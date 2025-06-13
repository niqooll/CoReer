// src/script/index.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'; // PENTING: Pertahankan hanya ini untuk JS Bootstrap
import 'bootstrap-icons/font/bootstrap-icons.css';

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

        brandLink.innerHTML = '';
        brandLink.appendChild(logoImg);
    }

    const app = new App();
    app.init();
});
