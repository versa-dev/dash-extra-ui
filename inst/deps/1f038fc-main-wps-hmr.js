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
      console.log('setstate');
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
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Carousel__WEBPACK_IMPORTED_MODULE_2__["default"], {
        value: this.state.cars,
        itemTemplate: this.carTemplate,
        className: "custom-carousel",
        responsive: this.responsiveSettings,
        onPageChange: function onPageChange(e) {
          return _this2.props.setProps({
            page: e.page
          });
        } // {...this.props}

      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Carousel__WEBPACK_IMPORTED_MODULE_2__["default"], {
        value: this.state.cars // page={this.props.page}
        ,
        itemTemplate: this.carTemplate,
        numVisible: 3,
        numScroll: 1,
        className: "custom-carousel",
        responsiveOptions: this.responsiveOptions // header={customHeader}
        // circular={true}
        // onPageChange={e => this.props.setProps({page: e.page})}
        // onPageChange={e => console.log({page: e.page})}
        ,
        page: this.state.page,
        onPageChange: function onPageChange(e) {
          return _this2.setState({
            page: e.page
          });
        },
        autoplayInterval: this.props.autoplayInterval
      })));
    }
  }]);

  return Comp1;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvQ2Fyb3VzZWwvQ29tcDEuanMiXSwibmFtZXMiOlsiQ29tcDEiLCJjYXIiLCJpbWFnZSIsImJyYW5kIiwieWVhciIsImNvbG9yIiwic3RhdGUiLCJjYXJzIiwiY2FyVGVtcGxhdGUiLCJiaW5kIiwicmVzcG9uc2l2ZU9wdGlvbnMiLCJicmVha3BvaW50IiwibnVtVmlzaWJsZSIsIm51bVNjcm9sbCIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsInByb3BzIiwidmFsdWUiLCJiYXNpY0hlYWRlciIsImN1c3RvbUhlYWRlciIsInZlcnRpY2FsSGVhZGVyIiwicmVzcG9uc2l2ZVNldHRpbmdzIiwiZSIsInNldFByb3BzIiwicGFnZSIsImF1dG9wbGF5SW50ZXJ2YWwiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFcUJBLEs7Ozs7O0FBQ2pCLG1CQUFjO0FBQUE7O0FBQUE7O0FBQ1Y7O0FBRFUsa0VBK0JBLFVBQUFDLEdBQUcsRUFBSTtBQUNqQixhQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJO0FBQ0ksV0FBRyxFQUFFQSxHQUFHLENBQUNDLEtBRGIsQ0FFSTs7QUFGSixRQURKLENBREosRUFPSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQTRCRCxHQUFHLENBQUNFLEtBQWhDLENBREosRUFFSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNLRixHQUFHLENBQUNHLElBRFQsU0FDa0JILEdBQUcsQ0FBQ0ksS0FEdEIsQ0FGSixFQU1JO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0ksMkRBQUMsc0RBQUQ7QUFDSSxZQUFJLEVBQUMsY0FEVDtBQUVJLGlCQUFTLEVBQUM7QUFGZCxRQURKLEVBS0ksMkRBQUMsc0RBQUQ7QUFDSSxZQUFJLEVBQUMsWUFEVDtBQUVJLGlCQUFTLEVBQUM7QUFGZCxRQUxKLEVBU0ksMkRBQUMsc0RBQUQ7QUFDSSxZQUFJLEVBQUMsV0FEVDtBQUVJLGlCQUFTLEVBQUM7QUFGZCxRQVRKLENBTkosQ0FQSixDQURKLENBREo7QUFpQ0gsS0FqRWE7O0FBRVYsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLFVBQUksRUFBRTtBQURHLEtBQWI7QUFHQSxVQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJDLElBQWpCLCtCQUFuQjtBQUVBLFVBQUtDLGlCQUFMLEdBQXlCLENBQ3JCO0FBQ0lDLGdCQUFVLEVBQUUsUUFEaEI7QUFFSUMsZ0JBQVUsRUFBRSxDQUZoQjtBQUdJQyxlQUFTLEVBQUU7QUFIZixLQURxQixFQU1yQjtBQUNJRixnQkFBVSxFQUFFLE9BRGhCO0FBRUlDLGdCQUFVLEVBQUUsQ0FGaEI7QUFHSUMsZUFBUyxFQUFFO0FBSGYsS0FOcUIsRUFXckI7QUFDSUYsZ0JBQVUsRUFBRSxPQURoQjtBQUVJQyxnQkFBVSxFQUFFLENBRmhCO0FBR0lDLGVBQVMsRUFBRTtBQUhmLEtBWHFCLENBQXpCO0FBUFU7QUF3QmI7Ozs7d0NBRW1CO0FBQ2hCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaO0FBQ0EsV0FBS0MsUUFBTCxDQUFjO0FBQUNULFlBQUksRUFBRSxLQUFLVSxLQUFMLENBQVdDO0FBQWxCLE9BQWQ7QUFDSDs7OzZCQXNDUTtBQUFBOztBQUNMLFVBQU1DLFdBQVcsR0FBRywrRUFBcEI7QUFDQSxVQUFNQyxZQUFZLEdBQ2QsOEhBREo7QUFHQSxVQUFNQyxjQUFjLEdBQUcsa0ZBQXZCO0FBRUEsYUFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSSxrRkFESixFQUVJLDhJQUZKLENBREosQ0FESixFQVdJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0ksMkRBQUMsaURBQUQ7QUFDSSxhQUFLLEVBQUUsS0FBS2YsS0FBTCxDQUFXQyxJQUR0QjtBQUVJLG9CQUFZLEVBQUUsS0FBS0MsV0FGdkI7QUFHSSxpQkFBUyxFQUFDLGlCQUhkO0FBSUksa0JBQVUsRUFBRSxLQUFLYyxrQkFKckI7QUFLSSxvQkFBWSxFQUFFLHNCQUFBQyxDQUFDO0FBQUEsaUJBQUksTUFBSSxDQUFDTixLQUFMLENBQVdPLFFBQVgsQ0FBb0I7QUFBQ0MsZ0JBQUksRUFBRUYsQ0FBQyxDQUFDRTtBQUFULFdBQXBCLENBQUo7QUFBQSxTQUxuQixDQU1JOztBQU5KLFFBREosRUFTSSwyREFBQyxpREFBRDtBQUNJLGFBQUssRUFBRSxLQUFLbkIsS0FBTCxDQUFXQyxJQUR0QixDQUVJO0FBRko7QUFHSSxvQkFBWSxFQUFFLEtBQUtDLFdBSHZCO0FBSUksa0JBQVUsRUFBRSxDQUpoQjtBQUtJLGlCQUFTLEVBQUUsQ0FMZjtBQU1JLGlCQUFTLEVBQUMsaUJBTmQ7QUFPSSx5QkFBaUIsRUFBRSxLQUFLRSxpQkFQNUIsQ0FRSTtBQUNBO0FBQ0E7QUFDQTtBQVhKO0FBWUksWUFBSSxFQUFFLEtBQUtKLEtBQUwsQ0FBV21CLElBWnJCO0FBWTJCLG9CQUFZLEVBQUUsc0JBQUNGLENBQUQ7QUFBQSxpQkFBTyxNQUFJLENBQUNQLFFBQUwsQ0FBYztBQUFDUyxnQkFBSSxFQUFFRixDQUFDLENBQUNFO0FBQVQsV0FBZCxDQUFQO0FBQUEsU0FaekM7QUFhSSx3QkFBZ0IsRUFBRSxLQUFLUixLQUFMLENBQVdTO0FBYmpDLFFBVEosQ0FYSixDQURKO0FBa0RIOzs7O0VBN0g4QkMsK0MiLCJmaWxlIjoiMWYwMzhmYy1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnLi9DYXJvdXNlbCc7XG4vLyBpbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnLi9DYXInO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9CdXR0b24vQnV0dG9uJztcbmltcG9ydCAnLi9jb20uY3NzJztcbmltcG9ydCAnLi9DYXJvdXNlbC5jc3MnO1xuaW1wb3J0ICcuL3ByaW1lZmxleC5jc3MnO1xuaW1wb3J0ICcuL3RoZW1lLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXAxIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNhcnM6IFtdLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNhclRlbXBsYXRlID0gdGhpcy5jYXJUZW1wbGF0ZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMucmVzcG9uc2l2ZU9wdGlvbnMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogJzEwMjRweCcsXG4gICAgICAgICAgICAgICAgbnVtVmlzaWJsZTogMyxcbiAgICAgICAgICAgICAgICBudW1TY3JvbGw6IDMsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6ICc3NjhweCcsXG4gICAgICAgICAgICAgICAgbnVtVmlzaWJsZTogMixcbiAgICAgICAgICAgICAgICBudW1TY3JvbGw6IDIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6ICc1NjBweCcsXG4gICAgICAgICAgICAgICAgbnVtVmlzaWJsZTogMSxcbiAgICAgICAgICAgICAgICBudW1TY3JvbGw6IDEsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBjb25zb2xlLmxvZygnc2V0c3RhdGUnKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y2FyczogdGhpcy5wcm9wcy52YWx1ZX0pO1xuICAgIH1cblxuICAgIGNhclRlbXBsYXRlID0gY2FyID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyLWRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtZ3JpZCBwLW5vZ3V0dGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1jb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Nhci5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhbHQ9e2Nhci5icmFuZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtY29sLTEyIGNhci1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhci10aXRsZVwiPntjYXIuYnJhbmR9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhci1zdWJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXIueWVhcn0gfCB7Y2FyLmNvbG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJwaSBwaS1zZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLWJ1dHRvbi1zZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwicGkgcGktc3RhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtYnV0dG9uLXNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJwaSBwaS1jb2dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLWJ1dHRvbi1zZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBiYXNpY0hlYWRlciA9IDxoMj5CYXNpYzwvaDI+O1xuICAgICAgICBjb25zdCBjdXN0b21IZWFkZXIgPSAoXG4gICAgICAgICAgICA8aDI+Q2lyY3VsYXIsIEF1dG9QbGF5LCAzIEl0ZW1zIHBlciBQYWdlIGFuZCBTY3JvbGwgYnkgMTwvaDI+XG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHZlcnRpY2FsSGVhZGVyID0gPGgyPlZlcnRpY2FsPC9oMj47XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtZGVtb1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1zZWN0aW9uIGludHJvZHVjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXR1cmUtaW50cm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5DYXJvdXNlbDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYXJvdXNlbCBpcyBhIGNvbnRlbnQgc2xpZGVyIGZlYXR1cmluZyB2YXJpb3VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9taXphdGlvbiBvcHRpb25zLlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1zZWN0aW9uIGltcGxlbWVudGF0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY2Fyc31cbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1UZW1wbGF0ZT17dGhpcy5jYXJUZW1wbGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1jYXJvdXNlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlPXt0aGlzLnJlc3BvbnNpdmVTZXR0aW5nc31cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUGFnZUNoYW5nZT17ZSA9PiB0aGlzLnByb3BzLnNldFByb3BzKHtwYWdlOiBlLnBhZ2V9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNhcnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwYWdlPXt0aGlzLnByb3BzLnBhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtVGVtcGxhdGU9e3RoaXMuY2FyVGVtcGxhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBudW1WaXNpYmxlPXszfVxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtU2Nyb2xsPXsxfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tLWNhcm91c2VsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmVPcHRpb25zPXt0aGlzLnJlc3BvbnNpdmVPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaGVhZGVyPXtjdXN0b21IZWFkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjaXJjdWxhcj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9uUGFnZUNoYW5nZT17ZSA9PiB0aGlzLnByb3BzLnNldFByb3BzKHtwYWdlOiBlLnBhZ2V9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9uUGFnZUNoYW5nZT17ZSA9PiBjb25zb2xlLmxvZyh7cGFnZTogZS5wYWdlfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlPXt0aGlzLnN0YXRlLnBhZ2V9IG9uUGFnZUNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoe3BhZ2U6IGUucGFnZX0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b3BsYXlJbnRlcnZhbD17dGhpcy5wcm9wcy5hdXRvcGxheUludGVydmFsfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICB7LypcbiAgICAgICAgICAgICAgICAgICAgPENhcm91c2VsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jYXJzfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVRlbXBsYXRlPXt0aGlzLmNhclRlbXBsYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21heFdpZHRoOiAnNDAwcHgnLCBtYXJnaW5Ub3A6ICcyZW0nfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG51bVZpc2libGU9ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICBudW1TY3JvbGw9ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbFZpZXdQb3J0SGVpZ2h0PVwiMzMwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXt2ZXJ0aWNhbEhlYWRlcn1cbiAgICAgICAgICAgICAgICAgICAgLz4gKi99XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9