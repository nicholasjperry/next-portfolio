webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Navigation.js":
/*!**********************************!*\
  !*** ./components/Navigation.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_nickperry_Desktop_PortfolioWebsite_Next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _contexts_HeaderContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contexts/HeaderContext */ \"./contexts/HeaderContext.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/nickperry/Desktop/PortfolioWebsite/Next/components/Navigation.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject2() {\n  var data = Object(_Users_nickperry_Desktop_PortfolioWebsite_Next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    display: none;\\n\\n    @media(max-width: 768px) {\\n        display: flex;\\n        flex-direction: column;\\n        cursor: pointer;\\n\\n        span {\\n            height: 2px;\\n            width: 25px;\\n            background: #7fffd4;\\n            margin-bottom: 4px;\\n            border-radius: 5px;\\n        }\\n    }\\n\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_Users_nickperry_Desktop_PortfolioWebsite_Next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n\\n    @media(max-width: 760px) {\\n        overflow: hidden;\\n\\n        ul {\\n            display: flex;\\n            flex-direction: column;\\n            flex-wrap: wrap;\\n            max-height: \", \";\\n            text-align: center;\\n            justify-content: center;\\n            gap: 1vh;\\n\\n            li {\\n                flex-basis: 50%;\\n            }\\n        }\\n    }\\n\\n    ul {\\n        list-style: none;\\n        padding: 0;\\n        margin: 0 auto;\\n        display: flex;\\n        flex-direction: row;\\n        justify-content: center;\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\nfunction Navigation() {\n  _s();\n\n  var _this = this;\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useContext\"])(_contexts_HeaderContext__WEBPACK_IMPORTED_MODULE_6__[\"default\"]),\n      menuItems = _useContext.menuItems,\n      color = _useContext.color;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setIsOpen = _useState[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(NavigationStyled, {\n      color: color,\n      isOpen: !isOpen,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"ul\", {\n        children: menuItems.map(function (item) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"li\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n              href: item.slug,\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n                className: router.pathname === item.slug ? 'active' : '',\n                children: item.title\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 20,\n                columnNumber: 33\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 19,\n              columnNumber: 29\n            }, _this)\n          }, item.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 18,\n            columnNumber: 25\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Hamburger, {\n      onClick: function onClick() {\n        return setIsOpen(!isOpen);\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"span\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"span\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"span\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Navigation, \"2nqSKR3C6MciGL4ioa6TCxMuH9U=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"]];\n});\n\n_c = Navigation;\nvar NavigationStyled = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject(), function (_ref) {\n  var isOpen = _ref.isOpen;\n  return isOpen ? \"300px\" : \"0\";\n});\n_c2 = NavigationStyled;\nvar Hamburger = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject2());\n_c3 = Hamburger;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Navigation\");\n$RefreshReg$(_c2, \"NavigationStyled\");\n$RefreshReg$(_c3, \"Hamburger\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uLmpzPzE0ODYiXSwibmFtZXMiOlsiTmF2aWdhdGlvbiIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUNvbnRleHQiLCJIZWFkZXJDb250ZXh0IiwibWVudUl0ZW1zIiwiY29sb3IiLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldElzT3BlbiIsIm1hcCIsIml0ZW0iLCJzbHVnIiwicGF0aG5hbWUiLCJ0aXRsZSIsImlkIiwiTmF2aWdhdGlvblN0eWxlZCIsInN0eWxlZCIsImRpdiIsIkhhbWJ1cmdlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxVQUFULEdBQXNCO0FBQUE7O0FBQUE7O0FBRWxCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRmtCLG9CQUdXQyx3REFBVSxDQUFDQywrREFBRCxDQUhyQjtBQUFBLE1BR1ZDLFNBSFUsZUFHVkEsU0FIVTtBQUFBLE1BR0NDLEtBSEQsZUFHQ0EsS0FIRDs7QUFBQSxrQkFJVUMsc0RBQVEsQ0FBQyxLQUFELENBSmxCO0FBQUEsTUFJWEMsTUFKVztBQUFBLE1BSUhDLFNBSkc7O0FBTWxCLHNCQUNJO0FBQUEsNEJBQ0kscUVBQUMsZ0JBQUQ7QUFBa0IsV0FBSyxFQUFFSCxLQUF6QjtBQUFnQyxZQUFNLEVBQUUsQ0FBQ0UsTUFBekM7QUFBQSw2QkFDSTtBQUFBLGtCQUNLSCxTQUFTLENBQUNLLEdBQVYsQ0FBYyxVQUFBQyxJQUFJO0FBQUEsOEJBQ2Y7QUFBQSxtQ0FDSSxxRUFBQyxnREFBRDtBQUFNLGtCQUFJLEVBQUVBLElBQUksQ0FBQ0MsSUFBakI7QUFBQSxxQ0FDSTtBQUFHLHlCQUFTLEVBQUVYLE1BQU0sQ0FBQ1ksUUFBUCxLQUFvQkYsSUFBSSxDQUFDQyxJQUF6QixHQUFnQyxRQUFoQyxHQUEyQyxFQUF6RDtBQUFBLDBCQUErREQsSUFBSSxDQUFDRztBQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLGFBQVNILElBQUksQ0FBQ0ksRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURlO0FBQUEsU0FBbEI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBWUkscUVBQUMsU0FBRDtBQUFXLGFBQU8sRUFBRTtBQUFBLGVBQU1OLFNBQVMsQ0FBQyxDQUFDRCxNQUFGLENBQWY7QUFBQSxPQUFwQjtBQUFBLDhCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaSjtBQUFBLGtCQURKO0FBb0JIOztHQTFCUVIsVTtVQUVVRSxxRDs7O0tBRlZGLFU7QUE0QlQsSUFBTWdCLGdCQUFnQixHQUFHQyx1REFBTSxDQUFDQyxHQUFWLG9CQVNJO0FBQUEsTUFBR1YsTUFBSCxRQUFHQSxNQUFIO0FBQUEsU0FBaUJBLE1BQU0sR0FBRyxPQUFILEdBQWEsR0FBcEM7QUFBQSxDQVRKLENBQXRCO01BQU1RLGdCO0FBOEJOLElBQU1HLFNBQVMsR0FBR0YsdURBQU0sQ0FBQ0MsR0FBVixvQkFBZjtNQUFNQyxTO0FBbUJTbkIseUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmlnYXRpb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZGVyQ29udGV4dCBmcm9tICcuLi9jb250ZXh0cy9IZWFkZXJDb250ZXh0JztcblxuZnVuY3Rpb24gTmF2aWdhdGlvbigpIHtcblxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHsgbWVudUl0ZW1zLCBjb2xvciB9ID0gdXNlQ29udGV4dChIZWFkZXJDb250ZXh0KTtcbiAgICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIFxuICAgIHJldHVybihcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uU3R5bGVkIGNvbG9yPXtjb2xvcn0gaXNPcGVuPXshaXNPcGVufT5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIHttZW51SXRlbXMubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17aXRlbS5zbHVnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT09IGl0ZW0uc2x1ZyA/ICdhY3RpdmUnIDogJycgfT57aXRlbS50aXRsZX08L2E+ICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9OYXZpZ2F0aW9uU3R5bGVkPlxuICAgICAgICAgICAgPEhhbWJ1cmdlciBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4oIWlzT3Blbil9PlxuICAgICAgICAgICAgICAgIDxzcGFuIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gLz5cbiAgICAgICAgICAgICAgICA8c3BhbiAvPlxuICAgICAgICAgICAgPC9IYW1idXJnZXI+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG5cbmNvbnN0IE5hdmlnYXRpb25TdHlsZWQgPSBzdHlsZWQuZGl2YFxuXG4gICAgQG1lZGlhKG1heC13aWR0aDogNzYwcHgpIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgICB1bCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6ICR7KHsgaXNPcGVuIH0pID0+IChpc09wZW4gPyBcIjMwMHB4XCIgOiBcIjBcIil9O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBnYXA6IDF2aDtcblxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIGZsZXgtYmFzaXM6IDUwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVsIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbmBcblxuY29uc3QgSGFtYnVyZ2VyID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OiBub25lO1xuXG4gICAgQG1lZGlhKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM3ZmZmZDQ7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbmBcblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Navigation.js\n");

/***/ })

})