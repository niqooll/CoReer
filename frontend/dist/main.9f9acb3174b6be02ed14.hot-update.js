"use strict";
self["webpackHotUpdatefrontend"]("main",{

/***/ "./src/script/views/register-view.js":
/*!*******************************************!*\
  !*** ./src/script/views/register-view.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bindRegisterFormSubmit: () => (/* binding */ bindRegisterFormSubmit),
/* harmony export */   renderRegister: () => (/* binding */ renderRegister)
/* harmony export */ });
// src/script/views/register-view.js
function renderRegister(container, errorMessage = '') {
  container.innerHTML = `
    <div class="container" style="max-width: 450px; margin: 3rem auto;">
      <div class="card p-4 shadow-sm">
        <h3 class="card-title text-center mb-4">Create a CoReer Account</h3>
        <form id="register-form" novalidate>
          <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              class="form-control"
              placeholder="Choose a username"
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
              placeholder="Create a password"
              required
            />
          </div>
          <div class="mb-3">
            <label for="passwordConfirm" class="form-label">Confirm Password</label>
            <input
              type="password"
              id="passwordConfirm"
              name="passwordConfirm"
              class="form-control"
              placeholder="Repeat your password"
              required
            />
          </div>
          <button type="submit" class="btn btn-success w-100">Register</button>
        </form>
        <p class="text-danger mt-1 text-center">${errorMessage}</p>
        <div class="mt-1 text-center">
          Already have an account? <a href="#/login">Login here</a>
        </div>
      </div>
    </div>
  `;

  bindRegisterFormSubmit(callback); // bind form setelah elemen dirender
}

function bindRegisterFormSubmit(callback) {
  const form = document.getElementById('register-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = form.username.value.trim();
    const password = form.password.value;
    const passwordConfirm = form.passwordConfirm.value;

    if (!username || !password || !passwordConfirm) {
      alert('Semua kolom harus diisi!');
      return;
    }

    const data = { username, password, passwordConfirm };
    callback(data);
  });
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("68a7508fb7100698f537")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi45ZjlhY2IzMTc0YjZiZTAyZWQxNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDTztBQUNQO0FBQ0Esb0RBQW9ELGtCQUFrQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGFBQWE7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7VUN4RUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9zY3JpcHQvdmlld3MvcmVnaXN0ZXItdmlldy5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL3NjcmlwdC92aWV3cy9yZWdpc3Rlci12aWV3LmpzXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJSZWdpc3Rlcihjb250YWluZXIsIGVycm9yTWVzc2FnZSA9ICcnKSB7XHJcbiAgY29udGFpbmVyLmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIiBzdHlsZT1cIm1heC13aWR0aDogNDUwcHg7IG1hcmdpbjogM3JlbSBhdXRvO1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBwLTQgc2hhZG93LXNtXCI+XHJcbiAgICAgICAgPGgzIGNsYXNzPVwiY2FyZC10aXRsZSB0ZXh0LWNlbnRlciBtYi00XCI+Q3JlYXRlIGEgQ29SZWVyIEFjY291bnQ8L2gzPlxyXG4gICAgICAgIDxmb3JtIGlkPVwicmVnaXN0ZXItZm9ybVwiIG5vdmFsaWRhdGU+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItM1wiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwidXNlcm5hbWVcIiBjbGFzcz1cImZvcm0tbGFiZWxcIj5Vc2VybmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBpZD1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNob29zZSBhIHVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItM1wiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIiBjbGFzcz1cImZvcm0tbGFiZWxcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDcmVhdGUgYSBwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTNcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBhc3N3b3JkQ29uZmlybVwiIGNsYXNzPVwiZm9ybS1sYWJlbFwiPkNvbmZpcm0gUGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRDb25maXJtXCJcclxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRDb25maXJtXCJcclxuICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJSZXBlYXQgeW91ciBwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3Mgdy0xMDBcIj5SZWdpc3RlcjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8cCBjbGFzcz1cInRleHQtZGFuZ2VyIG10LTEgdGV4dC1jZW50ZXJcIj4ke2Vycm9yTWVzc2FnZX08L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm10LTEgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIEFscmVhZHkgaGF2ZSBhbiBhY2NvdW50PyA8YSBocmVmPVwiIy9sb2dpblwiPkxvZ2luIGhlcmU8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgYDtcclxuXHJcbiAgYmluZFJlZ2lzdGVyRm9ybVN1Ym1pdChjYWxsYmFjayk7IC8vIGJpbmQgZm9ybSBzZXRlbGFoIGVsZW1lbiBkaXJlbmRlclxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYmluZFJlZ2lzdGVyRm9ybVN1Ym1pdChjYWxsYmFjaykge1xyXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaXN0ZXItZm9ybScpO1xyXG4gIGlmICghZm9ybSkgcmV0dXJuO1xyXG5cclxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgdXNlcm5hbWUgPSBmb3JtLnVzZXJuYW1lLnZhbHVlLnRyaW0oKTtcclxuICAgIGNvbnN0IHBhc3N3b3JkID0gZm9ybS5wYXNzd29yZC52YWx1ZTtcclxuICAgIGNvbnN0IHBhc3N3b3JkQ29uZmlybSA9IGZvcm0ucGFzc3dvcmRDb25maXJtLnZhbHVlO1xyXG5cclxuICAgIGlmICghdXNlcm5hbWUgfHwgIXBhc3N3b3JkIHx8ICFwYXNzd29yZENvbmZpcm0pIHtcclxuICAgICAgYWxlcnQoJ1NlbXVhIGtvbG9tIGhhcnVzIGRpaXNpIScpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IHsgdXNlcm5hbWUsIHBhc3N3b3JkLCBwYXNzd29yZENvbmZpcm0gfTtcclxuICAgIGNhbGxiYWNrKGRhdGEpO1xyXG4gIH0pO1xyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjY4YTc1MDhmYjcxMDA2OThmNTM3XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9