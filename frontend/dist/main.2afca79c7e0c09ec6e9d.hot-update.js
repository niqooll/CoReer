"use strict";
self["webpackHotUpdatefrontend"]("main",{

/***/ "./src/script/config.js":
/*!******************************!*\
  !*** ./src/script/config.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// src/scripts/config.js
const CONFIG = {
  BASE_URL: 'http://localhost:3000',
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CONFIG);

/***/ }),

/***/ "./src/script/models/auth-model.js":
/*!*****************************************!*\
  !*** ./src/script/models/auth-model.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCurrentUser: () => (/* binding */ getCurrentUser),
/* harmony export */   login: () => (/* binding */ login),
/* harmony export */   logout: () => (/* binding */ logout),
/* harmony export */   register: () => (/* binding */ register)
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.js */ "./src/script/config.js");
// src/script/models/auth-model.js


const API_BASE = _config_js__WEBPACK_IMPORTED_MODULE_0__["default"].BASE_URL;

// Fungsi Login
async function login(username, password) {
  const res = await fetch(`${API_BASE}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) {
    let errMessage = 'Login failed';
    try {
      const errData = await res.json();
      errMessage = errData.message || errMessage;
    } catch (_) {}
    throw new Error(errMessage);
  }

  const result = await res.json();
  const user = result.user;
  localStorage.setItem('currentUser', JSON.stringify(user));
  return user;
}

// Fungsi Register
async function register(username, password) {
  const res = await fetch(`${API_BASE}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) {
    let errMessage = 'Register failed';
    try {
      const errData = await res.json();
      errMessage = errData.message || errMessage;
    } catch (_) {}
    throw new Error(errMessage);
  }

  return res.json();
}

function getCurrentUser() {
  const userJson = localStorage.getItem('currentUser');
  if (!userJson) return null;

  try {
    return JSON.parse(userJson);
  } catch (_) {
    return null;
  }
}

function logout() {
  localStorage.removeItem('currentUser');
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("21411a0e8dcf478700f0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yYWZjYTc5YzdlMGMwOWVjNmU5ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTHJCO0FBQ2tDO0FBQ2xDO0FBQ0EsaUJBQWlCLGtEQUFNO0FBQ3ZCO0FBQ0E7QUFDTztBQUNQLDZCQUE2QixTQUFTO0FBQ3RDO0FBQ0EsZUFBZSxvQ0FBb0M7QUFDbkQsMkJBQTJCLG9CQUFvQjtBQUMvQyxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCw2QkFBNkIsU0FBUztBQUN0QztBQUNBLGVBQWUsb0NBQW9DO0FBQ25ELDJCQUEyQixvQkFBb0I7QUFDL0MsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7Ozs7Ozs7OztVQzdEQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3NjcmlwdC9jb25maWcuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvc2NyaXB0L21vZGVscy9hdXRoLW1vZGVsLmpzIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvc2NyaXB0cy9jb25maWcuanNcclxuY29uc3QgQ09ORklHID0ge1xyXG4gIEJBU0VfVVJMOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwJyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENPTkZJRzsiLCIvLyBzcmMvc2NyaXB0L21vZGVscy9hdXRoLW1vZGVsLmpzXHJcbmltcG9ydCBDT05GSUcgZnJvbSAnLi4vY29uZmlnLmpzJztcclxuXHJcbmNvbnN0IEFQSV9CQVNFID0gQ09ORklHLkJBU0VfVVJMO1xyXG5cclxuLy8gRnVuZ3NpIExvZ2luXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpIHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtBUElfQkFTRX0vbG9naW5gLCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB1c2VybmFtZSwgcGFzc3dvcmQgfSksXHJcbiAgfSk7XHJcblxyXG4gIGlmICghcmVzLm9rKSB7XHJcbiAgICBsZXQgZXJyTWVzc2FnZSA9ICdMb2dpbiBmYWlsZWQnO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZXJyRGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIGVyck1lc3NhZ2UgPSBlcnJEYXRhLm1lc3NhZ2UgfHwgZXJyTWVzc2FnZTtcclxuICAgIH0gY2F0Y2ggKF8pIHt9XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoZXJyTWVzc2FnZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gIGNvbnN0IHVzZXIgPSByZXN1bHQudXNlcjtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudFVzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyKSk7XHJcbiAgcmV0dXJuIHVzZXI7XHJcbn1cclxuXHJcbi8vIEZ1bmdzaSBSZWdpc3RlclxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXIodXNlcm5hbWUsIHBhc3N3b3JkKSB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX0JBU0V9L3JlZ2lzdGVyYCwge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pLFxyXG4gIH0pO1xyXG5cclxuICBpZiAoIXJlcy5vaykge1xyXG4gICAgbGV0IGVyck1lc3NhZ2UgPSAnUmVnaXN0ZXIgZmFpbGVkJztcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGVyckRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICBlcnJNZXNzYWdlID0gZXJyRGF0YS5tZXNzYWdlIHx8IGVyck1lc3NhZ2U7XHJcbiAgICB9IGNhdGNoIChfKSB7fVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKGVyck1lc3NhZ2UpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50VXNlcigpIHtcclxuICBjb25zdCB1c2VySnNvbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50VXNlcicpO1xyXG4gIGlmICghdXNlckpzb24pIHJldHVybiBudWxsO1xyXG5cclxuICB0cnkge1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UodXNlckpzb24pO1xyXG4gIH0gY2F0Y2ggKF8pIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvZ291dCgpIHtcclxuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY3VycmVudFVzZXInKTtcclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyMTQxMWEwZThkY2Y0Nzg3MDBmMFwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==