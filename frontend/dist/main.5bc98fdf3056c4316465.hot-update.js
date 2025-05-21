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

handleRegister(data) {
  if (data.password !== data.passwordConfirm) {
    this.errorMessage = 'Passwords do not match';
    this.render();
    return;
  }

  // Kirim data ke backend
  fetch('http://localhost:3000/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: data.username,
      password: data.password,
    }),
  })
    .then(async (response) => {
      const result = await response.json();

      if (!response.ok) {
        // Kalau error dari backend, tampilkan pesan errornya
        this.errorMessage = result.message || 'Registration failed';
        this.render();
      } else {
        alert(`User ${data.username} registered successfully!`);

        // Redirect ke halaman login
        history.pushState({}, '', '/login');
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
    })
    .catch((err) => {
      this.errorMessage = 'Failed to register. Please try again later.';
      this.render();
      console.error(err);
    });
}

}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("16fd65d9f38a4b02cb20")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41YmM5OGZkZjMwNTZjNDMxNjQ2NS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEQ7QUFDMUQ7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG1FQUEyQjtBQUNwRCxJQUFJLDJFQUFtQztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1Isc0JBQXNCLGVBQWU7QUFDckM7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7Ozs7Ozs7O1VDMURBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvc2NyaXB0L3ByZXNlbnRlcnMvcmVnaXN0ZXItcHJlc2VudGVyLmpzIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvc2NyaXB0L3ByZXNlbnRlci9yZWdpc3Rlci1wcmVzZW50ZXIuanNcclxuaW1wb3J0ICogYXMgUmVnaXN0ZXJWaWV3IGZyb20gJy4uL3ZpZXdzL3JlZ2lzdGVyLXZpZXcuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVnaXN0ZXJQcmVzZW50ZXIge1xyXG4gIGNvbnN0cnVjdG9yKGFwcENvbnRhaW5lcikge1xyXG4gICAgdGhpcy5hcHAgPSBhcHBDb250YWluZXI7XHJcbiAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICB0aGlzLmFwcC5pbm5lckhUTUwgPSBSZWdpc3RlclZpZXcucmVuZGVyUmVnaXN0ZXIodGhpcy5lcnJvck1lc3NhZ2UpO1xyXG4gICAgUmVnaXN0ZXJWaWV3LmJpbmRSZWdpc3RlckZvcm1TdWJtaXQodGhpcy5oYW5kbGVSZWdpc3Rlci5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG5oYW5kbGVSZWdpc3RlcihkYXRhKSB7XHJcbiAgaWYgKGRhdGEucGFzc3dvcmQgIT09IGRhdGEucGFzc3dvcmRDb25maXJtKSB7XHJcbiAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICdQYXNzd29yZHMgZG8gbm90IG1hdGNoJztcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLyBLaXJpbSBkYXRhIGtlIGJhY2tlbmRcclxuICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3JlZ2lzdGVyJywge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICB1c2VybmFtZTogZGF0YS51c2VybmFtZSxcclxuICAgICAgcGFzc3dvcmQ6IGRhdGEucGFzc3dvcmQsXHJcbiAgICB9KSxcclxuICB9KVxyXG4gICAgLnRoZW4oYXN5bmMgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAvLyBLYWxhdSBlcnJvciBkYXJpIGJhY2tlbmQsIHRhbXBpbGthbiBwZXNhbiBlcnJvcm55YVxyXG4gICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVzdWx0Lm1lc3NhZ2UgfHwgJ1JlZ2lzdHJhdGlvbiBmYWlsZWQnO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWxlcnQoYFVzZXIgJHtkYXRhLnVzZXJuYW1lfSByZWdpc3RlcmVkIHN1Y2Nlc3NmdWxseSFgKTtcclxuXHJcbiAgICAgICAgLy8gUmVkaXJlY3Qga2UgaGFsYW1hbiBsb2dpblxyXG4gICAgICAgIGhpc3RvcnkucHVzaFN0YXRlKHt9LCAnJywgJy9sb2dpbicpO1xyXG4gICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBQb3BTdGF0ZUV2ZW50KCdwb3BzdGF0ZScpKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJ0ZhaWxlZCB0byByZWdpc3Rlci4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nO1xyXG4gICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB9KTtcclxufVxyXG5cclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxNmZkNjVkOWYzOGE0YjAyY2IyMFwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==