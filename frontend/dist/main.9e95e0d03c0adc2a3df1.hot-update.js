"use strict";
self["webpackHotUpdatefrontend"]("main",{

/***/ "./src/script/index.js":
/*!*****************************!*\
  !*** ./src/script/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.bundle.min.js */ "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js");
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _public_image_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/image/logo.png */ "./src/public/image/logo.png");
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.js */ "./src/script/app.js");
// src/script/index.js







document.addEventListener('DOMContentLoaded', () => {
  const brandLink = document.querySelector('.navbar-brand');
  if (brandLink) {
    const logoImg = document.createElement('img');
    logoImg.src = _public_image_logo_png__WEBPACK_IMPORTED_MODULE_3__;
    logoImg.alt = 'CoReer Logo';
    logoImg.className = 'logo-image';

    brandLink.innerHTML = '';
    brandLink.appendChild(logoImg);
  }

  const app = new _app_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
  app.init();
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("95abe7894738241bea77")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi45ZTk1ZTBkMDNjMGFkYzJhM2RmMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM4QztBQUNLO0FBQ25EO0FBQzhCO0FBQ2M7QUFDakI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixtREFBSTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiwrQ0FBRztBQUNyQjtBQUNBLENBQUM7Ozs7Ozs7OztVQ3RCRCIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3NjcmlwdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL3NjcmlwdC9pbmRleC5qc1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XHJcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvanMvYm9vdHN0cmFwLmJ1bmRsZS5taW4uanMnO1xyXG5cclxuaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGVzLmNzcyc7XHJcbmltcG9ydCBsb2dvIGZyb20gJy4uL3B1YmxpYy9pbWFnZS9sb2dvLnBuZyc7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi9hcHAuanMnO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICBjb25zdCBicmFuZExpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyLWJyYW5kJyk7XHJcbiAgaWYgKGJyYW5kTGluaykge1xyXG4gICAgY29uc3QgbG9nb0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgbG9nb0ltZy5zcmMgPSBsb2dvO1xyXG4gICAgbG9nb0ltZy5hbHQgPSAnQ29SZWVyIExvZ28nO1xyXG4gICAgbG9nb0ltZy5jbGFzc05hbWUgPSAnbG9nby1pbWFnZSc7XHJcblxyXG4gICAgYnJhbmRMaW5rLmlubmVySFRNTCA9ICcnO1xyXG4gICAgYnJhbmRMaW5rLmFwcGVuZENoaWxkKGxvZ29JbWcpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYXBwID0gbmV3IEFwcCgpO1xyXG4gIGFwcC5pbml0KCk7XHJcbn0pO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5NWFiZTc4OTQ3MzgyNDFiZWE3N1wiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==