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
  font-size: 1.1rem;
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
  margin-right: 2rem;
}

.logo-image {
  height: 60px; /* contoh, atur sesuai kebutuhan */
  width: auto;
}`, "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB,EAAE,+BAA+B;EACtD,iBAAiB;EACjB,uBAAuB;EACvB,wBAAwB;AAC1B;;AAEA,wDAAwD;AACxD;EACE,kBAAkB;EAClB,mBAAmB;EACnB,mCAAmC;AACrC;;AAEA,yDAAyD;AACzD;EACE,mBAAmB,EAAE,oCAAoC;AAC3D;;AAEA,6CAA6C;AAC7C;EACE,oBAAoB;EACpB,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;EACjB,sCAAsC;AACxC;;AAEA;EACE,qCAAqC;EACrC,YAAY;AACd;;AAEA;EACE,sCAAsC;EACtC,YAAY;AACd;;AAEA,gCAAgC;AAChC;EACE,oBAAoB;EACpB,gBAAgB;EAChB,iBAAiB;EACjB,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE,YAAY,EAAE,kCAAkC;EAChD,WAAW;AACb","sourcesContent":[":root {\r\n  --sec-normal: #f5eedc; /* warna header yang kamu mau */\r\n  --normal: #3ca9c3;\r\n  --normal-hover: #3698b0;\r\n  --normal-active: #30879c;\r\n}\r\n\r\n/* Override navbar Bootstrap supaya pakai warna custom */\r\n.custom-navbar {\r\n  padding-left: 3rem;\r\n  padding-right: 3rem;\r\n  background-color: var(--sec-normal);\r\n}\r\n\r\n/* Kalau navbar toggler icon terlalu gelap, bisa diubah */\r\n.custom-navbar .navbar-toggler-icon {\r\n  filter: invert(0.4); /* atur supaya icon terlihat jelas */\r\n}\r\n\r\n/* Nav link pakai warna sesuai var --normal */\r\n.custom-navbar .nav-link {\r\n  color: var(--normal);\r\n  font-size: 1.1rem;\r\n  font-weight: 600;\r\n  border-radius: 4px;\r\n  padding: 8px 16px;\r\n  transition: background-color 0.3s ease;\r\n}\r\n\r\n.custom-navbar .nav-link:hover {\r\n  background-color: var(--normal-hover);\r\n  color: white;\r\n}\r\n\r\n.custom-navbar .nav-link:active {\r\n  background-color: var(--normal-active);\r\n  color: white;\r\n}\r\n\r\n/* Navbar brand (logo) styling */\r\n.custom-navbar .navbar-brand {\r\n  color: var(--normal);\r\n  font-weight: 600;\r\n  font-size: 1.4rem;\r\n  text-decoration: none;\r\n  margin-right: 2rem;\r\n}\r\n\r\n.logo-image {\r\n  height: 60px; /* contoh, atur sesuai kebutuhan */\r\n  width: auto;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f87ef88fd676b8ffa72b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yNzExMGUwMmVjZGZmMTczYmYzYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBLENBQUMsT0FBTyx3RkFBd0Ysd0JBQXdCLGFBQWEsYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLHdCQUF3QixPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxzQkFBc0IsV0FBVyxnQ0FBZ0MsNkJBQTZCLHdEQUF3RCw4QkFBOEIsK0JBQStCLEtBQUsscUZBQXFGLHlCQUF5QiwwQkFBMEIsMENBQTBDLEtBQUssMkdBQTJHLDJCQUEyQiwwQ0FBMEMsb0ZBQW9GLDJCQUEyQix3QkFBd0IsdUJBQXVCLHlCQUF5Qix3QkFBd0IsNkNBQTZDLEtBQUssd0NBQXdDLDRDQUE0QyxtQkFBbUIsS0FBSyx5Q0FBeUMsNkNBQTZDLG1CQUFtQixLQUFLLDJFQUEyRSwyQkFBMkIsdUJBQXVCLHdCQUF3Qiw0QkFBNEIseUJBQXlCLEtBQUsscUJBQXFCLG9CQUFvQixxREFBcUQsS0FBSyxtQkFBbUI7QUFDNzNEO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7OztVQzFEdkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcclxuICAtLXNlYy1ub3JtYWw6ICNmNWVlZGM7IC8qIHdhcm5hIGhlYWRlciB5YW5nIGthbXUgbWF1ICovXHJcbiAgLS1ub3JtYWw6ICMzY2E5YzM7XHJcbiAgLS1ub3JtYWwtaG92ZXI6ICMzNjk4YjA7XHJcbiAgLS1ub3JtYWwtYWN0aXZlOiAjMzA4NzljO1xyXG59XHJcblxyXG4vKiBPdmVycmlkZSBuYXZiYXIgQm9vdHN0cmFwIHN1cGF5YSBwYWthaSB3YXJuYSBjdXN0b20gKi9cclxuLmN1c3RvbS1uYXZiYXIge1xyXG4gIHBhZGRpbmctbGVmdDogM3JlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAzcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlYy1ub3JtYWwpO1xyXG59XHJcblxyXG4vKiBLYWxhdSBuYXZiYXIgdG9nZ2xlciBpY29uIHRlcmxhbHUgZ2VsYXAsIGJpc2EgZGl1YmFoICovXHJcbi5jdXN0b20tbmF2YmFyIC5uYXZiYXItdG9nZ2xlci1pY29uIHtcclxuICBmaWx0ZXI6IGludmVydCgwLjQpOyAvKiBhdHVyIHN1cGF5YSBpY29uIHRlcmxpaGF0IGplbGFzICovXHJcbn1cclxuXHJcbi8qIE5hdiBsaW5rIHBha2FpIHdhcm5hIHNlc3VhaSB2YXIgLS1ub3JtYWwgKi9cclxuLmN1c3RvbS1uYXZiYXIgLm5hdi1saW5rIHtcclxuICBjb2xvcjogdmFyKC0tbm9ybWFsKTtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBwYWRkaW5nOiA4cHggMTZweDtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLmN1c3RvbS1uYXZiYXIgLm5hdi1saW5rOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ub3JtYWwtaG92ZXIpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmN1c3RvbS1uYXZiYXIgLm5hdi1saW5rOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm9ybWFsLWFjdGl2ZSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKiBOYXZiYXIgYnJhbmQgKGxvZ28pIHN0eWxpbmcgKi9cclxuLmN1c3RvbS1uYXZiYXIgLm5hdmJhci1icmFuZCB7XHJcbiAgY29sb3I6IHZhcigtLW5vcm1hbCk7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDEuNHJlbTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xyXG59XHJcblxyXG4ubG9nby1pbWFnZSB7XHJcbiAgaGVpZ2h0OiA2MHB4OyAvKiBjb250b2gsIGF0dXIgc2VzdWFpIGtlYnV0dWhhbiAqL1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBcUIsRUFBRSwrQkFBK0I7RUFDdEQsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2Qix3QkFBd0I7QUFDMUI7O0FBRUEsd0RBQXdEO0FBQ3hEO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtQ0FBbUM7QUFDckM7O0FBRUEseURBQXlEO0FBQ3pEO0VBQ0UsbUJBQW1CLEVBQUUsb0NBQW9DO0FBQzNEOztBQUVBLDZDQUE2QztBQUM3QztFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxZQUFZO0FBQ2Q7O0FBRUEsZ0NBQWdDO0FBQ2hDO0VBQ0Usb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVksRUFBRSxrQ0FBa0M7RUFDaEQsV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gIC0tc2VjLW5vcm1hbDogI2Y1ZWVkYzsgLyogd2FybmEgaGVhZGVyIHlhbmcga2FtdSBtYXUgKi9cXHJcXG4gIC0tbm9ybWFsOiAjM2NhOWMzO1xcclxcbiAgLS1ub3JtYWwtaG92ZXI6ICMzNjk4YjA7XFxyXFxuICAtLW5vcm1hbC1hY3RpdmU6ICMzMDg3OWM7XFxyXFxufVxcclxcblxcclxcbi8qIE92ZXJyaWRlIG5hdmJhciBCb290c3RyYXAgc3VwYXlhIHBha2FpIHdhcm5hIGN1c3RvbSAqL1xcclxcbi5jdXN0b20tbmF2YmFyIHtcXHJcXG4gIHBhZGRpbmctbGVmdDogM3JlbTtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDNyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWMtbm9ybWFsKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogS2FsYXUgbmF2YmFyIHRvZ2dsZXIgaWNvbiB0ZXJsYWx1IGdlbGFwLCBiaXNhIGRpdWJhaCAqL1xcclxcbi5jdXN0b20tbmF2YmFyIC5uYXZiYXItdG9nZ2xlci1pY29uIHtcXHJcXG4gIGZpbHRlcjogaW52ZXJ0KDAuNCk7IC8qIGF0dXIgc3VwYXlhIGljb24gdGVybGloYXQgamVsYXMgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogTmF2IGxpbmsgcGFrYWkgd2FybmEgc2VzdWFpIHZhciAtLW5vcm1hbCAqL1xcclxcbi5jdXN0b20tbmF2YmFyIC5uYXYtbGluayB7XFxyXFxuICBjb2xvcjogdmFyKC0tbm9ybWFsKTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xcclxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5jdXN0b20tbmF2YmFyIC5uYXYtbGluazpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ub3JtYWwtaG92ZXIpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uY3VzdG9tLW5hdmJhciAubmF2LWxpbms6YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vcm1hbC1hY3RpdmUpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBOYXZiYXIgYnJhbmQgKGxvZ28pIHN0eWxpbmcgKi9cXHJcXG4uY3VzdG9tLW5hdmJhciAubmF2YmFyLWJyYW5kIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1ub3JtYWwpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nby1pbWFnZSB7XFxyXFxuICBoZWlnaHQ6IDYwcHg7IC8qIGNvbnRvaCwgYXR1ciBzZXN1YWkga2VidXR1aGFuICovXFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImY4N2VmODhmZDY3NmI4ZmZhNzJiXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9