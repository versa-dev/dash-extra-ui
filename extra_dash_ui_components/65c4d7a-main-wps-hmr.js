webpackHotUpdateextra_dash_ui_components("main",{

/***/ "./src/lib/components/ExtraDashUiComponents.react.js":
/*!***********************************************************!*\
  !*** ./src/lib/components/ExtraDashUiComponents.react.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ExtraDashUiComponents; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */

var ExtraDashUiComponents =
/*#__PURE__*/
function (_Component) {
  _inherits(ExtraDashUiComponents, _Component);

  function ExtraDashUiComponents() {
    _classCallCheck(this, ExtraDashUiComponents);

    return _possibleConstructorReturn(this, _getPrototypeOf(ExtraDashUiComponents).call(this));
  }

  _createClass(ExtraDashUiComponents, [{
    key: "init",
    value: function init() {
      var _this = this;

      this._instance = window.grecaptcha.render(this.targetEL, {
        'sitekey': this.props.siteKey,
        'theme': this.props.theme,
        'type': this.props.type,
        'size': this.props.size,
        'tabindex': this.props.tabIndex,
        'hl': this.props.language,
        'callback': function callback(response) {
          _this.recaptchaCallback(response);
        },
        'expired-callback': function expiredCallback() {
          _this.recaptchaExpiredCallback();
        }
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      if (this._instance === null) return;
      window.grecaptcha.reset(this._instance);
    }
  }, {
    key: "getResponse",
    value: function getResponse() {
      if (this._instance === null) return null;
      return window.grecaptcha.getResponse(this._instance);
    }
  }, {
    key: "recaptchaCallback",
    value: function recaptchaCallback(response) {
      console.log("Response");

      if (this.props.onResponse) {
        this.props.onResponse({
          response: response
        });
      }
    }
  }, {
    key: "recaptchaExpiredCallback",
    value: function recaptchaExpiredCallback() {
      if (this.props.onExpire) {
        this.props.onExpire();
      }
    }
  }, {
    key: "addRecaptchaScript",
    value: function addRecaptchaScript() {
      this.recaptchaScript = null;

      if (!window.grecaptcha) {
        var head = document.head || document.getElementsByTagName('head')[0];
        this.recaptchaScript = document.createElement('script');
        this.recaptchaScript.src = "https://www.google.com/recaptcha/api.js?render=explicit";
        this.recaptchaScript.async = true;
        this.recaptchaScript.defer = true;
        head.appendChild(this.recaptchaScript);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.addRecaptchaScript();

      if (window.grecaptcha) {
        this.init();
      } else {
        setTimeout(function () {
          if (!window.grecaptcha) {
            console.warn("Recaptcha is not loaded");
            return;
          }

          _this2.init();
        }, 500);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.recaptchaScript) {
        this.recaptchaScript.parentNode.removeChild(this.recaptchaScript);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var id = this.props.id;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: id,
        ref: function ref(el) {
          return _this3.targetEL = el;
        }
      });
    }
  }]);

  return ExtraDashUiComponents;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


ExtraDashUiComponents.defaultProps = {
  id: null,
  siteKey: "6LelnsIUAAAAAN9KlJBir69dCnzeaapRdUQdiS0G",
  theme: "light",
  type: "image",
  size: "normal",
  tabIndex: 0,
  language: "en",
  onResponse: null,
  onExpire: null
};
ExtraDashUiComponents.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  sitekey: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  tabindex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  language: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onResponse: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onExpire: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvRXh0cmFEYXNoVWlDb21wb25lbnRzLnJlYWN0LmpzIl0sIm5hbWVzIjpbIkV4dHJhRGFzaFVpQ29tcG9uZW50cyIsIl9pbnN0YW5jZSIsIndpbmRvdyIsImdyZWNhcHRjaGEiLCJyZW5kZXIiLCJ0YXJnZXRFTCIsInByb3BzIiwic2l0ZUtleSIsInRoZW1lIiwidHlwZSIsInNpemUiLCJ0YWJJbmRleCIsImxhbmd1YWdlIiwicmVzcG9uc2UiLCJyZWNhcHRjaGFDYWxsYmFjayIsInJlY2FwdGNoYUV4cGlyZWRDYWxsYmFjayIsInJlc2V0IiwiZ2V0UmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwib25SZXNwb25zZSIsIm9uRXhwaXJlIiwicmVjYXB0Y2hhU2NyaXB0IiwiaGVhZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwiYXN5bmMiLCJkZWZlciIsImFwcGVuZENoaWxkIiwiYWRkUmVjYXB0Y2hhU2NyaXB0IiwiaW5pdCIsInNldFRpbWVvdXQiLCJ3YXJuIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiaWQiLCJlbCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsInNpdGVrZXkiLCJ0YWJpbmRleCIsIm51bWJlciIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7Ozs7Ozs7O0lBT3FCQSxxQjs7Ozs7QUFDakIsbUNBQWM7QUFBQTs7QUFBQTtBQUViOzs7OzJCQUVNO0FBQUE7O0FBQ0gsV0FBS0MsU0FBTCxHQUFrQkMsTUFBRCxDQUFTQyxVQUFULENBQW9CQyxNQUFwQixDQUEyQixLQUFLQyxRQUFoQyxFQUEwQztBQUN2RCxtQkFBVyxLQUFLQyxLQUFM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Q3dDLFlBQXRCLEdBQXFDO0FBQ2pDSCxJQUFFLEVBQUUsSUFENkI7QUFFakM5QixTQUFPLEVBQUUsMENBRndCO0FBR2pDQyxPQUFLLEVBQUUsT0FIMEI7QUFJakNDLE1BQUksRUFBRSxPQUoyQjtBQUtqQ0MsTUFBSSxFQUFFLFFBTDJCO0FBTWpDQyxVQUFRLEVBQUUsQ0FOdUI7QUFPakNDLFVBQVEsRUFBRSxJQVB1QjtBQVFqQ1EsWUFBVSxFQUFFLElBUnFCO0FBU2pDQyxVQUFRLEVBQUU7QUFUdUIsQ0FBckM7QUFZQXJCLHFCQUFxQixDQUFDeUMsU0FBdEIsR0FBa0M7QUFDOUI7OztBQUdBSixJQUFFLEVBQUVLLGlEQUFTLENBQUNDLE1BSmdCO0FBTTlCQyxTQUFPLEVBQUVGLGlEQUFTLENBQUNDLE1BTlc7QUFPOUJuQyxPQUFLLEVBQUVrQyxpREFBUyxDQUFDQyxNQVBhO0FBUTlCbEMsTUFBSSxFQUFFaUMsaURBQVMsQ0FBQ0MsTUFSYztBQVM5QmpDLE1BQUksRUFBRWdDLGlEQUFTLENBQUNDLE1BVGM7QUFVOUJFLFVBQVEsRUFBRUgsaURBQVMsQ0FBQ0ksTUFWVTtBQVc5QmxDLFVBQVEsRUFBRThCLGlEQUFTLENBQUNDLE1BWFU7QUFZOUJ2QixZQUFVLEVBQUVzQixpREFBUyxDQUFDSyxJQVpRO0FBYTlCMUIsVUFBUSxFQUFFcUIsaURBQVMsQ0FBQ0s7QUFiVSxDQUFsQyxDIiwiZmlsZSI6IjY1YzRkN2EtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG4vKipcclxuICogRXhhbXBsZUNvbXBvbmVudCBpcyBhbiBleGFtcGxlIGNvbXBvbmVudC5cclxuICogSXQgdGFrZXMgYSBwcm9wZXJ0eSwgYGxhYmVsYCwgYW5kXHJcbiAqIGRpc3BsYXlzIGl0LlxyXG4gKiBJdCByZW5kZXJzIGFuIGlucHV0IHdpdGggdGhlIHByb3BlcnR5IGB2YWx1ZWBcclxuICogd2hpY2ggaXMgZWRpdGFibGUgYnkgdGhlIHVzZXIuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHRyYURhc2hVaUNvbXBvbmVudHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuX2luc3RhbmNlID0gKHdpbmRvdykuZ3JlY2FwdGNoYS5yZW5kZXIodGhpcy50YXJnZXRFTCwge1xyXG4gICAgICAgICAgICAnc2l0ZWtleSc6IHRoaXMucHJvcHMuc2l0ZUtleSxcclxuICAgICAgICAgICAgJ3RoZW1lJzogdGhpcy5wcm9wcy50aGVtZSxcclxuICAgICAgICAgICAgJ3R5cGUnOiB0aGlzLnByb3BzLnR5cGUsXHJcbiAgICAgICAgICAgICdzaXplJzogdGhpcy5wcm9wcy5zaXplLFxyXG4gICAgICAgICAgICAndGFiaW5kZXgnOiB0aGlzLnByb3BzLnRhYkluZGV4LFxyXG4gICAgICAgICAgICAnaGwnOiB0aGlzLnByb3BzLmxhbmd1YWdlLFxyXG4gICAgICAgICAgICAnY2FsbGJhY2snOiAocmVzcG9uc2UpID0+IHt0aGlzLnJlY2FwdGNoYUNhbGxiYWNrKHJlc3BvbnNlKX0sXHJcbiAgICAgICAgICAgICdleHBpcmVkLWNhbGxiYWNrJzogKCkgPT4ge3RoaXMucmVjYXB0Y2hhRXhwaXJlZENhbGxiYWNrKCl9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXQoKSB7XHJcbiAgICAgICAgaWYodGhpcy5faW5zdGFuY2UgPT09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICAod2luZG93KS5ncmVjYXB0Y2hhLnJlc2V0KHRoaXMuX2luc3RhbmNlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSZXNwb25zZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5faW5zdGFuY2UgPT09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiAod2luZG93KS5ncmVjYXB0Y2hhLmdldFJlc3BvbnNlKHRoaXMuX2luc3RhbmNlKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVjYXB0Y2hhQ2FsbGJhY2socmVzcG9uc2UpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlJlc3BvbnNlXCIpO1xyXG4gICAgICAgIGlmKHRoaXMucHJvcHMub25SZXNwb25zZSkge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uUmVzcG9uc2Uoe1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2U6IHJlc3BvbnNlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZWNhcHRjaGFFeHBpcmVkQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5vbkV4cGlyZSkge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uRXhwaXJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhZGRSZWNhcHRjaGFTY3JpcHQoKSB7XHJcbiAgICAgICAgdGhpcy5yZWNhcHRjaGFTY3JpcHQgPSBudWxsO1xyXG4gICAgICAgIGlmICghKHdpbmRvdykuZ3JlY2FwdGNoYSkge1xyXG4gICAgICAgICAgICB2YXIgaGVhZCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcclxuICAgICAgICAgICAgdGhpcy5yZWNhcHRjaGFTY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgICAgICAgICAgdGhpcy5yZWNhcHRjaGFTY3JpcHQuc3JjID0gXCJodHRwczovL3d3dy5nb29nbGUuY29tL3JlY2FwdGNoYS9hcGkuanM/cmVuZGVyPWV4cGxpY2l0XCI7XHJcbiAgICAgICAgICAgIHRoaXMucmVjYXB0Y2hhU2NyaXB0LmFzeW5jID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5yZWNhcHRjaGFTY3JpcHQuZGVmZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICBoZWFkLmFwcGVuZENoaWxkKHRoaXMucmVjYXB0Y2hhU2NyaXB0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5hZGRSZWNhcHRjaGFTY3JpcHQoKTtcclxuXHJcbiAgICAgICAgaWYgKCh3aW5kb3cpLmdyZWNhcHRjaGEpIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0KCk7IFxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoISh3aW5kb3cpLmdyZWNhcHRjaGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJSZWNhcHRjaGEgaXMgbm90IGxvYWRlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICAgICAgfSw1MDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICBpZih0aGlzLnJlY2FwdGNoYVNjcmlwdCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlY2FwdGNoYVNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMucmVjYXB0Y2hhU2NyaXB0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7aWR9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGlkPXtpZH0gcmVmPXsoZWwpID0+IHRoaXMudGFyZ2V0RUwgPSBlbH0+PC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuRXh0cmFEYXNoVWlDb21wb25lbnRzLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGlkOiBudWxsLFxyXG4gICAgc2l0ZUtleTogXCI2TGVsbnNJVUFBQUFBTjlLbEpCaXI2OWRDbnplYWFwUmRVUWRpUzBHXCIsXHJcbiAgICB0aGVtZTogXCJsaWdodFwiLFxyXG4gICAgdHlwZTogXCJpbWFnZVwiLFxyXG4gICAgc2l6ZTogXCJub3JtYWxcIixcclxuICAgIHRhYkluZGV4OiAwLFxyXG4gICAgbGFuZ3VhZ2U6IFwiZW5cIixcclxuICAgIG9uUmVzcG9uc2U6IG51bGwsXHJcbiAgICBvbkV4cGlyZTogbnVsbFxyXG59O1xyXG5cclxuRXh0cmFEYXNoVWlDb21wb25lbnRzLnByb3BUeXBlcyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIElEIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBjb21wb25lbnQgaW4gRGFzaCBjYWxsYmFja3MuXHJcbiAgICAgKi9cclxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgIHNpdGVrZXk6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB0aGVtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBzaXplOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgdGFiaW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBsYW5ndWFnZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG9uUmVzcG9uc2U6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgb25FeHBpcmU6IFByb3BUeXBlcy5mdW5jXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=