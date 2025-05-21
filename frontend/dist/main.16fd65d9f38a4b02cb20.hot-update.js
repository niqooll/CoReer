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
/******/ 	__webpack_require__.h = () => ("8f12ca653b723f7ac83c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xNmZkNjVkOWYzOGE0YjAyY2IyMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEQ7QUFDMUQ7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG1FQUEyQjtBQUNwRCxJQUFJLDJFQUFtQztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysd0JBQXdCLGVBQWU7QUFDdkM7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7Ozs7Ozs7OztVQ3pEQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3NjcmlwdC9wcmVzZW50ZXJzL3JlZ2lzdGVyLXByZXNlbnRlci5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL3NjcmlwdC9wcmVzZW50ZXIvcmVnaXN0ZXItcHJlc2VudGVyLmpzXHJcbmltcG9ydCAqIGFzIFJlZ2lzdGVyVmlldyBmcm9tICcuLi92aWV3cy9yZWdpc3Rlci12aWV3LmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZ2lzdGVyUHJlc2VudGVyIHtcclxuICBjb25zdHJ1Y3RvcihhcHBDb250YWluZXIpIHtcclxuICAgIHRoaXMuYXBwID0gYXBwQ29udGFpbmVyO1xyXG4gICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgdGhpcy5hcHAuaW5uZXJIVE1MID0gUmVnaXN0ZXJWaWV3LnJlbmRlclJlZ2lzdGVyKHRoaXMuZXJyb3JNZXNzYWdlKTtcclxuICAgIFJlZ2lzdGVyVmlldy5iaW5kUmVnaXN0ZXJGb3JtU3VibWl0KHRoaXMuaGFuZGxlUmVnaXN0ZXIuYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVSZWdpc3RlcihkYXRhKSB7XHJcbiAgICBpZiAoZGF0YS5wYXNzd29yZCAhPT0gZGF0YS5wYXNzd29yZENvbmZpcm0pIHtcclxuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnUGFzc3dvcmRzIGRvIG5vdCBtYXRjaCc7XHJcbiAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBLaXJpbSBkYXRhIGtlIGJhY2tlbmRcclxuICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvcmVnaXN0ZXInLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIHVzZXJuYW1lOiBkYXRhLnVzZXJuYW1lLFxyXG4gICAgICAgIHBhc3N3b3JkOiBkYXRhLnBhc3N3b3JkLFxyXG4gICAgICB9KSxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKGFzeW5jIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgLy8gS2FsYXUgZXJyb3IgZGFyaSBiYWNrZW5kLCB0YW1waWxrYW4gcGVzYW4gZXJyb3JueWFcclxuICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVzdWx0Lm1lc3NhZ2UgfHwgJ1JlZ2lzdHJhdGlvbiBmYWlsZWQnO1xyXG4gICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYWxlcnQoYFVzZXIgJHtkYXRhLnVzZXJuYW1lfSByZWdpc3RlcmVkIHN1Y2Nlc3NmdWxseSFgKTtcclxuXHJcbiAgICAgICAgICAvLyBSZWRpcmVjdCBrZSBoYWxhbWFuIGxvZ2luXHJcbiAgICAgICAgICBoaXN0b3J5LnB1c2hTdGF0ZSh7fSwgJycsICcvbG9naW4nKTtcclxuICAgICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBQb3BTdGF0ZUV2ZW50KCdwb3BzdGF0ZScpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnRmFpbGVkIHRvIHJlZ2lzdGVyLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLic7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4ZjEyY2E2NTNiNzIzZjdhYzgzY1wiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==