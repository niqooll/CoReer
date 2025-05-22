"use strict";
self["webpackHotUpdatefrontend"]("main",{

/***/ "./src/script/views/landing-view.js":
/*!******************************************!*\
  !*** ./src/script/views/landing-view.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderLanding: () => (/* binding */ renderLanding)
/* harmony export */ });
/* harmony import */ var _public_icons_history_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/icons/history.png */ "./src/public/icons/history.png");
// src/script/views/landing-view.js
 
function renderLanding() {
  return `
    <section class="landing-section py-5 mb-5 min-vh-90 d-flex align-items-center">
      <div class="container">
        <div class="row align-items-center">
          <!-- Kiri: teks dan tombol -->
          <div class="col-lg-6 mb-4 mb-lg-0">
            <h1 class="display-5 fw-bold">CV Analyze: Evaluate and Improve Your CV</h1>
            <p class="lead">
              Increase your chances of landing your dream job with our CV Analyze tool. Upload your CV, get a personalized score, and receive tailored suggestions to enhance your profile. Based on your CV score, discover relevant job opportunities that match your skills and experience.
            </p>
            <button id="btn-check-cv" class="btn btn-primary btn-lg">Check ur CV now</button>
          </div>

          <!-- Kanan: gambar preview -->
          <div class="col-lg-6 text-center">
            <img src="${_public_icons_history_png__WEBPACK_IMPORTED_MODULE_0__}" alt="Preview of CV analysis result" class="img-fluid rounded shadow" />
          </div>
        </div>
      </div>
    </section>
    
    <section class="about-section py-5 min-vh-100 bg-light d-flex align-items-center">
      <div class="container">
        <div class="row align-items-center">
          <!-- Kiri: gambar about -->
          <div class="col-lg-6 text-center mb-4 mb-lg-0">
            <img src="${_public_icons_history_png__WEBPACK_IMPORTED_MODULE_0__}" alt="About CoReer App" class="img-fluid rounded shadow" />
          </div>

          <!-- Kanan: deskripsi about -->
          <div class="col-lg-6">
            <h2 class="fw-bold">About CoReer</h2>
            <p class="lead">
              CoReer is your personal career companion, designed to help you grow professionally. Whether you're a student or a seasoned job-seeker, CoReer offers tailored tools to analyze your CV, track your job applications, and receive career insights — all in one place.
            </p>
          </div>
        </div>
      </div>
    </section>
  `;
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c8f0d5917932ad9d87b9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jZTAxZmIwNGQxOWJmMjllMDFmYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDd0Q7QUFDakQ7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isc0RBQVUsQ0FBQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixzREFBVSxDQUFDO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDM0NBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvc2NyaXB0L3ZpZXdzL2xhbmRpbmctdmlldy5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL3NjcmlwdC92aWV3cy9sYW5kaW5nLXZpZXcuanNcclxuaW1wb3J0IGhpc3RvcnlJbWcgZnJvbSAnLi4vLi4vcHVibGljL2ljb25zL2hpc3RvcnkucG5nJzsgXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJMYW5kaW5nKCkge1xyXG4gIHJldHVybiBgXHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cImxhbmRpbmctc2VjdGlvbiBweS01IG1iLTUgbWluLXZoLTkwIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICA8IS0tIEtpcmk6IHRla3MgZGFuIHRvbWJvbCAtLT5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNiBtYi00IG1iLWxnLTBcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzPVwiZGlzcGxheS01IGZ3LWJvbGRcIj5DViBBbmFseXplOiBFdmFsdWF0ZSBhbmQgSW1wcm92ZSBZb3VyIENWPC9oMT5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJsZWFkXCI+XHJcbiAgICAgICAgICAgICAgSW5jcmVhc2UgeW91ciBjaGFuY2VzIG9mIGxhbmRpbmcgeW91ciBkcmVhbSBqb2Igd2l0aCBvdXIgQ1YgQW5hbHl6ZSB0b29sLiBVcGxvYWQgeW91ciBDViwgZ2V0IGEgcGVyc29uYWxpemVkIHNjb3JlLCBhbmQgcmVjZWl2ZSB0YWlsb3JlZCBzdWdnZXN0aW9ucyB0byBlbmhhbmNlIHlvdXIgcHJvZmlsZS4gQmFzZWQgb24geW91ciBDViBzY29yZSwgZGlzY292ZXIgcmVsZXZhbnQgam9iIG9wcG9ydHVuaXRpZXMgdGhhdCBtYXRjaCB5b3VyIHNraWxscyBhbmQgZXhwZXJpZW5jZS5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiYnRuLWNoZWNrLWN2XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLWxnXCI+Q2hlY2sgdXIgQ1Ygbm93PC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8IS0tIEthbmFuOiBnYW1iYXIgcHJldmlldyAtLT5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7aGlzdG9yeUltZ31cIiBhbHQ9XCJQcmV2aWV3IG9mIENWIGFuYWx5c2lzIHJlc3VsdFwiIGNsYXNzPVwiaW1nLWZsdWlkIHJvdW5kZWQgc2hhZG93XCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICAgIFxyXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJhYm91dC1zZWN0aW9uIHB5LTUgbWluLXZoLTEwMCBiZy1saWdodCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPCEtLSBLaXJpOiBnYW1iYXIgYWJvdXQgLS0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTYgdGV4dC1jZW50ZXIgbWItNCBtYi1sZy0wXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtoaXN0b3J5SW1nfVwiIGFsdD1cIkFib3V0IENvUmVlciBBcHBcIiBjbGFzcz1cImltZy1mbHVpZCByb3VuZGVkIHNoYWRvd1wiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8IS0tIEthbmFuOiBkZXNrcmlwc2kgYWJvdXQgLS0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzPVwiZnctYm9sZFwiPkFib3V0IENvUmVlcjwvaDI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwibGVhZFwiPlxyXG4gICAgICAgICAgICAgIENvUmVlciBpcyB5b3VyIHBlcnNvbmFsIGNhcmVlciBjb21wYW5pb24sIGRlc2lnbmVkIHRvIGhlbHAgeW91IGdyb3cgcHJvZmVzc2lvbmFsbHkuIFdoZXRoZXIgeW91J3JlIGEgc3R1ZGVudCBvciBhIHNlYXNvbmVkIGpvYi1zZWVrZXIsIENvUmVlciBvZmZlcnMgdGFpbG9yZWQgdG9vbHMgdG8gYW5hbHl6ZSB5b3VyIENWLCB0cmFjayB5b3VyIGpvYiBhcHBsaWNhdGlvbnMsIGFuZCByZWNlaXZlIGNhcmVlciBpbnNpZ2h0cyDigJQgYWxsIGluIG9uZSBwbGFjZS5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIGA7XHJcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjOGYwZDU5MTc5MzJhZDlkODdiOVwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==