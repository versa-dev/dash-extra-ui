webpackHotUpdateextra_dash_ui_components("main",{

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
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MenubarComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MenubarComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onValueChange", function (e) {
      _this.props.setProps({
        menubarInput: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSearch", function (input) {
      _this.props.setProps({
        searchQuery: input,
        menubarInput: ''
      });
    });

    return _this;
  }

  _createClass(MenubarComponent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          menubarInput = _this$props.menubarInput,
          btnlabel = _this$props.btnlabel,
          btnicon = _this$props.btnicon,
          inputPlaceholder = _this$props.inputPlaceholder;
      var showInputText = this.props.inputTextBox && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Inputtext_InputText__WEBPACK_IMPORTED_MODULE_3__["InputText"], {
        placeholder: inputPlaceholder,
        type: "text",
        value: menubarInput || '',
        onChange: function onChange(e) {
          return _this2.onValueChange(e);
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "p-listbox-filter-icon pi pi-search",
        onClick: function onClick() {
          return _this2.onSearch(menubarInput);
        }
      }));
      var showButton = this.props.button && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
        label: btnlabel,
        icon: btnicon,
        style: {
          marginLeft: 4
        },
        onClick: function onClick() {
          return _this2.props.setProps({
            btnClick: 'logout'
          });
        }
      });
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "content-section implementation"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MenuBar__WEBPACK_IMPORTED_MODULE_4__["Menubar"], {
        model: this.props.model,
        setProps: function setProps(props) {
          return _this2.props.setProps(props);
        } // activeItem={this.props.activeItem}

      }, showInputText, showButton));
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
  inputTextBox: true,
  button: true,
  searchQuery: null,
  menubarInput: null,
  btnClick: null
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

  /**
   * Show or hide input text box
   */
  inputTextBox: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,

  /**
   * Show or hide button
   */
  button: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  searchQuery: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  menubarInput: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  btnClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  /**
   * Callback function
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvTWVudUJhci9NZW51QmFyQ29tcG9uZW50LmpzIl0sIm5hbWVzIjpbIk1lbnViYXJDb21wb25lbnQiLCJlIiwicHJvcHMiLCJzZXRQcm9wcyIsIm1lbnViYXJJbnB1dCIsInRhcmdldCIsInZhbHVlIiwiaW5wdXQiLCJzZWFyY2hRdWVyeSIsImJ0bmxhYmVsIiwiYnRuaWNvbiIsImlucHV0UGxhY2Vob2xkZXIiLCJzaG93SW5wdXRUZXh0IiwiaW5wdXRUZXh0Qm94Iiwib25WYWx1ZUNoYW5nZSIsIm9uU2VhcmNoIiwic2hvd0J1dHRvbiIsImJ1dHRvbiIsIm1hcmdpbkxlZnQiLCJidG5DbGljayIsIm1vZGVsIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwiaWQiLCJzdHlsZSIsImNsYXNzTmFtZSIsIm1lbnViYXJJdGVtIiwic3VibWVudWJhckl0ZW0iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJhcnJheSIsIm9iamVjdCIsImJvb2wiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0lBR3FCQSxnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O29FQUNELFVBQUFDLENBQUMsRUFBSTtBQUNqQixZQUFLQyxLQUFMLENBQVdDLFFBQVgsQ0FBb0I7QUFBQ0Msb0JBQVksRUFBRUgsQ0FBQyxDQUFDSSxNQUFGLENBQVNDO0FBQXhCLE9BQXBCO0FBQ0gsSzs7K0RBRVUsVUFBQUMsS0FBSyxFQUFJO0FBQ2hCLFlBQUtMLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQjtBQUFDSyxtQkFBVyxFQUFFRCxLQUFkO0FBQXFCSCxvQkFBWSxFQUFFO0FBQW5DLE9BQXBCO0FBQ0gsSzs7Ozs7Ozs2QkFFUTtBQUFBOztBQUFBLHdCQUN1RCxLQUFL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Qjs7O0FBR0FuQixjQUFZLEVBQUVnQixpREFBUyxDQUFDSSxJQXpDQzs7QUEwQ3pCOzs7QUFHQWhCLFFBQU0sRUFBRVksaURBQVMsQ0FBQ0ksSUE3Q087QUE4Q3pCekIsYUFBVyxFQUFFcUIsaURBQVMsQ0FBQ0MsTUE5Q0U7QUErQ3pCMUIsY0FBWSxFQUFFeUIsaURBQVMsQ0FBQ0MsTUEvQ0M7QUFnRHpCWCxVQUFRLEVBQUVVLGlEQUFTLENBQUNDLE1BaERLOztBQWlEekI7OztBQUdBM0IsVUFBUSxFQUFFMEIsaURBQVMsQ0FBQ0s7QUFwREssQ0FBN0IsQyIsImZpbGUiOiJjNWM0MWY4LW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vQnV0dG9uL0J1dHRvbic7XG5pbXBvcnQge0lucHV0VGV4dH0gZnJvbSAnLi4vSW5wdXR0ZXh0L0lucHV0VGV4dCc7XG5pbXBvcnQge01lbnViYXJ9IGZyb20gJy4vTWVudUJhcic7XG5pbXBvcnQgJy4vTWVudUJhckNvbXBvbmVudC5jc3MnO1xuXG4vKipcbiAqIE1lbnVCYXJDb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudWJhckNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgb25WYWx1ZUNoYW5nZSA9IGUgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLnNldFByb3BzKHttZW51YmFySW5wdXQ6IGUudGFyZ2V0LnZhbHVlfSk7XG4gICAgfTtcblxuICAgIG9uU2VhcmNoID0gaW5wdXQgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLnNldFByb3BzKHtzZWFyY2hRdWVyeTogaW5wdXQsIG1lbnViYXJJbnB1dDogJyd9KTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7bWVudWJhcklucHV0LCBidG5sYWJlbCwgYnRuaWNvbiwgaW5wdXRQbGFjZWhvbGRlcn0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBzaG93SW5wdXRUZXh0ID0gdGhpcy5wcm9wcy5pbnB1dFRleHRCb3ggJiYgKFxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgPElucHV0VGV4dFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17aW5wdXRQbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bWVudWJhcklucHV0IHx8ICcnfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLm9uVmFsdWVDaGFuZ2UoZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLWxpc3Rib3gtZmlsdGVyLWljb24gcGkgcGktc2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5vblNlYXJjaChtZW51YmFySW5wdXQpfVxuICAgICAgICAgICAgICAgID48L3NwYW4+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHNob3dCdXR0b24gPSB0aGlzLnByb3BzLmJ1dHRvbiAmJiAoXG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgbGFiZWw9e2J0bmxhYmVsfVxuICAgICAgICAgICAgICAgIGljb249e2J0bmljb259XG4gICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5MZWZ0OiA0fX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLnNldFByb3BzKHtidG5DbGljazogJ2xvZ291dCd9KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtc2VjdGlvbiBpbXBsZW1lbnRhdGlvblwiPlxuICAgICAgICAgICAgICAgIDxNZW51YmFyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsPXt0aGlzLnByb3BzLm1vZGVsfVxuICAgICAgICAgICAgICAgICAgICBzZXRQcm9wcz17cHJvcHMgPT4gdGhpcy5wcm9wcy5zZXRQcm9wcyhwcm9wcyl9XG4gICAgICAgICAgICAgICAgICAgIC8vIGFjdGl2ZUl0ZW09e3RoaXMucHJvcHMuYWN0aXZlSXRlbX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtzaG93SW5wdXRUZXh0fVxuICAgICAgICAgICAgICAgICAgICB7c2hvd0J1dHRvbn1cbiAgICAgICAgICAgICAgICA8L01lbnViYXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbk1lbnViYXJDb21wb25lbnQuZGVmYXVsdFByb3BzID0ge1xuICAgIGlkOiBudWxsLFxuICAgIG1vZGVsOiBudWxsLFxuICAgIHN0eWxlOiBudWxsLFxuICAgIGNsYXNzTmFtZTogbnVsbCxcbiAgICBzZXRQcm9wczogbnVsbCxcbiAgICBtZW51YmFySXRlbTogbnVsbCxcbiAgICBzdWJtZW51YmFySXRlbTogbnVsbCxcbiAgICBidG5sYWJlbDogJ0xvZ291dCcsXG4gICAgYnRuaWNvbjogJ3BpIHBpLXBvd2VyLW9mZicsXG4gICAgaW5wdXRQbGFjZWhvbGRlcjogJ1NlYXJjaCcsXG4gICAgaW5wdXRUZXh0Qm94OiB0cnVlLFxuICAgIGJ1dHRvbjogdHJ1ZSxcbiAgICBzZWFyY2hRdWVyeTogbnVsbCxcbiAgICBtZW51YmFySW5wdXQ6IG51bGwsXG4gICAgYnRuQ2xpY2s6IG51bGwsXG59O1xuXG5NZW51YmFyQ29tcG9uZW50LnByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBVbmlxdWUgaWRlbnRpZmllciBvZiB0aGUgZWxlbWVudC5cbiAgICAgKi9cbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiBtZW51aXRlbXMuXG4gICAgICovXG4gICAgbW9kZWw6IFByb3BUeXBlcy5hcnJheSxcbiAgICAvKipcbiAgICAgKiBJbmxpbmUgc3R5bGUgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKi9cblxuICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIC8qKlxuICAgICAqIElucHV0IHBsYWNlaG9sZGVyXG4gICAgICovXG4gICAgaW5wdXRQbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKipcbiAgICAgKiBCdXR0b24gSWNvblxuICAgICAqL1xuICAgIGJ0bmljb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICogQnV0dG9uIGxhYmVsXG4gICAgICovXG4gICAgYnRubGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICogU3R5bGUgY2xhc3Mgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICogQ3VycmVudCBNZW51IG9iamVjdFxuICAgICAqL1xuICAgIG1lbnViYXJJdGVtOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIC8qKlxuICAgICAqIEN1cnJlbnRseSBzZWxlY3RlZCBpdGVtXG4gICAgICovXG4gICAgc3VibWVudWJhckl0ZW06IFByb3BUeXBlcy5vYmplY3QsXG4gICAgLyoqXG4gICAgICogU2hvdyBvciBoaWRlIGlucHV0IHRleHQgYm94XG4gICAgICovXG4gICAgaW5wdXRUZXh0Qm94OiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiBTaG93IG9yIGhpZGUgYnV0dG9uXG4gICAgICovXG4gICAgYnV0dG9uOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzZWFyY2hRdWVyeTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBtZW51YmFySW5wdXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYnRuQ2xpY2s6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgZnVuY3Rpb25cbiAgICAgKi9cbiAgICBzZXRQcm9wczogUHJvcFR5cGVzLmZ1bmMsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==