"use strict";
self["webpackHotUpdatefrontend"]("main",{

/***/ "./src/script/presenters/register-presenter.js":
/*!*****************************************************!*\
  !*** ./src/script/presenters/register-presenter.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RegisterPresenter)
/* harmony export */ });
/* harmony import */ var _views_register_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/register-view.js */ "./src/script/views/register-view.js");
/* harmony import */ var _models_auth_model_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/auth-model.js */ "./src/script/models/auth-model.js");
// src/script/presenter/register-presenter.js



class RegisterPresenter {
  constructor(appContainer) {
    this.app = appContainer;
    this.errorMessage = '';
  }

  init() {
    this.render();
  }

  render() {
    this.app.innerHTML = _views_register_view_js__WEBPACK_IMPORTED_MODULE_0__.renderRegister(this.errorMessage);
    _views_register_view_js__WEBPACK_IMPORTED_MODULE_0__.bindRegisterFormSubmit(this.handleRegister.bind(this));
  }

  async handleRegister(data) {
    // hapus cek passwordConfirm

    try {
      await _models_auth_model_js__WEBPACK_IMPORTED_MODULE_1__.register(data.username, data.email, data.password);

      _views_register_view_js__WEBPACK_IMPORTED_MODULE_0__.showSuccessMessage(`User ${data.username} registered successfully!`);
      _views_register_view_js__WEBPACK_IMPORTED_MODULE_0__.redirectToLogin();
    } catch (error) {
      this.errorMessage = error.message;
      this.render();
    }
  }
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b859fcda5be1f81b16e8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iNjA2NTg2YTc0MGFjNjhjODhhMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBEO0FBQ0w7QUFDckQ7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG1FQUEyQjtBQUNwRCxJQUFJLDJFQUFtQztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDJEQUFrQjtBQUM5QjtBQUNBLE1BQU0sdUVBQStCLFNBQVMsZUFBZTtBQUM3RCxNQUFNLG9FQUE0QjtBQUNsQyxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O1VDaENBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvc2NyaXB0L3ByZXNlbnRlcnMvcmVnaXN0ZXItcHJlc2VudGVyLmpzIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvc2NyaXB0L3ByZXNlbnRlci9yZWdpc3Rlci1wcmVzZW50ZXIuanNcclxuaW1wb3J0ICogYXMgUmVnaXN0ZXJWaWV3IGZyb20gJy4uL3ZpZXdzL3JlZ2lzdGVyLXZpZXcuanMnO1xyXG5pbXBvcnQgKiBhcyBBdXRoTW9kZWwgZnJvbSAnLi4vbW9kZWxzL2F1dGgtbW9kZWwuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVnaXN0ZXJQcmVzZW50ZXIge1xyXG4gIGNvbnN0cnVjdG9yKGFwcENvbnRhaW5lcikge1xyXG4gICAgdGhpcy5hcHAgPSBhcHBDb250YWluZXI7XHJcbiAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICB0aGlzLmFwcC5pbm5lckhUTUwgPSBSZWdpc3RlclZpZXcucmVuZGVyUmVnaXN0ZXIodGhpcy5lcnJvck1lc3NhZ2UpO1xyXG4gICAgUmVnaXN0ZXJWaWV3LmJpbmRSZWdpc3RlckZvcm1TdWJtaXQodGhpcy5oYW5kbGVSZWdpc3Rlci5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGhhbmRsZVJlZ2lzdGVyKGRhdGEpIHtcclxuICAgIC8vIGhhcHVzIGNlayBwYXNzd29yZENvbmZpcm1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBBdXRoTW9kZWwucmVnaXN0ZXIoZGF0YS51c2VybmFtZSwgZGF0YS5lbWFpbCwgZGF0YS5wYXNzd29yZCk7XHJcblxyXG4gICAgICBSZWdpc3RlclZpZXcuc2hvd1N1Y2Nlc3NNZXNzYWdlKGBVc2VyICR7ZGF0YS51c2VybmFtZX0gcmVnaXN0ZXJlZCBzdWNjZXNzZnVsbHkhYCk7XHJcbiAgICAgIFJlZ2lzdGVyVmlldy5yZWRpcmVjdFRvTG9naW4oKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcclxuICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYjg1OWZjZGE1YmUxZjgxYjE2ZThcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=