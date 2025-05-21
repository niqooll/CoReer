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
}`, "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB,EAAE,+BAA+B;EACtD,iBAAiB;EACjB,uBAAuB;EACvB,wBAAwB;AAC1B;;AAEA,wDAAwD;AACxD;EACE,mCAAmC;AACrC;;AAEA,yDAAyD;AACzD;EACE,mBAAmB,EAAE,oCAAoC;AAC3D;;AAEA,6CAA6C;AAC7C;EACE,oBAAoB;EACpB,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;EACjB,sCAAsC;AACxC;;AAEA;EACE,qCAAqC;EACrC,YAAY;AACd;;AAEA;EACE,sCAAsC;EACtC,YAAY;AACd;;AAEA,gCAAgC;AAChC;EACE,oBAAoB;EACpB,gBAAgB;EAChB,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,YAAY,EAAE,kCAAkC;EAChD,WAAW;AACb","sourcesContent":[":root {\r\n  --sec-normal: #f5eedc; /* warna header yang kamu mau */\r\n  --normal: #3ca9c3;\r\n  --normal-hover: #3698b0;\r\n  --normal-active: #30879c;\r\n}\r\n\r\n/* Override navbar Bootstrap supaya pakai warna custom */\r\n.custom-navbar {\r\n  background-color: var(--sec-normal);\r\n}\r\n\r\n/* Kalau navbar toggler icon terlalu gelap, bisa diubah */\r\n.custom-navbar .navbar-toggler-icon {\r\n  filter: invert(0.4); /* atur supaya icon terlihat jelas */\r\n}\r\n\r\n/* Nav link pakai warna sesuai var --normal */\r\n.custom-navbar .nav-link {\r\n  color: var(--normal);\r\n  font-weight: 600;\r\n  border-radius: 4px;\r\n  padding: 8px 16px;\r\n  transition: background-color 0.3s ease;\r\n}\r\n\r\n.custom-navbar .nav-link:hover {\r\n  background-color: var(--normal-hover);\r\n  color: white;\r\n}\r\n\r\n.custom-navbar .nav-link:active {\r\n  background-color: var(--normal-active);\r\n  color: white;\r\n}\r\n\r\n/* Navbar brand (logo) styling */\r\n.custom-navbar .navbar-brand {\r\n  color: var(--normal);\r\n  font-weight: 600;\r\n  font-size: 1.4rem;\r\n  text-decoration: none;\r\n}\r\n\r\n.logo-image {\r\n  height: 60px; /* contoh, atur sesuai kebutuhan */\r\n  width: auto;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f165c3b6c01ecd8a0feb")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kZTdhM2Y0ODM1ZWIzMTIxOWNjZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQSxDQUFDLE9BQU8sd0ZBQXdGLHdCQUF3QixhQUFhLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sWUFBWSxNQUFNLHdCQUF3QixPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLHNCQUFzQixXQUFXLGdDQUFnQyw2QkFBNkIsd0RBQXdELDhCQUE4QiwrQkFBK0IsS0FBSyxxRkFBcUYsMENBQTBDLEtBQUssMkdBQTJHLDJCQUEyQiwwQ0FBMEMsb0ZBQW9GLDJCQUEyQix1QkFBdUIseUJBQXlCLHdCQUF3Qiw2Q0FBNkMsS0FBSyx3Q0FBd0MsNENBQTRDLG1CQUFtQixLQUFLLHlDQUF5Qyw2Q0FBNkMsbUJBQW1CLEtBQUssMkVBQTJFLDJCQUEyQix1QkFBdUIsd0JBQXdCLDRCQUE0QixLQUFLLHFCQUFxQixvQkFBb0IscURBQXFELEtBQUssbUJBQW1CO0FBQ3J1RDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7VUN0RHZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XHJcbiAgLS1zZWMtbm9ybWFsOiAjZjVlZWRjOyAvKiB3YXJuYSBoZWFkZXIgeWFuZyBrYW11IG1hdSAqL1xyXG4gIC0tbm9ybWFsOiAjM2NhOWMzO1xyXG4gIC0tbm9ybWFsLWhvdmVyOiAjMzY5OGIwO1xyXG4gIC0tbm9ybWFsLWFjdGl2ZTogIzMwODc5YztcclxufVxyXG5cclxuLyogT3ZlcnJpZGUgbmF2YmFyIEJvb3RzdHJhcCBzdXBheWEgcGFrYWkgd2FybmEgY3VzdG9tICovXHJcbi5jdXN0b20tbmF2YmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWMtbm9ybWFsKTtcclxufVxyXG5cclxuLyogS2FsYXUgbmF2YmFyIHRvZ2dsZXIgaWNvbiB0ZXJsYWx1IGdlbGFwLCBiaXNhIGRpdWJhaCAqL1xyXG4uY3VzdG9tLW5hdmJhciAubmF2YmFyLXRvZ2dsZXItaWNvbiB7XHJcbiAgZmlsdGVyOiBpbnZlcnQoMC40KTsgLyogYXR1ciBzdXBheWEgaWNvbiB0ZXJsaWhhdCBqZWxhcyAqL1xyXG59XHJcblxyXG4vKiBOYXYgbGluayBwYWthaSB3YXJuYSBzZXN1YWkgdmFyIC0tbm9ybWFsICovXHJcbi5jdXN0b20tbmF2YmFyIC5uYXYtbGluayB7XHJcbiAgY29sb3I6IHZhcigtLW5vcm1hbCk7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5jdXN0b20tbmF2YmFyIC5uYXYtbGluazpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm9ybWFsLWhvdmVyKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jdXN0b20tbmF2YmFyIC5uYXYtbGluazphY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vcm1hbC1hY3RpdmUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLyogTmF2YmFyIGJyYW5kIChsb2dvKSBzdHlsaW5nICovXHJcbi5jdXN0b20tbmF2YmFyIC5uYXZiYXItYnJhbmQge1xyXG4gIGNvbG9yOiB2YXIoLS1ub3JtYWwpO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4ubG9nby1pbWFnZSB7XHJcbiAgaGVpZ2h0OiA2MHB4OyAvKiBjb250b2gsIGF0dXIgc2VzdWFpIGtlYnV0dWhhbiAqL1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBcUIsRUFBRSwrQkFBK0I7RUFDdEQsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2Qix3QkFBd0I7QUFDMUI7O0FBRUEsd0RBQXdEO0FBQ3hEO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBLHlEQUF5RDtBQUN6RDtFQUNFLG1CQUFtQixFQUFFLG9DQUFvQztBQUMzRDs7QUFFQSw2Q0FBNkM7QUFDN0M7RUFDRSxvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxZQUFZO0FBQ2Q7O0FBRUEsZ0NBQWdDO0FBQ2hDO0VBQ0Usb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWSxFQUFFLGtDQUFrQztFQUNoRCxXQUFXO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgLS1zZWMtbm9ybWFsOiAjZjVlZWRjOyAvKiB3YXJuYSBoZWFkZXIgeWFuZyBrYW11IG1hdSAqL1xcclxcbiAgLS1ub3JtYWw6ICMzY2E5YzM7XFxyXFxuICAtLW5vcm1hbC1ob3ZlcjogIzM2OThiMDtcXHJcXG4gIC0tbm9ybWFsLWFjdGl2ZTogIzMwODc5YztcXHJcXG59XFxyXFxuXFxyXFxuLyogT3ZlcnJpZGUgbmF2YmFyIEJvb3RzdHJhcCBzdXBheWEgcGFrYWkgd2FybmEgY3VzdG9tICovXFxyXFxuLmN1c3RvbS1uYXZiYXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VjLW5vcm1hbCk7XFxyXFxufVxcclxcblxcclxcbi8qIEthbGF1IG5hdmJhciB0b2dnbGVyIGljb24gdGVybGFsdSBnZWxhcCwgYmlzYSBkaXViYWggKi9cXHJcXG4uY3VzdG9tLW5hdmJhciAubmF2YmFyLXRvZ2dsZXItaWNvbiB7XFxyXFxuICBmaWx0ZXI6IGludmVydCgwLjQpOyAvKiBhdHVyIHN1cGF5YSBpY29uIHRlcmxpaGF0IGplbGFzICovXFxyXFxufVxcclxcblxcclxcbi8qIE5hdiBsaW5rIHBha2FpIHdhcm5hIHNlc3VhaSB2YXIgLS1ub3JtYWwgKi9cXHJcXG4uY3VzdG9tLW5hdmJhciAubmF2LWxpbmsge1xcclxcbiAgY29sb3I6IHZhcigtLW5vcm1hbCk7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgcGFkZGluZzogOHB4IDE2cHg7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmN1c3RvbS1uYXZiYXIgLm5hdi1saW5rOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vcm1hbC1ob3Zlcik7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5jdXN0b20tbmF2YmFyIC5uYXYtbGluazphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm9ybWFsLWFjdGl2ZSk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi8qIE5hdmJhciBicmFuZCAobG9nbykgc3R5bGluZyAqL1xcclxcbi5jdXN0b20tbmF2YmFyIC5uYXZiYXItYnJhbmQge1xcclxcbiAgY29sb3I6IHZhcigtLW5vcm1hbCk7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5sb2dvLWltYWdlIHtcXHJcXG4gIGhlaWdodDogNjBweDsgLyogY29udG9oLCBhdHVyIHNlc3VhaSBrZWJ1dHVoYW4gKi9cXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZjE2NWMzYjZjMDFlY2Q4YTBmZWJcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=