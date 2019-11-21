webpackHotUpdateextra_dash_ui_components("main",{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/lib/components/Rating/Rating.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/lib/components/Rating/Rating.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".p-rating .p-rating-icon {\n    cursor: pointer;\n}\n\n.p-rating {\n    font-size: 1.25em;\n}\n\n.p-rating.p-disabled .p-rating-icon,\n.p-rating.p-rating-readonly .p-rating-icon {\n    cursor: default;\n}\n\nbody .p-rating .p-rating-icon.p-rating-cancel {\n    color: #e4018d;\n}\nbody .p-rating .p-rating-icon {\n    font-size: 20px;\n    text-align: center;\n    display: inline-block;\n    color: #333333;\n    -moz-border-radius: 3px;\n    -webkit-border-radius: 3px;\n    border-radius: 3px;\n    -moz-transition: color 0.2s, box-shadow 0.2s;\n    -o-transition: color 0.2s, box-shadow 0.2s;\n    -webkit-transition: color 0.2s, box-shadow 0.2s;\n    transition: color 0.2s, box-shadow 0.2s;\n}\n\n.p-rating .p-rating-icon {\n    cursor: pointer;\n}\nbody .pi {\n    font-size: 1.25em;\n}\n.pi {\n    font-family: 'primeicons';\n    speak: none;\n    font-style: normal;\n    font-weight: normal;\n    font-variant: normal;\n    text-transform: none;\n    line-height: 1;\n    display: inline-block;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n* {\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n}\n\nbody .p-disabled, body .p-component:disabled {\n    opacity: 0.5;\n    filter: alpha(opacity=50);\n}\n\nbody {\n    margin: 0;\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: auto;\n    background-color: #f6f6f6;\n    font-family: Open Sans,Helvetica Neue,sans-serif; \n    font-weight: 400;\n    color: #333;\n    -webkit-font-smoothing: antialiased;\n    font-size: 14px;\n}", ""]);


/***/ }),

/***/ "./src/lib/components/Rating/Rating.css":
/*!**********************************************!*\
  !*** ./src/lib/components/Rating/Rating.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./Rating.css */ "./node_modules/css-loader/dist/cjs.js!./src/lib/components/Rating/Rating.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"insertAt":"top","hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader/dist/cjs.js!./Rating.css */ "./node_modules/css-loader/dist/cjs.js!./src/lib/components/Rating/Rating.css", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./Rating.css */ "./node_modules/css-loader/dist/cjs.js!./src/lib/components/Rating/Rating.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/lib/components/Rating/Rating.js":
/*!*********************************************!*\
  !*** ./src/lib/components/Rating/Rating.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Rating; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_ToolTip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/ToolTip */ "./src/lib/utils/ToolTip.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





/**
 * Rating component
 * Displays rating
 */

var Rating =
/*#__PURE__*/
function (_Component) {
  _inherits(Rating, _Component);

  function Rating(props) {
    var _this;

    _classCallCheck(this, Rating);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Rating).call(this, props));
    _this.clear = _this.clear.bind(_assertThisInitialized(_this));
    _this.onStarKeyDown = _this.onStarKeyDown.bind(_assertThisInitialized(_this));
    _this.onCancelKeyDown = _this.onCancelKeyDown.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Rating, [{
    key: "rate",
    value: function rate(event, i) {
      if (!this.props.readonly && !this.props.disabled && this.props.onChange) {
        this.props.onChange({
          originalEvent: event,
          value: i,
          stopPropagation: function stopPropagation() {},
          preventDefault: function preventDefault() {},
          target: {
            name: this.props.name,
            id: this.props.id,
            value: i
          }
        });
      }

      event.preventDefault();
    }
  }, {
    key: "clear",
    value: function clear(event) {
      if (!this.props.readonly && !this.props.disabled && this.props.onChange) {
        this.props.onChange({
          originalEvent: event,
          value: null,
          stopPropagation: function stopPropagation() {},
          preventDefault: function preventDefault() {},
          target: {
            name: this.props.name,
            id: this.props.id,
            value: null
          }
        });
      }

      event.preventDefault();
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (nextProps.value === this.props.value && nextProps.disabled === this.props.disabled) {
        return false;
      }

      return true;
    }
  }, {
    key: "onStarKeyDown",
    value: function onStarKeyDown(event, value) {
      if (event.key === 'Enter') {
        this.rate(event, value);
      }
    }
  }, {
    key: "onCancelKeyDown",
    value: function onCancelKeyDown(event) {
      if (event.key === 'Enter') {
        this.clear(event);
      }
    }
  }, {
    key: "renderStars",
    value: function renderStars() {
      var _this2 = this;

      var starsArray = [];

      for (var i = 0; i < this.props.stars; i++) {
        starsArray[i] = i + 1;
      }

      var stars = starsArray.map(function (value) {
        var iconClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()('p-rating-icon pi', {
          'pi-star-o': !_this2.props.value || value > _this2.props.value,
          'pi-star': value <= _this2.props.value
        });
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: iconClass,
          onClick: function onClick(e) {
            return _this2.rate(e, value);
          },
          key: value,
          tabIndex: _this2.props.disabled || _this2.props.readonly ? null : '0',
          onKeyDown: function onKeyDown(e) {
            return _this2.onStarKeyDown(e, value);
          }
        });
      });
      return stars;
    }
  }, {
    key: "renderCancelIcon",
    value: function renderCancelIcon() {
      if (this.props.cancel) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "p-rating-icon p-rating-cancel pi pi-ban",
          onClick: this.clear,
          tabIndex: this.props.disabled || this.props.readonly ? null : '0',
          onKeyDown: this.onCancelKeyDown
        });
      } else {
        return null;
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.tooltip) {
        this.renderTooltip();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.tooltip !== this.props.tooltip) {
        if (this.tooltip) this.tooltip.updateContent(this.props.tooltip);else this.renderTooltip();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.tooltip) {
        this.tooltip.destroy();
        this.tooltip = null;
      }
    }
  }, {
    key: "renderTooltip",
    value: function renderTooltip() {
      this.tooltip = new _utils_ToolTip__WEBPACK_IMPORTED_MODULE_3__["default"]({
        target: this.element,
        content: this.props.tooltip,
        options: this.props.tooltipOptions
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var className = classnames__WEBPACK_IMPORTED_MODULE_2___default()('p-rating', this.props.className, {
        'p-disabled': this.props.disabled,
        'p-rating-readonly': this.props.readonly
      });
      var cancelIcon = this.renderCancelIcon();
      var stars = this.renderStars();
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        ref: function ref(el) {
          return _this3.element = el;
        },
        id: this.props.id,
        className: className,
        style: this.props.style
      }, cancelIcon, stars);
    }
  }]);

  return Rating;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


Rating.defaultProps = {
  id: null,
  value: null,
  disabled: false,
  readonly: false,
  stars: 5,
  cancel: true,
  style: null,
  className: null,
  tooltip: null,
  tooltipOptions: null,
  onChange: null
};
Rating.propTypes = {
  /**
   * Unique identifier of the element.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Value of the rating.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * When present, it specifies that the element should be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * When present, changing the value is not possible.
   */
  readonly: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Number of stars.
   */
  stars: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * When specified a cancel icon is displayed to allow removing the value.
   */
  cancel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Inline style of the component.
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * ClassName of the component.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Content of the tooltip.
   */
  tooltip: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * 	Configuration of the tooltip, refer to the tooltip documentation for more information.
   */
  tooltipOptions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Callback to invoke on value change.
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ }),

/***/ "./src/lib/components/Rating/RatingComponent.js":
/*!******************************************************!*\
  !*** ./src/lib/components/Rating/RatingComponent.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RatingComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Rating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Rating */ "./src/lib/components/Rating/Rating.js");
/* harmony import */ var _Rating_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Rating.css */ "./src/lib/components/Rating/Rating.css");
/* harmony import */ var _Rating_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Rating_css__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



 // import '../../../../test.css'

var RatingComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(RatingComponent, _Component);

  function RatingComponent() {
    var _this;

    _classCallCheck(this, RatingComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RatingComponent).call(this));
    _this.state = {
      val1: null,
      val2: null
    };
    return _this;
  }

  _createClass(RatingComponent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "content-section implementation"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Rating__WEBPACK_IMPORTED_MODULE_1__["default"], {
        value: this.state.val2,
        cancel: false,
        onChange: function onChange(e) {
          return _this2.props.setProps({
            val2: e.value
          });
        }
      }));
    }
  }]);

  return RatingComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


RatingComponent.defaultProps = {
  id: null,
  value: null,
  disabled: false,
  readonly: false,
  stars: 5,
  cancel: true,
  style: null,
  className: null,
  tooltip: null,
  tooltipOptions: null,
  onChange: null
};
RatingComponent.propTypes = {
  /**
   * Unique identifier of the element.
   */
  id: PropTypes.string,

  /**
   * Value of the rating.
   */
  value: PropTypes.number,

  /**
   * When present, it specifies that the element should be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * When present, changing the value is not possible.
   */
  readonly: PropTypes.bool,

  /**
   * Number of stars.
   */
  stars: PropTypes.number,

  /**
   * When specified a cancel icon is displayed to allow removing the value.
   */
  cancel: PropTypes.bool,

  /**
   * Inline style of the component.
   */
  style: PropTypes.object,

  /**
   * ClassName of the component.
   */
  className: PropTypes.string,

  /**
   * Content of the tooltip.
   */
  tooltip: PropTypes.string,

  /**
   * 	Configuration of the tooltip, refer to the tooltip documentation for more information.
   */
  tooltipOptions: PropTypes.object,

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: PropTypes.func
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvUmF0aW5nL1JhdGluZy5jc3MiLCJ3ZWJwYWNrOi8vZXh0cmFfZGFzaF91aV9jb21wb25lbnRzLy4vc3JjL2xpYi9jb21wb25lbnRzL1JhdGluZy9SYXRpbmcuY3NzPzZkNmMiLCJ3ZWJwYWNrOi8vZXh0cmFfZGFzaF91aV9jb21wb25lbnRzLy4vc3JjL2xpYi9jb21wb25lbnRzL1JhdGluZy9SYXRpbmcuanMiLCJ3ZWJwYWNrOi8vZXh0cmFfZGFzaF91aV9jb21wb25lbnRzLy4vc3JjL2xpYi9jb21wb25lbnRzL1JhdGluZy9SYXRpbmdDb21wb25lbnQuanMiXSwibmFtZXMiOlsiUmF0aW5nIiwicHJvcHMiLCJjbGVhciIsImJpbmQiLCJvblN0YXJLZXlEb3duIiwib25DYW5jZWxLZXlEb3duIiwiZXZlbnQiLCJpIiwicmVhZG9ubHkiLCJkaXNhYmxlZCIsIm9uQ2hhbmdlIiwib3JpZ2luYWxFdmVudCIsInZhbHVlIiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJuYW1lIiwiaWQiLCJuZXh0UHJvcHMiLCJuZXh0U3RhdGUiLCJrZXkiLCJyYXRlIiwic3RhcnNBcnJheSIsInN0YXJzIiwibWFwIiwiaWNvbkNsYXNzIiwiY2xhc3NOYW1lcyIsImUiLCJjYW5jZWwiLCJ0b29sdGlwIiwicmVuZGVyVG9vbHRpcCIsInByZXZQcm9wcyIsInVwZGF0ZUNvbnRlbnQiLCJkZXN0cm95IiwiVG9vbHRpcCIsImVsZW1lbnQiLCJjb250ZW50Iiwib3B0aW9ucyIsInRvb2x0aXBPcHRpb25zIiwiY2xhc3NOYW1lIiwiY2FuY2VsSWNvbiIsInJlbmRlckNhbmNlbEljb24iLCJyZW5kZXJTdGFycyIsImVsIiwic3R5bGUiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJudW1iZXIiLCJib29sIiwib2JqZWN0IiwiZnVuYyIsIlJhdGluZ0NvbXBvbmVudCIsInN0YXRlIiwidmFsMSIsInZhbDIiLCJzZXRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkJBQTJCLG1CQUFPLENBQUMsOEdBQXlEO0FBQzVGO0FBQ0EsY0FBYyxRQUFTLDZCQUE2QixzQkFBc0IsR0FBRyxlQUFlLHdCQUF3QixHQUFHLHNGQUFzRixzQkFBc0IsR0FBRyxtREFBbUQscUJBQXFCLEdBQUcsaUNBQWlDLHNCQUFzQix5QkFBeUIsNEJBQTRCLHFCQUFxQiw4QkFBOEIsaUNBQWlDLHlCQUF5QixtREFBbUQsaURBQWlELHNEQUFzRCw4Q0FBOEMsR0FBRyw4QkFBOEIsc0JBQXNCLEdBQUcsWUFBWSx3QkFBd0IsR0FBRyxPQUFPLGdDQUFnQyxrQkFBa0IseUJBQXlCLDBCQUEwQiwyQkFBMkIsMkJBQTJCLHFCQUFxQiw0QkFBNEIsMENBQTBDLHlDQUF5QyxHQUFHLE9BQU8sa0NBQWtDLHFDQUFxQyw2QkFBNkIsR0FBRyxrREFBa0QsbUJBQW1CLGdDQUFnQyxHQUFHLFVBQVUsZ0JBQWdCLG1CQUFtQix5QkFBeUIsdUJBQXVCLGdDQUFnQyx1REFBdUQsd0JBQXdCLGtCQUFrQiwwQ0FBMEMsc0JBQXNCLEdBQUc7Ozs7Ozs7Ozs7Ozs7QUNEbmxELGNBQWMsbUJBQU8sQ0FBQyxtSkFBZ0U7O0FBRXRGLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyw0R0FBeUQ7O0FBRTlFOztBQUVBLEdBQUcsSUFBVTtBQUNiLG1CQUFtQixtSkFBZ0U7QUFDbkYsbUJBQW1CLG1CQUFPLENBQUMsbUpBQWdFOztBQUUzRixvREFBb0QsUUFBUzs7QUFFN0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQSxFQUFFOztBQUVGLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7Ozs7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Ozs7QUFHQXpDLFVBQVEsRUFBRXVDLFNBQVMsQ0FBQ0csSUFaSTs7QUFheEI7OztBQUdBM0MsVUFBUSxFQUFFd0MsU0FBUyxDQUFDRyxJQWhCSTs7QUFpQnhCOzs7QUFHQTVCLE9BQUssRUFBRXlCLFNBQVMsQ0FBQ0UsTUFwQk87O0FBcUJ4Qjs7O0FBR0F0QixRQUFNLEVBQUVvQixTQUFTLENBQUNHLElBeEJNOztBQXlCeEI7OztBQUdBUCxPQUFLLEVBQUVJLFNBQVMsQ0FBQ0ksTUE1Qk87O0FBNkJ4Qjs7O0FBR0FiLFdBQVMsRUFBRVMsU0FBUyxDQUFDQyxNQWhDRzs7QUFpQ3hCOzs7QUFHQXBCLFNBQU8sRUFBRW1CLFNBQVMsQ0FBQ0MsTUFwQ0s7O0FBcUN4Qjs7O0FBR0FYLGdCQUFjLEVBQUVVLFNBQVMsQ0FBQ0ksTUF4Q0Y7O0FBeUN4Qjs7OztBQUlBTSxVQUFRLEVBQUVWLFNBQVMsQ0FBQ0s7QUE3Q0ksQ0FBNUIsQyIsImZpbGUiOiJlYmZmODFiLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnAtcmF0aW5nIC5wLXJhdGluZy1pY29uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucC1yYXRpbmcge1xcbiAgICBmb250LXNpemU6IDEuMjVlbTtcXG59XFxuXFxuLnAtcmF0aW5nLnAtZGlzYWJsZWQgLnAtcmF0aW5nLWljb24sXFxuLnAtcmF0aW5nLnAtcmF0aW5nLXJlYWRvbmx5IC5wLXJhdGluZy1pY29uIHtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG5ib2R5IC5wLXJhdGluZyAucC1yYXRpbmctaWNvbi5wLXJhdGluZy1jYW5jZWwge1xcbiAgICBjb2xvcjogI2U0MDE4ZDtcXG59XFxuYm9keSAucC1yYXRpbmcgLnAtcmF0aW5nLWljb24ge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBjb2xvcjogIzMzMzMzMztcXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIC1tb3otdHJhbnNpdGlvbjogY29sb3IgMC4ycywgYm94LXNoYWRvdyAwLjJzO1xcbiAgICAtby10cmFuc2l0aW9uOiBjb2xvciAwLjJzLCBib3gtc2hhZG93IDAuMnM7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMC4ycywgYm94LXNoYWRvdyAwLjJzO1xcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzLCBib3gtc2hhZG93IDAuMnM7XFxufVxcblxcbi5wLXJhdGluZyAucC1yYXRpbmctaWNvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuYm9keSAucGkge1xcbiAgICBmb250LXNpemU6IDEuMjVlbTtcXG59XFxuLnBpIHtcXG4gICAgZm9udC1mYW1pbHk6ICdwcmltZWljb25zJztcXG4gICAgc3BlYWs6IG5vbmU7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC12YXJpYW50OiBub3JtYWw7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG59XFxuXFxuKiB7XFxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IC5wLWRpc2FibGVkLCBib2R5IC5wLWNvbXBvbmVudDpkaXNhYmxlZCB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTUwKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XFxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMsSGVsdmV0aWNhIE5ldWUsc2Fucy1zZXJpZjsgXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGNvbG9yOiAjMzMzO1xcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbn1cIiwgXCJcIl0pO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vUmF0aW5nLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaW5zZXJ0QXRcIjpcInRvcFwiLFwiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9SYXRpbmcuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9SYXRpbmcuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuLi8uLi91dGlscy9Ub29sVGlwJztcblxuLyoqXG4gKiBSYXRpbmcgY29tcG9uZW50XG4gKiBEaXNwbGF5cyByYXRpbmdcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmF0aW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5jbGVhciA9IHRoaXMuY2xlYXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblN0YXJLZXlEb3duID0gdGhpcy5vblN0YXJLZXlEb3duLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DYW5jZWxLZXlEb3duID0gdGhpcy5vbkNhbmNlbEtleURvd24uYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICByYXRlKGV2ZW50LCBpKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICF0aGlzLnByb3BzLnJlYWRvbmx5ICYmXG4gICAgICAgICAgICAhdGhpcy5wcm9wcy5kaXNhYmxlZCAmJlxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoe1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgICAgIHZhbHVlOiBpLFxuICAgICAgICAgICAgICAgIHN0b3BQcm9wYWdhdGlvbjogKCkgPT4ge30sXG4gICAgICAgICAgICAgICAgcHJldmVudERlZmF1bHQ6ICgpID0+IHt9LFxuICAgICAgICAgICAgICAgIHRhcmdldDoge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnByb3BzLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGNsZWFyKGV2ZW50KSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICF0aGlzLnByb3BzLnJlYWRvbmx5ICYmXG4gICAgICAgICAgICAhdGhpcy5wcm9wcy5kaXNhYmxlZCAmJlxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoe1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICAgIHN0b3BQcm9wYWdhdGlvbjogKCkgPT4ge30sXG4gICAgICAgICAgICAgICAgcHJldmVudERlZmF1bHQ6ICgpID0+IHt9LFxuICAgICAgICAgICAgICAgIHRhcmdldDoge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnByb3BzLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBuZXh0UHJvcHMudmFsdWUgPT09IHRoaXMucHJvcHMudmFsdWUgJiZcbiAgICAgICAgICAgIG5leHRQcm9wcy5kaXNhYmxlZCA9PT0gdGhpcy5wcm9wcy5kaXNhYmxlZFxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIG9uU3RhcktleURvd24oZXZlbnQsIHZhbHVlKSB7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgIHRoaXMucmF0ZShldmVudCwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DYW5jZWxLZXlEb3duKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXIoZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyU3RhcnMoKSB7XG4gICAgICAgIGxldCBzdGFyc0FycmF5ID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcm9wcy5zdGFyczsgaSsrKSB7XG4gICAgICAgICAgICBzdGFyc0FycmF5W2ldID0gaSArIDE7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc3RhcnMgPSBzdGFyc0FycmF5Lm1hcCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICBsZXQgaWNvbkNsYXNzID0gY2xhc3NOYW1lcygncC1yYXRpbmctaWNvbiBwaScsIHtcbiAgICAgICAgICAgICAgICAncGktc3Rhci1vJzogIXRoaXMucHJvcHMudmFsdWUgfHwgdmFsdWUgPiB0aGlzLnByb3BzLnZhbHVlLFxuICAgICAgICAgICAgICAgICdwaS1zdGFyJzogdmFsdWUgPD0gdGhpcy5wcm9wcy52YWx1ZSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aWNvbkNsYXNzfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHRoaXMucmF0ZShlLCB2YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgIGtleT17dmFsdWV9XG4gICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGlzYWJsZWQgfHwgdGhpcy5wcm9wcy5yZWFkb25seSA/IG51bGwgOiAnMCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBvbktleURvd249e2UgPT4gdGhpcy5vblN0YXJLZXlEb3duKGUsIHZhbHVlKX1cbiAgICAgICAgICAgICAgICA+PC9zcGFuPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHN0YXJzO1xuICAgIH1cblxuICAgIHJlbmRlckNhbmNlbEljb24oKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNhbmNlbCkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLXJhdGluZy1pY29uIHAtcmF0aW5nLWNhbmNlbCBwaSBwaS1iYW5cIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmNsZWFyfVxuICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRpc2FibGVkIHx8IHRoaXMucHJvcHMucmVhZG9ubHkgPyBudWxsIDogJzAnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXt0aGlzLm9uQ2FuY2VsS2V5RG93bn1cbiAgICAgICAgICAgICAgICA+PC9zcGFuPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnRvb2x0aXApIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyVG9vbHRpcCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgICBpZiAocHJldlByb3BzLnRvb2x0aXAgIT09IHRoaXMucHJvcHMudG9vbHRpcCkge1xuICAgICAgICAgICAgaWYgKHRoaXMudG9vbHRpcCkgdGhpcy50b29sdGlwLnVwZGF0ZUNvbnRlbnQodGhpcy5wcm9wcy50b29sdGlwKTtcbiAgICAgICAgICAgIGVsc2UgdGhpcy5yZW5kZXJUb29sdGlwKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMudG9vbHRpcCkge1xuICAgICAgICAgICAgdGhpcy50b29sdGlwLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMudG9vbHRpcCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXJUb29sdGlwKCkge1xuICAgICAgICB0aGlzLnRvb2x0aXAgPSBuZXcgVG9vbHRpcCh7XG4gICAgICAgICAgICB0YXJnZXQ6IHRoaXMuZWxlbWVudCxcbiAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMucHJvcHMudG9vbHRpcCxcbiAgICAgICAgICAgIG9wdGlvbnM6IHRoaXMucHJvcHMudG9vbHRpcE9wdGlvbnMsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoJ3AtcmF0aW5nJywgdGhpcy5wcm9wcy5jbGFzc05hbWUsIHtcbiAgICAgICAgICAgICdwLWRpc2FibGVkJzogdGhpcy5wcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICAgICdwLXJhdGluZy1yZWFkb25seSc6IHRoaXMucHJvcHMucmVhZG9ubHksXG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgY2FuY2VsSWNvbiA9IHRoaXMucmVuZGVyQ2FuY2VsSWNvbigpO1xuICAgICAgICBsZXQgc3RhcnMgPSB0aGlzLnJlbmRlclN0YXJzKCk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICByZWY9e2VsID0+ICh0aGlzLmVsZW1lbnQgPSBlbCl9XG4gICAgICAgICAgICAgICAgaWQ9e3RoaXMucHJvcHMuaWR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2NhbmNlbEljb259XG4gICAgICAgICAgICAgICAge3N0YXJzfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5SYXRpbmcuZGVmYXVsdFByb3BzID0ge1xuICAgIGlkOiBudWxsLFxuICAgIHZhbHVlOiBudWxsLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICByZWFkb25seTogZmFsc2UsXG4gICAgc3RhcnM6IDUsXG4gICAgY2FuY2VsOiB0cnVlLFxuICAgIHN0eWxlOiBudWxsLFxuICAgIGNsYXNzTmFtZTogbnVsbCxcbiAgICB0b29sdGlwOiBudWxsLFxuICAgIHRvb2x0aXBPcHRpb25zOiBudWxsLFxuICAgIG9uQ2hhbmdlOiBudWxsLFxufTtcblxuUmF0aW5nLnByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBVbmlxdWUgaWRlbnRpZmllciBvZiB0aGUgZWxlbWVudC5cbiAgICAgKi9cbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKipcbiAgICAgKiBWYWx1ZSBvZiB0aGUgcmF0aW5nLlxuICAgICAqL1xuICAgIHZhbHVlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIC8qKlxuICAgICAqIFdoZW4gcHJlc2VudCwgaXQgc3BlY2lmaWVzIHRoYXQgdGhlIGVsZW1lbnQgc2hvdWxkIGJlIGRpc2FibGVkLlxuICAgICAqL1xuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiBXaGVuIHByZXNlbnQsIGNoYW5naW5nIHRoZSB2YWx1ZSBpcyBub3QgcG9zc2libGUuXG4gICAgICovXG4gICAgcmVhZG9ubHk6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIE51bWJlciBvZiBzdGFycy5cbiAgICAgKi9cbiAgICBzdGFyczogUHJvcFR5cGVzLm51bWJlcixcbiAgICAvKipcbiAgICAgKiBXaGVuIHNwZWNpZmllZCBhIGNhbmNlbCBpY29uIGlzIGRpc3BsYXllZCB0byBhbGxvdyByZW1vdmluZyB0aGUgdmFsdWUuXG4gICAgICovXG4gICAgY2FuY2VsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiBJbmxpbmUgc3R5bGUgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAvKipcbiAgICAgKiBDbGFzc05hbWUgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICogQ29udGVudCBvZiB0aGUgdG9vbHRpcC5cbiAgICAgKi9cbiAgICB0b29sdGlwOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqIFx0Q29uZmlndXJhdGlvbiBvZiB0aGUgdG9vbHRpcCwgcmVmZXIgdG8gdGhlIHRvb2x0aXAgZG9jdW1lbnRhdGlvbiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAgICAgKi9cbiAgICB0b29sdGlwT3B0aW9uczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBpbnZva2Ugb24gdmFsdWUgY2hhbmdlLlxuICAgICAqL1xuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJhdGluZyBmcm9tICcuL1JhdGluZydcbmltcG9ydCAnLi9SYXRpbmcuY3NzJ1xuLy8gaW1wb3J0ICcuLi8uLi8uLi8uLi90ZXN0LmNzcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmF0aW5nQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0geyBcbiAgICAgICAgICAgIHZhbDE6IG51bGwsIFxuICAgICAgICAgICAgdmFsMjogbnVsbFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtc2VjdGlvbiBpbXBsZW1lbnRhdGlvblwiPlxuICAgIFxuICAgICAgICAgICAgICAgICAgICA8UmF0aW5nIHZhbHVlPXt0aGlzLnN0YXRlLnZhbDJ9IGNhbmNlbD17ZmFsc2V9IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5wcm9wcy5zZXRQcm9wcyh7dmFsMjogZS52YWx1ZX0pfSAvPlxuXG4gXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuUmF0aW5nQ29tcG9uZW50LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBpZDogbnVsbCxcbiAgICB2YWx1ZTogbnVsbCxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgcmVhZG9ubHk6IGZhbHNlLFxuICAgIHN0YXJzOiA1LFxuICAgIGNhbmNlbDogdHJ1ZSxcbiAgICBzdHlsZTogbnVsbCxcbiAgICBjbGFzc05hbWU6IG51bGwsXG4gICAgdG9vbHRpcDogbnVsbCxcbiAgICB0b29sdGlwT3B0aW9uczogbnVsbCxcbiAgICBvbkNoYW5nZTogbnVsbCxcbn07XG5cblJhdGluZ0NvbXBvbmVudC5wcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogVW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIGVsZW1lbnQuXG4gICAgICovXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICogVmFsdWUgb2YgdGhlIHJhdGluZy5cbiAgICAgKi9cbiAgICB2YWx1ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICAvKipcbiAgICAgKiBXaGVuIHByZXNlbnQsIGl0IHNwZWNpZmllcyB0aGF0IHRoZSBlbGVtZW50IHNob3VsZCBiZSBkaXNhYmxlZC5cbiAgICAgKi9cbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICogV2hlbiBwcmVzZW50LCBjaGFuZ2luZyB0aGUgdmFsdWUgaXMgbm90IHBvc3NpYmxlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5OiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiBOdW1iZXIgb2Ygc3RhcnMuXG4gICAgICovXG4gICAgc3RhcnM6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgLyoqXG4gICAgICogV2hlbiBzcGVjaWZpZWQgYSBjYW5jZWwgaWNvbiBpcyBkaXNwbGF5ZWQgdG8gYWxsb3cgcmVtb3ZpbmcgdGhlIHZhbHVlLlxuICAgICAqL1xuICAgIGNhbmNlbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICogSW5saW5lIHN0eWxlIG9mIHRoZSBjb21wb25lbnQuXG4gICAgICovXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgLyoqXG4gICAgICogQ2xhc3NOYW1lIG9mIHRoZSBjb21wb25lbnQuXG4gICAgICovXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqIENvbnRlbnQgb2YgdGhlIHRvb2x0aXAuXG4gICAgICovXG4gICAgdG9vbHRpcDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKipcbiAgICAgKiBcdENvbmZpZ3VyYXRpb24gb2YgdGhlIHRvb2x0aXAsIHJlZmVyIHRvIHRoZSB0b29sdGlwIGRvY3VtZW50YXRpb24gZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gICAgICovXG4gICAgdG9vbHRpcE9wdGlvbnM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgLyoqXG4gICAgICogRGFzaC1hc3NpZ25lZCBjYWxsYmFjayB0aGF0IHNob3VsZCBiZSBjYWxsZWQgdG8gcmVwb3J0IHByb3BlcnR5IGNoYW5nZXNcbiAgICAgKiB0byBEYXNoLCB0byBtYWtlIHRoZW0gYXZhaWxhYmxlIGZvciBjYWxsYmFja3MuXG4gICAgICovXG4gICAgc2V0UHJvcHM6IFByb3BUeXBlcy5mdW5jLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=