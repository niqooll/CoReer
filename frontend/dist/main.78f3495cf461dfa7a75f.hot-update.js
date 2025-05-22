"use strict";
self["webpackHotUpdatefrontend"]("main",{

/***/ "./src/script/presenters/main-presenter.js":
/*!*************************************************!*\
  !*** ./src/script/presenters/main-presenter.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bindLogoutButton: () => (/* binding */ bindLogoutButton),
/* harmony export */   renderMainPage: () => (/* binding */ renderMainPage)
/* harmony export */ });
/* harmony import */ var _models_auth_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/auth-model.js */ "./src/script/models/auth-model.js");
// src/script/presenter/main-presenter.js


function renderMainPage(onLogout, errorMessage = '') {
  const user = (0,_models_auth_model_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentUser)();

  return `
    <section class="main-section py-5 min-vh-100 d-flex align-items-center">
      <div class="container">
        <h1 class="mb-4">Welcome to the Landing Page</h1>
        <p>Hello, ${user ? user.username : 'Guest'}!</p>

        <div class="row mt-4">
          <!-- KIRI -->
          <div class="col-md-6 mb-4">
            <div id="drop-zone" class="border border-primary rounded p-4 text-center" style="height: 200px; display: flex; align-items: center; justify-content: center;">
              <p class="m-0">Drop your CV here (.pdf)</p>
            </div>
            <input type="file" id="cv-upload" accept=".pdf" class="form-control mt-3" />
          </div>

          <!-- KANAN -->
          <div class="col-md-6">
            <div id="cv-preview" class="border rounded shadow p-2" style="height: 400px; overflow: hidden;">
              <p class="text-muted text-center">No file uploaded.</p>
            </div>
          </div>
        </div>

        <div class="mt-4">
          <button id="logout-btn" class="btn btn-danger" style="${user ? '' : 'display:none;'}">Logout</button>
        </div>

        <p class="error-message text-danger mt-2">${errorMessage}</p>
      </div>
    </section>
  `;
}

function bindLogoutButton(callback) {
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      callback();
    });
  }
}



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("332db3248b6f90b43f4c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43OGYzNDk1Y2Y0NjFkZmE3YTc1Zi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3lEO0FBQ3pEO0FBQ087QUFDUCxlQUFlLHFFQUFjO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsK0JBQStCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEdBQTRHLGVBQWUscUJBQXFCLHdCQUF3QjtBQUN4SztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlGQUF5RixpQkFBaUI7QUFDMUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFLDBCQUEwQixFQUFFO0FBQzlGO0FBQ0E7QUFDQSxvREFBb0QsYUFBYTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7Ozs7Ozs7OztVQy9DQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3NjcmlwdC9wcmVzZW50ZXJzL21haW4tcHJlc2VudGVyLmpzIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvc2NyaXB0L3ByZXNlbnRlci9tYWluLXByZXNlbnRlci5qc1xyXG5pbXBvcnQgeyBnZXRDdXJyZW50VXNlciB9IGZyb20gJy4uL21vZGVscy9hdXRoLW1vZGVsLmpzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJNYWluUGFnZShvbkxvZ291dCwgZXJyb3JNZXNzYWdlID0gJycpIHtcclxuICBjb25zdCB1c2VyID0gZ2V0Q3VycmVudFVzZXIoKTtcclxuXHJcbiAgcmV0dXJuIGBcclxuICAgIDxzZWN0aW9uIGNsYXNzPVwibWFpbi1zZWN0aW9uIHB5LTUgbWluLXZoLTEwMCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8aDEgY2xhc3M9XCJtYi00XCI+V2VsY29tZSB0byB0aGUgTGFuZGluZyBQYWdlPC9oMT5cclxuICAgICAgICA8cD5IZWxsbywgJHt1c2VyID8gdXNlci51c2VybmFtZSA6ICdHdWVzdCd9ITwvcD5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBtdC00XCI+XHJcbiAgICAgICAgICA8IS0tIEtJUkkgLS0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTYgbWItNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiZHJvcC16b25lXCIgY2xhc3M9XCJib3JkZXIgYm9yZGVyLXByaW1hcnkgcm91bmRlZCBwLTQgdGV4dC1jZW50ZXJcIiBzdHlsZT1cImhlaWdodDogMjAwcHg7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyO1wiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwibS0wXCI+RHJvcCB5b3VyIENWIGhlcmUgKC5wZGYpPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgaWQ9XCJjdi11cGxvYWRcIiBhY2NlcHQ9XCIucGRmXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgbXQtM1wiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8IS0tIEtBTkFOIC0tPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjdi1wcmV2aWV3XCIgY2xhc3M9XCJib3JkZXIgcm91bmRlZCBzaGFkb3cgcC0yXCIgc3R5bGU9XCJoZWlnaHQ6IDQwMHB4OyBvdmVyZmxvdzogaGlkZGVuO1wiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1tdXRlZCB0ZXh0LWNlbnRlclwiPk5vIGZpbGUgdXBsb2FkZWQuPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibXQtNFwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBpZD1cImxvZ291dC1idG5cIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCIgc3R5bGU9XCIke3VzZXIgPyAnJyA6ICdkaXNwbGF5Om5vbmU7J31cIj5Mb2dvdXQ8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPHAgY2xhc3M9XCJlcnJvci1tZXNzYWdlIHRleHQtZGFuZ2VyIG10LTJcIj4ke2Vycm9yTWVzc2FnZX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIGA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBiaW5kTG9nb3V0QnV0dG9uKGNhbGxiYWNrKSB7XHJcbiAgY29uc3QgbG9nb3V0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ291dC1idG4nKTtcclxuICBpZiAobG9nb3V0QnRuKSB7XHJcbiAgICBsb2dvdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjMzMmRiMzI0OGI2ZjkwYjQzZjRjXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9