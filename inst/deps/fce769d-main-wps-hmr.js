webpackHotUpdateextra_dash_ui_components("main",{

/***/ "./src/lib/components/Inputtext/InputText.js":
/*!***************************************************!*\
  !*** ./src/lib/components/Inputtext/InputText.js ***!
  \***************************************************/
/*! exports provided: InputText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputText", function() { return InputText; });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_DomHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/DomHandler */ "./src/lib/utils/DomHandler.js");
/* harmony import */ var _utils_KeyFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/KeyFilter */ "./src/lib/utils/KeyFilter.js");
/* harmony import */ var _utils_ObjectUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/ObjectUtils */ "./src/lib/utils/ObjectUtils.js");
/* harmony import */ var _utils_ToolTip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/ToolTip */ "./src/lib/utils/ToolTip.js");
/* harmony import */ var _InputText_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./InputText.css */ "./src/lib/components/Inputtext/InputText.css");
/* harmony import */ var _InputText_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_InputText_css__WEBPACK_IMPORTED_MODULE_7__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









/**
 * InputText Bar.
 * displays on top of the search box component if filter is set to true
 */

var InputText =
/*#__PURE__*/
function (_Component) {
  _inherits(InputText, _Component);

  function InputText(props) {
    var _this;

    _classCallCheck(this, InputText);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InputText).call(this, props));
    _this.onInput = _this.onInput.bind(_assertThisInitialized(_this));
    _this.onKeyPress = _this.onKeyPress.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(InputText, [{
    key: "onKeyPress",
    value: function onKeyPress(event) {
      if (this.props.onKeyPress) {
        this.props.onKeyPress(event);
      }

      if (this.props.keyfilter) {
        _utils_KeyFilter__WEBPACK_IMPORTED_MODULE_4__["default"].onKeyPress(event, this.props.keyfilter, this.props.validateOnly);
      }
    }
  }, {
    key: "onInput",
    value: function onInput(event) {
      var validatePattern = true;

      if (this.props.keyfilter && this.props.validateOnly) {
        validatePattern = _utils_KeyFilter__WEBPACK_IMPORTED_MODULE_4__["default"].validate(event, this.props.keyfilter);
      }

      if (this.props.onInput) {
        this.props.onInput(event, validatePattern);
      }

      if (!this.props.onChange) {
        if (event.target.value.length > 0) _utils_DomHandler__WEBPACK_IMPORTED_MODULE_3__["default"].addClass(event.target, 'p-filled');else _utils_DomHandler__WEBPACK_IMPORTED_MODULE_3__["default"].removeClass(event.target, 'p-filled');
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.tooltip) {
        this.renderTooltip();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.tooltip !== this.props.tooltip) {
        if (this.tooltip) this.tooltip.updateContent(this.props.tooltip);else this.renderTooltip();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.tooltip) {
        this.tooltip.destroy();
        this.tooltip = null;
      }
    }
  }, {
    key: "renderTooltip",
    value: function renderTooltip() {
      this.tooltip = new _utils_ToolTip__WEBPACK_IMPORTED_MODULE_6__["default"]({
        target: this.element,
        content: this.props.tooltip,
        options: this.props.tooltipOptions
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var className = classnames__WEBPACK_IMPORTED_MODULE_0___default()('p-inputtext p-component', this.props.className, {
        'p-disabled': this.props.disabled,
        'p-filled': this.props.value != null && this.props.value.toString().length > 0 || this.props.defaultValue != null && this.props.defaultValue.toString().length > 0
      });
      var inputProps = _utils_ObjectUtils__WEBPACK_IMPORTED_MODULE_5__["default"].findDiffKeys(this.props, InputText.defaultProps);
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", _extends({
        ref: function ref(el) {
          return _this2.element = el;
        }
      }, inputProps, {
        className: className,
        onInput: this.onInput,
        onKeyPress: this.onKeyPress
      }));
    }
  }]);

  return InputText;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);
InputText.defaultProps = {
  onInput: null,
  onKeyPress: null,
  keyfilter: null,
  validateOnly: false,
  tooltip: null,
  tooltipOptions: null
};
InputText.propTypes = {
  /**
   * Callback to invoke when input is in focus changes.
   */
  onInput: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /**
   * Callback to invoke when value of input changes.
   */
  onKeyPress: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /**
   * Filter value
   */
  keyfilter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,

  /**
   * Boolean
   */
  validateOnly: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Tooltip text
   */
  tooltip: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Tooltip options. An object
   */
  tooltipOptions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvSW5wdXR0ZXh0L0lucHV0VGV4dC5qcyJdLCJuYW1lcyI6WyJJbnB1dFRleHQiLCJwcm9wcyIsIm9uSW5wdXQiLCJiaW5kIiwib25LZXlQcmVzcyIsImV2ZW50Iiwia2V5ZmlsdGVyIiwiS2V5RmlsdGVyIiwidmFsaWRhdGVPbmx5IiwidmFsaWRhdGVQYXR0ZXJuIiwidmFsaWRhdGUiLCJvbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwibGVuZ3RoIiwiRG9tSGFuZGxlciIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJ0b29sdGlwIiwicmVuZGVyVG9vbHRpcCIsInByZXZQcm9wcyIsInVwZGF0ZUNvbnRlbnQiLCJkZXN0cm95IiwiVG9vbHRpcCIsImVsZW1lbnQiLCJjb250ZW50Iiwib3B0aW9ucyIsInRvb2x0aXBPcHRpb25zIiwiY2xhc3NOYW1lIiwiY2xhc3NOYW1lcyIsImRpc2FibGVkIiwidG9TdHJpbmciLCJkZWZhdWx0VmFsdWUiLCJpbnB1dFByb3BzIiwiT2JqZWN0VXRpbHMiLCJmaW5kRGlmZktleXMiLCJkZWZhdWx0UHJvcHMiLCJlbCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJhbnkiLCJib29sIiwic3RyaW5nIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFJTyxJQUFNQSxTQUFiO0FBQUE7QUFBQTtBQUFBOztBQUVJLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsbUZBQU1BLEtBQU47QUFDQSxVQUFLQyxPQUFMLEdBQWUsTUFBS0EsT0FBTCxDQUFhQyxJQUFiLCtCQUFmO0FBQ0EsVUFBS0MsVUFBTCxHQUFrQixNQUFL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QixHQUFtQ2pCLE1BQW5DLEdBQTRDO0FBTnhELE9BSHdCLENBQTVCO0FBYUEsVUFBSW1CLFVBQVUsR0FBR0MsMERBQVcsQ0FBQ0MsWUFBWixDQUNiLEtBQUtsQyxLQURRLEVBRWJELFNBQVMsQ0FBQ29DLFlBRkcsQ0FBakI7QUFLQSxhQUNJO0FBQ0ksV0FBRyxFQUFFLGFBQUFDLEVBQUU7QUFBQSxpQkFBSyxNQUFJLENBQUNiLE9BQUwsR0FBZWEsRUFBcEI7QUFBQTtBQURYLFNBRVFKLFVBRlI7QUFHSSxpQkFBUyxFQUFFTCxTQUhmO0FBSUksZUFBTyxFQUFFLEtBQUsxQixPQUpsQjtBQUtJLGtCQUFVLEVBQUUsS0FBS0U7QUFMckIsU0FESjtBQVNIO0FBL0ZMOztBQUFBO0FBQUEsRUFBK0JrQywrQ0FBL0I7QUFrR0F0QyxTQUFTLENBQUNvQyxZQUFWLEdBQXlCO0FBQ3JCbEMsU0FBTyxFQUFFLElBRFk7QUFFckJFLFlBQVUsRUFBRSxJQUZTO0FBR3JCRSxXQUFTLEVBQUUsSUFIVTtBQUlyQkUsY0FBWSxFQUFFLEtBSk87QUFLckJVLFNBQU8sRUFBRSxJQUxZO0FBTXJCUyxnQkFBYyxFQUFFO0FBTkssQ0FBekI7QUFTQTNCLFNBQVMsQ0FBQ3VDLFNBQVYsR0FBc0I7QUFDbEI7OztBQUdBckMsU0FBTyxFQUFFc0MsaURBQVMsQ0FBQ0MsSUFKRDs7QUFLbEI7OztBQUdBckMsWUFBVSxFQUFFb0MsaURBQVMsQ0FBQ0MsSUFSSjs7QUFTbEI7OztBQUdBbkMsV0FBUyxFQUFFa0MsaURBQVMsQ0FBQ0UsR0FaSDs7QUFhbEI7OztBQUdBbEMsY0FBWSxFQUFFZ0MsaURBQVMsQ0FBQ0csSUFoQk47O0FBaUJsQjs7O0FBR0F6QixTQUFPLEVBQUVzQixpREFBUyxDQUFDSSxNQXBCRDs7QUFxQmxCOzs7QUFHQWpCLGdCQUFjLEVBQUVhLGlEQUFTLENBQUNLO0FBeEJSLENBQXRCLEMiLCJmaWxlIjoiZmNlNzY5ZC1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IERvbUhhbmRsZXIgZnJvbSAnLi4vLi4vdXRpbHMvRG9tSGFuZGxlcic7XG5pbXBvcnQgS2V5RmlsdGVyIGZyb20gJy4uLy4uL3V0aWxzL0tleUZpbHRlcic7XG5pbXBvcnQgT2JqZWN0VXRpbHMgZnJvbSAnLi4vLi4vdXRpbHMvT2JqZWN0VXRpbHMnO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi4vLi4vdXRpbHMvVG9vbFRpcCc7XG5pbXBvcnQgJy4vSW5wdXRUZXh0LmNzcyc7XG5cbi8qKlxuICogSW5wdXRUZXh0IEJhci5cbiAqIGRpc3BsYXlzIG9uIHRvcCBvZiB0aGUgc2VhcmNoIGJveCBjb21wb25lbnQgaWYgZmlsdGVyIGlzIHNldCB0byB0cnVlXG4gKi9cbmV4cG9ydCBjbGFzcyBJbnB1dFRleHQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLm9uSW5wdXQgPSB0aGlzLm9uSW5wdXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbktleVByZXNzID0gdGhpcy5vbktleVByZXNzLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgb25LZXlQcmVzcyhldmVudCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbktleVByZXNzKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uS2V5UHJlc3MoZXZlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMua2V5ZmlsdGVyKSB7XG4gICAgICAgICAgICBLZXlGaWx0ZXIub25LZXlQcmVzcyhcbiAgICAgICAgICAgICAgICBldmVudCxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmtleWZpbHRlcixcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnZhbGlkYXRlT25seVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uSW5wdXQoZXZlbnQpIHtcbiAgICAgICAgbGV0IHZhbGlkYXRlUGF0dGVybiA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmtleWZpbHRlciAmJiB0aGlzLnByb3BzLnZhbGlkYXRlT25seSkge1xuICAgICAgICAgICAgdmFsaWRhdGVQYXR0ZXJuID0gS2V5RmlsdGVyLnZhbGlkYXRlKGV2ZW50LCB0aGlzLnByb3BzLmtleWZpbHRlcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbklucHV0KSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uSW5wdXQoZXZlbnQsIHZhbGlkYXRlUGF0dGVybik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQudmFsdWUubGVuZ3RoID4gMClcbiAgICAgICAgICAgICAgICBEb21IYW5kbGVyLmFkZENsYXNzKGV2ZW50LnRhcmdldCwgJ3AtZmlsbGVkJyk7XG4gICAgICAgICAgICBlbHNlIERvbUhhbmRsZXIucmVtb3ZlQ2xhc3MoZXZlbnQudGFyZ2V0LCAncC1maWxsZWQnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy50b29sdGlwKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlclRvb2x0aXAoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgICAgaWYgKHByZXZQcm9wcy50b29sdGlwICE9PSB0aGlzLnByb3BzLnRvb2x0aXApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRvb2x0aXApIHRoaXMudG9vbHRpcC51cGRhdGVDb250ZW50KHRoaXMucHJvcHMudG9vbHRpcCk7XG4gICAgICAgICAgICBlbHNlIHRoaXMucmVuZGVyVG9vbHRpcCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnRvb2x0aXApIHtcbiAgICAgICAgICAgIHRoaXMudG9vbHRpcC5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLnRvb2x0aXAgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyVG9vbHRpcCgpIHtcbiAgICAgICAgdGhpcy50b29sdGlwID0gbmV3IFRvb2x0aXAoe1xuICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLmVsZW1lbnQsXG4gICAgICAgICAgICBjb250ZW50OiB0aGlzLnByb3BzLnRvb2x0aXAsXG4gICAgICAgICAgICBvcHRpb25zOiB0aGlzLnByb3BzLnRvb2x0aXBPcHRpb25zLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoXG4gICAgICAgICAgICAncC1pbnB1dHRleHQgcC1jb21wb25lbnQnLFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ3AtZGlzYWJsZWQnOiB0aGlzLnByb3BzLmRpc2FibGVkLFxuICAgICAgICAgICAgICAgICdwLWZpbGxlZCc6XG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLnZhbHVlICE9IG51bGwgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudmFsdWUudG9TdHJpbmcoKS5sZW5ndGggPiAwKSB8fFxuICAgICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUgIT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUudG9TdHJpbmcoKS5sZW5ndGggPiAwKSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgaW5wdXRQcm9wcyA9IE9iamVjdFV0aWxzLmZpbmREaWZmS2V5cyhcbiAgICAgICAgICAgIHRoaXMucHJvcHMsXG4gICAgICAgICAgICBJbnB1dFRleHQuZGVmYXVsdFByb3BzXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHJlZj17ZWwgPT4gKHRoaXMuZWxlbWVudCA9IGVsKX1cbiAgICAgICAgICAgICAgICB7Li4uaW5wdXRQcm9wc31cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICBvbklucHV0PXt0aGlzLm9uSW5wdXR9XG4gICAgICAgICAgICAgICAgb25LZXlQcmVzcz17dGhpcy5vbktleVByZXNzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbklucHV0VGV4dC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgb25JbnB1dDogbnVsbCxcbiAgICBvbktleVByZXNzOiBudWxsLFxuICAgIGtleWZpbHRlcjogbnVsbCxcbiAgICB2YWxpZGF0ZU9ubHk6IGZhbHNlLFxuICAgIHRvb2x0aXA6IG51bGwsXG4gICAgdG9vbHRpcE9wdGlvbnM6IG51bGwsXG59O1xuXG5JbnB1dFRleHQucHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGludm9rZSB3aGVuIGlucHV0IGlzIGluIGZvY3VzIGNoYW5nZXMuXG4gICAgICovXG4gICAgb25JbnB1dDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gaW52b2tlIHdoZW4gdmFsdWUgb2YgaW5wdXQgY2hhbmdlcy5cbiAgICAgKi9cbiAgICBvbktleVByZXNzOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiBGaWx0ZXIgdmFsdWVcbiAgICAgKi9cbiAgICBrZXlmaWx0ZXI6IFByb3BUeXBlcy5hbnksXG4gICAgLyoqXG4gICAgICogQm9vbGVhblxuICAgICAqL1xuICAgIHZhbGlkYXRlT25seTogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICogVG9vbHRpcCB0ZXh0XG4gICAgICovXG4gICAgdG9vbHRpcDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKipcbiAgICAgKiBUb29sdGlwIG9wdGlvbnMuIEFuIG9iamVjdFxuICAgICAqL1xuICAgIHRvb2x0aXBPcHRpb25zOiBQcm9wVHlwZXMub2JqZWN0LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=