"use strict";
self["webpackHotUpdatefrontend"]("main",{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Navbar styling */
nav {
  padding: 10px 20px;
  background-color: #007bff;
  display: flex;
  gap: 10px;
}

/* Navbar buttons */
nav button {
  padding: 8px 16px;
  cursor: pointer;
  color: white;
  background-color: #0056b3;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

nav button:hover, nav button:focus {
  background-color: #003d80;
  outline: none;
}

/* Main app container */
#app {
  margin: 20px auto;
  max-width: 400px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
}

/* Input fields style */
input {
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

/* Submit buttons and logout */
button[type="submit"], #logout-btn {
  padding: 10px 16px;
  cursor: pointer;
  background-color: #28a745;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  width: 100%;
  margin-top: 10px;
  transition: background-color 0.3s ease;
}

button[type="submit"]:hover, #logout-btn:hover {
  background-color: #218838;
}

/* Error message styling */
.error-message {
  color: #dc3545;
  margin-top: 8px;
  font-weight: 600;
  font-size: 0.9rem;
}
`, "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAAA,mBAAmB;AACnB;EACE,kBAAkB;EAClB,yBAAyB;EACzB,aAAa;EACb,SAAS;AACX;;AAEA,mBAAmB;AACnB;EACE,iBAAiB;EACjB,eAAe;EACf,YAAY;EACZ,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,sCAAsC;AACxC;;AAEA;EACE,yBAAyB;EACzB,aAAa;AACf;;AAEA,uBAAuB;AACvB;EACE,iBAAiB;EACjB,gBAAgB;EAChB,4DAA4D;EAC5D,WAAW;AACb;;AAEA,uBAAuB;AACvB;EACE,cAAc;EACd,aAAa;EACb,WAAW;EACX,sBAAsB;EACtB,sBAAsB;EACtB,kBAAkB;EAClB,eAAe;AACjB;;AAEA,8BAA8B;AAC9B;EACE,kBAAkB;EAClB,eAAe;EACf,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;EACjB,eAAe;EACf,WAAW;EACX,gBAAgB;EAChB,sCAAsC;AACxC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA,0BAA0B;AAC1B;EACE,cAAc;EACd,eAAe;EACf,gBAAgB;EAChB,iBAAiB;AACnB","sourcesContent":["/* Navbar styling */\r\nnav {\r\n  padding: 10px 20px;\r\n  background-color: #007bff;\r\n  display: flex;\r\n  gap: 10px;\r\n}\r\n\r\n/* Navbar buttons */\r\nnav button {\r\n  padding: 8px 16px;\r\n  cursor: pointer;\r\n  color: white;\r\n  background-color: #0056b3;\r\n  border: none;\r\n  border-radius: 4px;\r\n  font-weight: 600;\r\n  transition: background-color 0.3s ease;\r\n}\r\n\r\nnav button:hover, nav button:focus {\r\n  background-color: #003d80;\r\n  outline: none;\r\n}\r\n\r\n/* Main app container */\r\n#app {\r\n  margin: 20px auto;\r\n  max-width: 400px;\r\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n  color: #333;\r\n}\r\n\r\n/* Input fields style */\r\ninput {\r\n  margin: 10px 0;\r\n  padding: 10px;\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  font-size: 1rem;\r\n}\r\n\r\n/* Submit buttons and logout */\r\nbutton[type=\"submit\"], #logout-btn {\r\n  padding: 10px 16px;\r\n  cursor: pointer;\r\n  background-color: #28a745;\r\n  border: none;\r\n  border-radius: 4px;\r\n  color: white;\r\n  font-weight: bold;\r\n  font-size: 1rem;\r\n  width: 100%;\r\n  margin-top: 10px;\r\n  transition: background-color 0.3s ease;\r\n}\r\n\r\nbutton[type=\"submit\"]:hover, #logout-btn:hover {\r\n  background-color: #218838;\r\n}\r\n\r\n/* Error message styling */\r\n.error-message {\r\n  color: #dc3545;\r\n  margin-top: 8px;\r\n  font-weight: 600;\r\n  font-size: 0.9rem;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d78ec10946cc8e59ac9e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40ODBjOWE2OWI3M2RkZWIxMzU0ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywrRkFBK0YsTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSx1REFBdUQseUJBQXlCLGdDQUFnQyxvQkFBb0IsZ0JBQWdCLEtBQUssNENBQTRDLHdCQUF3QixzQkFBc0IsbUJBQW1CLGdDQUFnQyxtQkFBbUIseUJBQXlCLHVCQUF1Qiw2Q0FBNkMsS0FBSyw0Q0FBNEMsZ0NBQWdDLG9CQUFvQixLQUFLLDBDQUEwQyx3QkFBd0IsdUJBQXVCLG1FQUFtRSxrQkFBa0IsS0FBSywyQ0FBMkMscUJBQXFCLG9CQUFvQixrQkFBa0IsNkJBQTZCLDZCQUE2Qix5QkFBeUIsc0JBQXNCLEtBQUssaUZBQWlGLHlCQUF5QixzQkFBc0IsZ0NBQWdDLG1CQUFtQix5QkFBeUIsbUJBQW1CLHdCQUF3QixzQkFBc0Isa0JBQWtCLHVCQUF1Qiw2Q0FBNkMsS0FBSywwREFBMEQsZ0NBQWdDLEtBQUssdURBQXVELHFCQUFxQixzQkFBc0IsdUJBQXVCLHdCQUF3QixLQUFLLHVCQUF1QjtBQUNwdEU7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7O1VDN0V2QyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogTmF2YmFyIHN0eWxpbmcgKi9cclxubmF2IHtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMTBweDtcclxufVxyXG5cclxuLyogTmF2YmFyIGJ1dHRvbnMgKi9cclxubmF2IGJ1dHRvbiB7XHJcbiAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcclxufVxyXG5cclxubmF2IGJ1dHRvbjpob3ZlciwgbmF2IGJ1dHRvbjpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwM2Q4MDtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4vKiBNYWluIGFwcCBjb250YWluZXIgKi9cclxuI2FwcCB7XHJcbiAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbi8qIElucHV0IGZpZWxkcyBzdHlsZSAqL1xyXG5pbnB1dCB7XHJcbiAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLyogU3VibWl0IGJ1dHRvbnMgYW5kIGxvZ291dCAqL1xyXG5idXR0b25bdHlwZT1cInN1Ym1pdFwiXSwgI2xvZ291dC1idG4ge1xyXG4gIHBhZGRpbmc6IDEwcHggMTZweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcclxufVxyXG5cclxuYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl06aG92ZXIsICNsb2dvdXQtYnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE4ODM4O1xyXG59XHJcblxyXG4vKiBFcnJvciBtZXNzYWdlIHN0eWxpbmcgKi9cclxuLmVycm9yLW1lc3NhZ2Uge1xyXG4gIGNvbG9yOiAjZGMzNTQ1O1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLG1CQUFtQjtBQUNuQjtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQSxtQkFBbUI7QUFDbkI7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7QUFDZjs7QUFFQSx1QkFBdUI7QUFDdkI7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLDREQUE0RDtFQUM1RCxXQUFXO0FBQ2I7O0FBRUEsdUJBQXVCO0FBQ3ZCO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQSw4QkFBOEI7QUFDOUI7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLDBCQUEwQjtBQUMxQjtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBOYXZiYXIgc3R5bGluZyAqL1xcclxcbm5hdiB7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogTmF2YmFyIGJ1dHRvbnMgKi9cXHJcXG5uYXYgYnV0dG9uIHtcXHJcXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IGJ1dHRvbjpob3ZlciwgbmF2IGJ1dHRvbjpmb2N1cyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzZDgwO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTWFpbiBhcHAgY29udGFpbmVyICovXFxyXFxuI2FwcCB7XFxyXFxuICBtYXJnaW46IDIwcHggYXV0bztcXHJcXG4gIG1heC13aWR0aDogNDAwcHg7XFxyXFxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxyXFxuICBjb2xvcjogIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuLyogSW5wdXQgZmllbGRzIHN0eWxlICovXFxyXFxuaW5wdXQge1xcclxcbiAgbWFyZ2luOiAxMHB4IDA7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogU3VibWl0IGJ1dHRvbnMgYW5kIGxvZ291dCAqL1xcclxcbmJ1dHRvblt0eXBlPVxcXCJzdWJtaXRcXFwiXSwgI2xvZ291dC1idG4ge1xcclxcbiAgcGFkZGluZzogMTBweCAxNnB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvblt0eXBlPVxcXCJzdWJtaXRcXFwiXTpob3ZlciwgI2xvZ291dC1idG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxODgzODtcXHJcXG59XFxyXFxuXFxyXFxuLyogRXJyb3IgbWVzc2FnZSBzdHlsaW5nICovXFxyXFxuLmVycm9yLW1lc3NhZ2Uge1xcclxcbiAgY29sb3I6ICNkYzM1NDU7XFxyXFxuICBtYXJnaW4tdG9wOiA4cHg7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkNzhlYzEwOTQ2Y2M4ZTU5YWM5ZVwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==