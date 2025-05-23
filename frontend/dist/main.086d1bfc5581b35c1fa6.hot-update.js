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

 // Helper autentikasi, buat di file terpisah

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


/***/ }),

/***/ "./src/script/utils/auth-helper.js":
/*!*****************************************!*\
  !*** ./src/script/utils/auth-helper.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// src/script/utils/auth-helper.js
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getCurrentUser() {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  },
  clearAuth() {
    localStorage.removeItem('currentUser');
  },
  isLoggedIn() {
    return !!this.getCurrentUser();
  },
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("252b047c33b6897ca2ed")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4wODZkMWJmYzU1ODFiMzVjMWZhNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDd0M7QUFDUSxDQUFDO0FBQ2pEO0FBQ0E7QUFDQSxnQkFBZ0IseUJBQXlCLElBQUk7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw2REFBVTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsNkRBQVU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IseURBQU07QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw2REFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsR0FBRyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNyR25CO0FBQ0EsaUVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUMsRUFBQzs7Ozs7Ozs7O1VDWkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9zY3JpcHQvYXBwLmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3NjcmlwdC91dGlscy9hdXRoLWhlbHBlci5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL3NjcmlwdC9hcHAuanNcclxuLy8gc3JjL3NjcmlwdC9hcHAuanNcclxuaW1wb3J0IHJvdXRlcyBmcm9tICcuL3JvdXRlcy9yb3V0ZXMuanMnO1xyXG5pbXBvcnQgQXV0aEhlbHBlciBmcm9tICcuL3V0aWxzL2F1dGgtaGVscGVyLmpzJzsgLy8gSGVscGVyIGF1dGVudGlrYXNpLCBidWF0IGRpIGZpbGUgdGVycGlzYWhcclxuXHJcbmNsYXNzIEFwcCB7XHJcbiAgY29uc3RydWN0b3IoeyBhcHBDb250YWluZXJJZCA9ICdhcHAnIH0gPSB7fSkge1xyXG4gICAgdGhpcy5hcHBDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhcHBDb250YWluZXJJZCk7XHJcblxyXG4gICAgdGhpcy5wdWJsaWNSb3V0ZXMgPSBbJy8nLCAnL2xvZ2luJywgJy9yZWdpc3RlciddO1xyXG5cclxuICAgIHRoaXMuX2JpbmRFdmVudHMoKTtcclxuICB9XHJcblxyXG4gIF9iaW5kRXZlbnRzKCkge1xyXG4gICAgLy8gSGFuZGxlIGtsaWsgZHJvcGRvd24gc3VwYXlhIHRpZGFrIHJlbG9hZCBwYWdlXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhLm5hdi1saW5rLmRyb3Bkb3duLXRvZ2dsZScpLmZvckVhY2goZHJvcGRvd25Ub2dnbGUgPT4ge1xyXG4gICAgICBkcm9wZG93blRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gZS5wcmV2ZW50RGVmYXVsdCgpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEJpbmQgdG9tYm9sIGxvZ291dFxyXG4gICAgY29uc3QgbG9nb3V0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ291dC1idG4nKTtcclxuICAgIGlmIChsb2dvdXRCdG4pIHtcclxuICAgICAgbG9nb3V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5sb2dvdXQoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQmluZCBoYXNoY2hhbmdlIHVudHVrIHJvdXRlIGRhbiBVSSB1cGRhdGVcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLnVwZGF0ZU5hdkxpbmtzKCk7XHJcbiAgICAgIHRoaXMucmVuZGVyUGFnZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVOYXZMaW5rcygpIHtcclxuICAgIGNvbnN0IHVzZXIgPSBBdXRoSGVscGVyLmdldEN1cnJlbnRVc2VyKCk7XHJcblxyXG4gICAgY29uc3QgbG9naW5MaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luLWxpbmsnKTtcclxuICAgIGNvbnN0IHJlZ2lzdGVyTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWdpc3Rlci1saW5rJyk7XHJcbiAgICBjb25zdCBwcm9maWxlRHJvcGRvd24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZmlsZS1kcm9wZG93bicpO1xyXG4gICAgY29uc3QgbGFuZGluZ0xpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGFuZGluZy1saW5rJyk7XHJcblxyXG4gICAgaWYgKHVzZXIpIHtcclxuICAgICAgaWYgKGxvZ2luTGluaykgbG9naW5MaW5rLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIGlmIChyZWdpc3RlckxpbmspIHJlZ2lzdGVyTGluay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICBpZiAocHJvZmlsZURyb3Bkb3duKSBwcm9maWxlRHJvcGRvd24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgIGlmIChsYW5kaW5nTGluaykgbGFuZGluZ0xpbmsuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAobG9naW5MaW5rKSBsb2dpbkxpbmsuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgIGlmIChyZWdpc3RlckxpbmspIHJlZ2lzdGVyTGluay5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgaWYgKHByb2ZpbGVEcm9wZG93bikgcHJvZmlsZURyb3Bkb3duLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIGlmIChsYW5kaW5nTGluaykgbGFuZGluZ0xpbmsuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIHJlbmRlclBhZ2UoKSB7XHJcbiAgICBjb25zdCB1c2VyID0gQXV0aEhlbHBlci5nZXRDdXJyZW50VXNlcigpO1xyXG4gICAgY29uc3QgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoIHx8ICcjLyc7XHJcbiAgICBjb25zdCBwYXRoID0gaGFzaC5zbGljZSgxKTtcclxuXHJcbiAgICAvLyBSZWRpcmVjdCBvdG9tYXRpcyBqaWthIGJlbHVtIGxvZ2luIGRhbiBha3NlcyByb3V0ZSBwcml2YXRcclxuICAgIGlmICghdXNlciAmJiAhdGhpcy5wdWJsaWNSb3V0ZXMuaW5jbHVkZXMocGF0aCkpIHtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnIy9sb2dpbic7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBbWJpbCBwcmVzZW50ZXIvbW9kdWxlIHJvdXRlIHNlY2FyYSBkaW5hbWlzIChzdXBwb3J0IGFzeW5jIGltcG9ydCBqaWthIHBlcmx1KVxyXG4gICAgbGV0IHByZXNlbnRlciA9IHJvdXRlc1twYXRoXTtcclxuXHJcbiAgICBpZiAoIXByZXNlbnRlcikge1xyXG4gICAgICB0aGlzLmFwcENvbnRhaW5lci5pbm5lckhUTUwgPSAnPGgxPjQwNCBQYWdlIE5vdCBGb3VuZDwvaDE+JztcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEppa2EgcHJlc2VudGVyIGJlcmJhc2lzIGNsYXNzIGRlbmdhbiBpbml0IGFzeW5jXHJcbiAgICBpZiAodHlwZW9mIHByZXNlbnRlciA9PT0gJ2Z1bmN0aW9uJyAmJiBwcmVzZW50ZXIucHJvdG90eXBlPy5pbml0IGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcclxuICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgcHJlc2VudGVyKHRoaXMuYXBwQ29udGFpbmVyKTtcclxuICAgICAgaWYgKGluc3RhbmNlLmluaXQgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xyXG4gICAgICAgIGF3YWl0IGluc3RhbmNlLmluaXQoKTtcclxuICAgICAgfVxyXG4gICAgfSBcclxuICAgIC8vIEppa2EgcHJlc2VudGVyIG9iamVrIGRlbmdhbiBpbml0KCkgYmlhc2FcclxuICAgIGVsc2UgaWYgKHByZXNlbnRlci5pbml0IGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcclxuICAgICAgcHJlc2VudGVyLmluaXQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIEZhbGxiYWNrIHJlbmRlciBqaWthIHByZXNlbnRlciBsYWluXHJcbiAgICAgIHRoaXMuYXBwQ29udGFpbmVyLmlubmVySFRNTCA9ICc8aDE+UHJlc2VudGVyIEludmFsaWQ8L2gxPic7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsb2dvdXQoKSB7XHJcbiAgICBBdXRoSGVscGVyLmNsZWFyQXV0aCgpO1xyXG4gICAgdGhpcy51cGRhdGVOYXZMaW5rcygpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnIy8nO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgaW5pdCgpIHtcclxuICAgIHRoaXMudXBkYXRlTmF2TGlua3MoKTtcclxuICAgIGF3YWl0IHRoaXMucmVuZGVyUGFnZSgpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iLCIvLyBzcmMvc2NyaXB0L3V0aWxzL2F1dGgtaGVscGVyLmpzXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBnZXRDdXJyZW50VXNlcigpIHtcclxuICAgIGNvbnN0IHVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFVzZXInKTtcclxuICAgIHJldHVybiB1c2VyID8gSlNPTi5wYXJzZSh1c2VyKSA6IG51bGw7XHJcbiAgfSxcclxuICBjbGVhckF1dGgoKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY3VycmVudFVzZXInKTtcclxuICB9LFxyXG4gIGlzTG9nZ2VkSW4oKSB7XHJcbiAgICByZXR1cm4gISF0aGlzLmdldEN1cnJlbnRVc2VyKCk7XHJcbiAgfSxcclxufTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMjUyYjA0N2MzM2I2ODk3Y2EyZWRcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=