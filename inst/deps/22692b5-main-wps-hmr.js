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









/**
 * Wrapper to render a carousel component
 * Adds custom template
 */

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
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Carousel__WEBPACK_IMPORTED_MODULE_2__["default"] // value={this.props.value}
      // page={this.props.page}
      , _extends({
        itemTemplate: this.carTemplate // orientation="vertical"
        // style={{maxWidth: '400px', marginTop: '2em'}}
        // verticalViewPortHeight="330px"
        // circular={true}
        // autoplayInterval={1000}
        // header={verticalHeader}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvQ2Fyb3VzZWwvQ2Fyb3VzZWxDb21wb25lbnQuanMiXSwibmFtZXMiOlsiQ2Fyb3VzZWxDb21wb25lbnQiLCJjYXIiLCJpbWFnZSIsImJyYW5kIiwieWVhciIsImNvbG9yIiwicmVzcG9uc2l2ZU9wdGlvbnMiLCJicmVha3BvaW50IiwibnVtVmlzaWJsZSIsIm51bVNjcm9sbCIsImNhclRlbXBsYXRlIiwiZSIsInByb3BzIiwic2V0UHJvcHMiLCJwYWdlIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwiaWQiLCJ2YWx1ZSIsImhlYWRlciIsImZvb3RlciIsInN0eWxlIiwiY2xhc3NOYW1lIiwiY2lyY3VsYXIiLCJhdXRvcGxheUludGVydmFsIiwib3JpZW50YXRpb24iLCJ2ZXJ0aWNhbFZpZXdQb3J0SGVpZ2h0IiwiY29udGVudENsYXNzTmFtZSIsImNvbnRhaW5lckNsYXNzTmFtZSIsImRvdHNDb250YWluZXJDbGFzc05hbWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJhbnkiLCJudW1iZXIiLCJvYmplY3QiLCJib29sIiwiYXJyYXkiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0lBSXFCQSxpQjs7Ozs7QUFDakIsK0JBQWM7QUFBQTs7QUFBQTs7QUFDVjs7QUFEVSxrRUFxQkEsVUFBQUMsR0FBRyxFQUFJO0FBQ2pCLGFBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0k7QUFDSSxXQUFHLEVBQUVBLEdBQUcsQ0FBQ0MsS0FEYixDQUVJOztBQUZKLFFBREosQ0FESixFQU9J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TUF6QlM7O0FBMEIxQjs7O0FBR0FiLFdBQVMsRUFBRVMsaURBQVMsQ0FBQ0MsTUE3Qks7O0FBOEIxQjs7O0FBR0FULFVBQVEsRUFBRVEsaURBQVMsQ0FBQ0ssSUFqQ007O0FBa0MxQjs7O0FBR0FaLGtCQUFnQixFQUFFTyxpREFBUyxDQUFDRyxNQXJDRjs7QUFzQzFCOzs7QUFHQTFCLFlBQVUsRUFBRXVCLGlEQUFTLENBQUNHLE1BekNJOztBQTBDMUI7OztBQUdBekIsV0FBUyxFQUFFc0IsaURBQVMsQ0FBQ0csTUE3Q0s7O0FBOEMxQjs7O0FBR0E1QixtQkFBaUIsRUFBRXlCLGlEQUFTLENBQUNNLEtBakRIOztBQWtEMUI7OztBQUdBWixhQUFXLEVBQUVNLGlEQUFTLENBQUNDLE1BckRHOztBQXNEMUI7OztBQUdBTix3QkFBc0IsRUFBRUssaURBQVMsQ0FBQ0MsTUF6RFI7O0FBMEQxQjs7O0FBR0FMLGtCQUFnQixFQUFFSSxpREFBUyxDQUFDQyxNQTdERjs7QUE4RDFCOzs7QUFHQUosb0JBQWtCLEVBQUVHLGlEQUFTLENBQUNDLE1BakVKOztBQWtFMUI7OztBQUdBSCx3QkFBc0IsRUFBRUUsaURBQVMsQ0FBQ0MsTUFyRVI7O0FBc0UxQjs7OztBQUlBbkIsVUFBUSxFQUFFa0IsaURBQVMsQ0FBQ087QUExRU0sQ0FBOUIsQyIsImZpbGUiOiIyMjY5MmI1LW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBDYXJvdXNlbCBmcm9tICcuL0Nhcm91c2VsJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vQnV0dG9uL0J1dHRvbic7XG5pbXBvcnQgJy4vY29tLmNzcyc7XG5pbXBvcnQgJy4vQ2Fyb3VzZWwuY3NzJztcbmltcG9ydCAnLi9wcmltZWZsZXguY3NzJztcbmltcG9ydCAnLi90aGVtZS5jc3MnO1xuXG4vKipcbiAqIFdyYXBwZXIgdG8gcmVuZGVyIGEgY2Fyb3VzZWwgY29tcG9uZW50XG4gKiBBZGRzIGN1c3RvbSB0ZW1wbGF0ZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJvdXNlbENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucmVzcG9uc2l2ZU9wdGlvbnMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogJzEwMjRweCcsXG4gICAgICAgICAgICAgICAgbnVtVmlzaWJsZTogMyxcbiAgICAgICAgICAgICAgICBudW1TY3JvbGw6IDMsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6ICc3NjhweCcsXG4gICAgICAgICAgICAgICAgbnVtVmlzaWJsZTogMixcbiAgICAgICAgICAgICAgICBudW1TY3JvbGw6IDIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6ICc1NjBweCcsXG4gICAgICAgICAgICAgICAgbnVtVmlzaWJsZTogMSxcbiAgICAgICAgICAgICAgICBudW1TY3JvbGw6IDEsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdO1xuICAgIH1cblxuICAgIGNhclRlbXBsYXRlID0gY2FyID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyLWRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtZ3JpZCBwLW5vZ3V0dGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1jb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Nhci5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhbHQ9e2Nhci5icmFuZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtY29sLTEyIGNhci1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhci10aXRsZVwiPntjYXIuYnJhbmR9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhci1zdWJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXIueWVhcn0gfCB7Y2FyLmNvbG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJwaSBwaS1zZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLWJ1dHRvbi1zZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwicGkgcGktc3RhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtYnV0dG9uLXNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJwaSBwaS1jb2dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLWJ1dHRvbi1zZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1kZW1vXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LXNlY3Rpb24gaW1wbGVtZW50YXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxDYXJvdXNlbFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuZGF0YX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1UZW1wbGF0ZT17dGhpcy5jYXJUZW1wbGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG51bVZpc2libGU9ezR9XG4gICAgICAgICAgICAgICAgICAgICAgICBudW1TY3JvbGw9ezN9XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9eydiYXNpY0hlYWRlcid9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlT3B0aW9ucz17dGhpcy5yZXNwb25zaXZlT3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgPjwvQ2Fyb3VzZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgPENhcm91c2VsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5kYXRhfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVRlbXBsYXRlPXt0aGlzLmNhclRlbXBsYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtVmlzaWJsZT17M31cbiAgICAgICAgICAgICAgICAgICAgICAgIG51bVNjcm9sbD17MX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1jYXJvdXNlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlT3B0aW9ucz17dGhpcy5yZXNwb25zaXZlT3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj17J2N1c3RvbUhlYWRlcid9XG4gICAgICAgICAgICAgICAgICAgICAgICBjaXJjdWxhcj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5SW50ZXJ2YWw9ezMwMDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvblBhZ2VDaGFuZ2U9e2UgPT4gY29uc29sZS5sb2coZSl9XG4gICAgICAgICAgICAgICAgICAgID48L0Nhcm91c2VsPiAqL31cblxuICAgICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZhbHVlPXt0aGlzLnByb3BzLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGFnZT17dGhpcy5wcm9wcy5wYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVRlbXBsYXRlPXt0aGlzLmNhclRlbXBsYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzdHlsZT17e21heFdpZHRoOiAnNDAwcHgnLCBtYXJnaW5Ub3A6ICcyZW0nfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZlcnRpY2FsVmlld1BvcnRIZWlnaHQ9XCIzMzBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjaXJjdWxhcj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGF1dG9wbGF5SW50ZXJ2YWw9ezEwMDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBoZWFkZXI9e3ZlcnRpY2FsSGVhZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25QYWdlQ2hhbmdlPXtlID0+IHRoaXMucHJvcHMuc2V0UHJvcHMoe3BhZ2U6IGUucGFnZX0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIHsvKiBoZXl5ICovfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5DYXJvdXNlbENvbXBvbmVudC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgaWQ6IG51bGwsXG4gICAgdmFsdWU6IG51bGwsXG4gICAgcGFnZTogMCxcbiAgICBoZWFkZXI6IG51bGwsXG4gICAgZm9vdGVyOiBudWxsLFxuICAgIHN0eWxlOiBudWxsLFxuICAgIGNsYXNzTmFtZTogbnVsbCxcbiAgICBjaXJjdWxhcjogZmFsc2UsXG4gICAgYXV0b3BsYXlJbnRlcnZhbDogMCxcbiAgICBudW1WaXNpYmxlOiAxLFxuICAgIG51bVNjcm9sbDogMSxcbiAgICByZXNwb25zaXZlT3B0aW9uczogbnVsbCxcbiAgICBvcmllbnRhdGlvbjogJ2hvcml6b250YWwnLFxuICAgIHZlcnRpY2FsVmlld1BvcnRIZWlnaHQ6ICczMDBweCcsXG4gICAgY29udGVudENsYXNzTmFtZTogbnVsbCxcbiAgICBjb250YWluZXJDbGFzc05hbWU6IG51bGwsXG4gICAgZG90c0NvbnRhaW5lckNsYXNzTmFtZTogbnVsbCxcbiAgICBzZXRQcm9wczogKCkgPT4ge30sXG59O1xuXG5DYXJvdXNlbENvbXBvbmVudC5wcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogVW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIGVsZW1lbnQuXG4gICAgICovXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2Ygb2JqZWN0cyB0byBkaXNwbGF5LlxuICAgICAqL1xuICAgIHZhbHVlOiBQcm9wVHlwZXMuYW55LFxuICAgIC8qKlxuICAgICAqIEluZGV4IG9mIHRoZSBmaXJzdCBpdGVtLlxuICAgICAqL1xuICAgIHBhZ2U6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgLyoqXG4gICAgICogTGFiZWwgb2YgaGVhZGVyLlxuICAgICAqL1xuICAgIGhlYWRlcjogUHJvcFR5cGVzLmFueSxcbiAgICAvKipcbiAgICAgKiBMYWJlbCBvZiBmb290ZXIuXG4gICAgICovXG4gICAgZm9vdGVyOiBQcm9wVHlwZXMuYW55LFxuXG4gICAgLyoqXG4gICAgICogSW5saW5lIHN0eWxlIG9mIHRoZSBjb21wb25lbnQuXG4gICAgICovXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgLyoqXG4gICAgICogU3R5bGUgY2xhc3Mgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCBnZXRzIGFuIGl0ZW0gaW4gdGhlIHZhbHVlIGFuZCByZXR1cm5zIHRoZSBjb250ZW50IGZvciBpdC5cbiAgICAgKi9cbiAgICBjaXJjdWxhcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICogVGltZSBpbiBtaWxsaXNlY29uZHMgdG8gc2Nyb2xsIGl0ZW1zIGF1dG9tYXRpY2FsbHkuXG4gICAgICovXG4gICAgYXV0b3BsYXlJbnRlcnZhbDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAvKipcbiAgICAgKiBcdE51bWJlciBvZiBpdGVtcyBwZXIgcGFnZS5cbiAgICAgKi9cbiAgICBudW1WaXNpYmxlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIC8qKlxuICAgICAqIE51bWJlciBvZiBpdGVtcyB0byBzY3JvbGwuXG4gICAgICovXG4gICAgbnVtU2Nyb2xsOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIC8qKlxuICAgICAqIFx0QW4gYXJyYXkgb2Ygb3B0aW9ucyBmb3IgcmVzcG9uc2l2ZSBkZXNpZ24uXG4gICAgICovXG4gICAgcmVzcG9uc2l2ZU9wdGlvbnM6IFByb3BUeXBlcy5hcnJheSxcbiAgICAvKipcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGxheW91dCBvZiB0aGUgY29tcG9uZW50LCB2YWxpZCB2YWx1ZXMgYXJlIFwiaG9yaXpvbnRhbFwiIGFuZCBcInZlcnRpY2FsXCIuXG4gICAgICovXG4gICAgb3JpZW50YXRpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICogXHRIZWlnaHQgb2YgdGhlIHZpZXdwb3J0IGluIHZlcnRpY2FsIGxheW91dC5cbiAgICAgKi9cbiAgICB2ZXJ0aWNhbFZpZXdQb3J0SGVpZ2h0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqIFx0U3R5bGUgY2xhc3Mgb2YgbWFpbiBjb250ZW50LlxuICAgICAqL1xuICAgIGNvbnRlbnRDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICogXHRTdHlsZSBjbGFzcyBvZiB0aGUgdmlld3BvcnQgY29udGFpbmVyLlxuICAgICAqL1xuICAgIGNvbnRhaW5lckNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKipcbiAgICAgKiBcdFN0eWxlIGNsYXNzIG9mIHRoZSBwYWdpbmF0b3IgaXRlbXMuXG4gICAgICovXG4gICAgZG90c0NvbnRhaW5lckNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKipcbiAgICAgKiBEYXNoLWFzc2lnbmVkIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB0byByZXBvcnQgcHJvcGVydHkgY2hhbmdlc1xuICAgICAqIHRvIERhc2gsIHRvIG1ha2UgdGhlbSBhdmFpbGFibGUgZm9yIGNhbGxiYWNrcy5cbiAgICAgKi9cbiAgICBzZXRQcm9wczogUHJvcFR5cGVzLmZ1bmMsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==