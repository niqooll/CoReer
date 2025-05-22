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
/******/ 	__webpack_require__.h = () => ("f66bd293ced9c59e6b56")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hZDEzYWQzMjBjMjZjOGYwNjhhNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDa0Q7QUFDbEQ7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLCtEQUF1QjtBQUNoRCxJQUFJLGlFQUF5QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxRQUFRO0FBQzdELFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7O1VDakVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvc2NyaXB0L3ByZXNlbnRlcnMvbWFpbi1wcmVzZW50ZXIuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9zY3JpcHQvcHJlc2VudGVyL21haW4tcHJlc2VudGVyLmpzXHJcbmltcG9ydCAqIGFzIE1haW5WaWV3IGZyb20gJy4uL3ZpZXdzL21haW4tdmlldy5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluUHJlc2VudGVyIHtcclxuICBjb25zdHJ1Y3RvcihhcHBDb250YWluZXIpIHtcclxuICAgIHRoaXMuYXBwID0gYXBwQ29udGFpbmVyO1xyXG4gICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgdGhpcy5hcHAuaW5uZXJIVE1MID0gTWFpblZpZXcucmVuZGVyTWFpblBhZ2UodGhpcy5oYW5kbGVMb2dvdXQuYmluZCh0aGlzKSwgdGhpcy5lcnJvck1lc3NhZ2UpO1xyXG4gICAgTWFpblZpZXcuYmluZExvZ291dEJ1dHRvbih0aGlzLmhhbmRsZUxvZ291dC5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUxvZ291dCgpIHtcclxuICAgIC8vIEhhcHVzIHNlc3Npb24vbG9jYWwgc3RvcmFnZSB1c2VyXHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY3VycmVudFVzZXInKTtcclxuXHJcbiAgICAvLyBSZWRpcmVjdCBrZSBsYW5kaW5nIHBhZ2VcclxuICAgIGhpc3RvcnkucHVzaFN0YXRlKHt9LCAnJywgJy8nKTtcclxuICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBQb3BTdGF0ZUV2ZW50KCdwb3BzdGF0ZScpKTtcclxuICB9XHJcblxyXG4gIGJpbmRVcGxvYWRBbmRQcmV2aWV3KCkge1xyXG4gICAgY29uc3QgZmlsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N2LXVwbG9hZCcpO1xyXG4gICAgY29uc3QgcHJldmlld0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdi1wcmV2aWV3Jyk7XHJcbiAgICBjb25zdCBkcm9wWm9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkcm9wLXpvbmUnKTtcclxuXHJcbiAgICBpZiAoIWZpbGVJbnB1dCB8fCAhcHJldmlld0NvbnRhaW5lciB8fCAhZHJvcFpvbmUpIHJldHVybjtcclxuXHJcbiAgICBmdW5jdGlvbiBzaG93UHJldmlldyhmaWxlKSB7XHJcbiAgICAgIGlmIChmaWxlICYmIGZpbGUudHlwZSA9PT0gJ2FwcGxpY2F0aW9uL3BkZicpIHtcclxuICAgICAgICBjb25zdCBmaWxlVVJMID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcclxuICAgICAgICBwcmV2aWV3Q29udGFpbmVyLmlubmVySFRNTCA9IGA8aWZyYW1lIHNyYz1cIiR7ZmlsZVVSTH1cIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCI+PC9pZnJhbWU+YDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwcmV2aWV3Q29udGFpbmVyLmlubmVySFRNTCA9IGA8cCBjbGFzcz1cInRleHQtZGFuZ2VyIHRleHQtY2VudGVyXCI+SW52YWxpZCBmaWxlLiBQbGVhc2UgdXBsb2FkIGEgLnBkZjwvcD5gO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmlsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgICAgc2hvd1ByZXZpZXcoZmlsZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkcm9wWm9uZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZHJvcFpvbmUuY2xhc3NMaXN0LmFkZCgnYmctbGlnaHQnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRyb3Bab25lLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsICgpID0+IHtcclxuICAgICAgZHJvcFpvbmUuY2xhc3NMaXN0LnJlbW92ZSgnYmctbGlnaHQnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRyb3Bab25lLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGRyb3Bab25lLmNsYXNzTGlzdC5yZW1vdmUoJ2JnLWxpZ2h0Jyk7XHJcbiAgICAgIGNvbnN0IGZpbGUgPSBlLmRhdGFUcmFuc2Zlci5maWxlc1swXTtcclxuICAgICAgZmlsZUlucHV0LmZpbGVzID0gZS5kYXRhVHJhbnNmZXIuZmlsZXM7XHJcbiAgICAgIHNob3dQcmV2aWV3KGZpbGUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImY2NmJkMjkzY2VkOWM1OWU2YjU2XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9