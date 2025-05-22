"use strict";
self["webpackHotUpdatefrontend"]("main",{

/***/ "./src/script/presenters/login-presenter.js":
/*!**************************************************!*\
  !*** ./src/script/presenters/login-presenter.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoginPresenter)
/* harmony export */ });
/* harmony import */ var _views_login_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/login-view.js */ "./src/script/views/login-view.js");
/* harmony import */ var _models_auth_model_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/auth-model.js */ "./src/script/models/auth-model.js");
// src/script/presenter/login-presenter.js

  // import fungsi login yang sebenarnya

class LoginPresenter {
  constructor(appContainer) {
    this.app = appContainer;
    this.errorMessage = '';
  }

  init() {
    this.render();
  }

  render() {
    this.app.innerHTML = _views_login_view_js__WEBPACK_IMPORTED_MODULE_0__.renderLogin(this.errorMessage);
    _views_login_view_js__WEBPACK_IMPORTED_MODULE_0__.bindLoginFormSubmit(this.handleLogin.bind(this));
  }

  
async handleLogin(data) {
  try {
    const user = await (0,_models_auth_model_js__WEBPACK_IMPORTED_MODULE_1__.login)(data.username, data.password);
    // Login sukses
    localStorage.setItem('currentUser', JSON.stringify(user));
    window.location.hash = '#/main';

    window.dispatchEvent(new PopStateEvent('popstate'));
  } catch (err) {
    this.errorMessage = 'Login gagal: ' + err.message;
    this.render();
  }
}
}



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e301ea3b2d8f57971ec0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hMmYxOTExNjU4YThhNWRiNmFiNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ29EO0FBQ0osRUFBRTtBQUNsRDtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNkRBQXFCO0FBQzlDLElBQUkscUVBQTZCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsNERBQUs7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztVQ2xDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3NjcmlwdC9wcmVzZW50ZXJzL2xvZ2luLXByZXNlbnRlci5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL3NjcmlwdC9wcmVzZW50ZXIvbG9naW4tcHJlc2VudGVyLmpzXHJcbmltcG9ydCAqIGFzIExvZ2luVmlldyBmcm9tICcuLi92aWV3cy9sb2dpbi12aWV3LmpzJztcclxuaW1wb3J0IHsgbG9naW4gfSBmcm9tICcuLi9tb2RlbHMvYXV0aC1tb2RlbC5qcyc7ICAvLyBpbXBvcnQgZnVuZ3NpIGxvZ2luIHlhbmcgc2ViZW5hcm55YVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW5QcmVzZW50ZXIge1xyXG4gIGNvbnN0cnVjdG9yKGFwcENvbnRhaW5lcikge1xyXG4gICAgdGhpcy5hcHAgPSBhcHBDb250YWluZXI7XHJcbiAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICB0aGlzLmFwcC5pbm5lckhUTUwgPSBMb2dpblZpZXcucmVuZGVyTG9naW4odGhpcy5lcnJvck1lc3NhZ2UpO1xyXG4gICAgTG9naW5WaWV3LmJpbmRMb2dpbkZvcm1TdWJtaXQodGhpcy5oYW5kbGVMb2dpbi5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIFxyXG5hc3luYyBoYW5kbGVMb2dpbihkYXRhKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBsb2dpbihkYXRhLnVzZXJuYW1lLCBkYXRhLnBhc3N3b3JkKTtcclxuICAgIC8vIExvZ2luIHN1a3Nlc1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRVc2VyJywgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnIy9tYWluJztcclxuXHJcbiAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgUG9wU3RhdGVFdmVudCgncG9wc3RhdGUnKSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICdMb2dpbiBnYWdhbDogJyArIGVyci5tZXNzYWdlO1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9XHJcbn1cclxufVxyXG5cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZTMwMWVhM2IyZDhmNTc5NzFlYzBcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=