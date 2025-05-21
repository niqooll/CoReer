"use strict";
self["webpackHotUpdatefrontend"]("main",{

/***/ "./src/routes/routes.js":
/*!******************************!*\
  !*** ./src/routes/routes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _views_landing_page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/landing-page.js */ "./src/views/landing-page.js");
/* harmony import */ var _views_login_page_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/login-page.js */ "./src/views/login-page.js");
/* harmony import */ var _views_register_page_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/register-page.js */ "./src/views/register-page.js");
// src/routes/routes.js




const routes = {
  '/': new _views_landing_page_js__WEBPACK_IMPORTED_MODULE_0__["default"](),
  '/landing': new _views_landing_page_js__WEBPACK_IMPORTED_MODULE_0__["default"](),
  '/login': new _views_login_page_js__WEBPACK_IMPORTED_MODULE_1__["default"](),
  '/register': new _views_register_page_js__WEBPACK_IMPORTED_MODULE_2__["default"](),
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);


/***/ }),

/***/ "./src/views/landing-page.js":
/*!***********************************!*\
  !*** ./src/views/landing-page.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LandingPage)
/* harmony export */ });
// src/pages/landing-page.js

class LandingPage {
  render() {
    return `
      <h1>Welcome to CoReer</h1>
      <p>This is the landing page. Please login or register to unlock full features.</p>
    `;
  }

  afterRender() {
    // Tidak ada event handling di landing page
  }

  update() {
    const app = document.getElementById('app');
    app.innerHTML = this.render();
    this.afterRender();
  }
}


/***/ }),

/***/ "./src/views/login-page.js":
/*!*********************************!*\
  !*** ./src/views/login-page.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoginPage)
/* harmony export */ });
// src/pages/login-page.js

class LoginPage {
  constructor() {
    this.errorMessage = '';
  }

  setError(message) {
    this.errorMessage = message;
  }

  render() {
    return `
      <h2>Login</h2>
      <form id="login-form">
        <input type="text" name="username" placeholder="Username" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p class="error-message">${this.errorMessage}</p>
    `;
  }

  afterRender() {
    const form = document.getElementById('login-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = form.username.value.trim();
      const password = form.password.value;

      if (!username || !password) {
        this.setError('Please fill in all fields');
        this.update();
        return;
      }

      // TODO: proses login, cek user dsb
      alert(`Logged in as: ${username}`);
      history.pushState({}, '', '/');
      window.dispatchEvent(new PopStateEvent('popstate'));
    });
  }

  update() {
    const app = document.getElementById('app');
    app.innerHTML = this.render();
    this.afterRender();
  }
}


/***/ }),

/***/ "./src/views/register-page.js":
/*!************************************!*\
  !*** ./src/views/register-page.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RegisterPage)
/* harmony export */ });
// src/pages/register-page.js

class RegisterPage {
  constructor() {
    this.errorMessage = '';
  }

  setError(message) {
    this.errorMessage = message;
  }

  render() {
    return `
      <h2>Register</h2>
      <form id="register-form">
        <input type="text" name="username" placeholder="Username" required />
        <input type="password" name="password" placeholder="Password" required />
        <input type="password" name="passwordConfirm" placeholder="Confirm Password" required />
        <button type="submit">Register</button>
      </form>
      <p class="error-message">${this.errorMessage}</p>
    `;
  }

  afterRender() {
    const form = document.getElementById('register-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = form.username.value.trim();
      const password = form.password.value;
      const passwordConfirm = form.passwordConfirm.value;

      if (password !== passwordConfirm) {
        this.setError('Passwords do not match');
        this.update();
        return;
      }
      // TODO: proses registrasi, bisa async API call dll
      alert(`Registered username: ${username}`);
      history.pushState({}, '', '/login');
      window.dispatchEvent(new PopStateEvent('popstate'));
    });
  }

  update() {
    const app = document.getElementById('app');
    app.innerHTML = this.render();
    this.afterRender();
  }
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("45486a6f325a6a16c590")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xOGY0N2U2NGQ0YWMyZTUwMTA4Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNtRDtBQUNKO0FBQ007QUFDckQ7QUFDQTtBQUNBLFdBQVcsOERBQVc7QUFDdEIsa0JBQWtCLDhEQUFXO0FBQzdCLGdCQUFnQiw0REFBUztBQUN6QixtQkFBbUIsK0RBQVk7QUFDL0I7QUFDQTtBQUNBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDWnRCO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixTQUFTO0FBQ3RDLDBCQUEwQjtBQUMxQjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNoREE7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxTQUFTO0FBQzdDLDBCQUEwQjtBQUMxQjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7VUNqREEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9yb3V0ZXMvcm91dGVzLmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3ZpZXdzL2xhbmRpbmctcGFnZS5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy92aWV3cy9sb2dpbi1wYWdlLmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3ZpZXdzL3JlZ2lzdGVyLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9yb3V0ZXMvcm91dGVzLmpzXHJcbmltcG9ydCBMYW5kaW5nUGFnZSBmcm9tICcuLi92aWV3cy9sYW5kaW5nLXBhZ2UuanMnO1xyXG5pbXBvcnQgTG9naW5QYWdlIGZyb20gJy4uL3ZpZXdzL2xvZ2luLXBhZ2UuanMnO1xyXG5pbXBvcnQgUmVnaXN0ZXJQYWdlIGZyb20gJy4uL3ZpZXdzL3JlZ2lzdGVyLXBhZ2UuanMnO1xyXG5cclxuY29uc3Qgcm91dGVzID0ge1xyXG4gICcvJzogbmV3IExhbmRpbmdQYWdlKCksXHJcbiAgJy9sYW5kaW5nJzogbmV3IExhbmRpbmdQYWdlKCksXHJcbiAgJy9sb2dpbic6IG5ldyBMb2dpblBhZ2UoKSxcclxuICAnL3JlZ2lzdGVyJzogbmV3IFJlZ2lzdGVyUGFnZSgpLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVzO1xyXG4iLCIvLyBzcmMvcGFnZXMvbGFuZGluZy1wYWdlLmpzXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYW5kaW5nUGFnZSB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIGBcclxuICAgICAgPGgxPldlbGNvbWUgdG8gQ29SZWVyPC9oMT5cclxuICAgICAgPHA+VGhpcyBpcyB0aGUgbGFuZGluZyBwYWdlLiBQbGVhc2UgbG9naW4gb3IgcmVnaXN0ZXIgdG8gdW5sb2NrIGZ1bGwgZmVhdHVyZXMuPC9wPlxyXG4gICAgYDtcclxuICB9XHJcblxyXG4gIGFmdGVyUmVuZGVyKCkge1xyXG4gICAgLy8gVGlkYWsgYWRhIGV2ZW50IGhhbmRsaW5nIGRpIGxhbmRpbmcgcGFnZVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgY29uc3QgYXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xyXG4gICAgYXBwLmlubmVySFRNTCA9IHRoaXMucmVuZGVyKCk7XHJcbiAgICB0aGlzLmFmdGVyUmVuZGVyKCk7XHJcbiAgfVxyXG59XHJcbiIsIi8vIHNyYy9wYWdlcy9sb2dpbi1wYWdlLmpzXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpblBhZ2Uge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcclxuICB9XHJcblxyXG4gIHNldEVycm9yKG1lc3NhZ2UpIHtcclxuICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gbWVzc2FnZTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiBgXHJcbiAgICAgIDxoMj5Mb2dpbjwvaDI+XHJcbiAgICAgIDxmb3JtIGlkPVwibG9naW4tZm9ybVwiPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VybmFtZVwiIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5Mb2dpbjwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDxwIGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiPiR7dGhpcy5lcnJvck1lc3NhZ2V9PC9wPlxyXG4gICAgYDtcclxuICB9XHJcblxyXG4gIGFmdGVyUmVuZGVyKCkge1xyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi1mb3JtJyk7XHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY29uc3QgdXNlcm5hbWUgPSBmb3JtLnVzZXJuYW1lLnZhbHVlLnRyaW0oKTtcclxuICAgICAgY29uc3QgcGFzc3dvcmQgPSBmb3JtLnBhc3N3b3JkLnZhbHVlO1xyXG5cclxuICAgICAgaWYgKCF1c2VybmFtZSB8fCAhcGFzc3dvcmQpIHtcclxuICAgICAgICB0aGlzLnNldEVycm9yKCdQbGVhc2UgZmlsbCBpbiBhbGwgZmllbGRzJyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFRPRE86IHByb3NlcyBsb2dpbiwgY2VrIHVzZXIgZHNiXHJcbiAgICAgIGFsZXJ0KGBMb2dnZWQgaW4gYXM6ICR7dXNlcm5hbWV9YCk7XHJcbiAgICAgIGhpc3RvcnkucHVzaFN0YXRlKHt9LCAnJywgJy8nKTtcclxuICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IFBvcFN0YXRlRXZlbnQoJ3BvcHN0YXRlJykpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICBjb25zdCBhcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XHJcbiAgICBhcHAuaW5uZXJIVE1MID0gdGhpcy5yZW5kZXIoKTtcclxuICAgIHRoaXMuYWZ0ZXJSZW5kZXIoKTtcclxuICB9XHJcbn1cclxuIiwiLy8gc3JjL3BhZ2VzL3JlZ2lzdGVyLXBhZ2UuanNcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZ2lzdGVyUGFnZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xyXG4gIH1cclxuXHJcbiAgc2V0RXJyb3IobWVzc2FnZSkge1xyXG4gICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBtZXNzYWdlO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIGBcclxuICAgICAgPGgyPlJlZ2lzdGVyPC9oMj5cclxuICAgICAgPGZvcm0gaWQ9XCJyZWdpc3Rlci1mb3JtXCI+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRDb25maXJtXCIgcGxhY2Vob2xkZXI9XCJDb25maXJtIFBhc3N3b3JkXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5SZWdpc3RlcjwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDxwIGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiPiR7dGhpcy5lcnJvck1lc3NhZ2V9PC9wPlxyXG4gICAgYDtcclxuICB9XHJcblxyXG4gIGFmdGVyUmVuZGVyKCkge1xyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWdpc3Rlci1mb3JtJyk7XHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY29uc3QgdXNlcm5hbWUgPSBmb3JtLnVzZXJuYW1lLnZhbHVlLnRyaW0oKTtcclxuICAgICAgY29uc3QgcGFzc3dvcmQgPSBmb3JtLnBhc3N3b3JkLnZhbHVlO1xyXG4gICAgICBjb25zdCBwYXNzd29yZENvbmZpcm0gPSBmb3JtLnBhc3N3b3JkQ29uZmlybS52YWx1ZTtcclxuXHJcbiAgICAgIGlmIChwYXNzd29yZCAhPT0gcGFzc3dvcmRDb25maXJtKSB7XHJcbiAgICAgICAgdGhpcy5zZXRFcnJvcignUGFzc3dvcmRzIGRvIG5vdCBtYXRjaCcpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIFRPRE86IHByb3NlcyByZWdpc3RyYXNpLCBiaXNhIGFzeW5jIEFQSSBjYWxsIGRsbFxyXG4gICAgICBhbGVydChgUmVnaXN0ZXJlZCB1c2VybmFtZTogJHt1c2VybmFtZX1gKTtcclxuICAgICAgaGlzdG9yeS5wdXNoU3RhdGUoe30sICcnLCAnL2xvZ2luJyk7XHJcbiAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBQb3BTdGF0ZUV2ZW50KCdwb3BzdGF0ZScpKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgY29uc3QgYXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xyXG4gICAgYXBwLmlubmVySFRNTCA9IHRoaXMucmVuZGVyKCk7XHJcbiAgICB0aGlzLmFmdGVyUmVuZGVyKCk7XHJcbiAgfVxyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjQ1NDg2YTZmMzI1YTZhMTZjNTkwXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9