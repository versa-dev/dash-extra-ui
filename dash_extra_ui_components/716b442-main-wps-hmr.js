webpackHotUpdatedash_extra_ui_components("main",{

/***/ "./src/lib/components/MenuBar/MenuBarComponent.js":
/*!********************************************************!*\
  !*** ./src/lib/components/MenuBar/MenuBarComponent.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MenubarComponent; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button/Button */ "./src/lib/components/Button/Button.js");
/* harmony import */ var _Inputtext_InputText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Inputtext/InputText */ "./src/lib/components/Inputtext/InputText.js");
/* harmony import */ var _MenuBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MenuBar */ "./src/lib/components/MenuBar/MenuBar.js");
/* harmony import */ var _MenuBarComponent_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MenuBarComponent.css */ "./src/lib/components/MenuBar/MenuBarComponent.css");
/* harmony import */ var _MenuBarComponent_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_MenuBarComponent_css__WEBPACK_IMPORTED_MODULE_5__);
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







/**
 * MenuBarComponent
 */

var MenubarComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(MenubarComponent, _Component);

  function MenubarComponent() {
    var _this;

    _classCallCheck(this, MenubarComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MenubarComponent).call(this));

    _defineProperty(_assertThisInitialized(_this), "onValueChange", function (e) {
      console.log(e.target.value);
    });

    return _this;
  }

  _createClass(MenubarComponent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var inputText = this.props.inputText && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Inputtext_InputText__WEBPACK_IMPORTED_MODULE_3__["InputText"], {
        placeholder: this.props.inputPlaceholder,
        type: "text",
        role: "textbox" // value={this.props.menubarInput}
        ,
        onChange: this.onValueChange
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "p-listbox-filter-icon pi pi-search"
      }));
      var button = this.props.button && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
        label: this.props.btnlabel,
        icon: this.props.btnicon,
        style: {
          marginLeft: 4
        }
      });
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "content-section implementation"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MenuBar__WEBPACK_IMPORTED_MODULE_4__["Menubar"], {
        model: this.props.model,
        setProps: function setProps(props) {
          return _this2.props.setProps(props);
        } // activeItem={this.props.activeItem}

      }, inputText, button));
    }
  }]);

  return MenubarComponent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


MenubarComponent.defaultProps = {
  id: null,
  model: null,
  style: null,
  className: null,
  setProps: null,
  menubarItem: null,
  submenubarItem: null,
  btnlabel: 'Logout',
  btnicon: 'pi pi-power-off',
  inputPlaceholder: 'Search',
  inputText: true,
  button: true
};
MenubarComponent.propTypes = {
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
   * Input placeholder
   */
  inputPlaceholder: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  /**
   * Button Icon
   */
  btnicon: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  /**
   * Button label
   */
  btnlabel: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  /**
   * Style class of the component.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  /**
   * Current Menu object
   */
  menubarItem: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,

  /**
   * Currently selected item
   */
  submenubarItem: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  inputText: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  button: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,

  /**
   * Callback function
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvTWVudUJhci9NZW51QmFyQ29tcG9uZW50LmpzIl0sIm5hbWVzIjpbIk1lbnViYXJDb21wb25lbnQiLCJlIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwiaW5wdXRUZXh0IiwicHJvcHMiLCJpbnB1dFBsYWNlaG9sZGVyIiwib25WYWx1ZUNoYW5nZSIsImJ1dHRvbiIsImJ0bmxhYmVsIiwiYnRuaWNvbiIsIm1hcmdpbkxlZnQiLCJtb2RlbCIsInNldFByb3BzIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwiaWQiLCJzdHlsZSIsImNsYXNzTmFtZSIsIm1lbnViYXJJdGVtIiwic3VibWVudWJhckl0ZW0iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJhcnJheSIsIm9iamVjdCIsImJvb2wiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0lBR3FCQSxnQjs7Ozs7QUFDakIsOEJBQWM7QUFBQTs7QUFBQTs7QUFDVjs7QUFEVSxvRUFJRSxVQUFBQyxDQUFDLEVBQUk7QUFDakJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFDLENBQUNHLE1BQUYsQ0FBU0MsS0FBckI7QUFDSCxLQU5hOztBQUFBO0FBRWI7Ozs7NkJBTVE7QUFBQTs7QUFDTCxVQUFNQyxTQUFTLEdBQUcsS0FBS0MsS0FBTCxDQUFXRCxTQUFYLElBQ2Q7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSSwyREFBQyw4REFBRDtBQUNJLG1CQUFXLEVBQUUsS0FBS0MsS0FBTCxDQUFXQyxnQkFENUI7QUFFSSxZQUFJLEVBQUMsTUFGVDtBQUdJLFlBQUksRUFBQyxTQUhULENBSUk7QUFKSjtBQUtJLGdCQUFRLEVBQUUsS0FBS0M7QUFMbkIsUUFESixFQVFJO0FBQU0saUJBQVMsRUFBQztBQUFoQixRQVJKLENBREo7QUFZQSxVQUFNQyxNQUFNLEdBQUcsS0FBS0gsS0FBTCxDQUFXRyxNQUFYLElBQ1gsMkRBQUMsc0RBQUQ7QUFDSSxhQUFLLEVBQUUsS0FBS0gsS0FBTCxDQUFXSSxRQUR0QjtBQUVJLFlBQUksRUFBRSxLQUFLSixLQUFMLENBQVdLLE9BRnJCO0FBR0ksYUFBSyxFQUFFO0FBQUNDLG9CQUFVLEVBQUU7QUFBYjtBQUhYLFFBREo7QUFPQSxhQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0ksMkRBQUMsZ0RBQUQ7QUFDSSxhQUFLLEVBQUUsS0FBS04sS0FBTCxDQUFXTyxLQUR0QjtBQUVJLGdCQUFRLEVBQUUsa0JBQUFQLEtBQUs7QUFBQSxpQkFBSSxNQUFJLENBQUNBLEtBQUwsQ0FBV1EsUUFBWCxDQUFvQlIsS0FBcEIsQ0FBSjtBQUFBLFNBRm5CLENBR0k7O0FBSEosU0FLS0QsU0FMTCxFQU1LSSxNQU5MLENBREosQ0FESjtBQVlIOzs7O0VBekN5Q00sK0M7OztBQTRDOUNoQixnQkFBZ0IsQ0FBQ2lCLFlBQWpCLEdBQWdDO0FBQzVCQyxJQUFFLEVBQUUsSUFEd0I7QUFFNUJKLE9BQUssRUFBRSxJQUZxQjtBQUc1QkssT0FBSyxFQUFFLElBSHFCO0FBSTVCQyxXQUFTLEVBQUUsSUFKaUI7QUFLNUJMLFVBQVEsRUFBRSxJQUxrQjtBQU01Qk0sYUFBVyxFQUFFLElBTmU7QUFPNUJDLGdCQUFjLEVBQUUsSUFQWTtBQVE1QlgsVUFBUSxFQUFFLFFBUmtCO0FBUzVCQyxTQUFPLEVBQUUsaUJBVG1CO0FBVTVCSixrQkFBZ0IsRUFBRSxRQVZVO0FBVzVCRixXQUFTLEVBQUUsSUFYaUI7QUFZNUJJLFFBQU0sRUFBRTtBQVpvQixDQUFoQztBQWVBVixnQkFBZ0IsQ0FBQ3VCLFNBQWpCLEdBQTZCO0FBQ3pCOzs7QUFHQUwsSUFBRSxFQUFFTSxpREFBUyxDQUFDQyxNQUpXOztBQUt6Qjs7O0FBR0FYLE9BQUssRUFBRVUsaURBQVMsQ0FBQ0UsS0FSUTs7QUFTekI7OztBQUlBUCxPQUFLLEVBQUVLLGlEQUFTLENBQUNHLE1BYlE7O0FBY3pCOzs7QUFHQW5CLGtCQUFnQixFQUFFZ0IsaURBQVMsQ0FBQ0MsTUFqQkg7O0FBa0J6Qjs7O0FBR0FiLFNBQU8sRUFBRVksaURBQVMsQ0FBQ0MsTUFyQk07O0FBc0J6Qjs7O0FBR0FkLFVBQVEsRUFBRWEsaURBQVMsQ0FBQ0MsTUF6Qks7O0FBMEJ6Qjs7O0FBR0FMLFdBQVMsRUFBRUksaURBQVMsQ0FBQ0MsTUE3Qkk7O0FBOEJ6Qjs7O0FBR0FKLGFBQVcsRUFBRUcsaURBQVMsQ0FBQ0csTUFqQ0U7O0FBa0N6Qjs7O0FBR0FMLGdCQUFjLEVBQUVFLGlEQUFTLENBQUNHLE1BckNEO0FBc0N6QnJCLFdBQVMsRUFBRWtCLGlEQUFTLENBQUNJLElBdENJO0FBdUN6QmxCLFFBQU0sRUFBRWMsaURBQVMsQ0FBQ0ksSUF2Q087O0FBd0N6Qjs7O0FBR0FiLFVBQVEsRUFBRVMsaURBQVMsQ0FBQ0s7QUEzQ0ssQ0FBN0IsQyIsImZpbGUiOiI3MTZiNDQyLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vQnV0dG9uL0J1dHRvbic7XG5pbXBvcnQge0lucHV0VGV4dH0gZnJvbSAnLi4vSW5wdXR0ZXh0L0lucHV0VGV4dCc7XG5pbXBvcnQge01lbnViYXJ9IGZyb20gJy4vTWVudUJhcic7XG5pbXBvcnQgJy4vTWVudUJhckNvbXBvbmVudC5jc3MnO1xuXG4vKipcbiAqIE1lbnVCYXJDb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudWJhckNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgb25WYWx1ZUNoYW5nZSA9IGUgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgaW5wdXRUZXh0ID0gdGhpcy5wcm9wcy5pbnB1dFRleHQgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICA8SW5wdXRUZXh0XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLmlucHV0UGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgcm9sZT1cInRleHRib3hcIlxuICAgICAgICAgICAgICAgICAgICAvLyB2YWx1ZT17dGhpcy5wcm9wcy5tZW51YmFySW5wdXR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uVmFsdWVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwLWxpc3Rib3gtZmlsdGVyLWljb24gcGkgcGktc2VhcmNoXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMucHJvcHMuYnV0dG9uICYmIChcbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBsYWJlbD17dGhpcy5wcm9wcy5idG5sYWJlbH1cbiAgICAgICAgICAgICAgICBpY29uPXt0aGlzLnByb3BzLmJ0bmljb259XG4gICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5MZWZ0OiA0fX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtc2VjdGlvbiBpbXBsZW1lbnRhdGlvblwiPlxuICAgICAgICAgICAgICAgIDxNZW51YmFyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsPXt0aGlzLnByb3BzLm1vZGVsfVxuICAgICAgICAgICAgICAgICAgICBzZXRQcm9wcz17cHJvcHMgPT4gdGhpcy5wcm9wcy5zZXRQcm9wcyhwcm9wcyl9XG4gICAgICAgICAgICAgICAgICAgIC8vIGFjdGl2ZUl0ZW09e3RoaXMucHJvcHMuYWN0aXZlSXRlbX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtpbnB1dFRleHR9XG4gICAgICAgICAgICAgICAgICAgIHtidXR0b259XG4gICAgICAgICAgICAgICAgPC9NZW51YmFyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5NZW51YmFyQ29tcG9uZW50LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBpZDogbnVsbCxcbiAgICBtb2RlbDogbnVsbCxcbiAgICBzdHlsZTogbnVsbCxcbiAgICBjbGFzc05hbWU6IG51bGwsXG4gICAgc2V0UHJvcHM6IG51bGwsXG4gICAgbWVudWJhckl0ZW06IG51bGwsXG4gICAgc3VibWVudWJhckl0ZW06IG51bGwsXG4gICAgYnRubGFiZWw6ICdMb2dvdXQnLFxuICAgIGJ0bmljb246ICdwaSBwaS1wb3dlci1vZmYnLFxuICAgIGlucHV0UGxhY2Vob2xkZXI6ICdTZWFyY2gnLFxuICAgIGlucHV0VGV4dDogdHJ1ZSxcbiAgICBidXR0b246IHRydWUsXG59O1xuXG5NZW51YmFyQ29tcG9uZW50LnByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBVbmlxdWUgaWRlbnRpZmllciBvZiB0aGUgZWxlbWVudC5cbiAgICAgKi9cbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiBtZW51aXRlbXMuXG4gICAgICovXG4gICAgbW9kZWw6IFByb3BUeXBlcy5hcnJheSxcbiAgICAvKipcbiAgICAgKiBJbmxpbmUgc3R5bGUgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKi9cblxuICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIC8qKlxuICAgICAqIElucHV0IHBsYWNlaG9sZGVyXG4gICAgICovXG4gICAgaW5wdXRQbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKipcbiAgICAgKiBCdXR0b24gSWNvblxuICAgICAqL1xuICAgIGJ0bmljb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICogQnV0dG9uIGxhYmVsXG4gICAgICovXG4gICAgYnRubGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICogU3R5bGUgY2xhc3Mgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICogQ3VycmVudCBNZW51IG9iamVjdFxuICAgICAqL1xuICAgIG1lbnViYXJJdGVtOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIC8qKlxuICAgICAqIEN1cnJlbnRseSBzZWxlY3RlZCBpdGVtXG4gICAgICovXG4gICAgc3VibWVudWJhckl0ZW06IFByb3BUeXBlcy5vYmplY3QsXG4gICAgaW5wdXRUZXh0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBidXR0b246IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIGZ1bmN0aW9uXG4gICAgICovXG4gICAgc2V0UHJvcHM6IFByb3BUeXBlcy5mdW5jLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=