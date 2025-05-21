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
            <label for="password" class="form-label">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              class="form-control"
              placeholder="Create a password"
              required
            />
          </div>
          <div class="mb-3">
            <label for="passwordConfirm" class="form-label">Confirm Password</label>
            <input
              type="password"
              id="passwordConfirm"
              name="passwordConfirm"
              class="form-control"
              placeholder="Repeat your password"
              required
            />
          </div>
          <button type="submit" class="btn btn-success w-100">Register</button>
        </form>
        <p class="text-danger mt-1 text-center">${errorMessage}</p>
        <div class="mt-1 text-center">
          Already have an account? <a href="/login">Login here</a>
        </div>
      </div>
    </div>
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
