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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ \"@emotion/styled\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var reflexbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reflexbox */ \"reflexbox\");\n/* harmony import */ var reflexbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reflexbox__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rebass */ \"rebass\");\n/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_wavify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-wavify */ \"react-wavify\");\n/* harmony import */ var react_wavify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_wavify__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"@fortawesome/react-fontawesome\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"@fortawesome/free-solid-svg-icons\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"/Users/nickperry/Desktop/PortfolioWebsite/Next/pages/index.js\";\n\n\n\n\n\n\n\nfunction download() {\n  const {\n    API_URL\n  } = process.env;\n  const [download, setDownload] = useState(false);\n  fetch(`${API_URL}/downloads`, {\n    method: \"GET\",\n    headers: {\n      \"Content-Type\": \"application/json\"\n    }\n  }).then(response => response.json()).then(data => console.log(data)).catch(error => {\n    console.log(\"Error : \", error);\n  });\n\n  const handleDownload = e => {\n    e.preventDefault();\n    setIsDownloaded(true);\n  };\n}\n\nconst Home = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(HomeStyled, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n        className: \"wave-container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: \"Hi, I'm Nick Perry!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 21\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n          children: \" -Software Developer- \"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 21\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n          className: \"resume-text-button-container\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n            children: \"Download my resume\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 25\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            href: \"resume.pdf\",\n            target: \"_blank\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__[\"FontAwesomeIcon\"], {\n              className: \"icon\",\n              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__[\"faArrowAltCircleDown\"]\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 43,\n              columnNumber: 29\n            }, undefined)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 25\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 21\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_wavify__WEBPACK_IMPORTED_MODULE_4___default.a, {\n          className: \"wave\",\n          fill: \"url(#gradient)\",\n          options: {\n            amplitude: 20,\n            speed: 0.25,\n            points: 4\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"defs\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"linearGradient\", {\n              id: \"gradient\",\n              gradientTransform: \"rotate(90deg)\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"stop\", {\n                offset: \"10%\",\n                stopColor: \"#552586\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 49,\n                columnNumber: 33\n              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"stop\", {\n                offset: \"90%\",\n                stopColor: \"#B589D6\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 50,\n                columnNumber: 33\n              }, undefined)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 48,\n              columnNumber: 29\n            }, undefined)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 25\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 21\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 17\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false);\n};\n\nconst HomeStyled = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default.a.div`\n\n    margin: 0;\n    padding: 0;\n\n    .wave-container {\n        margin-top: 10vh;\n\n        h1 {\n            text-align: center;\n            color: #7fffd4;\n        }\n\n        h2 {\n            text-align: center;\n            color: #7fffd4;\n            font-size: 3rem;\n        }\n    }\n    \n    .resume-text-button-container {\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        align-content: center;\n        align-items: center;\n        gap: 1vw;\n\n        h3 {\n            color: #fff;\n        }\n        /* Button {\n        } */\n        .icon {\n            height: 35px;\n            background-color: #000000;\n            color: #fff;\n            cursor: pointer;\n            border-radius: 50%;\n        }\n    }\n\n    .wave {\n        height: 40vh;\n    }\n`;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbImRvd25sb2FkIiwiQVBJX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJzZXREb3dubG9hZCIsInVzZVN0YXRlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnJvciIsImhhbmRsZURvd25sb2FkIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2V0SXNEb3dubG9hZGVkIiwiSG9tZSIsImZhQXJyb3dBbHRDaXJjbGVEb3duIiwiYW1wbGl0dWRlIiwic3BlZWQiLCJwb2ludHMiLCJIb21lU3R5bGVkIiwic3R5bGVkIiwiZGl2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxHQUFvQjtBQUNoQixRQUFNO0FBQUVDO0FBQUYsTUFBY0MsT0FBTyxDQUFDQyxHQUE1QjtBQUNBLFFBQU0sQ0FBQ0gsUUFBRCxFQUFXSSxXQUFYLElBQTBCQyxRQUFRLENBQUMsS0FBRCxDQUF4QztBQUVBQyxPQUFLLENBQ0EsR0FBRUwsT0FBUSxZQURWLEVBQ3VCO0FBQ3BCTSxVQUFNLEVBQUUsS0FEWTtBQUVwQkMsV0FBTyxFQUFFO0FBQ0wsc0JBQWlCO0FBRFo7QUFGVyxHQUR2QixDQUFMLENBT0NDLElBUEQsQ0FPTUMsUUFBUSxJQUFJQSxRQUFRLENBQUNDLElBQVQsRUFQbEIsRUFRQ0YsSUFSRCxDQVFNRyxJQUFJLElBQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaLENBUmQsRUFTQ0csS0FURCxDQVNRQyxLQUFELElBQVc7QUFDZEgsV0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QkUsS0FBeEI7QUFDSCxHQVhEOztBQWFBLFFBQU1DLGNBQWMsR0FBSUMsQ0FBRCxJQUFPO0FBQzFCQSxLQUFDLENBQUNDLGNBQUY7QUFDQUMsbUJBQWUsQ0FBQyxJQUFELENBQWY7QUFDSCxHQUhEO0FBS0g7O0FBRUQsTUFBTUMsSUFBSSxHQUFHLE1BQU07QUFFZixzQkFDSTtBQUFBLDJCQUNJLHFFQUFDLFVBQUQ7QUFBQSw2QkFDSSxxRUFBQyw2Q0FBRDtBQUFLLGlCQUFTLEVBQUMsZ0JBQWY7QUFBQSxnQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKLGVBR0kscUVBQUMsNkNBQUQ7QUFBSyxtQkFBUyxFQUFDLDhCQUFmO0FBQUEsa0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosZUFFSTtBQUFHLGdCQUFJLEVBQUMsWUFBUjtBQUFxQixrQkFBTSxFQUFDLFFBQTVCO0FBQUEsbUNBQ0kscUVBQUMsOEVBQUQ7QUFBaUIsdUJBQVMsRUFBQyxNQUEzQjtBQUFrQyxrQkFBSSxFQUFFQyxzRkFBb0JBO0FBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFISixlQVNJLHFFQUFDLG1EQUFEO0FBQU0sbUJBQVMsRUFBQyxNQUFoQjtBQUF1QixjQUFJLEVBQUMsZ0JBQTVCO0FBQTZDLGlCQUFPLEVBQUU7QUFBRUMscUJBQVMsRUFBRSxFQUFiO0FBQWlCQyxpQkFBSyxFQUFFLElBQXhCO0FBQThCQyxrQkFBTSxFQUFFO0FBQXRDLFdBQXREO0FBQUEsaUNBQ0k7QUFBQSxtQ0FDSTtBQUFnQixnQkFBRSxFQUFDLFVBQW5CO0FBQThCLCtCQUFpQixFQUFDLGVBQWhEO0FBQUEsc0NBQ0k7QUFBTSxzQkFBTSxFQUFDLEtBQWI7QUFBbUIseUJBQVMsRUFBQztBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURKLGVBRUk7QUFBTSxzQkFBTSxFQUFDLEtBQWI7QUFBbUIseUJBQVMsRUFBQztBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFESjtBQXdCSCxDQTFCRDs7QUE0QkEsTUFBTUMsVUFBVSxHQUFHQyxzREFBTSxDQUFDQyxHQUFJO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQTdDQTtBQStDZVAsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IEJveCB9IGZyb20gJ3JlZmxleGJveCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdyZWJhc3MnO1xuaW1wb3J0IFdhdmUgZnJvbSAncmVhY3Qtd2F2aWZ5JztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBmYUFycm93QWx0Q2lyY2xlRG93biB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5cbmZ1bmN0aW9uIGRvd25sb2FkKCkge1xuICAgIGNvbnN0IHsgQVBJX1VSTCB9ID0gcHJvY2Vzcy5lbnY7XG4gICAgY29uc3QgW2Rvd25sb2FkLCBzZXREb3dubG9hZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBmZXRjaChcbiAgICAgICAgYCR7QVBJX1VSTH0vZG93bmxvYWRzYCwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCIgOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgOiBcIiwgZXJyb3IpXG4gICAgfSk7XG5cbiAgICBjb25zdCBoYW5kbGVEb3dubG9hZCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2V0SXNEb3dubG9hZGVkKHRydWUpXG4gICAgfVxuXG59XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEhvbWVTdHlsZWQ+XG4gICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9XCJ3YXZlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDE+SGksIEknbSBOaWNrIFBlcnJ5ITwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxoMj4gLVNvZnR3YXJlIERldmVsb3Blci0gPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9XCJyZXN1bWUtdGV4dC1idXR0b24tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+RG93bmxvYWQgbXkgcmVzdW1lPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJyZXN1bWUucGRmXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9XCJpY29uXCIgaWNvbj17ZmFBcnJvd0FsdENpcmNsZURvd259IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICA8V2F2ZSBjbGFzc05hbWU9XCJ3YXZlXCIgZmlsbD1cInVybCgjZ3JhZGllbnQpXCIgb3B0aW9ucz17eyBhbXBsaXR1ZGU6IDIwLCBzcGVlZDogMC4yNSwgcG9pbnRzOiA0IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRlZnM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPVwiZ3JhZGllbnRcIiBncmFkaWVudFRyYW5zZm9ybT1cInJvdGF0ZSg5MGRlZylcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMTAlXCIgc3RvcENvbG9yPVwiIzU1MjU4NlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjkwJVwiIHN0b3BDb2xvcj1cIiNCNTg5RDZcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2RlZnM+XG4gICAgICAgICAgICAgICAgICAgIDwvV2F2ZT5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvSG9tZVN0eWxlZD5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuY29uc3QgSG9tZVN0eWxlZCA9IHN0eWxlZC5kaXZgXG5cbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcblxuICAgIC53YXZlLWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwdmg7XG5cbiAgICAgICAgaDEge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6ICM3ZmZmZDQ7XG4gICAgICAgIH1cblxuICAgICAgICBoMiB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogIzdmZmZkNDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAucmVzdW1lLXRleHQtYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogMXZ3O1xuXG4gICAgICAgIGgzIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG4gICAgICAgIC8qIEJ1dHRvbiB7XG4gICAgICAgIH0gKi9cbiAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLndhdmUge1xuICAgICAgICBoZWlnaHQ6IDQwdmg7XG4gICAgfVxuYFxuXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@emotion/styled":
/*!**********************************!*\
  !*** external "@emotion/styled" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@emotion/styled\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZW1vdGlvbi9zdHlsZWRcIj9hYjA5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBlbW90aW9uL3N0eWxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL3N0eWxlZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@emotion/styled\n");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@fortawesome/free-solid-svg-icons\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIj83M2NiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@fortawesome/free-solid-svg-icons\n");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@fortawesome/react-fontawesome\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIj85N2FhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@fortawesome/react-fontawesome\n");

/***/ }),

/***/ "react-wavify":
/*!*******************************!*\
  !*** external "react-wavify" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-wavify\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC13YXZpZnlcIj80YzUxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LXdhdmlmeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXdhdmlmeVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-wavify\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "rebass":
/*!*************************!*\
  !*** external "rebass" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"rebass\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWJhc3NcIj80OWE1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYmFzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYmFzc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///rebass\n");

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