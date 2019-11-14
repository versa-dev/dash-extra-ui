webpackHotUpdateextra_dash_ui_components("main",{

/***/ "./src/lib/components/TreeDashUiComponents.react.js":
/*!**********************************************************!*\
  !*** ./src/lib/components/TreeDashUiComponents.react.js ***!
  \**********************************************************/
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
/* harmony import */ var _utils_ObjectUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/ObjectUtils */ "./src/lib/components/utils/ObjectUtils.js");
/* harmony import */ var _tree_UITreeNode_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tree/UITreeNode.react */ "./src/lib/components/tree/UITreeNode.react.js");
/* harmony import */ var _tree_Tree_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tree/Tree.css */ "./src/lib/components/tree/Tree.css");
/* harmony import */ var _tree_Tree_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_tree_Tree_css__WEBPACK_IMPORTED_MODULE_5__);
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

  function TreeDashUiComponents(props) {
    var _this;

    _classCallCheck(this, TreeDashUiComponents);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TreeDashUiComponents).call(this, props));

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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tree_UITreeNode_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvVHJlZURhc2hVaUNvbXBvbmVudHMucmVhY3QuanMiXSwibmFtZXMiOlsiVHJlZURhc2hVaUNvbXBvbmVudHMiLCJwcm9wcyIsImluaXQiLCJvblRvZ2dsZSIsInN0YXRlIiwiZXhwYW5kZWRLZXlzIiwiZmlsdGVyIiwiaXNOb2RlTGVhZiIsImJpbmQiLCJvbkRyYWdTdGFydCIsIm9uRHJhZ0VuZCIsIm9uRHJvcCIsIm9uRHJvcFBvaW50Iiwib25GaWx0ZXJJbnB1dENoYW5nZSIsIm9uRmlsdGVySW5wdXRLZXlEb3duIiwiY29uc29sZSIsImxvZyIsImZpbHRlcmVkTm9kZXMiLCJ2YWx1ZSIsImV2ZW50Iiwic2V0U3RhdGUiLCJkcmFnU3RhdGUiLCJwYXRoIiwiaW5kZXgiLCJ2YWxpZGF0ZURyb3BOb2RlIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiZHJhZ1BhdGhzIiwic3BsaXQiLCJwb3AiLCJkcmFnTm9kZVBhcmVudCIsImZpbmROb2RlIiwiZHJhZ05vZGUiLCJjaGlsZHJlbiIsImRyb3BOb2RlIiwicHVzaCIsInNwbGljZSIsIm9uRHJhZ0Ryb3AiLCJvcmlnaW5hbEV2ZW50IiwidmFsaWRhdGVEcm9wUG9pbnQiLCJkcm9wUGF0aHMiLCJkcm9wTm9kZVBhcmVudCIsInNpYmxpbmdzIiwiYXJlU2libGluZ3MiLCJwb3NpdGlvbiIsImRyb3BJbmRleCIsImRyYWdQYXRoIiwiZHJvcFBhdGgiLCJpbmRleE9mIiwidmFsaWRhdGVEcm9wIiwic3Vic3RyaW5nIiwibGFzdEluZGV4T2YiLCJwYXRoMSIsInBhdGgyIiwibGVuZ3RoIiwicGFyc2VJbnQiLCJuZXh0U2VhcmNoUm9vdCIsInNoaWZ0Iiwibm9kZSIsImxlYWYiLCJ3aGljaCIsInByZXZlbnREZWZhdWx0IiwiZmlsdGVyQ2hhbmdlZCIsInRhcmdldCIsInNlYXJjaEZpZWxkcyIsImZpbHRlckJ5IiwiZmlsdGVyVGV4dCIsInRvTG93ZXJDYXNlIiwiaXNTdHJpY3RNb2RlIiwiZmlsdGVyTW9kZSIsImNvcHlOb2RlIiwicGFyYW1zV2l0aG91dE5vZGUiLCJmaW5kRmlsdGVyZWROb2RlcyIsImlzRmlsdGVyTWF0Y2hlZCIsIm1hdGNoZWQiLCJjaGlsZE5vZGVzIiwiY2hpbGROb2RlIiwiY29weUNoaWxkTm9kZSIsImZpZWxkIiwiZmllbGRWYWx1ZSIsIlN0cmluZyIsIk9iamVjdFV0aWxzIiwicmVzb2x2ZUZpZWxkRGF0YSIsImxhc3QiLCJrZXkiLCJsYWJlbCIsImRpc2FibGVkIiwic2VsZWN0aW9uTW9kZSIsInNlbGVjdGlvbktleXMiLCJvblNlbGVjdGlvbkNoYW5nZSIsIm1ldGFLZXlTZWxlY3Rpb24iLCJjb250ZXh0TWVudVNlbGVjdGlvbktleSIsIm9uQ29udGV4dE1lbnVTZWxlY3Rpb25DaGFuZ2UiLCJvbkNvbnRleHRNZW51IiwicHJvcGFnYXRlU2VsZWN0aW9uRG93biIsInByb3BhZ2F0ZVNlbGVjdGlvblVwIiwib25FeHBhbmQiLCJvbkNvbGxhcHNlIiwib25TZWxlY3QiLCJvblVuc2VsZWN0IiwiZ2V0RXhwYW5kZWRLZXlzIiwibm9kZVRlbXBsYXRlIiwiZHJhZ2Ryb3BTY29wZSIsImdldFJvb3ROb2RlIiwibWFwIiwicmVuZGVyUm9vdENoaWxkIiwicm9vdE5vZGVzIiwicmVuZGVyUm9vdENoaWxkcmVuIiwiY29udGVudENsYXNzIiwiY2xhc3NOYW1lcyIsImNvbnRlbnRDbGFzc05hbWUiLCJhcmlhTGFiZWwiLCJhcmlhTGFiZWxsZWRCeSIsImNvbnRlbnRTdHlsZSIsImxvYWRpbmciLCJpY29uIiwibG9hZGluZ0ljb24iLCJmaWx0ZXJQbGFjZWhvbGRlciIsImNsYXNzTmFtZSIsImxvYWRlciIsInJlbmRlckxvYWRlciIsImNvbnRlbnQiLCJyZW5kZXJNb2RlbCIsInJlbmRlckZpbHRlciIsImlkIiwic3R5bGUiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMi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LGlEQUFTLENBQUNJLElBOUJPO0FBK0I3QnhDLGVBQWEsRUFBRW9DLGlEQUFTLENBQUNJO0FBL0JJLENBQWpDLEMiLCJmaWxlIjoiMGU0ZmZhNC1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IE9iamVjdFV0aWxzIGZyb20gJy4vdXRpbHMvT2JqZWN0VXRpbHMnO1xyXG5pbXBvcnQgVUlUcmVlTm9kZSBmcm9tICcuL3RyZWUvVUlUcmVlTm9kZS5yZWFjdCc7XHJcblxyXG5pbXBvcnQgJy4vdHJlZS9UcmVlLmNzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmVlRGFzaFVpQ29tcG9uZW50cyBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5pbml0KClcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCl7XHJcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLm9uVG9nZ2xlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgICBleHBhbmRlZEtleXM6IHRoaXMucHJvcHMuZXhwYW5kZWRLZXlzLFxyXG4gICAgICAgICAgICAgICAgZmlsdGVyOiAnJ1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmlzTm9kZUxlYWYgPSB0aGlzLmlzTm9kZUxlYWYuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uVG9nZ2xlID0gdGhpcy5vblRvZ2dsZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25EcmFnU3RhcnQgPSB0aGlzLm9uRHJhZ1N0YXJ0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vbkRyYWdFbmQgPSB0aGlzLm9uRHJhZ0VuZC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25Ecm9wID0gdGhpcy5vbkRyb3AuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uRHJvcFBvaW50ID0gdGhpcy5vbkRyb3BQb2ludC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25GaWx0ZXJJbnB1dENoYW5nZSA9IHRoaXMub25GaWx0ZXJJbnB1dENoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25GaWx0ZXJJbnB1dEtleURvd24gPSB0aGlzLm9uRmlsdGVySW5wdXRLZXlEb3duLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcImRpZG1vdW50XCIpXHJcbiAgICAvLyAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgZ2V0RXhwYW5kZWRLZXlzKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMub25Ub2dnbGUpXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMub25Ub2dnbGUgPyB0aGlzLnByb3BzLmV4cGFuZGVkS2V5cyA6IHRoaXMuc3RhdGUuZXhwYW5kZWRLZXlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJvb3ROb2RlKCkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5wcm9wcy5maWx0ZXIgJiYgdGhpcy5maWx0ZXJlZE5vZGVzKSA/IHRoaXMuZmlsdGVyZWROb2RlcyA6IHRoaXMucHJvcHMudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgb25Ub2dnbGUoZXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vblRvZ2dsZSkge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uVG9nZ2xlKGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgZXhwYW5kZWRLZXlzOiBldmVudC52YWx1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25EcmFnU3RhcnQoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmRyYWdTdGF0ZSA9IHtcclxuICAgICAgICAgICAgcGF0aDogZXZlbnQucGF0aCxcclxuICAgICAgICAgICAgaW5kZXg6IGV2ZW50LmluZGV4XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRHJhZ0VuZCgpIHtcclxuICAgICAgICB0aGlzLmRyYWdTdGF0ZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgb25Ecm9wKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdGVEcm9wTm9kZSh0aGlzLmRyYWdTdGF0ZS5wYXRoLCBldmVudC5wYXRoKSkge1xyXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMudmFsdWUpKTtcclxuICAgICAgICAgICAgbGV0IGRyYWdQYXRocyA9IHRoaXMuZHJhZ1N0YXRlLnBhdGguc3BsaXQoJy0nKTtcclxuICAgICAgICAgICAgZHJhZ1BhdGhzLnBvcCgpO1xyXG4gICAgICAgICAgICBsZXQgZHJhZ05vZGVQYXJlbnQgPSB0aGlzLmZpbmROb2RlKHZhbHVlLCBkcmFnUGF0aHMpO1xyXG4gICAgICAgICAgICBsZXQgZHJhZ05vZGUgPSBkcmFnTm9kZVBhcmVudCA/IGRyYWdOb2RlUGFyZW50LmNoaWxkcmVuW3RoaXMuZHJhZ1N0YXRlLmluZGV4XSA6IHZhbHVlW3RoaXMuZHJhZ1N0YXRlLmluZGV4XTtcclxuICAgICAgICAgICAgbGV0IGRyb3BOb2RlID0gdGhpcy5maW5kTm9kZSh2YWx1ZSwgZXZlbnQucGF0aC5zcGxpdCgnLScpKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChkcm9wTm9kZS5jaGlsZHJlbilcclxuICAgICAgICAgICAgICAgIGRyb3BOb2RlLmNoaWxkcmVuLnB1c2goZHJhZ05vZGUpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBkcm9wTm9kZS5jaGlsZHJlbiA9IFtkcmFnTm9kZV07XHJcblxyXG4gICAgICAgICAgICBpZiAoZHJhZ05vZGVQYXJlbnQpXHJcbiAgICAgICAgICAgICAgICBkcmFnTm9kZVBhcmVudC5jaGlsZHJlbi5zcGxpY2UodGhpcy5kcmFnU3RhdGUuaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB2YWx1ZS5zcGxpY2UodGhpcy5kcmFnU3RhdGUuaW5kZXgsIDEpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub25EcmFnRHJvcCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkRyYWdEcm9wKHtcclxuICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudC5vcmlnaW5hbEV2ZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Ecm9wUG9pbnQoZXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy52YWxpZGF0ZURyb3BQb2ludChldmVudCkpIHtcclxuICAgICAgICAgICAgbGV0IHZhbHVlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLnZhbHVlKSk7XHJcbiAgICAgICAgICAgIGxldCBkcmFnUGF0aHMgPSB0aGlzLmRyYWdTdGF0ZS5wYXRoLnNwbGl0KCctJyk7XHJcbiAgICAgICAgICAgIGRyYWdQYXRocy5wb3AoKTtcclxuICAgICAgICAgICAgbGV0IGRyb3BQYXRocyA9IGV2ZW50LnBhdGguc3BsaXQoJy0nKTtcclxuICAgICAgICAgICAgZHJvcFBhdGhzLnBvcCgpO1xyXG4gICAgICAgICAgICBsZXQgZHJhZ05vZGVQYXJlbnQgPSB0aGlzLmZpbmROb2RlKHZhbHVlLCBkcmFnUGF0aHMpO1xyXG4gICAgICAgICAgICBsZXQgZHJvcE5vZGVQYXJlbnQgPSB0aGlzLmZpbmROb2RlKHZhbHVlLCBkcm9wUGF0aHMpO1xyXG4gICAgICAgICAgICBsZXQgZHJhZ05vZGUgPSBkcmFnTm9kZVBhcmVudCA/IGRyYWdOb2RlUGFyZW50LmNoaWxkcmVuW3RoaXMuZHJhZ1N0YXRlLmluZGV4XSA6IHZhbHVlW3RoaXMuZHJhZ1N0YXRlLmluZGV4XTtcclxuICAgICAgICAgICAgbGV0IHNpYmxpbmdzID0gdGhpcy5hcmVTaWJsaW5ncyh0aGlzLmRyYWdTdGF0ZS5wYXRoLCBldmVudC5wYXRoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkcmFnTm9kZVBhcmVudClcclxuICAgICAgICAgICAgICAgIGRyYWdOb2RlUGFyZW50LmNoaWxkcmVuLnNwbGljZSh0aGlzLmRyYWdTdGF0ZS5pbmRleCwgMSk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHZhbHVlLnNwbGljZSh0aGlzLmRyYWdTdGF0ZS5pbmRleCwgMSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZXZlbnQucG9zaXRpb24gPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZHJvcEluZGV4ID0gKHNpYmxpbmdzKSA/ICh0aGlzLmRyYWdTdGF0ZS5pbmRleCA+IGV2ZW50LmluZGV4KSA/IGV2ZW50LmluZGV4IDogZXZlbnQuaW5kZXggLSAxIDogZXZlbnQuaW5kZXg7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRyb3BOb2RlUGFyZW50KVxyXG4gICAgICAgICAgICAgICAgICAgIGRyb3BOb2RlUGFyZW50LmNoaWxkcmVuLnNwbGljZShkcm9wSW5kZXgsIDAsIGRyYWdOb2RlKTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5zcGxpY2UoZHJvcEluZGV4LCAwLCBkcmFnTm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZHJvcE5vZGVQYXJlbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgZHJvcE5vZGVQYXJlbnQuY2hpbGRyZW4ucHVzaChkcmFnTm9kZSk7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUucHVzaChkcmFnTm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9uRHJhZ0Ryb3ApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25EcmFnRHJvcCh7XHJcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQub3JpZ2luYWxFdmVudCxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkYXRlRHJvcChkcmFnUGF0aCwgZHJvcFBhdGgpIHtcclxuICAgICAgICBpZiAoIWRyYWdQYXRoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7ICAgXHJcbiAgICAgICAgICAgIC8vc2FtZSBub2RlXHJcbiAgICAgICAgICAgIGlmIChkcmFnUGF0aCA9PT0gZHJvcFBhdGgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9wYXJlbnQgZHJvcHBlZCBvbiBhbiBkZXNjZW5kYW50XHJcbiAgICAgICAgICAgIGlmIChkcm9wUGF0aC5pbmRleE9mKGRyYWdQYXRoKSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhdGVEcm9wTm9kZShkcmFnUGF0aCwgZHJvcFBhdGgpIHtcclxuICAgICAgICBsZXQgdmFsaWRhdGVEcm9wID0gdGhpcy52YWxpZGF0ZURyb3AoZHJhZ1BhdGgsIGRyb3BQYXRoKTtcclxuICAgICAgICBpZiAodmFsaWRhdGVEcm9wKSB7XHJcbiAgICAgICAgICAgIC8vY2hpbGQgZHJvcHBlZCBvbiBwYXJlbnRcclxuICAgICAgICAgICAgaWYgKGRyYWdQYXRoLmluZGV4T2YoJy0nKSA+IDAgJiYgZHJhZ1BhdGguc3Vic3RyaW5nKDAsIGRyYWdQYXRoLmxhc3RJbmRleE9mKCctJykpID09PSBkcm9wUGF0aCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhdGVEcm9wUG9pbnQoZXZlbnQpIHtcclxuICAgICAgICBsZXQgdmFsaWRhdGVEcm9wID0gdGhpcy52YWxpZGF0ZURyb3AodGhpcy5kcmFnU3RhdGUucGF0aCwgZXZlbnQucGF0aCk7XHJcbiAgICAgICAgaWYgKHZhbGlkYXRlRHJvcCkge1xyXG4gICAgICAgICAgICAvL2NoaWxkIGRyb3BwZWQgdG8gbmV4dCBzaWJsaW5nJ3MgZHJvcCBwb2ludFxyXG4gICAgICAgICAgICBpZiAoZXZlbnQucG9zaXRpb24gPT09IC0xICYmIHRoaXMuYXJlU2libGluZ3ModGhpcy5kcmFnU3RhdGUucGF0aCwgZXZlbnQucGF0aCkgJiYgKHRoaXMuZHJhZ1N0YXRlLmluZGV4ICsxID09PSBldmVudC5pbmRleCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFyZVNpYmxpbmdzKHBhdGgxLCBwYXRoMikge1xyXG4gICAgICAgIGlmIChwYXRoMS5sZW5ndGggPT09IDEgJiYgcGF0aDIubGVuZ3RoID09PSAxKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBwYXRoMS5zdWJzdHJpbmcoMCwgcGF0aDEubGFzdEluZGV4T2YoJy0nKSkgPT09IHBhdGgyLnN1YnN0cmluZygwLCBwYXRoMi5sYXN0SW5kZXhPZignLScpKTtcclxuICAgIH1cclxuXHJcbiAgICBmaW5kTm9kZSh2YWx1ZSwgcGF0aCkge1xyXG4gICAgICAgIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQocGF0aFswXSwgMTApO1xyXG4gICAgICAgICAgICBjb25zdCBuZXh0U2VhcmNoUm9vdCA9IHZhbHVlLmNoaWxkcmVuID8gdmFsdWUuY2hpbGRyZW5baW5kZXhdIDogdmFsdWVbaW5kZXhdO1xyXG5cclxuICAgICAgICAgICAgaWYgKHBhdGgubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV4dFNlYXJjaFJvb3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwYXRoLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5maW5kTm9kZShuZXh0U2VhcmNoUm9vdCwgcGF0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaXNOb2RlTGVhZihub2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIG5vZGUubGVhZiA9PT0gZmFsc2UgPyBmYWxzZSA6ICEobm9kZS5jaGlsZHJlbiAmJiBub2RlLmNoaWxkcmVuLmxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25GaWx0ZXJJbnB1dEtleURvd24oZXZlbnQpIHtcclxuICAgICAgICAvL2VudGVyXHJcbiAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSAxMykge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkZpbHRlcklucHV0Q2hhbmdlKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJDaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtmaWx0ZXI6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlcigpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZmlsdGVyQ2hhbmdlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5maWx0ZXIgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyZWROb2RlcyA9IHRoaXMucHJvcHMudmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlcmVkTm9kZXMgPSBbXTtcclxuICAgICAgICAgICAgY29uc3Qgc2VhcmNoRmllbGRzID0gdGhpcy5wcm9wcy5maWx0ZXJCeS5zcGxpdCgnLCcpO1xyXG4gICAgICAgICAgICBjb25zdCBmaWx0ZXJUZXh0ID0gdGhpcy5zdGF0ZS5maWx0ZXIudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgY29uc3QgaXNTdHJpY3RNb2RlID0gdGhpcy5wcm9wcy5maWx0ZXJNb2RlID09PSAnc3RyaWN0JztcclxuICAgICAgICAgICAgZm9yKGxldCBub2RlIG9mIHRoaXMucHJvcHMudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb3B5Tm9kZSA9IHsuLi5ub2RlfTtcclxuICAgICAgICAgICAgICAgIGxldCBwYXJhbXNXaXRob3V0Tm9kZSA9IHtzZWFyY2hGaWVsZHMsIGZpbHRlclRleHQsIGlzU3RyaWN0TW9kZX07XHJcbiAgICAgICAgICAgICAgICBpZiAoKGlzU3RyaWN0TW9kZSAmJiAodGhpcy5maW5kRmlsdGVyZWROb2Rlcyhjb3B5Tm9kZSwgcGFyYW1zV2l0aG91dE5vZGUpIHx8IHRoaXMuaXNGaWx0ZXJNYXRjaGVkKGNvcHlOb2RlLCBwYXJhbXNXaXRob3V0Tm9kZSkpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICghaXNTdHJpY3RNb2RlICYmICh0aGlzLmlzRmlsdGVyTWF0Y2hlZChjb3B5Tm9kZSwgcGFyYW1zV2l0aG91dE5vZGUpIHx8IHRoaXMuZmluZEZpbHRlcmVkTm9kZXMoY29weU5vZGUsIHBhcmFtc1dpdGhvdXROb2RlKSkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJlZE5vZGVzLnB1c2goY29weU5vZGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuZmlsdGVyQ2hhbmdlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmRGaWx0ZXJlZE5vZGVzKG5vZGUsIHBhcmFtc1dpdGhvdXROb2RlKSB7XHJcbiAgICAgICAgaWYgKG5vZGUpIHtcclxuICAgICAgICAgICAgbGV0IG1hdGNoZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKG5vZGUuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgIGxldCBjaGlsZE5vZGVzID0gWy4uLm5vZGUuY2hpbGRyZW5dO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5jaGlsZHJlbiA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgY2hpbGROb2RlIG9mIGNoaWxkTm9kZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY29weUNoaWxkTm9kZSA9IHsuLi5jaGlsZE5vZGV9O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRmlsdGVyTWF0Y2hlZChjb3B5Q2hpbGROb2RlLCBwYXJhbXNXaXRob3V0Tm9kZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuY2hpbGRyZW4ucHVzaChjb3B5Q2hpbGROb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChtYXRjaGVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpc0ZpbHRlck1hdGNoZWQobm9kZSwge3NlYXJjaEZpZWxkcywgZmlsdGVyVGV4dCwgaXNTdHJpY3RNb2RlfSkge1xyXG4gICAgICAgIGxldCBtYXRjaGVkID0gZmFsc2U7XHJcbiAgICAgICAgZm9yKGxldCBmaWVsZCBvZiBzZWFyY2hGaWVsZHMpIHtcclxuICAgICAgICAgICAgbGV0IGZpZWxkVmFsdWUgPSBTdHJpbmcoT2JqZWN0VXRpbHMucmVzb2x2ZUZpZWxkRGF0YShub2RlLCBmaWVsZCkpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIGlmKGZpZWxkVmFsdWUuaW5kZXhPZihmaWx0ZXJUZXh0KSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBtYXRjaGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFtYXRjaGVkIHx8IChpc1N0cmljdE1vZGUgJiYgIXRoaXMuaXNOb2RlTGVhZihub2RlKSkpIHtcclxuICAgICAgICAgICAgbWF0Y2hlZCA9IHRoaXMuZmluZEZpbHRlcmVkTm9kZXMobm9kZSwge3NlYXJjaEZpZWxkcywgZmlsdGVyVGV4dCwgaXNTdHJpY3RNb2RlfSkgfHwgbWF0Y2hlZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBtYXRjaGVkO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclJvb3RDaGlsZChub2RlLCBpbmRleCwgbGFzdCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxVSVRyZWVOb2RlIGtleT17bm9kZS5rZXl8fG5vZGUubGFiZWx9IG5vZGU9e25vZGV9IGluZGV4PXtpbmRleH0gbGFzdD17bGFzdH0gcGF0aD17U3RyaW5nKGluZGV4KX0gZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9IHNlbGVjdGlvbk1vZGU9e3RoaXMucHJvcHMuc2VsZWN0aW9uTW9kZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uS2V5cz17dGhpcy5wcm9wcy5zZWxlY3Rpb25LZXlzfSBvblNlbGVjdGlvbkNoYW5nZT17dGhpcy5wcm9wcy5vblNlbGVjdGlvbkNoYW5nZX0gbWV0YUtleVNlbGVjdGlvbj17dGhpcy5wcm9wcy5tZXRhS2V5U2VsZWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHRNZW51U2VsZWN0aW9uS2V5PXt0aGlzLnByb3BzLmNvbnRleHRNZW51U2VsZWN0aW9uS2V5fSBvbkNvbnRleHRNZW51U2VsZWN0aW9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uQ29udGV4dE1lbnVTZWxlY3Rpb25DaGFuZ2V9IG9uQ29udGV4dE1lbnU9e3RoaXMucHJvcHMub25Db250ZXh0TWVudX1cclxuICAgICAgICAgICAgICAgICAgICBwcm9wYWdhdGVTZWxlY3Rpb25Eb3duPXt0aGlzLnByb3BzLnByb3BhZ2F0ZVNlbGVjdGlvbkRvd259IHByb3BhZ2F0ZVNlbGVjdGlvblVwPXt0aGlzLnByb3BzLnByb3BhZ2F0ZVNlbGVjdGlvblVwfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uRXhwYW5kPXt0aGlzLnByb3BzLm9uRXhwYW5kfSBvbkNvbGxhcHNlPXt0aGlzLnByb3BzLm9uQ29sbGFwc2V9IG9uU2VsZWN0PXt0aGlzLnByb3BzLm9uU2VsZWN0fSBvblVuc2VsZWN0PXt0aGlzLnByb3BzLm9uVW5zZWxlY3R9XHJcbiAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWRLZXlzPXt0aGlzLmdldEV4cGFuZGVkS2V5cygpfSBvblRvZ2dsZT17dGhpcy5vblRvZ2dsZX0gbm9kZVRlbXBsYXRlPXt0aGlzLnByb3BzLm5vZGVUZW1wbGF0ZX0gaXNOb2RlTGVhZj17dGhpcy5pc05vZGVMZWFmfVxyXG4gICAgICAgICAgICAgICAgICAgIGRyYWdkcm9wU2NvcGU9e3RoaXMucHJvcHMuZHJhZ2Ryb3BTY29wZX0gb25EcmFnU3RhcnQ9e3RoaXMub25EcmFnU3RhcnR9IG9uRHJhZ0VuZD17dGhpcy5vbkRyYWdFbmR9IG9uRHJvcD17dGhpcy5vbkRyb3B9IG9uRHJvcFBvaW50PXt0aGlzLm9uRHJvcFBvaW50fSAgLz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclJvb3RDaGlsZHJlbigpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5maWx0ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRSb290Tm9kZSgpO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHZhbHVlLm1hcCgobm9kZSwgaW5kZXgpID0+IHRoaXMucmVuZGVyUm9vdENoaWxkKG5vZGUsIGluZGV4LCAoaW5kZXggPT09IHZhbHVlLmxlbmd0aCAtIDEpKSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlck1vZGVsKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvb3ROb2RlcyA9IHRoaXMucmVuZGVyUm9vdENoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIGxldCBjb250ZW50Q2xhc3MgPSBjbGFzc05hbWVzKCdwLXRyZWUtY29udGFpbmVyJywgdGhpcy5wcm9wcy5jb250ZW50Q2xhc3NOYW1lKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtjb250ZW50Q2xhc3N9IHJvbGU9XCJ0cmVlXCIgYXJpYS1sYWJlbD17dGhpcy5wcm9wcy5hcmlhTGFiZWx9IGFyaWEtbGFiZWxsZWRieT17dGhpcy5wcm9wcy5hcmlhTGFiZWxsZWRCeX0gc3R5bGU9e3RoaXMucHJvcHMuY29udGVudFN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICB7cm9vdE5vZGVzfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVuZGVyTG9hZGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmxvYWRpbmcpIHtcclxuICAgICAgICAgICAgbGV0IGljb24gPSBjbGFzc05hbWVzKCdwLXRyZWUtbG9hZGluZy1pY29uIHBpLXNwaW4nLCB0aGlzLnByb3BzLmxvYWRpbmdJY29uKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLXRyZWUtbG9hZGluZy1tYXNrIHAtY29tcG9uZW50LW92ZXJsYXlcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtdHJlZS1sb2FkaW5nLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtpY29ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJGaWx0ZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZmlsdGVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInAtdHJlZS1maWx0ZXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGF1dG9Db21wbGV0ZT1cIm9mZlwiIGNsYXNzTmFtZT1cInAtdHJlZS1maWx0ZXIgcC1pbnB1dHRleHQgcC1jb21wb25lbnRcIiBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5maWx0ZXJQbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5vbkZpbHRlcklucHV0S2V5RG93bn0gb25DaGFuZ2U9e3RoaXMub25GaWx0ZXJJbnB1dENoYW5nZX0gZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicC10cmVlLWZpbHRlci1pY29uIHBpIHBpLXNlYXJjaFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgIDwvZGl2PjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gY2xhc3NOYW1lcygncC10cmVlIHAtY29tcG9uZW50JywgdGhpcy5wcm9wcy5jbGFzc05hbWUsIHtcclxuICAgICAgICAgICAgJ3AtdHJlZS1zZWxlY3RhYmxlJzogdGhpcy5wcm9wcy5zZWxlY3Rpb25Nb2RlLCBcclxuICAgICAgICAgICAgJ3AtdHJlZS1sb2FkaW5nJzogdGhpcy5wcm9wcy5sb2FkaW5nLFxyXG4gICAgICAgICAgICAncC1kaXNhYmxlZCc6IHRoaXMucHJvcHMuZGlzYWJsZWRcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBsb2FkZXIgPSB0aGlzLnJlbmRlckxvYWRlcigpO1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLnJlbmRlck1vZGVsKCk7XHJcbiAgICAgICAgY29uc3QgZmlsdGVyID0gdGhpcy5yZW5kZXJGaWx0ZXIoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBpZD17dGhpcy5wcm9wcy5pZH0gY2xhc3NOYW1lPXtjbGFzc05hbWV9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cclxuICAgICAgICAgICAgICAgIHtsb2FkZXJ9XHJcbiAgICAgICAgICAgICAgICB7ZmlsdGVyfVxyXG4gICAgICAgICAgICAgICAge2NvbnRlbnR9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuVHJlZURhc2hVaUNvbXBvbmVudHMuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgaWQ6IG51bGwsXHJcbiAgICB2YWx1ZTogbnVsbCxcclxuICAgIGRpc2FibGVkOiBmYWxzZSxcclxuICAgIHNlbGVjdGlvbk1vZGU6IG51bGwsXHJcbiAgICBzZWxlY3Rpb25LZXlzOiBudWxsLFxyXG4gICAgb25TZWxlY3Rpb25DaGFuZ2U6IG51bGwsXHJcbiAgICBjb250ZXh0TWVudVNlbGVjdGlvbktleTogbnVsbCxcclxuICAgIG9uQ29udGV4dE1lbnVTZWxlY3Rpb25DaGFuZ2U6IG51bGwsXHJcbiAgICBleHBhbmRlZEtleXM6IG51bGwsXHJcbiAgICBzdHlsZTogbnVsbCxcclxuICAgIGNsYXNzTmFtZTogbnVsbCxcclxuICAgIGNvbnRlbnRTdHlsZTogbnVsbCxcclxuICAgIGNvbnRlbnRDbGFzc05hbWU6IG51bGwsXHJcbiAgICBtZXRhS2V5U2VsZWN0aW9uOiB0cnVlLFxyXG4gICAgcHJvcGFnYXRlU2VsZWN0aW9uVXA6IHRydWUsXHJcbiAgICBwcm9wYWdhdGVTZWxlY3Rpb25Eb3duOiB0cnVlLFxyXG4gICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICBsb2FkaW5nSWNvbjogJ3BpIHBpLXNwaW5uZXInLFxyXG4gICAgZHJhZ2Ryb3BTY29wZTogbnVsbCxcclxuICAgIGZpbHRlcjogZmFsc2UsXHJcbiAgICBmaWx0ZXJCeTogJ2xhYmVsJyxcclxuICAgIGZpbHRlck1vZGU6ICdsZW5pZW50JyxcclxuICAgIGZpbHRlclBsYWNlaG9sZGVyOiBudWxsLFxyXG4gICAgbm9kZVRlbXBsYXRlOiBudWxsLFxyXG4gICAgb25TZWxlY3Q6IG51bGwsXHJcbiAgICBvblVuc2VsZWN0OiBudWxsLFxyXG4gICAgb25FeHBhbmQ6IG51bGwsXHJcbiAgICBvbkNvbGxhcHNlOiBudWxsLFxyXG4gICAgb25Ub2dnbGU6IG51bGwsXHJcbiAgICBvbkRyYWdEcm9wOiBudWxsLFxyXG4gICAgb25Db250ZXh0TWVudTogbnVsbFxyXG59XHJcblxyXG5UcmVlRGFzaFVpQ29tcG9uZW50cy5wcm9wVHlwZXMgPSB7XHJcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHZhbHVlOiBQcm9wVHlwZXMuYW55LFxyXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgc2VsZWN0aW9uTW9kZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHNlbGVjdGlvbktleXM6IFByb3BUeXBlcy5hbnksXHJcbiAgICBvblNlbGVjdGlvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBjb250ZXh0TWVudVNlbGVjdGlvbktleTogUHJvcFR5cGVzLmFueSxcclxuICAgIG9uQ29udGV4dE1lbnVTZWxlY3Rpb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgZXhwYW5kZWRLZXlzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBjb250ZW50U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBjb250ZW50Q2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbWV0YUtleVNlbGVjdGlvbjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBwcm9wYWdhdGVTZWxlY3Rpb25VcDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBwcm9wYWdhdGVTZWxlY3Rpb25Eb3duOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgbG9hZGluZ0ljb246IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBkcmFnZHJvcFNjb3BlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgZmlsdGVyOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGZpbHRlckJ5OiBQcm9wVHlwZXMuYW55LFxyXG4gICAgZmlsdGVyTW9kZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGZpbHRlclBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbm9kZVRlbXBsYXRlOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIG9uVW5zZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgb25FeHBhbmQ6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgb25Db2xsYXBzZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBvblRvZ2dsZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBvbkRyYWdEcm9wOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIG9uQ29udGV4dE1lbnU6IFByb3BUeXBlcy5mdW5jXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9