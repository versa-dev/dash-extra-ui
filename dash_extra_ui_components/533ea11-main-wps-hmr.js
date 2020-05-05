webpackHotUpdatedash_extra_ui_components("main",{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/lib/components/MenuBar/MenuBar.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/lib/components/MenuBar/MenuBar.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".p-menubar {\n    padding: .25em;\n}\n\n.p-menubar .p-menu-separator {\n    border-width: 1px 0 0 0;\n}\n\n.p-menubar:after {\n    content: \"\";\n    clear: both;\n    display: table;\n}\n\n.p-menubar ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\n.p-menubar .p-menuitem-link {\n    display: block;\n    padding: .25em;\n    position: relative;\n    text-decoration: none;\n}\n\n.p-menubar .p-menuitem-icon {\n    margin-right: .25em;\n}\n\n.p-menubar .p-menubar-root-list {\n    display: inline-block;\n}\n\n.p-menubar .p-menubar-root-list > .p-menuitem {\n    display: inline-block;\n    position: relative;\n}\n\n.p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link {\n    padding: .5em;\n}\n\n.p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link > .p-submenu-icon {\n    vertical-align: middle;\n    margin-left: .25em;\n}\n\n.p-menubar .p-menubar-root-list > li ul {\n    display: none;\n    z-index: 1;\n}\n\n.p-menubar .p-menubar-root-list > .p-menuitem-active > .p-submenu-list {\n    display: block;\n}\n\n.p-menubar .p-submenu-list {\n    display: none;\n    position: absolute;\n    min-width: 12.5em;\n    padding: .25em;\n}\n\n.p-menubar .p-submenu-list .p-menuitem {\n    margin: .125em 0;\n    position: relative;\n}\n\n.p-menubar .p-submenu-list > .p-menuitem-active > .p-submenu-list  {\n    display: block;\n    left: 100%;\n    top: 0;\n}\n\n.p-menubar .p-menuitem-icon {\n    margin-right: .25em;\n    vertical-align: middle;\n}\n\n.p-menubar .p-menuitem-text {\n    vertical-align: middle;\n}\n\n.p-menubar .p-submenu-list .p-menuitem-link .p-submenu-icon {\n    position: absolute;\n    margin-top: -.5em;\n    right: 0;\n    top: 50%;\n}\n\n.p-menubar .p-menuitem-active > .p-submenu > .p-submenu-list {\n    display: block;\n}\n\n.p-menubar .p-menubar-custom {\n    float: right;\n    padding: .25em;\n}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/lib/components/MenuBar/MenuBarComponent.css":
/*!***********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/lib/components/MenuBar/MenuBarComponent.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body .p-component {\n    font-family: 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 14px;\n    text-decoration: none;\n}\nbody .p-menubar {\n    padding: 0;\n    background-color: #fff;\n    border: 1px solid #c8c8c8;\n    -moz-border-radius: 3px;\n    -webkit-border-radius: 3px;\n    border-radius: 3px;\n}\n\nbody .p-menuitem-link {\n    padding: 0.714em 0.857em;\n    color: #333;\n    font-weight: normal;\n    -moz-border-radius: 0;\n    -webkit-border-radius: 0;\n    border-radius: 0;\n    -moz-transition: background-color 0.2s, box-shadow 0.2s;\n    -o-transition: background-color 0.2s, box-shadow 0.2s;\n    -webkit-transition: background-color 0.2s, box-shadow 0.2s;\n    transition: background-color 0.2s, box-shadow 0.2s;\n}\nbody .p-menubar .p-submenu-list {\n    padding: 0;\n    background-color: #fff;\n    border: 1px solid #c8c8c8;\n    -webkit-box-shadow: 0 0px 6px 0 rgba(0, 0, 0, 0.16);\n    -moz-box-shadow: 0 0px 6px 0 rgba(0, 0, 0, 0.16);\n    box-shadow: 0 0px 6px 0 rgba(0, 0, 0, 0.16);\n}\nbody .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link {\n    padding: 0.714em 0.857em;\n}\nbody .p-menubar .p-menuitem.p-menuitem-active > .p-menuitem-link {\n    background-color: #eaeaea;\n}\n\nbody .p-button.p-button-text-icon-left .p-button-text {\n    padding: 0.429em 1em 0.429em 2.25em;\n}\n.p-menubar .p-menuitem-text {\n    vertical-align: middle;\n}\n", ""]);


/***/ }),

/***/ "./src/lib/components/MenuBar/MenuBar.css":
/*!************************************************!*\
  !*** ./src/lib/components/MenuBar/MenuBar.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./MenuBar.css */ "./node_modules/css-loader/dist/cjs.js!./src/lib/components/MenuBar/MenuBar.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"insertAt":"top","hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader/dist/cjs.js!./MenuBar.css */ "./node_modules/css-loader/dist/cjs.js!./src/lib/components/MenuBar/MenuBar.css", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./MenuBar.css */ "./node_modules/css-loader/dist/cjs.js!./src/lib/components/MenuBar/MenuBar.css");

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

/***/ "./src/lib/components/MenuBar/MenuBar.js":
/*!***********************************************!*\
  !*** ./src/lib/components/MenuBar/MenuBar.js ***!
  \***********************************************/
/*! exports provided: Menubar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menubar", function() { return Menubar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MenubarSub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MenubarSub */ "./src/lib/components/MenuBar/MenubarSub.js");
/* harmony import */ var _MenuBar_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MenuBar.css */ "./src/lib/components/MenuBar/MenuBar.css");
/* harmony import */ var _MenuBar_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_MenuBar_css__WEBPACK_IMPORTED_MODULE_4__);
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
 * MenuBar
 */

var Menubar =
/*#__PURE__*/
function (_Component) {
  _inherits(Menubar, _Component);

  function Menubar() {
    _classCallCheck(this, Menubar);

    return _possibleConstructorReturn(this, _getPrototypeOf(Menubar).apply(this, arguments));
  }

  _createClass(Menubar, [{
    key: "renderCustomContent",
    value: function renderCustomContent() {
      if (this.props.children) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "p-menubar-custom"
        }, this.props.children);
      } else {
        return null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var className = classnames__WEBPACK_IMPORTED_MODULE_2___default()('p-menubar p-component', this.props.className);
      var customContent = this.renderCustomContent();
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: this.props.id,
        className: className,
        style: this.props.style
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenubarSub__WEBPACK_IMPORTED_MODULE_3__["MenubarSub"], {
        model: this.props.model,
        root: true,
        setProps: this.props.setProps
      }), customContent);
    }
  }]);

  return Menubar;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
Menubar.defaultProps = {
  id: null,
  model: null,
  style: null,
  className: null,
  setProps: null
};
Menubar.propTypes = {
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
   * Callback function
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ }),

/***/ "./src/lib/components/MenuBar/MenuBarComponent.css":
/*!*********************************************************!*\
  !*** ./src/lib/components/MenuBar/MenuBarComponent.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./MenuBarComponent.css */ "./node_modules/css-loader/dist/cjs.js!./src/lib/components/MenuBar/MenuBarComponent.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"insertAt":"top","hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader/dist/cjs.js!./MenuBarComponent.css */ "./node_modules/css-loader/dist/cjs.js!./src/lib/components/MenuBar/MenuBarComponent.css", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./MenuBarComponent.css */ "./node_modules/css-loader/dist/cjs.js!./src/lib/components/MenuBar/MenuBarComponent.css");

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
      console.log(e.target.value);
    });

    return _this;
  }

  _createClass(MenubarComponent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var inputText = this.props.inputText && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "p-col-12 p-md-4"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "p-inputgroup"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Inputtext_InputText__WEBPACK_IMPORTED_MODULE_3__["InputText"], {
        placeholder: "Keyword"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
        icon: "pi pi-search",
        className: "p-button-warning"
      }))) // <div className="">
      //     <InputText
      //         placeholder={this.props.inputPlaceholder}
      //         type="text"
      //         role="textbox"
      //         // value={this.props.menubarInput}
      //         onChange={this.onValueChange}
      //     />
      //     <span className="p-listbox-filter-icon pi pi-search"></span>
      // </div>
      ;
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

/***/ }),

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var MenubarSub =
/*#__PURE__*/
function (_Component) {
  _inherits(MenubarSub, _Component);

  function MenubarSub(props) {
    var _this;

    _classCallCheck(this, MenubarSub);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MenubarSub).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onItemClick", function (event, item) {
      _this.props.setProps({
        menubarItem: item
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

      if (_this.props.root) {
        if (item.items) {
          if (_this.state.activeItem && item === _this.state.activeItem) {
            _this.setState({
              activeItem: null
            });
          } else {
            _this.setState({
              activeItem: item
            });
          }
        }
      }

      if (!item.items) {
        _this.props.setProps({
          submenubarItem: item
        });

        _this.onLeafClick();
      }
    });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvTWVudUJhci9NZW51QmFyLmNzcyIsIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvTWVudUJhci9NZW51QmFyQ29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvTWVudUJhci9NZW51QmFyLmNzcz85MzZmIiwid2VicGFjazovL2V4dHJhX2Rhc2hfdWlfY29tcG9uZW50cy8uL3NyYy9saWIvY29tcG9uZW50cy9NZW51QmFyL01lbnVCYXIuanMiLCJ3ZWJwYWNrOi8vZXh0cmFfZGFzaF91aV9jb21wb25lbnRzLy4vc3JjL2xpYi9jb21wb25lbnRzL01lbnVCYXIvTWVudUJhckNvbXBvbmVudC5jc3M/NmY3OSIsIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvTWVudUJhci9NZW51QmFyQ29tcG9uZW50LmpzIiwid2VicGFjazovL2V4dHJhX2Rhc2hfdWlfY29tcG9uZW50cy8uL3NyYy9saWIvY29tcG9uZW50cy9NZW51QmFyL01lbnViYXJTdWIuanMiXSwibmFtZXMiOlsiTWVudWJhciIsInByb3BzIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJjbGFzc05hbWVzIiwiY3VzdG9tQ29udGVudCIsInJlbmRlckN1c3RvbUNvbnRlbnQiLCJpZCIsInN0eWxlIiwibW9kZWwiLCJzZXRQcm9wcyIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImFycmF5Iiwib2JqZWN0IiwiZnVuYyIsIk1lbnViYXJDb21wb25lbnQiLCJlIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwiaW5wdXRUZXh0IiwiYnV0dG9uIiwiYnRubGFiZWwiLCJidG5pY29uIiwibWFyZ2luTGVmdCIsIm1lbnViYXJJdGVtIiwic3VibWVudWJhckl0ZW0iLCJpbnB1dFBsYWNlaG9sZGVyIiwiYm9vbCIsIk1lbnViYXJTdWIiLCJldmVudCIsIml0ZW0iLCJkaXNhYmxlZCIsInByZXZlbnREZWZhdWx0IiwidXJsIiwiY29tbWFuZCIsIm9yaWdpbmFsRXZlbnQiLCJyb290IiwiaXRlbXMiLCJzdGF0ZSIsImFjdGl2ZUl0ZW0iLCJzZXRTdGF0ZSIsIm9uTGVhZkNsaWNrIiwiYmluZCIsIm9uQ2hpbGRJdGVtS2V5RG93biIsInByZXZQcm9wcyIsInBhcmVudEFjdGl2ZSIsImRvY3VtZW50Q2xpY2tMaXN0ZW5lciIsImVsZW1lbnQiLCJjb250YWlucyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJwb3B1cCIsImxpc3RJdGVtIiwiY3VycmVudFRhcmdldCIsInBhcmVudEVsZW1lbnQiLCJ3aGljaCIsImV4cGFuZFN1Ym1lbnUiLCJuYXZpZ2F0ZVRvTmV4dEl0ZW0iLCJuYXZpZ2F0ZVRvUHJldkl0ZW0iLCJuZXh0SXRlbSIsImZpbmROZXh0SXRlbSIsImZvY3VzIiwib25LZXlEb3duIiwiY2hpbGRMaXN0SXRlbSIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJjb2xsYXBzZU1lbnUiLCJzZXRUaW1lb3V0IiwicHJldkl0ZW0iLCJmaW5kUHJldkl0ZW0iLCJuZXh0RWxlbWVudFNpYmxpbmciLCJEb21IYW5kbGVyIiwiaGFzQ2xhc3MiLCJpbmRleCIsImljb24iLCJyZW5kZXJJY29uIiwic3VibWVudUljb24iLCJyZW5kZXJTdWJtZW51SWNvbiIsInN1Ym1lbnUiLCJyZW5kZXJTdWJtZW51IiwibGFiZWwiLCJvbkl0ZW1Nb3VzZUVudGVyIiwib25JdGVtQ2xpY2siLCJvbkl0ZW1LZXlEb3duIiwic2VwYXJhdG9yIiwicmVuZGVyU2VwYXJhdG9yIiwicmVuZGVyTWVudWl0ZW0iLCJtYXAiLCJyZW5kZXJJdGVtIiwicmVuZGVyTWVudSIsImVsIiwiYW55IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkJBQTJCLG1CQUFPLENBQUMsOEdBQXlEO0FBQzVGO0FBQ0EsY0FBYyxRQUFTLGVBQWUscUJBQXFCLEdBQUcsa0NBQWtDLDhCQUE4QixHQUFHLHNCQUFzQixvQkFBb0Isa0JBQWtCLHFCQUFxQixHQUFHLG1CQUFtQixnQkFBZ0IsaUJBQWlCLHVCQUF1QixHQUFHLGlDQUFpQyxxQkFBcUIscUJBQXFCLHlCQUF5Qiw0QkFBNEIsR0FBRyxpQ0FBaUMsMEJBQTBCLEdBQUcscUNBQXFDLDRCQUE0QixHQUFHLG1EQUFtRCw0QkFBNEIseUJBQXlCLEdBQUcsc0VBQXNFLG9CQUFvQixHQUFHLHdGQUF3Riw2QkFBNkIseUJBQXlCLEdBQUcsNkNBQTZDLG9CQUFvQixpQkFBaUIsR0FBRyw0RUFBNEUscUJBQXFCLEdBQUcsZ0NBQWdDLG9CQUFvQix5QkFBeUIsd0JBQXdCLHFCQUFxQixHQUFHLDRDQUE0Qyx1QkFBdUIseUJBQXlCLEdBQUcsd0VBQXdFLHFCQUFxQixpQkFBaUIsYUFBYSxHQUFHLGlDQUFpQywwQkFBMEIsNkJBQTZCLEdBQUcsaUNBQWlDLDZCQUE2QixHQUFHLGlFQUFpRSx5QkFBeUIsd0JBQXdCLGVBQWUsZUFBZSxHQUFHLGtFQUFrRSxxQkFBcUIsR0FBRyxrQ0FBa0MsbUJBQW1CLHFCQUFxQixHQUFHOzs7Ozs7Ozs7Ozs7QUNGMTJELDJCQUEyQixtQkFBTyxDQUFDLDhHQUF5RDtBQUM1RjtBQUNBLGNBQWMsUUFBUyxzQkFBc0IsNkRBQTZELHNCQUFzQiw0QkFBNEIsR0FBRyxtQkFBbUIsaUJBQWlCLDZCQUE2QixnQ0FBZ0MsOEJBQThCLGlDQUFpQyx5QkFBeUIsR0FBRywyQkFBMkIsK0JBQStCLGtCQUFrQiwwQkFBMEIsNEJBQTRCLCtCQUErQix1QkFBdUIsOERBQThELDREQUE0RCxpRUFBaUUseURBQXlELEdBQUcsbUNBQW1DLGlCQUFpQiw2QkFBNkIsZ0NBQWdDLDBEQUEwRCx1REFBdUQsa0RBQWtELEdBQUcseUVBQXlFLCtCQUErQixHQUFHLG9FQUFvRSxnQ0FBZ0MsR0FBRywyREFBMkQsMENBQTBDLEdBQUcsK0JBQStCLDZCQUE2QixHQUFHOzs7Ozs7Ozs7Ozs7O0FDRDE1QyxjQUFjLG1CQUFPLENBQUMsc0pBQWlFOztBQUV2Riw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsNEdBQXlEOztBQUU5RTs7QUFFQSxHQUFHLElBQVU7QUFDYixtQkFBbUIsc0pBQWlFO0FBQ3BGLG1CQUFtQixtQkFBTyxDQUFDLHNKQUFpRTs7QUFFNUYsb0RBQW9ELFFBQVM7O0FBRTdEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0EsRUFBRTs7QUFFRixnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUdPLElBQU1BLE9BQWI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSwwQ0FDMEI7QUFDbEIsVUFBSSxLQUFLQyxLQUFMLENBQVdDLFFBQWYsRUFBeUI7QUFDckIsZUFDSTtBQUFLLG1CQUFTLEVBQUM7QUFBZixXQUFtQyxLQUFLRCxLQUFMLENBQVdDLFFBQTlDLENBREo7QUFHSCxPQUpELE1BSU87QUFDSCxlQUFPLElBQVA7QUFDSDtBQUNKO0FBVEw7QUFBQTtBQUFBLDZCQVdhO0FBQ0wsVUFBTUMsU0FBUyxHQUFHQyxpREFBVSxDQUN4Qix1QkFEd0IsRUFFeEIsS0FBS0gsS0FBTCxDQUFXRSxTQUZhLENBQTVCO0FBSUEsVUFBTUUsYUFBYSxHQUFHLEtBQUtDLG1CQUFMLEVBQXRCO0FBRUEsYUFDSTtBQUNJLFVBQUUsRUFBRSxLQUFLTCxLQUFMLENBQVdNLEVBRG5CO0FBRUksaUJBQVMsRUFBRUosU0FGZjtBQUdJLGFBQUssRUFBRSxLQUFLRixLQUFMLENBQVdPO0FBSHRCLFNBS0ksMkRBQUMsc0RBQUQ7QUFDSSxhQUFLLEVBQUUsS0FBS1AsS0FBTCxDQUFXUSxLQUR0QjtBQUVJLFlBQUksRUFBRSxJQUZWO0FBR0ksZ0JBQVEsRUFBRSxLQUFLUixLQUFMLENBQVdTO0FBSHpCLFFBTEosRUFVS0wsYUFWTCxDQURKO0FBY0g7QUFoQ0w7O0FBQUE7QUFBQSxFQUE2Qk0sK0NBQTdCO0FBbUNBWCxPQUFPLENBQUNZLFlBQVIsR0FBdUI7QUFDbkJMLElBQUUsRUFBRSxJQURlO0FBRW5CRSxPQUFLLEVBQUUsSUFGWTtBQUduQkQsT0FBSyxFQUFFLElBSFk7QUFJbkJMLFdBQVMsRUFBRSxJQUpRO0FBS25CTyxVQUFRLEVBQUU7QUFMUyxDQUF2QjtBQVFBVixPQUFPLENBQUNhLFNBQVIsR0FBb0I7QUFDaEI7OztBQUdBTixJQUFFLEVBQUVPLGlEQUFTLENBQUNDLE1BSkU7O0FBS2hCOzs7QUFHQU4sT0FBSyxFQUFFSyxpREFBUyxDQUFDRSxLQVJEOztBQVNoQjs7O0FBR0FSLE9BQUssRUFBRU0saURBQVMsQ0FBQ0csTUFaRDs7QUFhaEI7OztBQUdBZCxXQUFTLEVBQUVXLGlEQUFTLENBQUNDLE1BaEJMOztBQWlCaEI7OztBQUdBTCxVQUFRLEVBQUVJLGlEQUFTLENBQUNJO0FBcEJKLENBQXBCLEM7Ozs7Ozs7Ozs7OztBQ25EQSxjQUFjLG1CQUFPLENBQUMsd0tBQTBFOztBQUVoRyw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsNEdBQXlEOztBQUU5RTs7QUFFQSxHQUFHLElBQVU7QUFDYixtQkFBbUIsd0tBQTBFO0FBQzdGLG1CQUFtQixtQkFBTyxDQUFDLHdLQUEwRTs7QUFFckcsb0RBQW9ELFFBQVM7O0FBRTdEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0EsRUFBRTs7QUFFRixnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7SUFHcUJDLGdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7b0VBRUQsVUFBQUMsQ0FBQyxFQUFJO0FBQ2pCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBQyxDQUFDRyxNQUFGLENBQVNDLEtBQXJCO0FBQ0gsSzs7Ozs7Ozs2QkFFUTtBQUFBOztBQUNMLFVBQU1DLFNBQVMsR0FBRyxLQUFLeEIsS0FBTCxDQUFXd0IsU0FBWCxJQUNkO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ2dCO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0ksMkRBQUMsOERBQUQ7QUFBVyxtQkFBVyxFQUFDO0FBQXZCLFFBREosRUFFSSwyREFBQyxzREFBRDtBQUFRLFlBQUksRUFBQyxjQUFiO0FBQTRCLGlCQUFTLEVBQUM7QUFBdEMsUUFGSixDQURoQixDQURjLENBT2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoQko7QUFrQkEsVUFBTUMsTUFBTSxHQUFHLEtBQUt6QixLQUFMLENBQVd5QixNQUFYLElBQ1gsMkRBQUMsc0RBQUQ7QUFDSSxhQUFLLEVBQUUsS0FBS3pCLEtBQUwsQ0FBVzBCLFFBRHRCO0FBRUksWUFBSSxFQUFFLEtBQUsxQixLQUFMLENBQVcyQixPQUZyQjtBQUdJLGFBQUssRUFBRTtBQUFDQyxvQkFBVSxFQUFFO0FBQWI7QUFIWCxRQURKO0FBT0EsYUFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJLDJEQUFDLGdEQUFEO0FBQ0ksYUFBSyxFQUFFLEtBQUs1QixLQUFMLENBQVdRLEtBRHRCO0FBRUksZ0JBQVEsRUFBRSxrQkFBQVIsS0FBSztBQUFBLGlCQUFJLE1BQUksQ0FBQ0EsS0FBTCxDQUFXUyxRQUFYLENBQW9CVCxLQUFwQixDQUFKO0FBQUEsU0FGbkIsQ0FHSTs7QUFISixTQUtLd0IsU0FMTCxFQU1LQyxNQU5MLENBREosQ0FESjtBQVlIOzs7O0VBNUN5Q2YsK0M7OztBQStDOUNRLGdCQUFnQixDQUFDUCxZQUFqQixHQUFnQztBQUM1QkwsSUFBRSxFQUFFLElBRHdCO0FBRTVCRSxPQUFLLEVBQUUsSUFGcUI7QUFHNUJELE9BQUssRUFBRSxJQUhxQjtBQUk1QkwsV0FBUyxFQUFFLElBSmlCO0FBSzVCTyxVQUFRLEVBQUUsSUFMa0I7QUFNNUJvQixhQUFXLEVBQUUsSUFOZTtBQU81QkMsZ0JBQWMsRUFBRSxJQVBZO0FBUTVCSixVQUFRLEVBQUUsUUFSa0I7QUFTNUJDLFNBQU8sRUFBRSxpQkFUbUI7QUFVNUJJLGtCQUFnQixFQUFFLFFBVlU7QUFXNUJQLFdBQVMsRUFBRSxJQVhpQjtBQVk1QkMsUUFBTSxFQUFFO0FBWm9CLENBQWhDO0FBZUFQLGdCQUFnQixDQUFDTixTQUFqQixHQUE2QjtBQUN6Qjs7O0FBR0FOLElBQUUsRUFBRU8saURBQVMsQ0FBQ0MsTUFKVzs7QUFLekI7OztBQUdBTixPQUFLLEVBQUVLLGlEQUFTLENBQUNFLEtBUlE7O0FBU3pCOzs7QUFJQVIsT0FBSyxFQUFFTSxpREFBUyxDQUFDRyxNQWJROztBQWN6Qjs7O0FBR0FlLGtCQUFnQixFQUFFbEIsaURBQVMsQ0FBQ0MsTUFqQkg7O0FBa0J6Qjs7O0FBR0FhLFNBQU8sRUFBRWQsaURBQVMsQ0FBQ0MsTUFyQk07O0FBc0J6Qjs7O0FBR0FZLFVBQVEsRUFBRWIsaURBQVMsQ0FBQ0MsTUF6Qks7O0FBMEJ6Qjs7O0FBR0FaLFdBQVMsRUFBRVcsaURBQVMsQ0FBQ0MsTUE3Qkk7O0FBOEJ6Qjs7O0FBR0FlLGFBQVcsRUFBRWhCLGlEQUFTLENBQUNHLE1BakNFOztBQWtDekI7OztBQUdBYyxnQkFBYyxFQUFFakIsaURBQVMsQ0FBQ0csTUFyQ0Q7QUFzQ3pCUSxXQUFTLEVBQUVYLGlEQUFTLENBQUNtQixJQXRDSTtBQXVDekJQLFFBQU0sRUFBRVosaURBQVMsQ0FBQ21CLElBdkNPOztBQXdDekI7OztBQUdBdkIsVUFBUSxFQUFFSSxpREFBUyxDQUFDSTtBQTNDSyxDQUE3QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1nQixVQUFiO0FBQUE7QUFBQTtBQUFBOztBQUNJLHNCQUFZakMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLG9GQUFNQSxLQUFOOztBQURlLGtFQXdETCxVQUFDa0MsS0FBRCxFQUFRQyxJQUFSLEVBQWlCO0FBQzNCLFlBQUtuQyxLQUFMLENBQVdTLFFBQVgsQ0FBb0I7QUFBQ29CLG1CQUFXLEVBQUVNO0FBQWQsT0FBcEI7O0FBQ0EsVUFBSUEsSUFBSSxDQUFDQyxRQUFULEVBQW1CO0FBQ2ZGLGFBQUssQ0FBQ0csY0FBTjtBQUNBO0FBQ0g7O0FBRUQsVUFBSSxDQUFDRixJQUFJLENBQUNHLEdBQVYsRUFBZTtBQUNYSixhQUFLLENBQUNHLGNBQU47QUFDSDs7QUFFRCxVQUFJRixJQUFJLENBQUNJLE9BQVQsRUFBa0I7QUFDZEosWUFBSSxDQUFDSSxPQUFMLENBQWE7QUFDVEMsdUJBQWEsRUFBRU4sS0FETjtBQUVUQyxjQUFJLEVBQUVBO0FBRkcsU0FBYjtBQUlIOztBQUVELFVBQUksTUFBS25DLEtBQUwsQ0FBV3lDLElBQWYsRUFBcUI7QUFDakIsWUFBSU4sSUFBSSxDQUFDTyxLQUFULEVBQWdCO0FBQ1osY0FBSSxNQUFLQyxLQUFMLENBQVdDLFVBQVgsSUFBeUJULElBQUksS0FBSyxNQUFLUSxLQUFMLENBQVdDLFVBQWpELEVBQTZEO0FBQ3pELGtCQUFLQyxRQUFMLENBQWM7QUFDVkQsd0JBQVUsRUFBRTtBQURGLGFBQWQ7QUFHSCxXQUpELE1BSU87QUFDSCxrQkFBS0MsUUFBTCxDQUFjO0FBQ1ZELHdCQUFVLEVBQUVUO0FBREYsYUFBZDtBQUdIO0FBQ0o7QUFDSjs7QUFFRCxVQUFJLENBQUNBLElBQUksQ0FBQ08sS0FBVixFQUFpQjtBQUNiLGNBQUsxQyxLQUFMLENBQVdTLFFBQVgsQ0FBb0I7QUFDaEJxQix3QkFBYyxFQUFFSztBQURBLFNBQXBCOztBQUdBLGNBQUtXLFdBQUw7QUFDSDtBQUNKLEtBOUZrQjs7QUFFZixVQUFLSCxLQUFMLEdBQWE7QUFDVEMsZ0JBQVUsRUFBRTtBQURILEtBQWI7QUFJQSxVQUFLRSxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJDLElBQWpCLCtCQUFuQjtBQUNBLFVBQUtDLGtCQUFMLEdBQTBCLE1BQUtBLGtCQUFMLENBQXdCRCxJQUF4QiwrQkFBMUI7QUFQZTtBQVFsQjs7QUFUTDtBQUFBO0FBQUEsdUNBV3VCRSxTQVh2QixFQVdrQztBQUMxQixVQUFJQSxTQUFTLENBQUNDLFlBQVYsSUFBMEIsQ0FBQyxLQUFLbEQsS0FBTCxDQUFXa0QsWUFBMUMsRUFBd0Q7QUFDcEQsYUFBS0wsUUFBTCxDQUFjO0FBQ1ZELG9CQUFVLEVBQUU7QUFERixTQUFkO0FBR0g7QUFDSjtBQWpCTDtBQUFBO0FBQUEsd0NBbUJ3QjtBQUFBOztBQUNoQixVQUFJLENBQUMsS0FBS08scUJBQVYsRUFBaUM7QUFDN0IsYUFBS0EscUJBQUwsR0FBNkIsVUFBQWpCLEtBQUssRUFBSTtBQUNsQyxjQUFJLE1BQUksQ0FBQ2tCLE9BQUwsSUFBZ0IsQ0FBQyxNQUFJLENBQUNBLE9BQUwsQ0FBYUMsUUFBYixDQUFzQm5CLEtBQUssQ0FBQ1osTUFBNUIsQ0FBckIsRUFBMEQ7QUFDdEQsa0JBQUksQ0FBQ3VCLFFBQUwsQ0FBYztBQUFDRCx3QkFBVSxFQUFFO0FBQWIsYUFBZDtBQUNIO0FBQ0osU0FKRDs7QUFNQVUsZ0JBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsS0FBS0oscUJBQXhDO0FBQ0g7QUFDSjtBQTdCTDtBQUFBO0FBQUEsMkNBK0IyQjtBQUNuQixVQUFJLEtBQUtBLHFCQUFULEVBQWdDO0FBQzVCRyxnQkFBUSxDQUFDRSxtQkFBVCxDQUE2QixPQUE3QixFQUFzQyxLQUFLTCxxQkFBM0M7QUFDQSxhQUFLQSxxQkFBTCxHQUE2QixJQUE3QjtBQUNIO0FBQ0o7QUFwQ0w7QUFBQTtBQUFBLHFDQXNDcUJqQixLQXRDckIsRUFzQzRCQyxJQXRDNUIsRUFzQ2tDO0FBQzFCLFVBQUlBLElBQUksQ0FBQ0MsUUFBVCxFQUFtQjtBQUNmRixhQUFLLENBQUNHLGNBQU47QUFDQTtBQUNIOztBQUVELFVBQUksS0FBS3JDLEtBQUwsQ0FBV3lDLElBQWYsRUFBcUI7QUFDakIsWUFBSSxLQUFLRSxLQUFMLENBQVdDLFVBQVgsSUFBeUIsS0FBSzVDLEtBQUwsQ0FBV3lELEtBQXhDLEVBQStDO0FBQzNDLGVBQUtaLFFBQUwsQ0FBYztBQUNWRCxzQkFBVSxFQUFFVDtBQURGLFdBQWQ7QUFHSDtBQUNKLE9BTkQsTUFNTztBQUNILGFBQUtVLFFBQUwsQ0FBYztBQUNWRCxvQkFBVSxFQUFFVDtBQURGLFNBQWQ7QUFHSDtBQUNKO0FBdkRMO0FBQUE7QUFBQSxrQ0FpR2tCRCxLQWpHbEIsRUFpR3lCQyxJQWpHekIsRUFpRytCO0FBQ3ZCLFVBQUl1QixRQUFRLEdBQUd4QixLQUFLLENBQUN5QixhQUFOLENBQW9CQyxhQUFuQzs7QUFFQSxjQUFRMUIsS0FBSyxDQUFDMkIsS0FBZDtBQUNJO0FBQ0EsYUFBSyxFQUFMO0FBQ0ksY0FBSSxLQUFLN0QsS0FBTCxDQUFXeUMsSUFBZixFQUFxQjtBQUNqQixnQkFBSU4sSUFBSSxDQUFDTyxLQUFULEVBQWdCO0FBQ1osbUJBQUtvQixhQUFMLENBQW1CM0IsSUFBbkIsRUFBeUJ1QixRQUF6QjtBQUNIO0FBQ0osV0FKRCxNQUlPO0FBQ0gsaUJBQUtLLGtCQUFMLENBQXdCTCxRQUF4QjtBQUNIOztBQUVEeEIsZUFBSyxDQUFDRyxjQUFOO0FBQ0E7QUFFSjs7QUFDQSxhQUFLLEVBQUw7QUFDSSxjQUFJLENBQUMsS0FBS3JDLEtBQUwsQ0FBV3lDLElBQWhCLEVBQXNCO0FBQ2xCLGlCQUFLdUIsa0JBQUwsQ0FBd0JOLFFBQXhCO0FBQ0g7O0FBRUR4QixlQUFLLENBQUNHLGNBQU47QUFDQTtBQUVKOztBQUNBLGFBQUssRUFBTDtBQUNJLGNBQUksS0FBS3JDLEtBQUwsQ0FBV3lDLElBQWYsRUFBcUI7QUFDakIsZ0JBQUl3QixRQUFRLEdBQUcsS0FBS0MsWUFBTCxDQUFrQlIsUUFBbEIsQ0FBZjs7QUFDQSxnQkFBSU8sUUFBSixFQUFjO0FBQ1ZBLHNCQUFRLENBQUNoRSxRQUFULENBQWtCLENBQWxCLEVBQXFCa0UsS0FBckI7QUFDSDtBQUNKLFdBTEQsTUFLTztBQUNILGdCQUFJaEMsSUFBSSxDQUFDTyxLQUFULEVBQWdCO0FBQ1osbUJBQUtvQixhQUFMLENBQW1CM0IsSUFBbkIsRUFBeUJ1QixRQUF6QjtBQUNIO0FBQ0o7O0FBRUR4QixlQUFLLENBQUNHLGNBQU47QUFDQTtBQUVKOztBQUNBLGFBQUssRUFBTDtBQUNJLGNBQUksS0FBS3JDLEtBQUwsQ0FBV3lDLElBQWYsRUFBcUI7QUFDakIsaUJBQUt1QixrQkFBTCxDQUF3Qk4sUUFBeEI7QUFDSDs7QUFFRHhCLGVBQUssQ0FBQ0csY0FBTjtBQUNBOztBQUVKO0FBQ0k7QUFqRFI7O0FBb0RBLFVBQUksS0FBS3JDLEtBQUwsQ0FBV29FLFNBQWYsRUFBMEI7QUFDdEIsYUFBS3BFLEtBQUwsQ0FBV29FLFNBQVgsQ0FBcUJsQyxLQUFyQixFQUE0QndCLFFBQTVCO0FBQ0g7QUFDSjtBQTNKTDtBQUFBO0FBQUEsdUNBNkp1QnhCLEtBN0p2QixFQTZKOEJtQyxhQTdKOUIsRUE2SjZDO0FBQ3JDLFVBQUksS0FBS3JFLEtBQUwsQ0FBV3lDLElBQWYsRUFBcUI7QUFDakI7QUFDQSxZQUNJUCxLQUFLLENBQUMyQixLQUFOLEtBQWdCLEVBQWhCLElBQ0FRLGFBQWEsQ0FBQ0Msc0JBQWQsSUFBd0MsSUFGNUMsRUFHRTtBQUNFLGVBQUtDLFlBQUwsQ0FBa0JGLGFBQWxCO0FBQ0g7QUFDSixPQVJELE1BUU87QUFDSDtBQUNBLFlBQUluQyxLQUFLLENBQUMyQixLQUFOLEtBQWdCLEVBQXBCLEVBQXdCO0FBQ3BCLGVBQUtVLFlBQUwsQ0FBa0JGLGFBQWxCO0FBQ0g7QUFDSjtBQUNKO0FBNUtMO0FBQUE7QUFBQSxrQ0E4S2tCbEMsSUE5S2xCLEVBOEt3QnVCLFFBOUt4QixFQThLa0M7QUFDMUIsV0FBS2IsUUFBTCxDQUFjO0FBQ1ZELGtCQUFVLEVBQUVUO0FBREYsT0FBZDtBQUlBcUMsZ0JBQVUsQ0FBQyxZQUFNO0FBQ2JkLGdCQUFRLENBQUN6RCxRQUFULENBQWtCLENBQWxCLEVBQXFCQSxRQUFyQixDQUE4QixDQUE5QixFQUFpQ0EsUUFBakMsQ0FBMEMsQ0FBMUMsRUFBNkNrRSxLQUE3QztBQUNILE9BRlMsRUFFUCxFQUZPLENBQVY7QUFHSDtBQXRMTDtBQUFBO0FBQUEsaUNBd0xpQlQsUUF4TGpCLEVBd0wyQjtBQUNuQixXQUFLYixRQUFMLENBQWM7QUFBQ0Qsa0JBQVUsRUFBRTtBQUFiLE9BQWQ7QUFDQWMsY0FBUSxDQUFDRSxhQUFULENBQXVCVSxzQkFBdkIsQ0FBOENILEtBQTlDO0FBQ0g7QUEzTEw7QUFBQTtBQUFBLHVDQTZMdUJULFFBN0x2QixFQTZMaUM7QUFDekIsVUFBSU8sUUFBUSxHQUFHLEtBQUtDLFlBQUwsQ0FBa0JSLFFBQWxCLENBQWY7O0FBQ0EsVUFBSU8sUUFBSixFQUFjO0FBQ1ZBLGdCQUFRLENBQUNoRSxRQUFULENBQWtCLENBQWxCLEVBQXFCa0UsS0FBckI7QUFDSDtBQUNKO0FBbE1MO0FBQUE7QUFBQSx1Q0FvTXVCVCxRQXBNdkIsRUFvTWlDO0FBQ3pCLFVBQUllLFFBQVEsR0FBRyxLQUFLQyxZQUFMLENBQWtCaEIsUUFBbEIsQ0FBZjs7QUFDQSxVQUFJZSxRQUFKLEVBQWM7QUFDVkEsZ0JBQVEsQ0FBQ3hFLFFBQVQsQ0FBa0IsQ0FBbEIsRUFBcUJrRSxLQUFyQjtBQUNIO0FBQ0o7QUF6TUw7QUFBQTtBQUFBLGlDQTJNaUJoQyxJQTNNakIsRUEyTXVCO0FBQ2YsVUFBSThCLFFBQVEsR0FBRzlCLElBQUksQ0FBQ3dDLGtCQUFwQjtBQUVBLFVBQUlWLFFBQUosRUFDSSxPQUFPVyx5REFBVSxDQUFDQyxRQUFYLENBQW9CWixRQUFwQixFQUE4QixZQUE5QixLQUNILENBQUNXLHlEQUFVLENBQUNDLFFBQVgsQ0FBb0JaLFFBQXBCLEVBQThCLFlBQTlCLENBREUsR0FFRCxLQUFLQyxZQUFMLENBQWtCRCxRQUFsQixDQUZDLEdBR0RBLFFBSE4sQ0FESixLQUtLLE9BQU8sSUFBUDtBQUNSO0FBcE5MO0FBQUE7QUFBQSxpQ0FzTmlCOUIsSUF0TmpCLEVBc051QjtBQUNmLFVBQUlzQyxRQUFRLEdBQUd0QyxJQUFJLENBQUNtQyxzQkFBcEI7QUFFQSxVQUFJRyxRQUFKLEVBQ0ksT0FBT0cseURBQVUsQ0FBQ0MsUUFBWCxDQUFvQkosUUFBcEIsRUFBOEIsWUFBOUIsS0FDSCxDQUFDRyx5REFBVSxDQUFDQyxRQUFYLENBQW9CSixRQUFwQixFQUE4QixZQUE5QixDQURFLEdBRUQsS0FBS0MsWUFBTCxDQUFrQkQsUUFBbEIsQ0FGQyxHQUdEQSxRQUhOLENBREosS0FLSyxPQUFPLElBQVA7QUFDUjtBQS9OTDtBQUFBO0FBQUEsa0NBaU9rQjtBQUNWLFdBQUs1QixRQUFMLENBQWM7QUFDVkQsa0JBQVUsRUFBRTtBQURGLE9BQWQ7O0FBSUEsVUFBSSxLQUFLNUMsS0FBTCxDQUFXOEMsV0FBZixFQUE0QjtBQUN4QixhQUFLOUMsS0FBTCxDQUFXOEMsV0FBWDtBQUNIO0FBQ0o7QUF6T0w7QUFBQTtBQUFBLG9DQTJPb0JnQyxLQTNPcEIsRUEyTzJCO0FBQ25CLGFBQ0k7QUFBSSxXQUFHLEVBQUUsZUFBZUEsS0FBeEI7QUFBK0IsaUJBQVMsRUFBQztBQUF6QyxRQURKO0FBR0g7QUEvT0w7QUFBQTtBQUFBLCtCQWlQZTNDLElBalBmLEVBaVBxQjtBQUNiLFVBQU1qQyxTQUFTLEdBQUdDLGlEQUFVLENBQUMsaUJBQUQsRUFBb0JnQyxJQUFJLENBQUM0QyxJQUF6QixDQUE1Qjs7QUFFQSxVQUFJNUMsSUFBSSxDQUFDNEMsSUFBVCxFQUFlO0FBQ1gsZUFBTztBQUFNLG1CQUFTLEVBQUU3RTtBQUFqQixVQUFQO0FBQ0gsT0FGRCxNQUVPO0FBQ0gsZUFBTyxJQUFQO0FBQ0g7QUFDSjtBQXpQTDtBQUFBO0FBQUEsc0NBMlBzQmlDLElBM1B0QixFQTJQNEI7QUFDcEIsVUFBTTRDLElBQUksR0FBRzVFLGlEQUFVLENBQUMseUJBQUQsRUFBNEI7QUFDL0MseUJBQWlCLEtBQUtILEtBQUwsQ0FBV3lDLElBRG1CO0FBRS9DLDBCQUFrQixDQUFDLEtBQUt6QyxLQUFMLENBQVd5QztBQUZpQixPQUE1QixDQUF2Qjs7QUFLQSxVQUFJTixJQUFJLENBQUNPLEtBQVQsRUFBZ0I7QUFDWixlQUFPO0FBQU0sbUJBQVMsRUFBRXFDO0FBQWpCLFVBQVA7QUFDSCxPQUZELE1BRU87QUFDSCxlQUFPLElBQVA7QUFDSDtBQUNKO0FBdFFMO0FBQUE7QUFBQSxrQ0F3UWtCNUMsSUF4UWxCLEVBd1F3QjtBQUNoQixVQUFJQSxJQUFJLENBQUNPLEtBQVQsRUFBZ0I7QUFDWixlQUNJLDJEQUFDLFVBQUQ7QUFDSSxlQUFLLEVBQUVQLElBQUksQ0FBQ08sS0FEaEI7QUFFSSxxQkFBVyxFQUFFLEtBQUtJLFdBRnRCO0FBR0ksbUJBQVMsRUFBRSxLQUFLRSxrQkFIcEI7QUFJSSxzQkFBWSxFQUFFYixJQUFJLEtBQUssS0FBS1EsS0FBTCxDQUFXQyxVQUp0QztBQUtJLGtCQUFRLEVBQUUsS0FBSzVDLEtBQUwsQ0FBV1M7QUFMekIsVUFESjtBQVNILE9BVkQsTUFVTztBQUNILGVBQU8sSUFBUDtBQUNIO0FBQ0o7QUF0Ukw7QUFBQTtBQUFBLG1DQXdSbUIwQixJQXhSbkIsRUF3UnlCMkMsS0F4UnpCLEVBd1JnQztBQUFBOztBQUN4QixVQUFNNUUsU0FBUyxHQUFHQyxpREFBVSxDQUN4QixZQUR3QixFQUV4QjtBQUNJLDZCQUFxQixLQUFLd0MsS0FBTCxDQUFXQyxVQUFYLEtBQTBCVCxJQURuRDtBQUVJLHNCQUFjQSxJQUFJLENBQUNDO0FBRnZCLE9BRndCLEVBTXhCRCxJQUFJLENBQUNqQyxTQU5tQixDQUE1QjtBQVFBLFVBQU02RSxJQUFJLEdBQUcsS0FBS0MsVUFBTCxDQUFnQjdDLElBQWhCLENBQWI7QUFDQSxVQUFNOEMsV0FBVyxHQUFHLEtBQUtDLGlCQUFMLENBQXVCL0MsSUFBdkIsQ0FBcEI7QUFDQSxVQUFNZ0QsT0FBTyxHQUFHLEtBQUtDLGFBQUwsQ0FBbUJqRCxJQUFuQixDQUFoQjtBQUVBLGFBQ0k7QUFDSSxXQUFHLEVBQUVBLElBQUksQ0FBQ2tELEtBQUwsR0FBYSxHQUFiLEdBQW1CUCxLQUQ1QjtBQUVJLGlCQUFTLEVBQUU1RSxTQUZmO0FBR0ksYUFBSyxFQUFFaUMsSUFBSSxDQUFDNUIsS0FIaEI7QUFJSSxvQkFBWSxFQUFFLHNCQUFBMkIsS0FBSztBQUFBLGlCQUFJLE1BQUksQ0FBQ29ELGdCQUFMLENBQXNCcEQsS0FBdEIsRUFBNkJDLElBQTdCLENBQUo7QUFBQTtBQUp2QixTQU1JO0FBQ0ksWUFBSSxFQUFFQSxJQUFJLENBQUNHLEdBQUwsSUFBWSxHQUR0QjtBQUVJLGlCQUFTLEVBQUMsaUJBRmQ7QUFHSSxjQUFNLEVBQUVILElBQUksQ0FBQ2IsTUFIakI7QUFJSSxlQUFPLEVBQUUsaUJBQUFZLEtBQUs7QUFBQSxpQkFBSSxNQUFJLENBQUNxRCxXQUFMLENBQWlCckQsS0FBakIsRUFBd0JDLElBQXhCLENBQUo7QUFBQSxTQUpsQjtBQUtJLGlCQUFTLEVBQUUsbUJBQUFELEtBQUs7QUFBQSxpQkFBSSxNQUFJLENBQUNzRCxhQUFMLENBQW1CdEQsS0FBbkIsRUFBMEJDLElBQTFCLENBQUo7QUFBQTtBQUxwQixTQU9LNEMsSUFQTCxFQVFJO0FBQU0saUJBQVMsRUFBQztBQUFoQixTQUFtQzVDLElBQUksQ0FBQ2tELEtBQXhDLENBUkosRUFTS0osV0FUTCxDQU5KLEVBaUJLRSxPQWpCTCxDQURKO0FBcUJIO0FBMVRMO0FBQUE7QUFBQSwrQkE0VGVoRCxJQTVUZixFQTRUcUIyQyxLQTVUckIsRUE0VDRCO0FBQ3BCLFVBQUkzQyxJQUFJLENBQUNzRCxTQUFULEVBQW9CLE9BQU8sS0FBS0MsZUFBTCxDQUFxQlosS0FBckIsQ0FBUCxDQUFwQixLQUNLLE9BQU8sS0FBS2EsY0FBTCxDQUFvQnhELElBQXBCLEVBQTBCMkMsS0FBMUIsQ0FBUDtBQUNSO0FBL1RMO0FBQUE7QUFBQSxpQ0FpVWlCO0FBQUE7O0FBQ1QsVUFBSSxLQUFLOUUsS0FBTCxDQUFXUSxLQUFmLEVBQXNCO0FBQ2xCLGVBQU8sS0FBS1IsS0FBTCxDQUFXUSxLQUFYLENBQWlCb0YsR0FBakIsQ0FBcUIsVUFBQ3pELElBQUQsRUFBTzJDLEtBQVAsRUFBaUI7QUFDekMsaUJBQU8sTUFBSSxDQUFDZSxVQUFMLENBQWdCMUQsSUFBaEIsRUFBc0IyQyxLQUF0QixDQUFQO0FBQ0gsU0FGTSxDQUFQO0FBR0gsT0FKRCxNQUlPO0FBQ0gsZUFBTyxJQUFQO0FBQ0g7QUFDSjtBQXpVTDtBQUFBO0FBQUEsNkJBMlVhO0FBQUE7O0FBQ0wsVUFBTTVFLFNBQVMsR0FBR0MsaURBQVUsQ0FBQztBQUN6QiwwQkFBa0IsQ0FBQyxLQUFLSCxLQUFMLENBQVd5QyxJQURMO0FBRXpCLCtCQUF1QixLQUFLekMsS0FBTCxDQUFXeUM7QUFGVCxPQUFELENBQTVCO0FBSUEsVUFBTTBDLE9BQU8sR0FBRyxLQUFLVyxVQUFMLEVBQWhCO0FBRUEsYUFDSTtBQUFJLFdBQUcsRUFBRSxhQUFBQyxFQUFFO0FBQUEsaUJBQUssTUFBSSxDQUFDM0MsT0FBTCxHQUFlMkMsRUFBcEI7QUFBQSxTQUFYO0FBQW9DLGlCQUFTLEVBQUU3RjtBQUEvQyxTQUNLaUYsT0FETCxDQURKO0FBS0g7QUF2Vkw7O0FBQUE7QUFBQSxFQUFnQ3pFLCtDQUFoQztBQTBWQXVCLFVBQVUsQ0FBQ3RCLFlBQVgsR0FBMEI7QUFDdEJILE9BQUssRUFBRSxJQURlO0FBRXRCaUMsTUFBSSxFQUFFLEtBRmdCO0FBR3RCdkMsV0FBUyxFQUFFLElBSFc7QUFJdEJ1RCxPQUFLLEVBQUUsS0FKZTtBQUt0QlgsYUFBVyxFQUFFLElBTFM7QUFNdEJzQixXQUFTLEVBQUUsSUFOVztBQU90QmxCLGNBQVksRUFBRSxLQVBRO0FBUXRCekMsVUFBUSxFQUFFO0FBUlksQ0FBMUI7QUFXQXdCLFVBQVUsQ0FBQ3JCLFNBQVg7QUFDSUosT0FBSyxFQUFFSyxpREFBUyxDQUFDbUYsR0FEckI7QUFFSXZELE1BQUksRUFBRTVCLGlEQUFTLENBQUNtQixJQUZwQjtBQUdJOUIsV0FBUyxFQUFFVyxpREFBUyxDQUFDQyxNQUh6QjtBQUlJMkMsT0FBSyxFQUFFNUMsaURBQVMsQ0FBQ21CLElBSnJCO0FBS0ljLGFBQVcsRUFBRWpDLGlEQUFTLENBQUNJLElBTDNCO0FBTUlSLFVBQVEsRUFBRUksaURBQVMsQ0FBQ0ksSUFBVixDQUFlZ0YsVUFON0I7QUFPSTdCLFdBQVMsRUFBRXZELGlEQUFTLENBQUNJLElBUHpCO0FBUUlpQyxjQUFZLEVBQUVyQyxpREFBUyxDQUFDbUI7QUFSNUIsZUFTY25CLGlEQUFTLENBQUNJLElBQVYsQ0FBZWdGLFVBVDdCLEUiLCJmaWxlIjoiNTMzZWExMS1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5wLW1lbnViYXIge1xcbiAgICBwYWRkaW5nOiAuMjVlbTtcXG59XFxuXFxuLnAtbWVudWJhciAucC1tZW51LXNlcGFyYXRvciB7XFxuICAgIGJvcmRlci13aWR0aDogMXB4IDAgMCAwO1xcbn1cXG5cXG4ucC1tZW51YmFyOmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGNsZWFyOiBib3RoO1xcbiAgICBkaXNwbGF5OiB0YWJsZTtcXG59XFxuXFxuLnAtbWVudWJhciB1bCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLnAtbWVudWJhciAucC1tZW51aXRlbS1saW5rIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmc6IC4yNWVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLnAtbWVudWJhciAucC1tZW51aXRlbS1pY29uIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAuMjVlbTtcXG59XFxuXFxuLnAtbWVudWJhciAucC1tZW51YmFyLXJvb3QtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLnAtbWVudWJhciAucC1tZW51YmFyLXJvb3QtbGlzdCA+IC5wLW1lbnVpdGVtIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5wLW1lbnViYXIgLnAtbWVudWJhci1yb290LWxpc3QgPiAucC1tZW51aXRlbSA+IC5wLW1lbnVpdGVtLWxpbmsge1xcbiAgICBwYWRkaW5nOiAuNWVtO1xcbn1cXG5cXG4ucC1tZW51YmFyIC5wLW1lbnViYXItcm9vdC1saXN0ID4gLnAtbWVudWl0ZW0gPiAucC1tZW51aXRlbS1saW5rID4gLnAtc3VibWVudS1pY29uIHtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgbWFyZ2luLWxlZnQ6IC4yNWVtO1xcbn1cXG5cXG4ucC1tZW51YmFyIC5wLW1lbnViYXItcm9vdC1saXN0ID4gbGkgdWwge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4ucC1tZW51YmFyIC5wLW1lbnViYXItcm9vdC1saXN0ID4gLnAtbWVudWl0ZW0tYWN0aXZlID4gLnAtc3VibWVudS1saXN0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5wLW1lbnViYXIgLnAtc3VibWVudS1saXN0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBtaW4td2lkdGg6IDEyLjVlbTtcXG4gICAgcGFkZGluZzogLjI1ZW07XFxufVxcblxcbi5wLW1lbnViYXIgLnAtc3VibWVudS1saXN0IC5wLW1lbnVpdGVtIHtcXG4gICAgbWFyZ2luOiAuMTI1ZW0gMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucC1tZW51YmFyIC5wLXN1Ym1lbnUtbGlzdCA+IC5wLW1lbnVpdGVtLWFjdGl2ZSA+IC5wLXN1Ym1lbnUtbGlzdCAge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbGVmdDogMTAwJTtcXG4gICAgdG9wOiAwO1xcbn1cXG5cXG4ucC1tZW51YmFyIC5wLW1lbnVpdGVtLWljb24ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IC4yNWVtO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4ucC1tZW51YmFyIC5wLW1lbnVpdGVtLXRleHQge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4ucC1tZW51YmFyIC5wLXN1Ym1lbnUtbGlzdCAucC1tZW51aXRlbS1saW5rIC5wLXN1Ym1lbnUtaWNvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbWFyZ2luLXRvcDogLS41ZW07XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDUwJTtcXG59XFxuXFxuLnAtbWVudWJhciAucC1tZW51aXRlbS1hY3RpdmUgPiAucC1zdWJtZW51ID4gLnAtc3VibWVudS1saXN0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5wLW1lbnViYXIgLnAtbWVudWJhci1jdXN0b20ge1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIHBhZGRpbmc6IC4yNWVtO1xcbn1cIiwgXCJcIl0pO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IC5wLWNvbXBvbmVudCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbmJvZHkgLnAtbWVudWJhciB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOGM4Yzg7XFxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG5ib2R5IC5wLW1lbnVpdGVtLWxpbmsge1xcbiAgICBwYWRkaW5nOiAwLjcxNGVtIDAuODU3ZW07XFxuICAgIGNvbG9yOiAjMzMzO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDA7XFxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMsIGJveC1zaGFkb3cgMC4ycztcXG4gICAgLW8tdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzLCBib3gtc2hhZG93IDAuMnM7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzLCBib3gtc2hhZG93IDAuMnM7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycywgYm94LXNoYWRvdyAwLjJzO1xcbn1cXG5ib2R5IC5wLW1lbnViYXIgLnAtc3VibWVudS1saXN0IHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M4YzhjODtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDBweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMHB4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XFxuICAgIGJveC1zaGFkb3c6IDAgMHB4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XFxufVxcbmJvZHkgLnAtbWVudWJhciAucC1tZW51YmFyLXJvb3QtbGlzdCA+IC5wLW1lbnVpdGVtID4gLnAtbWVudWl0ZW0tbGluayB7XFxuICAgIHBhZGRpbmc6IDAuNzE0ZW0gMC44NTdlbTtcXG59XFxuYm9keSAucC1tZW51YmFyIC5wLW1lbnVpdGVtLnAtbWVudWl0ZW0tYWN0aXZlID4gLnAtbWVudWl0ZW0tbGluayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYWVhZWE7XFxufVxcblxcbmJvZHkgLnAtYnV0dG9uLnAtYnV0dG9uLXRleHQtaWNvbi1sZWZ0IC5wLWJ1dHRvbi10ZXh0IHtcXG4gICAgcGFkZGluZzogMC40MjllbSAxZW0gMC40MjllbSAyLjI1ZW07XFxufVxcbi5wLW1lbnViYXIgLnAtbWVudWl0ZW0tdGV4dCB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblwiLCBcIlwiXSk7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9NZW51QmFyLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaW5zZXJ0QXRcIjpcInRvcFwiLFwiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9NZW51QmFyLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTWVudUJhci5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7TWVudWJhclN1Yn0gZnJvbSAnLi9NZW51YmFyU3ViJztcbmltcG9ydCAnLi9NZW51QmFyLmNzcyc7XG5cbi8qKlxuICogTWVudUJhclxuICovXG5leHBvcnQgY2xhc3MgTWVudWJhciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyQ3VzdG9tQ29udGVudCgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLW1lbnViYXItY3VzdG9tXCI+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoXG4gICAgICAgICAgICAncC1tZW51YmFyIHAtY29tcG9uZW50JyxcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2xhc3NOYW1lXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGN1c3RvbUNvbnRlbnQgPSB0aGlzLnJlbmRlckN1c3RvbUNvbnRlbnQoKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGlkPXt0aGlzLnByb3BzLmlkfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxNZW51YmFyU3ViXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsPXt0aGlzLnByb3BzLm1vZGVsfVxuICAgICAgICAgICAgICAgICAgICByb290PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBzZXRQcm9wcz17dGhpcy5wcm9wcy5zZXRQcm9wc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHtjdXN0b21Db250ZW50fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5NZW51YmFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBpZDogbnVsbCxcbiAgICBtb2RlbDogbnVsbCxcbiAgICBzdHlsZTogbnVsbCxcbiAgICBjbGFzc05hbWU6IG51bGwsXG4gICAgc2V0UHJvcHM6IG51bGxcbn07XG5cbk1lbnViYXIucHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIFVuaXF1ZSBpZGVudGlmaWVyIG9mIHRoZSBlbGVtZW50LlxuICAgICAqL1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIG1lbnVpdGVtcy5cbiAgICAgKi9cbiAgICBtb2RlbDogUHJvcFR5cGVzLmFycmF5LFxuICAgIC8qKlxuICAgICAqIElubGluZSBzdHlsZSBvZiB0aGUgY29tcG9uZW50LlxuICAgICAqL1xuICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIC8qKlxuICAgICAqIFN0eWxlIGNsYXNzIG9mIHRoZSBjb21wb25lbnQuXG4gICAgICovXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIGZ1bmN0aW9uXG4gICAgICovXG4gICAgc2V0UHJvcHM6IFByb3BUeXBlcy5mdW5jLFxufTtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL01lbnVCYXJDb21wb25lbnQuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJpbnNlcnRBdFwiOlwidG9wXCIsXCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL01lbnVCYXJDb21wb25lbnQuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9NZW51QmFyQ29tcG9uZW50LmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vQnV0dG9uL0J1dHRvbic7XG5pbXBvcnQge0lucHV0VGV4dH0gZnJvbSAnLi4vSW5wdXR0ZXh0L0lucHV0VGV4dCc7XG5pbXBvcnQge01lbnViYXJ9IGZyb20gJy4vTWVudUJhcic7XG5pbXBvcnQgJy4vTWVudUJhckNvbXBvbmVudC5jc3MnO1xuXG4vKipcbiAqIE1lbnVCYXJDb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudWJhckNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICBcbiAgICBvblZhbHVlQ2hhbmdlID0gZSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBpbnB1dFRleHQgPSB0aGlzLnByb3BzLmlucHV0VGV4dCAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtY29sLTEyIHAtbWQtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbnB1dGdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFRleHQgcGxhY2Vob2xkZXI9XCJLZXl3b3JkXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGljb249XCJwaSBwaS1zZWFyY2hcIiBjbGFzc05hbWU9XCJwLWJ1dHRvbi13YXJuaW5nXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAvLyA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgLy8gICAgIDxJbnB1dFRleHRcbiAgICAgICAgICAgIC8vICAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMuaW5wdXRQbGFjZWhvbGRlcn1cbiAgICAgICAgICAgIC8vICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgLy8gICAgICAgICByb2xlPVwidGV4dGJveFwiXG4gICAgICAgICAgICAvLyAgICAgICAgIC8vIHZhbHVlPXt0aGlzLnByb3BzLm1lbnViYXJJbnB1dH1cbiAgICAgICAgICAgIC8vICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25WYWx1ZUNoYW5nZX1cbiAgICAgICAgICAgIC8vICAgICAvPlxuICAgICAgICAgICAgLy8gICAgIDxzcGFuIGNsYXNzTmFtZT1cInAtbGlzdGJveC1maWx0ZXItaWNvbiBwaSBwaS1zZWFyY2hcIj48L3NwYW4+XG4gICAgICAgICAgICAvLyA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gdGhpcy5wcm9wcy5idXR0b24gJiYgKFxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGxhYmVsPXt0aGlzLnByb3BzLmJ0bmxhYmVsfVxuICAgICAgICAgICAgICAgIGljb249e3RoaXMucHJvcHMuYnRuaWNvbn1cbiAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkxlZnQ6IDR9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1zZWN0aW9uIGltcGxlbWVudGF0aW9uXCI+XG4gICAgICAgICAgICAgICAgPE1lbnViYXJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw9e3RoaXMucHJvcHMubW9kZWx9XG4gICAgICAgICAgICAgICAgICAgIHNldFByb3BzPXtwcm9wcyA9PiB0aGlzLnByb3BzLnNldFByb3BzKHByb3BzKX1cbiAgICAgICAgICAgICAgICAgICAgLy8gYWN0aXZlSXRlbT17dGhpcy5wcm9wcy5hY3RpdmVJdGVtfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2lucHV0VGV4dH1cbiAgICAgICAgICAgICAgICAgICAge2J1dHRvbn1cbiAgICAgICAgICAgICAgICA8L01lbnViYXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbk1lbnViYXJDb21wb25lbnQuZGVmYXVsdFByb3BzID0ge1xuICAgIGlkOiBudWxsLFxuICAgIG1vZGVsOiBudWxsLFxuICAgIHN0eWxlOiBudWxsLFxuICAgIGNsYXNzTmFtZTogbnVsbCxcbiAgICBzZXRQcm9wczogbnVsbCxcbiAgICBtZW51YmFySXRlbTogbnVsbCxcbiAgICBzdWJtZW51YmFySXRlbTogbnVsbCxcbiAgICBidG5sYWJlbDogJ0xvZ291dCcsXG4gICAgYnRuaWNvbjogJ3BpIHBpLXBvd2VyLW9mZicsXG4gICAgaW5wdXRQbGFjZWhvbGRlcjogJ1NlYXJjaCcsXG4gICAgaW5wdXRUZXh0OiB0cnVlLFxuICAgIGJ1dHRvbjogdHJ1ZSxcbn07XG5cbk1lbnViYXJDb21wb25lbnQucHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIFVuaXF1ZSBpZGVudGlmaWVyIG9mIHRoZSBlbGVtZW50LlxuICAgICAqL1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIG1lbnVpdGVtcy5cbiAgICAgKi9cbiAgICBtb2RlbDogUHJvcFR5cGVzLmFycmF5LFxuICAgIC8qKlxuICAgICAqIElubGluZSBzdHlsZSBvZiB0aGUgY29tcG9uZW50LlxuICAgICAqL1xuXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgLyoqXG4gICAgICogSW5wdXQgcGxhY2Vob2xkZXJcbiAgICAgKi9cbiAgICBpbnB1dFBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqIEJ1dHRvbiBJY29uXG4gICAgICovXG4gICAgYnRuaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKipcbiAgICAgKiBCdXR0b24gbGFiZWxcbiAgICAgKi9cbiAgICBidG5sYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKipcbiAgICAgKiBTdHlsZSBjbGFzcyBvZiB0aGUgY29tcG9uZW50LlxuICAgICAqL1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKipcbiAgICAgKiBDdXJyZW50IE1lbnUgb2JqZWN0XG4gICAgICovXG4gICAgbWVudWJhckl0ZW06IFByb3BUeXBlcy5vYmplY3QsXG4gICAgLyoqXG4gICAgICogQ3VycmVudGx5IHNlbGVjdGVkIGl0ZW1cbiAgICAgKi9cbiAgICBzdWJtZW51YmFySXRlbTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBpbnB1dFRleHQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGJ1dHRvbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgZnVuY3Rpb25cbiAgICAgKi9cbiAgICBzZXRQcm9wczogUHJvcFR5cGVzLmZ1bmMsXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgRG9tSGFuZGxlciBmcm9tICcuLi8uLi91dGlscy9Eb21IYW5kbGVyJztcblxuZXhwb3J0IGNsYXNzIE1lbnViYXJTdWIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFjdGl2ZUl0ZW06IG51bGwsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5vbkxlYWZDbGljayA9IHRoaXMub25MZWFmQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNoaWxkSXRlbUtleURvd24gPSB0aGlzLm9uQ2hpbGRJdGVtS2V5RG93bi5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgICAgaWYgKHByZXZQcm9wcy5wYXJlbnRBY3RpdmUgJiYgIXRoaXMucHJvcHMucGFyZW50QWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBhY3RpdmVJdGVtOiBudWxsLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRvY3VtZW50Q2xpY2tMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy5kb2N1bWVudENsaWNrTGlzdGVuZXIgPSBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudCAmJiAhdGhpcy5lbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlSXRlbTogbnVsbH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kb2N1bWVudENsaWNrTGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLmRvY3VtZW50Q2xpY2tMaXN0ZW5lcikge1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmRvY3VtZW50Q2xpY2tMaXN0ZW5lcik7XG4gICAgICAgICAgICB0aGlzLmRvY3VtZW50Q2xpY2tMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkl0ZW1Nb3VzZUVudGVyKGV2ZW50LCBpdGVtKSB7XG4gICAgICAgIGlmIChpdGVtLmRpc2FibGVkKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMucm9vdCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlSXRlbSB8fCB0aGlzLnByb3BzLnBvcHVwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUl0ZW06IGl0ZW0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBhY3RpdmVJdGVtOiBpdGVtLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkl0ZW1DbGljayA9IChldmVudCwgaXRlbSkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLnNldFByb3BzKHttZW51YmFySXRlbTogaXRlbX0pO1xuICAgICAgICBpZiAoaXRlbS5kaXNhYmxlZCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXRlbS51cmwpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXRlbS5jb21tYW5kKSB7XG4gICAgICAgICAgICBpdGVtLmNvbW1hbmQoe1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnJvb3QpIHtcbiAgICAgICAgICAgIGlmIChpdGVtLml0ZW1zKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlSXRlbSAmJiBpdGVtID09PSB0aGlzLnN0YXRlLmFjdGl2ZUl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVJdGVtOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUl0ZW06IGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXRlbS5pdGVtcykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXRQcm9wcyh7XG4gICAgICAgICAgICAgICAgc3VibWVudWJhckl0ZW06IGl0ZW0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMub25MZWFmQ2xpY2soKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBvbkl0ZW1LZXlEb3duKGV2ZW50LCBpdGVtKSB7XG4gICAgICAgIGxldCBsaXN0SXRlbSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudDtcblxuICAgICAgICBzd2l0Y2ggKGV2ZW50LndoaWNoKSB7XG4gICAgICAgICAgICAvL2Rvd25cbiAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMucm9vdCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5pdGVtcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5leHBhbmRTdWJtZW51KGl0ZW0sIGxpc3RJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUb05leHRJdGVtKGxpc3RJdGVtKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAvL3VwXG4gICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5wcm9wcy5yb290KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUb1ByZXZJdGVtKGxpc3RJdGVtKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAvL3JpZ2h0XG4gICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnJvb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5leHRJdGVtID0gdGhpcy5maW5kTmV4dEl0ZW0obGlzdEl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dEl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRJdGVtLmNoaWxkcmVuWzBdLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5pdGVtcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5leHBhbmRTdWJtZW51KGl0ZW0sIGxpc3RJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vbGVmdFxuICAgICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5yb290KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUb1ByZXZJdGVtKGxpc3RJdGVtKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25LZXlEb3duKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uS2V5RG93bihldmVudCwgbGlzdEl0ZW0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DaGlsZEl0ZW1LZXlEb3duKGV2ZW50LCBjaGlsZExpc3RJdGVtKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnJvb3QpIHtcbiAgICAgICAgICAgIC8vdXBcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBldmVudC53aGljaCA9PT0gMzggJiZcbiAgICAgICAgICAgICAgICBjaGlsZExpc3RJdGVtLnByZXZpb3VzRWxlbWVudFNpYmxpbmcgPT0gbnVsbFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZU1lbnUoY2hpbGRMaXN0SXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL2xlZnRcbiAgICAgICAgICAgIGlmIChldmVudC53aGljaCA9PT0gMzcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlTWVudShjaGlsZExpc3RJdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cGFuZFN1Ym1lbnUoaXRlbSwgbGlzdEl0ZW0pIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3RpdmVJdGVtOiBpdGVtLFxuICAgICAgICB9KTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGxpc3RJdGVtLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmZvY3VzKCk7XG4gICAgICAgIH0sIDUwKTtcbiAgICB9XG5cbiAgICBjb2xsYXBzZU1lbnUobGlzdEl0ZW0pIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlSXRlbTogbnVsbH0pO1xuICAgICAgICBsaXN0SXRlbS5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZm9jdXMoKTtcbiAgICB9XG5cbiAgICBuYXZpZ2F0ZVRvTmV4dEl0ZW0obGlzdEl0ZW0pIHtcbiAgICAgICAgdmFyIG5leHRJdGVtID0gdGhpcy5maW5kTmV4dEl0ZW0obGlzdEl0ZW0pO1xuICAgICAgICBpZiAobmV4dEl0ZW0pIHtcbiAgICAgICAgICAgIG5leHRJdGVtLmNoaWxkcmVuWzBdLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuYXZpZ2F0ZVRvUHJldkl0ZW0obGlzdEl0ZW0pIHtcbiAgICAgICAgdmFyIHByZXZJdGVtID0gdGhpcy5maW5kUHJldkl0ZW0obGlzdEl0ZW0pO1xuICAgICAgICBpZiAocHJldkl0ZW0pIHtcbiAgICAgICAgICAgIHByZXZJdGVtLmNoaWxkcmVuWzBdLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaW5kTmV4dEl0ZW0oaXRlbSkge1xuICAgICAgICBsZXQgbmV4dEl0ZW0gPSBpdGVtLm5leHRFbGVtZW50U2libGluZztcblxuICAgICAgICBpZiAobmV4dEl0ZW0pXG4gICAgICAgICAgICByZXR1cm4gRG9tSGFuZGxlci5oYXNDbGFzcyhuZXh0SXRlbSwgJ3AtZGlzYWJsZWQnKSB8fFxuICAgICAgICAgICAgICAgICFEb21IYW5kbGVyLmhhc0NsYXNzKG5leHRJdGVtLCAncC1tZW51aXRlbScpXG4gICAgICAgICAgICAgICAgPyB0aGlzLmZpbmROZXh0SXRlbShuZXh0SXRlbSlcbiAgICAgICAgICAgICAgICA6IG5leHRJdGVtO1xuICAgICAgICBlbHNlIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZpbmRQcmV2SXRlbShpdGVtKSB7XG4gICAgICAgIGxldCBwcmV2SXRlbSA9IGl0ZW0ucHJldmlvdXNFbGVtZW50U2libGluZztcblxuICAgICAgICBpZiAocHJldkl0ZW0pXG4gICAgICAgICAgICByZXR1cm4gRG9tSGFuZGxlci5oYXNDbGFzcyhwcmV2SXRlbSwgJ3AtZGlzYWJsZWQnKSB8fFxuICAgICAgICAgICAgICAgICFEb21IYW5kbGVyLmhhc0NsYXNzKHByZXZJdGVtLCAncC1tZW51aXRlbScpXG4gICAgICAgICAgICAgICAgPyB0aGlzLmZpbmRQcmV2SXRlbShwcmV2SXRlbSlcbiAgICAgICAgICAgICAgICA6IHByZXZJdGVtO1xuICAgICAgICBlbHNlIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIG9uTGVhZkNsaWNrKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGl2ZUl0ZW06IG51bGwsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uTGVhZkNsaWNrKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uTGVhZkNsaWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXJTZXBhcmF0b3IoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaSBrZXk9eydzZXBhcmF0b3JfJyArIGluZGV4fSBjbGFzc05hbWU9XCJwLW1lbnUtc2VwYXJhdG9yXCI+PC9saT5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXJJY29uKGl0ZW0pIHtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gY2xhc3NOYW1lcygncC1tZW51aXRlbS1pY29uJywgaXRlbS5pY29uKTtcblxuICAgICAgICBpZiAoaXRlbS5pY29uKSB7XG4gICAgICAgICAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPXtjbGFzc05hbWV9Pjwvc3Bhbj47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlclN1Ym1lbnVJY29uKGl0ZW0pIHtcbiAgICAgICAgY29uc3QgaWNvbiA9IGNsYXNzTmFtZXMoJ3Atc3VibWVudS1pY29uIHBpIHBpLWZ3Jywge1xuICAgICAgICAgICAgJ3BpLWNhcmV0LWRvd24nOiB0aGlzLnByb3BzLnJvb3QsXG4gICAgICAgICAgICAncGktY2FyZXQtcmlnaHQnOiAhdGhpcy5wcm9wcy5yb290LFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoaXRlbS5pdGVtcykge1xuICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT17aWNvbn0+PC9zcGFuPjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyU3VibWVudShpdGVtKSB7XG4gICAgICAgIGlmIChpdGVtLml0ZW1zKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxNZW51YmFyU3ViXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsPXtpdGVtLml0ZW1zfVxuICAgICAgICAgICAgICAgICAgICBvbkxlYWZDbGljaz17dGhpcy5vbkxlYWZDbGlja31cbiAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXt0aGlzLm9uQ2hpbGRJdGVtS2V5RG93bn1cbiAgICAgICAgICAgICAgICAgICAgcGFyZW50QWN0aXZlPXtpdGVtID09PSB0aGlzLnN0YXRlLmFjdGl2ZUl0ZW19XG4gICAgICAgICAgICAgICAgICAgIHNldFByb3BzPXt0aGlzLnByb3BzLnNldFByb3BzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXJNZW51aXRlbShpdGVtLCBpbmRleCkge1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc05hbWVzKFxuICAgICAgICAgICAgJ3AtbWVudWl0ZW0nLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICdwLW1lbnVpdGVtLWFjdGl2ZSc6IHRoaXMuc3RhdGUuYWN0aXZlSXRlbSA9PT0gaXRlbSxcbiAgICAgICAgICAgICAgICAncC1kaXNhYmxlZCc6IGl0ZW0uZGlzYWJsZWQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXRlbS5jbGFzc05hbWVcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgaWNvbiA9IHRoaXMucmVuZGVySWNvbihpdGVtKTtcbiAgICAgICAgY29uc3Qgc3VibWVudUljb24gPSB0aGlzLnJlbmRlclN1Ym1lbnVJY29uKGl0ZW0pO1xuICAgICAgICBjb25zdCBzdWJtZW51ID0gdGhpcy5yZW5kZXJTdWJtZW51KGl0ZW0pO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0ubGFiZWwgKyAnXycgKyBpbmRleH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICBzdHlsZT17aXRlbS5zdHlsZX1cbiAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e2V2ZW50ID0+IHRoaXMub25JdGVtTW91c2VFbnRlcihldmVudCwgaXRlbSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17aXRlbS51cmwgfHwgJyMnfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLW1lbnVpdGVtLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9e2l0ZW0udGFyZ2V0fVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtldmVudCA9PiB0aGlzLm9uSXRlbUNsaWNrKGV2ZW50LCBpdGVtKX1cbiAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXtldmVudCA9PiB0aGlzLm9uSXRlbUtleURvd24oZXZlbnQsIGl0ZW0pfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2ljb259XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInAtbWVudWl0ZW0tdGV4dFwiPntpdGVtLmxhYmVsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAge3N1Ym1lbnVJY29ufVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICB7c3VibWVudX1cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVySXRlbShpdGVtLCBpbmRleCkge1xuICAgICAgICBpZiAoaXRlbS5zZXBhcmF0b3IpIHJldHVybiB0aGlzLnJlbmRlclNlcGFyYXRvcihpbmRleCk7XG4gICAgICAgIGVsc2UgcmV0dXJuIHRoaXMucmVuZGVyTWVudWl0ZW0oaXRlbSwgaW5kZXgpO1xuICAgIH1cblxuICAgIHJlbmRlck1lbnUoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm1vZGVsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5tb2RlbC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVySXRlbShpdGVtLCBpbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc05hbWVzKHtcbiAgICAgICAgICAgICdwLXN1Ym1lbnUtbGlzdCc6ICF0aGlzLnByb3BzLnJvb3QsXG4gICAgICAgICAgICAncC1tZW51YmFyLXJvb3QtbGlzdCc6IHRoaXMucHJvcHMucm9vdCxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHN1Ym1lbnUgPSB0aGlzLnJlbmRlck1lbnUoKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHVsIHJlZj17ZWwgPT4gKHRoaXMuZWxlbWVudCA9IGVsKX0gY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICAgICAgICAgIHtzdWJtZW51fVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbk1lbnViYXJTdWIuZGVmYXVsdFByb3BzID0ge1xuICAgIG1vZGVsOiBudWxsLFxuICAgIHJvb3Q6IGZhbHNlLFxuICAgIGNsYXNzTmFtZTogbnVsbCxcbiAgICBwb3B1cDogZmFsc2UsXG4gICAgb25MZWFmQ2xpY2s6IG51bGwsXG4gICAgb25LZXlEb3duOiBudWxsLFxuICAgIHBhcmVudEFjdGl2ZTogZmFsc2UsXG4gICAgc2V0UHJvcHM6IG51bGwsXG59O1xuXG5NZW51YmFyU3ViLnByb3BUeXBlcyA9IHtcbiAgICBtb2RlbDogUHJvcFR5cGVzLmFueSxcbiAgICByb290OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcG9wdXA6IFByb3BUeXBlcy5ib29sLFxuICAgIG9uTGVhZkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBzZXRQcm9wczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvbktleURvd246IFByb3BUeXBlcy5mdW5jLFxuICAgIHBhcmVudEFjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2V0UHJvcHM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==