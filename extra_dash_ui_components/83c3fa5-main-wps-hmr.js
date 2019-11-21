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
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Carousel__WEBPACK_IMPORTED_MODULE_1__["default"], (_React$createElement = {
        value: this.props.data,
        numVisible: 3,
        numScroll: 1,
        itemTemplate: this.carTemplate // orientation="vertical"
        ,
        style: {
          maxWidth: '400px',
          marginTop: '2em'
        }
      }, _defineProperty(_React$createElement, "numVisible", 1), _defineProperty(_React$createElement, "numScroll", 1), _defineProperty(_React$createElement, "verticalViewPortHeight", "330px"), _defineProperty(_React$createElement, "onPageChane", function onPageChane(e) {
        return console.log(e);
      }), _React$createElement))));
    }
  }]);

  return CarouselComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvQ2Fyb3VzZWwvQ2Fyb3VzZWxDb21wb25lbnQuanMiXSwibmFtZXMiOlsiQ2Fyb3VzZWxDb21wb25lbnQiLCJjYXIiLCJpbWFnZSIsImJyYW5kIiwieWVhciIsImNvbG9yIiwic3RhdGUiLCJjYXJzIiwicmVzcG9uc2l2ZU9wdGlvbnMiLCJicmVha3BvaW50IiwibnVtVmlzaWJsZSIsIm51bVNjcm9sbCIsInByb3BzIiwiZGF0YSIsImNhclRlbXBsYXRlIiwibWF4V2lkdGgiLCJtYXJnaW5Ub3AiLCJlIiwiY29uc29sZSIsImxvZyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFcUJBLGlCOzs7OztBQUNqQiwrQkFBYztBQUFBOztBQUFBOztBQUNWOztBQURVLGtFQWlDQSxVQUFBQyxHQUFHLEVBQUk7QUFDakIsYUFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSTtBQUNJLFdBQUcsRUFBRUEsR0FBRyxDQUFDQyxLQURiLENBRUk7O0FBRkosUUFESixDQURKLEVBT0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUE0QkQsR0FBRyxDQUFDRSxLQUFoQyxDQURKLEVBRUk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDS0YsR0FBRyxDQUFDRyxJQURULFNBQ2tCSCxHQUFHLENBQUNJLEtBRHRCLENBRkosRUFNSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJLDJEQUFDLHNEQUFEO0FBQ0ksWUFBSSxFQUFDLGNBRFQ7QUFFSSxpQkFBUyxFQUFDO0FBRmQsUUFESixFQUtJLDJEQUFDLHNEQUFEO0FBQ0ksWUFBSSxFQUFDLFlBRFQ7QUFFSSxpQkFBUyxFQUFDO0FBRmQsUUFMSixFQVNJLDJEQUFDLHNEQUFEO0FBQ0ksWUFBSSxFQUFDLFdBRFQ7QUFFSSxpQkFBUyxFQUFDO0FBRmQsUUFUSixDQU5KLENBUEosQ0FESixDQURKO0FBaUNILEtBbkVhOztBQUVWLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxVQUFJLEVBQUU7QUFERyxLQUFiLENBRlUsQ0FLVjtBQUNBOztBQUVBLFVBQUtDLGlCQUFMLEdBQXlCLENBQ3JCO0FBQ0lDLGdCQUFVLEVBQUUsUUFEaEI7QUFFSUMsZ0JBQVUsRUFBRSxDQUZoQjtBQUdJQyxlQUFTLEVBQUU7QUFIZixLQURxQixFQU1yQjtBQUNJRixnQkFBVSxFQUFFLE9BRGhCO0FBRUlDLGdCQUFVLEVBQUUsQ0FGaEI7QUFHSUMsZUFBUyxFQUFFO0FBSGYsS0FOcUIsRUFXckI7QUFDSUYsZ0JBQVUsRUFBRSxPQURoQjtBQUVJQyxnQkFBVSxFQUFFLENBRmhCO0FBR0lDLGVBQVMsRUFBRTtBQUhmLEtBWHFCLENBQXpCO0FBUlU7QUF5QmIsRyxDQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OzZCQXNDUztBQUFBOztBQUNMLGFBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQXNCSSwyREFBQyxpREFBRDtBQUNJLGFBQUssRUFBRSxLQUFLQyxLQUFMLENBQVdDLElBRHRCO0FBRUksa0JBQVUsRUFBRSxDQUZoQjtBQUdJLGlCQUFTLEVBQUUsQ0FIZjtBQUlJLG9CQUFZLEVBQUUsS0FBS0MsV0FKdkIsQ0FLSTtBQUxKO0FBTUksYUFBSyxFQUFFO0FBQUNDLGtCQUFRLEVBQUUsT0FBWDtBQUFvQkMsbUJBQVMsRUFBRTtBQUEvQjtBQU5YLDZEQU9nQixDQVBoQixzREFRZSxDQVJmLG1FQVMyQixPQVQzQix3REFXaUIscUJBQUFDLENBQUM7QUFBQSxlQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBWixDQUFKO0FBQUEsT0FYbEIseUJBdEJKLENBREosQ0FESjtBQTBDSDs7OztFQWpIMENHLCtDIiwiZmlsZSI6IjgzYzNmYTUtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnLi9DYXJvdXNlbCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL0J1dHRvbi9CdXR0b24nO1xuaW1wb3J0ICcuL3RoZW1lLmNzcyc7XG5pbXBvcnQgJy4vY29tLmNzcyc7XG5pbXBvcnQgJy4vQ2Fyb3VzZWwuY3NzJztcbmltcG9ydCAnLi9wcmltZWZsZXguY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJvdXNlbENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjYXJzOiBbXSxcbiAgICAgICAgfTtcbiAgICAgICAgLy8gdGhpcy5jYXJzZXJ2aWNlID0gbmV3IENhclNlcnZpY2UoKTtcbiAgICAgICAgLy8gdGhpcy5jYXJUZW1wbGF0ZSA9IHRoaXMuY2FyVGVtcGxhdGUuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnJlc3BvbnNpdmVPcHRpb25zID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6ICcxMDI0cHgnLFxuICAgICAgICAgICAgICAgIG51bVZpc2libGU6IDMsXG4gICAgICAgICAgICAgICAgbnVtU2Nyb2xsOiAzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiAnNzY4cHgnLFxuICAgICAgICAgICAgICAgIG51bVZpc2libGU6IDIsXG4gICAgICAgICAgICAgICAgbnVtU2Nyb2xsOiAyLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiAnNTYwcHgnLFxuICAgICAgICAgICAgICAgIG51bVZpc2libGU6IDEsXG4gICAgICAgICAgICAgICAgbnVtU2Nyb2xsOiAxLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICAvLyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyAgICAgdGhpcy5jYXJzZXJ2aWNlXG4gICAgLy8gICAgICAgICAuZ2V0Q2Fyc1NtYWxsKClcbiAgICAvLyAgICAgICAgIC50aGVuKGRhdGEgPT4gdGhpcy5zZXRTdGF0ZSh7Y2FyczogZGF0YX0pKTtcbiAgICAvLyB9XG5cbiAgICBjYXJUZW1wbGF0ZSA9IGNhciA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhci1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWdyaWQgcC1ub2d1dHRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtjYXIuaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWx0PXtjYXIuYnJhbmR9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWNvbC0xMiBjYXItZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXItdGl0bGVcIj57Y2FyLmJyYW5kfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXItc3VidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2FyLnllYXJ9IHwge2Nhci5jb2xvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhci1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwicGkgcGktc2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC1idXR0b24tc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInBpIHBpLXN0YXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLWJ1dHRvbi1zZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwicGkgcGktY29nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC1idXR0b24tc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtZGVtb1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1zZWN0aW9uIGltcGxlbWVudGF0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8Q2Fyb3VzZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVRlbXBsYXRlPXt0aGlzLmNhclRlbXBsYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtVmlzaWJsZT17NH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG51bVNjcm9sbD17M31cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj17YmFzaWNIZWFkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlT3B0aW9ucz17dGhpcy5yZXNwb25zaXZlT3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgPjwvQ2Fyb3VzZWw+ICovfVxuXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8Q2Fyb3VzZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVRlbXBsYXRlPXt0aGlzLmNhclRlbXBsYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtVmlzaWJsZT17M31cbiAgICAgICAgICAgICAgICAgICAgICAgIG51bVNjcm9sbD17MX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1jYXJvdXNlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlT3B0aW9ucz17dGhpcy5yZXNwb25zaXZlT3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj17Y3VzdG9tSGVhZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2lyY3VsYXI9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvcGxheUludGVydmFsPXszMDAwfVxuICAgICAgICAgICAgICAgICAgICA+PC9DYXJvdXNlbD4gKi99XG5cbiAgICAgICAgICAgICAgICAgICAgPENhcm91c2VsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5kYXRhfVxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtVmlzaWJsZT17M31cbiAgICAgICAgICAgICAgICAgICAgICAgIG51bVNjcm9sbD17MX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1UZW1wbGF0ZT17dGhpcy5jYXJUZW1wbGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9yaWVudGF0aW9uPVwidmVydGljYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXhXaWR0aDogJzQwMHB4JywgbWFyZ2luVG9wOiAnMmVtJ319XG4gICAgICAgICAgICAgICAgICAgICAgICBudW1WaXNpYmxlPXsxfVxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtU2Nyb2xsPXsxfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxWaWV3UG9ydEhlaWdodD1cIjMzMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGhlYWRlcj17dmVydGljYWxIZWFkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvblBhZ2VDaGFuZT17ZSA9PiBjb25zb2xlLmxvZyhlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldHByb3BzPXt0aGlzLnNldFByb3BzfVxuICAgICAgICAgICAgICAgICAgICA+PC9DYXJvdXNlbD5cbiAgICAgICAgICAgICAgICAgICAgey8qIGhleXkgKi99XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9