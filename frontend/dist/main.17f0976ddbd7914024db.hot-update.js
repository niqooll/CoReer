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

 // 🔁 Gunakan auth-model.js

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
    if (data.password !== data.passwordConfirm) {
      this.errorMessage = 'Passwords do not match';
      this.render();
      return;
    }

    try {
      await _models_auth_model_js__WEBPACK_IMPORTED_MODULE_1__.register(data.username, data.password);

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
/******/ 	__webpack_require__.h = () => ("2171e7753e8d0ebdb684")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xN2YwOTc2ZGRiZDc5MTQwMjRkYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBEO0FBQ0wsQ0FBQztBQUN0RDtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsbUVBQTJCO0FBQ3BELElBQUksMkVBQW1DO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwyREFBa0I7QUFDOUI7QUFDQSxNQUFNLHVFQUErQixTQUFTLGVBQWU7QUFDN0QsTUFBTSxvRUFBNEI7QUFDbEMsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O1VDckNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvc2NyaXB0L3ByZXNlbnRlcnMvcmVnaXN0ZXItcHJlc2VudGVyLmpzIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvc2NyaXB0L3ByZXNlbnRlci9yZWdpc3Rlci1wcmVzZW50ZXIuanNcclxuaW1wb3J0ICogYXMgUmVnaXN0ZXJWaWV3IGZyb20gJy4uL3ZpZXdzL3JlZ2lzdGVyLXZpZXcuanMnO1xyXG5pbXBvcnQgKiBhcyBBdXRoTW9kZWwgZnJvbSAnLi4vbW9kZWxzL2F1dGgtbW9kZWwuanMnOyAvLyDwn5SBIEd1bmFrYW4gYXV0aC1tb2RlbC5qc1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVnaXN0ZXJQcmVzZW50ZXIge1xyXG4gIGNvbnN0cnVjdG9yKGFwcENvbnRhaW5lcikge1xyXG4gICAgdGhpcy5hcHAgPSBhcHBDb250YWluZXI7XHJcbiAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICB0aGlzLmFwcC5pbm5lckhUTUwgPSBSZWdpc3RlclZpZXcucmVuZGVyUmVnaXN0ZXIodGhpcy5lcnJvck1lc3NhZ2UpO1xyXG4gICAgUmVnaXN0ZXJWaWV3LmJpbmRSZWdpc3RlckZvcm1TdWJtaXQodGhpcy5oYW5kbGVSZWdpc3Rlci5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGhhbmRsZVJlZ2lzdGVyKGRhdGEpIHtcclxuICAgIGlmIChkYXRhLnBhc3N3b3JkICE9PSBkYXRhLnBhc3N3b3JkQ29uZmlybSkge1xyXG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICdQYXNzd29yZHMgZG8gbm90IG1hdGNoJztcclxuICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IEF1dGhNb2RlbC5yZWdpc3RlcihkYXRhLnVzZXJuYW1lLCBkYXRhLnBhc3N3b3JkKTtcclxuXHJcbiAgICAgIFJlZ2lzdGVyVmlldy5zaG93U3VjY2Vzc01lc3NhZ2UoYFVzZXIgJHtkYXRhLnVzZXJuYW1lfSByZWdpc3RlcmVkIHN1Y2Nlc3NmdWxseSFgKTtcclxuICAgICAgUmVnaXN0ZXJWaWV3LnJlZGlyZWN0VG9Mb2dpbigpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xyXG4gICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMjE3MWU3NzUzZThkMGViZGI2ODRcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=