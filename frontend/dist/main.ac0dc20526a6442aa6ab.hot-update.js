"use strict";
self["webpackHotUpdatefrontend"]("main",{

/***/ "./src/script/app.js":
/*!***************************!*\
  !*** ./src/script/app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _routes_routes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes/routes.js */ "./src/script/routes/routes.js");
/* harmony import */ var _utils_auth_helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/auth-helper.js */ "./src/script/utils/auth-helper.js");
// src/script/app.js



class App {
  constructor({ appContainerId = 'app' } = {}) {
    this.appContainer = document.getElementById(appContainerId);

    this.publicRoutes = ['/', '/login', '/register'];

    this._bindEvents();
  }

  _bindEvents() {
    // Handle klik dropdown supaya tidak reload page
    document.querySelectorAll('a.nav-link.dropdown-toggle').forEach(dropdownToggle => {
      dropdownToggle.addEventListener('click', e => e.preventDefault());
    });

    // Bind tombol logout
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => this.logout());
    }

    // Bind hashchange untuk route dan UI update
    window.addEventListener('hashchange', () => {
      this.updateNavLinks();
      this.renderPage();
    });
  }

  updateNavLinks() {
    const user = _utils_auth_helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].getCurrentUser();

    const loginLink = document.getElementById('login-link');
    const registerLink = document.getElementById('register-link');
    const profileDropdown = document.getElementById('profile-dropdown');
    const landingLink = document.getElementById('landing-link');

    if (user) {
      if (loginLink) loginLink.style.display = 'none';
      if (registerLink) registerLink.style.display = 'none';
      if (profileDropdown) profileDropdown.style.display = 'block';
      if (landingLink) landingLink.style.display = 'block';
    } else {
      if (loginLink) loginLink.style.display = 'block';
      if (registerLink) registerLink.style.display = 'block';
      if (profileDropdown) profileDropdown.style.display = 'none';
      if (landingLink) landingLink.style.display = 'none';
    }
  }

  async renderPage() {
    const user = _utils_auth_helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].getCurrentUser();
    const hash = window.location.hash || '#/';
    const path = hash.slice(1);

    // Redirect otomatis jika belum login dan akses route privat
    if (!user && !this.publicRoutes.includes(path)) {
      window.location.hash = '#/login';
      return;
    }

    // Ambil presenter/module route secara dinamis (support async import jika perlu)
    let presenter = _routes_routes_js__WEBPACK_IMPORTED_MODULE_0__["default"][path];

    if (!presenter) {
      this.appContainer.innerHTML = '<h1>404 Page Not Found</h1>';
      return;
    }

    // Jika presenter berbasis class dengan init async
    if (typeof presenter === 'function' && presenter.prototype?.init instanceof Function) {
      const instance = new presenter(this.appContainer);
      if (instance.init instanceof Function) {
        await instance.init();
      }
    } 
    // Jika presenter objek dengan init() biasa
    else if (presenter.init instanceof Function) {
      presenter.init();
    } else {
      // Fallback render jika presenter lain
      this.appContainer.innerHTML = '<h1>Presenter Invalid</h1>';
    }
  }

  logout() {
    _utils_auth_helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].clearAuth();
    this.updateNavLinks();
    window.location.hash = '#/';
  }

  async init() {
    this.updateNavLinks();
    await this.renderPage();
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4f1c81764cdb049f7219")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hYzBkYzIwNTI2YTY0NDJhYTZhYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3dDO0FBQ1E7QUFDaEQ7QUFDQTtBQUNBLGdCQUFnQix5QkFBeUIsSUFBSTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDZEQUFVO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw2REFBVTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix5REFBTTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDZEQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxHQUFHLEVBQUM7Ozs7Ozs7OztVQ3BHbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9zY3JpcHQvYXBwLmpzIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvc2NyaXB0L2FwcC5qc1xyXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzL3JvdXRlcy5qcyc7XHJcbmltcG9ydCBBdXRoSGVscGVyIGZyb20gJy4vdXRpbHMvYXV0aC1oZWxwZXIuanMnO1xyXG5cclxuY2xhc3MgQXBwIHtcclxuICBjb25zdHJ1Y3Rvcih7IGFwcENvbnRhaW5lcklkID0gJ2FwcCcgfSA9IHt9KSB7XHJcbiAgICB0aGlzLmFwcENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGFwcENvbnRhaW5lcklkKTtcclxuXHJcbiAgICB0aGlzLnB1YmxpY1JvdXRlcyA9IFsnLycsICcvbG9naW4nLCAnL3JlZ2lzdGVyJ107XHJcblxyXG4gICAgdGhpcy5fYmluZEV2ZW50cygpO1xyXG4gIH1cclxuXHJcbiAgX2JpbmRFdmVudHMoKSB7XHJcbiAgICAvLyBIYW5kbGUga2xpayBkcm9wZG93biBzdXBheWEgdGlkYWsgcmVsb2FkIHBhZ2VcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EubmF2LWxpbmsuZHJvcGRvd24tdG9nZ2xlJykuZm9yRWFjaChkcm9wZG93blRvZ2dsZSA9PiB7XHJcbiAgICAgIGRyb3Bkb3duVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiBlLnByZXZlbnREZWZhdWx0KCkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQmluZCB0b21ib2wgbG9nb3V0XHJcbiAgICBjb25zdCBsb2dvdXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nb3V0LWJ0bicpO1xyXG4gICAgaWYgKGxvZ291dEJ0bikge1xyXG4gICAgICBsb2dvdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmxvZ291dCgpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBCaW5kIGhhc2hjaGFuZ2UgdW50dWsgcm91dGUgZGFuIFVJIHVwZGF0ZVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMudXBkYXRlTmF2TGlua3MoKTtcclxuICAgICAgdGhpcy5yZW5kZXJQYWdlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZU5hdkxpbmtzKCkge1xyXG4gICAgY29uc3QgdXNlciA9IEF1dGhIZWxwZXIuZ2V0Q3VycmVudFVzZXIoKTtcclxuXHJcbiAgICBjb25zdCBsb2dpbkxpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4tbGluaycpO1xyXG4gICAgY29uc3QgcmVnaXN0ZXJMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZ2lzdGVyLWxpbmsnKTtcclxuICAgIGNvbnN0IHByb2ZpbGVEcm9wZG93biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9maWxlLWRyb3Bkb3duJyk7XHJcbiAgICBjb25zdCBsYW5kaW5nTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYW5kaW5nLWxpbmsnKTtcclxuXHJcbiAgICBpZiAodXNlcikge1xyXG4gICAgICBpZiAobG9naW5MaW5rKSBsb2dpbkxpbmsuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgaWYgKHJlZ2lzdGVyTGluaykgcmVnaXN0ZXJMaW5rLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIGlmIChwcm9maWxlRHJvcGRvd24pIHByb2ZpbGVEcm9wZG93bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgaWYgKGxhbmRpbmdMaW5rKSBsYW5kaW5nTGluay5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChsb2dpbkxpbmspIGxvZ2luTGluay5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgaWYgKHJlZ2lzdGVyTGluaykgcmVnaXN0ZXJMaW5rLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICBpZiAocHJvZmlsZURyb3Bkb3duKSBwcm9maWxlRHJvcGRvd24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgaWYgKGxhbmRpbmdMaW5rKSBsYW5kaW5nTGluay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgcmVuZGVyUGFnZSgpIHtcclxuICAgIGNvbnN0IHVzZXIgPSBBdXRoSGVscGVyLmdldEN1cnJlbnRVc2VyKCk7XHJcbiAgICBjb25zdCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2ggfHwgJyMvJztcclxuICAgIGNvbnN0IHBhdGggPSBoYXNoLnNsaWNlKDEpO1xyXG5cclxuICAgIC8vIFJlZGlyZWN0IG90b21hdGlzIGppa2EgYmVsdW0gbG9naW4gZGFuIGFrc2VzIHJvdXRlIHByaXZhdFxyXG4gICAgaWYgKCF1c2VyICYmICF0aGlzLnB1YmxpY1JvdXRlcy5pbmNsdWRlcyhwYXRoKSkge1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcjL2xvZ2luJztcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFtYmlsIHByZXNlbnRlci9tb2R1bGUgcm91dGUgc2VjYXJhIGRpbmFtaXMgKHN1cHBvcnQgYXN5bmMgaW1wb3J0IGppa2EgcGVybHUpXHJcbiAgICBsZXQgcHJlc2VudGVyID0gcm91dGVzW3BhdGhdO1xyXG5cclxuICAgIGlmICghcHJlc2VudGVyKSB7XHJcbiAgICAgIHRoaXMuYXBwQ29udGFpbmVyLmlubmVySFRNTCA9ICc8aDE+NDA0IFBhZ2UgTm90IEZvdW5kPC9oMT4nO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSmlrYSBwcmVzZW50ZXIgYmVyYmFzaXMgY2xhc3MgZGVuZ2FuIGluaXQgYXN5bmNcclxuICAgIGlmICh0eXBlb2YgcHJlc2VudGVyID09PSAnZnVuY3Rpb24nICYmIHByZXNlbnRlci5wcm90b3R5cGU/LmluaXQgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xyXG4gICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBwcmVzZW50ZXIodGhpcy5hcHBDb250YWluZXIpO1xyXG4gICAgICBpZiAoaW5zdGFuY2UuaW5pdCBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgYXdhaXQgaW5zdGFuY2UuaW5pdCgpO1xyXG4gICAgICB9XHJcbiAgICB9IFxyXG4gICAgLy8gSmlrYSBwcmVzZW50ZXIgb2JqZWsgZGVuZ2FuIGluaXQoKSBiaWFzYVxyXG4gICAgZWxzZSBpZiAocHJlc2VudGVyLmluaXQgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xyXG4gICAgICBwcmVzZW50ZXIuaW5pdCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gRmFsbGJhY2sgcmVuZGVyIGppa2EgcHJlc2VudGVyIGxhaW5cclxuICAgICAgdGhpcy5hcHBDb250YWluZXIuaW5uZXJIVE1MID0gJzxoMT5QcmVzZW50ZXIgSW52YWxpZDwvaDE+JztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxvZ291dCgpIHtcclxuICAgIEF1dGhIZWxwZXIuY2xlYXJBdXRoKCk7XHJcbiAgICB0aGlzLnVwZGF0ZU5hdkxpbmtzKCk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcjLyc7XHJcbiAgfVxyXG5cclxuICBhc3luYyBpbml0KCkge1xyXG4gICAgdGhpcy51cGRhdGVOYXZMaW5rcygpO1xyXG4gICAgYXdhaXQgdGhpcy5yZW5kZXJQYWdlKCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjRmMWM4MTc2NGNkYjA0OWY3MjE5XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9