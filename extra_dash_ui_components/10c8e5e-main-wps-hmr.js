webpackHotUpdateextra_dash_ui_components("main",{

/***/ "./src/lib/components/OrganizationChart/OrganizationChartComponent.react.js":
/*!**********************************************************************************!*\
  !*** ./src/lib/components/OrganizationChart/OrganizationChartComponent.react.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OrganizationChartComponent; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _OrganizationChart_react_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OrganizationChart.react.js */ "./src/lib/components/OrganizationChart/OrganizationChart.react.js");
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





var OrganizationChartComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(OrganizationChartComponent, _Component);

  function OrganizationChartComponent() {
    var _this;

    _classCallCheck(this, OrganizationChartComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(OrganizationChartComponent).call(this));
    _this.state = {
      selection: []
    };
    _this.nodeTemplate = _this.nodeTemplate.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(OrganizationChartComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        data: this.props.data
      });
    }
  }, {
    key: "nodeTemplate",
    value: function nodeTemplate(node) {
      if (node.type === 'person') {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "node-header"
        }, node.label), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "node-content"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          alt: node.data.avatar,
          src: node.data.avatar,
          style: {
            width: '60px',
            height: '60px'
          }
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, node.data.name)));
      } else {
        return node.label;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.props.value.length == 0) {
        return '';
      }

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_OrganizationChart_react_js__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
        nodeTemplate: this.nodeTemplate,
        selection: this.state.selection,
        onSelectionChange: function onSelectionChange(event) {
          return _this2.setState({
            selection: event.data
          });
        }
      }, this.props)));
    }
  }]);

  return OrganizationChartComponent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


OrganizationChartComponent.defaultProps = {
  value: [],
  selectionMode: 'single'
};
OrganizationChartComponent.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array,
  selectionMode: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvT3JnYW5pemF0aW9uQ2hhcnQvT3JnYW5pemF0aW9uQ2hhcnRDb21wb25lbnQucmVhY3QuanMiXSwibmFtZXMiOlsiT3JnYW5pemF0aW9uQ2hhcnRDb21wb25lbnQiLCJzdGF0ZSIsInNlbGVjdGlvbiIsIm5vZGVUZW1wbGF0ZSIsImJpbmQiLCJzZXRTdGF0ZSIsImRhdGEiLCJwcm9wcyIsIm5vZGUiLCJ0eXBlIiwibGFiZWwiLCJhdmF0YXIiLCJ3aWR0aCIsImhlaWdodCIsIm5hbWUiLCJ2YWx1ZSIsImxlbmd0aCIsImV2ZW50IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwic2VsZWN0aW9uTW9kZSIsInByb3BUeXBlcyIsImlkIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0lBRXFCQSwwQjs7Ozs7QUFDakIsd0NBQWM7QUFBQTs7QUFBQTs7QUFDVjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxlQUFTLEVBQUU7QUFERixLQUFiO0FBSUEsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQiwrQkFBcEI7QUFOVTtBQU9iOzs7O3dDQUVtQjtBQUNoQixXQUFLQyxRQUFMLENBQWM7QUFBQ0MsWUFBSSxFQUFFLEtBQUtDLEtBQUwsQ0FBV0Q7QUFBbEIsT0FBZDtBQUNIOzs7aUNBRVlFLEksRUFBTTtBQUNmLFVBQUlBLElBQUksQ0FBQ0MsSUFBTCxLQUFjLFFBQWxCLEVBQTRCO0FBQ3hCLGVBQ0ksd0VBQ0k7QUFBSyxtQkFBUyxFQUFDO0FBQWYsV0FBOEJELElBQUksQ0FBQ0UsS0FBbkMsQ0FESixFQUVJO0FBQUssbUJBQVMsRUFBQztBQUFmLFdBQ0k7QUFDSSxhQUFHLEVBQUVGLElBQUksQ0FBQ0YsSUFBTCxDQUFVSyxNQURuQjtBQUVJLGFBQUcsRUFBRUgsSUFBSSxDQUFDRixJQUFMLENBQVVLLE1BRm5CO0FBR0ksZUFBSyxFQUFFO0FBQUNDLGlCQUFLLEVBQUUsTUFBUjtBQUFnQkMsa0JBQU0sRUFBRTtBQUF4QjtBQUhYLFVBREosRUFNSSx3RUFBTUwsSUFBSSxDQUFDRixJQUFMLENBQVVRLElBQWhCLENBTkosQ0FGSixDQURKO0FBYUgsT0FkRCxNQWNPO0FBQ0gsZUFBT04sSUFBSSxDQUFDRSxLQUFaO0FBQ0g7QUFDSjs7OzZCQUVRO0FBQUE7O0FBQ0wsVUFBSSxLQUFLSCxLQUFMLENBQVdRLEtBQVgsQ0FBaUJDLE1BQWpCLElBQTJCLENBQS9CLEVBQWtDO0FBQzlCLGVBQU8sRUFBUDtBQUNIOztBQUNELGFBQ0ksd0VBQ0ksMkRBQUMsbUVBQUQ7QUFDSSxvQkFBWSxFQUFFLEtBQUtiLFlBRHZCO0FBRUksaUJBQVMsRUFBRSxLQUFLRixLQUFMLENBQVdDLFNBRjFCO0FBR0kseUJBQWlCLEVBQUUsMkJBQUFlLEtBQUs7QUFBQSxpQkFDcEIsTUFBSSxDQUFDWixRQUFMLENBQWM7QUFBQ0gscUJBQVMsRUFBRWUsS0FBSyxDQUFDWDtBQUFsQixXQUFkLENBRG9CO0FBQUE7QUFINUIsU0FNUSxLQUFLQyxLQU5iLEVBREosQ0FESjtBQVlIOzs7O0VBbERtRFcsK0M7OztBQXFEeERsQiwwQkFBMEIsQ0FBQ21CLFlBQTNCLEdBQTBDO0FBQ3RDSixPQUFLLEVBQUUsRUFEK0I7QUFFdENLLGVBQWEsRUFBRTtBQUZ1QixDQUExQztBQUtBcEIsMEJBQTBCLENBQUNxQixTQUEzQixHQUF1QztBQUNuQzs7O0FBR0FDLElBQUUsRUFBRUMsaURBQVMsQ0FBQ0MsTUFKcUI7QUFLbkNULE9BQUssRUFBRVEsaURBQVMsQ0FBQ0UsS0FMa0I7QUFNbkNMLGVBQWEsRUFBRUcsaURBQVMsQ0FBQ0M7QUFOVSxDQUF2QyxDIiwiZmlsZSI6IjEwYzhlNWUtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgT3JnYW5pemF0aW9uQ2hhcnQgZnJvbSAnLi9Pcmdhbml6YXRpb25DaGFydC5yZWFjdC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZ2FuaXphdGlvbkNoYXJ0Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNlbGVjdGlvbjogW10sXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5ub2RlVGVtcGxhdGUgPSB0aGlzLm5vZGVUZW1wbGF0ZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtkYXRhOiB0aGlzLnByb3BzLmRhdGF9KTtcbiAgICB9XG5cbiAgICBub2RlVGVtcGxhdGUobm9kZSkge1xuICAgICAgICBpZiAobm9kZS50eXBlID09PSAncGVyc29uJykge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vZGUtaGVhZGVyXCI+e25vZGUubGFiZWx9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm9kZS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtub2RlLmRhdGEuYXZhdGFyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17bm9kZS5kYXRhLmF2YXRhcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiAnNjBweCcsIGhlaWdodDogJzYwcHgnfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pntub2RlLmRhdGEubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGUubGFiZWw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnZhbHVlLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPE9yZ2FuaXphdGlvbkNoYXJ0XG4gICAgICAgICAgICAgICAgICAgIG5vZGVUZW1wbGF0ZT17dGhpcy5ub2RlVGVtcGxhdGV9XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbj17dGhpcy5zdGF0ZS5zZWxlY3Rpb259XG4gICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0aW9uQ2hhbmdlPXtldmVudCA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0aW9uOiBldmVudC5kYXRhfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5Pcmdhbml6YXRpb25DaGFydENvbXBvbmVudC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdmFsdWU6IFtdLFxuICAgIHNlbGVjdGlvbk1vZGU6ICdzaW5nbGUnXG59O1xuXG5Pcmdhbml6YXRpb25DaGFydENvbXBvbmVudC5wcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogVGhlIElEIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBjb21wb25lbnQgaW4gRGFzaCBjYWxsYmFja3MuXG4gICAgICovXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdmFsdWU6IFByb3BUeXBlcy5hcnJheSxcbiAgICBzZWxlY3Rpb25Nb2RlOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=