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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Hello, Da1sh!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["TreeDashUiComponents"], {
        value: data,
        onToggle: null
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvZGVtby9BcHAuanMiXSwibmFtZXMiOlsiQXBwIiwibmV3UHJvcHMiLCJzZXRTdGF0ZSIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTtBQUNBOztBQUNBOztJQUVNQSxHOzs7OztBQUVGLGlCQUFjO0FBQUE7O0FBQUE7QUFFYjs7Ozs2QkFFUUMsUSxFQUFVO0FBQ2YsV0FBS0MsUUFBTCxDQUFjRCxRQUFkO0FBQ0g7OztzQ0FFaUJFLFEsRUFBVTtBQUN4QkMsYUFBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtBQUNIOzs7K0NBRTBCO0FBQ3ZCRCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaO0FBQ0g7Ozs2QkFFUTtBQUNMLFVBQU1DLElBQUksR0FBRyxDQUNUO0FBQ0ksZUFBTyxHQURYO0FBRUksaUJBQVMsV0FGYjtBQUdJLGdCQUFRLGtCQUhaO0FBSUksZ0JBQVEsbUJBSlo7QUFLSSxvQkFBWSxDQUFDO0FBQ1QsaUJBQU8sS0FERTtBQUVULG1CQUFTLE1BRkE7QUFHVCxrQkFBUSxhQUhDO0FBSVQsa0JBQVEsaUJBSkM7QUFLVCxzQkFBWSxDQUFDO0FBQUUsbUJBQU8sT0FBVDtBQUFrQixxQkFBUyxjQUEzQjtBQUEyQyxvQkFBUSxrQkFBbkQ7QUFBdUUsb0JBQVE7QUFBL0UsV0FBRCxFQUF1RztBQUFFLG1CQUFPLE9BQVQ7QUFBa0IscUJBQVMsWUFBM0I7QUFBeUMsb0JBQVEsa0JBQWpEO0FBQXFFLG9CQUFRO0FBQTdFLFdBQXZHO0FBTEgsU0FBRCxFQU9aO0FBQ0ksaUJBQU8sS0FEWDtBQUVJLG1CQUFTLE1BRmI7QUFHSSxrQkFBUSxhQUhaO0FBSUksa0JBQVEsa0JBSlo7QUFLSSxzQkFBWSxDQUFDO0FBQUUsbUJBQU8sT0FBVDtBQUFrQixxQkFBUyxjQUEzQjtBQUEyQyxvQkFBUSxrQkFBbkQ7QUFBdUUsb0JBQVE7QUFBL0UsV0FBRDtBQUxoQixTQVBZO0FBTGhCLE9BRFMsRUFxQlQ7QUFDSSxlQUFPLEdBRFg7QUFFSSxpQkFBUyxRQUZiO0FBR0ksZ0JBQVEsZUFIWjtBQUlJLGdCQUFRLHNCQUpaO0FBS0ksb0JBQVksQ0FDUjtBQUFFLGlCQUFPLEtBQVQ7QUFBZ0IsbUJBQVMsU0FBekI7QUFBb0Msa0JBQVEsMkJBQTVDO0FBQXlFLGtCQUFRO0FBQWpGLFNBRFEsRUFFUjtBQUFFLGlCQUFPLEtBQVQ7QUFBZ0IsbUJBQVMsZ0JBQXpCO0FBQTJDLGtCQUFRLDJCQUFuRDtBQUFnRixrQkFBUTtBQUF4RixTQUZRLEVBR1I7QUFBRSxpQkFBTyxLQUFUO0FBQWdCLG1CQUFTLGVBQXpCO0FBQTBDLGtCQUFRLDJCQUFsRDtBQUErRSxrQkFBUTtBQUF2RixTQUhRO0FBTGhCLE9BckJTLEVBK0JUO0FBQ0ksZUFBTyxHQURYO0FBRUksaUJBQVMsUUFGYjtBQUdJLGdCQUFRLGVBSFo7QUFJSSxnQkFBUSxrQkFKWjtBQUtJLG9CQUFZLENBQUM7QUFDVCxpQkFBTyxLQURFO0FBRVQsa0JBQVEsa0JBRkM7QUFHVCxtQkFBUyxXQUhBO0FBSVQsa0JBQVEsZUFKQztBQUtULHNCQUFZLENBQUM7QUFBRSxtQkFBTyxPQUFUO0FBQWtCLHFCQUFTLFVBQTNCO0FBQXVDLG9CQUFRLG1CQUEvQztBQUFvRSxvQkFBUTtBQUE1RSxXQUFELEVBQWlHO0FBQUUsbUJBQU8sT0FBVDtBQUFrQixxQkFBUyxTQUEzQjtBQUFzQyxvQkFBUSxtQkFBOUM7QUFBbUUsb0JBQVE7QUFBM0UsV0FBakc7QUFMSCxTQUFELEVBT1o7QUFDSSxpQkFBTyxLQURYO0FBRUksbUJBQVMsZ0JBRmI7QUFHSSxrQkFBUSxrQkFIWjtBQUlJLGtCQUFRLGdCQUpaO0FBS0ksc0JBQVksQ0FBQztBQUFFLG1CQUFPLE9BQVQ7QUFBa0IscUJBQVMsWUFBM0I7QUFBeUMsb0JBQVEsbUJBQWpEO0FBQXNFLG9CQUFRO0FBQTlFLFdBQUQsRUFBcUc7QUFBRSxtQkFBTyxPQUFUO0FBQWtCLHFCQUFTLGNBQTNCO0FBQTJDLG9CQUFRLG1CQUFuRDtBQUF3RSxvQkFBUTtBQUFoRixXQUFyRztBQUxoQixTQVBZO0FBTGhCLE9BL0JTLENBQWI7QUFvREEsYUFDSSx3RUFDSSx1RkFESixFQUVJLDJEQUFDLHlEQUFEO0FBQ0ksYUFBSyxFQUFFQSxJQURYO0FBRUksZ0JBQVEsRUFBRTtBQUZkLFFBRkosQ0FESjtBQVVIOzs7O0VBakZhQywrQzs7QUFvRkhQLGtFQUFmLEUiLCJmaWxlIjoiZWE3NGI4My1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgbm8tbWFnaWMtbnVtYmVyczogMCAqL1xyXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vIGltcG9ydCB7IEV4dHJhRGFzaFVpQ29tcG9uZW50cyB9IGZyb20gJy4uL2xpYic7XHJcbi8vIGltcG9ydCB7IENhcHRjaGFEYXNoVWlDb21wb25lbnRzIH0gZnJvbSAnLi4vbGliJztcclxuaW1wb3J0IHsgVHJlZURhc2hVaUNvbXBvbmVudHMgfSBmcm9tICcuLi9saWInO1xyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFByb3BzKG5ld1Byb3BzKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXdQcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVjYXB0Y2hhQ2FsbGJhY2socmVzcG9uc2UpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlJlc3BvbnNlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlY2FwdGNoYUV4cGlyZWRDYWxsYmFjaygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkV4cGlyZWRcIilcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJrZXlcIjogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiRG9jdW1lbnRzXCIsXHJcbiAgICAgICAgICAgICAgICBcImRhdGFcIjogXCJEb2N1bWVudHMgRm9sZGVyXCIsXHJcbiAgICAgICAgICAgICAgICBcImljb25cIjogXCJwaSBwaS1mdyBwaS1pbmJveFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIFwia2V5XCI6IFwiMC0wXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIldvcmtcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRhdGFcIjogXCJXb3JrIEZvbGRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaWNvblwiOiBcInBpIHBpLWZ3IHBpLWNvZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW3sgXCJrZXlcIjogXCIwLTAtMFwiLCBcImxhYmVsXCI6IFwiRXhwZW5zZXMuZG9jXCIsIFwiaWNvblwiOiBcInBpIHBpLWZ3IHBpLWZpbGVcIiwgXCJkYXRhXCI6IFwiRXhwZW5zZXMgRG9jdW1lbnRcIiB9LCB7IFwia2V5XCI6IFwiMC0wLTFcIiwgXCJsYWJlbFwiOiBcIlJlc3VtZS5kb2NcIiwgXCJpY29uXCI6IFwicGkgcGktZncgcGktZmlsZVwiLCBcImRhdGFcIjogXCJSZXN1bWUgRG9jdW1lbnRcIiB9XVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImtleVwiOiBcIjAtMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJIb21lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRhXCI6IFwiSG9tZSBGb2xkZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBcImljb25cIjogXCJwaSBwaS1mdyBwaS1ob21lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbeyBcImtleVwiOiBcIjAtMS0wXCIsIFwibGFiZWxcIjogXCJJbnZvaWNlcy50eHRcIiwgXCJpY29uXCI6IFwicGkgcGktZncgcGktZmlsZVwiLCBcImRhdGFcIjogXCJJbnZvaWNlcyBmb3IgdGhpcyBtb250aFwiIH1dXHJcbiAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcImtleVwiOiBcIjFcIixcclxuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJFdmVudHNcIixcclxuICAgICAgICAgICAgICAgIFwiZGF0YVwiOiBcIkV2ZW50cyBGb2xkZXJcIixcclxuICAgICAgICAgICAgICAgIFwiaWNvblwiOiBcInBpIHBpLWZ3IHBpLWNhbGVuZGFyXCIsXHJcbiAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IFwia2V5XCI6IFwiMS0wXCIsIFwibGFiZWxcIjogXCJNZWV0aW5nXCIsIFwiaWNvblwiOiBcInBpIHBpLWZ3IHBpLWNhbGVuZGFyLXBsdXNcIiwgXCJkYXRhXCI6IFwiTWVldGluZ1wiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBcImtleVwiOiBcIjEtMVwiLCBcImxhYmVsXCI6IFwiUHJvZHVjdCBMYXVuY2hcIiwgXCJpY29uXCI6IFwicGkgcGktZncgcGktY2FsZW5kYXItcGx1c1wiLCBcImRhdGFcIjogXCJQcm9kdWN0IExhdW5jaFwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBcImtleVwiOiBcIjEtMlwiLCBcImxhYmVsXCI6IFwiUmVwb3J0IFJldmlld1wiLCBcImljb25cIjogXCJwaSBwaS1mdyBwaS1jYWxlbmRhci1wbHVzXCIsIFwiZGF0YVwiOiBcIlJlcG9ydCBSZXZpZXdcIiB9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcImtleVwiOiBcIjJcIixcclxuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJNb3ZpZXNcIixcclxuICAgICAgICAgICAgICAgIFwiZGF0YVwiOiBcIk1vdmllcyBGb2xkZXJcIixcclxuICAgICAgICAgICAgICAgIFwiaWNvblwiOiBcInBpIHBpLWZ3IHBpLXN0YXJcIixcclxuICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW3tcclxuICAgICAgICAgICAgICAgICAgICBcImtleVwiOiBcIjItMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaWNvblwiOiBcInBpIHBpLWZ3IHBpLXN0YXJcIixcclxuICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiQWwgUGFjaW5vXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRhXCI6IFwiUGFjaW5vIE1vdmllc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW3sgXCJrZXlcIjogXCIyLTAtMFwiLCBcImxhYmVsXCI6IFwiU2NhcmZhY2VcIiwgXCJpY29uXCI6IFwicGkgcGktZncgcGktdmlkZW9cIiwgXCJkYXRhXCI6IFwiU2NhcmZhY2UgTW92aWVcIiB9LCB7IFwia2V5XCI6IFwiMi0wLTFcIiwgXCJsYWJlbFwiOiBcIlNlcnBpY29cIiwgXCJpY29uXCI6IFwicGkgcGktZncgcGktdmlkZW9cIiwgXCJkYXRhXCI6IFwiU2VycGljbyBNb3ZpZVwiIH1dXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwia2V5XCI6IFwiMi0xXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlJvYmVydCBEZSBOaXJvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpY29uXCI6IFwicGkgcGktZncgcGktc3RhclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0YVwiOiBcIkRlIE5pcm8gTW92aWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbeyBcImtleVwiOiBcIjItMS0wXCIsIFwibGFiZWxcIjogXCJHb29kZmVsbGFzXCIsIFwiaWNvblwiOiBcInBpIHBpLWZ3IHBpLXZpZGVvXCIsIFwiZGF0YVwiOiBcIkdvb2RmZWxsYXMgTW92aWVcIiB9LCB7IFwia2V5XCI6IFwiMi0xLTFcIiwgXCJsYWJlbFwiOiBcIlVudG91Y2hhYmxlc1wiLCBcImljb25cIjogXCJwaSBwaS1mdyBwaS12aWRlb1wiLCBcImRhdGFcIjogXCJVbnRvdWNoYWJsZXMgTW92aWVcIiB9XVxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxPkhlbGxvLCBEYTFzaCE8L2gxPlxyXG4gICAgICAgICAgICAgICAgPFRyZWVEYXNoVWlDb21wb25lbnRzXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Ub2dnbGU9e251bGx9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=