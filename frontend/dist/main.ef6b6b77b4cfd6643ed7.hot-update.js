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
  const logoutLink = document.getElementById('logout-link');

  if (user) {
    // User logged in: show logout, hide login/register
    loginLink.style.display = 'none';
    registerLink.style.display = 'none';
    logoutLink.style.display = 'block';
  } else {
    // No user: show login/register, hide logout
    loginLink.style.display = 'block';
    registerLink.style.display = 'block';
    logoutLink.style.display = 'none';
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

function renderPage(path) {
  const presenter = _routes_routes_js__WEBPACK_IMPORTED_MODULE_0__["default"][path];
  if (presenter) {
    presenter.init();
  } else {
    document.getElementById('app').innerHTML = '<h1>404 Page Not Found</h1>';
  }
}

function initApp() {
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


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8ef5df3b6781f20d853d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lZjZiNmI3N2I0Y2ZkNjY0M2VkNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3dDO0FBQ2dCO0FBQ3hEO0FBQ0E7QUFDQSxlQUFlLHFFQUFjO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix5REFBTTtBQUMxQjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7VUMxREEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9zY3JpcHQvYXBwLmpzIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvc2NyaXB0L2FwcC5qc1xyXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzL3JvdXRlcy5qcyc7XHJcbmltcG9ydCB7IGdldEN1cnJlbnRVc2VyIH0gZnJvbSAnLi9tb2RlbHMvYXV0aC1tb2RlbC5qcyc7XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVOYXZMaW5rcygpIHtcclxuICBjb25zdCB1c2VyID0gZ2V0Q3VycmVudFVzZXIoKTtcclxuXHJcbiAgY29uc3QgbG9naW5MaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luLWxpbmsnKTtcclxuICBjb25zdCByZWdpc3RlckxpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaXN0ZXItbGluaycpO1xyXG4gIGNvbnN0IGxvZ291dExpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nb3V0LWxpbmsnKTtcclxuXHJcbiAgaWYgKHVzZXIpIHtcclxuICAgIC8vIFVzZXIgbG9nZ2VkIGluOiBzaG93IGxvZ291dCwgaGlkZSBsb2dpbi9yZWdpc3RlclxyXG4gICAgbG9naW5MaW5rLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICByZWdpc3Rlckxpbmsuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIGxvZ291dExpbmsuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIE5vIHVzZXI6IHNob3cgbG9naW4vcmVnaXN0ZXIsIGhpZGUgbG9nb3V0XHJcbiAgICBsb2dpbkxpbmsuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICByZWdpc3Rlckxpbmsuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBsb2dvdXRMaW5rLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBiaW5kTG9nb3V0QnV0dG9uKGNhbGxiYWNrKSB7XHJcbiAgY29uc3QgbG9nb3V0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ291dC1idG4nKTtcclxuICBpZiAobG9nb3V0QnRuKSB7XHJcbiAgICBsb2dvdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclBhZ2UocGF0aCkge1xyXG4gIGNvbnN0IHByZXNlbnRlciA9IHJvdXRlc1twYXRoXTtcclxuICBpZiAocHJlc2VudGVyKSB7XHJcbiAgICBwcmVzZW50ZXIuaW5pdCgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykuaW5uZXJIVE1MID0gJzxoMT40MDQgUGFnZSBOb3QgRm91bmQ8L2gxPic7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdEFwcCgpIHtcclxuICByZW5kZXJQYWdlKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XHJcblxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ25hdiBhJykuZm9yRWFjaCgobGluaykgPT4ge1xyXG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBjb25zdCBwYXRoID0gbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcclxuICAgICAgaGlzdG9yeS5wdXNoU3RhdGUoe30sICcnLCBwYXRoKTtcclxuICAgICAgcmVuZGVyUGFnZShwYXRoKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgKCkgPT4ge1xyXG4gICAgcmVuZGVyUGFnZSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xyXG4gIH0pO1xyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjhlZjVkZjNiNjc4MWYyMGQ4NTNkXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9