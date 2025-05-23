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
/******/ 	__webpack_require__.h = () => ("a4e4aadea5531862c4ff")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yMTcxZTc3NTNlOGQwZWJkYjY4NC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBEO0FBQ0w7QUFDckQ7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG1FQUEyQjtBQUNwRCxJQUFJLDJFQUFtQztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMkRBQWtCO0FBQzlCO0FBQ0EsTUFBTSx1RUFBK0IsU0FBUyxlQUFlO0FBQzdELE1BQU0sb0VBQTRCO0FBQ2xDLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztVQ3JDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3NjcmlwdC9wcmVzZW50ZXJzL3JlZ2lzdGVyLXByZXNlbnRlci5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL3NjcmlwdC9wcmVzZW50ZXIvcmVnaXN0ZXItcHJlc2VudGVyLmpzXHJcbmltcG9ydCAqIGFzIFJlZ2lzdGVyVmlldyBmcm9tICcuLi92aWV3cy9yZWdpc3Rlci12aWV3LmpzJztcclxuaW1wb3J0ICogYXMgQXV0aE1vZGVsIGZyb20gJy4uL21vZGVscy9hdXRoLW1vZGVsLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZ2lzdGVyUHJlc2VudGVyIHtcclxuICBjb25zdHJ1Y3RvcihhcHBDb250YWluZXIpIHtcclxuICAgIHRoaXMuYXBwID0gYXBwQ29udGFpbmVyO1xyXG4gICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgdGhpcy5hcHAuaW5uZXJIVE1MID0gUmVnaXN0ZXJWaWV3LnJlbmRlclJlZ2lzdGVyKHRoaXMuZXJyb3JNZXNzYWdlKTtcclxuICAgIFJlZ2lzdGVyVmlldy5iaW5kUmVnaXN0ZXJGb3JtU3VibWl0KHRoaXMuaGFuZGxlUmVnaXN0ZXIuYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBoYW5kbGVSZWdpc3RlcihkYXRhKSB7XHJcbiAgICBpZiAoZGF0YS5wYXNzd29yZCAhPT0gZGF0YS5wYXNzd29yZENvbmZpcm0pIHtcclxuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnUGFzc3dvcmRzIGRvIG5vdCBtYXRjaCc7XHJcbiAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBBdXRoTW9kZWwucmVnaXN0ZXIoZGF0YS51c2VybmFtZSwgZGF0YS5wYXNzd29yZCk7XHJcblxyXG4gICAgICBSZWdpc3RlclZpZXcuc2hvd1N1Y2Nlc3NNZXNzYWdlKGBVc2VyICR7ZGF0YS51c2VybmFtZX0gcmVnaXN0ZXJlZCBzdWNjZXNzZnVsbHkhYCk7XHJcbiAgICAgIFJlZ2lzdGVyVmlldy5yZWRpcmVjdFRvTG9naW4oKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcclxuICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImE0ZTRhYWRlYTU1MzE4NjJjNGZmXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9