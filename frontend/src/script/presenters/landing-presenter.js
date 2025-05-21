// src/script/presenter/landing-presenter.js
import * as LandingView from '../views/landing-view.js';

export default class LandingPresenter {
  constructor(appContainer) {
    this.app = appContainer;
  }

  init() {
    this.render();
  }

  render() {
    this.app.innerHTML = LandingView.renderLanding();
  }
}
