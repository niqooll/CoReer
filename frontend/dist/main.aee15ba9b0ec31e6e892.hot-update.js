"use strict";
self["webpackHotUpdatefrontend"]("main",{

/***/ "./src/views/login-view.js":
/*!*********************************!*\
  !*** ./src/views/login-view.js ***!
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


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e1381a884fba38e679c0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hZWUxNWJhOWIwZWMzMWU2ZTg5Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixTQUFTO0FBQ3RDLDBCQUEwQjtBQUMxQjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7VUNoREEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy92aWV3cy9sb2dpbi12aWV3LmpzIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvcGFnZXMvbG9naW4tcGFnZS5qc1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW5QYWdlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XHJcbiAgfVxyXG5cclxuICBzZXRFcnJvcihtZXNzYWdlKSB7XHJcbiAgICB0aGlzLmVycm9yTWVzc2FnZSA9IG1lc3NhZ2U7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgICA8aDI+TG9naW48L2gyPlxyXG4gICAgICA8Zm9ybSBpZD1cImxvZ2luLWZvcm1cIj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlcm5hbWVcIiBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+TG9naW48L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8cCBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIj4ke3RoaXMuZXJyb3JNZXNzYWdlfTwvcD5cclxuICAgIGA7XHJcbiAgfVxyXG5cclxuICBhZnRlclJlbmRlcigpIHtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4tZm9ybScpO1xyXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGNvbnN0IHVzZXJuYW1lID0gZm9ybS51c2VybmFtZS52YWx1ZS50cmltKCk7XHJcbiAgICAgIGNvbnN0IHBhc3N3b3JkID0gZm9ybS5wYXNzd29yZC52YWx1ZTtcclxuXHJcbiAgICAgIGlmICghdXNlcm5hbWUgfHwgIXBhc3N3b3JkKSB7XHJcbiAgICAgICAgdGhpcy5zZXRFcnJvcignUGxlYXNlIGZpbGwgaW4gYWxsIGZpZWxkcycpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBUT0RPOiBwcm9zZXMgbG9naW4sIGNlayB1c2VyIGRzYlxyXG4gICAgICBhbGVydChgTG9nZ2VkIGluIGFzOiAke3VzZXJuYW1lfWApO1xyXG4gICAgICBoaXN0b3J5LnB1c2hTdGF0ZSh7fSwgJycsICcvJyk7XHJcbiAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBQb3BTdGF0ZUV2ZW50KCdwb3BzdGF0ZScpKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgY29uc3QgYXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xyXG4gICAgYXBwLmlubmVySFRNTCA9IHRoaXMucmVuZGVyKCk7XHJcbiAgICB0aGlzLmFmdGVyUmVuZGVyKCk7XHJcbiAgfVxyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImUxMzgxYTg4NGZiYTM4ZTY3OWMwXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9