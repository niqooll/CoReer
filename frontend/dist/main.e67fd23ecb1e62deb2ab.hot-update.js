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
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) throw new Error('Login failed');

  const user = await res.json();
  // Simpan user ke localStorage atau sessionStorage
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
/******/ 	__webpack_require__.h = () => ("4895a3b1dca4cfee1753")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lNjdmZDIzZWNiMWU2MmRlYjJhYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsNkJBQTZCLFNBQVM7QUFDdEM7QUFDQSxjQUFjLG1DQUFtQztBQUNqRCwyQkFBMkIsb0JBQW9CO0FBQy9DLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLDZCQUE2QixTQUFTO0FBQ3RDO0FBQ0EsY0FBYyxtQ0FBbUM7QUFDakQsMkJBQTJCLG9CQUFvQjtBQUMvQyxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7Ozs7Ozs7O1VDdkNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvc2NyaXB0L21vZGVscy9hdXRoLW1vZGVsLmpzIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvc2NyaXB0L21vZGVscy9hdXRoLW1vZGVsLmpzXHJcbmNvbnN0IEFQSV9CQVNFID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9naW4odXNlcm5hbWUsIHBhc3N3b3JkKSB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX0JBU0V9L2xvZ2luYCwge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHVzZXJuYW1lLCBwYXNzd29yZCB9KSxcclxuICB9KTtcclxuXHJcbiAgaWYgKCFyZXMub2spIHRocm93IG5ldyBFcnJvcignTG9naW4gZmFpbGVkJyk7XHJcblxyXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gIC8vIFNpbXBhbiB1c2VyIGtlIGxvY2FsU3RvcmFnZSBhdGF1IHNlc3Npb25TdG9yYWdlXHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRVc2VyJywgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xyXG4gIHJldHVybiB1c2VyO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXIodXNlcm5hbWUsIHBhc3N3b3JkKSB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX0JBU0V9L3JlZ2lzdGVyYCwge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHVzZXJuYW1lLCBwYXNzd29yZCB9KSxcclxuICB9KTtcclxuXHJcbiAgaWYgKCFyZXMub2spIHRocm93IG5ldyBFcnJvcignUmVnaXN0ZXIgZmFpbGVkJyk7XHJcblxyXG4gIHJldHVybiByZXMuanNvbigpO1xyXG59XHJcblxyXG4vLyBUYW1iYWhhbiBmdW5nc2kgdW50dWsgZGFwYXRrYW4gdXNlciBzZWthcmFuZyBkYXJpIGxvY2FsU3RvcmFnZVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudFVzZXIoKSB7XHJcbiAgY29uc3QgdXNlckpzb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFVzZXInKTtcclxuICBpZiAoIXVzZXJKc29uKSByZXR1cm4gbnVsbDtcclxuICB0cnkge1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UodXNlckpzb24pO1xyXG4gIH0gY2F0Y2gge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjQ4OTVhM2IxZGNhNGNmZWUxNzUzXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9