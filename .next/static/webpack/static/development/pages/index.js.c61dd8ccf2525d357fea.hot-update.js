webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./styles/WrapperStyles.js":
/*!*********************************!*\
  !*** ./styles/WrapperStyles.js ***!
  \*********************************/
/*! exports provided: device, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "device", function() { return device; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var size = {
  tablet: '768px',
  laptop: '1024px',
  desktop: '2560px'
};
var device = {
  tablet: "(min-width: ".concat(size.tablet, ")"),
  laptop: "(min-width: ".concat(size.laptop, ")"),
  desktop: "(min-width: ".concat(size.desktop, ")")
};
var WrapperStyles = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "WrapperStyles",
  componentId: "yrve4z-0"
})(["display:grid;grid-template-columns:20rem 40remrem;grid-gap:2rem;@media ", "{grid-template-columns:20rem 60rem;}@media ", "{grid-template-columns:20rem 118rem;}@media ", "{grid-template-columns:20rem 100%;}"], device.tablet, device.laptop, device.desktop);
/* harmony default export */ __webpack_exports__["default"] = (WrapperStyles);

/***/ })

})
//# sourceMappingURL=index.js.c61dd8ccf2525d357fea.hot-update.js.map