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

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







/**
 * MenuBarComponent
 */

var MenubarComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(MenubarComponent, _Component);

  function MenubarComponent() {
    _classCallCheck(this, MenubarComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(MenubarComponent).call(this));
  }

  _createClass(MenubarComponent, [{
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "content-section implementation"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MenuBar__WEBPACK_IMPORTED_MODULE_4__["Menubar"], {
        model: this.props.model,
        setProps: function setProps(props) {
          return _this.props.setProps(props);
        },
        activeItem: this.props.activeItem
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Inputtext_InputText__WEBPACK_IMPORTED_MODULE_3__["InputText"], {
        placeholder: this.props.inputPlaceholder,
        type: "text"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
        label: this.props.btnlabel,
        icon: this.props.btnicon,
        style: {
          marginLeft: 4
        }
      })));
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
  menuItem: null,
  activeItem: null
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
   * Style class of the component.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  /**
   * Current Menu object
   */
  menuItem: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,

  /**
   * Currently selected item
   */
  activeItem: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,

  /**
   * Callback function
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvTWVudUJhci9NZW51QmFyQ29tcG9uZW50LmpzIl0sIm5hbWVzIjpbIk1lbnViYXJDb21wb25lbnQiLCJwcm9wcyIsIm1vZGVsIiwic2V0UHJvcHMiLCJhY3RpdmVJdGVtIiwiaW5wdXRQbGFjZWhvbGRlciIsImJ0bmxhYmVsIiwiYnRuaWNvbiIsIm1hcmdpbkxlZnQiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJpZCIsInN0eWxlIiwiY2xhc3NOYW1lIiwibWVudUl0ZW0iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJhcnJheSIsIm9iamVjdCIsImZ1bmMiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztJQUdxQkEsZ0I7Ozs7O0FBQ2pCLDhCQUFjO0FBQUE7O0FBQUE7QUFFYjs7Ozs2QkFFUTtBQUFBOztBQUNMLGFBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSSwyREFBQyxnREFBRDtBQUNJLGFBQUssRUFBRSxLQUFLQyxLQUFMLENBQVdDLEtBRHRCO0FBRUksZ0JBQVEsRUFBRSxrQkFBQUQsS0FBSztBQUFBLGlCQUFJLEtBQUksQ0FBQ0EsS0FBTCxDQUFXRSxRQUFYLENBQW9CRixLQUFwQixDQUFKO0FBQUEsU0FGbkI7QUFHSSxrQkFBVSxFQUFFLEtBQUtBLEtBQUwsQ0FBV0c7QUFIM0IsU0FLSSwyREFBQyw4REFBRDtBQUNJLG1CQUFXLEVBQUUsS0FBS0gsS0FBTCxDQUFXSSxnQkFENUI7QUFFSSxZQUFJLEVBQUM7QUFGVCxRQUxKLEVBU0ksMkRBQUMsc0RBQUQ7QUFDSSxhQUFLLEVBQUUsS0FBS0osS0FBTCxDQUFXSyxRQUR0QjtBQUVJLFlBQUksRUFBRSxLQUFLTCxLQUFMLENBQVdNLE9BRnJCO0FBR0ksYUFBSyxFQUFFO0FBQUNDLG9CQUFVLEVBQUU7QUFBYjtBQUhYLFFBVEosQ0FESixDQURKO0FBbUJIOzs7O0VBekJ5Q0MsK0M7OztBQTZCOUNULGdCQUFnQixDQUFDVSxZQUFqQixHQUFnQztBQUM1QkMsSUFBRSxFQUFFLElBRHdCO0FBRTVCVCxPQUFLLEVBQUUsSUFGcUI7QUFHNUJVLE9BQUssRUFBRSxJQUhxQjtBQUk1QkMsV0FBUyxFQUFFLElBSmlCO0FBSzVCVixVQUFRLEVBQUUsSUFMa0I7QUFNNUJXLFVBQVEsRUFBRSxJQU5rQjtBQU81QlYsWUFBVSxFQUFFO0FBUGdCLENBQWhDO0FBVUFKLGdCQUFnQixDQUFDZSxTQUFqQixHQUE2QjtBQUN6Qjs7O0FBR0FKLElBQUUsRUFBRUssaURBQVMsQ0FBQ0MsTUFKVzs7QUFLekI7OztBQUdBZixPQUFLLEVBQUVjLGlEQUFTLENBQUNFLEtBUlE7O0FBU3pCOzs7QUFHQU4sT0FBSyxFQUFFSSxpREFBUyxDQUFDRyxNQVpROztBQWF6Qjs7O0FBR0FOLFdBQVMsRUFBRUcsaURBQVMsQ0FBQ0MsTUFoQkk7O0FBaUJ6Qjs7O0FBR0FILFVBQVEsRUFBRUUsaURBQVMsQ0FBQ0csTUFwQks7O0FBcUJ6Qjs7O0FBR0FmLFlBQVUsRUFBRVksaURBQVMsQ0FBQ0csTUF4Qkc7O0FBeUJ6Qjs7O0FBR0FoQixVQUFRLEVBQUVhLGlEQUFTLENBQUNJLElBQVYsQ0FBZUM7QUE1QkEsQ0FBN0IsQyIsImZpbGUiOiJiOTBiZDU0LW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9CdXR0b24vQnV0dG9uJztcbmltcG9ydCB7IElucHV0VGV4dCB9IGZyb20gJy4uL0lucHV0dGV4dC9JbnB1dFRleHQnO1xuaW1wb3J0IHsgTWVudWJhciB9IGZyb20gJy4vTWVudUJhcic7XG5pbXBvcnQgJy4vTWVudUJhckNvbXBvbmVudC5jc3MnO1xuXG4vKipcbiAqIE1lbnVCYXJDb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudWJhckNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LXNlY3Rpb24gaW1wbGVtZW50YXRpb25cIj5cbiAgICAgICAgICAgICAgICA8TWVudWJhclxuICAgICAgICAgICAgICAgICAgICBtb2RlbD17dGhpcy5wcm9wcy5tb2RlbH1cbiAgICAgICAgICAgICAgICAgICAgc2V0UHJvcHM9e3Byb3BzID0+IHRoaXMucHJvcHMuc2V0UHJvcHMocHJvcHMpfVxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVJdGVtPXt0aGlzLnByb3BzLmFjdGl2ZUl0ZW19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5pbnB1dFBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17dGhpcy5wcm9wcy5idG5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGljb249e3RoaXMucHJvcHMuYnRuaWNvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luTGVmdDogNH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9NZW51YmFyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbk1lbnViYXJDb21wb25lbnQuZGVmYXVsdFByb3BzID0ge1xuICAgIGlkOiBudWxsLFxuICAgIG1vZGVsOiBudWxsLFxuICAgIHN0eWxlOiBudWxsLFxuICAgIGNsYXNzTmFtZTogbnVsbCxcbiAgICBzZXRQcm9wczogbnVsbCxcbiAgICBtZW51SXRlbTogbnVsbCxcbiAgICBhY3RpdmVJdGVtOiBudWxsXG59O1xuXG5NZW51YmFyQ29tcG9uZW50LnByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBVbmlxdWUgaWRlbnRpZmllciBvZiB0aGUgZWxlbWVudC5cbiAgICAgKi9cbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiBtZW51aXRlbXMuXG4gICAgICovXG4gICAgbW9kZWw6IFByb3BUeXBlcy5hcnJheSxcbiAgICAvKipcbiAgICAgKiBJbmxpbmUgc3R5bGUgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAvKipcbiAgICAgKiBTdHlsZSBjbGFzcyBvZiB0aGUgY29tcG9uZW50LlxuICAgICAqL1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKipcbiAgICAgKiBDdXJyZW50IE1lbnUgb2JqZWN0XG4gICAgICovXG4gICAgbWVudUl0ZW06IFByb3BUeXBlcy5vYmplY3QsXG4gICAgLyoqXG4gICAgICogQ3VycmVudGx5IHNlbGVjdGVkIGl0ZW1cbiAgICAgKi9cbiAgICBhY3RpdmVJdGVtOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIGZ1bmN0aW9uXG4gICAgICovXG4gICAgc2V0UHJvcHM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==