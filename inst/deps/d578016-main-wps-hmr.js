webpackHotUpdateextra_dash_ui_components("main",{

/***/ "./src/demo/App.js":
/*!*************************!*\
  !*** ./src/demo/App.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib */ "./src/lib/index.js");
/* harmony import */ var _sampleData_carouselData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sampleData/carouselData */ "./src/demo/sampleData/carouselData.js");
/* harmony import */ var _sampleData_orgChartData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sampleData/orgChartData */ "./src/demo/sampleData/orgChartData.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/* eslint no-magic-numbers: 0 */





var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this));
    _this.state = {
      value: '',
      data: _sampleData_orgChartData__WEBPACK_IMPORTED_MODULE_3__["default"].data,
      data1: _sampleData_orgChartData__WEBPACK_IMPORTED_MODULE_3__["default"].data1,
      selection: null,
      nodes: null,
      expandedKeys: {},
      first: 0,
      rows: 10,
      first2: 0,
      rows2: 10,
      carData: [],
      screenshot: ""
    };
    _this.recaptchaCallback = _this.recaptchaCallback.bind(_assertThisInitialized(_this));
    _this.toggleMovies = _this.toggleMovies.bind(_assertThisInitialized(_this));
    _this.onPageChange = _this.onPageChange.bind(_assertThisInitialized(_this));
    _this.onPageChange2 = _this.onPageChange2.bind(_assertThisInitialized(_this));
    _this.carTemplate = _this.carTemplate.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadJSON('../../car-large.json');
    }
  }, {
    key: "loadJSON",
    value: function loadJSON(path) {
      var _this2 = this;

      var xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            _this2.setState({
              carData: JSON.parse(xhr.responseText)
            });
          } else {
            console.log('Error');
          }
        }
      };

      xhr.open('GET', path, true);
      xhr.send();
    }
  }, {
    key: "setProps",
    value: function setProps(newProps) {// console.log(newProps);
      // this.setState({
      //     screenshot: newProps.screenshot
      // });
    }
  }, {
    key: "recaptchaCallback",
    value: function recaptchaCallback(response) {
      console.log('Response');
    }
  }, {
    key: "recaptchaExpiredCallback",
    value: function recaptchaExpiredCallback() {
      console.log('Expired');
    }
  }, {
    key: "onPageChange",
    value: function onPageChange(event) {
      this.setState({
        first: event.first,
        rows: event.rows
      });
    }
  }, {
    key: "onPageChange2",
    value: function onPageChange2(event) {
      this.setState({
        first2: event.first,
        rows2: event.rows
      });
    }
  }, {
    key: "toggleMovies",
    value: function toggleMovies() {
      var expandedKeys = _objectSpread({}, this.state.expandedKeys);

      if (expandedKeys['2']) delete expandedKeys['2'];else expandedKeys['2'] = true;
      this.setState({
        expandedKeys: expandedKeys
      });
    }
  }, {
    key: "carTemplate",
    value: function carTemplate(car) {
      // console.log(car)
      if (!car) {
        return;
      } // data


      var src = './' + car.brand + '.png';
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-grid car-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-col-12 p-md-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: src,
        alt: "Car"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-col-12 p-md-9"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-grid"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-col-2 p-sm-6"
      }, "Vin: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-col-10 p-sm-6"
      }, car.vin), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-col-2 p-sm-6"
      }, "Year: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-col-10 p-sm-6"
      }, car.year), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-col-2 p-sm-6"
      }, "Brand: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-col-10 p-sm-6"
      }, car.brand), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-col-2 p-sm-6"
      }, "Color: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-col-10 p-sm-6"
      }, car.color))));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      // console.log(this.state.carData.data);
      var items = [{
        label: 'Categories'
      }, {
        label: 'Sports'
      }, {
        label: 'Football'
      }, {
        label: 'Countries'
      }, {
        label: 'Spain'
      }, {
        label: 'F.C. Barcelona'
      }, {
        label: 'Squad'
      }, {
        label: 'Lionel Messi2',
        url: 'https://en.wikipedia.org/wiki/Lionel_Messi'
      }];
      var home = {
        icon: 'tumb tumb-home',
        url: 'https://github.com/nfrik/extra_dash_ui_components.git',
        label: 'Home'
      };
      var footer = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        ref: function ref(el) {
          return _this3.loadButton = el;
        }
      }, " Load ");
      var responsiveOptions = [{
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
      var data = [{
        key: '0',
        label: 'Documents',
        data: 'Documents Folder',
        icon: 'pi pi-fw pi-inbox',
        children: [{
          key: '0-0',
          label: 'Work',
          data: 'Work Folder',
          icon: 'pi pi-fw pi-cog',
          children: [{
            key: '0-0-0',
            label: 'Expenses.doc',
            icon: 'pi pi-fw pi-file',
            data: 'Expenses Document'
          }, {
            key: '0-0-1',
            label: 'Resume.doc',
            icon: 'pi pi-fw pi-file',
            data: 'Resume Document'
          }]
        }, {
          key: '0-1',
          label: 'Home',
          data: 'Home Folder',
          icon: 'pi pi-fw pi-home',
          children: [{
            key: '0-1-0',
            label: 'Invoices.txt',
            icon: 'pi pi-fw pi-file',
            data: 'Invoices for this month'
          }]
        }]
      }, {
        key: '1',
        label: 'Events',
        data: 'Events Folder',
        icon: 'pi pi-fw pi-calendar',
        children: [{
          key: '1-0',
          label: 'Meeting',
          icon: 'pi pi-fw pi-calendar-plus',
          data: 'Meeting'
        }, {
          key: '1-1',
          label: 'Product Launch',
          icon: 'pi pi-fw pi-calendar-plus',
          data: 'Product Launch'
        }, {
          key: '1-2',
          label: 'Report Review',
          icon: 'pi pi-fw pi-calendar-plus',
          data: 'Report Review'
        }]
      }, {
        key: '2',
        label: '<div>adsaf</div>Movies',
        data: 'Movies Folder',
        icon: 'pi pi-fw pi-star',
        children: [{
          key: '2-0',
          icon: 'pi pi-fw pi-star',
          label: 'Al Pacino',
          data: 'Pacino Movies',
          children: [{
            key: '2-0-0',
            label: 'Scarface',
            icon: 'pi pi-fw pi-video',
            data: 'Scarface Movie'
          }, {
            key: '2-0-1',
            label: 'Serpico',
            icon: 'pi pi-fw pi-video',
            data: 'Serpico Movie'
          }]
        }, {
          key: '2-1',
          label: 'Robert De Niro',
          icon: 'pi pi-fw pi-star',
          data: 'De Niro Movies',
          children: [{
            key: '2-1-0',
            label: 'Goodfellas',
            icon: 'pi pi-fw pi-video',
            data: 'Goodfellas Movie'
          }, {
            key: '2-1-1',
            label: 'Untouchables',
            icon: 'pi pi-fw pi-video',
            data: 'Untouchables Movie'
          }]
        }]
      }];
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["PDFViewerComponent"], {
        label: "Test"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"], {
        value: _sampleData_carouselData__WEBPACK_IMPORTED_MODULE_2__["carsCarousel"],
        numVisible: 4,
        numScroll: 1 // className="custom-carousel"
        ,
        responsiveOptions: responsiveOptions,
        header: 'customHeader' // page={this.state.page}
        // setProps={this.setProps}
        ,
        circular: true,
        autoplayInterval: 2000
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbsDashUiComponents"], {
        model: items,
        home: home
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Hello, Dash!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["WebcamDashUiComponents"], {
        id: "webcam",
        audio: false,
        screenshotFormat: "image/jpeg",
        screenshotWidth: 500,
        width: 500,
        height: 300,
        setProps: this.setProps
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["MicrophoneDashUiComponents"], null));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvZGVtby9BcHAuanMiXSwibmFtZXMiOlsiQXBwIiwic3RhdGUiLCJ2YWx1ZSIsImRhdGEiLCJvcmdTYW1wbGUiLCJkYXRhMSIsInNlbGVjdGlvbiIsIm5vZGVzIiwiZXhwYW5kZWRLZXlzIiwiZmlyc3QiLCJyb3dzIiwiZmlyc3QyIiwicm93czIiLCJjYXJEYXRhIiwic2NyZWVuc2hvdCIsInJlY2FwdGNoYUNhbGxiYWNrIiwiYmluZCIsInRvZ2dsZU1vdmllcyIsIm9uUGFnZUNoYW5nZSIsIm9uUGFnZUNoYW5nZTIiLCJjYXJUZW1wbGF0ZSIsImxvYWRKU09OIiwicGF0aCIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsIkRPTkUiLCJzdGF0dXMiLCJzZXRTdGF0ZSIsIkpTT04iLCJwYXJzZSIsInJlc3BvbnNlVGV4dCIsImNvbnNvbGUiLCJsb2ciLCJvcGVuIiwic2VuZCIsIm5ld1Byb3BzIiwicmVzcG9uc2UiLCJldmVudCIsImNhciIsInNyYyIsImJyYW5kIiwidmluIiwieWVhciIsImNvbG9yIiwiaXRlbXMiLCJsYWJlbCIsInVybCIsImhvbWUiLCJpY29uIiwiZm9vdGVyIiwiZWwiLCJsb2FkQnV0dG9uIiwicmVzcG9uc2l2ZU9wdGlvbnMiLCJicmVha3BvaW50IiwibnVtVmlzaWJsZSIsIm51bVNjcm9sbCIsImtleSIsImNoaWxkcmVuIiwiY2Fyc0Nhcm91c2VsIiwic2V0UHJvcHMiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFXQTtBQUNBOztJQUVNQSxHOzs7OztBQUNGLGlCQUFjO0FBQUE7O0FBQUE7O0FBQ1Y7QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsV0FBSyxFQUFFLEVBREU7QUFFVEMsVUFBSSxFQUFF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RUFBRSxHQU5aO0FBT0ksZ0JBQVEsRUFBRSxLQUFLWTtBQVBuQixRQS9GSixFQXdHSSwyREFBQywrREFBRCxPQXhHSixDQURKO0FBNEdIOzs7O0VBcFlhQywrQzs7QUF1WUg5RCxrRUFBZixFIiwiZmlsZSI6ImQ1NzgwMTYtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IG5vLW1hZ2ljLW51bWJlcnM6IDAgKi9cclxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgICBQREZWaWV3ZXJDb21wb25lbnQsXHJcbiAgICBCcmVhZGNydW1ic0Rhc2hVaUNvbXBvbmVudHMsXHJcbiAgICBDYXJvdXNlbENvbXBvbmVudCxcclxuICAgIERhdGFTY3JvbGxlckRhc2hVaUNvbXBvbmVudHMsXHJcbiAgICBPcmdhbml6YXRpb25DaGFydENvbXBvbmVudCxcclxuICAgIFBhZ2luYXRvckRhc2hVaUNvbXBvbmVudHMsXHJcbiAgICBUcmVlRGFzaFVpQ29tcG9uZW50cyxcclxuICAgIFdlYmNhbURhc2hVaUNvbXBvbmVudHMsXHJcbiAgICBNaWNyb3Bob25lRGFzaFVpQ29tcG9uZW50c1xyXG59IGZyb20gJy4uL2xpYic7XHJcbmltcG9ydCB7Y2Fyc0Nhcm91c2VsfSBmcm9tICcuL3NhbXBsZURhdGEvY2Fyb3VzZWxEYXRhJztcclxuaW1wb3J0IG9yZ1NhbXBsZSBmcm9tICcuL3NhbXBsZURhdGEvb3JnQ2hhcnREYXRhJztcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHZhbHVlOiAnJyxcclxuICAgICAgICAgICAgZGF0YTogb3JnU2FtcGxlLmRhdGEsXHJcbiAgICAgICAgICAgIGRhdGExOiBvcmdTYW1wbGUuZGF0YTEsXHJcbiAgICAgICAgICAgIHNlbGVjdGlvbjogbnVsbCxcclxuICAgICAgICAgICAgbm9kZXM6IG51bGwsXHJcbiAgICAgICAgICAgIGV4cGFuZGVkS2V5czoge30sXHJcbiAgICAgICAgICAgIGZpcnN0OiAwLFxyXG4gICAgICAgICAgICByb3dzOiAxMCxcclxuICAgICAgICAgICAgZmlyc3QyOiAwLFxyXG4gICAgICAgICAgICByb3dzMjogMTAsXHJcbiAgICAgICAgICAgIGNhckRhdGE6IFtdLFxyXG4gICAgICAgICAgICBzY3JlZW5zaG90OiBcIlwiXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnJlY2FwdGNoYUNhbGxiYWNrID0gdGhpcy5yZWNhcHRjaGFDYWxsYmFjay5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlTW92aWVzID0gdGhpcy50b2dnbGVNb3ZpZXMuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uUGFnZUNoYW5nZSA9IHRoaXMub25QYWdlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vblBhZ2VDaGFuZ2UyID0gdGhpcy5vblBhZ2VDaGFuZ2UyLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuY2FyVGVtcGxhdGUgPSB0aGlzLmNhclRlbXBsYXRlLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkSlNPTignLi4vLi4vY2FyLWxhcmdlLmpzb24nKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkSlNPTihwYXRoKSB7XHJcbiAgICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJEYXRhOiBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3InKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIHBhdGgsIHRydWUpO1xyXG4gICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UHJvcHMobmV3UHJvcHMpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhuZXdQcm9wcyk7XHJcbiAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgLy8gICAgIHNjcmVlbnNob3Q6IG5ld1Byb3BzLnNjcmVlbnNob3RcclxuICAgICAgICAvLyB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZWNhcHRjaGFDYWxsYmFjayhyZXNwb25zZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdSZXNwb25zZScpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlY2FwdGNoYUV4cGlyZWRDYWxsYmFjaygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnRXhwaXJlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUGFnZUNoYW5nZShldmVudCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBmaXJzdDogZXZlbnQuZmlyc3QsXHJcbiAgICAgICAgICAgIHJvd3M6IGV2ZW50LnJvd3MsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25QYWdlQ2hhbmdlMihldmVudCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBmaXJzdDI6IGV2ZW50LmZpcnN0LFxyXG4gICAgICAgICAgICByb3dzMjogZXZlbnQucm93cyxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVNb3ZpZXMoKSB7XHJcbiAgICAgICAgbGV0IGV4cGFuZGVkS2V5cyA9IHsuLi50aGlzLnN0YXRlLmV4cGFuZGVkS2V5c307XHJcbiAgICAgICAgaWYgKGV4cGFuZGVkS2V5c1snMiddKSBkZWxldGUgZXhwYW5kZWRLZXlzWycyJ107XHJcbiAgICAgICAgZWxzZSBleHBhbmRlZEtleXNbJzInXSA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2V4cGFuZGVkS2V5czogZXhwYW5kZWRLZXlzfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FyVGVtcGxhdGUoY2FyKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coY2FyKVxyXG4gICAgICAgIGlmICghY2FyKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGRhdGFcclxuXHJcbiAgICAgICAgY29uc3Qgc3JjID0gJy4vJyArIGNhci5icmFuZCArICcucG5nJztcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWdyaWQgY2FyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1jb2wtMTIgcC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3NyY30gYWx0PVwiQ2FyXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWNvbC0xMiBwLW1kLTlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtZ3JpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtY29sLTIgcC1zbS02XCI+VmluOiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWNvbC0xMCBwLXNtLTZcIj57Y2FyLnZpbn08L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1jb2wtMiBwLXNtLTZcIj5ZZWFyOiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWNvbC0xMCBwLXNtLTZcIj57Y2FyLnllYXJ9PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtY29sLTIgcC1zbS02XCI+QnJhbmQ6IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtY29sLTEwIHAtc20tNlwiPntjYXIuYnJhbmR9PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtY29sLTIgcC1zbS02XCI+Q29sb3I6IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtY29sLTEwIHAtc20tNlwiPntjYXIuY29sb3J9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zdGF0ZS5jYXJEYXRhLmRhdGEpO1xyXG5cclxuICAgICAgICBjb25zdCBpdGVtcyA9IFtcclxuICAgICAgICAgICAge2xhYmVsOiAnQ2F0ZWdvcmllcyd9LFxyXG4gICAgICAgICAgICB7bGFiZWw6ICdTcG9ydHMnfSxcclxuICAgICAgICAgICAge2xhYmVsOiAnRm9vdGJhbGwnfSxcclxuICAgICAgICAgICAge2xhYmVsOiAnQ291bnRyaWVzJ30sXHJcbiAgICAgICAgICAgIHtsYWJlbDogJ1NwYWluJ30sXHJcbiAgICAgICAgICAgIHtsYWJlbDogJ0YuQy4gQmFyY2Vsb25hJ30sXHJcbiAgICAgICAgICAgIHtsYWJlbDogJ1NxdWFkJ30sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnTGlvbmVsIE1lc3NpMicsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9MaW9uZWxfTWVzc2knLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIGNvbnN0IGhvbWUgPSB7XHJcbiAgICAgICAgICAgIGljb246ICd0dW1iIHR1bWItaG9tZScsXHJcbiAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9uZnJpay9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMuZ2l0JyxcclxuICAgICAgICAgICAgbGFiZWw6ICdIb21lJyxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBmb290ZXIgPSAoXHJcbiAgICAgICAgICAgIDxidXR0b24gcmVmPXtlbCA9PiAodGhpcy5sb2FkQnV0dG9uID0gZWwpfT4gTG9hZCA8L2J1dHRvbj5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCByZXNwb25zaXZlT3B0aW9ucyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogJzEwMjRweCcsXHJcbiAgICAgICAgICAgICAgICBudW1WaXNpYmxlOiAzLFxyXG4gICAgICAgICAgICAgICAgbnVtU2Nyb2xsOiAzLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiAnNzY4cHgnLFxyXG4gICAgICAgICAgICAgICAgbnVtVmlzaWJsZTogMixcclxuICAgICAgICAgICAgICAgIG51bVNjcm9sbDogMixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogJzU2MHB4JyxcclxuICAgICAgICAgICAgICAgIG51bVZpc2libGU6IDEsXHJcbiAgICAgICAgICAgICAgICBudW1TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXTtcclxuICAgICAgICBjb25zdCBkYXRhID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBrZXk6ICcwJyxcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnRG9jdW1lbnRzJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6ICdEb2N1bWVudHMgRm9sZGVyJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdwaSBwaS1mdyBwaS1pbmJveCcsXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnMC0wJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdXb3JrJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogJ1dvcmsgRm9sZGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3BpIHBpLWZ3IHBpLWNvZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnMC0wLTAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnRXhwZW5zZXMuZG9jJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAncGkgcGktZncgcGktZmlsZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogJ0V4cGVuc2VzIERvY3VtZW50JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnMC0wLTEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnUmVzdW1lLmRvYycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3BpIHBpLWZ3IHBpLWZpbGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6ICdSZXN1bWUgRG9jdW1lbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnMC0xJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdIb21lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogJ0hvbWUgRm9sZGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3BpIHBpLWZ3IHBpLWhvbWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJzAtMS0wJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0ludm9pY2VzLnR4dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3BpIHBpLWZ3IHBpLWZpbGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6ICdJbnZvaWNlcyBmb3IgdGhpcyBtb250aCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBrZXk6ICcxJyxcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnRXZlbnRzJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6ICdFdmVudHMgRm9sZGVyJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdwaSBwaS1mdyBwaS1jYWxlbmRhcicsXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnMS0wJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdNZWV0aW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3BpIHBpLWZ3IHBpLWNhbGVuZGFyLXBsdXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiAnTWVldGluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJzEtMScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnUHJvZHVjdCBMYXVuY2gnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAncGkgcGktZncgcGktY2FsZW5kYXItcGx1cycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6ICdQcm9kdWN0IExhdW5jaCcsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJzEtMicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnUmVwb3J0IFJldmlldycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdwaSBwaS1mdyBwaS1jYWxlbmRhci1wbHVzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogJ1JlcG9ydCBSZXZpZXcnLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBrZXk6ICcyJyxcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnPGRpdj5hZHNhZjwvZGl2Pk1vdmllcycsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiAnTW92aWVzIEZvbGRlcicsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAncGkgcGktZncgcGktc3RhcicsXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnMi0wJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3BpIHBpLWZ3IHBpLXN0YXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0FsIFBhY2lubycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6ICdQYWNpbm8gTW92aWVzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICcyLTAtMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdTY2FyZmFjZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3BpIHBpLWZ3IHBpLXZpZGVvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiAnU2NhcmZhY2UgTW92aWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICcyLTAtMScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdTZXJwaWNvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAncGkgcGktZncgcGktdmlkZW8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6ICdTZXJwaWNvIE1vdmllJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJzItMScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnUm9iZXJ0IERlIE5pcm8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAncGkgcGktZncgcGktc3RhcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6ICdEZSBOaXJvIE1vdmllcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnMi0xLTAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnR29vZGZlbGxhcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3BpIHBpLWZ3IHBpLXZpZGVvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiAnR29vZGZlbGxhcyBNb3ZpZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJzItMS0xJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1VudG91Y2hhYmxlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3BpIHBpLWZ3IHBpLXZpZGVvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiAnVW50b3VjaGFibGVzIE1vdmllJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxQREZWaWV3ZXJDb21wb25lbnQgbGFiZWw9XCJUZXN0XCIgLz5cclxuICAgICAgICAgICAgICAgIDxDYXJvdXNlbENvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjYXJzQ2Fyb3VzZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgbnVtVmlzaWJsZT17NH1cclxuICAgICAgICAgICAgICAgICAgICBudW1TY3JvbGw9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2xhc3NOYW1lPVwiY3VzdG9tLWNhcm91c2VsXCJcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlT3B0aW9ucz17cmVzcG9uc2l2ZU9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXsnY3VzdG9tSGVhZGVyJ31cclxuICAgICAgICAgICAgICAgICAgICAvLyBwYWdlPXt0aGlzLnN0YXRlLnBhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc2V0UHJvcHM9e3RoaXMuc2V0UHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgY2lyY3VsYXI9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b3BsYXlJbnRlcnZhbD17MjAwMH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7LyogPFJhdGluZ0NvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFByb3BzPXt0aGlzLnNldFByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBzdGFycz17M31cclxuICAgICAgICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgey8qIDxMaXN0Qm94Q29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9eydpZGsnfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtjYXJzfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFByb3BzPXt0aGlzLnNldFByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6ICcxNWVtJ319XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdFN0eWxlPXt7bWF4SGVpZ2h0OiAnMTAwcHgnfX1cclxuICAgICAgICAgICAgICAgICAgICBsaXN0Q29udGFpbmVyU3R5bGU9e3ttYXhIZWlnaHQ6ICczMDBweCd9fVxyXG4gICAgICAgICAgICAgICAgICAgIG11bHRpcGxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICB0b29sdGlwPXsnSGV5J31cclxuICAgICAgICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgey8qIDxPcmdhbml6YXRpb25DaGFydENvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgIHNldFByb3BzPXt0aGlzLnNldFByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRhdGExfVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbk1vZGU9XCJtdWx0aXBsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uPXt0aGlzLnN0YXRlLnNlbGVjdGlvbn1cclxuICAgICAgICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgey8qIDxFeHRyYURhc2hVaUNvbXBvbmVudHNcclxuICAgICAgICAgICAgICAgICAgICBzZXRQcm9wcz17dGhpcy5zZXRQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgPEJyZWFkY3J1bWJzRGFzaFVpQ29tcG9uZW50cyBtb2RlbD17aXRlbXN9IGhvbWU9e2hvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8aDE+SGVsbG8sIERhc2ghPC9oMT5cclxuICAgICAgICAgICAgICAgIHsvKiA8aDMgY2xhc3NOYW1lPVwiZmlyc3RcIj5VbmNvbnRyb2xsZWQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgPFRyZWVEYXNoVWlDb21wb25lbnRzIHZhbHVlPXtkYXRhfSB7Li4udGhpcy5zdGF0ZX0gLz5cclxuICAgICAgICAgICAgICAgIDxoMz5Db250cm9sbGVkPC9oMz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy50b2dnbGVNb3ZpZXN9PlRvZ2dsZSBNb3ZpZXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxUcmVlRGFzaFVpQ29tcG9uZW50c1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkS2V5cz17dGhpcy5zdGF0ZS5leHBhbmRlZEtleXN9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Ub2dnbGU9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7ZXhwYW5kZWRLZXlzOiBlLnZhbHVlfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Ub3A6ICcuNWVtJ319XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGgzPkRlZmF1bHQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgPFBhZ2luYXRvckRhc2hVaUNvbXBvbmVudHNcclxuICAgICAgICAgICAgICAgICAgICBmaXJzdD17dGhpcy5zdGF0ZS5maXJzdH1cclxuICAgICAgICAgICAgICAgICAgICByb3dzPXt0aGlzLnN0YXRlLnJvd3N9XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxSZWNvcmRzPXsxMjB9XHJcbiAgICAgICAgICAgICAgICAgICAgcm93c1BlclBhZ2VPcHRpb25zPXtbMTAsIDIwLCAzMF19XHJcbiAgICAgICAgICAgICAgICAgICAgb25QYWdlQ2hhbmdlPXt0aGlzLm9uUGFnZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgID48L1BhZ2luYXRvckRhc2hVaUNvbXBvbmVudHM+ICovfVxyXG4gICAgICAgICAgICAgICAgey8qIDxQYWdpbmF0b3JEYXNoVWlDb21wb25lbnRzLz4gKi99XHJcbiAgICAgICAgICAgICAgICB7LyogPGgzPkN1c3RvbSBUZW1wbGF0ZTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8UGFnaW5hdG9yRGFzaFVpQ29tcG9uZW50c1xyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0PXt0aGlzLnN0YXRlLmZpcnN0Mn1cclxuICAgICAgICAgICAgICAgICAgICByb3dzPXt0aGlzLnN0YXRlLnJvd3MyfVxyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsUmVjb3Jkcz17MTIwfVxyXG4gICAgICAgICAgICAgICAgICAgIHJvd3NQZXJQYWdlT3B0aW9ucz17WzEwLCAyMCwgMzBdfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uUGFnZUNoYW5nZT17dGhpcy5vblBhZ2VDaGFuZ2UyfVxyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlPVwiRmlyc3RQYWdlTGluayBQcmV2UGFnZUxpbmsgQ3VycmVudFBhZ2VSZXBvcnQgTmV4dFBhZ2VMaW5rIExhc3RQYWdlTGlua1wiXHJcbiAgICAgICAgICAgICAgICA+PC9QYWdpbmF0b3JEYXNoVWlDb21wb25lbnRzPiAqL31cclxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtc2VjdGlvbiBpbXBsZW1lbnRhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIERlbW8gaXMgYXQgdGhlIGJvdHRvbSBvZiB0aGlzIHBhZ2UuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1zZWN0aW9uIGltcGxlbWVudGF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPERhdGFTY3JvbGxlckRhc2hVaUNvbXBvbmVudHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY2FyRGF0YS5kYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtVGVtcGxhdGU9e3RoaXMuY2FyVGVtcGxhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9ezEwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmxpbmU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbEhlaWdodD1cIjUwMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPVwiU2Nyb2xsIERvd24gdG8gTG9hZCBNb3JlXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEYXRhU2Nyb2xsZXJEYXNoVWlDb21wb25lbnRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNhckRhdGEuZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVRlbXBsYXRlPXt0aGlzLmNhclRlbXBsYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dzPXs1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkZXI9e3RoaXMubG9hZEJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9vdGVyPXtmb290ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj1cIkNsaWNrIExvYWQgQnV0dG9uIGF0IEZvb3RlciB0byBMb2FkIE1vcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgey8qIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgIDxXZWJjYW1EYXNoVWlDb21wb25lbnRzXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9J3dlYmNhbSdcclxuICAgICAgICAgICAgICAgICAgICBhdWRpbz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgc2NyZWVuc2hvdEZvcm1hdD1cImltYWdlL2pwZWdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNjcmVlbnNob3RXaWR0aD17NTAwfVxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXs1MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UHJvcHM9e3RoaXMuc2V0UHJvcHN9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPE1pY3JvcGhvbmVEYXNoVWlDb21wb25lbnRzLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9