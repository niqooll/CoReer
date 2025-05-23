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
  const landingLink = document.getElementById('landing-link');

  if (user) {
    loginLink.style.display = 'none';
    registerLink.style.display = 'none';
    profileDropdown.style.display = 'block';
    landingLink.style.display = 'block';
  } else {
    loginLink.style.display = 'block';
    registerLink.style.display = 'block';
    profileDropdown.style.display = 'none';
    landingLink.style.display = 'none';
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
  const user = (0,_models_auth_model_js__WEBPACK_IMPORTED_MODULE_1__.getCurrentUser)();
  const hash = window.location.hash || '#/';
  const path = hash.slice(1);

  // Daftar route yang boleh diakses saat belum login
  const publicRoutes = ['/', '/login', '/register'];

  if (!user && !publicRoutes.includes(path)) {
    // Belum login dan akses halaman selain yang diizinkan
    window.location.hash = '#/login';
    return;
  }

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

  document.querySelectorAll('a.nav-link.dropdown-toggle').forEach((dropdownToggle) => {
    dropdownToggle.addEventListener('click', (e) => {
      e.preventDefault();
    });
  });

  bindLogoutButton(() => {
    localStorage.removeItem('currentUser');
    updateNavLinks();
    window.location.hash = '#/';
  });

  window.addEventListener('hashchange', () => {
    updateNavLinks();
    renderPage();
  });
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("086d1bfc5581b35c1fa6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yZTVlMGE3MGFmYWQ3ZWI3N2M5Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3dDO0FBQ2dCO0FBQ3hEO0FBQ0E7QUFDQSxlQUFlLHFFQUFjO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxRUFBYztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IseURBQU07QUFDMUI7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7O1VDOUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvc2NyaXB0L2FwcC5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL3NjcmlwdC9hcHAuanNcclxuaW1wb3J0IHJvdXRlcyBmcm9tICcuL3JvdXRlcy9yb3V0ZXMuanMnO1xyXG5pbXBvcnQgeyBnZXRDdXJyZW50VXNlciB9IGZyb20gJy4vbW9kZWxzL2F1dGgtbW9kZWwuanMnO1xyXG5cclxuZnVuY3Rpb24gdXBkYXRlTmF2TGlua3MoKSB7XHJcbiAgY29uc3QgdXNlciA9IGdldEN1cnJlbnRVc2VyKCk7XHJcblxyXG4gIGNvbnN0IGxvZ2luTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi1saW5rJyk7XHJcbiAgY29uc3QgcmVnaXN0ZXJMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZ2lzdGVyLWxpbmsnKTtcclxuICBjb25zdCBwcm9maWxlRHJvcGRvd24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZmlsZS1kcm9wZG93bicpO1xyXG4gIGNvbnN0IGxhbmRpbmdMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xhbmRpbmctbGluaycpO1xyXG5cclxuICBpZiAodXNlcikge1xyXG4gICAgbG9naW5MaW5rLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICByZWdpc3Rlckxpbmsuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIHByb2ZpbGVEcm9wZG93bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIGxhbmRpbmdMaW5rLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBsb2dpbkxpbmsuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICByZWdpc3Rlckxpbmsuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBwcm9maWxlRHJvcGRvd24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIGxhbmRpbmdMaW5rLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBiaW5kTG9nb3V0QnV0dG9uKGNhbGxiYWNrKSB7XHJcbiAgY29uc3QgbG9nb3V0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ291dC1idG4nKTtcclxuICBpZiAobG9nb3V0QnRuKSB7XHJcbiAgICBsb2dvdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclBhZ2UoKSB7XHJcbiAgY29uc3QgdXNlciA9IGdldEN1cnJlbnRVc2VyKCk7XHJcbiAgY29uc3QgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoIHx8ICcjLyc7XHJcbiAgY29uc3QgcGF0aCA9IGhhc2guc2xpY2UoMSk7XHJcblxyXG4gIC8vIERhZnRhciByb3V0ZSB5YW5nIGJvbGVoIGRpYWtzZXMgc2FhdCBiZWx1bSBsb2dpblxyXG4gIGNvbnN0IHB1YmxpY1JvdXRlcyA9IFsnLycsICcvbG9naW4nLCAnL3JlZ2lzdGVyJ107XHJcblxyXG4gIGlmICghdXNlciAmJiAhcHVibGljUm91dGVzLmluY2x1ZGVzKHBhdGgpKSB7XHJcbiAgICAvLyBCZWx1bSBsb2dpbiBkYW4gYWtzZXMgaGFsYW1hbiBzZWxhaW4geWFuZyBkaWl6aW5rYW5cclxuICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyMvbG9naW4nO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcHJlc2VudGVyID0gcm91dGVzW3BhdGhdO1xyXG5cclxuICBpZiAocHJlc2VudGVyKSB7XHJcbiAgICBwcmVzZW50ZXIuaW5pdCgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykuaW5uZXJIVE1MID0gJzxoMT40MDQgUGFnZSBOb3QgRm91bmQ8L2gxPic7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRBcHAoKSB7XHJcbiAgdXBkYXRlTmF2TGlua3MoKTtcclxuICByZW5kZXJQYWdlKCk7XHJcblxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EubmF2LWxpbmsuZHJvcGRvd24tdG9nZ2xlJykuZm9yRWFjaCgoZHJvcGRvd25Ub2dnbGUpID0+IHtcclxuICAgIGRyb3Bkb3duVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGJpbmRMb2dvdXRCdXR0b24oKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2N1cnJlbnRVc2VyJyk7XHJcbiAgICB1cGRhdGVOYXZMaW5rcygpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnIy8nO1xyXG4gIH0pO1xyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsICgpID0+IHtcclxuICAgIHVwZGF0ZU5hdkxpbmtzKCk7XHJcbiAgICByZW5kZXJQYWdlKCk7XHJcbiAgfSk7XHJcbn1cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMDg2ZDFiZmM1NTgxYjM1YzFmYTZcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=