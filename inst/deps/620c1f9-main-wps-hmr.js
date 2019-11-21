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
/* harmony import */ var _sampleData_carouselData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sampleData/carouselData */ "./src/demo/sampleData/carouselData.js");
/* harmony import */ var _lib_components_Carousel_Comp1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/components/Carousel/Comp1 */ "./src/lib/components/Carousel/Comp1.js");
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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib_components_Carousel_Comp1__WEBPACK_IMPORTED_MODULE_5__["default"], {
        value: _sampleData_carouselData__WEBPACK_IMPORTED_MODULE_4__["carsCarousel"] // page={this.state.page}
        // setProps={this.setProps}
        ,
        numVisible: 3,
        numScroll: 2,
        autoplayInterval: 1000,
        circular: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib_components_Carousel_Comp1__WEBPACK_IMPORTED_MODULE_5__["default"], {
        value: _sampleData_carouselData__WEBPACK_IMPORTED_MODULE_4__["carsCarousel"],
        numVisible: 3,
        numScroll: 1 // className="custom-carousel"
        // responsive={this.responsiveSettings}
        // header={customHeader}
        ,
        circular: true,
        autoplayInterval: 3000
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvZGVtby9BcHAuanMiXSwibmFtZXMiOlsiQXBwIiwic3RhdGUiLCJ2YWx1ZSIsImRhdGEiLCJvcmdTYW1wbGUiLCJkYXRhMSIsInNlbGVjdGlvbiIsInNldFByb3BzIiwiYmluZCIsIm5ld1Byb3BzIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwiY2Fyc0Nhcm91c2VsIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsRzs7Ozs7QUFDRixpQkFBYztBQUFBOztBQUFBOztBQUNWO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLFdBQUssRUFBRSxFQURFO0FBRVRDLFVBQUksRUFBRUMsZ0VBQVMsQ0FBQ0QsSUFGUDtBQUdURSxXQUFLLEVBQUVELGdFQUFTLENBQUNDLEtBSFI7QUFJVEMsZUFBUyxFQUFFO0FBSkYsS0FBYjtBQU1BLFVBQUtDLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjQyxJQUFkLCtCQUFoQjtBQVJVO0FBU2I7Ozs7NkJBRVFDLFEsRUFBVTtBQUNmQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWjtBQUNBLFdBQUtHLFFBQUwsQ0FBY0gsUUFBZDtBQUNIOzs7NkJBRVE7QUFDTCxhQUNJLHdFQUVJLDJEQUFDLHNFQUFEO0FBQ0ksYUFBSyxFQUFFSSxxRUFEWCxDQUVJO0FBQ0E7QUFISjtBQUlJLGtCQUFVLEVBQUUsQ0FKaEI7QUFLSSxpQkFBUyxFQUFFLENBTGY7QUFNSSx3QkFBZ0IsRUFBRSxJQU50QjtBQU9JLGdCQUFRLEVBQUU7QUFQZCxRQUZKLEVBV0ksMkRBQUMsc0VBQUQ7QUFDSSxhQUFLLEVBQUVBLHFFQURYO0FBRUksa0JBQVUsRUFBRSxDQUZoQjtBQUdJLGlCQUFTLEVBQUUsQ0FIZixDQUlJO0FBQ0E7QUFDQTtBQU5KO0FBT0ksZ0JBQVEsRUFBRSxJQVBkO0FBUUksd0JBQWdCLEVBQUU7QUFSdEIsUUFYSixDQURKO0FBcURIOzs7O0VBdkVhQywrQzs7QUEwRUhkLGtFQUFmLEUiLCJmaWxlIjoiNjIwYzFmOS1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgbm8tbWFnaWMtbnVtYmVyczogMCAqL1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICAgIEV4dHJhRGFzaFVpQ29tcG9uZW50cyxcbiAgICBPcmdhbml6YXRpb25DaGFydENvbXBvbmVudCxcbiAgICBMaXN0Qm94Q29tcG9uZW50LFxuICAgIFJhdGluZ0NvbXBvbmVudCxcbiAgICBDYXJvdXNlbENvbXBvbmVudCxcbn0gZnJvbSAnLi4vbGliJztcbmltcG9ydCBvcmdTYW1wbGUgZnJvbSAnLi9zYW1wbGVEYXRhL29yZ0NoYXJ0RGF0YSc7XG5pbXBvcnQge2NpdGllcywgY2Fyc30gZnJvbSAnLi9zYW1wbGVEYXRhL2xpc3RDb21wb25lbnREYXRhJztcbmltcG9ydCB7Y2Fyc0Nhcm91c2VsfSBmcm9tICcuL3NhbXBsZURhdGEvY2Fyb3VzZWxEYXRhJztcbmltcG9ydCBDb21wMSBmcm9tICcuLi9saWIvY29tcG9uZW50cy9DYXJvdXNlbC9Db21wMSdcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgICAgIGRhdGE6IG9yZ1NhbXBsZS5kYXRhLFxuICAgICAgICAgICAgZGF0YTE6IG9yZ1NhbXBsZS5kYXRhMSxcbiAgICAgICAgICAgIHNlbGVjdGlvbjogbnVsbCxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZXRQcm9wcyA9IHRoaXMuc2V0UHJvcHMuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzZXRQcm9wcyhuZXdQcm9wcykge1xuICAgICAgICBjb25zb2xlLmxvZyhuZXdQcm9wcyk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUobmV3UHJvcHMpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgey8qIDxDb21wMSB2YWx1ZT17Y2Fyc0Nhcm91c2VsfSAvPiAqL31cbiAgICAgICAgICAgICAgICA8Q29tcDFcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NhcnNDYXJvdXNlbH1cbiAgICAgICAgICAgICAgICAgICAgLy8gcGFnZT17dGhpcy5zdGF0ZS5wYWdlfVxuICAgICAgICAgICAgICAgICAgICAvLyBzZXRQcm9wcz17dGhpcy5zZXRQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgbnVtVmlzaWJsZT17M31cbiAgICAgICAgICAgICAgICAgICAgbnVtU2Nyb2xsPXsyfVxuICAgICAgICAgICAgICAgICAgICBhdXRvcGxheUludGVydmFsPXsxMDAwfVxuICAgICAgICAgICAgICAgICAgICBjaXJjdWxhcj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxDb21wMVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y2Fyc0Nhcm91c2VsfVxuICAgICAgICAgICAgICAgICAgICBudW1WaXNpYmxlPXszfVxuICAgICAgICAgICAgICAgICAgICBudW1TY3JvbGw9ezF9XG4gICAgICAgICAgICAgICAgICAgIC8vIGNsYXNzTmFtZT1cImN1c3RvbS1jYXJvdXNlbFwiXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlc3BvbnNpdmU9e3RoaXMucmVzcG9uc2l2ZVNldHRpbmdzfVxuICAgICAgICAgICAgICAgICAgICAvLyBoZWFkZXI9e2N1c3RvbUhlYWRlcn1cbiAgICAgICAgICAgICAgICAgICAgY2lyY3VsYXI9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5SW50ZXJ2YWw9ezMwMDB9XG4gICAgICAgICAgICAgICAgPjwvQ29tcDE+XG4gICAgICAgICAgICAgICAgey8qIDxSYXRpbmdDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgIHNldFByb3BzPXt0aGlzLnNldFByb3BzfVxuICAgICAgICAgICAgICAgICAgICBjYW5jZWw9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIHN0YXJzPXszfVxuICAgICAgICAgICAgICAgIC8+ICovfVxuICAgICAgICAgICAgICAgIHsvKiA8TGlzdEJveENvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICBpZD17J2lkayd9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2NhcnN9XG4gICAgICAgICAgICAgICAgICAgIHNldFByb3BzPXt0aGlzLnNldFByb3BzfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiAnMTVlbSd9fVxuICAgICAgICAgICAgICAgICAgICBsaXN0U3R5bGU9e3ttYXhIZWlnaHQ6ICcxMDBweCd9fVxuICAgICAgICAgICAgICAgICAgICBsaXN0Q29udGFpbmVyU3R5bGU9e3ttYXhIZWlnaHQ6ICczMDBweCd9fVxuICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICB0b29sdGlwPXsnSGV5J31cbiAgICAgICAgICAgICAgICAvPiAqL31cbiAgICAgICAgICAgICAgICB7LyogPE9yZ2FuaXphdGlvbkNoYXJ0Q29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgIHNldFByb3BzPXt0aGlzLnNldFByb3BzfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhMX1cbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uTW9kZT0nbXVsdGlwbGUnXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbj17dGhpcy5zdGF0ZS5zZWxlY3Rpb259XG4gICAgICAgICAgICAgICAgLz4gKi99XG4gICAgICAgICAgICAgICAgey8qIDxFeHRyYURhc2hVaUNvbXBvbmVudHNcbiAgICAgICAgICAgICAgICAgICAgc2V0UHJvcHM9e3RoaXMuc2V0UHJvcHN9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxuICAgICAgICAgICAgICAgIC8+ICovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9