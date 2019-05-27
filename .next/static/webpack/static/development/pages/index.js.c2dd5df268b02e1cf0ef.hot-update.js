webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./lib/helpers.js":
/*!************************!*\
  !*** ./lib/helpers.js ***!
  \************************/
/*! exports provided: formatDate, timeAgo, formatTimeAgo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeAgo", function() { return timeAgo; });
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
function timeAgo(date) {
  var NOW = new Date();
  var times = [['second', 1], ['minute', 60], ['hour', 3600], ['day', 86400], ['week', 604800], ['month', 2592000], ['year', 31536000]];
  var diff = Math.round((NOW - date) / 1000);

  for (var t = 0; t < times.length; t++) {
    if (diff < times[t][1]) {
      if (t == 0) {
        return 'Just now';
      } else {
        diff = Math.round(diff / times[t - 1][1]);
        return diff + ' ' + times[t - 1][0] + (diff == 1 ? ' ago' : 's ago');
      }
    }
  }
}
function formatTimeAgo(timeValue) {
  timeValue = new Date(timeValue);
  timeValue = timeValue.getTime();
  var years = Math.floor(timeValue / 31536000);
  var months = Math.floor(timeValue / 2592000);
  var weeks = Math.floor(timeValue / 604800);
  var days = Math.floor(timeValue / 86400);
  var hours = Math.floor(timeValue / 3600);
  var minutes = Math.floor(timeValue / 60);
  var ret = '';

  if (years > 0) {
    ret = years + ' years ';
  }

  if (months > 0) {
    ret = months + ' months ';
  }

  if (weeks > 0) {
    ret = weeks + ' weeks ';
  }

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

  if (minutes > 0) {
    if (ret !== '') {
      ret += ' ';
    }

    return ret += minutes + ' minutes ';
  }

  return ret + 'ago';
}

/***/ })

})
//# sourceMappingURL=index.js.c2dd5df268b02e1cf0ef.hot-update.js.map