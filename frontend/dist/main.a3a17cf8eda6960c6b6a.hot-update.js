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
            <small id="password-error" class="text-danger" style="display:none;"></small>
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
  const passwordInput = form.password;
  const passwordError = container.querySelector('#password-error');

  // Validasi realtime untuk email
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

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Reset semua pesan error
    emailError.style.display = 'none';
    emailError.textContent = '';
    passwordError.style.display = 'none';
    passwordError.textContent = '';

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    let valid = true;

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
      // Fokus ke field yang error pertama kali
      if (emailError.style.display === 'block') {
        emailInput.focus();
      } else if (passwordError.style.display === 'block') {
        passwordInput.focus();
      }
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
/******/ 	__webpack_require__.h = () => ("52835d0d631532a6aa0c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hM2ExN2NmOGVkYTY5NjBjNmI2YS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNPO0FBQ1A7QUFDQSxvREFBb0Qsa0JBQWtCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0U7QUFDL0U7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGFBQWE7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7O1VDMUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvc2NyaXB0L3ZpZXdzL2xvZ2luLXZpZXcuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9zY3JpcHQvdmlld3MvbG9naW4tdmlldy5qc1xyXG5leHBvcnQgZnVuY3Rpb24gc2hvd0xvZ2luKGNvbnRhaW5lciwgZXJyb3JNZXNzYWdlID0gJycsIG9uU3VibWl0KSB7XHJcbiAgY29udGFpbmVyLmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIiBzdHlsZT1cIm1heC13aWR0aDogNDUwcHg7IG1hcmdpbjogM3JlbSBhdXRvO1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBwLTQgc2hhZG93LXNtXCI+XHJcbiAgICAgICAgPGgzIGNsYXNzPVwiY2FyZC10aXRsZSB0ZXh0LWNlbnRlciBtYi00XCI+TG9naW4gdG8gQ29SZWVyPC9oMz5cclxuICAgICAgICA8Zm9ybSBpZD1cImxvZ2luLWZvcm1cIiBub3ZhbGlkYXRlPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTNcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCIgY2xhc3M9XCJmb3JtLWxhYmVsXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlbWFpbFwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHNtYWxsIGlkPVwiZW1haWwtZXJyb3JcIiBjbGFzcz1cInRleHQtZGFuZ2VyXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmU7XCI+PC9zbWFsbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTNcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWxhYmVsXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHNtYWxsIGlkPVwicGFzc3dvcmQtZXJyb3JcIiBjbGFzcz1cInRleHQtZGFuZ2VyXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmU7XCI+PC9zbWFsbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgdy0xMDBcIj5Mb2dpbjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8cCBjbGFzcz1cInRleHQtZGFuZ2VyIG10LTEgdGV4dC1jZW50ZXJcIj4ke2Vycm9yTWVzc2FnZX08L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm10LTEgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIERvbid0IGhhdmUgYW4gYWNjb3VudD8gPGEgaHJlZj1cIiMvcmVnaXN0ZXJcIj5SZWdpc3RlciBoZXJlPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIGA7XHJcblxyXG4gIGNvbnN0IGZvcm0gPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignI2xvZ2luLWZvcm0nKTtcclxuICBjb25zdCBlbWFpbElucHV0ID0gZm9ybS5lbWFpbDtcclxuICBjb25zdCBlbWFpbEVycm9yID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJyNlbWFpbC1lcnJvcicpO1xyXG4gIGNvbnN0IHBhc3N3b3JkSW5wdXQgPSBmb3JtLnBhc3N3b3JkO1xyXG4gIGNvbnN0IHBhc3N3b3JkRXJyb3IgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignI3Bhc3N3b3JkLWVycm9yJyk7XHJcblxyXG4gIC8vIFZhbGlkYXNpIHJlYWx0aW1lIHVudHVrIGVtYWlsXHJcbiAgZW1haWxJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuICAgIGNvbnN0IGVtYWlsVmFsID0gZW1haWxJbnB1dC52YWx1ZS50cmltKCk7XHJcbiAgICBpZiAoIWVtYWlsVmFsLmluY2x1ZGVzKCdAJykpIHtcclxuICAgICAgZW1haWxFcnJvci50ZXh0Q29udGVudCA9ICdFbWFpbCBoYXJ1cyBtZW5nYW5kdW5nIGthcmFrdGVyIFwiQFwiJztcclxuICAgICAgZW1haWxFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGVtYWlsRXJyb3IudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgZW1haWxFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgLy8gUmVzZXQgc2VtdWEgcGVzYW4gZXJyb3JcclxuICAgIGVtYWlsRXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIGVtYWlsRXJyb3IudGV4dENvbnRlbnQgPSAnJztcclxuICAgIHBhc3N3b3JkRXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIHBhc3N3b3JkRXJyb3IudGV4dENvbnRlbnQgPSAnJztcclxuXHJcbiAgICBjb25zdCBlbWFpbCA9IGVtYWlsSW5wdXQudmFsdWUudHJpbSgpO1xyXG4gICAgY29uc3QgcGFzc3dvcmQgPSBwYXNzd29yZElucHV0LnZhbHVlO1xyXG5cclxuICAgIGxldCB2YWxpZCA9IHRydWU7XHJcblxyXG4gICAgaWYgKCFlbWFpbCkge1xyXG4gICAgICBlbWFpbEVycm9yLnRleHRDb250ZW50ID0gJ0VtYWlsIHRpZGFrIGJvbGVoIGtvc29uZy4nO1xyXG4gICAgICBlbWFpbEVycm9yLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICB2YWxpZCA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIGlmICghZW1haWwuaW5jbHVkZXMoJ0AnKSkge1xyXG4gICAgICBlbWFpbEVycm9yLnRleHRDb250ZW50ID0gJ0VtYWlsIGhhcnVzIG1lbmdhbmR1bmcga2FyYWt0ZXIgXCJAXCInO1xyXG4gICAgICBlbWFpbEVycm9yLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICB2YWxpZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghcGFzc3dvcmQpIHtcclxuICAgICAgcGFzc3dvcmRFcnJvci50ZXh0Q29udGVudCA9ICdQYXNzd29yZCB0aWRhayBib2xlaCBrb3NvbmcuJztcclxuICAgICAgcGFzc3dvcmRFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAocGFzc3dvcmQubGVuZ3RoIDwgOCkge1xyXG4gICAgICBwYXNzd29yZEVycm9yLnRleHRDb250ZW50ID0gJ1Bhc3N3b3JkIGhhcnVzIG1pbmltYWwgOCBrYXJha3Rlci4nO1xyXG4gICAgICBwYXNzd29yZEVycm9yLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICB2YWxpZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdmFsaWQpIHtcclxuICAgICAgLy8gRm9rdXMga2UgZmllbGQgeWFuZyBlcnJvciBwZXJ0YW1hIGthbGlcclxuICAgICAgaWYgKGVtYWlsRXJyb3Iuc3R5bGUuZGlzcGxheSA9PT0gJ2Jsb2NrJykge1xyXG4gICAgICAgIGVtYWlsSW5wdXQuZm9jdXMoKTtcclxuICAgICAgfSBlbHNlIGlmIChwYXNzd29yZEVycm9yLnN0eWxlLmRpc3BsYXkgPT09ICdibG9jaycpIHtcclxuICAgICAgICBwYXNzd29yZElucHV0LmZvY3VzKCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRhdGEgPSB7IGVtYWlsLCBwYXNzd29yZCB9O1xyXG4gICAgb25TdWJtaXQoZGF0YSk7XHJcbiAgfSk7XHJcbn1cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNTI4MzVkMGQ2MzE1MzJhNmFhMGNcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=