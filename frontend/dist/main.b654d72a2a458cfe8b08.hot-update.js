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


/***/ }),

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
    <h1>Welcome to the Landing Page</h1>
    <p>Hello, ${user ? user.username : 'Guest'}!</p>

    <div>
      <button id="logout-btn" style="${user ? '' : 'display:none;'}">Logout</button>
    </div>

    <div>
      <p>${user ? 'You can upload and analyze your CV, save history, get personalized recommendations, notifications, and career preferences.' : 'Please login to unlock full features.'}</p>
    </div>

    <p class="error-message">${errorMessage}</p>
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
/******/ 	__webpack_require__.h = () => ("ad13ad320c26c8f068a4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iNjU0ZDcyYTJhNDU4Y2ZlOGIwOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDa0Q7QUFDbEQ7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLCtEQUF1QjtBQUNoRCxJQUFJLGlFQUF5QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxRQUFRO0FBQzNELE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xFQTtBQUN5RDtBQUN6RDtBQUNPO0FBQ1AsZUFBZSxxRUFBYztBQUM3QjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsK0JBQStCO0FBQy9DO0FBQ0E7QUFDQSx1Q0FBdUMsMEJBQTBCLEVBQUU7QUFDbkU7QUFDQTtBQUNBO0FBQ0EsV0FBVyw4S0FBOEs7QUFDekw7QUFDQTtBQUNBLCtCQUErQixhQUFhO0FBQzVDO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7O1VDN0JBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvc2NyaXB0L3ByZXNlbnRlcnMvbWFpbi1wcmVzZW50ZXIuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvc2NyaXB0L3ZpZXdzL21haW4tdmlldy5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL3NjcmlwdC9wcmVzZW50ZXIvbWFpbi1wcmVzZW50ZXIuanNcclxuaW1wb3J0ICogYXMgTWFpblZpZXcgZnJvbSAnLi4vdmlld3MvbWFpbi12aWV3LmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5QcmVzZW50ZXIge1xyXG4gIGNvbnN0cnVjdG9yKGFwcENvbnRhaW5lcikge1xyXG4gICAgdGhpcy5hcHAgPSBhcHBDb250YWluZXI7XHJcbiAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICB0aGlzLmFwcC5pbm5lckhUTUwgPSBNYWluVmlldy5yZW5kZXJNYWluUGFnZSh0aGlzLmhhbmRsZUxvZ291dC5iaW5kKHRoaXMpLCB0aGlzLmVycm9yTWVzc2FnZSk7XHJcbiAgICBNYWluVmlldy5iaW5kTG9nb3V0QnV0dG9uKHRoaXMuaGFuZGxlTG9nb3V0LmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlTG9nb3V0KCkge1xyXG4gICAgLy8gSGFwdXMgc2Vzc2lvbi9sb2NhbCBzdG9yYWdlIHVzZXJcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjdXJyZW50VXNlcicpO1xyXG5cclxuICAgIC8vIFJlZGlyZWN0IGtlIGxhbmRpbmcgcGFnZVxyXG4gICAgaGlzdG9yeS5wdXNoU3RhdGUoe30sICcnLCAnLycpO1xyXG4gICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IFBvcFN0YXRlRXZlbnQoJ3BvcHN0YXRlJykpO1xyXG4gIH1cclxuXHJcbiAgYmluZFVwbG9hZEFuZFByZXZpZXcoKSB7XHJcbiAgY29uc3QgZmlsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N2LXVwbG9hZCcpO1xyXG4gIGNvbnN0IHByZXZpZXdDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3YtcHJldmlldycpO1xyXG4gIGNvbnN0IGRyb3Bab25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ryb3Atem9uZScpO1xyXG5cclxuICBpZiAoIWZpbGVJbnB1dCB8fCAhcHJldmlld0NvbnRhaW5lciB8fCAhZHJvcFpvbmUpIHJldHVybjtcclxuXHJcbiAgZnVuY3Rpb24gc2hvd1ByZXZpZXcoZmlsZSkge1xyXG4gICAgaWYgKGZpbGUgJiYgZmlsZS50eXBlID09PSAnYXBwbGljYXRpb24vcGRmJykge1xyXG4gICAgICBjb25zdCBmaWxlVVJMID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcclxuICAgICAgcHJldmlld0NvbnRhaW5lci5pbm5lckhUTUwgPSBgPGlmcmFtZSBzcmM9XCIke2ZpbGVVUkx9XCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiPjwvaWZyYW1lPmA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwcmV2aWV3Q29udGFpbmVyLmlubmVySFRNTCA9IGA8cCBjbGFzcz1cInRleHQtZGFuZ2VyIHRleHQtY2VudGVyXCI+SW52YWxpZCBmaWxlLiBQbGVhc2UgdXBsb2FkIGEgLnBkZjwvcD5gO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZmlsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBzaG93UHJldmlldyhmaWxlKTtcclxuICB9KTtcclxuXHJcbiAgZHJvcFpvbmUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZHJvcFpvbmUuY2xhc3NMaXN0LmFkZCgnYmctbGlnaHQnKTtcclxuICB9KTtcclxuXHJcbiAgZHJvcFpvbmUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgKCkgPT4ge1xyXG4gICAgZHJvcFpvbmUuY2xhc3NMaXN0LnJlbW92ZSgnYmctbGlnaHQnKTtcclxuICB9KTtcclxuXHJcbiAgZHJvcFpvbmUuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBkcm9wWm9uZS5jbGFzc0xpc3QucmVtb3ZlKCdiZy1saWdodCcpO1xyXG4gICAgY29uc3QgZmlsZSA9IGUuZGF0YVRyYW5zZmVyLmZpbGVzWzBdO1xyXG4gICAgZmlsZUlucHV0LmZpbGVzID0gZS5kYXRhVHJhbnNmZXIuZmlsZXM7XHJcbiAgICBzaG93UHJldmlldyhmaWxlKTtcclxuICB9KTtcclxufVxyXG5cclxufVxyXG4iLCIvLyBzcmMvc2NyaXB0L3ZpZXdzL21haW4tdmlldy5qc1xyXG5pbXBvcnQgeyBnZXRDdXJyZW50VXNlciB9IGZyb20gJy4uL21vZGVscy9hdXRoLW1vZGVsLmpzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJNYWluUGFnZShvbkxvZ291dCwgZXJyb3JNZXNzYWdlID0gJycpIHtcclxuICBjb25zdCB1c2VyID0gZ2V0Q3VycmVudFVzZXIoKTtcclxuXHJcbiAgcmV0dXJuIGBcclxuICAgIDxoMT5XZWxjb21lIHRvIHRoZSBMYW5kaW5nIFBhZ2U8L2gxPlxyXG4gICAgPHA+SGVsbG8sICR7dXNlciA/IHVzZXIudXNlcm5hbWUgOiAnR3Vlc3QnfSE8L3A+XHJcblxyXG4gICAgPGRpdj5cclxuICAgICAgPGJ1dHRvbiBpZD1cImxvZ291dC1idG5cIiBzdHlsZT1cIiR7dXNlciA/ICcnIDogJ2Rpc3BsYXk6bm9uZTsnfVwiPkxvZ291dDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdj5cclxuICAgICAgPHA+JHt1c2VyID8gJ1lvdSBjYW4gdXBsb2FkIGFuZCBhbmFseXplIHlvdXIgQ1YsIHNhdmUgaGlzdG9yeSwgZ2V0IHBlcnNvbmFsaXplZCByZWNvbW1lbmRhdGlvbnMsIG5vdGlmaWNhdGlvbnMsIGFuZCBjYXJlZXIgcHJlZmVyZW5jZXMuJyA6ICdQbGVhc2UgbG9naW4gdG8gdW5sb2NrIGZ1bGwgZmVhdHVyZXMuJ308L3A+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8cCBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIj4ke2Vycm9yTWVzc2FnZX08L3A+XHJcbiAgYDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJpbmRMb2dvdXRCdXR0b24oY2FsbGJhY2spIHtcclxuICBjb25zdCBsb2dvdXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nb3V0LWJ0bicpO1xyXG4gIGlmIChsb2dvdXRCdG4pIHtcclxuICAgIGxvZ291dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgY2FsbGJhY2soKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJhZDEzYWQzMjBjMjZjOGYwNjhhNFwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==