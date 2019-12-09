webpackHotUpdateextra_dash_ui_components("main",{

/***/ "./src/lib/components/PanelMenu/PanelMenuComponent.js":
/*!************************************************************!*\
  !*** ./src/lib/components/PanelMenu/PanelMenuComponent.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PanelMenuComponent; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PanelMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PanelMenu */ "./src/lib/components/PanelMenu/PanelMenu.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




/**
 * PanelMenuComponent
 */

var PanelMenuComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(PanelMenuComponent, _Component);

  function PanelMenuComponent() {
    var _this;

    _classCallCheck(this, PanelMenuComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PanelMenuComponent).call(this));
    _this.state = {};
    return _this;
  }

  _createClass(PanelMenuComponent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "content-section implementation"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PanelMenu__WEBPACK_IMPORTED_MODULE_2__["PanelMenu"], {
        id: this.props.id,
        model: this.props.model,
        style: this.props.style,
        className: this.props.className,
        setProps: function setProps(item) {
          return _this2.props.setProps(item);
        }
      }));
    }
  }]);

  return PanelMenuComponent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


PanelMenuComponent.defaultProps = {
  id: null,
  model: null,
  style: {
    width: '300px'
  },
  className: null,
  setProps: null
};
PanelMenuComponent.propTypes = {
  /**
   * Unique identifier of the element.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  /**
   * An array of menuitems.
   */
  model: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array,

  /**
   * Inline style of the component.
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,

  /**
   * Style class of the component.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  /**
   * callback
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,

  /**
   * Current menuitem
   */
  menuitem: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,

  /**
   * Selected submenu item
   */
  submenu: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvUGFuZWxNZW51L1BhbmVsTWVudUNvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJQYW5lbE1lbnVDb21wb25lbnQiLCJzdGF0ZSIsInByb3BzIiwiaWQiLCJtb2RlbCIsInN0eWxlIiwiY2xhc3NOYW1lIiwiaXRlbSIsInNldFByb3BzIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwid2lkdGgiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJhcnJheSIsIm9iamVjdCIsImZ1bmMiLCJtZW51aXRlbSIsInN1Ym1lbnUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR0E7Ozs7SUFHcUJBLGtCOzs7OztBQUNqQixnQ0FBYztBQUFBOztBQUFBOztBQUNWO0FBQ0EsVUFBS0MsS0FBTCxHQUFhLEVBQWI7QUFGVTtBQUdiOzs7OzZCQUVRO0FBQUE7O0FBQ0wsYUFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJLDJEQUFDLG9EQUFEO0FBQ0ksVUFBRSxFQUFFLEtBQUtDLEtBQUwsQ0FBV0MsRUFEbkI7QUFFSSxhQUFLLEVBQUUsS0FBS0QsS0FBTCxDQUFXRSxLQUZ0QjtBQUdJLGFBQUssRUFBRSxLQUFLRixLQUFMLENBQVdHLEtBSHRCO0FBSUksaUJBQVMsRUFBRSxLQUFLSCxLQUFMLENBQVdJLFNBSjFCO0FBS0ksZ0JBQVEsRUFBRSxrQkFBQUMsSUFBSTtBQUFBLGlCQUFJLE1BQUksQ0FBQ0wsS0FBTCxDQUFXTSxRQUFYLENBQW9CRCxJQUFwQixDQUFKO0FBQUE7QUFMbEIsUUFESixDQURKO0FBV0g7Ozs7RUFsQjJDRSwrQzs7O0FBcUJoRFQsa0JBQWtCLENBQUNVLFlBQW5CLEdBQWtDO0FBQzlCUCxJQUFFLEVBQUUsSUFEMEI7QUFFOUJDLE9BQUssRUFBRSxJQUZ1QjtBQUc5QkMsT0FBSyxFQUFFO0FBQUNNLFNBQUssRUFBRTtBQUFSLEdBSHVCO0FBSTlCTCxXQUFTLEVBQUUsSUFKbUI7QUFLOUJFLFVBQVEsRUFBRTtBQUxvQixDQUFsQztBQVFBUixrQkFBa0IsQ0FBQ1ksU0FBbkIsR0FBK0I7QUFDM0I7OztBQUdBVCxJQUFFLEVBQUVVLGlEQUFTLENBQUNDLE1BSmE7O0FBSzNCOzs7QUFHQVYsT0FBSyxFQUFFUyxpREFBUyxDQUFDRSxLQVJVOztBQVMzQjs7O0FBR0FWLE9BQUssRUFBRVEsaURBQVMsQ0FBQ0csTUFaVTs7QUFhM0I7OztBQUdBVixXQUFTLEVBQUVPLGlEQUFTLENBQUNDLE1BaEJNOztBQWlCM0I7OztBQUdBTixVQUFRLEVBQUVLLGlEQUFTLENBQUNJLElBcEJPOztBQXFCM0I7OztBQUdBQyxVQUFRLEVBQUVMLGlEQUFTLENBQUNHLE1BeEJPOztBQXlCM0I7OztBQUdBRyxTQUFPLEVBQUVOLGlEQUFTLENBQUNHO0FBNUJRLENBQS9CLEMiLCJmaWxlIjoiYjA1NWRmOS1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFBhbmVsTWVudSB9IGZyb20gJy4vUGFuZWxNZW51JztcblxuXG4vKipcbiAqIFBhbmVsTWVudUNvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYW5lbE1lbnVDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge307XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LXNlY3Rpb24gaW1wbGVtZW50YXRpb25cIj5cbiAgICAgICAgICAgICAgICA8UGFuZWxNZW51XG4gICAgICAgICAgICAgICAgICAgIGlkPXt0aGlzLnByb3BzLmlkfVxuICAgICAgICAgICAgICAgICAgICBtb2RlbD17dGhpcy5wcm9wcy5tb2RlbH1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgICAgIHNldFByb3BzPXtpdGVtID0+IHRoaXMucHJvcHMuc2V0UHJvcHMoaXRlbSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuUGFuZWxNZW51Q29tcG9uZW50LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBpZDogbnVsbCxcbiAgICBtb2RlbDogbnVsbCxcbiAgICBzdHlsZToge3dpZHRoOiAnMzAwcHgnfSxcbiAgICBjbGFzc05hbWU6IG51bGwsXG4gICAgc2V0UHJvcHM6IG51bGxcbn07XG5cblBhbmVsTWVudUNvbXBvbmVudC5wcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogVW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIGVsZW1lbnQuXG4gICAgICovXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2YgbWVudWl0ZW1zLlxuICAgICAqL1xuICAgIG1vZGVsOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgLyoqXG4gICAgICogSW5saW5lIHN0eWxlIG9mIHRoZSBjb21wb25lbnQuXG4gICAgICovXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgLyoqXG4gICAgICogU3R5bGUgY2xhc3Mgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICogY2FsbGJhY2tcbiAgICAgKi9cbiAgICBzZXRQcm9wczogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICogQ3VycmVudCBtZW51aXRlbVxuICAgICAqL1xuICAgIG1lbnVpdGVtOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIC8qKlxuICAgICAqIFNlbGVjdGVkIHN1Ym1lbnUgaXRlbVxuICAgICAqL1xuICAgIHN1Ym1lbnU6IFByb3BUeXBlcy5vYmplY3Rcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9