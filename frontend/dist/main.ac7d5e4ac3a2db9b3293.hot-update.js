"use strict";
self["webpackHotUpdatefrontend"]("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _script_app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script/app.js */ "./src/script/app.js");
// index.js




document.addEventListener('DOMContentLoaded', () => {
  (0,_script_app_js__WEBPACK_IMPORTED_MODULE_1__.initApp)();
});


/***/ }),

/***/ "./src/script/app.js":
/*!***************************!*\
  !*** ./src/script/app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initApp: () => (/* binding */ initApp)
/* harmony export */ });
/* harmony import */ var _routes_routes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes/routes.js */ "./src/script/routes/routes.js");
// src/script/app.js


function renderPage(path) {
  const presenter = _routes_routes_js__WEBPACK_IMPORTED_MODULE_0__["default"][path];
  if (presenter) {
    presenter.init();
  } else {
    document.getElementById('app').innerHTML = '<h1>404 Page Not Found</h1>';
  }
}

function initApp() {
  renderPage(window.location.pathname);

  document.querySelectorAll('nav button').forEach((btn) => {
    btn.addEventListener('click', () => {
      let path = '/';
      switch (btn.dataset.page) {
        case 'login': path = '/login'; break;
        case 'register': path = '/register'; break;
        case 'landing': path = '/'; break;
        case 'main': path = '/main'; break;
      }
      history.pushState({}, '', path);
      renderPage(path);
    });
  });

  window.addEventListener('popstate', () => {
    renderPage(window.location.pathname);
  });
}


/***/ }),

/***/ "./src/script/presenters/landing-presenter.js":
/*!****************************************************!*\
  !*** ./src/script/presenters/landing-presenter.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LandingPresenter)
/* harmony export */ });
/* harmony import */ var _views_landing_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/landing-view.js */ "./src/script/views/landing-view.js");
// src/script/presenter/landing-presenter.js


class LandingPresenter {
  constructor(appContainer) {
    this.app = appContainer;
  }

  init() {
    this.render();
  }

  render() {
    this.app.innerHTML = _views_landing_view_js__WEBPACK_IMPORTED_MODULE_0__.renderLanding();
  }
}


/***/ }),

/***/ "./src/script/presenters/login-presenter.js":
/*!**************************************************!*\
  !*** ./src/script/presenters/login-presenter.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoginPresenter)
/* harmony export */ });
/* harmony import */ var _views_login_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/login-view.js */ "./src/script/views/login-view.js");
// src/script/presenter/login-presenter.js


class LoginPresenter {
  constructor(appContainer) {
    this.app = appContainer;
    this.errorMessage = '';
  }

  init() {
    this.render();
  }

  render() {
    this.app.innerHTML = _views_login_view_js__WEBPACK_IMPORTED_MODULE_0__.renderLogin(this.errorMessage);
    _views_login_view_js__WEBPACK_IMPORTED_MODULE_0__.bindLoginFormSubmit(this.handleLogin.bind(this));
  }

  handleLogin(data) {
    // Simulasi autentikasi (ubah sesuai backend/logic asli)
    if (data.username === 'user' && data.password === 'password') {
      // Simpan user ke session/local storage (sesuaikan)
      localStorage.setItem('currentUser', JSON.stringify({ username: data.username }));

      // Redirect ke main page
      history.pushState({}, '', '/main');
      window.dispatchEvent(new PopStateEvent('popstate'));
    } else {
      this.errorMessage = 'Invalid username or password';
      this.render();
    }
  }
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
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../views/main-page.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
    this.app.innerHTML = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../views/main-page.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.handleLogout.bind(this), this.errorMessage);
    Object(function webpackMissingModule() { var e = new Error("Cannot find module '../views/main-page.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.handleLogout.bind(this));
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

/***/ "./src/script/presenters/register-presenter.js":
/*!*****************************************************!*\
  !*** ./src/script/presenters/register-presenter.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RegisterPresenter)
/* harmony export */ });
/* harmony import */ var _views_register_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/register-view.js */ "./src/script/views/register-view.js");
// src/script/presenter/register-presenter.js


class RegisterPresenter {
  constructor(appContainer) {
    this.app = appContainer;
    this.errorMessage = '';
  }

  init() {
    this.render();
  }

  render() {
    this.app.innerHTML = _views_register_view_js__WEBPACK_IMPORTED_MODULE_0__.renderRegister(this.errorMessage);
    _views_register_view_js__WEBPACK_IMPORTED_MODULE_0__.bindRegisterFormSubmit(this.handleRegister.bind(this));
  }

  handleRegister(data) {
    if (data.password !== data.passwordConfirm) {
      this.errorMessage = 'Passwords do not match';
      this.render();
      return;
    }

    // Proses registrasi (contoh simulasi sukses)
    alert(`User ${data.username} registered successfully!`);

    // Redirect ke halaman login setelah berhasil
    history.pushState({}, '', '/login');
    window.dispatchEvent(new PopStateEvent('popstate'));
  }
}


/***/ }),

/***/ "./src/script/routes/routes.js":
/*!*************************************!*\
  !*** ./src/script/routes/routes.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _presenters_landing_presenter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../presenters/landing-presenter.js */ "./src/script/presenters/landing-presenter.js");
/* harmony import */ var _presenters_login_presenter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../presenters/login-presenter.js */ "./src/script/presenters/login-presenter.js");
/* harmony import */ var _presenters_register_presenter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../presenters/register-presenter.js */ "./src/script/presenters/register-presenter.js");
/* harmony import */ var _presenters_main_presenter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../presenters/main-presenter.js */ "./src/script/presenters/main-presenter.js");
// src/script/routes/routes.js





const app = document.getElementById('app');

const routes = {
  '/': new _presenters_landing_presenter_js__WEBPACK_IMPORTED_MODULE_0__["default"](app),
  '/landing': new _presenters_landing_presenter_js__WEBPACK_IMPORTED_MODULE_0__["default"](app),
  '/login': new _presenters_login_presenter_js__WEBPACK_IMPORTED_MODULE_1__["default"](app),
  '/register': new _presenters_register_presenter_js__WEBPACK_IMPORTED_MODULE_2__["default"](app),
  '/main': new _presenters_main_presenter_js__WEBPACK_IMPORTED_MODULE_3__["default"](app),
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);


/***/ }),

/***/ "./src/script/views/landing-view.js":
/*!******************************************!*\
  !*** ./src/script/views/landing-view.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderLanding: () => (/* binding */ renderLanding)
/* harmony export */ });
// src/script/views/landing-view.js

function renderLanding() {
  return `
    <h1>Welcome to CoReer</h1>
    <p>This is the landing page. Please login or register to unlock full features.</p>
  `;
}


/***/ }),

/***/ "./src/script/views/login-view.js":
/*!****************************************!*\
  !*** ./src/script/views/login-view.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bindLoginFormSubmit: () => (/* binding */ bindLoginFormSubmit),
/* harmony export */   renderLogin: () => (/* binding */ renderLogin)
/* harmony export */ });
// src/script/views/login-view.js

function renderLogin(errorMessage = '') {
  return `
    <h2>Login</h2>
    <form id="login-form">
      <input type="text" name="username" placeholder="Username" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
    <p class="error-message">${errorMessage}</p>
  `;
}

function bindLoginFormSubmit(callback) {
  const form = document.getElementById('login-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = {
      username: form.username.value.trim(),
      password: form.password.value,
    };
    callback(data);
  });
}



/***/ }),

/***/ "./src/script/views/register-view.js":
/*!*******************************************!*\
  !*** ./src/script/views/register-view.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bindRegisterFormSubmit: () => (/* binding */ bindRegisterFormSubmit),
/* harmony export */   renderRegister: () => (/* binding */ renderRegister)
/* harmony export */ });
// src/script/views/register-view.js
function renderRegister(errorMessage = '') {
  return `
    <h2>Register</h2>
    <form id="register-form">
      <input type="text" name="username" placeholder="Username" required />
      <input type="password" name="password" placeholder="Password" required />
      <input type="password" name="passwordConfirm" placeholder="Confirm Password" required />
      <button type="submit">Register</button>
    </form>
    <p class="error-message">${errorMessage}</p>
  `;
}

// Fungsi untuk bind event submit dengan callback dari Presenter
function bindRegisterFormSubmit(callback) {
  const form = document.getElementById('register-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = {
      username: form.username.value.trim(),
      password: form.password.value,
      passwordConfirm: form.passwordConfirm.value,
    };
    callback(data);
  });
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4a351946270d35b8604e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hYzdkNWU0YWMzYTJkYjliMzI5My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZCO0FBQ2E7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsRUFBRSx1REFBTztBQUNULENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQRDtBQUN3QztBQUN4QztBQUNBO0FBQ0Esb0JBQW9CLHlEQUFNO0FBQzFCO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2Qyw2Q0FBNkM7QUFDN0Msb0NBQW9DO0FBQ3BDLHFDQUFxQztBQUNyQztBQUNBLDBCQUEwQjtBQUMxQjtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7O0FDaENBO0FBQ3dEO0FBQ3hEO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsaUVBQXlCO0FBQ2xEO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNvRDtBQUNwRDtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNkRBQXFCO0FBQzlDLElBQUkscUVBQTZCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCx5QkFBeUI7QUFDcEY7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaENBO0FBQ2tEO0FBQ2xEO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixvSkFBdUI7QUFDaEQsSUFBSSxvSkFBeUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQzBEO0FBQzFEO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixtRUFBMkI7QUFDcEQsSUFBSSwyRUFBbUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsZUFBZTtBQUNqQztBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUNrRTtBQUNKO0FBQ007QUFDUjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsd0VBQWdCO0FBQzNCLGtCQUFrQix3RUFBZ0I7QUFDbEMsZ0JBQWdCLHNFQUFjO0FBQzlCLG1CQUFtQix5RUFBaUI7QUFDcEMsZUFBZSxxRUFBYTtBQUM1QjtBQUNBO0FBQ0EsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNoQnRCO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixhQUFhO0FBQzVDO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsYUFBYTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7OztVQzNCQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3NjcmlwdC9hcHAuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvc2NyaXB0L3ByZXNlbnRlcnMvbGFuZGluZy1wcmVzZW50ZXIuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvc2NyaXB0L3ByZXNlbnRlcnMvbG9naW4tcHJlc2VudGVyLmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3NjcmlwdC9wcmVzZW50ZXJzL21haW4tcHJlc2VudGVyLmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3NjcmlwdC9wcmVzZW50ZXJzL3JlZ2lzdGVyLXByZXNlbnRlci5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9zY3JpcHQvcm91dGVzL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9zY3JpcHQvdmlld3MvbGFuZGluZy12aWV3LmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3NjcmlwdC92aWV3cy9sb2dpbi12aWV3LmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3NjcmlwdC92aWV3cy9yZWdpc3Rlci12aWV3LmpzIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbmRleC5qc1xyXG5pbXBvcnQgJy4vc3R5bGVzL3N0eWxlcy5jc3MnO1xyXG5pbXBvcnQgeyBpbml0QXBwIH0gZnJvbSAnLi9zY3JpcHQvYXBwLmpzJztcclxuXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gIGluaXRBcHAoKTtcclxufSk7XHJcbiIsIi8vIHNyYy9zY3JpcHQvYXBwLmpzXHJcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMvcm91dGVzLmpzJztcclxuXHJcbmZ1bmN0aW9uIHJlbmRlclBhZ2UocGF0aCkge1xyXG4gIGNvbnN0IHByZXNlbnRlciA9IHJvdXRlc1twYXRoXTtcclxuICBpZiAocHJlc2VudGVyKSB7XHJcbiAgICBwcmVzZW50ZXIuaW5pdCgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykuaW5uZXJIVE1MID0gJzxoMT40MDQgUGFnZSBOb3QgRm91bmQ8L2gxPic7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdEFwcCgpIHtcclxuICByZW5kZXJQYWdlKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XHJcblxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ25hdiBidXR0b24nKS5mb3JFYWNoKChidG4pID0+IHtcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgbGV0IHBhdGggPSAnLyc7XHJcbiAgICAgIHN3aXRjaCAoYnRuLmRhdGFzZXQucGFnZSkge1xyXG4gICAgICAgIGNhc2UgJ2xvZ2luJzogcGF0aCA9ICcvbG9naW4nOyBicmVhaztcclxuICAgICAgICBjYXNlICdyZWdpc3Rlcic6IHBhdGggPSAnL3JlZ2lzdGVyJzsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbGFuZGluZyc6IHBhdGggPSAnLyc7IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ21haW4nOiBwYXRoID0gJy9tYWluJzsgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgaGlzdG9yeS5wdXNoU3RhdGUoe30sICcnLCBwYXRoKTtcclxuICAgICAgcmVuZGVyUGFnZShwYXRoKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCAoKSA9PiB7XHJcbiAgICByZW5kZXJQYWdlKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XHJcbiAgfSk7XHJcbn1cclxuIiwiLy8gc3JjL3NjcmlwdC9wcmVzZW50ZXIvbGFuZGluZy1wcmVzZW50ZXIuanNcclxuaW1wb3J0ICogYXMgTGFuZGluZ1ZpZXcgZnJvbSAnLi4vdmlld3MvbGFuZGluZy12aWV3LmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhbmRpbmdQcmVzZW50ZXIge1xyXG4gIGNvbnN0cnVjdG9yKGFwcENvbnRhaW5lcikge1xyXG4gICAgdGhpcy5hcHAgPSBhcHBDb250YWluZXI7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHRoaXMuYXBwLmlubmVySFRNTCA9IExhbmRpbmdWaWV3LnJlbmRlckxhbmRpbmcoKTtcclxuICB9XHJcbn1cclxuIiwiLy8gc3JjL3NjcmlwdC9wcmVzZW50ZXIvbG9naW4tcHJlc2VudGVyLmpzXHJcbmltcG9ydCAqIGFzIExvZ2luVmlldyBmcm9tICcuLi92aWV3cy9sb2dpbi12aWV3LmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luUHJlc2VudGVyIHtcclxuICBjb25zdHJ1Y3RvcihhcHBDb250YWluZXIpIHtcclxuICAgIHRoaXMuYXBwID0gYXBwQ29udGFpbmVyO1xyXG4gICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgdGhpcy5hcHAuaW5uZXJIVE1MID0gTG9naW5WaWV3LnJlbmRlckxvZ2luKHRoaXMuZXJyb3JNZXNzYWdlKTtcclxuICAgIExvZ2luVmlldy5iaW5kTG9naW5Gb3JtU3VibWl0KHRoaXMuaGFuZGxlTG9naW4uYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVMb2dpbihkYXRhKSB7XHJcbiAgICAvLyBTaW11bGFzaSBhdXRlbnRpa2FzaSAodWJhaCBzZXN1YWkgYmFja2VuZC9sb2dpYyBhc2xpKVxyXG4gICAgaWYgKGRhdGEudXNlcm5hbWUgPT09ICd1c2VyJyAmJiBkYXRhLnBhc3N3b3JkID09PSAncGFzc3dvcmQnKSB7XHJcbiAgICAgIC8vIFNpbXBhbiB1c2VyIGtlIHNlc3Npb24vbG9jYWwgc3RvcmFnZSAoc2VzdWFpa2FuKVxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudFVzZXInLCBKU09OLnN0cmluZ2lmeSh7IHVzZXJuYW1lOiBkYXRhLnVzZXJuYW1lIH0pKTtcclxuXHJcbiAgICAgIC8vIFJlZGlyZWN0IGtlIG1haW4gcGFnZVxyXG4gICAgICBoaXN0b3J5LnB1c2hTdGF0ZSh7fSwgJycsICcvbWFpbicpO1xyXG4gICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgUG9wU3RhdGVFdmVudCgncG9wc3RhdGUnKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICdJbnZhbGlkIHVzZXJuYW1lIG9yIHBhc3N3b3JkJztcclxuICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLy8gc3JjL3NjcmlwdC9wcmVzZW50ZXIvbWFpbi1wcmVzZW50ZXIuanNcclxuaW1wb3J0ICogYXMgTWFpblZpZXcgZnJvbSAnLi4vdmlld3MvbWFpbi1wYWdlLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5QcmVzZW50ZXIge1xyXG4gIGNvbnN0cnVjdG9yKGFwcENvbnRhaW5lcikge1xyXG4gICAgdGhpcy5hcHAgPSBhcHBDb250YWluZXI7XHJcbiAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICB0aGlzLmFwcC5pbm5lckhUTUwgPSBNYWluVmlldy5yZW5kZXJNYWluUGFnZSh0aGlzLmhhbmRsZUxvZ291dC5iaW5kKHRoaXMpLCB0aGlzLmVycm9yTWVzc2FnZSk7XHJcbiAgICBNYWluVmlldy5iaW5kTG9nb3V0QnV0dG9uKHRoaXMuaGFuZGxlTG9nb3V0LmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlTG9nb3V0KCkge1xyXG4gICAgLy8gSGFwdXMgc2Vzc2lvbi9sb2NhbCBzdG9yYWdlIHVzZXJcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjdXJyZW50VXNlcicpO1xyXG5cclxuICAgIC8vIFJlZGlyZWN0IGtlIGxhbmRpbmcgcGFnZVxyXG4gICAgaGlzdG9yeS5wdXNoU3RhdGUoe30sICcnLCAnLycpO1xyXG4gICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IFBvcFN0YXRlRXZlbnQoJ3BvcHN0YXRlJykpO1xyXG4gIH1cclxufVxyXG4iLCIvLyBzcmMvc2NyaXB0L3ByZXNlbnRlci9yZWdpc3Rlci1wcmVzZW50ZXIuanNcclxuaW1wb3J0ICogYXMgUmVnaXN0ZXJWaWV3IGZyb20gJy4uL3ZpZXdzL3JlZ2lzdGVyLXZpZXcuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVnaXN0ZXJQcmVzZW50ZXIge1xyXG4gIGNvbnN0cnVjdG9yKGFwcENvbnRhaW5lcikge1xyXG4gICAgdGhpcy5hcHAgPSBhcHBDb250YWluZXI7XHJcbiAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICB0aGlzLmFwcC5pbm5lckhUTUwgPSBSZWdpc3RlclZpZXcucmVuZGVyUmVnaXN0ZXIodGhpcy5lcnJvck1lc3NhZ2UpO1xyXG4gICAgUmVnaXN0ZXJWaWV3LmJpbmRSZWdpc3RlckZvcm1TdWJtaXQodGhpcy5oYW5kbGVSZWdpc3Rlci5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVJlZ2lzdGVyKGRhdGEpIHtcclxuICAgIGlmIChkYXRhLnBhc3N3b3JkICE9PSBkYXRhLnBhc3N3b3JkQ29uZmlybSkge1xyXG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICdQYXNzd29yZHMgZG8gbm90IG1hdGNoJztcclxuICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFByb3NlcyByZWdpc3RyYXNpIChjb250b2ggc2ltdWxhc2kgc3Vrc2VzKVxyXG4gICAgYWxlcnQoYFVzZXIgJHtkYXRhLnVzZXJuYW1lfSByZWdpc3RlcmVkIHN1Y2Nlc3NmdWxseSFgKTtcclxuXHJcbiAgICAvLyBSZWRpcmVjdCBrZSBoYWxhbWFuIGxvZ2luIHNldGVsYWggYmVyaGFzaWxcclxuICAgIGhpc3RvcnkucHVzaFN0YXRlKHt9LCAnJywgJy9sb2dpbicpO1xyXG4gICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IFBvcFN0YXRlRXZlbnQoJ3BvcHN0YXRlJykpO1xyXG4gIH1cclxufVxyXG4iLCIvLyBzcmMvc2NyaXB0L3JvdXRlcy9yb3V0ZXMuanNcclxuaW1wb3J0IExhbmRpbmdQcmVzZW50ZXIgZnJvbSAnLi4vcHJlc2VudGVycy9sYW5kaW5nLXByZXNlbnRlci5qcyc7XHJcbmltcG9ydCBMb2dpblByZXNlbnRlciBmcm9tICcuLi9wcmVzZW50ZXJzL2xvZ2luLXByZXNlbnRlci5qcyc7XHJcbmltcG9ydCBSZWdpc3RlclByZXNlbnRlciBmcm9tICcuLi9wcmVzZW50ZXJzL3JlZ2lzdGVyLXByZXNlbnRlci5qcyc7XHJcbmltcG9ydCBNYWluUHJlc2VudGVyIGZyb20gJy4uL3ByZXNlbnRlcnMvbWFpbi1wcmVzZW50ZXIuanMnO1xyXG5cclxuY29uc3QgYXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xyXG5cclxuY29uc3Qgcm91dGVzID0ge1xyXG4gICcvJzogbmV3IExhbmRpbmdQcmVzZW50ZXIoYXBwKSxcclxuICAnL2xhbmRpbmcnOiBuZXcgTGFuZGluZ1ByZXNlbnRlcihhcHApLFxyXG4gICcvbG9naW4nOiBuZXcgTG9naW5QcmVzZW50ZXIoYXBwKSxcclxuICAnL3JlZ2lzdGVyJzogbmV3IFJlZ2lzdGVyUHJlc2VudGVyKGFwcCksXHJcbiAgJy9tYWluJzogbmV3IE1haW5QcmVzZW50ZXIoYXBwKSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcztcclxuIiwiLy8gc3JjL3NjcmlwdC92aWV3cy9sYW5kaW5nLXZpZXcuanNcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJMYW5kaW5nKCkge1xyXG4gIHJldHVybiBgXHJcbiAgICA8aDE+V2VsY29tZSB0byBDb1JlZXI8L2gxPlxyXG4gICAgPHA+VGhpcyBpcyB0aGUgbGFuZGluZyBwYWdlLiBQbGVhc2UgbG9naW4gb3IgcmVnaXN0ZXIgdG8gdW5sb2NrIGZ1bGwgZmVhdHVyZXMuPC9wPlxyXG4gIGA7XHJcbn1cclxuIiwiLy8gc3JjL3NjcmlwdC92aWV3cy9sb2dpbi12aWV3LmpzXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyTG9naW4oZXJyb3JNZXNzYWdlID0gJycpIHtcclxuICByZXR1cm4gYFxyXG4gICAgPGgyPkxvZ2luPC9oMj5cclxuICAgIDxmb3JtIGlkPVwibG9naW4tZm9ybVwiPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlcm5hbWVcIiBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCIgcmVxdWlyZWQgLz5cclxuICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiByZXF1aXJlZCAvPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5Mb2dpbjwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG4gICAgPHAgY2xhc3M9XCJlcnJvci1tZXNzYWdlXCI+JHtlcnJvck1lc3NhZ2V9PC9wPlxyXG4gIGA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBiaW5kTG9naW5Gb3JtU3VibWl0KGNhbGxiYWNrKSB7XHJcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi1mb3JtJyk7XHJcbiAgaWYgKCFmb3JtKSByZXR1cm47XHJcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgdXNlcm5hbWU6IGZvcm0udXNlcm5hbWUudmFsdWUudHJpbSgpLFxyXG4gICAgICBwYXNzd29yZDogZm9ybS5wYXNzd29yZC52YWx1ZSxcclxuICAgIH07XHJcbiAgICBjYWxsYmFjayhkYXRhKTtcclxuICB9KTtcclxufVxyXG5cclxuIiwiLy8gc3JjL3NjcmlwdC92aWV3cy9yZWdpc3Rlci12aWV3LmpzXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJSZWdpc3RlcihlcnJvck1lc3NhZ2UgPSAnJykge1xyXG4gIHJldHVybiBgXHJcbiAgICA8aDI+UmVnaXN0ZXI8L2gyPlxyXG4gICAgPGZvcm0gaWQ9XCJyZWdpc3Rlci1mb3JtXCI+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VybmFtZVwiIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIiByZXF1aXJlZCAvPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIHJlcXVpcmVkIC8+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRDb25maXJtXCIgcGxhY2Vob2xkZXI9XCJDb25maXJtIFBhc3N3b3JkXCIgcmVxdWlyZWQgLz5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+UmVnaXN0ZXI8L2J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuICAgIDxwIGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiPiR7ZXJyb3JNZXNzYWdlfTwvcD5cclxuICBgO1xyXG59XHJcblxyXG4vLyBGdW5nc2kgdW50dWsgYmluZCBldmVudCBzdWJtaXQgZGVuZ2FuIGNhbGxiYWNrIGRhcmkgUHJlc2VudGVyXHJcbmV4cG9ydCBmdW5jdGlvbiBiaW5kUmVnaXN0ZXJGb3JtU3VibWl0KGNhbGxiYWNrKSB7XHJcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWdpc3Rlci1mb3JtJyk7XHJcbiAgaWYgKCFmb3JtKSByZXR1cm47XHJcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgdXNlcm5hbWU6IGZvcm0udXNlcm5hbWUudmFsdWUudHJpbSgpLFxyXG4gICAgICBwYXNzd29yZDogZm9ybS5wYXNzd29yZC52YWx1ZSxcclxuICAgICAgcGFzc3dvcmRDb25maXJtOiBmb3JtLnBhc3N3b3JkQ29uZmlybS52YWx1ZSxcclxuICAgIH07XHJcbiAgICBjYWxsYmFjayhkYXRhKTtcclxuICB9KTtcclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0YTM1MTk0NjI3MGQzNWI4NjA0ZVwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==