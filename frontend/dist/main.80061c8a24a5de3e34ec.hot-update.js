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
// src/script/models/auth-model.js
const API_BASE = 'http://localhost:3000'; // Ganti jika backend pakai port lain

// Fungsi Login
async function login(username, password) {
  const res = await fetch(`${API_BASE}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  // Tangani error dari server
  if (!res.ok) {
    let errMessage = 'Login failed';
    try {
      const errData = await res.json();
      errMessage = errData.message || errMessage;
    } catch (_) {}
    throw new Error(errMessage);
  }

  // Ambil hasil dari backend
  const result = await res.json();
  const user = result.user; // ✅ user disimpan di dalam object result
  localStorage.setItem('currentUser', JSON.stringify(user)); // simpan session
  return user;
}

// Fungsi Register
async function register(username, password) {
  const res = await fetch(`${API_BASE}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  // Tangani error dari server (misal: username sudah ada)
  if (!res.ok) {
    let errMessage = 'Register failed';
    try {
      const errData = await res.json();
      errMessage = errData.message || errMessage;
    } catch (_) {}
    throw new Error(errMessage);
  }

  return res.json(); // hasil: { status, message }
}

// Ambil data user yang sedang login dari localStorage
function getCurrentUser() {
  const userJson = localStorage.getItem('currentUser');
  if (!userJson) return null;

  try {
    return JSON.parse(userJson);
  } catch (_) {
    return null;
  }
}

// Logout user
function logout() {
  localStorage.removeItem('currentUser');
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6446cb9c4dc816839d77")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi44MDA2MWM4YTI0YTVkZTNlMzRlYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ087QUFDUCw2QkFBNkIsU0FBUztBQUN0QztBQUNBLGVBQWUsb0NBQW9DO0FBQ25ELDJCQUEyQixvQkFBb0I7QUFDL0MsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCw2QkFBNkIsU0FBUztBQUN0QztBQUNBLGVBQWUsb0NBQW9DO0FBQ25ELDJCQUEyQixvQkFBb0I7QUFDL0MsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixZQUFZO0FBQ2pDO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBOzs7Ozs7Ozs7VUNoRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9zY3JpcHQvbW9kZWxzL2F1dGgtbW9kZWwuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9zY3JpcHQvbW9kZWxzL2F1dGgtbW9kZWwuanNcclxuY29uc3QgQVBJX0JBU0UgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwJzsgLy8gR2FudGkgamlrYSBiYWNrZW5kIHBha2FpIHBvcnQgbGFpblxyXG5cclxuLy8gRnVuZ3NpIExvZ2luXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpIHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtBUElfQkFTRX0vbG9naW5gLCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB1c2VybmFtZSwgcGFzc3dvcmQgfSksXHJcbiAgfSk7XHJcblxyXG4gIC8vIFRhbmdhbmkgZXJyb3IgZGFyaSBzZXJ2ZXJcclxuICBpZiAoIXJlcy5vaykge1xyXG4gICAgbGV0IGVyck1lc3NhZ2UgPSAnTG9naW4gZmFpbGVkJztcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGVyckRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICBlcnJNZXNzYWdlID0gZXJyRGF0YS5tZXNzYWdlIHx8IGVyck1lc3NhZ2U7XHJcbiAgICB9IGNhdGNoIChfKSB7fVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKGVyck1lc3NhZ2UpO1xyXG4gIH1cclxuXHJcbiAgLy8gQW1iaWwgaGFzaWwgZGFyaSBiYWNrZW5kXHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICBjb25zdCB1c2VyID0gcmVzdWx0LnVzZXI7IC8vIOKchSB1c2VyIGRpc2ltcGFuIGRpIGRhbGFtIG9iamVjdCByZXN1bHRcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudFVzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyKSk7IC8vIHNpbXBhbiBzZXNzaW9uXHJcbiAgcmV0dXJuIHVzZXI7XHJcbn1cclxuXHJcbi8vIEZ1bmdzaSBSZWdpc3RlclxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXIodXNlcm5hbWUsIHBhc3N3b3JkKSB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX0JBU0V9L3JlZ2lzdGVyYCwge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pLFxyXG4gIH0pO1xyXG5cclxuICAvLyBUYW5nYW5pIGVycm9yIGRhcmkgc2VydmVyIChtaXNhbDogdXNlcm5hbWUgc3VkYWggYWRhKVxyXG4gIGlmICghcmVzLm9rKSB7XHJcbiAgICBsZXQgZXJyTWVzc2FnZSA9ICdSZWdpc3RlciBmYWlsZWQnO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZXJyRGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIGVyck1lc3NhZ2UgPSBlcnJEYXRhLm1lc3NhZ2UgfHwgZXJyTWVzc2FnZTtcclxuICAgIH0gY2F0Y2ggKF8pIHt9XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoZXJyTWVzc2FnZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzLmpzb24oKTsgLy8gaGFzaWw6IHsgc3RhdHVzLCBtZXNzYWdlIH1cclxufVxyXG5cclxuLy8gQW1iaWwgZGF0YSB1c2VyIHlhbmcgc2VkYW5nIGxvZ2luIGRhcmkgbG9jYWxTdG9yYWdlXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50VXNlcigpIHtcclxuICBjb25zdCB1c2VySnNvbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50VXNlcicpO1xyXG4gIGlmICghdXNlckpzb24pIHJldHVybiBudWxsO1xyXG5cclxuICB0cnkge1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UodXNlckpzb24pO1xyXG4gIH0gY2F0Y2ggKF8pIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuLy8gTG9nb3V0IHVzZXJcclxuZXhwb3J0IGZ1bmN0aW9uIGxvZ291dCgpIHtcclxuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY3VycmVudFVzZXInKTtcclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2NDQ2Y2I5YzRkYzgxNjgzOWQ3N1wiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==