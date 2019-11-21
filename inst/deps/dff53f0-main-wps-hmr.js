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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"], {
        value: _sampleData_carouselData__WEBPACK_IMPORTED_MODULE_4__["carsCarousel"],
        numVisible: 4,
        numScroll: 1 // className="custom-carousel"
        // responsive={this.responsiveSettings}
        ,
        header: 'customHeader',
        page: this.state.page,
        setProps: this.setProps // circular={true}
        ,
        autoplayInterval: 2000
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvZGVtby9BcHAuanMiXSwibmFtZXMiOlsiQXBwIiwic3RhdGUiLCJ2YWx1ZSIsImRhdGEiLCJvcmdTYW1wbGUiLCJkYXRhMSIsInNlbGVjdGlvbiIsInNldFByb3BzIiwiYmluZCIsIm5ld1Byb3BzIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwiY2Fyc0Nhcm91c2VsIiwicGFnZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7O0lBRU1BLEc7Ozs7O0FBQ0YsaUJBQWM7QUFBQTs7QUFBQTs7QUFDVjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxXQUFLLEVBQUUsRUFERTtBQUVUQyxVQUFJLEVBQUVDLGdFQUFTLENBQUNELElBRlA7QUFHVEUsV0FBSyxFQUFFRCxnRUFBUyxDQUFDQyxLQUhSO0FBSVRDLGVBQVMsRUFBRTtBQUpGLEtBQWI7QUFNQSxVQUFLQyxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0MsSUFBZCwrQkFBaEI7QUFSVTtBQVNiOzs7OzZCQUVRQyxRLEVBQVU7QUFDZkMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVo7QUFDQSxXQUFLRyxRQUFMLENBQWNILFFBQWQ7QUFDSDs7OzZCQUVRO0FBQ0wsYUFDSSx3RUFDSSwyREFBQyxzREFBRDtBQUNJLGFBQUssRUFBRUkscUVBRFg7QUFFSSxrQkFBVSxFQUFFLENBRmhCO0FBR0ksaUJBQVMsRUFBRSxDQUhmLENBSUk7QUFDQTtBQUxKO0FBTUksY0FBTSxFQUFFLGNBTlo7QUFPSSxZQUFJLEVBQUUsS0FBS1osS0FBTCxDQUFXYSxJQVByQjtBQVFJLGdCQUFRLEVBQUUsS0FBS1AsUUFSbkIsQ0FTSTtBQVRKO0FBVUksd0JBQWdCLEVBQUU7QUFWdEIsUUFESixDQURKO0FBNkNIOzs7O0VBL0RhUSwrQzs7QUFrRUhmLGtFQUFmLEUiLCJmaWxlIjoiZGZmNTNmMC1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgbm8tbWFnaWMtbnVtYmVyczogMCAqL1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICAgIEV4dHJhRGFzaFVpQ29tcG9uZW50cyxcbiAgICBPcmdhbml6YXRpb25DaGFydENvbXBvbmVudCxcbiAgICBMaXN0Qm94Q29tcG9uZW50LFxuICAgIFJhdGluZ0NvbXBvbmVudCxcbiAgICBDYXJvdXNlbENvbXBvbmVudCxcbn0gZnJvbSAnLi4vbGliJztcbmltcG9ydCBvcmdTYW1wbGUgZnJvbSAnLi9zYW1wbGVEYXRhL29yZ0NoYXJ0RGF0YSc7XG5pbXBvcnQge2NpdGllcywgY2Fyc30gZnJvbSAnLi9zYW1wbGVEYXRhL2xpc3RDb21wb25lbnREYXRhJztcbmltcG9ydCB7Y2Fyc0Nhcm91c2VsfSBmcm9tICcuL3NhbXBsZURhdGEvY2Fyb3VzZWxEYXRhJztcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgICAgIGRhdGE6IG9yZ1NhbXBsZS5kYXRhLFxuICAgICAgICAgICAgZGF0YTE6IG9yZ1NhbXBsZS5kYXRhMSxcbiAgICAgICAgICAgIHNlbGVjdGlvbjogbnVsbCxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZXRQcm9wcyA9IHRoaXMuc2V0UHJvcHMuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzZXRQcm9wcyhuZXdQcm9wcykge1xuICAgICAgICBjb25zb2xlLmxvZyhuZXdQcm9wcyk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUobmV3UHJvcHMpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPENhcm91c2VsQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjYXJzQ2Fyb3VzZWx9XG4gICAgICAgICAgICAgICAgICAgIG51bVZpc2libGU9ezR9XG4gICAgICAgICAgICAgICAgICAgIG51bVNjcm9sbD17MX1cbiAgICAgICAgICAgICAgICAgICAgLy8gY2xhc3NOYW1lPVwiY3VzdG9tLWNhcm91c2VsXCJcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVzcG9uc2l2ZT17dGhpcy5yZXNwb25zaXZlU2V0dGluZ3N9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcj17J2N1c3RvbUhlYWRlcid9XG4gICAgICAgICAgICAgICAgICAgIHBhZ2U9e3RoaXMuc3RhdGUucGFnZX1cbiAgICAgICAgICAgICAgICAgICAgc2V0UHJvcHM9e3RoaXMuc2V0UHJvcHN9XG4gICAgICAgICAgICAgICAgICAgIC8vIGNpcmN1bGFyPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBhdXRvcGxheUludGVydmFsPXsyMDAwfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgey8qIDxSYXRpbmdDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgIHNldFByb3BzPXt0aGlzLnNldFByb3BzfVxuICAgICAgICAgICAgICAgICAgICBjYW5jZWw9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIHN0YXJzPXszfVxuICAgICAgICAgICAgICAgIC8+ICovfVxuICAgICAgICAgICAgICAgIHsvKiA8TGlzdEJveENvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICBpZD17J2lkayd9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2NhcnN9XG4gICAgICAgICAgICAgICAgICAgIHNldFByb3BzPXt0aGlzLnNldFByb3BzfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiAnMTVlbSd9fVxuICAgICAgICAgICAgICAgICAgICBsaXN0U3R5bGU9e3ttYXhIZWlnaHQ6ICcxMDBweCd9fVxuICAgICAgICAgICAgICAgICAgICBsaXN0Q29udGFpbmVyU3R5bGU9e3ttYXhIZWlnaHQ6ICczMDBweCd9fVxuICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICB0b29sdGlwPXsnSGV5J31cbiAgICAgICAgICAgICAgICAvPiAqL31cbiAgICAgICAgICAgICAgICB7LyogPE9yZ2FuaXphdGlvbkNoYXJ0Q29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgIHNldFByb3BzPXt0aGlzLnNldFByb3BzfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhMX1cbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uTW9kZT0nbXVsdGlwbGUnXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbj17dGhpcy5zdGF0ZS5zZWxlY3Rpb259XG4gICAgICAgICAgICAgICAgLz4gKi99XG4gICAgICAgICAgICAgICAgey8qIDxFeHRyYURhc2hVaUNvbXBvbmVudHNcbiAgICAgICAgICAgICAgICAgICAgc2V0UHJvcHM9e3RoaXMuc2V0UHJvcHN9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxuICAgICAgICAgICAgICAgIC8+ICovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9