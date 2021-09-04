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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ \"@emotion/styled\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var reflexbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reflexbox */ \"reflexbox\");\n/* harmony import */ var reflexbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reflexbox__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/nickperry/Desktop/PortfolioWebsite/Next/pages/index.js\";\n\n\n // function TypeWriter ({ text }) {\n//     const index = useRef(0);\n//     const [currentText, setCurrentText] = useState(\"\");\n//     useEffect(() => {\n//         const timeoutId = setTimeout(() => {\n//             setCurrentText((value) => value + text.charAt(index.current));\n//             index.current += 1;\n//         }, 75);\n//     return () => {\n//         clearTimeout(timeoutId);\n//     };\n// }, [currentText, text]);\n//     return <div>{currentText}</div>\n// };\n\nconst Home = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(HomeStyled, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n        className: \"box-top\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n          xmlns: \"http://www.w3.org/2000/svg\",\n          viewBox: \"0 0 1440 319\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"defs\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"linearGradient\", {\n              id: \"gradient\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"stop\", {\n                offset: \"1%\",\n                stopColor: \"#552586\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 32,\n                columnNumber: 33\n              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"stop\", {\n                offset: \"99%\",\n                stopColor: \"#B589D6\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 33,\n                columnNumber: 33\n              }, undefined)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 31,\n              columnNumber: 29\n            }, undefined)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 25\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n            fill: \"url(#gradient)\",\n            \"fill-opacity\": \"1\",\n            d: \"M0,192L34.3,181.3C68.6,171,137,149,206,138.7C274.3,128,343,128,411,144C480,160,549,192,617,176C685.7,160,754,96,823,101.3C891.4,107,960,181,1029,197.3C1097.1,213,1166,171,1234,149.3C1302.9,128,1371,128,1406,128L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 25\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 21\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n        className: \"text-section\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n          children: \"Nick Perry - Software Developer\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 21\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n          children: \"/*Browse my projects, read about my background, and feel free to contact me*/\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 21\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n        className: \"bottom-curve\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n          xmlns: \"http://www.w3.org/2000/svg\",\n          viewBox: \"0 0 1440 319\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n            fill: \"#36454f\",\n            \"fill-opacity\": \"1\",\n            d: \"M0,192L34.3,181.3C68.6,171,137,149,206,138.7C274.3,128,343,128,411,144C480,160,549,192,617,176C685.7,160,754,96,823,101.3C891.4,107,960,181,1029,197.3C1097.1,213,1166,171,1234,149.3C1302.9,128,1371,128,1406,128L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 25\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 21\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 17\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false);\n};\n\nconst HomeStyled = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default.a.div`\n\n    background-image: \n            linear-gradient(90deg, #552586, #B589D6);\n    \n    .box-top {\n        background: #36454f;\n    }\n\n    .text-section {\n        height: 250px;\n\n        @media(max-width: 768px) {\n            height: 450px;\n        }\n    }\n\n    .text-section h3 {\n        font-size: 4rem;\n        /* background-clip: text;\n        color: transparent; */\n        text-align: center;\n    }\n\n    .text-section h4 {\n        text-align: center;\n    }\n\n    svg {\n        display: block;\n    }\n\n    .bottom-curve {\n        /* width: 100%;\n        bottom: 0;\n        top: 100%; */\n    }\n`;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJIb21lU3R5bGVkIiwic3R5bGVkIiwiZGl2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBR0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxNQUFNQSxJQUFJLEdBQUcsTUFBTTtBQUNmLHNCQUNJO0FBQUEsMkJBQ0kscUVBQUMsVUFBRDtBQUFBLDhCQUNJLHFFQUFDLDZDQUFEO0FBQUssaUJBQVMsRUFBQyxTQUFmO0FBQUEsK0JBQ0k7QUFBSyxlQUFLLEVBQUMsNEJBQVg7QUFBd0MsaUJBQU8sRUFBQyxjQUFoRDtBQUFBLGtDQUNJO0FBQUEsbUNBQ0k7QUFBZ0IsZ0JBQUUsRUFBQyxVQUFuQjtBQUFBLHNDQUNJO0FBQU0sc0JBQU0sRUFBQyxJQUFiO0FBQWtCLHlCQUFTLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFESixlQUVJO0FBQU0sc0JBQU0sRUFBQyxLQUFiO0FBQW1CLHlCQUFTLEVBQUM7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBT0k7QUFDSSxnQkFBSSxFQUFDLGdCQURUO0FBRUksNEJBQWEsR0FGakI7QUFHSSxhQUFDLEVBQUM7QUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFnQkkscUVBQUMsNkNBQUQ7QUFBSyxpQkFBUyxFQUFDLGNBQWY7QUFBQSxnQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFoQkosZUF3QkkscUVBQUMsNkNBQUQ7QUFBSyxpQkFBUyxFQUFDLGNBQWY7QUFBQSwrQkFDSTtBQUFLLGVBQUssRUFBQyw0QkFBWDtBQUF3QyxpQkFBTyxFQUFDLGNBQWhEO0FBQUEsaUNBQ0k7QUFDSSxnQkFBSSxFQUFDLFNBRFQ7QUFFSSw0QkFBYSxHQUZqQjtBQUdJLGFBQUMsRUFBQztBQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkF4Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUFzQ0gsQ0F2Q0Q7O0FBeUNBLE1BQU1DLFVBQVUsR0FBR0Msc0RBQU0sQ0FBQ0MsR0FBSTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQXJDQTtBQXVDZUgsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IEJveCB9IGZyb20gJ3JlZmxleGJveCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5cbi8vIGZ1bmN0aW9uIFR5cGVXcml0ZXIgKHsgdGV4dCB9KSB7XG5cbi8vICAgICBjb25zdCBpbmRleCA9IHVzZVJlZigwKTtcblxuLy8gICAgIGNvbnN0IFtjdXJyZW50VGV4dCwgc2V0Q3VycmVudFRleHRdID0gdXNlU3RhdGUoXCJcIik7XG5cbi8vICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuLy8gICAgICAgICBjb25zdCB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbi8vICAgICAgICAgICAgIHNldEN1cnJlbnRUZXh0KCh2YWx1ZSkgPT4gdmFsdWUgKyB0ZXh0LmNoYXJBdChpbmRleC5jdXJyZW50KSk7XG4vLyAgICAgICAgICAgICBpbmRleC5jdXJyZW50ICs9IDE7XG4vLyAgICAgICAgIH0sIDc1KTtcbi8vICAgICByZXR1cm4gKCkgPT4ge1xuLy8gICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbi8vICAgICB9O1xuLy8gfSwgW2N1cnJlbnRUZXh0LCB0ZXh0XSk7XG5cbi8vICAgICByZXR1cm4gPGRpdj57Y3VycmVudFRleHR9PC9kaXY+XG4vLyB9O1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SG9tZVN0eWxlZD5cbiAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT1cImJveC10b3BcIj5cbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAxNDQwIDMxOVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRlZnM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPVwiZ3JhZGllbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMSVcIiBzdG9wQ29sb3I9XCIjNTUyNTg2XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiOTklXCIgc3RvcENvbG9yPVwiI0I1ODlENlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGVmcz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJ1cmwoI2dyYWRpZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbC1vcGFjaXR5PVwiMVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMCwxOTJMMzQuMywxODEuM0M2OC42LDE3MSwxMzcsMTQ5LDIwNiwxMzguN0MyNzQuMywxMjgsMzQzLDEyOCw0MTEsMTQ0QzQ4MCwxNjAsNTQ5LDE5Miw2MTcsMTc2QzY4NS43LDE2MCw3NTQsOTYsODIzLDEwMS4zQzg5MS40LDEwNyw5NjAsMTgxLDEwMjksMTk3LjNDMTA5Ny4xLDIxMywxMTY2LDE3MSwxMjM0LDE0OS4zQzEzMDIuOSwxMjgsMTM3MSwxMjgsMTQwNiwxMjhMMTQ0MCwxMjhMMTQ0MCwzMjBMMTQwNS43LDMyMEMxMzcxLjQsMzIwLDEzMDMsMzIwLDEyMzQsMzIwQzExNjUuNywzMjAsMTA5NywzMjAsMTAyOSwzMjBDOTYwLDMyMCw4OTEsMzIwLDgyMywzMjBDNzU0LjMsMzIwLDY4NiwzMjAsNjE3LDMyMEM1NDguNiwzMjAsNDgwLDMyMCw0MTEsMzIwQzM0Mi45LDMyMCwyNzQsMzIwLDIwNiwzMjBDMTM3LjEsMzIwLDY5LDMyMCwzNCwzMjBMMCwzMjBaXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPVwidGV4dC1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIE5pY2sgUGVycnkgLSBTb2Z0d2FyZSBEZXZlbG9wZXJcbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGg0PlxuICAgICAgICAgICAgICAgICAgICAgICAgLypCcm93c2UgbXkgcHJvamVjdHMsIHJlYWQgYWJvdXQgbXkgYmFja2dyb3VuZCwgYW5kIGZlZWwgZnJlZSB0byBjb250YWN0IG1lKi9cbiAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT1cImJvdHRvbS1jdXJ2ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDE0NDAgMzE5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjMzY0NTRmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsLW9wYWNpdHk9XCIxXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0wLDE5MkwzNC4zLDE4MS4zQzY4LjYsMTcxLDEzNywxNDksMjA2LDEzOC43QzI3NC4zLDEyOCwzNDMsMTI4LDQxMSwxNDRDNDgwLDE2MCw1NDksMTkyLDYxNywxNzZDNjg1LjcsMTYwLDc1NCw5Niw4MjMsMTAxLjNDODkxLjQsMTA3LDk2MCwxODEsMTAyOSwxOTcuM0MxMDk3LjEsMjEzLDExNjYsMTcxLDEyMzQsMTQ5LjNDMTMwMi45LDEyOCwxMzcxLDEyOCwxNDA2LDEyOEwxNDQwLDEyOEwxNDQwLDMyMEwxNDA1LjcsMzIwQzEzNzEuNCwzMjAsMTMwMywzMjAsMTIzNCwzMjBDMTE2NS43LDMyMCwxMDk3LDMyMCwxMDI5LDMyMEM5NjAsMzIwLDg5MSwzMjAsODIzLDMyMEM3NTQuMywzMjAsNjg2LDMyMCw2MTcsMzIwQzU0OC42LDMyMCw0ODAsMzIwLDQxMSwzMjBDMzQyLjksMzIwLDI3NCwzMjAsMjA2LDMyMEMxMzcuMSwzMjAsNjksMzIwLDM0LDMyMEwwLDMyMFpcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0hvbWVTdHlsZWQ+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG5cbmNvbnN0IEhvbWVTdHlsZWQgPSBzdHlsZWQuZGl2YFxuXG4gICAgYmFja2dyb3VuZC1pbWFnZTogXG4gICAgICAgICAgICBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM1NTI1ODYsICNCNTg5RDYpO1xuICAgIFxuICAgIC5ib3gtdG9wIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzM2NDU0ZjtcbiAgICB9XG5cbiAgICAudGV4dC1zZWN0aW9uIHtcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcblxuICAgICAgICBAbWVkaWEobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgaGVpZ2h0OiA0NTBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC50ZXh0LXNlY3Rpb24gaDMge1xuICAgICAgICBmb250LXNpemU6IDRyZW07XG4gICAgICAgIC8qIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50OyAqL1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLnRleHQtc2VjdGlvbiBoNCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICBzdmcge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAuYm90dG9tLWN1cnZlIHtcbiAgICAgICAgLyogd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgdG9wOiAxMDAlOyAqL1xuICAgIH1cbmBcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@emotion/styled":
/*!**********************************!*\
  !*** external "@emotion/styled" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@emotion/styled\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZW1vdGlvbi9zdHlsZWRcIj9hYjA5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBlbW90aW9uL3N0eWxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL3N0eWxlZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@emotion/styled\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

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