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
    const username = form.username.value.trim();
    const password = form.password.value;

    // ✅ Validasi tidak boleh kosong
    if (!username || !password) {
      alert('Username dan Password tidak boleh kosong.');
      return;
    }

    const data = { username, password };
    onSubmit(data);
  });
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f95f751fa0de09d9bd68")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yMzQ5ZWRiNTA3NmQ0OTkxMDAyZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ087QUFDUDtBQUNBLG9EQUFvRCxrQkFBa0I7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGFBQWE7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7OztVQ3ZEQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3NjcmlwdC92aWV3cy9sb2dpbi12aWV3LmpzIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvc2NyaXB0L3ZpZXdzL2xvZ2luLXZpZXcuanNcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93TG9naW4oY29udGFpbmVyLCBlcnJvck1lc3NhZ2UgPSAnJywgb25TdWJtaXQpIHtcclxuICBjb250YWluZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiIHN0eWxlPVwibWF4LXdpZHRoOiA0NTBweDsgbWFyZ2luOiAzcmVtIGF1dG87XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIHAtNCBzaGFkb3ctc21cIj5cclxuICAgICAgICA8aDMgY2xhc3M9XCJjYXJkLXRpdGxlIHRleHQtY2VudGVyIG1iLTRcIj5Mb2dpbiB0byBDb1JlZXI8L2gzPlxyXG4gICAgICAgIDxmb3JtIGlkPVwibG9naW4tZm9ybVwiIG5vdmFsaWRhdGU+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItM1wiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwidXNlcm5hbWVcIiBjbGFzcz1cImZvcm0tbGFiZWxcIj5Vc2VybmFtZSBvciBFbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBpZD1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHVzZXJuYW1lIG9yIGVtYWlsXCJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItM1wiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIiBjbGFzcz1cImZvcm0tbGFiZWxcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSB3LTEwMFwiPkxvZ2luPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxwIGNsYXNzPVwidGV4dC1kYW5nZXIgbXQtMSB0ZXh0LWNlbnRlclwiPiR7ZXJyb3JNZXNzYWdlfTwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibXQtMSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgRG9uJ3QgaGF2ZSBhbiBhY2NvdW50PyA8YSBocmVmPVwiIy9yZWdpc3RlclwiPlJlZ2lzdGVyIGhlcmU8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgYDtcclxuXHJcbiAgY29uc3QgZm9ybSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcjbG9naW4tZm9ybScpO1xyXG4gIGZvcm0/LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCB1c2VybmFtZSA9IGZvcm0udXNlcm5hbWUudmFsdWUudHJpbSgpO1xyXG4gICAgY29uc3QgcGFzc3dvcmQgPSBmb3JtLnBhc3N3b3JkLnZhbHVlO1xyXG5cclxuICAgIC8vIOKchSBWYWxpZGFzaSB0aWRhayBib2xlaCBrb3NvbmdcclxuICAgIGlmICghdXNlcm5hbWUgfHwgIXBhc3N3b3JkKSB7XHJcbiAgICAgIGFsZXJ0KCdVc2VybmFtZSBkYW4gUGFzc3dvcmQgdGlkYWsgYm9sZWgga29zb25nLicpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IHsgdXNlcm5hbWUsIHBhc3N3b3JkIH07XHJcbiAgICBvblN1Ym1pdChkYXRhKTtcclxuICB9KTtcclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmOTVmNzUxZmEwZGUwOWQ5YmQ2OFwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==