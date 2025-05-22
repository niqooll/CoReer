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
/******/ 	__webpack_require__.h = () => ("6dcf12b277b9c8344081")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zMzJkYjMyNDhiNmY5MGI0M2Y0Yy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDa0Q7QUFDbEQ7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLCtEQUF1QjtBQUNoRCxJQUFJLGlFQUF5QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ3lEO0FBQ3pEO0FBQ087QUFDUCxlQUFlLHFFQUFjO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwrQkFBK0I7QUFDL0M7QUFDQTtBQUNBLHVDQUF1QywwQkFBMEIsRUFBRTtBQUNuRTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDhLQUE4SztBQUN6TDtBQUNBO0FBQ0EsK0JBQStCLGFBQWE7QUFDNUM7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7VUM3QkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9zY3JpcHQvcHJlc2VudGVycy9tYWluLXByZXNlbnRlci5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9zY3JpcHQvdmlld3MvbWFpbi12aWV3LmpzIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvc2NyaXB0L3ByZXNlbnRlci9tYWluLXByZXNlbnRlci5qc1xyXG5pbXBvcnQgKiBhcyBNYWluVmlldyBmcm9tICcuLi92aWV3cy9tYWluLXZpZXcuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpblByZXNlbnRlciB7XHJcbiAgY29uc3RydWN0b3IoYXBwQ29udGFpbmVyKSB7XHJcbiAgICB0aGlzLmFwcCA9IGFwcENvbnRhaW5lcjtcclxuICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHRoaXMuYXBwLmlubmVySFRNTCA9IE1haW5WaWV3LnJlbmRlck1haW5QYWdlKHRoaXMuaGFuZGxlTG9nb3V0LmJpbmQodGhpcyksIHRoaXMuZXJyb3JNZXNzYWdlKTtcclxuICAgIE1haW5WaWV3LmJpbmRMb2dvdXRCdXR0b24odGhpcy5oYW5kbGVMb2dvdXQuYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVMb2dvdXQoKSB7XHJcbiAgICAvLyBIYXB1cyBzZXNzaW9uL2xvY2FsIHN0b3JhZ2UgdXNlclxyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2N1cnJlbnRVc2VyJyk7XHJcblxyXG4gICAgLy8gUmVkaXJlY3Qga2UgbGFuZGluZyBwYWdlXHJcbiAgICBoaXN0b3J5LnB1c2hTdGF0ZSh7fSwgJycsICcvJyk7XHJcbiAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgUG9wU3RhdGVFdmVudCgncG9wc3RhdGUnKSk7XHJcbiAgfVxyXG59XHJcbiIsIi8vIHNyYy9zY3JpcHQvdmlld3MvbWFpbi12aWV3LmpzXHJcbmltcG9ydCB7IGdldEN1cnJlbnRVc2VyIH0gZnJvbSAnLi4vbW9kZWxzL2F1dGgtbW9kZWwuanMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlck1haW5QYWdlKG9uTG9nb3V0LCBlcnJvck1lc3NhZ2UgPSAnJykge1xyXG4gIGNvbnN0IHVzZXIgPSBnZXRDdXJyZW50VXNlcigpO1xyXG5cclxuICByZXR1cm4gYFxyXG4gICAgPGgxPldlbGNvbWUgdG8gdGhlIExhbmRpbmcgUGFnZTwvaDE+XHJcbiAgICA8cD5IZWxsbywgJHt1c2VyID8gdXNlci51c2VybmFtZSA6ICdHdWVzdCd9ITwvcD5cclxuXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8YnV0dG9uIGlkPVwibG9nb3V0LWJ0blwiIHN0eWxlPVwiJHt1c2VyID8gJycgOiAnZGlzcGxheTpub25lOyd9XCI+TG9nb3V0PC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8cD4ke3VzZXIgPyAnWW91IGNhbiB1cGxvYWQgYW5kIGFuYWx5emUgeW91ciBDViwgc2F2ZSBoaXN0b3J5LCBnZXQgcGVyc29uYWxpemVkIHJlY29tbWVuZGF0aW9ucywgbm90aWZpY2F0aW9ucywgYW5kIGNhcmVlciBwcmVmZXJlbmNlcy4nIDogJ1BsZWFzZSBsb2dpbiB0byB1bmxvY2sgZnVsbCBmZWF0dXJlcy4nfTwvcD5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxwIGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiPiR7ZXJyb3JNZXNzYWdlfTwvcD5cclxuICBgO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYmluZExvZ291dEJ1dHRvbihjYWxsYmFjaykge1xyXG4gIGNvbnN0IGxvZ291dEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dvdXQtYnRuJyk7XHJcbiAgaWYgKGxvZ291dEJ0bikge1xyXG4gICAgbG9nb3V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjYWxsYmFjaygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjZkY2YxMmIyNzdiOWM4MzQ0MDgxXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9