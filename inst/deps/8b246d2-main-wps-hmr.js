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
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Carousel */ "./src/lib/components/Carousel/Carousel.js");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button/Button */ "./src/lib/components/Button/Button.js");
/* harmony import */ var _theme_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme.css */ "./src/lib/components/Carousel/theme.css");
/* harmony import */ var _theme_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_theme_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _com_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./com.css */ "./src/lib/components/Carousel/com.css");
/* harmony import */ var _com_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_com_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Carousel_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Carousel.css */ "./src/lib/components/Carousel/Carousel.css");
/* harmony import */ var _Carousel_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Carousel_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _primeflex_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./primeflex.css */ "./src/lib/components/Carousel/primeflex.css");
/* harmony import */ var _primeflex_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_primeflex_css__WEBPACK_IMPORTED_MODULE_6__);
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
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
        icon: "pi pi-search",
        className: "p-button-secondary"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
        icon: "pi pi-star",
        className: "p-button-secondary"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
      var _React$createElement;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "carousel-demo"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "content-section implementation"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Carousel__WEBPACK_IMPORTED_MODULE_1__["default"], {
        value: this.props.data,
        itemTemplate: this.carTemplate,
        numVisible: 4,
        numScroll: 3,
        header: 'basicHeader',
        responsiveOptions: this.responsiveOptions
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Carousel__WEBPACK_IMPORTED_MODULE_1__["default"], {
        value: this.props.data,
        itemTemplate: this.carTemplate,
        numVisible: 3,
        numScroll: 1,
        className: "custom-carousel",
        responsiveOptions: this.responsiveOptions,
        header: 'customHeader',
        circular: true,
        autoplayInterval: 3000
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Carousel__WEBPACK_IMPORTED_MODULE_1__["default"], (_React$createElement = {
        value: this.props.data,
        numVisible: 3,
        numScroll: 1,
        itemTemplate: this.carTemplate // orientation="vertical"
        ,
        style: {
          maxWidth: '400px',
          marginTop: '2em'
        }
      }, _defineProperty(_React$createElement, "numVisible", 1), _defineProperty(_React$createElement, "numScroll", 1), _defineProperty(_React$createElement, "verticalViewPortHeight", "330px"), _defineProperty(_React$createElement, "onPageChange", function onPageChange(e) {
        return console.log(e);
      }), _React$createElement))));
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
  orientation: "horizontal",
  verticalViewPortHeight: "300px",
  contentClassName: null,
  containerClassName: null,
  dotsContainerClassName: null,
  onPageChange: null
};
CarouselComponent.propTypes = {
  id: PropTypes.string,
  value: PropTypes.any,
  page: PropTypes.number,
  header: PropTypes.any,
  footer: PropTypes.any,
  style: PropTypes.object,
  className: PropTypes.string,
  itemTemplate: PropTypes.any,
  circular: PropTypes.bool,
  autoplayInterval: PropTypes.number,
  numVisible: PropTypes.number,
  numScroll: PropTypes.number,
  responsiveOptions: PropTypes.array,
  orientation: PropTypes.string,
  verticalViewPortHeight: PropTypes.string,
  contentClassName: PropTypes.string,
  containerClassName: PropTypes.string,
  dotsContainerClassName: PropTypes.string,
  onPageChange: PropTypes.func
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvQ2Fyb3VzZWwvQ2Fyb3VzZWxDb21wb25lbnQuanMiXSwibmFtZXMiOlsiQ2Fyb3VzZWxDb21wb25lbnQiLCJjYXIiLCJpbWFnZSIsImJyYW5kIiwieWVhciIsImNvbG9yIiwic3RhdGUiLCJjYXJzIiwicmVzcG9uc2l2ZU9wdGlvbnMiLCJicmVha3BvaW50IiwibnVtVmlzaWJsZSIsIm51bVNjcm9sbCIsInByb3BzIiwiZGF0YSIsImNhclRlbXBsYXRlIiwibWF4V2lkdGgiLCJtYXJnaW5Ub3AiLCJlIiwiY29uc29sZSIsImxvZyIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsImlkIiwidmFsdWUiLCJwYWdlIiwiaGVhZGVyIiwiZm9vdGVyIiwic3R5bGUiLCJjbGFzc05hbWUiLCJpdGVtVGVtcGxhdGUiLCJjaXJjdWxhciIsImF1dG9wbGF5SW50ZXJ2YWwiLCJvcmllbnRhdGlvbiIsInZlcnRpY2FsVmlld1BvcnRIZWlnaHQiLCJjb250ZW50Q2xhc3NOYW1lIiwiY29udGFpbmVyQ2xhc3NOYW1lIiwiZG90c0NvbnRhaW5lckNsYXNzTmFtZSIsIm9uUGFnZUNoYW5nZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImFueSIsIm51bWJlciIsIm9iamVjdCIsImJvb2wiLCJhcnJheSIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCQSxpQjs7Ozs7QUFDakIsK0JBQWM7QUFBQTs7QUFBQTs7QUFDVjs7QUFEVSxrRUFpQ0EsVUFBQUMsR0FBRyxFQUFJO0FBQ2pCLGFBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJO0FBQUssaUJBQVMsRUFBQztBQUFm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ZEc7QUFlMUJQLHdCQUFzQixFQUFFTSxTQUFTLENBQUNDLE1BZlI7QUFnQjFCTixrQkFBZ0IsRUFBRUssU0FBUyxDQUFDQyxNQWhCRjtBQWlCMUJMLG9CQUFrQixFQUFFSSxTQUFTLENBQUNDLE1BakJKO0FBa0IxQkosd0JBQXNCLEVBQUVHLFNBQVMsQ0FBQ0MsTUFsQlI7QUFtQjFCSCxjQUFZLEVBQUVFLFNBQVMsQ0FBQ087QUFuQkUsQ0FBOUIsQyIsImZpbGUiOiI4YjI0NmQyLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENhcm91c2VsIGZyb20gJy4vQ2Fyb3VzZWwnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9CdXR0b24vQnV0dG9uJztcbmltcG9ydCAnLi90aGVtZS5jc3MnO1xuaW1wb3J0ICcuL2NvbS5jc3MnO1xuaW1wb3J0ICcuL0Nhcm91c2VsLmNzcyc7XG5pbXBvcnQgJy4vcHJpbWVmbGV4LmNzcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2Fyb3VzZWxDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY2FyczogW10sXG4gICAgICAgIH07XG4gICAgICAgIC8vIHRoaXMuY2Fyc2VydmljZSA9IG5ldyBDYXJTZXJ2aWNlKCk7XG4gICAgICAgIC8vIHRoaXMuY2FyVGVtcGxhdGUgPSB0aGlzLmNhclRlbXBsYXRlLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5yZXNwb25zaXZlT3B0aW9ucyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiAnMTAyNHB4JyxcbiAgICAgICAgICAgICAgICBudW1WaXNpYmxlOiAzLFxuICAgICAgICAgICAgICAgIG51bVNjcm9sbDogMyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogJzc2OHB4JyxcbiAgICAgICAgICAgICAgICBudW1WaXNpYmxlOiAyLFxuICAgICAgICAgICAgICAgIG51bVNjcm9sbDogMixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogJzU2MHB4JyxcbiAgICAgICAgICAgICAgICBudW1WaXNpYmxlOiAxLFxuICAgICAgICAgICAgICAgIG51bVNjcm9sbDogMSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgLy8gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gICAgIHRoaXMuY2Fyc2VydmljZVxuICAgIC8vICAgICAgICAgLmdldENhcnNTbWFsbCgpXG4gICAgLy8gICAgICAgICAudGhlbihkYXRhID0+IHRoaXMuc2V0U3RhdGUoe2NhcnM6IGRhdGF9KSk7XG4gICAgLy8gfVxuXG4gICAgY2FyVGVtcGxhdGUgPSBjYXIgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXItZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1ncmlkIHAtbm9ndXR0ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Y2FyLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFsdD17Y2FyLmJyYW5kfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1jb2wtMTIgY2FyLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyLXRpdGxlXCI+e2Nhci5icmFuZH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyLXN1YnRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Nhci55ZWFyfSB8IHtjYXIuY29sb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXItYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInBpIHBpLXNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtYnV0dG9uLXNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJwaSBwaS1zdGFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC1idXR0b24tc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInBpIHBpLWNvZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtYnV0dG9uLXNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWRlbW9cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtc2VjdGlvbiBpbXBsZW1lbnRhdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmRhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtVGVtcGxhdGU9e3RoaXMuY2FyVGVtcGxhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBudW1WaXNpYmxlPXs0fVxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtU2Nyb2xsPXszfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXsnYmFzaWNIZWFkZXInfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZU9wdGlvbnM9e3RoaXMucmVzcG9uc2l2ZU9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgID48L0Nhcm91c2VsPlxuXG4gICAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuZGF0YX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1UZW1wbGF0ZT17dGhpcy5jYXJUZW1wbGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG51bVZpc2libGU9ezN9XG4gICAgICAgICAgICAgICAgICAgICAgICBudW1TY3JvbGw9ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXN0b20tY2Fyb3VzZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZU9wdGlvbnM9e3RoaXMucmVzcG9uc2l2ZU9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9eydjdXN0b21IZWFkZXInfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2lyY3VsYXI9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvcGxheUludGVydmFsPXszMDAwfVxuICAgICAgICAgICAgICAgICAgICA+PC9DYXJvdXNlbD5cblxuICAgICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmRhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICBudW1WaXNpYmxlPXszfVxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtU2Nyb2xsPXsxfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVRlbXBsYXRlPXt0aGlzLmNhclRlbXBsYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21heFdpZHRoOiAnNDAwcHgnLCBtYXJnaW5Ub3A6ICcyZW0nfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG51bVZpc2libGU9ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICBudW1TY3JvbGw9ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbFZpZXdQb3J0SGVpZ2h0PVwiMzMwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaGVhZGVyPXt2ZXJ0aWNhbEhlYWRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUGFnZUNoYW5nZT17ZSA9PiBjb25zb2xlLmxvZyhlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldHByb3BzPXt0aGlzLnNldFByb3BzfVxuICAgICAgICAgICAgICAgICAgICA+PC9DYXJvdXNlbD5cbiAgICAgICAgICAgICAgICAgICAgey8qIGhleXkgKi99XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkNhcm91c2VsQ29tcG9uZW50LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBpZDogbnVsbCxcbiAgICB2YWx1ZTogbnVsbCxcbiAgICBwYWdlOiAwLFxuICAgIGhlYWRlcjogbnVsbCxcbiAgICBmb290ZXI6IG51bGwsXG4gICAgc3R5bGU6IG51bGwsXG4gICAgY2xhc3NOYW1lOiBudWxsLFxuICAgIGl0ZW1UZW1wbGF0ZTogbnVsbCxcbiAgICBjaXJjdWxhcjogZmFsc2UsXG4gICAgYXV0b3BsYXlJbnRlcnZhbDogMCxcbiAgICBudW1WaXNpYmxlOiAxLFxuICAgIG51bVNjcm9sbDogMSxcbiAgICByZXNwb25zaXZlT3B0aW9uczogbnVsbCxcbiAgICBvcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIsXG4gICAgdmVydGljYWxWaWV3UG9ydEhlaWdodDogXCIzMDBweFwiLFxuICAgIGNvbnRlbnRDbGFzc05hbWU6IG51bGwsXG4gICAgY29udGFpbmVyQ2xhc3NOYW1lOiBudWxsLFxuICAgIGRvdHNDb250YWluZXJDbGFzc05hbWU6IG51bGwsXG4gICAgb25QYWdlQ2hhbmdlOiBudWxsXG59XG5cbkNhcm91c2VsQ29tcG9uZW50LnByb3BUeXBlcyA9IHtcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB2YWx1ZTogUHJvcFR5cGVzLmFueSxcbiAgICBwYWdlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGhlYWRlcjogUHJvcFR5cGVzLmFueSxcbiAgICBmb290ZXI6IFByb3BUeXBlcy5hbnksXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGl0ZW1UZW1wbGF0ZTogUHJvcFR5cGVzLmFueSxcbiAgICBjaXJjdWxhcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgYXV0b3BsYXlJbnRlcnZhbDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBudW1WaXNpYmxlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG51bVNjcm9sbDogUHJvcFR5cGVzLm51bWJlcixcbiAgICByZXNwb25zaXZlT3B0aW9uczogUHJvcFR5cGVzLmFycmF5LFxuICAgIG9yaWVudGF0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHZlcnRpY2FsVmlld1BvcnRIZWlnaHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY29udGVudENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjb250YWluZXJDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZG90c0NvbnRhaW5lckNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvblBhZ2VDaGFuZ2U6IFByb3BUeXBlcy5mdW5jXG59OyJdLCJzb3VyY2VSb290IjoiIn0=