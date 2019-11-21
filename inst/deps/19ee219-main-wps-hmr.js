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
/* harmony import */ var _com_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./com.css */ "./src/lib/components/Carousel/com.css");
/* harmony import */ var _com_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_com_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Carousel_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Carousel.css */ "./src/lib/components/Carousel/Carousel.css");
/* harmony import */ var _Carousel_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Carousel_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _primeflex_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./primeflex.css */ "./src/lib/components/Carousel/primeflex.css");
/* harmony import */ var _primeflex_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_primeflex_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _theme_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./theme.css */ "./src/lib/components/Carousel/theme.css");
/* harmony import */ var _theme_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_theme_css__WEBPACK_IMPORTED_MODULE_7__);
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
    };
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
  }

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

      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Carousel__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
        value: this.props.data,
        page: this.props.page,
        numScroll: 1,
        numVisible: 2,
        itemTemplate: this.carTemplate // orientation="vertical"
        // style={{maxWidth: '400px', marginTop: '2em'}}
        // verticalViewPortHeight="330px"
        ,
        circular: true,
        autoplayInterval: 1000 // header={verticalHeader}
        ,
        onPageChange: function onPageChange(e) {
          return _this2.props.setProps({
            page: e.page
          });
        }
      }, this.props))));
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
  setProps: function setProps() {}
};
CarouselComponent.propTypes = {
  /**
   * Unique identifier of the element.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * An array of objects to display.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,

  /**
   * Index of the first item.
   */
  page: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Label of header.
   */
  header: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,

  /**
   * Label of footer.
   */
  footer: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,

  /**
   * Inline style of the component.
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Style class of the component.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Function that gets an item in the value and returns the content for it.
   */
  circular: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Time in milliseconds to scroll items automatically.
   */
  autoplayInterval: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * 	Number of items per page.
   */
  numVisible: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Number of items to scroll.
   */
  numScroll: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * 	An array of options for responsive design.
   */
  responsiveOptions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,

  /**
   * Specifies the layout of the component, valid values are "horizontal" and "vertical".
   */
  orientation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * 	Height of the viewport in vertical layout.
   */
  verticalViewPortHeight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * 	Style class of main content.
   */
  contentClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * 	Style class of the viewport container.
   */
  containerClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * 	Style class of the paginator items.
   */
  dotsContainerClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvQ2Fyb3VzZWwvQ2Fyb3VzZWxDb21wb25lbnQuanMiXSwibmFtZXMiOlsiQ2Fyb3VzZWxDb21wb25lbnQiLCJjYXIiLCJpbWFnZSIsImJyYW5kIiwieWVhciIsImNvbG9yIiwic3RhdGUiLCJjYXJzIiwicmVzcG9uc2l2ZU9wdGlvbnMiLCJicmVha3BvaW50IiwibnVtVmlzaWJsZSIsIm51bVNjcm9sbCIsInByb3BzIiwiZGF0YSIsImNhclRlbXBsYXRlIiwicGFnZSIsImUiLCJzZXRQcm9wcyIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsImlkIiwidmFsdWUiLCJoZWFkZXIiLCJmb290ZXIiLCJzdHlsZSIsImNsYXNzTmFtZSIsImNpcmN1bGFyIiwiYXV0b3BsYXlJbnRlcnZhbCIsIm9yaWVudGF0aW9uIiwidmVydGljYWxWaWV3UG9ydEhlaWdodCIsImNvbnRlbnRDbGFzc05hbWUiLCJjb250YWluZXJDbGFzc05hbWUiLCJkb3RzQ29udGFpbmVyQ2xhc3NOYW1lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYW55IiwibnVtYmVyIiwib2JqZWN0IiwiYm9vbCIsImFycmF5IiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7SUFFcUJBLGlCOzs7OztBQUNqQiwrQkFBYztBQUFBOztBQUFBOztBQUNWOztBQURVLGtFQXdCQSxVQUFBQyxHQUFHLEVBQUk7QUFDakIsYUFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSTtBQUNJLFdBQUcsRUFBRUEsR0FBRyxDQUFDQyxLQURiLENBRUk7O0FBRkos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QWlCLEVBQUUwQixpREFBUyxDQUFDTSxLQWpESDs7QUFrRDFCOzs7QUFHQVosYUFBVyxFQUFFTSxpREFBUyxDQUFDQyxNQXJERzs7QUFzRDFCOzs7QUFHQU4sd0JBQXNCLEVBQUVLLGlEQUFTLENBQUNDLE1BekRSOztBQTBEMUI7OztBQUdBTCxrQkFBZ0IsRUFBRUksaURBQVMsQ0FBQ0MsTUE3REY7O0FBOEQxQjs7O0FBR0FKLG9CQUFrQixFQUFFRyxpREFBUyxDQUFDQyxNQWpFSjs7QUFrRTFCOzs7QUFHQUgsd0JBQXNCLEVBQUVFLGlEQUFTLENBQUNDLE1BckVSOztBQXNFMUI7Ozs7QUFJQWxCLFVBQVEsRUFBRWlCLGlEQUFTLENBQUNPO0FBMUVNLENBQTlCLEMiLCJmaWxlIjoiMTllZTIxOS1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnLi9DYXJvdXNlbCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL0J1dHRvbi9CdXR0b24nO1xuXG5pbXBvcnQgJy4vY29tLmNzcyc7XG5pbXBvcnQgJy4vQ2Fyb3VzZWwuY3NzJztcbmltcG9ydCAnLi9wcmltZWZsZXguY3NzJztcbmltcG9ydCAnLi90aGVtZS5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJvdXNlbENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjYXJzOiBbXSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5yZXNwb25zaXZlT3B0aW9ucyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiAnMTAyNHB4JyxcbiAgICAgICAgICAgICAgICBudW1WaXNpYmxlOiAzLFxuICAgICAgICAgICAgICAgIG51bVNjcm9sbDogMyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogJzc2OHB4JyxcbiAgICAgICAgICAgICAgICBudW1WaXNpYmxlOiAyLFxuICAgICAgICAgICAgICAgIG51bVNjcm9sbDogMixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogJzU2MHB4JyxcbiAgICAgICAgICAgICAgICBudW1WaXNpYmxlOiAxLFxuICAgICAgICAgICAgICAgIG51bVNjcm9sbDogMSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgY2FyVGVtcGxhdGUgPSBjYXIgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXItZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1ncmlkIHAtbm9ndXR0ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Y2FyLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFsdD17Y2FyLmJyYW5kfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1jb2wtMTIgY2FyLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyLXRpdGxlXCI+e2Nhci5icmFuZH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyLXN1YnRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Nhci55ZWFyfSB8IHtjYXIuY29sb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXItYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInBpIHBpLXNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtYnV0dG9uLXNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJwaSBwaS1zdGFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC1idXR0b24tc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInBpIHBpLWNvZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtYnV0dG9uLXNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWRlbW9cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtc2VjdGlvbiBpbXBsZW1lbnRhdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmRhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtVGVtcGxhdGU9e3RoaXMuY2FyVGVtcGxhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBudW1WaXNpYmxlPXs0fVxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtU2Nyb2xsPXszfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXsnYmFzaWNIZWFkZXInfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZU9wdGlvbnM9e3RoaXMucmVzcG9uc2l2ZU9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgID48L0Nhcm91c2VsPlxuXG4gICAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuZGF0YX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1UZW1wbGF0ZT17dGhpcy5jYXJUZW1wbGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG51bVZpc2libGU9ezN9XG4gICAgICAgICAgICAgICAgICAgICAgICBudW1TY3JvbGw9ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXN0b20tY2Fyb3VzZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZU9wdGlvbnM9e3RoaXMucmVzcG9uc2l2ZU9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9eydjdXN0b21IZWFkZXInfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2lyY3VsYXI9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvcGxheUludGVydmFsPXszMDAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb25QYWdlQ2hhbmdlPXtlID0+IGNvbnNvbGUubG9nKGUpfVxuICAgICAgICAgICAgICAgICAgICA+PC9DYXJvdXNlbD5cblxuICAgICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmRhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlPXt0aGlzLnByb3BzLnBhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBudW1TY3JvbGw9ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICBudW1WaXNpYmxlPXsyfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVRlbXBsYXRlPXt0aGlzLmNhclRlbXBsYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzdHlsZT17e21heFdpZHRoOiAnNDAwcHgnLCBtYXJnaW5Ub3A6ICcyZW0nfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZlcnRpY2FsVmlld1BvcnRIZWlnaHQ9XCIzMzBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjaXJjdWxhcj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5SW50ZXJ2YWw9ezEwMDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBoZWFkZXI9e3ZlcnRpY2FsSGVhZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25QYWdlQ2hhbmdlPXtlID0+IHRoaXMucHJvcHMuc2V0UHJvcHMoe3BhZ2U6IGUucGFnZX0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgICAgID48L0Nhcm91c2VsPlxuICAgICAgICAgICAgICAgICAgICB7LyogaGV5eSAqL31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuQ2Fyb3VzZWxDb21wb25lbnQuZGVmYXVsdFByb3BzID0ge1xuICAgIGlkOiBudWxsLFxuICAgIHZhbHVlOiBudWxsLFxuICAgIHBhZ2U6IDAsXG4gICAgaGVhZGVyOiBudWxsLFxuICAgIGZvb3RlcjogbnVsbCxcbiAgICBzdHlsZTogbnVsbCxcbiAgICBjbGFzc05hbWU6IG51bGwsXG4gICAgY2lyY3VsYXI6IGZhbHNlLFxuICAgIGF1dG9wbGF5SW50ZXJ2YWw6IDAsXG4gICAgbnVtVmlzaWJsZTogMSxcbiAgICBudW1TY3JvbGw6IDEsXG4gICAgcmVzcG9uc2l2ZU9wdGlvbnM6IG51bGwsXG4gICAgb3JpZW50YXRpb246ICdob3Jpem9udGFsJyxcbiAgICB2ZXJ0aWNhbFZpZXdQb3J0SGVpZ2h0OiAnMzAwcHgnLFxuICAgIGNvbnRlbnRDbGFzc05hbWU6IG51bGwsXG4gICAgY29udGFpbmVyQ2xhc3NOYW1lOiBudWxsLFxuICAgIGRvdHNDb250YWluZXJDbGFzc05hbWU6IG51bGwsXG4gICAgc2V0UHJvcHM6ICgpID0+IHt9LFxufTtcblxuQ2Fyb3VzZWxDb21wb25lbnQucHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIFVuaXF1ZSBpZGVudGlmaWVyIG9mIHRoZSBlbGVtZW50LlxuICAgICAqL1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIG9iamVjdHMgdG8gZGlzcGxheS5cbiAgICAgKi9cbiAgICB2YWx1ZTogUHJvcFR5cGVzLmFueSxcbiAgICAvKipcbiAgICAgKiBJbmRleCBvZiB0aGUgZmlyc3QgaXRlbS5cbiAgICAgKi9cbiAgICBwYWdlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIC8qKlxuICAgICAqIExhYmVsIG9mIGhlYWRlci5cbiAgICAgKi9cbiAgICBoZWFkZXI6IFByb3BUeXBlcy5hbnksXG4gICAgLyoqXG4gICAgICogTGFiZWwgb2YgZm9vdGVyLlxuICAgICAqL1xuICAgIGZvb3RlcjogUHJvcFR5cGVzLmFueSxcblxuICAgIC8qKlxuICAgICAqIElubGluZSBzdHlsZSBvZiB0aGUgY29tcG9uZW50LlxuICAgICAqL1xuICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIC8qKlxuICAgICAqIFN0eWxlIGNsYXNzIG9mIHRoZSBjb21wb25lbnQuXG4gICAgICovXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgZ2V0cyBhbiBpdGVtIGluIHRoZSB2YWx1ZSBhbmQgcmV0dXJucyB0aGUgY29udGVudCBmb3IgaXQuXG4gICAgICovXG4gICAgY2lyY3VsYXI6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIFRpbWUgaW4gbWlsbGlzZWNvbmRzIHRvIHNjcm9sbCBpdGVtcyBhdXRvbWF0aWNhbGx5LlxuICAgICAqL1xuICAgIGF1dG9wbGF5SW50ZXJ2YWw6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgLyoqXG4gICAgICogXHROdW1iZXIgb2YgaXRlbXMgcGVyIHBhZ2UuXG4gICAgICovXG4gICAgbnVtVmlzaWJsZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICAvKipcbiAgICAgKiBOdW1iZXIgb2YgaXRlbXMgdG8gc2Nyb2xsLlxuICAgICAqL1xuICAgIG51bVNjcm9sbDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAvKipcbiAgICAgKiBcdEFuIGFycmF5IG9mIG9wdGlvbnMgZm9yIHJlc3BvbnNpdmUgZGVzaWduLlxuICAgICAqL1xuICAgIHJlc3BvbnNpdmVPcHRpb25zOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgLyoqXG4gICAgICogU3BlY2lmaWVzIHRoZSBsYXlvdXQgb2YgdGhlIGNvbXBvbmVudCwgdmFsaWQgdmFsdWVzIGFyZSBcImhvcml6b250YWxcIiBhbmQgXCJ2ZXJ0aWNhbFwiLlxuICAgICAqL1xuICAgIG9yaWVudGF0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqIFx0SGVpZ2h0IG9mIHRoZSB2aWV3cG9ydCBpbiB2ZXJ0aWNhbCBsYXlvdXQuXG4gICAgICovXG4gICAgdmVydGljYWxWaWV3UG9ydEhlaWdodDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKipcbiAgICAgKiBcdFN0eWxlIGNsYXNzIG9mIG1haW4gY29udGVudC5cbiAgICAgKi9cbiAgICBjb250ZW50Q2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqIFx0U3R5bGUgY2xhc3Mgb2YgdGhlIHZpZXdwb3J0IGNvbnRhaW5lci5cbiAgICAgKi9cbiAgICBjb250YWluZXJDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICogXHRTdHlsZSBjbGFzcyBvZiB0aGUgcGFnaW5hdG9yIGl0ZW1zLlxuICAgICAqL1xuICAgIGRvdHNDb250YWluZXJDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICogRGFzaC1hc3NpZ25lZCBjYWxsYmFjayB0aGF0IHNob3VsZCBiZSBjYWxsZWQgdG8gcmVwb3J0IHByb3BlcnR5IGNoYW5nZXNcbiAgICAgKiB0byBEYXNoLCB0byBtYWtlIHRoZW0gYXZhaWxhYmxlIGZvciBjYWxsYmFja3MuXG4gICAgICovXG4gICAgc2V0UHJvcHM6IFByb3BUeXBlcy5mdW5jLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=