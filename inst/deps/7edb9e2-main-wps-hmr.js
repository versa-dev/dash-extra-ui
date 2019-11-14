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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvZGVtby9BcHAuanMiXSwibmFtZXMiOlsiQXBwIiwicmVjYXB0Y2hhQ2FsbGJhY2siLCJiaW5kIiwic3RhdGUiLCJub2RlcyIsImV4cGFuZGVkS2V5cyIsInRvZ2dsZU1vdmllcyIsIm5ld1Byb3BzIiwic2V0U3RhdGUiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiaXRlbXMiLCJsYWJlbCIsInVybCIsImhvbWUiLCJpY29uIiwiZSIsInZhbHVlIiwibWFyZ2luVG9wIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTtBQUNBOztBQUNBO0FBQ0E7O0lBRU1BLEc7Ozs7O0FBRUYsaUJBQWM7QUFBQTs7QUFBQTs7QUFDVjtBQUNBLFVBQUtDLGlCQUFMLEdBQXlCLE1BQUtBLGlCQUFMLENBQXVCQyxJQUF2QiwrQkFBekI7QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsV0FBSyxFQUFFLElBREU7QUFFVEMsa0JBQVksRUFBRTtBQUZMLEtBQWIsQ0FIVSxDQVFWOztBQUNBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkosSUFBbEIsK0JBQXBCO0FBVFU7QUFVYjs7Ozs2QkFFUUssUSxFQUFVO0FBQ2YsV0FBS0MsUUFBTCxDQUFjRCxRQUFkO0FBQ0g7OztzQ0FFaUJFLFEsRUFBVTtBQUN4QkMsYUFBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtBQUNIOzs7K0NBRTBCO0FBQ3ZCRCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaO0FBQ0g7OzttQ0FFYztBQUNYLFVBQUlOLFlBQVkscUJBQU8sS0FBS0YsS0FBTCxDQUFXRSxZQUFsQixDQUFoQjs7QUFDQSxVQUFJQSxZQUFZLENBQUMsR0FBRCxDQUFoQixFQUNJLE9BQU9BLFlBQVksQ0FBQyxHQUFELENBQW5CLENBREosS0FHSUEs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O0FBQUNBLGFBQUssRUFBQztBQUFQLE9BUFUsRUFRVjtBQUFDQSxhQUFLLEVBQUMsY0FBUDtBQUF1QkMsV0FBRyxFQUFFO0FBQTVCLE9BUlUsQ0FBZDtBQVdBLFVBQU1DLElBQUksR0FBRztBQUFDQyxZQUFJLEVBQUUsZ0JBQVA7QUFBeUJGLFdBQUcsRUFBRSx1REFBOUI7QUFBdUZELGFBQUssRUFBRTtBQUE5RixPQUFiO0FBRUEsYUFDSSx3RUFDSSwyREFBQyxnRUFBRDtBQUE2QixhQUFLLEVBQUVELEtBQXBDO0FBQTJDLFlBQUksRUFBRUc7QUFBakQsUUFESixFQUVJLHNGQUZKLEVBR0k7QUFBSSxpQkFBUyxFQUFDO0FBQWQsd0JBSEosRUFJSSwyREFBQyx5REFBRDtBQUNJLGFBQUssRUFBRUo7QUFEWCxTQUVRLEtBQUtULEtBRmIsRUFKSixFQVFJLG9GQVJKLEVBU0k7QUFBUSxlQUFPLEVBQUUsS0FBS0c7QUFBdEIseUJBVEosRUFVSSwyREFBQyx5REFBRDtBQUFzQixhQUFLLEVBQUVNLElBQTdCO0FBQW1DLG9CQUFZLEVBQUUsS0FBS1QsS0FBTCxDQUFXRSxZQUE1RDtBQUNJLGdCQUFRLEVBQUUsa0JBQUFhLENBQUM7QUFBQSxpQkFBSSxNQUFJLENBQUNWLFFBQUwsQ0FBYztBQUFDSCx3QkFBWSxFQUFFYSxDQUFDLENBQUNDO0FBQWpCLFdBQWQsQ0FBSjtBQUFBLFNBRGY7QUFDMkQsYUFBSyxFQUFFO0FBQUNDLG1CQUFTLEVBQUU7QUFBWjtBQURsRSxRQVZKLENBREo7QUFlSDs7OztFQXpIYUMsK0M7O0FBNEhIckIsa0VBQWYsRSIsImZpbGUiOiI3ZWRiOWUyLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludCBuby1tYWdpYy1udW1iZXJzOiAwICovXHJcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gaW1wb3J0IHsgRXh0cmFEYXNoVWlDb21wb25lbnRzIH0gZnJvbSAnLi4vbGliJztcclxuLy8gaW1wb3J0IHsgQ2FwdGNoYURhc2hVaUNvbXBvbmVudHMgfSBmcm9tICcuLi9saWInO1xyXG5pbXBvcnQgeyBUcmVlRGFzaFVpQ29tcG9uZW50cyB9IGZyb20gJy4uL2xpYic7XHJcbmltcG9ydCB7IEJyZWFkY3J1bWJzRGFzaFVpQ29tcG9uZW50cyB9IGZyb20gJy4uL2xpYic7XHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5yZWNhcHRjaGFDYWxsYmFjayA9IHRoaXMucmVjYXB0Y2hhQ2FsbGJhY2suYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IFxyXG4gICAgICAgICAgICBub2RlczogbnVsbCxcclxuICAgICAgICAgICAgZXhwYW5kZWRLZXlzOiB7fVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIHRoaXMubm9kZVNlcnZpY2UgPSBuZXcgTm9kZVNlcnZpY2UoKTtcclxuICAgICAgICB0aGlzLnRvZ2dsZU1vdmllcyA9IHRoaXMudG9nZ2xlTW92aWVzLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UHJvcHMobmV3UHJvcHMpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKG5ld1Byb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICByZWNhcHRjaGFDYWxsYmFjayhyZXNwb25zZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVzcG9uc2VcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVjYXB0Y2hhRXhwaXJlZENhbGxiYWNrKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXhwaXJlZFwiKVxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZU1vdmllcygpIHtcclxuICAgICAgICBsZXQgZXhwYW5kZWRLZXlzID0gey4uLnRoaXMuc3RhdGUuZXhwYW5kZWRLZXlzfTtcclxuICAgICAgICBpZiAoZXhwYW5kZWRLZXlzWycyJ10pXHJcbiAgICAgICAgICAgIGRlbGV0ZSBleHBhbmRlZEtleXNbJzInXTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIGV4cGFuZGVkS2V5c1snMiddID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXhwYW5kZWRLZXlzOiBleHBhbmRlZEtleXN9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJrZXlcIjogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiRG9jdW1lbnRzXCIsXHJcbiAgICAgICAgICAgICAgICBcImRhdGFcIjogXCJEb2N1bWVudHMgRm9sZGVyXCIsXHJcbiAgICAgICAgICAgICAgICBcImljb25cIjogXCJwaSBwaS1mdyBwaS1pbmJveFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIFwia2V5XCI6IFwiMC0wXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIldvcmtcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRhdGFcIjogXCJXb3JrIEZvbGRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaWNvblwiOiBcInBpIHBpLWZ3IHBpLWNvZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IFwia2V5XCI6IFwiMC0wLTBcIiwgXCJsYWJlbFwiOiBcIkV4cGVuc2VzLmRvY1wiLCBcImljb25cIjogXCJwaSBwaS1mdyBwaS1maWxlXCIsIFwiZGF0YVwiOiBcIkV4cGVuc2VzIERvY3VtZW50XCIgfSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgXCJrZXlcIjogXCIwLTAtMVwiLCBcImxhYmVsXCI6IFwiUmVzdW1lLmRvY1wiLCBcImljb25cIjogXCJwaSBwaS1mdyBwaS1maWxlXCIsIFwiZGF0YVwiOiBcIlJlc3VtZSBEb2N1bWVudFwiIH1cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwia2V5XCI6IFwiMC0xXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkhvbWVcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRhdGFcIjogXCJIb21lIEZvbGRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaWNvblwiOiBcInBpIHBpLWZ3IHBpLWhvbWVcIixcclxuICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFt7IFwia2V5XCI6IFwiMC0xLTBcIiwgXCJsYWJlbFwiOiBcIkludm9pY2VzLnR4dFwiLCBcImljb25cIjogXCJwaSBwaS1mdyBwaS1maWxlXCIsIFwiZGF0YVwiOiBcIkludm9pY2VzIGZvciB0aGlzIG1vbnRoXCIgfV1cclxuICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwia2V5XCI6IFwiMVwiLFxyXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkV2ZW50c1wiLFxyXG4gICAgICAgICAgICAgICAgXCJkYXRhXCI6IFwiRXZlbnRzIEZvbGRlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJpY29uXCI6IFwicGkgcGktZncgcGktY2FsZW5kYXJcIixcclxuICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgXCJrZXlcIjogXCIxLTBcIiwgXCJsYWJlbFwiOiBcIk1lZXRpbmdcIiwgXCJpY29uXCI6IFwicGkgcGktZncgcGktY2FsZW5kYXItcGx1c1wiLCBcImRhdGFcIjogXCJNZWV0aW5nXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IFwia2V5XCI6IFwiMS0xXCIsIFwibGFiZWxcIjogXCJQcm9kdWN0IExhdW5jaFwiLCBcImljb25cIjogXCJwaSBwaS1mdyBwaS1jYWxlbmRhci1wbHVzXCIsIFwiZGF0YVwiOiBcIlByb2R1Y3QgTGF1bmNoXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IFwia2V5XCI6IFwiMS0yXCIsIFwibGFiZWxcIjogXCJSZXBvcnQgUmV2aWV3XCIsIFwiaWNvblwiOiBcInBpIHBpLWZ3IHBpLWNhbGVuZGFyLXBsdXNcIiwgXCJkYXRhXCI6IFwiUmVwb3J0IFJldmlld1wiIH1dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwia2V5XCI6IFwiMlwiLFxyXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIjxkaXY+YWRzYWY8L2Rpdj5Nb3ZpZXNcIixcclxuICAgICAgICAgICAgICAgIFwiZGF0YVwiOiBcIk1vdmllcyBGb2xkZXJcIixcclxuICAgICAgICAgICAgICAgIFwiaWNvblwiOiBcInBpIHBpLWZ3IHBpLXN0YXJcIixcclxuICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW3tcclxuICAgICAgICAgICAgICAgICAgICBcImtleVwiOiBcIjItMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaWNvblwiOiBcInBpIHBpLWZ3IHBpLXN0YXJcIixcclxuICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiQWwgUGFjaW5vXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRhXCI6IFwiUGFjaW5vIE1vdmllc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW3sgXCJrZXlcIjogXCIyLTAtMFwiLCBcImxhYmVsXCI6IFwiU2NhcmZhY2VcIiwgXCJpY29uXCI6IFwicGkgcGktZncgcGktdmlkZW9cIiwgXCJkYXRhXCI6IFwiU2NhcmZhY2UgTW92aWVcIiB9LCB7IFwia2V5XCI6IFwiMi0wLTFcIiwgXCJsYWJlbFwiOiBcIlNlcnBpY29cIiwgXCJpY29uXCI6IFwicGkgcGktZncgcGktdmlkZW9cIiwgXCJkYXRhXCI6IFwiU2VycGljbyBNb3ZpZVwiIH1dXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwia2V5XCI6IFwiMi0xXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlJvYmVydCBEZSBOaXJvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpY29uXCI6IFwicGkgcGktZncgcGktc3RhclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0YVwiOiBcIkRlIE5pcm8gTW92aWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbeyBcImtleVwiOiBcIjItMS0wXCIsIFwibGFiZWxcIjogXCJHb29kZmVsbGFzXCIsIFwiaWNvblwiOiBcInBpIHBpLWZ3IHBpLXZpZGVvXCIsIFwiZGF0YVwiOiBcIkdvb2RmZWxsYXMgTW92aWVcIiB9LCB7IFwia2V5XCI6IFwiMi0xLTFcIiwgXCJsYWJlbFwiOiBcIlVudG91Y2hhYmxlc1wiLCBcImljb25cIjogXCJwaSBwaS1mdyBwaS12aWRlb1wiLCBcImRhdGFcIjogXCJVbnRvdWNoYWJsZXMgTW92aWVcIiB9XVxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuXHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSBbXHJcbiAgICAgICAgICAgIHtsYWJlbDonQ2F0ZWdvcmllcyd9LFxyXG4gICAgICAgICAgICB7bGFiZWw6J1Nwb3J0cyd9LFxyXG4gICAgICAgICAgICB7bGFiZWw6J0Zvb3RiYWxsJ30sXHJcbiAgICAgICAgICAgIHtsYWJlbDonQ291bnRyaWVzJ30sXHJcbiAgICAgICAgICAgIHtsYWJlbDonU3BhaW4nfSxcclxuICAgICAgICAgICAge2xhYmVsOidGLkMuIEJhcmNlbG9uYSd9LFxyXG4gICAgICAgICAgICB7bGFiZWw6J1NxdWFkJ30sXHJcbiAgICAgICAgICAgIHtsYWJlbDonTGlvbmVsIE1lc3NpJywgdXJsOiAnaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTGlvbmVsX01lc3NpJ31cclxuICAgICAgICBdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGhvbWUgPSB7aWNvbjogJ3R1bWIgdHVtYi1ob21lJywgdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL25mcmlrL2V4dHJhX2Rhc2hfdWlfY29tcG9uZW50cy5naXQnLCBsYWJlbDogJ0hvbWUnfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEJyZWFkY3J1bWJzRGFzaFVpQ29tcG9uZW50cyBtb2RlbD17aXRlbXN9IGhvbWU9e2hvbWV9Lz5cclxuICAgICAgICAgICAgICAgIDxoMT5IZWxsbywgRGFzaCE8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZpcnN0XCI+VW5jb250cm9sbGVkPC9oMz5cclxuICAgICAgICAgICAgICAgIDxUcmVlRGFzaFVpQ29tcG9uZW50c1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnN0YXRlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxoMz5Db250cm9sbGVkPC9oMz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy50b2dnbGVNb3ZpZXN9PlRvZ2dsZSBNb3ZpZXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxUcmVlRGFzaFVpQ29tcG9uZW50cyB2YWx1ZT17ZGF0YX0gZXhwYW5kZWRLZXlzPXt0aGlzLnN0YXRlLmV4cGFuZGVkS2V5c30gXHJcbiAgICAgICAgICAgICAgICAgICAgb25Ub2dnbGU9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7ZXhwYW5kZWRLZXlzOiBlLnZhbHVlfSl9IHN0eWxlPXt7bWFyZ2luVG9wOiAnLjVlbSd9fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==