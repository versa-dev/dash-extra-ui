webpackHotUpdateextra_dash_ui_components("main",{

/***/ "./src/lib/components/MenuBar/MenubarSub.js":
/*!**************************************************!*\
  !*** ./src/lib/components/MenuBar/MenubarSub.js ***!
  \**************************************************/
/*! exports provided: MenubarSub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenubarSub", function() { return MenubarSub; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_DomHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/DomHandler */ "./src/lib/utils/DomHandler.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var MenubarSub =
/*#__PURE__*/
function (_Component) {
  _inherits(MenubarSub, _Component);

  function MenubarSub(props) {
    var _this;

    _classCallCheck(this, MenubarSub);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MenubarSub).call(this, props));
    _this.state = {
      activeItem: null
    };
    _this.onLeafClick = _this.onLeafClick.bind(_assertThisInitialized(_this));
    _this.onChildItemKeyDown = _this.onChildItemKeyDown.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(MenubarSub, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.parentActive && !this.props.parentActive) {
        this.setState({
          activeItem: null
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!this.documentClickListener) {
        this.documentClickListener = function (event) {
          if (_this2.element && !_this2.element.contains(event.target)) {
            _this2.setState({
              activeItem: null
            });
          }
        };

        document.addEventListener('click', this.documentClickListener);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.documentClickListener) {
        document.removeEventListener('click', this.documentClickListener);
        this.documentClickListener = null;
      }
    }
  }, {
    key: "onItemMouseEnter",
    value: function onItemMouseEnter(event, item) {
      if (item.disabled) {
        event.preventDefault();
        return;
      }

      if (this.props.root) {
        if (this.state.activeItem || this.props.popup) {
          this.setState({
            activeItem: item
          });
        }
      } else {
        this.setState({
          activeItem: item
        });
      }
    }
  }, {
    key: "onItemClick",
    value: function onItemClick(event, item) {
      console.log('heyy', item); // this.props.setProps({
      //     menuItem: item,
      // });

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

      if (this.props.root) {
        if (item.items) {
          if (this.state.activeItem && item === this.state.activeItem) {
            this.setState({
              activeItem: null
            });
          } else {
            this.setState({
              activeItem: item
            });
          }
        }
      }

      if (!item.items) {
        this.props.setProps({
          activeItem: item
        });
        this.onLeafClick();
      }
    }
  }, {
    key: "onItemKeyDown",
    value: function onItemKeyDown(event, item) {
      var listItem = event.currentTarget.parentElement;

      switch (event.which) {
        //down
        case 40:
          if (this.props.root) {
            if (item.items) {
              this.expandSubmenu(item, listItem);
            }
          } else {
            this.navigateToNextItem(listItem);
          }

          event.preventDefault();
          break;
        //up

        case 38:
          if (!this.props.root) {
            this.navigateToPrevItem(listItem);
          }

          event.preventDefault();
          break;
        //right

        case 39:
          if (this.props.root) {
            var nextItem = this.findNextItem(listItem);

            if (nextItem) {
              nextItem.children[0].focus();
            }
          } else {
            if (item.items) {
              this.expandSubmenu(item, listItem);
            }
          }

          event.preventDefault();
          break;
        //left

        case 37:
          if (this.props.root) {
            this.navigateToPrevItem(listItem);
          }

          event.preventDefault();
          break;

        default:
          break;
      }

      if (this.props.onKeyDown) {
        this.props.onKeyDown(event, listItem);
      }
    }
  }, {
    key: "onChildItemKeyDown",
    value: function onChildItemKeyDown(event, childListItem) {
      if (this.props.root) {
        //up
        if (event.which === 38 && childListItem.previousElementSibling == null) {
          this.collapseMenu(childListItem);
        }
      } else {
        //left
        if (event.which === 37) {
          this.collapseMenu(childListItem);
        }
      }
    }
  }, {
    key: "expandSubmenu",
    value: function expandSubmenu(item, listItem) {
      this.setState({
        activeItem: item
      });
      setTimeout(function () {
        listItem.children[1].children[0].children[0].focus();
      }, 50);
    }
  }, {
    key: "collapseMenu",
    value: function collapseMenu(listItem) {
      this.setState({
        activeItem: null
      });
      listItem.parentElement.previousElementSibling.focus();
    }
  }, {
    key: "navigateToNextItem",
    value: function navigateToNextItem(listItem) {
      var nextItem = this.findNextItem(listItem);

      if (nextItem) {
        nextItem.children[0].focus();
      }
    }
  }, {
    key: "navigateToPrevItem",
    value: function navigateToPrevItem(listItem) {
      var prevItem = this.findPrevItem(listItem);

      if (prevItem) {
        prevItem.children[0].focus();
      }
    }
  }, {
    key: "findNextItem",
    value: function findNextItem(item) {
      var nextItem = item.nextElementSibling;
      if (nextItem) return _utils_DomHandler__WEBPACK_IMPORTED_MODULE_3__["default"].hasClass(nextItem, 'p-disabled') || !_utils_DomHandler__WEBPACK_IMPORTED_MODULE_3__["default"].hasClass(nextItem, 'p-menuitem') ? this.findNextItem(nextItem) : nextItem;else return null;
    }
  }, {
    key: "findPrevItem",
    value: function findPrevItem(item) {
      var prevItem = item.previousElementSibling;
      if (prevItem) return _utils_DomHandler__WEBPACK_IMPORTED_MODULE_3__["default"].hasClass(prevItem, 'p-disabled') || !_utils_DomHandler__WEBPACK_IMPORTED_MODULE_3__["default"].hasClass(prevItem, 'p-menuitem') ? this.findPrevItem(prevItem) : prevItem;else return null;
    }
  }, {
    key: "onLeafClick",
    value: function onLeafClick() {
      this.setState({
        activeItem: null
      });

      if (this.props.onLeafClick) {
        this.props.onLeafClick();
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
    value: function renderSubmenuIcon(item) {
      var icon = classnames__WEBPACK_IMPORTED_MODULE_2___default()('p-submenu-icon pi pi-fw', {
        'pi-caret-down': this.props.root,
        'pi-caret-right': !this.props.root
      });

      if (item.items) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: icon
        });
      } else {
        return null;
      }
    }
  }, {
    key: "renderSubmenu",
    value: function renderSubmenu(item) {
      if (item.items) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenubarSub, {
          model: item.items,
          onLeafClick: this.onLeafClick,
          onKeyDown: this.onChildItemKeyDown,
          parentActive: item === this.state.activeItem,
          setProps: this.props.setProps
        });
      } else {
        return null;
      }
    }
  }, {
    key: "renderMenuitem",
    value: function renderMenuitem(item, index) {
      var _this3 = this;

      var className = classnames__WEBPACK_IMPORTED_MODULE_2___default()('p-menuitem', {
        'p-menuitem-active': this.state.activeItem === item,
        'p-disabled': item.disabled
      }, item.className);
      var icon = this.renderIcon(item);
      var submenuIcon = this.renderSubmenuIcon(item);
      var submenu = this.renderSubmenu(item);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        key: item.label + '_' + index,
        className: className,
        style: item.style,
        onMouseEnter: function onMouseEnter(event) {
          return _this3.onItemMouseEnter(event, item);
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: item.url || '#',
        className: "p-menuitem-link",
        target: item.target,
        onClick: function onClick(event) {
          return _this3.onItemClick(event, item);
        },
        onKeyDown: function onKeyDown(event) {
          return _this3.onItemKeyDown(event, item);
        }
      }, icon, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "p-menuitem-text"
      }, item.label), submenuIcon), submenu);
    }
  }, {
    key: "renderItem",
    value: function renderItem(item, index) {
      if (item.separator) return this.renderSeparator(index);else return this.renderMenuitem(item, index);
    }
  }, {
    key: "renderMenu",
    value: function renderMenu() {
      var _this4 = this;

      if (this.props.model) {
        return this.props.model.map(function (item, index) {
          return _this4.renderItem(item, index);
        });
      } else {
        return null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var className = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
        'p-submenu-list': !this.props.root,
        'p-menubar-root-list': this.props.root
      });
      var submenu = this.renderMenu();
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        ref: function ref(el) {
          return _this5.element = el;
        },
        className: className
      }, submenu);
    }
  }]);

  return MenubarSub;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
MenubarSub.defaultProps = {
  model: null,
  root: false,
  className: null,
  popup: false,
  onLeafClick: null,
  onKeyDown: null,
  parentActive: false,
  setProps: null
};
MenubarSub.propTypes = _defineProperty({
  model: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  root: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  popup: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onLeafClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onKeyDown: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  parentActive: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
}, "setProps", prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvTWVudUJhci9NZW51YmFyU3ViLmpzIl0sIm5hbWVzIjpbIk1lbnViYXJTdWIiLCJwcm9wcyIsInN0YXRlIiwiYWN0aXZlSXRlbSIsIm9uTGVhZkNsaWNrIiwiYmluZCIsIm9uQ2hpbGRJdGVtS2V5RG93biIsInByZXZQcm9wcyIsInBhcmVudEFjdGl2ZSIsInNldFN0YXRlIiwiZG9jdW1lbnRDbGlja0xpc3RlbmVyIiwiZXZlbnQiLCJlbGVtZW50IiwiY29udGFpbnMiLCJ0YXJnZXQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaXRlbSIsImRpc2FibGVkIiwicHJldmVudERlZmF1bHQiLCJyb290IiwicG9wdXAiLCJjb25zb2xlIiwibG9nIiwidXJsIiwiY29tbWFuZCIsIm9yaWdpbmFsRXZlbnQiLCJpdGVtcyIsInNldFByb3BzIiwibGlzdEl0ZW0iLCJjdXJyZW50VGFyZ2V0IiwicGFyZW50RWxlbWVudCIsIndoaWNoIiwiZXhwYW5kU3VibWVudSIsIm5hdmlnYXRlVG9OZXh0SXRlbSIsIm5hdmlnYXRlVG9QcmV2SXRlbSIsIm5leHRJdGVtIiwiZmluZE5leHRJdGVtIiwiY2hpbGRyZW4iLCJmb2N1cyIsIm9uS2V5RG93biIsImNoaWxkTGlzdEl0ZW0iLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwiY29sbGFwc2VNZW51Iiwic2V0VGltZW91dCIsInByZXZJdGVtIiwiZmluZFByZXZJdGVtIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiRG9tSGFuZGxlciIsImhhc0NsYXNzIiwiaW5kZXgiLCJjbGFzc05hbWUiLCJjbGFzc05hbWVzIiwiaWNvbiIsInJlbmRlckljb24iLCJzdWJtZW51SWNvbiIsInJlbmRlclN1Ym1lbnVJY29uIiwic3VibWVudSIsInJlbmRlclN1Ym1lbnUiLCJsYWJlbCIsInN0eWxlIiwib25JdGVtTW91c2VFbnRlciIsIm9uSXRlbUNsaWNrIiwib25JdGVtS2V5RG93biIsInNlcGFyYXRvciIsInJlbmRlclNlcGFyYXRvciIsInJlbmRlck1lbnVpdGVtIiwibW9kZWwiLCJtYXAiLCJyZW5kZXJJdGVtIiwicmVuZGVyTWVudSIsImVsIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYW55IiwiYm9vbCIsInN0cmluZyIsImZ1bmMiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLFVBQWI7QUFBQTtBQUFBO0FBQUE7O0FBQ0ksc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZixvRkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxnQkFBVSxFQUFFO0FBREgsS0FBYjtBQUlBLFVBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkMsSUFBakIsK0JBQW5CO0FBQ0EsVUFBS0Msa0JBQUwsR0FBMEIsTUFBS0Esa0JBQUwsQ0FBd0JELElBQXhCLCtCQUExQjtBQVBlO0FBUWxCOztBQVRMO0FBQUE7QUFBQSx1Q0FXdUJFLFNBWHZCLEVBV2tDO0FBQzFCLFVBQUlBLFNBQVMsQ0FBQ0MsWUFBVixJQUEwQixDQUFDLEtBQUtQLEtBQUwsQ0FBV08sWUFBMUMsRUFBd0Q7QUFDcEQsYUFBS0MsUUFBTCxDQUFjO0FBQ1ZOLG9CQUFVLEVBQUU7QUFERixTQUFkO0FBR0g7QUFDSjtBQWpCTDtBQUFBO0FBQUEsd0NBbUJ3QjtBQUFBOztBQUNoQixVQUFJLENBQUMsS0FBS08scUJBQVYsRUFBaUM7QUFDN0IsYUFBS0EscUJBQUwsR0FBNkIsVUFBQUMsS0FBSyxFQUFJO0FBQ2xDLGNBQUksTUFBSSxDQUFDQyxPQUFMLElBQWdCLENBQUMsTUFBSSxDQUFDQSxPQUFMLENBQWFDLFFBQWIsQ0FBc0JGLEtB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QUFLLEVBQUUsS0FKZTtBQUt0QmxCLGFBQVcsRUFBRSxJQUxTO0FBTXRCcUMsV0FBUyxFQUFFLElBTlc7QUFPdEJqQyxjQUFZLEVBQUUsS0FQUTtBQVF0QnFCLFVBQVEsRUFBRTtBQVJZLENBQTFCO0FBV0E3QixVQUFVLENBQUMyRSxTQUFYO0FBQ0lQLE9BQUssRUFBRVEsaURBQVMsQ0FBQ0MsR0FEckI7QUFFSXhELE1BQUksRUFBRXVELGlEQUFTLENBQUNFLElBRnBCO0FBR0kxQixXQUFTLEVBQUV3QixpREFBUyxDQUFDRyxNQUh6QjtBQUlJekQsT0FBSyxFQUFFc0QsaURBQVMsQ0FBQ0UsSUFKckI7QUFLSTFFLGFBQVcsRUFBRXdFLGlEQUFTLENBQUNJLElBTDNCO0FBTUluRCxVQUFRLEVBQUUrQyxpREFBUyxDQUFDSSxJQUFWLENBQWVDLFVBTjdCO0FBT0l4QyxXQUFTLEVBQUVtQyxpREFBUyxDQUFDSSxJQVB6QjtBQVFJeEUsY0FBWSxFQUFFb0UsaURBQVMsQ0FBQ0U7QUFSNUIsZUFTY0YsaURBQVMsQ0FBQ0ksSUFBVixDQUFlQyxVQVQ3QixFIiwiZmlsZSI6IjU1ZWM5ODktbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgRG9tSGFuZGxlciBmcm9tICcuLi8uLi91dGlscy9Eb21IYW5kbGVyJztcblxuZXhwb3J0IGNsYXNzIE1lbnViYXJTdWIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFjdGl2ZUl0ZW06IG51bGwsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5vbkxlYWZDbGljayA9IHRoaXMub25MZWFmQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNoaWxkSXRlbUtleURvd24gPSB0aGlzLm9uQ2hpbGRJdGVtS2V5RG93bi5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgICAgaWYgKHByZXZQcm9wcy5wYXJlbnRBY3RpdmUgJiYgIXRoaXMucHJvcHMucGFyZW50QWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBhY3RpdmVJdGVtOiBudWxsLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRvY3VtZW50Q2xpY2tMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy5kb2N1bWVudENsaWNrTGlzdGVuZXIgPSBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudCAmJiAhdGhpcy5lbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlSXRlbTogbnVsbH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kb2N1bWVudENsaWNrTGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLmRvY3VtZW50Q2xpY2tMaXN0ZW5lcikge1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmRvY3VtZW50Q2xpY2tMaXN0ZW5lcik7XG4gICAgICAgICAgICB0aGlzLmRvY3VtZW50Q2xpY2tMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkl0ZW1Nb3VzZUVudGVyKGV2ZW50LCBpdGVtKSB7XG4gICAgICAgIGlmIChpdGVtLmRpc2FibGVkKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMucm9vdCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlSXRlbSB8fCB0aGlzLnByb3BzLnBvcHVwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUl0ZW06IGl0ZW0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBhY3RpdmVJdGVtOiBpdGVtLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkl0ZW1DbGljayhldmVudCwgaXRlbSkge1xuICAgICAgICBjb25zb2xlLmxvZygnaGV5eScsaXRlbSlcbiAgICAgICAgLy8gdGhpcy5wcm9wcy5zZXRQcm9wcyh7XG4gICAgICAgIC8vICAgICBtZW51SXRlbTogaXRlbSxcbiAgICAgICAgLy8gfSk7XG4gICAgICAgIGlmIChpdGVtLmRpc2FibGVkKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpdGVtLnVybCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpdGVtLmNvbW1hbmQpIHtcbiAgICAgICAgICAgIGl0ZW0uY29tbWFuZCh7XG4gICAgICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgICAgICAgICAgaXRlbTogaXRlbSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMucm9vdCkge1xuICAgICAgICAgICAgaWYgKGl0ZW0uaXRlbXMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5hY3RpdmVJdGVtICYmIGl0ZW0gPT09IHRoaXMuc3RhdGUuYWN0aXZlSXRlbSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUl0ZW06IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlSXRlbTogaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpdGVtLml0ZW1zKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnNldFByb3BzKHtcbiAgICAgICAgICAgICAgICBhY3RpdmVJdGVtOiBpdGVtLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLm9uTGVhZkNsaWNrKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgb25JdGVtS2V5RG93bihldmVudCwgaXRlbSkge1xuICAgICAgICBsZXQgbGlzdEl0ZW0gPSBldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG5cbiAgICAgICAgc3dpdGNoIChldmVudC53aGljaCkge1xuICAgICAgICAgICAgLy9kb3duXG4gICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnJvb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uaXRlbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kU3VibWVudShpdGVtLCBsaXN0SXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVG9OZXh0SXRlbShsaXN0SXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgLy91cFxuICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMucHJvcHMucm9vdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVG9QcmV2SXRlbShsaXN0SXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgLy9yaWdodFxuICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5yb290KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXh0SXRlbSA9IHRoaXMuZmluZE5leHRJdGVtKGxpc3RJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRJdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0SXRlbS5jaGlsZHJlblswXS5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uaXRlbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kU3VibWVudShpdGVtLCBsaXN0SXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAvL2xlZnRcbiAgICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMucm9vdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVG9QcmV2SXRlbShsaXN0SXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uS2V5RG93bikge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbktleURvd24oZXZlbnQsIGxpc3RJdGVtKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ2hpbGRJdGVtS2V5RG93bihldmVudCwgY2hpbGRMaXN0SXRlbSkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5yb290KSB7XG4gICAgICAgICAgICAvL3VwXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgZXZlbnQud2hpY2ggPT09IDM4ICYmXG4gICAgICAgICAgICAgICAgY2hpbGRMaXN0SXRlbS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nID09IG51bGxcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VNZW51KGNoaWxkTGlzdEl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy9sZWZ0XG4gICAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDM3KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZU1lbnUoY2hpbGRMaXN0SXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBhbmRTdWJtZW51KGl0ZW0sIGxpc3RJdGVtKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWN0aXZlSXRlbTogaXRlbSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBsaXN0SXRlbS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5mb2N1cygpO1xuICAgICAgICB9LCA1MCk7XG4gICAgfVxuXG4gICAgY29sbGFwc2VNZW51KGxpc3RJdGVtKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZUl0ZW06IG51bGx9KTtcbiAgICAgICAgbGlzdEl0ZW0ucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmZvY3VzKCk7XG4gICAgfVxuXG4gICAgbmF2aWdhdGVUb05leHRJdGVtKGxpc3RJdGVtKSB7XG4gICAgICAgIHZhciBuZXh0SXRlbSA9IHRoaXMuZmluZE5leHRJdGVtKGxpc3RJdGVtKTtcbiAgICAgICAgaWYgKG5leHRJdGVtKSB7XG4gICAgICAgICAgICBuZXh0SXRlbS5jaGlsZHJlblswXS5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmF2aWdhdGVUb1ByZXZJdGVtKGxpc3RJdGVtKSB7XG4gICAgICAgIHZhciBwcmV2SXRlbSA9IHRoaXMuZmluZFByZXZJdGVtKGxpc3RJdGVtKTtcbiAgICAgICAgaWYgKHByZXZJdGVtKSB7XG4gICAgICAgICAgICBwcmV2SXRlbS5jaGlsZHJlblswXS5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmluZE5leHRJdGVtKGl0ZW0pIHtcbiAgICAgICAgbGV0IG5leHRJdGVtID0gaXRlbS5uZXh0RWxlbWVudFNpYmxpbmc7XG5cbiAgICAgICAgaWYgKG5leHRJdGVtKVxuICAgICAgICAgICAgcmV0dXJuIERvbUhhbmRsZXIuaGFzQ2xhc3MobmV4dEl0ZW0sICdwLWRpc2FibGVkJykgfHxcbiAgICAgICAgICAgICAgICAhRG9tSGFuZGxlci5oYXNDbGFzcyhuZXh0SXRlbSwgJ3AtbWVudWl0ZW0nKVxuICAgICAgICAgICAgICAgID8gdGhpcy5maW5kTmV4dEl0ZW0obmV4dEl0ZW0pXG4gICAgICAgICAgICAgICAgOiBuZXh0SXRlbTtcbiAgICAgICAgZWxzZSByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmaW5kUHJldkl0ZW0oaXRlbSkge1xuICAgICAgICBsZXQgcHJldkl0ZW0gPSBpdGVtLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG5cbiAgICAgICAgaWYgKHByZXZJdGVtKVxuICAgICAgICAgICAgcmV0dXJuIERvbUhhbmRsZXIuaGFzQ2xhc3MocHJldkl0ZW0sICdwLWRpc2FibGVkJykgfHxcbiAgICAgICAgICAgICAgICAhRG9tSGFuZGxlci5oYXNDbGFzcyhwcmV2SXRlbSwgJ3AtbWVudWl0ZW0nKVxuICAgICAgICAgICAgICAgID8gdGhpcy5maW5kUHJldkl0ZW0ocHJldkl0ZW0pXG4gICAgICAgICAgICAgICAgOiBwcmV2SXRlbTtcbiAgICAgICAgZWxzZSByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBvbkxlYWZDbGljaygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3RpdmVJdGVtOiBudWxsLFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkxlYWZDbGljaykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkxlYWZDbGljaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyU2VwYXJhdG9yKGluZGV4KSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGkga2V5PXsnc2VwYXJhdG9yXycgKyBpbmRleH0gY2xhc3NOYW1lPVwicC1tZW51LXNlcGFyYXRvclwiPjwvbGk+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVySWNvbihpdGVtKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoJ3AtbWVudWl0ZW0taWNvbicsIGl0ZW0uaWNvbik7XG5cbiAgICAgICAgaWYgKGl0ZW0uaWNvbikge1xuICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT48L3NwYW4+O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXJTdWJtZW51SWNvbihpdGVtKSB7XG4gICAgICAgIGNvbnN0IGljb24gPSBjbGFzc05hbWVzKCdwLXN1Ym1lbnUtaWNvbiBwaSBwaS1mdycsIHtcbiAgICAgICAgICAgICdwaS1jYXJldC1kb3duJzogdGhpcy5wcm9wcy5yb290LFxuICAgICAgICAgICAgJ3BpLWNhcmV0LXJpZ2h0JzogIXRoaXMucHJvcHMucm9vdCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGl0ZW0uaXRlbXMpIHtcbiAgICAgICAgICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9e2ljb259Pjwvc3Bhbj47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlclN1Ym1lbnUoaXRlbSkge1xuICAgICAgICBpZiAoaXRlbS5pdGVtcykge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8TWVudWJhclN1YlxuICAgICAgICAgICAgICAgICAgICBtb2RlbD17aXRlbS5pdGVtc31cbiAgICAgICAgICAgICAgICAgICAgb25MZWFmQ2xpY2s9e3RoaXMub25MZWFmQ2xpY2t9XG4gICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5vbkNoaWxkSXRlbUtleURvd259XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudEFjdGl2ZT17aXRlbSA9PT0gdGhpcy5zdGF0ZS5hY3RpdmVJdGVtfVxuICAgICAgICAgICAgICAgICAgICBzZXRQcm9wcz17dGhpcy5wcm9wcy5zZXRQcm9wc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyTWVudWl0ZW0oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gY2xhc3NOYW1lcyhcbiAgICAgICAgICAgICdwLW1lbnVpdGVtJyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAncC1tZW51aXRlbS1hY3RpdmUnOiB0aGlzLnN0YXRlLmFjdGl2ZUl0ZW0gPT09IGl0ZW0sXG4gICAgICAgICAgICAgICAgJ3AtZGlzYWJsZWQnOiBpdGVtLmRpc2FibGVkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NOYW1lXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGljb24gPSB0aGlzLnJlbmRlckljb24oaXRlbSk7XG4gICAgICAgIGNvbnN0IHN1Ym1lbnVJY29uID0gdGhpcy5yZW5kZXJTdWJtZW51SWNvbihpdGVtKTtcbiAgICAgICAgY29uc3Qgc3VibWVudSA9IHRoaXMucmVuZGVyU3VibWVudShpdGVtKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAga2V5PXtpdGVtLmxhYmVsICsgJ18nICsgaW5kZXh9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgc3R5bGU9e2l0ZW0uc3R5bGV9XG4gICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXtldmVudCA9PiB0aGlzLm9uSXRlbU1vdXNlRW50ZXIoZXZlbnQsIGl0ZW0pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2l0ZW0udXJsIHx8ICcjJ31cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC1tZW51aXRlbS1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PXtpdGVtLnRhcmdldH1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZXZlbnQgPT4gdGhpcy5vbkl0ZW1DbGljayhldmVudCwgaXRlbSl9XG4gICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17ZXZlbnQgPT4gdGhpcy5vbkl0ZW1LZXlEb3duKGV2ZW50LCBpdGVtKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtpY29ufVxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwLW1lbnVpdGVtLXRleHRcIj57aXRlbS5sYWJlbH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIHtzdWJtZW51SWNvbn1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAge3N1Ym1lbnV9XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlckl0ZW0oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgaWYgKGl0ZW0uc2VwYXJhdG9yKSByZXR1cm4gdGhpcy5yZW5kZXJTZXBhcmF0b3IoaW5kZXgpO1xuICAgICAgICBlbHNlIHJldHVybiB0aGlzLnJlbmRlck1lbnVpdGVtKGl0ZW0sIGluZGV4KTtcbiAgICB9XG5cbiAgICByZW5kZXJNZW51KCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5tb2RlbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMubW9kZWwubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlckl0ZW0oaXRlbSwgaW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gY2xhc3NOYW1lcyh7XG4gICAgICAgICAgICAncC1zdWJtZW51LWxpc3QnOiAhdGhpcy5wcm9wcy5yb290LFxuICAgICAgICAgICAgJ3AtbWVudWJhci1yb290LWxpc3QnOiB0aGlzLnByb3BzLnJvb3QsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBzdWJtZW51ID0gdGhpcy5yZW5kZXJNZW51KCk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx1bCByZWY9e2VsID0+ICh0aGlzLmVsZW1lbnQgPSBlbCl9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgICAgICAgICB7c3VibWVudX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5NZW51YmFyU3ViLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBtb2RlbDogbnVsbCxcbiAgICByb290OiBmYWxzZSxcbiAgICBjbGFzc05hbWU6IG51bGwsXG4gICAgcG9wdXA6IGZhbHNlLFxuICAgIG9uTGVhZkNsaWNrOiBudWxsLFxuICAgIG9uS2V5RG93bjogbnVsbCxcbiAgICBwYXJlbnRBY3RpdmU6IGZhbHNlLFxuICAgIHNldFByb3BzOiBudWxsLFxufTtcblxuTWVudWJhclN1Yi5wcm9wVHlwZXMgPSB7XG4gICAgbW9kZWw6IFByb3BUeXBlcy5hbnksXG4gICAgcm9vdDogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHBvcHVwOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvbkxlYWZDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgc2V0UHJvcHM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25LZXlEb3duOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBwYXJlbnRBY3RpdmU6IFByb3BUeXBlcy5ib29sLFxuICAgIHNldFByb3BzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=