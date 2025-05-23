"use strict";
self["webpackHotUpdatefrontend"]("main",{

/***/ "./src/script/index.js":
/*!*****************************!*\
  !*** ./src/script/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.bundle.min.js */ "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js");
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _public_image_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/image/logo.png */ "./src/public/image/logo.png");
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.js */ "./src/script/app.js");
// src/script/index.js






  // import class App, bukan initApp

document.addEventListener('DOMContentLoaded', () => {
  const brandLink = document.querySelector('.navbar-brand');
  if (brandLink) {
    const logoImg = document.createElement('img');
    logoImg.src = _public_image_logo_png__WEBPACK_IMPORTED_MODULE_3__;
    logoImg.alt = 'CoReer Logo';
    logoImg.className = 'logo-image';

    brandLink.innerHTML = '';
    brandLink.appendChild(logoImg);
  }

  // Buat instance App dan panggil init()
  const app = new _app_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
  app.init();
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("57abca5decf9f2179375")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jYzkxMGMwNWFkNGIzYzY0YTM4OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM4QztBQUNLO0FBQ25EO0FBQzhCO0FBQ2M7QUFDNUM7QUFDMkIsRUFBRTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG1EQUFJO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsK0NBQUc7QUFDckI7QUFDQSxDQUFDOzs7Ozs7Ozs7VUN4QkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9zY3JpcHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9zY3JpcHQvaW5kZXguanNcclxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2pzL2Jvb3RzdHJhcC5idW5kbGUubWluLmpzJztcclxuXHJcbmltcG9ydCAnLi4vc3R5bGVzL3N0eWxlcy5jc3MnO1xyXG5pbXBvcnQgbG9nbyBmcm9tICcuLi9wdWJsaWMvaW1hZ2UvbG9nby5wbmcnO1xyXG5cclxuaW1wb3J0IEFwcCBmcm9tICcuL2FwcC5qcyc7ICAvLyBpbXBvcnQgY2xhc3MgQXBwLCBidWthbiBpbml0QXBwXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gIGNvbnN0IGJyYW5kTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXItYnJhbmQnKTtcclxuICBpZiAoYnJhbmRMaW5rKSB7XHJcbiAgICBjb25zdCBsb2dvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBsb2dvSW1nLnNyYyA9IGxvZ287XHJcbiAgICBsb2dvSW1nLmFsdCA9ICdDb1JlZXIgTG9nbyc7XHJcbiAgICBsb2dvSW1nLmNsYXNzTmFtZSA9ICdsb2dvLWltYWdlJztcclxuXHJcbiAgICBicmFuZExpbmsuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBicmFuZExpbmsuYXBwZW5kQ2hpbGQobG9nb0ltZyk7XHJcbiAgfVxyXG5cclxuICAvLyBCdWF0IGluc3RhbmNlIEFwcCBkYW4gcGFuZ2dpbCBpbml0KClcclxuICBjb25zdCBhcHAgPSBuZXcgQXBwKCk7XHJcbiAgYXBwLmluaXQoKTtcclxufSk7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjU3YWJjYTVkZWNmOWYyMTc5Mzc1XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9