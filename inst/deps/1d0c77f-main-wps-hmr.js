webpackHotUpdateextra_dash_ui_components("main",{

/***/ "./src/lib/components/Carousel/Comp1.js":
/*!**********************************************!*\
  !*** ./src/lib/components/Carousel/Comp1.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Comp1; });
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



 // import Carousel from './Car';







var Comp1 =
/*#__PURE__*/
function (_Component) {
  _inherits(Comp1, _Component);

  function Comp1() {
    var _this;

    _classCallCheck(this, Comp1);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Comp1).call(this));

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
    _this.carTemplate = _this.carTemplate.bind(_assertThisInitialized(_this));
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

  _createClass(Comp1, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        cars: this.props.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var basicHeader = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Basic");
      var customHeader = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Circular, AutoPlay, 3 Items per Page and Scroll by 1");
      var verticalHeader = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Vertical");
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "carousel-demo"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "content-section introduction"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "feature-intro"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Carousel"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Carousel is a content slider featuring various customization options."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "content-section implementation"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Carousel__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
        itemTemplate: this.carTemplate,
        className: "custom-carousel",
        responsive: this.responsiveSettings,
        onPageChange: function onPageChange(e) {
          return _this2.props.setProps({
            page: e.page
          });
        }
      }, this.props)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Carousel__WEBPACK_IMPORTED_MODULE_2__["default"], {
        value: this.state.cars,
        itemTemplate: this.carTemplate,
        numVisible: 3,
        numScroll: 1,
        className: "custom-carousel",
        responsiveOptions: this.responsiveOptions,
        header: customHeader,
        circular: true,
        autoplayInterval: 3000
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Carousel__WEBPACK_IMPORTED_MODULE_2__["default"], {
        value: this.state.cars,
        itemTemplate: this.carTemplate,
        orientation: "vertical",
        style: {
          maxWidth: '400px',
          marginTop: '2em'
        },
        numVisible: 1,
        numScroll: 1,
        verticalViewPortHeight: "330px",
        header: verticalHeader
      })));
    }
  }]);

  return Comp1;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvQ2Fyb3VzZWwvQ29tcDEuanMiXSwibmFtZXMiOlsiQ29tcDEiLCJjYXIiLCJpbWFnZSIsImJyYW5kIiwieWVhciIsImNvbG9yIiwic3RhdGUiLCJjYXJzIiwiY2FyVGVtcGxhdGUiLCJiaW5kIiwicmVzcG9uc2l2ZU9wdGlvbnMiLCJicmVha3BvaW50IiwibnVtVmlzaWJsZSIsIm51bVNjcm9sbCIsInNldFN0YXRlIiwicHJvcHMiLCJ2YWx1ZSIsImJhc2ljSGVhZGVyIiwiY3VzdG9tSGVhZGVyIiwidmVydGljYWxIZWFkZXIiLCJyZXNwb25zaXZlU2V0dGluZ3MiLCJlIiwic2V0UHJvcHMiLCJwYWdlIiwibWF4V2lkdGgiLCJtYXJnaW5Ub3AiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVxQkEsSzs7Ozs7QUFFakIsbUJBQWM7QUFBQTs7QUFBQTs7QUFDVjs7QUFEVSxrRUE4QkEsVUFBQUMsR0FBRyxFQUFJO0FBQ2pCLGFBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0k7QUFDSSxXQUFHLEVBQUVBLEdBQUcsQ0FBQ0MsS0FEYixDQUVJOztBQUZKLFFBREosQ0FESixFQU9JO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FBNEJELEdBQUcsQ0FBQ0UsS0FBaEMsQ0FESixFQUVJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0tGLEdBQUcsQ0FBQ0csSUFEVCxTQUNrQkgsR0FBRyxDQUFDSSxLQUR0QixDQUZKLEVBTUk7QUFBSyxpQkFBUyxFQUFDO0FBQWYs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cG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IENhcm91c2VsIGZyb20gJy4vQ2Fyb3VzZWwnO1xuLy8gaW1wb3J0IENhcm91c2VsIGZyb20gJy4vQ2FyJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vQnV0dG9uL0J1dHRvbic7XG5pbXBvcnQgJy4vY29tLmNzcyc7XG5pbXBvcnQgJy4vQ2Fyb3VzZWwuY3NzJztcbmltcG9ydCAnLi9wcmltZWZsZXguY3NzJztcbmltcG9ydCAnLi90aGVtZS5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wMSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgXG4gICAgICAgICAgICBjYXJzOiBbXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNhclRlbXBsYXRlID0gdGhpcy5jYXJUZW1wbGF0ZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMucmVzcG9uc2l2ZU9wdGlvbnMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogJzEwMjRweCcsXG4gICAgICAgICAgICAgICAgbnVtVmlzaWJsZTogMyxcbiAgICAgICAgICAgICAgICBudW1TY3JvbGw6IDNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogJzc2OHB4JyxcbiAgICAgICAgICAgICAgICBudW1WaXNpYmxlOiAyLFxuICAgICAgICAgICAgICAgIG51bVNjcm9sbDogMlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiAnNTYwcHgnLFxuICAgICAgICAgICAgICAgIG51bVZpc2libGU6IDEsXG4gICAgICAgICAgICAgICAgbnVtU2Nyb2xsOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2NhcnM6IHRoaXMucHJvcHMudmFsdWV9KVxuICAgIH1cblxuICAgIGNhclRlbXBsYXRlID0gY2FyID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyLWRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtZ3JpZCBwLW5vZ3V0dGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1jb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Nhci5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhbHQ9e2Nhci5icmFuZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtY29sLTEyIGNhci1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhci10aXRsZVwiPntjYXIuYnJhbmR9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhci1zdWJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXIueWVhcn0gfCB7Y2FyLmNvbG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJwaSBwaS1zZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLWJ1dHRvbi1zZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwicGkgcGktc3RhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtYnV0dG9uLXNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJwaSBwaS1jb2dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLWJ1dHRvbi1zZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBiYXNpY0hlYWRlciA9IDxoMj5CYXNpYzwvaDI+O1xuICAgICAgICBjb25zdCBjdXN0b21IZWFkZXIgPSA8aDI+Q2lyY3VsYXIsIEF1dG9QbGF5LCAzIEl0ZW1zIHBlciBQYWdlIGFuZCBTY3JvbGwgYnkgMTwvaDI+XG4gICAgICAgIGNvbnN0IHZlcnRpY2FsSGVhZGVyID0gPGgyPlZlcnRpY2FsPC9oMj5cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1kZW1vXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LXNlY3Rpb24gaW50cm9kdWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVhdHVyZS1pbnRyb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkNhcm91c2VsPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNhcm91c2VsIGlzIGEgY29udGVudCBzbGlkZXIgZmVhdHVyaW5nIHZhcmlvdXMgY3VzdG9taXphdGlvbiBvcHRpb25zLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtc2VjdGlvbiBpbXBsZW1lbnRhdGlvblwiPlxuICAgICAgICAgICAgICAgIDxDYXJvdXNlbFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVRlbXBsYXRlPXt0aGlzLmNhclRlbXBsYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tLWNhcm91c2VsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU9e3RoaXMucmVzcG9uc2l2ZVNldHRpbmdzfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25QYWdlQ2hhbmdlPXtlID0+IHRoaXMucHJvcHMuc2V0UHJvcHMoe3BhZ2U6IGUucGFnZX0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbCB2YWx1ZT17dGhpcy5zdGF0ZS5jYXJzfSBpdGVtVGVtcGxhdGU9e3RoaXMuY2FyVGVtcGxhdGV9IG51bVZpc2libGU9ezN9IG51bVNjcm9sbD17MX0gY2xhc3NOYW1lPVwiY3VzdG9tLWNhcm91c2VsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmVPcHRpb25zPXt0aGlzLnJlc3BvbnNpdmVPcHRpb25zfSBoZWFkZXI9e2N1c3RvbUhlYWRlcn0gY2lyY3VsYXI9e3RydWV9IGF1dG9wbGF5SW50ZXJ2YWw9ezMwMDB9Lz5cblxuICAgICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwgdmFsdWU9e3RoaXMuc3RhdGUuY2Fyc30gaXRlbVRlbXBsYXRlPXt0aGlzLmNhclRlbXBsYXRlfSBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgc3R5bGU9e3ttYXhXaWR0aDogJzQwMHB4JywgbWFyZ2luVG9wOiAnMmVtJ319XG4gICAgICAgICAgICAgICAgICAgICAgICBudW1WaXNpYmxlPXsxfSBudW1TY3JvbGw9ezF9IHZlcnRpY2FsVmlld1BvcnRIZWlnaHQ9XCIzMzBweFwiIGhlYWRlcj17dmVydGljYWxIZWFkZXJ9Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==