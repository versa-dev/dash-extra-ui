webpackHotUpdateextra_dash_ui_components("main",{

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
/* harmony import */ var _lib_components_Steps_StepsComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/components/Steps/StepsComponent */ "./src/lib/components/Steps/StepsComponent.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var StepsDemo =
/*#__PURE__*/
function (_Component) {
  _inherits(StepsDemo, _Component);

  function StepsDemo(props) {
    var _this;

    _classCallCheck(this, StepsDemo);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StepsDemo).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(StepsDemo, [{
    key: "setProps",
    value: function setProps(newProps) {
      console.log(newProps);
      this.setState(newProps);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var items = [{
        label: 'Personal',
        command: function command(event) {
          _this2.growl.show({
            severity: 'info',
            summary: 'First Step',
            detail: event.item.label
          });
        }
      }, {
        label: 'Seat',
        command: function command(event) {
          _this2.growl.show({
            severity: 'info',
            summary: 'Seat Selection',
            detail: event.item.label
          });
        }
      }, {
        label: 'Payment',
        command: function command(event) {
          _this2.growl.show({
            severity: 'info',
            summary: 'Pay with CC',
            detail: event.item.label
          });
        }
      }, {
        label: 'Confirmation',
        command: function command(event) {
          _this2.growl.show({
            severity: 'info',
            summary: 'Last Step',
            detail: event.item.label
          });
        }
      }];
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib_components_Steps_StepsComponent__WEBPACK_IMPORTED_MODULE_1__["default"], {
        items: items,
        setProps: this.setProps
      });
    }
  }]);

  return StepsDemo;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (StepsDemo);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvZGVtby9TdGVwc0RlbW8uanMiXSwibmFtZXMiOlsiU3RlcHNEZW1vIiwicHJvcHMiLCJzdGF0ZSIsIm5ld1Byb3BzIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwiaXRlbXMiLCJsYWJlbCIsImNvbW1hbmQiLCJldmVudCIsImdyb3dsIiwic2hvdyIsInNldmVyaXR5Iiwic3VtbWFyeSIsImRldGFpbCIsIml0ZW0iLCJzZXRQcm9wcyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztJQUVNQSxTOzs7OztBQUNGLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsbUZBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUZlO0FBR2xCOzs7OzZCQUNRQyxRLEVBQVU7QUFDZkMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVo7QUFDQSxXQUFLRyxRQUFMLENBQWNILFFBQWQ7QUFDSDs7OzZCQUVRO0FBQUE7O0FBQ0wsVUFBTUksS0FBSyxHQUFHLENBQ1Y7QUFDSUMsYUFBSyxFQUFFLFVBRFg7QUFFSUMsZUFBTyxFQUFFLGlCQUFBQyxLQUFLLEVBQUk7QUFDZCxnQkFBSSxDQUFDQyxLQUFMLENBQVdDLElBQVgsQ0FBZ0I7QUFDWkMsb0JBQVEsRUFBRSxNQURFO0FBRVpDLG1CQUFPLEVBQUUsWUFGRztBQUdaQyxrQkFBTSxFQUFFTCxLQUFLLENBQUNNLElBQU4sQ0FBV1I7QUFIUCxXQUFoQjtBQUtIO0FBUkwsT0FEVSxFQVdWO0FBQ0lBLGFBQUssRUFBRSxNQURYO0FBRUlDLGVBQU8sRUFBRSxpQkFBQUMsS0FBSyxFQUFJO0FBQ2QsZ0JBQUksQ0FBQ0MsS0FBTCxDQUFXQyxJQUFYLENBQWdCO0FBQ1pDLG9CQUFRLEVBQUUsTUFERTtBQUVaQyxtQkFBTyxFQUFFLGdCQUZHO0FBR1pDLGtCQUFNLEVBQUVMLEtBQUssQ0FBQ00sSUFBTixDQUFXUjtBQUhQLFdBQWhCO0FBS0g7QUFSTCxPQVhVLEVBcUJWO0FBQ0lBLGFBQUssRUFBRSxTQURYO0FBRUlDLGVBQU8sRUFBRSxpQkFBQUMsS0FBSyxFQUFJO0FBQ2QsZ0JBQUksQ0FBQ0MsS0FBTCxDQUFXQyxJQUFYLENBQWdCO0FBQ1pDLG9CQUFRLEVBQUUsTUFERTtBQUVaQyxtQkFBTyxFQUFFLGFBRkc7QUFHWkMsa0JBQU0sRUFBRUwsS0FBSyxDQUFDTSxJQUFOLENBQVdSO0FBSFAsV0FBaEI7QUFLSDtBQVJMLE9BckJVLEVBK0JWO0FBQ0lBLGFBQUssRUFBRSxjQURYO0FBRUlDLGVBQU8sRUFBRSxpQkFBQUMsS0FBSyxFQUFJO0FBQ2QsZ0JBQUksQ0FBQ0MsS0FBTCxDQUFXQyxJQUFYLENBQWdCO0FBQ1pDLG9CQUFRLEVBQUUsTUFERTtBQUVaQyxtQkFBTyxFQUFFLFdBRkc7QUFHWkMsa0JBQU0sRUFBRUwsS0FBSyxDQUFDTSxJQUFOLENBQVdSO0FBSFAsV0FBaEI7QUFLSDtBQVJMLE9BL0JVLENBQWQ7QUEyQ0EsYUFBTywyREFBQyw0RUFBRDtBQUFnQixhQUFLLEVBQUVELEtBQXZCO0FBQThCLGdCQUFRLEVBQUUsS0FBS1U7QUFBN0MsUUFBUDtBQUNIOzs7O0VBdkRtQkMsK0M7O0FBMERUbEIsd0VBQWYsRSIsImZpbGUiOiJlNzg0MjRmLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0ZXBzQ29tcG9uZW50IGZyb20gJy4uL2xpYi9jb21wb25lbnRzL1N0ZXBzL1N0ZXBzQ29tcG9uZW50JztcblxuY2xhc3MgU3RlcHNEZW1vIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgICB9XG4gICAgc2V0UHJvcHMobmV3UHJvcHMpIHtcbiAgICAgICAgY29uc29sZS5sb2cobmV3UHJvcHMpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKG5ld1Byb3BzKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnUGVyc29uYWwnLFxuICAgICAgICAgICAgICAgIGNvbW1hbmQ6IGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncm93bC5zaG93KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldmVyaXR5OiAnaW5mbycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdW1tYXJ5OiAnRmlyc3QgU3RlcCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWw6IGV2ZW50Lml0ZW0ubGFiZWwsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnU2VhdCcsXG4gICAgICAgICAgICAgICAgY29tbWFuZDogZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyb3dsLnNob3coe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V2ZXJpdHk6ICdpbmZvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1bW1hcnk6ICdTZWF0IFNlbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWw6IGV2ZW50Lml0ZW0ubGFiZWwsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnUGF5bWVudCcsXG4gICAgICAgICAgICAgICAgY29tbWFuZDogZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyb3dsLnNob3coe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V2ZXJpdHk6ICdpbmZvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1bW1hcnk6ICdQYXkgd2l0aCBDQycsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWw6IGV2ZW50Lml0ZW0ubGFiZWwsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnQ29uZmlybWF0aW9uJyxcbiAgICAgICAgICAgICAgICBjb21tYW5kOiBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3Jvd2wuc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXZlcml0eTogJ2luZm8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VtbWFyeTogJ0xhc3QgU3RlcCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWw6IGV2ZW50Lml0ZW0ubGFiZWwsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdO1xuXG4gICAgICAgIHJldHVybiA8U3RlcHNDb21wb25lbnQgaXRlbXM9e2l0ZW1zfSBzZXRQcm9wcz17dGhpcy5zZXRQcm9wc30gLz47XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGVwc0RlbW87XG4iXSwic291cmNlUm9vdCI6IiJ9