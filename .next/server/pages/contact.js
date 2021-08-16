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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/contact.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ \"@emotion/styled\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var reflexbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reflexbox */ \"reflexbox\");\n/* harmony import */ var reflexbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reflexbox__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _rebass_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rebass/forms */ \"@rebass/forms\");\n/* harmony import */ var _rebass_forms__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_rebass_forms__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rebass */ \"rebass\");\n/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ \"isomorphic-unfetch\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"/Users/nickperry/Desktop/PortfolioWebsite/Next/pages/contact.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nfunction ContactForm() {\n  const {\n    0: values,\n    1: setValues\n  } = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])({\n    message: '',\n    email: '',\n    fullName: ''\n  }); // const [submitted, setSubmitted] = useState(false);\n\n  const handleMessageChange = e => {\n    e.persist();\n    setValues(values => _objectSpread(_objectSpread({}, values), {}, {\n      message: e.target.value\n    }));\n  };\n\n  const handleEmailChange = e => {\n    e.persist();\n    setValues(values => _objectSpread(_objectSpread({}, values), {}, {\n      email: e.target.value\n    }));\n  };\n\n  const handleFullNameChange = e => {\n    e.persist();\n    setValues(values => _objectSpread(_objectSpread({}, values), {}, {\n      fullName: e.target.value\n    }));\n  };\n\n  const logValues = () => {\n    const {\n      API_URL\n    } = process.env;\n    isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()(`${API_URL}/contacts`, {\n      method: \"post\",\n      headers: {\n        \"Content-Type\": \"application/json\"\n      },\n      body: JSON.stringify({\n        message: values.message,\n        email: values.email,\n        name: values.fullName\n      })\n    }).then(response => response.json()).then(data => console.log(data)).then(alert('Thank you for your message!')).catch(error => {\n      console.log(\"Error: \", error);\n    });\n  }; // const handleSubmit = (e) => {\n  //     e.preventDefault();\n  // }\n\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ContactStyled, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n        className: \"heading\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: \"Get In Touch\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: \"SEND ME A MESSAGE!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n        sx: {\n          maxWidth: 1200,\n          mx: 'auto',\n          px: 3\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n          alignContent: \"center\",\n          justifyContent: \"space-between\",\n          flexDirection: {\n            _: \"column\",\n            1: \"row\",\n            2: \"row\"\n          },\n          flexWrap: \"wrap\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n            width: {\n              _: \"100%\"\n            },\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_rebass_forms__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], {\n              id: \"message\",\n              name: \"message\",\n              type: \"text\",\n              placeholder: \"Message\",\n              value: values.message,\n              onChange: handleMessageChange\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 85,\n              columnNumber: 29\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 84,\n            columnNumber: 25\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n            width: {\n              _: \"100%\",\n              1: \"30%\"\n            },\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_rebass_forms__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], {\n              id: \"email\",\n              name: \"email\",\n              type: \"email\",\n              placeholder: \"Email\",\n              value: values.email,\n              onChange: handleEmailChange\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 94,\n              columnNumber: 29\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 93,\n            columnNumber: 25\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n            width: {\n              _: \"100%\",\n              1: \"30%\"\n            },\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_rebass_forms__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], {\n              id: \"name\",\n              name: \"fullName\",\n              type: \"name\",\n              placeholder: \"Full Name\",\n              value: values.fullName,\n              onChange: handleFullNameChange\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 103,\n              columnNumber: 29\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 102,\n            columnNumber: 25\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n            width: {\n              _: \"100%\",\n              1: \"30%\"\n            },\n            mb: 30,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(rebass__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], {\n              className: \"send-button\",\n              backgroundColor: \"black\",\n              onClick: logValues,\n              children: \"Send\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 112,\n              columnNumber: 29\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 111,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 13\n    }, this)\n  }, void 0, false);\n}\n\nconst ContactStyled = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default.a.div`\n    .heading {\n        text-align: center;\n        margin-bottom: 40px;\n    }\n\n    .form-container{\n        padding: 200px;\n    }\n\n    #message {\n        height: 150px;\n        padding-bottom: 120px;\n    }\n\n    .send-button{\n        width: 100%;\n        padding: 10px;\n        cursor: pointer;\n    }\n`;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactForm);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb250YWN0LmpzPzAwYjciXSwibmFtZXMiOlsiQ29udGFjdEZvcm0iLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ1c2VTdGF0ZSIsIm1lc3NhZ2UiLCJlbWFpbCIsImZ1bGxOYW1lIiwiaGFuZGxlTWVzc2FnZUNoYW5nZSIsImUiLCJwZXJzaXN0IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVFbWFpbENoYW5nZSIsImhhbmRsZUZ1bGxOYW1lQ2hhbmdlIiwibG9nVmFsdWVzIiwiQVBJX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm5hbWUiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJhbGVydCIsImNhdGNoIiwiZXJyb3IiLCJtYXhXaWR0aCIsIm14IiwicHgiLCJfIiwiQ29udGFjdFN0eWxlZCIsInN0eWxlZCIsImRpdiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxXQUFULEdBQXdCO0FBRXBCLFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkMsc0RBQVEsQ0FBQztBQUNqQ0MsV0FBTyxFQUFFLEVBRHdCO0FBRWpDQyxTQUFLLEVBQUUsRUFGMEI7QUFHakNDLFlBQVEsRUFBRTtBQUh1QixHQUFELENBQXBDLENBRm9CLENBT3BCOztBQUVBLFFBQU1DLG1CQUFtQixHQUFJQyxDQUFELElBQU87QUFDL0JBLEtBQUMsQ0FBQ0MsT0FBRjtBQUNBUCxhQUFTLENBQUVELE1BQUQsb0NBQ0hBLE1BREc7QUFFTkcsYUFBTyxFQUFFSSxDQUFDLENBQUNFLE1BQUYsQ0FBU0M7QUFGWixNQUFELENBQVQ7QUFJSCxHQU5EOztBQVFBLFFBQU1DLGlCQUFpQixHQUFJSixDQUFELElB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QTtBQUNBO0FBQ0E7QUFDQSxDQXBCQTtBQXNCZXhDLDBFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY29udGFjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IEZsZXgsIEJveCB9IGZyb20gJ3JlZmxleGJveCc7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ0ByZWJhc3MvZm9ybXMnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncmViYXNzJztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cblxuZnVuY3Rpb24gQ29udGFjdEZvcm0gKCkge1xuXG4gICAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgbWVzc2FnZTogJycsXG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgZnVsbE5hbWU6ICcnLFxuICAgIH0pO1xuICAgIC8vIGNvbnN0IFtzdWJtaXR0ZWQsIHNldFN1Ym1pdHRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBoYW5kbGVNZXNzYWdlQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgZS5wZXJzaXN0KCk7XG4gICAgICAgIHNldFZhbHVlcygodmFsdWVzKSA9PiAoe1xuICAgICAgICAgICAgLi4udmFsdWVzLFxuICAgICAgICAgICAgbWVzc2FnZTogZS50YXJnZXQudmFsdWVcbiAgICAgICAgfSkpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVFbWFpbENoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIGUucGVyc2lzdCgpO1xuICAgICAgICBzZXRWYWx1ZXMoKHZhbHVlcykgPT4gKHtcbiAgICAgICAgICAgIC4uLnZhbHVlcyxcbiAgICAgICAgICAgIGVtYWlsOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUZ1bGxOYW1lQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgZS5wZXJzaXN0KCk7XG4gICAgICAgIHNldFZhbHVlcygodmFsdWVzKSA9PiAoe1xuICAgICAgICAgICAgLi4udmFsdWVzLFxuICAgICAgICAgICAgZnVsbE5hbWU6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pKTtcbiAgICB9O1xuXG4gICAgY29uc3QgbG9nVmFsdWVzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB7IEFQSV9VUkwgfSA9IHByb2Nlc3MuZW52O1xuXG4gICAgICAgIGZldGNoKFxuICAgICAgICAgICAgYCR7QVBJX1VSTH0vY29udGFjdHNgLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCIgOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiB2YWx1ZXMubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IHZhbHVlcy5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogdmFsdWVzLmZ1bGxOYW1lXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKVxuICAgICAgICAudGhlbihhbGVydCgnVGhhbmsgeW91IGZvciB5b3VyIG1lc3NhZ2UhJykpXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiLCBlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICAvLyBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgIC8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gfVxuXG4gICAgcmV0dXJuIChcblxuICAgICAgICA8PlxuICAgICAgICAgICAgPENvbnRhY3RTdHlsZWQ+XG4gICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9XCJoZWFkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMT5HZXQgSW4gVG91Y2g8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8cD5TRU5EIE1FIEEgTUVTU0FHRSE8L3A+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPEJveCBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IDEyMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBteDogJ2F1dG8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHg6IDNcbiAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxGbGV4IGFsaWduQ29udGVudD1cImNlbnRlclwiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiIGZsZXhEaXJlY3Rpb249e3sgXzogXCJjb2x1bW5cIiwgMTogXCJyb3dcIiwgMjogXCJyb3dcIiB9fSBmbGV4V3JhcD1cIndyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggd2lkdGg9e3sgXzogXCIxMDAlXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm1lc3NhZ2VcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNZXNzYWdlXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMubWVzc2FnZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVNZXNzYWdlQ2hhbmdlfSAvPiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCB3aWR0aD17eyBfOiBcIjEwMCVcIiwgMTogXCIzMCVcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVFbWFpbENoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCB3aWR0aD17eyBfOiBcIjEwMCVcIiwgMTogXCIzMCVcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZnVsbE5hbWVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm5hbWVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGdWxsIE5hbWVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5mdWxsTmFtZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGdWxsTmFtZUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCB3aWR0aD17eyBfOiBcIjEwMCVcIiwgMTogXCIzMCVcIiB9fSBtYj17MzB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwic2VuZC1idXR0b25cIiBiYWNrZ3JvdW5kQ29sb3I9XCJibGFja1wiIG9uQ2xpY2s9e2xvZ1ZhbHVlc30+U2VuZDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvQ29udGFjdFN0eWxlZD5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuY29uc3QgQ29udGFjdFN0eWxlZCA9IHN0eWxlZC5kaXZgXG4gICAgLmhlYWRpbmcge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgfVxuXG4gICAgLmZvcm0tY29udGFpbmVye1xuICAgICAgICBwYWRkaW5nOiAyMDBweDtcbiAgICB9XG5cbiAgICAjbWVzc2FnZSB7XG4gICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMjBweDtcbiAgICB9XG5cbiAgICAuc2VuZC1idXR0b257XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuYFxuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Rm9ybTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/contact.js\n");

/***/ }),

/***/ "@emotion/styled":
/*!**********************************!*\
  !*** external "@emotion/styled" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@emotion/styled\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZW1vdGlvbi9zdHlsZWRcIj9hYjA5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBlbW90aW9uL3N0eWxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL3N0eWxlZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@emotion/styled\n");

/***/ }),

/***/ "@rebass/forms":
/*!********************************!*\
  !*** external "@rebass/forms" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@rebass/forms\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmViYXNzL2Zvcm1zXCI/ODRjMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAcmViYXNzL2Zvcm1zLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlYmFzcy9mb3Jtc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@rebass/forms\n");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-unfetch\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLXVuZmV0Y2hcIj9lYmI2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Imlzb21vcnBoaWMtdW5mZXRjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtdW5mZXRjaFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///isomorphic-unfetch\n");

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