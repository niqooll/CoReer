"use strict";
self["webpackHotUpdatefrontend"]("main",{

/***/ "./src/script/app.js":
/*!***************************!*\
  !*** ./src/script/app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initApp: () => (/* binding */ initApp)
/* harmony export */ });
/* harmony import */ var _routes_routes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes/routes.js */ "./src/script/routes/routes.js");
/* harmony import */ var _models_auth_model_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/auth-model.js */ "./src/script/models/auth-model.js");
// src/script/app.js



function updateNavLinks() {
  const user = (0,_models_auth_model_js__WEBPACK_IMPORTED_MODULE_1__.getCurrentUser)();

  const loginLink = document.getElementById('login-link');
  const registerLink = document.getElementById('register-link');
  const profileDropdown = document.getElementById('profile-dropdown');

  if (user) {
    // User sudah login: sembunyikan login/register, tampilkan profile dropdown
    loginLink.style.display = 'none';
    registerLink.style.display = 'none';
    profileDropdown.style.display = 'block';
  } else {
    // User belum login: tampilkan login/register, sembunyikan profile dropdown
    loginLink.style.display = 'block';
    registerLink.style.display = 'block';
    profileDropdown.style.display = 'none';
  }
}

function bindLogoutButton(callback) {
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      callback();
    });
  }
}

function renderPage() {
  const hash = window.location.hash || '#/';
  const path = hash.slice(1); // menghapus '#' di depan
  const presenter = _routes_routes_js__WEBPACK_IMPORTED_MODULE_0__["default"][path];
  
  if (presenter) {
    presenter.init();
  } else {
    document.getElementById('app').innerHTML = '<h1>404 Page Not Found</h1>';
  }
}

function initApp() {
  updateNavLinks();
  renderPage(); 

  document.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const path = link.getAttribute('href');
      history.pushState({}, '', path);
      renderPage(path);
    });
  });

  bindLogoutButton(() => {
    // Logout logic here:
    localStorage.removeItem('currentUser');
    updateNavLinks();

    history.pushState({}, '', '/');
    renderPage('/');
  });

  window.addEventListener('popstate', () => {
    updateNavLinks();
    renderPage(window.location.pathname);
  });
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5e1c0d16b8d504b27bf4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5mYzllMmQ4NjJkYTAzMDkwOWVhMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3dDO0FBQ2dCO0FBQ3hEO0FBQ0E7QUFDQSxlQUFlLHFFQUFjO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLG9CQUFvQix5REFBTTtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7OztVQ3ZFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3NjcmlwdC9hcHAuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9zY3JpcHQvYXBwLmpzXHJcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMvcm91dGVzLmpzJztcclxuaW1wb3J0IHsgZ2V0Q3VycmVudFVzZXIgfSBmcm9tICcuL21vZGVscy9hdXRoLW1vZGVsLmpzJztcclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZU5hdkxpbmtzKCkge1xyXG4gIGNvbnN0IHVzZXIgPSBnZXRDdXJyZW50VXNlcigpO1xyXG5cclxuICBjb25zdCBsb2dpbkxpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4tbGluaycpO1xyXG4gIGNvbnN0IHJlZ2lzdGVyTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWdpc3Rlci1saW5rJyk7XHJcbiAgY29uc3QgcHJvZmlsZURyb3Bkb3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2ZpbGUtZHJvcGRvd24nKTtcclxuXHJcbiAgaWYgKHVzZXIpIHtcclxuICAgIC8vIFVzZXIgc3VkYWggbG9naW46IHNlbWJ1bnlpa2FuIGxvZ2luL3JlZ2lzdGVyLCB0YW1waWxrYW4gcHJvZmlsZSBkcm9wZG93blxyXG4gICAgbG9naW5MaW5rLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICByZWdpc3Rlckxpbmsuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIHByb2ZpbGVEcm9wZG93bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gVXNlciBiZWx1bSBsb2dpbjogdGFtcGlsa2FuIGxvZ2luL3JlZ2lzdGVyLCBzZW1idW55aWthbiBwcm9maWxlIGRyb3Bkb3duXHJcbiAgICBsb2dpbkxpbmsuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICByZWdpc3Rlckxpbmsuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBwcm9maWxlRHJvcGRvd24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJpbmRMb2dvdXRCdXR0b24oY2FsbGJhY2spIHtcclxuICBjb25zdCBsb2dvdXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nb3V0LWJ0bicpO1xyXG4gIGlmIChsb2dvdXRCdG4pIHtcclxuICAgIGxvZ291dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgY2FsbGJhY2soKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyUGFnZSgpIHtcclxuICBjb25zdCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2ggfHwgJyMvJztcclxuICBjb25zdCBwYXRoID0gaGFzaC5zbGljZSgxKTsgLy8gbWVuZ2hhcHVzICcjJyBkaSBkZXBhblxyXG4gIGNvbnN0IHByZXNlbnRlciA9IHJvdXRlc1twYXRoXTtcclxuICBcclxuICBpZiAocHJlc2VudGVyKSB7XHJcbiAgICBwcmVzZW50ZXIuaW5pdCgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykuaW5uZXJIVE1MID0gJzxoMT40MDQgUGFnZSBOb3QgRm91bmQ8L2gxPic7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdEFwcCgpIHtcclxuICB1cGRhdGVOYXZMaW5rcygpO1xyXG4gIHJlbmRlclBhZ2UoKTsgXHJcblxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ25hdiBhJykuZm9yRWFjaCgobGluaykgPT4ge1xyXG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBjb25zdCBwYXRoID0gbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcclxuICAgICAgaGlzdG9yeS5wdXNoU3RhdGUoe30sICcnLCBwYXRoKTtcclxuICAgICAgcmVuZGVyUGFnZShwYXRoKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBiaW5kTG9nb3V0QnV0dG9uKCgpID0+IHtcclxuICAgIC8vIExvZ291dCBsb2dpYyBoZXJlOlxyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2N1cnJlbnRVc2VyJyk7XHJcbiAgICB1cGRhdGVOYXZMaW5rcygpO1xyXG5cclxuICAgIGhpc3RvcnkucHVzaFN0YXRlKHt9LCAnJywgJy8nKTtcclxuICAgIHJlbmRlclBhZ2UoJy8nKTtcclxuICB9KTtcclxuXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgKCkgPT4ge1xyXG4gICAgdXBkYXRlTmF2TGlua3MoKTtcclxuICAgIHJlbmRlclBhZ2Uod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuICB9KTtcclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1ZTFjMGQxNmI4ZDUwNGIyN2JmNFwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==