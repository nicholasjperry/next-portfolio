module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/projects/[slug].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/projects/[slug].js":
/*!**********************************!*\
  !*** ./pages/projects/[slug].js ***!
  \**********************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerSideProps\", function() { return getServerSideProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var reflexbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reflexbox */ \"reflexbox\");\n/* harmony import */ var reflexbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reflexbox__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/config */ \"next/config\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ \"isomorphic-unfetch\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-seo */ \"next-seo\");\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/nickperry/Desktop/PortfolioWebsite/Next/pages/projects/[slug].js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nfunction Project({\n  project\n}) {\n  console.log(project);\n  const SEO = {\n    title: `Portfolio Website | ${project.title}`,\n    description: project.description,\n    openGraph: {\n      title: `Portfolio Website | ${project.title}`,\n      description: project.title\n    }\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_seo__WEBPACK_IMPORTED_MODULE_4__[\"NextSeo\"], _objectSpread({}, SEO), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      variant: \"container\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n        as: \"h2\",\n        style: {\n          margin: \"1em\"\n        },\n        my: 40,\n        children: project.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n        maxWidth: 600,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          style: {\n            color: \"white\",\n            margin: \"1em\"\n          },\n          dangerouslySetInnerHTML: {\n            __html: project.description\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true);\n}\n\nconst {\n  publicRuntimeConfig\n} = next_config__WEBPACK_IMPORTED_MODULE_2___default()();\nasync function getServerSideProps(context) {\n  const {\n    slug\n  } = context.query;\n  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(`${publicRuntimeConfig.API_URL}/projects?slug=${slug}`);\n  const data = await res.json();\n  console.log(slug);\n  return {\n    props: {\n      project: data[0]\n    }\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9qZWN0cy9bc2x1Z10uanM/ODEyZSJdLCJuYW1lcyI6WyJQcm9qZWN0IiwicHJvamVjdCIsImNvbnNvbGUiLCJsb2ciLCJTRU8iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwib3BlbkdyYXBoIiwibWFyZ2luIiwiY29sb3IiLCJfX2h0bWwiLCJwdWJsaWNSdW50aW1lQ29uZmlnIiwiZ2V0Q29uZmlnIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInNsdWciLCJxdWVyeSIsInJlcyIsImZldGNoIiwiQVBJX1VSTCIsImRhdGEiLCJqc29uIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxPQUFULENBQWlCO0FBQUVDO0FBQUYsQ0FBakIsRUFBOEI7QUFFMUJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFaO0FBRUEsUUFBTUcsR0FBRyxHQUFHO0FBQ1JDLFNBQUssRUFBRyx1QkFBc0JKLE9BQU8sQ0FBQ0ksS0FBTSxFQURwQztBQUVSQyxlQUFXLEVBQUVMLE9BQU8sQ0FBQ0ssV0FGYjtBQUlSQyxhQUFTLEVBQUU7QUFDUEYsV0FBSyxFQUFHLHVCQUFzQkosT0FBTyxDQUFDSSxLQUFNLEVBRHJDO0FBRVBDLGlCQUFXLEVBQUVMLE9BQU8sQ0FBQ0k7QUFGZDtBQUpILEdBQVo7QUFVQSxzQkFDSTtBQUFBLDRCQUNJLHFFQUFDLGdEQUFELG9CQUFhRCxHQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJLHFFQUFDLDZDQUFEO0FBQUssYUFBTyxFQUFDLFdBQWI7QUFBQSw4QkFDSSxxRUFBQyw2Q0FBRDtBQUFLLFVBQUUsRUFBQyxJQUFSO0FBQWEsYUFBSyxFQUFFO0FBQUVJLGdCQUFNLEVBQUU7QUFBVixTQUFwQjtBQUF1QyxVQUFFLEVBQUUsRUFBM0M7QUFBQSxrQkFBZ0RQLE9BQU8sQ0FBQ0k7QUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUkscUVBQUMsNkNBQUQ7QUFBSyxnQkFBUSxFQUFFLEdBQWY7QUFBQSwrQkFDSTtBQUFHLGVBQUssRUFBRTtBQUFFSSxpQkFBSyxFQUFFLE9BQVQ7QUFBa0JELGtCQUFNLEVBQUU7QUFBMUIsV0FBVjtBQUE2QyxpQ0FBdUIsRUFBRTtBQUFFRSxrQkFBTSxFQUFFVCxPQUFPLENBQUNLO0FBQWxCO0FBQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQSxrQkFESjtBQVdIOztBQUVELE1BQU07QUFBRUs7QUFBRixJQUEwQkMsa0RBQVMsRUFBekM7QUFFTyxlQUFlQyxrQkFBZixDQUFrQ0MsT0FBbEMsRUFBMkM7QUFFOUMsUUFBTTtBQUFFQztBQUFGLE1BQVdELE9BQU8sQ0FBQ0UsS0FBekI7QUFDQSxRQUFNQyxHQUFHLEdBQUcsTUFBTUMseURBQUssQ0FBRSxHQUFFUCxtQkFBbUIsQ0FBQ1EsT0FBUSxrQkFBaUJKLElBQUssRUFBdEQsQ0FBdkI7QUFDQSxRQUFNSyxJQUFJLEdBQUcsTUFBTUgsR0FBRyxDQUFDSSxJQUFKLEVBQW5CO0FBRUFuQixTQUFPLENBQUNDLEdBQVIsQ0FBWVksSUFBWjtBQUVBLFNBQU87QUFDSE8sU0FBSyxFQUFFO0FBQ0hyQixhQUFPLEVBQUVtQixJQUFJLENBQUMsQ0FBRDtBQURWO0FBREosR0FBUDtBQUtIO0FBRWNwQixzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Byb2plY3RzL1tzbHVnXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgRmxleCB9IGZyb20gJ3JlZmxleGJveCc7XG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQvY29uZmlnJztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IHsgTmV4dFNlbyB9IGZyb20gJ25leHQtc2VvJztcblxuZnVuY3Rpb24gUHJvamVjdCh7IHByb2plY3QgfSkge1xuICAgIFxuICAgIGNvbnNvbGUubG9nKHByb2plY3QpO1xuXG4gICAgY29uc3QgU0VPID0ge1xuICAgICAgICB0aXRsZTogYFBvcnRmb2xpbyBXZWJzaXRlIHwgJHtwcm9qZWN0LnRpdGxlfWAsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBwcm9qZWN0LmRlc2NyaXB0aW9uLFxuXG4gICAgICAgIG9wZW5HcmFwaDoge1xuICAgICAgICAgICAgdGl0bGU6IGBQb3J0Zm9saW8gV2Vic2l0ZSB8ICR7cHJvamVjdC50aXRsZX1gLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHByb2plY3QudGl0bGUsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8TmV4dFNlbyB7Li4uU0VPfSAvPlxuICAgICAgICAgICAgPEJveCB2YXJpYW50PVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPEJveCBhcz1cImgyXCIgc3R5bGU9e3sgbWFyZ2luOiBcIjFlbVwiIH19IG15PXs0MH0+e3Byb2plY3QudGl0bGV9PC9Cb3g+XG4gICAgICAgICAgICAgICAgPEJveCBtYXhXaWR0aD17NjAwfT5cbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiwgbWFyZ2luOiBcIjFlbVwiIH19IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcHJvamVjdC5kZXNjcmlwdGlvbiB9fT48L3A+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuY29uc3QgeyBwdWJsaWNSdW50aW1lQ29uZmlnIH0gPSBnZXRDb25maWcoKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG5cbiAgICBjb25zdCB7IHNsdWcgfSA9IGNvbnRleHQucXVlcnk7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7cHVibGljUnVudGltZUNvbmZpZy5BUElfVVJMfS9wcm9qZWN0cz9zbHVnPSR7c2x1Z31gKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIGNvbnNvbGUubG9nKHNsdWcpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHByb2plY3Q6IGRhdGFbMF1cbiAgICAgICAgfSxcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/projects/[slug].js\n");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-unfetch\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLXVuZmV0Y2hcIj9lYmI2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Imlzb21vcnBoaWMtdW5mZXRjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtdW5mZXRjaFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///isomorphic-unfetch\n");

/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-seo\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXNlb1wiPzJjYmUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC1zZW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXNlb1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-seo\n");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/config\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2NvbmZpZ1wiP2Y4NzkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9jb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2NvbmZpZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/config\n");

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