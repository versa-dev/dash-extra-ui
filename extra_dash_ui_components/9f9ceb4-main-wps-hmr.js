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
/* harmony import */ var _OrganizationChart_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OrganizationChart.css */ "./src/lib/components/OrganizationChart/OrganizationChart.css");
/* harmony import */ var _OrganizationChart_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_OrganizationChart_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _extra_dash_ui_components_nova_light_theme_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../extra_dash_ui_components/nova-light/theme.css */ "./extra_dash_ui_components/nova-light/theme.css");
/* harmony import */ var _extra_dash_ui_components_nova_light_theme_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_extra_dash_ui_components_nova_light_theme_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _extra_dash_ui_components_primeicons_primeicons_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../extra_dash_ui_components/primeicons/primeicons.css */ "./extra_dash_ui_components/primeicons/primeicons.css");
/* harmony import */ var _extra_dash_ui_components_primeicons_primeicons_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_extra_dash_ui_components_primeicons_primeicons_css__WEBPACK_IMPORTED_MODULE_5__);
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







/**
 * OrganizationChartComponent is a component to nicely display a data tree.
 * It takes a property, `value`, which is the actual data object
 * creates a hierachy tree which is then rendered.
 * Other inputs are `selectionMode`, `selection`, `className` and `style`
 * which are optional. Defaults will be applied unless provided by the user.
 */

var OrganizationChartComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(OrganizationChartComponent, _Component);

  function OrganizationChartComponent() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, OrganizationChartComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(OrganizationChartComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "nodeTemplate", function (node) {
      if (node.type === 'person') {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "node-card"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
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
    });

    return _this;
  }

  _createClass(OrganizationChartComponent, [{
    key: "render",
    value: function render() {
      if (this.props.value.length == 0) {
        return '';
      }

      var setProps = this.props.setProps;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_OrganizationChart_react_js__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
        nodeTemplate: this.nodeTemplate,
        onSelectionChange: function onSelectionChange(event) {
          return setProps({
            selection: event.data
          });
        }
      }, this.props)));
    }
  }]);

  return OrganizationChartComponent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


OrganizationChartComponent.defaultProps = {
  id: "".concat(Math.random()),
  selectionMode: null,
  selection: null,
  className: null,
  style: null,
  setProps: function setProps() {}
};
OrganizationChartComponent.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  /**
   * An array of nested TreeNodes
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array.isRequired,

  /**
   * Defines the selection mode, valid values "single" or "multiple".
   */
  selectionMode: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['single', 'multiple']),

  /**
   * A single treenode instance or an array to refer to the selections.
   */
  selection: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object)]),

  /**
   * Style class of the component.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  /**
   * Inline style of the component.
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvT3JnYW5pemF0aW9uQ2hhcnQvT3JnYW5pemF0aW9uQ2hhcnRDb21wb25lbnQucmVhY3QuanMiXSwibmFtZXMiOlsiT3JnYW5pemF0aW9uQ2hhcnRDb21wb25lbnQiLCJub2RlIiwidHlwZSIsImxhYmVsIiwiZGF0YSIsImF2YXRhciIsIndpZHRoIiwiaGVpZ2h0IiwibmFtZSIsInByb3BzIiwidmFsdWUiLCJsZW5ndGgiLCJzZXRQcm9wcyIsIm5vZGVUZW1wbGF0ZSIsImV2ZW50Iiwic2VsZWN0aW9uIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwiaWQiLCJNYXRoIiwicmFuZG9tIiwic2VsZWN0aW9uTW9kZSIsImNsYXNzTmFtZSIsInN0eWxlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYXJyYXkiLCJpc1JlcXVpcmVkIiwib25lT2YiLCJvbmVPZlR5cGUiLCJvYmplY3QiLCJhcnJheU9mIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7Ozs7Ozs7O0lBT3FCQSwwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O21FQUVGLFVBQUFDLElBQUksRUFBSTtBQUNuQixVQUFJQSxJQUFJLENBQUNDLElBQUwsS0FBYyxRQUFsQixFQUE0QjtBQUN4QixlQUNJO0FBQUssbUJBQVMsRUFBQztBQUFmLFdBQ0k7QUFBSyxtQkFBUyxFQUFDO0FBQWYsV0FBOEJELElBQUksQ0FBQ0UsS0FBbkMsQ0FESixFQUVJO0FBQUssbUJBQVMsRUFBQztBQUFmLFdBQ0k7QUFDSSxhQUFHLEVBQUVGLElBQUksQ0FBQ0csSUFBTCxDQUFVQyxNQURuQjtBQUVJLGFBQUcsRUFBRUosSUFBSSxDQUFDRyxJQUFMLENBQVVDLE1BRm5CO0FBR0ksZUFBSyxFQUFFO0FBQUNDLGlCQUFLLEVBQUUsTUFBUjtBQUFnQkMsa0JBQU0sRUFBRTtBQUF4QjtBQUhYLFVBREosRUFNSSx3RUFBTU4sSUFBSSxDQUFDRyxJQUFMLENBQVVJLElBQWhCLENBTkosQ0FGSixDQURKO0FBYUgsT0FkRCxNQWNPO0FBQ0gsZUFBT1AsSUFBSSxDQUFDRSxLQUFaO0FBQ0g7QUFDSixLOzs7Ozs7OzZCQUVRO0FBQ0wsVUFBSSxLQUFLTSxLQUFMLENBQVdDLEtBQVgsQ0FBaUJDLE1BQWpCLElBQTJCLENBQS9CLEVBQWtDO0FBQzlCLGVBQU8sRUFBUDtBQUNIOztBQUhJLFVBSUVDLFFBSkYsR0FJYyxLQUFLSCxLQUpuQixDQUlFRyxRQUpGO0FBS0wsYUFDSSx3RUFDSSwyREFBQyxtRUFBRDtBQUNJLG9CQUFZLEVBQUUsS0FBS0MsWUFEdkI7QUFFSSx5QkFBaUIsRUFBRSwyQkFBQUMsS0FBSztBQUFBLGlCQUNwQkYsUUFBUSxDQUFDO0FBQUNHLHFCQUFTLEVBQUVELEtBQUssQ0FBQ1Y7QUFBbEIsV0FBRCxDQURZO0FBQUE7QUFGNUIsU0FLUSxLQUFLSyxLQUxiLEVBREosQ0FESjtBQVdIOzs7O0VBdENtRE8sK0M7OztBQXlDeERoQiwwQkFBMEIsQ0FBQ2lCLFlBQTNCLEdBQTBDO0FBQ3RDQyxJQUFFLFlBQUtDLElBQUksQ0FBQ0MsTUFBTCxFQUFMLENBRG9DO0FBRXRDQyxlQUFhLEVBQUUsSUFGdUI7QUFHdENOLFdBQVMsRUFBRSxJQUgyQjtBQUl0Q08sV0FBUyxFQUFFLElBSjJCO0FBS3RDQyxPQUFLLEVBQUUsSUFMK0I7QUFNdENYLFVBQVEsRUFBRSxvQkFBTSxDQUFFO0FBTm9CLENBQTFDO0FBU0FaLDBCQUEwQixDQUFDd0IsU0FBM0IsR0FBdUM7QUFDbkM7OztBQUdBTixJQUFFLEVBQUVPLGlEQUFTLENBQUNDLE1BSnFCOztBQUtuQzs7O0FBR0FoQixPQUFLLEVBQUVlLGlEQUFTLENBQUNFLEtBQVYsQ0FBZ0JDLFVBUlk7O0FBU25DOzs7QUFHQVAsZUFBYSxFQUFFSSxpREFBUyxDQUFDSSxLQUFWLENBQWdCLENBQUMsUUFBRCxFQUFXLFVBQVgsQ0FBaEIsQ0Fab0I7O0FBY25DOzs7QUFHQWQsV0FBUyxFQUFFVSxpREFBUyxDQUFDSyxTQUFWLENBQW9CLENBQUNMLGlEQUFTLENBQUNNLE1BQVgsRUFBbUJOLGlEQUFTLENBQUNPLE9BQVYsQ0FBa0JQLGlEQUFTLENBQUNNLE1BQTVCLENBQW5CLENBQXBCLENBakJ3Qjs7QUFrQm5DOzs7QUFHQVQsV0FBUyxFQUFFRyxpREFBUyxDQUFDQyxNQXJCYzs7QUFzQm5DOzs7QUFHQUgsT0FBSyxFQUFFRSxpREFBUyxDQUFDTSxNQXpCa0I7O0FBMEJuQzs7OztBQUlBbkIsVUFBUSxFQUFFYSxpREFBUyxDQUFDUTtBQTlCZSxDQUF2QyxDIiwiZmlsZSI6IjlmOWNlYjQtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE9yZ2FuaXphdGlvbkNoYXJ0IGZyb20gJy4vT3JnYW5pemF0aW9uQ2hhcnQucmVhY3QuanMnO1xuaW1wb3J0ICcuL09yZ2FuaXphdGlvbkNoYXJ0LmNzcyc7XG5pbXBvcnQgJy4uLy4uLy4uLy4uL2V4dHJhX2Rhc2hfdWlfY29tcG9uZW50cy9ub3ZhLWxpZ2h0L3RoZW1lLmNzcyc7XG5pbXBvcnQgJy4uLy4uLy4uLy4uL2V4dHJhX2Rhc2hfdWlfY29tcG9uZW50cy9wcmltZWljb25zL3ByaW1laWNvbnMuY3NzJztcblxuXG4vKipcbiAqIE9yZ2FuaXphdGlvbkNoYXJ0Q29tcG9uZW50IGlzIGEgY29tcG9uZW50IHRvIG5pY2VseSBkaXNwbGF5IGEgZGF0YSB0cmVlLlxuICogSXQgdGFrZXMgYSBwcm9wZXJ0eSwgYHZhbHVlYCwgd2hpY2ggaXMgdGhlIGFjdHVhbCBkYXRhIG9iamVjdFxuICogY3JlYXRlcyBhIGhpZXJhY2h5IHRyZWUgd2hpY2ggaXMgdGhlbiByZW5kZXJlZC5cbiAqIE90aGVyIGlucHV0cyBhcmUgYHNlbGVjdGlvbk1vZGVgLCBgc2VsZWN0aW9uYCwgYGNsYXNzTmFtZWAgYW5kIGBzdHlsZWBcbiAqIHdoaWNoIGFyZSBvcHRpb25hbC4gRGVmYXVsdHMgd2lsbCBiZSBhcHBsaWVkIHVubGVzcyBwcm92aWRlZCBieSB0aGUgdXNlci5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JnYW5pemF0aW9uQ2hhcnRDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgbm9kZVRlbXBsYXRlID0gbm9kZSA9PiB7XG4gICAgICAgIGlmIChub2RlLnR5cGUgPT09ICdwZXJzb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm9kZS1jYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm9kZS1oZWFkZXJcIj57bm9kZS5sYWJlbH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJub2RlLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e25vZGUuZGF0YS5hdmF0YXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtub2RlLmRhdGEuYXZhdGFyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6ICc2MHB4JywgaGVpZ2h0OiAnNjBweCd9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e25vZGUuZGF0YS5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZS5sYWJlbDtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnZhbHVlLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qge3NldFByb3BzfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxPcmdhbml6YXRpb25DaGFydFxuICAgICAgICAgICAgICAgICAgICBub2RlVGVtcGxhdGU9e3RoaXMubm9kZVRlbXBsYXRlfVxuICAgICAgICAgICAgICAgICAgICBvblNlbGVjdGlvbkNoYW5nZT17ZXZlbnQgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFByb3BzKHtzZWxlY3Rpb246IGV2ZW50LmRhdGF9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbk9yZ2FuaXphdGlvbkNoYXJ0Q29tcG9uZW50LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBpZDogYCR7TWF0aC5yYW5kb20oKX1gLFxuICAgIHNlbGVjdGlvbk1vZGU6IG51bGwsXG4gICAgc2VsZWN0aW9uOiBudWxsLFxuICAgIGNsYXNzTmFtZTogbnVsbCxcbiAgICBzdHlsZTogbnVsbCxcbiAgICBzZXRQcm9wczogKCkgPT4ge30sXG59O1xuXG5Pcmdhbml6YXRpb25DaGFydENvbXBvbmVudC5wcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogVGhlIElEIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBjb21wb25lbnQgaW4gRGFzaCBjYWxsYmFja3MuXG4gICAgICovXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2YgbmVzdGVkIFRyZWVOb2Rlc1xuICAgICAqL1xuICAgIHZhbHVlOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIHRoZSBzZWxlY3Rpb24gbW9kZSwgdmFsaWQgdmFsdWVzIFwic2luZ2xlXCIgb3IgXCJtdWx0aXBsZVwiLlxuICAgICAqL1xuICAgIHNlbGVjdGlvbk1vZGU6IFByb3BUeXBlcy5vbmVPZihbJ3NpbmdsZScsICdtdWx0aXBsZSddKSxcblxuICAgIC8qKlxuICAgICAqIEEgc2luZ2xlIHRyZWVub2RlIGluc3RhbmNlIG9yIGFuIGFycmF5IHRvIHJlZmVyIHRvIHRoZSBzZWxlY3Rpb25zLlxuICAgICAqL1xuICAgIHNlbGVjdGlvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCldKSxcbiAgICAvKipcbiAgICAgKiBTdHlsZSBjbGFzcyBvZiB0aGUgY29tcG9uZW50LlxuICAgICAqL1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKipcbiAgICAgKiBJbmxpbmUgc3R5bGUgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAvKipcbiAgICAgKiBEYXNoLWFzc2lnbmVkIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB0byByZXBvcnQgcHJvcGVydHkgY2hhbmdlc1xuICAgICAqIHRvIERhc2gsIHRvIG1ha2UgdGhlbSBhdmFpbGFibGUgZm9yIGNhbGxiYWNrcy5cbiAgICAgKi9cbiAgICBzZXRQcm9wczogUHJvcFR5cGVzLmZ1bmMsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==