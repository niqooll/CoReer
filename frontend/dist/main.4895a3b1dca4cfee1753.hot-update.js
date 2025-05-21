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

  // import fungsi login yang sebenarnya

class LoginPresenter {
  constructor(appContainer) {
    this.app = appContainer;
    this.errorMessage = '';
  }

  init() {
    this.render();
  }

  render() {
    this.app.innerHTML = _views_login_view_js__WEBPACK_IMPORTED_MODULE_0__.renderLogin(this.errorMessage);
    _views_login_view_js__WEBPACK_IMPORTED_MODULE_0__.bindLoginFormSubmit(this.handleLogin.bind(this));
  }

  async handleLogin(data) {
    try {
      const user = await (0,_models_auth_model_js__WEBPACK_IMPORTED_MODULE_1__.login)(data.username, data.password);  // panggil API login
      localStorage.setItem('currentUser', JSON.stringify(user));  // simpan user
      history.pushState({}, '', '/main');
      window.dispatchEvent(new PopStateEvent('popstate'));
    } catch (error) {
      this.errorMessage = 'Invalid username or password';
      this.render();
    }
  }
}



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7ef8145b01e30cf8e705")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40ODk1YTNiMWRjYTRjZmVlMTc1My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ29EO0FBQ0osRUFBRTtBQUNsRDtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNkRBQXFCO0FBQzlDLElBQUkscUVBQTZCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDREQUFLLGlDQUFpQztBQUMvRCxrRUFBa0U7QUFDbEUsMEJBQTBCO0FBQzFCO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O1VDL0JBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvc2NyaXB0L3ByZXNlbnRlcnMvbG9naW4tcHJlc2VudGVyLmpzIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvc2NyaXB0L3ByZXNlbnRlci9sb2dpbi1wcmVzZW50ZXIuanNcclxuaW1wb3J0ICogYXMgTG9naW5WaWV3IGZyb20gJy4uL3ZpZXdzL2xvZ2luLXZpZXcuanMnO1xyXG5pbXBvcnQgeyBsb2dpbiB9IGZyb20gJy4uL21vZGVscy9hdXRoLW1vZGVsLmpzJzsgIC8vIGltcG9ydCBmdW5nc2kgbG9naW4geWFuZyBzZWJlbmFybnlhXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpblByZXNlbnRlciB7XHJcbiAgY29uc3RydWN0b3IoYXBwQ29udGFpbmVyKSB7XHJcbiAgICB0aGlzLmFwcCA9IGFwcENvbnRhaW5lcjtcclxuICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHRoaXMuYXBwLmlubmVySFRNTCA9IExvZ2luVmlldy5yZW5kZXJMb2dpbih0aGlzLmVycm9yTWVzc2FnZSk7XHJcbiAgICBMb2dpblZpZXcuYmluZExvZ2luRm9ybVN1Ym1pdCh0aGlzLmhhbmRsZUxvZ2luLmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgaGFuZGxlTG9naW4oZGF0YSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGxvZ2luKGRhdGEudXNlcm5hbWUsIGRhdGEucGFzc3dvcmQpOyAgLy8gcGFuZ2dpbCBBUEkgbG9naW5cclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRVc2VyJywgSlNPTi5zdHJpbmdpZnkodXNlcikpOyAgLy8gc2ltcGFuIHVzZXJcclxuICAgICAgaGlzdG9yeS5wdXNoU3RhdGUoe30sICcnLCAnL21haW4nKTtcclxuICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IFBvcFN0YXRlRXZlbnQoJ3BvcHN0YXRlJykpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnSW52YWxpZCB1c2VybmFtZSBvciBwYXNzd29yZCc7XHJcbiAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI3ZWY4MTQ1YjAxZTMwY2Y4ZTcwNVwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==