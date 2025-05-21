// src/script/presenter/main-presenter.js
import * as MainView from '../views/main-view.js';

export default class MainPresenter {
  constructor(appContainer) {
    this.app = appContainer;
    this.errorMessage = '';
  }

  init() {
    this.render();
  }

  render() {
    this.app.innerHTML = MainView.renderMainPage(this.handleLogout.bind(this), this.errorMessage);
    MainView.bindLogoutButton(this.handleLogout.bind(this));
  }

  handleLogout() {
    // Hapus session/local storage user
    localStorage.removeItem('currentUser');

    // Redirect ke landing page
    history.pushState({}, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
  }
}
