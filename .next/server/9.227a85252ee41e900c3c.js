exports.ids = [9];
exports.modules = {

/***/ "Cp1X":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const HeaderContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
/* harmony default export */ __webpack_exports__["a"] = (HeaderContext);

/***/ }),

/***/ "frR5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_HeaderContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Cp1X");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




function ContextWrapper({
  children,
  navigation
}) {
  const {
    0: menuItems
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(navigation);
  const {
    0: color
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('true');
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_contexts_HeaderContext__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].Provider, {
    value: {
      menuItems,
      color
    },
    children: children
  });
}

/* harmony default export */ __webpack_exports__["default"] = (ContextWrapper);

/***/ })

};;