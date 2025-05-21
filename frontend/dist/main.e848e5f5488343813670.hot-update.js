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
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../routes.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


const app = document.getElementById('app');

function renderPage(path, errorMessage = '') {
  if (Object(function webpackMissingModule() { var e = new Error("Cannot find module '../routes.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[path]) {
    app.innerHTML = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../routes.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[path](errorMessage);  // panggil fungsi render dengan parameter error jika perlu
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
/******/ 	__webpack_require__.h = () => ("31d58acb25f6f1252fbc")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lODQ4ZTVmNTQ4ODM0MzgxMzY3MC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSwySUFBTTtBQUNaLG9CQUFvQiwySUFBTSx1QkFBdUI7QUFDakQsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2Qyw2Q0FBNkM7QUFDN0Msb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7O1VDakNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcHJlc2VudGVycy9hcHAtcHJlc2VudGVyLmpzIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcm91dGVzIGZyb20gJy4uL3JvdXRlcy5qcyc7XHJcblxyXG5jb25zdCBhcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XHJcblxyXG5mdW5jdGlvbiByZW5kZXJQYWdlKHBhdGgsIGVycm9yTWVzc2FnZSA9ICcnKSB7XHJcbiAgaWYgKHJvdXRlc1twYXRoXSkge1xyXG4gICAgYXBwLmlubmVySFRNTCA9IHJvdXRlc1twYXRoXShlcnJvck1lc3NhZ2UpOyAgLy8gcGFuZ2dpbCBmdW5nc2kgcmVuZGVyIGRlbmdhbiBwYXJhbWV0ZXIgZXJyb3IgamlrYSBwZXJsdVxyXG4gIH0gZWxzZSB7XHJcbiAgICBhcHAuaW5uZXJIVE1MID0gJzxoMT40MDQgUGFnZSBOb3QgRm91bmQ8L2gxPic7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdEFwcCgpIHtcclxuICAvLyByZW5kZXIgc2VzdWFpIFVSTCBzZWthcmFuZ1xyXG4gIHJlbmRlclBhZ2Uod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbmF2IGJ1dHRvbicpLmZvckVhY2goYnRuID0+IHtcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgbGV0IHBhdGggPSAnLyc7XHJcbiAgICAgIHN3aXRjaCAoYnRuLmRhdGFzZXQucGFnZSkge1xyXG4gICAgICAgIGNhc2UgJ2xvZ2luJzogcGF0aCA9ICcvbG9naW4nOyBicmVhaztcclxuICAgICAgICBjYXNlICdyZWdpc3Rlcic6IHBhdGggPSAnL3JlZ2lzdGVyJzsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbGFuZGluZyc6IHBhdGggPSAnLyc7IGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBoaXN0b3J5LnB1c2hTdGF0ZSh7fSwgJycsIHBhdGgpO1xyXG4gICAgICByZW5kZXJQYWdlKHBhdGgpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsICgpID0+IHtcclxuICAgIHJlbmRlclBhZ2Uod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuICB9KTtcclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzMWQ1OGFjYjI1ZjZmMTI1MmZiY1wiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==