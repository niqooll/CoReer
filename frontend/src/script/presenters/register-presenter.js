// src/script/presenter/register-presenter.js
import * as RegisterView from '../views/register-view.js';
import * as AuthModel from '../models/auth-model.js';

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

  async handleRegister(data) {
    // hapus cek passwordConfirm

    try {
      await AuthModel.register(data.username, data.email, data.password);

      RegisterView.showSuccessMessage(`User ${data.username} registered successfully!`);
      RegisterView.redirectToLogin();
    } catch (error) {
      this.errorMessage = error.message;
      this.render();
    }
  }
}
