"use strict";
self["webpackHotUpdatefrontend"]("main",{

/***/ "./src/script/views/main-view.js":
/*!***************************************!*\
  !*** ./src/script/views/main-view.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderMainPage: () => (/* binding */ renderMainPage)
/* harmony export */ });
// src/script/views/main-view.js
function renderMainPage(onLogout, errorMessage = '') {
  const user = getCurrentUser();

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

        <div class="mt-5 d-flex justify-content-end">
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


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("455741db1189ea3d7211")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40ZDM1YjQ0YzAzNTRhOWNhZjM5NC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsK0JBQStCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsZ0JBQWdCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGtCQUFrQixlQUFlLHFCQUFxQix3QkFBd0I7QUFDbEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFLGlCQUFpQjtBQUM3RjtBQUNBLCtEQUErRDtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxhQUFhO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7VUNsREEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9zY3JpcHQvdmlld3MvbWFpbi12aWV3LmpzIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvc2NyaXB0L3ZpZXdzL21haW4tdmlldy5qc1xyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyTWFpblBhZ2Uob25Mb2dvdXQsIGVycm9yTWVzc2FnZSA9ICcnKSB7XHJcbiAgY29uc3QgdXNlciA9IGdldEN1cnJlbnRVc2VyKCk7XHJcblxyXG4gIHJldHVybiBgXHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cIm1haW4tc2VjdGlvbiBweS01IG1pbi12aC0xMDAgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzPVwibWItNFwiPkRhc2hib2FyZCBVc2VyPC9oMT5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIFdlbGNvbWUgYmFjaywgPHN0cm9uZz4ke3VzZXIgPyB1c2VyLnVzZXJuYW1lIDogJ0d1ZXN0J308L3N0cm9uZz4hIFxyXG4gICAgICAgICAgSGVyZSB5b3UgY2FuIHVwbG9hZCB5b3VyIENWIGVhc2lseSBieSBkcmFnZ2luZyBhIFBERiBmaWxlIGludG8gdGhlIGJveCBvciBieSBjaG9vc2luZyBhIGZpbGUuXHJcbiAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG10LTQgZ3gtNCBneS00XCI+XHJcbiAgICAgICAgICA8IS0tIExFRlQgU0lERSAtLT5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiZHJvcC16b25lXCIgXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJib3JkZXIgYm9yZGVyLXByaW1hcnkgcm91bmRlZCBwLTQgdGV4dC1jZW50ZXIgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgXHJcbiAgICAgICAgICAgICAgc3R5bGU9XCJoZWlnaHQ6IDIwMHB4OyBjdXJzb3I6IHBvaW50ZXI7XCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtLTAgZnctc2VtaWJvbGRcIj5Ecm9wIHlvdXIgQ1YgaGVyZSAoLnBkZik8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBpZD1cImN2LXVwbG9hZFwiIGFjY2VwdD1cIi5wZGZcIiBjbGFzcz1cImZvcm0tY29udHJvbCBtdC0zXCIgLz5cclxuICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZCBkLWJsb2NrIG10LTJcIj5TdXBwb3J0ZWQgZm9ybWF0OiBQREYgb25seS4gTWF4IGZpbGUgc2l6ZSA1TUIuPC9zbWFsbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDwhLS0gUklHSFQgU0lERSAtLT5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiY3YtcHJldmlld1wiIFxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiYm9yZGVyIHJvdW5kZWQgc2hhZG93LXNtIHAtM1wiIFxyXG4gICAgICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OiA0MDBweDsgb3ZlcmZsb3c6IGhpZGRlbjsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LW11dGVkIHRleHQtY2VudGVyIG0tMFwiPk5vIGZpbGUgdXBsb2FkZWQgeWV0LiBQcmV2aWV3IHdpbGwgYXBwZWFyIGhlcmUuPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibXQtNSBkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJlY2VudC1hY3Rpdml0eSB0ZXh0LW11dGVkXCIgc3R5bGU9XCJmb250LXNpemU6IDAuOXJlbTsgbWluLXdpZHRoOiAyMjBweDtcIj5cclxuICAgICAgICAgICAgPHN0cm9uZz5SZWNlbnQgQWN0aXZpdHk6PC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cIm1iLTAgcHMtM1wiIHN0eWxlPVwibGlzdC1zdHlsZS10eXBlOiBkaXNjO1wiPlxyXG4gICAgICAgICAgICAgIDxsaT5VcGxvYWRlZCBDViBvbiAyMDI1LTA1LTIwPC9saT5cclxuICAgICAgICAgICAgICA8bGk+UHJvZmlsZSB1cGRhdGVkIG9uIDIwMjUtMDUtMTg8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5Mb2dnZWQgaW4gMiBob3VycyBhZ288L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxwIGNsYXNzPVwiZXJyb3ItbWVzc2FnZSB0ZXh0LWRhbmdlciBtdC0zXCI+JHtlcnJvck1lc3NhZ2V9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICBgO1xyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjQ1NTc0MWRiMTE4OWVhM2Q3MjExXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9