module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/about": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/about.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dist/next-server/lib/head.js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIj8xNzBiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ii4uL25leHQtc2VydmVyL2xpYi9oZWFkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../next-server/lib/head\n");

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dist/next-server/lib/to-base-64.js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIj8xMTdmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ii4uL25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../next-server/lib/to-base-64\n");

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dist/next-server/server/image-config.js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiPzgyNDMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiLi4vbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../next-server/server/image-config\n");

/***/ }),

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerSideProps\", function() { return getServerSideProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ \"@emotion/styled\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var reflexbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reflexbox */ \"reflexbox\");\n/* harmony import */ var reflexbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reflexbox__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"next/dynamic\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/nickperry/Desktop/PortfolioWebsite/Next/pages/about.js\";\n\n\n\nconst DynamicTechnologiesUsed = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(() => __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ../components/TechnologiesUsed */ \"./components/TechnologiesUsed.js\")), {\n  loadableGenerated: {\n    webpack: () => [/*require.resolve*/(/*! ../components/TechnologiesUsed */ \"./components/TechnologiesUsed.js\")],\n    modules: [\"about.js -> \" + '../components/TechnologiesUsed']\n  }\n});\nconst DynamicParallax = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(() => __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! ../components/Parallax */ \"./components/Parallax.js\")), {\n  loadableGenerated: {\n    webpack: () => [/*require.resolve*/(/*! ../components/Parallax */ \"./components/Parallax.js\")],\n    modules: [\"about.js -> \" + '../components/Parallax']\n  }\n});\nconst DynamicAboutTextAnimation = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(() => __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ../components/AboutTextAnimation */ \"./components/AboutTextAnimation.js\")), {\n  loadableGenerated: {\n    webpack: () => [/*require.resolve*/(/*! ../components/AboutTextAnimation */ \"./components/AboutTextAnimation.js\")],\n    modules: [\"about.js -> \" + '../components/AboutTextAnimation']\n  }\n});\n\nfunction About({\n  technologies\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    className: \"background\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(AboutStyled, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: \"About Me\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n        sx: {\n          maxWidth: 1200,\n          mx: \"auto\",\n          p: 3,\n          mt: -40\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n          justifyContent: \"center\",\n          alignContent: \"center\",\n          alignItems: \"center\",\n          flexDirection: {\n            _: \"column\",\n            1: \"column\",\n            2: \"row\"\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n            className: \"image-container\",\n            width: {\n              _: \"60%\"\n            },\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              src: \"/images/mtbeldfordpic2.jpeg\",\n              alt: \"\",\n              width: 450,\n              height: 600,\n              className: \"image\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 28,\n              columnNumber: 29\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 25\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n            as: \"h2\",\n            className: \"paragraph-container\",\n            width: {\n              _: \"60%\"\n            },\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DynamicAboutTextAnimation, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 36,\n              columnNumber: 29\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: \"Technologies I Use\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DynamicTechnologiesUsed, {\n        technologies: technologies\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DynamicParallax, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n        sx: {\n          maxWidth: 1400,\n          mx: \"auto\",\n          my: \"100px\",\n          px: 3\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: \"Education\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n          sx: {\n            gridGap: 4\n          },\n          mt: 60,\n          justifyContent: \"center\",\n          alignContent: \"center\",\n          flexDirection: {\n            _: \"column\",\n            1: \"column\",\n            2: \"row\"\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n            className: \"logo-container\",\n            width: {\n              _: \"100%\",\n              1: \"50%\"\n            },\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              src: \"/images/nucamplogo2.svg\",\n              alt: \"\",\n              width: 500,\n              height: 150\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 57,\n              columnNumber: 29\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 25\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n            className: \"paragraph-container\",\n            sx: {\n              textAlign: \"left\",\n              color: \"#fff\",\n              fontSize: \"25px\",\n              marginBottom: 200\n            },\n            width: {\n              _: \"100%\",\n              1: \"70%\"\n            },\n            children: \"Attended this hybrid coding bootcamp, in which Javascript was heavily utilized.  MongoDB, Express.js, React/React Native, and Node.js (MERN) were employed in a multitude of coding exercises as well as to the guided construction of NuCamp's mock web app layed out for the students to recreate.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 9\n  }, this);\n}\n\nasync function getServerSideProps() {\n  const {\n    API_URL\n  } = process.env;\n  const res = await fetch(`${API_URL}/technologies`);\n  const data = await res.json();\n  return {\n    props: {\n      technologies: data\n    }\n  };\n}\nconst AboutStyled = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default.a.div`\n\n    h1 {\n        text-align: center;\n    }\n\n    .image-container {\n        margin-bottom: 4rem;\n        text-align: center;\n        transform: translate(-2%, 5%);\n    }\n\n    .image {\n        border-radius: 50%;\n    }\n    \n    .paragraph-container {\n        text-align: center;\n        border-image-source: linear-gradient(to left, #d47fff, #7fffd4);\n        border-width: 4px;\n        border-image-slice: 1;\n        padding: 0.5rem;\n        box-shadow: 0 0 20px rgba(0,0,0, 0.1);\n        color: #7fffd4;\n    }\n\n    .logo-container{\n        text-align: center;\n    }\n`;\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hYm91dC5qcz8yNmVjIl0sIm5hbWVzIjpbIkR5bmFtaWNUZWNobm9sb2dpZXNVc2VkIiwiZHluYW1pYyIsIkR5bmFtaWNQYXJhbGxheCIsIkR5bmFtaWNBYm91dFRleHRBbmltYXRpb24iLCJBYm91dCIsInRlY2hub2xvZ2llcyIsIm1heFdpZHRoIiwibXgiLCJwIiwibXQiLCJfIiwibXkiLCJweCIsImdyaWRHYXAiLCJ0ZXh0QWxpZ24iLCJjb2xvciIsImZvbnRTaXplIiwibWFyZ2luQm90dG9tIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiQVBJX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJyZXMiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwicHJvcHMiLCJBYm91dFN0eWxlZCIsInN0eWxlZCIsImRpdiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0EsTUFBTUEsdUJBQXVCLEdBQUdDLG1EQUFPLENBQUMsTUFBTSx1SkFBUDtBQUFBO0FBQUEsd0NBQWMsd0VBQWQ7QUFBQSwrQkFBYyxnQ0FBZDtBQUFBO0FBQUEsRUFBdkM7QUFDQSxNQUFNQyxlQUFlLEdBQUdELG1EQUFPLENBQUMsTUFBTSx1SUFBUDtBQUFBO0FBQUEsd0NBQWMsd0RBQWQ7QUFBQSwrQkFBYyx3QkFBZDtBQUFBO0FBQUEsRUFBL0I7QUFDQSxNQUFNRSx5QkFBeUIsR0FBR0YsbURBQU8sQ0FBQyxNQUFNLDJKQUFQO0FBQUE7QUFBQSx3Q0FBYyw0RUFBZDtBQUFBLCtCQUFjLGtDQUFkO0FBQUE7QUFBQSxFQUF6Qzs7QUFFQSxTQUFTRyxLQUFULENBQWU7QUFBRUM7QUFBRixDQUFmLEVBQWlDO0FBRTdCLHNCQUNJLHFFQUFDLDZDQUFEO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQSwyQkFDSSxxRUFBQyxXQUFEO0FBQUEsOEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJLHFFQUFDLDZDQUFEO0FBQUss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QUFBQTtBQUFBO0FBQUEsZ0JBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBOUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQThESDs7QUFFTSxlQUFlUSxrQkFBZixHQUFvQztBQUN2QyxRQUFNO0FBQUVDO0FBQUYsTUFBY0MsT0FBTyxDQUFDQyxHQUE1QjtBQUVBLFFBQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUUsR0FBRUosT0FBUSxlQUFaLENBQXZCO0FBQ0EsUUFBTUssSUFBSSxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0csSUFBSixFQUFuQjtBQUVBLFNBQU87QUFDSEMsU0FBSyxFQUFFO0FBQ0hyQixrQkFBWSxFQUFFbUI7QUFEWDtBQURKLEdBQVA7QUFLSDtBQUVELE1BQU1HLFdBQVcsR0FBR0Msc0RBQU0sQ0FBQ0MsR0FBSztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBN0JBO0FBK0JlekIsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9hYm91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IEZsZXgsIEJveCB9IGZyb20gJ3JlZmxleGJveCc7XG5cbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XG5jb25zdCBEeW5hbWljVGVjaG5vbG9naWVzVXNlZCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi9jb21wb25lbnRzL1RlY2hub2xvZ2llc1VzZWQnKSk7XG5jb25zdCBEeW5hbWljUGFyYWxsYXggPSBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vY29tcG9uZW50cy9QYXJhbGxheCcpKTtcbmNvbnN0IER5bmFtaWNBYm91dFRleHRBbmltYXRpb24gPSBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vY29tcG9uZW50cy9BYm91dFRleHRBbmltYXRpb24nKSk7XG5cbmZ1bmN0aW9uIEFib3V0KHsgdGVjaG5vbG9naWVzIH0pIHtcblxuICAgIHJldHVybihcbiAgICAgICAgPEJveCBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCI+XG4gICAgICAgICAgICA8QWJvdXRTdHlsZWQ+XG4gICAgICAgICAgICAgICAgPGgxPkFib3V0IE1lPC9oMT5cbiAgICAgICAgICAgICAgICA8Qm94IHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAxMjAwLFxuICAgICAgICAgICAgICAgICAgICBteDogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgIHA6IDMsXG4gICAgICAgICAgICAgICAgICAgIG10OiAtNDAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICA8RmxleCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkNvbnRlbnQ9XCJjZW50ZXJcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249e3sgXzogXCJjb2x1bW5cIiwgMTogXCJjb2x1bW5cIiwgMjogXCJyb3dcIiB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT1cImltYWdlLWNvbnRhaW5lclwiIHdpZHRoPXt7IF86IFwiNjAlXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9tdGJlbGRmb3JkcGljMi5qcGVnXCIgYWx0PVwiXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs0NTB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezYwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggYXM9XCJoMlwiIGNsYXNzTmFtZT1cInBhcmFncmFwaC1jb250YWluZXJcIiB3aWR0aD17eyBfOiBcIjYwJVwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEeW5hbWljQWJvdXRUZXh0QW5pbWF0aW9uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDxoMT5UZWNobm9sb2dpZXMgSSBVc2U8L2gxPlxuICAgICAgICAgICAgICAgIDxEeW5hbWljVGVjaG5vbG9naWVzVXNlZCB0ZWNobm9sb2dpZXM9e3RlY2hub2xvZ2llc30vPlxuICAgICAgICAgICAgICAgIDxEeW5hbWljUGFyYWxsYXggLz5cbiAgICAgICAgICAgICAgICA8Qm94IHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAxNDAwLFxuICAgICAgICAgICAgICAgICAgICBteDogXCJhdXRvXCIsICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBteTogXCIxMDBweFwiLFxuICAgICAgICAgICAgICAgICAgICBweDogM1xuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICA8aDE+RWR1Y2F0aW9uPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPEZsZXggXG4gICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBncmlkR2FwOiA0IH19IFxuICAgICAgICAgICAgICAgICAgICAgICAgbXQ9ezYwfSBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25Db250ZW50PVwiY2VudGVyXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uPXt7IF86IFwiY29sdW1uXCIsIDE6IFwiY29sdW1uXCIsIDI6IFwicm93XCIgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9XCJsb2dvLWNvbnRhaW5lclwiIHdpZHRoPXt7IF86IFwiMTAwJVwiLCAxOiBcIjUwJVwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9udWNhbXBsb2dvMi5zdmdcIiBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NTAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezE1MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT1cInBhcmFncmFwaC1jb250YWluZXJcIiBzeD17eyB0ZXh0QWxpZ246IFwibGVmdFwiLCBjb2xvcjogXCIjZmZmXCIsIGZvbnRTaXplOiBcIjI1cHhcIiwgbWFyZ2luQm90dG9tOiAyMDAgfX0gd2lkdGg9e3sgXzogXCIxMDAlXCIsIDE6IFwiNzAlXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXR0ZW5kZWQgdGhpcyBoeWJyaWQgY29kaW5nIGJvb3RjYW1wLCBpbiB3aGljaCBKYXZhc2NyaXB0IHdhcyBoZWF2aWx5IHV0aWxpemVkLiAgTW9uZ29EQiwgRXhwcmVzcy5qcywgUmVhY3QvUmVhY3QgTmF0aXZlLCBhbmQgTm9kZS5qc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChNRVJOKSB3ZXJlIGVtcGxveWVkIGluIGEgbXVsdGl0dWRlIG9mIGNvZGluZyBleGVyY2lzZXMgYXMgd2VsbCBhcyB0byB0aGUgZ3VpZGVkIGNvbnN0cnVjdGlvbiBvZiBOdUNhbXAncyBtb2NrIHdlYiBhcHAgbGF5ZWQgb3V0IGZvciBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgc3R1ZGVudHMgdG8gcmVjcmVhdGUuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9BYm91dFN0eWxlZD4gICAgICAgICAgICBcbiAgICAgICAgPC9Cb3g+XG4gICAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbiAgICBjb25zdCB7IEFQSV9VUkwgfSA9IHByb2Nlc3MuZW52O1xuXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vdGVjaG5vbG9naWVzYCk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgdGVjaG5vbG9naWVzOiBkYXRhXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IEFib3V0U3R5bGVkID0gc3R5bGVkLmRpdiBgXG5cbiAgICBoMSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMiUsIDUlKTtcbiAgICB9XG5cbiAgICAuaW1hZ2Uge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuICAgIFxuICAgIC5wYXJhZ3JhcGgtY29udGFpbmVyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3JkZXItaW1hZ2Utc291cmNlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2Q0N2ZmZiwgIzdmZmZkNCk7XG4gICAgICAgIGJvcmRlci13aWR0aDogNHB4O1xuICAgICAgICBib3JkZXItaW1hZ2Utc2xpY2U6IDE7XG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLDAsMCwgMC4xKTtcbiAgICAgICAgY29sb3I6ICM3ZmZmZDQ7XG4gICAgfVxuXG4gICAgLmxvZ28tY29udGFpbmVye1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuYFxuXG5leHBvcnQgZGVmYXVsdCBBYm91dDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/about.js\n");

/***/ }),

/***/ "@emotion/styled":
/*!**********************************!*\
  !*** external "@emotion/styled" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@emotion/styled\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZW1vdGlvbi9zdHlsZWRcIj9hYjA5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBlbW90aW9uL3N0eWxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL3N0eWxlZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@emotion/styled\n");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"framer-motion\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmcmFtZXItbW90aW9uXCI/ZmY3ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJmcmFtZXItbW90aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnJhbWVyLW1vdGlvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///framer-motion\n");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dynamic\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2R5bmFtaWNcIj82ZDNmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvZHluYW1pYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZHluYW1pY1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/dynamic\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-intersection-observer":
/*!**********************************************!*\
  !*** external "react-intersection-observer" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-intersection-observer\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXJcIj9hMTNjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-intersection-observer\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "reflexbox":
/*!****************************!*\
  !*** external "reflexbox" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"reflexbox\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWZsZXhib3hcIj8xNDg4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZmxleGJveC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZmxleGJveFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///reflexbox\n");

/***/ })

/******/ });