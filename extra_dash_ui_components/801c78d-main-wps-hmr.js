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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button/Button */ "./src/lib/components/Button/Button.js");
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Carousel */ "./src/lib/components/Carousel/Carousel.js");
/* harmony import */ var _Carousel_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Carousel.css */ "./src/lib/components/Carousel/Carousel.css");
/* harmony import */ var _Carousel_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Carousel_css__WEBPACK_IMPORTED_MODULE_4__);
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






/**
 * WrapperComponent on the Carousel component
 * Adds callback
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
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "car-details"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "p-grid p-nogutter"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "p-col-12",
        onClick: function onClick() {
          return _this.props.setProps({
            clicked: {
              action: 'image',
              item: car
            }
          });
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: car.image
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "p-col-12 car-data"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "car-title"
      }, car.brand), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "car-subtitle"
      }, car.year, " | ", car.color), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "car-buttons"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
        text: "search",
        icon: "pi pi-search",
        className: "p-button-secondary",
        onClick: function onClick() {
          return _this.props.setProps({
            clicked: {
              action: 'search',
              item: car
            }
          });
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
        icon: "pi pi-star",
        className: "p-button-secondary",
        onClick: function onClick() {
          return _this.props.setProps({
            clicked: {
              action: 'like',
              item: car
            }
          });
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
        icon: "pi pi-cog",
        className: "p-button-secondary",
        onClick: function onClick() {
          return _this.props.setProps({
            clicked: {
              action: 'settings',
              item: car
            }
          });
        }
      })))));
    });

    _this.state = {
      data: [],
      page: 0
    };
    _this.carTemplate = _this.carTemplate.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CarouselComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        data: this.props.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var autoplayInterval = this.props.autoplayInterval;
      var onPageChange = autoplayInterval > 0 ? null : function (e) {
        return _this2.props.setProps({
          page: e.page
        });
      };
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "content-section implementation"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Carousel__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: this.props.id,
        value: this.state.data,
        itemTemplate: this.carTemplate,
        numVisible: this.props.numVisible,
        numScroll: this.props.numScroll,
        responsiveOptions: this.props.responsiveOptions,
        header: this.props.header,
        footer: this.props.footer,
        className: this.props.className,
        contentClassName: this.props.contentClassName,
        containerClassName: this.props.containerClassName,
        dotsContainerClassName: this.props.dotsContainerClassName,
        style: this.props.style,
        circular: this.props.circular,
        page: this.props.page,
        onPageChange: onPageChange,
        autoplayInterval: autoplayInterval,
        orientation: this.props.orientation,
        verticalViewPortHeight: this.props.verticalViewPortHeight
      }));
    }
  }]);

  return CarouselComponent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


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
  clicked: null,
  setProps: function setProps() {}
};
CarouselComponent.propTypes = {
  /**
   * Unique identifier of the element.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  /**
   * An array of objects to display.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any,

  /**
   * Index of the first item.
   */
  page: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,

  /**
   * Label of header.
   */
  header: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any,

  /**
   * Label of footer.
   */
  footer: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any,

  /**
   * Inline style of the component.
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,

  /**
   * Style class of the component.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  /**
   * Function that gets an item in the value and returns the content for it.
   */
  circular: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,

  /**
   * Time in milliseconds to scroll items automatically.
   */
  autoplayInterval: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,

  /**
   * 	Number of items per page.
   */
  numVisible: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,

  /**
   * Number of items to scroll.
   */
  numScroll: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,

  /**
   * 	An array of options for responsive design.
   */
  responsiveOptions: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array,

  /**
   * Specifies the layout of the component, valid values are "horizontal" and "vertical".
   */
  orientation: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  /**
   * 	Height of the viewport in vertical layout.
   */
  verticalViewPortHeight: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  /**
   * 	Style class of main content.
   */
  contentClassName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  /**
   * 	Style class of the viewport container.
   */
  containerClassName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  /**
   * 	Style class of the paginator items.
   */
  dotsContainerClassName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  clicked: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvQ2Fyb3VzZWwvQ2Fyb3VzZWxDb21wb25lbnQuanMiXSwibmFtZXMiOlsiQ2Fyb3VzZWxDb21wb25lbnQiLCJjYXIiLCJwcm9wcyIsInNldFByb3BzIiwiY2xpY2tlZCIsImFjdGlvbiIsIml0ZW0iLCJpbWFnZSIsImJyYW5kIiwieWVhciIsImNvbG9yIiwic3RhdGUiLCJkYXRhIiwicGFnZSIsImNhclRlbXBsYXRlIiwiYmluZCIsInNldFN0YXRlIiwidmFsdWUiLCJhdXRvcGxheUludGVydmFsIiwib25QYWdlQ2hhbmdlIiwiZSIsImlkIiwibnVtVmlzaWJsZSIsIm51bVNjcm9sbCIsInJlc3BvbnNpdmVPcHRpb25zIiwiaGVhZGVyIiwiZm9vdGVyIiwiY2xhc3NOYW1lIiwiY29udGVudENsYXNzTmFtZSIsImNvbnRhaW5lckNsYXNzTmFtZSIsImRvdHNDb250YWluZXJDbGFzc05hbWUiLCJzdHlsZSIsImNpcmN1bGFyIiwib3JpZW50YXRpb24iLCJ2ZXJ0aWNhbFZpZXdQb3J0SGVpZ2h0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYW55IiwibnVtYmVyIiwib2JqZWN0IiwiYm9vbCIsImFycmF5IiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7SUFJcUJBLGlCOzs7OztBQUNqQiwrQkFBYztBQUFBOztBQUFBOztBQUNWOztBQURVLGtFQWFBLFVBQUFDLEdBQUcsRUFBSTtBQUNqQixhQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSTtBQUNJLGlCQUFTLEVBQUMsVUFEZDtBQUVJLGVBQU8sRUFBRTtBQUFBLGlCQUNM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Q0MsTUFyRVI7O0FBc0UxQjs7OztBQUlBcEMsVUFBUSxFQUFFbUMsaURBQVMsQ0FBQ08sSUExRU07QUEyRTFCekMsU0FBTyxFQUFFa0MsaURBQVMsQ0FBQ0k7QUEzRU8sQ0FBOUIsQyIsImZpbGUiOiI4MDFjNzhkLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vQnV0dG9uL0J1dHRvbic7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnLi9DYXJvdXNlbCc7XG5pbXBvcnQgJy4vQ2Fyb3VzZWwuY3NzJztcblxuLyoqXG4gKiBXcmFwcGVyQ29tcG9uZW50IG9uIHRoZSBDYXJvdXNlbCBjb21wb25lbnRcbiAqIEFkZHMgY2FsbGJhY2tcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2Fyb3VzZWxDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZGF0YTogW10sXG4gICAgICAgICAgICBwYWdlOiAwLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNhclRlbXBsYXRlID0gdGhpcy5jYXJUZW1wbGF0ZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtkYXRhOiB0aGlzLnByb3BzLnZhbHVlfSk7XG4gICAgfVxuXG4gICAgY2FyVGVtcGxhdGUgPSBjYXIgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXItZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1ncmlkIHAtbm9ndXR0ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC1jb2wtMTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNldFByb3BzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tlZDoge2FjdGlvbjogJ2ltYWdlJywgaXRlbTogY2FyfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Y2FyLmltYWdlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWNvbC0xMiBjYXItZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXItdGl0bGVcIj57Y2FyLmJyYW5kfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXItc3VidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2FyLnllYXJ9IHwge2Nhci5jb2xvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhci1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInBpIHBpLXNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtYnV0dG9uLXNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNldFByb3BzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja2VkOiB7YWN0aW9uOiAnc2VhcmNoJywgaXRlbTogY2FyfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInBpIHBpLXN0YXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLWJ1dHRvbi1zZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXRQcm9wcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tlZDoge2FjdGlvbjogJ2xpa2UnLCBpdGVtOiBjYXJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwicGkgcGktY29nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC1idXR0b24tc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2V0UHJvcHMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrZWQ6IHsgYWN0aW9uOiAnc2V0dGluZ3MnLCBpdGVtOiBjYXJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBhdXRvcGxheUludGVydmFsID0gdGhpcy5wcm9wcy5hdXRvcGxheUludGVydmFsO1xuICAgICAgICBjb25zdCBvblBhZ2VDaGFuZ2UgPVxuICAgICAgICAgICAgYXV0b3BsYXlJbnRlcnZhbCA+IDBcbiAgICAgICAgICAgICAgICA/IG51bGxcbiAgICAgICAgICAgICAgICA6IGUgPT4gdGhpcy5wcm9wcy5zZXRQcm9wcyh7cGFnZTogZS5wYWdlfSk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1zZWN0aW9uIGltcGxlbWVudGF0aW9uXCI+XG4gICAgICAgICAgICAgICAgPENhcm91c2VsXG4gICAgICAgICAgICAgICAgICAgIGlkPXt0aGlzLnByb3BzLmlkfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhfVxuICAgICAgICAgICAgICAgICAgICBpdGVtVGVtcGxhdGU9e3RoaXMuY2FyVGVtcGxhdGV9XG4gICAgICAgICAgICAgICAgICAgIG51bVZpc2libGU9e3RoaXMucHJvcHMubnVtVmlzaWJsZX1cbiAgICAgICAgICAgICAgICAgICAgbnVtU2Nyb2xsPXt0aGlzLnByb3BzLm51bVNjcm9sbH1cbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZU9wdGlvbnM9e3RoaXMucHJvcHMucmVzcG9uc2l2ZU9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcj17dGhpcy5wcm9wcy5oZWFkZXJ9XG4gICAgICAgICAgICAgICAgICAgIGZvb3Rlcj17dGhpcy5wcm9wcy5mb290ZXJ9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRDbGFzc05hbWU9e3RoaXMucHJvcHMuY29udGVudENsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyQ2xhc3NOYW1lPXt0aGlzLnByb3BzLmNvbnRhaW5lckNsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgZG90c0NvbnRhaW5lckNsYXNzTmFtZT17dGhpcy5wcm9wcy5kb3RzQ29udGFpbmVyQ2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgY2lyY3VsYXI9e3RoaXMucHJvcHMuY2lyY3VsYXJ9XG4gICAgICAgICAgICAgICAgICAgIHBhZ2U9e3RoaXMucHJvcHMucGFnZX1cbiAgICAgICAgICAgICAgICAgICAgb25QYWdlQ2hhbmdlPXtvblBhZ2VDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5SW50ZXJ2YWw9e2F1dG9wbGF5SW50ZXJ2YWx9XG4gICAgICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uPXt0aGlzLnByb3BzLm9yaWVudGF0aW9ufVxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbFZpZXdQb3J0SGVpZ2h0PXt0aGlzLnByb3BzLnZlcnRpY2FsVmlld1BvcnRIZWlnaHR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuQ2Fyb3VzZWxDb21wb25lbnQuZGVmYXVsdFByb3BzID0ge1xuICAgIGlkOiBudWxsLFxuICAgIHZhbHVlOiBudWxsLFxuICAgIHBhZ2U6IDAsXG4gICAgaGVhZGVyOiBudWxsLFxuICAgIGZvb3RlcjogbnVsbCxcbiAgICBzdHlsZTogbnVsbCxcbiAgICBjbGFzc05hbWU6IG51bGwsXG4gICAgY2lyY3VsYXI6IGZhbHNlLFxuICAgIGF1dG9wbGF5SW50ZXJ2YWw6IDAsXG4gICAgbnVtVmlzaWJsZTogMSxcbiAgICBudW1TY3JvbGw6IDEsXG4gICAgcmVzcG9uc2l2ZU9wdGlvbnM6IG51bGwsXG4gICAgb3JpZW50YXRpb246ICdob3Jpem9udGFsJyxcbiAgICB2ZXJ0aWNhbFZpZXdQb3J0SGVpZ2h0OiAnMzAwcHgnLFxuICAgIGNvbnRlbnRDbGFzc05hbWU6IG51bGwsXG4gICAgY29udGFpbmVyQ2xhc3NOYW1lOiBudWxsLFxuICAgIGRvdHNDb250YWluZXJDbGFzc05hbWU6IG51bGwsXG4gICAgY2xpY2tlZDogbnVsbCxcbiAgICBzZXRQcm9wczogKCkgPT4ge30sXG59O1xuXG5DYXJvdXNlbENvbXBvbmVudC5wcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogVW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIGVsZW1lbnQuXG4gICAgICovXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2Ygb2JqZWN0cyB0byBkaXNwbGF5LlxuICAgICAqL1xuICAgIHZhbHVlOiBQcm9wVHlwZXMuYW55LFxuICAgIC8qKlxuICAgICAqIEluZGV4IG9mIHRoZSBmaXJzdCBpdGVtLlxuICAgICAqL1xuICAgIHBhZ2U6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgLyoqXG4gICAgICogTGFiZWwgb2YgaGVhZGVyLlxuICAgICAqL1xuICAgIGhlYWRlcjogUHJvcFR5cGVzLmFueSxcbiAgICAvKipcbiAgICAgKiBMYWJlbCBvZiBmb290ZXIuXG4gICAgICovXG4gICAgZm9vdGVyOiBQcm9wVHlwZXMuYW55LFxuXG4gICAgLyoqXG4gICAgICogSW5saW5lIHN0eWxlIG9mIHRoZSBjb21wb25lbnQuXG4gICAgICovXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgLyoqXG4gICAgICogU3R5bGUgY2xhc3Mgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCBnZXRzIGFuIGl0ZW0gaW4gdGhlIHZhbHVlIGFuZCByZXR1cm5zIHRoZSBjb250ZW50IGZvciBpdC5cbiAgICAgKi9cbiAgICBjaXJjdWxhcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICogVGltZSBpbiBtaWxsaXNlY29uZHMgdG8gc2Nyb2xsIGl0ZW1zIGF1dG9tYXRpY2FsbHkuXG4gICAgICovXG4gICAgYXV0b3BsYXlJbnRlcnZhbDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAvKipcbiAgICAgKiBcdE51bWJlciBvZiBpdGVtcyBwZXIgcGFnZS5cbiAgICAgKi9cbiAgICBudW1WaXNpYmxlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIC8qKlxuICAgICAqIE51bWJlciBvZiBpdGVtcyB0byBzY3JvbGwuXG4gICAgICovXG4gICAgbnVtU2Nyb2xsOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIC8qKlxuICAgICAqIFx0QW4gYXJyYXkgb2Ygb3B0aW9ucyBmb3IgcmVzcG9uc2l2ZSBkZXNpZ24uXG4gICAgICovXG4gICAgcmVzcG9uc2l2ZU9wdGlvbnM6IFByb3BUeXBlcy5hcnJheSxcbiAgICAvKipcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGxheW91dCBvZiB0aGUgY29tcG9uZW50LCB2YWxpZCB2YWx1ZXMgYXJlIFwiaG9yaXpvbnRhbFwiIGFuZCBcInZlcnRpY2FsXCIuXG4gICAgICovXG4gICAgb3JpZW50YXRpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICogXHRIZWlnaHQgb2YgdGhlIHZpZXdwb3J0IGluIHZlcnRpY2FsIGxheW91dC5cbiAgICAgKi9cbiAgICB2ZXJ0aWNhbFZpZXdQb3J0SGVpZ2h0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqIFx0U3R5bGUgY2xhc3Mgb2YgbWFpbiBjb250ZW50LlxuICAgICAqL1xuICAgIGNvbnRlbnRDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICogXHRTdHlsZSBjbGFzcyBvZiB0aGUgdmlld3BvcnQgY29udGFpbmVyLlxuICAgICAqL1xuICAgIGNvbnRhaW5lckNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKipcbiAgICAgKiBcdFN0eWxlIGNsYXNzIG9mIHRoZSBwYWdpbmF0b3IgaXRlbXMuXG4gICAgICovXG4gICAgZG90c0NvbnRhaW5lckNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKipcbiAgICAgKiBEYXNoLWFzc2lnbmVkIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB0byByZXBvcnQgcHJvcGVydHkgY2hhbmdlc1xuICAgICAqIHRvIERhc2gsIHRvIG1ha2UgdGhlbSBhdmFpbGFibGUgZm9yIGNhbGxiYWNrcy5cbiAgICAgKi9cbiAgICBzZXRQcm9wczogUHJvcFR5cGVzLmZ1bmMsXG4gICAgY2xpY2tlZDogUHJvcFR5cGVzLm9iamVjdCxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9