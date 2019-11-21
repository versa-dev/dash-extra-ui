webpackHotUpdateextra_dash_ui_components("main",{

/***/ "./src/lib/components/Carousel/CarouselComponent.js":
/*!**********************************************************!*\
  !*** ./src/lib/components/Carousel/CarouselComponent.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CarouselComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Carousel */ "./src/lib/components/Carousel/Carousel.js");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Button/Button */ "./src/lib/components/Button/Button.js");
/* harmony import */ var _theme_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme.css */ "./src/lib/components/Carousel/theme.css");
/* harmony import */ var _theme_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_theme_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _com_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./com.css */ "./src/lib/components/Carousel/com.css");
/* harmony import */ var _com_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_com_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Carousel_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Carousel.css */ "./src/lib/components/Carousel/Carousel.css");
/* harmony import */ var _Carousel_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Carousel_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _primeflex_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./primeflex.css */ "./src/lib/components/Carousel/primeflex.css");
/* harmony import */ var _primeflex_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_primeflex_css__WEBPACK_IMPORTED_MODULE_7__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var CarouselComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(CarouselComponent, _Component);

  function CarouselComponent() {
    var _this;

    _classCallCheck(this, CarouselComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CarouselComponent).call(this));

    _defineProperty(_assertThisInitialized(_this), "carTemplate", function (car) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "car-details"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-grid p-nogutter"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-col-12"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: car.image // alt={car.brand}

      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-col-12 car-data"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "car-title"
      }, car.brand), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "car-subtitle"
      }, car.year, " | ", car.color), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "car-buttons"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
        icon: "pi pi-search",
        className: "p-button-secondary"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
        icon: "pi pi-star",
        className: "p-button-secondary"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
        icon: "pi pi-cog",
        className: "p-button-secondary"
      })))));
    });

    _this.state = {
      cars: []
    }; // this.carservice = new CarService();
    // this.carTemplate = this.carTemplate.bind(this);

    _this.responsiveOptions = [{
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    }, {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    }, {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }];
    return _this;
  } // componentDidMount() {
  //     this.carservice
  //         .getCarsSmall()
  //         .then(data => this.setState({cars: data}));
  // }


  _createClass(CarouselComponent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "carousel-demo"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "content-section implementation"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Carousel__WEBPACK_IMPORTED_MODULE_2__["default"], {
        value: this.props.data,
        itemTemplate: this.carTemplate,
        numVisible: 4,
        numScroll: 3,
        header: 'basicHeader',
        responsiveOptions: this.responsiveOptions
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Carousel__WEBPACK_IMPORTED_MODULE_2__["default"], {
        value: this.props.data,
        itemTemplate: this.carTemplate,
        numVisible: 3,
        numScroll: 1,
        className: "custom-carousel",
        responsiveOptions: this.responsiveOptions,
        header: 'customHeader',
        circular: true,
        autoplayInterval: 3000 // onPageChange={e => console.log(e)}

      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Carousel__WEBPACK_IMPORTED_MODULE_2__["default"], {
        value: this.props.data,
        page: this.props.page,
        numScroll: 1,
        numVisible: 2,
        itemTemplate: this.carTemplate,
        orientation: "vertical",
        style: {
          maxWidth: '400px',
          marginTop: '2em'
        },
        verticalViewPortHeight: "330px",
        circular: true,
        autoplayInterval: 1000 // header={verticalHeader}
        ,
        onPageChange: function onPageChange(e) {
          return _this2.props.setProps({
            page: e.page
          });
        } // setprops={this.setProps}

      })));
    }
  }]);

  return CarouselComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


CarouselComponent.defaultProps = {
  id: null,
  value: null,
  page: 0,
  header: null,
  footer: null,
  style: null,
  className: null,
  itemTemplate: null,
  circular: false,
  autoplayInterval: 0,
  numVisible: 1,
  numScroll: 1,
  responsiveOptions: null,
  orientation: 'horizontal',
  verticalViewPortHeight: '300px',
  contentClassName: null,
  containerClassName: null,
  dotsContainerClassName: null,
  onPageChange: null
};
CarouselComponent.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  page: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  header: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  footer: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  itemTemplate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  circular: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  autoplayInterval: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  numVisible: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  numScroll: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  responsiveOptions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  orientation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  verticalViewPortHeight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  contentClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  containerClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  dotsContainerClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onPageChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvQ2Fyb3VzZWwvQ2Fyb3VzZWxDb21wb25lbnQuanMiXSwibmFtZXMiOlsiQ2Fyb3VzZWxDb21wb25lbnQiLCJjYXIiLCJpbWFnZSIsImJyYW5kIiwieWVhciIsImNvbG9yIiwic3RhdGUiLCJjYXJzIiwicmVzcG9uc2l2ZU9wdGlvbnMiLCJicmVha3BvaW50IiwibnVtVmlzaWJsZSIsIm51bVNjcm9sbCIsInByb3BzIiwiZGF0YSIsImNhclRlbXBsYXRlIiwicGFnZSIsIm1heFdpZHRoIiwibWFyZ2luVG9wIiwiZSIsInNldFByb3BzIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwiaWQiLCJ2YWx1ZSIsImhlYWRlciIsImZvb3RlciIsInN0eWxlIiwiY2xhc3NOYW1lIiwiaXRlbVRlbXBsYXRlIiwiY2lyY3VsYXIiLCJhdXRvcGxheUludGVydmFsIiwib3JpZW50YXRpb24iLCJ2ZXJ0aWNhbFZpZXdQb3J0SGVpZ2h0IiwiY29udGVudENsYXNzTmFtZSIsImNvbnRhaW5lckNsYXNzTmFtZSIsImRvdHNDb250YWluZXJDbGFzc05hbWUiLCJvblBhZ2VDaGFuZ2UiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJhbnkiLCJudW1iZXIiLCJvYmplY3QiLCJib29sIiwiYXJyYXkiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFcUJBLGlCOzs7OztBQUNqQiwrQkFBYztBQUFBOztBQUFBOztBQUNWOztBQURVLGtFQWlDQSxVQUFBQyxHQUFHLEVBQUk7QUFDakIsYUFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0k7QUFBSyxpQkFBUyxFQUFDO0FB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QVUxQmIsa0JBQWdCLEVBQUVRLGlEQUFTLENBQUNHLE1BVkY7QUFXMUIvQixZQUFVLEVBQUU0QixpREFBUyxDQUFDRyxNQVhJO0FBWTFCOUIsV0FBUyxFQUFFMkIsaURBQVMsQ0FBQ0csTUFaSztBQWExQmpDLG1CQUFpQixFQUFFOEIsaURBQVMsQ0FBQ00sS0FiSDtBQWMxQmIsYUFBVyxFQUFFTyxpREFBUyxDQUFDQyxNQWRHO0FBZTFCUCx3QkFBc0IsRUFBRU0saURBQVMsQ0FBQ0MsTUFmUjtBQWdCMUJOLGtCQUFnQixFQUFFSyxpREFBUyxDQUFDQyxNQWhCRjtBQWlCMUJMLG9CQUFrQixFQUFFSSxpREFBUyxDQUFDQyxNQWpCSjtBQWtCMUJKLHdCQUFzQixFQUFFRyxpREFBUyxDQUFDQyxNQWxCUjtBQW1CMUJILGNBQVksRUFBRUUsaURBQVMsQ0FBQ087QUFuQkUsQ0FBOUIsQyIsImZpbGUiOiIzNWU0YTM5LW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBDYXJvdXNlbCBmcm9tICcuL0Nhcm91c2VsJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vQnV0dG9uL0J1dHRvbic7XG5pbXBvcnQgJy4vdGhlbWUuY3NzJztcbmltcG9ydCAnLi9jb20uY3NzJztcbmltcG9ydCAnLi9DYXJvdXNlbC5jc3MnO1xuaW1wb3J0ICcuL3ByaW1lZmxleC5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJvdXNlbENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjYXJzOiBbXSxcbiAgICAgICAgfTtcbiAgICAgICAgLy8gdGhpcy5jYXJzZXJ2aWNlID0gbmV3IENhclNlcnZpY2UoKTtcbiAgICAgICAgLy8gdGhpcy5jYXJUZW1wbGF0ZSA9IHRoaXMuY2FyVGVtcGxhdGUuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnJlc3BvbnNpdmVPcHRpb25zID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6ICcxMDI0cHgnLFxuICAgICAgICAgICAgICAgIG51bVZpc2libGU6IDMsXG4gICAgICAgICAgICAgICAgbnVtU2Nyb2xsOiAzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiAnNzY4cHgnLFxuICAgICAgICAgICAgICAgIG51bVZpc2libGU6IDIsXG4gICAgICAgICAgICAgICAgbnVtU2Nyb2xsOiAyLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiAnNTYwcHgnLFxuICAgICAgICAgICAgICAgIG51bVZpc2libGU6IDEsXG4gICAgICAgICAgICAgICAgbnVtU2Nyb2xsOiAxLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICAvLyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyAgICAgdGhpcy5jYXJzZXJ2aWNlXG4gICAgLy8gICAgICAgICAuZ2V0Q2Fyc1NtYWxsKClcbiAgICAvLyAgICAgICAgIC50aGVuKGRhdGEgPT4gdGhpcy5zZXRTdGF0ZSh7Y2FyczogZGF0YX0pKTtcbiAgICAvLyB9XG5cbiAgICBjYXJUZW1wbGF0ZSA9IGNhciA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhci1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWdyaWQgcC1ub2d1dHRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtjYXIuaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWx0PXtjYXIuYnJhbmR9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWNvbC0xMiBjYXItZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXItdGl0bGVcIj57Y2FyLmJyYW5kfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXItc3VidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2FyLnllYXJ9IHwge2Nhci5jb2xvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhci1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwicGkgcGktc2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC1idXR0b24tc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInBpIHBpLXN0YXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLWJ1dHRvbi1zZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwicGkgcGktY29nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC1idXR0b24tc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtZGVtb1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1zZWN0aW9uIGltcGxlbWVudGF0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuZGF0YX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1UZW1wbGF0ZT17dGhpcy5jYXJUZW1wbGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG51bVZpc2libGU9ezR9XG4gICAgICAgICAgICAgICAgICAgICAgICBudW1TY3JvbGw9ezN9XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9eydiYXNpY0hlYWRlcid9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlT3B0aW9ucz17dGhpcy5yZXNwb25zaXZlT3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgPjwvQ2Fyb3VzZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgPENhcm91c2VsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5kYXRhfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVRlbXBsYXRlPXt0aGlzLmNhclRlbXBsYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtVmlzaWJsZT17M31cbiAgICAgICAgICAgICAgICAgICAgICAgIG51bVNjcm9sbD17MX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1jYXJvdXNlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlT3B0aW9ucz17dGhpcy5yZXNwb25zaXZlT3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj17J2N1c3RvbUhlYWRlcid9XG4gICAgICAgICAgICAgICAgICAgICAgICBjaXJjdWxhcj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5SW50ZXJ2YWw9ezMwMDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvblBhZ2VDaGFuZ2U9e2UgPT4gY29uc29sZS5sb2coZSl9XG4gICAgICAgICAgICAgICAgICAgID48L0Nhcm91c2VsPlxuXG4gICAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuZGF0YX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2U9e3RoaXMucHJvcHMucGFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG51bVNjcm9sbD17MX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG51bVZpc2libGU9ezJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtVGVtcGxhdGU9e3RoaXMuY2FyVGVtcGxhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWF4V2lkdGg6ICc0MDBweCcsIG1hcmdpblRvcDogJzJlbSd9fVxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxWaWV3UG9ydEhlaWdodD1cIjMzMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNpcmN1bGFyPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b3BsYXlJbnRlcnZhbD17MTAwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGhlYWRlcj17dmVydGljYWxIZWFkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvblBhZ2VDaGFuZ2U9e2UgPT4gdGhpcy5wcm9wcy5zZXRQcm9wcyh7cGFnZTogZS5wYWdlfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZXRwcm9wcz17dGhpcy5zZXRQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgPjwvQ2Fyb3VzZWw+XG4gICAgICAgICAgICAgICAgICAgIHsvKiBoZXl5ICovfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5DYXJvdXNlbENvbXBvbmVudC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgaWQ6IG51bGwsXG4gICAgdmFsdWU6IG51bGwsXG4gICAgcGFnZTogMCxcbiAgICBoZWFkZXI6IG51bGwsXG4gICAgZm9vdGVyOiBudWxsLFxuICAgIHN0eWxlOiBudWxsLFxuICAgIGNsYXNzTmFtZTogbnVsbCxcbiAgICBpdGVtVGVtcGxhdGU6IG51bGwsXG4gICAgY2lyY3VsYXI6IGZhbHNlLFxuICAgIGF1dG9wbGF5SW50ZXJ2YWw6IDAsXG4gICAgbnVtVmlzaWJsZTogMSxcbiAgICBudW1TY3JvbGw6IDEsXG4gICAgcmVzcG9uc2l2ZU9wdGlvbnM6IG51bGwsXG4gICAgb3JpZW50YXRpb246ICdob3Jpem9udGFsJyxcbiAgICB2ZXJ0aWNhbFZpZXdQb3J0SGVpZ2h0OiAnMzAwcHgnLFxuICAgIGNvbnRlbnRDbGFzc05hbWU6IG51bGwsXG4gICAgY29udGFpbmVyQ2xhc3NOYW1lOiBudWxsLFxuICAgIGRvdHNDb250YWluZXJDbGFzc05hbWU6IG51bGwsXG4gICAgb25QYWdlQ2hhbmdlOiBudWxsLFxufTtcblxuQ2Fyb3VzZWxDb21wb25lbnQucHJvcFR5cGVzID0ge1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMuYW55LFxuICAgIHBhZ2U6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgaGVhZGVyOiBQcm9wVHlwZXMuYW55LFxuICAgIGZvb3RlcjogUHJvcFR5cGVzLmFueSxcbiAgICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaXRlbVRlbXBsYXRlOiBQcm9wVHlwZXMuYW55LFxuICAgIGNpcmN1bGFyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBhdXRvcGxheUludGVydmFsOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG51bVZpc2libGU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgbnVtU2Nyb2xsOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHJlc3BvbnNpdmVPcHRpb25zOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgb3JpZW50YXRpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdmVydGljYWxWaWV3UG9ydEhlaWdodDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjb250ZW50Q2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNvbnRhaW5lckNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkb3RzQ29udGFpbmVyQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uUGFnZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==