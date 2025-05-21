"use strict";
self["webpackHotUpdatefrontend"]("main",{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --sec-normal: #f5eedc; /* warna header yang kamu mau */
  --normal: #3ca9c3;
  --normal-hover: #3698b0;
  --normal-active: #30879c;
}

/* Override navbar Bootstrap supaya pakai warna custom */
.custom-navbar {
  padding-left: 3rem;
  padding-right: 3rem;
  background-color: var(--sec-normal);
}

/* Kalau navbar toggler icon terlalu gelap, bisa diubah */
.custom-navbar .navbar-toggler-icon {
  filter: invert(0.4); /* atur supaya icon terlihat jelas */
}

/* Nav link pakai warna sesuai var --normal */
.custom-navbar .nav-link {
  color: var(--normal);
  font-weight: 600;
  border-radius: 4px;
  padding: 8px 16px;
  transition: background-color 0.3s ease;
}

.custom-navbar .nav-link:hover {
  background-color: var(--normal-hover);
  color: white;
}

.custom-navbar .nav-link:active {
  background-color: var(--normal-active);
  color: white;
}

/* Navbar brand (logo) styling */
.custom-navbar .navbar-brand {
  color: var(--normal);
  font-weight: 600;
  font-size: 1.4rem;
  text-decoration: none;
}

.logo-image {
  height: 60px; /* contoh, atur sesuai kebutuhan */
  width: auto;
}`, "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB,EAAE,+BAA+B;EACtD,iBAAiB;EACjB,uBAAuB;EACvB,wBAAwB;AAC1B;;AAEA,wDAAwD;AACxD;EACE,kBAAkB;EAClB,mBAAmB;EACnB,mCAAmC;AACrC;;AAEA,yDAAyD;AACzD;EACE,mBAAmB,EAAE,oCAAoC;AAC3D;;AAEA,6CAA6C;AAC7C;EACE,oBAAoB;EACpB,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;EACjB,sCAAsC;AACxC;;AAEA;EACE,qCAAqC;EACrC,YAAY;AACd;;AAEA;EACE,sCAAsC;EACtC,YAAY;AACd;;AAEA,gCAAgC;AAChC;EACE,oBAAoB;EACpB,gBAAgB;EAChB,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,YAAY,EAAE,kCAAkC;EAChD,WAAW;AACb","sourcesContent":[":root {\r\n  --sec-normal: #f5eedc; /* warna header yang kamu mau */\r\n  --normal: #3ca9c3;\r\n  --normal-hover: #3698b0;\r\n  --normal-active: #30879c;\r\n}\r\n\r\n/* Override navbar Bootstrap supaya pakai warna custom */\r\n.custom-navbar {\r\n  padding-left: 3rem;\r\n  padding-right: 3rem;\r\n  background-color: var(--sec-normal);\r\n}\r\n\r\n/* Kalau navbar toggler icon terlalu gelap, bisa diubah */\r\n.custom-navbar .navbar-toggler-icon {\r\n  filter: invert(0.4); /* atur supaya icon terlihat jelas */\r\n}\r\n\r\n/* Nav link pakai warna sesuai var --normal */\r\n.custom-navbar .nav-link {\r\n  color: var(--normal);\r\n  font-weight: 600;\r\n  border-radius: 4px;\r\n  padding: 8px 16px;\r\n  transition: background-color 0.3s ease;\r\n}\r\n\r\n.custom-navbar .nav-link:hover {\r\n  background-color: var(--normal-hover);\r\n  color: white;\r\n}\r\n\r\n.custom-navbar .nav-link:active {\r\n  background-color: var(--normal-active);\r\n  color: white;\r\n}\r\n\r\n/* Navbar brand (logo) styling */\r\n.custom-navbar .navbar-brand {\r\n  color: var(--normal);\r\n  font-weight: 600;\r\n  font-size: 1.4rem;\r\n  text-decoration: none;\r\n}\r\n\r\n.logo-image {\r\n  height: 60px; /* contoh, atur sesuai kebutuhan */\r\n  width: auto;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c2813cab686cdca9411d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lODQyOGM1NDMxM2YwNjRjN2RhZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0EsQ0FBQyxPQUFPLHdGQUF3Rix3QkFBd0IsYUFBYSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sd0JBQXdCLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssc0JBQXNCLFdBQVcsZ0NBQWdDLDZCQUE2Qix3REFBd0QsOEJBQThCLCtCQUErQixLQUFLLHFGQUFxRix5QkFBeUIsMEJBQTBCLDBDQUEwQyxLQUFLLDJHQUEyRywyQkFBMkIsMENBQTBDLG9GQUFvRiwyQkFBMkIsdUJBQXVCLHlCQUF5Qix3QkFBd0IsNkNBQTZDLEtBQUssd0NBQXdDLDRDQUE0QyxtQkFBbUIsS0FBSyx5Q0FBeUMsNkNBQTZDLG1CQUFtQixLQUFLLDJFQUEyRSwyQkFBMkIsdUJBQXVCLHdCQUF3Qiw0QkFBNEIsS0FBSyxxQkFBcUIsb0JBQW9CLHFEQUFxRCxLQUFLLG1CQUFtQjtBQUNsekQ7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7O1VDeER2QyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xyXG4gIC0tc2VjLW5vcm1hbDogI2Y1ZWVkYzsgLyogd2FybmEgaGVhZGVyIHlhbmcga2FtdSBtYXUgKi9cclxuICAtLW5vcm1hbDogIzNjYTljMztcclxuICAtLW5vcm1hbC1ob3ZlcjogIzM2OThiMDtcclxuICAtLW5vcm1hbC1hY3RpdmU6ICMzMDg3OWM7XHJcbn1cclxuXHJcbi8qIE92ZXJyaWRlIG5hdmJhciBCb290c3RyYXAgc3VwYXlhIHBha2FpIHdhcm5hIGN1c3RvbSAqL1xyXG4uY3VzdG9tLW5hdmJhciB7XHJcbiAgcGFkZGluZy1sZWZ0OiAzcmVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDNyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VjLW5vcm1hbCk7XHJcbn1cclxuXHJcbi8qIEthbGF1IG5hdmJhciB0b2dnbGVyIGljb24gdGVybGFsdSBnZWxhcCwgYmlzYSBkaXViYWggKi9cclxuLmN1c3RvbS1uYXZiYXIgLm5hdmJhci10b2dnbGVyLWljb24ge1xyXG4gIGZpbHRlcjogaW52ZXJ0KDAuNCk7IC8qIGF0dXIgc3VwYXlhIGljb24gdGVybGloYXQgamVsYXMgKi9cclxufVxyXG5cclxuLyogTmF2IGxpbmsgcGFrYWkgd2FybmEgc2VzdWFpIHZhciAtLW5vcm1hbCAqL1xyXG4uY3VzdG9tLW5hdmJhciAubmF2LWxpbmsge1xyXG4gIGNvbG9yOiB2YXIoLS1ub3JtYWwpO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4uY3VzdG9tLW5hdmJhciAubmF2LWxpbms6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vcm1hbC1ob3Zlcik7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY3VzdG9tLW5hdmJhciAubmF2LWxpbms6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ub3JtYWwtYWN0aXZlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8qIE5hdmJhciBicmFuZCAobG9nbykgc3R5bGluZyAqL1xyXG4uY3VzdG9tLW5hdmJhciAubmF2YmFyLWJyYW5kIHtcclxuICBjb2xvcjogdmFyKC0tbm9ybWFsKTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmxvZ28taW1hZ2Uge1xyXG4gIGhlaWdodDogNjBweDsgLyogY29udG9oLCBhdHVyIHNlc3VhaSBrZWJ1dHVoYW4gKi9cclxuICB3aWR0aDogYXV0bztcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQXFCLEVBQUUsK0JBQStCO0VBQ3RELGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsd0JBQXdCO0FBQzFCOztBQUVBLHdEQUF3RDtBQUN4RDtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsbUNBQW1DO0FBQ3JDOztBQUVBLHlEQUF5RDtBQUN6RDtFQUNFLG1CQUFtQixFQUFFLG9DQUFvQztBQUMzRDs7QUFFQSw2Q0FBNkM7QUFDN0M7RUFDRSxvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxZQUFZO0FBQ2Q7O0FBRUEsZ0NBQWdDO0FBQ2hDO0VBQ0Usb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWSxFQUFFLGtDQUFrQztFQUNoRCxXQUFXO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgLS1zZWMtbm9ybWFsOiAjZjVlZWRjOyAvKiB3YXJuYSBoZWFkZXIgeWFuZyBrYW11IG1hdSAqL1xcclxcbiAgLS1ub3JtYWw6ICMzY2E5YzM7XFxyXFxuICAtLW5vcm1hbC1ob3ZlcjogIzM2OThiMDtcXHJcXG4gIC0tbm9ybWFsLWFjdGl2ZTogIzMwODc5YztcXHJcXG59XFxyXFxuXFxyXFxuLyogT3ZlcnJpZGUgbmF2YmFyIEJvb3RzdHJhcCBzdXBheWEgcGFrYWkgd2FybmEgY3VzdG9tICovXFxyXFxuLmN1c3RvbS1uYXZiYXIge1xcclxcbiAgcGFkZGluZy1sZWZ0OiAzcmVtO1xcclxcbiAgcGFkZGluZy1yaWdodDogM3JlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlYy1ub3JtYWwpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBLYWxhdSBuYXZiYXIgdG9nZ2xlciBpY29uIHRlcmxhbHUgZ2VsYXAsIGJpc2EgZGl1YmFoICovXFxyXFxuLmN1c3RvbS1uYXZiYXIgLm5hdmJhci10b2dnbGVyLWljb24ge1xcclxcbiAgZmlsdGVyOiBpbnZlcnQoMC40KTsgLyogYXR1ciBzdXBheWEgaWNvbiB0ZXJsaWhhdCBqZWxhcyAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBOYXYgbGluayBwYWthaSB3YXJuYSBzZXN1YWkgdmFyIC0tbm9ybWFsICovXFxyXFxuLmN1c3RvbS1uYXZiYXIgLm5hdi1saW5rIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1ub3JtYWwpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xcclxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5jdXN0b20tbmF2YmFyIC5uYXYtbGluazpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ub3JtYWwtaG92ZXIpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uY3VzdG9tLW5hdmJhciAubmF2LWxpbms6YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vcm1hbC1hY3RpdmUpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBOYXZiYXIgYnJhbmQgKGxvZ28pIHN0eWxpbmcgKi9cXHJcXG4uY3VzdG9tLW5hdmJhciAubmF2YmFyLWJyYW5kIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1ub3JtYWwpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nby1pbWFnZSB7XFxyXFxuICBoZWlnaHQ6IDYwcHg7IC8qIGNvbnRvaCwgYXR1ciBzZXN1YWkga2VidXR1aGFuICovXFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImMyODEzY2FiNjg2Y2RjYTk0MTFkXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9