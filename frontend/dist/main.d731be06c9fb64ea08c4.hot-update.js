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
          window.location.hash = '#/login';
        } else {
          window.location.hash = '#/main';
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
/******/ 	__webpack_require__.h = () => ("a2f1911658a8a5db6ab5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kNzMxYmUwNmM5ZmI2NGVhMDhjNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDd0Q7QUFDeEQ7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGlFQUF5QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7Ozs7Ozs7O1VDL0JBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvc2NyaXB0L3ByZXNlbnRlcnMvbGFuZGluZy1wcmVzZW50ZXIuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9zY3JpcHQvcHJlc2VudGVyL2xhbmRpbmctcHJlc2VudGVyLmpzXHJcbmltcG9ydCAqIGFzIExhbmRpbmdWaWV3IGZyb20gJy4uL3ZpZXdzL2xhbmRpbmctdmlldy5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYW5kaW5nUHJlc2VudGVyIHtcclxuICBjb25zdHJ1Y3RvcihhcHBDb250YWluZXIpIHtcclxuICAgIHRoaXMuYXBwID0gYXBwQ29udGFpbmVyO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB0aGlzLmF0dGFjaEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICB0aGlzLmFwcC5pbm5lckhUTUwgPSBMYW5kaW5nVmlldy5yZW5kZXJMYW5kaW5nKCk7XHJcbiAgfVxyXG5cclxuICBhdHRhY2hFdmVudExpc3RlbmVycygpIHtcclxuICAgIGNvbnN0IGNoZWNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1jaGVjay1jdicpO1xyXG4gICAgaWYgKGNoZWNrQnRuKSB7XHJcbiAgICAgIGNoZWNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlzTG9nZ2VkSW4gPSAhIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50VXNlcicpO1xyXG4gICAgICAgIGlmICghaXNMb2dnZWRJbikge1xyXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnIy9sb2dpbic7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyMvbWFpbic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBQb3BTdGF0ZUV2ZW50KCdwb3BzdGF0ZScpKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImEyZjE5MTE2NThhOGE1ZGI2YWI1XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9