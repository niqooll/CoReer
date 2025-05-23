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

    let presenter = _routes_routes_js__WEBPACK_IMPORTED_MODULE_0__["default"][path];

    if (!presenter) {
      this.appContainer.innerHTML = '<h1>404 Page Not Found</h1>';
      return;
    }

    await (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])('#app', async () => {
      // Jika presenter adalah class dengan init async
      if (typeof presenter === 'function' && presenter.prototype?.init instanceof Function) {
        const instance = new presenter(this.appContainer);
        if (instance.init instanceof Function) {
          await instance.init();
        }
      } 
      // Jika presenter adalah objek dengan init()
      else if (presenter.init instanceof Function) {
        await presenter.init();
      } else {
        this.appContainer.innerHTML = '<h1>Presenter Invalid</h1>';
      }
      // Karena presenter sudah render DOM sendiri, return string kosong
      return '';
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
/* harmony export */   "default": () => (/* binding */ applyViewTransition),
/* harmony export */   setupSkipLink: () => (/* binding */ setupSkipLink),
/* harmony export */   showFormattedDate: () => (/* binding */ showFormattedDate),
/* harmony export */   sleep: () => (/* binding */ sleep)
/* harmony export */ });
// utils/index.js
function showFormattedDate(date, locale = 'en-US', options = {}) {
  return new Date(date).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options,
  });
}

function sleep(time = 1000) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

async function applyViewTransition(contentSelector, renderCallback) {
  const contentWrapper = document.querySelector(contentSelector);

  if (!document.startViewTransition || !contentWrapper) {
    // Fallback jika tidak support View Transition API
    contentWrapper.innerHTML = await renderCallback();
    return;
  }

  const scrollY = window.scrollY;

  const transition = document.startViewTransition(async () => {
    try {
      contentWrapper.innerHTML = await renderCallback();
      // Kembalikan scroll position setelah render
      requestAnimationFrame(() => {
        window.scrollTo(0, scrollY);
      });
    } catch (error) {
      console.error('Render error during transition:', error);
      throw error;
    }
  });

  await transition.finished;
}

const setupSkipLink = () => {
  const mainContent = document.querySelector("#main-content");
  const skipLink = document.querySelector(".skip-link");

  skipLink.addEventListener("click", function (event) {
    event.preventDefault();
    mainContent.setAttribute("tabindex", "-1");
    mainContent.focus();
    mainContent.scrollIntoView({ behavior: "smooth" });
    skipLink.blur();
  });
};


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ac0dc20526a6442aa6ab")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi45NWFiZTc4OTQ3MzgyNDFiZWE3Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUN3QztBQUNRO0FBQ0c7QUFDbkQ7QUFDQTtBQUNBLGdCQUFnQix5QkFBeUIsSUFBSTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsNkRBQVU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDZEQUFVO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IseURBQU07QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSwyREFBbUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBSSw2REFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsR0FBRyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqR25CO0FBQ08sK0RBQStEO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxvQkFBb0I7QUFDckQ7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7OztVQ3BEQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3NjcmlwdC9hcHAuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvc2NyaXB0L3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvc2NyaXB0L2FwcC5qc1xyXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzL3JvdXRlcy5qcyc7XHJcbmltcG9ydCBBdXRoSGVscGVyIGZyb20gJy4vdXRpbHMvYXV0aC1oZWxwZXIuanMnO1xyXG5pbXBvcnQgYXBwbHlWaWV3VHJhbnNpdGlvbiBmcm9tICcuL3V0aWxzL2luZGV4LmpzJztcclxuXHJcbmNsYXNzIEFwcCB7XHJcbiAgY29uc3RydWN0b3IoeyBhcHBDb250YWluZXJJZCA9ICdhcHAnIH0gPSB7fSkge1xyXG4gICAgdGhpcy5hcHBDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhcHBDb250YWluZXJJZCk7XHJcbiAgICB0aGlzLnB1YmxpY1JvdXRlcyA9IFsnLycsICcvbG9naW4nLCAnL3JlZ2lzdGVyJ107XHJcbiAgICB0aGlzLl9iaW5kRXZlbnRzKCk7XHJcbiAgfVxyXG5cclxuICBfYmluZEV2ZW50cygpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EubmF2LWxpbmsuZHJvcGRvd24tdG9nZ2xlJykuZm9yRWFjaChkcm9wZG93blRvZ2dsZSA9PiB7XHJcbiAgICAgIGRyb3Bkb3duVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiBlLnByZXZlbnREZWZhdWx0KCkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgbG9nb3V0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ291dC1idG4nKTtcclxuICAgIGlmIChsb2dvdXRCdG4pIHtcclxuICAgICAgbG9nb3V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5sb2dvdXQoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMudXBkYXRlTmF2TGlua3MoKTtcclxuICAgICAgdGhpcy5yZW5kZXJQYWdlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZU5hdkxpbmtzKCkge1xyXG4gICAgY29uc3QgdXNlciA9IEF1dGhIZWxwZXIuZ2V0Q3VycmVudFVzZXIoKTtcclxuXHJcbiAgICBjb25zdCBsb2dpbkxpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4tbGluaycpO1xyXG4gICAgY29uc3QgcmVnaXN0ZXJMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZ2lzdGVyLWxpbmsnKTtcclxuICAgIGNvbnN0IHByb2ZpbGVEcm9wZG93biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9maWxlLWRyb3Bkb3duJyk7XHJcbiAgICBjb25zdCBsYW5kaW5nTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYW5kaW5nLWxpbmsnKTtcclxuXHJcbiAgICBpZiAodXNlcikge1xyXG4gICAgICBpZiAobG9naW5MaW5rKSBsb2dpbkxpbmsuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgaWYgKHJlZ2lzdGVyTGluaykgcmVnaXN0ZXJMaW5rLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIGlmIChwcm9maWxlRHJvcGRvd24pIHByb2ZpbGVEcm9wZG93bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgaWYgKGxhbmRpbmdMaW5rKSBsYW5kaW5nTGluay5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChsb2dpbkxpbmspIGxvZ2luTGluay5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgaWYgKHJlZ2lzdGVyTGluaykgcmVnaXN0ZXJMaW5rLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICBpZiAocHJvZmlsZURyb3Bkb3duKSBwcm9maWxlRHJvcGRvd24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgaWYgKGxhbmRpbmdMaW5rKSBsYW5kaW5nTGluay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgcmVuZGVyUGFnZSgpIHtcclxuICAgIGNvbnN0IHVzZXIgPSBBdXRoSGVscGVyLmdldEN1cnJlbnRVc2VyKCk7XHJcbiAgICBjb25zdCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2ggfHwgJyMvJztcclxuICAgIGNvbnN0IHBhdGggPSBoYXNoLnNsaWNlKDEpO1xyXG5cclxuICAgIGlmICghdXNlciAmJiAhdGhpcy5wdWJsaWNSb3V0ZXMuaW5jbHVkZXMocGF0aCkpIHtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnIy9sb2dpbic7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcHJlc2VudGVyID0gcm91dGVzW3BhdGhdO1xyXG5cclxuICAgIGlmICghcHJlc2VudGVyKSB7XHJcbiAgICAgIHRoaXMuYXBwQ29udGFpbmVyLmlubmVySFRNTCA9ICc8aDE+NDA0IFBhZ2UgTm90IEZvdW5kPC9oMT4nO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgYXdhaXQgYXBwbHlWaWV3VHJhbnNpdGlvbignI2FwcCcsIGFzeW5jICgpID0+IHtcclxuICAgICAgLy8gSmlrYSBwcmVzZW50ZXIgYWRhbGFoIGNsYXNzIGRlbmdhbiBpbml0IGFzeW5jXHJcbiAgICAgIGlmICh0eXBlb2YgcHJlc2VudGVyID09PSAnZnVuY3Rpb24nICYmIHByZXNlbnRlci5wcm90b3R5cGU/LmluaXQgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IHByZXNlbnRlcih0aGlzLmFwcENvbnRhaW5lcik7XHJcbiAgICAgICAgaWYgKGluc3RhbmNlLmluaXQgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xyXG4gICAgICAgICAgYXdhaXQgaW5zdGFuY2UuaW5pdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBcclxuICAgICAgLy8gSmlrYSBwcmVzZW50ZXIgYWRhbGFoIG9iamVrIGRlbmdhbiBpbml0KClcclxuICAgICAgZWxzZSBpZiAocHJlc2VudGVyLmluaXQgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xyXG4gICAgICAgIGF3YWl0IHByZXNlbnRlci5pbml0KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5hcHBDb250YWluZXIuaW5uZXJIVE1MID0gJzxoMT5QcmVzZW50ZXIgSW52YWxpZDwvaDE+JztcclxuICAgICAgfVxyXG4gICAgICAvLyBLYXJlbmEgcHJlc2VudGVyIHN1ZGFoIHJlbmRlciBET00gc2VuZGlyaSwgcmV0dXJuIHN0cmluZyBrb3NvbmdcclxuICAgICAgcmV0dXJuICcnO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBsb2dvdXQoKSB7XHJcbiAgICBBdXRoSGVscGVyLmNsZWFyQXV0aCgpO1xyXG4gICAgdGhpcy51cGRhdGVOYXZMaW5rcygpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnIy8nO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgaW5pdCgpIHtcclxuICAgIHRoaXMudXBkYXRlTmF2TGlua3MoKTtcclxuICAgIGF3YWl0IHRoaXMucmVuZGVyUGFnZSgpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iLCIvLyB1dGlscy9pbmRleC5qc1xyXG5leHBvcnQgZnVuY3Rpb24gc2hvd0Zvcm1hdHRlZERhdGUoZGF0ZSwgbG9jYWxlID0gJ2VuLVVTJywgb3B0aW9ucyA9IHt9KSB7XHJcbiAgcmV0dXJuIG5ldyBEYXRlKGRhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZyhsb2NhbGUsIHtcclxuICAgIHllYXI6ICdudW1lcmljJyxcclxuICAgIG1vbnRoOiAnbG9uZycsXHJcbiAgICBkYXk6ICdudW1lcmljJyxcclxuICAgIC4uLm9wdGlvbnMsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzbGVlcCh0aW1lID0gMTAwMCkge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCB0aW1lKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGFwcGx5Vmlld1RyYW5zaXRpb24oY29udGVudFNlbGVjdG9yLCByZW5kZXJDYWxsYmFjaykge1xyXG4gIGNvbnN0IGNvbnRlbnRXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250ZW50U2VsZWN0b3IpO1xyXG5cclxuICBpZiAoIWRvY3VtZW50LnN0YXJ0Vmlld1RyYW5zaXRpb24gfHwgIWNvbnRlbnRXcmFwcGVyKSB7XHJcbiAgICAvLyBGYWxsYmFjayBqaWthIHRpZGFrIHN1cHBvcnQgVmlldyBUcmFuc2l0aW9uIEFQSVxyXG4gICAgY29udGVudFdyYXBwZXIuaW5uZXJIVE1MID0gYXdhaXQgcmVuZGVyQ2FsbGJhY2soKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGNvbnN0IHNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWTtcclxuXHJcbiAgY29uc3QgdHJhbnNpdGlvbiA9IGRvY3VtZW50LnN0YXJ0Vmlld1RyYW5zaXRpb24oYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29udGVudFdyYXBwZXIuaW5uZXJIVE1MID0gYXdhaXQgcmVuZGVyQ2FsbGJhY2soKTtcclxuICAgICAgLy8gS2VtYmFsaWthbiBzY3JvbGwgcG9zaXRpb24gc2V0ZWxhaCByZW5kZXJcclxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgc2Nyb2xsWSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignUmVuZGVyIGVycm9yIGR1cmluZyB0cmFuc2l0aW9uOicsIGVycm9yKTtcclxuICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGF3YWl0IHRyYW5zaXRpb24uZmluaXNoZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZXR1cFNraXBMaW5rID0gKCkgPT4ge1xyXG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLWNvbnRlbnRcIik7XHJcbiAgY29uc3Qgc2tpcExpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNraXAtbGlua1wiKTtcclxuXHJcbiAgc2tpcExpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIG1haW5Db250ZW50LnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiLTFcIik7XHJcbiAgICBtYWluQ29udGVudC5mb2N1cygpO1xyXG4gICAgbWFpbkNvbnRlbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcclxuICAgIHNraXBMaW5rLmJsdXIoKTtcclxuICB9KTtcclxufTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYWMwZGMyMDUyNmE2NDQyYWE2YWJcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=