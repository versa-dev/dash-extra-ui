webpackHotUpdateextra_dash_ui_components("main",{

/***/ "./src/demo/App.js":
/*!*************************!*\
  !*** ./src/demo/App.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _extra_dash_ui_components_nova_light_theme_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../extra_dash_ui_components/nova-light/theme.css */ "./extra_dash_ui_components/nova-light/theme.css");
/* harmony import */ var _extra_dash_ui_components_nova_light_theme_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_extra_dash_ui_components_nova_light_theme_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _extra_dash_ui_components_primeicons_primeicons_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../extra_dash_ui_components/primeicons/primeicons.css */ "./extra_dash_ui_components/primeicons/primeicons.css");
/* harmony import */ var _extra_dash_ui_components_primeicons_primeicons_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_extra_dash_ui_components_primeicons_primeicons_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _extra_dash_ui_components_primereact_primereact_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../extra_dash_ui_components/primereact/primereact.min.css */ "./extra_dash_ui_components/primereact/primereact.min.css");
/* harmony import */ var _extra_dash_ui_components_primereact_primereact_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_extra_dash_ui_components_primereact_primereact_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib */ "./src/lib/index.js");
/* harmony import */ var _sampleData_js_orgChartData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sampleData.js/orgChartData */ "./src/demo/sampleData.js/orgChartData.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/* eslint no-magic-numbers: 0 */







var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this));
    _this.state = {
      value: '',
      data: _sampleData_js_orgChartData__WEBPACK_IMPORTED_MODULE_5__["default"].data,
      data1: _sampleData_js_orgChartData__WEBPACK_IMPORTED_MODULE_5__["default"].data1,
      selection: {}
    };
    _this.setProps = _this.setProps.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(App, [{
    key: "setProps",
    value: function setProps(newProps) {
      console.log(newProps);
      this.setState(newProps);
    }
  }, {
    key: "render",
    value: function render() {
      console.log(process.env);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Hello, Dash!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_4__["OrganizationChartComponent"], {
        setProps: this.setProps,
        value: this.state.data1,
        selectionMode: 'single',
        selection: this.state.selection
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_4__["ExtraDashUiComponents"], {
        setProps: this.setProps,
        value: this.state.value
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvZGVtby9BcHAuanMiXSwibmFtZXMiOlsiQXBwIiwic3RhdGUiLCJ2YWx1ZSIsImRhdGEiLCJvcmdTYW1wbGUiLCJkYXRhMSIsInNlbGVjdGlvbiIsInNldFByb3BzIiwiYmluZCIsIm5ld1Byb3BzIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwicHJvY2VzcyIsImVudiIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLEc7Ozs7O0FBQ0YsaUJBQWM7QUFBQTs7QUFBQTs7QUFDVjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxXQUFLLEVBQUUsRUFERTtBQUVUQyxVQUFJLEVBQUVDLG1FQUFTLENBQUNELElBRlA7QUFHVEUsV0FBSyxFQUFFRCxtRUFBUyxDQUFDQyxLQUhSO0FBSVRDLGVBQVMsRUFBRTtBQUpGLEtBQWI7QUFNQSxVQUFLQyxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0MsSUFBZCwrQkFBaEI7QUFSVTtBQVNiOzs7OzZCQUVRQyxRLEVBQVU7QUFDZkMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVo7QUFDQSxXQUFLRyxRQUFMLENBQWNILFFBQWQ7QUFDSDs7OzZCQUVRO0FBQ0xDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRSxPQUFPLENBQUNDLEdBQXBCO0FBQ0EsYUFDSSx3RUFDSSxzRkFESixFQUVJLDJEQUFDLCtEQUFEO0FBQ0ksZ0JBQVEsRUFBRSxLQUFLUCxRQURuQjtBQUVJLGFBQUssRUFBRSxLQUFLTixLQUFMLENBQVdJLEtBRnRCO0FBR0kscUJBQWEsRUFBRSxRQUhuQjtBQUlJLGlCQUFTLEVBQUUsS0FBS0osS0FBTCxDQUFXSztBQUoxQixRQUZKLEVBUUksMkRBQUMsMERBQUQ7QUFDSSxnQkFBUSxFQUFFLEtBQUtDLFFBRG5CO0FBRUksYUFBSyxFQUFFLEtBQUtOLEtBQUwsQ0FBV0M7QUFGdEIsUUFSSixDQURKO0FBZUg7Ozs7RUFsQ2FhLCtDOztBQXFDSGYsa0VBQWYsRSIsImZpbGUiOiJhNzY3MWQ0LW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludCBuby1tYWdpYy1udW1iZXJzOiAwICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuLi8uLi9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvbm92YS1saWdodC90aGVtZS5jc3MnO1xuaW1wb3J0ICcuLi8uLi9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvcHJpbWVpY29ucy9wcmltZWljb25zLmNzcyc7XG5pbXBvcnQgJy4uLy4uL2V4dHJhX2Rhc2hfdWlfY29tcG9uZW50cy9wcmltZXJlYWN0L3ByaW1lcmVhY3QubWluLmNzcyc7XG5pbXBvcnQgeyBFeHRyYURhc2hVaUNvbXBvbmVudHMsIE9yZ2FuaXphdGlvbkNoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vbGliJztcbmltcG9ydCBvcmdTYW1wbGUgZnJvbSAnLi9zYW1wbGVEYXRhLmpzL29yZ0NoYXJ0RGF0YSc7XG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgICAgICBkYXRhOiBvcmdTYW1wbGUuZGF0YSxcbiAgICAgICAgICAgIGRhdGExOiBvcmdTYW1wbGUuZGF0YTEsXG4gICAgICAgICAgICBzZWxlY3Rpb246IHt9LFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNldFByb3BzID0gdGhpcy5zZXRQcm9wcy5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHNldFByb3BzKG5ld1Byb3BzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKG5ld1Byb3BzKVxuICAgICAgICB0aGlzLnNldFN0YXRlKG5ld1Byb3BzKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2Nlc3MuZW52KVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDE+SGVsbG8sIERhc2ghPC9oMT5cbiAgICAgICAgICAgICAgICA8T3JnYW5pemF0aW9uQ2hhcnRDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgc2V0UHJvcHM9e3RoaXMuc2V0UHJvcHN9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRhdGExfVxuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25Nb2RlPXsnc2luZ2xlJ31cbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uPXt0aGlzLnN0YXRlLnNlbGVjdGlvbn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxFeHRyYURhc2hVaUNvbXBvbmVudHNcbiAgICAgICAgICAgICAgICAgICAgc2V0UHJvcHM9e3RoaXMuc2V0UHJvcHN9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=