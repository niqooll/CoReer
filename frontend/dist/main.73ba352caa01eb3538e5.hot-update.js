"use strict";
self["webpackHotUpdatefrontend"]("main",{

/***/ "./src/script/presenters/main-presenter.js":
/*!*************************************************!*\
  !*** ./src/script/presenters/main-presenter.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainPresenter)
/* harmony export */ });
/* harmony import */ var _views_main_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/main-view.js */ "./src/script/views/main-view.js");
// src/script/presenter/main-presenter.js
// src/script/presenter/main-presenter.js


class MainPresenter {
  constructor(appContainer) {
    this.app = appContainer;
    this.errorMessage = '';
  }

  init() {
    this.render();
  }

  render() {
    this.app.innerHTML = _views_main_view_js__WEBPACK_IMPORTED_MODULE_0__.renderMainPage(this.handleLogout.bind(this), this.errorMessage);
    _views_main_view_js__WEBPACK_IMPORTED_MODULE_0__.bindLogoutButton(this.handleLogout.bind(this));
    this.bindUploadAndPreview(); // <== PENTING: panggil ini supaya event drag & drop aktif
  }

  handleLogout() {
    // Hapus session/local storage user
    localStorage.removeItem('currentUser');

    // Redirect ke landing page
    history.pushState({}, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
  }

  bindUploadAndPreview() {
    const fileInput = document.getElementById('cv-upload');
    const previewContainer = document.getElementById('cv-preview');
    const dropZone = document.getElementById('drop-zone');

    if (!fileInput || !previewContainer || !dropZone) return;

    function showPreview(file) {
      if (file && file.type === 'application/pdf') {
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
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f8c4df25d7b8ba3fb978")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43M2JhMzUyY2FhMDFlYjM1MzhlNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNrRDtBQUNsRDtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsK0RBQXVCO0FBQ2hELElBQUksaUVBQXlCO0FBQzdCLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxRQUFRO0FBQzdELFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7O1VDbkVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvc2NyaXB0L3ByZXNlbnRlcnMvbWFpbi1wcmVzZW50ZXIuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9zY3JpcHQvcHJlc2VudGVyL21haW4tcHJlc2VudGVyLmpzXHJcbi8vIHNyYy9zY3JpcHQvcHJlc2VudGVyL21haW4tcHJlc2VudGVyLmpzXHJcbmltcG9ydCAqIGFzIE1haW5WaWV3IGZyb20gJy4uL3ZpZXdzL21haW4tdmlldy5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluUHJlc2VudGVyIHtcclxuICBjb25zdHJ1Y3RvcihhcHBDb250YWluZXIpIHtcclxuICAgIHRoaXMuYXBwID0gYXBwQ29udGFpbmVyO1xyXG4gICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgdGhpcy5hcHAuaW5uZXJIVE1MID0gTWFpblZpZXcucmVuZGVyTWFpblBhZ2UodGhpcy5oYW5kbGVMb2dvdXQuYmluZCh0aGlzKSwgdGhpcy5lcnJvck1lc3NhZ2UpO1xyXG4gICAgTWFpblZpZXcuYmluZExvZ291dEJ1dHRvbih0aGlzLmhhbmRsZUxvZ291dC5iaW5kKHRoaXMpKTtcclxuICAgIHRoaXMuYmluZFVwbG9hZEFuZFByZXZpZXcoKTsgLy8gPD09IFBFTlRJTkc6IHBhbmdnaWwgaW5pIHN1cGF5YSBldmVudCBkcmFnICYgZHJvcCBha3RpZlxyXG4gIH1cclxuXHJcbiAgaGFuZGxlTG9nb3V0KCkge1xyXG4gICAgLy8gSGFwdXMgc2Vzc2lvbi9sb2NhbCBzdG9yYWdlIHVzZXJcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjdXJyZW50VXNlcicpO1xyXG5cclxuICAgIC8vIFJlZGlyZWN0IGtlIGxhbmRpbmcgcGFnZVxyXG4gICAgaGlzdG9yeS5wdXNoU3RhdGUoe30sICcnLCAnLycpO1xyXG4gICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IFBvcFN0YXRlRXZlbnQoJ3BvcHN0YXRlJykpO1xyXG4gIH1cclxuXHJcbiAgYmluZFVwbG9hZEFuZFByZXZpZXcoKSB7XHJcbiAgICBjb25zdCBmaWxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3YtdXBsb2FkJyk7XHJcbiAgICBjb25zdCBwcmV2aWV3Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N2LXByZXZpZXcnKTtcclxuICAgIGNvbnN0IGRyb3Bab25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ryb3Atem9uZScpO1xyXG5cclxuICAgIGlmICghZmlsZUlucHV0IHx8ICFwcmV2aWV3Q29udGFpbmVyIHx8ICFkcm9wWm9uZSkgcmV0dXJuO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dQcmV2aWV3KGZpbGUpIHtcclxuICAgICAgaWYgKGZpbGUgJiYgZmlsZS50eXBlID09PSAnYXBwbGljYXRpb24vcGRmJykge1xyXG4gICAgICAgIGNvbnN0IGZpbGVVUkwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xyXG4gICAgICAgIHByZXZpZXdDb250YWluZXIuaW5uZXJIVE1MID0gYDxpZnJhbWUgc3JjPVwiJHtmaWxlVVJMfVwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIj48L2lmcmFtZT5gO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHByZXZpZXdDb250YWluZXIuaW5uZXJIVE1MID0gYDxwIGNsYXNzPVwidGV4dC1kYW5nZXIgdGV4dC1jZW50ZXJcIj5JbnZhbGlkIGZpbGUuIFBsZWFzZSB1cGxvYWQgYSAucGRmPC9wPmA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmaWxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcclxuICAgICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgICBzaG93UHJldmlldyhmaWxlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRyb3Bab25lLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBkcm9wWm9uZS5jbGFzc0xpc3QuYWRkKCdiZy1saWdodCcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZHJvcFpvbmUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgKCkgPT4ge1xyXG4gICAgICBkcm9wWm9uZS5jbGFzc0xpc3QucmVtb3ZlKCdiZy1saWdodCcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZHJvcFpvbmUuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZHJvcFpvbmUuY2xhc3NMaXN0LnJlbW92ZSgnYmctbGlnaHQnKTtcclxuICAgICAgY29uc3QgZmlsZSA9IGUuZGF0YVRyYW5zZmVyLmZpbGVzWzBdO1xyXG4gICAgICBmaWxlSW5wdXQuZmlsZXMgPSBlLmRhdGFUcmFuc2Zlci5maWxlcztcclxuICAgICAgc2hvd1ByZXZpZXcoZmlsZSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZjhjNGRmMjVkN2I4YmEzZmI5NzhcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=