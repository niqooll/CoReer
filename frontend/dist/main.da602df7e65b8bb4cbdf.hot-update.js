"use strict";
self["webpackHotUpdatefrontend"]("main",{

/***/ "./src/script/utils/auth-helper.js":
/*!*****************************************!*\
  !*** ./src/script/utils/auth-helper.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// src/script/utils/auth-helper.js
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
getCurrentUser() {
  const user = localStorage.getItem('currentUser');
  if (!user || user === 'undefined') return null;

  try {
    return JSON.parse(user);
  } catch (error) {
    localStorage.removeItem('currentUser');
    return null;
  }
}
,
  clearAuth() {
    localStorage.removeItem('currentUser');
  },
  isLoggedIn() {
    return !!this.getCurrentUser();
  },
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6ce879cc81c3c6c86849")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kYTYwMmRmN2U2NWI4YmI0Y2JkZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLGlFQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQyxFQUFDOzs7Ozs7Ozs7VUNwQkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9zY3JpcHQvdXRpbHMvYXV0aC1oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9zY3JpcHQvdXRpbHMvYXV0aC1oZWxwZXIuanNcclxuZXhwb3J0IGRlZmF1bHQge1xyXG5nZXRDdXJyZW50VXNlcigpIHtcclxuICBjb25zdCB1c2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRVc2VyJyk7XHJcbiAgaWYgKCF1c2VyIHx8IHVzZXIgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKHVzZXIpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY3VycmVudFVzZXInKTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG4sXHJcbiAgY2xlYXJBdXRoKCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2N1cnJlbnRVc2VyJyk7XHJcbiAgfSxcclxuICBpc0xvZ2dlZEluKCkge1xyXG4gICAgcmV0dXJuICEhdGhpcy5nZXRDdXJyZW50VXNlcigpO1xyXG4gIH0sXHJcbn07XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjZjZTg3OWNjODFjM2M2Yzg2ODQ5XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9