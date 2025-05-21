"use strict";
self["webpackHotUpdatefrontend"]("main",{

/***/ "./src/views/register-view.js":
/*!************************************!*\
  !*** ./src/views/register-view.js ***!
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
/******/ 	__webpack_require__.h = () => ("0393b4c06b47d4a88b9a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4wNTRhZmU4MDcwZjdkMWI2YjU0OC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLFNBQVM7QUFDN0MsMEJBQTBCO0FBQzFCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztVQ2pEQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3ZpZXdzL3JlZ2lzdGVyLXZpZXcuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9wYWdlcy9yZWdpc3Rlci1wYWdlLmpzXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWdpc3RlclBhZ2Uge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcclxuICB9XHJcblxyXG4gIHNldEVycm9yKG1lc3NhZ2UpIHtcclxuICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gbWVzc2FnZTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiBgXHJcbiAgICAgIDxoMj5SZWdpc3RlcjwvaDI+XHJcbiAgICAgIDxmb3JtIGlkPVwicmVnaXN0ZXItZm9ybVwiPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VybmFtZVwiIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkQ29uZmlybVwiIHBsYWNlaG9sZGVyPVwiQ29uZmlybSBQYXNzd29yZFwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+UmVnaXN0ZXI8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8cCBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIj4ke3RoaXMuZXJyb3JNZXNzYWdlfTwvcD5cclxuICAgIGA7XHJcbiAgfVxyXG5cclxuICBhZnRlclJlbmRlcigpIHtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaXN0ZXItZm9ybScpO1xyXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGNvbnN0IHVzZXJuYW1lID0gZm9ybS51c2VybmFtZS52YWx1ZS50cmltKCk7XHJcbiAgICAgIGNvbnN0IHBhc3N3b3JkID0gZm9ybS5wYXNzd29yZC52YWx1ZTtcclxuICAgICAgY29uc3QgcGFzc3dvcmRDb25maXJtID0gZm9ybS5wYXNzd29yZENvbmZpcm0udmFsdWU7XHJcblxyXG4gICAgICBpZiAocGFzc3dvcmQgIT09IHBhc3N3b3JkQ29uZmlybSkge1xyXG4gICAgICAgIHRoaXMuc2V0RXJyb3IoJ1Bhc3N3b3JkcyBkbyBub3QgbWF0Y2gnKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICAvLyBUT0RPOiBwcm9zZXMgcmVnaXN0cmFzaSwgYmlzYSBhc3luYyBBUEkgY2FsbCBkbGxcclxuICAgICAgYWxlcnQoYFJlZ2lzdGVyZWQgdXNlcm5hbWU6ICR7dXNlcm5hbWV9YCk7XHJcbiAgICAgIGhpc3RvcnkucHVzaFN0YXRlKHt9LCAnJywgJy9sb2dpbicpO1xyXG4gICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgUG9wU3RhdGVFdmVudCgncG9wc3RhdGUnKSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIGNvbnN0IGFwcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKTtcclxuICAgIGFwcC5pbm5lckhUTUwgPSB0aGlzLnJlbmRlcigpO1xyXG4gICAgdGhpcy5hZnRlclJlbmRlcigpO1xyXG4gIH1cclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwMzkzYjRjMDZiNDdkNGE4OGI5YVwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==