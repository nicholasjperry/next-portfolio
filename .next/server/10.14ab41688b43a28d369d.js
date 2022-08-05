exports.ids = [10];
exports.modules = {

/***/ "wvDq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AboutTextAnimation; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wmQq");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_1__);



function AboutTextAnimation() {
  const line1 = "A hard-working individual with an unmatched ability to solve problems, both cooperatively and individually. ";
  const line2 = "I am seeking a position where I can illuminate these assets by virtue of synthesizing and deploying ";
  const line3 = "practical, user-friendly, and efficient software applications.";
  const line = {
    hidden: {
      opacity: 1
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03
      }
    }
  };
  const letter = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].p, {
    variants: line,
    initial: "hidden",
    animate: "visible",
    children: [line1.split("").map((char, index) => {
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].span, {
        variants: letter,
        children: char
      }, char + index);
    }), line2.split("").map((char, index) => {
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].span, {
        variants: letter,
        children: char
      }, char + index);
    }), line3.split("").map((char, index) => {
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].span, {
        variants: letter,
        children: char
      }, char + index);
    })]
  });
}

/***/ })

};;