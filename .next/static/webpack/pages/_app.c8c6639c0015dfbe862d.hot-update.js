webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Navigation.js":
/*!**********************************!*\
  !*** ./components/Navigation.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_nickperry_Desktop_PortfolioWebsite_Next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var reflexbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reflexbox */ \"./node_modules/reflexbox/dist/index.js\");\n/* harmony import */ var reflexbox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reflexbox__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _contexts_HeaderContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../contexts/HeaderContext */ \"./contexts/HeaderContext.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/nickperry/Desktop/PortfolioWebsite/Next/components/Navigation.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject2() {\n  var data = Object(_Users_nickperry_Desktop_PortfolioWebsite_Next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    display: none;\\n\\n    @media(max-width: 768px) {\\n        display: flex;\\n        flex-direction: column;\\n        cursor: pointer;\\n\\n        span {\\n            height: 2px;\\n            width: 25px;\\n            background: #7fffd4;\\n            margin-bottom: 4px;\\n            border-radius: 5px;\\n        }\\n    }\\n\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_Users_nickperry_Desktop_PortfolioWebsite_Next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n\\n    @media(max-width: 760px) {\\n        overflow: hidden;\\n\\n        ul {\\n            display: flex;\\n            flex-direction: column;\\n            flex-wrap: wrap;\\n            max-height: \", \";\\n            text-align: center;\\n            justify-content: center;\\n        }\\n        li {\\n            flex-basis: 50%;\\n        }\\n    }\\n\\n    .nav {\\n        display: inline-block;\\n        transform: translate(0%, 70%);\\n\\n        a {\\n            font-size: 30px;\\n            width: 40px;\\n            height: 35px;\\n            display: flex;\\n            align-items: center;\\n            justify-content: center;\\n            border: 5px solid;\\n            text-align: center;\\n\\n            &:hover {\\n                background-size: 0%;\\n            }\\n\\n            @media(max-width: 768px) {\\n                overflow: hidden;\\n        }\\n    }\\n\\n    ul {\\n        padding: 0;\\n        margin: 0 auto;\\n        list-style: none;\\n        display: flex;\\n        flex-direction: row;\\n        justify-content: center; \\n        gap: 6vw;\\n        text-align: center;\\n        width: 100%;\\n    }\\n\\n    li {\\n        font-family: 'Nova Mono', monospace;\\n        font-size: 1.15em;\\n        font-weight: 400;\\n        font-style: normal;\\n    }\\n\\n    a {\\n        /* styling for active nav link */\\n        background-image:\\n            linear-gradient(90deg, #d47fff, #7fffd4);\\n        background-size: 0% 3px;\\n        background-repeat: no-repeat;\\n        background-position: left bottom;\\n        transition: background-size 350ms ease;\\n\\n        /* extra styling */\\n        text-decoration: none;\\n        color: #7fffd4;\\n\\n        &:hover {\\n            background-size: 100% 3px;\\n        }\\n\\n        &.active {\\n            background-image:\\n                linear-gradient(90deg, #d47fff, #7fffd4);\\n            background-size: 100% 3px;\\n        }\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\nfunction Navigation() {\n  _s();\n\n  var _this = this;\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useContext\"])(_contexts_HeaderContext__WEBPACK_IMPORTED_MODULE_7__[\"default\"]),\n      menuItems = _useContext.menuItems,\n      color = _useContext.color;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setIsOpen = _useState[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(NavigationStyled, {\n      color: color,\n      isOpen: isOpen,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n        className: \"nav\",\n        isOpen: isOpen,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n          href: \"/\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n            children: \"NP\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 18,\n            columnNumber: 36\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"ul\", {\n        children: menuItems.map(function (item) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"li\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n              href: item.slug,\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n                className: router.pathname === item.slug ? 'active' : '',\n                children: item.title\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 24,\n                columnNumber: 33\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 23,\n              columnNumber: 29\n            }, _this)\n          }, item.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 22,\n            columnNumber: 25\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Hamburger, {\n      onClick: function onClick() {\n        return setIsOpen(!isOpen);\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"span\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"span\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"span\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Navigation, \"2nqSKR3C6MciGL4ioa6TCxMuH9U=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"]];\n});\n\n_c = Navigation;\nvar NavigationStyled = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject(), function (_ref) {\n  var isOpen = _ref.isOpen;\n  return isOpen ? \"300px\" : \"0\";\n});\n_c2 = NavigationStyled;\nvar Hamburger = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject2());\n_c3 = Hamburger;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Navigation\");\n$RefreshReg$(_c2, \"NavigationStyled\");\n$RefreshReg$(_c3, \"Hamburger\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uLmpzPzE0ODYiXSwibmFtZXMiOlsiTmF2aWdhdGlvbiIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUNvbnRleHQiLCJIZWFkZXJDb250ZXh0IiwibWVudUl0ZW1zIiwiY29sb3IiLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldElzT3BlbiIsIm1hcCIsIml0ZW0iLCJzbHVnIiwicGF0aG5hbWUiLCJ0aXRsZSIsImlkIiwiTmF2aWdhdGlvblN0eWxlZCIsInN0eWxlZCIsImRpdiIsIkhhbWJ1cmdlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsVUFBVCxHQUFzQjtBQUFBOztBQUFBOztBQUVsQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUZrQixvQkFHV0Msd0RBQVUsQ0FBQ0MsK0RBQUQsQ0FIckI7QUFBQSxNQUdWQyxTQUhVLGVBR1ZBLFNBSFU7QUFBQSxNQUdDQyxLQUhELGVBR0NBLEtBSEQ7O0FBQUEsa0JBSVVDLHNEQUFRLENBQUMsS0FBRCxDQUpsQjtBQUFBLE1BSVhDLE1BSlc7QUFBQSxNQUlIQyxTQUpHOztBQU1sQixzQkFDSTtBQUFBLDRCQUNJLHFFQUFDLGdCQUFEO0FBQWtCLFdBQUssRUFBRUgsS0FBekI7QUFBZ0MsWUFBTSxFQUFFRSxNQUF4QztBQUFBLDhCQUNJLHFFQUFDLDZDQUFEO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQXFCLGNBQU0sRUFBRUEsTUFBN0I7QUFBQSwrQkFDSSxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBQyxHQUFYO0FBQUEsaUNBQWU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBSUk7QUFBQSxrQkFDS0gsU0FBUyxDQUFDSyxHQUFWLENBQWMsVUFBQUMsSUFBSTtBQUFBLDhCQUNmO0FBQUEsbUNBQ0kscUVBQUMsZ0RBQUQ7QUFBTSxrQkFBSSxFQUFFQSxJQUFJLENBQUNDLElBQWpCO0FBQUEscUNBQ0k7QUFBRyx5QkFBUyxFQUFFWCxNQUFNLENBQUNZLFFBQVAsS0FBb0JGLElBQUksQ0FBQ0MsSUFBekIsR0FBZ0MsUUFBaEMsR0FBMkMsRUFBekQ7QUFBQSwwQkFBK0RELElBQUksQ0FBQ0c7QUFBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixhQUFTSCxJQUFJLENBQUNJLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEZTtBQUFBLFNBQWxCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBZUkscUVBQUMsU0FBRDtBQUFXLGFBQU8sRUFBRTtBQUFBLGVBQU1OLFNBQVMsQ0FBQyxDQUFDRCxNQUFGLENBQWY7QUFBQSxPQUFwQjtBQUFBLDhCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFmSjtBQUFBLGtCQURKO0FBdUJIOztHQTdCUVIsVTtVQUVVRSxxRDs7O0tBRlZGLFU7QUErQlQsSUFBTWdCLGdCQUFnQixHQUFHQyx1REFBTSxDQUFDQyxHQUFWLG9CQVNJO0FBQUEsTUFBR1YsTUFBSCxRQUFHQSxNQUFIO0FBQUEsU0FBaUJBLE1BQU0sR0FBRyxPQUFILEdBQWEsR0FBcEM7QUFBQSxDQVRKLENBQXRCO01BQU1RLGdCO0FBb0ZOLElBQU1HLFNBQVMsR0FBR0YsdURBQU0sQ0FBQ0MsR0FBVixvQkFBZjtNQUFNQyxTO0FBbUJTbkIseUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmlnYXRpb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBCb3ggfSBmcm9tICdyZWZsZXhib3gnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWRlckNvbnRleHQgZnJvbSAnLi4vY29udGV4dHMvSGVhZGVyQ29udGV4dCc7XG5cbmZ1bmN0aW9uIE5hdmlnYXRpb24oKSB7XG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCB7IG1lbnVJdGVtcywgY29sb3IgfSA9IHVzZUNvbnRleHQoSGVhZGVyQ29udGV4dCk7XG4gICAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBcbiAgICByZXR1cm4oXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8TmF2aWdhdGlvblN0eWxlZCBjb2xvcj17Y29sb3J9IGlzT3Blbj17aXNPcGVufT5cbiAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT1cIm5hdlwiIGlzT3Blbj17aXNPcGVufT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48YT5OUDwvYT48L0xpbms+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICB7bWVudUl0ZW1zLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2l0ZW0uc2x1Z30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09PSBpdGVtLnNsdWcgPyAnYWN0aXZlJyA6ICcnIH0+e2l0ZW0udGl0bGV9PC9hPiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvTmF2aWdhdGlvblN0eWxlZD5cbiAgICAgICAgICAgIDxIYW1idXJnZXIgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pfT5cbiAgICAgICAgICAgICAgICA8c3BhbiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gLz5cbiAgICAgICAgICAgIDwvSGFtYnVyZ2VyPlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuXG5jb25zdCBOYXZpZ2F0aW9uU3R5bGVkID0gc3R5bGVkLmRpdmBcblxuICAgIEBtZWRpYShtYXgtd2lkdGg6IDc2MHB4KSB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICAgdWwge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAkeyh7IGlzT3BlbiB9KSA9PiAoaXNPcGVuID8gXCIzMDBweFwiIDogXCIwXCIpfTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDUwJTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5uYXYge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCA3MCUpO1xuXG4gICAgICAgIGEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYm9yZGVyOiA1cHggc29saWQ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVsIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyBcbiAgICAgICAgZ2FwOiA2dnc7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgbGkge1xuICAgICAgICBmb250LWZhbWlseTogJ05vdmEgTW9ubycsIG1vbm9zcGFjZTtcbiAgICAgICAgZm9udC1zaXplOiAxLjE1ZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICB9XG5cbiAgICBhIHtcbiAgICAgICAgLyogc3R5bGluZyBmb3IgYWN0aXZlIG5hdiBsaW5rICovXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6XG4gICAgICAgICAgICBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNDdmZmYsICM3ZmZmZDQpO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDAlIDNweDtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBib3R0b207XG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtc2l6ZSAzNTBtcyBlYXNlO1xuXG4gICAgICAgIC8qIGV4dHJhIHN0eWxpbmcgKi9cbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogIzdmZmZkNDtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAzcHg7XG4gICAgICAgIH1cblxuICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOlxuICAgICAgICAgICAgICAgIGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q0N2ZmZiwgIzdmZmZkNCk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgM3B4O1xuICAgICAgICB9XG4gICAgfVxuYFxuY29uc3QgSGFtYnVyZ2VyID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OiBub25lO1xuXG4gICAgQG1lZGlhKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM3ZmZmZDQ7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbmBcblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Navigation.js\n");

/***/ })

})