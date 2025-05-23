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
/* harmony import */ var _models_auth_model_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/auth-model.js */ "./src/script/models/auth-model.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/index.js */ "./src/script/utils/index.js");
// src/script/app.js




class App {
  constructor({ appContainerId = 'app' } = {}) {
    this.appContainer = document.getElementById(appContainerId);
    this.publicRoutes = ['/', '/login', '/register'];
    this._bindEvents();
  }

  _bindEvents() {
    document.querySelectorAll('a.nav-link.dropdown-toggle').forEach(dropdownToggle => {
      dropdownToggle.addEventListener('click', e => e.preventDefault());
    });

    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => this.logout());
    }

    window.addEventListener('hashchange', () => {
      this.updateNavLinks();
      this.renderPage();
    });
  }

  updateNavLinks() {
    const user = (0,_models_auth_model_js__WEBPACK_IMPORTED_MODULE_1__.getCurrentUser)();

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
    const user = (0,_models_auth_model_js__WEBPACK_IMPORTED_MODULE_1__.getCurrentUser)();
    const hash = window.location.hash || '#/';
    const path = hash.slice(1);

    if (!user && !this.publicRoutes.includes(path)) {
      window.location.hash = '#/login';
      return;
    }

    const presenter = _routes_routes_js__WEBPACK_IMPORTED_MODULE_0__["default"][path];

    if (!presenter) {
      this.appContainer.innerHTML = '<h1>404 Page Not Found</h1>';
      return;
    }

    await (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_2__.applyViewTransition)('#app', async () => {
      if (typeof presenter === 'function' && presenter.prototype?.init instanceof Function) {
        const instance = new presenter(this.appContainer);
        if (instance.init instanceof Function) {
          await instance.init();
        }
      } else if (presenter.init instanceof Function) {
        await presenter.init();
      } else {
        this.appContainer.innerHTML = '<h1>Presenter Invalid</h1>';
      }
    });
  }

  logout() {
    (0,_models_auth_model_js__WEBPACK_IMPORTED_MODULE_1__.logout)();
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
/******/ 	__webpack_require__.h = () => ("6df81d68cd0d3151862b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi45NGQ2NGQ3OWY4MmM5ZjI2ZDQ0My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUN3QztBQUN5QztBQUMxQjtBQUN2RDtBQUNBO0FBQ0EsZ0JBQWdCLHlCQUF5QixJQUFJO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixxRUFBYztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIscUVBQWM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix5REFBTTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLG9FQUFtQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBSSw2REFBYTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLEdBQUcsRUFBQzs7Ozs7Ozs7O1VDNUZuQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3NjcmlwdC9hcHAuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9zY3JpcHQvYXBwLmpzXHJcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMvcm91dGVzLmpzJztcclxuaW1wb3J0IHsgZ2V0Q3VycmVudFVzZXIsIGxvZ291dCBhcyBwZXJmb3JtTG9nb3V0IH0gZnJvbSAnLi9tb2RlbHMvYXV0aC1tb2RlbC5qcyc7XHJcbmltcG9ydCB7IGFwcGx5Vmlld1RyYW5zaXRpb24gfSBmcm9tICcuL3V0aWxzL2luZGV4LmpzJztcclxuXHJcbmNsYXNzIEFwcCB7XHJcbiAgY29uc3RydWN0b3IoeyBhcHBDb250YWluZXJJZCA9ICdhcHAnIH0gPSB7fSkge1xyXG4gICAgdGhpcy5hcHBDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhcHBDb250YWluZXJJZCk7XHJcbiAgICB0aGlzLnB1YmxpY1JvdXRlcyA9IFsnLycsICcvbG9naW4nLCAnL3JlZ2lzdGVyJ107XHJcbiAgICB0aGlzLl9iaW5kRXZlbnRzKCk7XHJcbiAgfVxyXG5cclxuICBfYmluZEV2ZW50cygpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EubmF2LWxpbmsuZHJvcGRvd24tdG9nZ2xlJykuZm9yRWFjaChkcm9wZG93blRvZ2dsZSA9PiB7XHJcbiAgICAgIGRyb3Bkb3duVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiBlLnByZXZlbnREZWZhdWx0KCkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgbG9nb3V0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ291dC1idG4nKTtcclxuICAgIGlmIChsb2dvdXRCdG4pIHtcclxuICAgICAgbG9nb3V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5sb2dvdXQoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMudXBkYXRlTmF2TGlua3MoKTtcclxuICAgICAgdGhpcy5yZW5kZXJQYWdlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZU5hdkxpbmtzKCkge1xyXG4gICAgY29uc3QgdXNlciA9IGdldEN1cnJlbnRVc2VyKCk7XHJcblxyXG4gICAgY29uc3QgbG9naW5MaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luLWxpbmsnKTtcclxuICAgIGNvbnN0IHJlZ2lzdGVyTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWdpc3Rlci1saW5rJyk7XHJcbiAgICBjb25zdCBwcm9maWxlRHJvcGRvd24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZmlsZS1kcm9wZG93bicpO1xyXG4gICAgY29uc3QgbGFuZGluZ0xpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGFuZGluZy1saW5rJyk7XHJcblxyXG4gICAgaWYgKHVzZXIpIHtcclxuICAgICAgaWYgKGxvZ2luTGluaykgbG9naW5MaW5rLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIGlmIChyZWdpc3RlckxpbmspIHJlZ2lzdGVyTGluay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICBpZiAocHJvZmlsZURyb3Bkb3duKSBwcm9maWxlRHJvcGRvd24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgIGlmIChsYW5kaW5nTGluaykgbGFuZGluZ0xpbmsuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAobG9naW5MaW5rKSBsb2dpbkxpbmsuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgIGlmIChyZWdpc3RlckxpbmspIHJlZ2lzdGVyTGluay5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgaWYgKHByb2ZpbGVEcm9wZG93bikgcHJvZmlsZURyb3Bkb3duLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIGlmIChsYW5kaW5nTGluaykgbGFuZGluZ0xpbmsuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIHJlbmRlclBhZ2UoKSB7XHJcbiAgICBjb25zdCB1c2VyID0gZ2V0Q3VycmVudFVzZXIoKTtcclxuICAgIGNvbnN0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaCB8fCAnIy8nO1xyXG4gICAgY29uc3QgcGF0aCA9IGhhc2guc2xpY2UoMSk7XHJcblxyXG4gICAgaWYgKCF1c2VyICYmICF0aGlzLnB1YmxpY1JvdXRlcy5pbmNsdWRlcyhwYXRoKSkge1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcjL2xvZ2luJztcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByZXNlbnRlciA9IHJvdXRlc1twYXRoXTtcclxuXHJcbiAgICBpZiAoIXByZXNlbnRlcikge1xyXG4gICAgICB0aGlzLmFwcENvbnRhaW5lci5pbm5lckhUTUwgPSAnPGgxPjQwNCBQYWdlIE5vdCBGb3VuZDwvaDE+JztcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGF3YWl0IGFwcGx5Vmlld1RyYW5zaXRpb24oJyNhcHAnLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmICh0eXBlb2YgcHJlc2VudGVyID09PSAnZnVuY3Rpb24nICYmIHByZXNlbnRlci5wcm90b3R5cGU/LmluaXQgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IHByZXNlbnRlcih0aGlzLmFwcENvbnRhaW5lcik7XHJcbiAgICAgICAgaWYgKGluc3RhbmNlLmluaXQgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xyXG4gICAgICAgICAgYXdhaXQgaW5zdGFuY2UuaW5pdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChwcmVzZW50ZXIuaW5pdCBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgYXdhaXQgcHJlc2VudGVyLmluaXQoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmFwcENvbnRhaW5lci5pbm5lckhUTUwgPSAnPGgxPlByZXNlbnRlciBJbnZhbGlkPC9oMT4nO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGxvZ291dCgpIHtcclxuICAgIHBlcmZvcm1Mb2dvdXQoKTtcclxuICAgIHRoaXMudXBkYXRlTmF2TGlua3MoKTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyMvJztcclxuICB9XHJcblxyXG4gIGFzeW5jIGluaXQoKSB7XHJcbiAgICB0aGlzLnVwZGF0ZU5hdkxpbmtzKCk7XHJcbiAgICBhd2FpdCB0aGlzLnJlbmRlclBhZ2UoKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNmRmODFkNjhjZDBkMzE1MTg2MmJcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=