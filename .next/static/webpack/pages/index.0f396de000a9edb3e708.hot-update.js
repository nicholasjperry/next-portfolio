webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_nickperry_Desktop_PortfolioWebsite_Next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_nickperry_Desktop_PortfolioWebsite_Next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var reflexbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reflexbox */ \"./node_modules/reflexbox/dist/index.js\");\n/* harmony import */ var reflexbox__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reflexbox__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rebass */ \"./node_modules/rebass/dist/index.esm.js\");\n/* harmony import */ var react_wavify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-wavify */ \"./node_modules/react-wavify/lib/index.module.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/nickperry/Desktop/PortfolioWebsite/Next/pages/index.js\",\n    _s = $RefreshSig$(),\n    _this = undefined;\n\nfunction _templateObject() {\n  var data = Object(_Users_nickperry_Desktop_PortfolioWebsite_Next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n\\n    margin: 0;\\n    padding: 0;\\n\\n    .wave-container {\\n        margin-top: 10vh;\\n\\n        h1 {\\n            text-align: center;\\n            color: #7fffd4;\\n        }\\n\\n        h2 {\\n            text-align: center;\\n            color: #7fffd4;\\n            font-size: 3rem;\\n        }\\n    }\\n    \\n    .resume-text-button-container {\\n        display: flex;\\n        flex-direction: row;\\n        justify-content: center;\\n        align-content: center;\\n        align-items: center;\\n        gap: 1vw;\\n\\n        h3 {\\n            color: #fff;\\n        }\\n        /* Button {\\n        } */\\n        .icon {\\n            height: 35px;\\n            background-color: #000000;\\n            color: #fff;\\n            cursor: pointer;\\n            border-radius: 50%;\\n        }\\n    }\\n\\n    .wave {\\n        height: 40vh;\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\nfunction download() {\n  _s();\n\n  var API_URL = \"http://localhost:1337\";\n\n  var _useState = useState(false),\n      _useState2 = Object(_Users_nickperry_Desktop_PortfolioWebsite_Next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useState, 2),\n      download = _useState2[0],\n      setDownload = _useState2[1];\n\n  fetch(\"\".concat(API_URL, \"/downloads\"), {\n    method: \"GET\",\n    headers: {\n      \"Content-Type\": \"application/json\"\n    }\n  }).then(function (response) {\n    return response.json();\n  }).then(function (data) {\n    return console.log(data);\n  })[\"catch\"](function (error) {\n    console.log(\"Error : \", error);\n  });\n\n  var handleDownload = function handleDownload(e) {\n    e.preventDefault();\n    setIsDownloaded(true);\n  };\n}\n\n_s(download, \"ypxyTIlIzY1A0l3dAlAyg9TTLYQ=\");\n\nvar Home = function Home() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(HomeStyled, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n        className: \"wave-container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n          children: \"Hi, I'm Nick Perry!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h2\", {\n          children: \" -Software Developer- \"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n          className: \"resume-text-button-container\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h3\", {\n            children: \"Download my resume\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n            href: \"\",\n            target: \"_blank\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__[\"FontAwesomeIcon\"], {\n              className: \"icon\",\n              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__[\"faArrowAltCircleDown\"]\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 43,\n              columnNumber: 29\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_wavify__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          className: \"wave\",\n          fill: \"url(#gradient)\",\n          options: {\n            amplitude: 20,\n            speed: 0.25,\n            points: 4\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"defs\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"linearGradient\", {\n              id: \"gradient\",\n              gradientTransform: \"rotate(90deg)\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"stop\", {\n                offset: \"10%\",\n                stopColor: \"#552586\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 49,\n                columnNumber: 33\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"stop\", {\n                offset: \"90%\",\n                stopColor: \"#B589D6\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 50,\n                columnNumber: 33\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 48,\n              columnNumber: 29\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false);\n};\n\n_c = Home;\nvar HomeStyled = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c2 = HomeStyled;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c2, \"HomeStyled\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJkb3dubG9hZCIsIkFQSV9VUkwiLCJwcm9jZXNzIiwidXNlU3RhdGUiLCJzZXREb3dubG9hZCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiaGFuZGxlRG93bmxvYWQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzZXRJc0Rvd25sb2FkZWQiLCJIb21lIiwiZmFBcnJvd0FsdENpcmNsZURvd24iLCJhbXBsaXR1ZGUiLCJzcGVlZCIsInBvaW50cyIsIkhvbWVTdHlsZWQiLCJzdHlsZWQiLCJkaXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUFBLE1BQ1JDLE9BRFEsR0FDSUMsdUJBREo7O0FBQUEsa0JBRWdCQyxRQUFRLENBQUMsS0FBRCxDQUZ4QjtBQUFBO0FBQUEsTUFFVEgsUUFGUztBQUFBLE1BRUNJLFdBRkQ7O0FBSWhCQyxPQUFLLFdBQ0VKLE9BREYsaUJBQ3VCO0FBQ3BCSyxVQUFNLEVBQUUsS0FEWTtBQUVwQkMsV0FBTyxFQUFFO0FBQ0wsc0JBQWlCO0FBRFo7QUFGVyxHQUR2QixDQUFMLENBT0NDLElBUEQsQ0FPTSxVQUFBQyxRQUFRO0FBQUEsV0FBSUEsUUFBUSxDQUFDQyxJQUFULEVBQUo7QUFBQSxHQVBkLEVBUUNGLElBUkQsQ0FRTSxVQUFBRyxJQUFJO0FBQUEsV0FBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVosQ0FBSjtBQUFBLEdBUlYsV0FTTyxVQUFDRyxLQUFELEVBQVc7QUFDZEYsV0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QkMsS0FBeEI7QUFDSCxHQVhEOztBQWFBLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzFCQSxLQUFDLENBQUNDLGNBQUY7QUFDQUMsbUJBQWUsQ0FBQyxJQUFELENBQWY7QUFDSCxHQUhEO0FBS0g7O0dBdEJRbEIsUTs7QUF3QlQsSUFBTW1CLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFFZixzQkFDSTtBQUFBLDJCQUNJLHFFQUFDLFVBQUQ7QUFBQSw2QkFDSSxxRUFBQyw2Q0FBRDtBQUFLLGlCQUFTLEVBQUMsZ0JBQWY7QUFBQSxnQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLGVBR0kscUVBQUMsNkNBQUQ7QUFBSyxtQkFBUyxFQUFDLDhCQUFmO0FBQUEsa0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFHLGdCQUFJLEVBQUMsRUFBUjtBQUFXLGtCQUFNLEVBQUMsUUFBbEI7QUFBQSxtQ0FDSSxxRUFBQyw4RUFBRDtBQUFpQix1QkFBUyxFQUFDLE1BQTNCO0FBQWtDLGtCQUFJLEVBQUVDLHNGQUFvQkE7QUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKLGVBU0kscUVBQUMsb0RBQUQ7QUFBTSxtQkFBUyxFQUFDLE1BQWhCO0FBQXVCLGNBQUksRUFBQyxnQkFBNUI7QUFBNkMsaUJBQU8sRUFBRTtBQUFFQyxxQkFBUyxFQUFFLEVBQWI7QUFBaUJDLGlCQUFLLEVBQUUsSUFBeEI7QUFBOEJDLGtCQUFNLEVBQUU7QUFBdEMsV0FBdEQ7QUFBQSxpQ0FDSTtBQUFBLG1DQUNJO0FBQWdCLGdCQUFFLEVBQUMsVUFBbkI7QUFBOEIsK0JBQWlCLEVBQUMsZUFBaEQ7QUFBQSxzQ0FDSTtBQUFNLHNCQUFNLEVBQUMsS0FBYjtBQUFtQix5QkFBUyxFQUFDO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosZUFFSTtBQUFNLHNCQUFNLEVBQUMsS0FBYjtBQUFtQix5QkFBUyxFQUFDO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBd0JILENBMUJEOztLQUFNSixJO0FBNEJOLElBQU1LLFVBQVUsR0FBR0MsdURBQU0sQ0FBQ0MsR0FBVixtQkFBaEI7TUFBTUYsVTtBQStDU0wsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IEJveCB9IGZyb20gJ3JlZmxleGJveCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdyZWJhc3MnO1xuaW1wb3J0IFdhdmUgZnJvbSAncmVhY3Qtd2F2aWZ5JztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBmYUFycm93QWx0Q2lyY2xlRG93biB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5cbmZ1bmN0aW9uIGRvd25sb2FkKCkge1xuICAgIGNvbnN0IHsgQVBJX1VSTCB9ID0gcHJvY2Vzcy5lbnY7XG4gICAgY29uc3QgW2Rvd25sb2FkLCBzZXREb3dubG9hZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBmZXRjaChcbiAgICAgICAgYCR7QVBJX1VSTH0vZG93bmxvYWRzYCwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCIgOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgOiBcIiwgZXJyb3IpXG4gICAgfSk7XG5cbiAgICBjb25zdCBoYW5kbGVEb3dubG9hZCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2V0SXNEb3dubG9hZGVkKHRydWUpXG4gICAgfVxuXG59XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEhvbWVTdHlsZWQ+XG4gICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9XCJ3YXZlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDE+SGksIEknbSBOaWNrIFBlcnJ5ITwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxoMj4gLVNvZnR3YXJlIERldmVsb3Blci0gPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9XCJyZXN1bWUtdGV4dC1idXR0b24tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+RG93bmxvYWQgbXkgcmVzdW1lPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT1cImljb25cIiBpY29uPXtmYUFycm93QWx0Q2lyY2xlRG93bn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgIDxXYXZlIGNsYXNzTmFtZT1cIndhdmVcIiBmaWxsPVwidXJsKCNncmFkaWVudClcIiBvcHRpb25zPXt7IGFtcGxpdHVkZTogMjAsIHNwZWVkOiAwLjI1LCBwb2ludHM6IDQgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGVmcz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9XCJncmFkaWVudFwiIGdyYWRpZW50VHJhbnNmb3JtPVwicm90YXRlKDkwZGVnKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxMCVcIiBzdG9wQ29sb3I9XCIjNTUyNTg2XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiOTAlXCIgc3RvcENvbG9yPVwiI0I1ODlENlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGVmcz5cbiAgICAgICAgICAgICAgICAgICAgPC9XYXZlPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9Ib21lU3R5bGVkPlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuXG5jb25zdCBIb21lU3R5bGVkID0gc3R5bGVkLmRpdmBcblxuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuXG4gICAgLndhdmUtY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTB2aDtcblxuICAgICAgICBoMSB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogIzdmZmZkNDtcbiAgICAgICAgfVxuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiAjN2ZmZmQ0O1xuICAgICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC5yZXN1bWUtdGV4dC1idXR0b24tY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiAxdnc7XG5cbiAgICAgICAgaDMge1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICAgICAgLyogQnV0dG9uIHtcbiAgICAgICAgfSAqL1xuICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAud2F2ZSB7XG4gICAgICAgIGhlaWdodDogNDB2aDtcbiAgICB9XG5gXG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})