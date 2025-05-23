// src/script/views/register-view.js
export function renderRegister(errorMessage = '') {
  return `
    <div class="container" style="max-width: 450px; margin: 3rem auto;">
      <div class="card p-4 shadow-sm">
        <h3 class="card-title text-center mb-4">Create a CoReer Account</h3>
        <form id="register-form" novalidate>
          <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              class="form-control"
              placeholder="Choose a username"
              required
            />
          </div>
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
              placeholder="Create a password"
              required
            />
            <small id="password-error" class="text-danger" style="display:none;"></small>
          </div>
          <button type="submit" class="btn btn-success w-100">Register</button>
        </form>
        <p class="text-danger mt-1 text-center">${errorMessage}</p>
        <div class="mt-1 text-center">
          Already have an account? <a href="#/login">Login here</a>
        </div>
      </div>
    </div>
  `;
}

export function bindRegisterFormSubmit(callback) {
  const form = document.getElementById('register-form');
  if (!form) return;

  const emailInput = form.email;
  const emailError = document.getElementById('email-error');
  const passwordInput = form.password;
  const passwordError = document.getElementById('password-error');

  // Validasi realtime email
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

  // Validasi realtime password
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

    // Reset error
    emailError.style.display = 'none';
    emailError.textContent = '';
    passwordError.style.display = 'none';
    passwordError.textContent = '';

    const username = form.username.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    let valid = true;

    if (!username) {
      alert('Username tidak boleh kosong.');
      valid = false;
    }

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

    const data = { username, email, password };
    callback(data);
  });
}

export function showSuccessMessage(message) {
  alert(message);
}

export function redirectToLogin() {
  window.location.hash = '#/login';
}