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
// src/script/presenter/register-presenter.js
// register-presenter.js


class RegisterPresenter {
  constructor(appContainer) {
    this.app = appContainer;
    this.errorMessage = '';
  }

  init() {
    this.render();
  }

  render() {
    _views_register_view_js__WEBPACK_IMPORTED_MODULE_0__.renderRegister(this.app, this.errorMessage, this.handleRegister.bind(this));
  }

  async handleRegister(data) {
    if (data.password !== data.passwordConfirm) {
      this.errorMessage = 'Passwords do not match';
      this.render();
      return;
    }

    try {
      const res = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: data.username,
          password: data.password,
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        this.errorMessage = result.message || 'Registration failed';
        this.render();
      } else {
        alert(`User ${data.username} registered successfully!`);

        history.pushState({}, '', '/login');
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
    } catch (err) {
      this.errorMessage = 'Failed to register. Please try again later.';
      this.render();
      console.error(err);
    }
  }
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8d66a48e245bc0ac3df4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42OGE3NTA4ZmI3MTAwNjk4ZjUzNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUMwRDtBQUMxRDtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1FQUEyQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsb0NBQW9DO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLHNCQUFzQixlQUFlO0FBQ3JDO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7VUNwREEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9zY3JpcHQvcHJlc2VudGVycy9yZWdpc3Rlci1wcmVzZW50ZXIuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9zY3JpcHQvcHJlc2VudGVyL3JlZ2lzdGVyLXByZXNlbnRlci5qc1xyXG4vLyByZWdpc3Rlci1wcmVzZW50ZXIuanNcclxuaW1wb3J0ICogYXMgUmVnaXN0ZXJWaWV3IGZyb20gJy4uL3ZpZXdzL3JlZ2lzdGVyLXZpZXcuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVnaXN0ZXJQcmVzZW50ZXIge1xyXG4gIGNvbnN0cnVjdG9yKGFwcENvbnRhaW5lcikge1xyXG4gICAgdGhpcy5hcHAgPSBhcHBDb250YWluZXI7XHJcbiAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBSZWdpc3RlclZpZXcucmVuZGVyUmVnaXN0ZXIodGhpcy5hcHAsIHRoaXMuZXJyb3JNZXNzYWdlLCB0aGlzLmhhbmRsZVJlZ2lzdGVyLmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgaGFuZGxlUmVnaXN0ZXIoZGF0YSkge1xyXG4gICAgaWYgKGRhdGEucGFzc3dvcmQgIT09IGRhdGEucGFzc3dvcmRDb25maXJtKSB7XHJcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJ1Bhc3N3b3JkcyBkbyBub3QgbWF0Y2gnO1xyXG4gICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9yZWdpc3RlcicsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICB1c2VybmFtZTogZGF0YS51c2VybmFtZSxcclxuICAgICAgICAgIHBhc3N3b3JkOiBkYXRhLnBhc3N3b3JkLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgICBpZiAoIXJlcy5vaykge1xyXG4gICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVzdWx0Lm1lc3NhZ2UgfHwgJ1JlZ2lzdHJhdGlvbiBmYWlsZWQnO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWxlcnQoYFVzZXIgJHtkYXRhLnVzZXJuYW1lfSByZWdpc3RlcmVkIHN1Y2Nlc3NmdWxseSFgKTtcclxuXHJcbiAgICAgICAgaGlzdG9yeS5wdXNoU3RhdGUoe30sICcnLCAnL2xvZ2luJyk7XHJcbiAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IFBvcFN0YXRlRXZlbnQoJ3BvcHN0YXRlJykpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnRmFpbGVkIHRvIHJlZ2lzdGVyLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLic7XHJcbiAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOGQ2NmE0OGUyNDViYzBhYzNkZjRcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=