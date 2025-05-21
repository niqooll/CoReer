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
    logoImg.height = 30;

    brandLink.innerHTML = ''; // bersihkan isi sebelumnya
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

module.exports = __webpack_require__.p + "7e25038fc30b48d6ad0b.png";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c7b19fc5112c9f1bbff8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lZDc0OWJiMjFiN2IzNDA0ZWZkMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2QjtBQUNjO0FBQzNDO0FBQzBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixtREFBSTtBQUN0QjtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHVEQUFPO0FBQ1QsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3JCRCIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvaW5kZXguanNcclxuaW1wb3J0ICcuL3N0eWxlcy9zdHlsZXMuY3NzJztcclxuaW1wb3J0IGxvZ28gZnJvbSAnLi9wdWJsaWMvaW1hZ2UvbG9nby5wbmcnO1xyXG5cclxuaW1wb3J0IHsgaW5pdEFwcCB9IGZyb20gJy4vc2NyaXB0L2FwcC5qcyc7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gIC8vIFNpc2lwa2FuIGxvZ28ga2UgZGFsYW0gZWxlbWVuIDxhIGNsYXNzPVwiYnJhbmQtbmFtZVwiPlxyXG4gIGNvbnN0IGJyYW5kTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5icmFuZC1uYW1lJyk7XHJcbiAgaWYgKGJyYW5kTGluaykge1xyXG4gICAgY29uc3QgbG9nb0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgbG9nb0ltZy5zcmMgPSBsb2dvO1xyXG4gICAgbG9nb0ltZy5hbHQgPSAnQ29SZWVyIExvZ28nO1xyXG4gICAgbG9nb0ltZy5oZWlnaHQgPSAzMDtcclxuXHJcbiAgICBicmFuZExpbmsuaW5uZXJIVE1MID0gJyc7IC8vIGJlcnNpaGthbiBpc2kgc2ViZWx1bW55YVxyXG4gICAgYnJhbmRMaW5rLmFwcGVuZENoaWxkKGxvZ29JbWcpO1xyXG4gIH1cclxuXHJcbiAgLy8gSmFsYW5rYW4gU1BBXHJcbiAgaW5pdEFwcCgpO1xyXG59KTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYzdiMTlmYzUxMTJjOWYxYmJmZjhcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=