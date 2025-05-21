// src/script/routes/routes.js
import LandingPresenter from '../presenters/landing-presenter.js';
import LoginPresenter from '../presenters/login-presenter.js';
import RegisterPresenter from '../presenters/register-presenter.js';
import MainPresenter from '../presenters/main-presenter.js';

const app = document.getElementById('app');

const routes = {
  '/': new LandingPresenter(app),
  '/landing': new LandingPresenter(app),
  '/login': new LoginPresenter(app),
  '/register': new RegisterPresenter(app),
  '/main': new MainPresenter(app),
};

export default routes;
