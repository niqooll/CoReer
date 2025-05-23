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
    const password = form.password.value;
    const passwordConfirm = form.passwordConfirm.value;

    // ✅ Validasi input kosong
    if (!username || !password || !passwordConfirm) {
      alert('Semua kolom harus diisi!');
      return;
    }

    const data = { username, password, passwordConfirm };
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
/******/ 	__webpack_require__.h = () => ("999ac1fe59a2235d8006")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hYTljZDhmYTAyNmQxYjNhZDA0OC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNPO0FBQ1A7QUFDQSxvREFBb0Qsa0JBQWtCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsYUFBYTtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTs7Ozs7Ozs7O1VDaEZBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvc2NyaXB0L3ZpZXdzL3JlZ2lzdGVyLXZpZXcuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9zY3JpcHQvdmlld3MvcmVnaXN0ZXItdmlldy5qc1xyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyUmVnaXN0ZXIoZXJyb3JNZXNzYWdlID0gJycpIHtcclxuICByZXR1cm4gYFxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiIHN0eWxlPVwibWF4LXdpZHRoOiA0NTBweDsgbWFyZ2luOiAzcmVtIGF1dG87XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIHAtNCBzaGFkb3ctc21cIj5cclxuICAgICAgICA8aDMgY2xhc3M9XCJjYXJkLXRpdGxlIHRleHQtY2VudGVyIG1iLTRcIj5DcmVhdGUgYSBDb1JlZXIgQWNjb3VudDwvaDM+XHJcbiAgICAgICAgPGZvcm0gaWQ9XCJyZWdpc3Rlci1mb3JtXCIgbm92YWxpZGF0ZT5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ1c2VybmFtZVwiIGNsYXNzPVwiZm9ybS1sYWJlbFwiPlVzZXJuYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGlkPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2hvb3NlIGEgdXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1sYWJlbFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNyZWF0ZSBhIHBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItM1wiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRDb25maXJtXCIgY2xhc3M9XCJmb3JtLWxhYmVsXCI+Q29uZmlybSBQYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZENvbmZpcm1cIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZENvbmZpcm1cIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlJlcGVhdCB5b3VyIHBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyB3LTEwMFwiPlJlZ2lzdGVyPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxwIGNsYXNzPVwidGV4dC1kYW5nZXIgbXQtMSB0ZXh0LWNlbnRlclwiPiR7ZXJyb3JNZXNzYWdlfTwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibXQtMSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgQWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/IDxhIGhyZWY9XCIjL2xvZ2luXCI+TG9naW4gaGVyZTwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICBgO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYmluZFJlZ2lzdGVyRm9ybVN1Ym1pdChjYWxsYmFjaykge1xyXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaXN0ZXItZm9ybScpO1xyXG4gIGlmICghZm9ybSkgcmV0dXJuO1xyXG5cclxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgdXNlcm5hbWUgPSBmb3JtLnVzZXJuYW1lLnZhbHVlLnRyaW0oKTtcclxuICAgIGNvbnN0IHBhc3N3b3JkID0gZm9ybS5wYXNzd29yZC52YWx1ZTtcclxuICAgIGNvbnN0IHBhc3N3b3JkQ29uZmlybSA9IGZvcm0ucGFzc3dvcmRDb25maXJtLnZhbHVlO1xyXG5cclxuICAgIC8vIOKchSBWYWxpZGFzaSBpbnB1dCBrb3NvbmdcclxuICAgIGlmICghdXNlcm5hbWUgfHwgIXBhc3N3b3JkIHx8ICFwYXNzd29yZENvbmZpcm0pIHtcclxuICAgICAgYWxlcnQoJ1NlbXVhIGtvbG9tIGhhcnVzIGRpaXNpIScpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IHsgdXNlcm5hbWUsIHBhc3N3b3JkLCBwYXNzd29yZENvbmZpcm0gfTtcclxuICAgIGNhbGxiYWNrKGRhdGEpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd1N1Y2Nlc3NNZXNzYWdlKG1lc3NhZ2UpIHtcclxuICBhbGVydChtZXNzYWdlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZGlyZWN0VG9Mb2dpbigpIHtcclxuICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcjL2xvZ2luJztcclxuICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgUG9wU3RhdGVFdmVudCgncG9wc3RhdGUnKSk7XHJcbn1cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOTk5YWMxZmU1OWEyMjM1ZDgwMDZcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=