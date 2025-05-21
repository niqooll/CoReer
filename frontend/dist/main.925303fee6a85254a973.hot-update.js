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
  --light :#ecf6f9;
  --light-hover: #e2f2f6;
  --light-active: #c3e4ec;

  --normal: #3ca9c3;
  --normal-hover: #3698b0;
  --normal-active: #30879c;

  --sec-normal: #f5eedc;
}

/* Reset margin dan padding body dan html */
html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Pastikan header mengambil lebar penuh */
header {
  width: 100%;
  background-color: var(--sec-normal);
  padding: 10px 20px;
  box-sizing: border-box; /* supaya padding tidak membuat lebar meluber */
}

.main-header {
  width: 100%;
  display: flex;
  align-items: center;
  /* ganti space-between dengan flex-start */
  justify-content: flex-start;
  gap: 40px; /* jarak antar logo dan nav */
}


/* Nav list */
.nav-list {
  list-style: none;
  display: flex;
  gap: 16px;
  margin: 0;
  padding: 0;
}

.nav-list li a {
  color: white;
  padding: 8px 16px;
  text-decoration: none;
  font-weight: 600;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  background-color: var(--normal);
}

.nav-list li a:hover {
  background-color: var(--normal-hover);
}

.nav-list li a:active {
  background-color: var(--normal-active);
}

.logo-image {
  max-height: 60px;
  height: auto;
  width: auto;
}

`, "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,sBAAsB;EACtB,uBAAuB;;EAEvB,iBAAiB;EACjB,uBAAuB;EACvB,wBAAwB;;EAExB,qBAAqB;AACvB;;AAEA,2CAA2C;AAC3C;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA,0CAA0C;AAC1C;EACE,WAAW;EACX,mCAAmC;EACnC,kBAAkB;EAClB,sBAAsB,EAAE,+CAA+C;AACzE;;AAEA;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,0CAA0C;EAC1C,2BAA2B;EAC3B,SAAS,EAAE,6BAA6B;AAC1C;;;AAGA,aAAa;AACb;EACE,gBAAgB;EAChB,aAAa;EACb,SAAS;EACT,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,qBAAqB;EACrB,gBAAgB;EAChB,kBAAkB;EAClB,sCAAsC;EACtC,+BAA+B;AACjC;;AAEA;EACE,qCAAqC;AACvC;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,WAAW;AACb","sourcesContent":[":root {\r\n  --light :#ecf6f9;\r\n  --light-hover: #e2f2f6;\r\n  --light-active: #c3e4ec;\r\n\r\n  --normal: #3ca9c3;\r\n  --normal-hover: #3698b0;\r\n  --normal-active: #30879c;\r\n\r\n  --sec-normal: #f5eedc;\r\n}\r\n\r\n/* Reset margin dan padding body dan html */\r\nhtml, body {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* Pastikan header mengambil lebar penuh */\r\nheader {\r\n  width: 100%;\r\n  background-color: var(--sec-normal);\r\n  padding: 10px 20px;\r\n  box-sizing: border-box; /* supaya padding tidak membuat lebar meluber */\r\n}\r\n\r\n.main-header {\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  /* ganti space-between dengan flex-start */\r\n  justify-content: flex-start;\r\n  gap: 40px; /* jarak antar logo dan nav */\r\n}\r\n\r\n\r\n/* Nav list */\r\n.nav-list {\r\n  list-style: none;\r\n  display: flex;\r\n  gap: 16px;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.nav-list li a {\r\n  color: white;\r\n  padding: 8px 16px;\r\n  text-decoration: none;\r\n  font-weight: 600;\r\n  border-radius: 4px;\r\n  transition: background-color 0.3s ease;\r\n  background-color: var(--normal);\r\n}\r\n\r\n.nav-list li a:hover {\r\n  background-color: var(--normal-hover);\r\n}\r\n\r\n.nav-list li a:active {\r\n  background-color: var(--normal-active);\r\n}\r\n\r\n.logo-image {\r\n  max-height: 60px;\r\n  height: auto;\r\n  width: auto;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e684b031c62f10205ea7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi45MjUzMDNmZWU2YTg1MjU0YTk3My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sd0ZBQXdGLFlBQVksYUFBYSxjQUFjLGFBQWEsYUFBYSxjQUFjLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEseUJBQXlCLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsdUJBQXVCLFFBQVEsVUFBVSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsZ0NBQWdDLHVCQUF1Qiw2QkFBNkIsOEJBQThCLDRCQUE0Qiw4QkFBOEIsK0JBQStCLGdDQUFnQyxLQUFLLG9FQUFvRSxnQkFBZ0IsaUJBQWlCLDZCQUE2QixLQUFLLCtEQUErRCxrQkFBa0IsMENBQTBDLHlCQUF5Qiw4QkFBOEIscURBQXFELHNCQUFzQixrQkFBa0Isb0JBQW9CLDBCQUEwQixtRkFBbUYsaUJBQWlCLG1DQUFtQyx5Q0FBeUMsdUJBQXVCLG9CQUFvQixnQkFBZ0IsZ0JBQWdCLGlCQUFpQixLQUFLLHdCQUF3QixtQkFBbUIsd0JBQXdCLDRCQUE0Qix1QkFBdUIseUJBQXlCLDZDQUE2QyxzQ0FBc0MsS0FBSyw4QkFBOEIsNENBQTRDLEtBQUssK0JBQStCLDZDQUE2QyxLQUFLLHFCQUFxQix1QkFBdUIsbUJBQW1CLGtCQUFrQixLQUFLLDJCQUEyQjtBQUM5bUU7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7O1VDN0V2QyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xyXG4gIC0tbGlnaHQgOiNlY2Y2Zjk7XHJcbiAgLS1saWdodC1ob3ZlcjogI2UyZjJmNjtcclxuICAtLWxpZ2h0LWFjdGl2ZTogI2MzZTRlYztcclxuXHJcbiAgLS1ub3JtYWw6ICMzY2E5YzM7XHJcbiAgLS1ub3JtYWwtaG92ZXI6ICMzNjk4YjA7XHJcbiAgLS1ub3JtYWwtYWN0aXZlOiAjMzA4NzljO1xyXG5cclxuICAtLXNlYy1ub3JtYWw6ICNmNWVlZGM7XHJcbn1cclxuXHJcbi8qIFJlc2V0IG1hcmdpbiBkYW4gcGFkZGluZyBib2R5IGRhbiBodG1sICovXHJcbmh0bWwsIGJvZHkge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi8qIFBhc3Rpa2FuIGhlYWRlciBtZW5nYW1iaWwgbGViYXIgcGVudWggKi9cclxuaGVhZGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWMtbm9ybWFsKTtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogc3VwYXlhIHBhZGRpbmcgdGlkYWsgbWVtYnVhdCBsZWJhciBtZWx1YmVyICovXHJcbn1cclxuXHJcbi5tYWluLWhlYWRlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC8qIGdhbnRpIHNwYWNlLWJldHdlZW4gZGVuZ2FuIGZsZXgtc3RhcnQgKi9cclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgZ2FwOiA0MHB4OyAvKiBqYXJhayBhbnRhciBsb2dvIGRhbiBuYXYgKi9cclxufVxyXG5cclxuXHJcbi8qIE5hdiBsaXN0ICovXHJcbi5uYXYtbGlzdCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMTZweDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLm5hdi1saXN0IGxpIGEge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiA4cHggMTZweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm9ybWFsKTtcclxufVxyXG5cclxuLm5hdi1saXN0IGxpIGE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vcm1hbC1ob3Zlcik7XHJcbn1cclxuXHJcbi5uYXYtbGlzdCBsaSBhOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm9ybWFsLWFjdGl2ZSk7XHJcbn1cclxuXHJcbi5sb2dvLWltYWdlIHtcclxuICBtYXgtaGVpZ2h0OiA2MHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLHVCQUF1Qjs7RUFFdkIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2Qix3QkFBd0I7O0VBRXhCLHFCQUFxQjtBQUN2Qjs7QUFFQSwyQ0FBMkM7QUFDM0M7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQSwwQ0FBMEM7QUFDMUM7RUFDRSxXQUFXO0VBQ1gsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQixzQkFBc0IsRUFBRSwrQ0FBK0M7QUFDekU7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwwQ0FBMEM7RUFDMUMsMkJBQTJCO0VBQzNCLFNBQVMsRUFBRSw2QkFBNkI7QUFDMUM7OztBQUdBLGFBQWE7QUFDYjtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsU0FBUztFQUNULFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHNDQUFzQztFQUN0QywrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFdBQVc7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAtLWxpZ2h0IDojZWNmNmY5O1xcclxcbiAgLS1saWdodC1ob3ZlcjogI2UyZjJmNjtcXHJcXG4gIC0tbGlnaHQtYWN0aXZlOiAjYzNlNGVjO1xcclxcblxcclxcbiAgLS1ub3JtYWw6ICMzY2E5YzM7XFxyXFxuICAtLW5vcm1hbC1ob3ZlcjogIzM2OThiMDtcXHJcXG4gIC0tbm9ybWFsLWFjdGl2ZTogIzMwODc5YztcXHJcXG5cXHJcXG4gIC0tc2VjLW5vcm1hbDogI2Y1ZWVkYztcXHJcXG59XFxyXFxuXFxyXFxuLyogUmVzZXQgbWFyZ2luIGRhbiBwYWRkaW5nIGJvZHkgZGFuIGh0bWwgKi9cXHJcXG5odG1sLCBib2R5IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQYXN0aWthbiBoZWFkZXIgbWVuZ2FtYmlsIGxlYmFyIHBlbnVoICovXFxyXFxuaGVhZGVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VjLW5vcm1hbCk7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBzdXBheWEgcGFkZGluZyB0aWRhayBtZW1idWF0IGxlYmFyIG1lbHViZXIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLm1haW4taGVhZGVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAvKiBnYW50aSBzcGFjZS1iZXR3ZWVuIGRlbmdhbiBmbGV4LXN0YXJ0ICovXFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBnYXA6IDQwcHg7IC8qIGphcmFrIGFudGFyIGxvZ28gZGFuIG5hdiAqL1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBOYXYgbGlzdCAqL1xcclxcbi5uYXYtbGlzdCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMTZweDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGlzdCBsaSBhIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm9ybWFsKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saXN0IGxpIGE6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm9ybWFsLWhvdmVyKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saXN0IGxpIGE6YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vcm1hbC1hY3RpdmUpO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nby1pbWFnZSB7XFxyXFxuICBtYXgtaGVpZ2h0OiA2MHB4O1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgd2lkdGg6IGF1dG87XFxyXFxufVxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlNjg0YjAzMWM2MmYxMDIwNWVhN1wiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==