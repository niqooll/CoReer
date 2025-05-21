"use strict";
self["webpackHotUpdatefrontend"]("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ "./src/styles/styles.css");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './public/image/logo.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _script_app_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./script/app.js */ "./src/script/app.js");
// src/index.js




document.addEventListener('DOMContentLoaded', () => {
  // Sisipkan logo ke dalam elemen <a class="brand-name">
  const brandLink = document.querySelector('.brand-name');
  if (brandLink) {
    const logoImg = document.createElement('img');
    logoImg.src = Object(function webpackMissingModule() { var e = new Error("Cannot find module './public/image/logo.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
    logoImg.alt = 'CoReer Logo';
    logoImg.className = 'logo-image';

    brandLink.innerHTML = '';
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
/******/ 	__webpack_require__.h = () => ("60baf37a496801cc2234")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zYzkxZTFmYzI4N2FkMTIwODY5Ni5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2QjtBQUNjO0FBQ0Q7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHNKQUFJO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHVEQUFPO0FBQ1QsQ0FBQzs7Ozs7Ozs7O1VDcEJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9pbmRleC5qc1xyXG5pbXBvcnQgJy4vc3R5bGVzL3N0eWxlcy5jc3MnO1xyXG5pbXBvcnQgbG9nbyBmcm9tICcuL3B1YmxpYy9pbWFnZS9sb2dvLnBuZyc7XHJcbmltcG9ydCB7IGluaXRBcHAgfSBmcm9tICcuL3NjcmlwdC9hcHAuanMnO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAvLyBTaXNpcGthbiBsb2dvIGtlIGRhbGFtIGVsZW1lbiA8YSBjbGFzcz1cImJyYW5kLW5hbWVcIj5cclxuICBjb25zdCBicmFuZExpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnJhbmQtbmFtZScpO1xyXG4gIGlmIChicmFuZExpbmspIHtcclxuICAgIGNvbnN0IGxvZ29JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGxvZ29JbWcuc3JjID0gbG9nbztcclxuICAgIGxvZ29JbWcuYWx0ID0gJ0NvUmVlciBMb2dvJztcclxuICAgIGxvZ29JbWcuY2xhc3NOYW1lID0gJ2xvZ28taW1hZ2UnO1xyXG5cclxuICAgIGJyYW5kTGluay5pbm5lckhUTUwgPSAnJztcclxuICAgIGJyYW5kTGluay5hcHBlbmRDaGlsZChsb2dvSW1nKTtcclxuICB9XHJcblxyXG4gIC8vIEphbGFua2FuIFNQQVxyXG4gIGluaXRBcHAoKTtcclxufSk7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjYwYmFmMzdhNDk2ODAxY2MyMjM0XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9