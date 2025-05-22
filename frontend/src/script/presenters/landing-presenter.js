// src/script/presenter/landing-presenter.js
import * as LandingView from '../views/landing-view.js';

export default class LandingPresenter {
  constructor(appContainer) {
    this.app = appContainer;
  }

  init() {
    this.render();
    this.attachEventListeners();
  }

  render() {
    this.app.innerHTML = LandingView.renderLanding();
  }

  attachEventListeners() {
    const checkBtn = document.getElementById('btn-check-cv');
    if (checkBtn) {
      checkBtn.addEventListener('click', () => {
        const isLoggedIn = !!localStorage.getItem('currentUser');
        if (!isLoggedIn) {
          window.location.hash = '#/login';
        } else {
          window.location.hash = '#/main';
        }
        window.dispatchEvent(new PopStateEvent('popstate'));
      });
    }
  }
}
