webpackHotUpdatedash_extra_ui_components("main",{

/***/ "./src/demo/StepsDemo.js":
/*!*******************************!*\
  !*** ./src/demo/StepsDemo.js ***!
  \*******************************/
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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var StepsDemo =
/*#__PURE__*/
function (_Component) {
  _inherits(StepsDemo, _Component);

  function StepsDemo(props) {
    var _this;

    _classCallCheck(this, StepsDemo);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StepsDemo).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "setProps", function (newProps) {
      console.log(newProps);

      _this.setState(newProps);
    });

    _this.state = {};
    return _this;
  }

  _createClass(StepsDemo, [{
    key: "render",
    value: function render() {
      var items = [{
        label: 'Personal'
      }, {
        label: 'Seat'
      }, {
        label: 'Payment'
      }, {
        label: 'Confirmation'
      }];
      var menuitems = [{
        label: 'File',
        icon: 'pi pi-fw pi-file',
        items: [{
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          items: [{
            label: 'Bookmark',
            icon: 'pi pi-fw pi-bookmark'
          }, {
            label: 'Video',
            icon: 'pi pi-fw pi-video'
          }]
        }, {
          label: 'Delete',
          icon: 'pi pi-fw pi-trash'
        }, {
          separator: true
        }, {
          label: 'Export',
          icon: 'pi pi-fw pi-external-link'
        }]
      }, {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [{
          label: 'Left',
          icon: 'pi pi-fw pi-align-left'
        }, {
          label: 'Right',
          icon: 'pi pi-fw pi-align-right'
        }, {
          label: 'Center',
          icon: 'pi pi-fw pi-align-center'
        }, {
          label: 'Justify',
          icon: 'pi pi-fw pi-align-justify'
        }]
      }, {
        label: 'Users',
        icon: 'pi pi-fw pi-user',
        items: [{
          label: 'New',
          icon: 'pi pi-fw pi-user-plus'
        }, {
          label: 'Delete',
          icon: 'pi pi-fw pi-user-minus'
        }, {
          label: 'Search',
          icon: 'pi pi-fw pi-users',
          items: [{
            label: 'Filter',
            icon: 'pi pi-fw pi-filter',
            items: [{
              label: 'Print',
              icon: 'pi pi-fw pi-print'
            }]
          }, {
            icon: 'pi pi-fw pi-bars',
            label: 'List'
          }]
        }]
      }, {
        label: 'Events',
        icon: 'pi pi-fw pi-calendar',
        items: [{
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          items: [{
            label: 'Save',
            icon: 'pi pi-fw pi-calendar-plus'
          }, {
            label: 'Delete',
            icon: 'pi pi-fw pi-calendar-minus'
          }]
        }, {
          label: 'Archieve',
          icon: 'pi pi-fw pi-calendar-times',
          items: [{
            label: 'Remove',
            icon: 'pi pi-fw pi-calendar-minus'
          }]
        }]
      }, {
        label: 'Quit',
        icon: 'pi pi-fw pi-power-off'
      }];
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["StepsComponent"], {
        model: items,
        activeIndex: this.state.activeIndex,
        setProps: this.setProps
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["MenuBarComponent"], {
        activeItem: this.state.activeItem,
        btnlabel: "Logout",
        btnicon: "pi pi-power-off",
        inputPlaceholder: "Search",
        setProps: this.setProps,
        items: menuitems
      }));
    }
  }]);

  return StepsDemo;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (StepsDemo);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvZGVtby9TdGVwc0RlbW8uanMiXSwibmFtZXMiOlsiU3RlcHNEZW1vIiwicHJvcHMiLCJuZXdQcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsInN0YXRlIiwiaXRlbXMiLCJsYWJlbCIsIm1lbnVpdGVtcyIsImljb24iLCJzZXBhcmF0b3IiLCJhY3RpdmVJbmRleCIsInNldFByb3BzIiwiYWN0aXZlSXRlbSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBRU1BLFM7Ozs7O0FBQ0YscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZixtRkFBTUEsS0FBTjs7QUFEZSwrREFJUixVQUFBQyxRQUFRLEVBQUk7QUFDbkJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFaOztBQUNBLFlBQUtHLFFBQUwsQ0FBY0gsUUFBZDtBQUNILEtBUGtCOztBQUVmLFVBQUtJLEtBQUwsR0FBYSxFQUFiO0FBRmU7QUFHbEI7Ozs7NkJBTVE7QUFDTCxVQUFNQyxLQUFLLEdBQUcsQ0FDVjtBQUNJQyxhQUFLLEVBQUU7QUFEWCxPQURVLEVBSVY7QUFDSUEsYUFBSyxFQUFFO0FBRFgsT0FKVSxFQU9WO0FBQ0lBLGFBQUssRUFBRTtBQURYLE9BUFUsRUFVVjtBQUNJQSxhQUFLLEVBQUU7QUFEWCxPQVZVLENBQWQ7QUFlQSxVQUFNQyxTQUFTLEdBQUcsQ0FDZDtBQUNJRCxhQUFLLEVBQUUsTUFEWDtBQUVJRSxZQUFJLEVBQUUsa0JBRlY7QUFHSUgsYUFBSyxFQUFFLENBQ0g7QUFDSUMsZUFBSyxFQUFFLEtBRFg7QUFFSUUsY0FBSSxFQUFFLGtCQUZWO0FBR0lILGVBQUssRUFBRSxDQUNIO0FBQ0lDLGlCQUFLLEVBQUUsVUFEWDtBQUVJRSxnQkFBSSxFQUFFO0FBRlYsV0FERyxFQUtIO0FBQ0lGLGlCQUFLLEVBQUUsT0FEWDtBQUVJRSxnQkFBSSxFQUFFO0FBRlYsV0FMRztBQUhYLFNBREcsRUFlSDtBQUNJRixlQUFLLEVBQUUsUUFEWDtBQUVJRSxjQUFJLEVBQUU7QUFGVixTQWZHLEVBbUJIO0FBQ0lDLG1CQUFTLEVBQUU7QUFEZixTQW5CRyxFQXNCSDtBQUNJSCxlQUFLLEVBQUUsUUFEWDtBQUVJRSxjQUFJLEVBQUU7QUFGVixTQXRCRztBQUhYLE9BRGMsRUFnQ2Q7QUFDSUYsYUFBSyxFQUFFLE1BRFg7QUFFSUUsWUFBSSxFQUFFLG9CQUZWO0FBR0lILGFBQUssRUFBRSxDQUNIO0FBQ0lDLGVBQUssRUFBRSxNQURYO0FBRUlFLGNBQUksRUFBRTtBQUZWLFNBREcsRUFLSDtBQUNJRixlQUFLLEVBQUUsT0FEWDtBQUVJRSxjQUFJLEVBQUU7QUFGVixTQUxHLEVBU0g7QUFDSUYsZUFBSyxFQUFFLFFBRFg7QUFFSUUsY0FBSSxFQUFFO0FBRlYsU0FURyxFQWFIO0FBQ0lGLGVBQUssRUFBRSxTQURYO0FBRUlFLGNBQUksRUFBRTtBQUZWLFNBYkc7QUFIWCxPQWhDYyxFQXNEZDtBQUNJRixhQUFLLEVBQUUsT0FEWDtBQUVJRSxZQUFJLEVBQUUsa0JBRlY7QUFHSUgsYUFBSyxFQUFFLENBQ0g7QUFDSUMsZUFBSyxFQUFFLEtBRFg7QUFFSUUsY0FBSSxFQUFFO0FBRlYsU0FERyxFQUtIO0FBQ0lGLGVBQUssRUFBRSxRQURYO0FBRUlFLGNBQUksRUFBRTtBQUZWLFNBTEcsRUFTSDtBQUNJRixlQUFLLEVBQUUsUUFEWDtBQUVJRSxjQUFJLEVBQUUsbUJBRlY7QUFHSUgsZUFBSyxFQUFFLENBQ0g7QUFDSUMsaUJBQUssRUFBRSxRQURYO0FBRUlFLGdCQUFJLEVBQUUsb0JBRlY7QUFHSUgsaUJBQUssRUFBRSxDQUNIO0FBQ0lDLG1CQUFLLEVBQUUsT0FEWDtBQUVJRSxrQkFBSSxFQUFFO0FBRlYsYUFERztBQUhYLFdBREcsRUFXSDtBQUNJQSxnQkFBSSxFQUFFLGtCQURWO0FBRUlGLGlCQUFLLEVBQUU7QUFGWCxXQVhHO0FBSFgsU0FURztBQUhYLE9BdERjLEVBd0ZkO0FBQ0lBLGFBQUssRUFBRSxRQURYO0FBRUlFLFlBQUksRUFBRSxzQkFGVjtBQUdJSCxhQUFLLEVBQUUsQ0FDSDtBQUNJQyxlQUFLLEVBQUUsTUFEWDtBQUVJRSxjQUFJLEVBQUUsb0JBRlY7QUFHSUgsZUFBSyxFQUFFLENBQ0g7QUFDSUMsaUJBQUssRUFBRSxNQURYO0FBRUlFLGdCQUFJLEVBQUU7QUFGVixXQURHLEVBS0g7QUFDSUYsaUJBQUssRUFBRSxRQURYO0FBRUlFLGdCQUFJLEVBQUU7QUFGVixXQUxHO0FBSFgsU0FERyxFQWVIO0FBQ0lGLGVBQUssRUFBRSxVQURYO0FBRUlFLGNBQUksRUFBRSw0QkFGVjtBQUdJSCxlQUFLLEVBQUUsQ0FDSDtBQUNJQyxpQkFBSyxFQUFFLFFBRFg7QUFFSUUsZ0JBQUksRUFBRTtBQUZWLFdBREc7QUFIWCxTQWZHO0FBSFgsT0F4RmMsRUFzSGQ7QUFDSUYsYUFBSyxFQUFFLE1BRFg7QUFFSUUsWUFBSSxFQUFFO0FBRlYsT0F0SGMsQ0FBbEI7QUE0SEEsYUFDSSx3RUFDSSwyREFBQyxtREFBRDtBQUNJLGFBQUssRUFBRUgsS0FEWDtBQUVJLG1CQUFXLEVBQUUsS0FBS0QsS0FBTCxDQUFXTSxXQUY1QjtBQUdJLGdCQUFRLEVBQUUsS0FBS0M7QUFIbkIsUUFESixFQU1JLDJEQUFDLHFEQUFEO0FBQ0ksa0JBQVUsRUFBRSxLQUFLUCxLQUFMLENBQVdRLFVBRDNCO0FBRUksZ0JBQVEsRUFBQyxRQUZiO0FBR0ksZUFBTyxFQUFDLGlCQUhaO0FBSUksd0JBQWdCLEVBQUMsUUFKckI7QUFLSSxnQkFBUSxFQUFFLEtBQUtELFFBTG5CO0FBTUksYUFBSyxFQUFFSjtBQU5YLFFBTkosQ0FESjtBQWlCSDs7OztFQXZLbUJNLCtDOztBQTBLVGYsd0VBQWYsRSIsImZpbGUiOiI1MjcyNmU2LW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtTdGVwc0NvbXBvbmVudCwgTWVudUJhckNvbXBvbmVudH0gZnJvbSAnLi4vbGliJztcblxuY2xhc3MgU3RlcHNEZW1vIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgICB9XG4gICAgc2V0UHJvcHMgPSBuZXdQcm9wcyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKG5ld1Byb3BzKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXdQcm9wcyk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgaXRlbXMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdQZXJzb25hbCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnU2VhdCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnUGF5bWVudCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnQ29uZmlybWF0aW9uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF07XG5cbiAgICAgICAgY29uc3QgbWVudWl0ZW1zID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnRmlsZScsXG4gICAgICAgICAgICAgICAgaWNvbjogJ3BpIHBpLWZ3IHBpLWZpbGUnLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnTmV3JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdwaSBwaS1mdyBwaS1wbHVzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0Jvb2ttYXJrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3BpIHBpLWZ3IHBpLWJvb2ttYXJrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdWaWRlbycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdwaSBwaS1mdyBwaS12aWRlbycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnRGVsZXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdwaSBwaS1mdyBwaS10cmFzaCcsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcGFyYXRvcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdFeHBvcnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3BpIHBpLWZ3IHBpLWV4dGVybmFsLWxpbmsnLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnRWRpdCcsXG4gICAgICAgICAgICAgICAgaWNvbjogJ3BpIHBpLWZ3IHBpLXBlbmNpbCcsXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdMZWZ0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdwaSBwaS1mdyBwaS1hbGlnbi1sZWZ0JyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdSaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAncGkgcGktZncgcGktYWxpZ24tcmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAncGkgcGktZncgcGktYWxpZ24tY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdKdXN0aWZ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdwaSBwaS1mdyBwaS1hbGlnbi1qdXN0aWZ5JyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1VzZXJzJyxcbiAgICAgICAgICAgICAgICBpY29uOiAncGkgcGktZncgcGktdXNlcicsXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdOZXcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3BpIHBpLWZ3IHBpLXVzZXItcGx1cycsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnRGVsZXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdwaSBwaS1mdyBwaS11c2VyLW1pbnVzJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdTZWFyY2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3BpIHBpLWZ3IHBpLXVzZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0ZpbHRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdwaSBwaS1mdyBwaS1maWx0ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnUHJpbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdwaSBwaS1mdyBwaS1wcmludCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAncGkgcGktZncgcGktYmFycycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnTGlzdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdFdmVudHMnLFxuICAgICAgICAgICAgICAgIGljb246ICdwaSBwaS1mdyBwaS1jYWxlbmRhcicsXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdFZGl0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdwaSBwaS1mdyBwaS1wZW5jaWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnU2F2ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdwaSBwaS1mdyBwaS1jYWxlbmRhci1wbHVzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdEZWxldGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAncGkgcGktZncgcGktY2FsZW5kYXItbWludXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0FyY2hpZXZlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdwaSBwaS1mdyBwaS1jYWxlbmRhci10aW1lcycsXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdSZW1vdmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAncGkgcGktZncgcGktY2FsZW5kYXItbWludXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnUXVpdCcsXG4gICAgICAgICAgICAgICAgaWNvbjogJ3BpIHBpLWZ3IHBpLXBvd2VyLW9mZicsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxTdGVwc0NvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICBtb2RlbD17aXRlbXN9XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUluZGV4PXt0aGlzLnN0YXRlLmFjdGl2ZUluZGV4fVxuICAgICAgICAgICAgICAgICAgICBzZXRQcm9wcz17dGhpcy5zZXRQcm9wc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxNZW51QmFyQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUl0ZW09e3RoaXMuc3RhdGUuYWN0aXZlSXRlbX1cbiAgICAgICAgICAgICAgICAgICAgYnRubGFiZWw9XCJMb2dvdXRcIlxuICAgICAgICAgICAgICAgICAgICBidG5pY29uPVwicGkgcGktcG93ZXItb2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRQbGFjZWhvbGRlcj1cIlNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgIHNldFByb3BzPXt0aGlzLnNldFByb3BzfVxuICAgICAgICAgICAgICAgICAgICBpdGVtcz17bWVudWl0ZW1zfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0ZXBzRGVtbztcbiJdLCJzb3VyY2VSb290IjoiIn0=