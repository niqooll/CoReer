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

function showSuccessMessage(message) {
  alert(message);
}

function redirectToLogin() {
  window.location.hash = '#/login';
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7286ace7de7974dcac98")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yMTA4NDAyNDdmYzQ4ZmY0NWQwYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNPO0FBQ1A7QUFDQSxvREFBb0Qsa0JBQWtCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRFQUE0RTtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFO0FBQy9FO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxhQUFhO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7Ozs7Ozs7O1VDdEpBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvc2NyaXB0L3ZpZXdzL3JlZ2lzdGVyLXZpZXcuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9zY3JpcHQvdmlld3MvcmVnaXN0ZXItdmlldy5qc1xyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyUmVnaXN0ZXIoZXJyb3JNZXNzYWdlID0gJycpIHtcclxuICByZXR1cm4gYFxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiIHN0eWxlPVwibWF4LXdpZHRoOiA0NTBweDsgbWFyZ2luOiAzcmVtIGF1dG87XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIHAtNCBzaGFkb3ctc21cIj5cclxuICAgICAgICA8aDMgY2xhc3M9XCJjYXJkLXRpdGxlIHRleHQtY2VudGVyIG1iLTRcIj5DcmVhdGUgYSBDb1JlZXIgQWNjb3VudDwvaDM+XHJcbiAgICAgICAgPGZvcm0gaWQ9XCJyZWdpc3Rlci1mb3JtXCIgbm92YWxpZGF0ZT5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ1c2VybmFtZVwiIGNsYXNzPVwiZm9ybS1sYWJlbFwiPlVzZXJuYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGlkPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2hvb3NlIGEgdXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiIGNsYXNzPVwiZm9ybS1sYWJlbFwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZW1haWxcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxzbWFsbCBpZD1cImVtYWlsLWVycm9yXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiIHN0eWxlPVwiZGlzcGxheTpub25lO1wiPjwvc21hbGw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1sYWJlbFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNyZWF0ZSBhIHBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8c21hbGwgaWQ9XCJwYXNzd29yZC1lcnJvclwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIiBzdHlsZT1cImRpc3BsYXk6bm9uZTtcIj48L3NtYWxsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyB3LTEwMFwiPlJlZ2lzdGVyPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxwIGNsYXNzPVwidGV4dC1kYW5nZXIgbXQtMSB0ZXh0LWNlbnRlclwiPiR7ZXJyb3JNZXNzYWdlfTwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibXQtMSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgQWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/IDxhIGhyZWY9XCIjL2xvZ2luXCI+TG9naW4gaGVyZTwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICBgO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYmluZFJlZ2lzdGVyRm9ybVN1Ym1pdChjYWxsYmFjaykge1xyXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaXN0ZXItZm9ybScpO1xyXG4gIGlmICghZm9ybSkgcmV0dXJuO1xyXG5cclxuICBjb25zdCBlbWFpbElucHV0ID0gZm9ybS5lbWFpbDtcclxuICBjb25zdCBlbWFpbEVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsLWVycm9yJyk7XHJcbiAgY29uc3QgcGFzc3dvcmRJbnB1dCA9IGZvcm0ucGFzc3dvcmQ7XHJcbiAgY29uc3QgcGFzc3dvcmRFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZC1lcnJvcicpO1xyXG5cclxuICAvLyBWYWxpZGFzaSByZWFsdGltZSBlbWFpbFxyXG4gIGVtYWlsSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICBjb25zdCBlbWFpbFZhbCA9IGVtYWlsSW5wdXQudmFsdWUudHJpbSgpO1xyXG4gICAgaWYgKCFlbWFpbFZhbC5pbmNsdWRlcygnQCcpKSB7XHJcbiAgICAgIGVtYWlsRXJyb3IudGV4dENvbnRlbnQgPSAnRW1haWwgaGFydXMgbWVuZ2FuZHVuZyBrYXJha3RlciBcIkBcIic7XHJcbiAgICAgIGVtYWlsRXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlbWFpbEVycm9yLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgIGVtYWlsRXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gVmFsaWRhc2kgcmVhbHRpbWUgcGFzc3dvcmRcclxuICBwYXNzd29yZElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG4gICAgY29uc3QgcHdkVmFsID0gcGFzc3dvcmRJbnB1dC52YWx1ZTtcclxuXHJcbiAgICBpZiAoIXB3ZFZhbCkge1xyXG4gICAgICBwYXNzd29yZEVycm9yLnRleHRDb250ZW50ID0gJ1Bhc3N3b3JkIHRpZGFrIGJvbGVoIGtvc29uZy4nO1xyXG4gICAgICBwYXNzd29yZEVycm9yLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgfSBlbHNlIGlmIChwd2RWYWwubGVuZ3RoIDwgOCkge1xyXG4gICAgICBwYXNzd29yZEVycm9yLnRleHRDb250ZW50ID0gJ1Bhc3N3b3JkIGhhcnVzIG1pbmltYWwgOCBrYXJha3Rlci4nO1xyXG4gICAgICBwYXNzd29yZEVycm9yLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcGFzc3dvcmRFcnJvci50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICBwYXNzd29yZEVycm9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAvLyBSZXNldCBlcnJvclxyXG4gICAgZW1haWxFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgZW1haWxFcnJvci50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgcGFzc3dvcmRFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgcGFzc3dvcmRFcnJvci50ZXh0Q29udGVudCA9ICcnO1xyXG5cclxuICAgIGNvbnN0IHVzZXJuYW1lID0gZm9ybS51c2VybmFtZS52YWx1ZS50cmltKCk7XHJcbiAgICBjb25zdCBlbWFpbCA9IGVtYWlsSW5wdXQudmFsdWUudHJpbSgpO1xyXG4gICAgY29uc3QgcGFzc3dvcmQgPSBwYXNzd29yZElucHV0LnZhbHVlO1xyXG5cclxuICAgIGxldCB2YWxpZCA9IHRydWU7XHJcblxyXG4gICAgaWYgKCF1c2VybmFtZSkge1xyXG4gICAgICBhbGVydCgnVXNlcm5hbWUgdGlkYWsgYm9sZWgga29zb25nLicpO1xyXG4gICAgICB2YWxpZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghZW1haWwpIHtcclxuICAgICAgZW1haWxFcnJvci50ZXh0Q29udGVudCA9ICdFbWFpbCB0aWRhayBib2xlaCBrb3NvbmcuJztcclxuICAgICAgZW1haWxFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAoIWVtYWlsLmluY2x1ZGVzKCdAJykpIHtcclxuICAgICAgZW1haWxFcnJvci50ZXh0Q29udGVudCA9ICdFbWFpbCBoYXJ1cyBtZW5nYW5kdW5nIGthcmFrdGVyIFwiQFwiJztcclxuICAgICAgZW1haWxFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXBhc3N3b3JkKSB7XHJcbiAgICAgIHBhc3N3b3JkRXJyb3IudGV4dENvbnRlbnQgPSAnUGFzc3dvcmQgdGlkYWsgYm9sZWgga29zb25nLic7XHJcbiAgICAgIHBhc3N3b3JkRXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgIHZhbGlkID0gZmFsc2U7XHJcbiAgICB9IGVsc2UgaWYgKHBhc3N3b3JkLmxlbmd0aCA8IDgpIHtcclxuICAgICAgcGFzc3dvcmRFcnJvci50ZXh0Q29udGVudCA9ICdQYXNzd29yZCBoYXJ1cyBtaW5pbWFsIDgga2FyYWt0ZXIuJztcclxuICAgICAgcGFzc3dvcmRFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXZhbGlkKSB7XHJcbiAgICAgIGlmIChlbWFpbEVycm9yLnN0eWxlLmRpc3BsYXkgPT09ICdibG9jaycpIHtcclxuICAgICAgICBlbWFpbElucHV0LmZvY3VzKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAocGFzc3dvcmRFcnJvci5zdHlsZS5kaXNwbGF5ID09PSAnYmxvY2snKSB7XHJcbiAgICAgICAgcGFzc3dvcmRJbnB1dC5mb2N1cygpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkYXRhID0geyB1c2VybmFtZSwgZW1haWwsIHBhc3N3b3JkIH07XHJcbiAgICBjYWxsYmFjayhkYXRhKTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dTdWNjZXNzTWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgYWxlcnQobWVzc2FnZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWRpcmVjdFRvTG9naW4oKSB7XHJcbiAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnIy9sb2dpbic7XHJcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI3Mjg2YWNlN2RlNzk3NGRjYWM5OFwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==