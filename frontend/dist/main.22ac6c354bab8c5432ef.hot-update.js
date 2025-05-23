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
    _views_main_view_js__WEBPACK_IMPORTED_MODULE_0__.bindUploadAndPreview(); // panggil setelah render agar event terpasang
  }

  handleLogout() {
    localStorage.removeItem('currentUser');
    history.pushState({}, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
  }
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5fae07bb0b684b6a27ff")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yMmFjNmMzNTRiYWI4YzU0MzJlZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNrRDtBQUNsRDtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsK0RBQXVCO0FBQ2hELElBQUksaUVBQXlCO0FBQzdCLElBQUkscUVBQTZCLElBQUk7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBOzs7Ozs7Ozs7VUN6QkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9zY3JpcHQvcHJlc2VudGVycy9tYWluLXByZXNlbnRlci5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL3NjcmlwdC9wcmVzZW50ZXIvbWFpbi1wcmVzZW50ZXIuanNcclxuLy8gc3JjL3NjcmlwdC9wcmVzZW50ZXIvbWFpbi1wcmVzZW50ZXIuanNcclxuaW1wb3J0ICogYXMgTWFpblZpZXcgZnJvbSAnLi4vdmlld3MvbWFpbi12aWV3LmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5QcmVzZW50ZXIge1xyXG4gIGNvbnN0cnVjdG9yKGFwcENvbnRhaW5lcikge1xyXG4gICAgdGhpcy5hcHAgPSBhcHBDb250YWluZXI7XHJcbiAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICB0aGlzLmFwcC5pbm5lckhUTUwgPSBNYWluVmlldy5yZW5kZXJNYWluUGFnZSh0aGlzLmhhbmRsZUxvZ291dC5iaW5kKHRoaXMpLCB0aGlzLmVycm9yTWVzc2FnZSk7XHJcbiAgICBNYWluVmlldy5iaW5kTG9nb3V0QnV0dG9uKHRoaXMuaGFuZGxlTG9nb3V0LmJpbmQodGhpcykpO1xyXG4gICAgTWFpblZpZXcuYmluZFVwbG9hZEFuZFByZXZpZXcoKTsgLy8gcGFuZ2dpbCBzZXRlbGFoIHJlbmRlciBhZ2FyIGV2ZW50IHRlcnBhc2FuZ1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlTG9nb3V0KCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2N1cnJlbnRVc2VyJyk7XHJcbiAgICBoaXN0b3J5LnB1c2hTdGF0ZSh7fSwgJycsICcvJyk7XHJcbiAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgUG9wU3RhdGVFdmVudCgncG9wc3RhdGUnKSk7XHJcbiAgfVxyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjVmYWUwN2JiMGI2ODRiNmEyN2ZmXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9