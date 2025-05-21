"use strict";
self["webpackHotUpdatefrontend"]("main",{

/***/ "./src/routes/routes.js":
/*!******************************!*\
  !*** ./src/routes/routes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _views_landing_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/landing-view.js */ "./src/views/landing-view.js");
/* harmony import */ var _views_login_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/login-view.js */ "./src/views/login-view.js");
/* harmony import */ var _views_register_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/register-view.js */ "./src/views/register-view.js");
// src/routes.js




const routes = {
  '/': () => (0,_views_landing_view_js__WEBPACK_IMPORTED_MODULE_0__.renderLanding)(),
  '/landing': () => (0,_views_landing_view_js__WEBPACK_IMPORTED_MODULE_0__.renderLanding)(),
  '/login': () => (0,_views_login_view_js__WEBPACK_IMPORTED_MODULE_1__.renderLogin)(),
  '/register': () => (0,_views_register_view_js__WEBPACK_IMPORTED_MODULE_2__.renderRegister)(),
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);


/***/ }),

/***/ "./src/views/login-view.js":
/*!*********************************!*\
  !*** ./src/views/login-view.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderLogin: () => (/* binding */ renderLogin)
/* harmony export */ });
function renderLogin(errorMessage = '') {
  return `
    <h2>Login</h2>
    <form id="login-form">
      <input type="text" name="username" placeholder="Username" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
    <p class="error-message">${errorMessage}</p>
  `;
}


/***/ }),

/***/ "./src/views/register-view.js":
/*!************************************!*\
  !*** ./src/views/register-view.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderRegister: () => (/* binding */ renderRegister)
/* harmony export */ });
function renderRegister(errorMessage = '') {
  return `
    <h2>Register</h2>
    <form id="register-form">
      <input type="text" name="username" placeholder="Username" required />
      <input type="password" name="password" placeholder="Password" required />
      <input type="password" name="passwordConfirm" placeholder="Confirm Password" required />
      <button type="submit">Register</button>
    </form>
    <p class="error-message">${errorMessage}</p>
  `;
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d09e183addb9943cf85b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zMzcwZmZjNDEyZmRiODQ1Yjg2OC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUN5RDtBQUNKO0FBQ007QUFDM0Q7QUFDQTtBQUNBLGFBQWEscUVBQWE7QUFDMUIsb0JBQW9CLHFFQUFhO0FBQ2pDLGtCQUFrQixpRUFBVztBQUM3QixxQkFBcUIsdUVBQWM7QUFDbkM7QUFDQTtBQUNBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDWmY7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixhQUFhO0FBQzVDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1ZPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixhQUFhO0FBQzVDO0FBQ0E7Ozs7Ozs7OztVQ1hBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcm91dGVzL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy92aWV3cy9sb2dpbi12aWV3LmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3ZpZXdzL3JlZ2lzdGVyLXZpZXcuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9yb3V0ZXMuanNcclxuaW1wb3J0IHsgcmVuZGVyTGFuZGluZyB9IGZyb20gJy4uL3ZpZXdzL2xhbmRpbmctdmlldy5qcyc7XHJcbmltcG9ydCB7IHJlbmRlckxvZ2luIH0gZnJvbSAnLi4vdmlld3MvbG9naW4tdmlldy5qcyc7XHJcbmltcG9ydCB7IHJlbmRlclJlZ2lzdGVyIH0gZnJvbSAnLi4vdmlld3MvcmVnaXN0ZXItdmlldy5qcyc7XHJcblxyXG5jb25zdCByb3V0ZXMgPSB7XHJcbiAgJy8nOiAoKSA9PiByZW5kZXJMYW5kaW5nKCksXHJcbiAgJy9sYW5kaW5nJzogKCkgPT4gcmVuZGVyTGFuZGluZygpLFxyXG4gICcvbG9naW4nOiAoKSA9PiByZW5kZXJMb2dpbigpLFxyXG4gICcvcmVnaXN0ZXInOiAoKSA9PiByZW5kZXJSZWdpc3RlcigpLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVzO1xyXG4iLCJleHBvcnQgZnVuY3Rpb24gcmVuZGVyTG9naW4oZXJyb3JNZXNzYWdlID0gJycpIHtcclxuICByZXR1cm4gYFxyXG4gICAgPGgyPkxvZ2luPC9oMj5cclxuICAgIDxmb3JtIGlkPVwibG9naW4tZm9ybVwiPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlcm5hbWVcIiBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCIgcmVxdWlyZWQgLz5cclxuICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiByZXF1aXJlZCAvPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5Mb2dpbjwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG4gICAgPHAgY2xhc3M9XCJlcnJvci1tZXNzYWdlXCI+JHtlcnJvck1lc3NhZ2V9PC9wPlxyXG4gIGA7XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclJlZ2lzdGVyKGVycm9yTWVzc2FnZSA9ICcnKSB7XHJcbiAgcmV0dXJuIGBcclxuICAgIDxoMj5SZWdpc3RlcjwvaDI+XHJcbiAgICA8Zm9ybSBpZD1cInJlZ2lzdGVyLWZvcm1cIj5cclxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiIHJlcXVpcmVkIC8+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgcmVxdWlyZWQgLz5cclxuICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZENvbmZpcm1cIiBwbGFjZWhvbGRlcj1cIkNvbmZpcm0gUGFzc3dvcmRcIiByZXF1aXJlZCAvPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5SZWdpc3RlcjwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG4gICAgPHAgY2xhc3M9XCJlcnJvci1tZXNzYWdlXCI+JHtlcnJvck1lc3NhZ2V9PC9wPlxyXG4gIGA7XHJcbn1cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZDA5ZTE4M2FkZGI5OTQzY2Y4NWJcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=