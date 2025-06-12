// src/script/views/register-view.js
import { bindFormValidation, isValidEmail, isValidPassword, isNotEmpty } from '../utils/form-validation.js';

function isPasswordMatch(value, formData) {
  return value === formData.password;
}

export function showRegister(container, errorMessage = '', onSubmit) {
  container.innerHTML = `
  <section class="login-register-section login-gradient-bg">
      <div class="login-blob-bg blob-one"></div>
      <div class="login-blob-bg blob-two"></div>
      <div class="register-container">
        <div class="register-form-wrapper">
          <div class="card">
            <h3 class="card-title">Buat Akun CoReer</h3>
            <form id="register-form" novalidate>
              <div class="form-group">
                <label for="username" class="visually-hidden">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  class="form-control"
                  placeholder="Masukkan username"
                  required
                />
                <small id="username-error" class="error-message"></small>
              </div>
              <div class="form-group">
                <label for="email" class="visually-hidden">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="form-control"
                  placeholder="Masukkan email Anda"
                  required
                />
                <small id="email-error" class="error-message"></small>
              </div>
              <div class="form-group">
                <label for="password" class="visually-hidden">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  class="form-control"
                  placeholder="Buat password"
                  required
                />
                <small id="password-error" class="error-message"></small>
              </div>
              <div class="form-group">
                <label for="passwordConfirm" class="visually-hidden">Konfirmasi Password</label>
                <input
                  type="password"
                  id="passwordConfirm"
                  name="passwordConfirm"
                  class="form-control"
                  placeholder="Konfirmasi password"
                  required
                />
                <small id="passwordConfirm-error" class="error-message"></small>
              </div>
              ${errorMessage ? `<div class="alert alert-danger">${errorMessage}</div>` : ''}
              <button type="submit" class="btn-submit">Register</button>
            </form>
            <div class="login-link">
              <span>Sudah punya akun? <a href="#/login" class="link-primary">Login di sini</a></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  const form = container.querySelector('#register-form');
  const errorElements = form.querySelectorAll('.error-message');

  function hideError(errorElement) {
    errorElement.style.display = 'none';
  }

  function showError(errorElement, message) {
    errorElement.textContent = message;
    errorElement.style.display = 'block';
  }

  errorElements.forEach(hideError);

  bindFormValidation({
    formId: 'register-form',
    fields: {
      username: {
        errorId: 'username-error',
        validators: [
          { validator: isNotEmpty, message: 'Username tidak boleh kosong.' },
        ],
      },
      email: {
        errorId: 'email-error',
        validators: [
          { validator: isNotEmpty, message: 'Email tidak boleh kosong.' },
          { validator: isValidEmail, message: 'Format email tidak valid.' },
        ],
      },
      password: {
        errorId: 'password-error',
        validators: [
          { validator: isNotEmpty, message: 'Password tidak boleh kosong.' },
          { validator: isValidPassword, message: 'Password harus minimal 8 karakter.' },
        ],
      },
      passwordConfirm: {
        errorId: 'passwordConfirm-error',
        validators: [
          { validator: isNotEmpty, message: 'Konfirmasi password tidak boleh kosong.' },
          { validator: isPasswordMatch, message: 'Konfirmasi password tidak sama dengan password.' },
        ],
      },
    },
    onSubmit,
    onShowError: showError,
    onHideError: hideError,
  });
}

export function showSuccessMessage(message) {
  alert(message);
}

export function redirectToLogin() {
  window.location.hash = '#/login';
}