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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
      carData: []
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
    value: function setProps(newProps) {
      console.log(newProps);
      this.setState(newProps);
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
        label: 'Lionel Messi',
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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"], {
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
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["OrganizationChartComponent"], {
        setProps: this.setProps,
        value: this.state.data1,
        selectionMode: "multiple",
        selection: this.state.selection
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "first"
      }, "Uncontrolled"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["TreeDashUiComponents"], _extends({
        value: data
      }, this.state)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Controlled"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.toggleMovies
      }, "Toggle Movies"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["TreeDashUiComponents"], {
        value: data,
        expandedKeys: this.state.expandedKeys,
        onToggle: function onToggle(e) {
          return _this3.setState({
            expandedKeys: e.value
          });
        },
        style: {
          marginTop: '.5em'
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Default"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["PaginatorDashUiComponents"], {
        first: this.state.first,
        rows: this.state.rows,
        totalRecords: 120,
        rowsPerPageOptions: [10, 20, 30],
        onPageChange: this.onPageChange
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Custom Template"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["PaginatorDashUiComponents"], {
        first: this.state.first2,
        rows: this.state.rows2,
        totalRecords: 120,
        rowsPerPageOptions: [10, 20, 30],
        onPageChange: this.onPageChange2,
        template: "FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "content-section implementation"
      }, "Demo is at the bottom of this page."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "content-section implementation"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["DataScrollerDashUiComponents"], {
        value: this.state.carData.data,
        itemTemplate: this.carTemplate,
        rows: 10,
        inline: true,
        scrollHeight: "500px",
        header: "Scroll Down to Load More"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["DataScrollerDashUiComponents"], {
        value: this.state.carData.data,
        itemTemplate: this.carTemplate,
        rows: 5,
        loader: this.loadButton,
        footer: footer,
        header: "Click Load Button at Footer to Load More"
      })));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvZGVtby9BcHAuanMiXSwibmFtZXMiOlsiQXBwIiwic3RhdGUiLCJ2YWx1ZSIsImRhdGEiLCJvcmdTYW1wbGUiLCJkYXRhMSIsInNlbGVjdGlvbiIsIm5vZGVzIiwiZXhwYW5kZWRLZXlzIiwiZmlyc3QiLCJyb3dzIiwiZmlyc3QyIiwicm93czIiLCJjYXJEYXRhIiwicmVjYXB0Y2hhQ2FsbGJhY2siLCJiaW5kIiwidG9nZ2xlTW92aWVzIiwib25QYWdlQ2hhbmdlIiwib25QYWdlQ2hhbmdlMiIsImNhclRlbXBsYXRlIiwibG9hZEpTT04iLCJwYXRoIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwiRE9ORSIsInN0YXR1cyIsInNldFN0YXRlIiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2VUZXh0IiwiY29uc29sZSIsImxvZyIsIm9wZW4iLCJzZW5kIiwibmV3UHJvcHMiLCJyZXNwb25zZSIsImV2ZW50IiwiY2FyIiwic3JjIiwiYnJhbmQiLCJ2aW4iLCJ5ZWFyIiwiY29sb3IiLCJrZXkiLCJsYWJlbCIsImljb24iLCJjaGlsZHJlbiIsIml0ZW1zIiwidXJsIiwiaG9tZSIsImZvb3RlciIsImVsIiwibG9hZEJ1dHRvbiIsInJlc3BvbnNpdmVPcHRpb25zIiwiYnJlYWtwb2ludCIsIm51bVZpc2libGUiLCJudW1TY3JvbGwiLCJjYXJzQ2Fyb3VzZWwiLCJzZXRQcm9wcyIsImUiLCJtYXJnaW5Ub3AiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7O0lBRU1BLEc7Ozs7O0FBQ0YsaUJBQWM7QUFBQTs7QUFBQTs7QUFDVjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxXQUFLLEVBQUUsRUFERTtBQUVUQyxVQUFJ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SSxvQkFBWSxFQUFFLEtBQUtnQixXQUZ2QjtBQUdJLFlBQUksRUFBRSxFQUhWO0FBSUksY0FBTSxFQUFFLElBSlo7QUFLSSxvQkFBWSxFQUFDLE9BTGpCO0FBTUksY0FBTSxFQUFDO0FBTlgsUUFESixFQVNJLDJEQUFDLGlFQUFEO0FBQ0ksYUFBSyxFQUFFLEtBQUtsQixLQUFMLENBQVdZLE9BQVgsQ0FBbUJWLElBRDlCO0FBRUksb0JBQVksRUFBRSxLQUFLZ0IsV0FGdkI7QUFHSSxZQUFJLEVBQUUsQ0FIVjtBQUlJLGNBQU0sRUFBRSxLQUFLbUMsVUFKakI7QUFLSSxjQUFNLEVBQUVGLE1BTFo7QUFNSSxjQUFNLEVBQUM7QUFOWCxRQVRKLENBM0VKLENBREo7QUFnR0g7Ozs7RUFwWGFXLCtDOztBQXVYSC9ELGtFQUFmLEUiLCJmaWxlIjoiYmFjMDY0ZC1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgbm8tbWFnaWMtbnVtYmVyczogMCAqL1xuaW1wb3J0IHtDb21wb25lbnQsIGRlZmF1bHQgYXMgUmVhY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gICAgQ2Fyb3VzZWxDb21wb25lbnQsXG4gICAgRGF0YVNjcm9sbGVyRGFzaFVpQ29tcG9uZW50cyxcbiAgICBQYWdpbmF0b3JEYXNoVWlDb21wb25lbnRzLFxuICAgIFRyZWVEYXNoVWlDb21wb25lbnRzLFxuICAgIE9yZ2FuaXphdGlvbkNoYXJ0Q29tcG9uZW50XG59IGZyb20gJy4uL2xpYic7XG5pbXBvcnQge2NhcnNDYXJvdXNlbH0gZnJvbSAnLi9zYW1wbGVEYXRhL2Nhcm91c2VsRGF0YSc7XG5pbXBvcnQgb3JnU2FtcGxlIGZyb20gJy4vc2FtcGxlRGF0YS9vcmdDaGFydERhdGEnO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICAgICAgZGF0YTogb3JnU2FtcGxlLmRhdGEsXG4gICAgICAgICAgICBkYXRhMTogb3JnU2FtcGxlLmRhdGExLFxuICAgICAgICAgICAgc2VsZWN0aW9uOiBudWxsLFxuICAgICAgICAgICAgbm9kZXM6IG51bGwsXG4gICAgICAgICAgICBleHBhbmRlZEtleXM6IHt9LFxuICAgICAgICAgICAgZmlyc3Q6IDAsXG4gICAgICAgICAgICByb3dzOiAxMCxcbiAgICAgICAgICAgIGZpcnN0MjogMCxcbiAgICAgICAgICAgIHJvd3MyOiAxMCxcbiAgICAgICAgICAgIGNhckRhdGE6IFtdLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnJlY2FwdGNoYUNhbGxiYWNrID0gdGhpcy5yZWNhcHRjaGFDYWxsYmFjay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnRvZ2dsZU1vdmllcyA9IHRoaXMudG9nZ2xlTW92aWVzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25QYWdlQ2hhbmdlID0gdGhpcy5vblBhZ2VDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblBhZ2VDaGFuZ2UyID0gdGhpcy5vblBhZ2VDaGFuZ2UyLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5jYXJUZW1wbGF0ZSA9IHRoaXMuY2FyVGVtcGxhdGUuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5sb2FkSlNPTignLi4vLi4vY2FyLWxhcmdlLmpzb24nKTtcbiAgICB9XG5cbiAgICBsb2FkSlNPTihwYXRoKSB7XG4gICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkge1xuICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJEYXRhOiBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3InKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHhoci5vcGVuKCdHRVQnLCBwYXRoLCB0cnVlKTtcbiAgICAgICAgeGhyLnNlbmQoKTtcbiAgICB9XG5cbiAgICBzZXRQcm9wcyhuZXdQcm9wcykge1xuICAgICAgICBjb25zb2xlLmxvZyhuZXdQcm9wcyk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUobmV3UHJvcHMpO1xuICAgIH1cblxuICAgIHJlY2FwdGNoYUNhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdSZXNwb25zZScpO1xuICAgIH1cblxuICAgIHJlY2FwdGNoYUV4cGlyZWRDYWxsYmFjaygpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0V4cGlyZWQnKTtcbiAgICB9XG5cbiAgICBvblBhZ2VDaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBmaXJzdDogZXZlbnQuZmlyc3QsXG4gICAgICAgICAgICByb3dzOiBldmVudC5yb3dzLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblBhZ2VDaGFuZ2UyKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZmlyc3QyOiBldmVudC5maXJzdCxcbiAgICAgICAgICAgIHJvd3MyOiBldmVudC5yb3dzLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0b2dnbGVNb3ZpZXMoKSB7XG4gICAgICAgIGxldCBleHBhbmRlZEtleXMgPSB7Li4udGhpcy5zdGF0ZS5leHBhbmRlZEtleXN9O1xuICAgICAgICBpZiAoZXhwYW5kZWRLZXlzWycyJ10pIGRlbGV0ZSBleHBhbmRlZEtleXNbJzInXTtcbiAgICAgICAgZWxzZSBleHBhbmRlZEtleXNbJzInXSA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXhwYW5kZWRLZXlzOiBleHBhbmRlZEtleXN9KTtcbiAgICB9XG5cbiAgICBjYXJUZW1wbGF0ZShjYXIpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coY2FyKVxuICAgICAgICBpZiAoIWNhcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZGF0YVxuXG4gICAgICAgIGNvbnN0IHNyYyA9ICcuLycgKyBjYXIuYnJhbmQgKyAnLnBuZyc7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1ncmlkIGNhci1pdGVtXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWNvbC0xMiBwLW1kLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3NyY30gYWx0PVwiQ2FyXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtY29sLTEyIHAtbWQtOVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtZ3JpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWNvbC0yIHAtc20tNlwiPlZpbjogPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtY29sLTEwIHAtc20tNlwiPntjYXIudmlufTwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtY29sLTIgcC1zbS02XCI+WWVhcjogPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtY29sLTEwIHAtc20tNlwiPntjYXIueWVhcn08L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWNvbC0yIHAtc20tNlwiPkJyYW5kOiA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1jb2wtMTAgcC1zbS02XCI+e2Nhci5icmFuZH08L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWNvbC0yIHAtc20tNlwiPkNvbG9yOiA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1jb2wtMTAgcC1zbS02XCI+e2Nhci5jb2xvcn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuY2FyRGF0YS5kYXRhKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6ICcwJyxcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0RvY3VtZW50cycsXG4gICAgICAgICAgICAgICAgZGF0YTogJ0RvY3VtZW50cyBGb2xkZXInLFxuICAgICAgICAgICAgICAgIGljb246ICdwaSBwaS1mdyBwaS1pbmJveCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnMC0wJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnV29yaycsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiAnV29yayBGb2xkZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3BpIHBpLWZ3IHBpLWNvZycsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnMC0wLTAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0V4cGVuc2VzLmRvYycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdwaSBwaS1mdyBwaS1maWxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogJ0V4cGVuc2VzIERvY3VtZW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnMC0wLTEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1Jlc3VtZS5kb2MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAncGkgcGktZncgcGktZmlsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6ICdSZXN1bWUgRG9jdW1lbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICcwLTEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdIb21lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6ICdIb21lIEZvbGRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAncGkgcGktZncgcGktaG9tZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnMC0xLTAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0ludm9pY2VzLnR4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdwaSBwaS1mdyBwaS1maWxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogJ0ludm9pY2VzIGZvciB0aGlzIG1vbnRoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6ICcxJyxcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0V2ZW50cycsXG4gICAgICAgICAgICAgICAgZGF0YTogJ0V2ZW50cyBGb2xkZXInLFxuICAgICAgICAgICAgICAgIGljb246ICdwaSBwaS1mdyBwaS1jYWxlbmRhcicsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnMS0wJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnTWVldGluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAncGkgcGktZncgcGktY2FsZW5kYXItcGx1cycsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiAnTWVldGluZycsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJzEtMScsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1Byb2R1Y3QgTGF1bmNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdwaSBwaS1mdyBwaS1jYWxlbmRhci1wbHVzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6ICdQcm9kdWN0IExhdW5jaCcsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJzEtMicsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1JlcG9ydCBSZXZpZXcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3BpIHBpLWZ3IHBpLWNhbGVuZGFyLXBsdXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogJ1JlcG9ydCBSZXZpZXcnLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogJzInLFxuICAgICAgICAgICAgICAgIGxhYmVsOiAnPGRpdj5hZHNhZjwvZGl2Pk1vdmllcycsXG4gICAgICAgICAgICAgICAgZGF0YTogJ01vdmllcyBGb2xkZXInLFxuICAgICAgICAgICAgICAgIGljb246ICdwaSBwaS1mdyBwaS1zdGFyJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICcyLTAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3BpIHBpLWZ3IHBpLXN0YXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdBbCBQYWNpbm8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogJ1BhY2lubyBNb3ZpZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJzItMC0wJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdTY2FyZmFjZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdwaSBwaS1mdyBwaS12aWRlbycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6ICdTY2FyZmFjZSBNb3ZpZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJzItMC0xJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdTZXJwaWNvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3BpIHBpLWZ3IHBpLXZpZGVvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogJ1NlcnBpY28gTW92aWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICcyLTEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdSb2JlcnQgRGUgTmlybycsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAncGkgcGktZncgcGktc3RhcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiAnRGUgTmlybyBNb3ZpZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJzItMS0wJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdHb29kZmVsbGFzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3BpIHBpLWZ3IHBpLXZpZGVvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogJ0dvb2RmZWxsYXMgTW92aWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICcyLTEtMScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnVW50b3VjaGFibGVzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3BpIHBpLWZ3IHBpLXZpZGVvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogJ1VudG91Y2hhYmxlcyBNb3ZpZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF07XG5cbiAgICAgICAgY29uc3QgaXRlbXMgPSBbXG4gICAgICAgICAgICB7bGFiZWw6ICdDYXRlZ29yaWVzJ30sXG4gICAgICAgICAgICB7bGFiZWw6ICdTcG9ydHMnfSxcbiAgICAgICAgICAgIHtsYWJlbDogJ0Zvb3RiYWxsJ30sXG4gICAgICAgICAgICB7bGFiZWw6ICdDb3VudHJpZXMnfSxcbiAgICAgICAgICAgIHtsYWJlbDogJ1NwYWluJ30sXG4gICAgICAgICAgICB7bGFiZWw6ICdGLkMuIEJhcmNlbG9uYSd9LFxuICAgICAgICAgICAge2xhYmVsOiAnU3F1YWQnfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0xpb25lbCBNZXNzaScsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTGlvbmVsX01lc3NpJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF07XG5cbiAgICAgICAgY29uc3QgaG9tZSA9IHtcbiAgICAgICAgICAgIGljb246ICd0dW1iIHR1bWItaG9tZScsXG4gICAgICAgICAgICB1cmw6ICdodHRwczovL2dpdGh1Yi5jb20vbmZyaWsvZXh0cmFfZGFzaF91aV9jb21wb25lbnRzLmdpdCcsXG4gICAgICAgICAgICBsYWJlbDogJ0hvbWUnLFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGZvb3RlciA9IChcbiAgICAgICAgICAgIDxidXR0b24gcmVmPXtlbCA9PiAodGhpcy5sb2FkQnV0dG9uID0gZWwpfT4gTG9hZCA8L2J1dHRvbj5cbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCByZXNwb25zaXZlT3B0aW9ucyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiAnMTAyNHB4JyxcbiAgICAgICAgICAgICAgICBudW1WaXNpYmxlOiAzLFxuICAgICAgICAgICAgICAgIG51bVNjcm9sbDogMyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogJzc2OHB4JyxcbiAgICAgICAgICAgICAgICBudW1WaXNpYmxlOiAyLFxuICAgICAgICAgICAgICAgIG51bVNjcm9sbDogMixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogJzU2MHB4JyxcbiAgICAgICAgICAgICAgICBudW1WaXNpYmxlOiAxLFxuICAgICAgICAgICAgICAgIG51bVNjcm9sbDogMSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF07XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxDYXJvdXNlbENvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y2Fyc0Nhcm91c2VsfVxuICAgICAgICAgICAgICAgICAgICBudW1WaXNpYmxlPXs0fVxuICAgICAgICAgICAgICAgICAgICBudW1TY3JvbGw9ezF9XG4gICAgICAgICAgICAgICAgICAgIC8vIGNsYXNzTmFtZT1cImN1c3RvbS1jYXJvdXNlbFwiXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmVPcHRpb25zPXtyZXNwb25zaXZlT3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXsnY3VzdG9tSGVhZGVyJ31cbiAgICAgICAgICAgICAgICAgICAgLy8gcGFnZT17dGhpcy5zdGF0ZS5wYWdlfVxuICAgICAgICAgICAgICAgICAgICAvLyBzZXRQcm9wcz17dGhpcy5zZXRQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgY2lyY3VsYXI9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5SW50ZXJ2YWw9ezIwMDB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7LyogPFJhdGluZ0NvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgc2V0UHJvcHM9e3RoaXMuc2V0UHJvcHN9XG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgc3RhcnM9ezN9XG4gICAgICAgICAgICAgICAgLz4gKi99XG4gICAgICAgICAgICAgICAgey8qIDxMaXN0Qm94Q29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgIGlkPXsnaWRrJ31cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17Y2Fyc31cbiAgICAgICAgICAgICAgICAgICAgc2V0UHJvcHM9e3RoaXMuc2V0UHJvcHN9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6ICcxNWVtJ319XG4gICAgICAgICAgICAgICAgICAgIGxpc3RTdHlsZT17e21heEhlaWdodDogJzEwMHB4J319XG4gICAgICAgICAgICAgICAgICAgIGxpc3RDb250YWluZXJTdHlsZT17e21heEhlaWdodDogJzMwMHB4J319XG4gICAgICAgICAgICAgICAgICAgIG11bHRpcGxlPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXA9eydIZXknfVxuICAgICAgICAgICAgICAgIC8+ICovfVxuICAgICAgICAgICAgICAgIDxPcmdhbml6YXRpb25DaGFydENvbXBvbmVudFxuXG4gICAgICAgICAgICAgICAgICAgIHNldFByb3BzPXt0aGlzLnNldFByb3BzfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhMX1cbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uTW9kZT0nbXVsdGlwbGUnXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbj17dGhpcy5zdGF0ZS5zZWxlY3Rpb259XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7LyogPEV4dHJhRGFzaFVpQ29tcG9uZW50c1xuICAgICAgICAgICAgICAgICAgICBzZXRQcm9wcz17dGhpcy5zZXRQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAgICAgICAgICAgLz4gKi99XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZpcnN0XCI+VW5jb250cm9sbGVkPC9oMz5cbiAgICAgICAgICAgICAgICA8VHJlZURhc2hVaUNvbXBvbmVudHMgdmFsdWU9e2RhdGF9IHsuLi50aGlzLnN0YXRlfSAvPlxuICAgICAgICAgICAgICAgIDxoMz5Db250cm9sbGVkPC9oMz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMudG9nZ2xlTW92aWVzfT5Ub2dnbGUgTW92aWVzPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPFRyZWVEYXNoVWlDb21wb25lbnRzXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhfVxuICAgICAgICAgICAgICAgICAgICBleHBhbmRlZEtleXM9e3RoaXMuc3RhdGUuZXhwYW5kZWRLZXlzfVxuICAgICAgICAgICAgICAgICAgICBvblRvZ2dsZT17ZSA9PiB0aGlzLnNldFN0YXRlKHtleHBhbmRlZEtleXM6IGUudmFsdWV9KX1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Ub3A6ICcuNWVtJ319XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8aDM+RGVmYXVsdDwvaDM+XG4gICAgICAgICAgICAgICAgPFBhZ2luYXRvckRhc2hVaUNvbXBvbmVudHNcbiAgICAgICAgICAgICAgICAgICAgZmlyc3Q9e3RoaXMuc3RhdGUuZmlyc3R9XG4gICAgICAgICAgICAgICAgICAgIHJvd3M9e3RoaXMuc3RhdGUucm93c31cbiAgICAgICAgICAgICAgICAgICAgdG90YWxSZWNvcmRzPXsxMjB9XG4gICAgICAgICAgICAgICAgICAgIHJvd3NQZXJQYWdlT3B0aW9ucz17WzEwLCAyMCwgMzBdfVxuICAgICAgICAgICAgICAgICAgICBvblBhZ2VDaGFuZ2U9e3RoaXMub25QYWdlQ2hhbmdlfVxuICAgICAgICAgICAgICAgID48L1BhZ2luYXRvckRhc2hVaUNvbXBvbmVudHM+XG4gICAgICAgICAgICAgICAgey8qIDxQYWdpbmF0b3JEYXNoVWlDb21wb25lbnRzLz4gKi99XG4gICAgICAgICAgICAgICAgPGgzPkN1c3RvbSBUZW1wbGF0ZTwvaDM+XG4gICAgICAgICAgICAgICAgPFBhZ2luYXRvckRhc2hVaUNvbXBvbmVudHNcbiAgICAgICAgICAgICAgICAgICAgZmlyc3Q9e3RoaXMuc3RhdGUuZmlyc3QyfVxuICAgICAgICAgICAgICAgICAgICByb3dzPXt0aGlzLnN0YXRlLnJvd3MyfVxuICAgICAgICAgICAgICAgICAgICB0b3RhbFJlY29yZHM9ezEyMH1cbiAgICAgICAgICAgICAgICAgICAgcm93c1BlclBhZ2VPcHRpb25zPXtbMTAsIDIwLCAzMF19XG4gICAgICAgICAgICAgICAgICAgIG9uUGFnZUNoYW5nZT17dGhpcy5vblBhZ2VDaGFuZ2UyfVxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZT1cIkZpcnN0UGFnZUxpbmsgUHJldlBhZ2VMaW5rIEN1cnJlbnRQYWdlUmVwb3J0IE5leHRQYWdlTGluayBMYXN0UGFnZUxpbmtcIlxuICAgICAgICAgICAgICAgID48L1BhZ2luYXRvckRhc2hVaUNvbXBvbmVudHM+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LXNlY3Rpb24gaW1wbGVtZW50YXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgRGVtbyBpcyBhdCB0aGUgYm90dG9tIG9mIHRoaXMgcGFnZS5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1zZWN0aW9uIGltcGxlbWVudGF0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxEYXRhU2Nyb2xsZXJEYXNoVWlDb21wb25lbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jYXJEYXRhLmRhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtVGVtcGxhdGU9e3RoaXMuY2FyVGVtcGxhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICByb3dzPXsxMH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlubGluZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbEhlaWdodD1cIjUwMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj1cIlNjcm9sbCBEb3duIHRvIExvYWQgTW9yZVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxEYXRhU2Nyb2xsZXJEYXNoVWlDb21wb25lbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jYXJEYXRhLmRhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtVGVtcGxhdGU9e3RoaXMuY2FyVGVtcGxhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICByb3dzPXs1fVxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGVyPXt0aGlzLmxvYWRCdXR0b259XG4gICAgICAgICAgICAgICAgICAgICAgICBmb290ZXI9e2Zvb3Rlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj1cIkNsaWNrIExvYWQgQnV0dG9uIGF0IEZvb3RlciB0byBMb2FkIE1vcmVcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9