// src/script/presenter/register-presenter.js
import * as RegisterView from '../views/register-view.js';

export default class RegisterPresenter {
  constructor(appContainer) {
    this.app = appContainer;
    this.errorMessage = '';
  }

  init() {
    this.render();
  }

  render() {
    this.app.innerHTML = RegisterView.renderRegister(this.errorMessage);
    RegisterView.bindRegisterFormSubmit(this.handleRegister.bind(this));
  }

  handleRegister(data) {
    if (data.password !== data.passwordConfirm) {
      this.errorMessage = 'Passwords do not match';
      this.render();
      return;
    }

    // Kirim data ke backend
    fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: data.username,
        password: data.password,
      }),
    })
      .then(async (response) => {
        const result = await response.json();

        if (!response.ok) {
          // Kalau error dari backend, tampilkan pesan errornya
          this.errorMessage = result.message || 'Registration failed';
          this.render();
        } else {
          alert(`User ${data.username} registered successfully!`);

          // Redirect ke halaman login
          history.pushState({}, '', '/login');
          window.dispatchEvent(new PopStateEvent('popstate'));
        }
      })
      .catch((err) => {
        this.errorMessage = 'Failed to register. Please try again later.';
        this.render();
        console.error(err);
      });
  }
}
