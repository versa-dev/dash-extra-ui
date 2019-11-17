webpackHotUpdateextra_dash_ui_components("main",{

/***/ "./src/lib/components/OrganizationChart/OrganizationChart.react.js":
/*!*************************************************************************!*\
  !*** ./src/lib/components/OrganizationChart/OrganizationChart.react.js ***!
  \*************************************************************************/
/*! exports provided: OrganizationChartNode, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationChartNode", function() { return OrganizationChartNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OrganizationChart; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _OrganizationChart_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OrganizationChart.css */ "./src/lib/components/OrganizationChart/OrganizationChart.css");
/* harmony import */ var _OrganizationChart_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_OrganizationChart_css__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var OrganizationChartNode =
/*#__PURE__*/
function (_Component) {
  _inherits(OrganizationChartNode, _Component);

  function OrganizationChartNode(props) {
    var _this;

    _classCallCheck(this, OrganizationChartNode);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(OrganizationChartNode).call(this, props));
    _this.node = _this.props.node;
    _this.state = {
      expanded: _this.node.expanded
    };
    return _this;
  }

  _createClass(OrganizationChartNode, [{
    key: "getLeaf",
    value: function getLeaf() {
      return this.node.leaf === false ? false : !(this.node.children && this.node.children.length);
    }
  }, {
    key: "getColspan",
    value: function getColspan() {
      return this.node.children && this.node.children.length ? this.node.children.length * 2 : null;
    }
  }, {
    key: "onNodeClick",
    value: function onNodeClick(event, node) {
      this.props.onNodeClick(event, node);
    }
  }, {
    key: "toggleNode",
    value: function toggleNode(event, node) {
      var _expanded = !this.state.expanded;

      this.setState({
        expanded: _expanded
      });
      event.preventDefault();
    }
  }, {
    key: "isSelected",
    value: function isSelected() {
      return this.props.isSelected(this.node);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      this.node = this.props.node;
      var colspan = this.getColspan();
      var nodeStyleClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()('p-organizationchart-node-content', this.node.className, {
        'p-organizationchart-selectable-node': this.props.selectionMode && this.node.selectable !== false,
        'p-highlight': this.isSelected()
      }),
          nodeLabel = this.props.nodeTemplate && this.props.nodeTemplate(this.node) ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.props.nodeTemplate(this.node)) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.node.label),
          toggleIcon = classnames__WEBPACK_IMPORTED_MODULE_2___default()('p-node-toggler-icon', {
        'pi pi-chevron-down': this.state.expanded,
        'pi pi-chevron-up': !this.state.expanded
      }),
          nodeContent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        colSpan: colspan
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: nodeStyleClass,
        onClick: function onClick(e) {
          return _this2.onNodeClick(e, _this2.node);
        }
      }, nodeLabel, !this.getLeaf() && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "p-node-toggler p-link",
        onClick: function onClick(e) {
          return _this2.toggleNode(e, _this2.node);
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: toggleIcon
      })))));

      var _visibility = !this.getLeaf() && this.state.expanded ? 'inherit' : 'hidden',
          linesDown = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        style: {
          visibility: _visibility
        },
        className: "p-organizationchart-lines"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        colSpan: colspan
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-organizationchart-line-down"
      }))),
          nodeChildLength = this.node.children && this.node.children.length,
          linesMiddle = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        style: {
          visibility: _visibility
        },
        className: "p-organizationchart-lines"
      }, this.node.children && this.node.children.map(function (item, index) {
        var leftClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()('p-organizationchart-line-left', {
          'p-organizationchart-line-top': index !== 0
        }),
            rightClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()('p-organizationchart-line-right', {
          'p-organizationchart-line-top': index !== nodeChildLength - 1
        });
        console.log(leftClass, rightClass);
        return [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          key: index + '_lineleft',
          className: leftClass
        }, "\xA0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          key: index + '_lineright',
          className: rightClass
        }, "\xA0")];
      })),
          childNodes = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        style: {
          visibility: _visibility
        },
        className: "p-organizationchart-nodes"
      }, this.node.children && this.node.children.map(function (child, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          key: index,
          colSpan: "2"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OrganizationChartNode, {
          node: child,
          nodeTemplate: _this2.props.nodeTemplate,
          selectionMode: _this2.props.selectionMode,
          onNodeClick: _this2.props.onNodeClick,
          isSelected: _this2.props.isSelected
        }));
      }));

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        className: "p-organizationchart-table"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, nodeContent, linesDown, linesMiddle, childNodes));
    }
  }]);

  return OrganizationChartNode;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(OrganizationChartNode, "defaultProps", {
  node: null,
  nodeTemplate: null,
  root: false,
  first: false,
  last: false,
  selectionMode: null,
  onNodeClick: null,
  isSelected: null
});

_defineProperty(OrganizationChartNode, "propTypes", {
  node: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  nodeTemplate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  root: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  first: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  last: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  selectionMode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onNodeClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  isSelected: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
});

var OrganizationChart =
/*#__PURE__*/
function (_Component2) {
  _inherits(OrganizationChart, _Component2);

  function OrganizationChart(props) {
    var _this3;

    _classCallCheck(this, OrganizationChart);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(OrganizationChart).call(this, props));
    _this3.root = _this3.props.value && _this3.props.value.length ? _this3.props.value[0] : null;
    _this3.onNodeClick = _this3.onNodeClick.bind(_assertThisInitialized(_this3));
    _this3.isSelected = _this3.isSelected.bind(_assertThisInitialized(_this3));
    return _this3;
  }

  _createClass(OrganizationChart, [{
    key: "onNodeClick",
    value: function onNodeClick(event, node) {
      if (this.props.selectionMode) {
        var eventTarget = event.target;

        if (eventTarget.className && (eventTarget.className.indexOf('p-node-toggler') !== -1 || eventTarget.className.indexOf('p-node-toggler-icon') !== -1)) {
          return;
        }

        if (node.selectable === false) {
          return;
        }

        var index = this.findIndexInSelection(node);
        var selected = index >= 0;
        var selection;

        if (this.props.selectionMode === 'single') {
          if (selected) {
            selection = null;

            if (this.props.onNodeUnselect) {
              this.props.onNodeUnselect({
                originalEvent: event,
                node: node
              });
            }
          } else {
            selection = node;

            if (this.props.onNodeSelect) {
              this.props.onNodeSelect({
                originalEvent: event,
                node: node
              });
            }
          }
        } else if (this.props.selectionMode === 'multiple') {
          if (selected) {
            selection = this.props.selection.filter(function (val, i) {
              return i !== index;
            });

            if (this.props.onNodeUnselect) {
              this.props.onNodeUnselect({
                originalEvent: event,
                node: node
              });
            }
          } else {
            selection = [].concat(_toConsumableArray(this.props.selection || []), [node]);

            if (this.props.onNodeSelect) {
              this.props.onNodeSelect({
                originalEvent: event,
                node: node
              });
            }
          }
        }

        if (this.props.onSelectionChange) {
          this.props.onSelectionChange({
            originalEvent: event,
            data: selection
          });
        }
      }
    }
  }, {
    key: "findIndexInSelection",
    value: function findIndexInSelection(node) {
      var index = -1;

      if (this.props.selectionMode && this.props.selection) {
        if (this.props.selectionMode === 'single') {
          index = this.props.selection === node ? 0 : -1;
        } else if (this.props.selectionMode === 'multiple') {
          for (var i = 0; i < this.props.selection.length; i++) {
            if (this.props.selection[i] === node) {
              index = i;
              break;
            }
          }
        }
      }

      return index;
    }
  }, {
    key: "isSelected",
    value: function isSelected(node) {
      return this.findIndexInSelection(node) !== -1;
    }
  }, {
    key: "render",
    value: function render() {
      // return 'noo'
      this.root = this.props.value && this.props.value.length ? this.props.value[0] : null;
      var className = classnames__WEBPACK_IMPORTED_MODULE_2___default()('p-organizationchart p-component', this.props.className);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: this.props.id,
        style: this.props.style,
        className: className
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OrganizationChartNode, {
        node: this.root,
        nodeTemplate: this.props.nodeTemplate,
        selectionMode: this.props.selectionMode,
        onNodeClick: this.onNodeClick,
        isSelected: this.isSelected
      }));
    }
  }]);

  return OrganizationChart;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(OrganizationChart, "defaultProps", {
  id: null,
  value: null,
  style: null,
  className: null,
  selectionMode: null,
  selection: null,
  nodeTemplate: null,
  onSelectionChange: null,
  onNodeSelect: null,
  onNodeUnselect: null
});

_defineProperty(OrganizationChart, "propTypes", {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  selectionMode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  selection: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  nodeTemplate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  onSelectionChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onNodeSelect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onNodeUnselect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
});



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvT3JnYW5pemF0aW9uQ2hhcnQvT3JnYW5pemF0aW9uQ2hhcnQucmVhY3QuanMiXSwibmFtZXMiOlsiT3JnYW5pemF0aW9uQ2hhcnROb2RlIiwicHJvcHMiLCJub2RlIiwic3RhdGUiLCJleHBhbmRlZCIsImxlYWYiLCJjaGlsZHJlbiIsImxlbmd0aCIsImV2ZW50Iiwib25Ob2RlQ2xpY2siLCJfZXhwYW5kZWQiLCJzZXRTdGF0ZSIsInByZXZlbnREZWZhdWx0IiwiaXNTZWxlY3RlZCIsImNvbHNwYW4iLCJnZXRDb2xzcGFuIiwibm9kZVN0eWxlQ2xhc3MiLCJjbGFzc05hbWVzIiwiY2xhc3NOYW1lIiwic2VsZWN0aW9uTW9kZSIsInNlbGVjdGFibGUiLCJub2RlTGFiZWwiLCJub2RlVGVtcGxhdGUiLCJsYWJlbCIsInRvZ2dsZUljb24iLCJub2RlQ29udGVudCIsImUiLCJnZXRMZWFmIiwidG9nZ2xlTm9kZSIsIl92aXNpYmlsaXR5IiwibGluZXNEb3duIiwidmlzaWJpbGl0eSIsIm5vZGVDaGlsZExlbmd0aCIsImxpbmVzTWlkZGxlIiwibWFwIiwiaXRlbSIsImluZGV4IiwibGVmdENsYXNzIiwicmlnaHRDbGFzcyIsImNvbnNvbGUiLCJsb2ciLCJjaGlsZE5vZGVzIiwiY2hpbGQiLCJDb21wb25lbnQiLCJyb290IiwiZmlyc3QiLCJsYXN0IiwiUHJvcFR5cGVzIiwiYW55IiwiYm9vbCIsInN0cmluZyIsImZ1bmMiLCJPcmdhbml6YXRpb25DaGFydCIsInZhbHVlIiwiYmluZCIsImV2ZW50VGFyZ2V0IiwidGFyZ2V0IiwiaW5kZXhPZiIsImZpbmRJbmRleEluU2VsZWN0aW9uIiwic2VsZWN0ZWQiLCJzZWxlY3Rpb24iLCJvbk5vZGVVbnNlbGVjdCIsIm9yaWdpbmFsRXZlbnQiLCJvbk5vZGVTZWxlY3QiLCJmaWx0ZXIiLCJ2YWwiLCJpIiwib25TZWxlY3Rp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QUFZLEVBQUUsS0FBSzNDLEtBQUwsQ0FBV3FCLFlBQWpFO0FBQStFLHFCQUFhLEVBQUUsS0FBS3JCLEtBQUwsQ0FBV2tCLGFBQXpHO0FBQ1EsbUJBQVcsRUFBRSxLQUFLVixXQUQxQjtBQUN1QyxrQkFBVSxFQUFFLEtBQUtJO0FBRHhELFFBREosQ0FESjtBQU1IOzs7O0VBM0gwQzhCLCtDOztnQkFBMUJTLGlCLGtCQUVLO0FBQ2xCaUIsSUFBRSxFQUFFLElBRGM7QUFFbEJoQixPQUFLLEVBQUUsSUFGVztBQUdsQmlCLE9BQUssRUFBRSxJQUhXO0FBSWxCcEQsV0FBUyxFQUFFLElBSk87QUFLbEJDLGVBQWEsRUFBRSxJQUxHO0FBTWxCeUMsV0FBUyxFQUFFLElBTk87QUFPbEJ0QyxjQUFZLEVBQUUsSUFQSTtBQVFsQjZDLG1CQUFpQixFQUFFLElBUkQ7QUFTbEJKLGNBQVksRUFBRSxJQVRJO0FBVWxCRixnQkFBYyxFQUFFO0FBVkUsQzs7Z0JBRkxULGlCLGVBZUU7QUFDZmlCLElBQUUsRUFBRXRCLGlEQUFTLENBQUNHLE1BREM7QUFFZkcsT0FBSyxFQUFFTixpREFBUyxDQUFDQyxHQUZGO0FBR2ZzQixPQUFLLEVBQUV2QixpREFBUyxDQUFDd0IsTUFIRjtBQUlmckQsV0FBUyxFQUFFNkIsaURBQVMsQ0FBQ0csTUFKTjtBQUtmL0IsZUFBYSxFQUFFNEIsaURBQVMsQ0FBQ0csTUFMVjtBQU1mVSxXQUFTLEVBQUViLGlEQUFTLENBQUNDLEdBTk47QUFPZjFCLGNBQVksRUFBRXlCLGlEQUFTLENBQUNDLEdBUFQ7QUFRZm1CLG1CQUFpQixFQUFFcEIsaURBQVMsQ0FBQ0ksSUFSZDtBQVNmWSxjQUFZLEVBQUVoQixpREFBUyxDQUFDSSxJQVRUO0FBVWZVLGdCQUFjLEVBQUVkLGlEQUFTLENBQUNJO0FBVlgsQyIsImZpbGUiOiI1MmVkNTUzLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgJy4vT3JnYW5pemF0aW9uQ2hhcnQuY3NzJ1xuXG5cbmV4cG9ydCBjbGFzcyBPcmdhbml6YXRpb25DaGFydE5vZGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIFxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIG5vZGU6IG51bGwsXG4gICAgICAgIG5vZGVUZW1wbGF0ZTogbnVsbCxcbiAgICAgICAgcm9vdDogZmFsc2UsXG4gICAgICAgIGZpcnN0OiBmYWxzZSxcbiAgICAgICAgbGFzdDogZmFsc2UsXG4gICAgICAgIHNlbGVjdGlvbk1vZGU6IG51bGwsXG4gICAgICAgIG9uTm9kZUNsaWNrOiBudWxsLFxuICAgICAgICBpc1NlbGVjdGVkOiBudWxsXG4gICAgfVxuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgbm9kZTogUHJvcFR5cGVzLmFueSxcbiAgICAgICAgbm9kZVRlbXBsYXRlOiBQcm9wVHlwZXMuYW55LFxuICAgICAgICByb290OiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgZmlyc3Q6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBsYXN0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgc2VsZWN0aW9uTW9kZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgb25Ob2RlQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBpc1NlbGVjdGVkOiBQcm9wVHlwZXMuZnVuY1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5ub2RlID0gdGhpcy5wcm9wcy5ub2RlO1xuICAgICAgICB0aGlzLnN0YXRlID0ge2V4cGFuZGVkOiB0aGlzLm5vZGUuZXhwYW5kZWR9O1xuICAgIH1cblxuICAgIGdldExlYWYoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGUubGVhZiA9PT0gZmFsc2UgPyBmYWxzZSA6ICEodGhpcy5ub2RlLmNoaWxkcmVuJiZ0aGlzLm5vZGUuY2hpbGRyZW4ubGVuZ3RoKTtcbiAgICB9XG4gICAgXG4gICAgZ2V0Q29sc3BhbigpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLm5vZGUuY2hpbGRyZW4gJiYgdGhpcy5ub2RlLmNoaWxkcmVuLmxlbmd0aCkgPyB0aGlzLm5vZGUuY2hpbGRyZW4ubGVuZ3RoICogMjogbnVsbDtcbiAgICB9XG5cbiAgICBvbk5vZGVDbGljayhldmVudCwgbm9kZSkge1xuICAgICAgICB0aGlzLnByb3BzLm9uTm9kZUNsaWNrKGV2ZW50LCBub2RlKVxuICAgIH1cbiAgICBcbiAgICB0b2dnbGVOb2RlKGV2ZW50LCBub2RlKSB7XG4gICAgICAgIGxldCBfZXhwYW5kZWQgPSAhdGhpcy5zdGF0ZS5leHBhbmRlZDtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXhwYW5kZWQ6IF9leHBhbmRlZH0pO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICBcbiAgICBpc1NlbGVjdGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5pc1NlbGVjdGVkKHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLm5vZGUgPSB0aGlzLnByb3BzLm5vZGU7XG5cbiAgICAgICAgdmFyIGNvbHNwYW4gPSB0aGlzLmdldENvbHNwYW4oKTtcbiAgICAgICAgbGV0IG5vZGVTdHlsZUNsYXNzID0gY2xhc3NOYW1lcygncC1vcmdhbml6YXRpb25jaGFydC1ub2RlLWNvbnRlbnQnLCB0aGlzLm5vZGUuY2xhc3NOYW1lLCB7XG4gICAgICAgICAgICAgICAgJ3Atb3JnYW5pemF0aW9uY2hhcnQtc2VsZWN0YWJsZS1ub2RlJzogdGhpcy5wcm9wcy5zZWxlY3Rpb25Nb2RlICYmIHRoaXMubm9kZS5zZWxlY3RhYmxlICE9PSBmYWxzZSxcbiAgICAgICAgICAgICAgICAncC1oaWdobGlnaHQnOiB0aGlzLmlzU2VsZWN0ZWQoKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBub2RlTGFiZWwgPSAodGhpcy5wcm9wcy5ub2RlVGVtcGxhdGUgJiYgdGhpcy5wcm9wcy5ub2RlVGVtcGxhdGUodGhpcy5ub2RlKSkgPyA8ZGl2Pnt0aGlzLnByb3BzLm5vZGVUZW1wbGF0ZSh0aGlzLm5vZGUpfTwvZGl2PiA6IDxkaXY+e3RoaXMubm9kZS5sYWJlbH08L2Rpdj4sXG4gICAgICAgICAgICB0b2dnbGVJY29uID0gY2xhc3NOYW1lcygncC1ub2RlLXRvZ2dsZXItaWNvbicsIHsncGkgcGktY2hldnJvbi1kb3duJzogdGhpcy5zdGF0ZS5leHBhbmRlZCwgJ3BpIHBpLWNoZXZyb24tdXAnOiAhdGhpcy5zdGF0ZS5leHBhbmRlZH0pLFxuICAgICAgICAgICAgbm9kZUNvbnRlbnQgPSAoPHRyPlxuICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXtjb2xzcGFufT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e25vZGVTdHlsZUNsYXNzfSBvbkNsaWNrPXsoZSkgPT4gdGhpcy5vbk5vZGVDbGljayhlLHRoaXMubm9kZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAge25vZGVMYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5nZXRMZWFmKCkgJiYgPGJ1dHRvbiBjbGFzc05hbWU9XCJwLW5vZGUtdG9nZ2xlciBwLWxpbmtcIiBvbkNsaWNrPXsoZSkgPT4gdGhpcy50b2dnbGVOb2RlKGUsIHRoaXMubm9kZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e3RvZ2dsZUljb259PjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+KTtcblxuICAgICAgICBsZXQgX3Zpc2liaWxpdHkgPSAoIXRoaXMuZ2V0TGVhZigpICYmIHRoaXMuc3RhdGUuZXhwYW5kZWQpID8gJ2luaGVyaXQnIDogJ2hpZGRlbicsXG4gICAgICAgICAgICBsaW5lc0Rvd24gPSAoPHRyIHN0eWxlPXt7dmlzaWJpbGl0eTogX3Zpc2liaWxpdHl9fSBjbGFzc05hbWU9XCJwLW9yZ2FuaXphdGlvbmNoYXJ0LWxpbmVzXCI+XG4gICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49e2NvbHNwYW59PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtb3JnYW5pemF0aW9uY2hhcnQtbGluZS1kb3duXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+KSxcbiAgICAgICAgICAgIG5vZGVDaGlsZExlbmd0aCA9IHRoaXMubm9kZS5jaGlsZHJlbiAmJiB0aGlzLm5vZGUuY2hpbGRyZW4ubGVuZ3RoLFxuICAgICAgICAgICAgbGluZXNNaWRkbGUgPSAoPHRyIHN0eWxlPXt7dmlzaWJpbGl0eTogX3Zpc2liaWxpdHl9fSBjbGFzc05hbWU9XCJwLW9yZ2FuaXphdGlvbmNoYXJ0LWxpbmVzXCI+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW4gJiYgdGhpcy5ub2RlLmNoaWxkcmVuLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsZWZ0Q2xhc3MgPSBjbGFzc05hbWVzKCdwLW9yZ2FuaXphdGlvbmNoYXJ0LWxpbmUtbGVmdCcsIHsncC1vcmdhbml6YXRpb25jaGFydC1saW5lLXRvcCc6IGluZGV4ICE9PSAwfSksXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodENsYXNzID0gY2xhc3NOYW1lcygncC1vcmdhbml6YXRpb25jaGFydC1saW5lLXJpZ2h0JywgeydwLW9yZ2FuaXphdGlvbmNoYXJ0LWxpbmUtdG9wJzogaW5kZXggIT09IG5vZGVDaGlsZExlbmd0aCAtIDF9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGxlZnRDbGFzcyxyaWdodENsYXNzKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzx0ZCBrZXk9e2luZGV4ICsgJ19saW5lbGVmdCd9IGNsYXNzTmFtZT17bGVmdENsYXNzfT4mbmJzcDs8L3RkPiwgPHRkIGtleT17aW5kZXggKyAnX2xpbmVyaWdodCd9IGNsYXNzTmFtZT17cmlnaHRDbGFzc30+Jm5ic3A7PC90ZD5dO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvdHI+KSxcbiAgICAgICAgICAgIGNoaWxkTm9kZXMgPSAoPHRyIHN0eWxlPXt7dmlzaWJpbGl0eTogX3Zpc2liaWxpdHl9fSBjbGFzc05hbWU9XCJwLW9yZ2FuaXphdGlvbmNoYXJ0LW5vZGVzXCI+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5jaGlsZHJlbiAmJiB0aGlzLm5vZGUuY2hpbGRyZW4ubWFwKChjaGlsZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDx0ZCBrZXk9e2luZGV4fSBjb2xTcGFuPVwiMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9yZ2FuaXphdGlvbkNoYXJ0Tm9kZSBub2RlPXtjaGlsZH0gbm9kZVRlbXBsYXRlPXt0aGlzLnByb3BzLm5vZGVUZW1wbGF0ZX0gc2VsZWN0aW9uTW9kZT17dGhpcy5wcm9wcy5zZWxlY3Rpb25Nb2RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTm9kZUNsaWNrPXt0aGlzLnByb3BzLm9uTm9kZUNsaWNrfSBpc1NlbGVjdGVkPXt0aGlzLnByb3BzLmlzU2VsZWN0ZWR9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD4pXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3RyPik7XG5cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInAtb3JnYW5pemF0aW9uY2hhcnQtdGFibGVcIj5cbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIHtub2RlQ29udGVudH1cbiAgICAgICAgICAgICAgICAgICAge2xpbmVzRG93bn1cbiAgICAgICAgICAgICAgICAgICAge2xpbmVzTWlkZGxlfVxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGROb2Rlc31cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JnYW5pemF0aW9uQ2hhcnQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgaWQ6IG51bGwsXG4gICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICBzdHlsZTogbnVsbCxcbiAgICAgICAgY2xhc3NOYW1lOiBudWxsLFxuICAgICAgICBzZWxlY3Rpb25Nb2RlOiBudWxsLFxuICAgICAgICBzZWxlY3Rpb246IG51bGwsXG4gICAgICAgIG5vZGVUZW1wbGF0ZTogbnVsbCxcbiAgICAgICAgb25TZWxlY3Rpb25DaGFuZ2U6IG51bGwsXG4gICAgICAgIG9uTm9kZVNlbGVjdDogbnVsbCxcbiAgICAgICAgb25Ob2RlVW5zZWxlY3Q6IG51bGxcbiAgICB9XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgdmFsdWU6IFByb3BUeXBlcy5hbnksXG4gICAgICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHNlbGVjdGlvbk1vZGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHNlbGVjdGlvbjogUHJvcFR5cGVzLmFueSxcbiAgICAgICAgbm9kZVRlbXBsYXRlOiBQcm9wVHlwZXMuYW55LFxuICAgICAgICBvblNlbGVjdGlvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIG9uTm9kZVNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIG9uTm9kZVVuc2VsZWN0OiBQcm9wVHlwZXMuZnVuY1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5yb290ID0gdGhpcy5wcm9wcy52YWx1ZSAmJiB0aGlzLnByb3BzLnZhbHVlLmxlbmd0aCA/IHRoaXMucHJvcHMudmFsdWVbMF0gOiBudWxsO1xuICAgICAgICB0aGlzLm9uTm9kZUNsaWNrID0gdGhpcy5vbk5vZGVDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmlzU2VsZWN0ZWQgPSB0aGlzLmlzU2VsZWN0ZWQuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBvbk5vZGVDbGljayhldmVudCwgbm9kZSkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3Rpb25Nb2RlKSB7XG4gICAgICAgICAgICBsZXQgZXZlbnRUYXJnZXQgPSAoZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgICAgIGlmIChldmVudFRhcmdldC5jbGFzc05hbWUgJiYgKGV2ZW50VGFyZ2V0LmNsYXNzTmFtZS5pbmRleE9mKCdwLW5vZGUtdG9nZ2xlcicpICE9PSAtMSB8fCBldmVudFRhcmdldC5jbGFzc05hbWUuaW5kZXhPZigncC1ub2RlLXRvZ2dsZXItaWNvbicpICE9PSAtMSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChub2RlLnNlbGVjdGFibGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmZpbmRJbmRleEluU2VsZWN0aW9uKG5vZGUpO1xuICAgICAgICAgICAgbGV0IHNlbGVjdGVkID0gKGluZGV4ID49IDApO1xuICAgICAgICAgICAgbGV0IHNlbGVjdGlvbjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0aW9uTW9kZSA9PT0gJ3NpbmdsZScpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub25Ob2RlVW5zZWxlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25Ob2RlVW5zZWxlY3Qoe29yaWdpbmFsRXZlbnQ6IGV2ZW50LCBub2RlOiBub2RlfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbiA9IG5vZGU7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9uTm9kZVNlbGVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbk5vZGVTZWxlY3Qoe29yaWdpbmFsRXZlbnQ6IGV2ZW50LCBub2RlOiBub2RlfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnByb3BzLnNlbGVjdGlvbk1vZGUgPT09ICdtdWx0aXBsZScpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uID0gdGhpcy5wcm9wcy5zZWxlY3Rpb24uZmlsdGVyKCh2YWwsaSkgPT4gaSAhPT0gaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vbk5vZGVVbnNlbGVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbk5vZGVVbnNlbGVjdCh7b3JpZ2luYWxFdmVudDogZXZlbnQsIG5vZGU6IG5vZGV9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uID0gWy4uLnRoaXMucHJvcHMuc2VsZWN0aW9ufHxbXSwgbm9kZV07XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMucHJvcHMub25Ob2RlU2VsZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uTm9kZVNlbGVjdCh7b3JpZ2luYWxFdmVudDogZXZlbnQsIG5vZGU6IG5vZGV9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub25TZWxlY3Rpb25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uU2VsZWN0aW9uQ2hhbmdlKHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHNlbGVjdGlvblxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGZpbmRJbmRleEluU2VsZWN0aW9uKG5vZGUpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gLTE7XG5cbiAgICAgICAgaWYodGhpcy5wcm9wcy5zZWxlY3Rpb25Nb2RlICYmIHRoaXMucHJvcHMuc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICBpZih0aGlzLnByb3BzLnNlbGVjdGlvbk1vZGUgPT09ICdzaW5nbGUnKSB7XG4gICAgICAgICAgICAgICAgaW5kZXggPSAodGhpcy5wcm9wcy5zZWxlY3Rpb24gPT09IG5vZGUpID8gMCA6IC0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYodGhpcy5wcm9wcy5zZWxlY3Rpb25Nb2RlID09PSAnbXVsdGlwbGUnKSB7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSAgPCB0aGlzLnByb3BzLnNlbGVjdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnByb3BzLnNlbGVjdGlvbltpXSA9PT0gbm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICAgIFxuICAgIGlzU2VsZWN0ZWQobm9kZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5maW5kSW5kZXhJblNlbGVjdGlvbihub2RlKSAhPT0gLTE7ICAgICAgICAgXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAvLyByZXR1cm4gJ25vbydcbiAgICAgICAgdGhpcy5yb290ID0gdGhpcy5wcm9wcy52YWx1ZSAmJiB0aGlzLnByb3BzLnZhbHVlLmxlbmd0aCA/IHRoaXMucHJvcHMudmFsdWVbMF0gOiBudWxsO1xuXG4gICAgICAgIHZhciBjbGFzc05hbWUgPSBjbGFzc05hbWVzKCdwLW9yZ2FuaXphdGlvbmNoYXJ0IHAtY29tcG9uZW50JywgdGhpcy5wcm9wcy5jbGFzc05hbWUpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD17dGhpcy5wcm9wcy5pZH0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgICAgICAgICA8T3JnYW5pemF0aW9uQ2hhcnROb2RlIG5vZGU9e3RoaXMucm9vdH0gbm9kZVRlbXBsYXRlPXt0aGlzLnByb3BzLm5vZGVUZW1wbGF0ZX0gc2VsZWN0aW9uTW9kZT17dGhpcy5wcm9wcy5zZWxlY3Rpb25Nb2RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Ob2RlQ2xpY2s9e3RoaXMub25Ob2RlQ2xpY2t9IGlzU2VsZWN0ZWQ9e3RoaXMuaXNTZWxlY3RlZH0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=