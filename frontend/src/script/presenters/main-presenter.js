// src/script/presenter/main-presenter.js
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
    MainView.bindUploadAndPreview(); // panggil setelah render agar event terpasang
  }

  handleLogout() {
    localStorage.removeItem('currentUser');
    history.pushState({}, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
  }
}
