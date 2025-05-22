// src/script/presenter/login-presenter.js
import * as LoginView from '../views/login-view.js';
import { login } from '../models/auth-model.js';  // import fungsi login yang sebenarnya

export default class LoginPresenter {
  constructor(appContainer) {
    this.app = appContainer;
    this.errorMessage = '';
  }

  init() {
    this.render();
  }

  render() {
    this.app.innerHTML = LoginView.renderLogin(this.errorMessage);
    LoginView.bindLoginFormSubmit(this.handleLogin.bind(this));
  }

  
async handleLogin(data) {
  try {
    const user = await login(data.username, data.password);
    // Login sukses
    localStorage.setItem('currentUser', JSON.stringify(user));
    window.location.hash = '#/main';

    window.dispatchEvent(new PopStateEvent('popstate'));
  } catch (err) {
    this.errorMessage = 'Login gagal: ' + err.message;
    this.render();
  }
}
}

