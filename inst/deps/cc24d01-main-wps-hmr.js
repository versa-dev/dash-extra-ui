webpackHotUpdateextra_dash_ui_components("main",{

/***/ "./src/lib/components/ListBox/ListBoxComponent.js":
/*!********************************************************!*\
  !*** ./src/lib/components/ListBox/ListBoxComponent.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ListBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListBox */ "./src/lib/components/ListBox/ListBox.js");
/* harmony import */ var _ListBox_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ListBox.css */ "./src/lib/components/ListBox/ListBox.css");
/* harmony import */ var _ListBox_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ListBox_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _theme_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme.css */ "./src/lib/components/ListBox/theme.css");
/* harmony import */ var _theme_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_theme_css__WEBPACK_IMPORTED_MODULE_4__);
var _ListBoxComponent$def;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var ListBoxComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(ListBoxComponent, _Component);

  function ListBoxComponent() {
    _classCallCheck(this, ListBoxComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(ListBoxComponent).apply(this, arguments));
  }

  _createClass(ListBoxComponent, [{
    key: "sampleTemplate",
    value: function sampleTemplate(option) {
      var imagePath = option.imagePath;
      console.log(option);

      if (imagePath == undefined || imagePath.trim() == '') {
        return option.label;
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-clearfix"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: imagePath,
        style: {
          display: 'inline-block',
          margin: '5px 0 0 5px',
          width: 48
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          fontSize: '1em',
          "float": 'right',
          margin: '1em .5em 0 0'
        }
      }, option.label));
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "content-section implementation"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ListBox__WEBPACK_IMPORTED_MODULE_2__["default"], {
        id: this.props.id,
        value: this.props.value,
        filter: this.props.filter,
        options: this.props.options,
        onChange: function onChange(e) {
          return _this.props.setProps({
            value: e.value
          });
        },
        itemTemplate: this.sampleTemplate,
        style: this.props.style,
        listStyle: this.props.listStyle,
        listContainerStyle: this.props.listContainerStyle,
        multiple: this.props.multiple,
        disabled: this.props.disabled,
        tooltip: this.props.tooltip
      })));
    }
  }]);

  return ListBoxComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

ListBoxComponent.defaultProps = (_ListBoxComponent$def = {
  listContainerStyle: {
    maxHeight: 500
  },
  id: null,
  value: null,
  options: null,
  filter: false,
  style: null,
  listStyle: null
}, _defineProperty(_ListBoxComponent$def, "listContainerStyle", null), _defineProperty(_ListBoxComponent$def, "multiple", false), _defineProperty(_ListBoxComponent$def, "disabled", false), _defineProperty(_ListBoxComponent$def, "tooltip", null), _ListBoxComponent$def);
ListBoxComponent.PropTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  options: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  filter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  listStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  listContainerStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  multiple: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  tooltip: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (ListBoxComponent);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvTGlzdEJveC9MaXN0Qm94Q29tcG9uZW50LmpzIl0sIm5hbWVzIjpbIkxpc3RCb3hDb21wb25lbnQiLCJvcHRpb24iLCJpbWFnZVBhdGgiLCJjb25zb2xlIiwibG9nIiwidW5kZWZpbmVkIiwidHJpbSIsImxhYmVsIiwiZGlzcGxheSIsIm1hcmdpbiIsIndpZHRoIiwiZm9udFNpemUiLCJwcm9wcyIsImlkIiwidmFsdWUiLCJmaWx0ZXIiLCJvcHRpb25zIiwiZSIsInNldFByb3BzIiwic2FtcGxlVGVtcGxhdGUiLCJzdHlsZSIsImxpc3RTdHlsZSIsImxpc3RDb250YWluZXJTdHlsZSIsIm11bHRpcGxlIiwiZGlzYWJsZWQiLCJ0b29sdGlwIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwibWF4SGVpZ2h0IiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYW55IiwiYXJyYXkiLCJpc1JlcXVpcmVkIiwiYm9vbCIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsZ0I7Ozs7Ozs7Ozs7Ozs7bUNBQ2FDLE0sRUFBUTtBQUFBLFVBQ1pDLFNBRFksR0FDQ0QsTUFERCxDQUNaQyxTQURZO0FBRW5CQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUgsTUFBWjs7QUFDQSxVQUFJQyxTQUFTLElBQUlHLFNBQWIsSUFBMEJILFNBQVMsQ0FBQ0ksSUFBVixNQUFvQixFQUFsRCxFQUFzRDtBQUNsRCxlQUFPTCxNQUFNLENBQUNNLEtBQWQ7QUFDSDs7QUFDRCxhQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0k7QUFDSSxXQUFHLEVBQUVMLFNBRFQ7QUFFSSxhQUFLLEVBQUU7QUFDSE0saUJBQU8sRUFBRSxjQUROO0FBRUhDLGdCQUFNLEVBQUUsYUFGTDtBQUdIQyxlQUFLLEVBQUU7QUFISjtBQUZYLFFBREosRUFTSTtBQUNJLGFBQUssRUFBRTtBQUNIQyxrQkFBUSxFQUFFLEtBRFA7QUFFSCxtQkFBTyxPQUZKO0FBR0hGLGdCQUFNLEVBQUU7QUFITDtBQURYLFNBT0tSLE1BQU0sQ0FBQ00sS0FQWixDQVRKLENBREo7QUFxQkg7Ozs2QkFFUTtBQUFBOztBQUNMLGFBQ0ksd0VBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSSwyREFBQyxnREFBRDtBQUNJLFVBQUUsRUFBRSxLQUFLSyxLQUFMLENBQVdDLEVBRG5CO0FBRUksYUFBSyxFQUFFLEtBQUtELEtBQUwsQ0FBV0UsS0FGdEI7QUFHSSxjQUFNLEVBQUUsS0FBS0YsS0FBTCxDQUFXRyxNQUh2QjtBQUlJLGVBQU8sRUFBRSxLQUFLSCxLQUFMLENBQVdJLE9BSnhCO0FBS0ksZ0JBQVEsRUFBRSxrQkFBQUMsQ0FBQztBQUFBLGlCQUFJLEtBQUksQ0FBQ0wsS0FBTCxDQUFXTSxRQUFYLENBQW9CO0FBQUNKLGlCQUFLLEVBQUVHLENBQUMsQ0FBQ0g7QUFBVixXQUFwQixDQUFKO0FBQUEsU0FMZjtBQU1JLG9CQUFZLEVBQUUsS0FBS0ssY0FOdkI7QUFPSSxhQUFLLEVBQUUsS0FBS1AsS0FBTCxDQUFXUSxLQVB0QjtBQVFJLGlCQUFTLEVBQUUsS0FBS1IsS0FBTCxDQUFXUyxTQVIxQjtBQVNJLDBCQUFrQixFQUFFLEtBQUtULEtBQUwsQ0FBV1Usa0JBVG5DO0FBVUksZ0JBQVEsRUFBRSxLQUFLVixLQUFMLENBQVdXLFFBVnpCO0FBV0ksZ0JBQVEsRUFBRSxLQUFLWCxLQUFMLENBQVdZLFFBWHpCO0FBWUksZUFBTyxFQUFFLEtBQUtaLEtBQUwsQ0FBV2E7QUFaeEIsUUFESixDQURKLENBREo7QUFvQkg7Ozs7RUFuRDBCQywrQzs7QUFzRC9CMUIsZ0JBQWdCLENBQUMyQixZQUFqQjtBQUNJTCxvQkFBa0IsRUFBRTtBQUFDTSxhQUFTLEVBQUU7QUFBWixHQUR4QjtBQUVJZixJQUFFLEVBQUUsSUFGUjtBQUdJQyxPQUFLLEVBQUUsSUFIWDtBQUlJRSxTQUFPLEVBQUUsSUFKYjtBQUtJRCxRQUFNLEVBQUUsS0FMWjtBQU1JSyxPQUFLLEVBQUUsSUFOWDtBQU9JQyxXQUFTLEVBQUU7QUFQZixnRUFRd0IsSUFSeEIsc0RBU2MsS0FUZCxzREFVYyxLQVZkLHFEQVdhLElBWGI7QUFhQXJCLGdCQUFnQixDQUFDNkIsU0FBakIsR0FBNkI7QUFDekJoQixJQUFFLEVBQUVnQixpREFBUyxDQUFDQyxNQURXO0FBRXpCaEIsT0FBSyxFQUFFZSxpREFBUyxDQUFDRSxHQUZRO0FBR3pCZixTQUFPLEVBQUVhLGlEQUFTLENBQUNHLEtBQVYsQ0FBZ0JDLFVBSEE7QUFJekJsQixRQUFNLEVBQUVjLGlEQUFTLENBQUNLLElBSk87QUFLekJkLE9BQUssRUFBRVMsaURBQVMsQ0FBQ00sTUFMUTtBQU16QmQsV0FBUyxFQUFFUSxpREFBUyxDQUFDTSxNQU5JO0FBT3pCYixvQkFBa0IsRUFBRU8saURBQVMsQ0FBQ00sTUFQTDtBQVF6QlosVUFBUSxFQUFFTSxpREFBUyxDQUFDSyxJQVJLO0FBU3pCVixVQUFRLEVBQUVLLGlEQUFTLENBQUNLLElBVEs7QUFVekJULFNBQU8sRUFBRUksaURBQVMsQ0FBQ0s7QUFWTSxDQUE3QjtBQWFlbEMsK0VBQWYsRSIsImZpbGUiOiJjYzI0ZDAxLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBMaXN0Qm94IGZyb20gJy4vTGlzdEJveCc7XG5pbXBvcnQgJy4vTGlzdEJveC5jc3MnO1xuaW1wb3J0ICcuL3RoZW1lLmNzcyc7XG5cbmNsYXNzIExpc3RCb3hDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHNhbXBsZVRlbXBsYXRlKG9wdGlvbikge1xuICAgICAgICBjb25zdCB7aW1hZ2VQYXRofSA9IG9wdGlvbjtcbiAgICAgICAgY29uc29sZS5sb2cob3B0aW9uKTtcbiAgICAgICAgaWYgKGltYWdlUGF0aCA9PSB1bmRlZmluZWQgfHwgaW1hZ2VQYXRoLnRyaW0oKSA9PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5sYWJlbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWNsZWFyZml4XCI+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlUGF0aH1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAnNXB4IDAgMCA1cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ4LFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMWVtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiAncmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAnMWVtIC41ZW0gMCAwJyxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtvcHRpb24ubGFiZWx9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtc2VjdGlvbiBpbXBsZW1lbnRhdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8TGlzdEJveFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e3RoaXMucHJvcHMuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcj17dGhpcy5wcm9wcy5maWx0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLnByb3BzLm9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnByb3BzLnNldFByb3BzKHt2YWx1ZTogZS52YWx1ZX0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVRlbXBsYXRlPXt0aGlzLnNhbXBsZVRlbXBsYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0U3R5bGU9e3RoaXMucHJvcHMubGlzdFN0eWxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdENvbnRhaW5lclN0eWxlPXt0aGlzLnByb3BzLmxpc3RDb250YWluZXJTdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlPXt0aGlzLnByb3BzLm11bHRpcGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwPXt0aGlzLnByb3BzLnRvb2x0aXB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkxpc3RCb3hDb21wb25lbnQuZGVmYXVsdFByb3BzID0ge1xuICAgIGxpc3RDb250YWluZXJTdHlsZToge21heEhlaWdodDogNTAwfSxcbiAgICBpZDogbnVsbCxcbiAgICB2YWx1ZTogbnVsbCxcbiAgICBvcHRpb25zOiBudWxsLFxuICAgIGZpbHRlcjogZmFsc2UsXG4gICAgc3R5bGU6IG51bGwsXG4gICAgbGlzdFN0eWxlOiBudWxsLFxuICAgIGxpc3RDb250YWluZXJTdHlsZTogbnVsbCxcbiAgICBtdWx0aXBsZTogZmFsc2UsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIHRvb2x0aXA6IG51bGwsXG59O1xuTGlzdEJveENvbXBvbmVudC5Qcm9wVHlwZXMgPSB7XG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdmFsdWU6IFByb3BUeXBlcy5hbnksXG4gICAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gICAgZmlsdGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBsaXN0U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgbGlzdENvbnRhaW5lclN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIG11bHRpcGxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgdG9vbHRpcDogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaXN0Qm94Q29tcG9uZW50O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==