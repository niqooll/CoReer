// src/script/views/login-view.js
export function showLogin(container, errorMessage = '', onSubmit) {
  container.innerHTML = `
    <div class="container" style="max-width: 450px; margin: 3rem auto;">
      <div class="card p-4 shadow-sm">
        <h3 class="card-title text-center mb-4">Login to CoReer</h3>
        <form id="login-form" novalidate>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              class="form-control"
              placeholder="Enter your email"
              required
            />
            <small id="email-error" class="text-danger" style="display:none;"></small>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              class="form-control"
              placeholder="Enter your password"
              required
            />
            <small id="password-error" class="text-danger" style="display:none;"></small>
          </div>
          <button type="submit" class="btn btn-primary w-100">Login</button>
        </form>
        <p class="text-danger mt-1 text-center">${errorMessage}</p>
        <div class="mt-1 text-center">
          Don't have an account? <a href="#/register">Register here</a>
        </div>
      </div>
    </div>
  `;

  const form = container.querySelector('#login-form');
  const emailInput = form.email;
  const emailError = container.querySelector('#email-error');
  const passwordInput = form.password;
  const passwordError = container.querySelector('#password-error');

  // Validasi realtime untuk email
  emailInput.addEventListener('input', () => {
    const emailVal = emailInput.value.trim();
    if (!emailVal.includes('@')) {
      emailError.textContent = 'Email harus mengandung karakter "@"';
      emailError.style.display = 'block';
    } else {
      emailError.textContent = '';
      emailError.style.display = 'none';
    }
  });

  // Validasi realtime untuk password
  passwordInput.addEventListener('input', () => {
    const pwdVal = passwordInput.value;

    if (!pwdVal) {
      passwordError.textContent = 'Password tidak boleh kosong.';
      passwordError.style.display = 'block';
    } else if (pwdVal.length < 8) {
      passwordError.textContent = 'Password harus minimal 8 karakter.';
      passwordError.style.display = 'block';
    } else {
      passwordError.textContent = '';
      passwordError.style.display = 'none';
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Reset semua pesan error
    emailError.style.display = 'none';
    emailError.textContent = '';
    passwordError.style.display = 'none';
    passwordError.textContent = '';

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    let valid = true;

    if (!email) {
      emailError.textContent = 'Email tidak boleh kosong.';
      emailError.style.display = 'block';
      valid = false;
    } else if (!email.includes('@')) {
      emailError.textContent = 'Email harus mengandung karakter "@"';
      emailError.style.display = 'block';
      valid = false;
    }

    if (!password) {
      passwordError.textContent = 'Password tidak boleh kosong.';
      passwordError.style.display = 'block';
      valid = false;
    } else if (password.length < 8) {
      passwordError.textContent = 'Password harus minimal 8 karakter.';
      passwordError.style.display = 'block';
      valid = false;
    }

    if (!valid) {
      if (emailError.style.display === 'block') {
        emailInput.focus();
      } else if (passwordError.style.display === 'block') {
        passwordInput.focus();
      }
      return;
    }

    const data = { email, password };
    onSubmit(data);
  });
}
