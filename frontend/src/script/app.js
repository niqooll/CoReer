// src/script/app.js
import routes from './routes/routes.js';

function renderPage(path) {
  const presenter = routes[path];
  if (presenter) {
    presenter.init();
  } else {
    document.getElementById('app').innerHTML = '<h1>404 Page Not Found</h1>';
  }
}

export function initApp() {
  renderPage(window.location.pathname);

  document.querySelectorAll('nav button').forEach((btn) => {
    btn.addEventListener('click', () => {
      let path = '/';
      switch (btn.dataset.page) {
        case 'login': path = '/login'; break;
        case 'register': path = '/register'; break;
        case 'landing': path = '/'; break;
        case 'main': path = '/main'; break;
      }
      history.pushState({}, '', path);
      renderPage(path);
    });
  });

  window.addEventListener('popstate', () => {
    renderPage(window.location.pathname);
  });
}
