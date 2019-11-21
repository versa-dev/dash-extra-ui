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
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib */ "./src/lib/index.js");
/* harmony import */ var _sampleData_orgChartData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sampleData/orgChartData */ "./src/demo/sampleData/orgChartData.js");
/* harmony import */ var _sampleData_listComponentData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sampleData/listComponentData */ "./src/demo/sampleData/listComponentData.js");
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
      data: _sampleData_orgChartData__WEBPACK_IMPORTED_MODULE_2__["default"].data,
      data1: _sampleData_orgChartData__WEBPACK_IMPORTED_MODULE_2__["default"].data1,
      selection: null
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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["ListBoxComponent"], {
        id: 'idk',
        value: this.state.value,
        filter: true,
        options: _sampleData_listComponentData__WEBPACK_IMPORTED_MODULE_3__["cars"],
        setProps: this.setProps,
        style: {
          width: '15em'
        },
        listStyle: {
          maxHeight: '100px'
        },
        listContainerStyle: {
          maxHeight: '300px'
        },
        multiple: true,
        disabled: false,
        tooltip: 'Hey'
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["ExtraDashUiComponents"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvZGVtby9BcHAuanMiXSwibmFtZXMiOlsiQXBwIiwic3RhdGUiLCJ2YWx1ZSIsImRhdGEiLCJvcmdTYW1wbGUiLCJkYXRhMSIsInNlbGVjdGlvbiIsInNldFByb3BzIiwiYmluZCIsIm5ld1Byb3BzIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwiY2FycyIsIndpZHRoIiwibWF4SGVpZ2h0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFDQTs7SUFFTUEsRzs7Ozs7QUFDRixpQkFBYztBQUFBOztBQUFBOztBQUNWO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLFdBQUssRUFBRSxFQURFO0FBRVRDLFVBQUksRUFBRUMsZ0VBQVMsQ0FBQ0QsSUFGUDtBQUdURSxXQUFLLEVBQUVELGdFQUFTLENBQUNDLEtBSFI7QUFJVEMsZUFBUyxFQUFFO0FBSkYsS0FBYjtBQU1BLFVBQUtDLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjQyxJQUFkLCtCQUFoQjtBQVJVO0FBU2I7Ozs7NkJBRVFDLFEsRUFBVTtBQUNmQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWjtBQUNBLFdBQUtHLFFBQUwsQ0FBY0gsUUFBZDtBQUNIOzs7NkJBRVE7QUFDTCxhQUNJLHdFQUNJLDJEQUFDLHFEQUFEO0FBQ0ksVUFBRSxFQUFFLEtBRFI7QUFFSSxhQUFLLEVBQUUsS0FBS1IsS0FBTCxDQUFXQyxLQUZ0QjtBQUdJLGNBQU0sRUFBRSxJQUhaO0FBSUksZUFBTyxFQUFFVyxrRUFKYjtBQUtJLGdCQUFRLEVBQUUsS0FBS04sUUFMbkI7QUFNSSxhQUFLLEVBQUU7QUFBQ08sZUFBSyxFQUFFO0FBQVIsU0FOWDtBQU9JLGlCQUFTLEVBQUU7QUFBQ0MsbUJBQVMsRUFBRTtBQUFaLFNBUGY7QUFRSSwwQkFBa0IsRUFBRTtBQUFDQSxtQkFBUyxFQUFFO0FBQVosU0FSeEI7QUFTSSxnQkFBUSxFQUFFLElBVGQ7QUFVSSxnQkFBUSxFQUFFLEtBVmQ7QUFXSSxlQUFPLEVBQUU7QUFYYixRQURKLEVBY0ksMkRBQUMsMERBQUQ7QUFDSSxnQkFBUSxFQUFFLEtBQUtSLFFBRG5CO0FBRUksYUFBSyxFQUFFLEtBQUtOLEtBQUwsQ0FBV0M7QUFGdEIsUUFkSixDQURKO0FBcUJIOzs7O0VBdkNhYywrQzs7QUEwQ0hoQixrRUFBZixFIiwiZmlsZSI6IjU2MGM1Y2EtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IG5vLW1hZ2ljLW51bWJlcnM6IDAgKi9cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgICBFeHRyYURhc2hVaUNvbXBvbmVudHMsXG4gICAgT3JnYW5pemF0aW9uQ2hhcnRDb21wb25lbnQsXG4gICAgTGlzdEJveENvbXBvbmVudCxcbn0gZnJvbSAnLi4vbGliJztcbmltcG9ydCBvcmdTYW1wbGUgZnJvbSAnLi9zYW1wbGVEYXRhL29yZ0NoYXJ0RGF0YSc7XG5pbXBvcnQge2NpdGllcywgY2Fyc30gZnJvbSAnLi9zYW1wbGVEYXRhL2xpc3RDb21wb25lbnREYXRhJztcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgICAgIGRhdGE6IG9yZ1NhbXBsZS5kYXRhLFxuICAgICAgICAgICAgZGF0YTE6IG9yZ1NhbXBsZS5kYXRhMSxcbiAgICAgICAgICAgIHNlbGVjdGlvbjogbnVsbCxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZXRQcm9wcyA9IHRoaXMuc2V0UHJvcHMuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzZXRQcm9wcyhuZXdQcm9wcykge1xuICAgICAgICBjb25zb2xlLmxvZyhuZXdQcm9wcyk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUobmV3UHJvcHMpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPExpc3RCb3hDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgaWQ9eydpZGsnfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtjYXJzfVxuICAgICAgICAgICAgICAgICAgICBzZXRQcm9wcz17dGhpcy5zZXRQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogJzE1ZW0nfX1cbiAgICAgICAgICAgICAgICAgICAgbGlzdFN0eWxlPXt7bWF4SGVpZ2h0OiAnMTAwcHgnfX1cbiAgICAgICAgICAgICAgICAgICAgbGlzdENvbnRhaW5lclN0eWxlPXt7bWF4SGVpZ2h0OiAnMzAwcHgnfX1cbiAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGU9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcD17J0hleSd9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8RXh0cmFEYXNoVWlDb21wb25lbnRzXG4gICAgICAgICAgICAgICAgICAgIHNldFByb3BzPXt0aGlzLnNldFByb3BzfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9