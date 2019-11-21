webpackHotUpdateextra_dash_ui_components("main",{

/***/ "./src/lib/components/ListBox/ListBoxComponent.js":
/*!********************************************************!*\
  !*** ./src/lib/components/ListBox/ListBoxComponent.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ListBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListBox */ "./src/lib/components/ListBox/ListBox.js");
/* harmony import */ var _ListBox_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ListBox.css */ "./src/lib/components/ListBox/ListBox.css");
/* harmony import */ var _ListBox_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ListBox_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _theme_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme.css */ "./src/lib/components/ListBox/theme.css");
/* harmony import */ var _theme_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_theme_css__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var ListBoxComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(ListBoxComponent, _Component);

  function ListBoxComponent() {
    var _this;

    _classCallCheck(this, ListBoxComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ListBoxComponent).call(this));
    _this.state = {
      city: null,
      cities: null,
      car: 'BMW'
    };
    return _this;
  }

  _createClass(ListBoxComponent, [{
    key: "sampleTemplate",
    value: function sampleTemplate(option) {
      // const logoPath = '../../../../sample_data/assets/man.jpg';
      var logoPath = 'https://res.cloudinary.com/danuluma/image/upload/v1541124041/hqauvuw88xt5mgntkf8r.png';
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-clearfix"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: logoPath,
        style: {
          display: 'inline-block',
          margin: '5px 0 0 5px',
          width: 48
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          fontSize: '1em',
          "float": 'right',
          margin: '1em .5em 0 0'
        }
      }, option.label));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var cities = [{
        name: 'New York',
        code: 'NY'
      }, {
        name: 'Rome',
        code: 'RM'
      }, {
        name: 'London',
        code: 'LDN'
      }, {
        name: 'Istanbul',
        code: 'IST'
      }, {
        name: 'Paris',
        code: 'PRS'
      }];
      var cars = [{
        label: 'Audi',
        value: 'Audi'
      }, {
        label: 'BMW',
        value: 'BMW'
      }, {
        label: 'Fiat',
        value: 'Fiat'
      }, {
        label: 'Honda',
        value: 'Honda'
      }, {
        label: 'Jaguar',
        value: 'Jaguar'
      }, {
        label: 'Mercedes',
        value: 'Mercedes'
      }, {
        label: 'Renault',
        value: 'Renault'
      }, {
        label: 'VW',
        value: 'VW'
      }, {
        label: 'Volvo',
        value: 'Volvo'
      }];
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "content-section implementation"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ListBox__WEBPACK_IMPORTED_MODULE_2__["default"], {
        value: this.state.city,
        options: cities,
        onChange: function onChange(e) {
          return _this2.setState({
            city: e.value
          });
        },
        optionLabel: "name"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Multiple"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ListBox__WEBPACK_IMPORTED_MODULE_2__["default"], {
        value: this.state.cities,
        options: cities,
        onChange: function onChange(e) {
          return _this2.setState({
            cities: e.value
          });
        },
        multiple: true,
        optionLabel: "name"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Advanced"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ListBox__WEBPACK_IMPORTED_MODULE_2__["default"], {
        value: this.state.car,
        filter: true,
        options: cars,
        onChange: function onChange(e) {
          return _this2.setState({
            car: e.value
          });
        },
        itemTemplate: this.sampleTemplate,
        style: {
          width: '15em'
        },
        listStyle: {
          maxHeight: '200px'
        }
      })));
    }
  }]);

  return ListBoxComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

ListBoxComponent.defaultProps = {};
ListBoxComponent.PropTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (ListBoxComponent);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvTGlzdEJveC9MaXN0Qm94Q29tcG9uZW50LmpzIl0sIm5hbWVzIjpbIkxpc3RCb3hDb21wb25lbnQiLCJzdGF0ZSIsImNpdHkiLCJjaXRpZXMiLCJjYXIiLCJvcHRpb24iLCJsb2dvUGF0aCIsImRpc3BsYXkiLCJtYXJnaW4iLCJ3aWR0aCIsImZvbnRTaXplIiwibGFiZWwiLCJuYW1lIiwiY29kZSIsImNhcnMiLCJ2YWx1ZSIsImUiLCJzZXRTdGF0ZSIsInNhbXBsZVRlbXBsYXRlIiwibWF4SGVpZ2h0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwiUHJvcFR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLGdCOzs7OztBQUNGLDhCQUFjO0FBQUE7O0FBQUE7O0FBQ1Y7QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsVUFBSSxFQUFFLElBREc7QUFFVEMsWUFBTSxFQUFFLElBRkM7QUFHVEMsU0FBRyxFQUFFO0FBSEksS0FBYjtBQUZVO0FBT2I7Ozs7bUNBRWNDLE0sRUFBUTtBQUNuQjtBQUNBLFVBQU1DLFFBQVEsR0FDVix1RkFESjtBQUVBLGFBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSTtBQUNJLFdBQUcsRUFBRUEsUUFEVDtBQUVJLGFBQUssRUFBRTtBQUNIQyxpQkFBTyxFQUFFLGNBRE47QUFFSEMsZ0JBQU0sRUFBRSxhQUZMO0FBR0hDLGVBQUssRUFBRTtBQUhKO0FBRlgsUUFESixFQVNJO0FBQ0ksYUFBSyxFQUFFO0FBQ0hDLGtCQUFRLEVBQUUsS0FEUDtBQUVILG1CQUFPLE9BRko7QUFHSEYsZ0JBQU0sRUFBRTtBQUhMO0FBRFgsU0FPS0gsTUFBTSxDQUFDTSxLQVBaLENBVEosQ0FESjtBQXFCSDs7OzZCQUVRO0FBQUE7O0FB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bXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgTGlzdEJveCBmcm9tICcuL0xpc3RCb3gnO1xuaW1wb3J0ICcuL0xpc3RCb3guY3NzJztcbmltcG9ydCAnLi90aGVtZS5jc3MnO1xuXG5jbGFzcyBMaXN0Qm94Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNpdHk6IG51bGwsXG4gICAgICAgICAgICBjaXRpZXM6IG51bGwsXG4gICAgICAgICAgICBjYXI6ICdCTVcnLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHNhbXBsZVRlbXBsYXRlKG9wdGlvbikge1xuICAgICAgICAvLyBjb25zdCBsb2dvUGF0aCA9ICcuLi8uLi8uLi8uLi9zYW1wbGVfZGF0YS9hc3NldHMvbWFuLmpwZyc7XG4gICAgICAgIGNvbnN0IGxvZ29QYXRoID1cbiAgICAgICAgICAgICdodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kYW51bHVtYS9pbWFnZS91cGxvYWQvdjE1NDExMjQwNDEvaHFhdXZ1dzg4eHQ1bWdudGtmOHIucG5nJztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1jbGVhcmZpeFwiPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtsb2dvUGF0aH1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAnNXB4IDAgMCA1cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ4LFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMWVtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiAncmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAnMWVtIC41ZW0gMCAwJyxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtvcHRpb24ubGFiZWx9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBjaXRpZXMgPSBbXG4gICAgICAgICAgICB7bmFtZTogJ05ldyBZb3JrJywgY29kZTogJ05ZJ30sXG4gICAgICAgICAgICB7bmFtZTogJ1JvbWUnLCBjb2RlOiAnUk0nfSxcbiAgICAgICAgICAgIHtuYW1lOiAnTG9uZG9uJywgY29kZTogJ0xETid9LFxuICAgICAgICAgICAge25hbWU6ICdJc3RhbmJ1bCcsIGNvZGU6ICdJU1QnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnUGFyaXMnLCBjb2RlOiAnUFJTJ30sXG4gICAgICAgIF07XG5cbiAgICAgICAgY29uc3QgY2FycyA9IFtcbiAgICAgICAgICAgIHtsYWJlbDogJ0F1ZGknLCB2YWx1ZTogJ0F1ZGknfSxcbiAgICAgICAgICAgIHtsYWJlbDogJ0JNVycsIHZhbHVlOiAnQk1XJ30sXG4gICAgICAgICAgICB7bGFiZWw6ICdGaWF0JywgdmFsdWU6ICdGaWF0J30sXG4gICAgICAgICAgICB7bGFiZWw6ICdIb25kYScsIHZhbHVlOiAnSG9uZGEnfSxcbiAgICAgICAgICAgIHtsYWJlbDogJ0phZ3VhcicsIHZhbHVlOiAnSmFndWFyJ30sXG4gICAgICAgICAgICB7bGFiZWw6ICdNZXJjZWRlcycsIHZhbHVlOiAnTWVyY2VkZXMnfSxcbiAgICAgICAgICAgIHtsYWJlbDogJ1JlbmF1bHQnLCB2YWx1ZTogJ1JlbmF1bHQnfSxcbiAgICAgICAgICAgIHtsYWJlbDogJ1ZXJywgdmFsdWU6ICdWVyd9LFxuICAgICAgICAgICAge2xhYmVsOiAnVm9sdm8nLCB2YWx1ZTogJ1ZvbHZvJ30sXG4gICAgICAgIF07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtc2VjdGlvbiBpbXBsZW1lbnRhdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICB7LyogPGgzIGNsYXNzTmFtZT1cImZpcnN0XCI+U2luZ2xlPC9oMz4gKi99XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Qm94XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jaXR5fVxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17Y2l0aWVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7Y2l0eTogZS52YWx1ZX0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uTGFiZWw9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICA8aDM+TXVsdGlwbGU8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8TGlzdEJveFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY2l0aWVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17Y2l0aWVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7Y2l0aWVzOiBlLnZhbHVlfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbkxhYmVsPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPGgzPkFkdmFuY2VkPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPExpc3RCb3hcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNhcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2NhcnN9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHtjYXI6IGUudmFsdWV9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1UZW1wbGF0ZT17dGhpcy5zYW1wbGVUZW1wbGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6ICcxNWVtJ319XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0U3R5bGU9e3ttYXhIZWlnaHQ6ICcyMDBweCd9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5MaXN0Qm94Q29tcG9uZW50LmRlZmF1bHRQcm9wcyA9e31cbkxpc3RCb3hDb21wb25lbnQuUHJvcFR5cGVzID17fVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0Qm94Q29tcG9uZW50O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==