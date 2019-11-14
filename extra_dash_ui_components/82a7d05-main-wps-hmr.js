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
// import { CaptchaDashUiComponents } from '../lib';



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
      expandedKeys: {}
    }; // this.nodeService = new NodeService();

    _this.toggleMovies = _this.toggleMovies.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(App, [{
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
    key: "toggleMovies",
    value: function toggleMovies() {
      var expandedKeys = _objectSpread({}, this.state.expandedKeys);

      if (expandedKeys['2']) delete expandedKeys['2'];else expandedKeys['2'] = true;
      this.setState({
        expandedKeys: expandedKeys
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Hello, Dash!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "first"
      }, "Uncontrolled"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["TreeDashUiComponents"], _extends({
        value: data
      }, this.state)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Controlled"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.toggleMovies
      }, "Toggle Movies"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["TreeDashUiComponents"], {
        value: data,
        expandedKeys: this.state.expandedKeys,
        onToggle: function onToggle(e) {
          return _this2.setState({
            expandedKeys: e.value
          });
        },
        style: {
          marginTop: '.5em'
        }
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvZGVtby9BcHAuanMiXSwibmFtZXMiOlsiQXBwIiwicmVjYXB0Y2hhQ2FsbGJhY2siLCJiaW5kIiwic3RhdGUiLCJub2RlcyIsImV4cGFuZGVkS2V5cyIsInRvZ2dsZU1vdmllcyIsIm5ld1Byb3BzIiwic2V0U3RhdGUiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZSIsInZhbHVlIiwibWFyZ2luVG9wIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTtBQUNBOztBQUNBOztJQUVNQSxHOzs7OztBQUVGLGlCQUFjO0FBQUE7O0FBQUE7O0FBQ1Y7QUFDQSxVQUFLQyxpQkFBTCxHQUF5QixNQUFLQSxpQkFBTCxDQUF1QkMsSUFBdkIsK0JBQXpCO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLFdBQUssRUFBRSxJQURFO0FBRVRDLGtCQUFZLEVBQUU7QUFGTCxLQUFiLENBSFUsQ0FRVjs7QUFDQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JKLElBQWxCLCtCQUFwQjtBQVRVO0FBVWI7Ozs7NkJBRVFLLFEsRUFBVTtBQUNmLFdBQUtDLFFBQUwsQ0FBY0QsUUFBZDtBQUNIOzs7c0NBRWlCRSxRLEVBQVU7QUFDeEJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVo7QUFDSDs7OytDQUUwQjtBQUN2QkQsYUFBTyxDQUFDQyxHQUFSLENBQVksU0FBWjtBQUNIOzs7bUNBRWM7QUFDWCxVQUFJTixZQUFZLHFCQUFPLEtBQUtGLEtBQUwsQ0FBV0UsWUFBbEIsQ0FBaEI7O0FBQ0EsVUFBSUEsWUFBWSxDQUFDLEdBQUQsQ0FBaEIsRUFDSSxPQUFPQSxZQUFZLENBQUMsR0FBRCxDQUFuQixDQURKLEtBR0lBLFlBQVksQ0FBQyxHQUFELENBQVosR0FBb0IsSUFBcEI7QUFFSixXQUFL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QVEsRUFBRSxrQkFBQVEsQ0FBQztBQUFBLGlCQUFJLE1BQUksQ0FBQ0wsUUFBTCxDQUFjO0FBQUNILHdCQUFZLEVBQUVRLENBQUMsQ0FBQ0M7QUFBakIsV0FBZCxDQUFKO0FBQUEsU0FEZjtBQUMyRCxhQUFLLEVBQUU7QUFBQ0MsbUJBQVMsRUFBRTtBQUFaO0FBRGxFLFFBVEosQ0FESjtBQWNIOzs7O0VBdkdhQywrQzs7QUEwR0hoQixrRUFBZixFIiwiZmlsZSI6IjgyYTdkMDUtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IG5vLW1hZ2ljLW51bWJlcnM6IDAgKi9cclxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcblxyXG4vLyBpbXBvcnQgeyBFeHRyYURhc2hVaUNvbXBvbmVudHMgfSBmcm9tICcuLi9saWInO1xyXG4vLyBpbXBvcnQgeyBDYXB0Y2hhRGFzaFVpQ29tcG9uZW50cyB9IGZyb20gJy4uL2xpYic7XHJcbmltcG9ydCB7IFRyZWVEYXNoVWlDb21wb25lbnRzIH0gZnJvbSAnLi4vbGliJztcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnJlY2FwdGNoYUNhbGxiYWNrID0gdGhpcy5yZWNhcHRjaGFDYWxsYmFjay5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgXHJcbiAgICAgICAgICAgIG5vZGVzOiBudWxsLFxyXG4gICAgICAgICAgICBleHBhbmRlZEtleXM6IHt9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5ub2RlU2VydmljZSA9IG5ldyBOb2RlU2VydmljZSgpO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlTW92aWVzID0gdGhpcy50b2dnbGVNb3ZpZXMuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQcm9wcyhuZXdQcm9wcykge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUobmV3UHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlY2FwdGNoYUNhbGxiYWNrKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJSZXNwb25zZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICByZWNhcHRjaGFFeHBpcmVkQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFeHBpcmVkXCIpXHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlTW92aWVzKCkge1xyXG4gICAgICAgIGxldCBleHBhbmRlZEtleXMgPSB7Li4udGhpcy5zdGF0ZS5leHBhbmRlZEtleXN9O1xyXG4gICAgICAgIGlmIChleHBhbmRlZEtleXNbJzInXSlcclxuICAgICAgICAgICAgZGVsZXRlIGV4cGFuZGVkS2V5c1snMiddO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgZXhwYW5kZWRLZXlzWycyJ10gPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtleHBhbmRlZEtleXM6IGV4cGFuZGVkS2V5c30pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcImtleVwiOiBcIjBcIixcclxuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJEb2N1bWVudHNcIixcclxuICAgICAgICAgICAgICAgIFwiZGF0YVwiOiBcIkRvY3VtZW50cyBGb2xkZXJcIixcclxuICAgICAgICAgICAgICAgIFwiaWNvblwiOiBcInBpIHBpLWZ3IHBpLWluYm94XCIsXHJcbiAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJrZXlcIjogXCIwLTBcIixcclxuICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiV29ya1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0YVwiOiBcIldvcmsgRm9sZGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpY29uXCI6IFwicGkgcGktZncgcGktY29nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbeyBcImtleVwiOiBcIjAtMC0wXCIsIFwibGFiZWxcIjogXCJFeHBlbnNlcy5kb2NcIiwgXCJpY29uXCI6IFwicGkgcGktZncgcGktZmlsZVwiLCBcImRhdGFcIjogXCJFeHBlbnNlcyBEb2N1bWVudFwiIH0sIHsgXCJrZXlcIjogXCIwLTAtMVwiLCBcImxhYmVsXCI6IFwiUmVzdW1lLmRvY1wiLCBcImljb25cIjogXCJwaSBwaS1mdyBwaS1maWxlXCIsIFwiZGF0YVwiOiBcIlJlc3VtZSBEb2N1bWVudFwiIH1dXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwia2V5XCI6IFwiMC0xXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkhvbWVcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRhdGFcIjogXCJIb21lIEZvbGRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaWNvblwiOiBcInBpIHBpLWZ3IHBpLWhvbWVcIixcclxuICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFt7IFwia2V5XCI6IFwiMC0xLTBcIiwgXCJsYWJlbFwiOiBcIkludm9pY2VzLnR4dFwiLCBcImljb25cIjogXCJwaSBwaS1mdyBwaS1maWxlXCIsIFwiZGF0YVwiOiBcIkludm9pY2VzIGZvciB0aGlzIG1vbnRoXCIgfV1cclxuICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwia2V5XCI6IFwiMVwiLFxyXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkV2ZW50c1wiLFxyXG4gICAgICAgICAgICAgICAgXCJkYXRhXCI6IFwiRXZlbnRzIEZvbGRlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJpY29uXCI6IFwicGkgcGktZncgcGktY2FsZW5kYXJcIixcclxuICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgXCJrZXlcIjogXCIxLTBcIiwgXCJsYWJlbFwiOiBcIk1lZXRpbmdcIiwgXCJpY29uXCI6IFwicGkgcGktZncgcGktY2FsZW5kYXItcGx1c1wiLCBcImRhdGFcIjogXCJNZWV0aW5nXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IFwia2V5XCI6IFwiMS0xXCIsIFwibGFiZWxcIjogXCJQcm9kdWN0IExhdW5jaFwiLCBcImljb25cIjogXCJwaSBwaS1mdyBwaS1jYWxlbmRhci1wbHVzXCIsIFwiZGF0YVwiOiBcIlByb2R1Y3QgTGF1bmNoXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IFwia2V5XCI6IFwiMS0yXCIsIFwibGFiZWxcIjogXCJSZXBvcnQgUmV2aWV3XCIsIFwiaWNvblwiOiBcInBpIHBpLWZ3IHBpLWNhbGVuZGFyLXBsdXNcIiwgXCJkYXRhXCI6IFwiUmVwb3J0IFJldmlld1wiIH1dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwia2V5XCI6IFwiMlwiLFxyXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIjxkaXY+YWRzYWY8L2Rpdj5Nb3ZpZXNcIixcclxuICAgICAgICAgICAgICAgIFwiZGF0YVwiOiBcIk1vdmllcyBGb2xkZXJcIixcclxuICAgICAgICAgICAgICAgIFwiaWNvblwiOiBcInBpIHBpLWZ3IHBpLXN0YXJcIixcclxuICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW3tcclxuICAgICAgICAgICAgICAgICAgICBcImtleVwiOiBcIjItMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaWNvblwiOiBcInBpIHBpLWZ3IHBpLXN0YXJcIixcclxuICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiQWwgUGFjaW5vXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRhXCI6IFwiUGFjaW5vIE1vdmllc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW3sgXCJrZXlcIjogXCIyLTAtMFwiLCBcImxhYmVsXCI6IFwiU2NhcmZhY2VcIiwgXCJpY29uXCI6IFwicGkgcGktZncgcGktdmlkZW9cIiwgXCJkYXRhXCI6IFwiU2NhcmZhY2UgTW92aWVcIiB9LCB7IFwia2V5XCI6IFwiMi0wLTFcIiwgXCJsYWJlbFwiOiBcIlNlcnBpY29cIiwgXCJpY29uXCI6IFwicGkgcGktZncgcGktdmlkZW9cIiwgXCJkYXRhXCI6IFwiU2VycGljbyBNb3ZpZVwiIH1dXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwia2V5XCI6IFwiMi0xXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlJvYmVydCBEZSBOaXJvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpY29uXCI6IFwicGkgcGktZncgcGktc3RhclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0YVwiOiBcIkRlIE5pcm8gTW92aWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbeyBcImtleVwiOiBcIjItMS0wXCIsIFwibGFiZWxcIjogXCJHb29kZmVsbGFzXCIsIFwiaWNvblwiOiBcInBpIHBpLWZ3IHBpLXZpZGVvXCIsIFwiZGF0YVwiOiBcIkdvb2RmZWxsYXMgTW92aWVcIiB9LCB7IFwia2V5XCI6IFwiMi0xLTFcIiwgXCJsYWJlbFwiOiBcIlVudG91Y2hhYmxlc1wiLCBcImljb25cIjogXCJwaSBwaS1mdyBwaS12aWRlb1wiLCBcImRhdGFcIjogXCJVbnRvdWNoYWJsZXMgTW92aWVcIiB9XVxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxPkhlbGxvLCBEYXNoITwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZmlyc3RcIj5VbmNvbnRyb2xsZWQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgPFRyZWVEYXNoVWlDb21wb25lbnRzXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMuc3RhdGV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGgzPkNvbnRyb2xsZWQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnRvZ2dsZU1vdmllc30+VG9nZ2xlIE1vdmllczwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFRyZWVEYXNoVWlDb21wb25lbnRzIHZhbHVlPXtkYXRhfSBleHBhbmRlZEtleXM9e3RoaXMuc3RhdGUuZXhwYW5kZWRLZXlzfSBcclxuICAgICAgICAgICAgICAgICAgICBvblRvZ2dsZT17ZSA9PiB0aGlzLnNldFN0YXRlKHtleHBhbmRlZEtleXM6IGUudmFsdWV9KX0gc3R5bGU9e3ttYXJnaW5Ub3A6ICcuNWVtJ319IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9