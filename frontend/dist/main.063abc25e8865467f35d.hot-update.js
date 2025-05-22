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
/******/ 	__webpack_require__.h = () => ("f3f1de1a9b7cb717cc07")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4wNjNhYmMyNWU4ODY1NDY3ZjM1ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDd0Q7QUFDeEQ7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGlFQUF5QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQ7QUFDNUQ7QUFDQSw4QkFBOEI7QUFDOUIscURBQXFEO0FBQ3JEO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRDtBQUNqRDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7OztVQ2hDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3NjcmlwdC9wcmVzZW50ZXJzL2xhbmRpbmctcHJlc2VudGVyLmpzIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvc2NyaXB0L3ByZXNlbnRlci9sYW5kaW5nLXByZXNlbnRlci5qc1xyXG5pbXBvcnQgKiBhcyBMYW5kaW5nVmlldyBmcm9tICcuLi92aWV3cy9sYW5kaW5nLXZpZXcuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGFuZGluZ1ByZXNlbnRlciB7XHJcbiAgY29uc3RydWN0b3IoYXBwQ29udGFpbmVyKSB7XHJcbiAgICB0aGlzLmFwcCA9IGFwcENvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgdGhpcy5hdHRhY2hFdmVudExpc3RlbmVycygpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgdGhpcy5hcHAuaW5uZXJIVE1MID0gTGFuZGluZ1ZpZXcucmVuZGVyTGFuZGluZygpO1xyXG4gIH1cclxuXHJcbiAgYXR0YWNoRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICBjb25zdCBjaGVja0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tY2hlY2stY3YnKTtcclxuICAgIGlmIChjaGVja0J0bikge1xyXG4gICAgICBjaGVja0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjb25zdCBpc0xvZ2dlZEluID0gISFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTsgLy8gYXRhdSBzZXNzaW9uU3RvcmFnZVxyXG4gICAgICAgIGlmICghaXNMb2dnZWRJbikge1xyXG4gICAgICAgICAgaGlzdG9yeS5wdXNoU3RhdGUoe30sICcnLCAnL2xvZ2luJyk7XHJcbndpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBQb3BTdGF0ZUV2ZW50KCdwb3BzdGF0ZScpKTsgLy8gYWdhciBgcmVuZGVyUGFnZSgpYCB0ZXJwYW5nZ2lsIHVsYW5nXHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcjL2N2LWFuYWx5emUnOyAvLyBhdGF1IGhhbGFtYW4gbGFpbiBqaWthIHN1ZGFoIGxvZ2luXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZjNmMWRlMWE5YjdjYjcxN2NjMDdcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=