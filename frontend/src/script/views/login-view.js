// src/script/views/login-view.js

export function renderLogin(errorMessage = '') {
  return `
    <h2>Login</h2>
    <form id="login-form">
      <input type="text" name="username" placeholder="Username" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
    <p class="error-message">${errorMessage}</p>
  `;
}

export function bindLoginFormSubmit(callback) {
  const form = document.getElementById('login-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = {
      username: form.username.value.trim(),
      password: form.password.value,
    };
    callback(data);
  });
}

