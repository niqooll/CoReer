"use strict";
self["webpackHotUpdatefrontend"]("main",{

/***/ "./src/presenters/app-presenter.js":
/*!*****************************************!*\
  !*** ./src/presenters/app-presenter.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initApp: () => (/* binding */ initApp)
/* harmony export */ });
/* harmony import */ var _routes_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../routes/routes */ "./src/routes/routes.js");
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/styles.css */ "./src/styles/styles.css");



const app = document.getElementById('app');

function renderPage(path, errorMessage = '') {
  if (_routes_routes__WEBPACK_IMPORTED_MODULE_0__["default"][path]) {
    app.innerHTML = _routes_routes__WEBPACK_IMPORTED_MODULE_0__["default"][path](errorMessage);  // panggil fungsi render dengan parameter error jika perlu
  } else {
    app.innerHTML = '<h1>404 Page Not Found</h1>';
  }
}

function initApp() {
  renderPage(window.location.pathname);

  document.querySelectorAll('nav button').forEach(btn => {
    btn.addEventListener('click', () => {
      let path = '/';
      switch (btn.dataset.page) {
        case 'login': path = '/login'; break;
        case 'register': path = '/register'; break;
        case 'landing': path = '/'; break;
      }

      history.pushState({}, '', path);
      renderPage(path);
    });
  });

  window.addEventListener('popstate', () => {
    renderPage(window.location.pathname);
  });
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("74eb331d4b9643d9c865")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40ZjJjYjQzZTU4ZjQwMzQ1Y2Q2Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUNSO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxzREFBTTtBQUNaLG9CQUFvQixzREFBTSx1QkFBdUI7QUFDakQsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsNkNBQTZDO0FBQzdDLG9DQUFvQztBQUNwQztBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7OztVQ2pDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3ByZXNlbnRlcnMvYXBwLXByZXNlbnRlci5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJvdXRlcyBmcm9tICcuLi9yb3V0ZXMvcm91dGVzJztcclxuaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGVzLmNzcyc7XHJcblxyXG5jb25zdCBhcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XHJcblxyXG5mdW5jdGlvbiByZW5kZXJQYWdlKHBhdGgsIGVycm9yTWVzc2FnZSA9ICcnKSB7XHJcbiAgaWYgKHJvdXRlc1twYXRoXSkge1xyXG4gICAgYXBwLmlubmVySFRNTCA9IHJvdXRlc1twYXRoXShlcnJvck1lc3NhZ2UpOyAgLy8gcGFuZ2dpbCBmdW5nc2kgcmVuZGVyIGRlbmdhbiBwYXJhbWV0ZXIgZXJyb3IgamlrYSBwZXJsdVxyXG4gIH0gZWxzZSB7XHJcbiAgICBhcHAuaW5uZXJIVE1MID0gJzxoMT40MDQgUGFnZSBOb3QgRm91bmQ8L2gxPic7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdEFwcCgpIHtcclxuICByZW5kZXJQYWdlKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XHJcblxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ25hdiBidXR0b24nKS5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGxldCBwYXRoID0gJy8nO1xyXG4gICAgICBzd2l0Y2ggKGJ0bi5kYXRhc2V0LnBhZ2UpIHtcclxuICAgICAgICBjYXNlICdsb2dpbic6IHBhdGggPSAnL2xvZ2luJzsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAncmVnaXN0ZXInOiBwYXRoID0gJy9yZWdpc3Rlcic7IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2xhbmRpbmcnOiBwYXRoID0gJy8nOyBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgaGlzdG9yeS5wdXNoU3RhdGUoe30sICcnLCBwYXRoKTtcclxuICAgICAgcmVuZGVyUGFnZShwYXRoKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCAoKSA9PiB7XHJcbiAgICByZW5kZXJQYWdlKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XHJcbiAgfSk7XHJcbn1cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNzRlYjMzMWQ0Yjk2NDNkOWM4NjVcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=