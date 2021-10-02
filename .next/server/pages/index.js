module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ \"@emotion/styled\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var reflexbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reflexbox */ \"reflexbox\");\n/* harmony import */ var reflexbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reflexbox__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/nickperry/Desktop/PortfolioWebsite/Next/pages/index.js\";\n\n // import { motion } from 'framer-motion'; \n\nconst Home = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(HomeStyled, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n        className: \"box-top\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n          xmlns: \"http://www.w3.org/2000/svg\",\n          viewBox: \"0 0 1440 319\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"defs\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"linearGradient\", {\n              id: \"gradient\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"stop\", {\n                offset: \"1%\",\n                stopColor: \"#552586\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 13,\n                columnNumber: 33\n              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"stop\", {\n                offset: \"99%\",\n                stopColor: \"#B589D6\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 14,\n                columnNumber: 33\n              }, undefined)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 12,\n              columnNumber: 29\n            }, undefined)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 11,\n            columnNumber: 25\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n            id: \"top-curve\",\n            fill: \"url(#gradient)\",\n            \"fill-opacity\": \"1\",\n            d: \"M0,160L40,170.7C80,181,160,203,240,192C320,181,400,139,480,138.7C560,139,640,181,720,176C800,171,880,117,960,128C1040,139,1120,213,1200,218.7C1280,224,1360,160,1400,128L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 17,\n            columnNumber: 25\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 10,\n          columnNumber: 21\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n        className: \"text-section\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n          children: \"Nick Perry - Software Developer\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 21\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n          children: \"/*Browse my projects, read about my background, and feel free to contact me*/\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 21\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n        className: \"bottom-curve\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n          xmlns: \"http://www.w3.org/2000/svg\",\n          viewBox: \"0 0 1440 319\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"defs\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"radialGradient\", {\n              id: \"yo\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"stop\", {\n                offset: \"5%\",\n                stopColor: \"#36454f\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 38,\n                columnNumber: 33\n              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"stop\", {\n                offset: \"95%\",\n                stopColor: \"#000000\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 39,\n                columnNumber: 33\n              }, undefined)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 37,\n              columnNumber: 29\n            }, undefined)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 25\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n            fill: \"url(#yo)\",\n            \"fill-opacity\": \"1\",\n            d: \"M0,160L40,170.7C80,181,160,203,240,192C320,181,400,139,480,138.7C560,139,640,181,720,176C800,171,880,117,960,128C1040,139,1120,213,1200,218.7C1280,224,1360,160,1400,128L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 25\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 21\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 17\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false);\n};\n\nconst HomeStyled = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default.a.div`\n\n    background-image: \n        linear-gradient(90deg, #552586, #B589D6);\n\n\n    .box-top {\n        background: radial-gradient(circle at top, #36454f, #000000);\n    }\n\n    .text-section {\n        color: #7fffd4;\n        height: 250px;\n\n        @media(max-width: 768px) {\n            height: 450px;\n        }\n    }\n\n    .text-section h3 {\n        font-size: 4rem;\n        text-align: center;\n    }\n\n    .text-section h4 {\n        text-align: center;\n    }\n\n    svg {\n        display: block;\n    }\n\n    /* svg path {\n        animation: pathAnim 7s linear infinite;\n    } */\n\n    /* @keyframes pathAnim {\n        0% {\n            d:path(\"M0,192L34.3,181.3C68.6,171,137,149,206,138.7 C274.3,128,343,128,411,144 C480,160,549,192,617,176C685.7,160,754,96,823,101.3 C891.4,107,960,181,1029,197.3 C1097.1,213,1166,171,1234,149.3 C1302.9,128,1371,128,1406,128 L1440,128L1440,320L1405.7,320 C1371.4,320,1303,320,1234,320 C1165.7,320,1097,320,1029,320 C960,320,891,320,823,320 C754.3,320,686,320,617,320 C548.6,320,480,320,411,320 C342.9,320,274,320,206,320 C137.1,320,69,320,34,320L0,320Z\");\n        }\n        25% {\n            d:path(\"M0,64L40,101.3C80,139,160,213,240,218.7C320,224,400,160,480,154.7C560,149,640,203,720,240C800,277,880,299,960,277.3C1040,256,1120,192,1200,149.3C1280,107,1360,85,1400,74.7L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z\");\n        }\n        50% {\n            d:path(\"M0,160L26.7,144C53.3,128,107,96,160,101.3C213.3,107,267,149,320,186.7C373.3,224,427,256,480,245.3C533.3,235,587,181,640,176C693.3,171,747,213,800,202.7C853.3,192,907,128,960,101.3C1013.3,75,1067,85,1120,117.3C1173.3,149,1227,203,1280,202.7C1333.3,203,1387,149,1413,122.7L1440,96L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z\");\n        }\n        75% {\n            d:path(\"M0,64L40,101.3C80,139,160,213,240,218.7C320,224,400,160,480,154.7C560,149,640,203,720,240C800,277,880,299,960,277.3C1040,256,1120,192,1200,149.3C1280,107,1360,85,1400,74.7L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z\");\n        }\n        100% {\n            d:path(\"M0,192L34.3,181.3C68.6,171,137,149,206,138.7 C274.3,128,343,128,411,144 C480,160,549,192,617,176C685.7,160,754,96,823,101.3 C891.4,107,960,181,1029,197.3 C1097.1,213,1166,171,1234,149.3 C1302.9,128,1371,128,1406,128 L1440,128L1440,320L1405.7,320 C1371.4,320,1303,320,1234,320 C1165.7,320,1097,320,1029,320 C960,320,891,320,823,320 C754.3,320,686,320,617,320 C548.6,320,480,320,411,320 C342.9,320,274,320,206,320 C137.1,320,69,320,34,320L0,320Z\")\n        }\n    } */\n`;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJIb21lU3R5bGVkIiwic3R5bGVkIiwiZGl2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFFQSxNQUFNQSxJQUFJLEdBQUcsTUFBTTtBQUNmLHNCQUNJO0FBQUEsMkJBQ0kscUVBQUMsVUFBRDtBQUFBLDhCQUNJLHFFQUFDLDZDQUFEO0FBQUssaUJBQVMsRUFBQyxTQUFmO0FBQUEsK0JBQ0k7QUFBSyxlQUFLLEVBQUMsNEJBQVg7QUFBd0MsaUJBQU8sRUFBQyxjQUFoRDtBQUFBLGtDQUNJO0FBQUEsbUNBQ0k7QUFBZ0IsZ0JBQUUsRUFBQyxVQUFuQjtBQUFBLHNDQUNJO0FBQU0sc0JBQU0sRUFBQyxJQUFiO0FBQWtCLHlCQUFTLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFESixlQUVJO0FBQU0sc0JBQU0sRUFBQyxLQUFiO0FBQW1CLHlCQUFTLEVBQUM7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBT0k7QUFDSSxjQUFFLEVBQUMsV0FEUDtBQUVJLGdCQUFJLEVBQUMsZ0JBRlQ7QUFHSSw0QkFBYSxHQUhqQjtBQUlJLGFBQUMsRUFBQztBQUpOO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQWtCSSxxRUFBQyw2Q0FBRDtBQUFLLGlCQUFTLEVBQUMsY0FBZjtBQUFBLGdDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWxCSixlQTBCSSxxRUFBQyw2Q0FBRDtBQUFLLGlCQUFTLEVBQUMsY0FBZjtBQUFBLCtCQUNJO0FBQUssZUFBSyxFQUFDLDRCQUFYO0FBQXdDLGlCQUFPLEVBQUMsY0FBaEQ7QUFBQSxrQ0FDSTtBQUFBLG1DQUNJO0FBQWdCLGdCQUFFLEVBQUMsSUFBbkI7QUFBQSxzQ0FDSTtBQUFNLHNCQUFNLEVBQUMsSUFBYjtBQUFrQix5QkFBUyxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREosZUFFSTtBQUFNLHNCQUFNLEVBQUMsS0FBYjtBQUFtQix5QkFBUyxFQUFDO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQU9JO0FBQ0ksZ0JBQUksRUFBQyxVQURUO0FBRUksNEJBQWEsR0FGakI7QUFHSSxhQUFDLEVBQUM7QUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBMUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBZ0RILENBakREOztBQW1EQSxNQUFNQyxVQUFVLEdBQUdDLHNEQUFNLENBQUNDLEdBQUk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQXJEQTtBQXVEZUgsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IEJveCB9IGZyb20gJ3JlZmxleGJveCc7XG4vLyBpbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJzsgXG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxIb21lU3R5bGVkPlxuICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPVwiYm94LXRvcFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDE0NDAgMzE5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGVmcz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9XCJncmFkaWVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxJVwiIHN0b3BDb2xvcj1cIiM1NTI1ODZcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCI5OSVcIiBzdG9wQ29sb3I9XCIjQjU4OUQ2XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kZWZzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRvcC1jdXJ2ZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJ1cmwoI2dyYWRpZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbC1vcGFjaXR5PVwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0wLDE2MEw0MCwxNzAuN0M4MCwxODEsMTYwLDIwMywyNDAsMTkyQzMyMCwxODEsNDAwLDEzOSw0ODAsMTM4LjdDNTYwLDEzOSw2NDAsMTgxLDcyMCwxNzZDODAwLDE3MSw4ODAsMTE3LDk2MCwxMjhDMTA0MCwxMzksMTEyMCwyMTMsMTIwMCwyMTguN0MxMjgwLDIyNCwxMzYwLDE2MCwxNDAwLDEyOEwxNDQwLDk2TDE0NDAsMzIwTDE0MDAsMzIwQzEzNjAsMzIwLDEyODAsMzIwLDEyMDAsMzIwQzExMjAsMzIwLDEwNDAsMzIwLDk2MCwzMjBDODgwLDMyMCw4MDAsMzIwLDcyMCwzMjBDNjQwLDMyMCw1NjAsMzIwLDQ4MCwzMjBDNDAwLDMyMCwzMjAsMzIwLDI0MCwzMjBDMTYwLDMyMCw4MCwzMjAsNDAsMzIwTDAsMzIwWlwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPVwidGV4dC1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIE5pY2sgUGVycnkgLSBTb2Z0d2FyZSBEZXZlbG9wZXJcbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGg0PlxuICAgICAgICAgICAgICAgICAgICAgICAgLypCcm93c2UgbXkgcHJvamVjdHMsIHJlYWQgYWJvdXQgbXkgYmFja2dyb3VuZCwgYW5kIGZlZWwgZnJlZSB0byBjb250YWN0IG1lKi9cbiAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT1cImJvdHRvbS1jdXJ2ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDE0NDAgMzE5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGVmcz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmFkaWFsR3JhZGllbnQgaWQ9XCJ5b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCI1JVwiIHN0b3BDb2xvcj1cIiMzNjQ1NGZcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCI5NSVcIiBzdG9wQ29sb3I9XCIjMDAwMDAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3JhZGlhbEdyYWRpZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kZWZzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwidXJsKCN5bylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGwtb3BhY2l0eT1cIjFcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTAsMTYwTDQwLDE3MC43QzgwLDE4MSwxNjAsMjAzLDI0MCwxOTJDMzIwLDE4MSw0MDAsMTM5LDQ4MCwxMzguN0M1NjAsMTM5LDY0MCwxODEsNzIwLDE3NkM4MDAsMTcxLDg4MCwxMTcsOTYwLDEyOEMxMDQwLDEzOSwxMTIwLDIxMywxMjAwLDIxOC43QzEyODAsMjI0LDEzNjAsMTYwLDE0MDAsMTI4TDE0NDAsOTZMMTQ0MCwzMjBMMTQwMCwzMjBDMTM2MCwzMjAsMTI4MCwzMjAsMTIwMCwzMjBDMTEyMCwzMjAsMTA0MCwzMjAsOTYwLDMyMEM4ODAsMzIwLDgwMCwzMjAsNzIwLDMyMEM2NDAsMzIwLDU2MCwzMjAsNDgwLDMyMEM0MDAsMzIwLDMyMCwzMjAsMjQwLDMyMEMxNjAsMzIwLDgwLDMyMCw0MCwzMjBMMCwzMjBaXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvSG9tZVN0eWxlZD5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuY29uc3QgSG9tZVN0eWxlZCA9IHN0eWxlZC5kaXZgXG5cbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBcbiAgICAgICAgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNTUyNTg2LCAjQjU4OUQ2KTtcblxuXG4gICAgLmJveC10b3Age1xuICAgICAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IHRvcCwgIzM2NDU0ZiwgIzAwMDAwMCk7XG4gICAgfVxuXG4gICAgLnRleHQtc2VjdGlvbiB7XG4gICAgICAgIGNvbG9yOiAjN2ZmZmQ0O1xuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuXG4gICAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDQ1MHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnRleHQtc2VjdGlvbiBoMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC50ZXh0LXNlY3Rpb24gaDQge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgc3ZnIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgLyogc3ZnIHBhdGgge1xuICAgICAgICBhbmltYXRpb246IHBhdGhBbmltIDdzIGxpbmVhciBpbmZpbml0ZTtcbiAgICB9ICovXG5cbiAgICAvKiBAa2V5ZnJhbWVzIHBhdGhBbmltIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgZDpwYXRoKFwiTTAsMTkyTDM0LjMsMTgxLjNDNjguNiwxNzEsMTM3LDE0OSwyMDYsMTM4LjcgQzI3NC4zLDEyOCwzNDMsMTI4LDQxMSwxNDQgQzQ4MCwxNjAsNTQ5LDE5Miw2MTcsMTc2QzY4NS43LDE2MCw3NTQsOTYsODIzLDEwMS4zIEM4OTEuNCwxMDcsOTYwLDE4MSwxMDI5LDE5Ny4zIEMxMDk3LjEsMjEzLDExNjYsMTcxLDEyMzQsMTQ5LjMgQzEzMDIuOSwxMjgsMTM3MSwxMjgsMTQwNiwxMjggTDE0NDAsMTI4TDE0NDAsMzIwTDE0MDUuNywzMjAgQzEzNzEuNCwzMjAsMTMwMywzMjAsMTIzNCwzMjAgQzExNjUuNywzMjAsMTA5NywzMjAsMTAyOSwzMjAgQzk2MCwzMjAsODkxLDMyMCw4MjMsMzIwIEM3NTQuMywzMjAsNjg2LDMyMCw2MTcsMzIwIEM1NDguNiwzMjAsNDgwLDMyMCw0MTEsMzIwIEMzNDIuOSwzMjAsMjc0LDMyMCwyMDYsMzIwIEMxMzcuMSwzMjAsNjksMzIwLDM0LDMyMEwwLDMyMFpcIik7XG4gICAgICAgIH1cbiAgICAgICAgMjUlIHtcbiAgICAgICAgICAgIGQ6cGF0aChcIk0wLDY0TDQwLDEwMS4zQzgwLDEzOSwxNjAsMjEzLDI0MCwyMTguN0MzMjAsMjI0LDQwMCwxNjAsNDgwLDE1NC43QzU2MCwxNDksNjQwLDIwMyw3MjAsMjQwQzgwMCwyNzcsODgwLDI5OSw5NjAsMjc3LjNDMTA0MCwyNTYsMTEyMCwxOTIsMTIwMCwxNDkuM0MxMjgwLDEwNywxMzYwLDg1LDE0MDAsNzQuN0wxNDQwLDY0TDE0NDAsMzIwTDE0MDAsMzIwQzEzNjAsMzIwLDEyODAsMzIwLDEyMDAsMzIwQzExMjAsMzIwLDEwNDAsMzIwLDk2MCwzMjBDODgwLDMyMCw4MDAsMzIwLDcyMCwzMjBDNjQwLDMyMCw1NjAsMzIwLDQ4MCwzMjBDNDAwLDMyMCwzMjAsMzIwLDI0MCwzMjBDMTYwLDMyMCw4MCwzMjAsNDAsMzIwTDAsMzIwWlwiKTtcbiAgICAgICAgfVxuICAgICAgICA1MCUge1xuICAgICAgICAgICAgZDpwYXRoKFwiTTAsMTYwTDI2LjcsMTQ0QzUzLjMsMTI4LDEwNyw5NiwxNjAsMTAxLjNDMjEzLjMsMTA3LDI2NywxNDksMzIwLDE4Ni43QzM3My4zLDIyNCw0MjcsMjU2LDQ4MCwyNDUuM0M1MzMuMywyMzUsNTg3LDE4MSw2NDAsMTc2QzY5My4zLDE3MSw3NDcsMjEzLDgwMCwyMDIuN0M4NTMuMywxOTIsOTA3LDEyOCw5NjAsMTAxLjNDMTAxMy4zLDc1LDEwNjcsODUsMTEyMCwxMTcuM0MxMTczLjMsMTQ5LDEyMjcsMjAzLDEyODAsMjAyLjdDMTMzMy4zLDIwMywxMzg3LDE0OSwxNDEzLDEyMi43TDE0NDAsOTZMMTQ0MCwzMjBMMTQxMy4zLDMyMEMxMzg2LjcsMzIwLDEzMzMsMzIwLDEyODAsMzIwQzEyMjYuNywzMjAsMTE3MywzMjAsMTEyMCwzMjBDMTA2Ni43LDMyMCwxMDEzLDMyMCw5NjAsMzIwQzkwNi43LDMyMCw4NTMsMzIwLDgwMCwzMjBDNzQ2LjcsMzIwLDY5MywzMjAsNjQwLDMyMEM1ODYuNywzMjAsNTMzLDMyMCw0ODAsMzIwQzQyNi43LDMyMCwzNzMsMzIwLDMyMCwzMjBDMjY2LjcsMzIwLDIxMywzMjAsMTYwLDMyMEMxMDYuNywzMjAsNTMsMzIwLDI3LDMyMEwwLDMyMFpcIik7XG4gICAgICAgIH1cbiAgICAgICAgNzUlIHtcbiAgICAgICAgICAgIGQ6cGF0aChcIk0wLDY0TDQwLDEwMS4zQzgwLDEzOSwxNjAsMjEzLDI0MCwyMTguN0MzMjAsMjI0LDQwMCwxNjAsNDgwLDE1NC43QzU2MCwxNDksNjQwLDIwMyw3MjAsMjQwQzgwMCwyNzcsODgwLDI5OSw5NjAsMjc3LjNDMTA0MCwyNTYsMTEyMCwxOTIsMTIwMCwxNDkuM0MxMjgwLDEwNywxMzYwLDg1LDE0MDAsNzQuN0wxNDQwLDY0TDE0NDAsMzIwTDE0MDAsMzIwQzEzNjAsMzIwLDEyODAsMzIwLDEyMDAsMzIwQzExMjAsMzIwLDEwNDAsMzIwLDk2MCwzMjBDODgwLDMyMCw4MDAsMzIwLDcyMCwzMjBDNjQwLDMyMCw1NjAsMzIwLDQ4MCwzMjBDNDAwLDMyMCwzMjAsMzIwLDI0MCwzMjBDMTYwLDMyMCw4MCwzMjAsNDAsMzIwTDAsMzIwWlwiKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIGQ6cGF0aChcIk0wLDE5MkwzNC4zLDE4MS4zQzY4LjYsMTcxLDEzNywxNDksMjA2LDEzOC43IEMyNzQuMywxMjgsMzQzLDEyOCw0MTEsMTQ0IEM0ODAsMTYwLDU0OSwxOTIsNjE3LDE3NkM2ODUuNywxNjAsNzU0LDk2LDgyMywxMDEuMyBDODkxLjQsMTA3LDk2MCwxODEsMTAyOSwxOTcuMyBDMTA5Ny4xLDIxMywxMTY2LDE3MSwxMjM0LDE0OS4zIEMxMzAyLjksMTI4LDEzNzEsMTI4LDE0MDYsMTI4IEwxNDQwLDEyOEwxNDQwLDMyMEwxNDA1LjcsMzIwIEMxMzcxLjQsMzIwLDEzMDMsMzIwLDEyMzQsMzIwIEMxMTY1LjcsMzIwLDEwOTcsMzIwLDEwMjksMzIwIEM5NjAsMzIwLDg5MSwzMjAsODIzLDMyMCBDNzU0LjMsMzIwLDY4NiwzMjAsNjE3LDMyMCBDNTQ4LjYsMzIwLDQ4MCwzMjAsNDExLDMyMCBDMzQyLjksMzIwLDI3NCwzMjAsMjA2LDMyMCBDMTM3LjEsMzIwLDY5LDMyMCwzNCwzMjBMMCwzMjBaXCIpXG4gICAgICAgIH1cbiAgICB9ICovXG5gXG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@emotion/styled":
/*!**********************************!*\
  !*** external "@emotion/styled" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@emotion/styled\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZW1vdGlvbi9zdHlsZWRcIj9hYjA5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBlbW90aW9uL3N0eWxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL3N0eWxlZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@emotion/styled\n");

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