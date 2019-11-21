webpackHotUpdateextra_dash_ui_components("main",{

/***/ "./extra_dash_ui_components/primeicons/fonts/primeicons.eot":
false,

/***/ "./extra_dash_ui_components/primeicons/fonts/primeicons.svg":
false,

/***/ "./extra_dash_ui_components/primeicons/fonts/primeicons.ttf":
false,

/***/ "./extra_dash_ui_components/primeicons/fonts/primeicons.woff":
false,

/***/ "./extra_dash_ui_components/primeicons/primeicons.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js!./extra_dash_ui_components/primeicons/primeicons.css":
false,

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
/* harmony import */ var _extra_dash_ui_components_primereact_primereact_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../extra_dash_ui_components/primereact/primereact.min.css */ "./extra_dash_ui_components/primereact/primereact.min.css");
/* harmony import */ var _extra_dash_ui_components_primereact_primereact_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_extra_dash_ui_components_primereact_primereact_min_css__WEBPACK_IMPORTED_MODULE_5__);
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





 // import '../../../../extra_dash_ui_components/primeicons/primeicons.css';


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvT3JnYW5pemF0aW9uQ2hhcnQvT3JnYW5pemF0aW9uQ2hhcnRDb21wb25lbnQucmVhY3QuanMiXSwibmFtZXMiOlsiT3JnYW5pemF0aW9uQ2hhcnRDb21wb25lbnQiLCJub2RlIiwidHlwZSIsImxhYmVsIiwiZGF0YSIsImF2YXRhciIsIndpZHRoIiwiaGVpZ2h0IiwibmFtZSIsInByb3BzIiwidmFsdWUiLCJsZW5ndGgiLCJzZXRQcm9wcyIsIm5vZGVUZW1wbGF0ZSIsImV2ZW50Iiwic2VsZWN0aW9uIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwiaWQiLCJNYXRoIiwicmFuZG9tIiwic2VsZWN0aW9uTW9kZSIsImNsYXNzTmFtZSIsInN0eWxlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYXJyYXkiLCJpc1JlcXVpcmVkIiwib25lT2YiLCJvbmVPZlR5cGUiLCJvYmplY3QiLCJhcnJheU9mIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUdBOzs7Ozs7OztJQU9xQkEsMEI7Ozs7Ozs7Ozs7Ozs7Ozs7OzttRUFFRixVQUFBQyxJQUFJLEVBQUk7QUFDbkIsVUFBSUEsSUFBSSxDQUFDQyxJQUFMLEtBQWMsUUFBbEIsRUFBNEI7QUFDeEIsZUFDSTtBQUFLLG1CQUFTLEVBQUM7QUFBZixXQUNJO0FBQUssbUJBQVMsRUFBQztBQUFmLFdBQThCRCxJQUFJLENBQUNFLEtBQW5DLENBREosRUFFSTtBQUFLLG1CQUFTLEVBQUM7QUFBZixXQUNJO0FBQ0ksYUFBRyxFQUFFRixJQUFJLENBQUNHLElBQUwsQ0FBVUMsTUFEbkI7QUFFSSxhQUFHLEVBQUVKLElBQUksQ0FBQ0csSUFBTCxDQUFVQyxNQUZuQjtBQUdJLGVBQUssRUFBRTtBQUFDQyxpQkFBSyxFQUFFLE1BQVI7QUFBZ0JDLGtCQUFNLEVBQUU7QUFBeEI7QUFIWCxVQURKLEVBTUksd0VBQU1OLElBQUksQ0FBQ0csSUFBTCxDQUFVSSxJQUFoQixDQU5KLENBRkosQ0FESjtBQWFILE9BZEQsTUFjTztBQUNILGVBQU9QLElBQUksQ0FBQ0UsS0FBWjtBQUNIO0FBQ0osSzs7Ozs7Ozs2QkFFUTtBQUNMLFVBQUksS0FBS00sS0FBTCxDQUFXQyxLQUFYLENBQWlCQyxNQUFqQixJQUEyQixDQUEvQixFQUFrQztBQUM5QixlQUFPLEVBQVA7QUFDSDs7QUFISSxVQUlFQyxRQUpGLEdBSWMsS0FBS0gsS0FKbkIsQ0FJRUcsUUFKRjtBQUtMLGFBQ0ksd0VBQ0ksMkRBQUMsbUVBQUQ7QUFDSSxvQkFBWSxFQUFFLEtBQUtDLFlBRHZCO0FBRUkseUJBQWlCLEVBQUUsMkJBQUFDLEtBQUs7QUFBQSxpQkFDcEJGLFFBQVEsQ0FBQztBQUFDRyxxQkFBUyxFQUFFRCxLQUFLLENBQUNWO0FBQWxCLFdBQUQsQ0FEWTtBQUFBO0FBRjVCLFNBS1EsS0FBS0ssS0FMYixFQURKLENBREo7QUFXSDs7OztFQXRDbURPLCtDOzs7QUF5Q3hEaEIsMEJBQTBCLENBQUNpQixZQUEzQixHQUEwQztBQUN0Q0MsSUFBRSxZQUFLQyxJQUFJLENBQUNDLE1BQUwsRUFBTCxDQURvQztBQUV0Q0MsZUFBYSxFQUFFLElBRnVCO0FBR3RDTixXQUFTLEVBQUUsSUFIMkI7QUFJdENPLFdBQVMsRUFBRSxJQUoyQjtBQUt0Q0MsT0FBSyxFQUFFLElBTCtCO0FBTXRDWCxVQUFRLEVBQUUsb0JBQU0sQ0FBRTtBQU5vQixDQUExQztBQVNBWiwwQkFBMEIsQ0FBQ3dCLFNBQTNCLEdBQXVDO0FBQ25DOzs7QUFHQU4sSUFBRSxFQUFFTyxpREFBUyxDQUFDQyxNQUpxQjs7QUFLbkM7OztBQUdBaEIsT0FBSyxFQUFFZSxpREFBUyxDQUFDRSxLQUFWLENBQWdCQyxVQVJZOztBQVNuQzs7O0FBR0FQLGVBQWEsRUFBRUksaURBQVMsQ0FBQ0ksS0FBVixDQUFnQixDQUFDLFFBQUQsRUFBVyxVQUFYLENBQWhCLENBWm9COztBQWNuQzs7O0FBR0FkLFdBQVMsRUFBRVUsaURBQVMsQ0FBQ0ssU0FBVixDQUFvQixDQUFDTCxpREFBUyxDQUFDTSxNQUFYLEVBQW1CTixpREFBUyxDQUFDTyxPQUFWLENBQWtCUCxpREFBUyxDQUFDTSxNQUE1QixDQUFuQixDQUFwQixDQWpCd0I7O0FBa0JuQzs7O0FBR0FULFdBQVMsRUFBRUcsaURBQVMsQ0FBQ0MsTUFyQmM7O0FBc0JuQzs7O0FBR0FILE9BQUssRUFBRUUsaURBQVMsQ0FBQ00sTUF6QmtCOztBQTBCbkM7Ozs7QUFJQW5CLFVBQVEsRUFBRWEsaURBQVMsQ0FBQ1E7QUE5QmUsQ0FBdkMsQyIsImZpbGUiOiI2NzhlM2UxLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBPcmdhbml6YXRpb25DaGFydCBmcm9tICcuL09yZ2FuaXphdGlvbkNoYXJ0LnJlYWN0LmpzJztcbmltcG9ydCAnLi9Pcmdhbml6YXRpb25DaGFydC5jc3MnO1xuaW1wb3J0ICcuLi8uLi8uLi8uLi9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvbm92YS1saWdodC90aGVtZS5jc3MnO1xuLy8gaW1wb3J0ICcuLi8uLi8uLi8uLi9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvcHJpbWVpY29ucy9wcmltZWljb25zLmNzcyc7XG5pbXBvcnQgJy4uLy4uLy4uLy4uL2V4dHJhX2Rhc2hfdWlfY29tcG9uZW50cy9wcmltZXJlYWN0L3ByaW1lcmVhY3QubWluLmNzcyc7XG5cblxuLyoqXG4gKiBPcmdhbml6YXRpb25DaGFydENvbXBvbmVudCBpcyBhIGNvbXBvbmVudCB0byBuaWNlbHkgZGlzcGxheSBhIGRhdGEgdHJlZS5cbiAqIEl0IHRha2VzIGEgcHJvcGVydHksIGB2YWx1ZWAsIHdoaWNoIGlzIHRoZSBhY3R1YWwgZGF0YSBvYmplY3RcbiAqIGNyZWF0ZXMgYSBoaWVyYWNoeSB0cmVlIHdoaWNoIGlzIHRoZW4gcmVuZGVyZWQuXG4gKiBPdGhlciBpbnB1dHMgYXJlIGBzZWxlY3Rpb25Nb2RlYCwgYHNlbGVjdGlvbmAsIGBjbGFzc05hbWVgIGFuZCBgc3R5bGVgXG4gKiB3aGljaCBhcmUgb3B0aW9uYWwuIERlZmF1bHRzIHdpbGwgYmUgYXBwbGllZCB1bmxlc3MgcHJvdmlkZWQgYnkgdGhlIHVzZXIuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZ2FuaXphdGlvbkNoYXJ0Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIG5vZGVUZW1wbGF0ZSA9IG5vZGUgPT4ge1xuICAgICAgICBpZiAobm9kZS50eXBlID09PSAncGVyc29uJykge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vZGUtY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vZGUtaGVhZGVyXCI+e25vZGUubGFiZWx9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm9kZS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtub2RlLmRhdGEuYXZhdGFyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17bm9kZS5kYXRhLmF2YXRhcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiAnNjBweCcsIGhlaWdodDogJzYwcHgnfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pntub2RlLmRhdGEubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGUubGFiZWw7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy52YWx1ZS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHtzZXRQcm9wc30gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8T3JnYW5pemF0aW9uQ2hhcnRcbiAgICAgICAgICAgICAgICAgICAgbm9kZVRlbXBsYXRlPXt0aGlzLm5vZGVUZW1wbGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Rpb25DaGFuZ2U9e2V2ZW50ID0+XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQcm9wcyh7c2VsZWN0aW9uOiBldmVudC5kYXRhfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5Pcmdhbml6YXRpb25DaGFydENvbXBvbmVudC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgaWQ6IGAke01hdGgucmFuZG9tKCl9YCxcbiAgICBzZWxlY3Rpb25Nb2RlOiBudWxsLFxuICAgIHNlbGVjdGlvbjogbnVsbCxcbiAgICBjbGFzc05hbWU6IG51bGwsXG4gICAgc3R5bGU6IG51bGwsXG4gICAgc2V0UHJvcHM6ICgpID0+IHt9LFxufTtcblxuT3JnYW5pemF0aW9uQ2hhcnRDb21wb25lbnQucHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIFRoZSBJRCB1c2VkIHRvIGlkZW50aWZ5IHRoaXMgY29tcG9uZW50IGluIERhc2ggY2FsbGJhY2tzLlxuICAgICAqL1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIG5lc3RlZCBUcmVlTm9kZXNcbiAgICAgKi9cbiAgICB2YWx1ZTogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gICAgLyoqXG4gICAgICogRGVmaW5lcyB0aGUgc2VsZWN0aW9uIG1vZGUsIHZhbGlkIHZhbHVlcyBcInNpbmdsZVwiIG9yIFwibXVsdGlwbGVcIi5cbiAgICAgKi9cbiAgICBzZWxlY3Rpb25Nb2RlOiBQcm9wVHlwZXMub25lT2YoWydzaW5nbGUnLCAnbXVsdGlwbGUnXSksXG5cbiAgICAvKipcbiAgICAgKiBBIHNpbmdsZSB0cmVlbm9kZSBpbnN0YW5jZSBvciBhbiBhcnJheSB0byByZWZlciB0byB0aGUgc2VsZWN0aW9ucy5cbiAgICAgKi9cbiAgICBzZWxlY3Rpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpXSksXG4gICAgLyoqXG4gICAgICogU3R5bGUgY2xhc3Mgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICogSW5saW5lIHN0eWxlIG9mIHRoZSBjb21wb25lbnQuXG4gICAgICovXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgLyoqXG4gICAgICogRGFzaC1hc3NpZ25lZCBjYWxsYmFjayB0aGF0IHNob3VsZCBiZSBjYWxsZWQgdG8gcmVwb3J0IHByb3BlcnR5IGNoYW5nZXNcbiAgICAgKiB0byBEYXNoLCB0byBtYWtlIHRoZW0gYXZhaWxhYmxlIGZvciBjYWxsYmFja3MuXG4gICAgICovXG4gICAgc2V0UHJvcHM6IFByb3BUeXBlcy5mdW5jLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=