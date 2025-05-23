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
            <button id="btn-analyze" class="btn btn-primary mt-2" disabled>Analyze</button>
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
  const analyzeBtn = document.getElementById('btn-analyze');

  if (!fileInput || !previewContainer || !dropZone || !analyzeBtn) return;

  function updateAnalyzeButton(enabled) {
    analyzeBtn.disabled = !enabled;
  }

  function showPreview(file) {
    if (file && file.type === 'application/pdf') {
      if (file.size > 5 * 1024 * 1024) {
        previewContainer.innerHTML = `<p class="text-danger text-center">File too large. Max 5MB allowed.</p>`;
        updateAnalyzeButton(false);
        return;
      }
      const fileURL = URL.createObjectURL(file);
      previewContainer.innerHTML = `<iframe src="${fileURL}" width="100%" height="100%"></iframe>`;
      updateAnalyzeButton(true);
    } else {
      previewContainer.innerHTML = `<p class="text-danger text-center">Invalid file. Please upload a .pdf</p>`;
      updateAnalyzeButton(false);
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
/******/ 	__webpack_require__.h = () => ("22ac6c354bab8c5432ef")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hMTcyZjE5YzE0ODQxZjA5NDk0Zi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ3lEO0FBQ3pEO0FBQ087QUFDUCxlQUFlLHFFQUFjO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQywrQkFBK0I7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxnQkFBZ0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxrQkFBa0IsZUFBZSxxQkFBcUIsd0JBQXdCO0FBQ2xIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELGFBQWE7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxRQUFRO0FBQzNEO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7VUN0R0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9zY3JpcHQvdmlld3MvbWFpbi12aWV3LmpzIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvc2NyaXB0L3ZpZXdzL21haW4tdmlldy5qc1xyXG4vLyBzcmMvc2NyaXB0L3ZpZXdzL21haW4tdmlldy5qc1xyXG5pbXBvcnQgeyBnZXRDdXJyZW50VXNlciB9IGZyb20gJy4uL21vZGVscy9hdXRoLW1vZGVsLmpzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJNYWluUGFnZShvbkxvZ291dCwgZXJyb3JNZXNzYWdlID0gJycpIHtcclxuICBjb25zdCB1c2VyID0gZ2V0Q3VycmVudFVzZXIoKTtcclxuXHJcbiAgcmV0dXJuIGBcclxuICAgIDxzZWN0aW9uIGNsYXNzPVwibWFpbi1zZWN0aW9uIHB5LTUgbWluLXZoLTEwMCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8aDEgY2xhc3M9XCJtYi00XCI+RGFzaGJvYXJkIFVzZXI8L2gxPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgV2VsY29tZSBiYWNrLCA8c3Ryb25nPiR7dXNlciA/IHVzZXIudXNlcm5hbWUgOiAnR3Vlc3QnfTwvc3Ryb25nPiEgXHJcbiAgICAgICAgICBIZXJlIHlvdSBjYW4gdXBsb2FkIHlvdXIgQ1YgZWFzaWx5IGJ5IGRyYWdnaW5nIGEgUERGIGZpbGUgaW50byB0aGUgYm94IG9yIGJ5IGNob29zaW5nIGEgZmlsZS5cclxuICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgbXQtNCBneC00IGd5LTRcIj5cclxuICAgICAgICAgIDwhLS0gTEVGVCBTSURFIC0tPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJkcm9wLXpvbmVcIiBcclxuICAgICAgICAgICAgICBjbGFzcz1cImJvcmRlciBib3JkZXItcHJpbWFyeSByb3VuZGVkIHAtNCB0ZXh0LWNlbnRlciBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIiBcclxuICAgICAgICAgICAgICBzdHlsZT1cImhlaWdodDogMjAwcHg7IGN1cnNvcjogcG9pbnRlcjtcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzcz1cIm0tMCBmdy1zZW1pYm9sZFwiPkRyb3AgeW91ciBDViBoZXJlICgucGRmKTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGlkPVwiY3YtdXBsb2FkXCIgYWNjZXB0PVwiLnBkZlwiIGNsYXNzPVwiZm9ybS1jb250cm9sIG10LTNcIiAvPlxyXG4gICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkIGQtYmxvY2sgbXQtMlwiPlN1cHBvcnRlZCBmb3JtYXQ6IFBERiBvbmx5LiBNYXggZmlsZSBzaXplIDVNQi48L3NtYWxsPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiYnRuLWFuYWx5emVcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBtdC0yXCIgZGlzYWJsZWQ+QW5hbHl6ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPCEtLSBSSUdIVCBTSURFIC0tPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjdi1wcmV2aWV3XCIgXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJib3JkZXIgcm91bmRlZCBzaGFkb3ctc20gcC0zXCIgXHJcbiAgICAgICAgICAgICAgc3R5bGU9XCJoZWlnaHQ6IDQwMHB4OyBvdmVyZmxvdzogaGlkZGVuOyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtbXV0ZWQgdGV4dC1jZW50ZXIgbS0wXCI+Tm8gZmlsZSB1cGxvYWRlZCB5ZXQuIFByZXZpZXcgd2lsbCBhcHBlYXIgaGVyZS48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJlcnJvci1tZXNzYWdlIHRleHQtZGFuZ2VyIG10LTNcIj4ke2Vycm9yTWVzc2FnZX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIGA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBiaW5kTG9nb3V0QnV0dG9uKGNhbGxiYWNrKSB7XHJcbiAgY29uc3QgbG9nb3V0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ291dC1idG4nKTtcclxuICBpZiAobG9nb3V0QnRuKSB7XHJcbiAgICBsb2dvdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBiaW5kVXBsb2FkQW5kUHJldmlldygpIHtcclxuICBjb25zdCBmaWxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3YtdXBsb2FkJyk7XHJcbiAgY29uc3QgcHJldmlld0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdi1wcmV2aWV3Jyk7XHJcbiAgY29uc3QgZHJvcFpvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJvcC16b25lJyk7XHJcbiAgY29uc3QgYW5hbHl6ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tYW5hbHl6ZScpO1xyXG5cclxuICBpZiAoIWZpbGVJbnB1dCB8fCAhcHJldmlld0NvbnRhaW5lciB8fCAhZHJvcFpvbmUgfHwgIWFuYWx5emVCdG4pIHJldHVybjtcclxuXHJcbiAgZnVuY3Rpb24gdXBkYXRlQW5hbHl6ZUJ1dHRvbihlbmFibGVkKSB7XHJcbiAgICBhbmFseXplQnRuLmRpc2FibGVkID0gIWVuYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzaG93UHJldmlldyhmaWxlKSB7XHJcbiAgICBpZiAoZmlsZSAmJiBmaWxlLnR5cGUgPT09ICdhcHBsaWNhdGlvbi9wZGYnKSB7XHJcbiAgICAgIGlmIChmaWxlLnNpemUgPiA1ICogMTAyNCAqIDEwMjQpIHtcclxuICAgICAgICBwcmV2aWV3Q29udGFpbmVyLmlubmVySFRNTCA9IGA8cCBjbGFzcz1cInRleHQtZGFuZ2VyIHRleHQtY2VudGVyXCI+RmlsZSB0b28gbGFyZ2UuIE1heCA1TUIgYWxsb3dlZC48L3A+YDtcclxuICAgICAgICB1cGRhdGVBbmFseXplQnV0dG9uKGZhbHNlKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZmlsZVVSTCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XHJcbiAgICAgIHByZXZpZXdDb250YWluZXIuaW5uZXJIVE1MID0gYDxpZnJhbWUgc3JjPVwiJHtmaWxlVVJMfVwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIj48L2lmcmFtZT5gO1xyXG4gICAgICB1cGRhdGVBbmFseXplQnV0dG9uKHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcHJldmlld0NvbnRhaW5lci5pbm5lckhUTUwgPSBgPHAgY2xhc3M9XCJ0ZXh0LWRhbmdlciB0ZXh0LWNlbnRlclwiPkludmFsaWQgZmlsZS4gUGxlYXNlIHVwbG9hZCBhIC5wZGY8L3A+YDtcclxuICAgICAgdXBkYXRlQW5hbHl6ZUJ1dHRvbihmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmaWxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcclxuICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgIHNob3dQcmV2aWV3KGZpbGUpO1xyXG4gIH0pO1xyXG5cclxuICBkcm9wWm9uZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBkcm9wWm9uZS5jbGFzc0xpc3QuYWRkKCdiZy1saWdodCcpO1xyXG4gIH0pO1xyXG5cclxuICBkcm9wWm9uZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCAoKSA9PiB7XHJcbiAgICBkcm9wWm9uZS5jbGFzc0xpc3QucmVtb3ZlKCdiZy1saWdodCcpO1xyXG4gIH0pO1xyXG5cclxuICBkcm9wWm9uZS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGRyb3Bab25lLmNsYXNzTGlzdC5yZW1vdmUoJ2JnLWxpZ2h0Jyk7XHJcbiAgICBjb25zdCBmaWxlID0gZS5kYXRhVHJhbnNmZXIuZmlsZXNbMF07XHJcbiAgICBmaWxlSW5wdXQuZmlsZXMgPSBlLmRhdGFUcmFuc2Zlci5maWxlcztcclxuICAgIHNob3dQcmV2aWV3KGZpbGUpO1xyXG4gIH0pO1xyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjIyYWM2YzM1NGJhYjhjNTQzMmVmXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9