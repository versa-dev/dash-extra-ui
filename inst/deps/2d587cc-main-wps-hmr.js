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
 // import { ExtraDashUiComponents } from '../lib';







var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this));
    _this.recaptchaCallback = _this.recaptchaCallback.bind(_assertThisInitialized(_this));
    _this.state = {
      nodes: null,
      expandedKeys: {},
      first: 0,
      rows: 10,
      first2: 0,
      rows2: 10,
      carData: []
    }; // this.nodeService = new NodeService();

    _this.toggleMovies = _this.toggleMovies.bind(_assertThisInitialized(_this));
    _this.onPageChange = _this.onPageChange.bind(_assertThisInitialized(_this));
    _this.onPageChange2 = _this.onPageChange2.bind(_assertThisInitialized(_this));
    _this.carTemplate = _this.carTemplate.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadJSON("../../car-large.json");
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
            console.log("Error");
          }
        }
      };

      xhr.open("GET", path, true);
      xhr.send();
    }
  }, {
    key: "setProps",
    value: function setProps(newProps) {
      this.setState(newProps);
    }
  }, {
    key: "recaptchaCallback",
    value: function recaptchaCallback(response) {
      console.log("Response");
    }
  }, {
    key: "recaptchaExpiredCallback",
    value: function recaptchaExpiredCallback() {
      console.log("Expired");
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


      var src = "./" + car.brand + ".png";
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
        "key": "0",
        "label": "Documents",
        "data": "Documents Folder",
        "icon": "pi pi-fw pi-inbox",
        "children": [{
          "key": "0-0",
          "label": "Work",
          "data": "Work Folder",
          "icon": "pi pi-fw pi-cog",
          "children": [{
            "key": "0-0-0",
            "label": "Expenses.doc",
            "icon": "pi pi-fw pi-file",
            "data": "Expenses Document"
          }, {
            "key": "0-0-1",
            "label": "Resume.doc",
            "icon": "pi pi-fw pi-file",
            "data": "Resume Document"
          }]
        }, {
          "key": "0-1",
          "label": "Home",
          "data": "Home Folder",
          "icon": "pi pi-fw pi-home",
          "children": [{
            "key": "0-1-0",
            "label": "Invoices.txt",
            "icon": "pi pi-fw pi-file",
            "data": "Invoices for this month"
          }]
        }]
      }, {
        "key": "1",
        "label": "Events",
        "data": "Events Folder",
        "icon": "pi pi-fw pi-calendar",
        "children": [{
          "key": "1-0",
          "label": "Meeting",
          "icon": "pi pi-fw pi-calendar-plus",
          "data": "Meeting"
        }, {
          "key": "1-1",
          "label": "Product Launch",
          "icon": "pi pi-fw pi-calendar-plus",
          "data": "Product Launch"
        }, {
          "key": "1-2",
          "label": "Report Review",
          "icon": "pi pi-fw pi-calendar-plus",
          "data": "Report Review"
        }]
      }, {
        "key": "2",
        "label": "<div>adsaf</div>Movies",
        "data": "Movies Folder",
        "icon": "pi pi-fw pi-star",
        "children": [{
          "key": "2-0",
          "icon": "pi pi-fw pi-star",
          "label": "Al Pacino",
          "data": "Pacino Movies",
          "children": [{
            "key": "2-0-0",
            "label": "Scarface",
            "icon": "pi pi-fw pi-video",
            "data": "Scarface Movie"
          }, {
            "key": "2-0-1",
            "label": "Serpico",
            "icon": "pi pi-fw pi-video",
            "data": "Serpico Movie"
          }]
        }, {
          "key": "2-1",
          "label": "Robert De Niro",
          "icon": "pi pi-fw pi-star",
          "data": "De Niro Movies",
          "children": [{
            "key": "2-1-0",
            "label": "Goodfellas",
            "icon": "pi pi-fw pi-video",
            "data": "Goodfellas Movie"
          }, {
            "key": "2-1-1",
            "label": "Untouchables",
            "icon": "pi pi-fw pi-video",
            "data": "Untouchables Movie"
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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbsDashUiComponents"], {
        model: items,
        home: home
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Hello, Dash!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
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
      })));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvZGVtby9BcHAuanMiXSwibmFtZXMiOlsiQXBwIiwicmVjYXB0Y2hhQ2FsbGJhY2siLCJiaW5kIiwic3RhdGUiLCJub2RlcyIsImV4cGFuZGVkS2V5cyIsImZpcnN0Iiwicm93cyIsImZpcnN0MiIsInJvd3MyIiwiY2FyRGF0YSIsInRvZ2dsZU1vdmllcyIsIm9uUGFnZUNoYW5nZSIsIm9uUGFnZUNoYW5nZTIiLCJjYXJUZW1wbGF0ZSIsImxvYWRKU09OIiwicGF0aCIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsIkRPTkUiLCJzdGF0dXMiLCJzZXRTdGF0ZSIsIkpTT04iLCJwYXJzZSIsInJlc3BvbnNlVGV4dCIsImNvbnNvbGUiLCJsb2ciLCJvcGVuIiwic2VuZCIsIm5ld1Byb3BzIiwicmVzcG9uc2UiLCJldmVudCIsImNhciIsInNyYyIsImJyYW5kIiwidmluIiwieWVhciIsImNvbG9yIiwiZGF0YSIsIml0ZW1zIiwibGFiZWwiLCJ1cmwiLCJob21lIiwiaWNvbiIsImUiLCJ2YWx1ZSIsIm1hcmdpblRvcCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsRzs7Ozs7QUFFRixpQkFBYztBQUFBOztBQUFBOztBQUNWO0FBQ0EsVUFBS0MsaUJBQUwsR0FBeUIsTUFBS0EsaUJBQUwsQ0FBdUJDLElBQXZCLCtCQUF6QjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxXQUFLLEVBQUUsSUFERTtBQUVUQyxrQkFBWSxFQUFFLEVBRkw7QUFHVEMsV0FBSyxFQUFFLENBSEU7QUFJVEMsVUFBSSxFQUFFLEVBSkc7QUFLVEMsWUFBTSxFQUFFLENBTEM7QUFNVEMsV0FBSyxFQUFFLEVBTkU7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SUFBckU7QUFBMkUsb0JBQVksRUFBRSxHQUF6RjtBQUE4RiwwQkFBa0IsRUFBRSxDQUFDLEVBQUQsRUFBSSxFQUFKLEVBQU8sRUFBUCxDQUFsSDtBQUE4SCxvQkFBWSxFQUFFLEtBQUtLO0FBQWpKLFFBYkosRUFlSSx5RkFmSixFQWdCSSwyREFBQyw4REFBRDtBQUEyQixhQUFLLEVBQUUsS0FBS1QsS0FBTCxDQUFXSyxNQUE3QztBQUFxRCxZQUFJLEVBQUUsS0FBS0wsS0FBTCxDQUFXTSxLQUF0RTtBQUE2RSxvQkFBWSxFQUFFLEdBQTNGO0FBQWdHLDBCQUFrQixFQUFFLENBQUMsRUFBRCxFQUFJLEVBQUosRUFBTyxFQUFQLENBQXBIO0FBQWdJLG9CQUFZLEVBQUUsS0FBS0ksYUFBbko7QUFDSSxnQkFBUSxFQUFDO0FBRGIsUUFoQkosRUFrQkk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsK0NBbEJKLEVBc0JJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0ksMkRBQUMsaUVBQUQ7QUFBOEIsYUFBSyxFQUFFLEtBQUtWLEtBQUwsQ0FBV08sT0FBWCxDQUFtQjhCLElBQXhEO0FBQThELG9CQUFZLEVBQUUsS0FBSzFCLFdBQWpGO0FBQ1EsWUFBSSxFQUFFLEVBRGQ7QUFDa0IsY0FBTSxFQUFFLElBRDFCO0FBQ2dDLG9CQUFZLEVBQUMsT0FEN0M7QUFDcUQsY0FBTSxFQUFDO0FBRDVELFFBREosQ0F0QkosQ0FESjtBQTZCSDs7OztFQXhOYW1DLCtDOztBQTJOSGpELGtFQUFmLEUiLCJmaWxlIjoiMmQ1ODdjYy1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgbm8tbWFnaWMtbnVtYmVyczogMCAqL1xyXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vIGltcG9ydCB7IEV4dHJhRGFzaFVpQ29tcG9uZW50cyB9IGZyb20gJy4uL2xpYic7XHJcbmltcG9ydCB7IENhcHRjaGFEYXNoVWlDb21wb25lbnRzIH0gZnJvbSAnLi4vbGliJztcclxuaW1wb3J0IHsgVHJlZURhc2hVaUNvbXBvbmVudHMgfSBmcm9tICcuLi9saWInO1xyXG5pbXBvcnQgeyBCcmVhZGNydW1ic0Rhc2hVaUNvbXBvbmVudHMgfSBmcm9tICcuLi9saWInO1xyXG5pbXBvcnQgeyBQYWdpbmF0b3JEYXNoVWlDb21wb25lbnRzIH0gZnJvbSAnLi4vbGliJztcclxuaW1wb3J0IHsgRGF0YVNjcm9sbGVyRGFzaFVpQ29tcG9uZW50cyB9IGZyb20gJy4uL2xpYic7XHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5yZWNhcHRjaGFDYWxsYmFjayA9IHRoaXMucmVjYXB0Y2hhQ2FsbGJhY2suYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IFxyXG4gICAgICAgICAgICBub2RlczogbnVsbCxcclxuICAgICAgICAgICAgZXhwYW5kZWRLZXlzOiB7fSxcclxuICAgICAgICAgICAgZmlyc3Q6IDAsIFxyXG4gICAgICAgICAgICByb3dzOiAxMCwgXHJcbiAgICAgICAgICAgIGZpcnN0MjogMCwgXHJcbiAgICAgICAgICAgIHJvd3MyOiAxMCxcclxuICAgICAgICAgICAgY2FyRGF0YTogW10sXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5ub2RlU2VydmljZSA9IG5ldyBOb2RlU2VydmljZSgpO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlTW92aWVzID0gdGhpcy50b2dnbGVNb3ZpZXMuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uUGFnZUNoYW5nZSA9IHRoaXMub25QYWdlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vblBhZ2VDaGFuZ2UyID0gdGhpcy5vblBhZ2VDaGFuZ2UyLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuY2FyVGVtcGxhdGUgPSB0aGlzLmNhclRlbXBsYXRlLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICB0aGlzLmxvYWRKU09OKFwiLi4vLi4vY2FyLWxhcmdlLmpzb25cIik7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZEpTT04ocGF0aCl7XHJcbiAgICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHhoci5yZWFkeVN0YXRlID09PSBYTUxIdHRwUmVxdWVzdC5ET05FKXtcclxuICAgICAgICAgICAgICAgIGlmKHhoci5zdGF0dXMgPT09IDIwMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhckRhdGE6IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvclwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgeGhyLm9wZW4oXCJHRVRcIiwgcGF0aCwgdHJ1ZSk7XHJcbiAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQcm9wcyhuZXdQcm9wcykge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUobmV3UHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlY2FwdGNoYUNhbGxiYWNrKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJSZXNwb25zZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICByZWNhcHRjaGFFeHBpcmVkQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFeHBpcmVkXCIpXHJcbiAgICB9XHJcblxyXG4gICAgb25QYWdlQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGZpcnN0OiBldmVudC5maXJzdCxcclxuICAgICAgICAgICAgcm93czogZXZlbnQucm93c1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUGFnZUNoYW5nZTIoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZmlyc3QyOiBldmVudC5maXJzdCxcclxuICAgICAgICAgICAgcm93czI6IGV2ZW50LnJvd3NcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdG9nZ2xlTW92aWVzKCkge1xyXG4gICAgICAgIGxldCBleHBhbmRlZEtleXMgPSB7Li4udGhpcy5zdGF0ZS5leHBhbmRlZEtleXN9O1xyXG4gICAgICAgIGlmIChleHBhbmRlZEtleXNbJzInXSlcclxuICAgICAgICAgICAgZGVsZXRlIGV4cGFuZGVkS2V5c1snMiddO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgZXhwYW5kZWRLZXlzWycyJ10gPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtleHBhbmRlZEtleXM6IGV4cGFuZGVkS2V5c30pO1xyXG4gICAgfVxyXG5cclxuICAgIGNhclRlbXBsYXRlKGNhcikge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNhcilcclxuICAgICAgICBpZiAoIWNhcikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBkYXRhXHJcblxyXG4gICAgICAgIGNvbnN0IHNyYyA9IFwiLi9cIiArIGNhci5icmFuZCArIFwiLnBuZ1wiO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtZ3JpZCBjYXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWNvbC0xMiBwLW1kLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17c3JjfSBhbHQ9XCJDYXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtY29sLTEyIHAtbWQtOVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1ncmlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1jb2wtMiBwLXNtLTZcIj5WaW46IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtY29sLTEwIHAtc20tNlwiPntjYXIudmlufTwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWNvbC0yIHAtc20tNlwiPlllYXI6IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtY29sLTEwIHAtc20tNlwiPntjYXIueWVhcn08L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1jb2wtMiBwLXNtLTZcIj5CcmFuZDogPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1jb2wtMTAgcC1zbS02XCI+e2Nhci5icmFuZH08L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1jb2wtMiBwLXNtLTZcIj5Db2xvcjogPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1jb2wtMTAgcC1zbS02XCI+e2Nhci5jb2xvcn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmNhckRhdGEuZGF0YSk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJrZXlcIjogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiRG9jdW1lbnRzXCIsXHJcbiAgICAgICAgICAgICAgICBcImRhdGFcIjogXCJEb2N1bWVudHMgRm9sZGVyXCIsXHJcbiAgICAgICAgICAgICAgICBcImljb25cIjogXCJwaSBwaS1mdyBwaS1pbmJveFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIFwia2V5XCI6IFwiMC0wXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIldvcmtcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRhdGFcIjogXCJXb3JrIEZvbGRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaWNvblwiOiBcInBpIHBpLWZ3IHBpLWNvZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IFwia2V5XCI6IFwiMC0wLTBcIiwgXCJsYWJlbFwiOiBcIkV4cGVuc2VzLmRvY1wiLCBcImljb25cIjogXCJwaSBwaS1mdyBwaS1maWxlXCIsIFwiZGF0YVwiOiBcIkV4cGVuc2VzIERvY3VtZW50XCIgfSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgXCJrZXlcIjogXCIwLTAtMVwiLCBcImxhYmVsXCI6IFwiUmVzdW1lLmRvY1wiLCBcImljb25cIjogXCJwaSBwaS1mdyBwaS1maWxlXCIsIFwiZGF0YVwiOiBcIlJlc3VtZSBEb2N1bWVudFwiIH1cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwia2V5XCI6IFwiMC0xXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkhvbWVcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRhdGFcIjogXCJIb21lIEZvbGRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaWNvblwiOiBcInBpIHBpLWZ3IHBpLWhvbWVcIixcclxuICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFt7IFwia2V5XCI6IFwiMC0xLTBcIiwgXCJsYWJlbFwiOiBcIkludm9pY2VzLnR4dFwiLCBcImljb25cIjogXCJwaSBwaS1mdyBwaS1maWxlXCIsIFwiZGF0YVwiOiBcIkludm9pY2VzIGZvciB0aGlzIG1vbnRoXCIgfV1cclxuICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwia2V5XCI6IFwiMVwiLFxyXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkV2ZW50c1wiLFxyXG4gICAgICAgICAgICAgICAgXCJkYXRhXCI6IFwiRXZlbnRzIEZvbGRlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJpY29uXCI6IFwicGkgcGktZncgcGktY2FsZW5kYXJcIixcclxuICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgXCJrZXlcIjogXCIxLTBcIiwgXCJsYWJlbFwiOiBcIk1lZXRpbmdcIiwgXCJpY29uXCI6IFwicGkgcGktZncgcGktY2FsZW5kYXItcGx1c1wiLCBcImRhdGFcIjogXCJNZWV0aW5nXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IFwia2V5XCI6IFwiMS0xXCIsIFwibGFiZWxcIjogXCJQcm9kdWN0IExhdW5jaFwiLCBcImljb25cIjogXCJwaSBwaS1mdyBwaS1jYWxlbmRhci1wbHVzXCIsIFwiZGF0YVwiOiBcIlByb2R1Y3QgTGF1bmNoXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IFwia2V5XCI6IFwiMS0yXCIsIFwibGFiZWxcIjogXCJSZXBvcnQgUmV2aWV3XCIsIFwiaWNvblwiOiBcInBpIHBpLWZ3IHBpLWNhbGVuZGFyLXBsdXNcIiwgXCJkYXRhXCI6IFwiUmVwb3J0IFJldmlld1wiIH1dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwia2V5XCI6IFwiMlwiLFxyXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIjxkaXY+YWRzYWY8L2Rpdj5Nb3ZpZXNcIixcclxuICAgICAgICAgICAgICAgIFwiZGF0YVwiOiBcIk1vdmllcyBGb2xkZXJcIixcclxuICAgICAgICAgICAgICAgIFwiaWNvblwiOiBcInBpIHBpLWZ3IHBpLXN0YXJcIixcclxuICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW3tcclxuICAgICAgICAgICAgICAgICAgICBcImtleVwiOiBcIjItMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaWNvblwiOiBcInBpIHBpLWZ3IHBpLXN0YXJcIixcclxuICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiQWwgUGFjaW5vXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRhXCI6IFwiUGFjaW5vIE1vdmllc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW3sgXCJrZXlcIjogXCIyLTAtMFwiLCBcImxhYmVsXCI6IFwiU2NhcmZhY2VcIiwgXCJpY29uXCI6IFwicGkgcGktZncgcGktdmlkZW9cIiwgXCJkYXRhXCI6IFwiU2NhcmZhY2UgTW92aWVcIiB9LCB7IFwia2V5XCI6IFwiMi0wLTFcIiwgXCJsYWJlbFwiOiBcIlNlcnBpY29cIiwgXCJpY29uXCI6IFwicGkgcGktZncgcGktdmlkZW9cIiwgXCJkYXRhXCI6IFwiU2VycGljbyBNb3ZpZVwiIH1dXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwia2V5XCI6IFwiMi0xXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlJvYmVydCBEZSBOaXJvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpY29uXCI6IFwicGkgcGktZncgcGktc3RhclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0YVwiOiBcIkRlIE5pcm8gTW92aWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbeyBcImtleVwiOiBcIjItMS0wXCIsIFwibGFiZWxcIjogXCJHb29kZmVsbGFzXCIsIFwiaWNvblwiOiBcInBpIHBpLWZ3IHBpLXZpZGVvXCIsIFwiZGF0YVwiOiBcIkdvb2RmZWxsYXMgTW92aWVcIiB9LCB7IFwia2V5XCI6IFwiMi0xLTFcIiwgXCJsYWJlbFwiOiBcIlVudG91Y2hhYmxlc1wiLCBcImljb25cIjogXCJwaSBwaS1mdyBwaS12aWRlb1wiLCBcImRhdGFcIjogXCJVbnRvdWNoYWJsZXMgTW92aWVcIiB9XVxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuXHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSBbXHJcbiAgICAgICAgICAgIHtsYWJlbDonQ2F0ZWdvcmllcyd9LFxyXG4gICAgICAgICAgICB7bGFiZWw6J1Nwb3J0cyd9LFxyXG4gICAgICAgICAgICB7bGFiZWw6J0Zvb3RiYWxsJ30sXHJcbiAgICAgICAgICAgIHtsYWJlbDonQ291bnRyaWVzJ30sXHJcbiAgICAgICAgICAgIHtsYWJlbDonU3BhaW4nfSxcclxuICAgICAgICAgICAge2xhYmVsOidGLkMuIEJhcmNlbG9uYSd9LFxyXG4gICAgICAgICAgICB7bGFiZWw6J1NxdWFkJ30sXHJcbiAgICAgICAgICAgIHtsYWJlbDonTGlvbmVsIE1lc3NpJywgdXJsOiAnaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTGlvbmVsX01lc3NpJ31cclxuICAgICAgICBdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGhvbWUgPSB7aWNvbjogJ3R1bWIgdHVtYi1ob21lJywgdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL25mcmlrL2V4dHJhX2Rhc2hfdWlfY29tcG9uZW50cy5naXQnLCBsYWJlbDogJ0hvbWUnfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEJyZWFkY3J1bWJzRGFzaFVpQ29tcG9uZW50cyBtb2RlbD17aXRlbXN9IGhvbWU9e2hvbWV9Lz5cclxuICAgICAgICAgICAgICAgIDxoMT5IZWxsbywgRGFzaCE8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZpcnN0XCI+VW5jb250cm9sbGVkPC9oMz5cclxuICAgICAgICAgICAgICAgIDxUcmVlRGFzaFVpQ29tcG9uZW50c1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnN0YXRlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxoMz5Db250cm9sbGVkPC9oMz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy50b2dnbGVNb3ZpZXN9PlRvZ2dsZSBNb3ZpZXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxUcmVlRGFzaFVpQ29tcG9uZW50cyB2YWx1ZT17ZGF0YX0gZXhwYW5kZWRLZXlzPXt0aGlzLnN0YXRlLmV4cGFuZGVkS2V5c30gXHJcbiAgICAgICAgICAgICAgICAgICAgb25Ub2dnbGU9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7ZXhwYW5kZWRLZXlzOiBlLnZhbHVlfSl9IHN0eWxlPXt7bWFyZ2luVG9wOiAnLjVlbSd9fSAvPlxyXG4gICAgICAgICAgICAgICAgPGgzPkRlZmF1bHQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgPFBhZ2luYXRvckRhc2hVaUNvbXBvbmVudHMgZmlyc3Q9e3RoaXMuc3RhdGUuZmlyc3R9IHJvd3M9e3RoaXMuc3RhdGUucm93c30gdG90YWxSZWNvcmRzPXsxMjB9IHJvd3NQZXJQYWdlT3B0aW9ucz17WzEwLDIwLDMwXX0gb25QYWdlQ2hhbmdlPXt0aGlzLm9uUGFnZUNoYW5nZX0+PC9QYWdpbmF0b3JEYXNoVWlDb21wb25lbnRzPlxyXG4gICAgICAgICAgICAgICAgey8qIDxQYWdpbmF0b3JEYXNoVWlDb21wb25lbnRzLz4gKi99XHJcbiAgICAgICAgICAgICAgICA8aDM+Q3VzdG9tIFRlbXBsYXRlPC9oMz5cclxuICAgICAgICAgICAgICAgIDxQYWdpbmF0b3JEYXNoVWlDb21wb25lbnRzIGZpcnN0PXt0aGlzLnN0YXRlLmZpcnN0Mn0gcm93cz17dGhpcy5zdGF0ZS5yb3dzMn0gdG90YWxSZWNvcmRzPXsxMjB9IHJvd3NQZXJQYWdlT3B0aW9ucz17WzEwLDIwLDMwXX0gb25QYWdlQ2hhbmdlPXt0aGlzLm9uUGFnZUNoYW5nZTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU9XCJGaXJzdFBhZ2VMaW5rIFByZXZQYWdlTGluayBDdXJyZW50UGFnZVJlcG9ydCBOZXh0UGFnZUxpbmsgTGFzdFBhZ2VMaW5rXCI+PC9QYWdpbmF0b3JEYXNoVWlDb21wb25lbnRzPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LXNlY3Rpb24gaW1wbGVtZW50YXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICBEZW1vIGlzIGF0IHRoZSBib3R0b20gb2YgdGhpcyBwYWdlLlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LXNlY3Rpb24gaW1wbGVtZW50YXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8RGF0YVNjcm9sbGVyRGFzaFVpQ29tcG9uZW50cyB2YWx1ZT17dGhpcy5zdGF0ZS5jYXJEYXRhLmRhdGF9IGl0ZW1UZW1wbGF0ZT17dGhpcy5jYXJUZW1wbGF0ZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXsxMH0gaW5saW5lPXt0cnVlfSBzY3JvbGxIZWlnaHQ9XCI1MDBweFwiIGhlYWRlcj1cIlNjcm9sbCBEb3duIHRvIExvYWQgTW9yZVwiLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==