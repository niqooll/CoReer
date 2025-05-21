// src/script/views/register-view.js
export function renderRegister(errorMessage = '') {
  return `
    <h2>Register</h2>
    <form id="register-form">
      <input type="text" name="username" placeholder="Username" required />
      <input type="password" name="password" placeholder="Password" required />
      <input type="password" name="passwordConfirm" placeholder="Confirm Password" required />
      <button type="submit">Register</button>
    </form>
    <p class="error-message">${errorMessage}</p>
  `;
}

// Fungsi untuk bind event submit dengan callback dari Presenter
export function bindRegisterFormSubmit(callback) {
  const form = document.getElementById('register-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = {
      username: form.username.value.trim(),
      password: form.password.value,
      passwordConfirm: form.passwordConfirm.value,
    };
    callback(data);
  });
}
