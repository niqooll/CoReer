"use strict";
self["webpackHotUpdatefrontend"]("main",{

/***/ "./src/script/app.js":
/*!***************************!*\
  !*** ./src/script/app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initApp: () => (/* binding */ initApp)
/* harmony export */ });
/* harmony import */ var _routes_routes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes/routes.js */ "./src/script/routes/routes.js");
// src/script/app.js


function renderPage(path) {
  const presenter = _routes_routes_js__WEBPACK_IMPORTED_MODULE_0__["default"][path];
  if (presenter) {
    presenter.init();
  } else {
    document.getElementById('app').innerHTML = '<h1>404 Page Not Found</h1>';
  }
}

function initApp() {
  renderPage(window.location.pathname);

  document.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const path = link.getAttribute('href');
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
/******/ 	__webpack_require__.h = () => ("3e5e0150dd95a3eed0ed")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4wYmJlZTE1NWNlYzlhOTM5YTVmMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDd0M7QUFDeEM7QUFDQTtBQUNBLG9CQUFvQix5REFBTTtBQUMxQjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7VUM1QkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9zY3JpcHQvYXBwLmpzIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvc2NyaXB0L2FwcC5qc1xyXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzL3JvdXRlcy5qcyc7XHJcblxyXG5mdW5jdGlvbiByZW5kZXJQYWdlKHBhdGgpIHtcclxuICBjb25zdCBwcmVzZW50ZXIgPSByb3V0ZXNbcGF0aF07XHJcbiAgaWYgKHByZXNlbnRlcikge1xyXG4gICAgcHJlc2VudGVyLmluaXQoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpLmlubmVySFRNTCA9ICc8aDE+NDA0IFBhZ2UgTm90IEZvdW5kPC9oMT4nO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRBcHAoKSB7XHJcbiAgcmVuZGVyUGFnZSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xyXG5cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCduYXYgYScpLmZvckVhY2goKGxpbmspID0+IHtcclxuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY29uc3QgcGF0aCA9IGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJyk7XHJcbiAgICAgIGhpc3RvcnkucHVzaFN0YXRlKHt9LCAnJywgcGF0aCk7XHJcbiAgICAgIHJlbmRlclBhZ2UocGF0aCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsICgpID0+IHtcclxuICAgIHJlbmRlclBhZ2Uod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuICB9KTtcclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzZTVlMDE1MGRkOTVhM2VlZDBlZFwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==