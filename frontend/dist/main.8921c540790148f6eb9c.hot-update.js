"use strict";
self["webpackHotUpdatefrontend"]("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ "./src/styles/styles.css");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './image/logo.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _script_app_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./script/app.js */ "./src/script/app.js");
// src/index.js

 // pastikan logo kamu ada di sini


document.addEventListener('DOMContentLoaded', () => {
  // Sisipkan logo ke dalam elemen <a class="brand-name">
  const brandLink = document.querySelector('.brand-name');
  if (brandLink) {
    const logoImg = document.createElement('img');
    logoImg.src = Object(function webpackMissingModule() { var e = new Error("Cannot find module './image/logo.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
    logoImg.alt = 'CoReer Logo';
    logoImg.height = 30;

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
/******/ 	__webpack_require__.h = () => ("1b1ef6baa926796a9318")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi44OTIxYzU0MDc5MDE0OGY2ZWI5Yy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2QjtBQUNPLENBQUM7QUFDSztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsK0lBQUk7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx1REFBTztBQUNULENBQUM7Ozs7Ozs7OztVQ3BCRCIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvaW5kZXguanNcclxuaW1wb3J0ICcuL3N0eWxlcy9zdHlsZXMuY3NzJztcclxuaW1wb3J0IGxvZ28gZnJvbSAnLi9pbWFnZS9sb2dvLnBuZyc7IC8vIHBhc3Rpa2FuIGxvZ28ga2FtdSBhZGEgZGkgc2luaVxyXG5pbXBvcnQgeyBpbml0QXBwIH0gZnJvbSAnLi9zY3JpcHQvYXBwLmpzJztcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgLy8gU2lzaXBrYW4gbG9nbyBrZSBkYWxhbSBlbGVtZW4gPGEgY2xhc3M9XCJicmFuZC1uYW1lXCI+XHJcbiAgY29uc3QgYnJhbmRMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJyYW5kLW5hbWUnKTtcclxuICBpZiAoYnJhbmRMaW5rKSB7XHJcbiAgICBjb25zdCBsb2dvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBsb2dvSW1nLnNyYyA9IGxvZ287XHJcbiAgICBsb2dvSW1nLmFsdCA9ICdDb1JlZXIgTG9nbyc7XHJcbiAgICBsb2dvSW1nLmhlaWdodCA9IDMwO1xyXG5cclxuICAgIGJyYW5kTGluay5pbm5lckhUTUwgPSAnJzsgLy8gYmVyc2loa2FuIGlzaSBzZWJlbHVtbnlhXHJcbiAgICBicmFuZExpbmsuYXBwZW5kQ2hpbGQobG9nb0ltZyk7XHJcbiAgfVxyXG5cclxuICAvLyBKYWxhbmthbiBTUEFcclxuICBpbml0QXBwKCk7XHJcbn0pO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxYjFlZjZiYWE5MjY3OTZhOTMxOFwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==