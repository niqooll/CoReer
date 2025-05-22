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
      const isLoggedIn = !!localStorage.getItem('currentUser');
      if (!isLoggedIn) {
        history.pushState({}, '', '/login');
      } else {
        history.pushState({}, '', '/main'); // atau '/cv-analyze' jika ada route-nya
      }
      window.dispatchEvent(new PopStateEvent('popstate'));
    });
  }
}
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f79a4e2aba45768da4c1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kMDg4MDA3MTY1ZTM4OTVjYzFkYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDd0Q7QUFDeEQ7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGlFQUF5QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLFFBQVE7QUFDUiw0QkFBNEIsZ0JBQWdCO0FBQzVDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7Ozs7Ozs7VUMvQkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9zY3JpcHQvcHJlc2VudGVycy9sYW5kaW5nLXByZXNlbnRlci5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL3NjcmlwdC9wcmVzZW50ZXIvbGFuZGluZy1wcmVzZW50ZXIuanNcclxuaW1wb3J0ICogYXMgTGFuZGluZ1ZpZXcgZnJvbSAnLi4vdmlld3MvbGFuZGluZy12aWV3LmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhbmRpbmdQcmVzZW50ZXIge1xyXG4gIGNvbnN0cnVjdG9yKGFwcENvbnRhaW5lcikge1xyXG4gICAgdGhpcy5hcHAgPSBhcHBDb250YWluZXI7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIHRoaXMuYXR0YWNoRXZlbnRMaXN0ZW5lcnMoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHRoaXMuYXBwLmlubmVySFRNTCA9IExhbmRpbmdWaWV3LnJlbmRlckxhbmRpbmcoKTtcclxuICB9XHJcblxyXG5hdHRhY2hFdmVudExpc3RlbmVycygpIHtcclxuICBjb25zdCBjaGVja0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tY2hlY2stY3YnKTtcclxuICBpZiAoY2hlY2tCdG4pIHtcclxuICAgIGNoZWNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjb25zdCBpc0xvZ2dlZEluID0gISFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFVzZXInKTtcclxuICAgICAgaWYgKCFpc0xvZ2dlZEluKSB7XHJcbiAgICAgICAgaGlzdG9yeS5wdXNoU3RhdGUoe30sICcnLCAnL2xvZ2luJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaGlzdG9yeS5wdXNoU3RhdGUoe30sICcnLCAnL21haW4nKTsgLy8gYXRhdSAnL2N2LWFuYWx5emUnIGppa2EgYWRhIHJvdXRlLW55YVxyXG4gICAgICB9XHJcbiAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBQb3BTdGF0ZUV2ZW50KCdwb3BzdGF0ZScpKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImY3OWE0ZTJhYmE0NTc2OGRhNGMxXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9