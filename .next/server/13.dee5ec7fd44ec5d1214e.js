exports.ids = [13];
exports.modules = {

/***/ "8T5P":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reflexbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("EQ3K");
/* harmony import */ var reflexbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reflexbox__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Aiso");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("wmQq");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("p1tF");
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__);







const TechnologiesUsed = ({
  technologies
}) => {
  const {
    ref,
    inView
  } = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__["useInView"])();
  const animation = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__["useAnimation"])();
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    if (inView) {
      animation.start({
        opacity: 1
      }, {
        duration: 0.5
      });
    }

    if (!inView) {
      animation.start({
        opacity: 0
      });
    }
  }, [inView]);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
    ref: ref,
    animate: animation,
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reflexbox__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      sx: {
        maxWidth: 1600,
        mx: "auto",
        px: 3
      },
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reflexbox__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: {
          _: "column",
          1: "column",
          2: "row",
          3: "row",
          4: "row"
        },
        mt: 60,
        sx: {
          gap: 80
        },
        children: technologies && technologies.map(technology => {
          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reflexbox__WEBPACK_IMPORTED_MODULE_1__["Box"], {
            width: {
              _: "20%"
            },
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
              src: technology.avatar.name,
              width: 270,
              height: 175
            })
          }, technology.id);
        })
      })
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (TechnologiesUsed);

/***/ })

};;