webpackHotUpdate_N_E("pages/projects",{

/***/ "./pages/projects.js":
/*!***************************!*\
  !*** ./pages/projects.js ***!
  \***************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var reflexbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reflexbox */ \"./node_modules/reflexbox/dist/index.js\");\n/* harmony import */ var reflexbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reflexbox__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Card */ \"./components/Card.js\");\n\nvar _jsxFileName = \"/Users/nickperry/Desktop/PortfolioWebsite/Next/pages/projects.js\";\n\n\n\nfunction Projects(_ref) {\n  var _this = this;\n\n  var projects = _ref.projects;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    variant: \"container\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      style: {\n        textAlign: 'center'\n      },\n      children: \"Projects\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n      style: {\n        textAlign: \"center\"\n      },\n      children: \"A List of My Projects\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      sx: {\n        maxWidth: '1200px',\n        mx: 'auto',\n        px: 3\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n        justifyContent: \"space-between\",\n        flexDirection: {\n          _: \"column\",\n          1: \"row\",\n          2: \"row\"\n        },\n        children: projects.map(function (project) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n            width: {\n              _: \"100%\",\n              1: \"30%\"\n            },\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n              project: project\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 18,\n              columnNumber: 29\n            }, _this)\n          }, project.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 17,\n            columnNumber: 25\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 9\n  }, this);\n}\n\n_c = Projects;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\n\nvar _c;\n\n$RefreshReg$(_c, \"Projects\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMuanM/NDQ3MSJdLCJuYW1lcyI6WyJQcm9qZWN0cyIsInByb2plY3RzIiwidGV4dEFsaWduIiwibWF4V2lkdGgiLCJteCIsInB4IiwiXyIsIm1hcCIsInByb2plY3QiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxTQUFTQSxRQUFULE9BQThCO0FBQUE7O0FBQUEsTUFBWEMsUUFBVyxRQUFYQSxRQUFXO0FBQzFCLHNCQUNJLHFFQUFDLDZDQUFEO0FBQUssV0FBTyxFQUFDLFdBQWI7QUFBQSw0QkFDSTtBQUFJLFdBQUssRUFBRTtBQUFFQyxpQkFBUyxFQUFFO0FBQWIsT0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBSSxXQUFLLEVBQUU7QUFBRUEsaUJBQVMsRUFBRTtBQUFiLE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixlQUdJLHFFQUFDLDZDQUFEO0FBQUssUUFBRSxFQUFFO0FBQ0xDLGdCQUFRLEVBQUUsUUFETDtBQUVMQyxVQUFFLEVBQUUsTUFGQztBQUdMQyxVQUFFLEVBQUU7QUFIQyxPQUFUO0FBQUEsNkJBS0kscUVBQUMsOENBQUQ7QUFBTSxzQkFBYyxFQUFDLGVBQXJCO0FBQXFDLHFCQUFhLEVBQUU7QUFBRUMsV0FBQyxFQUFFLFFBQUw7QUFBZSxhQUFHLEtBQWxCO0FBQXlCLGFBQUc7QUFBNUIsU0FBcEQ7QUFBQSxrQkFDS0wsUUFBUSxDQUFDTSxHQUFULENBQWEsVUFBQUMsT0FBTztBQUFBLDhCQUNqQixxRUFBQyw2Q0FBRDtBQUFzQixpQkFBSyxFQUFFO0FBQUVGLGVBQUMsRUFBRSxNQUFMO0FBQWEsaUJBQUc7QUFBaEIsYUFBN0I7QUFBQSxtQ0FDSSxxRUFBQyx1REFBRDtBQUFNLHFCQUFPLEVBQUVFO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLGFBQVVBLE9BQU8sQ0FBQ0MsRUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEaUI7QUFBQSxTQUFwQjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFtQkg7O0tBcEJRVCxROztBQW1DTUEsdUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9wcm9qZWN0cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZsZXgsIEJveCB9IGZyb20gJ3JlZmxleGJveCc7XG5pbXBvcnQgQ2FyZCBmcm9tICdjb21wb25lbnRzL0NhcmQnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5cbmZ1bmN0aW9uIFByb2plY3RzKHtwcm9qZWN0c30pIHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxCb3ggdmFyaWFudD1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGgxIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcid9fT5Qcm9qZWN0czwvaDE+XG4gICAgICAgICAgICA8aDMgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwifX0+QSBMaXN0IG9mIE15IFByb2plY3RzPC9oMz5cbiAgICAgICAgICAgIDxCb3ggc3g9e3tcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEyMDBweCcsXG4gICAgICAgICAgICAgICAgbXg6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICBweDogM1xuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCIgZmxleERpcmVjdGlvbj17eyBfOiBcImNvbHVtblwiLCAxOiBcInJvd1wiLCAyOiBcInJvd1wiIH19PlxuICAgICAgICAgICAgICAgICAgICB7cHJvamVjdHMubWFwKHByb2plY3QgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBrZXk9e3Byb2plY3QuaWR9IHdpZHRoPXt7IF86IFwiMTAwJVwiLCAxOiBcIjMwJVwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHByb2plY3Q9e3Byb2plY3R9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4gICAgY29uc3QgeyBBUElfVVJMIH0gPSBwcm9jZXNzLmVudjtcblxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkx9L3Byb2plY3RzYCk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgcHJvamVjdHM6IGRhdGFcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/projects.js\n");

/***/ })

})