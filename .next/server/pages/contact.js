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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ALdH");


/***/ }),

/***/ "9Bhh":
/***/ (function(module, exports) {

module.exports = require("rebass");

/***/ }),

/***/ "ALdH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("UlNW");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reflexbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("EQ3K");
/* harmony import */ var reflexbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reflexbox__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _rebass_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("q8hb");
/* harmony import */ var _rebass_forms__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_rebass_forms__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("9Bhh");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("uhWA");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faAddressBook__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("AYDo");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faAddressBook__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faAddressBook__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faEnvelope__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("j6uC");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faEnvelope__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faEnvelope__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_HeaderMotion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("RilL");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











function ContactForm() {
  const {
    0: values,
    1: setValues
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    message: '',
    email: '',
    fullName: ''
  });
  const {
    0: submitted,
    1: setSubmitted
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false);
  const {
    0: valid,
    1: setValid
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false);

  const handleMessageChange = e => {
    e.persist();
    setValues(values => _objectSpread(_objectSpread({}, values), {}, {
      message: e.target.value
    }));
  };

  const handleEmailChange = e => {
    e.persist();
    setValues(values => _objectSpread(_objectSpread({}, values), {}, {
      email: e.target.value
    }));
  };

  const handleFullNameChange = e => {
    e.persist();
    setValues(values => _objectSpread(_objectSpread({}, values), {}, {
      fullName: e.target.value
    }));
  };

  const logValues = () => {
    const {
      API_URL
    } = process.env;
    fetch(`${API_URL}/contacts`, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: values.message,
        email: values.email,
        name: values.fullName
      })
    }).then(response => response.json()).then(data => console.log(data)).then(alert('Thank you for your message!')).catch(error => {
      console.log("Error: ", error);
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (values.message && values.email && values.fullName) {
      setValid(true);
      logValues();
    }

    setSubmitted(true);
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reflexbox__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    className: "background",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(ContactStyled, {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reflexbox__WEBPACK_IMPORTED_MODULE_2__["Box"], {
        classname: "headings",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_HeaderMotion__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", {
            style: {
              textAlign: "center"
            },
            children: "Get In Touch"
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
          style: {
            textAlign: "center"
          },
          children: "Send Me A Message"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reflexbox__WEBPACK_IMPORTED_MODULE_2__["Box"], {
        sx: {
          maxWidth: 1200,
          mx: "auto",
          px: 3
        },
        as: "form",
        onSubmit: handleSubmit,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reflexbox__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
          sx: {
            gap: 3
          },
          justifyContent: "space-between",
          flexDirection: {
            _: "column",
            1: "row",
            2: "row"
          },
          flexWrap: "wrap",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reflexbox__WEBPACK_IMPORTED_MODULE_2__["Box"], {
            width: {
              _: "100%"
            },
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_rebass_forms__WEBPACK_IMPORTED_MODULE_3__["Input"], {
              id: "message",
              name: "message",
              type: "text",
              placeholder: "Message",
              value: values.message,
              onChange: handleMessageChange
            }), submitted && !values.message && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
              id: "message-error",
              children: "Please enter a message"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reflexbox__WEBPACK_IMPORTED_MODULE_2__["Box"], {
            width: {
              _: "100%",
              1: "30%"
            },
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_rebass_forms__WEBPACK_IMPORTED_MODULE_3__["Input"], {
              id: "email",
              name: "email",
              type: "email",
              placeholder: "Email",
              value: values.email,
              onChange: handleEmailChange
            }), submitted && !values.email && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
              id: "email-address-error",
              children: "Please enter a valid email address"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reflexbox__WEBPACK_IMPORTED_MODULE_2__["Box"], {
            width: {
              _: "100%",
              1: "30%"
            },
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_rebass_forms__WEBPACK_IMPORTED_MODULE_3__["Input"], {
              id: "name",
              name: "fullName",
              type: "name",
              placeholder: "Full Name",
              value: values.fullName,
              onChange: handleFullNameChange
            }), submitted && !values.fullName && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
              id: "fullname-error",
              children: "Please enter your full name"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reflexbox__WEBPACK_IMPORTED_MODULE_2__["Box"], {
            width: {
              _: "100%",
              1: "30%"
            },
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(rebass__WEBPACK_IMPORTED_MODULE_4__["Button"], {
              className: "send-button",
              children: "Send"
            })
          })]
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reflexbox__WEBPACK_IMPORTED_MODULE_2__["Box"], {
        sx: {
          maxWidth: 1200,
          mx: "auto",
          mt: 30,
          color: "#fff"
        },
        className: "phone-email-container",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reflexbox__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
          sx: {
            m: 3,
            marginBottom: 300
          },
          alignItems: "center",
          justifyContent: "center",
          flexDirection: {
            _: "column",
            1: "row",
            2: "row",
            3: "row"
          },
          flexWrap: "wrap",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reflexbox__WEBPACK_IMPORTED_MODULE_2__["Box"], {
            width: {
              _: "100%",
              1: "5%",
              2: "5%"
            },
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
              children: "Phone"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reflexbox__WEBPACK_IMPORTED_MODULE_2__["Box"], {
            width: {
              _: "100%",
              1: "5%",
              2: "5%"
            },
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
              icon: _fortawesome_free_solid_svg_icons_faAddressBook__WEBPACK_IMPORTED_MODULE_7__["faAddressBook"]
            }), ":"]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reflexbox__WEBPACK_IMPORTED_MODULE_2__["Box"], {
            width: {
              _: "100%",
              1: "90%",
              2: "90%"
            },
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
              href: "tel:+1-615-414-3464",
              children: "615-414-3464"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reflexbox__WEBPACK_IMPORTED_MODULE_2__["Box"], {
            width: {
              _: "100%",
              1: "5%",
              2: "5%"
            },
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
              children: "Email"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reflexbox__WEBPACK_IMPORTED_MODULE_2__["Box"], {
            width: {
              _: "100%",
              1: "5%",
              2: "5%"
            },
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
              icon: _fortawesome_free_solid_svg_icons_faEnvelope__WEBPACK_IMPORTED_MODULE_8__["faEnvelope"]
            }), ":"]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reflexbox__WEBPACK_IMPORTED_MODULE_2__["Box"], {
            width: {
              _: "100%",
              1: "90%",
              2: "90%"
            },
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
              href: "https://mail.google.com/mail/?view=cm&fs=1&to=nicholasjperry1@gmail.com",
              children: "nicholasjperry1@gmail.com"
            })
          })]
        })
      })]
    })
  });
}

const ContactStyled = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default.a.div`
    .headings {
        text-align: center;
        margin-bottom: 40px;
    }

    #message {
        height: 150px;
        padding-bottom: 120px;
        border: 1px;
        box-shadow: 0 0 10px rgba(0,0,0, 0.5);
        background-color: #fff;
    }

    #message-error {
        color: #d47fff;
    }
    
    #email {
        padding-bottom: 10px;
        border: 1px;
        box-shadow: 0 0 10px rgba(0,0,0, 0.5);
        background-color: #fff;
    }

    #email-address-error {
        color: #d47fff;
    }
    
    #name {
        padding-bottom: 10px;
        border: 1px;
        box-shadow: 0 0 10px rgba(0,0,0, 0.5);
        background-color: #fff;
    }

    #fullname-error {
        color: #d47fff;
    }

    .send-button{
        width: 100%;
        padding: 10px;
        padding-bottom: 10px;
        box-shadow: 0 0 10px rgba(0,0,0, 0.2);
        cursor: pointer;
        background-color: #7fffd4;
        color: black;
        border-radius: 10px;
        font-family: 'Nova Mono', monospace;
    }
    .phone-email-container {
        p {
            color: #7fffd4;
        }

        a {
            color: #fff;
        }
    }
`;
/* harmony default export */ __webpack_exports__["default"] = (ContactForm);

/***/ }),

/***/ "AYDo":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons/faAddressBook");

/***/ }),

/***/ "EQ3K":
/***/ (function(module, exports) {

module.exports = require("reflexbox");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "RilL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wmQq");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_1__);



const HeaderMotion = ({
  children
}) => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
    animate: {
      y: [-75, 0]
    },
    transition: {
      duration: 0.5
    },
    children: children
  });
};

/* harmony default export */ __webpack_exports__["a"] = (HeaderMotion);

/***/ }),

/***/ "UlNW":
/***/ (function(module, exports) {

module.exports = require("@emotion/styled");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "j6uC":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons/faEnvelope");

/***/ }),

/***/ "q8hb":
/***/ (function(module, exports) {

module.exports = require("@rebass/forms");

/***/ }),

/***/ "uhWA":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "wmQq":
/***/ (function(module, exports) {

module.exports = require("framer-motion");

/***/ })

/******/ });