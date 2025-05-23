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

    // ✅ Validasi input kosong
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
/******/ 	__webpack_require__.h = () => ("9f9acb3174b6be02ed14")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lMjMxNDE5YmY1YWVmNDE5YTlhZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDTztBQUNQO0FBQ0Esb0RBQW9ELGtCQUFrQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGFBQWE7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7OztVQ3pFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3NjcmlwdC92aWV3cy9yZWdpc3Rlci12aWV3LmpzIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvc2NyaXB0L3ZpZXdzL3JlZ2lzdGVyLXZpZXcuanNcclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclJlZ2lzdGVyKGNvbnRhaW5lciwgZXJyb3JNZXNzYWdlID0gJycpIHtcclxuICBjb250YWluZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiIHN0eWxlPVwibWF4LXdpZHRoOiA0NTBweDsgbWFyZ2luOiAzcmVtIGF1dG87XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIHAtNCBzaGFkb3ctc21cIj5cclxuICAgICAgICA8aDMgY2xhc3M9XCJjYXJkLXRpdGxlIHRleHQtY2VudGVyIG1iLTRcIj5DcmVhdGUgYSBDb1JlZXIgQWNjb3VudDwvaDM+XHJcbiAgICAgICAgPGZvcm0gaWQ9XCJyZWdpc3Rlci1mb3JtXCIgbm92YWxpZGF0ZT5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ1c2VybmFtZVwiIGNsYXNzPVwiZm9ybS1sYWJlbFwiPlVzZXJuYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGlkPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2hvb3NlIGEgdXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1sYWJlbFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNyZWF0ZSBhIHBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItM1wiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRDb25maXJtXCIgY2xhc3M9XCJmb3JtLWxhYmVsXCI+Q29uZmlybSBQYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZENvbmZpcm1cIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZENvbmZpcm1cIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlJlcGVhdCB5b3VyIHBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyB3LTEwMFwiPlJlZ2lzdGVyPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxwIGNsYXNzPVwidGV4dC1kYW5nZXIgbXQtMSB0ZXh0LWNlbnRlclwiPiR7ZXJyb3JNZXNzYWdlfTwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibXQtMSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgQWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/IDxhIGhyZWY9XCIjL2xvZ2luXCI+TG9naW4gaGVyZTwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICBgO1xyXG5cclxuICBiaW5kUmVnaXN0ZXJGb3JtU3VibWl0KGNhbGxiYWNrKTsgLy8gYmluZCBmb3JtIHNldGVsYWggZWxlbWVuIGRpcmVuZGVyXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBiaW5kUmVnaXN0ZXJGb3JtU3VibWl0KGNhbGxiYWNrKSB7XHJcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWdpc3Rlci1mb3JtJyk7XHJcbiAgaWYgKCFmb3JtKSByZXR1cm47XHJcblxyXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCB1c2VybmFtZSA9IGZvcm0udXNlcm5hbWUudmFsdWUudHJpbSgpO1xyXG4gICAgY29uc3QgcGFzc3dvcmQgPSBmb3JtLnBhc3N3b3JkLnZhbHVlO1xyXG4gICAgY29uc3QgcGFzc3dvcmRDb25maXJtID0gZm9ybS5wYXNzd29yZENvbmZpcm0udmFsdWU7XHJcblxyXG4gICAgLy8g4pyFIFZhbGlkYXNpIGlucHV0IGtvc29uZ1xyXG4gICAgaWYgKCF1c2VybmFtZSB8fCAhcGFzc3dvcmQgfHwgIXBhc3N3b3JkQ29uZmlybSkge1xyXG4gICAgICBhbGVydCgnU2VtdWEga29sb20gaGFydXMgZGlpc2khJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkYXRhID0geyB1c2VybmFtZSwgcGFzc3dvcmQsIHBhc3N3b3JkQ29uZmlybSB9O1xyXG4gICAgY2FsbGJhY2soZGF0YSk7XHJcbiAgfSk7XHJcbn1cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOWY5YWNiMzE3NGI2YmUwMmVkMTRcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=