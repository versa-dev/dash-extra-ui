webpackHotUpdateextra_dash_ui_components("main",{

/***/ "./src/lib/components/Tree/TreeDashUiComponents.react.js":
/*!***************************************************************!*\
  !*** ./src/lib/components/Tree/TreeDashUiComponents.react.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TreeDashUiComponents; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_ObjectUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/ObjectUtils */ "./src/lib/components/utils/ObjectUtils.js");
/* harmony import */ var _UITreeNode_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UITreeNode.react */ "./src/lib/components/Tree/UITreeNode.react.js");
/* harmony import */ var _Tree_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Tree.css */ "./src/lib/components/Tree/Tree.css");
/* harmony import */ var _Tree_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Tree_css__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var TreeDashUiComponents =
/*#__PURE__*/
function (_Component) {
  _inherits(TreeDashUiComponents, _Component);

  function TreeDashUiComponents() {
    var _this;

    _classCallCheck(this, TreeDashUiComponents);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TreeDashUiComponents).call(this));

    _this.init();

    return _this;
  }

  _createClass(TreeDashUiComponents, [{
    key: "init",
    value: function init() {
      if (!this.props.onToggle) {
        this.state = {
          expandedKeys: this.props.expandedKeys,
          filter: ''
        };
      }

      this.isNodeLeaf = this.isNodeLeaf.bind(this);
      this.onToggle = this.onToggle.bind(this);
      this.onDragStart = this.onDragStart.bind(this);
      this.onDragEnd = this.onDragEnd.bind(this);
      this.onDrop = this.onDrop.bind(this);
      this.onDropPoint = this.onDropPoint.bind(this);
      this.onFilterInputChange = this.onFilterInputChange.bind(this);
      this.onFilterInputKeyDown = this.onFilterInputKeyDown.bind(this);
    } // componentDidMount(){
    //     console.log("didmount")
    //     this.init();
    // }

  }, {
    key: "getExpandedKeys",
    value: function getExpandedKeys() {
      console.log(this.props.onToggle);
      return this.props.onToggle ? this.props.expandedKeys : this.state.expandedKeys;
    }
  }, {
    key: "getRootNode",
    value: function getRootNode() {
      return this.props.filter && this.filteredNodes ? this.filteredNodes : this.props.value;
    }
  }, {
    key: "onToggle",
    value: function onToggle(event) {
      if (this.props.onToggle) {
        this.props.onToggle(event);
      } else {
        this.setState({
          expandedKeys: event.value
        });
      }
    }
  }, {
    key: "onDragStart",
    value: function onDragStart(event) {
      this.dragState = {
        path: event.path,
        index: event.index
      };
    }
  }, {
    key: "onDragEnd",
    value: function onDragEnd() {
      this.dragState = null;
    }
  }, {
    key: "onDrop",
    value: function onDrop(event) {
      if (this.validateDropNode(this.dragState.path, event.path)) {
        var value = JSON.parse(JSON.stringify(this.props.value));
        var dragPaths = this.dragState.path.split('-');
        dragPaths.pop();
        var dragNodeParent = this.findNode(value, dragPaths);
        var dragNode = dragNodeParent ? dragNodeParent.children[this.dragState.index] : value[this.dragState.index];
        var dropNode = this.findNode(value, event.path.split('-'));
        if (dropNode.children) dropNode.children.push(dragNode);else dropNode.children = [dragNode];
        if (dragNodeParent) dragNodeParent.children.splice(this.dragState.index, 1);else value.splice(this.dragState.index, 1);

        if (this.props.onDragDrop) {
          this.props.onDragDrop({
            originalEvent: event.originalEvent,
            value: value
          });
        }
      }
    }
  }, {
    key: "onDropPoint",
    value: function onDropPoint(event) {
      if (this.validateDropPoint(event)) {
        var value = JSON.parse(JSON.stringify(this.props.value));
        var dragPaths = this.dragState.path.split('-');
        dragPaths.pop();
        var dropPaths = event.path.split('-');
        dropPaths.pop();
        var dragNodeParent = this.findNode(value, dragPaths);
        var dropNodeParent = this.findNode(value, dropPaths);
        var dragNode = dragNodeParent ? dragNodeParent.children[this.dragState.index] : value[this.dragState.index];
        var siblings = this.areSiblings(this.dragState.path, event.path);
        if (dragNodeParent) dragNodeParent.children.splice(this.dragState.index, 1);else value.splice(this.dragState.index, 1);

        if (event.position < 0) {
          var dropIndex = siblings ? this.dragState.index > event.index ? event.index : event.index - 1 : event.index;
          if (dropNodeParent) dropNodeParent.children.splice(dropIndex, 0, dragNode);else value.splice(dropIndex, 0, dragNode);
        } else {
          if (dropNodeParent) dropNodeParent.children.push(dragNode);else value.push(dragNode);
        }

        if (this.props.onDragDrop) {
          this.props.onDragDrop({
            originalEvent: event.originalEvent,
            value: value
          });
        }
      }
    }
  }, {
    key: "validateDrop",
    value: function validateDrop(dragPath, dropPath) {
      if (!dragPath) {
        return false;
      } else {
        //same node
        if (dragPath === dropPath) {
          return false;
        } //parent dropped on an descendant


        if (dropPath.indexOf(dragPath) === 0) {
          return false;
        }

        return true;
      }
    }
  }, {
    key: "validateDropNode",
    value: function validateDropNode(dragPath, dropPath) {
      var validateDrop = this.validateDrop(dragPath, dropPath);

      if (validateDrop) {
        //child dropped on parent
        if (dragPath.indexOf('-') > 0 && dragPath.substring(0, dragPath.lastIndexOf('-')) === dropPath) {
          return false;
        }

        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "validateDropPoint",
    value: function validateDropPoint(event) {
      var validateDrop = this.validateDrop(this.dragState.path, event.path);

      if (validateDrop) {
        //child dropped to next sibling's drop point
        if (event.position === -1 && this.areSiblings(this.dragState.path, event.path) && this.dragState.index + 1 === event.index) {
          return false;
        }

        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "areSiblings",
    value: function areSiblings(path1, path2) {
      if (path1.length === 1 && path2.length === 1) return true;else return path1.substring(0, path1.lastIndexOf('-')) === path2.substring(0, path2.lastIndexOf('-'));
    }
  }, {
    key: "findNode",
    value: function findNode(value, path) {
      if (path.length === 0) {
        return null;
      } else {
        var index = parseInt(path[0], 10);
        var nextSearchRoot = value.children ? value.children[index] : value[index];

        if (path.length === 1) {
          return nextSearchRoot;
        } else {
          path.shift();
          return this.findNode(nextSearchRoot, path);
        }
      }
    }
  }, {
    key: "isNodeLeaf",
    value: function isNodeLeaf(node) {
      return node.leaf === false ? false : !(node.children && node.children.length);
    }
  }, {
    key: "onFilterInputKeyDown",
    value: function onFilterInputKeyDown(event) {
      //enter
      if (event.which === 13) {
        event.preventDefault();
      }
    }
  }, {
    key: "onFilterInputChange",
    value: function onFilterInputChange(event) {
      this.filterChanged = true;
      this.setState({
        filter: event.target.value
      });
    }
  }, {
    key: "filter",
    value: function filter() {
      if (!this.filterChanged) {
        return;
      }

      if (this.state.filter === '') {
        this.filteredNodes = this.props.value;
      } else {
        this.filteredNodes = [];
        var searchFields = this.props.filterBy.split(',');
        var filterText = this.state.filter.toLowerCase();
        var isStrictMode = this.props.filterMode === 'strict';
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.props.value[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var node = _step.value;

            var copyNode = _objectSpread({}, node);

            var paramsWithoutNode = {
              searchFields: searchFields,
              filterText: filterText,
              isStrictMode: isStrictMode
            };

            if (isStrictMode && (this.findFilteredNodes(copyNode, paramsWithoutNode) || this.isFilterMatched(copyNode, paramsWithoutNode)) || !isStrictMode && (this.isFilterMatched(copyNode, paramsWithoutNode) || this.findFilteredNodes(copyNode, paramsWithoutNode))) {
              this.filteredNodes.push(copyNode);
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }

      this.filterChanged = false;
    }
  }, {
    key: "findFilteredNodes",
    value: function findFilteredNodes(node, paramsWithoutNode) {
      if (node) {
        var matched = false;

        if (node.children) {
          var childNodes = _toConsumableArray(node.children);

          node.children = [];
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = childNodes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var childNode = _step2.value;

              var copyChildNode = _objectSpread({}, childNode);

              if (this.isFilterMatched(copyChildNode, paramsWithoutNode)) {
                matched = true;
                node.children.push(copyChildNode);
              }
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                _iterator2["return"]();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }

        if (matched) {
          return true;
        }
      }
    }
  }, {
    key: "isFilterMatched",
    value: function isFilterMatched(node, _ref) {
      var searchFields = _ref.searchFields,
          filterText = _ref.filterText,
          isStrictMode = _ref.isStrictMode;
      var matched = false;
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = searchFields[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var field = _step3.value;
          var fieldValue = String(_utils_ObjectUtils__WEBPACK_IMPORTED_MODULE_3__["default"].resolveFieldData(node, field)).toLowerCase();

          if (fieldValue.indexOf(filterText) > -1) {
            matched = true;
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
            _iterator3["return"]();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      if (!matched || isStrictMode && !this.isNodeLeaf(node)) {
        matched = this.findFilteredNodes(node, {
          searchFields: searchFields,
          filterText: filterText,
          isStrictMode: isStrictMode
        }) || matched;
      }

      return matched;
    }
  }, {
    key: "renderRootChild",
    value: function renderRootChild(node, index, last) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UITreeNode_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
        key: node.key || node.label,
        node: node,
        index: index,
        last: last,
        path: String(index),
        disabled: this.props.disabled,
        selectionMode: this.props.selectionMode,
        selectionKeys: this.props.selectionKeys,
        onSelectionChange: this.props.onSelectionChange,
        metaKeySelection: this.props.metaKeySelection,
        contextMenuSelectionKey: this.props.contextMenuSelectionKey,
        onContextMenuSelectionChange: this.props.onContextMenuSelectionChange,
        onContextMenu: this.props.onContextMenu,
        propagateSelectionDown: this.props.propagateSelectionDown,
        propagateSelectionUp: this.props.propagateSelectionUp,
        onExpand: this.props.onExpand,
        onCollapse: this.props.onCollapse,
        onSelect: this.props.onSelect,
        onUnselect: this.props.onUnselect,
        expandedKeys: this.getExpandedKeys(),
        onToggle: this.onToggle,
        nodeTemplate: this.props.nodeTemplate,
        isNodeLeaf: this.isNodeLeaf,
        dragdropScope: this.props.dragdropScope,
        onDragStart: this.onDragStart,
        onDragEnd: this.onDragEnd,
        onDrop: this.onDrop,
        onDropPoint: this.onDropPoint
      });
    }
  }, {
    key: "renderRootChildren",
    value: function renderRootChildren() {
      var _this2 = this;

      if (this.props.filter) {
        this.filter();
      }

      var value = this.getRootNode();
      return value.map(function (node, index) {
        return _this2.renderRootChild(node, index, index === value.length - 1);
      });
    }
  }, {
    key: "renderModel",
    value: function renderModel() {
      if (this.props.value) {
        var rootNodes = this.renderRootChildren();
        var contentClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()('p-tree-container', this.props.contentClassName);
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
          className: contentClass,
          role: "tree",
          "aria-label": this.props.ariaLabel,
          "aria-labelledby": this.props.ariaLabelledBy,
          style: this.props.contentStyle
        }, rootNodes);
      } else {
        return null;
      }
    }
  }, {
    key: "renderLoader",
    value: function renderLoader() {
      if (this.props.loading) {
        var icon = classnames__WEBPACK_IMPORTED_MODULE_2___default()('p-tree-loading-icon pi-spin', this.props.loadingIcon);
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "p-tree-loading-mask p-component-overlay"
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "p-tree-loading-content"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: icon
        })));
      } else {
        return null;
      }
    }
  }, {
    key: "renderFilter",
    value: function renderFilter() {
      if (this.props.filter) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "p-tree-filter-container"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "text",
          autoComplete: "off",
          className: "p-tree-filter p-inputtext p-component",
          placeholder: this.props.filterPlaceholder,
          onKeyDown: this.onFilterInputKeyDown,
          onChange: this.onFilterInputChange,
          disabled: this.props.disabled
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "p-tree-filter-icon pi pi-search"
        }));
      } else {
        return null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var className = classnames__WEBPACK_IMPORTED_MODULE_2___default()('p-tree p-component', this.props.className, {
        'p-tree-selectable': this.props.selectionMode,
        'p-tree-loading': this.props.loading,
        'p-disabled': this.props.disabled
      });
      var loader = this.renderLoader();
      var content = this.renderModel();
      var filter = this.renderFilter();
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: this.props.id,
        className: className,
        style: this.props.style
      }, loader, filter, content);
    }
  }]);

  return TreeDashUiComponents;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


TreeDashUiComponents.defaultProps = {
  id: null,
  value: null,
  disabled: false,
  selectionMode: null,
  selectionKeys: null,
  onSelectionChange: null,
  contextMenuSelectionKey: null,
  onContextMenuSelectionChange: null,
  expandedKeys: null,
  style: null,
  className: null,
  contentStyle: null,
  contentClassName: null,
  metaKeySelection: true,
  propagateSelectionUp: true,
  propagateSelectionDown: true,
  loading: false,
  loadingIcon: 'pi pi-spinner',
  dragdropScope: null,
  filter: false,
  filterBy: 'label',
  filterMode: 'lenient',
  filterPlaceholder: null,
  nodeTemplate: null,
  onSelect: null,
  onUnselect: null,
  onExpand: null,
  onCollapse: null,
  onToggle: null,
  onDragDrop: null,
  onContextMenu: null
};
TreeDashUiComponents.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  selectionMode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  selectionKeys: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  onSelectionChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  contextMenuSelectionKey: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  onContextMenuSelectionChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  expandedKeys: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  contentStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  contentClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  metaKeySelection: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  propagateSelectionUp: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  propagateSelectionDown: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  loadingIcon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  dragdropScope: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  filter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  filterBy: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  filterMode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  filterPlaceholder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  nodeTemplate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onUnselect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onExpand: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onCollapse: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onToggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onDragDrop: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onContextMenu: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvVHJlZS9UcmVlRGFzaFVpQ29tcG9uZW50cy5yZWFjdC5qcyJdLCJuYW1lcyI6WyJUcmVlRGFzaFVpQ29tcG9uZW50cyIsImluaXQiLCJwcm9wcyIsIm9uVG9nZ2xlIiwic3RhdGUiLCJleHBhbmRlZEtleXMiLCJmaWx0ZXIiLCJpc05vZGVMZWFmIiwiYmluZCIsIm9uRHJhZ1N0YXJ0Iiwib25EcmFnRW5kIiwib25Ecm9wIiwib25Ecm9wUG9pbnQiLCJvbkZpbHRlcklucHV0Q2hhbmdlIiwib25GaWx0ZXJJbnB1dEtleURvd24iLCJjb25zb2xlIiwibG9nIiwiZmlsdGVyZWROb2RlcyIsInZhbHVlIiwiZXZlbnQiLCJzZXRTdGF0ZSIsImRyYWdTdGF0ZSIsInBhdGgiLCJpbmRleCIsInZhbGlkYXRlRHJvcE5vZGUiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJkcmFnUGF0aHMiLCJzcGxpdCIsInBvcCIsImRyYWdOb2RlUGFyZW50IiwiZmluZE5vZGUiLCJkcmFnTm9kZSIsImNoaWxkcmVuIiwiZHJvcE5vZGUiLCJwdXNoIiwic3BsaWNlIiwib25EcmFnRHJvcCIsIm9yaWdpbmFsRXZlbnQiLCJ2YWxpZGF0ZURyb3BQb2ludCIsImRyb3BQYXRocyIsImRyb3BOb2RlUGFyZW50Iiwic2libGluZ3MiLCJhcmVTaWJsaW5ncyIsInBvc2l0aW9uIiwiZHJvcEluZGV4IiwiZHJhZ1BhdGgiLCJkcm9wUGF0aCIsImluZGV4T2YiLCJ2YWxpZGF0ZURyb3AiLCJzdWJzdHJpbmciLCJsYXN0SW5kZXhPZiIsInBhdGgxIiwicGF0aDIiLCJsZW5ndGgiLCJwYXJzZUludCIsIm5leHRTZWFyY2hSb290Iiwic2hpZnQiLCJub2RlIiwibGVhZiIsIndoaWNoIiwicHJldmVudERlZmF1bHQiLCJmaWx0ZXJDaGFuZ2VkIiwidGFyZ2V0Iiwic2VhcmNoRmllbGRzIiwiZmlsdGVyQnkiLCJmaWx0ZXJUZXh0IiwidG9Mb3dlckNhc2UiLCJpc1N0cmljdE1vZGUiLCJmaWx0ZXJNb2RlIiwiY29weU5vZGUiLCJwYXJhbXNXaXRob3V0Tm9kZSIsImZpbmRGaWx0ZXJlZE5vZGVzIiwiaXNGaWx0ZXJNYXRjaGVkIiwibWF0Y2hlZCIsImNoaWxkTm9kZXMiLCJjaGlsZE5vZGUiLCJjb3B5Q2hpbGROb2RlIiwiZmllbGQiLCJmaWVsZFZhbHVlIiwiU3RyaW5nIiwiT2JqZWN0VXRpbHMiLCJyZXNvbHZlRmllbGREYXRhIiwibGFzdCIsImtleSIsImxhYmVsIiwiZGlzYWJsZWQiLCJzZWxlY3Rpb25Nb2RlIiwic2VsZWN0aW9uS2V5cyIsIm9uU2VsZWN0aW9uQ2hhbmdlIiwibWV0YUtleVNlbGVjdGlvbiIsImNvbnRleHRNZW51U2VsZWN0aW9uS2V5Iiwib25Db250ZXh0TWVudVNlbGVjdGlvbkNoYW5nZSIsIm9uQ29udGV4dE1lbnUiLCJwcm9wYWdhdGVTZWxlY3Rpb25Eb3duIiwicHJvcGFnYXRlU2VsZWN0aW9uVXAiLCJvbkV4cGFuZCIsIm9uQ29sbGFwc2UiLCJvblNlbGVjdCIsIm9uVW5zZWxlY3QiLCJnZXRFeHBhbmRlZEtleXMiLCJub2RlVGVtcGxhdGUiLCJkcmFnZHJvcFNjb3BlIiwiZ2V0Um9vdE5vZGUiLCJtYXAiLCJyZW5kZXJSb290Q2hpbGQiLCJyb290Tm9kZXMiLCJyZW5kZXJSb290Q2hpbGRyZW4iLCJjb250ZW50Q2xhc3MiLCJjbGFzc05hbWVzIiwiY29udGVudENsYXNzTmFtZSIsImFyaWFMYWJlbCIsImFyaWFMYWJlbGxlZEJ5IiwiY29udGVudFN0eWxlIiwibG9hZGluZyIsImljb24iLCJsb2FkaW5nSWNvbiIsImZpbHRlclBsYWNlaG9sZGVyIiwiY2xhc3NOYW1lIiwibG9hZGVyIiwicmVuZGVyTG9hZGVyIiwiY29udGVudCIsInJlbmRlck1vZGVsIiwicmVuZGVyRmlsdGVyIiwiaWQiLCJzdHlsZSIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BU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QjdCeEMsZUFBYSxFQUFFb0MsaURBQVMsQ0FBQ0k7QUEvQkksQ0FBakMsQyIsImZpbGUiOiIzZWNmYmMwLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgT2JqZWN0VXRpbHMgZnJvbSAnLi4vdXRpbHMvT2JqZWN0VXRpbHMnO1xyXG5pbXBvcnQgVUlUcmVlTm9kZSBmcm9tICcuL1VJVHJlZU5vZGUucmVhY3QnO1xyXG5cclxuaW1wb3J0ICcuL1RyZWUuY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyZWVEYXNoVWlDb21wb25lbnRzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuaW5pdCgpXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpe1xyXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5vblRvZ2dsZSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgZXhwYW5kZWRLZXlzOiB0aGlzLnByb3BzLmV4cGFuZGVkS2V5cyxcclxuICAgICAgICAgICAgICAgIGZpbHRlcjogJydcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5pc05vZGVMZWFmID0gdGhpcy5pc05vZGVMZWFmLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vblRvZ2dsZSA9IHRoaXMub25Ub2dnbGUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uRHJhZ1N0YXJ0ID0gdGhpcy5vbkRyYWdTdGFydC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25EcmFnRW5kID0gdGhpcy5vbkRyYWdFbmQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uRHJvcCA9IHRoaXMub25Ecm9wLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vbkRyb3BQb2ludCA9IHRoaXMub25Ecm9wUG9pbnQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uRmlsdGVySW5wdXRDaGFuZ2UgPSB0aGlzLm9uRmlsdGVySW5wdXRDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uRmlsdGVySW5wdXRLZXlEb3duID0gdGhpcy5vbkZpbHRlcklucHV0S2V5RG93bi5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJkaWRtb3VudFwiKVxyXG4gICAgLy8gICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGdldEV4cGFuZGVkS2V5cygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLm9uVG9nZ2xlKVxyXG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLm9uVG9nZ2xlID8gdGhpcy5wcm9wcy5leHBhbmRlZEtleXMgOiB0aGlzLnN0YXRlLmV4cGFuZGVkS2V5cztcclxuICAgIH1cclxuXHJcbiAgICBnZXRSb290Tm9kZSgpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMucHJvcHMuZmlsdGVyICYmIHRoaXMuZmlsdGVyZWROb2RlcykgPyB0aGlzLmZpbHRlcmVkTm9kZXMgOiB0aGlzLnByb3BzLnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVG9nZ2xlKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25Ub2dnbGUpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblRvZ2dsZShldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGV4cGFuZGVkS2V5czogZXZlbnQudmFsdWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRHJhZ1N0YXJ0KGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5kcmFnU3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHBhdGg6IGV2ZW50LnBhdGgsXHJcbiAgICAgICAgICAgIGluZGV4OiBldmVudC5pbmRleFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkRyYWdFbmQoKSB7XHJcbiAgICAgICAgdGhpcy5kcmFnU3RhdGUgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRHJvcChldmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRlRHJvcE5vZGUodGhpcy5kcmFnU3RhdGUucGF0aCwgZXZlbnQucGF0aCkpIHtcclxuICAgICAgICAgICAgbGV0IHZhbHVlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLnZhbHVlKSk7XHJcbiAgICAgICAgICAgIGxldCBkcmFnUGF0aHMgPSB0aGlzLmRyYWdTdGF0ZS5wYXRoLnNwbGl0KCctJyk7XHJcbiAgICAgICAgICAgIGRyYWdQYXRocy5wb3AoKTtcclxuICAgICAgICAgICAgbGV0IGRyYWdOb2RlUGFyZW50ID0gdGhpcy5maW5kTm9kZSh2YWx1ZSwgZHJhZ1BhdGhzKTtcclxuICAgICAgICAgICAgbGV0IGRyYWdOb2RlID0gZHJhZ05vZGVQYXJlbnQgPyBkcmFnTm9kZVBhcmVudC5jaGlsZHJlblt0aGlzLmRyYWdTdGF0ZS5pbmRleF0gOiB2YWx1ZVt0aGlzLmRyYWdTdGF0ZS5pbmRleF07XHJcbiAgICAgICAgICAgIGxldCBkcm9wTm9kZSA9IHRoaXMuZmluZE5vZGUodmFsdWUsIGV2ZW50LnBhdGguc3BsaXQoJy0nKSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoZHJvcE5vZGUuY2hpbGRyZW4pXHJcbiAgICAgICAgICAgICAgICBkcm9wTm9kZS5jaGlsZHJlbi5wdXNoKGRyYWdOb2RlKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgZHJvcE5vZGUuY2hpbGRyZW4gPSBbZHJhZ05vZGVdO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRyYWdOb2RlUGFyZW50KVxyXG4gICAgICAgICAgICAgICAgZHJhZ05vZGVQYXJlbnQuY2hpbGRyZW4uc3BsaWNlKHRoaXMuZHJhZ1N0YXRlLmluZGV4LCAxKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdmFsdWUuc3BsaWNlKHRoaXMuZHJhZ1N0YXRlLmluZGV4LCAxKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9uRHJhZ0Ryb3ApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25EcmFnRHJvcCh7XHJcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQub3JpZ2luYWxFdmVudCxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRHJvcFBvaW50KGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdGVEcm9wUG9pbnQoZXZlbnQpKSB7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcy52YWx1ZSkpO1xyXG4gICAgICAgICAgICBsZXQgZHJhZ1BhdGhzID0gdGhpcy5kcmFnU3RhdGUucGF0aC5zcGxpdCgnLScpO1xyXG4gICAgICAgICAgICBkcmFnUGF0aHMucG9wKCk7XHJcbiAgICAgICAgICAgIGxldCBkcm9wUGF0aHMgPSBldmVudC5wYXRoLnNwbGl0KCctJyk7XHJcbiAgICAgICAgICAgIGRyb3BQYXRocy5wb3AoKTtcclxuICAgICAgICAgICAgbGV0IGRyYWdOb2RlUGFyZW50ID0gdGhpcy5maW5kTm9kZSh2YWx1ZSwgZHJhZ1BhdGhzKTtcclxuICAgICAgICAgICAgbGV0IGRyb3BOb2RlUGFyZW50ID0gdGhpcy5maW5kTm9kZSh2YWx1ZSwgZHJvcFBhdGhzKTtcclxuICAgICAgICAgICAgbGV0IGRyYWdOb2RlID0gZHJhZ05vZGVQYXJlbnQgPyBkcmFnTm9kZVBhcmVudC5jaGlsZHJlblt0aGlzLmRyYWdTdGF0ZS5pbmRleF0gOiB2YWx1ZVt0aGlzLmRyYWdTdGF0ZS5pbmRleF07XHJcbiAgICAgICAgICAgIGxldCBzaWJsaW5ncyA9IHRoaXMuYXJlU2libGluZ3ModGhpcy5kcmFnU3RhdGUucGF0aCwgZXZlbnQucGF0aCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZHJhZ05vZGVQYXJlbnQpXHJcbiAgICAgICAgICAgICAgICBkcmFnTm9kZVBhcmVudC5jaGlsZHJlbi5zcGxpY2UodGhpcy5kcmFnU3RhdGUuaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB2YWx1ZS5zcGxpY2UodGhpcy5kcmFnU3RhdGUuaW5kZXgsIDEpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGV2ZW50LnBvc2l0aW9uIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRyb3BJbmRleCA9IChzaWJsaW5ncykgPyAodGhpcy5kcmFnU3RhdGUuaW5kZXggPiBldmVudC5pbmRleCkgPyBldmVudC5pbmRleCA6IGV2ZW50LmluZGV4IC0gMSA6IGV2ZW50LmluZGV4O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkcm9wTm9kZVBhcmVudClcclxuICAgICAgICAgICAgICAgICAgICBkcm9wTm9kZVBhcmVudC5jaGlsZHJlbi5zcGxpY2UoZHJvcEluZGV4LCAwLCBkcmFnTm9kZSk7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUuc3BsaWNlKGRyb3BJbmRleCwgMCwgZHJhZ05vZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRyb3BOb2RlUGFyZW50KVxyXG4gICAgICAgICAgICAgICAgICAgIGRyb3BOb2RlUGFyZW50LmNoaWxkcmVuLnB1c2goZHJhZ05vZGUpO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLnB1c2goZHJhZ05vZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkRyYWdEcm9wKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uRHJhZ0Ryb3Aoe1xyXG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50Lm9yaWdpbmFsRXZlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YWxpZGF0ZURyb3AoZHJhZ1BhdGgsIGRyb3BQYXRoKSB7XHJcbiAgICAgICAgaWYgKCFkcmFnUGF0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgeyAgIFxyXG4gICAgICAgICAgICAvL3NhbWUgbm9kZVxyXG4gICAgICAgICAgICBpZiAoZHJhZ1BhdGggPT09IGRyb3BQYXRoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vcGFyZW50IGRyb3BwZWQgb24gYW4gZGVzY2VuZGFudFxyXG4gICAgICAgICAgICBpZiAoZHJvcFBhdGguaW5kZXhPZihkcmFnUGF0aCkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkYXRlRHJvcE5vZGUoZHJhZ1BhdGgsIGRyb3BQYXRoKSB7XHJcbiAgICAgICAgbGV0IHZhbGlkYXRlRHJvcCA9IHRoaXMudmFsaWRhdGVEcm9wKGRyYWdQYXRoLCBkcm9wUGF0aCk7XHJcbiAgICAgICAgaWYgKHZhbGlkYXRlRHJvcCkge1xyXG4gICAgICAgICAgICAvL2NoaWxkIGRyb3BwZWQgb24gcGFyZW50XHJcbiAgICAgICAgICAgIGlmIChkcmFnUGF0aC5pbmRleE9mKCctJykgPiAwICYmIGRyYWdQYXRoLnN1YnN0cmluZygwLCBkcmFnUGF0aC5sYXN0SW5kZXhPZignLScpKSA9PT0gZHJvcFBhdGgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkYXRlRHJvcFBvaW50KGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IHZhbGlkYXRlRHJvcCA9IHRoaXMudmFsaWRhdGVEcm9wKHRoaXMuZHJhZ1N0YXRlLnBhdGgsIGV2ZW50LnBhdGgpO1xyXG4gICAgICAgIGlmICh2YWxpZGF0ZURyb3ApIHtcclxuICAgICAgICAgICAgLy9jaGlsZCBkcm9wcGVkIHRvIG5leHQgc2libGluZydzIGRyb3AgcG9pbnRcclxuICAgICAgICAgICAgaWYgKGV2ZW50LnBvc2l0aW9uID09PSAtMSAmJiB0aGlzLmFyZVNpYmxpbmdzKHRoaXMuZHJhZ1N0YXRlLnBhdGgsIGV2ZW50LnBhdGgpICYmICh0aGlzLmRyYWdTdGF0ZS5pbmRleCArMSA9PT0gZXZlbnQuaW5kZXgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhcmVTaWJsaW5ncyhwYXRoMSwgcGF0aDIpIHtcclxuICAgICAgICBpZiAocGF0aDEubGVuZ3RoID09PSAxICYmIHBhdGgyLmxlbmd0aCA9PT0gMSlcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gcGF0aDEuc3Vic3RyaW5nKDAsIHBhdGgxLmxhc3RJbmRleE9mKCctJykpID09PSBwYXRoMi5zdWJzdHJpbmcoMCwgcGF0aDIubGFzdEluZGV4T2YoJy0nKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmluZE5vZGUodmFsdWUsIHBhdGgpIHtcclxuICAgICAgICBpZiAocGF0aC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KHBhdGhbMF0sIDEwKTtcclxuICAgICAgICAgICAgY29uc3QgbmV4dFNlYXJjaFJvb3QgPSB2YWx1ZS5jaGlsZHJlbiA/IHZhbHVlLmNoaWxkcmVuW2luZGV4XSA6IHZhbHVlW2luZGV4XTtcclxuXHJcbiAgICAgICAgICAgIGlmIChwYXRoLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5leHRTZWFyY2hSb290O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGF0aC5zaGlmdCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmluZE5vZGUobmV4dFNlYXJjaFJvb3QsIHBhdGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlzTm9kZUxlYWYobm9kZSkge1xyXG4gICAgICAgIHJldHVybiBub2RlLmxlYWYgPT09IGZhbHNlID8gZmFsc2UgOiAhKG5vZGUuY2hpbGRyZW4gJiYgbm9kZS5jaGlsZHJlbi5sZW5ndGgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRmlsdGVySW5wdXRLZXlEb3duKGV2ZW50KSB7XHJcbiAgICAgICAgLy9lbnRlclxyXG4gICAgICAgIGlmIChldmVudC53aGljaCA9PT0gMTMpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25GaWx0ZXJJbnB1dENoYW5nZShldmVudCkge1xyXG4gICAgICAgIHRoaXMuZmlsdGVyQ2hhbmdlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZmlsdGVyOiBldmVudC50YXJnZXQudmFsdWV9KTtcclxuICAgIH1cclxuXHJcbiAgICBmaWx0ZXIoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmZpbHRlckNoYW5nZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZmlsdGVyID09PSAnJykge1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlcmVkTm9kZXMgPSB0aGlzLnByb3BzLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJlZE5vZGVzID0gW107XHJcbiAgICAgICAgICAgIGNvbnN0IHNlYXJjaEZpZWxkcyA9IHRoaXMucHJvcHMuZmlsdGVyQnkuc3BsaXQoJywnKTtcclxuICAgICAgICAgICAgY29uc3QgZmlsdGVyVGV4dCA9IHRoaXMuc3RhdGUuZmlsdGVyLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzU3RyaWN0TW9kZSA9IHRoaXMucHJvcHMuZmlsdGVyTW9kZSA9PT0gJ3N0cmljdCc7XHJcbiAgICAgICAgICAgIGZvcihsZXQgbm9kZSBvZiB0aGlzLnByb3BzLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29weU5vZGUgPSB7Li4ubm9kZX07XHJcbiAgICAgICAgICAgICAgICBsZXQgcGFyYW1zV2l0aG91dE5vZGUgPSB7c2VhcmNoRmllbGRzLCBmaWx0ZXJUZXh0LCBpc1N0cmljdE1vZGV9O1xyXG4gICAgICAgICAgICAgICAgaWYgKChpc1N0cmljdE1vZGUgJiYgKHRoaXMuZmluZEZpbHRlcmVkTm9kZXMoY29weU5vZGUsIHBhcmFtc1dpdGhvdXROb2RlKSB8fCB0aGlzLmlzRmlsdGVyTWF0Y2hlZChjb3B5Tm9kZSwgcGFyYW1zV2l0aG91dE5vZGUpKSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAoIWlzU3RyaWN0TW9kZSAmJiAodGhpcy5pc0ZpbHRlck1hdGNoZWQoY29weU5vZGUsIHBhcmFtc1dpdGhvdXROb2RlKSB8fCB0aGlzLmZpbmRGaWx0ZXJlZE5vZGVzKGNvcHlOb2RlLCBwYXJhbXNXaXRob3V0Tm9kZSkpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyZWROb2Rlcy5wdXNoKGNvcHlOb2RlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmZpbHRlckNoYW5nZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBmaW5kRmlsdGVyZWROb2Rlcyhub2RlLCBwYXJhbXNXaXRob3V0Tm9kZSkge1xyXG4gICAgICAgIGlmIChub2RlKSB7XHJcbiAgICAgICAgICAgIGxldCBtYXRjaGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChub2RlLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hpbGROb2RlcyA9IFsuLi5ub2RlLmNoaWxkcmVuXTtcclxuICAgICAgICAgICAgICAgIG5vZGUuY2hpbGRyZW4gPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGNoaWxkTm9kZSBvZiBjaGlsZE5vZGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvcHlDaGlsZE5vZGUgPSB7Li4uY2hpbGROb2RlfTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0ZpbHRlck1hdGNoZWQoY29weUNoaWxkTm9kZSwgcGFyYW1zV2l0aG91dE5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmNoaWxkcmVuLnB1c2goY29weUNoaWxkTm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAobWF0Y2hlZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaXNGaWx0ZXJNYXRjaGVkKG5vZGUsIHtzZWFyY2hGaWVsZHMsIGZpbHRlclRleHQsIGlzU3RyaWN0TW9kZX0pIHtcclxuICAgICAgICBsZXQgbWF0Y2hlZCA9IGZhbHNlO1xyXG4gICAgICAgIGZvcihsZXQgZmllbGQgb2Ygc2VhcmNoRmllbGRzKSB7XHJcbiAgICAgICAgICAgIGxldCBmaWVsZFZhbHVlID0gU3RyaW5nKE9iamVjdFV0aWxzLnJlc29sdmVGaWVsZERhdGEobm9kZSwgZmllbGQpKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICBpZihmaWVsZFZhbHVlLmluZGV4T2YoZmlsdGVyVGV4dCkgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgbWF0Y2hlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghbWF0Y2hlZCB8fCAoaXNTdHJpY3RNb2RlICYmICF0aGlzLmlzTm9kZUxlYWYobm9kZSkpKSB7XHJcbiAgICAgICAgICAgIG1hdGNoZWQgPSB0aGlzLmZpbmRGaWx0ZXJlZE5vZGVzKG5vZGUsIHtzZWFyY2hGaWVsZHMsIGZpbHRlclRleHQsIGlzU3RyaWN0TW9kZX0pIHx8IG1hdGNoZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbWF0Y2hlZDtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJSb290Q2hpbGQobm9kZSwgaW5kZXgsIGxhc3QpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8VUlUcmVlTm9kZSBrZXk9e25vZGUua2V5fHxub2RlLmxhYmVsfSBub2RlPXtub2RlfSBpbmRleD17aW5kZXh9IGxhc3Q9e2xhc3R9IHBhdGg9e1N0cmluZyhpbmRleCl9IGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfSBzZWxlY3Rpb25Nb2RlPXt0aGlzLnByb3BzLnNlbGVjdGlvbk1vZGV9IFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbktleXM9e3RoaXMucHJvcHMuc2VsZWN0aW9uS2V5c30gb25TZWxlY3Rpb25DaGFuZ2U9e3RoaXMucHJvcHMub25TZWxlY3Rpb25DaGFuZ2V9IG1ldGFLZXlTZWxlY3Rpb249e3RoaXMucHJvcHMubWV0YUtleVNlbGVjdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0TWVudVNlbGVjdGlvbktleT17dGhpcy5wcm9wcy5jb250ZXh0TWVudVNlbGVjdGlvbktleX0gb25Db250ZXh0TWVudVNlbGVjdGlvbkNoYW5nZT17dGhpcy5wcm9wcy5vbkNvbnRleHRNZW51U2VsZWN0aW9uQ2hhbmdlfSBvbkNvbnRleHRNZW51PXt0aGlzLnByb3BzLm9uQ29udGV4dE1lbnV9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGFnYXRlU2VsZWN0aW9uRG93bj17dGhpcy5wcm9wcy5wcm9wYWdhdGVTZWxlY3Rpb25Eb3dufSBwcm9wYWdhdGVTZWxlY3Rpb25VcD17dGhpcy5wcm9wcy5wcm9wYWdhdGVTZWxlY3Rpb25VcH1cclxuICAgICAgICAgICAgICAgICAgICBvbkV4cGFuZD17dGhpcy5wcm9wcy5vbkV4cGFuZH0gb25Db2xsYXBzZT17dGhpcy5wcm9wcy5vbkNvbGxhcHNlfSBvblNlbGVjdD17dGhpcy5wcm9wcy5vblNlbGVjdH0gb25VbnNlbGVjdD17dGhpcy5wcm9wcy5vblVuc2VsZWN0fVxyXG4gICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkS2V5cz17dGhpcy5nZXRFeHBhbmRlZEtleXMoKX0gb25Ub2dnbGU9e3RoaXMub25Ub2dnbGV9IG5vZGVUZW1wbGF0ZT17dGhpcy5wcm9wcy5ub2RlVGVtcGxhdGV9IGlzTm9kZUxlYWY9e3RoaXMuaXNOb2RlTGVhZn1cclxuICAgICAgICAgICAgICAgICAgICBkcmFnZHJvcFNjb3BlPXt0aGlzLnByb3BzLmRyYWdkcm9wU2NvcGV9IG9uRHJhZ1N0YXJ0PXt0aGlzLm9uRHJhZ1N0YXJ0fSBvbkRyYWdFbmQ9e3RoaXMub25EcmFnRW5kfSBvbkRyb3A9e3RoaXMub25Ecm9wfSBvbkRyb3BQb2ludD17dGhpcy5vbkRyb3BQb2ludH0gIC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJSb290Q2hpbGRyZW4oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZmlsdGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0Um9vdE5vZGUoKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICB2YWx1ZS5tYXAoKG5vZGUsIGluZGV4KSA9PiB0aGlzLnJlbmRlclJvb3RDaGlsZChub2RlLCBpbmRleCwgKGluZGV4ID09PSB2YWx1ZS5sZW5ndGggLSAxKSkpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJNb2RlbCgpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy52YWx1ZSkge1xyXG4gICAgICAgICAgICBjb25zdCByb290Tm9kZXMgPSB0aGlzLnJlbmRlclJvb3RDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICBsZXQgY29udGVudENsYXNzID0gY2xhc3NOYW1lcygncC10cmVlLWNvbnRhaW5lcicsIHRoaXMucHJvcHMuY29udGVudENsYXNzTmFtZSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17Y29udGVudENsYXNzfSByb2xlPVwidHJlZVwiIGFyaWEtbGFiZWw9e3RoaXMucHJvcHMuYXJpYUxhYmVsfSBhcmlhLWxhYmVsbGVkYnk9e3RoaXMucHJvcHMuYXJpYUxhYmVsbGVkQnl9IHN0eWxlPXt0aGlzLnByb3BzLmNvbnRlbnRTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3Jvb3ROb2Rlc31cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlbmRlckxvYWRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5sb2FkaW5nKSB7XHJcbiAgICAgICAgICAgIGxldCBpY29uID0gY2xhc3NOYW1lcygncC10cmVlLWxvYWRpbmctaWNvbiBwaS1zcGluJywgdGhpcy5wcm9wcy5sb2FkaW5nSWNvbik7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC10cmVlLWxvYWRpbmctbWFzayBwLWNvbXBvbmVudC1vdmVybGF5XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLXRyZWUtbG9hZGluZy1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17aWNvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyRmlsdGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmZpbHRlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJwLXRyZWUtZmlsdGVyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBhdXRvQ29tcGxldGU9XCJvZmZcIiBjbGFzc05hbWU9XCJwLXRyZWUtZmlsdGVyIHAtaW5wdXR0ZXh0IHAtY29tcG9uZW50XCIgcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMuZmlsdGVyUGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbktleURvd249e3RoaXMub25GaWx0ZXJJbnB1dEtleURvd259IG9uQ2hhbmdlPXt0aGlzLm9uRmlsdGVySW5wdXRDaGFuZ2V9IGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInAtdHJlZS1maWx0ZXItaWNvbiBwaSBwaS1zZWFyY2hcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICA8L2Rpdj47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoJ3AtdHJlZSBwLWNvbXBvbmVudCcsIHRoaXMucHJvcHMuY2xhc3NOYW1lLCB7XHJcbiAgICAgICAgICAgICdwLXRyZWUtc2VsZWN0YWJsZSc6IHRoaXMucHJvcHMuc2VsZWN0aW9uTW9kZSwgXHJcbiAgICAgICAgICAgICdwLXRyZWUtbG9hZGluZyc6IHRoaXMucHJvcHMubG9hZGluZyxcclxuICAgICAgICAgICAgJ3AtZGlzYWJsZWQnOiB0aGlzLnByb3BzLmRpc2FibGVkXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgbG9hZGVyID0gdGhpcy5yZW5kZXJMb2FkZXIoKTtcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5yZW5kZXJNb2RlbCgpO1xyXG4gICAgICAgIGNvbnN0IGZpbHRlciA9IHRoaXMucmVuZGVyRmlsdGVyKCk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9e3RoaXMucHJvcHMuaWR9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XHJcbiAgICAgICAgICAgICAgICB7bG9hZGVyfVxyXG4gICAgICAgICAgICAgICAge2ZpbHRlcn1cclxuICAgICAgICAgICAgICAgIHtjb250ZW50fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblRyZWVEYXNoVWlDb21wb25lbnRzLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGlkOiBudWxsLFxyXG4gICAgdmFsdWU6IG51bGwsXHJcbiAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICBzZWxlY3Rpb25Nb2RlOiBudWxsLFxyXG4gICAgc2VsZWN0aW9uS2V5czogbnVsbCxcclxuICAgIG9uU2VsZWN0aW9uQ2hhbmdlOiBudWxsLFxyXG4gICAgY29udGV4dE1lbnVTZWxlY3Rpb25LZXk6IG51bGwsXHJcbiAgICBvbkNvbnRleHRNZW51U2VsZWN0aW9uQ2hhbmdlOiBudWxsLFxyXG4gICAgZXhwYW5kZWRLZXlzOiBudWxsLFxyXG4gICAgc3R5bGU6IG51bGwsXHJcbiAgICBjbGFzc05hbWU6IG51bGwsXHJcbiAgICBjb250ZW50U3R5bGU6IG51bGwsXHJcbiAgICBjb250ZW50Q2xhc3NOYW1lOiBudWxsLFxyXG4gICAgbWV0YUtleVNlbGVjdGlvbjogdHJ1ZSxcclxuICAgIHByb3BhZ2F0ZVNlbGVjdGlvblVwOiB0cnVlLFxyXG4gICAgcHJvcGFnYXRlU2VsZWN0aW9uRG93bjogdHJ1ZSxcclxuICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgbG9hZGluZ0ljb246ICdwaSBwaS1zcGlubmVyJyxcclxuICAgIGRyYWdkcm9wU2NvcGU6IG51bGwsXHJcbiAgICBmaWx0ZXI6IGZhbHNlLFxyXG4gICAgZmlsdGVyQnk6ICdsYWJlbCcsXHJcbiAgICBmaWx0ZXJNb2RlOiAnbGVuaWVudCcsXHJcbiAgICBmaWx0ZXJQbGFjZWhvbGRlcjogbnVsbCxcclxuICAgIG5vZGVUZW1wbGF0ZTogbnVsbCxcclxuICAgIG9uU2VsZWN0OiBudWxsLFxyXG4gICAgb25VbnNlbGVjdDogbnVsbCxcclxuICAgIG9uRXhwYW5kOiBudWxsLFxyXG4gICAgb25Db2xsYXBzZTogbnVsbCxcclxuICAgIG9uVG9nZ2xlOiBudWxsLFxyXG4gICAgb25EcmFnRHJvcDogbnVsbCxcclxuICAgIG9uQ29udGV4dE1lbnU6IG51bGxcclxufVxyXG5cclxuVHJlZURhc2hVaUNvbXBvbmVudHMucHJvcFR5cGVzID0ge1xyXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB2YWx1ZTogUHJvcFR5cGVzLmFueSxcclxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHNlbGVjdGlvbk1vZGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBzZWxlY3Rpb25LZXlzOiBQcm9wVHlwZXMuYW55LFxyXG4gICAgb25TZWxlY3Rpb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgY29udGV4dE1lbnVTZWxlY3Rpb25LZXk6IFByb3BUeXBlcy5hbnksXHJcbiAgICBvbkNvbnRleHRNZW51U2VsZWN0aW9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIGV4cGFuZGVkS2V5czogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgY29udGVudFN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgY29udGVudENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG1ldGFLZXlTZWxlY3Rpb246IFByb3BUeXBlcy5ib29sLFxyXG4gICAgcHJvcGFnYXRlU2VsZWN0aW9uVXA6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgcHJvcGFnYXRlU2VsZWN0aW9uRG93bjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGxvYWRpbmdJY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgZHJhZ2Ryb3BTY29wZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGZpbHRlcjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBmaWx0ZXJCeTogUHJvcFR5cGVzLmFueSxcclxuICAgIGZpbHRlck1vZGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBmaWx0ZXJQbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG5vZGVUZW1wbGF0ZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBvblVuc2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIG9uRXhwYW5kOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIG9uQ29sbGFwc2U6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgb25Ub2dnbGU6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgb25EcmFnRHJvcDogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBvbkNvbnRleHRNZW51OiBQcm9wVHlwZXMuZnVuY1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==