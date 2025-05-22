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
/******/ 	__webpack_require__.h = () => ("3f33419a82703854a367")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5mNzlhNGUyYWJhNDU3NjhkYTRjMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDd0Q7QUFDeEQ7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGlFQUF5QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLFVBQVU7QUFDViw4QkFBOEIsZ0JBQWdCO0FBQzlDO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOzs7Ozs7Ozs7VUMvQkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9zY3JpcHQvcHJlc2VudGVycy9sYW5kaW5nLXByZXNlbnRlci5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL3NjcmlwdC9wcmVzZW50ZXIvbGFuZGluZy1wcmVzZW50ZXIuanNcclxuaW1wb3J0ICogYXMgTGFuZGluZ1ZpZXcgZnJvbSAnLi4vdmlld3MvbGFuZGluZy12aWV3LmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhbmRpbmdQcmVzZW50ZXIge1xyXG4gIGNvbnN0cnVjdG9yKGFwcENvbnRhaW5lcikge1xyXG4gICAgdGhpcy5hcHAgPSBhcHBDb250YWluZXI7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIHRoaXMuYXR0YWNoRXZlbnRMaXN0ZW5lcnMoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHRoaXMuYXBwLmlubmVySFRNTCA9IExhbmRpbmdWaWV3LnJlbmRlckxhbmRpbmcoKTtcclxuICB9XHJcblxyXG4gIGF0dGFjaEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgY29uc3QgY2hlY2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLWNoZWNrLWN2Jyk7XHJcbiAgICBpZiAoY2hlY2tCdG4pIHtcclxuICAgICAgY2hlY2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaXNMb2dnZWRJbiA9ICEhbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRVc2VyJyk7XHJcbiAgICAgICAgaWYgKCFpc0xvZ2dlZEluKSB7XHJcbiAgICAgICAgICBoaXN0b3J5LnB1c2hTdGF0ZSh7fSwgJycsICcvbG9naW4nKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaGlzdG9yeS5wdXNoU3RhdGUoe30sICcnLCAnL21haW4nKTsgLy8gYXRhdSAnL2N2LWFuYWx5emUnIGppa2EgYWRhIHJvdXRlLW55YVxyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgUG9wU3RhdGVFdmVudCgncG9wc3RhdGUnKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzZjMzNDE5YTgyNzAzODU0YTM2N1wiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==