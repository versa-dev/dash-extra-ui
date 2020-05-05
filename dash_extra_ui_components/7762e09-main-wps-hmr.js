webpackHotUpdatedash_extra_ui_components("main",{

/***/ "./src/lib/components/PanelMenu/PanelMenu.js":
/*!***************************************************!*\
  !*** ./src/lib/components/PanelMenu/PanelMenu.js ***!
  \***************************************************/
/*! exports provided: PanelMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelMenu", function() { return PanelMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var _PanelMenu_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PanelMenu.css */ "./src/lib/components/PanelMenu/PanelMenu.css");
/* harmony import */ var _PanelMenu_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_PanelMenu_css__WEBPACK_IMPORTED_MODULE_4__);
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
 * PanelMenu
 */

var PanelMenuSub =
/*#__PURE__*/
function (_Component) {
  _inherits(PanelMenuSub, _Component);

  function PanelMenuSub(props) {
    var _this;

    _classCallCheck(this, PanelMenuSub);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PanelMenuSub).call(this, props));
    _this.state = {
      activeItem: null
    };
    return _this;
  }

  _createClass(PanelMenuSub, [{
    key: "onItemClick",
    value: function onItemClick(event, item) {
      console.log(item);
      this.props.setProps({
        submenu: item
      });

      if (item.disabled) {
        event.preventDefault();
        return;
      }

      if (!item.url) {
        event.preventDefault();
      }

      if (item.command) {
        item.command({
          originalEvent: event,
          item: item
        });
      }

      if (this.state.activeItem && this.state.activeItem === item) {
        this.setState({
          activeItem: null
        });
      } else {
        this.setState({
          activeItem: item
        });
      }
    }
  }, {
    key: "renderSeparator",
    value: function renderSeparator(index) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        key: 'separator_' + index,
        className: "p-menu-separator"
      });
    }
  }, {
    key: "renderIcon",
    value: function renderIcon(item) {
      var className = classnames__WEBPACK_IMPORTED_MODULE_2___default()('p-menuitem-icon', item.icon);

      if (item.icon) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: className
        });
      } else {
        return null;
      }
    }
  }, {
    key: "renderSubmenuIcon",
    value: function renderSubmenuIcon(item, active) {
      var className = classnames__WEBPACK_IMPORTED_MODULE_2___default()('p-panelmenu-icon pi pi-fw', {
        'pi-caret-right': !active,
        'pi-caret-down': active
      });

      if (item.items) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: className
        });
      } else {
        return null;
      }
    }
  }, {
    key: "renderSubmenu",
    value: function renderSubmenu(item, active) {
      var submenuWrapperClassName = classnames__WEBPACK_IMPORTED_MODULE_2___default()('p-toggleable-content', {
        'p-toggleable-content-collapsed': !active
      });

      if (item.items) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_3__["CSSTransition"], {
          classNames: "p-toggleable-content",
          timeout: {
            enter: 400,
            exit: 250
          },
          "in": active
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: submenuWrapperClassName
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PanelMenuSub, {
          model: item.items,
          setProps: this.props.setProps
        })));
      } else {
        return null;
      }
    }
  }, {
    key: "renderMenuitem",
    value: function renderMenuitem(item, index) {
      var _this2 = this;

      var active = this.state.activeItem === item;
      var className = classnames__WEBPACK_IMPORTED_MODULE_2___default()('p-menuitem', item.className, {
        'p-disabled': item.disabled
      });
      var icon = this.renderIcon(item, active);
      var submenuIcon = this.renderSubmenuIcon(item, active);
      var submenu = this.renderSubmenu(item, active);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        key: item.label + '_' + index,
        className: className,
        style: item.style
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: item.url || '#',
        className: "p-menuitem-link",
        target: item.target,
        onClick: function onClick(event) {
          return _this2.onItemClick(event, item, index);
        }
      }, submenuIcon, icon, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "p-menuitem-text"
      }, item.label)), submenu);
    }
  }, {
    key: "renderItem",
    value: function renderItem(item, index) {
      if (item.separator) return this.renderSeparator(index);else return this.renderMenuitem(item, index);
    }
  }, {
    key: "renderMenu",
    value: function renderMenu() {
      var _this3 = this;

      if (this.props.model) {
        return this.props.model.map(function (item, index) {
          return _this3.renderItem(item, index);
        });
      } else {
        return null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var className = classnames__WEBPACK_IMPORTED_MODULE_2___default()('p-submenu-list', this.props.className);
      var menu = this.renderMenu();
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: className
      }, menu);
    }
  }]);

  return PanelMenuSub;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
/**
 * PanelMenu
 */


var PanelMenu =
/*#__PURE__*/
function (_Component2) {
  _inherits(PanelMenu, _Component2);

  function PanelMenu(props) {
    var _this4;

    _classCallCheck(this, PanelMenu);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(PanelMenu).call(this, props));
    _this4.state = {
      activeItem: null
    };
    return _this4;
  }

  _createClass(PanelMenu, [{
    key: "onItemClick",
    value: function onItemClick(event, item) {
      if (item.disabled) {
        event.preventDefault();
        return;
      }

      if (!item.url) {
        event.preventDefault();
      }

      if (item.command) {
        item.command({
          originalEvent: event,
          item: item
        });
      }

      if (this.state.activeItem && this.state.activeItem === item) {
        this.setState({
          activeItem: null
        });
      } else {
        this.setState({
          activeItem: item
        });
      }

      this.props.setProps({
        menuitem: item
      });
    }
  }, {
    key: "renderPanelIcon",
    value: function renderPanelIcon(item) {
      var className = classnames__WEBPACK_IMPORTED_MODULE_2___default()('p-menuitem-icon', item.icon);

      if (item.items) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: className
        });
      } else {
        return null;
      }
    }
  }, {
    key: "renderPanelToggleIcon",
    value: function renderPanelToggleIcon(item, active) {
      var className = classnames__WEBPACK_IMPORTED_MODULE_2___default()('p-panelmenu-icon pi pi-fw', {
        'pi-caret-right': !active,
        ' pi-caret-down': active
      });

      if (item.items) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: className
        });
      } else {
        return null;
      }
    }
  }, {
    key: "renderPanel",
    value: function renderPanel(item, index) {
      var _this5 = this;

      var active = this.state.activeItem === item;
      var className = classnames__WEBPACK_IMPORTED_MODULE_2___default()('p-panelmenu-panel', item.className, {
        'p-disabled': item.disabled
      });
      var headerClassName = classnames__WEBPACK_IMPORTED_MODULE_2___default()('p-component p-panelmenu-header', {
        'p-highlight': active
      });
      var toggleIcon = this.renderPanelToggleIcon(item, active);
      var itemIcon = this.renderPanelIcon(item);
      var contentWrapperClassName = classnames__WEBPACK_IMPORTED_MODULE_2___default()('p-toggleable-content', {
        'p-toggleable-content-collapsed': !active
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: item.label + '_' + index,
        className: className,
        style: item.style
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: headerClassName,
        style: item.style
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: item.url || '#',
        className: "p-panelmenu-header-link ng-tns-c2-1 ng-star-inserted",
        onClick: function onClick(e) {
          return _this5.onItemClick(e, item);
        }
      }, toggleIcon, itemIcon, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "p-menuitem-text"
      }, item.label))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_3__["CSSTransition"], {
        classNames: "p-toggleable-content",
        timeout: {
          enter: 400,
          exit: 250
        },
        "in": active
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: contentWrapperClassName
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-panelmenu-content"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PanelMenuSub, {
        model: item.items,
        className: "p-panelmenu-root-submenu",
        setProps: this.props.setProps
      })))));
    }
  }, {
    key: "renderPanels",
    value: function renderPanels() {
      var _this6 = this;

      if (this.props.model) {
        return this.props.model.map(function (item, index) {
          return _this6.renderPanel(item, index);
        });
      } else {
        return null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var className = classnames__WEBPACK_IMPORTED_MODULE_2___default()('p-panelmenu p-component', this.props.className);
      var panels = this.renderPanels();
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: this.props.id,
        className: className,
        style: this.props.style
      }, panels);
    }
  }]);

  return PanelMenu;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
PanelMenuSub.defaultProps = {
  model: null,
  setProps: null
};
PanelMenuSub.propTypes = {
  /**
   * An array of menuitems.
   */
  model: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,

  /**
   * callback
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
PanelMenu.defaultProps = {
  id: null,
  model: null,
  style: null,
  className: null,
  setProps: null
};
PanelMenu.propTypes = {
  /**
   * Unique identifier of the element.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * An array of menuitems.
   */
  model: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,

  /**
   * Inline style of the component.
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Style class of the component.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * callback
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvUGFuZWxNZW51L1BhbmVsTWVudS5qcyJdLCJuYW1lcyI6WyJQYW5lbE1lbnVTdWIiLCJwcm9wcyIsInN0YXRlIiwiYWN0aXZlSXRlbSIsImV2ZW50IiwiaXRlbSIsImNvbnNvbGUiLCJsb2ciLCJzZXRQcm9wcyIsInN1Ym1lbnUiLCJkaXNhYmxlZCIsInByZXZlbnREZWZhdWx0IiwidXJsIiwiY29tbWFuZCIsIm9yaWdpbmFsRXZlbnQiLCJzZXRTdGF0ZSIsImluZGV4IiwiY2xhc3NOYW1lIiwiY2xhc3NOYW1lcyIsImljb24iLCJhY3RpdmUiLCJpdGVtcyIsInN1Ym1lbnVXcmFwcGVyQ2xhc3NOYW1lIiwiZW50ZXIiLCJleGl0IiwicmVuZGVySWNvbiIsInN1Ym1lbnVJY29uIiwicmVuZGVyU3VibWVudUljb24iLCJyZW5kZXJTdWJtZW51IiwibGFiZWwiLCJzdHlsZSIsInRhcmdldCIsIm9uSXRlbUNsaWNrIiwic2VwYXJhdG9yIiwicmVuZGVyU2VwYXJhdG9yIiwicmVuZGVyTWVudWl0ZW0iLCJtb2RlbCIsIm1hcCIsInJlbmRlckl0ZW0iLCJtZW51IiwicmVuZGVyTWVudSIsIkNvbXBvbmVudCIsIlBhbmVsTWVudSIsIm1lbnVpdGVtIiwiaGVhZGVyQ2xhc3NOYW1lIiwidG9nZ2xlSWNvbiIsInJlbmRlclBhbmVsVG9nZ2xlSWNvbiIsIml0ZW1JY29uIiwicmVuZGVyUGFuZWxJY29uIiwiY29udGVudFdyYXBwZXJDbGFzc05hbWUiLCJlIiwicmVuZGVyUGFuZWwiLCJwYW5lbHMiLCJyZW5kZXJQYW5lbHMiLCJpZCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFueSIsImZ1bmMiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwiYXJyYXkiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztJQUdNQSxZOzs7OztBQUNGLHdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2Ysc0ZBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsZ0JBQVUsRUFBRTtBQURILEtBQWI7QUFGZTtBQUtsQjs7OztnQ0FFV0MsSyxFQUFPQyxJLEVBQU07QUFDckJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0EsV0FBS0osS0FBTCxDQUFXTyxRQUFYLENBQW9CO0FBQUNDLGVBQU8sRUFBRUo7QUFBVixPQUFwQjs7QUFDQSxVQUFJQSxJQUFJLENBQUNLLFFBQVQsRUFBbUI7QUFDZk4sYUFBSyxDQUFDTyxjQUFOO0FBQ0E7QUFDSDs7QUFFRCxVQUFJLENBQUNOLElBQUksQ0FBQ08sR0FBVixFQUFlO0FBQ1hSLGFBQUssQ0FBQ08sY0FBTjtBQUNIOztBQUVELFVBQUlOLElBQUksQ0FBQ1EsT0FBVCxFQUFrQjtBQUNkUixZQUFJLENBQUNRLE9BQUwsQ0FBYTtBQUNUQyx1QkFBYSxFQUFFVixLQUROO0FBRVRDLGNBQUksRUFBRUE7QUFGRyxTQUFiO0FBSUg7O0FBRUQsVUFBSSxLQUFLSCxLQUFMLENBQVdDLFVBQVgsSUFBeUIsS0FBS0QsS0FBTCxDQUFXQyxVQUFYLEtBQTBCRSxJQUF2RCxFQUE2RDtBQUN6RCxhQUFLVSxRQUFMLENBQWM7QUFDVlosb0JBQVUsRUFBRTtBQURGLFNBQWQ7QUFHSCxPQUpELE1BSU87QUFDSCxhQUFLWSxRQUFMLENBQWM7QUFDVlosb0JBQVUsRUFBRUU7QUFERixTQUFkO0FBR0g7QUFDSjs7O29DQUVlVyxLLEVBQU87QUFDbkIsYUFDSTtBQUFJLFdBQUcsRUFBRSxlQUFlQSxLQUF4QjtBQUErQixpQkFBUyxFQUFDO0FBQXpDLFFBREo7QUFHSDs7OytCQUVVWCxJLEVBQU07QUFDYixVQUFNWSxTQUFTLEdBQUdDLGlEQUFVLENBQUMsaUJBQUQsRUFBb0JiLElBQUksQ0FBQ2MsSUFBekIsQ0FBNUI7O0FBRUEsVUFBSWQsSUFBSSxDQUFDYyxJQUFULEVBQWU7QUFDWCxlQUFPO0FBQU0sbUJBQVMsRUFBRUY7QUFBakIsVUFBUDtBQUNILE9BRkQsTUFFTztBQUNILGVBQU8sSUFBUDtBQUNIO0FBQ0o7OztzQ0FFaUJaLEksRUFBTWUsTSxFQUFRO0FBQzVCLFVBQU1ILFNBQVMsR0FBR0MsaURBQVUsQ0FBQywyQkFBRCxFQUE4QjtBQUN0RCwwQkFBa0IsQ0FBQ0UsTUFEbUM7QUFFdEQseUJBQWlCQTtBQUZxQyxPQUE5QixDQUE1Qjs7QUFLQSxVQUFJZixJQUFJLENBQUNnQixLQUFULEVBQWdCO0FBQ1osZUFBTztBQUFNLG1CQUFTLEVBQUVKO0FBQWpCLFVBQVA7QUFDSCxPQUZELE1BRU87QUFDSCxlQUFPLElBQVA7QUFDSDtBQUNKOzs7a0NBRWFaLEksRUFBTWUsTSxFQUFRO0FBQ3hCLFVBQU1FLHVCQUF1QixHQUFHSixpREFBVSxDQUFDLHNCQUFELEVBQXlCO0FBQy9ELDBDQUFrQyxDQUFDRTtBQUQ0QixPQUF6QixDQUExQzs7QUFJQSxVQUFJZixJQUFJLENBQUNnQixLQUFULEVBQWdCO0FBQ1osZUFDSSwyREFBQyxvRUFBRDtBQUNJLG9CQUFVLEVBQUMsc0JBRGY7QUFFSSxpQkFBTyxFQUFFO0FBQUNFLGlCQUFLLEVBQUUsR0FBUjtBQUFhQyxnQkFBSSxFQUFFO0FBQW5CLFdBRmI7QUFHSSxnQkFBSUo7QUFIUixXQUtJO0FBQUssbUJBQVMsRUFBRUU7QUFBaEIsV0FDSSwyREFBQyxZQUFEO0FBQ0ksZUFBSyxFQUFFakIsSUFBSSxDQUFDZ0IsS0FEaEI7QUFFSSxrQkFBUSxFQUFFLEtBQUtwQixLQUFMLENBQVdPO0FBRnpCLFVBREosQ0FMSixDQURKO0FBY0gsT0FmRCxNQWVPO0FBQ0gsZUFBTyxJQUFQO0FBQ0g7QUFDSjs7O21DQUVjSCxJLEVBQU1XLEssRUFBTztBQUFBOztBQUN4QixVQUFNSSxNQUFNLEdBQUcsS0FBS2xCLEtBQUwsQ0FBV0MsVUFBWCxLQUEwQkUsSUFBekM7QUFDQSxVQUFNWSxTQUFTLEdBQUdDLGlEQUFVLENBQUMsWUFBRCxFQUFlYixJQUFJLENBQUNZLFNBQXBCLEVBQStCO0FBQ3ZELHNCQUFjWixJQUFJLENBQUNLO0FBRG9DLE9BQS9CLENBQTVCO0FBR0EsVUFBTVMsSUFBSSxHQUFHLEtBQUtNLFVBQUwsQ0FBZ0JwQixJQUFoQixFQUFzQmUsTUFBdEIsQ0FBYjtBQUNBLFVBQU1NLFdBQVcsR0FBRyxLQUFLQyxpQkFBTCxDQUF1QnRCLElBQXZCLEVBQTZCZSxNQUE3QixDQUFwQjtBQUNBLFVBQU1YLE9BQU8sR0FBRyxLQUFLbUIsYUFBTCxDQUFtQnZCLElBQW5CLEVBQXlCZSxNQUF6QixDQUFoQjtBQUVBLGFBQ0k7QUFDSSxXQUFHLEVBQUVmLElBQUksQ0FBQ3dCLEtBQUwsR0FBYSxHQUFiLEdBQW1CYixLQUQ1QjtBQUVJLGlCQUFTLEVBQUVDLFNBRmY7QUFHSSxhQUFLLEVBQUVaLElBQUksQ0FBQ3lCO0FBSGhCLFNBS0k7QUFDSSxZQUFJLEVBQUV6QixJQUFJLENBQUNPLEdBQUwsSUFBWSxHQUR0QjtBQUVJLGlCQUFTLEVBQUMsaUJBRmQ7QUFHSSxjQUFNLEVBQUVQLElBQUksQ0FBQzBCLE1BSGpCO0FBSUksZUFBTyxFQUFFLGlCQUFBM0IsS0FBSztBQUFBLGlCQUFJLE1BQUksQ0FBQzRCLFdBQUwsQ0FBaUI1QixLQUFqQixFQUF3QkMsSUFBeEIsRUFBOEJXLEtBQTlCLENBQUo7QUFBQTtBQUpsQixTQU1LVSxXQU5MLEVBT0tQLElBUEwsRUFRSTtBQUFNLGlCQUFTLEVBQUM7QUFBaEIsU0FBbUNkLElBQUksQ0FBQ3dCLEtBQXhDLENBUkosQ0FMSixFQWVLcEIsT0FmTCxDQURKO0FBbUJIOzs7K0JBRVVKLEksRUFBTVcsSyxFQUFPO0FBQ3BCLFVBQUlYLElBQUksQ0FBQzRCLFNBQVQsRUFBb0IsT0FBTyxLQUFLQyxlQUFMLENBQXFCbEIsS0FBckIsQ0FBUCxDQUFwQixLQUNLLE9BQU8sS0FBS21CLGNBQUwsQ0FBb0I5QixJQUFwQixFQUEwQlcsS0FBMUIsQ0FBUDtBQUNSOzs7aUNBRVk7QUFBQTs7QUFDVCxVQUFJLEtBQUtmLEtBQUwsQ0FBV21DLEtBQWYsRUFBc0I7QUFDbEIsZUFBTyxLQUFLbkMsS0FBTCxDQUFXbUMsS0FBWCxDQUFpQkMsR0FBakIsQ0FBcUIsVUFBQ2hDLElBQUQsRUFBT1csS0FBUCxFQUFpQjtBQUN6QyxpQkFBTyxNQUFJLENBQUNzQixVQUFMLENBQWdCakMsSUFBaEIsRUFBc0JXLEtBQXRCLENBQVA7QUFDSCxTQUZNLENBQVA7QUFHSCxPQUpELE1BSU87QUFDSCxlQUFPLElBQVA7QUFDSDtBQUNKOzs7NkJBRVE7QUFDTCxVQUFNQyxTQUFTLEdBQUdDLGlEQUFVLENBQUMsZ0JBQUQsRUFBbUIsS0FBS2pCLEtBQUwsQ0FBV2dCLFNBQTlCLENBQTVCO0FBQ0EsVUFBTXNCLElBQUksR0FBRyxLQUFLQyxVQUFMLEVBQWI7QUFFQSxhQUFPO0FBQUksaUJBQVMsRUFBRXZCO0FBQWYsU0FBMkJzQixJQUEzQixDQUFQO0FBQ0g7Ozs7RUE5SXNCRSwrQztBQWlKM0I7Ozs7O0FBSU8sSUFBTUMsU0FBYjtBQUFBO0FBQUE7QUFBQTs7QUFDSSxxQkFBWXpDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZixvRkFBTUEsS0FBTjtBQUNBLFdBQUtDLEtBQUwsR0FBYTtBQUNUQyxnQkFBVSxFQUFFO0FBREgsS0FBYjtBQUZlO0FBS2xCOztBQU5MO0FBQUE7QUFBQSxnQ0FRZ0JDLEtBUmhCLEVBUXVCQyxJQVJ2QixFQVE2QjtBQUNyQixVQUFJQSxJQUFJLENBQUNLLFFBQVQsRUFBbUI7QUFDZk4sYUFBSyxDQUFDTyxjQUFOO0FBQ0E7QUFDSDs7QUFFRCxVQUFJLENBQUNOLElBQUksQ0FBQ08sR0FBVixFQUFlO0FBQ1hSLGFBQUssQ0FBQ08sY0FBTjtBQUNIOztBQUVELFVBQUlOLElBQUksQ0FBQ1EsT0FBVCxFQUFrQjtBQUNkUixZQUFJLENBQUNRLE9BQUwsQ0FBYTtBQUNUQyx1QkFBYSxFQUFFVixLQUROO0FBRVRDLGNBQUksRUFBRUE7QUFGRyxTQUFiO0FBSUg7O0FBRUQsVUFBSSxLQUFLSCxLQUFMLENBQVdDLFVBQVgsSUFBeUIsS0FBS0QsS0FBTCxDQUFXQyxVQUFYLEtBQTBCRSxJQUF2RCxFQUE2RDtBQUN6RCxhQUFLVSxRQUFMLENBQWM7QUFDVlosb0JBQVUsRUFBRTtBQURGLFNBQWQ7QUFHSCxPQUpELE1BSU87QUFDSCxhQUFLWSxRQUFMLENBQWM7QUFDVlosb0JBQVUsRUFBRUU7QUFERixTQUFkO0FBR0g7O0FBQ0QsV0FBS0osS0FBTCxDQUFXTyxRQUFYLENBQW9CO0FBQUNtQyxnQkFBUSxFQUFFdEM7QUFBWCxPQUFwQjtBQUNIO0FBbkNMO0FBQUE7QUFBQSxvQ0FxQ29CQSxJQXJDcEIsRUFxQzBCO0FBQ2xCLFVBQU1ZLFNBQVMsR0FBR0MsaURBQVUsQ0FBQyxpQkFBRCxFQUFvQmIsSUFBSSxDQUFDYyxJQUF6QixDQUE1Qjs7QUFFQSxVQUFJZCxJQUFJLENBQUNnQixLQUFULEVBQWdCO0FBQ1osZUFBTztBQUFNLG1CQUFTLEVBQUVKO0FBQWpCLFVBQVA7QUFDSCxPQUZELE1BRU87QUFDSCxlQUFPLElBQVA7QUFDSDtBQUNKO0FBN0NMO0FBQUE7QUFBQSwwQ0ErQzBCWixJQS9DMUIsRUErQ2dDZSxNQS9DaEMsRUErQ3dDO0FBQ2hDLFVBQU1ILFNBQVMsR0FBR0MsaURBQVUsQ0FBQywyQkFBRCxFQUE4QjtBQUN0RCwwQkFBa0IsQ0FBQ0UsTUFEbUM7QUFFdEQsMEJBQWtCQTtBQUZvQyxPQUE5QixDQUE1Qjs7QUFJQSxVQUFJZixJQUFJLENBQUNnQixLQUFULEVBQWdCO0FBQ1osZUFBTztBQUFNLG1CQUFTLEVBQUVKO0FBQWpCLFVBQVA7QUFDSCxPQUZELE1BRU87QUFDSCxlQUFPLElBQVA7QUFDSDtBQUNKO0FBekRMO0FBQUE7QUFBQSxnQ0EyRGdCWixJQTNEaEIsRUEyRHNCVyxLQTNEdEIsRUEyRDZCO0FBQUE7O0FBQ3JCLFVBQU1JLE1BQU0sR0FBRyxLQUFLbEIsS0FBTCxDQUFXQyxVQUFYLEtBQTBCRSxJQUF6QztBQUNBLFVBQU1ZLFNBQVMsR0FBR0MsaURBQVUsQ0FBQyxtQkFBRCxFQUFzQmIsSUFBSSxDQUFDWSxTQUEzQixFQUFzQztBQUM5RCxzQkFBY1osSUFBSSxDQUFDSztBQUQyQyxPQUF0QyxDQUE1QjtBQUdBLFVBQU1rQyxlQUFlLEdBQUcxQixpREFBVSxDQUFDLGdDQUFELEVBQW1DO0FBQ2pFLHVCQUFlRTtBQURrRCxPQUFuQyxDQUFsQztBQUdBLFVBQU15QixVQUFVLEdBQUcsS0FBS0MscUJBQUwsQ0FBMkJ6QyxJQUEzQixFQUFpQ2UsTUFBakMsQ0FBbkI7QUFDQSxVQUFNMkIsUUFBUSxHQUFHLEtBQUtDLGVBQUwsQ0FBcUIzQyxJQUFyQixDQUFqQjtBQUNBLFVBQU00Qyx1QkFBdUIsR0FBRy9CLGlEQUFVLENBQUMsc0JBQUQsRUFBeUI7QUFDL0QsMENBQWtDLENBQUNFO0FBRDRCLE9BQXpCLENBQTFDO0FBSUEsYUFDSTtBQUNJLFdBQUcsRUFBRWYsSUFBSSxDQUFDd0IsS0FBTCxHQUFhLEdBQWIsR0FBbUJiLEtBRDVCO0FBRUksaUJBQVMsRUFBRUMsU0FGZjtBQUdJLGFBQUssRUFBRVosSUFBSSxDQUFDeUI7QUFIaEIsU0FLSTtBQUFLLGlCQUFTLEVBQUVjLGVBQWhCO0FBQWlDLGFBQUssRUFBRXZDLElBQUksQ0FBQ3lCO0FBQTdDLFNBQ0k7QUFDSSxZQUFJLEVBQUV6QixJQUFJLENBQUNPLEdBQUwsSUFBWSxHQUR0QjtBQUVJLGlCQUFTLEVBQUMsc0RBRmQ7QUFHSSxlQUFPLEVBQUUsaUJBQUFzQyxDQUFDO0FBQUEsaUJBQUksTUFBSSxDQUFDbEIsV0FBTCxDQUFpQmtCLENBQWpCLEVBQW9CN0MsSUFBcEIsQ0FBSjtBQUFBO0FBSGQsU0FLS3dDLFVBTEwsRUFNS0UsUUFOTCxFQU9JO0FBQU0saUJBQVMsRUFBQztBQUFoQixTQUFtQzFDLElBQUksQ0FBQ3dCLEtBQXhDLENBUEosQ0FESixDQUxKLEVBZ0JJLDJEQUFDLG9FQUFEO0FBQ0ksa0JBQVUsRUFBQyxzQkFEZjtBQUVJLGVBQU8sRUFBRTtBQUFDTixlQUFLLEVBQUUsR0FBUjtBQUFhQyxjQUFJLEVBQUU7QUFBbkIsU0FGYjtBQUdJLGNBQUlKO0FBSFIsU0FLSTtBQUFLLGlCQUFTLEVBQUU2QjtBQUFoQixTQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0ksMkRBQUMsWUFBRDtBQUNJLGFBQUssRUFBRTVDLElBQUksQ0FBQ2dCLEtBRGhCO0FBRUksaUJBQVMsRUFBQywwQkFGZDtBQUdJLGdCQUFRLEVBQUUsS0FBS3BCLEtBQUwsQ0FBV087QUFIekIsUUFESixDQURKLENBTEosQ0FoQkosQ0FESjtBQWtDSDtBQTNHTDtBQUFBO0FBQUEsbUNBNkdtQjtBQUFBOztBQUNYLFVBQUksS0FBS1AsS0FBTCxDQUFXbUMsS0FBZixFQUFzQjtBQUNsQixlQUFPLEtBQUtuQyxLQUFMLENBQVdtQyxLQUFYLENBQWlCQyxHQUFqQixDQUFxQixVQUFDaEMsSUFBRCxFQUFPVyxLQUFQLEVBQWlCO0FBQ3pDLGlCQUFPLE1BQUksQ0FBQ21DLFdBQUwsQ0FBaUI5QyxJQUFqQixFQUF1QlcsS0FBdkIsQ0FBUDtBQUNILFNBRk0sQ0FBUDtBQUdILE9BSkQsTUFJTztBQUNILGVBQU8sSUFBUDtBQUNIO0FBQ0o7QUFySEw7QUFBQTtBQUFBLDZCQXVIYTtBQUNMLFVBQU1DLFNBQVMsR0FBR0MsaURBQVUsQ0FDeEIseUJBRHdCLEVBRXhCLEtBQUtqQixLQUFMLENBQVdnQixTQUZhLENBQTVCO0FBSUEsVUFBTW1DLE1BQU0sR0FBRyxLQUFLQyxZQUFMLEVBQWY7QUFFQSxhQUNJO0FBQ0ksVUFBRSxFQUFFLEtBQUtwRCxLQUFMLENBQVdxRCxFQURuQjtBQUVJLGlCQUFTLEVBQUVyQyxTQUZmO0FBR0ksYUFBSyxFQUFFLEtBQUtoQixLQUFMLENBQVc2QjtBQUh0QixTQUtLc0IsTUFMTCxDQURKO0FBU0g7QUF2SUw7O0FBQUE7QUFBQSxFQUErQlgsK0NBQS9CO0FBMElBekMsWUFBWSxDQUFDdUQsWUFBYixHQUE0QjtBQUN4Qm5CLE9BQUssRUFBRSxJQURpQjtBQUV4QjVCLFVBQVEsRUFBRTtBQUZjLENBQTVCO0FBS0FSLFlBQVksQ0FBQ3dELFNBQWIsR0FBeUI7QUFDckI7OztBQUdBcEIsT0FBSyxFQUFFcUIsaURBQVMsQ0FBQ0MsR0FKSTs7QUFLckI7OztBQUdBbEQsVUFBUSxFQUFFaUQsaURBQVMsQ0FBQ0UsSUFBVixDQUFlQztBQVJKLENBQXpCO0FBV0FsQixTQUFTLENBQUNhLFlBQVYsR0FBeUI7QUFDckJELElBQUUsRUFBRSxJQURpQjtBQUVyQmxCLE9BQUssRUFBRSxJQUZjO0FBR3JCTixPQUFLLEVBQUUsSUFIYztBQUlyQmIsV0FBUyxFQUFFLElBSlU7QUFLckJULFVBQVEsRUFBRTtBQUxXLENBQXpCO0FBUUFrQyxTQUFTLENBQUNjLFNBQVYsR0FBc0I7QUFDbEI7OztBQUdBRixJQUFFLEVBQUVHLGlEQUFTLENBQUNJLE1BSkk7O0FBS2xCOzs7QUFHQXpCLE9BQUssRUFBRXFCLGlEQUFTLENBQUNLLEtBUkM7O0FBU2xCOzs7QUFHQWhDLE9BQUssRUFBRTJCLGlEQUFTLENBQUNNLE1BWkM7O0FBYWxCOzs7QUFHQTlDLFdBQVMsRUFBRXdDLGlEQUFTLENBQUNJLE1BaEJIOztBQWlCbEI7OztBQUdBckQsVUFBUSxFQUFFaUQsaURBQVMsQ0FBQ0UsSUFBVixDQUFlQztBQXBCUCxDQUF0QixDIiwiZmlsZSI6Ijc3NjJlMDktbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQge0NTU1RyYW5zaXRpb259IGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAnO1xuaW1wb3J0ICcuL1BhbmVsTWVudS5jc3MnO1xuXG4vKipcbiAqIFBhbmVsTWVudVxuICovXG5jbGFzcyBQYW5lbE1lbnVTdWIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFjdGl2ZUl0ZW06IG51bGwsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgb25JdGVtQ2xpY2soZXZlbnQsIGl0ZW0pIHtcbiAgICAgICAgY29uc29sZS5sb2coaXRlbSk7XG4gICAgICAgIHRoaXMucHJvcHMuc2V0UHJvcHMoe3N1Ym1lbnU6IGl0ZW19KTtcbiAgICAgICAgaWYgKGl0ZW0uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWl0ZW0udXJsKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGl0ZW0uY29tbWFuZCkge1xuICAgICAgICAgICAgaXRlbS5jb21tYW5kKHtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgICAgICAgICBpdGVtOiBpdGVtLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5hY3RpdmVJdGVtICYmIHRoaXMuc3RhdGUuYWN0aXZlSXRlbSA9PT0gaXRlbSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgYWN0aXZlSXRlbTogbnVsbCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgYWN0aXZlSXRlbTogaXRlbSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyU2VwYXJhdG9yKGluZGV4KSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGkga2V5PXsnc2VwYXJhdG9yXycgKyBpbmRleH0gY2xhc3NOYW1lPVwicC1tZW51LXNlcGFyYXRvclwiPjwvbGk+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVySWNvbihpdGVtKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoJ3AtbWVudWl0ZW0taWNvbicsIGl0ZW0uaWNvbik7XG5cbiAgICAgICAgaWYgKGl0ZW0uaWNvbikge1xuICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT48L3NwYW4+O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXJTdWJtZW51SWNvbihpdGVtLCBhY3RpdmUpIHtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gY2xhc3NOYW1lcygncC1wYW5lbG1lbnUtaWNvbiBwaSBwaS1mdycsIHtcbiAgICAgICAgICAgICdwaS1jYXJldC1yaWdodCc6ICFhY3RpdmUsXG4gICAgICAgICAgICAncGktY2FyZXQtZG93bic6IGFjdGl2ZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGl0ZW0uaXRlbXMpIHtcbiAgICAgICAgICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+PC9zcGFuPjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyU3VibWVudShpdGVtLCBhY3RpdmUpIHtcbiAgICAgICAgY29uc3Qgc3VibWVudVdyYXBwZXJDbGFzc05hbWUgPSBjbGFzc05hbWVzKCdwLXRvZ2dsZWFibGUtY29udGVudCcsIHtcbiAgICAgICAgICAgICdwLXRvZ2dsZWFibGUtY29udGVudC1jb2xsYXBzZWQnOiAhYWN0aXZlLFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoaXRlbS5pdGVtcykge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8Q1NTVHJhbnNpdGlvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWVzPVwicC10b2dnbGVhYmxlLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0PXt7ZW50ZXI6IDQwMCwgZXhpdDogMjUwfX1cbiAgICAgICAgICAgICAgICAgICAgaW49e2FjdGl2ZX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdWJtZW51V3JhcHBlckNsYXNzTmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFuZWxNZW51U3ViXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw9e2l0ZW0uaXRlbXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UHJvcHM9e3RoaXMucHJvcHMuc2V0UHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0NTU1RyYW5zaXRpb24+XG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXJNZW51aXRlbShpdGVtLCBpbmRleCkge1xuICAgICAgICBjb25zdCBhY3RpdmUgPSB0aGlzLnN0YXRlLmFjdGl2ZUl0ZW0gPT09IGl0ZW07XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoJ3AtbWVudWl0ZW0nLCBpdGVtLmNsYXNzTmFtZSwge1xuICAgICAgICAgICAgJ3AtZGlzYWJsZWQnOiBpdGVtLmRpc2FibGVkLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgaWNvbiA9IHRoaXMucmVuZGVySWNvbihpdGVtLCBhY3RpdmUpO1xuICAgICAgICBjb25zdCBzdWJtZW51SWNvbiA9IHRoaXMucmVuZGVyU3VibWVudUljb24oaXRlbSwgYWN0aXZlKTtcbiAgICAgICAgY29uc3Qgc3VibWVudSA9IHRoaXMucmVuZGVyU3VibWVudShpdGVtLCBhY3RpdmUpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0ubGFiZWwgKyAnXycgKyBpbmRleH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICBzdHlsZT17aXRlbS5zdHlsZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBocmVmPXtpdGVtLnVybCB8fCAnIyd9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtbWVudWl0ZW0tbGlua1wiXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD17aXRlbS50YXJnZXR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2V2ZW50ID0+IHRoaXMub25JdGVtQ2xpY2soZXZlbnQsIGl0ZW0sIGluZGV4KX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtzdWJtZW51SWNvbn1cbiAgICAgICAgICAgICAgICAgICAge2ljb259XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInAtbWVudWl0ZW0tdGV4dFwiPntpdGVtLmxhYmVsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAge3N1Ym1lbnV9XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlckl0ZW0oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgaWYgKGl0ZW0uc2VwYXJhdG9yKSByZXR1cm4gdGhpcy5yZW5kZXJTZXBhcmF0b3IoaW5kZXgpO1xuICAgICAgICBlbHNlIHJldHVybiB0aGlzLnJlbmRlck1lbnVpdGVtKGl0ZW0sIGluZGV4KTtcbiAgICB9XG5cbiAgICByZW5kZXJNZW51KCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5tb2RlbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMubW9kZWwubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlckl0ZW0oaXRlbSwgaW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gY2xhc3NOYW1lcygncC1zdWJtZW51LWxpc3QnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSk7XG4gICAgICAgIGNvbnN0IG1lbnUgPSB0aGlzLnJlbmRlck1lbnUoKTtcblxuICAgICAgICByZXR1cm4gPHVsIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT57bWVudX08L3VsPjtcbiAgICB9XG59XG5cbi8qKlxuICogUGFuZWxNZW51XG4gKi9cblxuZXhwb3J0IGNsYXNzIFBhbmVsTWVudSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYWN0aXZlSXRlbTogbnVsbCxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBvbkl0ZW1DbGljayhldmVudCwgaXRlbSkge1xuICAgICAgICBpZiAoaXRlbS5kaXNhYmxlZCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXRlbS51cmwpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXRlbS5jb21tYW5kKSB7XG4gICAgICAgICAgICBpdGVtLmNvbW1hbmQoe1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZUl0ZW0gJiYgdGhpcy5zdGF0ZS5hY3RpdmVJdGVtID09PSBpdGVtKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBhY3RpdmVJdGVtOiBudWxsLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBhY3RpdmVJdGVtOiBpdGVtLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5zZXRQcm9wcyh7bWVudWl0ZW06IGl0ZW19KTtcbiAgICB9XG5cbiAgICByZW5kZXJQYW5lbEljb24oaXRlbSkge1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc05hbWVzKCdwLW1lbnVpdGVtLWljb24nLCBpdGVtLmljb24pO1xuXG4gICAgICAgIGlmIChpdGVtLml0ZW1zKSB7XG4gICAgICAgICAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPXtjbGFzc05hbWV9Pjwvc3Bhbj47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlclBhbmVsVG9nZ2xlSWNvbihpdGVtLCBhY3RpdmUpIHtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gY2xhc3NOYW1lcygncC1wYW5lbG1lbnUtaWNvbiBwaSBwaS1mdycsIHtcbiAgICAgICAgICAgICdwaS1jYXJldC1yaWdodCc6ICFhY3RpdmUsXG4gICAgICAgICAgICAnIHBpLWNhcmV0LWRvd24nOiBhY3RpdmUsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaXRlbS5pdGVtcykge1xuICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT48L3NwYW4+O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXJQYW5lbChpdGVtLCBpbmRleCkge1xuICAgICAgICBjb25zdCBhY3RpdmUgPSB0aGlzLnN0YXRlLmFjdGl2ZUl0ZW0gPT09IGl0ZW07XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoJ3AtcGFuZWxtZW51LXBhbmVsJywgaXRlbS5jbGFzc05hbWUsIHtcbiAgICAgICAgICAgICdwLWRpc2FibGVkJzogaXRlbS5kaXNhYmxlZCxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGhlYWRlckNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoJ3AtY29tcG9uZW50IHAtcGFuZWxtZW51LWhlYWRlcicsIHtcbiAgICAgICAgICAgICdwLWhpZ2hsaWdodCc6IGFjdGl2ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHRvZ2dsZUljb24gPSB0aGlzLnJlbmRlclBhbmVsVG9nZ2xlSWNvbihpdGVtLCBhY3RpdmUpO1xuICAgICAgICBjb25zdCBpdGVtSWNvbiA9IHRoaXMucmVuZGVyUGFuZWxJY29uKGl0ZW0pO1xuICAgICAgICBjb25zdCBjb250ZW50V3JhcHBlckNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoJ3AtdG9nZ2xlYWJsZS1jb250ZW50Jywge1xuICAgICAgICAgICAgJ3AtdG9nZ2xlYWJsZS1jb250ZW50LWNvbGxhcHNlZCc6ICFhY3RpdmUsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAga2V5PXtpdGVtLmxhYmVsICsgJ18nICsgaW5kZXh9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgc3R5bGU9e2l0ZW0uc3R5bGV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2hlYWRlckNsYXNzTmFtZX0gc3R5bGU9e2l0ZW0uc3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17aXRlbS51cmwgfHwgJyMnfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC1wYW5lbG1lbnUtaGVhZGVyLWxpbmsgbmctdG5zLWMyLTEgbmctc3Rhci1pbnNlcnRlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHRoaXMub25JdGVtQ2xpY2soZSwgaXRlbSl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0b2dnbGVJY29ufVxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1JY29ufVxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicC1tZW51aXRlbS10ZXh0XCI+e2l0ZW0ubGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPENTU1RyYW5zaXRpb25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lcz1cInAtdG9nZ2xlYWJsZS1jb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dD17e2VudGVyOiA0MDAsIGV4aXQ6IDI1MH19XG4gICAgICAgICAgICAgICAgICAgIGluPXthY3RpdmV9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29udGVudFdyYXBwZXJDbGFzc05hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLXBhbmVsbWVudS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhbmVsTWVudVN1YlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbD17aXRlbS5pdGVtc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC1wYW5lbG1lbnUtcm9vdC1zdWJtZW51XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UHJvcHM9e3RoaXMucHJvcHMuc2V0UHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0NTU1RyYW5zaXRpb24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXJQYW5lbHMoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm1vZGVsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5tb2RlbC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyUGFuZWwoaXRlbSwgaW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gY2xhc3NOYW1lcyhcbiAgICAgICAgICAgICdwLXBhbmVsbWVudSBwLWNvbXBvbmVudCcsXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNsYXNzTmFtZVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBwYW5lbHMgPSB0aGlzLnJlbmRlclBhbmVscygpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgaWQ9e3RoaXMucHJvcHMuaWR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3BhbmVsc31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuUGFuZWxNZW51U3ViLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBtb2RlbDogbnVsbCxcbiAgICBzZXRQcm9wczogbnVsbCxcbn07XG5cblBhbmVsTWVudVN1Yi5wcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2YgbWVudWl0ZW1zLlxuICAgICAqL1xuICAgIG1vZGVsOiBQcm9wVHlwZXMuYW55LFxuICAgIC8qKlxuICAgICAqIGNhbGxiYWNrXG4gICAgICovXG4gICAgc2V0UHJvcHM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5QYW5lbE1lbnUuZGVmYXVsdFByb3BzID0ge1xuICAgIGlkOiBudWxsLFxuICAgIG1vZGVsOiBudWxsLFxuICAgIHN0eWxlOiBudWxsLFxuICAgIGNsYXNzTmFtZTogbnVsbCxcbiAgICBzZXRQcm9wczogbnVsbCxcbn07XG5cblBhbmVsTWVudS5wcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogVW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIGVsZW1lbnQuXG4gICAgICovXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2YgbWVudWl0ZW1zLlxuICAgICAqL1xuICAgIG1vZGVsOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgLyoqXG4gICAgICogSW5saW5lIHN0eWxlIG9mIHRoZSBjb21wb25lbnQuXG4gICAgICovXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgLyoqXG4gICAgICogU3R5bGUgY2xhc3Mgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICogY2FsbGJhY2tcbiAgICAgKi9cbiAgICBzZXRQcm9wczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9