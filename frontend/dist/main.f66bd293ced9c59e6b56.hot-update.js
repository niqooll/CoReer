"use strict";
self["webpackHotUpdatefrontend"]("main",{

/***/ "./src/script/views/main-view.js":
/*!***************************************!*\
  !*** ./src/script/views/main-view.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bindLogoutButton: () => (/* binding */ bindLogoutButton),
/* harmony export */   renderMainPage: () => (/* binding */ renderMainPage)
/* harmony export */ });
/* harmony import */ var _models_auth_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/auth-model.js */ "./src/script/models/auth-model.js");
// src/script/views/main-view.js


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
/******/ 	__webpack_require__.h = () => ("73ba352caa01eb3538e5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5mNjZiZDI5M2NlZDljNTllNmI1Ni5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3lEO0FBQ3pEO0FBQ087QUFDUCxlQUFlLHFFQUFjO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsK0JBQStCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEdBQTRHLGVBQWUscUJBQXFCLHdCQUF3QjtBQUN4SztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlGQUF5RixpQkFBaUI7QUFDMUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFLDBCQUEwQixFQUFFO0FBQzlGO0FBQ0E7QUFDQSxvREFBb0QsYUFBYTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7Ozs7Ozs7OztVQy9DQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3NjcmlwdC92aWV3cy9tYWluLXZpZXcuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9zY3JpcHQvdmlld3MvbWFpbi12aWV3LmpzXHJcbmltcG9ydCB7IGdldEN1cnJlbnRVc2VyIH0gZnJvbSAnLi4vbW9kZWxzL2F1dGgtbW9kZWwuanMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlck1haW5QYWdlKG9uTG9nb3V0LCBlcnJvck1lc3NhZ2UgPSAnJykge1xyXG4gIGNvbnN0IHVzZXIgPSBnZXRDdXJyZW50VXNlcigpO1xyXG5cclxuICByZXR1cm4gYFxyXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJtYWluLXNlY3Rpb24gcHktNSBtaW4tdmgtMTAwIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxoMSBjbGFzcz1cIm1iLTRcIj5XZWxjb21lIHRvIHRoZSBMYW5kaW5nIFBhZ2U8L2gxPlxyXG4gICAgICAgIDxwPkhlbGxvLCAke3VzZXIgPyB1c2VyLnVzZXJuYW1lIDogJ0d1ZXN0J30hPC9wPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG10LTRcIj5cclxuICAgICAgICAgIDwhLS0gS0lSSSAtLT5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNiBtYi00XCI+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJkcm9wLXpvbmVcIiBjbGFzcz1cImJvcmRlciBib3JkZXItcHJpbWFyeSByb3VuZGVkIHAtNCB0ZXh0LWNlbnRlclwiIHN0eWxlPVwiaGVpZ2h0OiAyMDBweDsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtLTBcIj5Ecm9wIHlvdXIgQ1YgaGVyZSAoLnBkZik8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBpZD1cImN2LXVwbG9hZFwiIGFjY2VwdD1cIi5wZGZcIiBjbGFzcz1cImZvcm0tY29udHJvbCBtdC0zXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDwhLS0gS0FOQU4gLS0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImN2LXByZXZpZXdcIiBjbGFzcz1cImJvcmRlciByb3VuZGVkIHNoYWRvdyBwLTJcIiBzdHlsZT1cImhlaWdodDogNDAwcHg7IG92ZXJmbG93OiBoaWRkZW47XCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LW11dGVkIHRleHQtY2VudGVyXCI+Tm8gZmlsZSB1cGxvYWRlZC48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtdC00XCI+XHJcbiAgICAgICAgICA8YnV0dG9uIGlkPVwibG9nb3V0LWJ0blwiIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIiBzdHlsZT1cIiR7dXNlciA/ICcnIDogJ2Rpc3BsYXk6bm9uZTsnfVwiPkxvZ291dDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8cCBjbGFzcz1cImVycm9yLW1lc3NhZ2UgdGV4dC1kYW5nZXIgbXQtMlwiPiR7ZXJyb3JNZXNzYWdlfTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgYDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJpbmRMb2dvdXRCdXR0b24oY2FsbGJhY2spIHtcclxuICBjb25zdCBsb2dvdXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nb3V0LWJ0bicpO1xyXG4gIGlmIChsb2dvdXRCdG4pIHtcclxuICAgIGxvZ291dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgY2FsbGJhY2soKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNzNiYTM1MmNhYTAxZWIzNTM4ZTVcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=