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

  renderPage(window.location.pathname);

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
/******/ 	__webpack_require__.h = () => ("fc9e2d862da030909ea3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5mYThlMTIwMjIxYzViNjNhOTIxYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3dDO0FBQ2dCO0FBQ3hEO0FBQ0E7QUFDQSxlQUFlLHFFQUFjO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLG9CQUFvQix5REFBTTtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7O1VDeEVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvc2NyaXB0L2FwcC5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL3NjcmlwdC9hcHAuanNcclxuaW1wb3J0IHJvdXRlcyBmcm9tICcuL3JvdXRlcy9yb3V0ZXMuanMnO1xyXG5pbXBvcnQgeyBnZXRDdXJyZW50VXNlciB9IGZyb20gJy4vbW9kZWxzL2F1dGgtbW9kZWwuanMnO1xyXG5cclxuZnVuY3Rpb24gdXBkYXRlTmF2TGlua3MoKSB7XHJcbiAgY29uc3QgdXNlciA9IGdldEN1cnJlbnRVc2VyKCk7XHJcblxyXG4gIGNvbnN0IGxvZ2luTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi1saW5rJyk7XHJcbiAgY29uc3QgcmVnaXN0ZXJMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZ2lzdGVyLWxpbmsnKTtcclxuICBjb25zdCBwcm9maWxlRHJvcGRvd24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZmlsZS1kcm9wZG93bicpO1xyXG5cclxuICBpZiAodXNlcikge1xyXG4gICAgLy8gVXNlciBzdWRhaCBsb2dpbjogc2VtYnVueWlrYW4gbG9naW4vcmVnaXN0ZXIsIHRhbXBpbGthbiBwcm9maWxlIGRyb3Bkb3duXHJcbiAgICBsb2dpbkxpbmsuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIHJlZ2lzdGVyTGluay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgcHJvZmlsZURyb3Bkb3duLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBVc2VyIGJlbHVtIGxvZ2luOiB0YW1waWxrYW4gbG9naW4vcmVnaXN0ZXIsIHNlbWJ1bnlpa2FuIHByb2ZpbGUgZHJvcGRvd25cclxuICAgIGxvZ2luTGluay5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIHJlZ2lzdGVyTGluay5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIHByb2ZpbGVEcm9wZG93bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYmluZExvZ291dEJ1dHRvbihjYWxsYmFjaykge1xyXG4gIGNvbnN0IGxvZ291dEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dvdXQtYnRuJyk7XHJcbiAgaWYgKGxvZ291dEJ0bikge1xyXG4gICAgbG9nb3V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjYWxsYmFjaygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJQYWdlKCkge1xyXG4gIGNvbnN0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaCB8fCAnIy8nO1xyXG4gIGNvbnN0IHBhdGggPSBoYXNoLnNsaWNlKDEpOyAvLyBtZW5naGFwdXMgJyMnIGRpIGRlcGFuXHJcbiAgY29uc3QgcHJlc2VudGVyID0gcm91dGVzW3BhdGhdO1xyXG4gIFxyXG4gIGlmIChwcmVzZW50ZXIpIHtcclxuICAgIHByZXNlbnRlci5pbml0KCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKS5pbm5lckhUTUwgPSAnPGgxPjQwNCBQYWdlIE5vdCBGb3VuZDwvaDE+JztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0QXBwKCkge1xyXG4gIHVwZGF0ZU5hdkxpbmtzKCk7XHJcblxyXG4gIHJlbmRlclBhZ2Uod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbmF2IGEnKS5mb3JFYWNoKChsaW5rKSA9PiB7XHJcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGNvbnN0IHBhdGggPSBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG4gICAgICBoaXN0b3J5LnB1c2hTdGF0ZSh7fSwgJycsIHBhdGgpO1xyXG4gICAgICByZW5kZXJQYWdlKHBhdGgpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGJpbmRMb2dvdXRCdXR0b24oKCkgPT4ge1xyXG4gICAgLy8gTG9nb3V0IGxvZ2ljIGhlcmU6XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY3VycmVudFVzZXInKTtcclxuICAgIHVwZGF0ZU5hdkxpbmtzKCk7XHJcblxyXG4gICAgaGlzdG9yeS5wdXNoU3RhdGUoe30sICcnLCAnLycpO1xyXG4gICAgcmVuZGVyUGFnZSgnLycpO1xyXG4gIH0pO1xyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCAoKSA9PiB7XHJcbiAgICB1cGRhdGVOYXZMaW5rcygpO1xyXG4gICAgcmVuZGVyUGFnZSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xyXG4gIH0pO1xyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImZjOWUyZDg2MmRhMDMwOTA5ZWEzXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9