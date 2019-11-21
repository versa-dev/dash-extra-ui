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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

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
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _getPrototypeOf(App).call(this));
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
    key: "render",
    value: function render() {
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
        "label": "Movies",
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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Hello, Da1sh!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["TreeDashUiComponents"], _extends({
        value: data
      }, this.state, {
        onToggle: null
      })));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvZGVtby9BcHAuanMiXSwibmFtZXMiOlsiQXBwIiwibmV3UHJvcHMiLCJzZXRTdGF0ZSIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJzdGF0ZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7QUFDQTs7QUFDQTs7SUFFTUEsRzs7Ozs7QUFFRixpQkFBYztBQUFBOztBQUFBO0FBRWI7Ozs7NkJBRVFDLFEsRUFBVTtBQUNmLFdBQUtDLFFBQUwsQ0FBY0QsUUFBZDtBQUNIOzs7c0NBRWlCRSxRLEVBQVU7QUFDeEJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVo7QUFDSDs7OytDQUUwQjtBQUN2QkQsYUFBTyxDQUFDQyxHQUFSLENBQVksU0FBWjtBQUNIOzs7NkJBRVE7QUFDTCxVQUFNQyxJQUFJLEdBQUcsQ0FDVDtBQUNJLGVBQU8sR0FEWDtBQUVJLGlCQUFTLFdBRmI7QUFHSSxnQkFBUSxrQkFIWjtBQUlJLGdCQUFRLG1CQUpaO0FBS0ksb0JBQVksQ0FBQztBQUNULGlCQUFPLEtBREU7QUFFVCxtQkFBUyxNQUZBO0FBR1Qsa0JBQVEsYUFIQztBQUlULGtCQUFRLGlCQUpDO0FBS1Qsc0JBQVksQ0FBQztBQUFFLG1CQUFPLE9BQVQ7QUFBa0IscUJBQVMsY0FBM0I7QUFBMkMsb0JBQVEsa0JBQW5EO0FBQXVFLG9CQUFRO0FBQS9FLFdBQUQsRUFBdUc7QUFBRSxtQkFBTyxPQUFUO0FBQWtCLHFCQUFTLFlBQTNCO0FBQXlDLG9CQUFRLGtCQUFqRDtBQUFxRSxvQkFBUTtBQUE3RSxXQUF2RztBQUxILFNBQUQsRUFPWjtBQUNJLGlCQUFPLEtBRFg7QUFFSSxtQkFBUyxNQUZiO0FBR0ksa0JBQVEsYUFIWjtBQUlJLGtCQUFRLGtCQUpaO0FBS0ksc0JBQVksQ0FBQztBQUFFLG1CQUFPLE9BQVQ7QUFBa0IscUJBQVMsY0FBM0I7QUFBMkMsb0JBQVEsa0JBQW5EO0FBQXVFLG9CQUFRO0FBQS9FLFdBQUQ7QUFMaEIsU0FQWTtBQUxoQixPQURTLEVBcUJUO0FBQ0ksZUFBTyxHQURYO0FBRUksaUJBQVMsUUFGYjtBQUdJLGdCQUFRLGVBSFo7QUFJSSxnQkFBUSxzQkFKWjtBQUtJLG9CQUFZLENBQ1I7QUFBRSxpQkFBTyxLQUFUO0FBQWdCLG1CQUFTLFNBQXpCO0FBQW9DLGtCQUFRLDJCQUE1QztBQUF5RSxrQkFBUTtBQUFqRixTQURRLEVBRVI7QUFBRSxpQkFBTyxLQUFUO0FBQWdCLG1CQUFTLGdCQUF6QjtBQUEyQyxrQkFBUSwyQkFBbkQ7QUFBZ0Ysa0JBQVE7QUFBeEYsU0FGUSxFQUdSO0FBQUUsaUJBQU8sS0FBVDtBQUFnQixtQkFBUyxlQUF6QjtBQUEwQyxrQkFBUSwyQkFBbEQ7QUFBK0Usa0JBQVE7QUFBdkYsU0FIUTtBQUxoQixPQXJCUyxFQStCVDtBQUNJLGVBQU8sR0FEWDtBQUVJLGlCQUFTLFFBRmI7QUFHSSxnQkFBUSxlQUhaO0FBSUksZ0JBQVEsa0JBSlo7QUFLSSxvQkFBWSxDQUFDO0FBQ1QsaUJBQU8sS0FERTtBQUVULGtCQUFRLGtCQUZDO0FBR1QsbUJBQVMsV0FIQTtBQUlULGtCQUFRLGVBSkM7QUFLVCxzQkFBWSxDQUFDO0FBQUUsbUJBQU8sT0FBVDtBQUFrQixxQkFBUyxVQUEzQjtBQUF1QyxvQkFBUSxtQkFBL0M7QUFBb0Usb0JBQVE7QUFBNUUsV0FBRCxFQUFpRztBQUFFLG1CQUFPLE9BQVQ7QUFBa0IscUJBQVMsU0FBM0I7QUFBc0Msb0JBQVEsbUJBQTlDO0FBQW1FLG9CQUFRO0FBQTNFLFdBQWpHO0FBTEgsU0FBRCxFQU9aO0FBQ0ksaUJBQU8sS0FEWDtBQUVJLG1CQUFTLGdCQUZiO0FBR0ksa0JBQVEsa0JBSFo7QUFJSSxrQkFBUSxnQkFKWjtBQUtJLHNCQUFZLENBQUM7QUFBRSxtQkFBTyxPQUFUO0FBQWtCLHFCQUFTLFlBQTNCO0FBQXlDLG9CQUFRLG1CQUFqRDtBQUFzRSxvQkFBUTtBQUE5RSxXQUFELEVBQXFHO0FBQUUsbUJBQU8sT0FBVDtBQUFrQixxQkFBUyxjQUEzQjtBQUEyQyxvQkFBUSxtQkFBbkQ7QUFBd0Usb0JBQVE7QUFBaEYsV0FBckc7QUFMaEIsU0FQWTtBQUxoQixPQS9CUyxDQUFiO0FBb0RBLGFBQ0ksd0VBQ0ksdUZBREosRUFFSSwyREFBQyx5REFBRDtBQUNJLGFBQUssRUFBRUE7QUFEWCxTQUVRLEtBQUtDLEtBRmI7QUFHSSxnQkFBUSxFQUFFO0FBSGQsU0FGSixDQURKO0FBV0g7Ozs7RUFsRmFDLCtDOztBQXFGSFIsa0VBQWYsRSIsImZpbGUiOiIyZGUxOWIxLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludCBuby1tYWdpYy1udW1iZXJzOiAwICovXHJcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gaW1wb3J0IHsgRXh0cmFEYXNoVWlDb21wb25lbnRzIH0gZnJvbSAnLi4vbGliJztcclxuLy8gaW1wb3J0IHsgQ2FwdGNoYURhc2hVaUNvbXBvbmVudHMgfSBmcm9tICcuLi9saWInO1xyXG5pbXBvcnQgeyBUcmVlRGFzaFVpQ29tcG9uZW50cyB9IGZyb20gJy4uL2xpYic7XHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UHJvcHMobmV3UHJvcHMpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKG5ld1Byb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICByZWNhcHRjaGFDYWxsYmFjayhyZXNwb25zZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVzcG9uc2VcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVjYXB0Y2hhRXhwaXJlZENhbGxiYWNrKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXhwaXJlZFwiKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcImtleVwiOiBcIjBcIixcclxuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJEb2N1bWVudHNcIixcclxuICAgICAgICAgICAgICAgIFwiZGF0YVwiOiBcIkRvY3VtZW50cyBGb2xkZXJcIixcclxuICAgICAgICAgICAgICAgIFwiaWNvblwiOiBcInBpIHBpLWZ3IHBpLWluYm94XCIsXHJcbiAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJrZXlcIjogXCIwLTBcIixcclxuICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiV29ya1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0YVwiOiBcIldvcmsgRm9sZGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpY29uXCI6IFwicGkgcGktZncgcGktY29nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbeyBcImtleVwiOiBcIjAtMC0wXCIsIFwibGFiZWxcIjogXCJFeHBlbnNlcy5kb2NcIiwgXCJpY29uXCI6IFwicGkgcGktZncgcGktZmlsZVwiLCBcImRhdGFcIjogXCJFeHBlbnNlcyBEb2N1bWVudFwiIH0sIHsgXCJrZXlcIjogXCIwLTAtMVwiLCBcImxhYmVsXCI6IFwiUmVzdW1lLmRvY1wiLCBcImljb25cIjogXCJwaSBwaS1mdyBwaS1maWxlXCIsIFwiZGF0YVwiOiBcIlJlc3VtZSBEb2N1bWVudFwiIH1dXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwia2V5XCI6IFwiMC0xXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkhvbWVcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRhdGFcIjogXCJIb21lIEZvbGRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaWNvblwiOiBcInBpIHBpLWZ3IHBpLWhvbWVcIixcclxuICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFt7IFwia2V5XCI6IFwiMC0xLTBcIiwgXCJsYWJlbFwiOiBcIkludm9pY2VzLnR4dFwiLCBcImljb25cIjogXCJwaSBwaS1mdyBwaS1maWxlXCIsIFwiZGF0YVwiOiBcIkludm9pY2VzIGZvciB0aGlzIG1vbnRoXCIgfV1cclxuICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwia2V5XCI6IFwiMVwiLFxyXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkV2ZW50c1wiLFxyXG4gICAgICAgICAgICAgICAgXCJkYXRhXCI6IFwiRXZlbnRzIEZvbGRlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJpY29uXCI6IFwicGkgcGktZncgcGktY2FsZW5kYXJcIixcclxuICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgXCJrZXlcIjogXCIxLTBcIiwgXCJsYWJlbFwiOiBcIk1lZXRpbmdcIiwgXCJpY29uXCI6IFwicGkgcGktZncgcGktY2FsZW5kYXItcGx1c1wiLCBcImRhdGFcIjogXCJNZWV0aW5nXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IFwia2V5XCI6IFwiMS0xXCIsIFwibGFiZWxcIjogXCJQcm9kdWN0IExhdW5jaFwiLCBcImljb25cIjogXCJwaSBwaS1mdyBwaS1jYWxlbmRhci1wbHVzXCIsIFwiZGF0YVwiOiBcIlByb2R1Y3QgTGF1bmNoXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IFwia2V5XCI6IFwiMS0yXCIsIFwibGFiZWxcIjogXCJSZXBvcnQgUmV2aWV3XCIsIFwiaWNvblwiOiBcInBpIHBpLWZ3IHBpLWNhbGVuZGFyLXBsdXNcIiwgXCJkYXRhXCI6IFwiUmVwb3J0IFJldmlld1wiIH1dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwia2V5XCI6IFwiMlwiLFxyXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIk1vdmllc1wiLFxyXG4gICAgICAgICAgICAgICAgXCJkYXRhXCI6IFwiTW92aWVzIEZvbGRlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJpY29uXCI6IFwicGkgcGktZncgcGktc3RhclwiLFxyXG4gICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIFwia2V5XCI6IFwiMi0wXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpY29uXCI6IFwicGkgcGktZncgcGktc3RhclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJBbCBQYWNpbm9cIixcclxuICAgICAgICAgICAgICAgICAgICBcImRhdGFcIjogXCJQYWNpbm8gTW92aWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbeyBcImtleVwiOiBcIjItMC0wXCIsIFwibGFiZWxcIjogXCJTY2FyZmFjZVwiLCBcImljb25cIjogXCJwaSBwaS1mdyBwaS12aWRlb1wiLCBcImRhdGFcIjogXCJTY2FyZmFjZSBNb3ZpZVwiIH0sIHsgXCJrZXlcIjogXCIyLTAtMVwiLCBcImxhYmVsXCI6IFwiU2VycGljb1wiLCBcImljb25cIjogXCJwaSBwaS1mdyBwaS12aWRlb1wiLCBcImRhdGFcIjogXCJTZXJwaWNvIE1vdmllXCIgfV1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJrZXlcIjogXCIyLTFcIixcclxuICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiUm9iZXJ0IERlIE5pcm9cIixcclxuICAgICAgICAgICAgICAgICAgICBcImljb25cIjogXCJwaSBwaS1mdyBwaS1zdGFyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRhXCI6IFwiRGUgTmlybyBNb3ZpZXNcIixcclxuICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFt7IFwia2V5XCI6IFwiMi0xLTBcIiwgXCJsYWJlbFwiOiBcIkdvb2RmZWxsYXNcIiwgXCJpY29uXCI6IFwicGkgcGktZncgcGktdmlkZW9cIiwgXCJkYXRhXCI6IFwiR29vZGZlbGxhcyBNb3ZpZVwiIH0sIHsgXCJrZXlcIjogXCIyLTEtMVwiLCBcImxhYmVsXCI6IFwiVW50b3VjaGFibGVzXCIsIFwiaWNvblwiOiBcInBpIHBpLWZ3IHBpLXZpZGVvXCIsIFwiZGF0YVwiOiBcIlVudG91Y2hhYmxlcyBNb3ZpZVwiIH1dXHJcbiAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDE+SGVsbG8sIERhMXNoITwvaDE+XHJcbiAgICAgICAgICAgICAgICA8VHJlZURhc2hVaUNvbXBvbmVudHNcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5zdGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICBvblRvZ2dsZT17bnVsbH1cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==