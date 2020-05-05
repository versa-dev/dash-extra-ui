webpackHotUpdatedash_extra_ui_components("main",{

/***/ "./src/lib/components/PDFViewer/PDFViewerComponent.react.js":
/*!******************************************************************!*\
  !*** ./src/lib/components/PDFViewer/PDFViewerComponent.react.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PDFViewerComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pdf_viewer_reactjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pdf-viewer-reactjs */ "./node_modules/pdf-viewer-reactjs/dist/pdf-viewer-reactjs.js");
/* harmony import */ var pdf_viewer_reactjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pdf_viewer_reactjs__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




/**
 * PDF Viewer component with controls
 * Page navigation
 * Zoom
 * Rotation
 */

var PDFViewerComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(PDFViewerComponent, _Component);

  function PDFViewerComponent(props) {
    var _this;

    _classCallCheck(this, PDFViewerComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PDFViewerComponent).call(this, props));
    _this.state = {
      value: props.value
    };
    return _this;
  }

  _createClass(PDFViewerComponent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          url = _this$props.url,
          base64 = _this$props.base64,
          rest = _objectWithoutProperties(_this$props, ["url", "base64"]);

      var document = {};

      if (url) {
        document.url = url;
      }

      if (base64) {
        document.base64 = base64;
      }

      console.log('document', document);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(pdf_viewer_reactjs__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({
        document: document
      }, rest));
    }
  }]);

  return PDFViewerComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


PDFViewerComponent.propTypes = {
  /**
   * The url of the PDF document
   */
  url: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   *  PDF file encoded in base64
   */
  base64: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The page that will be shown first on document load
   */
  page: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Scale factor relative to the component parent element
   */
  scale: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Scale factor to be increased or decreased on Zoom-in or zoom-out
   */
  scaleStep: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Maximun scale factor for zoom-in
   */
  maxScale: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Minimum scale factor for zoom-in
   */
  minScale: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * CSS classes that will be setted for the component wrapper
   */
  css: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * By default navbar is displayed on bottom, but can be placed on top by passing this prop
   */
  navbarOnTop: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * By default zoom buttons are displayed, but can be hidden by passing this prop
   */
  hideZoom: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * By default rotation buttons are displayed, but can be hidden by passing this prop
   */
  hideRotation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * By default Right Click and Context Menu are enabled, but can be disabled by passing this prop
   */
  protectContent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
PDFViewerComponent.defaultProps = {
  url: undefined,
  base64: undefined,
  page: 1,
  scale: 1,
  scaleStep: .5,
  maxScale: 3,
  minScale: .5,
  css: '',
  navbarOnTop: false,
  hideZoom: false,
  hideRotation: false,
  protectContent: false
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvUERGVmlld2VyL1BERlZpZXdlckNvbXBvbmVudC5yZWFjdC5qcyJdLCJuYW1lcyI6WyJQREZWaWV3ZXJDb21wb25lbnQiLCJwcm9wcyIsInN0YXRlIiwidmFsdWUiLCJ1cmwiLCJiYXNlNjQiLCJyZXN0IiwiZG9jdW1lbnQiLCJjb25zb2xlIiwibG9nIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwicGFnZSIsIm51bWJlciIsInNjYWxlIiwic2NhbGVTdGVwIiwibWF4U2NhbGUiLCJtaW5TY2FsZSIsImNzcyIsIm5hdmJhck9uVG9wIiwiYm9vbCIsImhpZGVab29tIiwiaGlkZVJvdGF0aW9uIiwicHJvdGVjdENvbnRlbnQiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7O0lBTXFCQSxrQjs7Ozs7QUFDakIsOEJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw0RkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUFDQyxXQUFLLEVBQUVGLEtBQUssQ0FBQ0U7QUFBZCxLQUFiO0FBRmU7QUFHbEI7Ozs7NkJBRVE7QUFBQSx3QkFLRCxLQUFLRixLQUxKO0FBQUEsVUFFREcsR0FGQyxlQUVEQSxHQUZDO0FBQUEsVUFHREMsTUFIQyxlQUdEQSxNQUhDO0FBQUEsVUFJRUMsSUFKRjs7QUFPTCxVQUFNQyxRQUFRLEdBQUcsRUFBakI7O0FBRUEsVUFBSUgsR0FBSixFQUFTO0FBQ1BHLGdCQUFRLENBQUNILEdBQVQsR0FBZUEsR0FBZjtBQUNEOztBQUVELFVBQUlDLE1BQUosRUFBWTtBQUNWRSxnQkFBUSxDQUFDRixNQUFULEdBQWtCQSxNQUFsQjtBQUNEOztBQUVERyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCRixRQUF4QjtBQUNBLGFBQ0ksMkRBQUMseURBQUQ7QUFDSSxnQkFBUSxFQUFFQTtBQURkLFNBRVFELElBRlIsRUFESjtBQU1IOzs7O0VBOUIyQ0ksK0M7OztBQWlDaERWLGtCQUFrQixDQUFDVyxTQUFuQixHQUErQjtBQUMzQjs7O0FBR0FQLEtBQUcsRUFBRVEsaURBQVMsQ0FBQ0MsTUFKWTs7QUFNM0I7OztBQUdBUixRQUFNLEVBQUVPLGlEQUFTLENBQUNDLE1BVFM7O0FBVzNCOzs7QUFHQUMsTUFBSSxFQUFFRixpREFBUyxDQUFDRyxNQWRXOztBQWdCM0I7OztBQUdBQyxPQUFLLEVBQUVKLGlEQUFTLENBQUNHLE1BbkJVOztBQXFCM0I7OztBQUdBRSxXQUFTLEVBQUVMLGlEQUFTLENBQUNHLE1BeEJNOztBQTBCM0I7OztBQUdBRyxVQUFRLEVBQUVOLGlEQUFTLENBQUNHLE1BN0JPOztBQStCM0I7OztBQUdBSSxVQUFRLEVBQUVQLGlEQUFTLENBQUNHLE1BbENPOztBQW9DM0I7OztBQUdBSyxLQUFHLEVBQUVSLGlEQUFTLENBQUNDLE1BdkNZOztBQXlDM0I7OztBQUdBUSxhQUFXLEVBQUVULGlEQUFTLENBQUNVLElBNUNJOztBQThDM0I7OztBQUdBQyxVQUFRLEVBQUVYLGlEQUFTLENBQUNVLElBakRPOztBQW1EM0I7OztBQUdBRSxjQUFZLEVBQUVaLGlEQUFTLENBQUNVLElBdERHOztBQXdEM0I7OztBQUdBRyxnQkFBYyxFQUFFYixpREFBUyxDQUFDVTtBQTNEQyxDQUEvQjtBQThEQXRCLGtCQUFrQixDQUFDMEIsWUFBbkIsR0FBa0M7QUFDOUJ0QixLQUFHLEVBQUV1QixTQUR5QjtBQUU5QnRCLFFBQU0sRUFBRXNCLFNBRnNCO0FBRzlCYixNQUFJLEVBQUUsQ0FId0I7QUFJOUJFLE9BQUssRUFBRSxDQUp1QjtBQUs5QkMsV0FBUyxFQUFFLEVBTG1CO0FBTTlCQyxVQUFRLEVBQUUsQ0FOb0I7QUFPOUJDLFVBQVEsRUFBRSxFQVBvQjtBQVE5QkMsS0FBRyxFQUFFLEVBUnlCO0FBUzlCQyxhQUFXLEVBQUUsS0FUaUI7QUFVOUJFLFVBQVEsRUFBRSxLQVZvQjtBQVc5QkMsY0FBWSxFQUFFLEtBWGdCO0FBWTlCQyxnQkFBYyxFQUFFO0FBWmMsQ0FBbEMsQyIsImZpbGUiOiIzODQ3MGFjLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUERGVmlld2VyIGZyb20gJ3BkZi12aWV3ZXItcmVhY3RqcydcclxuXHJcbi8qKlxyXG4gKiBQREYgVmlld2VyIGNvbXBvbmVudCB3aXRoIGNvbnRyb2xzXHJcbiAqIFBhZ2UgbmF2aWdhdGlvblxyXG4gKiBab29tXHJcbiAqIFJvdGF0aW9uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQREZWaWV3ZXJDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt2YWx1ZTogcHJvcHMudmFsdWV9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgYmFzZTY0LFxyXG4gICAgICAgICAgICAuLi5yZXN0XHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGNvbnN0IGRvY3VtZW50ID0ge307XHJcblxyXG4gICAgICAgIGlmICh1cmwpIHtcclxuICAgICAgICAgIGRvY3VtZW50LnVybCA9IHVybDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChiYXNlNjQpIHtcclxuICAgICAgICAgIGRvY3VtZW50LmJhc2U2NCA9IGJhc2U2NDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkb2N1bWVudCcsIGRvY3VtZW50KVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxQREZWaWV3ZXJcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50PXtkb2N1bWVudH1cclxuICAgICAgICAgICAgICAgIHsuLi5yZXN0fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblBERlZpZXdlckNvbXBvbmVudC5wcm9wVHlwZXMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSB1cmwgb2YgdGhlIFBERiBkb2N1bWVudFxyXG4gICAgICovXHJcbiAgICB1cmw6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAgUERGIGZpbGUgZW5jb2RlZCBpbiBiYXNlNjRcclxuICAgICAqL1xyXG4gICAgYmFzZTY0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHBhZ2UgdGhhdCB3aWxsIGJlIHNob3duIGZpcnN0IG9uIGRvY3VtZW50IGxvYWRcclxuICAgICAqL1xyXG4gICAgcGFnZTogUHJvcFR5cGVzLm51bWJlcixcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNjYWxlIGZhY3RvciByZWxhdGl2ZSB0byB0aGUgY29tcG9uZW50IHBhcmVudCBlbGVtZW50XHJcbiAgICAgKi9cclxuICAgIHNjYWxlOiBQcm9wVHlwZXMubnVtYmVyLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2NhbGUgZmFjdG9yIHRvIGJlIGluY3JlYXNlZCBvciBkZWNyZWFzZWQgb24gWm9vbS1pbiBvciB6b29tLW91dFxyXG4gICAgICovXHJcbiAgICBzY2FsZVN0ZXA6IFByb3BUeXBlcy5udW1iZXIsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXhpbXVuIHNjYWxlIGZhY3RvciBmb3Igem9vbS1pblxyXG4gICAgICovXHJcbiAgICBtYXhTY2FsZTogUHJvcFR5cGVzLm51bWJlcixcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1pbmltdW0gc2NhbGUgZmFjdG9yIGZvciB6b29tLWluXHJcbiAgICAgKi9cclxuICAgIG1pblNjYWxlOiBQcm9wVHlwZXMubnVtYmVyLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ1NTIGNsYXNzZXMgdGhhdCB3aWxsIGJlIHNldHRlZCBmb3IgdGhlIGNvbXBvbmVudCB3cmFwcGVyXHJcbiAgICAgKi9cclxuICAgIGNzczogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEJ5IGRlZmF1bHQgbmF2YmFyIGlzIGRpc3BsYXllZCBvbiBib3R0b20sIGJ1dCBjYW4gYmUgcGxhY2VkIG9uIHRvcCBieSBwYXNzaW5nIHRoaXMgcHJvcFxyXG4gICAgICovXHJcbiAgICBuYXZiYXJPblRvcDogUHJvcFR5cGVzLmJvb2wsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBCeSBkZWZhdWx0IHpvb20gYnV0dG9ucyBhcmUgZGlzcGxheWVkLCBidXQgY2FuIGJlIGhpZGRlbiBieSBwYXNzaW5nIHRoaXMgcHJvcFxyXG4gICAgICovXHJcbiAgICBoaWRlWm9vbTogUHJvcFR5cGVzLmJvb2wsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBCeSBkZWZhdWx0IHJvdGF0aW9uIGJ1dHRvbnMgYXJlIGRpc3BsYXllZCwgYnV0IGNhbiBiZSBoaWRkZW4gYnkgcGFzc2luZyB0aGlzIHByb3BcclxuICAgICAqL1xyXG4gICAgaGlkZVJvdGF0aW9uOiBQcm9wVHlwZXMuYm9vbCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEJ5IGRlZmF1bHQgUmlnaHQgQ2xpY2sgYW5kIENvbnRleHQgTWVudSBhcmUgZW5hYmxlZCwgYnV0IGNhbiBiZSBkaXNhYmxlZCBieSBwYXNzaW5nIHRoaXMgcHJvcFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0Q29udGVudDogUHJvcFR5cGVzLmJvb2wsXHJcbn07XHJcblxyXG5QREZWaWV3ZXJDb21wb25lbnQuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgdXJsOiB1bmRlZmluZWQsXHJcbiAgICBiYXNlNjQ6IHVuZGVmaW5lZCxcclxuICAgIHBhZ2U6IDEsXHJcbiAgICBzY2FsZTogMSxcclxuICAgIHNjYWxlU3RlcDogLjUsXHJcbiAgICBtYXhTY2FsZTogMyxcclxuICAgIG1pblNjYWxlOiAuNSxcclxuICAgIGNzczogJycsXHJcbiAgICBuYXZiYXJPblRvcDogZmFsc2UsXHJcbiAgICBoaWRlWm9vbTogZmFsc2UsXHJcbiAgICBoaWRlUm90YXRpb246IGZhbHNlLFxyXG4gICAgcHJvdGVjdENvbnRlbnQ6IGZhbHNlLFxyXG59OyJdLCJzb3VyY2VSb290IjoiIn0=