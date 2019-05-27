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
/* harmony import */ var _styles_IssueStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../styles/IssueStyles */ "./styles/IssueStyles.js");
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../lib/helpers */ "./lib/helpers.js");
var _jsxFileName = "C:\\Users\\dcchoi\\Documents\\gumz\\github\\routable\\components\\Issue.js";




var Issue = function Issue(props) {
  var _props$issue = props.issue,
      user = _props$issue.user,
      title = _props$issue.title,
      created_at = _props$issue.created_at,
      updated_at = _props$issue.updated_at; // avatar from user obj
  // lastUpdated in text form 2 hours ago or 3 days ago

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_IssueStyles__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: user.avatar_url,
    height: "40",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "issue-details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(created_at)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_2__["formatTimeAgo"])(updated_at))));
};

/* harmony default export */ __webpack_exports__["default"] = (Issue);

/***/ }),

/***/ "./lib/helpers.js":
/*!************************!*\
  !*** ./lib/helpers.js ***!
  \************************/
/*! exports provided: formatDate, formatTimeAgo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTimeAgo", function() { return formatTimeAgo; });
function formatDate(dateString) {
  var date = new Date(dateString);
  var dd = date.getDate() + 1;
  var mm = date.getMonth() + 1;
  var yyyy = date.getFullYear();

  if (dd < 10) {
    dd = '0' + dd;
  }

  if (mm < 10) {
    mm = '0' + mm;
  }

  return "".concat(mm, "/").concat(dd, "/").concat(yyyy);
}
function formatTimeAgo(timeValue) {
  var includeMinutes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var weeks = Math.floor(timeValue / (60 * 24 * 7));
  var days = Math.floor((timeValue - weeks * 60 * 24 * 7) / (60 * 24));
  var hours = Math.floor((timeValue - weeks * 60 * 24 * 7 - days * 24 * 60) / 60);
  var minutes = Math.floor(timeValue - weeks * 60 * 24 * 7 - (timeValue - days * 24 * 60) - hours * 60);
  var ret = '';

  if (weeks > 0) {
    ret = weeks + 'weeks';
  }

  if (days > 0) {
    if (ret !== '') {
      ret += ' ';
    }

    ret += days + 'days';
  }

  if (hours > 0) {
    if (ret !== '') {
      ret += ' ';
    }

    ret += hours + 'hours';
  }

  if (minutes > 0 && includeMinutes) {
    if (ret !== '') {
      ret += ' ';
    }

    ret += minutes + 'minutes';
  }

  return ret + ' ago';
}

/***/ })

})
//# sourceMappingURL=index.js.9e35ac0673fceb3f53bd.hot-update.js.map