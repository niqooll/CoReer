// src/script/views/main-view.js
import { getCurrentUser } from '../models/auth-model.js';

export function renderMainPage(onLogout, errorMessage = '') {
  const user = getCurrentUser();

  return `
    <h1>Welcome to the Landing Page</h1>
    <p>Hello, ${user ? user.username : 'Guest'}!</p>

    <div>
      <button id="logout-btn" style="${user ? '' : 'display:none;'}">Logout</button>
    </div>

    <div>
      <p>${user ? 'You can upload and analyze your CV, save history, get personalized recommendations, notifications, and career preferences.' : 'Please login to unlock full features.'}</p>
    </div>

    <p class="error-message">${errorMessage}</p>
  `;
}

export function bindLogoutButton(callback) {
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      callback();
    });
  }
}
