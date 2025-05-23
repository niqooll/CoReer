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
            <small id="email-error" class="text-danger" style="display:none;"></small>
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
            <small id="password-error" class="text-danger" style="display:none;"></small>
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

  const emailInput = form.email;
  const emailError = document.getElementById('email-error');
  const passwordInput = form.password;
  const passwordError = document.getElementById('password-error');

  // Validasi realtime email
  emailInput.addEventListener('input', () => {
    const emailVal = emailInput.value.trim();
    if (!emailVal.includes('@')) {
      emailError.textContent = 'Email harus mengandung karakter "@"';
      emailError.style.display = 'block';
    } else {
      emailError.textContent = '';
      emailError.style.display = 'none';
    }
  });

  // Validasi realtime password
  passwordInput.addEventListener('input', () => {
    const pwdVal = passwordInput.value;

    if (!pwdVal) {
      passwordError.textContent = 'Password tidak boleh kosong.';
      passwordError.style.display = 'block';
    } else if (pwdVal.length < 8) {
      passwordError.textContent = 'Password harus minimal 8 karakter.';
      passwordError.style.display = 'block';
    } else {
      passwordError.textContent = '';
      passwordError.style.display = 'none';
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Reset error
    emailError.style.display = 'none';
    emailError.textContent = '';
    passwordError.style.display = 'none';
    passwordError.textContent = '';

    const username = form.username.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    let valid = true;

    if (!username) {
      alert('Username tidak boleh kosong.');
      valid = false;
    }

    if (!email) {
      emailError.textContent = 'Email tidak boleh kosong.';
      emailError.style.display = 'block';
      valid = false;
    } else if (!email.includes('@')) {
      emailError.textContent = 'Email harus mengandung karakter "@"';
      emailError.style.display = 'block';
      valid = false;
    }

    if (!password) {
      passwordError.textContent = 'Password tidak boleh kosong.';
      passwordError.style.display = 'block';
      valid = false;
    } else if (password.length < 8) {
      passwordError.textContent = 'Password harus minimal 8 karakter.';
      passwordError.style.display = 'block';
      valid = false;
    }

    if (!valid) {
      if (emailError.style.display === 'block') {
        emailInput.focus();
      } else if (passwordError.style.display === 'block') {
        passwordInput.focus();
      }
      return;
    }

    const data = { username, email, password };
    callback(data);
  });
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("210840247fc48ff45d0b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zNzYzMzVhYTU5ODU0OGFjMTBjMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDTztBQUNQO0FBQ0Esb0RBQW9ELGtCQUFrQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RUFBNEU7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRTtBQUMvRTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsYUFBYTtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7OztVQzlJQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3NjcmlwdC92aWV3cy9yZWdpc3Rlci12aWV3LmpzIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvc2NyaXB0L3ZpZXdzL3JlZ2lzdGVyLXZpZXcuanNcclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclJlZ2lzdGVyKGVycm9yTWVzc2FnZSA9ICcnKSB7XHJcbiAgcmV0dXJuIGBcclxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIiBzdHlsZT1cIm1heC13aWR0aDogNDUwcHg7IG1hcmdpbjogM3JlbSBhdXRvO1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBwLTQgc2hhZG93LXNtXCI+XHJcbiAgICAgICAgPGgzIGNsYXNzPVwiY2FyZC10aXRsZSB0ZXh0LWNlbnRlciBtYi00XCI+Q3JlYXRlIGEgQ29SZWVyIEFjY291bnQ8L2gzPlxyXG4gICAgICAgIDxmb3JtIGlkPVwicmVnaXN0ZXItZm9ybVwiIG5vdmFsaWRhdGU+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItM1wiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwidXNlcm5hbWVcIiBjbGFzcz1cImZvcm0tbGFiZWxcIj5Vc2VybmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBpZD1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNob29zZSBhIHVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItM1wiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIiBjbGFzcz1cImZvcm0tbGFiZWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGVtYWlsXCJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8c21hbGwgaWQ9XCJlbWFpbC1lcnJvclwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIiBzdHlsZT1cImRpc3BsYXk6bm9uZTtcIj48L3NtYWxsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItM1wiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIiBjbGFzcz1cImZvcm0tbGFiZWxcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDcmVhdGUgYSBwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHNtYWxsIGlkPVwicGFzc3dvcmQtZXJyb3JcIiBjbGFzcz1cInRleHQtZGFuZ2VyXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmU7XCI+PC9zbWFsbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3Mgdy0xMDBcIj5SZWdpc3RlcjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8cCBjbGFzcz1cInRleHQtZGFuZ2VyIG10LTEgdGV4dC1jZW50ZXJcIj4ke2Vycm9yTWVzc2FnZX08L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm10LTEgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIEFscmVhZHkgaGF2ZSBhbiBhY2NvdW50PyA8YSBocmVmPVwiIy9sb2dpblwiPkxvZ2luIGhlcmU8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgYDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJpbmRSZWdpc3RlckZvcm1TdWJtaXQoY2FsbGJhY2spIHtcclxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZ2lzdGVyLWZvcm0nKTtcclxuICBpZiAoIWZvcm0pIHJldHVybjtcclxuXHJcbiAgY29uc3QgZW1haWxJbnB1dCA9IGZvcm0uZW1haWw7XHJcbiAgY29uc3QgZW1haWxFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbC1lcnJvcicpO1xyXG4gIGNvbnN0IHBhc3N3b3JkSW5wdXQgPSBmb3JtLnBhc3N3b3JkO1xyXG4gIGNvbnN0IHBhc3N3b3JkRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQtZXJyb3InKTtcclxuXHJcbiAgLy8gVmFsaWRhc2kgcmVhbHRpbWUgZW1haWxcclxuICBlbWFpbElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG4gICAgY29uc3QgZW1haWxWYWwgPSBlbWFpbElucHV0LnZhbHVlLnRyaW0oKTtcclxuICAgIGlmICghZW1haWxWYWwuaW5jbHVkZXMoJ0AnKSkge1xyXG4gICAgICBlbWFpbEVycm9yLnRleHRDb250ZW50ID0gJ0VtYWlsIGhhcnVzIG1lbmdhbmR1bmcga2FyYWt0ZXIgXCJAXCInO1xyXG4gICAgICBlbWFpbEVycm9yLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZW1haWxFcnJvci50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICBlbWFpbEVycm9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vIFZhbGlkYXNpIHJlYWx0aW1lIHBhc3N3b3JkXHJcbiAgcGFzc3dvcmRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuICAgIGNvbnN0IHB3ZFZhbCA9IHBhc3N3b3JkSW5wdXQudmFsdWU7XHJcblxyXG4gICAgaWYgKCFwd2RWYWwpIHtcclxuICAgICAgcGFzc3dvcmRFcnJvci50ZXh0Q29udGVudCA9ICdQYXNzd29yZCB0aWRhayBib2xlaCBrb3NvbmcuJztcclxuICAgICAgcGFzc3dvcmRFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIH0gZWxzZSBpZiAocHdkVmFsLmxlbmd0aCA8IDgpIHtcclxuICAgICAgcGFzc3dvcmRFcnJvci50ZXh0Q29udGVudCA9ICdQYXNzd29yZCBoYXJ1cyBtaW5pbWFsIDgga2FyYWt0ZXIuJztcclxuICAgICAgcGFzc3dvcmRFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHBhc3N3b3JkRXJyb3IudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgcGFzc3dvcmRFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgLy8gUmVzZXQgZXJyb3JcclxuICAgIGVtYWlsRXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIGVtYWlsRXJyb3IudGV4dENvbnRlbnQgPSAnJztcclxuICAgIHBhc3N3b3JkRXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIHBhc3N3b3JkRXJyb3IudGV4dENvbnRlbnQgPSAnJztcclxuXHJcbiAgICBjb25zdCB1c2VybmFtZSA9IGZvcm0udXNlcm5hbWUudmFsdWUudHJpbSgpO1xyXG4gICAgY29uc3QgZW1haWwgPSBlbWFpbElucHV0LnZhbHVlLnRyaW0oKTtcclxuICAgIGNvbnN0IHBhc3N3b3JkID0gcGFzc3dvcmRJbnB1dC52YWx1ZTtcclxuXHJcbiAgICBsZXQgdmFsaWQgPSB0cnVlO1xyXG5cclxuICAgIGlmICghdXNlcm5hbWUpIHtcclxuICAgICAgYWxlcnQoJ1VzZXJuYW1lIHRpZGFrIGJvbGVoIGtvc29uZy4nKTtcclxuICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWVtYWlsKSB7XHJcbiAgICAgIGVtYWlsRXJyb3IudGV4dENvbnRlbnQgPSAnRW1haWwgdGlkYWsgYm9sZWgga29zb25nLic7XHJcbiAgICAgIGVtYWlsRXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgIHZhbGlkID0gZmFsc2U7XHJcbiAgICB9IGVsc2UgaWYgKCFlbWFpbC5pbmNsdWRlcygnQCcpKSB7XHJcbiAgICAgIGVtYWlsRXJyb3IudGV4dENvbnRlbnQgPSAnRW1haWwgaGFydXMgbWVuZ2FuZHVuZyBrYXJha3RlciBcIkBcIic7XHJcbiAgICAgIGVtYWlsRXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgIHZhbGlkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFwYXNzd29yZCkge1xyXG4gICAgICBwYXNzd29yZEVycm9yLnRleHRDb250ZW50ID0gJ1Bhc3N3b3JkIHRpZGFrIGJvbGVoIGtvc29uZy4nO1xyXG4gICAgICBwYXNzd29yZEVycm9yLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICB2YWxpZCA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIGlmIChwYXNzd29yZC5sZW5ndGggPCA4KSB7XHJcbiAgICAgIHBhc3N3b3JkRXJyb3IudGV4dENvbnRlbnQgPSAnUGFzc3dvcmQgaGFydXMgbWluaW1hbCA4IGthcmFrdGVyLic7XHJcbiAgICAgIHBhc3N3b3JkRXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgIHZhbGlkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF2YWxpZCkge1xyXG4gICAgICBpZiAoZW1haWxFcnJvci5zdHlsZS5kaXNwbGF5ID09PSAnYmxvY2snKSB7XHJcbiAgICAgICAgZW1haWxJbnB1dC5mb2N1cygpO1xyXG4gICAgICB9IGVsc2UgaWYgKHBhc3N3b3JkRXJyb3Iuc3R5bGUuZGlzcGxheSA9PT0gJ2Jsb2NrJykge1xyXG4gICAgICAgIHBhc3N3b3JkSW5wdXQuZm9jdXMoKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IHsgdXNlcm5hbWUsIGVtYWlsLCBwYXNzd29yZCB9O1xyXG4gICAgY2FsbGJhY2soZGF0YSk7XHJcbiAgfSk7XHJcbn1cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMjEwODQwMjQ3ZmM0OGZmNDVkMGJcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=