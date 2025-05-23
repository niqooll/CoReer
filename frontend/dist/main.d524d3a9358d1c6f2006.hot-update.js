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
/* harmony export */   redirectToLogin: () => (/* binding */ redirectToLogin),
/* harmony export */   renderRegister: () => (/* binding */ renderRegister),
/* harmony export */   showSuccessMessage: () => (/* binding */ showSuccessMessage)
/* harmony export */ });
// src/script/views/register-view.js
function renderRegister(errorMessage = '') {
  return `
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
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              class="form-control"
              placeholder="Enter your email"
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
}

function bindRegisterFormSubmit(callback) {
  const form = document.getElementById('register-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = form.username.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;
    const passwordConfirm = form.passwordConfirm.value;

    if (!username || !email || !password || !passwordConfirm) {
      alert('Semua kolom harus diisi!');
      return;
    }

    const data = { username, email, password, passwordConfirm };
    callback(data);
  });
}

function showSuccessMessage(message) {
  alert(message);
}

function redirectToLogin() {
  window.location.hash = '#/login';
  window.dispatchEvent(new PopStateEvent('popstate'));
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0e39e0e5b4a78fec11be")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kNTI0ZDNhOTM1OGQxYzZmMjAwNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNPO0FBQ1A7QUFDQSxvREFBb0Qsa0JBQWtCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGFBQWE7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBOzs7Ozs7Ozs7VUMxRkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9zY3JpcHQvdmlld3MvcmVnaXN0ZXItdmlldy5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL3NjcmlwdC92aWV3cy9yZWdpc3Rlci12aWV3LmpzXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJSZWdpc3RlcihlcnJvck1lc3NhZ2UgPSAnJykge1xyXG4gIHJldHVybiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgc3R5bGU9XCJtYXgtd2lkdGg6IDQ1MHB4OyBtYXJnaW46IDNyZW0gYXV0bztcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQgcC00IHNoYWRvdy1zbVwiPlxyXG4gICAgICAgIDxoMyBjbGFzcz1cImNhcmQtdGl0bGUgdGV4dC1jZW50ZXIgbWItNFwiPkNyZWF0ZSBhIENvUmVlciBBY2NvdW50PC9oMz5cclxuICAgICAgICA8Zm9ybSBpZD1cInJlZ2lzdGVyLWZvcm1cIiBub3ZhbGlkYXRlPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTNcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInVzZXJuYW1lXCIgY2xhc3M9XCJmb3JtLWxhYmVsXCI+VXNlcm5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDaG9vc2UgYSB1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTNcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCIgY2xhc3M9XCJmb3JtLWxhYmVsXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlbWFpbFwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTNcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWxhYmVsXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ3JlYXRlIGEgcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZENvbmZpcm1cIiBjbGFzcz1cImZvcm0tbGFiZWxcIj5Db25maXJtIFBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkQ29uZmlybVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkQ29uZmlybVwiXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUmVwZWF0IHlvdXIgcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIHctMTAwXCI+UmVnaXN0ZXI8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWRhbmdlciBtdC0xIHRleHQtY2VudGVyXCI+JHtlcnJvck1lc3NhZ2V9PC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtdC0xIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICBBbHJlYWR5IGhhdmUgYW4gYWNjb3VudD8gPGEgaHJlZj1cIiMvbG9naW5cIj5Mb2dpbiBoZXJlPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIGA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBiaW5kUmVnaXN0ZXJGb3JtU3VibWl0KGNhbGxiYWNrKSB7XHJcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWdpc3Rlci1mb3JtJyk7XHJcbiAgaWYgKCFmb3JtKSByZXR1cm47XHJcblxyXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHVzZXJuYW1lID0gZm9ybS51c2VybmFtZS52YWx1ZS50cmltKCk7XHJcbiAgICBjb25zdCBlbWFpbCA9IGZvcm0uZW1haWwudmFsdWUudHJpbSgpO1xyXG4gICAgY29uc3QgcGFzc3dvcmQgPSBmb3JtLnBhc3N3b3JkLnZhbHVlO1xyXG4gICAgY29uc3QgcGFzc3dvcmRDb25maXJtID0gZm9ybS5wYXNzd29yZENvbmZpcm0udmFsdWU7XHJcblxyXG4gICAgaWYgKCF1c2VybmFtZSB8fCAhZW1haWwgfHwgIXBhc3N3b3JkIHx8ICFwYXNzd29yZENvbmZpcm0pIHtcclxuICAgICAgYWxlcnQoJ1NlbXVhIGtvbG9tIGhhcnVzIGRpaXNpIScpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IHsgdXNlcm5hbWUsIGVtYWlsLCBwYXNzd29yZCwgcGFzc3dvcmRDb25maXJtIH07XHJcbiAgICBjYWxsYmFjayhkYXRhKTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dTdWNjZXNzTWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgYWxlcnQobWVzc2FnZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWRpcmVjdFRvTG9naW4oKSB7XHJcbiAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnIy9sb2dpbic7XHJcbiAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IFBvcFN0YXRlRXZlbnQoJ3BvcHN0YXRlJykpO1xyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjBlMzllMGU1YjRhNzhmZWMxMWJlXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9