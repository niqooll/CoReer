"use strict";
self["webpackHotUpdatefrontend"]("main",{

/***/ "./src/presenters/app-presenter.js":
/*!*****************************************!*\
  !*** ./src/presenters/app-presenter.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initApp: () => (/* binding */ initApp)
/* harmony export */ });
/* harmony import */ var _routes_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../routes/routes */ "./src/routes/routes.js");


const app = document.getElementById('app');

function renderPage(path, errorMessage = '') {
  if (_routes_routes__WEBPACK_IMPORTED_MODULE_0__["default"][path]) {
    app.innerHTML = _routes_routes__WEBPACK_IMPORTED_MODULE_0__["default"][path](errorMessage);  // panggil fungsi render dengan parameter error jika perlu
  } else {
    app.innerHTML = '<h1>404 Page Not Found</h1>';
  }
}

function initApp() {
  // render sesuai URL sekarang
  renderPage(window.location.pathname);

  document.querySelectorAll('nav button').forEach(btn => {
    btn.addEventListener('click', () => {
      let path = '/';
      switch (btn.dataset.page) {
        case 'login': path = '/login'; break;
        case 'register': path = '/register'; break;
        case 'landing': path = '/'; break;
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

/***/ "./src/routes/routes.js":
/*!******************************!*\
  !*** ./src/routes/routes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module './views/landing-view.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './views/login-view.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './views/register-view.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// src/routes.js




const routes = {
  '/': () => Object(function webpackMissingModule() { var e = new Error("Cannot find module './views/landing-view.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(),
  '/landing': () => Object(function webpackMissingModule() { var e = new Error("Cannot find module './views/landing-view.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(),
  '/login': () => Object(function webpackMissingModule() { var e = new Error("Cannot find module './views/login-view.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(),
  '/register': () => Object(function webpackMissingModule() { var e = new Error("Cannot find module './views/register-view.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(),
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("cb8b60a2d081e4e84863")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zMWQ1OGFjYjI1ZjZmMTI1MmZiYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxzREFBTTtBQUNaLG9CQUFvQixzREFBTSx1QkFBdUI7QUFDakQsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2Qyw2Q0FBNkM7QUFDN0Msb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNBO0FBQ3dEO0FBQ0o7QUFDTTtBQUMxRDtBQUNBO0FBQ0EsYUFBYSxzSkFBYTtBQUMxQixvQkFBb0Isc0pBQWE7QUFDakMsa0JBQWtCLG9KQUFXO0FBQzdCLHFCQUFxQix1SkFBYztBQUNuQztBQUNBO0FBQ0EsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7VUNadEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wcmVzZW50ZXJzL2FwcC1wcmVzZW50ZXIuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcm91dGVzL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJvdXRlcyBmcm9tICcuLi9yb3V0ZXMvcm91dGVzJztcclxuXHJcbmNvbnN0IGFwcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKTtcclxuXHJcbmZ1bmN0aW9uIHJlbmRlclBhZ2UocGF0aCwgZXJyb3JNZXNzYWdlID0gJycpIHtcclxuICBpZiAocm91dGVzW3BhdGhdKSB7XHJcbiAgICBhcHAuaW5uZXJIVE1MID0gcm91dGVzW3BhdGhdKGVycm9yTWVzc2FnZSk7ICAvLyBwYW5nZ2lsIGZ1bmdzaSByZW5kZXIgZGVuZ2FuIHBhcmFtZXRlciBlcnJvciBqaWthIHBlcmx1XHJcbiAgfSBlbHNlIHtcclxuICAgIGFwcC5pbm5lckhUTUwgPSAnPGgxPjQwNCBQYWdlIE5vdCBGb3VuZDwvaDE+JztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0QXBwKCkge1xyXG4gIC8vIHJlbmRlciBzZXN1YWkgVVJMIHNla2FyYW5nXHJcbiAgcmVuZGVyUGFnZSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xyXG5cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCduYXYgYnV0dG9uJykuZm9yRWFjaChidG4gPT4ge1xyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBsZXQgcGF0aCA9ICcvJztcclxuICAgICAgc3dpdGNoIChidG4uZGF0YXNldC5wYWdlKSB7XHJcbiAgICAgICAgY2FzZSAnbG9naW4nOiBwYXRoID0gJy9sb2dpbic7IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3JlZ2lzdGVyJzogcGF0aCA9ICcvcmVnaXN0ZXInOyBicmVhaztcclxuICAgICAgICBjYXNlICdsYW5kaW5nJzogcGF0aCA9ICcvJzsgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGhpc3RvcnkucHVzaFN0YXRlKHt9LCAnJywgcGF0aCk7XHJcbiAgICAgIHJlbmRlclBhZ2UocGF0aCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgKCkgPT4ge1xyXG4gICAgcmVuZGVyUGFnZSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xyXG4gIH0pO1xyXG59XHJcbiIsIi8vIHNyYy9yb3V0ZXMuanNcclxuaW1wb3J0IHsgcmVuZGVyTGFuZGluZyB9IGZyb20gJy4vdmlld3MvbGFuZGluZy12aWV3LmpzJztcclxuaW1wb3J0IHsgcmVuZGVyTG9naW4gfSBmcm9tICcuL3ZpZXdzL2xvZ2luLXZpZXcuanMnO1xyXG5pbXBvcnQgeyByZW5kZXJSZWdpc3RlciB9IGZyb20gJy4vdmlld3MvcmVnaXN0ZXItdmlldy5qcyc7XHJcblxyXG5jb25zdCByb3V0ZXMgPSB7XHJcbiAgJy8nOiAoKSA9PiByZW5kZXJMYW5kaW5nKCksXHJcbiAgJy9sYW5kaW5nJzogKCkgPT4gcmVuZGVyTGFuZGluZygpLFxyXG4gICcvbG9naW4nOiAoKSA9PiByZW5kZXJMb2dpbigpLFxyXG4gICcvcmVnaXN0ZXInOiAoKSA9PiByZW5kZXJSZWdpc3RlcigpLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVzO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjYjhiNjBhMmQwODFlNGU4NDg2M1wiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==