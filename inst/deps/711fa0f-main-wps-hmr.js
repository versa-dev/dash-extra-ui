webpackHotUpdateextra_dash_ui_components("main",{

/***/ "./src/demo/App.js":
/*!*************************!*\
  !*** ./src/demo/App.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Hello, Dash!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_4__["OrganizationChartComponent"], {
        setProps: this.setProps,
        value: this.state.data1,
        selectionMode: "multiple",
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvZGVtby9BcHAuanMiXSwibmFtZXMiOlsiQXBwIiwic3RhdGUiLCJ2YWx1ZSIsImRhdGEiLCJvcmdTYW1wbGUiLCJkYXRhMSIsInNlbGVjdGlvbiIsInNldFByb3BzIiwiYmluZCIsIm5ld1Byb3BzIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsRzs7Ozs7QUFDRixpQkFBYztBQUFBOztBQUFBOztBQUNWO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLFdBQUssRUFBRSxFQURFO0FBRVRDLFVBQUksRUFBRUMsbUVBQVMsQ0FBQ0QsSUFGUDtBQUdURSxXQUFLLEVBQUVELG1FQUFTLENBQUNDLEtBSFI7QUFJVEMsZUFBUyxFQUFFO0FBSkYsS0FBYjtBQU1BLFVBQUtDLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjQyxJQUFkLCtCQUFoQjtBQVJVO0FBU2I7Ozs7NkJBRVFDLFEsRUFBVTtBQUNmQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWjtBQUNBLFdBQUtHLFFBQUwsQ0FBY0gsUUFBZDtBQUNIOzs7NkJBRVE7QUFDTCxhQUNJLHdFQUNJLHNGQURKLEVBRUksMkRBQUMsK0RBQUQ7QUFDSSxnQkFBUSxFQUFFLEtBQUtGLFFBRG5CO0FBRUksYUFBSyxFQUFFLEtBQUtOLEtBQUwsQ0FBV0ksS0FGdEI7QUFHSSxxQkFBYSxFQUFDLFVBSGxCO0FBSUksaUJBQVMsRUFBRSxLQUFLSixLQUFMLENBQVdLO0FBSjFCLFFBRkosRUFRSSwyREFBQywwREFBRDtBQUNJLGdCQUFRLEVBQUUsS0FBS0MsUUFEbkI7QUFFSSxhQUFLLEVBQUUsS0FBS04sS0FBTCxDQUFXQztBQUZ0QixRQVJKLENBREo7QUFlSDs7OztFQWpDYVcsK0M7O0FBb0NIYixrRUFBZixFIiwiZmlsZSI6IjcxMWZhMGYtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IG5vLW1hZ2ljLW51bWJlcnM6IDAgKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4uLy4uL2V4dHJhX2Rhc2hfdWlfY29tcG9uZW50cy9ub3ZhLWxpZ2h0L3RoZW1lLmNzcyc7XG5pbXBvcnQgJy4uLy4uL2V4dHJhX2Rhc2hfdWlfY29tcG9uZW50cy9wcmltZWljb25zL3ByaW1laWNvbnMuY3NzJztcbmltcG9ydCAnLi4vLi4vZXh0cmFfZGFzaF91aV9jb21wb25lbnRzL3ByaW1lcmVhY3QvcHJpbWVyZWFjdC5taW4uY3NzJztcbmltcG9ydCB7IEV4dHJhRGFzaFVpQ29tcG9uZW50cywgT3JnYW5pemF0aW9uQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuLi9saWInO1xuaW1wb3J0IG9yZ1NhbXBsZSBmcm9tICcuL3NhbXBsZURhdGEuanMvb3JnQ2hhcnREYXRhJztcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgICAgIGRhdGE6IG9yZ1NhbXBsZS5kYXRhLFxuICAgICAgICAgICAgZGF0YTE6IG9yZ1NhbXBsZS5kYXRhMSxcbiAgICAgICAgICAgIHNlbGVjdGlvbjoge30sXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2V0UHJvcHMgPSB0aGlzLnNldFByb3BzLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgc2V0UHJvcHMobmV3UHJvcHMpIHtcbiAgICAgICAgY29uc29sZS5sb2cobmV3UHJvcHMpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUobmV3UHJvcHMpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgxPkhlbGxvLCBEYXNoITwvaDE+XG4gICAgICAgICAgICAgICAgPE9yZ2FuaXphdGlvbkNoYXJ0Q29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgIHNldFByb3BzPXt0aGlzLnNldFByb3BzfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhMX1cbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uTW9kZT0nbXVsdGlwbGUnXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbj17dGhpcy5zdGF0ZS5zZWxlY3Rpb259XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8RXh0cmFEYXNoVWlDb21wb25lbnRzXG4gICAgICAgICAgICAgICAgICAgIHNldFByb3BzPXt0aGlzLnNldFByb3BzfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9