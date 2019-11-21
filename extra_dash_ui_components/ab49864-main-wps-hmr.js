webpackHotUpdateextra_dash_ui_components("main",{

/***/ "./src/lib/components/Carousel/Carousel.js":
/*!*************************************************!*\
  !*** ./src/lib/components/Carousel/Carousel.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Carousel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_UniqueComponentId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/UniqueComponentId */ "./src/lib/utils/UniqueComponentId.js");
/* harmony import */ var _utils_DomHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/DomHandler */ "./src/lib/utils/DomHandler.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var CarouselItem =
/*#__PURE__*/
function (_Component) {
  _inherits(CarouselItem, _Component);

  function CarouselItem() {
    _classCallCheck(this, CarouselItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(CarouselItem).apply(this, arguments));
  }

  _createClass(CarouselItem, [{
    key: "render",
    value: function render() {
      var content = this.props.template(this.props.item);
      var itemClassName = classnames__WEBPACK_IMPORTED_MODULE_2___default()(this.props.className, 'p-carousel-item', {
        'p-carousel-item-active': this.props.active,
        'p-carousel-item-start': this.props.start,
        'p-carousel-item-end': this.props.end
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: itemClassName
      }, content);
    }
  }]);

  return CarouselItem;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
/**
 * The main carousel component
 */


var Carousel =
/*#__PURE__*/
function (_Component2) {
  _inherits(Carousel, _Component2);

  function Carousel(props) {
    var _this;

    _classCallCheck(this, Carousel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Carousel).call(this, props));
    _this.state = {
      numVisible: props.numVisible,
      numScroll: props.numScroll,
      totalShiftedItems: props.page * props.numScroll * -1
    };

    if (!_this.props.onPageChange) {
      _this.state = _objectSpread({}, _this.state, {
        page: props.page
      });
    }

    _this.navBackward = _this.navBackward.bind(_assertThisInitialized(_this));
    _this.navForward = _this.navForward.bind(_assertThisInitialized(_this));
    _this.onTransitionEnd = _this.onTransitionEnd.bind(_assertThisInitialized(_this));
    _this.onTouchStart = _this.onTouchStart.bind(_assertThisInitialized(_this));
    _this.onTouchMove = _this.onTouchMove.bind(_assertThisInitialized(_this));
    _this.onTouchEnd = _this.onTouchEnd.bind(_assertThisInitialized(_this));
    _this.totalDots = 0;
    _this.remainingItems = 0;
    _this.allowAutoplay = !!_this.props.autoplayInterval;
    _this.circular = _this.props.circular || _this.allowAutoplay;
    _this.id = _this.props.id || Object(_utils_UniqueComponentId__WEBPACK_IMPORTED_MODULE_3__["default"])();
    return _this;
  }

  _createClass(Carousel, [{
    key: "step",
    value: function step(dir, page) {
      var totalShiftedItems = this.state.totalShiftedItems;
      var isCircular = this.isCircular();

      if (page != null) {
        totalShiftedItems = this.state.numScroll * page * -1;

        if (isCircular) {
          totalShiftedItems -= this.state.numVisible;
        }

        this.isRemainingItemsAdded = false;
      } else {
        totalShiftedItems += this.state.numScroll * dir;

        if (this.isRemainingItemsAdded) {
          totalShiftedItems += this.remainingItems - this.state.numScroll * dir;
          this.isRemainingItemsAdded = false;
        }

        var originalShiftedItems = isCircular ? totalShiftedItems + this.state.numVisible : totalShiftedItems;
        page = Math.abs(Math.floor(originalShiftedItems / this.state.numScroll));
      }

      if (isCircular && this.state.page === this.totalDots - 1 && dir === -1) {
        totalShiftedItems = -1 * (this.props.value.length + this.state.numVisible);
        page = 0;
      } else if (isCircular && this.state.page === 0 && dir === 1) {
        totalShiftedItems = 0;
        page = this.totalDots - 1;
      } else if (page === this.totalDots - 1 && this.remainingItems > 0) {
        totalShiftedItems += this.remainingItems * -1 - this.state.numScroll * dir;
        this.isRemainingItemsAdded = true;
      }

      if (this.itemsContainer) {
        _utils_DomHandler__WEBPACK_IMPORTED_MODULE_4__["default"].removeClass(this.itemsContainer, 'p-items-hidden');
        this.itemsContainer.style.transform = this.isVertical() ? "translate3d(0, ".concat(totalShiftedItems * (100 / this.state.numVisible), "%, 0)") : "translate3d(".concat(totalShiftedItems * (100 / this.state.numVisible), "%, 0, 0)");
        this.itemsContainer.style.transition = 'transform 500ms ease 0s';
      }

      if (this.props.onPageChange) {
        this.setState({
          totalShiftedItems: totalShiftedItems
        });
        this.props.onPageChange({
          page: page
        });
      } else {
        this.setState({
          page: page,
          totalShiftedItems: totalShiftedItems
        });
      }
    }
  }, {
    key: "calculatePosition",
    value: function calculatePosition() {
      if (this.itemsContainer && this.responsiveOptions) {
        var windowWidth = window.innerWidth;
        var matchedResponsiveData = {
          numVisible: this.props.numVisible,
          numScroll: this.props.numScroll
        };

        for (var i = 0; i < this.responsiveOptions.length; i++) {
          var res = this.responsiveOptions[i];

          if (parseInt(res.breakpoint, 10) >= windowWidth) {
            matchedResponsiveData = res;
          }
        }

        var state = {};

        if (this.state.numScroll !== matchedResponsiveData.numScroll) {
          var page = this.getPage();
          page = Math.floor(page * this.state.numScroll / matchedResponsiveData.numScroll);
          var totalShiftedItems = matchedResponsiveData.numScroll * page * -1;

          if (this.isCircular()) {
            totalShiftedItems -= matchedResponsiveData.numVisible;
          }

          state = {
            totalShiftedItems: totalShiftedItems,
            numScroll: matchedResponsiveData.numScroll
          };

          if (this.props.onPageChange) {
            this.props.onPageChange({
              page: page
            });
          } else {
            state = _objectSpread({}, state, {
              page: page
            });
          }
        }

        if (this.state.numVisible !== matchedResponsiveData.numVisible) {
          state = _objectSpread({}, state, {
            numVisible: matchedResponsiveData.numVisible
          });
        }

        if (Object.keys(state).length) {
          this.setState(state);
        }
      }
    }
  }, {
    key: "navBackward",
    value: function navBackward(e, page) {
      if (this.circular || this.getPage() !== 0) {
        this.step(1, page);
      }

      this.allowAutoplay = false;

      if (e.cancelable) {
        e.preventDefault();
      }
    }
  }, {
    key: "navForward",
    value: function navForward(e, page) {
      if (this.circular || this.getPage() < this.totalDots - 1) {
        this.step(-1, page);
      }

      this.allowAutoplay = false;

      if (e.cancelable) {
        e.preventDefault();
      }
    }
  }, {
    key: "onDotClick",
    value: function onDotClick(e, page) {
      var currentPage = this.getPage();

      if (page > currentPage) {
        this.navForward(e, page);
      } else if (page < currentPage) {
        this.navBackward(e, page);
      }
    }
  }, {
    key: "onTransitionEnd",
    value: function onTransitionEnd() {
      if (this.itemsContainer) {
        _utils_DomHandler__WEBPACK_IMPORTED_MODULE_4__["default"].addClass(this.itemsContainer, 'p-items-hidden');
        this.itemsContainer.style.transition = '';

        if ((this.state.page === 0 || this.state.page === this.totalDots - 1) && this.isCircular()) {
          this.itemsContainer.style.transform = this.isVertical() ? "translate3d(0, ".concat(this.state.totalShiftedItems * (100 / this.state.numVisible), "%, 0)") : "translate3d(".concat(this.state.totalShiftedItems * (100 / this.state.numVisible), "%, 0, 0)");
        }
      }
    }
  }, {
    key: "onTouchStart",
    value: function onTouchStart(e) {
      var touchobj = e.changedTouches[0];
      this.startPos = {
        x: touchobj.pageX,
        y: touchobj.pageY
      };
    }
  }, {
    key: "onTouchMove",
    value: function onTouchMove(e) {
      if (e.cancelable) {
        e.preventDefault();
      }
    }
  }, {
    key: "onTouchEnd",
    value: function onTouchEnd(e) {
      var touchobj = e.changedTouches[0];

      if (this.isVertical()) {
        this.changePageOnTouch(e, touchobj.pageY - this.startPos.y);
      } else {
        this.changePageOnTouch(e, touchobj.pageX - this.startPos.x);
      }
    }
  }, {
    key: "changePageOnTouch",
    value: function changePageOnTouch(e, diff) {
      if (diff < 0) {
        // left
        this.navForward(e);
      } else {
        // right
        this.navBackward(e);
      }
    }
  }, {
    key: "bindDocumentListeners",
    value: function bindDocumentListeners() {
      var _this2 = this;

      if (!this.documentResizeListener) {
        this.documentResizeListener = function () {
          _this2.calculatePosition();
        };

        window.addEventListener('resize', this.documentResizeListener);
      }
    }
  }, {
    key: "unbindDocumentListeners",
    value: function unbindDocumentListeners() {
      if (this.documentResizeListener) {
        window.removeEventListener('resize', this.documentResizeListener);
        this.documentResizeListener = null;
      }
    }
  }, {
    key: "isVertical",
    value: function isVertical() {
      return this.props.orientation === 'vertical';
    }
  }, {
    key: "isCircular",
    value: function isCircular() {
      return this.circular && this.props.value.length >= this.state.numVisible;
    }
  }, {
    key: "getPage",
    value: function getPage() {
      return this.props.onPageChange ? this.props.page : this.state.page;
    }
  }, {
    key: "getTotalDots",
    value: function getTotalDots() {
      return this.props.value ? Math.ceil((this.props.value.length - this.state.numVisible) / this.state.numScroll) + 1 : 0;
    }
  }, {
    key: "isAutoplay",
    value: function isAutoplay() {
      return this.props.autoplayInterval && this.allowAutoplay;
    }
  }, {
    key: "startAutoplay",
    value: function startAutoplay() {
      var _this3 = this;

      this.interval = setInterval(function () {
        if (_this3.state.page === _this3.totalDots - 1) {
          _this3.step(-1, 0);
        } else {
          _this3.step(-1, _this3.state.page + 1);
        }
      }, this.props.autoplayInterval);
    }
  }, {
    key: "stopAutoplay",
    value: function stopAutoplay() {
      if (this.interval) {
        clearInterval(this.interval);
      }
    }
  }, {
    key: "createStyle",
    value: function createStyle() {
      if (!this.carouselStyle) {
        this.carouselStyle = document.createElement('style');
        this.carouselStyle.type = 'text/css';
        document.body.appendChild(this.carouselStyle);
      }

      var innerHTML = "\n            #".concat(this.id, " .p-carousel-item {\n                flex: 1 0 ").concat(100 / this.state.numVisible, "%\n            }\n        ");

      if (this.props.responsiveOptions) {
        this.responsiveOptions = _toConsumableArray(this.props.responsiveOptions);
        this.responsiveOptions.sort(function (data1, data2) {
          var value1 = data1.breakpoint;
          var value2 = data2.breakpoint;
          var result = null;
          if (value1 == null && value2 != null) result = -1;else if (value1 != null && value2 == null) result = 1;else if (value1 == null && value2 == null) result = 0;else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2, undefined, {
            numeric: true
          });else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
          return -1 * result;
        });

        for (var i = 0; i < this.responsiveOptions.length; i++) {
          var res = this.responsiveOptions[i];
          innerHTML += "\n                    @media screen and (max-width: ".concat(res.breakpoint, ") {\n                        #").concat(this.id, " .p-carousel-item {\n                            flex: 1 0 ").concat(100 / res.numVisible, "%\n                        }\n                    } \n                ");
        }
      }

      this.carouselStyle.innerHTML = innerHTML;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.createStyle();
      this.calculatePosition();

      if (this.props.responsiveOptions) {
        this.bindDocumentListeners();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var isCircular = this.isCircular();
      var stateChanged = false;
      var totalShiftedItems = this.state.totalShiftedItems;

      if (this.props.autoplayInterval) {
        this.stopAutoplay();
      }

      if (prevState.numScroll !== this.state.numScroll || prevState.numVisible !== this.state.numVisible || prevProps.value.length !== this.props.value.length) {
        this.remainingItems = (this.props.value.length - this.state.numVisible) % this.state.numScroll;
        var page = this.getPage();

        if (this.totalDots !== 0 && page >= this.totalDots) {
          page = this.totalDots - 1;

          if (this.props.onPageChange) {
            this.props.onPageChange({
              page: page
            });
          } else {
            this.setState({
              page: page
            });
          }

          stateChanged = true;
        }

        totalShiftedItems = page * this.state.numScroll * -1;

        if (isCircular) {
          totalShiftedItems -= this.state.numVisible;
        }

        if (page === this.totalDots - 1 && this.remainingItems > 0) {
          totalShiftedItems += -1 * this.remainingItems + this.state.numScroll;
          this.isRemainingItemsAdded = true;
        } else {
          this.isRemainingItemsAdded = false;
        }

        if (totalShiftedItems !== this.state.totalShiftedItems) {
          this.setState({
            totalShiftedItems: totalShiftedItems
          });
          stateChanged = true;
        }

        this.itemsContainer.style.transform = this.isVertical() ? "translate3d(0, ".concat(totalShiftedItems * (100 / this.state.numVisible), "%, 0)") : "translate3d(".concat(totalShiftedItems * (100 / this.state.numVisible), "%, 0, 0)");
      }

      if (isCircular) {
        if (this.state.page === 0) {
          totalShiftedItems = -1 * this.state.numVisible;
        } else if (totalShiftedItems === 0) {
          totalShiftedItems = -1 * this.props.value.length;

          if (this.remainingItems > 0) {
            this.isRemainingItemsAdded = true;
          }
        }

        if (totalShiftedItems !== this.state.totalShiftedItems) {
          this.setState({
            totalShiftedItems: totalShiftedItems
          });
          stateChanged = true;
        }
      }

      if (!stateChanged && this.isAutoplay()) {
        this.startAutoplay();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.responsiveOptions) {
        this.unbindDocumentListeners();
      }

      if (this.props.autoplayInterval) {
        this.stopAutoplay();
      }
    }
  }, {
    key: "renderItems",
    value: function renderItems() {
      var _this4 = this;

      if (this.props.value && this.props.value.length) {
        var isCircular = this.isCircular();
        var clonedItemsForStarting = null;
        var clonedItemsForFinishing = null;

        if (isCircular) {
          var clonedElements = null;
          clonedElements = this.props.value.slice(-1 * this.state.numVisible);
          clonedItemsForStarting = clonedElements.map(function (item, index) {
            var isActive = _this4.state.totalShiftedItems * -1 === _this4.props.value.length + _this4.state.numVisible,
                start = index === 0,
                end = index === clonedElements.length - 1;
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CarouselItem, {
              key: index + '_scloned',
              className: "p-carousel-item-cloned",
              template: _this4.props.itemTemplate,
              item: item,
              active: isActive,
              start: start,
              end: end
            });
          });
          clonedElements = this.props.value.slice(0, this.state.numVisible);
          clonedItemsForFinishing = clonedElements.map(function (item, index) {
            var isActive = _this4.state.totalShiftedItems === 0,
                start = index === 0,
                end = index === clonedElements.length - 1;
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CarouselItem, {
              key: index + '_fcloned',
              className: "p-carousel-item-cloned",
              template: _this4.props.itemTemplate,
              item: item,
              active: isActive,
              start: start,
              end: end
            });
          });
        }

        var items = this.props.value.map(function (item, index) {
          var firstIndex = isCircular ? -1 * (_this4.state.totalShiftedItems + _this4.state.numVisible) : _this4.state.totalShiftedItems * -1,
              lastIndex = firstIndex + _this4.state.numVisible - 1,
              isActive = firstIndex <= index && lastIndex >= index,
              start = firstIndex === index,
              end = lastIndex === index;
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CarouselItem, {
            key: index,
            template: _this4.props.itemTemplate,
            item: item,
            active: isActive,
            start: start,
            end: end
          });
        });
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, clonedItemsForStarting, items, clonedItemsForFinishing);
      }
    }
  }, {
    key: "renderHeader",
    value: function renderHeader() {
      if (this.props.header) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "p-carousel-header"
        }, this.props.header);
      }

      return null;
    }
  }, {
    key: "renderFooter",
    value: function renderFooter() {
      if (this.props.footer) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "p-carousel-footer"
        }, this.props.footer);
      }

      return null;
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var _this5 = this;

      var items = this.renderItems();
      var height = this.isVertical() ? this.props.verticalViewPortHeight : 'auto';
      var backwardNavigator = this.renderBackwardNavigator();
      var forwardNavigator = this.renderForwardNavigator();
      var containerClassName = classnames__WEBPACK_IMPORTED_MODULE_2___default()('p-carousel-container', this.props.containerClassName);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: containerClassName
      }, backwardNavigator, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-carousel-items-content",
        style: {
          height: height
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        ref: function ref(el) {
          return _this5.itemsContainer = el;
        },
        className: "p-carousel-items-container",
        onTransitionEnd: this.onTransitionEnd,
        onTouchStart: this.onTouchStart,
        onTouchMove: this.onTouchMove,
        onTouchEnd: this.onTouchEnd
      }, items)), forwardNavigator);
    }
  }, {
    key: "renderBackwardNavigator",
    value: function renderBackwardNavigator() {
      var isDisabled = (!this.circular || this.props.value.length < this.state.numVisible) && this.getPage() === 0;
      var buttonClassName = classnames__WEBPACK_IMPORTED_MODULE_2___default()('p-carousel-prev p-button', {
        'p-disabled': isDisabled
      }),
          iconClassName = classnames__WEBPACK_IMPORTED_MODULE_2___default()('p-carousel-prev-icon pi', {
        'pi-chevron-left': !this.isVertical(),
        'pi-chevron-up': this.isVertical()
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: buttonClassName,
        onClick: this.navBackward,
        disabled: isDisabled
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: iconClassName
      }));
    }
  }, {
    key: "renderForwardNavigator",
    value: function renderForwardNavigator() {
      var isDisabled = (!this.circular || this.props.value.length < this.state.numVisible) && (this.getPage() === this.totalDots - 1 || this.totalDots === 0);
      var buttonClassName = classnames__WEBPACK_IMPORTED_MODULE_2___default()('p-carousel-next p-button', {
        'p-disabled': isDisabled
      }),
          iconClassName = classnames__WEBPACK_IMPORTED_MODULE_2___default()('p-carousel-prev-icon pi', {
        'pi-chevron-right': !this.isVertical(),
        'pi-chevron-down': this.isVertical()
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: buttonClassName,
        onClick: this.navForward,
        disabled: isDisabled
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: iconClassName
      }));
    }
  }, {
    key: "renderDot",
    value: function renderDot(index) {
      var _this6 = this;

      var isActive = this.getPage() === index,
          dotItemClassName = classnames__WEBPACK_IMPORTED_MODULE_2___default()('p-carousel-dot-item', {
        'p-highlight': isActive
      }),
          iconClassName = classnames__WEBPACK_IMPORTED_MODULE_2___default()('p-carousel-dot-icon pi', {
        'pi-circle-on': isActive,
        'pi-circle-off': !isActive
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: dotItemClassName,
        key: 'p-carousel-dot-' + index
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "p-link",
        onClick: function onClick(e) {
          return _this6.onDotClick(e, index);
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: iconClassName
      })));
    }
  }, {
    key: "renderDots",
    value: function renderDots() {
      var dotsContainerClassName = classnames__WEBPACK_IMPORTED_MODULE_2___default()('p-carousel-dots-container p-reset', this.props.dotsContainerClassName);
      var dots = [];

      for (var i = 0; i < this.totalDots; i++) {
        dots.push(this.renderDot(i));
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: dotsContainerClassName
      }, dots);
    }
  }, {
    key: "render",
    value: function render() {
      var className = classnames__WEBPACK_IMPORTED_MODULE_2___default()('p-carousel p-component', {
        'p-carousel-vertical': this.isVertical(),
        'p-carousel-horizontal': !this.isVertical()
      }, this.props.className);
      var contentClassName = classnames__WEBPACK_IMPORTED_MODULE_2___default()('p-carousel-content', this.props.contentClassName);
      this.totalDots = this.getTotalDots();
      var content = this.renderContent();
      var dots = this.renderDots();
      var header = this.renderHeader();
      var footer = this.renderFooter();
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: this.id,
        className: className,
        style: this.props.style
      }, header, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: contentClassName
      }, content, dots), footer);
    }
  }]);

  return Carousel;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


CarouselItem.defaultProps = {
  template: null,
  item: null,
  active: false,
  start: false,
  end: false,
  className: null
};
CarouselItem.propTypes = {
  template: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  item: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  active: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  start: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  end: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
Carousel.defaultProps = {
  id: null,
  value: null,
  page: 0,
  header: null,
  footer: null,
  style: null,
  className: null,
  itemTemplate: null,
  circular: false,
  autoplayInterval: 0,
  numVisible: 1,
  numScroll: 1,
  responsiveOptions: null,
  orientation: 'horizontal',
  verticalViewPortHeight: '300px',
  contentClassName: null,
  containerClassName: null,
  dotsContainerClassName: null,
  onPageChange: null
};
Carousel.propTypes = {
  /**
   * Unique identifier of the element.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * An array of objects to display.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,

  /**
   * Index of the first item.
   */
  page: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Label of header.
   */
  header: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,

  /**
   * Label of footer.
   */
  footer: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,

  /**
   * Inline style of the component.
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Style class of the component.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Function that gets an item in the value and returns the content for it.
   */
  itemTemplate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,

  /**
   * Defines if scrolling would be infinite.
   */
  circular: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Time in milliseconds to scroll items automatically.
   */
  autoplayInterval: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * 	Number of items per page.
   */
  numVisible: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Number of items to scroll.
   */
  numScroll: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * 	An array of options for responsive design.
   */
  responsiveOptions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,

  /**
   * Specifies the layout of the component, valid values are "horizontal" and "vertical".
   */
  orientation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * 	Height of the viewport in vertical layout.
   */
  verticalViewPortHeight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * 	Style class of main content.
   */
  contentClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * 	Style class of the viewport container.
   */
  containerClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * 	Style class of the paginator items.
   */
  dotsContainerClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * 	Callback to invoke after scroll.
   */
  onPageChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ }),

/***/ "./src/lib/utils/UniqueComponentId.js":
/*!********************************************!*\
  !*** ./src/lib/utils/UniqueComponentId.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var lastId = 0;
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'pr_id_';
  lastId++;
  return "".concat(prefix).concat(lastId);
});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvQ2Fyb3VzZWwvQ2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vZXh0cmFfZGFzaF91aV9jb21wb25lbnRzLy4vc3JjL2xpYi91dGlscy9VbmlxdWVDb21wb25lbnRJZC5qcyJdLCJuYW1lcyI6WyJDYXJvdXNlbEl0ZW0iLCJjb250ZW50IiwicHJvcHMiLCJ0ZW1wbGF0ZSIsIml0ZW0iLCJpdGVtQ2xhc3NOYW1lIiwiY2xhc3NOYW1lcyIsImNsYXNzTmFtZSIsImFjdGl2ZSIsInN0YXJ0IiwiZW5kIiwiQ29tcG9uZW50IiwiQ2Fyb3VzZWwiLCJzdGF0ZSIsIm51bVZpc2libGUiLCJudW1TY3JvbGwiLCJ0b3RhbFNoaWZ0ZWRJdGVtcyIsInBhZ2UiLCJvblBhZ2VDaGFuZ2UiLCJuYXZCYWNrd2FyZCIsImJpbmQiLCJuYXZGb3J3YXJkIiwib25UcmFuc2l0aW9uRW5kIiwib25Ub3VjaFN0YXJ0Iiwib25Ub3VjaE1vdmUiLCJvblRvdWNoRW5kIiwidG90YWxEb3RzIiwicmVtYWluaW5nSXRlbXMiLCJhbGxvd0F1dG9wbGF5IiwiYXV0b3BsYXlJbnRlcnZhbCIsImNpcmN1bGFyIiwiaWQiLCJVbmlxdWVDb21wb25lbnRJZCIsImRpciIsImlzQ2lyY3VsYXIiLCJpc1JlbWFpbmluZ0l0ZW1zQWRkZWQiLCJvcmlnaW5hbFNoaWZ0ZWRJdGVtcyIsIk1hdGgiLCJhYnMiLCJmbG9vciIsInZhbHVlIiwibGVuZ3RoIiwiaXRlbXNDb250YWluZXIiLCJEb21IYW5kbGVyIiwicmVtb3ZlQ2xhc3MiLCJzdHlsZSIsInRyYW5zZm9ybSIsImlzVmVydGljYWwiLCJ0cmFuc2l0aW9uIiwic2V0U3RhdGUiLCJyZXNwb25zaXZlT3B0aW9ucyIsIndpbmRvd1dpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIm1hdGNoZWRSZXNwb25zaXZlRGF0YSIsImkiLCJyZXMiLCJwYXJzZUludCIsImJyZWFrcG9pbnQiLCJnZXRQYWdlIiwiT2JqZWN0Iiwia2V5cyIsImUiLCJzdGVwIiwiY2FuY2VsYWJsZSIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudFBhZ2UiLCJhZGRDbGFzcyIsInRvdWNob2JqIiwiY2hhbmdlZFRvdWNoZXMiLCJzdGFydFBvcyIsIngiLCJwYWdlWCIsInkiLCJwYWdlWSIsImNoYW5nZVBhZ2VPblRvdWNoIiwiZGlmZiIsImRvY3VtZW50UmVzaXplTGlzdGVuZXIiLCJjYWxjdWxhdGVQb3NpdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib3JpZW50YXRpb24iLCJjZWlsIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJjYXJvdXNlbFN0eWxlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImlubmVySFRNTCIsInNvcnQiLCJkYXRhMSIsImRhdGEyIiwidmFsdWUxIiwidmFsdWUyIiwicmVzdWx0IiwibG9jYWxlQ29tcGFyZSIsInVuZGVmaW5lZCIsIm51bWVyaWMiLCJjcmVhdGVTdHlsZSIsImJpbmREb2N1bWVudExpc3RlbmVycyIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInN0YXRlQ2hhbmdlZCIsInN0b3BBdXRvcGxheSIsImlzQXV0b3BsYXkiLCJzdGFydEF1dG9wbGF5IiwidW5iaW5kRG9jdW1lbnRMaXN0ZW5lcnMiLCJjbG9uZWRJdGVtc0ZvclN0YXJ0aW5nIiwiY2xvbmVkSXRlbXNGb3JGaW5pc2hpbmciLCJjbG9uZWRFbGVtZW50cyIsInNsaWNlIiwibWFwIiwiaW5kZXgiLCJpc0FjdGl2ZSIsIml0ZW1UZW1wbGF0ZSIsIml0ZW1zIiwiZmlyc3RJbmRleCIsImxhc3RJbmRleCIsImhlYWRlciIsImZvb3RlciIsInJlbmRlckl0ZW1zIiwiaGVpZ2h0IiwidmVydGljYWxWaWV3UG9ydEhlaWdodCIsImJhY2t3YXJkTmF2aWdhdG9yIiwicmVuZGVyQmFja3dhcmROYXZpZ2F0b3IiLCJmb3J3YXJkTmF2aWdhdG9yIiwicmVuZGVyRm9yd2FyZE5hdmlnYXRvciIsImNvbnRhaW5lckNsYXNzTmFtZSIsImVsIiwiaXNEaXNhYmxlZCIsImJ1dHRvbkNsYXNzTmFtZSIsImljb25DbGFzc05hbWUiLCJkb3RJdGVtQ2xhc3NOYW1lIiwib25Eb3RDbGljayIsImRvdHNDb250YWluZXJDbGFzc05hbWUiLCJkb3RzIiwicHVzaCIsInJlbmRlckRvdCIsImNvbnRlbnRDbGFzc05hbWUiLCJnZXRUb3RhbERvdHMiLCJyZW5kZXJDb250ZW50IiwicmVuZGVyRG90cyIsInJlbmRlckhlYWRlciIsInJlbmRlckZvb3RlciIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJhbnkiLCJib29sIiwic3RyaW5nIiwibnVtYmVyIiwib2JqZWN0IiwiYXJyYXkiLCJsYXN0SWQiLCJwcmVmaXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxZOzs7Ozs7Ozs7Ozs7OzZCQUNPO0FBQ0wsVUFBTUMsT0FBTyxHQUFHLEtBQUtDLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQixLQUFLRCxLQUFMLENBQVdFLElBQS9CLENBQWhCO0FBQ0EsVUFBTUMsYUFBYSxHQUFHQyxpREFBVSxDQUM1QixLQUFLSixLQUFMLENBQVdLLFNBRGlCLEVBRTVCLGlCQUY0QixFQUc1QjtBQUNJLGtDQUEwQixLQUFLTCxLQUFMLENBQVdNLE1BRHpDO0FBRUksaUNBQXlCLEtBQUtOLEtBQUwsQ0FBV08sS0FGeEM7QUFHSSwrQkFBdUIsS0FBS1AsS0FBTCxDQUFXUTtBQUh0QyxPQUg0QixDQUFoQztBQVVBLGFBQU87QUFBSyxpQkFBUyxFQUFFTDtBQUFoQixTQUFnQ0osT0FBaEMsQ0FBUDtBQUNIOzs7O0VBZHNCVSwrQztBQWlCM0I7Ozs7O0lBR3FC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cnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBVbmlxdWVDb21wb25lbnRJZCBmcm9tICcuLi8uLi91dGlscy9VbmlxdWVDb21wb25lbnRJZCc7XG5pbXBvcnQgRG9tSGFuZGxlciBmcm9tICcuLi8uLi91dGlscy9Eb21IYW5kbGVyJztcblxuY2xhc3MgQ2Fyb3VzZWxJdGVtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLnByb3BzLnRlbXBsYXRlKHRoaXMucHJvcHMuaXRlbSk7XG4gICAgICAgIGNvbnN0IGl0ZW1DbGFzc05hbWUgPSBjbGFzc05hbWVzKFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAncC1jYXJvdXNlbC1pdGVtJyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAncC1jYXJvdXNlbC1pdGVtLWFjdGl2ZSc6IHRoaXMucHJvcHMuYWN0aXZlLFxuICAgICAgICAgICAgICAgICdwLWNhcm91c2VsLWl0ZW0tc3RhcnQnOiB0aGlzLnByb3BzLnN0YXJ0LFxuICAgICAgICAgICAgICAgICdwLWNhcm91c2VsLWl0ZW0tZW5kJzogdGhpcy5wcm9wcy5lbmQsXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtpdGVtQ2xhc3NOYW1lfT57Y29udGVudH08L2Rpdj47XG4gICAgfVxufVxuXG4vKipcbiAqIFRoZSBtYWluIGNhcm91c2VsIGNvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJvdXNlbCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBudW1WaXNpYmxlOiBwcm9wcy5udW1WaXNpYmxlLFxuICAgICAgICAgICAgbnVtU2Nyb2xsOiBwcm9wcy5udW1TY3JvbGwsXG4gICAgICAgICAgICB0b3RhbFNoaWZ0ZWRJdGVtczogcHJvcHMucGFnZSAqIHByb3BzLm51bVNjcm9sbCAqIC0xLFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5vblBhZ2VDaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgICAgICAgICAgICBwYWdlOiBwcm9wcy5wYWdlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubmF2QmFja3dhcmQgPSB0aGlzLm5hdkJhY2t3YXJkLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubmF2Rm9yd2FyZCA9IHRoaXMubmF2Rm9yd2FyZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uVHJhbnNpdGlvbkVuZCA9IHRoaXMub25UcmFuc2l0aW9uRW5kLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Ub3VjaFN0YXJ0ID0gdGhpcy5vblRvdWNoU3RhcnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblRvdWNoTW92ZSA9IHRoaXMub25Ub3VjaE1vdmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblRvdWNoRW5kID0gdGhpcy5vblRvdWNoRW5kLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudG90YWxEb3RzID0gMDtcbiAgICAgICAgdGhpcy5yZW1haW5pbmdJdGVtcyA9IDA7XG4gICAgICAgIHRoaXMuYWxsb3dBdXRvcGxheSA9ICEhdGhpcy5wcm9wcy5hdXRvcGxheUludGVydmFsO1xuICAgICAgICB0aGlzLmNpcmN1bGFyID0gdGhpcy5wcm9wcy5jaXJjdWxhciB8fCB0aGlzLmFsbG93QXV0b3BsYXk7XG5cbiAgICAgICAgdGhpcy5pZCA9IHRoaXMucHJvcHMuaWQgfHwgVW5pcXVlQ29tcG9uZW50SWQoKTtcbiAgICB9XG5cbiAgICBzdGVwKGRpciwgcGFnZSkge1xuICAgICAgICBsZXQgdG90YWxTaGlmdGVkSXRlbXMgPSB0aGlzLnN0YXRlLnRvdGFsU2hpZnRlZEl0ZW1zO1xuICAgICAgICBjb25zdCBpc0NpcmN1bGFyID0gdGhpcy5pc0NpcmN1bGFyKCk7XG5cbiAgICAgICAgaWYgKHBhZ2UgIT0gbnVsbCkge1xuICAgICAgICAgICAgdG90YWxTaGlmdGVkSXRlbXMgPSB0aGlzLnN0YXRlLm51bVNjcm9sbCAqIHBhZ2UgKiAtMTtcblxuICAgICAgICAgICAgaWYgKGlzQ2lyY3VsYXIpIHtcbiAgICAgICAgICAgICAgICB0b3RhbFNoaWZ0ZWRJdGVtcyAtPSB0aGlzLnN0YXRlLm51bVZpc2libGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuaXNSZW1haW5pbmdJdGVtc0FkZGVkID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b3RhbFNoaWZ0ZWRJdGVtcyArPSB0aGlzLnN0YXRlLm51bVNjcm9sbCAqIGRpcjtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzUmVtYWluaW5nSXRlbXNBZGRlZCkge1xuICAgICAgICAgICAgICAgIHRvdGFsU2hpZnRlZEl0ZW1zICs9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVtYWluaW5nSXRlbXMgLSB0aGlzLnN0YXRlLm51bVNjcm9sbCAqIGRpcjtcbiAgICAgICAgICAgICAgICB0aGlzLmlzUmVtYWluaW5nSXRlbXNBZGRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgb3JpZ2luYWxTaGlmdGVkSXRlbXMgPSBpc0NpcmN1bGFyXG4gICAgICAgICAgICAgICAgPyB0b3RhbFNoaWZ0ZWRJdGVtcyArIHRoaXMuc3RhdGUubnVtVmlzaWJsZVxuICAgICAgICAgICAgICAgIDogdG90YWxTaGlmdGVkSXRlbXM7XG4gICAgICAgICAgICBwYWdlID0gTWF0aC5hYnMoXG4gICAgICAgICAgICAgICAgTWF0aC5mbG9vcihvcmlnaW5hbFNoaWZ0ZWRJdGVtcyAvIHRoaXMuc3RhdGUubnVtU2Nyb2xsKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGlzQ2lyY3VsYXIgJiZcbiAgICAgICAgICAgIHRoaXMuc3RhdGUucGFnZSA9PT0gdGhpcy50b3RhbERvdHMgLSAxICYmXG4gICAgICAgICAgICBkaXIgPT09IC0xXG4gICAgICAgICkge1xuICAgICAgICAgICAgdG90YWxTaGlmdGVkSXRlbXMgPVxuICAgICAgICAgICAgICAgIC0xICogKHRoaXMucHJvcHMudmFsdWUubGVuZ3RoICsgdGhpcy5zdGF0ZS5udW1WaXNpYmxlKTtcbiAgICAgICAgICAgIHBhZ2UgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKGlzQ2lyY3VsYXIgJiYgdGhpcy5zdGF0ZS5wYWdlID09PSAwICYmIGRpciA9PT0gMSkge1xuICAgICAgICAgICAgdG90YWxTaGlmdGVkSXRlbXMgPSAwO1xuICAgICAgICAgICAgcGFnZSA9IHRoaXMudG90YWxEb3RzIC0gMTtcbiAgICAgICAgfSBlbHNlIGlmIChwYWdlID09PSB0aGlzLnRvdGFsRG90cyAtIDEgJiYgdGhpcy5yZW1haW5pbmdJdGVtcyA+IDApIHtcbiAgICAgICAgICAgIHRvdGFsU2hpZnRlZEl0ZW1zICs9XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1haW5pbmdJdGVtcyAqIC0xIC0gdGhpcy5zdGF0ZS5udW1TY3JvbGwgKiBkaXI7XG4gICAgICAgICAgICB0aGlzLmlzUmVtYWluaW5nSXRlbXNBZGRlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pdGVtc0NvbnRhaW5lcikge1xuICAgICAgICAgICAgRG9tSGFuZGxlci5yZW1vdmVDbGFzcyh0aGlzLml0ZW1zQ29udGFpbmVyLCAncC1pdGVtcy1oaWRkZW4nKTtcbiAgICAgICAgICAgIHRoaXMuaXRlbXNDb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gdGhpcy5pc1ZlcnRpY2FsKClcbiAgICAgICAgICAgICAgICA/IGB0cmFuc2xhdGUzZCgwLCAke3RvdGFsU2hpZnRlZEl0ZW1zICpcbiAgICAgICAgICAgICAgICAgICAgICAoMTAwIC8gdGhpcy5zdGF0ZS5udW1WaXNpYmxlKX0lLCAwKWBcbiAgICAgICAgICAgICAgICA6IGB0cmFuc2xhdGUzZCgke3RvdGFsU2hpZnRlZEl0ZW1zICpcbiAgICAgICAgICAgICAgICAgICAgICAoMTAwIC8gdGhpcy5zdGF0ZS5udW1WaXNpYmxlKX0lLCAwLCAwKWA7XG4gICAgICAgICAgICB0aGlzLml0ZW1zQ29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb24gPSAndHJhbnNmb3JtIDUwMG1zIGVhc2UgMHMnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25QYWdlQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICB0b3RhbFNoaWZ0ZWRJdGVtcyxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uUGFnZUNoYW5nZSh7XG4gICAgICAgICAgICAgICAgcGFnZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgcGFnZSxcbiAgICAgICAgICAgICAgICB0b3RhbFNoaWZ0ZWRJdGVtcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2FsY3VsYXRlUG9zaXRpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLml0ZW1zQ29udGFpbmVyICYmIHRoaXMucmVzcG9uc2l2ZU9wdGlvbnMpIHtcbiAgICAgICAgICAgIGxldCB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgbGV0IG1hdGNoZWRSZXNwb25zaXZlRGF0YSA9IHtcbiAgICAgICAgICAgICAgICBudW1WaXNpYmxlOiB0aGlzLnByb3BzLm51bVZpc2libGUsXG4gICAgICAgICAgICAgICAgbnVtU2Nyb2xsOiB0aGlzLnByb3BzLm51bVNjcm9sbCxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yZXNwb25zaXZlT3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCByZXMgPSB0aGlzLnJlc3BvbnNpdmVPcHRpb25zW2ldO1xuXG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KHJlcy5icmVha3BvaW50LCAxMCkgPj0gd2luZG93V2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hlZFJlc3BvbnNpdmVEYXRhID0gcmVzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHN0YXRlID0ge307XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5udW1TY3JvbGwgIT09IG1hdGNoZWRSZXNwb25zaXZlRGF0YS5udW1TY3JvbGwpIHtcbiAgICAgICAgICAgICAgICBsZXQgcGFnZSA9IHRoaXMuZ2V0UGFnZSgpO1xuICAgICAgICAgICAgICAgIHBhZ2UgPSBNYXRoLmZsb29yKFxuICAgICAgICAgICAgICAgICAgICAocGFnZSAqIHRoaXMuc3RhdGUubnVtU2Nyb2xsKSAvXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVkUmVzcG9uc2l2ZURhdGEubnVtU2Nyb2xsXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGxldCB0b3RhbFNoaWZ0ZWRJdGVtcyA9XG4gICAgICAgICAgICAgICAgICAgIG1hdGNoZWRSZXNwb25zaXZlRGF0YS5udW1TY3JvbGwgKiBwYWdlICogLTE7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0NpcmN1bGFyKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdG90YWxTaGlmdGVkSXRlbXMgLT0gbWF0Y2hlZFJlc3BvbnNpdmVEYXRhLm51bVZpc2libGU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgICAgIHRvdGFsU2hpZnRlZEl0ZW1zLFxuICAgICAgICAgICAgICAgICAgICBudW1TY3JvbGw6IG1hdGNoZWRSZXNwb25zaXZlRGF0YS5udW1TY3JvbGwsXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9uUGFnZUNoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uUGFnZUNoYW5nZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLm51bVZpc2libGUgIT09IG1hdGNoZWRSZXNwb25zaXZlRGF0YS5udW1WaXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgICAgICBudW1WaXNpYmxlOiBtYXRjaGVkUmVzcG9uc2l2ZURhdGEubnVtVmlzaWJsZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoc3RhdGUpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmF2QmFja3dhcmQoZSwgcGFnZSkge1xuICAgICAgICBpZiAodGhpcy5jaXJjdWxhciB8fCB0aGlzLmdldFBhZ2UoKSAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5zdGVwKDEsIHBhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hbGxvd0F1dG9wbGF5ID0gZmFsc2U7XG4gICAgICAgIGlmIChlLmNhbmNlbGFibGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5hdkZvcndhcmQoZSwgcGFnZSkge1xuICAgICAgICBpZiAodGhpcy5jaXJjdWxhciB8fCB0aGlzLmdldFBhZ2UoKSA8IHRoaXMudG90YWxEb3RzIC0gMSkge1xuICAgICAgICAgICAgdGhpcy5zdGVwKC0xLCBwYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWxsb3dBdXRvcGxheSA9IGZhbHNlO1xuICAgICAgICBpZiAoZS5jYW5jZWxhYmxlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkRvdENsaWNrKGUsIHBhZ2UpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRQYWdlID0gdGhpcy5nZXRQYWdlKCk7XG5cbiAgICAgICAgaWYgKHBhZ2UgPiBjdXJyZW50UGFnZSkge1xuICAgICAgICAgICAgdGhpcy5uYXZGb3J3YXJkKGUsIHBhZ2UpO1xuICAgICAgICB9IGVsc2UgaWYgKHBhZ2UgPCBjdXJyZW50UGFnZSkge1xuICAgICAgICAgICAgdGhpcy5uYXZCYWNrd2FyZChlLCBwYWdlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uVHJhbnNpdGlvbkVuZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXRlbXNDb250YWluZXIpIHtcbiAgICAgICAgICAgIERvbUhhbmRsZXIuYWRkQ2xhc3ModGhpcy5pdGVtc0NvbnRhaW5lciwgJ3AtaXRlbXMtaGlkZGVuJyk7XG4gICAgICAgICAgICB0aGlzLml0ZW1zQ29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb24gPSAnJztcblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLnBhZ2UgPT09IDAgfHxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5wYWdlID09PSB0aGlzLnRvdGFsRG90cyAtIDEpICYmXG4gICAgICAgICAgICAgICAgdGhpcy5pc0NpcmN1bGFyKClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNDb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gdGhpcy5pc1ZlcnRpY2FsKClcbiAgICAgICAgICAgICAgICAgICAgPyBgdHJhbnNsYXRlM2QoMCwgJHt0aGlzLnN0YXRlLnRvdGFsU2hpZnRlZEl0ZW1zICpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKDEwMCAvIHRoaXMuc3RhdGUubnVtVmlzaWJsZSl9JSwgMClgXG4gICAgICAgICAgICAgICAgICAgIDogYHRyYW5zbGF0ZTNkKCR7dGhpcy5zdGF0ZS50b3RhbFNoaWZ0ZWRJdGVtcyAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICgxMDAgLyB0aGlzLnN0YXRlLm51bVZpc2libGUpfSUsIDAsIDApYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uVG91Y2hTdGFydChlKSB7XG4gICAgICAgIGxldCB0b3VjaG9iaiA9IGUuY2hhbmdlZFRvdWNoZXNbMF07XG5cbiAgICAgICAgdGhpcy5zdGFydFBvcyA9IHtcbiAgICAgICAgICAgIHg6IHRvdWNob2JqLnBhZ2VYLFxuICAgICAgICAgICAgeTogdG91Y2hvYmoucGFnZVksXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgb25Ub3VjaE1vdmUoZSkge1xuICAgICAgICBpZiAoZS5jYW5jZWxhYmxlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblRvdWNoRW5kKGUpIHtcbiAgICAgICAgbGV0IHRvdWNob2JqID0gZS5jaGFuZ2VkVG91Y2hlc1swXTtcblxuICAgICAgICBpZiAodGhpcy5pc1ZlcnRpY2FsKCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlUGFnZU9uVG91Y2goZSwgdG91Y2hvYmoucGFnZVkgLSB0aGlzLnN0YXJ0UG9zLnkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VQYWdlT25Ub3VjaChlLCB0b3VjaG9iai5wYWdlWCAtIHRoaXMuc3RhcnRQb3MueCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGFuZ2VQYWdlT25Ub3VjaChlLCBkaWZmKSB7XG4gICAgICAgIGlmIChkaWZmIDwgMCkge1xuICAgICAgICAgICAgLy8gbGVmdFxuICAgICAgICAgICAgdGhpcy5uYXZGb3J3YXJkKGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gcmlnaHRcbiAgICAgICAgICAgIHRoaXMubmF2QmFja3dhcmQoZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBiaW5kRG9jdW1lbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGlmICghdGhpcy5kb2N1bWVudFJlc2l6ZUxpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLmRvY3VtZW50UmVzaXplTGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVQb3NpdGlvbigpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuZG9jdW1lbnRSZXNpemVMaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1bmJpbmREb2N1bWVudExpc3RlbmVycygpIHtcbiAgICAgICAgaWYgKHRoaXMuZG9jdW1lbnRSZXNpemVMaXN0ZW5lcikge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuZG9jdW1lbnRSZXNpemVMaXN0ZW5lcik7XG4gICAgICAgICAgICB0aGlzLmRvY3VtZW50UmVzaXplTGlzdGVuZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNWZXJ0aWNhbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMub3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCc7XG4gICAgfVxuXG4gICAgaXNDaXJjdWxhcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIHRoaXMuY2lyY3VsYXIgJiYgdGhpcy5wcm9wcy52YWx1ZS5sZW5ndGggPj0gdGhpcy5zdGF0ZS5udW1WaXNpYmxlXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0UGFnZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMub25QYWdlQ2hhbmdlID8gdGhpcy5wcm9wcy5wYWdlIDogdGhpcy5zdGF0ZS5wYWdlO1xuICAgIH1cblxuICAgIGdldFRvdGFsRG90cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMudmFsdWVcbiAgICAgICAgICAgID8gTWF0aC5jZWlsKFxuICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMudmFsdWUubGVuZ3RoIC0gdGhpcy5zdGF0ZS5udW1WaXNpYmxlKSAvXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5udW1TY3JvbGxcbiAgICAgICAgICAgICAgKSArIDFcbiAgICAgICAgICAgIDogMDtcbiAgICB9XG5cbiAgICBpc0F1dG9wbGF5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5hdXRvcGxheUludGVydmFsICYmIHRoaXMuYWxsb3dBdXRvcGxheTtcbiAgICB9XG5cbiAgICBzdGFydEF1dG9wbGF5KCkge1xuICAgICAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUucGFnZSA9PT0gdGhpcy50b3RhbERvdHMgLSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGVwKC0xLCAwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGVwKC0xLCB0aGlzLnN0YXRlLnBhZ2UgKyAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcy5wcm9wcy5hdXRvcGxheUludGVydmFsKTtcbiAgICB9XG5cbiAgICBzdG9wQXV0b3BsYXkoKSB7XG4gICAgICAgIGlmICh0aGlzLmludGVydmFsKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlU3R5bGUoKSB7XG4gICAgICAgIGlmICghdGhpcy5jYXJvdXNlbFN0eWxlKSB7XG4gICAgICAgICAgICB0aGlzLmNhcm91c2VsU3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICAgICAgdGhpcy5jYXJvdXNlbFN0eWxlLnR5cGUgPSAndGV4dC9jc3MnO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmNhcm91c2VsU3R5bGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICMke3RoaXMuaWR9IC5wLWNhcm91c2VsLWl0ZW0ge1xuICAgICAgICAgICAgICAgIGZsZXg6IDEgMCAkezEwMCAvIHRoaXMuc3RhdGUubnVtVmlzaWJsZX0lXG4gICAgICAgICAgICB9XG4gICAgICAgIGA7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMucmVzcG9uc2l2ZU9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMucmVzcG9uc2l2ZU9wdGlvbnMgPSBbLi4udGhpcy5wcm9wcy5yZXNwb25zaXZlT3B0aW9uc107XG4gICAgICAgICAgICB0aGlzLnJlc3BvbnNpdmVPcHRpb25zLnNvcnQoKGRhdGExLCBkYXRhMikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlMSA9IGRhdGExLmJyZWFrcG9pbnQ7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUyID0gZGF0YTIuYnJlYWtwb2ludDtcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcblxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZTEgPT0gbnVsbCAmJiB2YWx1ZTIgIT0gbnVsbCkgcmVzdWx0ID0gLTE7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUxICE9IG51bGwgJiYgdmFsdWUyID09IG51bGwpIHJlc3VsdCA9IDE7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUxID09IG51bGwgJiYgdmFsdWUyID09IG51bGwpIHJlc3VsdCA9IDA7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiB2YWx1ZTEgPT09ICdzdHJpbmcnICYmXG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiB2YWx1ZTIgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB2YWx1ZTEubG9jYWxlQ29tcGFyZSh2YWx1ZTIsIHVuZGVmaW5lZCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgbnVtZXJpYzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZWxzZSByZXN1bHQgPSB2YWx1ZTEgPCB2YWx1ZTIgPyAtMSA6IHZhbHVlMSA+IHZhbHVlMiA/IDEgOiAwO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xICogcmVzdWx0O1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yZXNwb25zaXZlT3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCByZXMgPSB0aGlzLnJlc3BvbnNpdmVPcHRpb25zW2ldO1xuXG4gICAgICAgICAgICAgICAgaW5uZXJIVE1MICs9IGBcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtyZXMuYnJlYWtwb2ludH0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICMke3RoaXMuaWR9IC5wLWNhcm91c2VsLWl0ZW0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDEgMCAkezEwMCAvIHJlcy5udW1WaXNpYmxlfSVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYXJvdXNlbFN0eWxlLmlubmVySFRNTCA9IGlubmVySFRNTDtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVTdHlsZSgpO1xuICAgICAgICB0aGlzLmNhbGN1bGF0ZVBvc2l0aW9uKCk7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMucmVzcG9uc2l2ZU9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuYmluZERvY3VtZW50TGlzdGVuZXJzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICAgICAgY29uc3QgaXNDaXJjdWxhciA9IHRoaXMuaXNDaXJjdWxhcigpO1xuICAgICAgICBsZXQgc3RhdGVDaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgIGxldCB0b3RhbFNoaWZ0ZWRJdGVtcyA9IHRoaXMuc3RhdGUudG90YWxTaGlmdGVkSXRlbXM7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYXV0b3BsYXlJbnRlcnZhbCkge1xuICAgICAgICAgICAgdGhpcy5zdG9wQXV0b3BsYXkoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHByZXZTdGF0ZS5udW1TY3JvbGwgIT09IHRoaXMuc3RhdGUubnVtU2Nyb2xsIHx8XG4gICAgICAgICAgICBwcmV2U3RhdGUubnVtVmlzaWJsZSAhPT0gdGhpcy5zdGF0ZS5udW1WaXNpYmxlIHx8XG4gICAgICAgICAgICBwcmV2UHJvcHMudmFsdWUubGVuZ3RoICE9PSB0aGlzLnByb3BzLnZhbHVlLmxlbmd0aFxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMucmVtYWluaW5nSXRlbXMgPVxuICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLnZhbHVlLmxlbmd0aCAtIHRoaXMuc3RhdGUubnVtVmlzaWJsZSkgJVxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubnVtU2Nyb2xsO1xuXG4gICAgICAgICAgICBsZXQgcGFnZSA9IHRoaXMuZ2V0UGFnZSgpO1xuICAgICAgICAgICAgaWYgKHRoaXMudG90YWxEb3RzICE9PSAwICYmIHBhZ2UgPj0gdGhpcy50b3RhbERvdHMpIHtcbiAgICAgICAgICAgICAgICBwYWdlID0gdGhpcy50b3RhbERvdHMgLSAxO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub25QYWdlQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25QYWdlQ2hhbmdlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3RhdGVDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdG90YWxTaGlmdGVkSXRlbXMgPSBwYWdlICogdGhpcy5zdGF0ZS5udW1TY3JvbGwgKiAtMTtcbiAgICAgICAgICAgIGlmIChpc0NpcmN1bGFyKSB7XG4gICAgICAgICAgICAgICAgdG90YWxTaGlmdGVkSXRlbXMgLT0gdGhpcy5zdGF0ZS5udW1WaXNpYmxlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocGFnZSA9PT0gdGhpcy50b3RhbERvdHMgLSAxICYmIHRoaXMucmVtYWluaW5nSXRlbXMgPiAwKSB7XG4gICAgICAgICAgICAgICAgdG90YWxTaGlmdGVkSXRlbXMgKz1cbiAgICAgICAgICAgICAgICAgICAgLTEgKiB0aGlzLnJlbWFpbmluZ0l0ZW1zICsgdGhpcy5zdGF0ZS5udW1TY3JvbGw7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1JlbWFpbmluZ0l0ZW1zQWRkZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzUmVtYWluaW5nSXRlbXNBZGRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodG90YWxTaGlmdGVkSXRlbXMgIT09IHRoaXMuc3RhdGUudG90YWxTaGlmdGVkSXRlbXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgdG90YWxTaGlmdGVkSXRlbXMsXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBzdGF0ZUNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLml0ZW1zQ29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IHRoaXMuaXNWZXJ0aWNhbCgpXG4gICAgICAgICAgICAgICAgPyBgdHJhbnNsYXRlM2QoMCwgJHt0b3RhbFNoaWZ0ZWRJdGVtcyAqXG4gICAgICAgICAgICAgICAgICAgICAgKDEwMCAvIHRoaXMuc3RhdGUubnVtVmlzaWJsZSl9JSwgMClgXG4gICAgICAgICAgICAgICAgOiBgdHJhbnNsYXRlM2QoJHt0b3RhbFNoaWZ0ZWRJdGVtcyAqXG4gICAgICAgICAgICAgICAgICAgICAgKDEwMCAvIHRoaXMuc3RhdGUubnVtVmlzaWJsZSl9JSwgMCwgMClgO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzQ2lyY3VsYXIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnBhZ2UgPT09IDApIHtcbiAgICAgICAgICAgICAgICB0b3RhbFNoaWZ0ZWRJdGVtcyA9IC0xICogdGhpcy5zdGF0ZS5udW1WaXNpYmxlO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0b3RhbFNoaWZ0ZWRJdGVtcyA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRvdGFsU2hpZnRlZEl0ZW1zID0gLTEgKiB0aGlzLnByb3BzLnZhbHVlLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yZW1haW5pbmdJdGVtcyA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1JlbWFpbmluZ0l0ZW1zQWRkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRvdGFsU2hpZnRlZEl0ZW1zICE9PSB0aGlzLnN0YXRlLnRvdGFsU2hpZnRlZEl0ZW1zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHRvdGFsU2hpZnRlZEl0ZW1zLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHN0YXRlQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXN0YXRlQ2hhbmdlZCAmJiB0aGlzLmlzQXV0b3BsYXkoKSkge1xuICAgICAgICAgICAgdGhpcy5zdGFydEF1dG9wbGF5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMucmVzcG9uc2l2ZU9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMudW5iaW5kRG9jdW1lbnRMaXN0ZW5lcnMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmF1dG9wbGF5SW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcEF1dG9wbGF5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXJJdGVtcygpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMudmFsdWUgJiYgdGhpcy5wcm9wcy52YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGlzQ2lyY3VsYXIgPSB0aGlzLmlzQ2lyY3VsYXIoKTtcbiAgICAgICAgICAgIGxldCBjbG9uZWRJdGVtc0ZvclN0YXJ0aW5nID0gbnVsbDtcbiAgICAgICAgICAgIGxldCBjbG9uZWRJdGVtc0ZvckZpbmlzaGluZyA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmIChpc0NpcmN1bGFyKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNsb25lZEVsZW1lbnRzID0gbnVsbDtcblxuICAgICAgICAgICAgICAgIGNsb25lZEVsZW1lbnRzID0gdGhpcy5wcm9wcy52YWx1ZS5zbGljZShcbiAgICAgICAgICAgICAgICAgICAgLTEgKiB0aGlzLnN0YXRlLm51bVZpc2libGVcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGNsb25lZEl0ZW1zRm9yU3RhcnRpbmcgPSBjbG9uZWRFbGVtZW50cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpc0FjdGl2ZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50b3RhbFNoaWZ0ZWRJdGVtcyAqIC0xID09PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudmFsdWUubGVuZ3RoICsgdGhpcy5zdGF0ZS5udW1WaXNpYmxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSBpbmRleCA9PT0gMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZCA9IGluZGV4ID09PSBjbG9uZWRFbGVtZW50cy5sZW5ndGggLSAxO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleCArICdfc2Nsb25lZCd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC1jYXJvdXNlbC1pdGVtLWNsb25lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU9e3RoaXMucHJvcHMuaXRlbVRlbXBsYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXtpc0FjdGl2ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydD17c3RhcnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kPXtlbmR9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgY2xvbmVkRWxlbWVudHMgPSB0aGlzLnByb3BzLnZhbHVlLnNsaWNlKFxuICAgICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm51bVZpc2libGVcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGNsb25lZEl0ZW1zRm9yRmluaXNoaW5nID0gY2xvbmVkRWxlbWVudHMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaXNBY3RpdmUgPSB0aGlzLnN0YXRlLnRvdGFsU2hpZnRlZEl0ZW1zID09PSAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSBpbmRleCA9PT0gMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZCA9IGluZGV4ID09PSBjbG9uZWRFbGVtZW50cy5sZW5ndGggLSAxO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleCArICdfZmNsb25lZCd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC1jYXJvdXNlbC1pdGVtLWNsb25lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU9e3RoaXMucHJvcHMuaXRlbVRlbXBsYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXtpc0FjdGl2ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydD17c3RhcnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kPXtlbmR9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgaXRlbXMgPSB0aGlzLnByb3BzLnZhbHVlLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZmlyc3RJbmRleCA9IGlzQ2lyY3VsYXJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gLTEgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS50b3RhbFNoaWZ0ZWRJdGVtcyArIHRoaXMuc3RhdGUubnVtVmlzaWJsZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5zdGF0ZS50b3RhbFNoaWZ0ZWRJdGVtcyAqIC0xLFxuICAgICAgICAgICAgICAgICAgICBsYXN0SW5kZXggPSBmaXJzdEluZGV4ICsgdGhpcy5zdGF0ZS5udW1WaXNpYmxlIC0gMSxcbiAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmUgPSBmaXJzdEluZGV4IDw9IGluZGV4ICYmIGxhc3RJbmRleCA+PSBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSBmaXJzdEluZGV4ID09PSBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgZW5kID0gbGFzdEluZGV4ID09PSBpbmRleDtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU9e3RoaXMucHJvcHMuaXRlbVRlbXBsYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbT17aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17aXNBY3RpdmV9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydD17c3RhcnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQ9e2VuZH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICB7Y2xvbmVkSXRlbXNGb3JTdGFydGluZ31cbiAgICAgICAgICAgICAgICAgICAge2l0ZW1zfVxuICAgICAgICAgICAgICAgICAgICB7Y2xvbmVkSXRlbXNGb3JGaW5pc2hpbmd9XG4gICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXJIZWFkZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmhlYWRlcikge1xuICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwicC1jYXJvdXNlbC1oZWFkZXJcIj57dGhpcy5wcm9wcy5oZWFkZXJ9PC9kaXY+O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmVuZGVyRm9vdGVyKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5mb290ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInAtY2Fyb3VzZWwtZm9vdGVyXCI+e3RoaXMucHJvcHMuZm9vdGVyfTwvZGl2PjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJlbmRlckNvbnRlbnQoKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5yZW5kZXJJdGVtcygpO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmlzVmVydGljYWwoKVxuICAgICAgICAgICAgPyB0aGlzLnByb3BzLnZlcnRpY2FsVmlld1BvcnRIZWlnaHRcbiAgICAgICAgICAgIDogJ2F1dG8nO1xuICAgICAgICBjb25zdCBiYWNrd2FyZE5hdmlnYXRvciA9IHRoaXMucmVuZGVyQmFja3dhcmROYXZpZ2F0b3IoKTtcbiAgICAgICAgY29uc3QgZm9yd2FyZE5hdmlnYXRvciA9IHRoaXMucmVuZGVyRm9yd2FyZE5hdmlnYXRvcigpO1xuICAgICAgICBjb25zdCBjb250YWluZXJDbGFzc05hbWUgPSBjbGFzc05hbWVzKFxuICAgICAgICAgICAgJ3AtY2Fyb3VzZWwtY29udGFpbmVyJyxcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY29udGFpbmVyQ2xhc3NOYW1lXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb250YWluZXJDbGFzc05hbWV9PlxuICAgICAgICAgICAgICAgIHtiYWNrd2FyZE5hdmlnYXRvcn1cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtY2Fyb3VzZWwtaXRlbXMtY29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7aGVpZ2h0OiBoZWlnaHR9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtlbCA9PiAodGhpcy5pdGVtc0NvbnRhaW5lciA9IGVsKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtY2Fyb3VzZWwtaXRlbXMtY29udGFpbmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uVHJhbnNpdGlvbkVuZD17dGhpcy5vblRyYW5zaXRpb25FbmR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvblRvdWNoU3RhcnQ9e3RoaXMub25Ub3VjaFN0YXJ0fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Ub3VjaE1vdmU9e3RoaXMub25Ub3VjaE1vdmV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvblRvdWNoRW5kPXt0aGlzLm9uVG91Y2hFbmR9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtc31cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge2ZvcndhcmROYXZpZ2F0b3J9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXJCYWNrd2FyZE5hdmlnYXRvcigpIHtcbiAgICAgICAgbGV0IGlzRGlzYWJsZWQgPVxuICAgICAgICAgICAgKCF0aGlzLmNpcmN1bGFyIHx8XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy52YWx1ZS5sZW5ndGggPCB0aGlzLnN0YXRlLm51bVZpc2libGUpICYmXG4gICAgICAgICAgICB0aGlzLmdldFBhZ2UoKSA9PT0gMDtcbiAgICAgICAgbGV0IGJ1dHRvbkNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoJ3AtY2Fyb3VzZWwtcHJldiBwLWJ1dHRvbicsIHtcbiAgICAgICAgICAgICAgICAncC1kaXNhYmxlZCc6IGlzRGlzYWJsZWQsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGljb25DbGFzc05hbWUgPSBjbGFzc05hbWVzKCdwLWNhcm91c2VsLXByZXYtaWNvbiBwaScsIHtcbiAgICAgICAgICAgICAgICAncGktY2hldnJvbi1sZWZ0JzogIXRoaXMuaXNWZXJ0aWNhbCgpLFxuICAgICAgICAgICAgICAgICdwaS1jaGV2cm9uLXVwJzogdGhpcy5pc1ZlcnRpY2FsKCksXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YnV0dG9uQ2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMubmF2QmFja3dhcmR9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzRGlzYWJsZWR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtpY29uQ2xhc3NOYW1lfT48L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXJGb3J3YXJkTmF2aWdhdG9yKCkge1xuICAgICAgICBsZXQgaXNEaXNhYmxlZCA9XG4gICAgICAgICAgICAoIXRoaXMuY2lyY3VsYXIgfHxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnZhbHVlLmxlbmd0aCA8IHRoaXMuc3RhdGUubnVtVmlzaWJsZSkgJiZcbiAgICAgICAgICAgICh0aGlzLmdldFBhZ2UoKSA9PT0gdGhpcy50b3RhbERvdHMgLSAxIHx8IHRoaXMudG90YWxEb3RzID09PSAwKTtcbiAgICAgICAgbGV0IGJ1dHRvbkNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoJ3AtY2Fyb3VzZWwtbmV4dCBwLWJ1dHRvbicsIHtcbiAgICAgICAgICAgICAgICAncC1kaXNhYmxlZCc6IGlzRGlzYWJsZWQsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGljb25DbGFzc05hbWUgPSBjbGFzc05hbWVzKCdwLWNhcm91c2VsLXByZXYtaWNvbiBwaScsIHtcbiAgICAgICAgICAgICAgICAncGktY2hldnJvbi1yaWdodCc6ICF0aGlzLmlzVmVydGljYWwoKSxcbiAgICAgICAgICAgICAgICAncGktY2hldnJvbi1kb3duJzogdGhpcy5pc1ZlcnRpY2FsKCksXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YnV0dG9uQ2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMubmF2Rm9yd2FyZH1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNEaXNhYmxlZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2ljb25DbGFzc05hbWV9Pjwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlckRvdChpbmRleCkge1xuICAgICAgICBsZXQgaXNBY3RpdmUgPSB0aGlzLmdldFBhZ2UoKSA9PT0gaW5kZXgsXG4gICAgICAgICAgICBkb3RJdGVtQ2xhc3NOYW1lID0gY2xhc3NOYW1lcygncC1jYXJvdXNlbC1kb3QtaXRlbScsIHtcbiAgICAgICAgICAgICAgICAncC1oaWdobGlnaHQnOiBpc0FjdGl2ZSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgaWNvbkNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoJ3AtY2Fyb3VzZWwtZG90LWljb24gcGknLCB7XG4gICAgICAgICAgICAgICAgJ3BpLWNpcmNsZS1vbic6IGlzQWN0aXZlLFxuICAgICAgICAgICAgICAgICdwaS1jaXJjbGUtb2ZmJzogIWlzQWN0aXZlLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2RvdEl0ZW1DbGFzc05hbWV9IGtleT17J3AtY2Fyb3VzZWwtZG90LScgKyBpbmRleH0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHRoaXMub25Eb3RDbGljayhlLCBpbmRleCl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2ljb25DbGFzc05hbWV9Pjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyRG90cygpIHtcbiAgICAgICAgY29uc3QgZG90c0NvbnRhaW5lckNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoXG4gICAgICAgICAgICAncC1jYXJvdXNlbC1kb3RzLWNvbnRhaW5lciBwLXJlc2V0JyxcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZG90c0NvbnRhaW5lckNsYXNzTmFtZVxuICAgICAgICApO1xuICAgICAgICBsZXQgZG90cyA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50b3RhbERvdHM7IGkrKykge1xuICAgICAgICAgICAgZG90cy5wdXNoKHRoaXMucmVuZGVyRG90KGkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiA8dWwgY2xhc3NOYW1lPXtkb3RzQ29udGFpbmVyQ2xhc3NOYW1lfT57ZG90c308L3VsPjtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoXG4gICAgICAgICAgICAncC1jYXJvdXNlbCBwLWNvbXBvbmVudCcsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ3AtY2Fyb3VzZWwtdmVydGljYWwnOiB0aGlzLmlzVmVydGljYWwoKSxcbiAgICAgICAgICAgICAgICAncC1jYXJvdXNlbC1ob3Jpem9udGFsJzogIXRoaXMuaXNWZXJ0aWNhbCgpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2xhc3NOYW1lXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRDbGFzc05hbWUgPSBjbGFzc05hbWVzKFxuICAgICAgICAgICAgJ3AtY2Fyb3VzZWwtY29udGVudCcsXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNvbnRlbnRDbGFzc05hbWVcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLnRvdGFsRG90cyA9IHRoaXMuZ2V0VG90YWxEb3RzKCk7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLnJlbmRlckNvbnRlbnQoKTtcbiAgICAgICAgY29uc3QgZG90cyA9IHRoaXMucmVuZGVyRG90cygpO1xuICAgICAgICBjb25zdCBoZWFkZXIgPSB0aGlzLnJlbmRlckhlYWRlcigpO1xuICAgICAgICBjb25zdCBmb290ZXIgPSB0aGlzLnJlbmRlckZvb3RlcigpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPXt0aGlzLmlkfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxuICAgICAgICAgICAgICAgIHtoZWFkZXJ9XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbnRlbnRDbGFzc05hbWV9PlxuICAgICAgICAgICAgICAgICAgICB7Y29udGVudH1cbiAgICAgICAgICAgICAgICAgICAge2RvdHN9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge2Zvb3Rlcn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuQ2Fyb3VzZWxJdGVtLmRlZmF1bHRQcm9wcyA9IHtcbiAgICB0ZW1wbGF0ZTogbnVsbCxcbiAgICBpdGVtOiBudWxsLFxuICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgc3RhcnQ6IGZhbHNlLFxuICAgIGVuZDogZmFsc2UsXG4gICAgY2xhc3NOYW1lOiBudWxsLFxufTtcblxuQ2Fyb3VzZWxJdGVtLnByb3BUeXBlcyA9IHtcbiAgICB0ZW1wbGF0ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaXRlbTogUHJvcFR5cGVzLmFueSxcbiAgICBhY3RpdmU6IFByb3BUeXBlcy5ib29sLFxuICAgIHN0YXJ0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBlbmQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbkNhcm91c2VsLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBpZDogbnVsbCxcbiAgICB2YWx1ZTogbnVsbCxcbiAgICBwYWdlOiAwLFxuICAgIGhlYWRlcjogbnVsbCxcbiAgICBmb290ZXI6IG51bGwsXG4gICAgc3R5bGU6IG51bGwsXG4gICAgY2xhc3NOYW1lOiBudWxsLFxuICAgIGl0ZW1UZW1wbGF0ZTogbnVsbCxcbiAgICBjaXJjdWxhcjogZmFsc2UsXG4gICAgYXV0b3BsYXlJbnRlcnZhbDogMCxcbiAgICBudW1WaXNpYmxlOiAxLFxuICAgIG51bVNjcm9sbDogMSxcbiAgICByZXNwb25zaXZlT3B0aW9uczogbnVsbCxcbiAgICBvcmllbnRhdGlvbjogJ2hvcml6b250YWwnLFxuICAgIHZlcnRpY2FsVmlld1BvcnRIZWlnaHQ6ICczMDBweCcsXG4gICAgY29udGVudENsYXNzTmFtZTogbnVsbCxcbiAgICBjb250YWluZXJDbGFzc05hbWU6IG51bGwsXG4gICAgZG90c0NvbnRhaW5lckNsYXNzTmFtZTogbnVsbCxcbiAgICBvblBhZ2VDaGFuZ2U6IG51bGwsXG59O1xuXG5DYXJvdXNlbC5wcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogVW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIGVsZW1lbnQuXG4gICAgICovXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2Ygb2JqZWN0cyB0byBkaXNwbGF5LlxuICAgICAqL1xuICAgIHZhbHVlOiBQcm9wVHlwZXMuYW55LFxuICAgIC8qKlxuICAgICAqIEluZGV4IG9mIHRoZSBmaXJzdCBpdGVtLlxuICAgICAqL1xuICAgIHBhZ2U6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgLyoqXG4gICAgICogTGFiZWwgb2YgaGVhZGVyLlxuICAgICAqL1xuICAgIGhlYWRlcjogUHJvcFR5cGVzLmFueSxcbiAgICAvKipcbiAgICAgKiBMYWJlbCBvZiBmb290ZXIuXG4gICAgICovXG4gICAgZm9vdGVyOiBQcm9wVHlwZXMuYW55LFxuXG4gICAgLyoqXG4gICAgICogSW5saW5lIHN0eWxlIG9mIHRoZSBjb21wb25lbnQuXG4gICAgICovXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgLyoqXG4gICAgICogU3R5bGUgY2xhc3Mgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCBnZXRzIGFuIGl0ZW0gaW4gdGhlIHZhbHVlIGFuZCByZXR1cm5zIHRoZSBjb250ZW50IGZvciBpdC5cbiAgICAgKi9cbiAgICBpdGVtVGVtcGxhdGU6IFByb3BUeXBlcy5hbnksXG4gICAgLyoqXG4gICAgICogRGVmaW5lcyBpZiBzY3JvbGxpbmcgd291bGQgYmUgaW5maW5pdGUuXG4gICAgICovXG4gICAgY2lyY3VsYXI6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIFRpbWUgaW4gbWlsbGlzZWNvbmRzIHRvIHNjcm9sbCBpdGVtcyBhdXRvbWF0aWNhbGx5LlxuICAgICAqL1xuICAgIGF1dG9wbGF5SW50ZXJ2YWw6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgLyoqXG4gICAgICogXHROdW1iZXIgb2YgaXRlbXMgcGVyIHBhZ2UuXG4gICAgICovXG4gICAgbnVtVmlzaWJsZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICAvKipcbiAgICAgKiBOdW1iZXIgb2YgaXRlbXMgdG8gc2Nyb2xsLlxuICAgICAqL1xuICAgIG51bVNjcm9sbDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAvKipcbiAgICAgKiBcdEFuIGFycmF5IG9mIG9wdGlvbnMgZm9yIHJlc3BvbnNpdmUgZGVzaWduLlxuICAgICAqL1xuICAgIHJlc3BvbnNpdmVPcHRpb25zOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgLyoqXG4gICAgICogU3BlY2lmaWVzIHRoZSBsYXlvdXQgb2YgdGhlIGNvbXBvbmVudCwgdmFsaWQgdmFsdWVzIGFyZSBcImhvcml6b250YWxcIiBhbmQgXCJ2ZXJ0aWNhbFwiLlxuICAgICAqL1xuICAgIG9yaWVudGF0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqIFx0SGVpZ2h0IG9mIHRoZSB2aWV3cG9ydCBpbiB2ZXJ0aWNhbCBsYXlvdXQuXG4gICAgICovXG4gICAgdmVydGljYWxWaWV3UG9ydEhlaWdodDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKipcbiAgICAgKiBcdFN0eWxlIGNsYXNzIG9mIG1haW4gY29udGVudC5cbiAgICAgKi9cbiAgICBjb250ZW50Q2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqIFx0U3R5bGUgY2xhc3Mgb2YgdGhlIHZpZXdwb3J0IGNvbnRhaW5lci5cbiAgICAgKi9cbiAgICBjb250YWluZXJDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICogXHRTdHlsZSBjbGFzcyBvZiB0aGUgcGFnaW5hdG9yIGl0ZW1zLlxuICAgICAqL1xuICAgIGRvdHNDb250YWluZXJDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICogXHRDYWxsYmFjayB0byBpbnZva2UgYWZ0ZXIgc2Nyb2xsLlxuICAgICAqL1xuICAgIG9uUGFnZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG59O1xuIiwidmFyIGxhc3RJZCA9IDA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwcmVmaXggPSAncHJfaWRfJykge1xuICAgIGxhc3RJZCsrO1xuICAgIHJldHVybiBgJHtwcmVmaXh9JHtsYXN0SWR9YDtcbn0iXSwic291cmNlUm9vdCI6IiJ9