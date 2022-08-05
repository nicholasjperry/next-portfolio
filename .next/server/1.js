exports.ids = [1];
exports.modules = {

/***/ "./components/ContextWrapper.js":
/*!**************************************!*\
  !*** ./components/ContextWrapper.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_HeaderContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/HeaderContext */ \"./contexts/HeaderContext.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/nickperry/Desktop/PortfolioWebsite/Next/components/ContextWrapper.js\";\n\n\n\nfunction ContextWrapper({\n  children,\n  navigation\n}) {\n  const {\n    0: menuItems\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(navigation);\n  const {\n    0: color\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])('true');\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_contexts_HeaderContext__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Provider, {\n    value: {\n      menuItems,\n      color\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 9\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContextWrapper);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbnRleHRXcmFwcGVyLmpzPzdlYjQiXSwibmFtZXMiOlsiQ29udGV4dFdyYXBwZXIiLCJjaGlsZHJlbiIsIm5hdmlnYXRpb24iLCJtZW51SXRlbXMiLCJ1c2VTdGF0ZSIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsY0FBVCxDQUF3QjtBQUFDQyxVQUFEO0FBQVdDO0FBQVgsQ0FBeEIsRUFBZ0Q7QUFFNUMsUUFBTTtBQUFBLE9BQUNDO0FBQUQsTUFBY0Msc0RBQVEsQ0FBQ0YsVUFBRCxDQUE1QjtBQUNBLFFBQU07QUFBQSxPQUFDRztBQUFELE1BQVVELHNEQUFRLENBQUMsTUFBRCxDQUF4QjtBQUVBLHNCQUNJLHFFQUFDLCtEQUFELENBQWUsUUFBZjtBQUF3QixTQUFLLEVBQUU7QUFBQ0QsZUFBRDtBQUFZRTtBQUFaLEtBQS9CO0FBQUEsY0FDS0o7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFLSDs7QUFHY0QsNkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbnRleHRXcmFwcGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlckNvbnRleHQgZnJvbSAnLi4vY29udGV4dHMvSGVhZGVyQ29udGV4dCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gQ29udGV4dFdyYXBwZXIoe2NoaWxkcmVuLCBuYXZpZ2F0aW9ufSkge1xuXG4gICAgY29uc3QgW21lbnVJdGVtc10gPSB1c2VTdGF0ZShuYXZpZ2F0aW9uKTtcbiAgICBjb25zdCBbY29sb3JdID0gdXNlU3RhdGUoJ3RydWUnKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxIZWFkZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7bWVudUl0ZW1zLCBjb2xvcn19PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0hlYWRlckNvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IENvbnRleHRXcmFwcGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ContextWrapper.js\n");

/***/ }),

/***/ "./contexts/HeaderContext.js":
/*!***********************************!*\
  !*** ./contexts/HeaderContext.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst HeaderContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])(null);\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeaderContext);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0cy9IZWFkZXJDb250ZXh0LmpzPzBhOWQiXSwibmFtZXMiOlsiSGVhZGVyQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTUEsYUFBYSxnQkFBR0MsMkRBQWEsQ0FBQyxJQUFELENBQW5DO0FBRWVELDRFQUFmIiwiZmlsZSI6Ii4vY29udGV4dHMvSGVhZGVyQ29udGV4dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEhlYWRlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJDb250ZXh0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./contexts/HeaderContext.js\n");

/***/ })

};;