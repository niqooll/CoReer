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
          Don't have an account? <a href="/register">Register here</a>
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
/******/ 	__webpack_require__.h = () => ("69b88822e1d2752bdd17")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hNDJlZGZhOGUwYzlmYzA1ZmZjMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDTztBQUNQO0FBQ0Esb0RBQW9ELGtCQUFrQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsYUFBYTtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7Ozs7Ozs7VUNyREEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9zY3JpcHQvdmlld3MvbG9naW4tdmlldy5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL3NjcmlwdC92aWV3cy9sb2dpbi12aWV3LmpzXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJMb2dpbihlcnJvck1lc3NhZ2UgPSAnJykge1xyXG4gIHJldHVybiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgc3R5bGU9XCJtYXgtd2lkdGg6IDQ1MHB4OyBtYXJnaW46IDNyZW0gYXV0bztcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQgcC00IHNoYWRvdy1zbVwiPlxyXG4gICAgICAgIDxoMyBjbGFzcz1cImNhcmQtdGl0bGUgdGV4dC1jZW50ZXIgbWItNFwiPkxvZ2luIHRvIENvUmVlcjwvaDM+XHJcbiAgICAgICAgPGZvcm0gaWQ9XCJsb2dpbi1mb3JtXCIgbm92YWxpZGF0ZT5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ1c2VybmFtZVwiIGNsYXNzPVwiZm9ybS1sYWJlbFwiPlVzZXJuYW1lIG9yIEVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGlkPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgdXNlcm5hbWUgb3IgZW1haWxcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1sYWJlbFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IHctMTAwXCI+TG9naW48L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWRhbmdlciBtdC0xIHRleHQtY2VudGVyXCI+JHtlcnJvck1lc3NhZ2V9PC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtdC0xIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICBEb24ndCBoYXZlIGFuIGFjY291bnQ/IDxhIGhyZWY9XCIvcmVnaXN0ZXJcIj5SZWdpc3RlciBoZXJlPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIGA7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYmluZExvZ2luRm9ybVN1Ym1pdChjYWxsYmFjaykge1xyXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4tZm9ybScpO1xyXG4gIGlmICghZm9ybSkgcmV0dXJuO1xyXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIHVzZXJuYW1lOiBmb3JtLnVzZXJuYW1lLnZhbHVlLnRyaW0oKSxcclxuICAgICAgcGFzc3dvcmQ6IGZvcm0ucGFzc3dvcmQudmFsdWUsXHJcbiAgICB9O1xyXG4gICAgY2FsbGJhY2soZGF0YSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjY5Yjg4ODIyZTFkMjc1MmJkZDE3XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9