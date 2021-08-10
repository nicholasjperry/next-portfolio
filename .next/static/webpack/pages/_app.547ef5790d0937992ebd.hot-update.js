webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Navigation.js":
/*!**********************************!*\
  !*** ./components/Navigation.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_nickperry_Desktop_PortfolioWebsite_Next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _contexts_HeaderContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contexts/HeaderContext */ \"./contexts/HeaderContext.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/nickperry/Desktop/PortfolioWebsite/Next/components/Navigation.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject2() {\n  var data = Object(_Users_nickperry_Desktop_PortfolioWebsite_Next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    display: none;\\n\\n    @media(max-width: 768px) {\\n        display: flex;\\n        flex-direction: column;\\n        cursor: pointer;\\n\\n        span {\\n            height: 2px;\\n            width: 25px;\\n            background: #7fffd4;\\n            margin-bottom: 4px;\\n            border-radius: 5px;\\n        }\\n    }\\n\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_Users_nickperry_Desktop_PortfolioWebsite_Next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n\\n    @media(max-width: 760px) {\\n        overflow: hidden;\\n\\n        ul {\\n            display: flex;\\n            flex-direction: column;\\n            flex-wrap: wrap;\\n            flex-grow: 1;\\n            max-height: \", \";\\n            width: 100%;\\n            text-align: center;\\n            justify-content: center;;\\n            gap: 1vh;\\n\\n            li{\\n                flex-grow: 1;\\n            }\\n        }\\n    }\\n\\n    ul {\\n        list-style: none;\\n        padding: 0;\\n        margin: 0;\\n        display: flex;\\n        flex-direction: row;\\n        justify-content: center;\\n\\n        li {\\n            margin-left: 50px;\\n            font-family: 'Lato', sans-serif;\\n            font-size: 1.15em;\\n            font-weight: 400;\\n            font-style: normal;\\n            \\n        }\\n\\n        a {\\n            text-decoration: none;\\n            color: \", \";\\n\\n            &:hover {\\n                text-decoration: underline;\\n            }\\n\\n            &.active {\\n                text-decoration: underline;\\n            }\\n        }\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\nfunction Navigation() {\n  _s();\n\n  var _this = this;\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useContext\"])(_contexts_HeaderContext__WEBPACK_IMPORTED_MODULE_6__[\"default\"]),\n      menuItems = _useContext.menuItems,\n      color = _useContext.color;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setIsOpen = _useState[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(NavigationStyled, {\n      color: color,\n      isOpen: !isOpen,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"ul\", {\n        children: menuItems.map(function (item) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"li\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n              href: item.slug,\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n                className: router.pathname === item.slug ? 'active' : '',\n                children: item.title\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 20,\n                columnNumber: 33\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 19,\n              columnNumber: 29\n            }, _this)\n          }, item.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 18,\n            columnNumber: 25\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Hamburger, {\n      onClick: function onClick() {\n        return setIsOpen(!isOpen);\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"span\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"span\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"span\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Navigation, \"2nqSKR3C6MciGL4ioa6TCxMuH9U=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"]];\n});\n\n_c = Navigation;\nvar NavigationStyled = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].header(_templateObject(), function (_ref) {\n  var isOpen = _ref.isOpen;\n  return isOpen ? \"300px\" : \"0\";\n}, function (props) {\n  return props.color ? '#7fffd4' : ' #000000';\n});\n_c2 = NavigationStyled;\nvar Hamburger = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject2());\n_c3 = Hamburger;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Navigation\");\n$RefreshReg$(_c2, \"NavigationStyled\");\n$RefreshReg$(_c3, \"Hamburger\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uLmpzPzE0ODYiXSwibmFtZXMiOlsiTmF2aWdhdGlvbiIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUNvbnRleHQiLCJIZWFkZXJDb250ZXh0IiwibWVudUl0ZW1zIiwiY29sb3IiLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldElzT3BlbiIsIm1hcCIsIml0ZW0iLCJzbHVnIiwicGF0aG5hbWUiLCJ0aXRsZSIsImlkIiwiTmF2aWdhdGlvblN0eWxlZCIsInN0eWxlZCIsImhlYWRlciIsInByb3BzIiwiSGFtYnVyZ2VyIiwiZGl2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFVBQVQsR0FBc0I7QUFBQTs7QUFBQTs7QUFFbEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFGa0Isb0JBR1dDLHdEQUFVLENBQUNDLCtEQUFELENBSHJCO0FBQUEsTUFHVkMsU0FIVSxlQUdWQSxTQUhVO0FBQUEsTUFHQ0MsS0FIRCxlQUdDQSxLQUhEOztBQUFBLGtCQUlVQyxzREFBUSxDQUFDLEtBQUQsQ0FKbEI7QUFBQSxNQUlYQyxNQUpXO0FBQUEsTUFJSEMsU0FKRzs7QUFNbEIsc0JBQ0k7QUFBQSw0QkFDSSxxRUFBQyxnQkFBRDtBQUFrQixXQUFLLEVBQUVILEtBQXpCO0FBQWdDLFlBQU0sRUFBRSxDQUFDRSxNQUF6QztBQUFBLDZCQUNJO0FBQUEsa0JBQ0tILFNBQVMsQ0FBQ0ssR0FBVixDQUFjLFVBQUFDLElBQUk7QUFBQSw4QkFDZjtBQUFBLG1DQUNJLHFFQUFDLGdEQUFEO0FBQU0sa0JBQUksRUFBRUEsSUFBSSxDQUFDQyxJQUFqQjtBQUFBLHFDQUNJO0FBQUcseUJBQVMsRUFBRVgsTUFBTSxDQUFDWSxRQUFQLEtBQW9CRixJQUFJLENBQUNDLElBQXpCLEdBQWdDLFFBQWhDLEdBQTJDLEVBQXpEO0FBQUEsMEJBQStERCxJQUFJLENBQUNHO0FBQXBFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosYUFBU0gsSUFBSSxDQUFDSSxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRGU7QUFBQSxTQUFsQjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFZSSxxRUFBQyxTQUFEO0FBQVcsYUFBTyxFQUFFO0FBQUEsZUFBTU4sU0FBUyxDQUFDLENBQUNELE1BQUYsQ0FBZjtBQUFBLE9BQXBCO0FBQUEsOEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpKO0FBQUEsa0JBREo7QUFvQkg7O0dBMUJRUixVO1VBRVVFLHFEOzs7S0FGVkYsVTtBQTRCVCxJQUFNZ0IsZ0JBQWdCLEdBQUdDLHVEQUFNLENBQUNDLE1BQVYsb0JBVUk7QUFBQSxNQUFHVixNQUFILFFBQUdBLE1BQUg7QUFBQSxTQUFpQkEsTUFBTSxHQUFHLE9BQUgsR0FBYSxHQUFwQztBQUFBLENBVkosRUF5Q0QsVUFBQVcsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ2IsS0FBTixHQUFjLFNBQWQsR0FBMEIsVUFBOUI7QUFBQSxDQXpDSixDQUF0QjtNQUFNVSxnQjtBQXNETixJQUFNSSxTQUFTLEdBQUdILHVEQUFNLENBQUNJLEdBQVYsb0JBQWY7TUFBTUQsUztBQW1CU3BCLHlFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9OYXZpZ2F0aW9uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWRlckNvbnRleHQgZnJvbSAnLi4vY29udGV4dHMvSGVhZGVyQ29udGV4dCc7XG5cbmZ1bmN0aW9uIE5hdmlnYXRpb24oKSB7XG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCB7IG1lbnVJdGVtcywgY29sb3IgfSA9IHVzZUNvbnRleHQoSGVhZGVyQ29udGV4dCk7XG4gICAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBcbiAgICByZXR1cm4oXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8TmF2aWdhdGlvblN0eWxlZCBjb2xvcj17Y29sb3J9IGlzT3Blbj17IWlzT3Blbn0+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICB7bWVudUl0ZW1zLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2l0ZW0uc2x1Z30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09PSBpdGVtLnNsdWcgPyAnYWN0aXZlJyA6ICcnIH0+e2l0ZW0udGl0bGV9PC9hPiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvTmF2aWdhdGlvblN0eWxlZD5cbiAgICAgICAgICAgIDxIYW1idXJnZXIgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pfT5cbiAgICAgICAgICAgICAgICA8c3BhbiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gLz5cbiAgICAgICAgICAgIDwvSGFtYnVyZ2VyPlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuXG5jb25zdCBOYXZpZ2F0aW9uU3R5bGVkID0gc3R5bGVkLmhlYWRlcmBcblxuICAgIEBtZWRpYShtYXgtd2lkdGg6IDc2MHB4KSB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICAgdWwge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAkeyh7IGlzT3BlbiB9KSA9PiAoaXNPcGVuID8gXCIzMDBweFwiIDogXCIwXCIpfTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7O1xuICAgICAgICAgICAgZ2FwOiAxdmg7XG5cbiAgICAgICAgICAgIGxpe1xuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVsIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICBsaSB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMTVlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIGEge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuY29sb3IgPyAnIzdmZmZkNCcgOiAnICMwMDAwMDAnfTtcblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbmBcblxuY29uc3QgSGFtYnVyZ2VyID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OiBub25lO1xuXG4gICAgQG1lZGlhKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM3ZmZmZDQ7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbmBcblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Navigation.js\n");

/***/ })

})