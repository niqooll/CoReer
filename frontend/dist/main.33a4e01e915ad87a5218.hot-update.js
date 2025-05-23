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
}`, "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,iBAAiB;EACjB,uBAAuB;EACvB,wBAAwB;EACxB,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,SAAS;EACT,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,cAAc;AAChB;;AAEA,0BAA0B;AAC1B;EACE,kBAAkB;EAClB,mBAAmB;EACnB,mCAAmC;AACrC;;AAEA,iBAAiB;AACjB;EACE,yDAAmN;AACrN;;AAEA,oBAAoB;AACpB;EACE,oBAAoB;EACpB,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;EACjB,sCAAsC;AACxC;;AAEA;EACE,qCAAqC;EACrC,YAAY;AACd;;AAEA;EACE,sCAAsC;EACtC,YAAY;AACd;;AAEA,gBAAgB;AAChB;EACE,oBAAoB;EACpB,gBAAgB;EAChB,iBAAiB;EACjB,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA,8BAA8B;AAC9B;EACE,YAAY;EACZ,WAAW;AACb;;AAEA,mBAAmB;AACnB;;EAEE,+BAA+B;EAC/B,2BAA2B;EAC3B,YAAY;EACZ,8DAA8D;AAChE;;AAEA;;;;;;EAME,qCAAqC;EACrC,iCAAiC;EACjC,YAAY;AACd;;AAEA;;EAEE,sCAAsC;EACtC,kCAAkC;EAClC,YAAY;AACd;;AAEA,uCAAuC;AACvC;;EAEE,+BAA+B;EAC/B,2BAA2B;EAC3B,YAAY;EACZ,YAAY,GAAG,0DAA0D;EACzE,mBAAmB;EACnB,gBAAgB;EAChB,oBAAoB,EAAE,0CAA0C;AAClE;;;AAGA;EACE;IACE,kBAAkB;IAClB,mBAAmB;EACrB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,sBAAsB;IACtB,SAAS,EAAE,kCAAkC;IAC7C,mBAAmB;EACrB;;EAEA;IACE,WAAW;IACX,kBAAkB;EACpB;AACF;;AAEA,kBAAkB;AAClB;EACE,cAAc;EACd,6BAA6B;EAC7B,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,YAAY;AACd","sourcesContent":[":root {\r\n  --sec-normal: #f5eedc;\r\n  --normal: #3ca9c3;\r\n  --normal-hover: #3698b0;\r\n  --normal-active: #30879c;\r\n  --dark:#2d7f92;\r\n}\r\n\r\nhtml, body {\r\n  height: 100%;\r\n  margin: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n#app {\r\n  flex: 1 0 auto;\r\n}\r\n\r\n/* Navbar custom styling */\r\n.custom-navbar {\r\n  padding-left: 3rem;\r\n  padding-right: 3rem;\r\n  background-color: var(--sec-normal);\r\n}\r\n\r\n/* Toggler icon */\r\n.custom-navbar .navbar-toggler-icon {\r\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba%2858, 137, 155, 0.7%29' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\");\r\n}\r\n\r\n/* Nav link styles */\r\n.custom-navbar .nav-link {\r\n  color: var(--normal);\r\n  font-size: 1.1rem;\r\n  font-weight: 600;\r\n  border-radius: 4px;\r\n  padding: 8px 16px;\r\n  transition: background-color 0.3s ease;\r\n}\r\n\r\n.custom-navbar .nav-link:hover {\r\n  background-color: var(--normal-hover);\r\n  color: white;\r\n}\r\n\r\n.custom-navbar .nav-link:active {\r\n  background-color: var(--normal-active);\r\n  color: white;\r\n}\r\n\r\n/* Brand style */\r\n.custom-navbar .navbar-brand {\r\n  color: var(--normal);\r\n  font-weight: 600;\r\n  font-size: 1.4rem;\r\n  text-decoration: none;\r\n  margin-right: 2rem;\r\n}\r\n\r\n/* Optional logo image style */\r\n.logo-image {\r\n  height: 60px;\r\n  width: auto;\r\n}\r\n\r\n/* Buttons custom */\r\n.btn-primary,\r\n.btn-success {\r\n  background-color: var(--normal);\r\n  border-color: var(--normal);\r\n  color: white;\r\n  transition: background-color 0.3s ease, border-color 0.3s ease;\r\n}\r\n\r\n.btn-primary:hover,\r\n.btn-primary:focus,\r\n.btn-primary:active,\r\n.btn-success:hover,\r\n.btn-success:focus,\r\n.btn-success:active {\r\n  background-color: var(--normal-hover);\r\n  border-color: var(--normal-hover);\r\n  color: white;\r\n}\r\n\r\n.btn-primary:active,\r\n.btn-success:active {\r\n  background-color: var(--normal-active);\r\n  border-color: var(--normal-active);\r\n  color: white;\r\n}\r\n\r\n/* Style tombol primary saat disabled */\r\n.btn-primary:disabled,\r\n.btn-primary[disabled] {\r\n  background-color: var(--normal);\r\n  border-color: var(--normal);\r\n  color: white;\r\n  opacity: 0.6;  /* supaya terlihat disabled tapi masih pakai warna utama */\r\n  cursor: not-allowed;\r\n  box-shadow: none;\r\n  pointer-events: none; /* opsional, supaya benar-benar nonaktif */\r\n}\r\n\r\n\r\n@media (max-width: 991.98px) {\r\n  .custom-navbar {\r\n    padding-left: 1rem;\r\n    padding-right: 1rem;\r\n  }\r\n\r\n  .custom-navbar .navbar-collapse {\r\n    padding-top: 1rem;\r\n  }\r\n\r\n  .custom-navbar .navbar-nav {\r\n    flex-direction: column;\r\n    gap: 1rem; /* agar lebih rapi saat vertikal */\r\n    align-items: center;\r\n  }\r\n\r\n  .custom-navbar .nav-link {\r\n    width: 100%;\r\n    padding-left: 1rem;\r\n  }\r\n}\r\n\r\n/* Footer Custom */\r\nfooter.custom-footer {\r\n  flex-shrink: 0;\r\n  background-color: var(--dark);\r\n  color: white;\r\n  padding: 1rem 0;\r\n}\r\n\r\nfooter.custom-footer p {\r\n  color: white;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("601233a1bb802dcf1ac2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHdEQUF3RCxtQkFBbUIsa0JBQWtCLEtBQUssK0RBQStELHNDQUFzQyxrQ0FBa0MsbUJBQW1CLHFFQUFxRSxLQUFLLGlKQUFpSiw0Q0FBNEMsd0NBQXdDLG1CQUFtQixLQUFLLHFEQUFxRCw2Q0FBNkMseUNBQXlDLG1CQUFtQixLQUFLLHNHQUFzRyxzQ0FBc0Msa0NBQWtDLG1CQUFtQixxQkFBcUIscUZBQXFGLHVCQUF1Qiw0QkFBNEIsZ0RBQWdELDBDQUEwQyxzQkFBc0IsMkJBQTJCLDRCQUE0QixPQUFPLDJDQUEyQywwQkFBMEIsT0FBTyxzQ0FBc0MsK0JBQStCLG1CQUFtQiwrREFBK0QsT0FBTyxvQ0FBb0Msb0JBQW9CLDJCQUEyQixPQUFPLEtBQUsscURBQXFELHFCQUFxQixvQ0FBb0MsbUJBQW1CLHNCQUFzQixLQUFLLGdDQUFnQyxtQkFBbUIsS0FBSyxtQkFBbUI7QUFDbDFJO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7OztVQ3BKdkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9JTI3aHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmclMjcgdmlld0JveD0lMjcwIDAgMzAgMzAlMjclM0UlM0NwYXRoIHN0cm9rZT0lMjdyZ2JhJTI4NTgsIDEzNywgMTU1LCAwLjclMjklMjcgc3Ryb2tlLXdpZHRoPSUyNzIlMjcgZD0lMjdNNCA3aDIyTTQgMTVoMjJNNCAyM2gyMiUyNy8lM0UlM0Mvc3ZnJTNFXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XHJcbiAgLS1zZWMtbm9ybWFsOiAjZjVlZWRjO1xyXG4gIC0tbm9ybWFsOiAjM2NhOWMzO1xyXG4gIC0tbm9ybWFsLWhvdmVyOiAjMzY5OGIwO1xyXG4gIC0tbm9ybWFsLWFjdGl2ZTogIzMwODc5YztcclxuICAtLWRhcms6IzJkN2Y5MjtcclxufVxyXG5cclxuaHRtbCwgYm9keSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbjogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbiNhcHAge1xyXG4gIGZsZXg6IDEgMCBhdXRvO1xyXG59XHJcblxyXG4vKiBOYXZiYXIgY3VzdG9tIHN0eWxpbmcgKi9cclxuLmN1c3RvbS1uYXZiYXIge1xyXG4gIHBhZGRpbmctbGVmdDogM3JlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAzcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlYy1ub3JtYWwpO1xyXG59XHJcblxyXG4vKiBUb2dnbGVyIGljb24gKi9cclxuLmN1c3RvbS1uYXZiYXIgLm5hdmJhci10b2dnbGVyLWljb24ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxufVxyXG5cclxuLyogTmF2IGxpbmsgc3R5bGVzICovXHJcbi5jdXN0b20tbmF2YmFyIC5uYXYtbGluayB7XHJcbiAgY29sb3I6IHZhcigtLW5vcm1hbCk7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5jdXN0b20tbmF2YmFyIC5uYXYtbGluazpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm9ybWFsLWhvdmVyKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jdXN0b20tbmF2YmFyIC5uYXYtbGluazphY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vcm1hbC1hY3RpdmUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLyogQnJhbmQgc3R5bGUgKi9cclxuLmN1c3RvbS1uYXZiYXIgLm5hdmJhci1icmFuZCB7XHJcbiAgY29sb3I6IHZhcigtLW5vcm1hbCk7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDEuNHJlbTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xyXG59XHJcblxyXG4vKiBPcHRpb25hbCBsb2dvIGltYWdlIHN0eWxlICovXHJcbi5sb2dvLWltYWdlIHtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbi8qIEJ1dHRvbnMgY3VzdG9tICovXHJcbi5idG4tcHJpbWFyeSxcclxuLmJ0bi1zdWNjZXNzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ub3JtYWwpO1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbm9ybWFsKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UsIGJvcmRlci1jb2xvciAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeTpob3ZlcixcclxuLmJ0bi1wcmltYXJ5OmZvY3VzLFxyXG4uYnRuLXByaW1hcnk6YWN0aXZlLFxyXG4uYnRuLXN1Y2Nlc3M6aG92ZXIsXHJcbi5idG4tc3VjY2Vzczpmb2N1cyxcclxuLmJ0bi1zdWNjZXNzOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm9ybWFsLWhvdmVyKTtcclxuICBib3JkZXItY29sb3I6IHZhcigtLW5vcm1hbC1ob3Zlcik7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnk6YWN0aXZlLFxyXG4uYnRuLXN1Y2Nlc3M6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ub3JtYWwtYWN0aXZlKTtcclxuICBib3JkZXItY29sb3I6IHZhcigtLW5vcm1hbC1hY3RpdmUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLyogU3R5bGUgdG9tYm9sIHByaW1hcnkgc2FhdCBkaXNhYmxlZCAqL1xyXG4uYnRuLXByaW1hcnk6ZGlzYWJsZWQsXHJcbi5idG4tcHJpbWFyeVtkaXNhYmxlZF0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vcm1hbCk7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ub3JtYWwpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBvcGFjaXR5OiAwLjY7ICAvKiBzdXBheWEgdGVybGloYXQgZGlzYWJsZWQgdGFwaSBtYXNpaCBwYWthaSB3YXJuYSB1dGFtYSAqL1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTsgLyogb3BzaW9uYWwsIHN1cGF5YSBiZW5hci1iZW5hciBub25ha3RpZiAqL1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XHJcbiAgLmN1c3RvbS1uYXZiYXIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcclxuICB9XHJcblxyXG4gIC5jdXN0b20tbmF2YmFyIC5uYXZiYXItY29sbGFwc2Uge1xyXG4gICAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLW5hdmJhciAubmF2YmFyLW5hdiB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxcmVtOyAvKiBhZ2FyIGxlYmloIHJhcGkgc2FhdCB2ZXJ0aWthbCAqL1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5jdXN0b20tbmF2YmFyIC5uYXYtbGluayB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi8qIEZvb3RlciBDdXN0b20gKi9cclxuZm9vdGVyLmN1c3RvbS1mb290ZXIge1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxcmVtIDA7XHJcbn1cclxuXHJcbmZvb3Rlci5jdXN0b20tZm9vdGVyIHAge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osU0FBUztFQUNULGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBLDBCQUEwQjtBQUMxQjtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsbUNBQW1DO0FBQ3JDOztBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLHlEQUFtTjtBQUNyTjs7QUFFQSxvQkFBb0I7QUFDcEI7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsWUFBWTtBQUNkOztBQUVBLGdCQUFnQjtBQUNoQjtFQUNFLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBRUEsOEJBQThCO0FBQzlCO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQSxtQkFBbUI7QUFDbkI7O0VBRUUsK0JBQStCO0VBQy9CLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osOERBQThEO0FBQ2hFOztBQUVBOzs7Ozs7RUFNRSxxQ0FBcUM7RUFDckMsaUNBQWlDO0VBQ2pDLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxzQ0FBc0M7RUFDdEMsa0NBQWtDO0VBQ2xDLFlBQVk7QUFDZDs7QUFFQSx1Q0FBdUM7QUFDdkM7O0VBRUUsK0JBQStCO0VBQy9CLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osWUFBWSxHQUFHLDBEQUEwRDtFQUN6RSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLG9CQUFvQixFQUFFLDBDQUEwQztBQUNsRTs7O0FBR0E7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsU0FBUyxFQUFFLGtDQUFrQztJQUM3QyxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0UsY0FBYztFQUNkLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAtLXNlYy1ub3JtYWw6ICNmNWVlZGM7XFxyXFxuICAtLW5vcm1hbDogIzNjYTljMztcXHJcXG4gIC0tbm9ybWFsLWhvdmVyOiAjMzY5OGIwO1xcclxcbiAgLS1ub3JtYWwtYWN0aXZlOiAjMzA4NzljO1xcclxcbiAgLS1kYXJrOiMyZDdmOTI7XFxyXFxufVxcclxcblxcclxcbmh0bWwsIGJvZHkge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbiNhcHAge1xcclxcbiAgZmxleDogMSAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qIE5hdmJhciBjdXN0b20gc3R5bGluZyAqL1xcclxcbi5jdXN0b20tbmF2YmFyIHtcXHJcXG4gIHBhZGRpbmctbGVmdDogM3JlbTtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDNyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWMtbm9ybWFsKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogVG9nZ2xlciBpY29uICovXFxyXFxuLmN1c3RvbS1uYXZiYXIgLm5hdmJhci10b2dnbGVyLWljb24ge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDMwIDMwJyUzRSUzQ3BhdGggc3Ryb2tlPSdyZ2JhJTI4NTgsIDEzNywgMTU1LCAwLjclMjknIHN0cm9rZS13aWR0aD0nMicgZD0nTTQgN2gyMk00IDE1aDIyTTQgMjNoMjInLyUzRSUzQy9zdmclM0VcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTmF2IGxpbmsgc3R5bGVzICovXFxyXFxuLmN1c3RvbS1uYXZiYXIgLm5hdi1saW5rIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1ub3JtYWwpO1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgcGFkZGluZzogOHB4IDE2cHg7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmN1c3RvbS1uYXZiYXIgLm5hdi1saW5rOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vcm1hbC1ob3Zlcik7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5jdXN0b20tbmF2YmFyIC5uYXYtbGluazphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm9ybWFsLWFjdGl2ZSk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi8qIEJyYW5kIHN0eWxlICovXFxyXFxuLmN1c3RvbS1uYXZiYXIgLm5hdmJhci1icmFuZCB7XFxyXFxuICBjb2xvcjogdmFyKC0tbm9ybWFsKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogT3B0aW9uYWwgbG9nbyBpbWFnZSBzdHlsZSAqL1xcclxcbi5sb2dvLWltYWdlIHtcXHJcXG4gIGhlaWdodDogNjBweDtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBCdXR0b25zIGN1c3RvbSAqL1xcclxcbi5idG4tcHJpbWFyeSxcXHJcXG4uYnRuLXN1Y2Nlc3Mge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm9ybWFsKTtcXHJcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbm9ybWFsKTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLCBib3JkZXItY29sb3IgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLXByaW1hcnk6aG92ZXIsXFxyXFxuLmJ0bi1wcmltYXJ5OmZvY3VzLFxcclxcbi5idG4tcHJpbWFyeTphY3RpdmUsXFxyXFxuLmJ0bi1zdWNjZXNzOmhvdmVyLFxcclxcbi5idG4tc3VjY2Vzczpmb2N1cyxcXHJcXG4uYnRuLXN1Y2Nlc3M6YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vcm1hbC1ob3Zlcik7XFxyXFxuICBib3JkZXItY29sb3I6IHZhcigtLW5vcm1hbC1ob3Zlcik7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5idG4tcHJpbWFyeTphY3RpdmUsXFxyXFxuLmJ0bi1zdWNjZXNzOmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ub3JtYWwtYWN0aXZlKTtcXHJcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbm9ybWFsLWFjdGl2ZSk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi8qIFN0eWxlIHRvbWJvbCBwcmltYXJ5IHNhYXQgZGlzYWJsZWQgKi9cXHJcXG4uYnRuLXByaW1hcnk6ZGlzYWJsZWQsXFxyXFxuLmJ0bi1wcmltYXJ5W2Rpc2FibGVkXSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ub3JtYWwpO1xcclxcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ub3JtYWwpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgb3BhY2l0eTogMC42OyAgLyogc3VwYXlhIHRlcmxpaGF0IGRpc2FibGVkIHRhcGkgbWFzaWggcGFrYWkgd2FybmEgdXRhbWEgKi9cXHJcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxyXFxuICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7IC8qIG9wc2lvbmFsLCBzdXBheWEgYmVuYXItYmVuYXIgbm9uYWt0aWYgKi9cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XFxyXFxuICAuY3VzdG9tLW5hdmJhciB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jdXN0b20tbmF2YmFyIC5uYXZiYXItY29sbGFwc2Uge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jdXN0b20tbmF2YmFyIC5uYXZiYXItbmF2IHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxcmVtOyAvKiBhZ2FyIGxlYmloIHJhcGkgc2FhdCB2ZXJ0aWthbCAqL1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmN1c3RvbS1uYXZiYXIgLm5hdi1saW5rIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogRm9vdGVyIEN1c3RvbSAqL1xcclxcbmZvb3Rlci5jdXN0b20tZm9vdGVyIHtcXHJcXG4gIGZsZXgtc2hyaW5rOiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBwYWRkaW5nOiAxcmVtIDA7XFxyXFxufVxcclxcblxcclxcbmZvb3Rlci5jdXN0b20tZm9vdGVyIHAge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNjAxMjMzYTFiYjgwMmRjZjFhYzJcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=