// src/index.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './styles/styles.css';
import logo from './public/image/logo.png';
import { initApp } from './script/app.js';

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

  initApp();
});
