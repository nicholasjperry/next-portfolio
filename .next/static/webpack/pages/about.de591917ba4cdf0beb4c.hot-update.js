webpackHotUpdate_N_E("pages/about",{

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var _Users_nickperry_Desktop_PortfolioWebsite_Next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-seo */ \"./node_modules/next-seo/lib/next-seo.module.js\");\n/* harmony import */ var reflexbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reflexbox */ \"./node_modules/reflexbox/dist/index.js\");\n/* harmony import */ var reflexbox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reflexbox__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _jsxFileName = \"/Users/nickperry/Desktop/PortfolioWebsite/Next/pages/about.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_nickperry_Desktop_PortfolioWebsite_Next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nfunction About(_ref) {\n  var page = _ref.page;\n  var SEO = {\n    title: page.Title,\n    description: \"Just your normal About Page :)\",\n    openGraph: {\n      title: page.Title,\n      description: \"Just your normal About Page :)\"\n    }\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_seo__WEBPACK_IMPORTED_MODULE_2__[\"NextSeo\"], _objectSpread({}, SEO), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n      variant: \"container\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n        as: \"h2\",\n        my: 40,\n        children: page.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true);\n}\n\n_c = About;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\n\nvar _c;\n\n$RefreshReg$(_c, \"About\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXQuanM/MjZlYyJdLCJuYW1lcyI6WyJBYm91dCIsInBhZ2UiLCJTRU8iLCJ0aXRsZSIsIlRpdGxlIiwiZGVzY3JpcHRpb24iLCJvcGVuR3JhcGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxTQUFTQSxLQUFULE9BQXVCO0FBQUEsTUFBUEMsSUFBTyxRQUFQQSxJQUFPO0FBQ25CLE1BQU1DLEdBQUcsR0FBRztBQUNSQyxTQUFLLEVBQUVGLElBQUksQ0FBQ0csS0FESjtBQUVSQyxlQUFXLEVBQUUsZ0NBRkw7QUFJUkMsYUFBUyxFQUFFO0FBQ1BILFdBQUssRUFBRUYsSUFBSSxDQUFDRyxLQURMO0FBRVBDLGlCQUFXLEVBQUU7QUFGTjtBQUpILEdBQVo7QUFVQSxzQkFDSTtBQUFBLDRCQUNJLHFFQUFDLGdEQUFELG9CQUFhSCxHQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJLHFFQUFDLDZDQUFEO0FBQUssYUFBTyxFQUFDLFdBQWI7QUFBQSw2QkFDSSxxRUFBQyw2Q0FBRDtBQUFLLFVBQUUsRUFBQyxJQUFSO0FBQWEsVUFBRSxFQUFFLEVBQWpCO0FBQUEsa0JBQXNCRCxJQUFJLENBQUNFO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQSxrQkFESjtBQVFIOztLQW5CUUgsSzs7QUFrQ01BLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYWJvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0U2VvIH0gZnJvbSAnbmV4dC1zZW8nO1xuaW1wb3J0IHsgQm94IH0gZnJvbSAncmVmbGV4Ym94JztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuXG5mdW5jdGlvbiBBYm91dCh7cGFnZX0pIHtcbiAgICBjb25zdCBTRU8gPSB7XG4gICAgICAgIHRpdGxlOiBwYWdlLlRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJKdXN0IHlvdXIgbm9ybWFsIEFib3V0IFBhZ2UgOilcIixcblxuICAgICAgICBvcGVuR3JhcGg6IHtcbiAgICAgICAgICAgIHRpdGxlOiBwYWdlLlRpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiSnVzdCB5b3VyIG5vcm1hbCBBYm91dCBQYWdlIDopXCIsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8TmV4dFNlbyB7Li4uU0VPfSAvPlxuICAgICAgICAgICAgPEJveCB2YXJpYW50PVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPEJveCBhcz1cImgyXCIgbXk9ezQwfT57cGFnZS50aXRsZX08L0JveD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gICAgY29uc3QgeyBBUElfVVJMIH0gPSBwcm9jZXNzLmVudlxuXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vcGFnZXMvMWApXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBwYWdlOiBkYXRhXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/about.js\n");

/***/ })

})