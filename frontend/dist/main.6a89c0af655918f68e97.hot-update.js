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
/* harmony export */   bindUploadAndPreview: () => (/* binding */ bindUploadAndPreview),
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

function bindUploadAndPreview() {
  const fileInput = document.getElementById('cv-upload');
  const previewContainer = document.getElementById('cv-preview');
  const dropZone = document.getElementById('drop-zone');

  if (!fileInput || !previewContainer || !dropZone) return;

  function showPreview(file) {
    if (file && file.type === 'application/pdf') {
      if (file.size > 5 * 1024 * 1024) {
        previewContainer.innerHTML = `<p class="text-danger text-center">File too large. Max 5MB allowed.</p>`;
        return;
      }
      const fileURL = URL.createObjectURL(file);
      previewContainer.innerHTML = `<iframe src="${fileURL}" width="100%" height="100%"></iframe>`;
    } else {
      previewContainer.innerHTML = `<p class="text-danger text-center">Invalid file. Please upload a .pdf</p>`;
    }
  }

  fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    showPreview(file);
  });

  dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('bg-light');
  });

  dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('bg-light');
  });

  dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('bg-light');
    const file = e.dataTransfer.files[0];
    fileInput.files = e.dataTransfer.files;
    showPreview(file);
  });
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a172f19c14841f09494f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42YTg5YzBhZjY1NTkxOGY2OGU5Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUN5RDtBQUN6RDtBQUNPO0FBQ1AsZUFBZSxxRUFBYztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsK0JBQStCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsZ0JBQWdCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGtCQUFrQixlQUFlLHFCQUFxQix3QkFBd0I7QUFDbEg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsYUFBYTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELFFBQVE7QUFDM0QsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7O1VDNUZBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvc2NyaXB0L3ZpZXdzL21haW4tdmlldy5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL3NjcmlwdC92aWV3cy9tYWluLXZpZXcuanNcclxuaW1wb3J0IHsgZ2V0Q3VycmVudFVzZXIgfSBmcm9tICcuLi9tb2RlbHMvYXV0aC1tb2RlbC5qcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyTWFpblBhZ2Uob25Mb2dvdXQsIGVycm9yTWVzc2FnZSA9ICcnKSB7XHJcbiAgY29uc3QgdXNlciA9IGdldEN1cnJlbnRVc2VyKCk7XHJcblxyXG4gIHJldHVybiBgXHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cIm1haW4tc2VjdGlvbiBweS01IG1pbi12aC0xMDAgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzPVwibWItNFwiPkRhc2hib2FyZCBVc2VyPC9oMT5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIFdlbGNvbWUgYmFjaywgPHN0cm9uZz4ke3VzZXIgPyB1c2VyLnVzZXJuYW1lIDogJ0d1ZXN0J308L3N0cm9uZz4hIFxyXG4gICAgICAgICAgSGVyZSB5b3UgY2FuIHVwbG9hZCB5b3VyIENWIGVhc2lseSBieSBkcmFnZ2luZyBhIFBERiBmaWxlIGludG8gdGhlIGJveCBvciBieSBjaG9vc2luZyBhIGZpbGUuXHJcbiAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG10LTQgZ3gtNCBneS00XCI+XHJcbiAgICAgICAgICA8IS0tIExFRlQgU0lERSAtLT5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiZHJvcC16b25lXCIgXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJib3JkZXIgYm9yZGVyLXByaW1hcnkgcm91bmRlZCBwLTQgdGV4dC1jZW50ZXIgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgXHJcbiAgICAgICAgICAgICAgc3R5bGU9XCJoZWlnaHQ6IDIwMHB4OyBjdXJzb3I6IHBvaW50ZXI7XCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtLTAgZnctc2VtaWJvbGRcIj5Ecm9wIHlvdXIgQ1YgaGVyZSAoLnBkZik8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBpZD1cImN2LXVwbG9hZFwiIGFjY2VwdD1cIi5wZGZcIiBjbGFzcz1cImZvcm0tY29udHJvbCBtdC0zXCIgLz5cclxuICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZCBkLWJsb2NrIG10LTJcIj5TdXBwb3J0ZWQgZm9ybWF0OiBQREYgb25seS4gTWF4IGZpbGUgc2l6ZSA1TUIuPC9zbWFsbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDwhLS0gUklHSFQgU0lERSAtLT5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiY3YtcHJldmlld1wiIFxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiYm9yZGVyIHJvdW5kZWQgc2hhZG93LXNtIHAtM1wiIFxyXG4gICAgICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OiA0MDBweDsgb3ZlcmZsb3c6IGhpZGRlbjsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LW11dGVkIHRleHQtY2VudGVyIG0tMFwiPk5vIGZpbGUgdXBsb2FkZWQgeWV0LiBQcmV2aWV3IHdpbGwgYXBwZWFyIGhlcmUuPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxwIGNsYXNzPVwiZXJyb3ItbWVzc2FnZSB0ZXh0LWRhbmdlciBtdC0zXCI+JHtlcnJvck1lc3NhZ2V9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICBgO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYmluZExvZ291dEJ1dHRvbihjYWxsYmFjaykge1xyXG4gIGNvbnN0IGxvZ291dEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dvdXQtYnRuJyk7XHJcbiAgaWYgKGxvZ291dEJ0bikge1xyXG4gICAgbG9nb3V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjYWxsYmFjaygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYmluZFVwbG9hZEFuZFByZXZpZXcoKSB7XHJcbiAgY29uc3QgZmlsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N2LXVwbG9hZCcpO1xyXG4gIGNvbnN0IHByZXZpZXdDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3YtcHJldmlldycpO1xyXG4gIGNvbnN0IGRyb3Bab25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ryb3Atem9uZScpO1xyXG5cclxuICBpZiAoIWZpbGVJbnB1dCB8fCAhcHJldmlld0NvbnRhaW5lciB8fCAhZHJvcFpvbmUpIHJldHVybjtcclxuXHJcbiAgZnVuY3Rpb24gc2hvd1ByZXZpZXcoZmlsZSkge1xyXG4gICAgaWYgKGZpbGUgJiYgZmlsZS50eXBlID09PSAnYXBwbGljYXRpb24vcGRmJykge1xyXG4gICAgICBpZiAoZmlsZS5zaXplID4gNSAqIDEwMjQgKiAxMDI0KSB7XHJcbiAgICAgICAgcHJldmlld0NvbnRhaW5lci5pbm5lckhUTUwgPSBgPHAgY2xhc3M9XCJ0ZXh0LWRhbmdlciB0ZXh0LWNlbnRlclwiPkZpbGUgdG9vIGxhcmdlLiBNYXggNU1CIGFsbG93ZWQuPC9wPmA7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGZpbGVVUkwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xyXG4gICAgICBwcmV2aWV3Q29udGFpbmVyLmlubmVySFRNTCA9IGA8aWZyYW1lIHNyYz1cIiR7ZmlsZVVSTH1cIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCI+PC9pZnJhbWU+YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHByZXZpZXdDb250YWluZXIuaW5uZXJIVE1MID0gYDxwIGNsYXNzPVwidGV4dC1kYW5nZXIgdGV4dC1jZW50ZXJcIj5JbnZhbGlkIGZpbGUuIFBsZWFzZSB1cGxvYWQgYSAucGRmPC9wPmA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmaWxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcclxuICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgIHNob3dQcmV2aWV3KGZpbGUpO1xyXG4gIH0pO1xyXG5cclxuICBkcm9wWm9uZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBkcm9wWm9uZS5jbGFzc0xpc3QuYWRkKCdiZy1saWdodCcpO1xyXG4gIH0pO1xyXG5cclxuICBkcm9wWm9uZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCAoKSA9PiB7XHJcbiAgICBkcm9wWm9uZS5jbGFzc0xpc3QucmVtb3ZlKCdiZy1saWdodCcpO1xyXG4gIH0pO1xyXG5cclxuICBkcm9wWm9uZS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGRyb3Bab25lLmNsYXNzTGlzdC5yZW1vdmUoJ2JnLWxpZ2h0Jyk7XHJcbiAgICBjb25zdCBmaWxlID0gZS5kYXRhVHJhbnNmZXIuZmlsZXNbMF07XHJcbiAgICBmaWxlSW5wdXQuZmlsZXMgPSBlLmRhdGFUcmFuc2Zlci5maWxlcztcclxuICAgIHNob3dQcmV2aWV3KGZpbGUpO1xyXG4gIH0pO1xyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImExNzJmMTljMTQ4NDFmMDk0OTRmXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9