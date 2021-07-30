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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ \"@emotion/styled\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var reflexbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reflexbox */ \"reflexbox\");\n/* harmony import */ var reflexbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reflexbox__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _rebass_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rebass/forms */ \"@rebass/forms\");\n/* harmony import */ var _rebass_forms__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_rebass_forms__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rebass */ \"rebass\");\n/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ \"isomorphic-unfetch\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"/Users/nickperry/Desktop/PortfolioWebsite/Next/pages/contact.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nfunction ContactForm() {\n  const {\n    0: values,\n    1: setValues\n  } = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])({\n    message: '',\n    email: '',\n    fullName: ''\n  }); // const [submitted, setSubmitted] = useState(false);\n\n  const handleMessageChange = e => {\n    e.persist();\n    setValues(values => _objectSpread(_objectSpread({}, values), {}, {\n      message: e.target.value\n    }));\n  };\n\n  const handleEmailChange = e => {\n    e.persist();\n    setValues(values => _objectSpread(_objectSpread({}, values), {}, {\n      email: e.target.value\n    }));\n  };\n\n  const handleFullNameChange = e => {\n    e.persist();\n    setValues(values => _objectSpread(_objectSpread({}, values), {}, {\n      fullName: e.target.value\n    }));\n  };\n\n  const logValues = () => {\n    const {\n      API_URL\n    } = process.env;\n    isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()(`${API_URL}/contacts`, {\n      method: \"post\",\n      headers: {\n        \"Content-Type\": \"application/json\"\n      },\n      body: JSON.stringify({\n        message: values.message,\n        email: values.email,\n        name: values.fullName\n      })\n    }).then(response => response.json()).then(data => console.log(data)).catch(error => {\n      console.log(\"Error: \", error);\n    });\n  }; // const handleSubmit = (e) => {\n  //     e.preventDefault();\n  // }\n\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ContactStyled, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n        className: \"heading\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: \"Get In Touch\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: \"SEND ME A MESSAGE!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n        flexWrap: \"wrap\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n          width: 1,\n          px: 400,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_rebass_forms__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], {\n            id: \"message\",\n            name: \"message\",\n            type: \"text\",\n            placeholder: \"Message\",\n            value: values.message,\n            onChange: handleMessageChange\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n          width: 1,\n          px: 400,\n          sx: {\n            gridGap: '5px',\n            marginTop: '10px'\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n            width: 1 / 3,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_rebass_forms__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], {\n              id: \"email\",\n              name: \"email\",\n              type: \"email\",\n              placeholder: \"Email\",\n              value: values.email,\n              onChange: handleEmailChange\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 89,\n              columnNumber: 29\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 25\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n            width: 1 / 3,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_rebass_forms__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], {\n              id: \"name\",\n              name: \"fullName\",\n              type: \"name\",\n              placeholder: \"Full Name\",\n              value: values.fullName,\n              onChange: handleFullNameChange\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 98,\n              columnNumber: 29\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 97,\n            columnNumber: 25\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reflexbox__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n            width: 1 / 3,\n            mb: 30,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(rebass__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], {\n              className: \"send-button\",\n              backgroundColor: \"black\",\n              onClick: logValues,\n              children: \"Send\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 107,\n              columnNumber: 29\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 106,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 13\n    }, this)\n  }, void 0, false);\n}\n\nconst ContactStyled = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default.a.div`\n    .heading {\n        text-align: center;\n        margin-bottom: 40px;\n    }\n\n    #message {\n        height: 150px;\n        padding-bottom: 120px;\n    }\n\n    .send-button{\n        width: 290px;\n        padding: 10px;\n        cursor: pointer;\n    }\n`;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactForm);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb250YWN0LmpzPzAwYjciXSwibmFtZXMiOlsiQ29udGFjdEZvcm0iLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ1c2VTdGF0ZSIsIm1lc3NhZ2UiLCJlbWFpbCIsImZ1bGxOYW1lIiwiaGFuZGxlTWVzc2FnZUNoYW5nZSIsImUiLCJwZXJzaXN0IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVFbWFpbENoYW5nZSIsImhhbmRsZUZ1bGxOYW1lQ2hhbmdlIiwibG9nVmFsdWVzIiwiQVBJX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm5hbWUiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVycm9yIiwiZ3JpZEdhcCIsIm1hcmdpblRvcCIsIkNvbnRhY3RTdHlsZWQiLCJzdHlsZWQiLCJkaXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsU0FBU0EsV0FBVCxHQUF3QjtBQUVwQixRQUFNO0FBQUEsT0FBQ0MsTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JDLHNEQUFRLENBQUM7QUFDakNDLFdBQU8sRUFBRSxFQUR3QjtBQUVqQ0MsU0FBSyxFQUFFLEVBRjBCO0FBR2pDQyxZQUFRLEVBQUU7QUFIdUIsR0FBRCxDQUFwQyxDQUZvQixDQU9wQjs7QUFFQSxRQUFNQyxtQkFBbUIsR0FBSUMsQ0FBRCxJQUFPO0FBQy9CQSxLQUFDLENBQUNDLE9BQUY7QUFDQVAsYUFBUyxDQUFFRCxNQUFELG9DQUNIQSxNQURHO0FBRU5HLGFBQU8sRUFBRUksQ0FBQyxDQUFDRSxNQUFGLENBQVNDO0FBRlosTUFBRCxDQUFUO0FBSUgsR0FORDs7QUFRQSxRQUFNQyxpQkFBaUIsR0FBSUosQ0FBRCxJQUFPO0FBQzdCQSxLQUFDLENBQUNDLE9BQUY7QUFDQVAsYUFBUyxDQUFFRCxNQUFELG9DQUNIQSxNQURHO0FBRU5JLFdBQUssRUFBRUcsQ0FBQyxDQUFDRSxNQUFGLENBQVNDO0FBRlYsTUFBRCxDQUFUO0FBSUgsR0FORDs7QUFRQSxRQUFNRSxvQkFBb0IsR0FBSUwsQ0FBRCxJQUFPO0FBQ2hDQSxLQUFDLENBQUNDLE9BQUY7QUFDQVAsYUFBUyxDQUFFRCxNQUFELG9DQUNIQSxNQURHO0FBRU5LLGNBQVEsRUFBRUUsQ0FBQyxDQUFDRSxNQUFGLENBQVNDO0FBRmIsTUFBRCxDQUFUO0FBSUgsR0FORDs7QUFRQSxRQUFNRyxTQUFTLEdBQUcsTUFBTTtBQUNwQixVQUFNO0FBQUVDO0FBQUYsUUFBY0MsT0FBTyxDQUFDQyxHQUE1QjtBQUVBQyw2REFBSyxDQUNBLEdBQUVILE9BQVEsV0FEVixFQUNzQjtBQUNuQkksWUFBTSxFQUFFLE1BRFc7QUFFbkJDLGFBQU8sRUFBRTtBQUNMLHdCQUFpQjtBQURaLE9BRlU7QUFLbkJDLFVBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDakJuQixlQUFPLEVBQUVILE1BQU0sQ0FBQ0csT0FEQztBQUVqQkMsYUFBSyxFQUFFSixNQUFNLENBQUNJLEtBRkc7QUFHakJtQixZQUFJLEVBQUV2QixNQUFNLENBQUNLO0FBSEksT0FBZjtBQUxhLEtBRHRCLENBQUwsQ0FhQ21CLElBYkQsQ0FhTUMsUUFBUSxJQUFJQSxRQUFRLENBQUNDLElBQVQsRUFibEIsRUFjQ0YsSUFkRCxDQWNNRyxJQUFJLElBQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaLENBZGQsRUFlQ0csS0FmRCxDQWVRQyxLQUFELElBQVc7QUFDZEgsYUFBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1QkUsS0FBdkI7QUFDSCxLQWpCRDtBQWtCSCxHQXJCRCxDQWpDb0IsQ0F3RHBCO0FBQ0E7QUFDQTs7O0FBRUEsc0JBRUk7QUFBQSwyQkFDSSxxRUFBQyxhQUFEO0FBQUEsOEJBQ0kscUVBQUMsNkNBQUQ7QUFBSyxpQkFBUyxFQUFDLFNBQWY7QUFBQSxnQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBS0kscUVBQUMsOENBQUQ7QUFBTSxnQkFBUSxFQUFDLE1BQWY7QUFBQSxnQ0FDSSxxRUFBQyw2Q0FBRDtBQUFLLGVBQUssRUFBRSxDQUFaO0FBQWUsWUFBRSxFQUFFLEdBQW5CO0FBQUEsaUNBQ0kscUVBQUMsbURBQUQ7QUFDSSxjQUFFLEVBQUMsU0FEUDtBQUVJLGdCQUFJLEVBQUMsU0FGVDtBQUdJLGdCQUFJLEVBQUMsTUFIVDtBQUlJLHVCQUFXLEVBQUMsU0FKaEI7QUFLSSxpQkFBSyxFQUFFL0IsTUFBTSxDQUFDRyxPQUxsQjtBQU1JLG9CQUFRLEVBQUVHO0FBTmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFVSSxxRUFBQyw4Q0FBRDtBQUFNLGVBQUssRUFBRSxDQUFiO0FBQWdCLFlBQUUsRUFBRSxHQUFwQjtBQUF5QixZQUFFLEVBQUU7QUFBRTBCLG1CQUFPLEVBQUUsS0FBWDtBQUFrQkMscUJBQVMsRUFBRTtBQUE3QixXQUE3QjtBQUFBLGtDQUNJLHFFQUFDLDZDQUFEO0FBQUssaUJBQUssRUFBRSxJQUFFLENBQWQ7QUFBQSxtQ0FDSSxxRUFBQyxtREFBRDtBQUNJLGdCQUFFLEVBQUMsT0FEUDtBQUVJLGtCQUFJLEVBQUMsT0FGVDtBQUdJLGtCQUFJLEVBQUMsT0FIVDtBQUlJLHlCQUFXLEVBQUMsT0FKaEI7QUFLSSxtQkFBSyxFQUFFakMsTUFBTSxDQUFDSSxLQUxsQjtBQU1JLHNCQUFRLEVBQUVPO0FBTmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFVSSxxRUFBQyw2Q0FBRDtBQUFLLGlCQUFLLEVBQUUsSUFBRSxDQUFkO0FBQUEsbUNBQ0kscUVBQUMsbURBQUQ7QUFDSSxnQkFBRSxFQUFDLE1BRFA7QUFFSSxrQkFBSSxFQUFDLFVBRlQ7QUFHSSxrQkFBSSxFQUFDLE1BSFQ7QUFJSSx5QkFBVyxFQUFDLFdBSmhCO0FBS0ksbUJBQUssRUFBRVgsTUFBTSxDQUFDSyxRQUxsQjtBQU1JLHNCQUFRLEVBQUVPO0FBTmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVkosZUFtQkkscUVBQUMsNkNBQUQ7QUFBSyxpQkFBSyxFQUFFLElBQUUsQ0FBZDtBQUFpQixjQUFFLEVBQUUsRUFBckI7QUFBQSxtQ0FDSSxxRUFBQyw2Q0FBRDtBQUFRLHVCQUFTLEVBQUMsYUFBbEI7QUFBZ0MsNkJBQWUsRUFBQyxPQUFoRDtBQUF3RCxxQkFBTyxFQUFFQyxTQUFqRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBbkJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFGSjtBQTZDSDs7QUFFRCxNQUFNcUIsYUFBYSxHQUFHQyxzREFBTSxDQUFDQyxHQUFJO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBaEJBO0FBa0JlckMsMEVBQWYiLCJmaWxlIjoiLi9wYWdlcy9jb250YWN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgRmxleCwgQm94IH0gZnJvbSAncmVmbGV4Ym94JztcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnQHJlYmFzcy9mb3Jtcyc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdyZWJhc3MnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuXG5mdW5jdGlvbiBDb250YWN0Rm9ybSAoKSB7XG5cbiAgICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xuICAgICAgICBtZXNzYWdlOiAnJyxcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBmdWxsTmFtZTogJycsXG4gICAgfSk7XG4gICAgLy8gY29uc3QgW3N1Ym1pdHRlZCwgc2V0U3VibWl0dGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IGhhbmRsZU1lc3NhZ2VDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBlLnBlcnNpc3QoKTtcbiAgICAgICAgc2V0VmFsdWVzKCh2YWx1ZXMpID0+ICh7XG4gICAgICAgICAgICAuLi52YWx1ZXMsXG4gICAgICAgICAgICBtZXNzYWdlOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUVtYWlsQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgZS5wZXJzaXN0KCk7XG4gICAgICAgIHNldFZhbHVlcygodmFsdWVzKSA9PiAoe1xuICAgICAgICAgICAgLi4udmFsdWVzLFxuICAgICAgICAgICAgZW1haWw6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlRnVsbE5hbWVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBlLnBlcnNpc3QoKTtcbiAgICAgICAgc2V0VmFsdWVzKCh2YWx1ZXMpID0+ICh7XG4gICAgICAgICAgICAuLi52YWx1ZXMsXG4gICAgICAgICAgICBmdWxsTmFtZTogZS50YXJnZXQudmFsdWVcbiAgICAgICAgfSkpO1xuICAgIH07XG5cbiAgICBjb25zdCBsb2dWYWx1ZXMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgQVBJX1VSTCB9ID0gcHJvY2Vzcy5lbnY7XG5cbiAgICAgICAgZmV0Y2goXG4gICAgICAgICAgICBgJHtBUElfVVJMfS9jb250YWN0c2AsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIiA6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHZhbHVlcy5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogdmFsdWVzLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB2YWx1ZXMuZnVsbE5hbWVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSkpXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiLCBlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICAvLyBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgIC8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gfVxuXG4gICAgcmV0dXJuIChcblxuICAgICAgICA8PlxuICAgICAgICAgICAgPENvbnRhY3RTdHlsZWQ+XG4gICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9XCJoZWFkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMT5HZXQgSW4gVG91Y2g8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8cD5TRU5EIE1FIEEgTUVTU0FHRSE8L3A+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPEZsZXggZmxleFdyYXA9XCJ3cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCb3ggd2lkdGg9ezF9IHB4PXs0MDB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibWVzc2FnZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1lc3NhZ2VcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLm1lc3NhZ2V9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVNZXNzYWdlQ2hhbmdlfS8+ICAgIFxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgPEZsZXggd2lkdGg9ezF9IHB4PXs0MDB9IHN4PXt7IGdyaWRHYXA6ICc1cHgnLCBtYXJnaW5Ub3A6ICcxMHB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggd2lkdGg9ezEvM30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRW1haWxDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggd2lkdGg9ezEvM30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZ1bGxOYW1lXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJuYW1lXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRnVsbCBOYW1lXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuZnVsbE5hbWV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRnVsbE5hbWVDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggd2lkdGg9ezEvM30gbWI9ezMwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cInNlbmQtYnV0dG9uXCIgYmFja2dyb3VuZENvbG9yPVwiYmxhY2tcIiBvbkNsaWNrPXtsb2dWYWx1ZXN9PlNlbmQ8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgPC9Db250YWN0U3R5bGVkPlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuXG5jb25zdCBDb250YWN0U3R5bGVkID0gc3R5bGVkLmRpdmBcbiAgICAuaGVhZGluZyB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICB9XG5cbiAgICAjbWVzc2FnZSB7XG4gICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMjBweDtcbiAgICB9XG5cbiAgICAuc2VuZC1idXR0b257XG4gICAgICAgIHdpZHRoOiAyOTBweDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbmBcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEZvcm07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/contact.js\n");

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