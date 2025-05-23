"use strict";
self["webpackHotUpdatefrontend"]("main",{

/***/ "./src/script/presenters/login-presenter.js":
/*!**************************************************!*\
  !*** ./src/script/presenters/login-presenter.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoginPresenter)
/* harmony export */ });
/* harmony import */ var _views_login_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/login-view.js */ "./src/script/views/login-view.js");
/* harmony import */ var _models_auth_model_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/auth-model.js */ "./src/script/models/auth-model.js");
// src/script/presenter/login-presenter.js



class LoginPresenter {
  constructor(appContainer) {
    this.app = appContainer;
    this.errorMessage = '';
  }

  init() {
    this.render();
  }

  render() {
    _views_login_view_js__WEBPACK_IMPORTED_MODULE_0__.showLogin(this.app, this.errorMessage, this.handleLogin.bind(this));
  }

  async handleLogin(data) {
    try {
      const user = await (0,_models_auth_model_js__WEBPACK_IMPORTED_MODULE_1__.login)(data.username, data.password);
      localStorage.setItem('currentUser', JSON.stringify(user));
      window.location.hash = '#/main';
      window.dispatchEvent(new PopStateEvent('popstate'));
    } catch (err) {
      this.errorMessage = 'Login gagal: ' + err.message;
      this.render();
    }
  }
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2349edb5076d4991002d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lNDA2NDYyYzk0YmFjNGI2ZDBhZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ29EO0FBQ0o7QUFDaEQ7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwyREFBbUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNERBQUs7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztVQzdCQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3NjcmlwdC9wcmVzZW50ZXJzL2xvZ2luLXByZXNlbnRlci5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL3NjcmlwdC9wcmVzZW50ZXIvbG9naW4tcHJlc2VudGVyLmpzXHJcbmltcG9ydCAqIGFzIExvZ2luVmlldyBmcm9tICcuLi92aWV3cy9sb2dpbi12aWV3LmpzJztcclxuaW1wb3J0IHsgbG9naW4gfSBmcm9tICcuLi9tb2RlbHMvYXV0aC1tb2RlbC5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpblByZXNlbnRlciB7XHJcbiAgY29uc3RydWN0b3IoYXBwQ29udGFpbmVyKSB7XHJcbiAgICB0aGlzLmFwcCA9IGFwcENvbnRhaW5lcjtcclxuICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIExvZ2luVmlldy5zaG93TG9naW4odGhpcy5hcHAsIHRoaXMuZXJyb3JNZXNzYWdlLCB0aGlzLmhhbmRsZUxvZ2luLmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgaGFuZGxlTG9naW4oZGF0YSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGxvZ2luKGRhdGEudXNlcm5hbWUsIGRhdGEucGFzc3dvcmQpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudFVzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyKSk7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyMvbWFpbic7XHJcbiAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBQb3BTdGF0ZUV2ZW50KCdwb3BzdGF0ZScpKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICdMb2dpbiBnYWdhbDogJyArIGVyci5tZXNzYWdlO1xyXG4gICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyMzQ5ZWRiNTA3NmQ0OTkxMDAyZFwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==