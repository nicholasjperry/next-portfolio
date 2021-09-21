webpackHotUpdate_N_E("pages/projects",{

/***/ "./pages/projects.js":
/*!***************************!*\
  !*** ./pages/projects.js ***!
  \***************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var reflexbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reflexbox */ \"./node_modules/reflexbox/dist/index.js\");\n/* harmony import */ var reflexbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reflexbox__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Card */ \"./components/Card.js\");\n\nvar _jsxFileName = \"/Users/nickperry/Desktop/PortfolioWebsite/Next/pages/projects.js\";\n\n\n\nfunction Projects(_ref) {\n  var _this = this;\n\n  var projects = _ref.projects;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      style: {\n        textAlign: \"center\"\n      },\n      children: \"Projects\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n      style: {\n        textAlign: \"center\"\n      },\n      children: \"A List of My Projects\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      sx: {\n        maxWidth: \"1200px\",\n        mx: \"auto\",\n        px: 3,\n        mt: \"50px\",\n        alignContent: \"center\"\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n        sx: {},\n        justifyContent: \"space-between\",\n        flexDirection: {\n          _: \"column\",\n          1: \"column\",\n          2: \"row\"\n        },\n        children: projects.map(function (project) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n            width: {\n              _: \"100%\",\n              1: \"70%\",\n              2: \"30%\"\n            },\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n              project: project\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 20,\n              columnNumber: 29\n            }, _this)\n          }, project.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 19,\n            columnNumber: 25\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 9\n  }, this);\n}\n\n_c = Projects;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\n\nvar _c;\n\n$RefreshReg$(_c, \"Projects\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMuanM/NDQ3MSJdLCJuYW1lcyI6WyJQcm9qZWN0cyIsInByb2plY3RzIiwidGV4dEFsaWduIiwibWF4V2lkdGgiLCJteCIsInB4IiwibXQiLCJhbGlnbkNvbnRlbnQiLCJfIiwibWFwIiwicHJvamVjdCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOztBQUdBLFNBQVNBLFFBQVQsT0FBOEI7QUFBQTs7QUFBQSxNQUFYQyxRQUFXLFFBQVhBLFFBQVc7QUFDMUIsc0JBQ0kscUVBQUMsNkNBQUQ7QUFBQSw0QkFDSTtBQUFJLFdBQUssRUFBRTtBQUFFQyxpQkFBUyxFQUFFO0FBQWIsT0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBSSxXQUFLLEVBQUU7QUFBRUEsaUJBQVMsRUFBRTtBQUFiLE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixlQUdJLHFFQUFDLDZDQUFEO0FBQUssUUFBRSxFQUFFO0FBQ0xDLGdCQUFRLEVBQUUsUUFETDtBQUVMQyxVQUFFLEVBQUUsTUFGQztBQUdMQyxVQUFFLEVBQUUsQ0FIQztBQUlMQyxVQUFFLEVBQUUsTUFKQztBQUtMQyxvQkFBWSxFQUFFO0FBTFQsT0FBVDtBQUFBLDZCQU9JLHFFQUFDLDhDQUFEO0FBQU0sVUFBRSxFQUFFLEVBQVY7QUFBYyxzQkFBYyxFQUFDLGVBQTdCO0FBQTZDLHFCQUFhLEVBQUU7QUFBRUMsV0FBQyxFQUFFLFFBQUw7QUFBZSxhQUFHLFFBQWxCO0FBQTRCLGFBQUc7QUFBL0IsU0FBNUQ7QUFBQSxrQkFDS1AsUUFBUSxDQUFDUSxHQUFULENBQWEsVUFBQUMsT0FBTztBQUFBLDhCQUNqQixxRUFBQyw2Q0FBRDtBQUFzQixpQkFBSyxFQUFFO0FBQUVGLGVBQUMsRUFBRSxNQUFMO0FBQWEsaUJBQUcsS0FBaEI7QUFBdUIsaUJBQUc7QUFBMUIsYUFBN0I7QUFBQSxtQ0FDSSxxRUFBQyx1REFBRDtBQUFNLHFCQUFPLEVBQUVFO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLGFBQVVBLE9BQU8sQ0FBQ0MsRUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEaUI7QUFBQSxTQUFwQjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFxQkg7O0tBdEJRWCxROztBQXFDTUEsdUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9wcm9qZWN0cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZsZXgsIEJveCB9IGZyb20gJ3JlZmxleGJveCc7XG5pbXBvcnQgQ2FyZCBmcm9tICdjb21wb25lbnRzL0NhcmQnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5cbmZ1bmN0aW9uIFByb2plY3RzKHtwcm9qZWN0c30pIHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgICA8aDEgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlByb2plY3RzPC9oMT5cbiAgICAgICAgICAgIDxoMiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+QSBMaXN0IG9mIE15IFByb2plY3RzPC9oMj5cbiAgICAgICAgICAgIDxCb3ggc3g9e3tcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogXCIxMjAwcHhcIixcbiAgICAgICAgICAgICAgICBteDogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgcHg6IDMsXG4gICAgICAgICAgICAgICAgbXQ6IFwiNTBweFwiLFxuICAgICAgICAgICAgICAgIGFsaWduQ29udGVudDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgPEZsZXggc3g9e3t9fSBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIiBmbGV4RGlyZWN0aW9uPXt7IF86IFwiY29sdW1uXCIsIDE6IFwiY29sdW1uXCIsIDI6IFwicm93XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0cy5tYXAocHJvamVjdCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGtleT17cHJvamVjdC5pZH0gd2lkdGg9e3sgXzogXCIxMDAlXCIsIDE6IFwiNzAlXCIsIDI6IFwiMzAlXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgcHJvamVjdD17cHJvamVjdH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbiAgICBjb25zdCB7IEFQSV9VUkwgfSA9IHByb2Nlc3MuZW52O1xuXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vcHJvamVjdHNgKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBwcm9qZWN0czogZGF0YVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0czsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/projects.js\n");

/***/ })

})