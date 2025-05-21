"use strict";
self["webpackHotUpdatefrontend"]("main",{

/***/ "./src/script/models/auth-model.js":
/*!*****************************************!*\
  !*** ./src/script/models/auth-model.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   login: () => (/* binding */ login),
/* harmony export */   register: () => (/* binding */ register)
/* harmony export */ });
// src/script/models/auth-model.js
const API_BASE = 'http://localhost:3000';

async function login(username, password) {
  const res = await fetch(`${API_BASE}/login`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) throw new Error('Login failed');

  return res.json();
}

async function register(username, password) {
  const res = await fetch(`${API_BASE}/register`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) throw new Error('Register failed');

  return res.json();
}


/***/ }),

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
/******/ 	__webpack_require__.h = () => ("e67fd23ecb1e62deb2ab")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi44NjAzYWFmNGZlZDRkNzg3YWI5MC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ087QUFDUCw2QkFBNkIsU0FBUztBQUN0QztBQUNBLGNBQWMsbUNBQW1DO0FBQ2pELDJCQUEyQixvQkFBb0I7QUFDL0MsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsNkJBQTZCLFNBQVM7QUFDdEM7QUFDQSxjQUFjLG1DQUFtQztBQUNqRCwyQkFBMkIsb0JBQW9CO0FBQy9DLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ2tEO0FBQ2xEO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwrREFBdUI7QUFDaEQsSUFBSSxpRUFBeUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUN5RDtBQUN6RDtBQUNPO0FBQ1AsZUFBZSxxRUFBYztBQUM3QjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsK0JBQStCO0FBQy9DO0FBQ0E7QUFDQSx1Q0FBdUMsMEJBQTBCLEVBQUU7QUFDbkU7QUFDQTtBQUNBO0FBQ0EsV0FBVyw4S0FBOEs7QUFDekw7QUFDQTtBQUNBLCtCQUErQixhQUFhO0FBQzVDO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7O1VDN0JBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvc2NyaXB0L21vZGVscy9hdXRoLW1vZGVsLmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3NjcmlwdC9wcmVzZW50ZXJzL21haW4tcHJlc2VudGVyLmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3NjcmlwdC92aWV3cy9tYWluLXZpZXcuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9zY3JpcHQvbW9kZWxzL2F1dGgtbW9kZWwuanNcclxuY29uc3QgQVBJX0JBU0UgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpIHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtBUElfQkFTRX0vbG9naW5gLCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pLFxyXG4gIH0pO1xyXG5cclxuICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKCdMb2dpbiBmYWlsZWQnKTtcclxuXHJcbiAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWdpc3Rlcih1c2VybmFtZSwgcGFzc3dvcmQpIHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtBUElfQkFTRX0vcmVnaXN0ZXJgLCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pLFxyXG4gIH0pO1xyXG5cclxuICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKCdSZWdpc3RlciBmYWlsZWQnKTtcclxuXHJcbiAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbn1cclxuIiwiLy8gc3JjL3NjcmlwdC9wcmVzZW50ZXIvbWFpbi1wcmVzZW50ZXIuanNcclxuaW1wb3J0ICogYXMgTWFpblZpZXcgZnJvbSAnLi4vdmlld3MvbWFpbi12aWV3LmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5QcmVzZW50ZXIge1xyXG4gIGNvbnN0cnVjdG9yKGFwcENvbnRhaW5lcikge1xyXG4gICAgdGhpcy5hcHAgPSBhcHBDb250YWluZXI7XHJcbiAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICB0aGlzLmFwcC5pbm5lckhUTUwgPSBNYWluVmlldy5yZW5kZXJNYWluUGFnZSh0aGlzLmhhbmRsZUxvZ291dC5iaW5kKHRoaXMpLCB0aGlzLmVycm9yTWVzc2FnZSk7XHJcbiAgICBNYWluVmlldy5iaW5kTG9nb3V0QnV0dG9uKHRoaXMuaGFuZGxlTG9nb3V0LmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlTG9nb3V0KCkge1xyXG4gICAgLy8gSGFwdXMgc2Vzc2lvbi9sb2NhbCBzdG9yYWdlIHVzZXJcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjdXJyZW50VXNlcicpO1xyXG5cclxuICAgIC8vIFJlZGlyZWN0IGtlIGxhbmRpbmcgcGFnZVxyXG4gICAgaGlzdG9yeS5wdXNoU3RhdGUoe30sICcnLCAnLycpO1xyXG4gICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IFBvcFN0YXRlRXZlbnQoJ3BvcHN0YXRlJykpO1xyXG4gIH1cclxufVxyXG4iLCIvLyBzcmMvc2NyaXB0L3ZpZXdzL21haW4tdmlldy5qc1xyXG5pbXBvcnQgeyBnZXRDdXJyZW50VXNlciB9IGZyb20gJy4uL21vZGVscy9hdXRoLW1vZGVsLmpzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJNYWluUGFnZShvbkxvZ291dCwgZXJyb3JNZXNzYWdlID0gJycpIHtcclxuICBjb25zdCB1c2VyID0gZ2V0Q3VycmVudFVzZXIoKTtcclxuXHJcbiAgcmV0dXJuIGBcclxuICAgIDxoMT5XZWxjb21lIHRvIHRoZSBMYW5kaW5nIFBhZ2U8L2gxPlxyXG4gICAgPHA+SGVsbG8sICR7dXNlciA/IHVzZXIudXNlcm5hbWUgOiAnR3Vlc3QnfSE8L3A+XHJcblxyXG4gICAgPGRpdj5cclxuICAgICAgPGJ1dHRvbiBpZD1cImxvZ291dC1idG5cIiBzdHlsZT1cIiR7dXNlciA/ICcnIDogJ2Rpc3BsYXk6bm9uZTsnfVwiPkxvZ291dDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdj5cclxuICAgICAgPHA+JHt1c2VyID8gJ1lvdSBjYW4gdXBsb2FkIGFuZCBhbmFseXplIHlvdXIgQ1YsIHNhdmUgaGlzdG9yeSwgZ2V0IHBlcnNvbmFsaXplZCByZWNvbW1lbmRhdGlvbnMsIG5vdGlmaWNhdGlvbnMsIGFuZCBjYXJlZXIgcHJlZmVyZW5jZXMuJyA6ICdQbGVhc2UgbG9naW4gdG8gdW5sb2NrIGZ1bGwgZmVhdHVyZXMuJ308L3A+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8cCBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIj4ke2Vycm9yTWVzc2FnZX08L3A+XHJcbiAgYDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJpbmRMb2dvdXRCdXR0b24oY2FsbGJhY2spIHtcclxuICBjb25zdCBsb2dvdXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nb3V0LWJ0bicpO1xyXG4gIGlmIChsb2dvdXRCdG4pIHtcclxuICAgIGxvZ291dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgY2FsbGJhY2soKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlNjdmZDIzZWNiMWU2MmRlYjJhYlwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==