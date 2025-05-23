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
/******/ 	__webpack_require__.h = () => ("328ec3d17e0af13e6b60")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi45ZGQyZGNhNzIxMWEwMmQ3OGEwMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3dDO0FBQ2dCO0FBQ3hEO0FBQ0E7QUFDQSxlQUFlLHFFQUFjO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxRUFBYztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IseURBQU07QUFDMUI7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7VUMvRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9zY3JpcHQvYXBwLmpzIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvc2NyaXB0L2FwcC5qc1xyXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzL3JvdXRlcy5qcyc7XHJcbmltcG9ydCB7IGdldEN1cnJlbnRVc2VyIH0gZnJvbSAnLi9tb2RlbHMvYXV0aC1tb2RlbC5qcyc7XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVOYXZMaW5rcygpIHtcclxuICBjb25zdCB1c2VyID0gZ2V0Q3VycmVudFVzZXIoKTtcclxuXHJcbiAgY29uc3QgbG9naW5MaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luLWxpbmsnKTtcclxuICBjb25zdCByZWdpc3RlckxpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaXN0ZXItbGluaycpO1xyXG4gIGNvbnN0IHByb2ZpbGVEcm9wZG93biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9maWxlLWRyb3Bkb3duJyk7XHJcbiAgY29uc3QgbGFuZGluZ0xpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGFuZGluZy1saW5rJyk7XHJcblxyXG4gIGlmICh1c2VyKSB7XHJcbiAgICBsb2dpbkxpbmsuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIHJlZ2lzdGVyTGluay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgcHJvZmlsZURyb3Bkb3duLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgbGFuZGluZ0xpbmsuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgfSBlbHNlIHtcclxuICAgIGxvZ2luTGluay5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIHJlZ2lzdGVyTGluay5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIHByb2ZpbGVEcm9wZG93bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgbGFuZGluZ0xpbmsuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJpbmRMb2dvdXRCdXR0b24oY2FsbGJhY2spIHtcclxuICBjb25zdCBsb2dvdXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nb3V0LWJ0bicpO1xyXG4gIGlmIChsb2dvdXRCdG4pIHtcclxuICAgIGxvZ291dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgY2FsbGJhY2soKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyUGFnZSgpIHtcclxuICBjb25zdCB1c2VyID0gZ2V0Q3VycmVudFVzZXIoKTtcclxuICBjb25zdCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2ggfHwgJyMvJztcclxuICBjb25zdCBwYXRoID0gaGFzaC5zbGljZSgxKTtcclxuXHJcbiAgLy8gRGFmdGFyIHJvdXRlIHlhbmcgYm9sZWggZGlha3NlcyBzYWF0IGJlbHVtIGxvZ2luXHJcbiAgY29uc3QgcHVibGljUm91dGVzID0gWycvJywgJy9sb2dpbicsICcvcmVnaXN0ZXInXTtcclxuXHJcbiAgaWYgKCF1c2VyICYmICFwdWJsaWNSb3V0ZXMuaW5jbHVkZXMocGF0aCkpIHtcclxuICAgIC8vIEJlbHVtIGxvZ2luIGRhbiBha3NlcyBoYWxhbWFuIHNlbGFpbiB5YW5nIGRpaXppbmthblxyXG4gICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnIy9sb2dpbic7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBjb25zdCBwcmVzZW50ZXIgPSByb3V0ZXNbcGF0aF07XHJcblxyXG4gIGlmIChwcmVzZW50ZXIpIHtcclxuICAgIHByZXNlbnRlci5pbml0KCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKS5pbm5lckhUTUwgPSAnPGgxPjQwNCBQYWdlIE5vdCBGb3VuZDwvaDE+JztcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdEFwcCgpIHtcclxuICB1cGRhdGVOYXZMaW5rcygpO1xyXG4gIHJlbmRlclBhZ2UoKTtcclxuXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYS5uYXYtbGluay5kcm9wZG93bi10b2dnbGUnKS5mb3JFYWNoKChkcm9wZG93blRvZ2dsZSkgPT4ge1xyXG4gICAgZHJvcGRvd25Ub2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcblxyXG4gIGJpbmRMb2dvdXRCdXR0b24oKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2N1cnJlbnRVc2VyJyk7XHJcbiAgICB1cGRhdGVOYXZMaW5rcygpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnIy8nO1xyXG4gIH0pO1xyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsICgpID0+IHtcclxuICAgIHVwZGF0ZU5hdkxpbmtzKCk7XHJcbiAgICByZW5kZXJQYWdlKCk7XHJcbiAgfSk7XHJcbn1cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMzI4ZWMzZDE3ZTBhZjEzZTZiNjBcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=