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
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              class="form-control"
              placeholder="Enter your email"
              required
            />
            <small id="email-error" class="text-danger" style="display:none;"></small>
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
  const emailInput = form.email;
  const emailError = container.querySelector('#email-error');

  form?.addEventListener('submit', (e) => {
    e.preventDefault();

    // reset pesan error dulu
    emailError.style.display = 'none';
    emailError.textContent = '';

    const email = emailInput.value.trim();
    const password = form.password.value;

    if (!email || !password) {
      alert('Email dan Password tidak boleh kosong.');
      return;
    }

    if (!email.includes('@')) {
      emailError.textContent = 'Email harus mengandung karakter "@"';
      emailError.style.display = 'block';
      emailInput.focus();
      return;
    }

    const data = { email, password };
    onSubmit(data);
  });
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a3a17cf8eda6960c6b6a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iODU5ZmNkYTViZTFmODFiMTZlOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNPO0FBQ1A7QUFDQSxvREFBb0Qsa0JBQWtCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsYUFBYTtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7OztVQ3JFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3NjcmlwdC92aWV3cy9sb2dpbi12aWV3LmpzIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvc2NyaXB0L3ZpZXdzL2xvZ2luLXZpZXcuanNcclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dMb2dpbihjb250YWluZXIsIGVycm9yTWVzc2FnZSA9ICcnLCBvblN1Ym1pdCkge1xyXG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgc3R5bGU9XCJtYXgtd2lkdGg6IDQ1MHB4OyBtYXJnaW46IDNyZW0gYXV0bztcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQgcC00IHNoYWRvdy1zbVwiPlxyXG4gICAgICAgIDxoMyBjbGFzcz1cImNhcmQtdGl0bGUgdGV4dC1jZW50ZXIgbWItNFwiPkxvZ2luIHRvIENvUmVlcjwvaDM+XHJcbiAgICAgICAgPGZvcm0gaWQ9XCJsb2dpbi1mb3JtXCIgbm92YWxpZGF0ZT5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiIGNsYXNzPVwiZm9ybS1sYWJlbFwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZW1haWxcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxzbWFsbCBpZD1cImVtYWlsLWVycm9yXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiIHN0eWxlPVwiZGlzcGxheTpub25lO1wiPjwvc21hbGw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1sYWJlbFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IHctMTAwXCI+TG9naW48L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWRhbmdlciBtdC0xIHRleHQtY2VudGVyXCI+JHtlcnJvck1lc3NhZ2V9PC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtdC0xIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICBEb24ndCBoYXZlIGFuIGFjY291bnQ/IDxhIGhyZWY9XCIjL3JlZ2lzdGVyXCI+UmVnaXN0ZXIgaGVyZTwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICBgO1xyXG5cclxuICBjb25zdCBmb3JtID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJyNsb2dpbi1mb3JtJyk7XHJcbiAgY29uc3QgZW1haWxJbnB1dCA9IGZvcm0uZW1haWw7XHJcbiAgY29uc3QgZW1haWxFcnJvciA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcjZW1haWwtZXJyb3InKTtcclxuXHJcbiAgZm9ybT8uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAvLyByZXNldCBwZXNhbiBlcnJvciBkdWx1XHJcbiAgICBlbWFpbEVycm9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBlbWFpbEVycm9yLnRleHRDb250ZW50ID0gJyc7XHJcblxyXG4gICAgY29uc3QgZW1haWwgPSBlbWFpbElucHV0LnZhbHVlLnRyaW0oKTtcclxuICAgIGNvbnN0IHBhc3N3b3JkID0gZm9ybS5wYXNzd29yZC52YWx1ZTtcclxuXHJcbiAgICBpZiAoIWVtYWlsIHx8ICFwYXNzd29yZCkge1xyXG4gICAgICBhbGVydCgnRW1haWwgZGFuIFBhc3N3b3JkIHRpZGFrIGJvbGVoIGtvc29uZy4nKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghZW1haWwuaW5jbHVkZXMoJ0AnKSkge1xyXG4gICAgICBlbWFpbEVycm9yLnRleHRDb250ZW50ID0gJ0VtYWlsIGhhcnVzIG1lbmdhbmR1bmcga2FyYWt0ZXIgXCJAXCInO1xyXG4gICAgICBlbWFpbEVycm9yLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICBlbWFpbElucHV0LmZvY3VzKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkYXRhID0geyBlbWFpbCwgcGFzc3dvcmQgfTtcclxuICAgIG9uU3VibWl0KGRhdGEpO1xyXG4gIH0pO1xyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImEzYTE3Y2Y4ZWRhNjk2MGM2YjZhXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9