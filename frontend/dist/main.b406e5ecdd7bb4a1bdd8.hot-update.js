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
    logoImg.height = 50;

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
/******/ 	__webpack_require__.h = () => ("fce9575b6a715f54343c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iNDA2ZTVlY2RkN2JiNGExYmRkOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2QjtBQUNjO0FBQ0Q7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG1EQUFJO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsdURBQU87QUFDVCxDQUFDOzs7Ozs7Ozs7VUNwQkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL2luZGV4LmpzXHJcbmltcG9ydCAnLi9zdHlsZXMvc3R5bGVzLmNzcyc7XHJcbmltcG9ydCBsb2dvIGZyb20gJy4vcHVibGljL2ltYWdlL2xvZ28ucG5nJztcclxuaW1wb3J0IHsgaW5pdEFwcCB9IGZyb20gJy4vc2NyaXB0L2FwcC5qcyc7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gIC8vIFNpc2lwa2FuIGxvZ28ga2UgZGFsYW0gZWxlbWVuIDxhIGNsYXNzPVwiYnJhbmQtbmFtZVwiPlxyXG4gIGNvbnN0IGJyYW5kTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5icmFuZC1uYW1lJyk7XHJcbiAgaWYgKGJyYW5kTGluaykge1xyXG4gICAgY29uc3QgbG9nb0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgbG9nb0ltZy5zcmMgPSBsb2dvO1xyXG4gICAgbG9nb0ltZy5hbHQgPSAnQ29SZWVyIExvZ28nO1xyXG4gICAgbG9nb0ltZy5oZWlnaHQgPSA1MDtcclxuXHJcbiAgICBicmFuZExpbmsuaW5uZXJIVE1MID0gJyc7IC8vIGJlcnNpaGthbiBpc2kgc2ViZWx1bW55YVxyXG4gICAgYnJhbmRMaW5rLmFwcGVuZENoaWxkKGxvZ29JbWcpO1xyXG4gIH1cclxuXHJcbiAgLy8gSmFsYW5rYW4gU1BBXHJcbiAgaW5pdEFwcCgpO1xyXG59KTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZmNlOTU3NWI2YTcxNWY1NDM0M2NcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=