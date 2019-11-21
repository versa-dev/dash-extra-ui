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
        className: "content-section introduction"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "feature-intro"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "ListBox"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "ListBox is used to select one or more values from a list of items."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvTGlzdEJveC9MaXN0Qm94Q29tcG9uZW50LmpzIl0sIm5hbWVzIjpbIkxpc3RCb3hDb21wb25lbnQiLCJzdGF0ZSIsImNpdHkiLCJjaXRpZXMiLCJjYXIiLCJvcHRpb24iLCJsb2dvUGF0aCIsImRpc3BsYXkiLCJtYXJnaW4iLCJ3aWR0aCIsImZvbnRTaXplIiwibGFiZWwiLCJuYW1lIiwiY29kZSIsImNhcnMiLCJ2YWx1ZSIsImUiLCJzZXRTdGF0ZSIsImNhclRlbXBsYXRlIiwibWF4SGVpZ2h0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUVBOztJQUVNQSxnQjs7Ozs7QUFDRiw4QkFBYztBQUFBOztBQUFBOztBQUNWO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLFVBQUksRUFBRSxJQURHO0FBRVRDLFlBQU0sRUFBRSxJQUZDO0FBR1RDLFNBQUcsRUFBRTtBQUhJLEtBQWI7QUFGVTtBQU9iOzs7O2dDQUVXQyxNLEVBQVE7QUFDaEI7QUFDQSxVQUFNQyxRQUFRLEdBQUcsdUZBQWpCO0FBQ0EsYUFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJO0FBQ0ksV0FBRyxFQUFFQSxRQURUO0FBRUksYUFBSyxFQUFFO0FBQ0hDLGlCQUFPLEVBQUUsY0FETjtBQUVIQyxnQkFBTSxFQUFFLGFBRkw7QUFHSEMsZUFBSyxFQUFFO0FBSEo7QUFGWCxRQURKLEVBU0k7QUFDSSxhQUFLLEVBQUU7QUFDSEMsa0JBQVEsRUFBRSxLQURQO0FBRUgsbUJBQU8sT0FGSjtBQUdIRixnQkFBTSxFQUFFO0FBSEw7QUFEWCxTQU9LSCxNQUFNLENBQUNNLEtBUFosQ0FUSixDQURKO0FBcUJIOzs7NkJBRVE7QUFBQTs7QUFDTCxVQUFNUixNQUFNLEdBQUcsQ0FDWDtBQUFDUyxZQUFJLEVBQUUsVUFB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NGEyLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpc3RCb3ggZnJvbSAnLi9MaXN0Qm94JztcbmltcG9ydCAnLi9MaXN0Qm94LmNzcyc7XG4vLyBpbXBvcnQgeyAgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2FtcGxlX2RhdGEvYXNzZXRzL21hbi5qcGdcIjtcblxuY2xhc3MgTGlzdEJveENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjaXR5OiBudWxsLFxuICAgICAgICAgICAgY2l0aWVzOiBudWxsLFxuICAgICAgICAgICAgY2FyOiAnQk1XJyxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXJUZW1wbGF0ZShvcHRpb24pIHtcbiAgICAgICAgLy8gY29uc3QgbG9nb1BhdGggPSAnLi4vLi4vLi4vLi4vc2FtcGxlX2RhdGEvYXNzZXRzL21hbi5qcGcnO1xuICAgICAgICBjb25zdCBsb2dvUGF0aCA9ICdodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kYW51bHVtYS9pbWFnZS91cGxvYWQvdjE1NDExMjQwNDEvaHFhdXZ1dzg4eHQ1bWdudGtmOHIucG5nJ1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWNsZWFyZml4XCI+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9e2xvZ29QYXRofVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICc1cHggMCAwIDVweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDgsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxZW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICcxZW0gLjVlbSAwIDAnLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge29wdGlvbi5sYWJlbH1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGNpdGllcyA9IFtcbiAgICAgICAgICAgIHtuYW1lOiAnTmV3IFlvcmsnLCBjb2RlOiAnTlknfSxcbiAgICAgICAgICAgIHtuYW1lOiAnUm9tZScsIGNvZGU6ICdSTSd9LFxuICAgICAgICAgICAge25hbWU6ICdMb25kb24nLCBjb2RlOiAnTEROJ30sXG4gICAgICAgICAgICB7bmFtZTogJ0lzdGFuYnVsJywgY29kZTogJ0lTVCd9LFxuICAgICAgICAgICAge25hbWU6ICdQYXJpcycsIGNvZGU6ICdQUlMnfSxcbiAgICAgICAgXTtcblxuICAgICAgICBjb25zdCBjYXJzID0gW1xuICAgICAgICAgICAge2xhYmVsOiAnQXVkaScsIHZhbHVlOiAnQXVkaSd9LFxuICAgICAgICAgICAge2xhYmVsOiAnQk1XJywgdmFsdWU6ICdCTVcnfSxcbiAgICAgICAgICAgIHtsYWJlbDogJ0ZpYXQnLCB2YWx1ZTogJ0ZpYXQnfSxcbiAgICAgICAgICAgIHtsYWJlbDogJ0hvbmRhJywgdmFsdWU6ICdIb25kYSd9LFxuICAgICAgICAgICAge2xhYmVsOiAnSmFndWFyJywgdmFsdWU6ICdKYWd1YXInfSxcbiAgICAgICAgICAgIHtsYWJlbDogJ01lcmNlZGVzJywgdmFsdWU6ICdNZXJjZWRlcyd9LFxuICAgICAgICAgICAge2xhYmVsOiAnUmVuYXVsdCcsIHZhbHVlOiAnUmVuYXVsdCd9LFxuICAgICAgICAgICAge2xhYmVsOiAnVlcnLCB2YWx1ZTogJ1ZXJ30sXG4gICAgICAgICAgICB7bGFiZWw6ICdWb2x2bycsIHZhbHVlOiAnVm9sdm8nfSxcbiAgICAgICAgXTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtc2VjdGlvbiBpbnRyb2R1Y3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWF0dXJlLWludHJvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+TGlzdEJveDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5MaXN0Qm94IGlzIHVzZWQgdG8gc2VsZWN0IG9uZSBvciBtb3JlIHZhbHVlcyBmcm9tIGEgbGlzdCBvZiBpdGVtcy48L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LXNlY3Rpb24gaW1wbGVtZW50YXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZpcnN0XCI+U2luZ2xlPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPExpc3RCb3ggdmFsdWU9e3RoaXMuc3RhdGUuY2l0eX0gb3B0aW9ucz17Y2l0aWVzfSBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoe2NpdHk6IGUudmFsdWV9KX0gb3B0aW9uTGFiZWw9XCJuYW1lXCIvPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGgzPk11bHRpcGxlPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPExpc3RCb3ggdmFsdWU9e3RoaXMuc3RhdGUuY2l0aWVzfSBvcHRpb25zPXtjaXRpZXN9IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7Y2l0aWVzOiBlLnZhbHVlfSl9IG11bHRpcGxlPXt0cnVlfSBvcHRpb25MYWJlbD1cIm5hbWVcIi8+XG5cbiAgICAgICAgICAgICAgICAgICAgPGgzPkFkdmFuY2VkPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPExpc3RCb3ggdmFsdWU9e3RoaXMuc3RhdGUuY2FyfSBmaWx0ZXI9e3RydWV9IG9wdGlvbnM9e2NhcnN9IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7Y2FyOiBlLnZhbHVlfSl9IGl0ZW1UZW1wbGF0ZT17dGhpcy5jYXJUZW1wbGF0ZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiAnMTVlbSd9fSBsaXN0U3R5bGU9e3ttYXhIZWlnaHQ6ICcyNTBweCd9fS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RCb3hDb21wb25lbnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9