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
        src: option.logoPath,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvTGlzdEJveC9MaXN0Qm94Q29tcG9uZW50LmpzIl0sIm5hbWVzIjpbIkxpc3RCb3hDb21wb25lbnQiLCJzdGF0ZSIsImNpdHkiLCJjaXRpZXMiLCJjYXIiLCJvcHRpb24iLCJsb2dvUGF0aCIsImRpc3BsYXkiLCJtYXJnaW4iLCJ3aWR0aCIsImZvbnRTaXplIiwibGFiZWwiLCJuYW1lIiwiY29kZSIsImNhcnMiLCJ2YWx1ZSIsImUiLCJzZXRTdGF0ZSIsImNhclRlbXBsYXRlIiwibWF4SGVpZ2h0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsZ0I7Ozs7O0FBQ0YsOEJBQWM7QUFBQTs7QUFBQTs7QUFDVjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxVQUFJLEVBQUUsSUFERztBQUVUQyxZQUFNLEVBQUUsSUFGQztBQUdUQyxTQUFHLEVBQUU7QUFISSxLQUFiO0FBRlU7QUFPYjs7OztnQ0FFV0MsTSxFQUFRO0FBQ2hCO0FBQ0EsVUFBTUMsUUFBUSxHQUNWLHVGQURKO0FBRUEsYUFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJO0FBQ0ksV0FBRyxFQUFFRCxNQUFNLENBQUNDLFFBRGhCO0FBRUksYUFBSyxFQUFFO0FBQ0hDLGlCQUFPLEVBQUUsY0FETjtBQUVIQyxnQkFBTSxFQUFFLGFBRkw7QUFHSEMsZUFBSyxFQUFFO0FBSEo7QUFGWCxRQURKLEVBU0k7QUFDSSxhQUFLLEVBQUU7QUFDSEMsa0JBQVEsRUFBRSxLQURQO0FBRUgsbUJBQU8sT0FGSjtBQUdIRixnQkFBTSxFQUFFO0FBSEw7QUFEWCxTQU9LSCxNQUFNLENBQUNNLEtBUFosQ0FUSixDQURKO0FBcUJIOzs7NkJBRVE7QUFBQTs7QUFDTCxVQUFNUixNQUFNLEdBQUcsQ0FDWDtBQUFDUyxZQUFJLEVBQUUsVUFBUDtBQUFtQkMsWUFBSSxFQUFFO0FBQXpCLE9BRFcsRUFFWDtBQUFDRCxZQUFJLEVBQUUsTUFBUDtBQUFlQyxZQUFJLEVBQUU7QUFBckIsT0FGVyxFQUdYO0FBQUNELFlBQUksRUFBRSxRQUFQO0FBQWlCQyxZQUFJLEVBQUU7QUFBdkIsT0FIVyxFQUlYO0FBQUNELFlBQUksRUFBRSxVQUFQO0FBQW1CQyxZQUFJLEVBQUU7QUFBekIsT0FKVyxFQUtYO0FBQUNELFlBQUksRUFBRSxPQUFQO0FBQWdCQyxZQUFJLEVBQUU7QUFBdEIsT0FMVyxDQUFmO0FBUUEsVUFBTUMsSUFBSSxHQUFHLENBQ1Q7QUFBQ0gsYUFBSyxFQUFFLE1BQVI7QUFBZ0JJLGFBQUssRUFBRTtBQUF2QixPQURTLEVBRVQ7QUFBQ0osYUFBSyxFQUFFLEtBQVI7QUFBZUksYUFBSyxFQUFFO0FBQXRCLE9BRlMsRUFHVDtBQUFDSixhQUFLLEVBQUUsTUFBUjtBQUFnQkksYUFBSyxFQUFFO0FBQXZCLE9BSFMsRUFJVDtBQUFDSixhQUFLLEVBQUUsT0FBUjtBQUFpQkksYUFBSyxFQUFFO0FBQXhCLE9BSlMsRUFLVDtBQUFDSixhQUFLLEVBQUUsUUFBUjtBQUFrQkksYUFBSyxFQUFFO0FBQXpCLE9BTFMsRUFNVDtBQUFDSixhQUFLLEVBQUUsVUFBUjtBQUFvQkksYUFBSyxFQUFFO0FBQTNCLE9BTlMsRUFPVDtBQUFDSixhQUFLLEVBQUUsU0FBUjtBQUFtQkksYUFBSyxFQUFFO0FBQTFCLE9BUFMsRUFRVDtBQUFDSixhQUFLLEVBQUUsSUFBUjtBQUFjSSxhQUFLLEVBQUU7QUFBckIsT0FSUyxFQVNUO0FBQUNKLGFBQUssRUFBRSxPQUFSO0FBQWlCSSxhQUFLLEVBQUU7QUFBeEIsT0FUUyxDQUFiO0FBWUEsYUFDSSx3RUFFSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJO0FBQUksaUJBQVMsRUFBQztBQUFkLGtCQURKLEVBRUksMkRBQUMsZ0RBQUQ7QUFDSSxhQUFLLEVBQUUsS0FBS2QsS0FBTCxDQUFXQyxJQUR0QjtBQUVJLGVBQU8sRUFBRUMsTUFGYjtBQUdJLGdCQUFRLEVBQUUsa0JBQUFhLENBQUM7QUFBQSxpQkFBSSxNQUFJLENBQUNDLFFBQUwsQ0FBYztBQUFDZixnQkFBSSxFQUFFYyxDQUFDLENBQUNEO0FBQVQsV0FBZCxDQUFKO0FBQUEsU0FIZjtBQUlJLG1CQUFXLEVBQUM7QUFKaEIsUUFGSixFQVNJLGtGQVRKLEVBVUksMkRBQUMsZ0RBQUQ7QUFDSSxhQUFLLEVBQUUsS0FBS2QsS0FBTCxDQUFXRSxNQUR0QjtBQUVJLGVBQU8sRUFBRUEsTUFGYjtBQUdJLGdCQUFRLEVBQUUsa0JBQUFhLENBQUM7QUFBQSxpQkFBSSxNQUFJLENBQUNDLFFBQUwsQ0FBYztBQUFDZCxrQkFBTSxFQUFFYSxDQUFDLENBQUNEO0FBQVgsV0FBZCxDQUFKO0FBQUEsU0FIZjtBQUlJLGdCQUFRLEVBQUUsSUFKZDtBQUtJLG1CQUFXLEVBQUM7QUFMaEIsUUFWSixFQWtCSSxrRkFsQkosRUFtQkksMkRBQUMsZ0RBQUQ7QUFDSSxhQUFLLEVBQUUsS0FBS2QsS0FBTCxDQUFXRyxHQUR0QjtBQUVJLGNBQU0sRUFBRSxJQUZaO0FBR0ksZUFBTyxFQUFFVSxJQUhiO0FBSUksZ0JBQVEsRUFBRSxrQkFBQUUsQ0FBQztBQUFBLGlCQUFJLE1BQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQUNiLGVBQUcsRUFBRVksQ0FBQyxDQUFDRDtBQUFSLFdBQWQsQ0FBSjtBQUFBLFNBSmY7QUFLSSxvQkFBWSxFQUFFLEtBQUtHLFdBTHZCO0FBTUksYUFBSyxFQUFFO0FBQUNULGVBQUssRUFBRTtBQUFSLFNBTlg7QUFPSSxpQkFBUyxFQUFFO0FBQUNVLG1CQUFTLEVBQUU7QUFBWjtBQVBmLFFBbkJKLENBRkosQ0FESjtBQWtDSDs7OztFQTVGMEJDLCtDOztBQStGaEJwQiwrRUFBZixFIiwiZmlsZSI6ImIwODA1MDEtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGlzdEJveCBmcm9tICcuL0xpc3RCb3gnO1xuaW1wb3J0ICcuL0xpc3RCb3guY3NzJztcbmltcG9ydCAnLi90aGVtZS5jc3MnO1xuXG5jbGFzcyBMaXN0Qm94Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNpdHk6IG51bGwsXG4gICAgICAgICAgICBjaXRpZXM6IG51bGwsXG4gICAgICAgICAgICBjYXI6ICdCTVcnLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNhclRlbXBsYXRlKG9wdGlvbikge1xuICAgICAgICAvLyBjb25zdCBsb2dvUGF0aCA9ICcuLi8uLi8uLi8uLi9zYW1wbGVfZGF0YS9hc3NldHMvbWFuLmpwZyc7XG4gICAgICAgIGNvbnN0IGxvZ29QYXRoID1cbiAgICAgICAgICAgICdodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kYW51bHVtYS9pbWFnZS91cGxvYWQvdjE1NDExMjQwNDEvaHFhdXZ1dzg4eHQ1bWdudGtmOHIucG5nJztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1jbGVhcmZpeFwiPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtvcHRpb24ubG9nb1BhdGh9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogJzVweCAwIDAgNXB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0OCxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzFlbScsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogJzFlbSAuNWVtIDAgMCcsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7b3B0aW9uLmxhYmVsfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgY2l0aWVzID0gW1xuICAgICAgICAgICAge25hbWU6ICdOZXcgWW9yaycsIGNvZGU6ICdOWSd9LFxuICAgICAgICAgICAge25hbWU6ICdSb21lJywgY29kZTogJ1JNJ30sXG4gICAgICAgICAgICB7bmFtZTogJ0xvbmRvbicsIGNvZGU6ICdMRE4nfSxcbiAgICAgICAgICAgIHtuYW1lOiAnSXN0YW5idWwnLCBjb2RlOiAnSVNUJ30sXG4gICAgICAgICAgICB7bmFtZTogJ1BhcmlzJywgY29kZTogJ1BSUyd9LFxuICAgICAgICBdO1xuXG4gICAgICAgIGNvbnN0IGNhcnMgPSBbXG4gICAgICAgICAgICB7bGFiZWw6ICdBdWRpJywgdmFsdWU6ICdBdWRpJ30sXG4gICAgICAgICAgICB7bGFiZWw6ICdCTVcnLCB2YWx1ZTogJ0JNVyd9LFxuICAgICAgICAgICAge2xhYmVsOiAnRmlhdCcsIHZhbHVlOiAnRmlhdCd9LFxuICAgICAgICAgICAge2xhYmVsOiAnSG9uZGEnLCB2YWx1ZTogJ0hvbmRhJ30sXG4gICAgICAgICAgICB7bGFiZWw6ICdKYWd1YXInLCB2YWx1ZTogJ0phZ3Vhcid9LFxuICAgICAgICAgICAge2xhYmVsOiAnTWVyY2VkZXMnLCB2YWx1ZTogJ01lcmNlZGVzJ30sXG4gICAgICAgICAgICB7bGFiZWw6ICdSZW5hdWx0JywgdmFsdWU6ICdSZW5hdWx0J30sXG4gICAgICAgICAgICB7bGFiZWw6ICdWVycsIHZhbHVlOiAnVlcnfSxcbiAgICAgICAgICAgIHtsYWJlbDogJ1ZvbHZvJywgdmFsdWU6ICdWb2x2byd9LFxuICAgICAgICBdO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LXNlY3Rpb24gaW1wbGVtZW50YXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZpcnN0XCI+U2luZ2xlPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPExpc3RCb3hcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNpdHl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtjaXRpZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHtjaXR5OiBlLnZhbHVlfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25MYWJlbD1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxoMz5NdWx0aXBsZTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Qm94XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jaXRpZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtjaXRpZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHtjaXRpZXM6IGUudmFsdWV9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uTGFiZWw9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICA8aDM+QWR2YW5jZWQ8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8TGlzdEJveFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY2FyfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17Y2Fyc31cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoe2NhcjogZS52YWx1ZX0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVRlbXBsYXRlPXt0aGlzLmNhclRlbXBsYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogJzE1ZW0nfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RTdHlsZT17e21heEhlaWdodDogJzI1MHB4J319XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RCb3hDb21wb25lbnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9