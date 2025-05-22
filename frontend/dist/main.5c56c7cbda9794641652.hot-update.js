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
          window.location.hash = '#/login'; // asumsi SPA routing pakai hash
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
/******/ 	__webpack_require__.h = () => ("23d6b434c07287e8e9bb")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41YzU2YzdjYmRhOTc5NDY0MTY1Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDd0Q7QUFDeEQ7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGlFQUF5QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQ7QUFDNUQ7QUFDQSw0Q0FBNEM7QUFDNUMsVUFBVTtBQUNWLGlEQUFpRDtBQUNqRDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7OztVQzlCQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3NjcmlwdC9wcmVzZW50ZXJzL2xhbmRpbmctcHJlc2VudGVyLmpzIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvc2NyaXB0L3ByZXNlbnRlci9sYW5kaW5nLXByZXNlbnRlci5qc1xyXG5pbXBvcnQgKiBhcyBMYW5kaW5nVmlldyBmcm9tICcuLi92aWV3cy9sYW5kaW5nLXZpZXcuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGFuZGluZ1ByZXNlbnRlciB7XHJcbiAgY29uc3RydWN0b3IoYXBwQ29udGFpbmVyKSB7XHJcbiAgICB0aGlzLmFwcCA9IGFwcENvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgdGhpcy5hdHRhY2hFdmVudExpc3RlbmVycygpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgdGhpcy5hcHAuaW5uZXJIVE1MID0gTGFuZGluZ1ZpZXcucmVuZGVyTGFuZGluZygpO1xyXG4gIH1cclxuXHJcbiAgYXR0YWNoRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICBjb25zdCBjaGVja0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tY2hlY2stY3YnKTtcclxuICAgIGlmIChjaGVja0J0bikge1xyXG4gICAgICBjaGVja0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjb25zdCBpc0xvZ2dlZEluID0gISFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTsgLy8gYXRhdSBzZXNzaW9uU3RvcmFnZVxyXG4gICAgICAgIGlmICghaXNMb2dnZWRJbikge1xyXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnIy9sb2dpbic7IC8vIGFzdW1zaSBTUEEgcm91dGluZyBwYWthaSBoYXNoXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyMvY3YtYW5hbHl6ZSc7IC8vIGF0YXUgaGFsYW1hbiBsYWluIGppa2Egc3VkYWggbG9naW5cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyM2Q2YjQzNGMwNzI4N2U4ZTliYlwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==