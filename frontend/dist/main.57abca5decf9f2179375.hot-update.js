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
/******/ 	__webpack_require__.h = () => ("9e95e0d03c0adc2a3df1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41N2FiY2E1ZGVjZjlmMjE3OTM3NS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM4QztBQUNLO0FBQ25EO0FBQzhCO0FBQ2M7QUFDakI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixtREFBSTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLCtDQUFHO0FBQ3JCO0FBQ0EsQ0FBQzs7Ozs7Ozs7O1VDdkJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvc2NyaXB0L2luZGV4LmpzIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvc2NyaXB0L2luZGV4LmpzXHJcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcclxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9qcy9ib290c3RyYXAuYnVuZGxlLm1pbi5qcyc7XHJcblxyXG5pbXBvcnQgJy4uL3N0eWxlcy9zdHlsZXMuY3NzJztcclxuaW1wb3J0IGxvZ28gZnJvbSAnLi4vcHVibGljL2ltYWdlL2xvZ28ucG5nJztcclxuaW1wb3J0IEFwcCBmcm9tICcuL2FwcC5qcyc7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gIGNvbnN0IGJyYW5kTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXItYnJhbmQnKTtcclxuICBpZiAoYnJhbmRMaW5rKSB7XHJcbiAgICBjb25zdCBsb2dvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBsb2dvSW1nLnNyYyA9IGxvZ287XHJcbiAgICBsb2dvSW1nLmFsdCA9ICdDb1JlZXIgTG9nbyc7XHJcbiAgICBsb2dvSW1nLmNsYXNzTmFtZSA9ICdsb2dvLWltYWdlJztcclxuXHJcbiAgICBicmFuZExpbmsuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBicmFuZExpbmsuYXBwZW5kQ2hpbGQobG9nb0ltZyk7XHJcbiAgfVxyXG5cclxuICAvLyBCdWF0IGluc3RhbmNlIEFwcCBkYW4gcGFuZ2dpbCBpbml0KClcclxuICBjb25zdCBhcHAgPSBuZXcgQXBwKCk7XHJcbiAgYXBwLmluaXQoKTtcclxufSk7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjllOTVlMGQwM2MwYWRjMmEzZGYxXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9