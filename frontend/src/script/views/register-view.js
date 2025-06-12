// src/script/views/register-view.js
import { bindFormValidation, isValidEmail, isValidPassword, isNotEmpty } from '../utils/form-validation.js';

function isPasswordMatch(value, formData) {
  return value === formData.password;
}

export function showRegister(container, errorMessage = '', onSubmit) {
  container.innerHTML = `
    <section class="login-register-section py-2 py-md-0 min-vh-100 min-vh-md-75 d-flex align-items-center position-relative overflow-hidden login-gradient-bg">
      <div class="login-blob-bg blob-one"></div>
      <div class="login-blob-bg blob-two"></div>
      <div class="container-fluid position-relative z-index-1 px-2">
        <div class="row justify-content-center g-0">
          <div class="col-11 col-sm-9 col-md-7 col-lg-5 col-xl-4">
            <div class="card p-4 shadow-lg border-0 rounded-3 animate-fade-in" style="max-width: 100%; margin: 0 auto;">
              <h3 class="card-title text-center mb-3 fw-bold text-dark-blue" style="font-size: 1.4rem; line-height: 1.3;">Buat Akun CoReer</h3>
              <form id="register-form" novalidate>
                <div class="mb-2">
                  <label for="username" class="form-label visually-hidden">Username</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    class="form-control border-2"
                    placeholder="Masukkan username"
                    style="height: 45px; font-size: 16px; padding: 10px 12px;"
                    required
                  />
                  <small id="username-error" class="text-danger mt-1 d-block" style="display:none; font-size: 0.8rem; line-height: 1.2;"></small>
                </div>
                <div class="mb-2">
                  <label for="email" class="form-label visually-hidden">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="form-control border-2"
                    placeholder="Masukkan email Anda"
                    style="height: 45px; font-size: 16px; padding: 10px 12px;"
                    required
                  />
                  <small id="email-error" class="text-danger mt-1 d-block" style="display:none; font-size: 0.8rem; line-height: 1.2;"></small>
                </div>
                <div class="mb-2">
                  <label for="password" class="form-label visually-hidden">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    class="form-control border-2"
                    placeholder="Buat password"
                    style="height: 45px; font-size: 16px; padding: 10px 12px;"
                    required
                  />
                  <small id="password-error" class="text-danger mt-1 d-block" style="display:none; font-size: 0.8rem; line-height: 1.2;"></small>
                </div>
                <div class="mb-2">
                  <label for="passwordConfirm" class="form-label visually-hidden">Konfirmasi Password</label>
                  <input
                    type="password"
                    id="passwordConfirm"
                    name="passwordConfirm"
                    class="form-control border-2"
                    placeholder="Konfirmasi password"
                    style="height: 45px; font-size: 16px; padding: 10px 12px;"
                    required
                  />
                  <small id="passwordConfirm-error" class="text-danger mt-1 d-block" style="display:none; font-size: 0.8rem; line-height: 1.2;"></small>
                </div>
                ${errorMessage ? `<div class="alert alert-danger mt-2 mb-2 text-center animate-fade-in py-2" role="alert" style="font-size: 0.9rem;">${errorMessage}</div>` : ''}
                <button type="submit" class="btn btn-primary w-100 mt-2 custom-btn-auth" style="height: 45px; font-size: 16px; font-weight: 600;">
                  Register
                </button>
              </form>
              <div class="mt-3 text-center" style="font-size: 0.9rem; line-height: 1.4;">
                <span class="text-muted">Sudah punya akun?</span> 
                <a href="#/login" class="text-brand-primary fw-semibold text-decoration-none">Login di sini</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  const form = container.querySelector('#register-form');
  const errorElements = form.querySelectorAll('.text-danger');

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