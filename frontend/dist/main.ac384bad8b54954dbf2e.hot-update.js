"use strict";
self["webpackHotUpdatefrontend"]("main",{

/***/ "./src/script/views/login-view.js":
/*!****************************************!*\
  !*** ./src/script/views/login-view.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bindLoginFormSubmit: () => (/* binding */ bindLoginFormSubmit),
/* harmony export */   renderLogin: () => (/* binding */ renderLogin)
/* harmony export */ });
// src/script/views/login-view.js
function renderLogin(errorMessage = '') {
  return `
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
}


function bindLoginFormSubmit(callback) {
  const form = document.getElementById('login-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = {
      username: form.username.value.trim(),
      password: form.password.value,
    };
    callback(data);
  });
}



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("295514ccd0ee5ce60180")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hYzM4NGJhZDhiNTQ5NTRkYmYyZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDTztBQUNQO0FBQ0Esb0RBQW9ELGtCQUFrQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsYUFBYTtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7Ozs7Ozs7VUNyREEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9zY3JpcHQvdmlld3MvbG9naW4tdmlldy5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL3NjcmlwdC92aWV3cy9sb2dpbi12aWV3LmpzXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJMb2dpbihlcnJvck1lc3NhZ2UgPSAnJykge1xyXG4gIHJldHVybiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgc3R5bGU9XCJtYXgtd2lkdGg6IDQ1MHB4OyBtYXJnaW46IDNyZW0gYXV0bztcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQgcC00IHNoYWRvdy1zbVwiPlxyXG4gICAgICAgIDxoMyBjbGFzcz1cImNhcmQtdGl0bGUgdGV4dC1jZW50ZXIgbWItNFwiPkxvZ2luIHRvIENvUmVlcjwvaDM+XHJcbiAgICAgICAgPGZvcm0gaWQ9XCJsb2dpbi1mb3JtXCIgbm92YWxpZGF0ZT5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ1c2VybmFtZVwiIGNsYXNzPVwiZm9ybS1sYWJlbFwiPlVzZXJuYW1lIG9yIEVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGlkPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgdXNlcm5hbWUgb3IgZW1haWxcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1sYWJlbFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IHctMTAwXCI+TG9naW48L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWRhbmdlciBtdC0xIHRleHQtY2VudGVyXCI+JHtlcnJvck1lc3NhZ2V9PC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtdC0xIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICBEb24ndCBoYXZlIGFuIGFjY291bnQ/IDxhIGhyZWY9XCIjL3JlZ2lzdGVyXCI+UmVnaXN0ZXIgaGVyZTwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICBgO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJpbmRMb2dpbkZvcm1TdWJtaXQoY2FsbGJhY2spIHtcclxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luLWZvcm0nKTtcclxuICBpZiAoIWZvcm0pIHJldHVybjtcclxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICB1c2VybmFtZTogZm9ybS51c2VybmFtZS52YWx1ZS50cmltKCksXHJcbiAgICAgIHBhc3N3b3JkOiBmb3JtLnBhc3N3b3JkLnZhbHVlLFxyXG4gICAgfTtcclxuICAgIGNhbGxiYWNrKGRhdGEpO1xyXG4gIH0pO1xyXG59XHJcblxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyOTU1MTRjY2QwZWU1Y2U2MDE4MFwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==