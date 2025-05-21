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

/* Main-header supaya lebar 100% */
.main-header {
  padding: 0 50px; /* padding atas-bawah 0, kiri-kanan 20px */
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

`, "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,sBAAsB;EACtB,uBAAuB;;EAEvB,iBAAiB;EACjB,uBAAuB;EACvB,wBAAwB;;EAExB,qBAAqB;AACvB;;AAEA,2CAA2C;AAC3C;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA,0CAA0C;AAC1C;EACE,WAAW;EACX,mCAAmC;EACnC,kBAAkB;EAClB,sBAAsB,EAAE,+CAA+C;AACzE;;AAEA,kCAAkC;AAClC;EACE,eAAe,EAAE,0CAA0C;EAC3D,WAAW;EACX,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA,aAAa;AACb;EACE,gBAAgB;EAChB,aAAa;EACb,SAAS;EACT,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,qBAAqB;EACrB,gBAAgB;EAChB,kBAAkB;EAClB,sCAAsC;EACtC,+BAA+B;AACjC;;AAEA;EACE,qCAAqC;AACvC;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,WAAW;AACb","sourcesContent":[":root {\r\n  --light :#ecf6f9;\r\n  --light-hover: #e2f2f6;\r\n  --light-active: #c3e4ec;\r\n\r\n  --normal: #3ca9c3;\r\n  --normal-hover: #3698b0;\r\n  --normal-active: #30879c;\r\n\r\n  --sec-normal: #f5eedc;\r\n}\r\n\r\n/* Reset margin dan padding body dan html */\r\nhtml, body {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* Pastikan header mengambil lebar penuh */\r\nheader {\r\n  width: 100%;\r\n  background-color: var(--sec-normal);\r\n  padding: 10px 20px;\r\n  box-sizing: border-box; /* supaya padding tidak membuat lebar meluber */\r\n}\r\n\r\n/* Main-header supaya lebar 100% */\r\n.main-header {\r\n  padding: 0 50px; /* padding atas-bawah 0, kiri-kanan 20px */\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n/* Nav list */\r\n.nav-list {\r\n  list-style: none;\r\n  display: flex;\r\n  gap: 16px;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.nav-list li a {\r\n  color: white;\r\n  padding: 8px 16px;\r\n  text-decoration: none;\r\n  font-weight: 600;\r\n  border-radius: 4px;\r\n  transition: background-color 0.3s ease;\r\n  background-color: var(--normal);\r\n}\r\n\r\n.nav-list li a:hover {\r\n  background-color: var(--normal-hover);\r\n}\r\n\r\n.nav-list li a:active {\r\n  background-color: var(--normal-active);\r\n}\r\n\r\n.logo-image {\r\n  max-height: 60px;\r\n  height: auto;\r\n  width: auto;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("15c0a967bf2b1e558659")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42NWVlMGI1MjgxYTY3N2Y3ZGI3Yy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHdGQUF3RixZQUFZLGFBQWEsY0FBYyxhQUFhLGFBQWEsY0FBYyxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLHlCQUF5QixPQUFPLFlBQVksTUFBTSxzQkFBc0IsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLGdDQUFnQyx1QkFBdUIsNkJBQTZCLDhCQUE4Qiw0QkFBNEIsOEJBQThCLCtCQUErQixnQ0FBZ0MsS0FBSyxvRUFBb0UsZ0JBQWdCLGlCQUFpQiw2QkFBNkIsS0FBSywrREFBK0Qsa0JBQWtCLDBDQUEwQyx5QkFBeUIsOEJBQThCLHFEQUFxRCw2REFBNkQsdUJBQXVCLDZEQUE2RCxvQkFBb0IscUNBQXFDLDBCQUEwQixLQUFLLHFDQUFxQyx1QkFBdUIsb0JBQW9CLGdCQUFnQixnQkFBZ0IsaUJBQWlCLEtBQUssd0JBQXdCLG1CQUFtQix3QkFBd0IsNEJBQTRCLHVCQUF1Qix5QkFBeUIsNkNBQTZDLHNDQUFzQyxLQUFLLDhCQUE4Qiw0Q0FBNEMsS0FBSywrQkFBK0IsNkNBQTZDLEtBQUsscUJBQXFCLHVCQUF1QixtQkFBbUIsa0JBQWtCLEtBQUssMkJBQTJCO0FBQ3JuRTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7VUM1RXZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XHJcbiAgLS1saWdodCA6I2VjZjZmOTtcclxuICAtLWxpZ2h0LWhvdmVyOiAjZTJmMmY2O1xyXG4gIC0tbGlnaHQtYWN0aXZlOiAjYzNlNGVjO1xyXG5cclxuICAtLW5vcm1hbDogIzNjYTljMztcclxuICAtLW5vcm1hbC1ob3ZlcjogIzM2OThiMDtcclxuICAtLW5vcm1hbC1hY3RpdmU6ICMzMDg3OWM7XHJcblxyXG4gIC0tc2VjLW5vcm1hbDogI2Y1ZWVkYztcclxufVxyXG5cclxuLyogUmVzZXQgbWFyZ2luIGRhbiBwYWRkaW5nIGJvZHkgZGFuIGh0bWwgKi9cclxuaHRtbCwgYm9keSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLyogUGFzdGlrYW4gaGVhZGVyIG1lbmdhbWJpbCBsZWJhciBwZW51aCAqL1xyXG5oZWFkZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlYy1ub3JtYWwpO1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBzdXBheWEgcGFkZGluZyB0aWRhayBtZW1idWF0IGxlYmFyIG1lbHViZXIgKi9cclxufVxyXG5cclxuLyogTWFpbi1oZWFkZXIgc3VwYXlhIGxlYmFyIDEwMCUgKi9cclxuLm1haW4taGVhZGVyIHtcclxuICBwYWRkaW5nOiAwIDUwcHg7IC8qIHBhZGRpbmcgYXRhcy1iYXdhaCAwLCBraXJpLWthbmFuIDIwcHggKi9cclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4vKiBOYXYgbGlzdCAqL1xyXG4ubmF2LWxpc3Qge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDE2cHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5uYXYtbGlzdCBsaSBhIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vcm1hbCk7XHJcbn1cclxuXHJcbi5uYXYtbGlzdCBsaSBhOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ub3JtYWwtaG92ZXIpO1xyXG59XHJcblxyXG4ubmF2LWxpc3QgbGkgYTphY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vcm1hbC1hY3RpdmUpO1xyXG59XHJcblxyXG4ubG9nby1pbWFnZSB7XHJcbiAgbWF4LWhlaWdodDogNjBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0Qix1QkFBdUI7O0VBRXZCLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsd0JBQXdCOztFQUV4QixxQkFBcUI7QUFDdkI7O0FBRUEsMkNBQTJDO0FBQzNDO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUEsMENBQTBDO0FBQzFDO0VBQ0UsV0FBVztFQUNYLG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIsc0JBQXNCLEVBQUUsK0NBQStDO0FBQ3pFOztBQUVBLGtDQUFrQztBQUNsQztFQUNFLGVBQWUsRUFBRSwwQ0FBMEM7RUFDM0QsV0FBVztFQUNYLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBLGFBQWE7QUFDYjtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsU0FBUztFQUNULFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHNDQUFzQztFQUN0QywrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFdBQVc7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAtLWxpZ2h0IDojZWNmNmY5O1xcclxcbiAgLS1saWdodC1ob3ZlcjogI2UyZjJmNjtcXHJcXG4gIC0tbGlnaHQtYWN0aXZlOiAjYzNlNGVjO1xcclxcblxcclxcbiAgLS1ub3JtYWw6ICMzY2E5YzM7XFxyXFxuICAtLW5vcm1hbC1ob3ZlcjogIzM2OThiMDtcXHJcXG4gIC0tbm9ybWFsLWFjdGl2ZTogIzMwODc5YztcXHJcXG5cXHJcXG4gIC0tc2VjLW5vcm1hbDogI2Y1ZWVkYztcXHJcXG59XFxyXFxuXFxyXFxuLyogUmVzZXQgbWFyZ2luIGRhbiBwYWRkaW5nIGJvZHkgZGFuIGh0bWwgKi9cXHJcXG5odG1sLCBib2R5IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQYXN0aWthbiBoZWFkZXIgbWVuZ2FtYmlsIGxlYmFyIHBlbnVoICovXFxyXFxuaGVhZGVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VjLW5vcm1hbCk7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBzdXBheWEgcGFkZGluZyB0aWRhayBtZW1idWF0IGxlYmFyIG1lbHViZXIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogTWFpbi1oZWFkZXIgc3VwYXlhIGxlYmFyIDEwMCUgKi9cXHJcXG4ubWFpbi1oZWFkZXIge1xcclxcbiAgcGFkZGluZzogMCA1MHB4OyAvKiBwYWRkaW5nIGF0YXMtYmF3YWggMCwga2lyaS1rYW5hbiAyMHB4ICovXFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBOYXYgbGlzdCAqL1xcclxcbi5uYXYtbGlzdCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMTZweDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGlzdCBsaSBhIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm9ybWFsKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saXN0IGxpIGE6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm9ybWFsLWhvdmVyKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saXN0IGxpIGE6YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vcm1hbC1hY3RpdmUpO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nby1pbWFnZSB7XFxyXFxuICBtYXgtaGVpZ2h0OiA2MHB4O1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgd2lkdGg6IGF1dG87XFxyXFxufVxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxNWMwYTk2N2JmMmIxZTU1ODY1OVwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==