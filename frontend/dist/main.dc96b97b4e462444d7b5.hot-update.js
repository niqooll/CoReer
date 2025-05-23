"use strict";
self["webpackHotUpdatefrontend"]("main",{

/***/ "./src/script/views/login-view.js":
/*!****************************************!*\
  !*** ./src/script/views/login-view.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showLogin: () => (/* binding */ showLogin)
/* harmony export */ });
// src/script/views/login-view.js

function showLogin(container, errorMessage = '', onSubmit) {
  container.innerHTML = `
    <div class="container" style="max-width: 450px; margin: 3rem auto;">
      <div class="card p-4 shadow-sm">
        <h3 class="card-title text-center mb-4">Login to CoReer</h3>
        <form id="login-form" novalidate>
          <div class="mb-3">
            <label for="username" class="form-label">Username or Email</label>
            <input
              type="text"
              id="username"
              name="username"
              class="form-control"
              placeholder="Enter username or email"
              required
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              class="form-control"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary w-100">Login</button>
        </form>
        <p class="text-danger mt-1 text-center">${errorMessage}</p>
        <div class="mt-1 text-center">
          Don't have an account? <a href="#/register">Register here</a>
        </div>
      </div>
    </div>
  `;

  const form = container.querySelector('#login-form');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = {
      username: form.username.value.trim(),
      password: form.password.value,
    };
    onSubmit(data);
  });
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8f88aff693e6f557a783")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kYzk2Yjk3YjRlNDYyNDQ0ZDdiNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ087QUFDUDtBQUNBLG9EQUFvRCxrQkFBa0I7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGFBQWE7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7VUNqREEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9zY3JpcHQvdmlld3MvbG9naW4tdmlldy5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL3NjcmlwdC92aWV3cy9sb2dpbi12aWV3LmpzXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd0xvZ2luKGNvbnRhaW5lciwgZXJyb3JNZXNzYWdlID0gJycsIG9uU3VibWl0KSB7XHJcbiAgY29udGFpbmVyLmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIiBzdHlsZT1cIm1heC13aWR0aDogNDUwcHg7IG1hcmdpbjogM3JlbSBhdXRvO1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBwLTQgc2hhZG93LXNtXCI+XHJcbiAgICAgICAgPGgzIGNsYXNzPVwiY2FyZC10aXRsZSB0ZXh0LWNlbnRlciBtYi00XCI+TG9naW4gdG8gQ29SZWVyPC9oMz5cclxuICAgICAgICA8Zm9ybSBpZD1cImxvZ2luLWZvcm1cIiBub3ZhbGlkYXRlPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTNcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInVzZXJuYW1lXCIgY2xhc3M9XCJmb3JtLWxhYmVsXCI+VXNlcm5hbWUgb3IgRW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB1c2VybmFtZSBvciBlbWFpbFwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTNcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWxhYmVsXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgdy0xMDBcIj5Mb2dpbjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8cCBjbGFzcz1cInRleHQtZGFuZ2VyIG10LTEgdGV4dC1jZW50ZXJcIj4ke2Vycm9yTWVzc2FnZX08L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm10LTEgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIERvbid0IGhhdmUgYW4gYWNjb3VudD8gPGEgaHJlZj1cIiMvcmVnaXN0ZXJcIj5SZWdpc3RlciBoZXJlPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIGA7XHJcblxyXG4gIGNvbnN0IGZvcm0gPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignI2xvZ2luLWZvcm0nKTtcclxuICBmb3JtPy5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgdXNlcm5hbWU6IGZvcm0udXNlcm5hbWUudmFsdWUudHJpbSgpLFxyXG4gICAgICBwYXNzd29yZDogZm9ybS5wYXNzd29yZC52YWx1ZSxcclxuICAgIH07XHJcbiAgICBvblN1Ym1pdChkYXRhKTtcclxuICB9KTtcclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4Zjg4YWZmNjkzZTZmNTU3YTc4M1wiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==