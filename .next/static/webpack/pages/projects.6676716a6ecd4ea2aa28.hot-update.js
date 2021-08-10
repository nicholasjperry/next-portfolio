webpackHotUpdate_N_E("pages/projects",{

/***/ "./pages/projects.js":
/*!***************************!*\
  !*** ./pages/projects.js ***!
  \***************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var reflexbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reflexbox */ \"./node_modules/reflexbox/dist/index.js\");\n/* harmony import */ var reflexbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reflexbox__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var components_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Card */ \"./components/Card.js\");\n\nvar _jsxFileName = \"/Users/nickperry/Desktop/PortfolioWebsite/Next/pages/projects.js\";\n\n\n\n\nfunction Projects(_ref) {\n  var _this = this;\n\n  var projects = _ref.projects;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    variant: \"container\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      style: {\n        textAlign: 'center'\n      },\n      children: \"My Projects\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n      justifyContent: \"space-between\",\n      flexDirection: {\n        _: \"column\",\n        1: \"row\",\n        2: \"row\"\n      },\n      children: projects.map(function (project) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n          width: {\n            _: \"100%\",\n            1: \"60%\"\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            project: project\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 13,\n            columnNumber: 25\n          }, _this)\n        }, project.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 21\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 9\n  }, this);\n}\n\n_c = Projects;\n// const ProjectsStyled = styled.div `\n//     .projects-flex {\n//         @media(max-width: 1307px) {\n//         }\n//         justify-content: center;\n//         grid-gap: 125px;\n//     }\n// `\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\n\nvar _c;\n\n$RefreshReg$(_c, \"Projects\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMuanM/NDQ3MSJdLCJuYW1lcyI6WyJQcm9qZWN0cyIsInByb2plY3RzIiwidGV4dEFsaWduIiwiXyIsIm1hcCIsInByb2plY3QiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxRQUFULE9BQThCO0FBQUE7O0FBQUEsTUFBWEMsUUFBVyxRQUFYQSxRQUFXO0FBQzFCLHNCQUNJLHFFQUFDLDZDQUFEO0FBQUssV0FBTyxFQUFDLFdBQWI7QUFBQSw0QkFDSTtBQUFJLFdBQUssRUFBRTtBQUFFQyxpQkFBUyxFQUFFO0FBQWIsT0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUkscUVBQUMsOENBQUQ7QUFBTSxvQkFBYyxFQUFDLGVBQXJCO0FBQXFDLG1CQUFhLEVBQUU7QUFBRUMsU0FBQyxFQUFFLFFBQUw7QUFBZSxXQUFHLEtBQWxCO0FBQXlCLFdBQUc7QUFBNUIsT0FBcEQ7QUFBQSxnQkFDS0YsUUFBUSxDQUFDRyxHQUFULENBQWEsVUFBQUMsT0FBTztBQUFBLDRCQUNqQixxRUFBQyw2Q0FBRDtBQUFzQixlQUFLLEVBQUU7QUFBRUYsYUFBQyxFQUFFLE1BQUw7QUFBYSxlQUFHO0FBQWhCLFdBQTdCO0FBQUEsaUNBQ0kscUVBQUMsdURBQUQ7QUFBTSxtQkFBTyxFQUFFRTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixXQUFVQSxPQUFPLENBQUNDLEVBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGlCO0FBQUEsT0FBcEI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFZSDs7S0FiUU4sUTtBQTRCVDtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlQSx1RUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Byb2plY3RzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgRmxleCwgQm94IH0gZnJvbSAncmVmbGV4Ym94JztcbmltcG9ydCBDYXJkIGZyb20gJ2NvbXBvbmVudHMvQ2FyZCc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcblxuZnVuY3Rpb24gUHJvamVjdHMoe3Byb2plY3RzfSkge1xuICAgIHJldHVybihcbiAgICAgICAgPEJveCB2YXJpYW50PVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aDEgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJ319Pk15IFByb2plY3RzPC9oMT5cbiAgICAgICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiIGZsZXhEaXJlY3Rpb249e3sgXzogXCJjb2x1bW5cIiwgMTogXCJyb3dcIiwgMjogXCJyb3dcIiB9fT5cbiAgICAgICAgICAgICAgICB7cHJvamVjdHMubWFwKHByb2plY3QgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8Qm94IGtleT17cHJvamVjdC5pZH0gd2lkdGg9e3sgXzogXCIxMDAlXCIsIDE6IFwiNjAlXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBwcm9qZWN0PXtwcm9qZWN0fSAvPlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9Cb3g+XG4gICAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbiAgICBjb25zdCB7IEFQSV9VUkwgfSA9IHByb2Nlc3MuZW52O1xuXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vcHJvamVjdHNgKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBwcm9qZWN0czogZGF0YVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBjb25zdCBQcm9qZWN0c1N0eWxlZCA9IHN0eWxlZC5kaXYgYFxuLy8gICAgIC5wcm9qZWN0cy1mbGV4IHtcbi8vICAgICAgICAgQG1lZGlhKG1heC13aWR0aDogMTMwN3B4KSB7XG4gICAgICAgICAgICBcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbi8vICAgICAgICAgZ3JpZC1nYXA6IDEyNXB4O1xuLy8gICAgIH1cbi8vIGBcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/projects.js\n");

/***/ })

})