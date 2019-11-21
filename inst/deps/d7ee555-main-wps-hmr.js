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
        value: _sampleData_carouselData__WEBPACK_IMPORTED_MODULE_4__["carsCarousel"],
        numVisible: 3,
        numScroll: 1,
        className: "custom-carousel" // responsive={this.responsiveSettings}
        ,
        header: 'customHeader',
        page: this.state.page,
        setProps: this.setProps // circular={true}
        ,
        autoplayInterval: 1000
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvZGVtby9BcHAuanMiXSwibmFtZXMiOlsiQXBwIiwic3RhdGUiLCJ2YWx1ZSIsImRhdGEiLCJvcmdTYW1wbGUiLCJkYXRhMSIsInNlbGVjdGlvbiIsInNldFByb3BzIiwiYmluZCIsIm5ld1Byb3BzIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwiY2Fyc0Nhcm91c2VsIiwicGFnZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLEc7Ozs7O0FBQ0YsaUJBQWM7QUFBQTs7QUFBQTs7QUFDVjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxXQUFLLEVBQUUsRUFERTtBQUVUQyxVQUFJLEVBQUVDLGdFQUFTLENBQUNELElBRlA7QUFHVEUsV0FBSyxFQUFFRCxnRUFBUyxDQUFDQyxLQUhSO0FBSVRDLGVBQVMsRUFBRTtBQUpGLEtBQWI7QUFNQSxVQUFLQyxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0MsSUFBZCwrQkFBaEI7QUFSVTtBQVNiOzs7OzZCQUVRQyxRLEVBQVU7QUFDZkMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVo7QUFDQSxXQUFLRyxRQUFMLENBQWNILFFBQWQ7QUFDSDs7OzZCQUVRO0FBQ0wsYUFDSSx3RUFXSSwyREFBQyxzRUFBRDtBQUNJLGFBQUssRUFBRUkscUVBRFg7QUFFSSxrQkFBVSxFQUFFLENBRmhCO0FBR0ksaUJBQVMsRUFBRSxDQUhmO0FBSUksaUJBQVMsRUFBQyxpQkFKZCxDQUtJO0FBTEo7QUFNSSxjQUFNLEVBQUUsY0FOWjtBQU9JLFlBQUksRUFBRSxLQUFLWixLQUFMLENBQVdhLElBUHJCO0FBUUksZ0JBQVEsRUFBRSxLQUFLUCxRQVJuQixDQVNJO0FBVEo7QUFVSSx3QkFBZ0IsRUFBRTtBQVZ0QixRQVhKLENBREo7QUF1REg7Ozs7RUF6RWFRLCtDOztBQTRFSGYsa0VBQWYsRSIsImZpbGUiOiJkN2VlNTU1LW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludCBuby1tYWdpYy1udW1iZXJzOiAwICovXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gICAgRXh0cmFEYXNoVWlDb21wb25lbnRzLFxuICAgIE9yZ2FuaXphdGlvbkNoYXJ0Q29tcG9uZW50LFxuICAgIExpc3RCb3hDb21wb25lbnQsXG4gICAgUmF0aW5nQ29tcG9uZW50LFxuICAgIENhcm91c2VsQ29tcG9uZW50LFxufSBmcm9tICcuLi9saWInO1xuaW1wb3J0IG9yZ1NhbXBsZSBmcm9tICcuL3NhbXBsZURhdGEvb3JnQ2hhcnREYXRhJztcbmltcG9ydCB7Y2l0aWVzLCBjYXJzfSBmcm9tICcuL3NhbXBsZURhdGEvbGlzdENvbXBvbmVudERhdGEnO1xuaW1wb3J0IHtjYXJzQ2Fyb3VzZWx9IGZyb20gJy4vc2FtcGxlRGF0YS9jYXJvdXNlbERhdGEnO1xuaW1wb3J0IENvbXAxIGZyb20gJy4uL2xpYi9jb21wb25lbnRzL0Nhcm91c2VsL0NvbXAxJ1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICAgICAgZGF0YTogb3JnU2FtcGxlLmRhdGEsXG4gICAgICAgICAgICBkYXRhMTogb3JnU2FtcGxlLmRhdGExLFxuICAgICAgICAgICAgc2VsZWN0aW9uOiBudWxsLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNldFByb3BzID0gdGhpcy5zZXRQcm9wcy5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHNldFByb3BzKG5ld1Byb3BzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKG5ld1Byb3BzKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXdQcm9wcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7LyogPENvbXAxIHZhbHVlPXtjYXJzQ2Fyb3VzZWx9IC8+ICovfVxuICAgICAgICAgICAgICAgIHsvKiA8Q29tcDFcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NhcnNDYXJvdXNlbH1cbiAgICAgICAgICAgICAgICAgICAgLy8gcGFnZT17dGhpcy5zdGF0ZS5wYWdlfVxuICAgICAgICAgICAgICAgICAgICAvLyBzZXRQcm9wcz17dGhpcy5zZXRQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgbnVtVmlzaWJsZT17M31cbiAgICAgICAgICAgICAgICAgICAgbnVtU2Nyb2xsPXsyfVxuICAgICAgICAgICAgICAgICAgICBhdXRvcGxheUludGVydmFsPXsxMDAwfVxuICAgICAgICAgICAgICAgICAgICBjaXJjdWxhcj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAvPiAqL31cbiAgICAgICAgICAgICAgICA8Q29tcDFcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NhcnNDYXJvdXNlbH1cbiAgICAgICAgICAgICAgICAgICAgbnVtVmlzaWJsZT17M31cbiAgICAgICAgICAgICAgICAgICAgbnVtU2Nyb2xsPXsxfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXN0b20tY2Fyb3VzZWxcIlxuICAgICAgICAgICAgICAgICAgICAvLyByZXNwb25zaXZlPXt0aGlzLnJlc3BvbnNpdmVTZXR0aW5nc31cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXsnY3VzdG9tSGVhZGVyJ31cbiAgICAgICAgICAgICAgICAgICAgcGFnZT17dGhpcy5zdGF0ZS5wYWdlfVxuICAgICAgICAgICAgICAgICAgICBzZXRQcm9wcz17dGhpcy5zZXRQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgLy8gY2lyY3VsYXI9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5SW50ZXJ2YWw9ezEwMDB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7LyogPFJhdGluZ0NvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgc2V0UHJvcHM9e3RoaXMuc2V0UHJvcHN9XG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgc3RhcnM9ezN9XG4gICAgICAgICAgICAgICAgLz4gKi99XG4gICAgICAgICAgICAgICAgey8qIDxMaXN0Qm94Q29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgIGlkPXsnaWRrJ31cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17Y2Fyc31cbiAgICAgICAgICAgICAgICAgICAgc2V0UHJvcHM9e3RoaXMuc2V0UHJvcHN9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6ICcxNWVtJ319XG4gICAgICAgICAgICAgICAgICAgIGxpc3RTdHlsZT17e21heEhlaWdodDogJzEwMHB4J319XG4gICAgICAgICAgICAgICAgICAgIGxpc3RDb250YWluZXJTdHlsZT17e21heEhlaWdodDogJzMwMHB4J319XG4gICAgICAgICAgICAgICAgICAgIG11bHRpcGxlPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXA9eydIZXknfVxuICAgICAgICAgICAgICAgIC8+ICovfVxuICAgICAgICAgICAgICAgIHsvKiA8T3JnYW5pemF0aW9uQ2hhcnRDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgc2V0UHJvcHM9e3RoaXMuc2V0UHJvcHN9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRhdGExfVxuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25Nb2RlPSdtdWx0aXBsZSdcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uPXt0aGlzLnN0YXRlLnNlbGVjdGlvbn1cbiAgICAgICAgICAgICAgICAvPiAqL31cbiAgICAgICAgICAgICAgICB7LyogPEV4dHJhRGFzaFVpQ29tcG9uZW50c1xuICAgICAgICAgICAgICAgICAgICBzZXRQcm9wcz17dGhpcy5zZXRQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAgICAgICAgICAgLz4gKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=