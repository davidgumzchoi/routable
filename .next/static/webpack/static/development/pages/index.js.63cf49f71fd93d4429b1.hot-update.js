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
  timeValue = (new Date() - new Date(timeValue)) / 1000;
  var years = Math.floor(timeValue / 31536000);
  var months = Math.floor(timeValue / 2592000);
  var days = Math.floor(timeValue / 86400);
  var hours = Math.floor(timeValue / 3600);
  var minutes = Math.floor(timeValue / 60);
  var ret = '';

  if (years > 0) {
    return "".concat(years, " year").concat(years === 1 ? '' : 's', " ago");
  }

  if (months > 0) {
    if (ret !== '') {
      ret += ' ';
    }

    return "".concat(months, " month").concat(months === 1 ? '' : 's', " ago");
  }

  if (days > 0) {
    if (ret !== '') {
      ret += ' ';
    }

    return "".concat(days, " day").concat(days === 1 ? '' : 's', " ago");
  }

  if (hours > 0) {
    if (ret !== '') {
      ret += ' ';
    }

    return "".concat(hours, " hour").concat(hours === 1 ? '' : 's', " ago");
  }

  if (minutes > 0) {
    if (ret !== '') {
      ret += ' ';
    }

    return "".concat(minutes, " min").concat(minutes === 1 ? '' : 's', " ago");
  }

  return ret + ' ago';
}

/***/ })

})
//# sourceMappingURL=index.js.63cf49f71fd93d4429b1.hot-update.js.map