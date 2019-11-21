webpackHotUpdateextra_dash_ui_components("main",{

/***/ "./node_modules/css-loader/dist/cjs.js!./test.css":
false,

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
/* harmony import */ var _Carousel_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Carousel.css */ "./src/lib/components/Carousel/Carousel.css");
/* harmony import */ var _Carousel_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Carousel_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _new_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new.css */ "./src/lib/components/Carousel/new.css");
/* harmony import */ var _new_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_new_css__WEBPACK_IMPORTED_MODULE_4__);
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




 // import '../../../../test.css'



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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "carousel-demo"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "content-section implementation"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Carousel__WEBPACK_IMPORTED_MODULE_1__["default"], {
        value: this.props.data,
        itemTemplate: this.carTemplate,
        orientation: "vertical",
        style: {
          maxWidth: '400px',
          marginTop: '2em'
        },
        numVisible: 1,
        numScroll: 1,
        verticalViewPortHeight: "330px" // header={verticalHeader}
        ,
        onPageChane: function onPageChane(e) {
          return console.log(e);
        } // setprops={this.setProps}

      })));
    }
  }]);

  return CarouselComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./test.css":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvQ2Fyb3VzZWwvQ2Fyb3VzZWxDb21wb25lbnQuanMiXSwibmFtZXMiOlsiQ2Fyb3VzZWxDb21wb25lbnQiLCJjYXIiLCJpbWFnZSIsImJyYW5kIiwieWVhciIsImNvbG9yIiwic3RhdGUiLCJjYXJzIiwicmVzcG9uc2l2ZU9wdGlvbnMiLCJicmVha3BvaW50IiwibnVtVmlzaWJsZSIsIm51bVNjcm9sbCIsInByb3BzIiwiZGF0YSIsImNhclRlbXBsYXRlIiwibWF4V2lkdGgiLCJtYXJnaW5Ub3AiLCJlIiwiY29uc29sZSIsImxvZyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUVBOztBQUNBOztJQUVxQkEsaUI7Ozs7O0FBQ2pCLCtCQUFjO0FBQUE7O0FBQUE7O0FBQ1Y7O0FBRFUsa0VBaUNBLFVBQUFDLEdBQUcsRUFBSTtBQUNqQixhQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJO0FBQ0ksV0FBRyxFQUFFQSxHQUFHLENBQUNDLEtBRGIsQ0FFSTs7QUFGSixRQURKLENBREosRUFPSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQTRCRCxHQUFHLENBQUNFLEtBQWhDLENBREosRUFFSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNLRixHQUFHLENBQUNHLElBRFQsU0FDa0JILEdBQUcsQ0FBQ0ksS0FEdEIsQ0FGSixFQU1JO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0ksMkRBQUMsc0RBQUQ7QUFDSSxZQUFJLEVBQUMsY0FEVDtBQUVJLGlCQUFTLEVBQUM7QUFGZCxRQURKLEVBS0ksMkRBQUMsc0RBQUQ7QUFDSSxZQUFJLEVBQUMsWUFEVDtBQUVJLGlCQUFTLEVBQUM7QUFGZCxRQUxKLEVBU0ksMkRBQUMsc0RBQUQ7QUFDSSxZQUFJLEVBQUMsV0FEVDtBQUVJLGlCQUFTLEVBQUM7QUFGZCxRQVRKLENBTkosQ0FQSixDQURKLENBREo7QUFpQ0gsS0FuRWE7O0FBRVYsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLFVBQUksRUFBRTtBQURHLEtBQWIsQ0FGVSxDQUtWO0FBQ0E7O0FBRUEsVUFBS0MsaUJBQUwsR0FBeUIsQ0FDckI7QUFDSUMsZ0JBQVUsRUFBRSxRQURoQjtBQUVJQyxnQkFBVSxFQUFFLENBRmhCO0FBR0lDLGVBQVMsRUFBRTtBQUhmLEtBRHFCLEVBTXJCO0FBQ0lGLGdCQUFVLEVBQUUsT0FEaEI7QUFFSUMsZ0JBQVUsRUFBRSxDQUZoQjtBQUdJQyxlQUFTLEVBQUU7QUFIZixLQU5xQixFQVdyQjtBQUNJRixnQkFBVSxFQUFFLE9BRGhCO0FBRUlDLGdCQUFVLEVBQUUsQ0FGaEI7QUFHSUMsZUFBUyxFQUFFO0FBSGYsS0FYcUIsQ0FBekI7QUFSVTtBQXlCYixHLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7NkJBc0NTO0FBQ0wsYUFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBc0JJLDJEQUFDLGlEQUFEO0FBQ0ksYUFBSyxFQUFFLEtBQUtDLEtBQUwsQ0FBV0MsSUFEdEI7QUFFSSxvQkFBWSxFQUFFLEtBQUtDLFdBRnZCO0FBR0ksbUJBQVcsRUFBQyxVQUhoQjtBQUlJLGFBQUssRUFBRTtBQUFDQyxrQkFBUSxFQUFFLE9BQVg7QUFBb0JDLG1CQUFTLEVBQUU7QUFBL0IsU0FKWDtBQUtJLGtCQUFVLEVBQUUsQ0FMaEI7QUFNSSxpQkFBUyxFQUFFLENBTmY7QUFPSSw4QkFBc0IsRUFBQyxPQVAzQixDQVFJO0FBUko7QUFTSSxtQkFBVyxFQUFFLHFCQUFBQyxDQUFDO0FBQUEsaUJBQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFaLENBQUo7QUFBQSxTQVRsQixDQVVJOztBQVZKLFFBdEJKLENBREosQ0FESjtBQXdDSDs7OztFQS9HMENHLCtDIiwiZmlsZSI6ImExNDFlOTAtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnLi9DYXJvdXNlbCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL0J1dHRvbi9CdXR0b24nO1xuaW1wb3J0ICcuL0Nhcm91c2VsLmNzcyc7XG4vLyBpbXBvcnQgJy4uLy4uLy4uLy4uL3Rlc3QuY3NzJ1xuaW1wb3J0ICcuL25ldy5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcm91c2VsQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNhcnM6IFtdLFxuICAgICAgICB9O1xuICAgICAgICAvLyB0aGlzLmNhcnNlcnZpY2UgPSBuZXcgQ2FyU2VydmljZSgpO1xuICAgICAgICAvLyB0aGlzLmNhclRlbXBsYXRlID0gdGhpcy5jYXJUZW1wbGF0ZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMucmVzcG9uc2l2ZU9wdGlvbnMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogJzEwMjRweCcsXG4gICAgICAgICAgICAgICAgbnVtVmlzaWJsZTogMyxcbiAgICAgICAgICAgICAgICBudW1TY3JvbGw6IDMsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6ICc3NjhweCcsXG4gICAgICAgICAgICAgICAgbnVtVmlzaWJsZTogMixcbiAgICAgICAgICAgICAgICBudW1TY3JvbGw6IDIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6ICc1NjBweCcsXG4gICAgICAgICAgICAgICAgbnVtVmlzaWJsZTogMSxcbiAgICAgICAgICAgICAgICBudW1TY3JvbGw6IDEsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdO1xuICAgIH1cblxuICAgIC8vIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vICAgICB0aGlzLmNhcnNlcnZpY2VcbiAgICAvLyAgICAgICAgIC5nZXRDYXJzU21hbGwoKVxuICAgIC8vICAgICAgICAgLnRoZW4oZGF0YSA9PiB0aGlzLnNldFN0YXRlKHtjYXJzOiBkYXRhfSkpO1xuICAgIC8vIH1cblxuICAgIGNhclRlbXBsYXRlID0gY2FyID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyLWRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtZ3JpZCBwLW5vZ3V0dGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1jb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Nhci5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhbHQ9e2Nhci5icmFuZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtY29sLTEyIGNhci1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhci10aXRsZVwiPntjYXIuYnJhbmR9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhci1zdWJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXIueWVhcn0gfCB7Y2FyLmNvbG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJwaSBwaS1zZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLWJ1dHRvbi1zZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwicGkgcGktc3RhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtYnV0dG9uLXNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJwaSBwaS1jb2dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLWJ1dHRvbi1zZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1kZW1vXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LXNlY3Rpb24gaW1wbGVtZW50YXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxDYXJvdXNlbFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtVGVtcGxhdGU9e3RoaXMuY2FyVGVtcGxhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBudW1WaXNpYmxlPXs0fVxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtU2Nyb2xsPXszfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXtiYXNpY0hlYWRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmVPcHRpb25zPXt0aGlzLnJlc3BvbnNpdmVPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICA+PC9DYXJvdXNlbD4gKi99XG5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxDYXJvdXNlbFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtVGVtcGxhdGU9e3RoaXMuY2FyVGVtcGxhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBudW1WaXNpYmxlPXszfVxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtU2Nyb2xsPXsxfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tLWNhcm91c2VsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmVPcHRpb25zPXt0aGlzLnJlc3BvbnNpdmVPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXtjdXN0b21IZWFkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBjaXJjdWxhcj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5SW50ZXJ2YWw9ezMwMDB9XG4gICAgICAgICAgICAgICAgICAgID48L0Nhcm91c2VsPiAqL31cblxuICAgICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmRhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtVGVtcGxhdGU9e3RoaXMuY2FyVGVtcGxhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWF4V2lkdGg6ICc0MDBweCcsIG1hcmdpblRvcDogJzJlbSd9fVxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtVmlzaWJsZT17MX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG51bVNjcm9sbD17MX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsVmlld1BvcnRIZWlnaHQ9XCIzMzBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBoZWFkZXI9e3ZlcnRpY2FsSGVhZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25QYWdlQ2hhbmU9e2UgPT4gY29uc29sZS5sb2coZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZXRwcm9wcz17dGhpcy5zZXRQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgPjwvQ2Fyb3VzZWw+XG4gICAgICAgICAgICAgICAgICAgIHsvKiBoZXl5ICovfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==