webpackHotUpdate_N_E("pages/contact",{

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var _Users_nickperry_Desktop_PortfolioWebsite_Next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var reflexbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reflexbox */ \"./node_modules/reflexbox/dist/index.js\");\n/* harmony import */ var reflexbox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reflexbox__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _rebass_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @rebass/forms */ \"./node_modules/@rebass/forms/dist/index.esm.js\");\n/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rebass */ \"./node_modules/rebass/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\nvar _jsxFileName = \"/Users/nickperry/Desktop/PortfolioWebsite/Next/pages/contact.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_Users_nickperry_Desktop_PortfolioWebsite_Next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    .heading {\\n        text-align: center;\\n        margin-bottom: 40px;\\n    }\\n\\n    #message {\\n        height: 150px;\\n        padding-bottom: 120px;\\n    }\\n\\n    .send-button{\\n        width: 290px;\\n        padding: 10px;\\n        cursor: pointer;\\n        /* border-radius: 10px; */\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\nfunction ContactForm(_ref) {\n  _s();\n\n  var contacts = _ref.contacts;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])(false),\n      formSubmitted = _useState[0],\n      setFormSubmitted = _useState[1];\n\n  var handleChange = function handleChange(e) {\n    setFormSubmitted(function (value) {\n      return e.target.value;\n    });\n  };\n\n  var handleSubmit = function handleSubmit(e) {\n    e.preventDefault();\n    setFormSubmitted(function (e) {\n      return e.target.value;\n    });\n  };\n\n  console.log(contacts);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(ContactStyled, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n        className: \"heading\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n          children: \"Get In Touch\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n          children: \"SEND ME A MESSAGE!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_3__[\"Flex\"], {\n        flexWrap: \"wrap\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n          width: 1,\n          px: 400,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_rebass_forms__WEBPACK_IMPORTED_MODULE_4__[\"Input\"], {\n            id: \"message\",\n            name: \"message\",\n            placeholder: \"Message\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_3__[\"Flex\"], {\n          width: 1,\n          px: 400,\n          sx: {\n            gridGap: '5px',\n            marginTop: '10px'\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n            width: 1 / 3,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_rebass_forms__WEBPACK_IMPORTED_MODULE_4__[\"Input\"], {\n              id: \"email\",\n              name: \"email\",\n              type: \"email\",\n              placeholder: \"Email\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 35,\n              columnNumber: 29\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 25\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n            width: 1 / 3,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_rebass_forms__WEBPACK_IMPORTED_MODULE_4__[\"Input\"], {\n              id: \"name\",\n              name: \"name\",\n              type: \"name\",\n              placeholder: \"Full Name\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 38,\n              columnNumber: 29\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 25\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n            width: 1 / 3,\n            mb: 30,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(rebass__WEBPACK_IMPORTED_MODULE_5__[\"Button\"], {\n              className: \"send-button\",\n              backgroundColor: \"black\",\n              onSubmit: handleSubmit,\n              children: \"Send\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 41,\n              columnNumber: 29\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }, this)\n  }, void 0, false);\n}\n\n_s(ContactForm, \"QnLwAVLDgvFjszJklpa3dDzbP2Y=\");\n\n_c = ContactForm;\nvar ContactStyled = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject());\n_c2 = ContactStyled;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactForm);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ContactForm\");\n$RefreshReg$(_c2, \"ContactStyled\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29udGFjdC5qcz8wMGI3Il0sIm5hbWVzIjpbIkNvbnRhY3RGb3JtIiwiY29udGFjdHMiLCJ1c2VTdGF0ZSIsImZvcm1TdWJtaXR0ZWQiLCJzZXRGb3JtU3VibWl0dGVkIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiZ3JpZEdhcCIsIm1hcmdpblRvcCIsIkNvbnRhY3RTdHlsZWQiLCJzdHlsZWQiLCJkaXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxTQUFTQSxXQUFULE9BQWtDO0FBQUE7O0FBQUEsTUFBWEMsUUFBVyxRQUFYQSxRQUFXOztBQUFBLGtCQUNZQyxzREFBUSxDQUFDLEtBQUQsQ0FEcEI7QUFBQSxNQUN2QkMsYUFEdUI7QUFBQSxNQUNSQyxnQkFEUTs7QUFHOUIsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3hCRixvQkFBZ0IsQ0FBQyxVQUFBRyxLQUFLO0FBQUEsYUFBSUQsQ0FBQyxDQUFDRSxNQUFGLENBQVNELEtBQWI7QUFBQSxLQUFOLENBQWhCO0FBQ0gsR0FGRDs7QUFJQSxNQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDSCxDQUFELEVBQU87QUFDeEJBLEtBQUMsQ0FBQ0ksY0FBRjtBQUNBTixvQkFBZ0IsQ0FBQyxVQUFBRSxDQUFDO0FBQUEsYUFBSUEsQ0FBQyxDQUFDRSxNQUFGLENBQVNELEtBQWI7QUFBQSxLQUFGLENBQWhCO0FBQ0gsR0FIRDs7QUFLQUksU0FBTyxDQUFDQyxHQUFSLENBQVlYLFFBQVo7QUFFQSxzQkFDSTtBQUFBLDJCQUNJLHFFQUFDLGFBQUQ7QUFBQSw4QkFDSSxxRUFBQyw2Q0FBRDtBQUFLLGlCQUFTLEVBQUMsU0FBZjtBQUFBLGdDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFLSSxxRUFBQyw4Q0FBRDtBQUFNLGdCQUFRLEVBQUMsTUFBZjtBQUFBLGdDQUNJLHFFQUFDLDZDQUFEO0FBQUssZUFBSyxFQUFFLENBQVo7QUFBZSxZQUFFLEVBQUUsR0FBbkI7QUFBQSxpQ0FDSSxxRUFBQyxtREFBRDtBQUFPLGNBQUUsRUFBQyxTQUFWO0FBQW9CLGdCQUFJLEVBQUMsU0FBekI7QUFBbUMsdUJBQVcsRUFBQztBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUlJLHFFQUFDLDhDQUFEO0FBQU0sZUFBSyxFQUFFLENBQWI7QUFBZ0IsWUFBRSxFQUFFLEdBQXBCO0FBQXlCLFlBQUUsRUFBRTtBQUFFWSxtQkFBTyxFQUFFLEtBQVg7QUFBa0JDLHFCQUFTLEVBQUU7QUFBN0IsV0FBN0I7QUFBQSxrQ0FDSSxxRUFBQyw2Q0FBRDtBQUFLLGlCQUFLLEVBQUUsSUFBRSxDQUFkO0FBQUEsbUNBQ0kscUVBQUMsbURBQUQ7QUFBTyxnQkFBRSxFQUFDLE9BQVY7QUFBa0Isa0JBQUksRUFBQyxPQUF2QjtBQUErQixrQkFBSSxFQUFDLE9BQXBDO0FBQTRDLHlCQUFXLEVBQUM7QUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFJSSxxRUFBQyw2Q0FBRDtBQUFLLGlCQUFLLEVBQUUsSUFBRSxDQUFkO0FBQUEsbUNBQ0kscUVBQUMsbURBQUQ7QUFBTyxnQkFBRSxFQUFDLE1BQVY7QUFBaUIsa0JBQUksRUFBQyxNQUF0QjtBQUE2QixrQkFBSSxFQUFDLE1BQWxDO0FBQXlDLHlCQUFXLEVBQUM7QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkosZUFPSSxxRUFBQyw2Q0FBRDtBQUFLLGlCQUFLLEVBQUUsSUFBRSxDQUFkO0FBQWlCLGNBQUUsRUFBRSxFQUFyQjtBQUFBLG1DQUNJLHFFQUFDLDZDQUFEO0FBQVEsdUJBQVMsRUFBQyxhQUFsQjtBQUFnQyw2QkFBZSxFQUFDLE9BQWhEO0FBQXdELHNCQUFRLEVBQUVMLFlBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUEwQkg7O0dBeENRVCxXOztLQUFBQSxXO0FBdURULElBQU1lLGFBQWEsR0FBR0MsdURBQU0sQ0FBQ0MsR0FBVixtQkFBbkI7TUFBTUYsYTs7QUFtQlNmLDBFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY29udGFjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IEZsZXgsIEJveCB9IGZyb20gJ3JlZmxleGJveCc7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ0ByZWJhc3MvZm9ybXMnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncmViYXNzJztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIENvbnRhY3RGb3JtICh7Y29udGFjdHN9KSB7XG4gICAgY29uc3QgW2Zvcm1TdWJtaXR0ZWQsIHNldEZvcm1TdWJtaXR0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgc2V0Rm9ybVN1Ym1pdHRlZCh2YWx1ZSA9PiBlLnRhcmdldC52YWx1ZSk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2V0Rm9ybVN1Ym1pdHRlZChlID0+IGUudGFyZ2V0LnZhbHVlKVxuICAgIH1cbiAgICBcbiAgICBjb25zb2xlLmxvZyhjb250YWN0cyk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPENvbnRhY3RTdHlsZWQ+XG4gICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9XCJoZWFkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMT5HZXQgSW4gVG91Y2g8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8cD5TRU5EIE1FIEEgTUVTU0FHRSE8L3A+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPEZsZXggZmxleFdyYXA9XCJ3cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCb3ggd2lkdGg9ezF9IHB4PXs0MDB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IGlkPVwibWVzc2FnZVwiIG5hbWU9XCJtZXNzYWdlXCIgcGxhY2Vob2xkZXI9XCJNZXNzYWdlXCIgLz4gICAgXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICA8RmxleCB3aWR0aD17MX0gcHg9ezQwMH0gc3g9e3sgZ3JpZEdhcDogJzVweCcsIG1hcmdpblRvcDogJzEwcHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCB3aWR0aD17MS8zfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgaWQ9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggd2lkdGg9ezEvM30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IGlkPVwibmFtZVwiIG5hbWU9XCJuYW1lXCIgdHlwZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIkZ1bGwgTmFtZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCB3aWR0aD17MS8zfSBtYj17MzB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwic2VuZC1idXR0b25cIiBiYWNrZ3JvdW5kQ29sb3I9XCJibGFja1wiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlNlbmQ8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgPC9Db250YWN0U3R5bGVkPlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuICAgIGNvbnN0IHsgQVBJX1VSTCB9ID0gcHJvY2Vzcy5lbnY7XG5cbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS9jb250YWN0c2ApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGNvbnRhY3RzOiBkYXRhXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IENvbnRhY3RTdHlsZWQgPSBzdHlsZWQuZGl2YFxuICAgIC5oZWFkaW5nIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgIH1cblxuICAgICNtZXNzYWdlIHtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEyMHB4O1xuICAgIH1cblxuICAgIC5zZW5kLWJ1dHRvbntcbiAgICAgICAgd2lkdGg6IDI5MHB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIC8qIGJvcmRlci1yYWRpdXM6IDEwcHg7ICovXG4gICAgfVxuYFxuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Rm9ybTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/contact.js\n");

/***/ })

})