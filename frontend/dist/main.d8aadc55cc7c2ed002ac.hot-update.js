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
Object(function webpackMissingModule() { var e = new Error("Cannot find module './style.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



const app = document.getElementById('app');

function renderPage(path, errorMessage = '') {
  if (_routes_routes__WEBPACK_IMPORTED_MODULE_0__["default"][path]) {
    app.innerHTML = _routes_routes__WEBPACK_IMPORTED_MODULE_0__["default"][path](errorMessage);  // panggil fungsi render dengan parameter error jika perlu
  } else {
    app.innerHTML = '<h1>404 Page Not Found</h1>';
  }
}

function initApp() {
  // render sesuai URL sekarang
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
/******/ 	__webpack_require__.h = () => ("c973c2861ea7b0154ba7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kOGFhZGM1NWNjN2MyZWQwMDJhYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUNqQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sc0RBQU07QUFDWixvQkFBb0Isc0RBQU0sdUJBQXVCO0FBQ2pELElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsNkNBQTZDO0FBQzdDLG9DQUFvQztBQUNwQztBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7OztVQ2xDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3ByZXNlbnRlcnMvYXBwLXByZXNlbnRlci5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJvdXRlcyBmcm9tICcuLi9yb3V0ZXMvcm91dGVzJztcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBhcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XHJcblxyXG5mdW5jdGlvbiByZW5kZXJQYWdlKHBhdGgsIGVycm9yTWVzc2FnZSA9ICcnKSB7XHJcbiAgaWYgKHJvdXRlc1twYXRoXSkge1xyXG4gICAgYXBwLmlubmVySFRNTCA9IHJvdXRlc1twYXRoXShlcnJvck1lc3NhZ2UpOyAgLy8gcGFuZ2dpbCBmdW5nc2kgcmVuZGVyIGRlbmdhbiBwYXJhbWV0ZXIgZXJyb3IgamlrYSBwZXJsdVxyXG4gIH0gZWxzZSB7XHJcbiAgICBhcHAuaW5uZXJIVE1MID0gJzxoMT40MDQgUGFnZSBOb3QgRm91bmQ8L2gxPic7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdEFwcCgpIHtcclxuICAvLyByZW5kZXIgc2VzdWFpIFVSTCBzZWthcmFuZ1xyXG4gIHJlbmRlclBhZ2Uod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbmF2IGJ1dHRvbicpLmZvckVhY2goYnRuID0+IHtcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgbGV0IHBhdGggPSAnLyc7XHJcbiAgICAgIHN3aXRjaCAoYnRuLmRhdGFzZXQucGFnZSkge1xyXG4gICAgICAgIGNhc2UgJ2xvZ2luJzogcGF0aCA9ICcvbG9naW4nOyBicmVhaztcclxuICAgICAgICBjYXNlICdyZWdpc3Rlcic6IHBhdGggPSAnL3JlZ2lzdGVyJzsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbGFuZGluZyc6IHBhdGggPSAnLyc7IGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBoaXN0b3J5LnB1c2hTdGF0ZSh7fSwgJycsIHBhdGgpO1xyXG4gICAgICByZW5kZXJQYWdlKHBhdGgpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsICgpID0+IHtcclxuICAgIHJlbmRlclBhZ2Uod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuICB9KTtcclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjOTczYzI4NjFlYTdiMDE1NGJhN1wiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==