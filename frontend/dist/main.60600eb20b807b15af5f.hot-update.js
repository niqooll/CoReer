"use strict";
self["webpackHotUpdatefrontend"]("main",{

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
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../scripts/config.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// src/script/models/auth-model.js


const API_BASE = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../scripts/config.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

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
/******/ 	__webpack_require__.h = () => ("2afca79c7e0c09ec6e9d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42MDYwMGViMjBiODA3YjE1YWY1Zi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEM7QUFDMUM7QUFDQSxpQkFBaUIsbUpBQWU7QUFDaEM7QUFDQTtBQUNPO0FBQ1AsNkJBQTZCLFNBQVM7QUFDdEM7QUFDQSxlQUFlLG9DQUFvQztBQUNuRCwyQkFBMkIsb0JBQW9CO0FBQy9DLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLDZCQUE2QixTQUFTO0FBQ3RDO0FBQ0EsZUFBZSxvQ0FBb0M7QUFDbkQsMkJBQTJCLG9CQUFvQjtBQUMvQyxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7Ozs7Ozs7O1VDN0RBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvc2NyaXB0L21vZGVscy9hdXRoLW1vZGVsLmpzIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvc2NyaXB0L21vZGVscy9hdXRoLW1vZGVsLmpzXHJcbmltcG9ydCBDT05GSUcgZnJvbSAnLi4vc2NyaXB0cy9jb25maWcuanMnO1xyXG5cclxuY29uc3QgQVBJX0JBU0UgPSBDT05GSUcuQkFTRV9VUkw7XHJcblxyXG4vLyBGdW5nc2kgTG9naW5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZCkge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9CQVNFfS9sb2dpbmAsIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHVzZXJuYW1lLCBwYXNzd29yZCB9KSxcclxuICB9KTtcclxuXHJcbiAgaWYgKCFyZXMub2spIHtcclxuICAgIGxldCBlcnJNZXNzYWdlID0gJ0xvZ2luIGZhaWxlZCc7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBlcnJEYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgZXJyTWVzc2FnZSA9IGVyckRhdGEubWVzc2FnZSB8fCBlcnJNZXNzYWdlO1xyXG4gICAgfSBjYXRjaCAoXykge31cclxuICAgIHRocm93IG5ldyBFcnJvcihlcnJNZXNzYWdlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgY29uc3QgdXNlciA9IHJlc3VsdC51c2VyO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50VXNlcicsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcclxuICByZXR1cm4gdXNlcjtcclxufVxyXG5cclxuLy8gRnVuZ3NpIFJlZ2lzdGVyXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWdpc3Rlcih1c2VybmFtZSwgcGFzc3dvcmQpIHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtBUElfQkFTRX0vcmVnaXN0ZXJgLCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB1c2VybmFtZSwgcGFzc3dvcmQgfSksXHJcbiAgfSk7XHJcblxyXG4gIGlmICghcmVzLm9rKSB7XHJcbiAgICBsZXQgZXJyTWVzc2FnZSA9ICdSZWdpc3RlciBmYWlsZWQnO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZXJyRGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIGVyck1lc3NhZ2UgPSBlcnJEYXRhLm1lc3NhZ2UgfHwgZXJyTWVzc2FnZTtcclxuICAgIH0gY2F0Y2ggKF8pIHt9XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoZXJyTWVzc2FnZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzLmpzb24oKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRVc2VyKCkge1xyXG4gIGNvbnN0IHVzZXJKc29uID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRVc2VyJyk7XHJcbiAgaWYgKCF1c2VySnNvbikgcmV0dXJuIG51bGw7XHJcblxyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZSh1c2VySnNvbik7XHJcbiAgfSBjYXRjaCAoXykge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9nb3V0KCkge1xyXG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjdXJyZW50VXNlcicpO1xyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjJhZmNhNzljN2UwYzA5ZWM2ZTlkXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9