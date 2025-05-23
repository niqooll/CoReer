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
  },
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
/******/ 	__webpack_require__.h = () => ("743cbf5887605a54722c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42Y2U4NzljYzgxYzNjNmM4Njg0OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLGlFQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQyxFQUFDOzs7Ozs7Ozs7VUNuQkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9zY3JpcHQvdXRpbHMvYXV0aC1oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9zY3JpcHQvdXRpbHMvYXV0aC1oZWxwZXIuanNcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGdldEN1cnJlbnRVc2VyKCkge1xyXG4gICAgY29uc3QgdXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50VXNlcicpO1xyXG4gICAgaWYgKCF1c2VyIHx8IHVzZXIgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICByZXR1cm4gSlNPTi5wYXJzZSh1c2VyKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjdXJyZW50VXNlcicpO1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9LFxyXG4gIGNsZWFyQXV0aCgpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjdXJyZW50VXNlcicpO1xyXG4gIH0sXHJcbiAgaXNMb2dnZWRJbigpIHtcclxuICAgIHJldHVybiAhIXRoaXMuZ2V0Q3VycmVudFVzZXIoKTtcclxuICB9LFxyXG59O1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI3NDNjYmY1ODg3NjA1YTU0NzIyY1wiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==