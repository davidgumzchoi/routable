webpackHotUpdate("static\\development\\pages\\index.js",{

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
  timeValue = new Date(timeValue);
  var weeks = Math.floor(timeValue / (60 * 24 * 7));
  var days = Math.floor((timeValue - weeks * 60 * 24 * 7) / (60 * 24));
  var hours = Math.floor((timeValue - weeks * 60 * 24 * 7 - days * 24 * 60) / 60);
  var minutes = Math.floor(timeValue - weeks * 60 * 24 * 7 - (timeValue - days * 24 * 60) - hours * 60);
  var ret = '';

  if (days > 0) {
    if (ret !== '') {
      ret += ' ';
    }

    return ret += days + ' days ';
  }

  if (hours > 0) {
    if (ret !== '') {
      ret += ' ';
    }

    return ret += hours + ' hours ';
  }

  if (minutes > 0 && includeMinutes) {
    if (ret !== '') {
      ret += ' ';
    }

    return ret += minutes + ' minutes ';
  }

  return ret + 'ago';
}

/***/ })

})
//# sourceMappingURL=index.js.3eb2dc125d4543a97c52.hot-update.js.map