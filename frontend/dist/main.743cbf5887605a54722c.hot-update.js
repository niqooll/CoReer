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
/* harmony export */   isLoggedIn: () => (/* binding */ isLoggedIn),
/* harmony export */   login: () => (/* binding */ login),
/* harmony export */   logout: () => (/* binding */ logout),
/* harmony export */   register: () => (/* binding */ register)
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.js */ "./src/script/config.js");
// src/script/models/auth-model.js


const API_BASE = _config_js__WEBPACK_IMPORTED_MODULE_0__["default"].BASE_URL;

// Fungsi Login
async function login(email, password) {
  const res = await fetch(`${API_BASE}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
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
  
  // Simpan user dan token ke localStorage
  const userData = {
    token: result.token,
    email: email,
    username: result.username || null,
  };

  localStorage.setItem('currentUser', JSON.stringify(userData));
  return userData;
}

// Fungsi Register
async function register(username, email, password) {
  const res = await fetch(`${API_BASE}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, email, password }),
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

// Fungsi untuk ambil user dari localStorage
function getCurrentUser() {
  const userJson = localStorage.getItem('currentUser');
  if (!userJson || userJson === 'undefined') return null;

  try {
    return JSON.parse(userJson);
  } catch (_) {
    localStorage.removeItem('currentUser');
    return null;
  }
}

// Cek apakah user sudah login
function isLoggedIn() {
  return !!getCurrentUser();
}

// Logout / hapus data user di localStorage
function logout() {
  localStorage.removeItem('currentUser');
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("94d64d79f82c9f26d443")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43NDNjYmY1ODg3NjA1YTU0NzIyYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ2tDO0FBQ2xDO0FBQ0EsaUJBQWlCLGtEQUFNO0FBQ3ZCO0FBQ0E7QUFDTztBQUNQLDZCQUE2QixTQUFTO0FBQ3RDO0FBQ0EsZUFBZSxvQ0FBb0M7QUFDbkQsMkJBQTJCLGlCQUFpQjtBQUM1QyxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLDZCQUE2QixTQUFTO0FBQ3RDO0FBQ0EsZUFBZSxvQ0FBb0M7QUFDbkQsMkJBQTJCLDJCQUEyQjtBQUN0RCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7Ozs7Ozs7OztVQzVFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3NjcmlwdC9tb2RlbHMvYXV0aC1tb2RlbC5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL3NjcmlwdC9tb2RlbHMvYXV0aC1tb2RlbC5qc1xyXG5pbXBvcnQgQ09ORklHIGZyb20gJy4uL2NvbmZpZy5qcyc7XHJcblxyXG5jb25zdCBBUElfQkFTRSA9IENPTkZJRy5CQVNFX1VSTDtcclxuXHJcbi8vIEZ1bmdzaSBMb2dpblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9naW4oZW1haWwsIHBhc3N3b3JkKSB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX0JBU0V9L2xvZ2luYCwge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWwsIHBhc3N3b3JkIH0pLFxyXG4gIH0pO1xyXG5cclxuICBpZiAoIXJlcy5vaykge1xyXG4gICAgbGV0IGVyck1lc3NhZ2UgPSAnTG9naW4gZmFpbGVkJztcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGVyckRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICBlcnJNZXNzYWdlID0gZXJyRGF0YS5tZXNzYWdlIHx8IGVyck1lc3NhZ2U7XHJcbiAgICB9IGNhdGNoIChfKSB7fVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKGVyck1lc3NhZ2UpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICBcclxuICAvLyBTaW1wYW4gdXNlciBkYW4gdG9rZW4ga2UgbG9jYWxTdG9yYWdlXHJcbiAgY29uc3QgdXNlckRhdGEgPSB7XHJcbiAgICB0b2tlbjogcmVzdWx0LnRva2VuLFxyXG4gICAgZW1haWw6IGVtYWlsLFxyXG4gICAgdXNlcm5hbWU6IHJlc3VsdC51c2VybmFtZSB8fCBudWxsLFxyXG4gIH07XHJcblxyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50VXNlcicsIEpTT04uc3RyaW5naWZ5KHVzZXJEYXRhKSk7XHJcbiAgcmV0dXJuIHVzZXJEYXRhO1xyXG59XHJcblxyXG4vLyBGdW5nc2kgUmVnaXN0ZXJcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyKHVzZXJuYW1lLCBlbWFpbCwgcGFzc3dvcmQpIHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtBUElfQkFTRX0vcmVnaXN0ZXJgLCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB1c2VybmFtZSwgZW1haWwsIHBhc3N3b3JkIH0pLFxyXG4gIH0pO1xyXG5cclxuICBpZiAoIXJlcy5vaykge1xyXG4gICAgbGV0IGVyck1lc3NhZ2UgPSAnUmVnaXN0ZXIgZmFpbGVkJztcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGVyckRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICBlcnJNZXNzYWdlID0gZXJyRGF0YS5tZXNzYWdlIHx8IGVyck1lc3NhZ2U7XHJcbiAgICB9IGNhdGNoIChfKSB7fVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKGVyck1lc3NhZ2UpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbn1cclxuXHJcbi8vIEZ1bmdzaSB1bnR1ayBhbWJpbCB1c2VyIGRhcmkgbG9jYWxTdG9yYWdlXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50VXNlcigpIHtcclxuICBjb25zdCB1c2VySnNvbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50VXNlcicpO1xyXG4gIGlmICghdXNlckpzb24gfHwgdXNlckpzb24gPT09ICd1bmRlZmluZWQnKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKHVzZXJKc29uKTtcclxuICB9IGNhdGNoIChfKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY3VycmVudFVzZXInKTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuLy8gQ2VrIGFwYWthaCB1c2VyIHN1ZGFoIGxvZ2luXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0xvZ2dlZEluKCkge1xyXG4gIHJldHVybiAhIWdldEN1cnJlbnRVc2VyKCk7XHJcbn1cclxuXHJcbi8vIExvZ291dCAvIGhhcHVzIGRhdGEgdXNlciBkaSBsb2NhbFN0b3JhZ2VcclxuZXhwb3J0IGZ1bmN0aW9uIGxvZ291dCgpIHtcclxuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY3VycmVudFVzZXInKTtcclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5NGQ2NGQ3OWY4MmM5ZjI2ZDQ0M1wiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==