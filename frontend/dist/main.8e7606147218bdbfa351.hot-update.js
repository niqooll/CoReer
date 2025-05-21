"use strict";
self["webpackHotUpdatefrontend"]("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ "./src/styles/styles.css");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../image/logo.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _script_app_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./script/app.js */ "./src/script/app.js");
// src/index.js

 // pastikan logo kamu ada di sini


document.addEventListener('DOMContentLoaded', () => {
  // Sisipkan logo ke dalam elemen <a class="brand-name">
  const brandLink = document.querySelector('.brand-name');
  if (brandLink) {
    const logoImg = document.createElement('img');
    logoImg.src = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../image/logo.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
/******/ 	__webpack_require__.h = () => ("ed749bb21b7b3404efd2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi44ZTc2MDYxNDcyMThiZGJmYTM1MS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2QjtBQUNRLENBQUM7QUFDSTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsZ0pBQUk7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx1REFBTztBQUNULENBQUM7Ozs7Ozs7OztVQ3BCRCIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvaW5kZXguanNcclxuaW1wb3J0ICcuL3N0eWxlcy9zdHlsZXMuY3NzJztcclxuaW1wb3J0IGxvZ28gZnJvbSAnLi4vaW1hZ2UvbG9nby5wbmcnOyAvLyBwYXN0aWthbiBsb2dvIGthbXUgYWRhIGRpIHNpbmlcclxuaW1wb3J0IHsgaW5pdEFwcCB9IGZyb20gJy4vc2NyaXB0L2FwcC5qcyc7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gIC8vIFNpc2lwa2FuIGxvZ28ga2UgZGFsYW0gZWxlbWVuIDxhIGNsYXNzPVwiYnJhbmQtbmFtZVwiPlxyXG4gIGNvbnN0IGJyYW5kTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5icmFuZC1uYW1lJyk7XHJcbiAgaWYgKGJyYW5kTGluaykge1xyXG4gICAgY29uc3QgbG9nb0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgbG9nb0ltZy5zcmMgPSBsb2dvO1xyXG4gICAgbG9nb0ltZy5hbHQgPSAnQ29SZWVyIExvZ28nO1xyXG4gICAgbG9nb0ltZy5oZWlnaHQgPSAzMDtcclxuXHJcbiAgICBicmFuZExpbmsuaW5uZXJIVE1MID0gJyc7IC8vIGJlcnNpaGthbiBpc2kgc2ViZWx1bW55YVxyXG4gICAgYnJhbmRMaW5rLmFwcGVuZENoaWxkKGxvZ29JbWcpO1xyXG4gIH1cclxuXHJcbiAgLy8gSmFsYW5rYW4gU1BBXHJcbiAgaW5pdEFwcCgpO1xyXG59KTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZWQ3NDliYjIxYjdiMzQwNGVmZDJcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=