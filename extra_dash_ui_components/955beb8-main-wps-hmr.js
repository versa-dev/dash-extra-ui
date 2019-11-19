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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



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
      var logoPath = '../../../../sample_data/assets/man.jpg';
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-clearfix"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        alt: option.label,
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
      return (// <h3 className="first">Single</h3>
        // <ListBox
        //     value={this.state.city}
        //     options={cities}
        //     onChange={e => this.setState({city: e.value})}
        //     optionLabel="name"
        // />
        // <h3>Multiple</h3>
        // <ListBox
        //     value={this.state.cities}
        //     options={cities}
        //     onChange={e => this.setState({cities: e.value})}
        //     multiple={true}
        //     optionLabel="name"
        // />
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ListBox__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
        })
      );
    }
  }]);

  return ListBoxComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ListBoxComponent);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvTGlzdEJveC9MaXN0Qm94Q29tcG9uZW50LmpzIl0sIm5hbWVzIjpbIkxpc3RCb3hDb21wb25lbnQiLCJzdGF0ZSIsImNpdHkiLCJjaXRpZXMiLCJjYXIiLCJvcHRpb24iLCJsb2dvUGF0aCIsImxhYmVsIiwiZGlzcGxheSIsIm1hcmdpbiIsIndpZHRoIiwiZm9udFNpemUiLCJuYW1lIiwiY29kZSIsImNhcnMiLCJ2YWx1ZSIsImUiLCJzZXRTdGF0ZSIsImNhclRlbXBsYXRlIiwibWF4SGVpZ2h0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUVBOztJQUVNQSxnQjs7Ozs7QUFDRiw4QkFBYztBQUFBOztBQUFBOztBQUNWO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLFVBQUksRUFBRSxJQURHO0FBRVRDLFlBQU0sRUFBRSxJQUZDO0FBR1RDLFNBQUcsRUFBRTtBQUhJLEtBQWI7QUFGVTtBQU9iOzs7O2dDQUVXQyxNLEVBQVE7QUFDaEIsVUFBTUMsUUFBUSxHQUFHLHdDQUFqQjtBQUNBLGFBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSTtBQUNJLFdBQUcsRUFBRUQsTUFBTSxDQUFDRSxLQURoQjtBQUVJLFdBQUcsRUFBRUQsUUFGVDtBQUdJLGFBQUssRUFBRTtBQUNIRSxpQkFBTyxFQUFFLGNBRE47QUFFSEMsZ0JBQU0sRUFBRSxhQUZMO0FBR0hDLGVBQUssRUFBRTtBQUhKO0FBSFgsUUFESixFQVVJO0FBQ0ksYUFBSyxFQUFFO0FBQ0hDLGtCQUFRLEVBQUUsS0FEUDtBQUVILG1CQUFPLE9BRko7QUFHSEYsZ0JBQU0sRUFBRTtBQUhMO0FBRFgsU0FPS0osTUFBTSxDQUFDRSxLQVBaLENBVkosQ0FESjtBQXNCSDs7OzZCQUVRO0FBQUE7O0FBQ0wsVUFBTUosTUFBTSxHQUFHLENBQ1g7QUFBQ1MsWUFBSSxFQUFFLFVBQVA7QUFBbUJDLFlBQUksRUFBRTtBQUF6QixPQURXLEVBRVg7QUFBQ0QsWUFBSSxFQUFFLE1BQVA7QUFBZUMsWUFBSSxFQUFFO0FBQXJCLE9BRlcsRUFHWDtBQUFDRCxZQUFJLEVBQUUsUUFBUDtBQUFpQkMsWUFBSSxFQUFFO0FBQXZCLE9BSFcsRUFJWDtBQUFDRCxZQUFJLEVBQUUsVUFBUDtBQUFtQkMsWUFBSSxFQUFFO0FBQXpCLE9BSlcsRUFLWDtBQUFDRCxZQUFJLEVBQUUsT0FBUDtBQUFnQkMsWUFBSSxFQUFFO0FBQXRCLE9BTFcsQ0FBZjtBQVFBLFVBQU1DLElBQUksR0FBRyxDQUNUO0FBQUNQLGFBQUssRUFBRSxNQUFSO0FBQWdCUSxhQUFLLEVBQUU7QUFBdkIsT0FEUyxFQUVUO0FBQUNSLGFBQUssRUFBRSxLQUFSO0FBQWVRLGFBQUssRUFBRTtBQUF0QixPQUZTLEVBR1Q7QUFBQ1IsYUFBSyxFQUFFLE1BQVI7QUFBZ0JRLGFBQUssRUFBRTtBQUF2QixPQUhTLEVBSVQ7QUFBQ1IsYUFBSyxFQUFFLE9BQVI7QUFBaUJRLGFBQUssRUFBRTtBQUF4QixPQUpTLEVBS1Q7QUFBQ1IsYUFBSyxFQUFFLFFBQVI7QUFBa0JRLGFBQUssRUFBRTtBQUF6QixPQUxTLEVBTVQ7QUFBQ1IsYUFBSyxFQUFFLFVBQVI7QUFBb0JRLGFBQUssRUFBRTtBQUEzQixPQU5TLEVBT1Q7QUFBQ1IsYUFBSyxFQUFFLFNBQVI7QUFBbUJRLGFBQUssRUFBRTtBQUExQixPQVBTLEVBUVQ7QUFBQ1IsYUFBSyxFQUFFLElBQVI7QUFBY1EsYUFBSyxFQUFFO0FBQXJCLE9BUlMsRUFTVDtBQUFDUixhQUFLLEVBQUUsT0FBUjtBQUFpQlEsYUFBSyxFQUFFO0FBQXhCLE9BVFMsQ0FBYjtBQVlBLGFBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsbUVBQUMsZ0RBQUQ7QUFDSSxlQUFLLEVBQUUsS0FBS2QsS0FBTCxDQUFXRyxHQUR0QjtBQUVJLGdCQUFNLEVBQUUsSUFGWjtBQUdJLGlCQUFPLEVBQUVVLElBSGI7QUFJSSxrQkFBUSxFQUFFLGtCQUFBRSxDQUFDO0FBQUEsbUJBQUksTUFBSSxDQUFDQyxRQUFMLENBQWM7QUFBQ2IsaUJBQUcsRUFBRVksQ0FBQyxDQUFDRDtBQUFSLGFBQWQsQ0FBSjtBQUFBLFdBSmY7QUFLSSxzQkFBWSxFQUFFLEtBQUtHLFdBTHZCO0FBTUksZUFBSyxFQUFFO0FBQUNSLGlCQUFLLEVBQUU7QUFBUixXQU5YO0FBT0ksbUJBQVMsRUFBRTtBQUFDUyxxQkFBUyxFQUFFO0FBQVo7QUFQZjtBQWxCSjtBQTRCSDs7OztFQXJGMEJDLCtDOztBQXdGaEJwQiwrRUFBZixFIiwiZmlsZSI6Ijk1NWJlYjgtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGlzdEJveCBmcm9tICcuL0xpc3RCb3gnO1xuaW1wb3J0ICcuL0xpc3RCb3guY3NzJztcbi8vIGltcG9ydCB7ICB9IGZyb20gXCIuLi8uLi8uLi8uLi9zYW1wbGVfZGF0YS9hc3NldHMvbWFuLmpwZ1wiO1xuXG5jbGFzcyBMaXN0Qm94Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNpdHk6IG51bGwsXG4gICAgICAgICAgICBjaXRpZXM6IG51bGwsXG4gICAgICAgICAgICBjYXI6ICdCTVcnLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNhclRlbXBsYXRlKG9wdGlvbikge1xuICAgICAgICBjb25zdCBsb2dvUGF0aCA9ICcuLi8uLi8uLi8uLi9zYW1wbGVfZGF0YS9hc3NldHMvbWFuLmpwZyc7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtY2xlYXJmaXhcIj5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIGFsdD17b3B0aW9uLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICBzcmM9e2xvZ29QYXRofVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICc1cHggMCAwIDVweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDgsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxZW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICcxZW0gLjVlbSAwIDAnLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge29wdGlvbi5sYWJlbH1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGNpdGllcyA9IFtcbiAgICAgICAgICAgIHtuYW1lOiAnTmV3IFlvcmsnLCBjb2RlOiAnTlknfSxcbiAgICAgICAgICAgIHtuYW1lOiAnUm9tZScsIGNvZGU6ICdSTSd9LFxuICAgICAgICAgICAge25hbWU6ICdMb25kb24nLCBjb2RlOiAnTEROJ30sXG4gICAgICAgICAgICB7bmFtZTogJ0lzdGFuYnVsJywgY29kZTogJ0lTVCd9LFxuICAgICAgICAgICAge25hbWU6ICdQYXJpcycsIGNvZGU6ICdQUlMnfSxcbiAgICAgICAgXTtcblxuICAgICAgICBjb25zdCBjYXJzID0gW1xuICAgICAgICAgICAge2xhYmVsOiAnQXVkaScsIHZhbHVlOiAnQXVkaSd9LFxuICAgICAgICAgICAge2xhYmVsOiAnQk1XJywgdmFsdWU6ICdCTVcnfSxcbiAgICAgICAgICAgIHtsYWJlbDogJ0ZpYXQnLCB2YWx1ZTogJ0ZpYXQnfSxcbiAgICAgICAgICAgIHtsYWJlbDogJ0hvbmRhJywgdmFsdWU6ICdIb25kYSd9LFxuICAgICAgICAgICAge2xhYmVsOiAnSmFndWFyJywgdmFsdWU6ICdKYWd1YXInfSxcbiAgICAgICAgICAgIHtsYWJlbDogJ01lcmNlZGVzJywgdmFsdWU6ICdNZXJjZWRlcyd9LFxuICAgICAgICAgICAge2xhYmVsOiAnUmVuYXVsdCcsIHZhbHVlOiAnUmVuYXVsdCd9LFxuICAgICAgICAgICAge2xhYmVsOiAnVlcnLCB2YWx1ZTogJ1ZXJ30sXG4gICAgICAgICAgICB7bGFiZWw6ICdWb2x2bycsIHZhbHVlOiAnVm9sdm8nfSxcbiAgICAgICAgXTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgLy8gPGgzIGNsYXNzTmFtZT1cImZpcnN0XCI+U2luZ2xlPC9oMz5cbiAgICAgICAgICAgIC8vIDxMaXN0Qm94XG4gICAgICAgICAgICAvLyAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY2l0eX1cbiAgICAgICAgICAgIC8vICAgICBvcHRpb25zPXtjaXRpZXN9XG4gICAgICAgICAgICAvLyAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7Y2l0eTogZS52YWx1ZX0pfVxuICAgICAgICAgICAgLy8gICAgIG9wdGlvbkxhYmVsPVwibmFtZVwiXG4gICAgICAgICAgICAvLyAvPlxuXG4gICAgICAgICAgICAvLyA8aDM+TXVsdGlwbGU8L2gzPlxuICAgICAgICAgICAgLy8gPExpc3RCb3hcbiAgICAgICAgICAgIC8vICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jaXRpZXN9XG4gICAgICAgICAgICAvLyAgICAgb3B0aW9ucz17Y2l0aWVzfVxuICAgICAgICAgICAgLy8gICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoe2NpdGllczogZS52YWx1ZX0pfVxuICAgICAgICAgICAgLy8gICAgIG11bHRpcGxlPXt0cnVlfVxuICAgICAgICAgICAgLy8gICAgIG9wdGlvbkxhYmVsPVwibmFtZVwiXG4gICAgICAgICAgICAvLyAvPlxuXG4gICAgICAgICAgICA8TGlzdEJveFxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNhcn1cbiAgICAgICAgICAgICAgICBmaWx0ZXI9e3RydWV9XG4gICAgICAgICAgICAgICAgb3B0aW9ucz17Y2Fyc31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHtjYXI6IGUudmFsdWV9KX1cbiAgICAgICAgICAgICAgICBpdGVtVGVtcGxhdGU9e3RoaXMuY2FyVGVtcGxhdGV9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogJzE1ZW0nfX1cbiAgICAgICAgICAgICAgICBsaXN0U3R5bGU9e3ttYXhIZWlnaHQ6ICcyNTBweCd9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RCb3hDb21wb25lbnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9