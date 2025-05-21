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
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Brand/logo styling */
.brand-name {
  color: white;
  font-size: 1.4rem;
  font-weight: 600;
  text-decoration: none;
}

.nav {
  padding: 0 50px; /* padding atas-bawah 0, kiri-kanan 20px */
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

`, "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,sBAAsB;EACtB,uBAAuB;;EAEvB,iBAAiB;EACjB,uBAAuB;EACvB,wBAAwB;;EAExB,qBAAqB;AACvB;;AAEA,2CAA2C;AAC3C;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA,0CAA0C;AAC1C;EACE,WAAW;EACX,mCAAmC;EACnC,kBAAkB;EAClB,sBAAsB,EAAE,+CAA+C;AACzE;;AAEA,kCAAkC;AAClC;EACE,WAAW;EACX,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA,uBAAuB;AACvB;EACE,YAAY;EACZ,iBAAiB;EACjB,gBAAgB;EAChB,qBAAqB;AACvB;;AAEA;EACE,eAAe,EAAE,0CAA0C;AAC7D;;AAEA,aAAa;AACb;EACE,gBAAgB;EAChB,aAAa;EACb,SAAS;EACT,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,qBAAqB;EACrB,gBAAgB;EAChB,kBAAkB;EAClB,sCAAsC;EACtC,+BAA+B;AACjC;;AAEA;EACE,qCAAqC;AACvC;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,WAAW;AACb","sourcesContent":[":root {\r\n  --light :#ecf6f9;\r\n  --light-hover: #e2f2f6;\r\n  --light-active: #c3e4ec;\r\n\r\n  --normal: #3ca9c3;\r\n  --normal-hover: #3698b0;\r\n  --normal-active: #30879c;\r\n\r\n  --sec-normal: #f5eedc;\r\n}\r\n\r\n/* Reset margin dan padding body dan html */\r\nhtml, body {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* Pastikan header mengambil lebar penuh */\r\nheader {\r\n  width: 100%;\r\n  background-color: var(--sec-normal);\r\n  padding: 10px 20px;\r\n  box-sizing: border-box; /* supaya padding tidak membuat lebar meluber */\r\n}\r\n\r\n/* Main-header supaya lebar 100% */\r\n.main-header {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n/* Brand/logo styling */\r\n.brand-name {\r\n  color: white;\r\n  font-size: 1.4rem;\r\n  font-weight: 600;\r\n  text-decoration: none;\r\n}\r\n\r\n.nav {\r\n  padding: 0 50px; /* padding atas-bawah 0, kiri-kanan 20px */\r\n}\r\n\r\n/* Nav list */\r\n.nav-list {\r\n  list-style: none;\r\n  display: flex;\r\n  gap: 16px;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.nav-list li a {\r\n  color: white;\r\n  padding: 8px 16px;\r\n  text-decoration: none;\r\n  font-weight: 600;\r\n  border-radius: 4px;\r\n  transition: background-color 0.3s ease;\r\n  background-color: var(--normal);\r\n}\r\n\r\n.nav-list li a:hover {\r\n  background-color: var(--normal-hover);\r\n}\r\n\r\n.nav-list li a:active {\r\n  background-color: var(--normal-active);\r\n}\r\n\r\n.logo-image {\r\n  max-height: 60px;\r\n  height: auto;\r\n  width: auto;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("728a1ba65a473eebdb82")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zM2NmMDg1NTM4YzRiOTc0MDQ5OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx3RkFBd0YsWUFBWSxhQUFhLGNBQWMsYUFBYSxhQUFhLGNBQWMsYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSx5QkFBeUIsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxzQkFBc0IsT0FBTyxVQUFVLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxnQ0FBZ0MsdUJBQXVCLDZCQUE2Qiw4QkFBOEIsNEJBQTRCLDhCQUE4QiwrQkFBK0IsZ0NBQWdDLEtBQUssb0VBQW9FLGdCQUFnQixpQkFBaUIsNkJBQTZCLEtBQUssK0RBQStELGtCQUFrQiwwQ0FBMEMseUJBQXlCLDhCQUE4QixxREFBcUQsNkRBQTZELGtCQUFrQixvQkFBb0IscUNBQXFDLDBCQUEwQixLQUFLLGlEQUFpRCxtQkFBbUIsd0JBQXdCLHVCQUF1Qiw0QkFBNEIsS0FBSyxjQUFjLHVCQUF1QixnREFBZ0QscUNBQXFDLHVCQUF1QixvQkFBb0IsZ0JBQWdCLGdCQUFnQixpQkFBaUIsS0FBSyx3QkFBd0IsbUJBQW1CLHdCQUF3Qiw0QkFBNEIsdUJBQXVCLHlCQUF5Qiw2Q0FBNkMsc0NBQXNDLEtBQUssOEJBQThCLDRDQUE0QyxLQUFLLCtCQUErQiw2Q0FBNkMsS0FBSyxxQkFBcUIsdUJBQXVCLG1CQUFtQixrQkFBa0IsS0FBSywyQkFBMkI7QUFDaDNFO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7OztVQ3ZGdkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcclxuICAtLWxpZ2h0IDojZWNmNmY5O1xyXG4gIC0tbGlnaHQtaG92ZXI6ICNlMmYyZjY7XHJcbiAgLS1saWdodC1hY3RpdmU6ICNjM2U0ZWM7XHJcblxyXG4gIC0tbm9ybWFsOiAjM2NhOWMzO1xyXG4gIC0tbm9ybWFsLWhvdmVyOiAjMzY5OGIwO1xyXG4gIC0tbm9ybWFsLWFjdGl2ZTogIzMwODc5YztcclxuXHJcbiAgLS1zZWMtbm9ybWFsOiAjZjVlZWRjO1xyXG59XHJcblxyXG4vKiBSZXNldCBtYXJnaW4gZGFuIHBhZGRpbmcgYm9keSBkYW4gaHRtbCAqL1xyXG5odG1sLCBib2R5IHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4vKiBQYXN0aWthbiBoZWFkZXIgbWVuZ2FtYmlsIGxlYmFyIHBlbnVoICovXHJcbmhlYWRlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VjLW5vcm1hbCk7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIHN1cGF5YSBwYWRkaW5nIHRpZGFrIG1lbWJ1YXQgbGViYXIgbWVsdWJlciAqL1xyXG59XHJcblxyXG4vKiBNYWluLWhlYWRlciBzdXBheWEgbGViYXIgMTAwJSAqL1xyXG4ubWFpbi1oZWFkZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIEJyYW5kL2xvZ28gc3R5bGluZyAqL1xyXG4uYnJhbmQtbmFtZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4ubmF2IHtcclxuICBwYWRkaW5nOiAwIDUwcHg7IC8qIHBhZGRpbmcgYXRhcy1iYXdhaCAwLCBraXJpLWthbmFuIDIwcHggKi9cclxufVxyXG5cclxuLyogTmF2IGxpc3QgKi9cclxuLm5hdi1saXN0IHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxNnB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ubmF2LWxpc3QgbGkgYSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ub3JtYWwpO1xyXG59XHJcblxyXG4ubmF2LWxpc3QgbGkgYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm9ybWFsLWhvdmVyKTtcclxufVxyXG5cclxuLm5hdi1saXN0IGxpIGE6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ub3JtYWwtYWN0aXZlKTtcclxufVxyXG5cclxuLmxvZ28taW1hZ2Uge1xyXG4gIG1heC1oZWlnaHQ6IDYwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsdUJBQXVCOztFQUV2QixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLHdCQUF3Qjs7RUFFeEIscUJBQXFCO0FBQ3ZCOztBQUVBLDJDQUEyQztBQUMzQztFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBLDBDQUEwQztBQUMxQztFQUNFLFdBQVc7RUFDWCxtQ0FBbUM7RUFDbkMsa0JBQWtCO0VBQ2xCLHNCQUFzQixFQUFFLCtDQUErQztBQUN6RTs7QUFFQSxrQ0FBa0M7QUFDbEM7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUEsdUJBQXVCO0FBQ3ZCO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZSxFQUFFLDBDQUEwQztBQUM3RDs7QUFFQSxhQUFhO0FBQ2I7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFNBQVM7RUFDVCxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixzQ0FBc0M7RUFDdEMsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixXQUFXO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgLS1saWdodCA6I2VjZjZmOTtcXHJcXG4gIC0tbGlnaHQtaG92ZXI6ICNlMmYyZjY7XFxyXFxuICAtLWxpZ2h0LWFjdGl2ZTogI2MzZTRlYztcXHJcXG5cXHJcXG4gIC0tbm9ybWFsOiAjM2NhOWMzO1xcclxcbiAgLS1ub3JtYWwtaG92ZXI6ICMzNjk4YjA7XFxyXFxuICAtLW5vcm1hbC1hY3RpdmU6ICMzMDg3OWM7XFxyXFxuXFxyXFxuICAtLXNlYy1ub3JtYWw6ICNmNWVlZGM7XFxyXFxufVxcclxcblxcclxcbi8qIFJlc2V0IG1hcmdpbiBkYW4gcGFkZGluZyBib2R5IGRhbiBodG1sICovXFxyXFxuaHRtbCwgYm9keSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLyogUGFzdGlrYW4gaGVhZGVyIG1lbmdhbWJpbCBsZWJhciBwZW51aCAqL1xcclxcbmhlYWRlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlYy1ub3JtYWwpO1xcclxcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogc3VwYXlhIHBhZGRpbmcgdGlkYWsgbWVtYnVhdCBsZWJhciBtZWx1YmVyICovXFxyXFxufVxcclxcblxcclxcbi8qIE1haW4taGVhZGVyIHN1cGF5YSBsZWJhciAxMDAlICovXFxyXFxuLm1haW4taGVhZGVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIEJyYW5kL2xvZ28gc3R5bGluZyAqL1xcclxcbi5icmFuZC1uYW1lIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiB7XFxyXFxuICBwYWRkaW5nOiAwIDUwcHg7IC8qIHBhZGRpbmcgYXRhcy1iYXdhaCAwLCBraXJpLWthbmFuIDIwcHggKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogTmF2IGxpc3QgKi9cXHJcXG4ubmF2LWxpc3Qge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDE2cHg7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpc3QgbGkgYSB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBwYWRkaW5nOiA4cHggMTZweDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vcm1hbCk7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGlzdCBsaSBhOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vcm1hbC1ob3Zlcik7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGlzdCBsaSBhOmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ub3JtYWwtYWN0aXZlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28taW1hZ2Uge1xcclxcbiAgbWF4LWhlaWdodDogNjBweDtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNzI4YTFiYTY1YTQ3M2VlYmRiODJcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=