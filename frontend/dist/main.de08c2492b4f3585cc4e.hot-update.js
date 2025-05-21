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
/* harmony export */   register: () => (/* binding */ register)
/* harmony export */ });
// src/script/models/auth-model.js
const API_BASE = 'http://localhost:3000';

async function login(username, password) {
  const res = await fetch(`${API_BASE}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) {
    const errData = await res.json();
    throw new Error(errData.message || 'Login failed');
  }

  const result = await res.json();
  const user = result.user; // ✅ ambil objek user dari respons
  localStorage.setItem('currentUser', JSON.stringify(user));
  return user;
}

async function register(username, password) {
  const res = await fetch(`${API_BASE}/register`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) throw new Error('Register failed');

  return res.json();
}

// Tambahan fungsi untuk dapatkan user sekarang dari localStorage
function getCurrentUser() {
  const userJson = localStorage.getItem('currentUser');
  if (!userJson) return null;
  try {
    return JSON.parse(userJson);
  } catch {
    return null;
  }
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("80061c8a24a5de3e34ec")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kZTA4YzI0OTJiNGYzNTg1Y2M0ZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsNkJBQTZCLFNBQVM7QUFDdEM7QUFDQSxlQUFlLG9DQUFvQztBQUNuRCwyQkFBMkIsb0JBQW9CO0FBQy9DLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsNkJBQTZCLFNBQVM7QUFDdEM7QUFDQSxjQUFjLG1DQUFtQztBQUNqRCwyQkFBMkIsb0JBQW9CO0FBQy9DLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOzs7Ozs7Ozs7VUMxQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9zY3JpcHQvbW9kZWxzL2F1dGgtbW9kZWwuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9zY3JpcHQvbW9kZWxzL2F1dGgtbW9kZWwuanNcclxuY29uc3QgQVBJX0JBU0UgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpIHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtBUElfQkFTRX0vbG9naW5gLCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB1c2VybmFtZSwgcGFzc3dvcmQgfSksXHJcbiAgfSk7XHJcblxyXG4gIGlmICghcmVzLm9rKSB7XHJcbiAgICBjb25zdCBlcnJEYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIHRocm93IG5ldyBFcnJvcihlcnJEYXRhLm1lc3NhZ2UgfHwgJ0xvZ2luIGZhaWxlZCcpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICBjb25zdCB1c2VyID0gcmVzdWx0LnVzZXI7IC8vIOKchSBhbWJpbCBvYmplayB1c2VyIGRhcmkgcmVzcG9uc1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50VXNlcicsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcclxuICByZXR1cm4gdXNlcjtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyKHVzZXJuYW1lLCBwYXNzd29yZCkge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9CQVNFfS9yZWdpc3RlcmAsIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB1c2VybmFtZSwgcGFzc3dvcmQgfSksXHJcbiAgfSk7XHJcblxyXG4gIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoJ1JlZ2lzdGVyIGZhaWxlZCcpO1xyXG5cclxuICByZXR1cm4gcmVzLmpzb24oKTtcclxufVxyXG5cclxuLy8gVGFtYmFoYW4gZnVuZ3NpIHVudHVrIGRhcGF0a2FuIHVzZXIgc2VrYXJhbmcgZGFyaSBsb2NhbFN0b3JhZ2VcclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRVc2VyKCkge1xyXG4gIGNvbnN0IHVzZXJKc29uID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRVc2VyJyk7XHJcbiAgaWYgKCF1c2VySnNvbikgcmV0dXJuIG51bGw7XHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKHVzZXJKc29uKTtcclxuICB9IGNhdGNoIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4MDA2MWM4YTI0YTVkZTNlMzRlY1wiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==