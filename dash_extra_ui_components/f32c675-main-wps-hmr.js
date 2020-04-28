webpackHotUpdatedash_extra_ui_components("main",{

/***/ "./src/lib/components/Steps/StepsComponent.js":
/*!****************************************************!*\
  !*** ./src/lib/components/Steps/StepsComponent.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StepsComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Steps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Steps */ "./src/lib/components/Steps/Steps.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _StepsComponent_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StepsComponent.css */ "./src/lib/components/Steps/StepsComponent.css");
/* harmony import */ var _StepsComponent_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_StepsComponent_css__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





/**
 * WrapperComponent on the Steps component
 * Adds callback
 */

var StepsComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(StepsComponent, _Component);

  function StepsComponent() {
    _classCallCheck(this, StepsComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(StepsComponent).apply(this, arguments));
  }

  _createClass(StepsComponent, [{
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Steps__WEBPACK_IMPORTED_MODULE_1__["Steps"], {
        model: this.props.model,
        activeIndex: this.props.activeIndex,
        onSelect: function onSelect(e) {
          return _this.props.setProps({
            activeIndex: e.index
          });
        },
        readOnly: false,
        style: this.props.style,
        className: this.props.className,
        id: this.props.id
      });
    }
  }]);

  return StepsComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


StepsComponent.defaultProps = {
  id: null,
  model: null,
  activeIndex: 0,
  readOnly: true,
  style: null,
  className: null,
  onSelect: null
};
StepsComponent.propTypes = {
  /**
   * Unique identifier of the element.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * An array of menuitems.
   */
  model: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,

  /**
   * Index of the active item.
   */
  activeIndex: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,

  /**
   * 	Whether the items are clickable or not.
   */
  readOnly: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Inline style of the component.
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * Style class of the component.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvU3RlcHMvU3RlcHNDb21wb25lbnQuanMiXSwibmFtZXMiOlsiU3RlcHNDb21wb25lbnQiLCJwcm9wcyIsIm1vZGVsIiwiYWN0aXZlSW5kZXgiLCJlIiwic2V0UHJvcHMiLCJpbmRleCIsInN0eWxlIiwiY2xhc3NOYW1lIiwiaWQiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJyZWFkT25seSIsIm9uU2VsZWN0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYXJyYXkiLCJpc1JlcXVpcmVkIiwibnVtYmVyIiwiYm9vbCIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7Ozs7O0lBSXFCQSxjOzs7Ozs7Ozs7Ozs7OzZCQUNSO0FBQUE7O0FBQ0wsYUFDSSwyREFBQyw0Q0FBRDtBQUNJLGFBQUssRUFBRSxLQUFLQyxLQUFMLENBQVdDLEtBRHRCO0FBRUksbUJBQVcsRUFBRSxLQUFLRCxLQUFMLENBQVdFLFdBRjVCO0FBR0ksZ0JBQVEsRUFBRSxrQkFBQUMsQ0FBQztBQUFBLGlCQUFJLEtBQUksQ0FBQ0gsS0FBTCxDQUFXSSxRQUFYLENBQW9CO0FBQUNGLHVCQUFXLEVBQUVDLENBQUMsQ0FBQ0U7QUFBaEIsV0FBcEIsQ0FBSjtBQUFBLFNBSGY7QUFJSSxnQkFBUSxFQUFFLEtBSmQ7QUFLSSxhQUFLLEVBQUUsS0FBS0wsS0FBTCxDQUFXTSxLQUx0QjtBQU1JLGlCQUFTLEVBQUUsS0FBS04sS0FBTCxDQUFXTyxTQU4xQjtBQU9JLFVBQUUsRUFBRSxLQUFLUCxLQUFMLENBQVdRO0FBUG5CLFFBREo7QUFXSDs7OztFQWJ1Q0MsK0M7OztBQWdCNUNWLGNBQWMsQ0FBQ1csWUFBZixHQUE4QjtBQUMxQkYsSUFBRSxFQUFFLElBRHNCO0FBRTFCUCxPQUFLLEVBQUUsSUFGbUI7QUFHMUJDLGFBQVcsRUFBRSxDQUhhO0FBSTFCUyxVQUFRLEVBQUUsSUFKZ0I7QUFLMUJMLE9BQUssRUFBRSxJQUxtQjtBQU0xQkMsV0FBUyxFQUFFLElBTmU7QUFPMUJLLFVBQVEsRUFBRTtBQVBnQixDQUE5QjtBQVVBYixjQUFjLENBQUNjLFNBQWYsR0FBMkI7QUFDdkI7OztBQUdBTCxJQUFFLEVBQUVNLGlEQUFTLENBQUNDLE1BSlM7O0FBS3ZCOzs7QUFHQWQsT0FBSyxFQUFFYSxpREFBUyxDQUFDRSxLQUFWLENBQWdCQyxVQVJBOztBQVN2Qjs7O0FBR0FmLGFBQVcsRUFBRVksaURBQVMsQ0FBQ0ksTUFaQTs7QUFhdkI7OztBQUdBUCxVQUFRLEVBQUVHLGlEQUFTLENBQUNLLElBaEJHOztBQWlCdkI7OztBQUdBYixPQUFLLEVBQUVRLGlEQUFTLENBQUNNLE1BcEJNOztBQXFCdkI7OztBQUdBYixXQUFTLEVBQUVPLGlEQUFTLENBQUNDO0FBeEJFLENBQTNCLEMiLCJmaWxlIjoiZjMyYzY3NS1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U3RlcHN9IGZyb20gJy4vU3RlcHMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCAnLi9TdGVwc0NvbXBvbmVudC5jc3MnO1xuXG5cbi8qKlxuICogV3JhcHBlckNvbXBvbmVudCBvbiB0aGUgU3RlcHMgY29tcG9uZW50XG4gKiBBZGRzIGNhbGxiYWNrXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0ZXBzQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8U3RlcHNcbiAgICAgICAgICAgICAgICBtb2RlbD17dGhpcy5wcm9wcy5tb2RlbH1cbiAgICAgICAgICAgICAgICBhY3RpdmVJbmRleD17dGhpcy5wcm9wcy5hY3RpdmVJbmRleH1cbiAgICAgICAgICAgICAgICBvblNlbGVjdD17ZSA9PiB0aGlzLnByb3BzLnNldFByb3BzKHthY3RpdmVJbmRleDogZS5pbmRleH0pfVxuICAgICAgICAgICAgICAgIHJlYWRPbmx5PXtmYWxzZX1cbiAgICAgICAgICAgICAgICBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgIGlkPXt0aGlzLnByb3BzLmlkfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblN0ZXBzQ29tcG9uZW50LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBpZDogbnVsbCxcbiAgICBtb2RlbDogbnVsbCxcbiAgICBhY3RpdmVJbmRleDogMCxcbiAgICByZWFkT25seTogdHJ1ZSxcbiAgICBzdHlsZTogbnVsbCxcbiAgICBjbGFzc05hbWU6IG51bGwsXG4gICAgb25TZWxlY3Q6IG51bGwsXG59O1xuXG5TdGVwc0NvbXBvbmVudC5wcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogVW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIGVsZW1lbnQuXG4gICAgICovXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2YgbWVudWl0ZW1zLlxuICAgICAqL1xuICAgIG1vZGVsOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgICAvKipcbiAgICAgKiBJbmRleCBvZiB0aGUgYWN0aXZlIGl0ZW0uXG4gICAgICovXG4gICAgYWN0aXZlSW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgLyoqXG4gICAgICogXHRXaGV0aGVyIHRoZSBpdGVtcyBhcmUgY2xpY2thYmxlIG9yIG5vdC5cbiAgICAgKi9cbiAgICByZWFkT25seTogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICogSW5saW5lIHN0eWxlIG9mIHRoZSBjb21wb25lbnQuXG4gICAgICovXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgLyoqXG4gICAgICogU3R5bGUgY2xhc3Mgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==