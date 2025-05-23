"use strict";
self["webpackHotUpdatefrontend"]("main",{

/***/ "./src/script/presenters/main-presenter.js":
/*!*************************************************!*\
  !*** ./src/script/presenters/main-presenter.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainPresenter)
/* harmony export */ });
/* harmony import */ var _views_main_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/main-view.js */ "./src/script/views/main-view.js");
// src/script/presenter/main-presenter.js


class MainPresenter {
  constructor(appContainer) {
    this.app = appContainer;
    this.errorMessage = '';
  }

  init() {
    this.render();
  }

  render() {
    this.app.innerHTML = _views_main_view_js__WEBPACK_IMPORTED_MODULE_0__.renderMainPage(this.handleLogout.bind(this), this.errorMessage);
    _views_main_view_js__WEBPACK_IMPORTED_MODULE_0__.bindLogoutButton(this.handleLogout.bind(this));
    _views_main_view_js__WEBPACK_IMPORTED_MODULE_0__.bindUploadAndPreview(); // Pindahkan ke View
  }

  handleLogout() {
    // Hapus session/local storage user
    localStorage.removeItem('currentUser');

    // Redirect ke landing page
    history.pushState({}, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
  }
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6a89c0af655918f68e97")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi45OTlhYzFmZTU5YTIyMzVkODAwNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDa0Q7QUFDbEQ7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLCtEQUF1QjtBQUNoRCxJQUFJLGlFQUF5QjtBQUM3QixJQUFJLHFFQUE2QixJQUFJO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTs7Ozs7Ozs7O1VDM0JBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvc2NyaXB0L3ByZXNlbnRlcnMvbWFpbi1wcmVzZW50ZXIuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9zY3JpcHQvcHJlc2VudGVyL21haW4tcHJlc2VudGVyLmpzXHJcbmltcG9ydCAqIGFzIE1haW5WaWV3IGZyb20gJy4uL3ZpZXdzL21haW4tdmlldy5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluUHJlc2VudGVyIHtcclxuICBjb25zdHJ1Y3RvcihhcHBDb250YWluZXIpIHtcclxuICAgIHRoaXMuYXBwID0gYXBwQ29udGFpbmVyO1xyXG4gICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgdGhpcy5hcHAuaW5uZXJIVE1MID0gTWFpblZpZXcucmVuZGVyTWFpblBhZ2UodGhpcy5oYW5kbGVMb2dvdXQuYmluZCh0aGlzKSwgdGhpcy5lcnJvck1lc3NhZ2UpO1xyXG4gICAgTWFpblZpZXcuYmluZExvZ291dEJ1dHRvbih0aGlzLmhhbmRsZUxvZ291dC5iaW5kKHRoaXMpKTtcclxuICAgIE1haW5WaWV3LmJpbmRVcGxvYWRBbmRQcmV2aWV3KCk7IC8vIFBpbmRhaGthbiBrZSBWaWV3XHJcbiAgfVxyXG5cclxuICBoYW5kbGVMb2dvdXQoKSB7XHJcbiAgICAvLyBIYXB1cyBzZXNzaW9uL2xvY2FsIHN0b3JhZ2UgdXNlclxyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2N1cnJlbnRVc2VyJyk7XHJcblxyXG4gICAgLy8gUmVkaXJlY3Qga2UgbGFuZGluZyBwYWdlXHJcbiAgICBoaXN0b3J5LnB1c2hTdGF0ZSh7fSwgJycsICcvJyk7XHJcbiAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgUG9wU3RhdGVFdmVudCgncG9wc3RhdGUnKSk7XHJcbiAgfVxyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjZhODljMGFmNjU1OTE4ZjY4ZTk3XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9