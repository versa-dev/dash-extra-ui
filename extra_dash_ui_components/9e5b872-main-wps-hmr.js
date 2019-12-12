webpackHotUpdateextra_dash_ui_components("main",{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/lib/components/Steps/Steps.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/lib/components/Steps/Steps.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".p-steps ul {\n    list-style-type: none;\n    padding: 0;\n    margin: 0;\n}\n\n.p-steps ul:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n\n.p-steps .p-steps-item {\n    float: left;\n    box-sizing: border-box;\n    cursor: pointer;\n}\n\n.p-steps.p-steps-readonly .p-steps-item {\n    cursor: auto;\n}\n\n.p-steps .p-steps-item .p-menuitem-link {\n    text-decoration: none;\n    display: block;\n    padding: 1em;\n    position: relative;\n    text-align: center;\n}\n\n.p-steps .p-steps-item.p-steps-current .p-menuitem-link,\n.p-steps .p-steps-item.p-disabled .p-menuitem-link {\n    cursor: default;\n}\n\n.p-steps .p-steps-number {\n    font-size: 2em;\n    display: block;\n}\n\n.p-steps .p-steps-title {\n    display: block;\n    white-space: nowrap;\n}\n\n/* Responsive */\n@media (max-width: 40em) {\n    .p-steps .p-steps-item .p-menuitem-link {\n        padding: 0.5em;\n    }\n\n    .p-steps .p-steps-item .p-steps-title {\n        display: none;\n    }\n}\n.p-steps .p-steps-item {\n     width: 25%;\n }", ""]);


/***/ }),

/***/ "./src/lib/components/Steps/Steps.css":
/*!********************************************!*\
  !*** ./src/lib/components/Steps/Steps.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./Steps.css */ "./node_modules/css-loader/dist/cjs.js!./src/lib/components/Steps/Steps.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"insertAt":"top","hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader/dist/cjs.js!./Steps.css */ "./node_modules/css-loader/dist/cjs.js!./src/lib/components/Steps/Steps.css", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./Steps.css */ "./node_modules/css-loader/dist/cjs.js!./src/lib/components/Steps/Steps.css");

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

/***/ "./src/lib/components/Steps/Steps.js":
/*!*******************************************!*\
  !*** ./src/lib/components/Steps/Steps.js ***!
  \*******************************************/
/*! exports provided: Steps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Steps", function() { return Steps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Steps_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Steps.css */ "./src/lib/components/Steps/Steps.css");
/* harmony import */ var _Steps_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Steps_css__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Steps =
/*#__PURE__*/
function (_Component) {
  _inherits(Steps, _Component);

  function Steps() {
    _classCallCheck(this, Steps);

    return _possibleConstructorReturn(this, _getPrototypeOf(Steps).apply(this, arguments));
  }

  _createClass(Steps, [{
    key: "itemClick",
    value: function itemClick(event, item, index) {
      if (this.props.readOnly || item.disabled) {
        event.preventDefault();
        return;
      }

      if (this.props.onSelect) {
        this.props.onSelect({
          originalEvent: event,
          item: item,
          index: index
        });
      }

      if (!item.url) {
        event.preventDefault();
      }

      if (item.command) {
        item.command({
          originalEvent: event,
          item: item,
          index: index
        });
      }
    }
  }, {
    key: "renderItem",
    value: function renderItem(item, index) {
      var _this = this;

      var className = classnames__WEBPACK_IMPORTED_MODULE_2___default()('p-steps-item', item.className, {
        'p-highlight p-steps-current': index === this.props.activeIndex,
        'p-state-default': index !== this.props.activeIndex,
        'p-disabled': item.disabled || index !== this.props.activeIndex && this.props.readOnly
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        key: item.label + '_' + index,
        className: className,
        style: item.style
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: item.url || '#',
        className: "p-menuitem-link",
        target: item.target,
        onClick: function onClick(event) {
          return _this.itemClick(event, item, index);
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "p-steps-number"
      }, index + 1), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "p-steps-title"
      }, item.label)));
    }
  }, {
    key: "renderItems",
    value: function renderItems() {
      var _this2 = this;

      if (this.props.model) {
        var items = this.props.model.map(function (item, index) {
          return _this2.renderItem(item, index);
        });
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
          role: "tablist"
        }, items);
      } else {
        return null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var className = classnames__WEBPACK_IMPORTED_MODULE_2___default()('p-steps p-component', this.props.className, {
        'p-steps-readonly': this.props.readonly
      });
      var items = this.renderItems();
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: this.props.id,
        className: className,
        style: this.props.style
      }, items);
    }
  }]);

  return Steps;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(Steps, "defaultProps", {
  id: null,
  model: null,
  activeIndex: 0,
  readOnly: true,
  style: null,
  className: null,
  onSelect: null
});

_defineProperty(Steps, "propTypes", {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  model: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  activeIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  readOnly: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvU3RlcHMvU3RlcHMuY3NzIiwid2VicGFjazovL2V4dHJhX2Rhc2hfdWlfY29tcG9uZW50cy8uL3NyYy9saWIvY29tcG9uZW50cy9TdGVwcy9TdGVwcy5jc3M/ZDEwNyIsIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvU3RlcHMvU3RlcHMuanMiXSwibmFtZXMiOlsiU3RlcHMiLCJldmVudCIsIml0ZW0iLCJpbmRleCIsInByb3BzIiwicmVhZE9ubHkiLCJkaXNhYmxlZCIsInByZXZlbnREZWZhdWx0Iiwib25TZWxlY3QiLCJvcmlnaW5hbEV2ZW50IiwidXJsIiwiY29tbWFuZCIsImNsYXNzTmFtZSIsImNsYXNzTmFtZXMiLCJhY3RpdmVJbmRleCIsImxhYmVsIiwic3R5bGUiLCJ0YXJnZXQiLCJpdGVtQ2xpY2siLCJtb2RlbCIsIml0ZW1zIiwibWFwIiwicmVuZGVySXRlbSIsInJlYWRvbmx5IiwicmVuZGVySXRlbXMiLCJpZCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsInN0cmluZyIsImFycmF5IiwiaXNSZXF1aXJlZCIsIm51bWJlciIsImJvb2wiLCJvYmplY3QiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQkFBMkIsbUJBQU8sQ0FBQyw4R0FBeUQ7QUFDNUY7QUFDQSxjQUFjLFFBQVMsZ0JBQWdCLDRCQUE0QixpQkFBaUIsZ0JBQWdCLEdBQUcsdUJBQXVCLG9CQUFvQixxQkFBcUIsa0JBQWtCLEdBQUcsNEJBQTRCLGtCQUFrQiw2QkFBNkIsc0JBQXNCLEdBQUcsNkNBQTZDLG1CQUFtQixHQUFHLDZDQUE2Qyw0QkFBNEIscUJBQXFCLG1CQUFtQix5QkFBeUIseUJBQXlCLEdBQUcsa0hBQWtILHNCQUFzQixHQUFHLDhCQUE4QixxQkFBcUIscUJBQXFCLEdBQUcsNkJBQTZCLHFC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QUFDZnlCLElBQUUsRUFBRUUsaURBQVMsQ0FBQ0MsTUFEQztBQUVmVCxPQUFLLEVBQUVRLGlEQUFTLENBQUNFLEtBQVYsQ0FBZ0JDLFVBRlI7QUFHZmhCLGFBQVcsRUFBRWEsaURBQVMsQ0FBQ0ksTUFIUjtBQUlmMUIsVUFBUSxFQUFFc0IsaURBQVMsQ0FBQ0ssSUFKTDtBQUtmaEIsT0FBSyxFQUFFVyxpREFBUyxDQUFDTSxNQUxGO0FBTWZyQixXQUFTLEVBQUVlLGlEQUFTLENBQUNDLE1BTk47QUFPZnBCLFVBQVEsRUFBRW1CLGlEQUFTLENBQUNPO0FBUEwsQyIsImZpbGUiOiI5ZTViODcyLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnAtc3RlcHMgdWwge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLnAtc3RlcHMgdWw6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgZGlzcGxheTogdGFibGU7XFxuICAgIGNsZWFyOiBib3RoO1xcbn1cXG5cXG4ucC1zdGVwcyAucC1zdGVwcy1pdGVtIHtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnAtc3RlcHMucC1zdGVwcy1yZWFkb25seSAucC1zdGVwcy1pdGVtIHtcXG4gICAgY3Vyc29yOiBhdXRvO1xcbn1cXG5cXG4ucC1zdGVwcyAucC1zdGVwcy1pdGVtIC5wLW1lbnVpdGVtLWxpbmsge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucC1zdGVwcyAucC1zdGVwcy1pdGVtLnAtc3RlcHMtY3VycmVudCAucC1tZW51aXRlbS1saW5rLFxcbi5wLXN0ZXBzIC5wLXN0ZXBzLWl0ZW0ucC1kaXNhYmxlZCAucC1tZW51aXRlbS1saW5rIHtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4ucC1zdGVwcyAucC1zdGVwcy1udW1iZXIge1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5wLXN0ZXBzIC5wLXN0ZXBzLXRpdGxlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi8qIFJlc3BvbnNpdmUgKi9cXG5AbWVkaWEgKG1heC13aWR0aDogNDBlbSkge1xcbiAgICAucC1zdGVwcyAucC1zdGVwcy1pdGVtIC5wLW1lbnVpdGVtLWxpbmsge1xcbiAgICAgICAgcGFkZGluZzogMC41ZW07XFxuICAgIH1cXG5cXG4gICAgLnAtc3RlcHMgLnAtc3RlcHMtaXRlbSAucC1zdGVwcy10aXRsZSB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxufVxcbi5wLXN0ZXBzIC5wLXN0ZXBzLWl0ZW0ge1xcbiAgICAgd2lkdGg6IDI1JTtcXG4gfVwiLCBcIlwiXSk7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdGVwcy5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImluc2VydEF0XCI6XCJ0b3BcIixcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3RlcHMuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdGVwcy5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCAnLi9TdGVwcy5jc3MnO1xuXG5leHBvcnQgY2xhc3MgU3RlcHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGlkOiBudWxsLFxuICAgICAgICBtb2RlbDogbnVsbCxcbiAgICAgICAgYWN0aXZlSW5kZXg6IDAsXG4gICAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgICBzdHlsZTogbnVsbCxcbiAgICAgICAgY2xhc3NOYW1lOiBudWxsLFxuICAgICAgICBvblNlbGVjdDogbnVsbCxcbiAgICB9O1xuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIG1vZGVsOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgICAgICAgYWN0aXZlSW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIHJlYWRPbmx5OiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICAgIH07XG5cbiAgICBpdGVtQ2xpY2soZXZlbnQsIGl0ZW0sIGluZGV4KSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnJlYWRPbmx5IHx8IGl0ZW0uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdCh7XG4gICAgICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgICAgICAgICAgaXRlbTogaXRlbSxcbiAgICAgICAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXRlbS51cmwpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXRlbS5jb21tYW5kKSB7XG4gICAgICAgICAgICBpdGVtLmNvbW1hbmQoe1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXJJdGVtKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoJ3Atc3RlcHMtaXRlbScsIGl0ZW0uY2xhc3NOYW1lLCB7XG4gICAgICAgICAgICAncC1oaWdobGlnaHQgcC1zdGVwcy1jdXJyZW50JzogaW5kZXggPT09IHRoaXMucHJvcHMuYWN0aXZlSW5kZXgsXG4gICAgICAgICAgICAncC1zdGF0ZS1kZWZhdWx0JzogaW5kZXggIT09IHRoaXMucHJvcHMuYWN0aXZlSW5kZXgsXG4gICAgICAgICAgICAncC1kaXNhYmxlZCc6XG4gICAgICAgICAgICAgICAgaXRlbS5kaXNhYmxlZCB8fFxuICAgICAgICAgICAgICAgIChpbmRleCAhPT0gdGhpcy5wcm9wcy5hY3RpdmVJbmRleCAmJiB0aGlzLnByb3BzLnJlYWRPbmx5KSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgIGtleT17aXRlbS5sYWJlbCArICdfJyArIGluZGV4fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgIHN0eWxlPXtpdGVtLnN0eWxlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2l0ZW0udXJsIHx8ICcjJ31cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC1tZW51aXRlbS1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PXtpdGVtLnRhcmdldH1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZXZlbnQgPT4gdGhpcy5pdGVtQ2xpY2soZXZlbnQsIGl0ZW0sIGluZGV4KX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInAtc3RlcHMtbnVtYmVyXCI+e2luZGV4ICsgMX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInAtc3RlcHMtdGl0bGVcIj57aXRlbS5sYWJlbH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXJJdGVtcygpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubW9kZWwpIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5wcm9wcy5tb2RlbC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVySXRlbShpdGVtLCBpbmRleCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIDx1bCByb2xlPVwidGFibGlzdFwiPntpdGVtc308L3VsPjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc05hbWVzKFxuICAgICAgICAgICAgJ3Atc3RlcHMgcC1jb21wb25lbnQnLFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICB7J3Atc3RlcHMtcmVhZG9ubHknOiB0aGlzLnByb3BzLnJlYWRvbmx5fVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBpdGVtcyA9IHRoaXMucmVuZGVySXRlbXMoKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGlkPXt0aGlzLnByb3BzLmlkfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtpdGVtc31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=