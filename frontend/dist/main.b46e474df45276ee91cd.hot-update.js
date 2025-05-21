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
logoImg.className = 'logo-image'; // Tambahkan class CSS


    brandLink.innerHTML = ''; // bersihkan isi sebelumnya
    brandLink.appendChild(logoImg);
  }

  // Jalankan SPA
  (0,_script_app_js__WEBPACK_IMPORTED_MODULE_2__.initApp)();
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("114c26f71c6758b505a6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iNDZlNDc0ZGY0NTI3NmVlOTFjZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2QjtBQUNjO0FBQ0Q7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxtREFBSTtBQUNsQjtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx1REFBTztBQUNULENBQUM7Ozs7Ozs7OztVQ3JCRCIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvaW5kZXguanNcclxuaW1wb3J0ICcuL3N0eWxlcy9zdHlsZXMuY3NzJztcclxuaW1wb3J0IGxvZ28gZnJvbSAnLi9wdWJsaWMvaW1hZ2UvbG9nby5wbmcnO1xyXG5pbXBvcnQgeyBpbml0QXBwIH0gZnJvbSAnLi9zY3JpcHQvYXBwLmpzJztcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgLy8gU2lzaXBrYW4gbG9nbyBrZSBkYWxhbSBlbGVtZW4gPGEgY2xhc3M9XCJicmFuZC1uYW1lXCI+XHJcbiAgY29uc3QgYnJhbmRMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJyYW5kLW5hbWUnKTtcclxuICBpZiAoYnJhbmRMaW5rKSB7XHJcbiAgICBjb25zdCBsb2dvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbmxvZ29JbWcuc3JjID0gbG9nbztcclxubG9nb0ltZy5hbHQgPSAnQ29SZWVyIExvZ28nO1xyXG5sb2dvSW1nLmNsYXNzTmFtZSA9ICdsb2dvLWltYWdlJzsgLy8gVGFtYmFoa2FuIGNsYXNzIENTU1xyXG5cclxuXHJcbiAgICBicmFuZExpbmsuaW5uZXJIVE1MID0gJyc7IC8vIGJlcnNpaGthbiBpc2kgc2ViZWx1bW55YVxyXG4gICAgYnJhbmRMaW5rLmFwcGVuZENoaWxkKGxvZ29JbWcpO1xyXG4gIH1cclxuXHJcbiAgLy8gSmFsYW5rYW4gU1BBXHJcbiAgaW5pdEFwcCgpO1xyXG59KTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMTE0YzI2ZjcxYzY3NThiNTA1YTZcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=