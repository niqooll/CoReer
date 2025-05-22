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
        <h1 class="mb-3">Dashboard User</h1>
        <p>Welcome back, <strong>${user ? user.username : 'Guest'}</strong>! Here you can upload your CV easily by dragging a PDF file into the box or by choosing a file.</p>
        
        <div class="row mt-4">
          <!-- KIRI -->
          <div class="col-md-6 mb-4">
            <div id="drop-zone" class="border border-primary rounded p-4 text-center" style="height: 200px; display: flex; align-items: center; justify-content: center;">
              <p class="m-0">Drop your CV here (.pdf)</p>
            </div>
            <input type="file" id="cv-upload" accept=".pdf" class="form-control mt-3" />
            <small class="text-muted d-block mt-2">Supported format: PDF only. Max file size 5MB.</small>
          </div>

          <!-- KANAN -->
          <div class="col-md-6">
            <div id="cv-preview" class="border rounded shadow p-2" style="height: 400px; overflow: hidden;">
              <p class="text-muted text-center">No file uploaded yet. Preview will appear here.</p>
            </div>
          </div>
        </div>

        <div class="mt-4 d-flex justify-content-between align-items-center">
          <button id="logout-btn" class="btn btn-danger" style="${user ? '' : 'display:none;'}">Logout</button>
          <div class="recent-activity text-muted" style="font-size: 0.9rem;">
            <strong>Recent Activity:</strong>
            <ul class="mb-0" style="list-style-type: disc; padding-left: 1rem;">
              <li>Uploaded CV on 2025-05-20</li>
              <li>Profile updated on 2025-05-18</li>
              <li>Logged in 2 hours ago</li>
            </ul>
          </div>
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
/******/ 	__webpack_require__.h = () => ("524c8879052b28fca3bf")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5mOGM0ZGYyNWQ3YjhiYTNmYjk3OC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3lEO0FBQ3pEO0FBQ087QUFDUCxlQUFlLHFFQUFjO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsK0JBQStCO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEdBQTRHLGVBQWUscUJBQXFCLHdCQUF3QjtBQUN4SztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUZBQXlGLGlCQUFpQjtBQUMxRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0UsMEJBQTBCLEVBQUU7QUFDOUYsMkVBQTJFO0FBQzNFO0FBQ0EsMkRBQTJELG1CQUFtQjtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxhQUFhO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7Ozs7Ozs7VUN6REEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9zY3JpcHQvdmlld3MvbWFpbi12aWV3LmpzIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvc2NyaXB0L3ZpZXdzL21haW4tdmlldy5qc1xyXG5pbXBvcnQgeyBnZXRDdXJyZW50VXNlciB9IGZyb20gJy4uL21vZGVscy9hdXRoLW1vZGVsLmpzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJNYWluUGFnZShvbkxvZ291dCwgZXJyb3JNZXNzYWdlID0gJycpIHtcclxuICBjb25zdCB1c2VyID0gZ2V0Q3VycmVudFVzZXIoKTtcclxuXHJcbiAgcmV0dXJuIGBcclxuICAgIDxzZWN0aW9uIGNsYXNzPVwibWFpbi1zZWN0aW9uIHB5LTUgbWluLXZoLTEwMCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8aDEgY2xhc3M9XCJtYi0zXCI+RGFzaGJvYXJkIFVzZXI8L2gxPlxyXG4gICAgICAgIDxwPldlbGNvbWUgYmFjaywgPHN0cm9uZz4ke3VzZXIgPyB1c2VyLnVzZXJuYW1lIDogJ0d1ZXN0J308L3N0cm9uZz4hIEhlcmUgeW91IGNhbiB1cGxvYWQgeW91ciBDViBlYXNpbHkgYnkgZHJhZ2dpbmcgYSBQREYgZmlsZSBpbnRvIHRoZSBib3ggb3IgYnkgY2hvb3NpbmcgYSBmaWxlLjwvcD5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG10LTRcIj5cclxuICAgICAgICAgIDwhLS0gS0lSSSAtLT5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNiBtYi00XCI+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJkcm9wLXpvbmVcIiBjbGFzcz1cImJvcmRlciBib3JkZXItcHJpbWFyeSByb3VuZGVkIHAtNCB0ZXh0LWNlbnRlclwiIHN0eWxlPVwiaGVpZ2h0OiAyMDBweDsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtLTBcIj5Ecm9wIHlvdXIgQ1YgaGVyZSAoLnBkZik8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBpZD1cImN2LXVwbG9hZFwiIGFjY2VwdD1cIi5wZGZcIiBjbGFzcz1cImZvcm0tY29udHJvbCBtdC0zXCIgLz5cclxuICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZCBkLWJsb2NrIG10LTJcIj5TdXBwb3J0ZWQgZm9ybWF0OiBQREYgb25seS4gTWF4IGZpbGUgc2l6ZSA1TUIuPC9zbWFsbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDwhLS0gS0FOQU4gLS0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImN2LXByZXZpZXdcIiBjbGFzcz1cImJvcmRlciByb3VuZGVkIHNoYWRvdyBwLTJcIiBzdHlsZT1cImhlaWdodDogNDAwcHg7IG92ZXJmbG93OiBoaWRkZW47XCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LW11dGVkIHRleHQtY2VudGVyXCI+Tm8gZmlsZSB1cGxvYWRlZCB5ZXQuIFByZXZpZXcgd2lsbCBhcHBlYXIgaGVyZS48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtdC00IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxidXR0b24gaWQ9XCJsb2dvdXQtYnRuXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiIHN0eWxlPVwiJHt1c2VyID8gJycgOiAnZGlzcGxheTpub25lOyd9XCI+TG9nb3V0PC9idXR0b24+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVjZW50LWFjdGl2aXR5IHRleHQtbXV0ZWRcIiBzdHlsZT1cImZvbnQtc2l6ZTogMC45cmVtO1wiPlxyXG4gICAgICAgICAgICA8c3Ryb25nPlJlY2VudCBBY3Rpdml0eTo8L3N0cm9uZz5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwibWItMFwiIHN0eWxlPVwibGlzdC1zdHlsZS10eXBlOiBkaXNjOyBwYWRkaW5nLWxlZnQ6IDFyZW07XCI+XHJcbiAgICAgICAgICAgICAgPGxpPlVwbG9hZGVkIENWIG9uIDIwMjUtMDUtMjA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5Qcm9maWxlIHVwZGF0ZWQgb24gMjAyNS0wNS0xODwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPkxvZ2dlZCBpbiAyIGhvdXJzIGFnbzwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPHAgY2xhc3M9XCJlcnJvci1tZXNzYWdlIHRleHQtZGFuZ2VyIG10LTJcIj4ke2Vycm9yTWVzc2FnZX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIGA7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYmluZExvZ291dEJ1dHRvbihjYWxsYmFjaykge1xyXG4gIGNvbnN0IGxvZ291dEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dvdXQtYnRuJyk7XHJcbiAgaWYgKGxvZ291dEJ0bikge1xyXG4gICAgbG9nb3V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjYWxsYmFjaygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1MjRjODg3OTA1MmIyOGZjYTNiZlwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==