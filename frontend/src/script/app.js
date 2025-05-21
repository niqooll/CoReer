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

  document.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const path = link.getAttribute('href');
      history.pushState({}, '', path);
      renderPage(path);
    });
  });


  window.addEventListener('popstate', () => {
    renderPage(window.location.pathname);
  });
}
