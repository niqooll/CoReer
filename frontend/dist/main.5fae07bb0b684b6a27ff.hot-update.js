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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3E%3Cpath stroke=%27rgba%2858, 137, 155, 0.7%29%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3E%3C/svg%3E */ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3E%3Cpath stroke=%27rgba%2858, 137, 155, 0.7%29%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --sec-normal: #f5eedc;
  --normal: #3ca9c3;
  --normal-hover: #3698b0;
  --normal-active: #30879c;
  --dark:#2d7f92;
}

html, body {
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
}

#app {
  flex: 1 0 auto;
}

/* Navbar custom styling */
.custom-navbar {
  padding-left: 3rem;
  padding-right: 3rem;
  background-color: var(--sec-normal);
}

/* Toggler icon */
.custom-navbar .navbar-toggler-icon {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

/* Nav link styles */
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

/* Brand style */
.custom-navbar .navbar-brand {
  color: var(--normal);
  font-weight: 600;
  font-size: 1.4rem;
  text-decoration: none;
  margin-right: 2rem;
}

/* Optional logo image style */
.logo-image {
  height: 60px;
  width: auto;
}

/* Buttons custom */
.btn-primary,
.btn-success {
  background-color: var(--normal);
  border-color: var(--normal);
  color: white;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active,
.btn-success:hover,
.btn-success:focus,
.btn-success:active {
  background-color: var(--normal-hover);
  border-color: var(--normal-hover);
  color: white;
}

.btn-primary:active,
.btn-success:active {
  background-color: var(--normal-active);
  border-color: var(--normal-active);
  color: white;
}


/* Style tombol primary saat disabled */
.btn-primary:disabled,
.btn-primary[disabled] {
  background-color: var(--normal);
  border-color: var(--normal);
  color: white;
  opacity: 0.6;  /* supaya terlihat disabled tapi masih pakai warna utama */
  cursor: not-allowed;
  box-shadow: none;
  pointer-events: none; /* opsional, supaya benar-benar nonaktif */
}


@media (max-width: 991.98px) {
  .custom-navbar {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .custom-navbar .navbar-collapse {
    padding-top: 1rem;
  }

  .custom-navbar .navbar-nav {
    flex-direction: column;
    gap: 1rem; /* agar lebih rapi saat vertikal */
    align-items: center;
  }

  .custom-navbar .nav-link {
    width: 100%;
    padding-left: 1rem;
  }
}

/* Footer Custom */
footer.custom-footer {
  flex-shrink: 0;
  background-color: var(--dark);
  color: white;
  padding: 1rem 0;
}

footer.custom-footer p {
  color: white;
}`, "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,iBAAiB;EACjB,uBAAuB;EACvB,wBAAwB;EACxB,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,SAAS;EACT,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,cAAc;AAChB;;AAEA,0BAA0B;AAC1B;EACE,kBAAkB;EAClB,mBAAmB;EACnB,mCAAmC;AACrC;;AAEA,iBAAiB;AACjB;EACE,yDAAmN;AACrN;;AAEA,oBAAoB;AACpB;EACE,oBAAoB;EACpB,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;EACjB,sCAAsC;AACxC;;AAEA;EACE,qCAAqC;EACrC,YAAY;AACd;;AAEA;EACE,sCAAsC;EACtC,YAAY;AACd;;AAEA,gBAAgB;AAChB;EACE,oBAAoB;EACpB,gBAAgB;EAChB,iBAAiB;EACjB,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA,8BAA8B;AAC9B;EACE,YAAY;EACZ,WAAW;AACb;;AAEA,mBAAmB;AACnB;;EAEE,+BAA+B;EAC/B,2BAA2B;EAC3B,YAAY;EACZ,8DAA8D;AAChE;;AAEA;;;;;;EAME,qCAAqC;EACrC,iCAAiC;EACjC,YAAY;AACd;;AAEA;;EAEE,sCAAsC;EACtC,kCAAkC;EAClC,YAAY;AACd;;;AAGA,uCAAuC;AACvC;;EAEE,+BAA+B;EAC/B,2BAA2B;EAC3B,YAAY;EACZ,YAAY,GAAG,0DAA0D;EACzE,mBAAmB;EACnB,gBAAgB;EAChB,oBAAoB,EAAE,0CAA0C;AAClE;;;AAGA;EACE;IACE,kBAAkB;IAClB,mBAAmB;EACrB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,sBAAsB;IACtB,SAAS,EAAE,kCAAkC;IAC7C,mBAAmB;EACrB;;EAEA;IACE,WAAW;IACX,kBAAkB;EACpB;AACF;;AAEA,kBAAkB;AAClB;EACE,cAAc;EACd,6BAA6B;EAC7B,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,YAAY;AACd","sourcesContent":[":root {\r\n  --sec-normal: #f5eedc;\r\n  --normal: #3ca9c3;\r\n  --normal-hover: #3698b0;\r\n  --normal-active: #30879c;\r\n  --dark:#2d7f92;\r\n}\r\n\r\nhtml, body {\r\n  height: 100%;\r\n  margin: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n#app {\r\n  flex: 1 0 auto;\r\n}\r\n\r\n/* Navbar custom styling */\r\n.custom-navbar {\r\n  padding-left: 3rem;\r\n  padding-right: 3rem;\r\n  background-color: var(--sec-normal);\r\n}\r\n\r\n/* Toggler icon */\r\n.custom-navbar .navbar-toggler-icon {\r\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba%2858, 137, 155, 0.7%29' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\");\r\n}\r\n\r\n/* Nav link styles */\r\n.custom-navbar .nav-link {\r\n  color: var(--normal);\r\n  font-size: 1.1rem;\r\n  font-weight: 600;\r\n  border-radius: 4px;\r\n  padding: 8px 16px;\r\n  transition: background-color 0.3s ease;\r\n}\r\n\r\n.custom-navbar .nav-link:hover {\r\n  background-color: var(--normal-hover);\r\n  color: white;\r\n}\r\n\r\n.custom-navbar .nav-link:active {\r\n  background-color: var(--normal-active);\r\n  color: white;\r\n}\r\n\r\n/* Brand style */\r\n.custom-navbar .navbar-brand {\r\n  color: var(--normal);\r\n  font-weight: 600;\r\n  font-size: 1.4rem;\r\n  text-decoration: none;\r\n  margin-right: 2rem;\r\n}\r\n\r\n/* Optional logo image style */\r\n.logo-image {\r\n  height: 60px;\r\n  width: auto;\r\n}\r\n\r\n/* Buttons custom */\r\n.btn-primary,\r\n.btn-success {\r\n  background-color: var(--normal);\r\n  border-color: var(--normal);\r\n  color: white;\r\n  transition: background-color 0.3s ease, border-color 0.3s ease;\r\n}\r\n\r\n.btn-primary:hover,\r\n.btn-primary:focus,\r\n.btn-primary:active,\r\n.btn-success:hover,\r\n.btn-success:focus,\r\n.btn-success:active {\r\n  background-color: var(--normal-hover);\r\n  border-color: var(--normal-hover);\r\n  color: white;\r\n}\r\n\r\n.btn-primary:active,\r\n.btn-success:active {\r\n  background-color: var(--normal-active);\r\n  border-color: var(--normal-active);\r\n  color: white;\r\n}\r\n\r\n\r\n/* Style tombol primary saat disabled */\r\n.btn-primary:disabled,\r\n.btn-primary[disabled] {\r\n  background-color: var(--normal);\r\n  border-color: var(--normal);\r\n  color: white;\r\n  opacity: 0.6;  /* supaya terlihat disabled tapi masih pakai warna utama */\r\n  cursor: not-allowed;\r\n  box-shadow: none;\r\n  pointer-events: none; /* opsional, supaya benar-benar nonaktif */\r\n}\r\n\r\n\r\n@media (max-width: 991.98px) {\r\n  .custom-navbar {\r\n    padding-left: 1rem;\r\n    padding-right: 1rem;\r\n  }\r\n\r\n  .custom-navbar .navbar-collapse {\r\n    padding-top: 1rem;\r\n  }\r\n\r\n  .custom-navbar .navbar-nav {\r\n    flex-direction: column;\r\n    gap: 1rem; /* agar lebih rapi saat vertikal */\r\n    align-items: center;\r\n  }\r\n\r\n  .custom-navbar .nav-link {\r\n    width: 100%;\r\n    padding-left: 1rem;\r\n  }\r\n}\r\n\r\n/* Footer Custom */\r\nfooter.custom-footer {\r\n  flex-shrink: 0;\r\n  background-color: var(--dark);\r\n  color: white;\r\n  padding: 1rem 0;\r\n}\r\n\r\nfooter.custom-footer p {\r\n  color: white;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("33a4e01e915ad87a5218")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssd0RBQXdELG1CQUFtQixrQkFBa0IsS0FBSywrREFBK0Qsc0NBQXNDLGtDQUFrQyxtQkFBbUIscUVBQXFFLEtBQUssaUpBQWlKLDRDQUE0Qyx3Q0FBd0MsbUJBQW1CLEtBQUsscURBQXFELDZDQUE2Qyx5Q0FBeUMsbUJBQW1CLEtBQUssMEdBQTBHLHNDQUFzQyxrQ0FBa0MsbUJBQW1CLHFCQUFxQixxRkFBcUYsdUJBQXVCLDRCQUE0QixnREFBZ0QsMENBQTBDLHNCQUFzQiwyQkFBMkIsNEJBQTRCLE9BQU8sMkNBQTJDLDBCQUEwQixPQUFPLHNDQUFzQywrQkFBK0IsbUJBQW1CLCtEQUErRCxPQUFPLG9DQUFvQyxvQkFBb0IsMkJBQTJCLE9BQU8sS0FBSyxxREFBcUQscUJBQXFCLG9DQUFvQyxtQkFBbUIsc0JBQXNCLEtBQUssZ0NBQWdDLG1CQUFtQixLQUFLLG1CQUFtQjtBQUN2MUk7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7O1VDckp2QyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0lMjdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyNyB2aWV3Qm94PSUyNzAgMCAzMCAzMCUyNyUzRSUzQ3BhdGggc3Ryb2tlPSUyN3JnYmElMjg1OCwgMTM3LCAxNTUsIDAuNyUyOSUyNyBzdHJva2Utd2lkdGg9JTI3MiUyNyBkPSUyN000IDdoMjJNNCAxNWgyMk00IDIzaDIyJTI3LyUzRSUzQy9zdmclM0VcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcclxuICAtLXNlYy1ub3JtYWw6ICNmNWVlZGM7XHJcbiAgLS1ub3JtYWw6ICMzY2E5YzM7XHJcbiAgLS1ub3JtYWwtaG92ZXI6ICMzNjk4YjA7XHJcbiAgLS1ub3JtYWwtYWN0aXZlOiAjMzA4NzljO1xyXG4gIC0tZGFyazojMmQ3ZjkyO1xyXG59XHJcblxyXG5odG1sLCBib2R5IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuI2FwcCB7XHJcbiAgZmxleDogMSAwIGF1dG87XHJcbn1cclxuXHJcbi8qIE5hdmJhciBjdXN0b20gc3R5bGluZyAqL1xyXG4uY3VzdG9tLW5hdmJhciB7XHJcbiAgcGFkZGluZy1sZWZ0OiAzcmVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDNyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VjLW5vcm1hbCk7XHJcbn1cclxuXHJcbi8qIFRvZ2dsZXIgaWNvbiAqL1xyXG4uY3VzdG9tLW5hdmJhciAubmF2YmFyLXRvZ2dsZXItaWNvbiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xyXG59XHJcblxyXG4vKiBOYXYgbGluayBzdHlsZXMgKi9cclxuLmN1c3RvbS1uYXZiYXIgLm5hdi1saW5rIHtcclxuICBjb2xvcjogdmFyKC0tbm9ybWFsKTtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBwYWRkaW5nOiA4cHggMTZweDtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLmN1c3RvbS1uYXZiYXIgLm5hdi1saW5rOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ub3JtYWwtaG92ZXIpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmN1c3RvbS1uYXZiYXIgLm5hdi1saW5rOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm9ybWFsLWFjdGl2ZSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKiBCcmFuZCBzdHlsZSAqL1xyXG4uY3VzdG9tLW5hdmJhciAubmF2YmFyLWJyYW5kIHtcclxuICBjb2xvcjogdmFyKC0tbm9ybWFsKTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XHJcbn1cclxuXHJcbi8qIE9wdGlvbmFsIGxvZ28gaW1hZ2Ugc3R5bGUgKi9cclxuLmxvZ28taW1hZ2Uge1xyXG4gIGhlaWdodDogNjBweDtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuLyogQnV0dG9ucyBjdXN0b20gKi9cclxuLmJ0bi1wcmltYXJ5LFxyXG4uYnRuLXN1Y2Nlc3Mge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vcm1hbCk7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ub3JtYWwpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZSwgYm9yZGVyLWNvbG9yIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5OmhvdmVyLFxyXG4uYnRuLXByaW1hcnk6Zm9jdXMsXHJcbi5idG4tcHJpbWFyeTphY3RpdmUsXHJcbi5idG4tc3VjY2Vzczpob3ZlcixcclxuLmJ0bi1zdWNjZXNzOmZvY3VzLFxyXG4uYnRuLXN1Y2Nlc3M6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ub3JtYWwtaG92ZXIpO1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbm9ybWFsLWhvdmVyKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeTphY3RpdmUsXHJcbi5idG4tc3VjY2VzczphY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vcm1hbC1hY3RpdmUpO1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbm9ybWFsLWFjdGl2ZSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5cclxuLyogU3R5bGUgdG9tYm9sIHByaW1hcnkgc2FhdCBkaXNhYmxlZCAqL1xyXG4uYnRuLXByaW1hcnk6ZGlzYWJsZWQsXHJcbi5idG4tcHJpbWFyeVtkaXNhYmxlZF0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vcm1hbCk7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ub3JtYWwpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBvcGFjaXR5OiAwLjY7ICAvKiBzdXBheWEgdGVybGloYXQgZGlzYWJsZWQgdGFwaSBtYXNpaCBwYWthaSB3YXJuYSB1dGFtYSAqL1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTsgLyogb3BzaW9uYWwsIHN1cGF5YSBiZW5hci1iZW5hciBub25ha3RpZiAqL1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XHJcbiAgLmN1c3RvbS1uYXZiYXIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcclxuICB9XHJcblxyXG4gIC5jdXN0b20tbmF2YmFyIC5uYXZiYXItY29sbGFwc2Uge1xyXG4gICAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLW5hdmJhciAubmF2YmFyLW5hdiB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxcmVtOyAvKiBhZ2FyIGxlYmloIHJhcGkgc2FhdCB2ZXJ0aWthbCAqL1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5jdXN0b20tbmF2YmFyIC5uYXYtbGluayB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi8qIEZvb3RlciBDdXN0b20gKi9cclxuZm9vdGVyLmN1c3RvbS1mb290ZXIge1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxcmVtIDA7XHJcbn1cclxuXHJcbmZvb3Rlci5jdXN0b20tZm9vdGVyIHAge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osU0FBUztFQUNULGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBLDBCQUEwQjtBQUMxQjtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsbUNBQW1DO0FBQ3JDOztBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLHlEQUFtTjtBQUNyTjs7QUFFQSxvQkFBb0I7QUFDcEI7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsWUFBWTtBQUNkOztBQUVBLGdCQUFnQjtBQUNoQjtFQUNFLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBRUEsOEJBQThCO0FBQzlCO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQSxtQkFBbUI7QUFDbkI7O0VBRUUsK0JBQStCO0VBQy9CLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osOERBQThEO0FBQ2hFOztBQUVBOzs7Ozs7RUFNRSxxQ0FBcUM7RUFDckMsaUNBQWlDO0VBQ2pDLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxzQ0FBc0M7RUFDdEMsa0NBQWtDO0VBQ2xDLFlBQVk7QUFDZDs7O0FBR0EsdUNBQXVDO0FBQ3ZDOztFQUVFLCtCQUErQjtFQUMvQiwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLFlBQVksR0FBRywwREFBMEQ7RUFDekUsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixvQkFBb0IsRUFBRSwwQ0FBMEM7QUFDbEU7OztBQUdBO0VBQ0U7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLFNBQVMsRUFBRSxrQ0FBa0M7SUFDN0MsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLGNBQWM7RUFDZCw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgLS1zZWMtbm9ybWFsOiAjZjVlZWRjO1xcclxcbiAgLS1ub3JtYWw6ICMzY2E5YzM7XFxyXFxuICAtLW5vcm1hbC1ob3ZlcjogIzM2OThiMDtcXHJcXG4gIC0tbm9ybWFsLWFjdGl2ZTogIzMwODc5YztcXHJcXG4gIC0tZGFyazojMmQ3ZjkyO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sLCBib2R5IHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4jYXBwIHtcXHJcXG4gIGZsZXg6IDEgMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBOYXZiYXIgY3VzdG9tIHN0eWxpbmcgKi9cXHJcXG4uY3VzdG9tLW5hdmJhciB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDNyZW07XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAzcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VjLW5vcm1hbCk7XFxyXFxufVxcclxcblxcclxcbi8qIFRvZ2dsZXIgaWNvbiAqL1xcclxcbi5jdXN0b20tbmF2YmFyIC5uYXZiYXItdG9nZ2xlci1pY29uIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAzMCAzMCclM0UlM0NwYXRoIHN0cm9rZT0ncmdiYSUyODU4LCAxMzcsIDE1NSwgMC43JTI5JyBzdHJva2Utd2lkdGg9JzInIGQ9J000IDdoMjJNNCAxNWgyMk00IDIzaDIyJy8lM0UlM0Mvc3ZnJTNFXFxcIik7XFxyXFxufVxcclxcblxcclxcbi8qIE5hdiBsaW5rIHN0eWxlcyAqL1xcclxcbi5jdXN0b20tbmF2YmFyIC5uYXYtbGluayB7XFxyXFxuICBjb2xvcjogdmFyKC0tbm9ybWFsKTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xcclxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5jdXN0b20tbmF2YmFyIC5uYXYtbGluazpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ub3JtYWwtaG92ZXIpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uY3VzdG9tLW5hdmJhciAubmF2LWxpbms6YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vcm1hbC1hY3RpdmUpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBCcmFuZCBzdHlsZSAqL1xcclxcbi5jdXN0b20tbmF2YmFyIC5uYXZiYXItYnJhbmQge1xcclxcbiAgY29sb3I6IHZhcigtLW5vcm1hbCk7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi8qIE9wdGlvbmFsIGxvZ28gaW1hZ2Ugc3R5bGUgKi9cXHJcXG4ubG9nby1pbWFnZSB7XFxyXFxuICBoZWlnaHQ6IDYwcHg7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLyogQnV0dG9ucyBjdXN0b20gKi9cXHJcXG4uYnRuLXByaW1hcnksXFxyXFxuLmJ0bi1zdWNjZXNzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vcm1hbCk7XFxyXFxuICBib3JkZXItY29sb3I6IHZhcigtLW5vcm1hbCk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZSwgYm9yZGVyLWNvbG9yIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1wcmltYXJ5OmhvdmVyLFxcclxcbi5idG4tcHJpbWFyeTpmb2N1cyxcXHJcXG4uYnRuLXByaW1hcnk6YWN0aXZlLFxcclxcbi5idG4tc3VjY2Vzczpob3ZlcixcXHJcXG4uYnRuLXN1Y2Nlc3M6Zm9jdXMsXFxyXFxuLmJ0bi1zdWNjZXNzOmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ub3JtYWwtaG92ZXIpO1xcclxcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ub3JtYWwtaG92ZXIpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLXByaW1hcnk6YWN0aXZlLFxcclxcbi5idG4tc3VjY2VzczphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm9ybWFsLWFjdGl2ZSk7XFxyXFxuICBib3JkZXItY29sb3I6IHZhcigtLW5vcm1hbC1hY3RpdmUpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBTdHlsZSB0b21ib2wgcHJpbWFyeSBzYWF0IGRpc2FibGVkICovXFxyXFxuLmJ0bi1wcmltYXJ5OmRpc2FibGVkLFxcclxcbi5idG4tcHJpbWFyeVtkaXNhYmxlZF0ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm9ybWFsKTtcXHJcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbm9ybWFsKTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIG9wYWNpdHk6IDAuNjsgIC8qIHN1cGF5YSB0ZXJsaWhhdCBkaXNhYmxlZCB0YXBpIG1hc2loIHBha2FpIHdhcm5hIHV0YW1hICovXFxyXFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcclxcbiAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lOyAvKiBvcHNpb25hbCwgc3VwYXlhIGJlbmFyLWJlbmFyIG5vbmFrdGlmICovXFxyXFxufVxcclxcblxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xcclxcbiAgLmN1c3RvbS1uYXZiYXIge1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY3VzdG9tLW5hdmJhciAubmF2YmFyLWNvbGxhcHNlIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY3VzdG9tLW5hdmJhciAubmF2YmFyLW5hdiB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMXJlbTsgLyogYWdhciBsZWJpaCByYXBpIHNhYXQgdmVydGlrYWwgKi9cXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jdXN0b20tbmF2YmFyIC5uYXYtbGluayB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qIEZvb3RlciBDdXN0b20gKi9cXHJcXG5mb290ZXIuY3VzdG9tLWZvb3RlciB7XFxyXFxuICBmbGV4LXNocmluazogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgcGFkZGluZzogMXJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIuY3VzdG9tLWZvb3RlciBwIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjMzYTRlMDFlOTE1YWQ4N2E1MjE4XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9