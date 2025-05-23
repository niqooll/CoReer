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
/******/ 	__webpack_require__.h = () => ("d8f2a4c0417b8fd64c91")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jZTVmODE1ZGRlNjAzNGYyMTQxNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDd0M7QUFDUTtBQUNoRDtBQUNBO0FBQ0EsZ0JBQWdCLHlCQUF5QixJQUFJO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsNkRBQVU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDZEQUFVO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHlEQUFNO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNkRBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLEdBQUcsRUFBQzs7Ozs7Ozs7O1VDckduQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3NjcmlwdC9hcHAuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9zY3JpcHQvYXBwLmpzXHJcbi8vIHNyYy9zY3JpcHQvYXBwLmpzXHJcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMvcm91dGVzLmpzJztcclxuaW1wb3J0IEF1dGhIZWxwZXIgZnJvbSAnLi91dGlscy9hdXRoLWhlbHBlci5qcyc7XHJcblxyXG5jbGFzcyBBcHAge1xyXG4gIGNvbnN0cnVjdG9yKHsgYXBwQ29udGFpbmVySWQgPSAnYXBwJyB9ID0ge30pIHtcclxuICAgIHRoaXMuYXBwQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXBwQ29udGFpbmVySWQpO1xyXG5cclxuICAgIHRoaXMucHVibGljUm91dGVzID0gWycvJywgJy9sb2dpbicsICcvcmVnaXN0ZXInXTtcclxuXHJcbiAgICB0aGlzLl9iaW5kRXZlbnRzKCk7XHJcbiAgfVxyXG5cclxuICBfYmluZEV2ZW50cygpIHtcclxuICAgIC8vIEhhbmRsZSBrbGlrIGRyb3Bkb3duIHN1cGF5YSB0aWRhayByZWxvYWQgcGFnZVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYS5uYXYtbGluay5kcm9wZG93bi10b2dnbGUnKS5mb3JFYWNoKGRyb3Bkb3duVG9nZ2xlID0+IHtcclxuICAgICAgZHJvcGRvd25Ub2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IGUucHJldmVudERlZmF1bHQoKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBCaW5kIHRvbWJvbCBsb2dvdXRcclxuICAgIGNvbnN0IGxvZ291dEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dvdXQtYnRuJyk7XHJcbiAgICBpZiAobG9nb3V0QnRuKSB7XHJcbiAgICAgIGxvZ291dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMubG9nb3V0KCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEJpbmQgaGFzaGNoYW5nZSB1bnR1ayByb3V0ZSBkYW4gVUkgdXBkYXRlXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsICgpID0+IHtcclxuICAgICAgdGhpcy51cGRhdGVOYXZMaW5rcygpO1xyXG4gICAgICB0aGlzLnJlbmRlclBhZ2UoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlTmF2TGlua3MoKSB7XHJcbiAgICBjb25zdCB1c2VyID0gQXV0aEhlbHBlci5nZXRDdXJyZW50VXNlcigpO1xyXG5cclxuICAgIGNvbnN0IGxvZ2luTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi1saW5rJyk7XHJcbiAgICBjb25zdCByZWdpc3RlckxpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaXN0ZXItbGluaycpO1xyXG4gICAgY29uc3QgcHJvZmlsZURyb3Bkb3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2ZpbGUtZHJvcGRvd24nKTtcclxuICAgIGNvbnN0IGxhbmRpbmdMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xhbmRpbmctbGluaycpO1xyXG5cclxuICAgIGlmICh1c2VyKSB7XHJcbiAgICAgIGlmIChsb2dpbkxpbmspIGxvZ2luTGluay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICBpZiAocmVnaXN0ZXJMaW5rKSByZWdpc3Rlckxpbmsuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgaWYgKHByb2ZpbGVEcm9wZG93bikgcHJvZmlsZURyb3Bkb3duLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICBpZiAobGFuZGluZ0xpbmspIGxhbmRpbmdMaW5rLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKGxvZ2luTGluaykgbG9naW5MaW5rLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICBpZiAocmVnaXN0ZXJMaW5rKSByZWdpc3Rlckxpbmsuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgIGlmIChwcm9maWxlRHJvcGRvd24pIHByb2ZpbGVEcm9wZG93bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICBpZiAobGFuZGluZ0xpbmspIGxhbmRpbmdMaW5rLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyByZW5kZXJQYWdlKCkge1xyXG4gICAgY29uc3QgdXNlciA9IEF1dGhIZWxwZXIuZ2V0Q3VycmVudFVzZXIoKTtcclxuICAgIGNvbnN0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaCB8fCAnIy8nO1xyXG4gICAgY29uc3QgcGF0aCA9IGhhc2guc2xpY2UoMSk7XHJcblxyXG4gICAgLy8gUmVkaXJlY3Qgb3RvbWF0aXMgamlrYSBiZWx1bSBsb2dpbiBkYW4gYWtzZXMgcm91dGUgcHJpdmF0XHJcbiAgICBpZiAoIXVzZXIgJiYgIXRoaXMucHVibGljUm91dGVzLmluY2x1ZGVzKHBhdGgpKSB7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyMvbG9naW4nO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQW1iaWwgcHJlc2VudGVyL21vZHVsZSByb3V0ZSBzZWNhcmEgZGluYW1pcyAoc3VwcG9ydCBhc3luYyBpbXBvcnQgamlrYSBwZXJsdSlcclxuICAgIGxldCBwcmVzZW50ZXIgPSByb3V0ZXNbcGF0aF07XHJcblxyXG4gICAgaWYgKCFwcmVzZW50ZXIpIHtcclxuICAgICAgdGhpcy5hcHBDb250YWluZXIuaW5uZXJIVE1MID0gJzxoMT40MDQgUGFnZSBOb3QgRm91bmQ8L2gxPic7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBKaWthIHByZXNlbnRlciBiZXJiYXNpcyBjbGFzcyBkZW5nYW4gaW5pdCBhc3luY1xyXG4gICAgaWYgKHR5cGVvZiBwcmVzZW50ZXIgPT09ICdmdW5jdGlvbicgJiYgcHJlc2VudGVyLnByb3RvdHlwZT8uaW5pdCBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XHJcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IHByZXNlbnRlcih0aGlzLmFwcENvbnRhaW5lcik7XHJcbiAgICAgIGlmIChpbnN0YW5jZS5pbml0IGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcclxuICAgICAgICBhd2FpdCBpbnN0YW5jZS5pbml0KCk7XHJcbiAgICAgIH1cclxuICAgIH0gXHJcbiAgICAvLyBKaWthIHByZXNlbnRlciBvYmplayBkZW5nYW4gaW5pdCgpIGJpYXNhXHJcbiAgICBlbHNlIGlmIChwcmVzZW50ZXIuaW5pdCBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XHJcbiAgICAgIHByZXNlbnRlci5pbml0KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBGYWxsYmFjayByZW5kZXIgamlrYSBwcmVzZW50ZXIgbGFpblxyXG4gICAgICB0aGlzLmFwcENvbnRhaW5lci5pbm5lckhUTUwgPSAnPGgxPlByZXNlbnRlciBJbnZhbGlkPC9oMT4nO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbG9nb3V0KCkge1xyXG4gICAgQXV0aEhlbHBlci5jbGVhckF1dGgoKTtcclxuICAgIHRoaXMudXBkYXRlTmF2TGlua3MoKTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyMvJztcclxuICB9XHJcblxyXG4gIGFzeW5jIGluaXQoKSB7XHJcbiAgICB0aGlzLnVwZGF0ZU5hdkxpbmtzKCk7XHJcbiAgICBhd2FpdCB0aGlzLnJlbmRlclBhZ2UoKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZDhmMmE0YzA0MTdiOGZkNjRjOTFcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=