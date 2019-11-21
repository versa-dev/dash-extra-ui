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
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Carousel__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
        value: this.state.cars,
        itemTemplate: this.carTemplate,
        className: "custom-carousel",
        responsive: this.responsiveSettings,
        onPageChange: function onPageChange(e) {
          return _this2.props.setProps({
            page: e.page
          });
        }
      }, this.props))));
    }
  }]);

  return Comp1;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvQ2Fyb3VzZWwvQ29tcDEuanMiXSwibmFtZXMiOlsiQ29tcDEiLCJjYXIiLCJpbWFnZSIsImJyYW5kIiwieWVhciIsImNvbG9yIiwic3RhdGUiLCJjYXJzIiwiY2FyVGVtcGxhdGUiLCJiaW5kIiwicmVzcG9uc2l2ZU9wdGlvbnMiLCJicmVha3BvaW50IiwibnVtVmlzaWJsZSIsIm51bVNjcm9sbCIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsInByb3BzIiwidmFsdWUiLCJiYXNpY0hlYWRlciIsImN1c3RvbUhlYWRlciIsInZlcnRpY2FsSGVhZGVyIiwicmVzcG9uc2l2ZVNldHRpbmdzIiwiZSIsInNldFByb3BzIiwicGFnZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCQSxLOzs7OztBQUNqQixtQkFBYztBQUFBOztBQUFBOztBQUNWOztBQURVLGtFQStCQSxVQUFBQyxHQUFHLEVBQUk7QUFDakIsYUFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSTtBQUNJLFdBQUcsRUFBRUEsR0FBRyxDQUFDQyxLQURiLENBRUk7O0FBRkosUUFESixDQURKLEVBT0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUE0QkQsR0FBRyxDQUFDRSxLQUFoQyxDQURKLEVBRUk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDS0YsR0FBRyxDQUFDRyxJQURULFNBQ2tCSCxHQUFHLENBQUNJLEtBRHRCLENBRkosRUFNSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJLDJEQUFDLHNEQUFEO0FBQ0ksWUFBSSxFQUFDLGNBRFQ7QUFFSSxpQkFBUyxFQUFDO0FBRmQsUUFESixFQUtJLDJEQUFDLHNEQUFEO0FBQ0ksWUFBSSxFQUFDLFlBRFQ7QUFFSSxpQkFBUyxFQUFDO0FBRmQsUUFMSixFQVNJLDJEQUFDLHNEQUFEO0FBQ0ksWUFBSSxFQUFDLFdBRFQ7QUFFSSxpQkFBUyxFQUFDO0FBRmQsUUFUSixDQU5KLENBUEosQ0FESixDQURKO0FBaUNILEtBakVhOztBQUVWLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxVQUFJLEVBQUU7QUFERyxLQUFiO0FBR0EsVUFBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCQyxJQUFqQiwrQkFBbkI7QUFFQSxVQUFLQyxpQkFBTCxHQUF5QixDQUNyQjtBQUNJQyxnQkFBVSxFQUFFLFFBRGhCO0FBRUlDLGdCQUFVLEVBQUUsQ0FGaEI7QUFHSUMsZUFBUyxFQUFFO0FBSGYsS0FEcUIsRUFNckI7QUFDSUYsZ0JBQVUsRUFBRSxPQURoQjtBQUVJQyxnQkFBVSxFQUFFLENBRmhCO0FBR0lDLGVBQVMsRUFBRTtBQUhmLEtBTnFCLEVBV3JCO0FBQ0lGLGdCQUFVLEVBQUUsT0FEaEI7QUFFSUMsZ0JBQVUsRUFBRSxDQUZoQjtBQUdJQyxlQUFTLEVBQUU7QUFIZixLQVhxQixDQUF6QjtBQVBVO0FBd0JiOzs7O3dDQUVtQjtBQUNoQkMsYUFBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtBQUNBLFdBQUtDLFFBQUwsQ0FBYztBQUFDVCxZQUFJLEVBQUUsS0FBS1UsS0FBTCxDQUFXQztBQUFsQixPQUFkO0FBQ0g7Ozs2QkFzQ1E7QUFBQTs7QUFDTCxVQUFNQyxXQUFXLEdBQUcsK0VBQXBCO0FBQ0EsVUFBTUMsWUFBWSxHQUNkLDhIQURKO0FBR0EsVUFBTUMsY0FBYyxHQUFHLGtGQUF2QjtBQUVBLGFBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0ksa0ZBREosRUFFSSw4SUFGSixDQURKLENBREosRUFXSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJLDJEQUFDLGlEQUFEO0FBQ0ksYUFBSyxFQUFFLEtBQUtmLEtBQUwsQ0FBV0MsSUFEdEI7QUFFSSxvQkFBWSxFQUFFLEtBQUtDLFdBRnZCO0FBR0ksaUJBQVMsRUFBQyxpQkFIZDtBQUlJLGtCQUFVLEVBQUUsS0FBS2Msa0JBSnJCO0FBS0ksb0JBQVksRUFBRSxzQkFBQUMsQ0FBQztBQUFBLGlCQUFJLE1BQUksQ0FBQ04sS0FBTCxDQUFXTyxRQUFYLENBQW9CO0FBQUNDLGdCQUFJLEVBQUVGLENBQUMsQ0FBQ0U7QUFBVCxXQUFwQixDQUFKO0FBQUE7QUFMbkIsU0FNUSxLQUFLUixLQU5iLEVBREosQ0FYSixDQURKO0FBOENIOzs7O0VBekg4QlMsK0MiLCJmaWxlIjoiZTFiYTVmZi1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnLi9DYXJvdXNlbCc7XG4vLyBpbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnLi9DYXInO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9CdXR0b24vQnV0dG9uJztcbmltcG9ydCAnLi9jb20uY3NzJztcbmltcG9ydCAnLi9DYXJvdXNlbC5jc3MnO1xuaW1wb3J0ICcuL3ByaW1lZmxleC5jc3MnO1xuaW1wb3J0ICcuL3RoZW1lLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXAxIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNhcnM6IFtdLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNhclRlbXBsYXRlID0gdGhpcy5jYXJUZW1wbGF0ZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMucmVzcG9uc2l2ZU9wdGlvbnMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogJzEwMjRweCcsXG4gICAgICAgICAgICAgICAgbnVtVmlzaWJsZTogMyxcbiAgICAgICAgICAgICAgICBudW1TY3JvbGw6IDMsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6ICc3NjhweCcsXG4gICAgICAgICAgICAgICAgbnVtVmlzaWJsZTogMixcbiAgICAgICAgICAgICAgICBudW1TY3JvbGw6IDIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6ICc1NjBweCcsXG4gICAgICAgICAgICAgICAgbnVtVmlzaWJsZTogMSxcbiAgICAgICAgICAgICAgICBudW1TY3JvbGw6IDEsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBjb25zb2xlLmxvZygnc2V0c3RhdGUnKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtjYXJzOiB0aGlzLnByb3BzLnZhbHVlfSk7XG4gICAgfVxuXG4gICAgY2FyVGVtcGxhdGUgPSBjYXIgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXItZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1ncmlkIHAtbm9ndXR0ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Y2FyLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFsdD17Y2FyLmJyYW5kfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1jb2wtMTIgY2FyLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyLXRpdGxlXCI+e2Nhci5icmFuZH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyLXN1YnRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Nhci55ZWFyfSB8IHtjYXIuY29sb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXItYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInBpIHBpLXNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtYnV0dG9uLXNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJwaSBwaS1zdGFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC1idXR0b24tc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInBpIHBpLWNvZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtYnV0dG9uLXNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGJhc2ljSGVhZGVyID0gPGgyPkJhc2ljPC9oMj47XG4gICAgICAgIGNvbnN0IGN1c3RvbUhlYWRlciA9IChcbiAgICAgICAgICAgIDxoMj5DaXJjdWxhciwgQXV0b1BsYXksIDMgSXRlbXMgcGVyIFBhZ2UgYW5kIFNjcm9sbCBieSAxPC9oMj5cbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgdmVydGljYWxIZWFkZXIgPSA8aDI+VmVydGljYWw8L2gyPjtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1kZW1vXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LXNlY3Rpb24gaW50cm9kdWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVhdHVyZS1pbnRyb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkNhcm91c2VsPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhcm91c2VsIGlzIGEgY29udGVudCBzbGlkZXIgZmVhdHVyaW5nIHZhcmlvdXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21pemF0aW9uIG9wdGlvbnMuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LXNlY3Rpb24gaW1wbGVtZW50YXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPENhcm91c2VsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jYXJzfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVRlbXBsYXRlPXt0aGlzLmNhclRlbXBsYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tLWNhcm91c2VsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU9e3RoaXMucmVzcG9uc2l2ZVNldHRpbmdzfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25QYWdlQ2hhbmdlPXtlID0+IHRoaXMucHJvcHMuc2V0UHJvcHMoe3BhZ2U6IGUucGFnZX0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8Q2Fyb3VzZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNhcnN9XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtVGVtcGxhdGU9e3RoaXMuY2FyVGVtcGxhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBudW1WaXNpYmxlPXszfVxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtU2Nyb2xsPXsxfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tLWNhcm91c2VsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmVPcHRpb25zPXt0aGlzLnJlc3BvbnNpdmVPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXtjdXN0b21IZWFkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBjaXJjdWxhcj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5SW50ZXJ2YWw9ezMwMDB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPENhcm91c2VsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jYXJzfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVRlbXBsYXRlPXt0aGlzLmNhclRlbXBsYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21heFdpZHRoOiAnNDAwcHgnLCBtYXJnaW5Ub3A6ICcyZW0nfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG51bVZpc2libGU9ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICBudW1TY3JvbGw9ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbFZpZXdQb3J0SGVpZ2h0PVwiMzMwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXt2ZXJ0aWNhbEhlYWRlcn1cbiAgICAgICAgICAgICAgICAgICAgLz4gKi99XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9