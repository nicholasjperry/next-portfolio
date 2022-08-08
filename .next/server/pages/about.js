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

/***/ "./components/HeaderMotion.js":
/*!************************************!*\
  !*** ./components/HeaderMotion.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/nickperry/Desktop/PortfolioWebsite/Next/components/HeaderMotion.js\";\n\n\nconst HeaderMotion = ({\n  children\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n    animate: {\n      y: [-75, 0]\n    },\n    transition: {\n      duration: 0.5\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeaderMotion);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlck1vdGlvbi5qcz80NjI5Il0sIm5hbWVzIjpbIkhlYWRlck1vdGlvbiIsImNoaWxkcmVuIiwieSIsImR1cmF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsWUFBWSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWtCO0FBQ25DLHNCQUNJLHFFQUFDLG9EQUFELENBQVEsR0FBUjtBQUNJLFdBQU8sRUFBRTtBQUFFQyxPQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUYsRUFBTSxDQUFOO0FBQUwsS0FEYjtBQUVJLGNBQVUsRUFBRTtBQUFFQyxjQUFRLEVBQUU7QUFBWixLQUZoQjtBQUFBLGNBSUtGO0FBSkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBUUgsQ0FURDs7QUFXZUQsMkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlck1vdGlvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG5jb25zdCBIZWFkZXJNb3Rpb24gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgYW5pbWF0ZT17eyB5OiBbLTc1LCAwXSB9fVxuICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC41IH19XG4gICAgICAgID5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlck1vdGlvbjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/HeaderMotion.js\n");

/***/ }),

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerSideProps\", function() { return getServerSideProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ \"@emotion/styled\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var reflexbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reflexbox */ \"reflexbox\");\n/* harmony import */ var reflexbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reflexbox__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_HeaderMotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/HeaderMotion */ \"./components/HeaderMotion.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ \"next/dynamic\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/nickperry/Desktop/PortfolioWebsite/Next/pages/about.js\";\n\n\n\n\nconst DynamicTechnologiesUsed = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(() => __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ../components/TechnologiesUsed */ \"./components/TechnologiesUsed.js\")), {\n  loadableGenerated: {\n    webpack: () => [/*require.resolve*/(/*! ../components/TechnologiesUsed */ \"./components/TechnologiesUsed.js\")],\n    modules: [\"about.js -> \" + '../components/TechnologiesUsed']\n  }\n});\nconst DynamicParallax = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(() => __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! ../components/Parallax */ \"./components/Parallax.js\")), {\n  loadableGenerated: {\n    webpack: () => [/*require.resolve*/(/*! ../components/Parallax */ \"./components/Parallax.js\")],\n    modules: [\"about.js -> \" + '../components/Parallax']\n  }\n});\nconst DynamicAboutTextAnimation = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(() => __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ../components/AboutTextAnimation */ \"./components/AboutTextAnimation.js\")), {\n  loadableGenerated: {\n    webpack: () => [/*require.resolve*/(/*! ../components/AboutTextAnimation */ \"./components/AboutTextAnimation.js\")],\n    modules: [\"about.js -> \" + '../components/AboutTextAnimation']\n  }\n});\n\nfunction About({\n  technologies\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    className: \"background\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(AboutStyled, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_HeaderMotion__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: \"About Me\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n        sx: {\n          maxWidth: 1200,\n          mx: \"auto\",\n          p: 3,\n          mt: -40\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n          justifyContent: \"center\",\n          alignContent: \"center\",\n          alignItems: \"center\",\n          flexDirection: {\n            _: \"column\",\n            1: \"column\",\n            2: \"row\"\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n            className: \"image-container\",\n            width: {\n              _: \"60%\"\n            },\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              src: \"/images/mtbeldfordpic2.jpeg\",\n              alt: \"\",\n              width: 450,\n              height: 600,\n              className: \"image\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 31,\n              columnNumber: 29\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 25\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n            as: \"h2\",\n            className: \"paragraph-container\",\n            width: {\n              _: \"60%\"\n            },\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DynamicAboutTextAnimation, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 29\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: \"Technologies I Use\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DynamicTechnologiesUsed, {\n        technologies: technologies\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DynamicParallax, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n        sx: {\n          maxWidth: 1400,\n          mx: \"auto\",\n          my: \"100px\",\n          px: 3\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: \"Education\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n          sx: {\n            gridGap: 4\n          },\n          mt: 60,\n          justifyContent: \"center\",\n          alignContent: \"center\",\n          flexDirection: {\n            _: \"column\",\n            1: \"column\",\n            2: \"row\"\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n            className: \"logo-container\",\n            width: {\n              _: \"100%\",\n              1: \"50%\"\n            },\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              src: \"/images/nucamplogo2.svg\",\n              alt: \"\",\n              width: 500,\n              height: 150\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 60,\n              columnNumber: 29\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 59,\n            columnNumber: 25\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n            className: \"paragraph-container\",\n            sx: {\n              textAlign: \"left\",\n              color: \"#fff\",\n              fontSize: \"25px\",\n              marginBottom: 200\n            },\n            width: {\n              _: \"100%\",\n              1: \"70%\"\n            },\n            children: \"Attended this hybrid coding bootcamp, in which Javascript was heavily utilized.  MongoDB, Express.js, React/React Native, and Node.js (MERN) were employed in a multitude of coding exercises as well as to the guided construction of NuCamp's mock web app layed out for the students to recreate.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 9\n  }, this);\n}\n\nasync function getServerSideProps() {\n  const {\n    API_URL\n  } = process.env;\n  const res = await fetch(`${API_URL}/technologies`);\n  const data = await res.json();\n  return {\n    props: {\n      technologies: data\n    }\n  };\n}\nconst AboutStyled = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default.a.div`\n\n    h1 {\n        text-align: center;\n    }\n\n    .image-container {\n        margin-bottom: 4rem;\n        text-align: center;\n        transform: translate(-2%, 5%);\n    }\n\n    .image {\n        border-radius: 50%;\n    }\n    \n    .paragraph-container {\n        text-align: center;\n        border-image-source: linear-gradient(to left, #d47fff, #7fffd4);\n        border-width: 4px;\n        border-image-slice: 1;\n        padding: 0.5rem;\n        box-shadow: 0 0 20px rgba(0,0,0, 0.1);\n        color: #7fffd4;\n    }\n\n    .logo-container{\n        text-align: center;\n    }\n`;\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hYm91dC5qcz8yNmVjIl0sIm5hbWVzIjpbIkR5bmFtaWNUZWNobm9sb2dpZXNVc2VkIiwiZHluYW1pYyIsIkR5bmFtaWNQYXJhbGxheCIsIkR5bmFtaWNBYm91dFRleHRBbmltYXRpb24iLCJBYm91dCIsInRlY2hub2xvZ2llcyIsIm1heFdpZHRoIiwibXgiLCJwIiwibXQiLCJfIiwibXkiLCJweCIsImdyaWRHYXAiLCJ0ZXh0QWxpZ24iLCJjb2xvciIsImZvbnRTaXplIiwibWFyZ2luQm90dG9tIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiQVBJX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJyZXMiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwicHJvcHMiLCJBYm91dFN0eWxlZCIsInN0eWxlZCIsImRpdiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsTUFBTUEsdUJBQXVCLEdBQUdDLG1EQUFPLENBQUMsTUFBTSx1SkFBUDtBQUFBO0FBQUEsd0NBQWMsd0VBQWQ7QUFBQSwrQkFBYyxnQ0FBZDtBQUFBO0FBQUEsRUFBdkM7QUFDQSxNQUFNQyxlQUFlLEdBQUdELG1EQUFPLENBQUMsTUFBTSx1SUFBUDtBQUFBO0FBQUEsd0NBQWMsd0RBQWQ7QUFBQSwrQkFBYyx3QkFBZDtBQUFBO0FBQUEsRUFBL0I7QUFDQSxNQUFNRSx5QkFBeUIsR0FBR0YsbURBQU8sQ0FBQyxNQUFNLDJKQUFQO0FBQUE7QUFBQSx3Q0FBYyw0RUFBZDtBQUFBLCtCQUFjLGtDQUFkO0FBQUE7QUFBQSxFQUF6Qzs7QUFFQSxTQUFTRyxLQUFULENBQWU7QUFBRUM7QUFBRixDQUFmLEVBQWlDO0FBRTdCLHNCQUNJLHFFQUFDLDZDQUFEO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQSwyQkFDSSxxRUFBQyxXQUFEO0FBQUEsOEJBQ0kscUVBQUMsZ0VBQUQ7QUFBQSwrQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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QixhQUEzSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBaENKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWdFSDs7QUFFTSxlQUFlUSxrQkFBZixHQUFvQztBQUN2QyxRQUFNO0FBQUVDO0FBQUYsTUFBY0MsT0FBTyxDQUFDQyxHQUE1QjtBQUVBLFFBQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUUsR0FBRUosT0FBUSxlQUFaLENBQXZCO0FBQ0EsUUFBTUssSUFBSSxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0csSUFBSixFQUFuQjtBQUVBLFNBQU87QUFDSEMsU0FBSyxFQUFFO0FBQ0hyQixrQkFBWSxFQUFFbUI7QUFEWDtBQURKLEdBQVA7QUFLSDtBQUVELE1BQU1HLFdBQVcsR0FBR0Msc0RBQU0sQ0FBQ0MsR0FBSztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBN0JBO0FBK0JlekIsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9hYm91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IEZsZXgsIEJveCB9IGZyb20gJ3JlZmxleGJveCc7XG5pbXBvcnQgSGVhZGVyTW90aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyTW90aW9uJztcblxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcbmNvbnN0IER5bmFtaWNUZWNobm9sb2dpZXNVc2VkID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uL2NvbXBvbmVudHMvVGVjaG5vbG9naWVzVXNlZCcpKTtcbmNvbnN0IER5bmFtaWNQYXJhbGxheCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi9jb21wb25lbnRzL1BhcmFsbGF4JykpO1xuY29uc3QgRHluYW1pY0Fib3V0VGV4dEFuaW1hdGlvbiA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi9jb21wb25lbnRzL0Fib3V0VGV4dEFuaW1hdGlvbicpKTtcblxuZnVuY3Rpb24gQWJvdXQoeyB0ZWNobm9sb2dpZXMgfSkge1xuXG4gICAgcmV0dXJuKFxuICAgICAgICA8Qm94IGNsYXNzTmFtZT1cImJhY2tncm91bmRcIj5cbiAgICAgICAgICAgIDxBYm91dFN0eWxlZD5cbiAgICAgICAgICAgICAgICA8SGVhZGVyTW90aW9uPlxuICAgICAgICAgICAgICAgICAgICA8aDE+QWJvdXQgTWU8L2gxPlxuICAgICAgICAgICAgICAgIDwvSGVhZGVyTW90aW9uPlxuICAgICAgICAgICAgICAgIDxCb3ggc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IDEyMDAsXG4gICAgICAgICAgICAgICAgICAgIG14OiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgcDogMyxcbiAgICAgICAgICAgICAgICAgICAgbXQ6IC00MCAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxGbGV4IFxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduQ29udGVudD1cImNlbnRlclwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbj17eyBfOiBcImNvbHVtblwiLCAxOiBcImNvbHVtblwiLCAyOiBcInJvd1wiIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPVwiaW1hZ2UtY29udGFpbmVyXCIgd2lkdGg9e3sgXzogXCI2MCVcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL210YmVsZGZvcmRwaWMyLmpwZWdcIiBhbHQ9XCJcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezQ1MH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NjAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBhcz1cImgyXCIgY2xhc3NOYW1lPVwicGFyYWdyYXBoLWNvbnRhaW5lclwiIHdpZHRoPXt7IF86IFwiNjAlXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPER5bmFtaWNBYm91dFRleHRBbmltYXRpb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPGgxPlRlY2hub2xvZ2llcyBJIFVzZTwvaDE+XG4gICAgICAgICAgICAgICAgPER5bmFtaWNUZWNobm9sb2dpZXNVc2VkIHRlY2hub2xvZ2llcz17dGVjaG5vbG9naWVzfS8+XG4gICAgICAgICAgICAgICAgPER5bmFtaWNQYXJhbGxheCAvPlxuICAgICAgICAgICAgICAgIDxCb3ggc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IDE0MDAsXG4gICAgICAgICAgICAgICAgICAgIG14OiBcImF1dG9cIiwgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIG15OiBcIjEwMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgIHB4OiAzXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxoMT5FZHVjYXRpb248L2gxPlxuICAgICAgICAgICAgICAgICAgICA8RmxleCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IGdyaWRHYXA6IDQgfX0gXG4gICAgICAgICAgICAgICAgICAgICAgICBtdD17NjB9IGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkNvbnRlbnQ9XCJjZW50ZXJcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249e3sgXzogXCJjb2x1bW5cIiwgMTogXCJjb2x1bW5cIiwgMjogXCJyb3dcIiB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT1cImxvZ28tY29udGFpbmVyXCIgd2lkdGg9e3sgXzogXCIxMDAlXCIsIDE6IFwiNTAlXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL251Y2FtcGxvZ28yLnN2Z1wiIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs1MDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MTUwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPVwicGFyYWdyYXBoLWNvbnRhaW5lclwiIHN4PXt7IHRleHRBbGlnbjogXCJsZWZ0XCIsIGNvbG9yOiBcIiNmZmZcIiwgZm9udFNpemU6IFwiMjVweFwiLCBtYXJnaW5Cb3R0b206IDIwMCB9fSB3aWR0aD17eyBfOiBcIjEwMCVcIiwgMTogXCI3MCVcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBdHRlbmRlZCB0aGlzIGh5YnJpZCBjb2RpbmcgYm9vdGNhbXAsIGluIHdoaWNoIEphdmFzY3JpcHQgd2FzIGhlYXZpbHkgdXRpbGl6ZWQuICBNb25nb0RCLCBFeHByZXNzLmpzLCBSZWFjdC9SZWFjdCBOYXRpdmUsIGFuZCBOb2RlLmpzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKE1FUk4pIHdlcmUgZW1wbG95ZWQgaW4gYSBtdWx0aXR1ZGUgb2YgY29kaW5nIGV4ZXJjaXNlcyBhcyB3ZWxsIGFzIHRvIHRoZSBndWlkZWQgY29uc3RydWN0aW9uIG9mIE51Q2FtcCdzIG1vY2sgd2ViIGFwcCBsYXllZCBvdXQgZm9yIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBzdHVkZW50cyB0byByZWNyZWF0ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0Fib3V0U3R5bGVkPiAgICAgICAgICAgIFxuICAgICAgICA8L0JveD5cbiAgICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuICAgIGNvbnN0IHsgQVBJX1VSTCB9ID0gcHJvY2Vzcy5lbnY7XG5cbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS90ZWNobm9sb2dpZXNgKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICB0ZWNobm9sb2dpZXM6IGRhdGFcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgQWJvdXRTdHlsZWQgPSBzdHlsZWQuZGl2IGBcblxuICAgIGgxIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC5pbWFnZS1jb250YWluZXIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yJSwgNSUpO1xuICAgIH1cblxuICAgIC5pbWFnZSB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9XG4gICAgXG4gICAgLnBhcmFncmFwaC1jb250YWluZXIge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1pbWFnZS1zb3VyY2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjZDQ3ZmZmLCAjN2ZmZmQ0KTtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiA0cHg7XG4gICAgICAgIGJvcmRlci1pbWFnZS1zbGljZTogMTtcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsMCwwLCAwLjEpO1xuICAgICAgICBjb2xvcjogIzdmZmZkNDtcbiAgICB9XG5cbiAgICAubG9nby1jb250YWluZXJ7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5gXG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/about.js\n");

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