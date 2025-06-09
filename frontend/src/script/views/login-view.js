// src/script/views/login-view.js
import { bindFormValidation, isValidEmail, isValidPassword, isNotEmpty } from '../utils/form-validation.js';

export function showLogin(container, errorMessage = '', onSubmit) {
  container.innerHTML = `
    <section class="login-register-section py-0 min-vh-75 d-flex align-items-center position-relative overflow-hidden login-gradient-bg">
      <div class="login-blob-bg blob-one"></div>
      <div class="login-blob-bg blob-two"></div>
      <div class="container position-relative z-index-1">
        <div class="row justify-content-center">
          <div class="col-lg-5 col-md-7 col-sm-9">
            <div class="card p-3 shadow-lg border-0 rounded-4 animate-fade-in">
              <h3 class="card-title text-center mb-4 fw-bold text-dark-blue">Login ke CoReer</h3>
              <form id="login-form" novalidate>
                <div class="mb-3">
                  <label for="email" class="form-label visually-hidden">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="form-control form-control-lg"
                    placeholder="Masukkan email Anda"
                    required
                  />
                  <small id="email-error" class="text-danger mt-1" style="display:none;"></small>
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label visually-hidden">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    class="form-control form-control-lg"
                    placeholder="Masukkan password Anda"
                    required
                  />
                  <small id="password-error" class="text-danger mt-1" style="display:none;"></small>
                </div>
                ${errorMessage ? `<p class="text-danger mt-3 text-center animate-fade-in">${errorMessage}</p>` : ''}
                <button type="submit" class="btn btn-primary btn-lg w-100 mt-3 custom-btn-auth">Login</button>
              </form>
              <div class="mt-4 text-center">
                Belum punya akun? <a href="#/register" class="text-brand-primary fw-semibold">Daftar di sini</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  bindFormValidation({
    formId: 'login-form',
    fields: {
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
    },
    onSubmit,
  });
}