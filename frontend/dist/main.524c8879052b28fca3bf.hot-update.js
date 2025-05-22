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
        <h1 class="mb-4">Dashboard User</h1>
        <p>
          Welcome back, <strong>${user ? user.username : 'Guest'}</strong>! 
          Here you can upload your CV easily by dragging a PDF file into the box or by choosing a file.
        </p>

        <div class="row mt-4 gx-4 gy-4">
          <!-- LEFT SIDE -->
          <div class="col-md-6">
            <div id="drop-zone" 
              class="border border-primary rounded p-4 text-center d-flex align-items-center justify-content-center" 
              style="height: 200px; cursor: pointer;">
              <p class="m-0 fw-semibold">Drop your CV here (.pdf)</p>
            </div>
            <input type="file" id="cv-upload" accept=".pdf" class="form-control mt-3" />
            <small class="text-muted d-block mt-2">Supported format: PDF only. Max file size 5MB.</small>
          </div>

          <!-- RIGHT SIDE -->
          <div class="col-md-6">
            <div id="cv-preview" 
              class="border rounded shadow-sm p-3" 
              style="height: 400px; overflow: hidden; display: flex; align-items: center; justify-content: center;">
              <p class="text-muted text-center m-0">No file uploaded yet. Preview will appear here.</p>
            </div>
          </div>
        </div>

        <div class="mt-5 d-flex justify-content-between align-items-center flex-wrap gap-3">
          <button id="logout-btn" class="btn btn-danger" style="${user ? '' : 'display:none;'}">
            Logout
          </button>

          <div class="recent-activity text-muted" style="font-size: 0.9rem; min-width: 220px;">
            <strong>Recent Activity:</strong>
            <ul class="mb-0 ps-3" style="list-style-type: disc;">
              <li>Uploaded CV on 2025-05-20</li>
              <li>Profile updated on 2025-05-18</li>
              <li>Logged in 2 hours ago</li>
            </ul>
          </div>
        </div>

        <p class="error-message text-danger mt-3">${errorMessage}</p>
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
/******/ 	__webpack_require__.h = () => ("4d35b44c0354a9caf394")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41MjRjODg3OTA1MmIyOGZjYTNiZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3lEO0FBQ3pEO0FBQ087QUFDUCxlQUFlLHFFQUFjO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQywrQkFBK0I7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxnQkFBZ0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msa0JBQWtCLGVBQWUscUJBQXFCLHdCQUF3QjtBQUNsSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0UsMEJBQTBCLEVBQUU7QUFDOUY7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFLGlCQUFpQjtBQUM3RjtBQUNBLCtEQUErRDtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxhQUFhO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7Ozs7Ozs7O1VDbEVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvc2NyaXB0L3ZpZXdzL21haW4tdmlldy5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL3NjcmlwdC92aWV3cy9tYWluLXZpZXcuanNcclxuaW1wb3J0IHsgZ2V0Q3VycmVudFVzZXIgfSBmcm9tICcuLi9tb2RlbHMvYXV0aC1tb2RlbC5qcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyTWFpblBhZ2Uob25Mb2dvdXQsIGVycm9yTWVzc2FnZSA9ICcnKSB7XHJcbiAgY29uc3QgdXNlciA9IGdldEN1cnJlbnRVc2VyKCk7XHJcblxyXG4gIHJldHVybiBgXHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cIm1haW4tc2VjdGlvbiBweS01IG1pbi12aC0xMDAgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzPVwibWItNFwiPkRhc2hib2FyZCBVc2VyPC9oMT5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIFdlbGNvbWUgYmFjaywgPHN0cm9uZz4ke3VzZXIgPyB1c2VyLnVzZXJuYW1lIDogJ0d1ZXN0J308L3N0cm9uZz4hIFxyXG4gICAgICAgICAgSGVyZSB5b3UgY2FuIHVwbG9hZCB5b3VyIENWIGVhc2lseSBieSBkcmFnZ2luZyBhIFBERiBmaWxlIGludG8gdGhlIGJveCBvciBieSBjaG9vc2luZyBhIGZpbGUuXHJcbiAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG10LTQgZ3gtNCBneS00XCI+XHJcbiAgICAgICAgICA8IS0tIExFRlQgU0lERSAtLT5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiZHJvcC16b25lXCIgXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJib3JkZXIgYm9yZGVyLXByaW1hcnkgcm91bmRlZCBwLTQgdGV4dC1jZW50ZXIgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgXHJcbiAgICAgICAgICAgICAgc3R5bGU9XCJoZWlnaHQ6IDIwMHB4OyBjdXJzb3I6IHBvaW50ZXI7XCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtLTAgZnctc2VtaWJvbGRcIj5Ecm9wIHlvdXIgQ1YgaGVyZSAoLnBkZik8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBpZD1cImN2LXVwbG9hZFwiIGFjY2VwdD1cIi5wZGZcIiBjbGFzcz1cImZvcm0tY29udHJvbCBtdC0zXCIgLz5cclxuICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZCBkLWJsb2NrIG10LTJcIj5TdXBwb3J0ZWQgZm9ybWF0OiBQREYgb25seS4gTWF4IGZpbGUgc2l6ZSA1TUIuPC9zbWFsbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDwhLS0gUklHSFQgU0lERSAtLT5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiY3YtcHJldmlld1wiIFxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiYm9yZGVyIHJvdW5kZWQgc2hhZG93LXNtIHAtM1wiIFxyXG4gICAgICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OiA0MDBweDsgb3ZlcmZsb3c6IGhpZGRlbjsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LW11dGVkIHRleHQtY2VudGVyIG0tMFwiPk5vIGZpbGUgdXBsb2FkZWQgeWV0LiBQcmV2aWV3IHdpbGwgYXBwZWFyIGhlcmUuPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibXQtNSBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyIGZsZXgtd3JhcCBnYXAtM1wiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBpZD1cImxvZ291dC1idG5cIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCIgc3R5bGU9XCIke3VzZXIgPyAnJyA6ICdkaXNwbGF5Om5vbmU7J31cIj5cclxuICAgICAgICAgICAgTG9nb3V0XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVjZW50LWFjdGl2aXR5IHRleHQtbXV0ZWRcIiBzdHlsZT1cImZvbnQtc2l6ZTogMC45cmVtOyBtaW4td2lkdGg6IDIyMHB4O1wiPlxyXG4gICAgICAgICAgICA8c3Ryb25nPlJlY2VudCBBY3Rpdml0eTo8L3N0cm9uZz5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwibWItMCBwcy0zXCIgc3R5bGU9XCJsaXN0LXN0eWxlLXR5cGU6IGRpc2M7XCI+XHJcbiAgICAgICAgICAgICAgPGxpPlVwbG9hZGVkIENWIG9uIDIwMjUtMDUtMjA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5Qcm9maWxlIHVwZGF0ZWQgb24gMjAyNS0wNS0xODwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPkxvZ2dlZCBpbiAyIGhvdXJzIGFnbzwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPHAgY2xhc3M9XCJlcnJvci1tZXNzYWdlIHRleHQtZGFuZ2VyIG10LTNcIj4ke2Vycm9yTWVzc2FnZX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIGA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBiaW5kTG9nb3V0QnV0dG9uKGNhbGxiYWNrKSB7XHJcbiAgY29uc3QgbG9nb3V0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ291dC1idG4nKTtcclxuICBpZiAobG9nb3V0QnRuKSB7XHJcbiAgICBsb2dvdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjRkMzViNDRjMDM1NGE5Y2FmMzk0XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9