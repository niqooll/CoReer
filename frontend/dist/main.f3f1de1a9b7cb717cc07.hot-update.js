"use strict";
self["webpackHotUpdatefrontend"]("main",{

/***/ "./src/script/presenters/landing-presenter.js":
/*!****************************************************!*\
  !*** ./src/script/presenters/landing-presenter.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LandingPresenter)
/* harmony export */ });
/* harmony import */ var _views_landing_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/landing-view.js */ "./src/script/views/landing-view.js");
// src/script/presenter/landing-presenter.js


class LandingPresenter {
  constructor(appContainer) {
    this.app = appContainer;
  }

  init() {
    this.render();
    this.attachEventListeners();
  }

  render() {
    this.app.innerHTML = _views_landing_view_js__WEBPACK_IMPORTED_MODULE_0__.renderLanding();
  }

  attachEventListeners() {
    const checkBtn = document.getElementById('btn-check-cv');
    if (checkBtn) {
      checkBtn.addEventListener('click', () => {
        const isLoggedIn = !!localStorage.getItem('token'); // atau sessionStorage
        if (!isLoggedIn) {
          history.pushState({}, '', '/login');
          window.dispatchEvent(new PopStateEvent('popstate')); // agar `renderPage()` terpanggil ulang
        } else {
          window.location.hash = '#/cv-analyze'; // atau halaman lain jika sudah login
        }
      });
    }
  }
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a57ef40be8e0ad15074d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5mM2YxZGUxYTliN2NiNzE3Y2MwNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDd0Q7QUFDeEQ7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGlFQUF5QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQ7QUFDNUQ7QUFDQSw4QkFBOEI7QUFDOUIsK0RBQStEO0FBQy9ELFVBQVU7QUFDVixpREFBaUQ7QUFDakQ7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOzs7Ozs7Ozs7VUMvQkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9zY3JpcHQvcHJlc2VudGVycy9sYW5kaW5nLXByZXNlbnRlci5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL3NjcmlwdC9wcmVzZW50ZXIvbGFuZGluZy1wcmVzZW50ZXIuanNcclxuaW1wb3J0ICogYXMgTGFuZGluZ1ZpZXcgZnJvbSAnLi4vdmlld3MvbGFuZGluZy12aWV3LmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhbmRpbmdQcmVzZW50ZXIge1xyXG4gIGNvbnN0cnVjdG9yKGFwcENvbnRhaW5lcikge1xyXG4gICAgdGhpcy5hcHAgPSBhcHBDb250YWluZXI7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIHRoaXMuYXR0YWNoRXZlbnRMaXN0ZW5lcnMoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHRoaXMuYXBwLmlubmVySFRNTCA9IExhbmRpbmdWaWV3LnJlbmRlckxhbmRpbmcoKTtcclxuICB9XHJcblxyXG4gIGF0dGFjaEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgY29uc3QgY2hlY2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLWNoZWNrLWN2Jyk7XHJcbiAgICBpZiAoY2hlY2tCdG4pIHtcclxuICAgICAgY2hlY2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaXNMb2dnZWRJbiA9ICEhbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7IC8vIGF0YXUgc2Vzc2lvblN0b3JhZ2VcclxuICAgICAgICBpZiAoIWlzTG9nZ2VkSW4pIHtcclxuICAgICAgICAgIGhpc3RvcnkucHVzaFN0YXRlKHt9LCAnJywgJy9sb2dpbicpO1xyXG4gICAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IFBvcFN0YXRlRXZlbnQoJ3BvcHN0YXRlJykpOyAvLyBhZ2FyIGByZW5kZXJQYWdlKClgIHRlcnBhbmdnaWwgdWxhbmdcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnIy9jdi1hbmFseXplJzsgLy8gYXRhdSBoYWxhbWFuIGxhaW4gamlrYSBzdWRhaCBsb2dpblxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImE1N2VmNDBiZThlMGFkMTUwNzRkXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9