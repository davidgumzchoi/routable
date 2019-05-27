webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Issue.js":
/*!*****************************!*\
  !*** ./components/Issue.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\dcchoi\\Documents\\gumz\\github\\routable\\components\\Issue.js";


var Issue = function Issue(props) {
  var _props$issue = props.issue,
      user = _props$issue.user,
      title = _props$issue.title,
      created_at = _props$issue.created_at,
      updated_at = _props$issue.updated_at; // avatar from user obj
  // lastUpdated in text form 2 hours ago or 3 days ago

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: user.avatar_url,
    height: "40",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, created_at), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, updated_at));
};

/* harmony default export */ __webpack_exports__["default"] = (Issue);

/***/ })

})
//# sourceMappingURL=index.js.74f42d464db50ae3724a.hot-update.js.map