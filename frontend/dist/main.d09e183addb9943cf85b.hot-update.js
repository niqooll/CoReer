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
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/styles.css */ "./src/styles/styles.css");



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


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4f2cb43e58f40345cd67")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kMDllMTgzYWRkYjk5NDNjZjg1Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUNSO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxzREFBTTtBQUNaLG9CQUFvQixzREFBTSx1QkFBdUI7QUFDakQsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2Qyw2Q0FBNkM7QUFDN0Msb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7O1VDbENBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcHJlc2VudGVycy9hcHAtcHJlc2VudGVyLmpzIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcm91dGVzIGZyb20gJy4uL3JvdXRlcy9yb3V0ZXMnO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9zdHlsZXMuY3NzJztcclxuXHJcbmNvbnN0IGFwcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKTtcclxuXHJcbmZ1bmN0aW9uIHJlbmRlclBhZ2UocGF0aCwgZXJyb3JNZXNzYWdlID0gJycpIHtcclxuICBpZiAocm91dGVzW3BhdGhdKSB7XHJcbiAgICBhcHAuaW5uZXJIVE1MID0gcm91dGVzW3BhdGhdKGVycm9yTWVzc2FnZSk7ICAvLyBwYW5nZ2lsIGZ1bmdzaSByZW5kZXIgZGVuZ2FuIHBhcmFtZXRlciBlcnJvciBqaWthIHBlcmx1XHJcbiAgfSBlbHNlIHtcclxuICAgIGFwcC5pbm5lckhUTUwgPSAnPGgxPjQwNCBQYWdlIE5vdCBGb3VuZDwvaDE+JztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0QXBwKCkge1xyXG4gIC8vIHJlbmRlciBzZXN1YWkgVVJMIHNla2FyYW5nXHJcbiAgcmVuZGVyUGFnZSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xyXG5cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCduYXYgYnV0dG9uJykuZm9yRWFjaChidG4gPT4ge1xyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBsZXQgcGF0aCA9ICcvJztcclxuICAgICAgc3dpdGNoIChidG4uZGF0YXNldC5wYWdlKSB7XHJcbiAgICAgICAgY2FzZSAnbG9naW4nOiBwYXRoID0gJy9sb2dpbic7IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3JlZ2lzdGVyJzogcGF0aCA9ICcvcmVnaXN0ZXInOyBicmVhaztcclxuICAgICAgICBjYXNlICdsYW5kaW5nJzogcGF0aCA9ICcvJzsgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGhpc3RvcnkucHVzaFN0YXRlKHt9LCAnJywgcGF0aCk7XHJcbiAgICAgIHJlbmRlclBhZ2UocGF0aCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgKCkgPT4ge1xyXG4gICAgcmVuZGVyUGFnZSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xyXG4gIH0pO1xyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjRmMmNiNDNlNThmNDAzNDVjZDY3XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9