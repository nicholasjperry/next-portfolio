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

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ \"@emotion/styled\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/nickperry/Desktop/PortfolioWebsite/components/Card.js\";\n\n\nfunction Card({\n  project\n}) {\n  const {\n    API_URL\n  } = process.env;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(CardStyled, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"poster\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: API_URL + project.media[0].url,\n        alt: \"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"body\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n        children: project.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        dangerouslySetInnerHTML: {\n          __html: project.description\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 9\n  }, this);\n}\n\nconst CardStyled = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default.a.div`\n    width: 100%;\n    height: 100%;\n    border: 1px solid #cccccc;\n    margin-top: 50px;\n    margin-bottom: -50px;\n    border-radius: 20px;\n    overflow: hidden;\n    box-shadow: 0 0 10px rgba(0,0,0, 0.2);\n\n    .body {\n        padding: 10px;\n\n        h3 {\n            margin-bottom: 20px;\n        }\n\n        p {\n            color: #666666;\n            line-height: 1.5;\n        }\n    }\n`;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcmQuanM/ZGNjYiJdLCJuYW1lcyI6WyJDYXJkIiwicHJvamVjdCIsIkFQSV9VUkwiLCJwcm9jZXNzIiwiZW52IiwibWVkaWEiLCJ1cmwiLCJ0aXRsZSIsIl9faHRtbCIsImRlc2NyaXB0aW9uIiwiQ2FyZFN0eWxlZCIsInN0eWxlZCIsImRpdiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLElBQVQsQ0FBZTtBQUFFQztBQUFGLENBQWYsRUFBNEI7QUFFeEIsUUFBTTtBQUFFQztBQUFGLE1BQWNDLE9BQU8sQ0FBQ0MsR0FBNUI7QUFFQSxzQkFDSSxxRUFBQyxVQUFEO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUMsUUFBZjtBQUFBLDZCQUNJO0FBQUssV0FBRyxFQUFFRixPQUFPLEdBQUdELE9BQU8sQ0FBQ0ksS0FBUixDQUFjLENBQWQsRUFBaUJDLEdBQXJDO0FBQTBDLFdBQUcsRUFBQztBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBSUk7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFBLDhCQUNJO0FBQUEsa0JBQUtMLE9BQU8sQ0FBQ007QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFHLCtCQUF1QixFQUFFO0FBQUVDLGdCQUFNLEVBQUVQLE9BQU8sQ0FBQ1E7QUFBbEI7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBV0g7O0FBRUQsTUFBTUMsVUFBVSxHQUFHQyxzREFBTSxDQUFDQyxHQUFJO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBdEJBO0FBd0JlWixtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ2FyZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuZnVuY3Rpb24gQ2FyZCAoeyBwcm9qZWN0IH0pIHtcblxuICAgIGNvbnN0IHsgQVBJX1VSTCB9ID0gcHJvY2Vzcy5lbnZcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxDYXJkU3R5bGVkPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0ZXJcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVBJX1VSTCArIHByb2plY3QubWVkaWFbMF0udXJsfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgICAgICAgICAgICA8aDM+e3Byb2plY3QudGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICA8cCBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHByb2plY3QuZGVzY3JpcHRpb259fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ2FyZFN0eWxlZD5cbiAgICApXG59XG5cbmNvbnN0IENhcmRTdHlsZWQgPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogLTUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwwLDAsIDAuMik7XG5cbiAgICAuYm9keSB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICAgICAgaDMge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHAge1xuICAgICAgICAgICAgY29sb3I6ICM2NjY2NjY7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICB9XG4gICAgfVxuYFxuXG5leHBvcnQgZGVmYXVsdCBDYXJkOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Card.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerSideProps\", function() { return getServerSideProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ \"isomorphic-unfetch\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Card */ \"./components/Card.js\");\n/* harmony import */ var reflexbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reflexbox */ \"reflexbox\");\n/* harmony import */ var reflexbox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reflexbox__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/nickperry/Desktop/PortfolioWebsite/pages/index.js\";\n\n\n\n\nconst Home = ({\n  projects\n}) => {\n  console.log(projects);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n    variant: \"container\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n      sx: {\n        textDecoration: 'underline'\n      },\n      my: 30,\n      as: \"h2\",\n      children: \"Projects\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_3__[\"Flex\"], {\n      sx: {\n        gridGap: 5\n      },\n      flexDirection: {\n        _: 'column',\n        1: 'row',\n        2: 'row'\n      },\n      children: projects.map(project => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n        width: {\n          _: '100%',\n          2: '50%'\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          project: project\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 25\n        }, undefined)\n      }, project.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 21\n      }, undefined))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 9\n  }, undefined);\n};\n\nasync function getServerSideProps() {\n  const {\n    API_URL\n  } = process.env;\n  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(`${API_URL}/projects`);\n  const data = await res.json();\n  return {\n    props: {\n      projects: data\n    }\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJwcm9qZWN0cyIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0RGVjb3JhdGlvbiIsImdyaWRHYXAiLCJfIiwibWFwIiwicHJvamVjdCIsImlkIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiQVBJX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJyZXMiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLElBQUksR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFrQjtBQUUzQkMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVo7QUFFQSxzQkFDSSxxRUFBQyw2Q0FBRDtBQUFLLFdBQU8sRUFBQyxXQUFiO0FBQUEsNEJBQ0kscUVBQUMsNkNBQUQ7QUFBSyxRQUFFLEVBQUU7QUFBRUcsc0JBQWMsRUFBRTtBQUFsQixPQUFUO0FBQXlDLFFBQUUsRUFBRSxFQUE3QztBQUFpRCxRQUFFLEVBQUMsSUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSSxxRUFBQyw4Q0FBRDtBQUFNLFFBQUUsRUFBRTtBQUFFQyxlQUFPLEVBQUU7QUFBWCxPQUFWO0FBQTBCLG1CQUFhLEVBQUU7QUFBRUMsU0FBQyxFQUFFLFFBQUw7QUFBZSxXQUFHLEtBQWxCO0FBQXlCLFdBQUc7QUFBNUIsT0FBekM7QUFBQSxnQkFDS0wsUUFBUSxDQUFDTSxHQUFULENBQWFDLE9BQU8saUJBQ2pCLHFFQUFDLDZDQUFEO0FBQXNCLGFBQUssRUFBRTtBQUFFRixXQUFDLEVBQUUsTUFBTDtBQUFhLGFBQUc7QUFBaEIsU0FBN0I7QUFBQSwrQkFDSSxxRUFBQyx1REFBRDtBQUFNLGlCQUFPLEVBQUVFO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLFNBQVVBLE9BQU8sQ0FBQ0MsRUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFZSCxDQWhCRDs7QUFrQk8sZUFBZUMsa0JBQWYsR0FBb0M7QUFDdkMsUUFBTTtBQUFFQztBQUFGLE1BQWNDLE9BQU8sQ0FBQ0MsR0FBNUI7QUFFQSxRQUFNQyxHQUFHLEdBQUcsTUFBTUMseURBQUssQ0FBRSxHQUFFSixPQUFRLFdBQVosQ0FBdkI7QUFDQSxRQUFNSyxJQUFJLEdBQUcsTUFBTUYsR0FBRyxDQUFDRyxJQUFKLEVBQW5CO0FBRUEsU0FBTztBQUNIQyxTQUFLLEVBQUU7QUFDSGpCLGNBQVEsRUFBRWU7QUFEUDtBQURKLEdBQVA7QUFLSDtBQUVjaEIsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IENhcmQgZnJvbSAnY29tcG9uZW50cy9DYXJkJztcbmltcG9ydCB7IEZsZXgsIEJveCB9IGZyb20gJ3JlZmxleGJveCc7XG5cbmNvbnN0IEhvbWUgPSAoeyBwcm9qZWN0cyB9KSA9PiB7XG5cbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0cylcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxCb3ggdmFyaWFudD1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPEJveCBzeD17eyB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScgfX1teT17MzB9IGFzPSdoMic+UHJvamVjdHM8L0JveD5cbiAgICAgICAgICAgIDxGbGV4IHN4PXt7IGdyaWRHYXA6IDUgfX0gZmxleERpcmVjdGlvbj17eyBfOiAnY29sdW1uJywgMTogJ3JvdycsIDI6ICdyb3cnIH19PlxuICAgICAgICAgICAgICAgIHtwcm9qZWN0cy5tYXAocHJvamVjdCA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxCb3gga2V5PXtwcm9qZWN0LmlkfSB3aWR0aD17eyBfOiAnMTAwJScsIDI6ICc1MCUnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgcHJvamVjdD17cHJvamVjdH0vPlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9Cb3g+IFxuICAgICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4gICAgY29uc3QgeyBBUElfVVJMIH0gPSBwcm9jZXNzLmVudlxuXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vcHJvamVjdHNgKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgcHJvamVjdHM6IGRhdGFcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@emotion/styled":
/*!**********************************!*\
  !*** external "@emotion/styled" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@emotion/styled\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZW1vdGlvbi9zdHlsZWRcIj9hYjA5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBlbW90aW9uL3N0eWxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL3N0eWxlZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@emotion/styled\n");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-unfetch\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLXVuZmV0Y2hcIj9lYmI2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Imlzb21vcnBoaWMtdW5mZXRjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtdW5mZXRjaFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///isomorphic-unfetch\n");

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