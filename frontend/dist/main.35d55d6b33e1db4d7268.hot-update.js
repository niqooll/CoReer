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
    loginLink.style.display = 'none';
    registerLink.style.display = 'none';
    profileDropdown.style.display = 'block';
  } else {
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
  const path = hash.slice(1); // Menghapus '#' di depan
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
    e.preventDefault(); // Cegah perubahan hash
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
/******/ 	__webpack_require__.h = () => ("c65484ec52e7b40ff956")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zNWQ1NWQ2YjMzZTFkYjRkNzI2OC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3dDO0FBQ2dCO0FBQ3hEO0FBQ0E7QUFDQSxlQUFlLHFFQUFjO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIsb0JBQW9CLHlEQUFNO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QixHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7O1VDaEVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvc2NyaXB0L2FwcC5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL3NjcmlwdC9hcHAuanNcclxuaW1wb3J0IHJvdXRlcyBmcm9tICcuL3JvdXRlcy9yb3V0ZXMuanMnO1xyXG5pbXBvcnQgeyBnZXRDdXJyZW50VXNlciB9IGZyb20gJy4vbW9kZWxzL2F1dGgtbW9kZWwuanMnO1xyXG5cclxuZnVuY3Rpb24gdXBkYXRlTmF2TGlua3MoKSB7XHJcbiAgY29uc3QgdXNlciA9IGdldEN1cnJlbnRVc2VyKCk7XHJcblxyXG4gIGNvbnN0IGxvZ2luTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi1saW5rJyk7XHJcbiAgY29uc3QgcmVnaXN0ZXJMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZ2lzdGVyLWxpbmsnKTtcclxuICBjb25zdCBwcm9maWxlRHJvcGRvd24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZmlsZS1kcm9wZG93bicpO1xyXG5cclxuICBpZiAodXNlcikge1xyXG4gICAgbG9naW5MaW5rLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICByZWdpc3Rlckxpbmsuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIHByb2ZpbGVEcm9wZG93bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICB9IGVsc2Uge1xyXG4gICAgbG9naW5MaW5rLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgcmVnaXN0ZXJMaW5rLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgcHJvZmlsZURyb3Bkb3duLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBiaW5kTG9nb3V0QnV0dG9uKGNhbGxiYWNrKSB7XHJcbiAgY29uc3QgbG9nb3V0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ291dC1idG4nKTtcclxuICBpZiAobG9nb3V0QnRuKSB7XHJcbiAgICBsb2dvdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclBhZ2UoKSB7XHJcbiAgY29uc3QgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoIHx8ICcjLyc7XHJcbiAgY29uc3QgcGF0aCA9IGhhc2guc2xpY2UoMSk7IC8vIE1lbmdoYXB1cyAnIycgZGkgZGVwYW5cclxuICBjb25zdCBwcmVzZW50ZXIgPSByb3V0ZXNbcGF0aF07XHJcblxyXG4gIGlmIChwcmVzZW50ZXIpIHtcclxuICAgIHByZXNlbnRlci5pbml0KCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKS5pbm5lckhUTUwgPSAnPGgxPjQwNCBQYWdlIE5vdCBGb3VuZDwvaDE+JztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0QXBwKCkge1xyXG4gIHVwZGF0ZU5hdkxpbmtzKCk7XHJcbiAgcmVuZGVyUGFnZSgpO1xyXG5cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhLm5hdi1saW5rLmRyb3Bkb3duLXRvZ2dsZScpLmZvckVhY2goKGRyb3Bkb3duVG9nZ2xlKSA9PiB7XHJcbiAgZHJvcGRvd25Ub2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBDZWdhaCBwZXJ1YmFoYW4gaGFzaFxyXG4gIH0pO1xyXG59KTtcclxuXHJcblxyXG4gIGJpbmRMb2dvdXRCdXR0b24oKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2N1cnJlbnRVc2VyJyk7XHJcbiAgICB1cGRhdGVOYXZMaW5rcygpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnIy8nO1xyXG4gIH0pO1xyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsICgpID0+IHtcclxuICAgIHVwZGF0ZU5hdkxpbmtzKCk7XHJcbiAgICByZW5kZXJQYWdlKCk7XHJcbiAgfSk7XHJcbn1cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYzY1NDg0ZWM1MmU3YjQwZmY5NTZcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=