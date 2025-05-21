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
}

/* Override Bootstrap primary button to use your custom colors */
.btn-primary {
  background-color: var(--normal);
  border-color: var(--normal);
  color: white;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active {
  background-color: var(--normal-hover);
  border-color: var(--normal-hover);
  color: white;
}

.btn-primary:active {
  background-color: var(--normal-active);
  border-color: var(--normal-active);
  color: white;
}

/* Jika ingin juga override btn-success (register button) */
.btn-success {
  background-color: var(--normal);
  border-color: var(--normal);
  color: white;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.btn-success:hover,
.btn-success:focus,
.btn-success:active {
  background-color: var(--normal-hover);
  border-color: var(--normal-hover);
  color: white;
}

.btn-success:active {
  background-color: var(--normal-active);
  border-color: var(--normal-active);
  color: white;
}
`, "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB,EAAE,+BAA+B;EACtD,iBAAiB;EACjB,uBAAuB;EACvB,wBAAwB;AAC1B;;AAEA,wDAAwD;AACxD;EACE,kBAAkB;EAClB,mBAAmB;EACnB,mCAAmC;AACrC;;AAEA,yDAAyD;AACzD;EACE,mBAAmB,EAAE,oCAAoC;AAC3D;;AAEA,6CAA6C;AAC7C;EACE,oBAAoB;EACpB,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;EACjB,sCAAsC;AACxC;;AAEA;EACE,qCAAqC;EACrC,YAAY;AACd;;AAEA;EACE,sCAAsC;EACtC,YAAY;AACd;;AAEA,gCAAgC;AAChC;EACE,oBAAoB;EACpB,gBAAgB;EAChB,iBAAiB;EACjB,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE,YAAY,EAAE,kCAAkC;EAChD,WAAW;AACb;;AAEA,gEAAgE;AAChE;EACE,+BAA+B;EAC/B,2BAA2B;EAC3B,YAAY;EACZ,8DAA8D;AAChE;;AAEA;;;EAGE,qCAAqC;EACrC,iCAAiC;EACjC,YAAY;AACd;;AAEA;EACE,sCAAsC;EACtC,kCAAkC;EAClC,YAAY;AACd;;AAEA,2DAA2D;AAC3D;EACE,+BAA+B;EAC/B,2BAA2B;EAC3B,YAAY;EACZ,8DAA8D;AAChE;;AAEA;;;EAGE,qCAAqC;EACrC,iCAAiC;EACjC,YAAY;AACd;;AAEA;EACE,sCAAsC;EACtC,kCAAkC;EAClC,YAAY;AACd","sourcesContent":[":root {\r\n  --sec-normal: #f5eedc; /* warna header yang kamu mau */\r\n  --normal: #3ca9c3;\r\n  --normal-hover: #3698b0;\r\n  --normal-active: #30879c;\r\n}\r\n\r\n/* Override navbar Bootstrap supaya pakai warna custom */\r\n.custom-navbar {\r\n  padding-left: 3rem;\r\n  padding-right: 3rem;\r\n  background-color: var(--sec-normal);\r\n}\r\n\r\n/* Kalau navbar toggler icon terlalu gelap, bisa diubah */\r\n.custom-navbar .navbar-toggler-icon {\r\n  filter: invert(0.4); /* atur supaya icon terlihat jelas */\r\n}\r\n\r\n/* Nav link pakai warna sesuai var --normal */\r\n.custom-navbar .nav-link {\r\n  color: var(--normal);\r\n  font-size: 1.1rem;\r\n  font-weight: 600;\r\n  border-radius: 4px;\r\n  padding: 8px 16px;\r\n  transition: background-color 0.3s ease;\r\n}\r\n\r\n.custom-navbar .nav-link:hover {\r\n  background-color: var(--normal-hover);\r\n  color: white;\r\n}\r\n\r\n.custom-navbar .nav-link:active {\r\n  background-color: var(--normal-active);\r\n  color: white;\r\n}\r\n\r\n/* Navbar brand (logo) styling */\r\n.custom-navbar .navbar-brand {\r\n  color: var(--normal);\r\n  font-weight: 600;\r\n  font-size: 1.4rem;\r\n  text-decoration: none;\r\n  margin-right: 2rem;\r\n}\r\n\r\n.logo-image {\r\n  height: 60px; /* contoh, atur sesuai kebutuhan */\r\n  width: auto;\r\n}\r\n\r\n/* Override Bootstrap primary button to use your custom colors */\r\n.btn-primary {\r\n  background-color: var(--normal);\r\n  border-color: var(--normal);\r\n  color: white;\r\n  transition: background-color 0.3s ease, border-color 0.3s ease;\r\n}\r\n\r\n.btn-primary:hover,\r\n.btn-primary:focus,\r\n.btn-primary:active {\r\n  background-color: var(--normal-hover);\r\n  border-color: var(--normal-hover);\r\n  color: white;\r\n}\r\n\r\n.btn-primary:active {\r\n  background-color: var(--normal-active);\r\n  border-color: var(--normal-active);\r\n  color: white;\r\n}\r\n\r\n/* Jika ingin juga override btn-success (register button) */\r\n.btn-success {\r\n  background-color: var(--normal);\r\n  border-color: var(--normal);\r\n  color: white;\r\n  transition: background-color 0.3s ease, border-color 0.3s ease;\r\n}\r\n\r\n.btn-success:hover,\r\n.btn-success:focus,\r\n.btn-success:active {\r\n  background-color: var(--normal-hover);\r\n  border-color: var(--normal-hover);\r\n  color: white;\r\n}\r\n\r\n.btn-success:active {\r\n  background-color: var(--normal-active);\r\n  border-color: var(--normal-active);\r\n  color: white;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e1df99ce2a79509538dc")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5mMWZmMmY2MGFmZDhlMmU3OTgwMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sd0ZBQXdGLHdCQUF3QixhQUFhLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSx3QkFBd0IsT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssc0JBQXNCLFdBQVcsTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLE9BQU8sWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxPQUFPLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxnQ0FBZ0MsNkJBQTZCLHdEQUF3RCw4QkFBOEIsK0JBQStCLEtBQUsscUZBQXFGLHlCQUF5QiwwQkFBMEIsMENBQTBDLEtBQUssMkdBQTJHLDJCQUEyQiwwQ0FBMEMsb0ZBQW9GLDJCQUEyQix3QkFBd0IsdUJBQXVCLHlCQUF5Qix3QkFBd0IsNkNBQTZDLEtBQUssd0NBQXdDLDRDQUE0QyxtQkFBbUIsS0FBSyx5Q0FBeUMsNkNBQTZDLG1CQUFtQixLQUFLLDJFQUEyRSwyQkFBMkIsdUJBQXVCLHdCQUF3Qiw0QkFBNEIseUJBQXlCLEtBQUsscUJBQXFCLG9CQUFvQixxREFBcUQsS0FBSywyRkFBMkYsc0NBQXNDLGtDQUFrQyxtQkFBbUIscUVBQXFFLEtBQUssMkVBQTJFLDRDQUE0Qyx3Q0FBd0MsbUJBQW1CLEtBQUssNkJBQTZCLDZDQUE2Qyx5Q0FBeUMsbUJBQW1CLEtBQUssc0ZBQXNGLHNDQUFzQyxrQ0FBa0MsbUJBQW1CLHFFQUFxRSxLQUFLLDJFQUEyRSw0Q0FBNEMsd0NBQXdDLG1CQUFtQixLQUFLLDZCQUE2Qiw2Q0FBNkMseUNBQXlDLG1CQUFtQixLQUFLLHVCQUF1QjtBQUNqMUc7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7O1VDdkd2QyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xyXG4gIC0tc2VjLW5vcm1hbDogI2Y1ZWVkYzsgLyogd2FybmEgaGVhZGVyIHlhbmcga2FtdSBtYXUgKi9cclxuICAtLW5vcm1hbDogIzNjYTljMztcclxuICAtLW5vcm1hbC1ob3ZlcjogIzM2OThiMDtcclxuICAtLW5vcm1hbC1hY3RpdmU6ICMzMDg3OWM7XHJcbn1cclxuXHJcbi8qIE92ZXJyaWRlIG5hdmJhciBCb290c3RyYXAgc3VwYXlhIHBha2FpIHdhcm5hIGN1c3RvbSAqL1xyXG4uY3VzdG9tLW5hdmJhciB7XHJcbiAgcGFkZGluZy1sZWZ0OiAzcmVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDNyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VjLW5vcm1hbCk7XHJcbn1cclxuXHJcbi8qIEthbGF1IG5hdmJhciB0b2dnbGVyIGljb24gdGVybGFsdSBnZWxhcCwgYmlzYSBkaXViYWggKi9cclxuLmN1c3RvbS1uYXZiYXIgLm5hdmJhci10b2dnbGVyLWljb24ge1xyXG4gIGZpbHRlcjogaW52ZXJ0KDAuNCk7IC8qIGF0dXIgc3VwYXlhIGljb24gdGVybGloYXQgamVsYXMgKi9cclxufVxyXG5cclxuLyogTmF2IGxpbmsgcGFrYWkgd2FybmEgc2VzdWFpIHZhciAtLW5vcm1hbCAqL1xyXG4uY3VzdG9tLW5hdmJhciAubmF2LWxpbmsge1xyXG4gIGNvbG9yOiB2YXIoLS1ub3JtYWwpO1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4uY3VzdG9tLW5hdmJhciAubmF2LWxpbms6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vcm1hbC1ob3Zlcik7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY3VzdG9tLW5hdmJhciAubmF2LWxpbms6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ub3JtYWwtYWN0aXZlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8qIE5hdmJhciBicmFuZCAobG9nbykgc3R5bGluZyAqL1xyXG4uY3VzdG9tLW5hdmJhciAubmF2YmFyLWJyYW5kIHtcclxuICBjb2xvcjogdmFyKC0tbm9ybWFsKTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XHJcbn1cclxuXHJcbi5sb2dvLWltYWdlIHtcclxuICBoZWlnaHQ6IDYwcHg7IC8qIGNvbnRvaCwgYXR1ciBzZXN1YWkga2VidXR1aGFuICovXHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbi8qIE92ZXJyaWRlIEJvb3RzdHJhcCBwcmltYXJ5IGJ1dHRvbiB0byB1c2UgeW91ciBjdXN0b20gY29sb3JzICovXHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm9ybWFsKTtcclxuICBib3JkZXItY29sb3I6IHZhcigtLW5vcm1hbCk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLCBib3JkZXItY29sb3IgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnk6aG92ZXIsXHJcbi5idG4tcHJpbWFyeTpmb2N1cyxcclxuLmJ0bi1wcmltYXJ5OmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm9ybWFsLWhvdmVyKTtcclxuICBib3JkZXItY29sb3I6IHZhcigtLW5vcm1hbC1ob3Zlcik7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnk6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ub3JtYWwtYWN0aXZlKTtcclxuICBib3JkZXItY29sb3I6IHZhcigtLW5vcm1hbC1hY3RpdmUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLyogSmlrYSBpbmdpbiBqdWdhIG92ZXJyaWRlIGJ0bi1zdWNjZXNzIChyZWdpc3RlciBidXR0b24pICovXHJcbi5idG4tc3VjY2VzcyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm9ybWFsKTtcclxuICBib3JkZXItY29sb3I6IHZhcigtLW5vcm1hbCk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLCBib3JkZXItY29sb3IgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4uYnRuLXN1Y2Nlc3M6aG92ZXIsXHJcbi5idG4tc3VjY2Vzczpmb2N1cyxcclxuLmJ0bi1zdWNjZXNzOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm9ybWFsLWhvdmVyKTtcclxuICBib3JkZXItY29sb3I6IHZhcigtLW5vcm1hbC1ob3Zlcik7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYnRuLXN1Y2Nlc3M6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ub3JtYWwtYWN0aXZlKTtcclxuICBib3JkZXItY29sb3I6IHZhcigtLW5vcm1hbC1hY3RpdmUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFxQixFQUFFLCtCQUErQjtFQUN0RCxpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtBQUMxQjs7QUFFQSx3REFBd0Q7QUFDeEQ7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG1DQUFtQztBQUNyQzs7QUFFQSx5REFBeUQ7QUFDekQ7RUFDRSxtQkFBbUIsRUFBRSxvQ0FBb0M7QUFDM0Q7O0FBRUEsNkNBQTZDO0FBQzdDO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLFlBQVk7QUFDZDs7QUFFQSxnQ0FBZ0M7QUFDaEM7RUFDRSxvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWSxFQUFFLGtDQUFrQztFQUNoRCxXQUFXO0FBQ2I7O0FBRUEsZ0VBQWdFO0FBQ2hFO0VBQ0UsK0JBQStCO0VBQy9CLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osOERBQThEO0FBQ2hFOztBQUVBOzs7RUFHRSxxQ0FBcUM7RUFDckMsaUNBQWlDO0VBQ2pDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxrQ0FBa0M7RUFDbEMsWUFBWTtBQUNkOztBQUVBLDJEQUEyRDtBQUMzRDtFQUNFLCtCQUErQjtFQUMvQiwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLDhEQUE4RDtBQUNoRTs7QUFFQTs7O0VBR0UscUNBQXFDO0VBQ3JDLGlDQUFpQztFQUNqQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsa0NBQWtDO0VBQ2xDLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAtLXNlYy1ub3JtYWw6ICNmNWVlZGM7IC8qIHdhcm5hIGhlYWRlciB5YW5nIGthbXUgbWF1ICovXFxyXFxuICAtLW5vcm1hbDogIzNjYTljMztcXHJcXG4gIC0tbm9ybWFsLWhvdmVyOiAjMzY5OGIwO1xcclxcbiAgLS1ub3JtYWwtYWN0aXZlOiAjMzA4NzljO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBPdmVycmlkZSBuYXZiYXIgQm9vdHN0cmFwIHN1cGF5YSBwYWthaSB3YXJuYSBjdXN0b20gKi9cXHJcXG4uY3VzdG9tLW5hdmJhciB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDNyZW07XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAzcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VjLW5vcm1hbCk7XFxyXFxufVxcclxcblxcclxcbi8qIEthbGF1IG5hdmJhciB0b2dnbGVyIGljb24gdGVybGFsdSBnZWxhcCwgYmlzYSBkaXViYWggKi9cXHJcXG4uY3VzdG9tLW5hdmJhciAubmF2YmFyLXRvZ2dsZXItaWNvbiB7XFxyXFxuICBmaWx0ZXI6IGludmVydCgwLjQpOyAvKiBhdHVyIHN1cGF5YSBpY29uIHRlcmxpaGF0IGplbGFzICovXFxyXFxufVxcclxcblxcclxcbi8qIE5hdiBsaW5rIHBha2FpIHdhcm5hIHNlc3VhaSB2YXIgLS1ub3JtYWwgKi9cXHJcXG4uY3VzdG9tLW5hdmJhciAubmF2LWxpbmsge1xcclxcbiAgY29sb3I6IHZhcigtLW5vcm1hbCk7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBwYWRkaW5nOiA4cHggMTZweDtcXHJcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uY3VzdG9tLW5hdmJhciAubmF2LWxpbms6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm9ybWFsLWhvdmVyKTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmN1c3RvbS1uYXZiYXIgLm5hdi1saW5rOmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ub3JtYWwtYWN0aXZlKTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTmF2YmFyIGJyYW5kIChsb2dvKSBzdHlsaW5nICovXFxyXFxuLmN1c3RvbS1uYXZiYXIgLm5hdmJhci1icmFuZCB7XFxyXFxuICBjb2xvcjogdmFyKC0tbm9ybWFsKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28taW1hZ2Uge1xcclxcbiAgaGVpZ2h0OiA2MHB4OyAvKiBjb250b2gsIGF0dXIgc2VzdWFpIGtlYnV0dWhhbiAqL1xcclxcbiAgd2lkdGg6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qIE92ZXJyaWRlIEJvb3RzdHJhcCBwcmltYXJ5IGJ1dHRvbiB0byB1c2UgeW91ciBjdXN0b20gY29sb3JzICovXFxyXFxuLmJ0bi1wcmltYXJ5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vcm1hbCk7XFxyXFxuICBib3JkZXItY29sb3I6IHZhcigtLW5vcm1hbCk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZSwgYm9yZGVyLWNvbG9yIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1wcmltYXJ5OmhvdmVyLFxcclxcbi5idG4tcHJpbWFyeTpmb2N1cyxcXHJcXG4uYnRuLXByaW1hcnk6YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vcm1hbC1ob3Zlcik7XFxyXFxuICBib3JkZXItY29sb3I6IHZhcigtLW5vcm1hbC1ob3Zlcik7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5idG4tcHJpbWFyeTphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm9ybWFsLWFjdGl2ZSk7XFxyXFxuICBib3JkZXItY29sb3I6IHZhcigtLW5vcm1hbC1hY3RpdmUpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBKaWthIGluZ2luIGp1Z2Egb3ZlcnJpZGUgYnRuLXN1Y2Nlc3MgKHJlZ2lzdGVyIGJ1dHRvbikgKi9cXHJcXG4uYnRuLXN1Y2Nlc3Mge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm9ybWFsKTtcXHJcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbm9ybWFsKTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLCBib3JkZXItY29sb3IgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLXN1Y2Nlc3M6aG92ZXIsXFxyXFxuLmJ0bi1zdWNjZXNzOmZvY3VzLFxcclxcbi5idG4tc3VjY2VzczphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm9ybWFsLWhvdmVyKTtcXHJcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbm9ybWFsLWhvdmVyKTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1zdWNjZXNzOmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ub3JtYWwtYWN0aXZlKTtcXHJcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbm9ybWFsLWFjdGl2ZSk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlMWRmOTljZTJhNzk1MDk1MzhkY1wiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==