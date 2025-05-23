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


/***/ }),

/***/ "./src/script/utils/index.js":
/*!***********************************!*\
  !*** ./src/script/utils/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyViewTransition: () => (/* binding */ applyViewTransition)
/* harmony export */ });
// utils/index.js

async function applyViewTransition(contentSelector, renderCallback) {
  const contentWrapper = document.querySelector(contentSelector);

  if (!document.startViewTransition || !contentWrapper) {
    // Jika View Transition API tidak didukung, langsung render saja
    await renderCallback();
    return;
  }

  const scrollY = window.scrollY;

  const transition = document.startViewTransition(async () => {
    await renderCallback();
    // Kembalikan posisi scroll setelah render
    requestAnimationFrame(() => {
      window.scrollTo(0, scrollY);
    });
  });

  await transition.finished;
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c6daa35e61e4c8b10bdd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40ZjFjODE3NjRjZGIwNDlmNzIxOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUN3QztBQUNRO0FBQ087QUFDdkQ7QUFDQTtBQUNBLGdCQUFnQix5QkFBeUIsSUFBSTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsNkRBQVU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDZEQUFVO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IseURBQU07QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxvRUFBbUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUksNkRBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLEdBQUcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDNUZuQjtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTs7Ozs7Ozs7O1VDdEJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvc2NyaXB0L2FwcC5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9zY3JpcHQvdXRpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9zY3JpcHQvYXBwLmpzXHJcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMvcm91dGVzLmpzJztcclxuaW1wb3J0IEF1dGhIZWxwZXIgZnJvbSAnLi91dGlscy9hdXRoLWhlbHBlci5qcyc7XHJcbmltcG9ydCB7IGFwcGx5Vmlld1RyYW5zaXRpb24gfSBmcm9tICcuL3V0aWxzL2luZGV4LmpzJztcclxuXHJcbmNsYXNzIEFwcCB7XHJcbiAgY29uc3RydWN0b3IoeyBhcHBDb250YWluZXJJZCA9ICdhcHAnIH0gPSB7fSkge1xyXG4gICAgdGhpcy5hcHBDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhcHBDb250YWluZXJJZCk7XHJcbiAgICB0aGlzLnB1YmxpY1JvdXRlcyA9IFsnLycsICcvbG9naW4nLCAnL3JlZ2lzdGVyJ107XHJcbiAgICB0aGlzLl9iaW5kRXZlbnRzKCk7XHJcbiAgfVxyXG5cclxuICBfYmluZEV2ZW50cygpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EubmF2LWxpbmsuZHJvcGRvd24tdG9nZ2xlJykuZm9yRWFjaChkcm9wZG93blRvZ2dsZSA9PiB7XHJcbiAgICAgIGRyb3Bkb3duVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiBlLnByZXZlbnREZWZhdWx0KCkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgbG9nb3V0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ291dC1idG4nKTtcclxuICAgIGlmIChsb2dvdXRCdG4pIHtcclxuICAgICAgbG9nb3V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5sb2dvdXQoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMudXBkYXRlTmF2TGlua3MoKTtcclxuICAgICAgdGhpcy5yZW5kZXJQYWdlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZU5hdkxpbmtzKCkge1xyXG4gICAgY29uc3QgdXNlciA9IEF1dGhIZWxwZXIuZ2V0Q3VycmVudFVzZXIoKTtcclxuXHJcbiAgICBjb25zdCBsb2dpbkxpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4tbGluaycpO1xyXG4gICAgY29uc3QgcmVnaXN0ZXJMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZ2lzdGVyLWxpbmsnKTtcclxuICAgIGNvbnN0IHByb2ZpbGVEcm9wZG93biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9maWxlLWRyb3Bkb3duJyk7XHJcbiAgICBjb25zdCBsYW5kaW5nTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYW5kaW5nLWxpbmsnKTtcclxuXHJcbiAgICBpZiAodXNlcikge1xyXG4gICAgICBpZiAobG9naW5MaW5rKSBsb2dpbkxpbmsuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgaWYgKHJlZ2lzdGVyTGluaykgcmVnaXN0ZXJMaW5rLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIGlmIChwcm9maWxlRHJvcGRvd24pIHByb2ZpbGVEcm9wZG93bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgaWYgKGxhbmRpbmdMaW5rKSBsYW5kaW5nTGluay5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChsb2dpbkxpbmspIGxvZ2luTGluay5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgaWYgKHJlZ2lzdGVyTGluaykgcmVnaXN0ZXJMaW5rLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICBpZiAocHJvZmlsZURyb3Bkb3duKSBwcm9maWxlRHJvcGRvd24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgaWYgKGxhbmRpbmdMaW5rKSBsYW5kaW5nTGluay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgcmVuZGVyUGFnZSgpIHtcclxuICAgIGNvbnN0IHVzZXIgPSBBdXRoSGVscGVyLmdldEN1cnJlbnRVc2VyKCk7XHJcbiAgICBjb25zdCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2ggfHwgJyMvJztcclxuICAgIGNvbnN0IHBhdGggPSBoYXNoLnNsaWNlKDEpO1xyXG5cclxuICAgIGlmICghdXNlciAmJiAhdGhpcy5wdWJsaWNSb3V0ZXMuaW5jbHVkZXMocGF0aCkpIHtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnIy9sb2dpbic7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwcmVzZW50ZXIgPSByb3V0ZXNbcGF0aF07XHJcblxyXG4gICAgaWYgKCFwcmVzZW50ZXIpIHtcclxuICAgICAgdGhpcy5hcHBDb250YWluZXIuaW5uZXJIVE1MID0gJzxoMT40MDQgUGFnZSBOb3QgRm91bmQ8L2gxPic7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBhd2FpdCBhcHBseVZpZXdUcmFuc2l0aW9uKCcjYXBwJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAodHlwZW9mIHByZXNlbnRlciA9PT0gJ2Z1bmN0aW9uJyAmJiBwcmVzZW50ZXIucHJvdG90eXBlPy5pbml0IGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcclxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBwcmVzZW50ZXIodGhpcy5hcHBDb250YWluZXIpO1xyXG4gICAgICAgIGlmIChpbnN0YW5jZS5pbml0IGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcclxuICAgICAgICAgIGF3YWl0IGluc3RhbmNlLmluaXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAocHJlc2VudGVyLmluaXQgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xyXG4gICAgICAgIGF3YWl0IHByZXNlbnRlci5pbml0KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5hcHBDb250YWluZXIuaW5uZXJIVE1MID0gJzxoMT5QcmVzZW50ZXIgSW52YWxpZDwvaDE+JztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBsb2dvdXQoKSB7XHJcbiAgICBBdXRoSGVscGVyLmNsZWFyQXV0aCgpO1xyXG4gICAgdGhpcy51cGRhdGVOYXZMaW5rcygpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnIy8nO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgaW5pdCgpIHtcclxuICAgIHRoaXMudXBkYXRlTmF2TGlua3MoKTtcclxuICAgIGF3YWl0IHRoaXMucmVuZGVyUGFnZSgpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iLCIvLyB1dGlscy9pbmRleC5qc1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFwcGx5Vmlld1RyYW5zaXRpb24oY29udGVudFNlbGVjdG9yLCByZW5kZXJDYWxsYmFjaykge1xyXG4gIGNvbnN0IGNvbnRlbnRXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250ZW50U2VsZWN0b3IpO1xyXG5cclxuICBpZiAoIWRvY3VtZW50LnN0YXJ0Vmlld1RyYW5zaXRpb24gfHwgIWNvbnRlbnRXcmFwcGVyKSB7XHJcbiAgICAvLyBKaWthIFZpZXcgVHJhbnNpdGlvbiBBUEkgdGlkYWsgZGlkdWt1bmcsIGxhbmdzdW5nIHJlbmRlciBzYWphXHJcbiAgICBhd2FpdCByZW5kZXJDYWxsYmFjaygpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZO1xyXG5cclxuICBjb25zdCB0cmFuc2l0aW9uID0gZG9jdW1lbnQuc3RhcnRWaWV3VHJhbnNpdGlvbihhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCByZW5kZXJDYWxsYmFjaygpO1xyXG4gICAgLy8gS2VtYmFsaWthbiBwb3Npc2kgc2Nyb2xsIHNldGVsYWggcmVuZGVyXHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgc2Nyb2xsWSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgYXdhaXQgdHJhbnNpdGlvbi5maW5pc2hlZDtcclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjNmRhYTM1ZTYxZTRjOGIxMGJkZFwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==