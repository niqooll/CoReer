// src/script/index.js
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap'; 
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/styles.css';
import logo from '../public/image/logo.png';
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

    const app = new App({ bootstrapInstance: bootstrap });
    app.init();
});
