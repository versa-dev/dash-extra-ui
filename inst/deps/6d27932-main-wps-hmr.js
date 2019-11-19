webpackHotUpdateextra_dash_ui_components("main",{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/lib/components/ListBox/index.css":
false,

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
/* harmony import */ var _ListBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListBox */ "./src/lib/components/ListBox/ListBox.js");
/* harmony import */ var _ListBox_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListBox.css */ "./src/lib/components/ListBox/ListBox.css");
/* harmony import */ var _ListBox_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ListBox_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _theme_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme.css */ "./src/lib/components/ListBox/theme.css");
/* harmony import */ var _theme_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_theme_css__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



 // import './index.css';

 // import {  } from "../../../../sample_data/assets/man.jpg";

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
    key: "carTemplate",
    value: function carTemplate(option) {
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
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "first"
      }, "Single"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ListBox__WEBPACK_IMPORTED_MODULE_1__["default"], {
        value: this.state.city,
        options: cities,
        onChange: function onChange(e) {
          return _this2.setState({
            city: e.value
          });
        },
        optionLabel: "name"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Multiple"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ListBox__WEBPACK_IMPORTED_MODULE_1__["default"], {
        value: this.state.cities,
        options: cities,
        onChange: function onChange(e) {
          return _this2.setState({
            cities: e.value
          });
        },
        multiple: true,
        optionLabel: "name"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Advanced"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ListBox__WEBPACK_IMPORTED_MODULE_1__["default"], {
        value: this.state.car,
        filter: true,
        options: cars,
        onChange: function onChange(e) {
          return _this2.setState({
            car: e.value
          });
        },
        itemTemplate: this.carTemplate,
        style: {
          width: '15em'
        },
        listStyle: {
          maxHeight: '250px'
        }
      })));
    }
  }]);

  return ListBoxComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ListBoxComponent);

/***/ }),

/***/ "./src/lib/components/ListBox/index.css":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvTGlzdEJveC9MaXN0Qm94Q29tcG9uZW50LmpzIl0sIm5hbWVzIjpbIkxpc3RCb3hDb21wb25lbnQiLCJzdGF0ZSIsImNpdHkiLCJjaXRpZXMiLCJjYXIiLCJvcHRpb24iLCJsb2dvUGF0aCIsImRpc3BsYXkiLCJtYXJnaW4iLCJ3aWR0aCIsImZvbnRTaXplIiwibGFiZWwiLCJuYW1lIiwiY29kZSIsImNhcnMiLCJ2YWx1ZSIsImUiLCJzZXRTdGF0ZSIsImNhclRlbXBsYXRlIiwibWF4SGVpZ2h0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7O0NBRUE7O0lBRU1BLGdCOzs7OztBQUNGLDhCQUFjO0FBQUE7O0FBQUE7O0FBQ1Y7QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsVUFBSSxFQUFFLElBREc7QUFFVEMsWUFBTSxFQUFFLElBRkM7QUFHVEMsU0FBRyxFQUFFO0FBSEksS0FBYjtBQUZVO0FBT2I7Ozs7Z0NBRVdDLE0sRUFBUTtBQUNoQjtBQUNBLFVBQU1DLFFBQVEsR0FDVix1RkFESjtBQUVBLGFBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSTtBQUNJLFdBQUcsRUFBRUEsUUFEVDtBQUVJLGFBQUssRUFBRTtBQUNIQyxpQkFBTyxFQUFFLGNBRE47QUFFSEMsZ0JBQU0sRUFBRSxhQUZMO0FBR0hDLGVBQUssRUFBRTtBQUhKO0FBRlgsUUFESixFQVNJO0FBQ0ksYUFBSyxFQUFFO0FBQ0hDLGtCQUFRLEVBQUUsS0FEUDtBQUVILG1CQUFPLE9BRko7QUFHSEYsZ0JBQU0sRUFBRTtBQUhMO0FBRFgsU0FPS0gsTUFBTSxDQUFDTSxLQVBaLENBVEosQ0FESjtBQXFCSDs7OzZCQUVRO0FBQUE7O0FBQ0wsVUFBTVIsTUFBTSxHQUFHLENBQ1g7QUFBQ1MsWUFBSSxFQUFFLFVBQVA7QUFBbUJDLFlBQUksRUFBRTtBQUF6QixPQURXLEVBRVg7QUFBQ0QsWUFBSSxFQUFFLE1BQVA7QUFBZUMsWUFBSSxFQUFFO0FBQXJCLE9BRlcsRUFHWDtBQUFDRCxZQUFJLEVBQUUsUUFBUDtBQUFpQkMsWUFBSSxFQUFFO0FBQXZCLE9BSFcsRUFJWDtBQUFDRCxZQUFJLEVBQUUsVUFBUDtBQUFtQkMsWUFBSSxFQUFFO0FBQXpCLE9BSlcsRUFLWDtBQUFDRCxZQUFJLEVBQUUsT0FBUDtBQUFnQkMsWUFBSSxFQUFFO0FBQXRCLE9BTFcsQ0FBZjtBQVFBLFVBQU1DLElBQUksR0FBRyxDQUNUO0FBQUNILGFBQUssRUFBRSxNQUFSO0FBQWdCSSxhQUFLLEVBQUU7QUFBdkIsT0FEUyxFQUVUO0FBQUNKLGFBQUssRUFBRSxLQUFSO0FBQWVJLGFBQUssRUFBRTtBQUF0QixPQUZTLEVBR1Q7QUFBQ0osYUFBSyxFQUFFLE1BQVI7QUFBZ0JJLGFBQUssRUFBRTtBQUF2QixPQUhTLEVBSVQ7QUFBQ0osYUFBSyxFQUFFLE9BQVI7QUFBaUJJLGFBQUssRUFBRTtBQUF4QixPQUpTLEVBS1Q7QUFBQ0osYUFBSyxFQUFFLFFBQVI7QUFBa0JJLGFBQUssRUFBRTtBQUF6QixPQUxTLEVBTVQ7QUFBQ0osYUFBSyxFQUFFLFVBQVI7QUFBb0JJLGFBQUssRUFBRTtBQUEzQixPQU5TLEVBT1Q7QUFBQ0osYUFBSyxFQUFFLFNBQVI7QUFBbUJJLGFBQUssRUFBRTtBQUExQixPQVBTLEVBUVQ7QUFBQ0osYUFBSyxFQUFFLElBQVI7QUFBY0ksYUFBSyxFQUFFO0FBQXJCLE9BUlMsRUFTVDtBQUFDSixhQUFLLEVBQUUsT0FBUjtBQUFpQkksYUFBSyxFQUFFO0FBQXhCLE9BVFMsQ0FBYjtBQVlBLGFBQ0ksd0VBRUk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSTtBQUFJLGlCQUFTLEVBQUM7QUFBZCxrQkFESixFQUVJLDJEQUFDLGdEQUFEO0FBQ0ksYUFBSyxFQUFFLEtBQUtkLEtBQUwsQ0FBV0MsSUFEdEI7QUFFSSxlQUFPLEVBQUVDLE1BRmI7QUFHSSxnQkFBUSxFQUFFLGtCQUFBYSxDQUFDO0FBQUEsaUJBQUksTUFBSSxDQUFDQyxRQUFMLENBQWM7QUFBQ2YsZ0JBQUksRUFBRWMsQ0FBQyxDQUFDRDtBQUFULFdBQWQsQ0FBSjtBQUFBLFNBSGY7QUFJSSxtQkFBVyxFQUFDO0FBSmhCLFFBRkosRUFTSSxrRkFUSixFQVVJLDJEQUFDLGdEQUFEO0FBQ0ksYUFBSyxFQUFFLEtBQUtkLEtBQUwsQ0FBV0UsTUFEdEI7QUFFSSxlQUFPLEVBQUVBLE1BRmI7QUFHSSxnQkFBUSxFQUFFLGtCQUFBYSxDQUFDO0FBQUEsaUJBQUksTUFBSSxDQUFDQyxRQUFMLENBQWM7QUFBQ2Qsa0JBQU0sRUFBRWEsQ0FBQyxDQUFDRDtBQUFYLFdBQWQsQ0FBSjtBQUFBLFNBSGY7QUFJSSxnQkFBUSxFQUFFLElBSmQ7QUFLSSxtQkFBVyxFQUFDO0FBTGhCLFFBVkosRUFrQkksa0ZBbEJKLEVBbUJJLDJEQUFDLGdEQUFEO0FBQ0ksYUFBSyxFQUFFLEtBQUtkLEtBQUwsQ0FBV0csR0FEdEI7QUFFSSxjQUFNLEVBQUUsSUFGWjtBQUdJLGVBQU8sRUFBRVUsSUFIYjtBQUlJLGdCQUFRLEVBQUUsa0JBQUFFLENBQUM7QUFBQSxpQkFBSSxNQUFJLENBQUNDLFFBQUwsQ0FBYztBQUFDYixlQUFHLEVBQUVZLENBQUMsQ0FBQ0Q7QUFBUixXQUFkLENBQUo7QUFBQSxTQUpmO0FBS0ksb0JBQVksRUFBRSxLQUFLRyxXQUx2QjtBQU1JLGFBQUssRUFBRTtBQUFDVCxlQUFLLEVBQUU7QUFBUixTQU5YO0FBT0ksaUJBQVMsRUFBRTtBQUFDVSxtQkFBUyxFQUFFO0FBQVo7QUFQZixRQW5CSixDQUZKLENBREo7QUFrQ0g7Ozs7RUE1RjBCQywrQzs7QUErRmhCcEIsK0VBQWYsRSIsImZpbGUiOiI2ZDI3OTMyLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpc3RCb3ggZnJvbSAnLi9MaXN0Qm94JztcbmltcG9ydCAnLi9MaXN0Qm94LmNzcyc7XG4vLyBpbXBvcnQgJy4vaW5kZXguY3NzJztcbmltcG9ydCAnLi90aGVtZS5jc3MnO1xuLy8gaW1wb3J0IHsgIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3NhbXBsZV9kYXRhL2Fzc2V0cy9tYW4uanBnXCI7XG5cbmNsYXNzIExpc3RCb3hDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY2l0eTogbnVsbCxcbiAgICAgICAgICAgIGNpdGllczogbnVsbCxcbiAgICAgICAgICAgIGNhcjogJ0JNVycsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY2FyVGVtcGxhdGUob3B0aW9uKSB7XG4gICAgICAgIC8vIGNvbnN0IGxvZ29QYXRoID0gJy4uLy4uLy4uLy4uL3NhbXBsZV9kYXRhL2Fzc2V0cy9tYW4uanBnJztcbiAgICAgICAgY29uc3QgbG9nb1BhdGggPVxuICAgICAgICAgICAgJ2h0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RhbnVsdW1hL2ltYWdlL3VwbG9hZC92MTU0MTEyNDA0MS9ocWF1dnV3ODh4dDVtZ250a2Y4ci5wbmcnO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWNsZWFyZml4XCI+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9e2xvZ29QYXRofVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICc1cHggMCAwIDVweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDgsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxZW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICcxZW0gLjVlbSAwIDAnLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge29wdGlvbi5sYWJlbH1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGNpdGllcyA9IFtcbiAgICAgICAgICAgIHtuYW1lOiAnTmV3IFlvcmsnLCBjb2RlOiAnTlknfSxcbiAgICAgICAgICAgIHtuYW1lOiAnUm9tZScsIGNvZGU6ICdSTSd9LFxuICAgICAgICAgICAge25hbWU6ICdMb25kb24nLCBjb2RlOiAnTEROJ30sXG4gICAgICAgICAgICB7bmFtZTogJ0lzdGFuYnVsJywgY29kZTogJ0lTVCd9LFxuICAgICAgICAgICAge25hbWU6ICdQYXJpcycsIGNvZGU6ICdQUlMnfSxcbiAgICAgICAgXTtcblxuICAgICAgICBjb25zdCBjYXJzID0gW1xuICAgICAgICAgICAge2xhYmVsOiAnQXVkaScsIHZhbHVlOiAnQXVkaSd9LFxuICAgICAgICAgICAge2xhYmVsOiAnQk1XJywgdmFsdWU6ICdCTVcnfSxcbiAgICAgICAgICAgIHtsYWJlbDogJ0ZpYXQnLCB2YWx1ZTogJ0ZpYXQnfSxcbiAgICAgICAgICAgIHtsYWJlbDogJ0hvbmRhJywgdmFsdWU6ICdIb25kYSd9LFxuICAgICAgICAgICAge2xhYmVsOiAnSmFndWFyJywgdmFsdWU6ICdKYWd1YXInfSxcbiAgICAgICAgICAgIHtsYWJlbDogJ01lcmNlZGVzJywgdmFsdWU6ICdNZXJjZWRlcyd9LFxuICAgICAgICAgICAge2xhYmVsOiAnUmVuYXVsdCcsIHZhbHVlOiAnUmVuYXVsdCd9LFxuICAgICAgICAgICAge2xhYmVsOiAnVlcnLCB2YWx1ZTogJ1ZXJ30sXG4gICAgICAgICAgICB7bGFiZWw6ICdWb2x2bycsIHZhbHVlOiAnVm9sdm8nfSxcbiAgICAgICAgXTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1zZWN0aW9uIGltcGxlbWVudGF0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmaXJzdFwiPlNpbmdsZTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Qm94XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jaXR5fVxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17Y2l0aWVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7Y2l0eTogZS52YWx1ZX0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uTGFiZWw9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICA8aDM+TXVsdGlwbGU8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8TGlzdEJveFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY2l0aWVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17Y2l0aWVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7Y2l0aWVzOiBlLnZhbHVlfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbkxhYmVsPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPGgzPkFkdmFuY2VkPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPExpc3RCb3hcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNhcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2NhcnN9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHtjYXI6IGUudmFsdWV9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1UZW1wbGF0ZT17dGhpcy5jYXJUZW1wbGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6ICcxNWVtJ319XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0U3R5bGU9e3ttYXhIZWlnaHQ6ICcyNTBweCd9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0Qm94Q29tcG9uZW50O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==