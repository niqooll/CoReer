"use strict";
self["webpackHotUpdatefrontend"]("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _public_image_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public/image/logo.png */ "./src/public/image/logo.png");
/* harmony import */ var _script_app_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./script/app.js */ "./src/script/app.js");
// src/index.js




document.addEventListener('DOMContentLoaded', () => {
  // Sisipkan logo ke dalam elemen <a class="brand-name">
  const brandLink = document.querySelector('.brand-name');
  if (brandLink) {
    const logoImg = document.createElement('img');
    logoImg.src = _public_image_logo_png__WEBPACK_IMPORTED_MODULE_1__;
    logoImg.alt = 'CoReer Logo';
    logoImg.className = 'logo-image';

    brandLink.innerHTML = '';
    brandLink.appendChild(logoImg);
  }

  // Jalankan SPA
  (0,_script_app_js__WEBPACK_IMPORTED_MODULE_2__.initApp)();
});


/***/ }),

/***/ "./src/public/image/logo.png":
/*!***********************************!*\
  !*** ./src/public/image/logo.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3e2e63cfd1f833acc2ee.png";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3a1fe72aa57e108f78a3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42MGJhZjM3YTQ5NjgwMWNjMjIzNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2QjtBQUNjO0FBQ0Q7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG1EQUFJO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHVEQUFPO0FBQ1QsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3BCRCIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvaW5kZXguanNcclxuaW1wb3J0ICcuL3N0eWxlcy9zdHlsZXMuY3NzJztcclxuaW1wb3J0IGxvZ28gZnJvbSAnLi9wdWJsaWMvaW1hZ2UvbG9nby5wbmcnO1xyXG5pbXBvcnQgeyBpbml0QXBwIH0gZnJvbSAnLi9zY3JpcHQvYXBwLmpzJztcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgLy8gU2lzaXBrYW4gbG9nbyBrZSBkYWxhbSBlbGVtZW4gPGEgY2xhc3M9XCJicmFuZC1uYW1lXCI+XHJcbiAgY29uc3QgYnJhbmRMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJyYW5kLW5hbWUnKTtcclxuICBpZiAoYnJhbmRMaW5rKSB7XHJcbiAgICBjb25zdCBsb2dvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBsb2dvSW1nLnNyYyA9IGxvZ287XHJcbiAgICBsb2dvSW1nLmFsdCA9ICdDb1JlZXIgTG9nbyc7XHJcbiAgICBsb2dvSW1nLmNsYXNzTmFtZSA9ICdsb2dvLWltYWdlJztcclxuXHJcbiAgICBicmFuZExpbmsuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBicmFuZExpbmsuYXBwZW5kQ2hpbGQobG9nb0ltZyk7XHJcbiAgfVxyXG5cclxuICAvLyBKYWxhbmthbiBTUEFcclxuICBpbml0QXBwKCk7XHJcbn0pO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzYTFmZTcyYWE1N2UxMDhmNzhhM1wiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==