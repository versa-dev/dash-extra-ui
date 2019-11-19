webpackHotUpdateextra_dash_ui_components("main",{

/***/ "./src/lib/components/utils/DomHandler.js":
/*!************************************************!*\
  !*** ./src/lib/components/utils/DomHandler.js ***!
  \************************************************/
/*! exports provided: DomHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomHandler", function() { return DomHandler; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * DOMHandler utility functions
 */
var DomHandler =
/*#__PURE__*/
function () {
  function DomHandler() {
    _classCallCheck(this, DomHandler);
  }

  _createClass(DomHandler, null, [{
    key: "innerWidth",
    value: function innerWidth(el) {
      var width = el.offsetWidth;
      var style = getComputedStyle(el);
      width += parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
      return width;
    }
  }, {
    key: "width",
    value: function width(el) {
      var width = el.offsetWidth;
      var style = getComputedStyle(el);
      width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
      return width;
    }
  }, {
    key: "getWindowScrollTop",
    value: function getWindowScrollTop() {
      var doc = document.documentElement;
      return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    }
  }, {
    key: "getWindowScrollLeft",
    value: function getWindowScrollLeft() {
      var doc = document.documentElement;
      return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    }
  }, {
    key: "getOuterWidth",
    value: function getOuterWidth(el, margin) {
      if (el) {
        var width = el.offsetWidth;

        if (margin) {
          var style = getComputedStyle(el);
          width += parseFloat(style.marginLeft) + parseFloat(style.marginRight);
        }

        return width;
      } else {
        return 0;
      }
    }
  }, {
    key: "getOuterHeight",
    value: function getOuterHeight(el, margin) {
      if (el) {
        var height = el.offsetHeight;

        if (margin) {
          var style = getComputedStyle(el);
          height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
        }

        return height;
      } else {
        return 0;
      }
    }
  }, {
    key: "getClientHeight",
    value: function getClientHeight(el, margin) {
      if (el) {
        var height = el.clientHeight;

        if (margin) {
          var style = getComputedStyle(el);
          height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
        }

        return height;
      } else {
        return 0;
      }
    }
  }, {
    key: "getViewport",
    value: function getViewport() {
      var win = window,
          d = document,
          e = d.documentElement,
          g = d.getElementsByTagName('body')[0],
          w = win.innerWidth || e.clientWidth || g.clientWidth,
          h = win.innerHeight || e.clientHeight || g.clientHeight;
      return {
        width: w,
        height: h
      };
    }
  }, {
    key: "getOffset",
    value: function getOffset(el) {
      var rect = el.getBoundingClientRect();
      return {
        top: rect.top + document.body.scrollTop,
        left: rect.left + document.body.scrollLeft
      };
    }
  }, {
    key: "generateZIndex",
    value: function generateZIndex() {
      this.zindex = this.zindex || 999;
      return ++this.zindex;
    }
  }, {
    key: "getCurrentZIndex",
    value: function getCurrentZIndex() {
      return this.zindex;
    }
  }, {
    key: "index",
    value: function index(element) {
      var children = element.parentNode.childNodes;
      var num = 0;

      for (var i = 0; i < children.length; i++) {
        if (children[i] === element) return num;
        if (children[i].nodeType === 1) num++;
      }

      return -1;
    }
  }, {
    key: "addMultipleClasses",
    value: function addMultipleClasses(element, className) {
      if (element.classList) {
        var styles = className.split(' ');

        for (var i = 0; i < styles.length; i++) {
          element.classList.add(styles[i]);
        }
      } else {
        var _styles = className.split(' ');

        for (var _i = 0; _i < _styles.length; _i++) {
          element.className += ' ' + _styles[_i];
        }
      }
    }
  }, {
    key: "addClass",
    value: function addClass(element, className) {
      if (element.classList) element.classList.add(className);else element.className += ' ' + className;
    }
  }, {
    key: "removeClass",
    value: function removeClass(element, className) {
      if (element.classList) element.classList.remove(className);else element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  }, {
    key: "hasClass",
    value: function hasClass(element, className) {
      if (element.classList) return element.classList.contains(className);else return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
    }
  }, {
    key: "find",
    value: function find(element, selector) {
      return Array.from(element.querySelectorAll(selector));
    }
  }, {
    key: "findSingle",
    value: function findSingle(element, selector) {
      if (element) {
        return element.querySelector(selector);
      }

      return null;
    }
  }, {
    key: "getHeight",
    value: function getHeight(el) {
      var height = el.offsetHeight;
      var style = getComputedStyle(el);
      height -= parseFloat(style.paddingTop) + parseFloat(style.paddingBottom) + parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
      return height;
    }
  }, {
    key: "getWidth",
    value: function getWidth(el) {
      var width = el.offsetWidth;
      var style = getComputedStyle(el);
      width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight) + parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);
      return width;
    }
  }, {
    key: "absolutePosition",
    value: function absolutePosition(element, target) {
      var elementDimensions = element.offsetParent ? {
        width: element.offsetWidth,
        height: element.offsetHeight
      } : this.getHiddenElementDimensions(element);
      var elementOuterHeight = elementDimensions.height;
      var elementOuterWidth = elementDimensions.width;
      var targetOuterHeight = target.offsetHeight;
      var targetOuterWidth = target.offsetWidth;
      var targetOffset = target.getBoundingClientRect();
      var windowScrollTop = this.getWindowScrollTop();
      var windowScrollLeft = this.getWindowScrollLeft();
      var viewport = this.getViewport();
      var top, left;

      if (targetOffset.top + targetOuterHeight + elementOuterHeight > viewport.height) {
        top = targetOffset.top + windowScrollTop - elementOuterHeight;

        if (top < 0) {
          top = windowScrollTop;
        }
      } else {
        top = targetOuterHeight + targetOffset.top + windowScrollTop;
      }

      if (targetOffset.left + targetOuterWidth + elementOuterWidth > viewport.width) left = Math.max(0, targetOffset.left + windowScrollLeft + targetOuterWidth - elementOuterWidth);else left = targetOffset.left + windowScrollLeft;
      element.style.top = top + 'px';
      element.style.left = left + 'px';
    }
  }, {
    key: "relativePosition",
    value: function relativePosition(element, target) {
      var elementDimensions = element.offsetParent ? {
        width: element.offsetWidth,
        height: element.offsetHeight
      } : this.getHiddenElementDimensions(element);
      var targetHeight = target.offsetHeight;
      var targetOffset = target.getBoundingClientRect();
      var viewport = this.getViewport();
      var top, left;

      if (targetOffset.top + targetHeight + elementDimensions.height > viewport.height) {
        top = -1 * elementDimensions.height;

        if (targetOffset.top + top < 0) {
          top = -1 * targetOffset.top;
        }
      } else {
        top = targetHeight;
      }

      if (elementDimensions.width > viewport.width) {
        // element wider then viewport and cannot fit on screen (align at left side of viewport)
        left = targetOffset.left * -1;
      } else if (targetOffset.left + elementDimensions.width > viewport.width) {
        // element wider then viewport but can be fit on screen (align at right side of viewport)
        left = (targetOffset.left + elementDimensions.width - viewport.width) * -1;
      } else {
        // element fits on screen (align with target)
        left = 0;
      }

      element.style.top = top + 'px';
      element.style.left = left + 'px';
    }
  }, {
    key: "getHiddenElementOuterHeight",
    value: function getHiddenElementOuterHeight(element) {
      element.style.visibility = 'hidden';
      element.style.display = 'block';
      var elementHeight = element.offsetHeight;
      element.style.display = 'none';
      element.style.visibility = 'visible';
      return elementHeight;
    }
  }, {
    key: "getHiddenElementOuterWidth",
    value: function getHiddenElementOuterWidth(element) {
      element.style.visibility = 'hidden';
      element.style.display = 'block';
      var elementWidth = element.offsetWidth;
      element.style.display = 'none';
      element.style.visibility = 'visible';
      return elementWidth;
    }
  }, {
    key: "getHiddenElementDimensions",
    value: function getHiddenElementDimensions(element) {
      var dimensions = {};
      element.style.visibility = 'hidden';
      element.style.display = 'block';
      dimensions.width = element.offsetWidth;
      dimensions.height = element.offsetHeight;
      element.style.display = 'none';
      element.style.visibility = 'visible';
      return dimensions;
    }
  }, {
    key: "fadeIn",
    value: function fadeIn(element, duration) {
      element.style.opacity = 0;
      var last = +new Date();
      var opacity = 0;

      var tick = function tick() {
        opacity = +element.style.opacity + (new Date().getTime() - last) / duration;
        element.style.opacity = opacity;
        last = +new Date();

        if (+opacity < 1) {
          window.requestAnimationFrame && requestAnimationFrame(tick) || setTimeout(tick, 16);
        }
      };

      tick();
    }
  }, {
    key: "fadeOut",
    value: function fadeOut(element, ms) {
      var opacity = 1,
          interval = 50,
          duration = ms,
          gap = interval / duration;
      var fading = setInterval(function () {
        opacity -= gap;

        if (opacity <= 0) {
          opacity = 0;
          clearInterval(fading);
        }

        element.style.opacity = opacity;
      }, interval);
    }
  }, {
    key: "getUserAgent",
    value: function getUserAgent() {
      return navigator.userAgent;
    }
  }, {
    key: "isIOS",
    value: function isIOS() {
      return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window['MSStream'];
    }
  }, {
    key: "isAndroid",
    value: function isAndroid() {
      return /(android)/i.test(navigator.userAgent);
    }
  }, {
    key: "appendChild",
    value: function appendChild(element, target) {
      if (this.isElement(target)) target.appendChild(element);else if (target.el && target.el.nativeElement) target.el.nativeElement.appendChild(element);else throw new Error('Cannot append ' + target + ' to ' + element);
    }
  }, {
    key: "scrollInView",
    value: function scrollInView(container, item) {
      var borderTopValue = getComputedStyle(container).getPropertyValue('borderTopWidth');
      var borderTop = borderTopValue ? parseFloat(borderTopValue) : 0;
      var paddingTopValue = getComputedStyle(container).getPropertyValue('paddingTop');
      var paddingTop = paddingTopValue ? parseFloat(paddingTopValue) : 0;
      var containerRect = container.getBoundingClientRect();
      var itemRect = item.getBoundingClientRect();
      var offset = itemRect.top + document.body.scrollTop - (containerRect.top + document.body.scrollTop) - borderTop - paddingTop;
      var scroll = container.scrollTop;
      var elementHeight = container.clientHeight;
      var itemHeight = this.getOuterHeight(item);

      if (offset < 0) {
        container.scrollTop = scroll + offset;
      } else if (offset + itemHeight > elementHeight) {
        container.scrollTop = scroll + offset - elementHeight + itemHeight;
      }
    }
  }, {
    key: "clearSelection",
    value: function clearSelection() {
      if (window.getSelection) {
        if (window.getSelection().empty) {
          window.getSelection().empty();
        } else if (window.getSelection().removeAllRanges && window.getSelection().rangeCount > 0 && window.getSelection().getRangeAt(0).getClientRects().length > 0) {
          window.getSelection().removeAllRanges();
        }
      } else if (document['selection'] && document['selection'].empty) {
        try {
          document['selection'].empty();
        } catch (error) {//ignore IE bug
        }
      }
    }
  }, {
    key: "calculateScrollbarWidth",
    value: function calculateScrollbarWidth(el) {
      if (el) {
        var style = getComputedStyle(el);
        return el.offsetWidth - el.clientWidth - parseFloat(style.borderLeftWidth) - parseFloat(style.borderRightWidth);
      } else {
        if (this.calculatedScrollbarWidth != null) return this.calculatedScrollbarWidth;
        var scrollDiv = document.createElement("div");
        scrollDiv.className = "p-scrollbar-measure";
        document.body.appendChild(scrollDiv);
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
        this.calculatedScrollbarWidth = scrollbarWidth;
        return scrollbarWidth;
      }
    }
  }, {
    key: "getBrowser",
    value: function getBrowser() {
      if (!this.browser) {
        var matched = this.resolveUserAgent();
        this.browser = {};

        if (matched.browser) {
          this.browser[matched.browser] = true;
          this.browser['version'] = matched.version;
        }

        if (this.browser['chrome']) {
          this.browser['webkit'] = true;
        } else if (this.browser['webkit']) {
          this.browser['safari'] = true;
        }
      }

      return this.browser;
    }
  }, {
    key: "resolveUserAgent",
    value: function resolveUserAgent() {
      var ua = navigator.userAgent.toLowerCase();
      var match = /(chrome)[ ]([\w.]+)/.exec(ua) || /(webkit)[ ]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ ]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
      return {
        browser: match[1] || "",
        version: match[2] || "0"
      };
    }
  }, {
    key: "isVisible",
    value: function isVisible(element) {
      return element.offsetParent != null;
    }
  }]);

  return DomHandler;
}();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvdXRpbHMvRG9tSGFuZGxlci5qcyJdLCJuYW1lcyI6WyJEb21IYW5kbGVyIiwiZWwiLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwic3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwicGFyc2VGbG9hdCIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwiZG9jIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsInNjcm9sbFRvcCIsImNsaWVudFRvcCIsInBhZ2VYT2Zmc2V0Iiwic2Nyb2xsTGVmdCIsImNsaWVudExlZnQiLCJtYXJnaW4iLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJjbGllbnRIZWlnaHQiLCJ3aW4iLCJkIiwiZSIsImciLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInciLCJpbm5lcldpZHRoIiwiY2xpZW50V2lkdGgiLCJoIiwiaW5uZXJIZWlnaHQiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwiYm9keSIsImxlZnQiLCJ6aW5kZXgiLCJlbGVtZW50IiwiY2hpbGRyZW4iLCJwYXJlbnROb2RlIiwiY2hpbGROb2RlcyIsIm51bSIsImkiLCJsZW5ndGgiLCJub2RlVHlwZSIsImNsYXNzTmFtZSIsImNsYXNzTGlzdCIsInN0eWxlcyIsInNwbGl0IiwiYWRkIiwicmVtb3ZlIiwicmVwbGFjZSIsIlJlZ0V4cCIsImpvaW4iLCJjb250YWlucyIsInRlc3QiLCJzZWxlY3RvciIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJxdWVyeVNlbGVjdG9yIiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJib3JkZXJUb3BXaWR0aCIsImJvcmRlckJvdHRvbVdpZHRoIiwiYm9yZGVyTGVmdFdpZHRoIiwiYm9yZGVyUmlnaHRXaWR0aCIsInRhcmdldCIsImVsZW1lbnREaW1lbnNpb25zIiwib2Zmc2V0UGFyZW50IiwiZ2V0SGlkZGVuRWxlbWVudERpbWVuc2lvbnMiLCJlbGVtZW50T3V0ZXJIZWlnaHQiLCJlbGVtZW50T3V0ZXJXaWR0aCIsInRhcmdldE91dGVySGVpZ2h0IiwidGFyZ2V0T3V0ZXJXaWR0aCIsInRhcmdldE9mZnNldCIsIndpbmRvd1Njcm9sbFRvcCIsImdldFdpbmRvd1Njcm9sbFRvcCIsIndpbmRvd1Njcm9sbExlZnQiLCJnZXRXaW5kb3dTY3JvbGxMZWZ0Iiwidmlld3BvcnQiLCJnZXRWaWV3cG9ydCIsIk1hdGgiLCJtYXgiLCJ0YXJnZXRIZWlnaHQiLCJ2aXNpYmlsaXR5IiwiZGlzcGxheSIsImVsZW1lbnRIZWlnaHQiLCJlbGVtZW50V2lkdGgiLCJkaW1lbnNpb25zIiwiZHVyYXRpb24iLCJvcGFjaXR5IiwibGFzdCIsIkRhdGUiLCJ0aWNrIiwiZ2V0VGltZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNldFRpbWVvdXQiLCJtcyIsImludGVydmFsIiwiZ2FwIiwiZmFkaW5nIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiaXNFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJuYXRpdmVFbGVtZW50IiwiRXJyb3IiLCJjb250YWluZXIiLCJpdGVtIiwiYm9yZGVyVG9wVmFsdWUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiYm9yZGVyVG9wIiwicGFkZGluZ1RvcFZhbHVlIiwiY29udGFpbmVyUmVjdCIsIml0ZW1SZWN0Iiwib2Zmc2V0Iiwic2Nyb2xsIiwiaXRlbUhlaWdodCIsImdldE91dGVySGVpZ2h0IiwiZ2V0U2VsZWN0aW9uIiwiZW1wdHkiLCJyZW1vdmVBbGxSYW5nZXMiLCJyYW5nZUNvdW50IiwiZ2V0UmFuZ2VBdCIsImdldENsaWVudFJlY3RzIiwiZXJyb3IiLCJjYWxjdWxhdGVkU2Nyb2xsYmFyV2lkdGgiLCJzY3JvbGxEaXYiLCJjcmVhdGVFbGVtZW50Iiwic2Nyb2xsYmFyV2lkdGgiLCJyZW1vdmVDaGlsZCIsImJyb3dzZXIiLCJtYXRjaGVkIiwicmVzb2x2ZVVzZXJBZ2VudCIsInZlcnNpb24iLCJ1YSIsInRvTG93ZXJDYXNlIiwibWF0Y2giLCJleGVjIiwiaW5kZXhPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUdPLElBQU9BLFVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSwrQkFFc0JDLEVBRnRCLEVBRTBCO0FBQ2xCLFVBQUlDLEtBQUssR0FBR0QsRUFBRSxDQUFDRSxXQUFmO0FBQ0EsVUFBSUMsS0FBSyxHQUFHQyxnQkFBZ0IsQ0FBQ0osRUFBRCxDQUE1QjtBQUVBQyxXQUFLLElBQUlJLFVBQVUsQ0FBQ0YsS0FBSyxDQUFDRyxXQUFQLENBQVYsR0FBZ0NELFVBQVUsQ0FBQ0YsS0FBSyxDQUFDSSxZQUFQLENBQW5EO0FBQ0EsYUFBT04sS0FBUDtBQUNIO0FBUkw7QUFBQTtBQUFBLDBCQVVpQkQsRUFWakIsRUFVcUI7QUFDYixVQUFJQyxLQUFLLEdBQUdELEVBQUUsQ0FBQ0UsV0FBZjtBQUNBLFVBQUlDLEtBQUssR0FBR0MsZ0JBQWdCLENBQUNKLEVBQUQsQ0FBNUI7QUFFQUMsV0FBSyxJQUFJSSxVQUFVLENBQUNGLEtBQUssQ0FBQ0csV0FBUCxDQUFWLEdBQWdDRCxVQUFVLENBQUNGLEtBQUssQ0FBQ0ksWUFBUCxDQUFuRDtBQUNBLGFBQU9OLEtBQVA7QUFDSDtBQWhCTDtBQUFBO0FBQUEseUNBa0JnQztBQUN4QixVQUFJTyxHQUFHLEdBQUdDLFFBQVEsQ0FBQ0MsZUFBbkI7QUFDQSxhQUFPLENBQUNDLE1BQU0sQ0FBQ0MsV0FBUCxJQUFzQkosR0FBRyxDQUFDSyxTQUEzQixLQUF5Q0wsR0FBRyxDQUFDTSxTQUFKLElBQWlCLENBQTFELENBQVA7QUFDSDtBQXJCTDtBQUFBO0FBQUEsMENBdUJpQztBQUN6QixVQUFJTixH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QWdDRCxJQUFoQyxDQUFxQ0gsRUFBckMsQ0FKekIsSUFLUixFQUxKO0FBT0EsYUFBTztBQUNISixlQUFPLEVBQUVNLEtBQUssQ0FBQyxDQUFELENBQUwsSUFBWSxFQURsQjtBQUVISCxlQUFPLEVBQUVHLEtBQUssQ0FBQyxDQUFELENBQUwsSUFBWTtBQUZsQixPQUFQO0FBSUg7QUF6YUw7QUFBQTtBQUFBLDhCQTJhcUJ2RyxPQTNhckIsRUEyYThCO0FBQ3RCLGFBQU9BLE9BQU8sQ0FBQ2dDLFlBQVIsSUFBd0IsSUFBL0I7QUFDSDtBQTdhTDs7QUFBQTtBQUFBLEkiLCJmaWxlIjoiN2M3ZWE3Yy1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIERPTUhhbmRsZXIgdXRpbGl0eSBmdW5jdGlvbnNcbiAqL1xuZXhwb3J0ICBjbGFzcyBEb21IYW5kbGVyIHtcbiAgICBcbiAgICBzdGF0aWMgaW5uZXJXaWR0aChlbCkge1xuICAgICAgICBsZXQgd2lkdGggPSBlbC5vZmZzZXRXaWR0aDtcbiAgICAgICAgbGV0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG5cbiAgICAgICAgd2lkdGggKz0gcGFyc2VGbG9hdChzdHlsZS5wYWRkaW5nTGVmdCkgKyBwYXJzZUZsb2F0KHN0eWxlLnBhZGRpbmdSaWdodCk7XG4gICAgICAgIHJldHVybiB3aWR0aDtcbiAgICB9XG5cbiAgICBzdGF0aWMgd2lkdGgoZWwpIHtcbiAgICAgICAgbGV0IHdpZHRoID0gZWwub2Zmc2V0V2lkdGg7XG4gICAgICAgIGxldCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWwpO1xuXG4gICAgICAgIHdpZHRoIC09IHBhcnNlRmxvYXQoc3R5bGUucGFkZGluZ0xlZnQpICsgcGFyc2VGbG9hdChzdHlsZS5wYWRkaW5nUmlnaHQpO1xuICAgICAgICByZXR1cm4gd2lkdGg7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFdpbmRvd1Njcm9sbFRvcCgpIHtcbiAgICAgICAgbGV0IGRvYyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgcmV0dXJuICh3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jLnNjcm9sbFRvcCkgLSAoZG9jLmNsaWVudFRvcCB8fCAwKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0V2luZG93U2Nyb2xsTGVmdCgpIHtcbiAgICAgICAgbGV0IGRvYyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgcmV0dXJuICh3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jLnNjcm9sbExlZnQpIC0gKGRvYy5jbGllbnRMZWZ0IHx8IDApO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRPdXRlcldpZHRoKGVsLCBtYXJnaW4pIHtcbiAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgICBsZXQgd2lkdGggPSBlbC5vZmZzZXRXaWR0aDtcblxuICAgICAgICAgICAgaWYgKG1hcmdpbikge1xuICAgICAgICAgICAgICAgIGxldCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWwpO1xuICAgICAgICAgICAgICAgIHdpZHRoICs9IHBhcnNlRmxvYXQoc3R5bGUubWFyZ2luTGVmdCkgKyBwYXJzZUZsb2F0KHN0eWxlLm1hcmdpblJpZ2h0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHdpZHRoO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0T3V0ZXJIZWlnaHQoZWwsIG1hcmdpbikge1xuICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICAgIGxldCBoZWlnaHQgPSBlbC5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgICAgIGlmIChtYXJnaW4pIHtcbiAgICAgICAgICAgICAgICBsZXQgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsKTtcbiAgICAgICAgICAgICAgICBoZWlnaHQgKz0gcGFyc2VGbG9hdChzdHlsZS5tYXJnaW5Ub3ApICsgcGFyc2VGbG9hdChzdHlsZS5tYXJnaW5Cb3R0b20pO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgcmV0dXJuIGhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgfVxuXHRcblx0c3RhdGljIGdldENsaWVudEhlaWdodChlbCwgbWFyZ2luKSB7XG4gICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgbGV0IGhlaWdodCA9IGVsLmNsaWVudEhlaWdodDtcblxuICAgICAgICAgICAgaWYgKG1hcmdpbikge1xuICAgICAgICAgICAgICAgIGxldCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWwpO1xuICAgICAgICAgICAgICAgIGhlaWdodCArPSBwYXJzZUZsb2F0KHN0eWxlLm1hcmdpblRvcCkgKyBwYXJzZUZsb2F0KHN0eWxlLm1hcmdpbkJvdHRvbSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBoZWlnaHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXRWaWV3cG9ydCgpIHtcbiAgICAgICAgbGV0IHdpbiA9IHdpbmRvdyxcbiAgICAgICAgICAgIGQgPSBkb2N1bWVudCxcbiAgICAgICAgICAgIGUgPSBkLmRvY3VtZW50RWxlbWVudCxcbiAgICAgICAgICAgIGcgPSBkLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0sXG4gICAgICAgICAgICB3ID0gd2luLmlubmVyV2lkdGggfHwgZS5jbGllbnRXaWR0aCB8fCBnLmNsaWVudFdpZHRoLFxuICAgICAgICAgICAgaCA9IHdpbi5pbm5lckhlaWdodCB8fCBlLmNsaWVudEhlaWdodCB8fCBnLmNsaWVudEhlaWdodDtcblxuICAgICAgICByZXR1cm4ge3dpZHRoOiB3LCBoZWlnaHQ6IGh9O1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRPZmZzZXQoZWwpIHtcbiAgICAgICAgdmFyIHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdG9wOiByZWN0LnRvcCArIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wLFxuICAgICAgICAgICAgbGVmdDogcmVjdC5sZWZ0ICsgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc3RhdGljIGdlbmVyYXRlWkluZGV4KCkge1xuICAgICAgICB0aGlzLnppbmRleCA9IHRoaXMuemluZGV4fHw5OTk7XG4gICAgICAgIHJldHVybiArK3RoaXMuemluZGV4O1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRDdXJyZW50WkluZGV4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy56aW5kZXg7XG4gICAgfVxuICAgIFxuICAgIHN0YXRpYyBpbmRleChlbGVtZW50KSB7XG4gICAgICAgIGxldCBjaGlsZHJlbiA9IGVsZW1lbnQucGFyZW50Tm9kZS5jaGlsZE5vZGVzO1xuICAgICAgICBsZXQgbnVtID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGNoaWxkcmVuW2ldID09PSBlbGVtZW50KSByZXR1cm4gbnVtO1xuICAgICAgICAgICAgaWYgKGNoaWxkcmVuW2ldLm5vZGVUeXBlID09PSAxKSBudW0rKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgc3RhdGljIGFkZE11bHRpcGxlQ2xhc3NlcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSB7XG4gICAgICAgICAgICBsZXQgc3R5bGVzID0gY2xhc3NOYW1lLnNwbGl0KCcgJyk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChzdHlsZXNbaV0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgc3R5bGVzID0gY2xhc3NOYW1lLnNwbGl0KCcgJyk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9ICcgJyArIHN0eWxlc1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBhZGRDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KVxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9ICcgJyArIGNsYXNzTmFtZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdClcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NOYW1lLnJlcGxhY2UobmV3IFJlZ0V4cCgnKF58XFxcXGIpJyArIGNsYXNzTmFtZS5zcGxpdCgnICcpLmpvaW4oJ3wnKSArICcoXFxcXGJ8JCknLCAnZ2knKSwgJyAnKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaGFzQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdClcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cCgnKF58ICknICsgY2xhc3NOYW1lICsgJyggfCQpJywgJ2dpJykudGVzdChlbGVtZW50LmNsYXNzTmFtZSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGZpbmQoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGZpbmRTaW5nbGUoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRIZWlnaHQoZWwpIHtcbiAgICAgICAgbGV0IGhlaWdodCA9IGVsLm9mZnNldEhlaWdodDtcbiAgICAgICAgbGV0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG5cbiAgICAgICAgaGVpZ2h0IC09IHBhcnNlRmxvYXQoc3R5bGUucGFkZGluZ1RvcCkgKyBwYXJzZUZsb2F0KHN0eWxlLnBhZGRpbmdCb3R0b20pICsgcGFyc2VGbG9hdChzdHlsZS5ib3JkZXJUb3BXaWR0aCkgKyBwYXJzZUZsb2F0KHN0eWxlLmJvcmRlckJvdHRvbVdpZHRoKTtcblxuICAgICAgICByZXR1cm4gaGVpZ2h0O1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRXaWR0aChlbCkge1xuICAgICAgICBsZXQgd2lkdGggPSBlbC5vZmZzZXRXaWR0aDtcbiAgICAgICAgbGV0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG5cbiAgICAgICAgd2lkdGggLT0gcGFyc2VGbG9hdChzdHlsZS5wYWRkaW5nTGVmdCkgKyBwYXJzZUZsb2F0KHN0eWxlLnBhZGRpbmdSaWdodCkgKyBwYXJzZUZsb2F0KHN0eWxlLmJvcmRlckxlZnRXaWR0aCkgKyBwYXJzZUZsb2F0KHN0eWxlLmJvcmRlclJpZ2h0V2lkdGgpO1xuXG4gICAgICAgIHJldHVybiB3aWR0aDtcbiAgICB9XG5cbiAgICBzdGF0aWMgYWJzb2x1dGVQb3NpdGlvbihlbGVtZW50LCB0YXJnZXQpIHtcbiAgICAgICAgbGV0IGVsZW1lbnREaW1lbnNpb25zID0gZWxlbWVudC5vZmZzZXRQYXJlbnQgPyB7IHdpZHRoOiBlbGVtZW50Lm9mZnNldFdpZHRoLCBoZWlnaHQ6IGVsZW1lbnQub2Zmc2V0SGVpZ2h0IH0gOiB0aGlzLmdldEhpZGRlbkVsZW1lbnREaW1lbnNpb25zKGVsZW1lbnQpXG4gICAgICAgIGxldCBlbGVtZW50T3V0ZXJIZWlnaHQgPSBlbGVtZW50RGltZW5zaW9ucy5oZWlnaHQ7XG4gICAgICAgIGxldCBlbGVtZW50T3V0ZXJXaWR0aCA9IGVsZW1lbnREaW1lbnNpb25zLndpZHRoO1xuICAgICAgICBsZXQgdGFyZ2V0T3V0ZXJIZWlnaHQgPSB0YXJnZXQub2Zmc2V0SGVpZ2h0O1xuICAgICAgICBsZXQgdGFyZ2V0T3V0ZXJXaWR0aCA9IHRhcmdldC5vZmZzZXRXaWR0aDtcbiAgICAgICAgbGV0IHRhcmdldE9mZnNldCA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgbGV0IHdpbmRvd1Njcm9sbFRvcCA9IHRoaXMuZ2V0V2luZG93U2Nyb2xsVG9wKCk7XG4gICAgICAgIGxldCB3aW5kb3dTY3JvbGxMZWZ0ID0gdGhpcy5nZXRXaW5kb3dTY3JvbGxMZWZ0KCk7XG4gICAgICAgIGxldCB2aWV3cG9ydCA9IHRoaXMuZ2V0Vmlld3BvcnQoKTtcbiAgICAgICAgbGV0IHRvcCwgbGVmdDtcblxuICAgICAgICBpZiAodGFyZ2V0T2Zmc2V0LnRvcCArIHRhcmdldE91dGVySGVpZ2h0ICsgZWxlbWVudE91dGVySGVpZ2h0ID4gdmlld3BvcnQuaGVpZ2h0KSB7XG4gICAgICAgICAgICB0b3AgPSB0YXJnZXRPZmZzZXQudG9wICsgd2luZG93U2Nyb2xsVG9wIC0gZWxlbWVudE91dGVySGVpZ2h0O1xuICAgICAgICAgICAgaWYodG9wIDwgMCkge1xuICAgICAgICAgICAgICAgIHRvcCA9IHdpbmRvd1Njcm9sbFRvcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0b3AgPSB0YXJnZXRPdXRlckhlaWdodCArIHRhcmdldE9mZnNldC50b3AgKyB3aW5kb3dTY3JvbGxUb3A7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFyZ2V0T2Zmc2V0LmxlZnQgKyB0YXJnZXRPdXRlcldpZHRoICsgZWxlbWVudE91dGVyV2lkdGggPiB2aWV3cG9ydC53aWR0aClcbiAgICAgICAgICAgIGxlZnQgPSBNYXRoLm1heCgwLCB0YXJnZXRPZmZzZXQubGVmdCArIHdpbmRvd1Njcm9sbExlZnQgKyB0YXJnZXRPdXRlcldpZHRoIC0gZWxlbWVudE91dGVyV2lkdGgpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBsZWZ0ID0gdGFyZ2V0T2Zmc2V0LmxlZnQgKyB3aW5kb3dTY3JvbGxMZWZ0O1xuXG4gICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gdG9wICsgJ3B4JztcbiAgICAgICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gbGVmdCArICdweCc7XG4gICAgfVxuXG4gICAgc3RhdGljIHJlbGF0aXZlUG9zaXRpb24oZWxlbWVudCwgdGFyZ2V0KSB7XG4gICAgICAgIGxldCBlbGVtZW50RGltZW5zaW9ucyA9IGVsZW1lbnQub2Zmc2V0UGFyZW50ID8geyB3aWR0aDogZWxlbWVudC5vZmZzZXRXaWR0aCwgaGVpZ2h0OiBlbGVtZW50Lm9mZnNldEhlaWdodCB9IDogdGhpcy5nZXRIaWRkZW5FbGVtZW50RGltZW5zaW9ucyhlbGVtZW50KTtcbiAgICAgICAgY29uc3QgdGFyZ2V0SGVpZ2h0ID0gdGFyZ2V0Lm9mZnNldEhlaWdodDtcbiAgICAgICAgY29uc3QgdGFyZ2V0T2Zmc2V0ID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCB2aWV3cG9ydCA9IHRoaXMuZ2V0Vmlld3BvcnQoKTtcbiAgICAgICAgbGV0IHRvcCwgbGVmdDtcblxuICAgICAgICBpZiAoKHRhcmdldE9mZnNldC50b3AgKyB0YXJnZXRIZWlnaHQgKyBlbGVtZW50RGltZW5zaW9ucy5oZWlnaHQpID4gdmlld3BvcnQuaGVpZ2h0KSB7XG4gICAgICAgICAgICB0b3AgPSAtMSAqIChlbGVtZW50RGltZW5zaW9ucy5oZWlnaHQpO1xuICAgICAgICAgICAgaWYgKHRhcmdldE9mZnNldC50b3AgKyB0b3AgPCAwKSB7XG4gICAgICAgICAgICAgICAgdG9wID0gLTEgKiB0YXJnZXRPZmZzZXQudG9wO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdG9wID0gdGFyZ2V0SGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVsZW1lbnREaW1lbnNpb25zLndpZHRoID4gdmlld3BvcnQud2lkdGgpIHtcbiAgICAgICAgICAgIC8vIGVsZW1lbnQgd2lkZXIgdGhlbiB2aWV3cG9ydCBhbmQgY2Fubm90IGZpdCBvbiBzY3JlZW4gKGFsaWduIGF0IGxlZnQgc2lkZSBvZiB2aWV3cG9ydClcbiAgICAgICAgICAgIGxlZnQgPSB0YXJnZXRPZmZzZXQubGVmdCAqIC0xO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCh0YXJnZXRPZmZzZXQubGVmdCArIGVsZW1lbnREaW1lbnNpb25zLndpZHRoKSA+IHZpZXdwb3J0LndpZHRoKSB7XG4gICAgICAgICAgICAvLyBlbGVtZW50IHdpZGVyIHRoZW4gdmlld3BvcnQgYnV0IGNhbiBiZSBmaXQgb24gc2NyZWVuIChhbGlnbiBhdCByaWdodCBzaWRlIG9mIHZpZXdwb3J0KVxuICAgICAgICAgICAgbGVmdCA9ICh0YXJnZXRPZmZzZXQubGVmdCArIGVsZW1lbnREaW1lbnNpb25zLndpZHRoIC0gdmlld3BvcnQud2lkdGgpICogLTE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBlbGVtZW50IGZpdHMgb24gc2NyZWVuIChhbGlnbiB3aXRoIHRhcmdldClcbiAgICAgICAgICAgIGxlZnQgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSB0b3AgKyAncHgnO1xuICAgICAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSBsZWZ0ICsgJ3B4JztcbiAgICB9XG4gICAgc3RhdGljIGdldEhpZGRlbkVsZW1lbnRPdXRlckhlaWdodChlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBsZXQgZWxlbWVudEhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcblxuICAgICAgICByZXR1cm4gZWxlbWVudEhlaWdodDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0SGlkZGVuRWxlbWVudE91dGVyV2lkdGgoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbGV0IGVsZW1lbnRXaWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgZWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuXG4gICAgICAgIHJldHVybiBlbGVtZW50V2lkdGg7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldEhpZGRlbkVsZW1lbnREaW1lbnNpb25zKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGRpbWVuc2lvbnMgPSB7fTtcbiAgICAgICAgZWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIGRpbWVuc2lvbnMud2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICBkaW1lbnNpb25zLmhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcblxuICAgICAgICByZXR1cm4gZGltZW5zaW9ucztcbiAgICB9XG5cbiAgICBzdGF0aWMgZmFkZUluKGVsZW1lbnQsIGR1cmF0aW9uKSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDA7XG5cbiAgICAgICAgdmFyIGxhc3QgPSArbmV3IERhdGUoKTtcbiAgICAgICAgdmFyIG9wYWNpdHkgPSAwO1xuICAgICAgICB2YXIgdGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIG9wYWNpdHkgPSArZWxlbWVudC5zdHlsZS5vcGFjaXR5ICsgKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gbGFzdCkgLyBkdXJhdGlvbjtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IG9wYWNpdHk7XG4gICAgICAgICAgICBsYXN0ID0gK25ldyBEYXRlKCk7XG5cbiAgICAgICAgICAgIGlmICgrb3BhY2l0eSA8IDEpIHtcbiAgICAgICAgICAgICAgICAod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSAmJiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGljaykpIHx8IHNldFRpbWVvdXQodGljaywgMTYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHRpY2soKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZmFkZU91dChlbGVtZW50LCBtcykge1xuICAgICAgICB2YXIgb3BhY2l0eSA9IDEsXG4gICAgICAgICAgICBpbnRlcnZhbCA9IDUwLFxuICAgICAgICAgICAgZHVyYXRpb24gPSBtcyxcbiAgICAgICAgICAgIGdhcCA9IGludGVydmFsIC8gZHVyYXRpb247XG5cbiAgICAgICAgbGV0IGZhZGluZyA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIG9wYWNpdHkgLT0gZ2FwO1xuXG4gICAgICAgICAgICBpZiAob3BhY2l0eSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eSA9IDA7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChmYWRpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBvcGFjaXR5O1xuICAgICAgICB9LCBpbnRlcnZhbCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFVzZXJBZ2VudCgpIHtcbiAgICAgICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzSU9TKCkge1xuICAgICAgICByZXR1cm4gL2lQYWR8aVBob25lfGlQb2QvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgIXdpbmRvd1snTVNTdHJlYW0nXTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNBbmRyb2lkKCkge1xuICAgICAgICByZXR1cm4gLyhhbmRyb2lkKS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGFwcGVuZENoaWxkKGVsZW1lbnQsIHRhcmdldCkge1xuICAgICAgICBpZih0aGlzLmlzRWxlbWVudCh0YXJnZXQpKVxuICAgICAgICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICBlbHNlIGlmKHRhcmdldC5lbCAmJiB0YXJnZXQuZWwubmF0aXZlRWxlbWVudClcbiAgICAgICAgICAgIHRhcmdldC5lbC5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBhcHBlbmQgJyArIHRhcmdldCArICcgdG8gJyArIGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHN0YXRpYyBzY3JvbGxJblZpZXcoY29udGFpbmVyLCBpdGVtKSB7XG4gICAgICAgIGxldCBib3JkZXJUb3BWYWx1ZSA9IGdldENvbXB1dGVkU3R5bGUoY29udGFpbmVyKS5nZXRQcm9wZXJ0eVZhbHVlKCdib3JkZXJUb3BXaWR0aCcpO1xuICAgICAgICBsZXQgYm9yZGVyVG9wID0gYm9yZGVyVG9wVmFsdWUgPyBwYXJzZUZsb2F0KGJvcmRlclRvcFZhbHVlKSA6IDA7XG4gICAgICAgIGxldCBwYWRkaW5nVG9wVmFsdWUgPSBnZXRDb21wdXRlZFN0eWxlKGNvbnRhaW5lcikuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZ1RvcCcpO1xuICAgICAgICBsZXQgcGFkZGluZ1RvcCA9IHBhZGRpbmdUb3BWYWx1ZSA/IHBhcnNlRmxvYXQocGFkZGluZ1RvcFZhbHVlKSA6IDA7XG4gICAgICAgIGxldCBjb250YWluZXJSZWN0ID0gY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBsZXQgaXRlbVJlY3QgPSBpdGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBsZXQgb2Zmc2V0ID0gKGl0ZW1SZWN0LnRvcCArIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wKSAtIChjb250YWluZXJSZWN0LnRvcCArIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wKSAtIGJvcmRlclRvcCAtIHBhZGRpbmdUb3A7XG4gICAgICAgIGxldCBzY3JvbGwgPSBjb250YWluZXIuc2Nyb2xsVG9wO1xuICAgICAgICBsZXQgZWxlbWVudEhlaWdodCA9IGNvbnRhaW5lci5jbGllbnRIZWlnaHQ7XG4gICAgICAgIGxldCBpdGVtSGVpZ2h0ID0gdGhpcy5nZXRPdXRlckhlaWdodChpdGVtKTtcblxuICAgICAgICBpZiAob2Zmc2V0IDwgMCkge1xuICAgICAgICAgICAgY29udGFpbmVyLnNjcm9sbFRvcCA9IHNjcm9sbCArIG9mZnNldDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgob2Zmc2V0ICsgaXRlbUhlaWdodCkgPiBlbGVtZW50SGVpZ2h0KSB7XG4gICAgICAgICAgICBjb250YWluZXIuc2Nyb2xsVG9wID0gc2Nyb2xsICsgb2Zmc2V0IC0gZWxlbWVudEhlaWdodCArIGl0ZW1IZWlnaHQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgY2xlYXJTZWxlY3Rpb24oKSB7XG4gICAgICAgIGlmKHdpbmRvdy5nZXRTZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIGlmKHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5lbXB0eSkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5lbXB0eSgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmKHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMgJiYgd2luZG93LmdldFNlbGVjdGlvbigpLnJhbmdlQ291bnQgPiAwICYmIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5nZXRSYW5nZUF0KDApLmdldENsaWVudFJlY3RzKCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGRvY3VtZW50WydzZWxlY3Rpb24nXSAmJiBkb2N1bWVudFsnc2VsZWN0aW9uJ10uZW1wdHkpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnRbJ3NlbGVjdGlvbiddLmVtcHR5KCk7XG4gICAgICAgICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgLy9pZ25vcmUgSUUgYnVnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgY2FsY3VsYXRlU2Nyb2xsYmFyV2lkdGgoZWwpIHtcbiAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgICBsZXQgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsKTtcbiAgICAgICAgICAgIHJldHVybiAoZWwub2Zmc2V0V2lkdGggLSBlbC5jbGllbnRXaWR0aCAtIHBhcnNlRmxvYXQoc3R5bGUuYm9yZGVyTGVmdFdpZHRoKSAtIHBhcnNlRmxvYXQoc3R5bGUuYm9yZGVyUmlnaHRXaWR0aCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYodGhpcy5jYWxjdWxhdGVkU2Nyb2xsYmFyV2lkdGggIT0gbnVsbClcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jYWxjdWxhdGVkU2Nyb2xsYmFyV2lkdGg7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBzY3JvbGxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgc2Nyb2xsRGl2LmNsYXNzTmFtZSA9IFwicC1zY3JvbGxiYXItbWVhc3VyZVwiO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JvbGxEaXYpO1xuXG4gICAgICAgICAgICBsZXQgc2Nyb2xsYmFyV2lkdGggPSBzY3JvbGxEaXYub2Zmc2V0V2lkdGggLSBzY3JvbGxEaXYuY2xpZW50V2lkdGg7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNjcm9sbERpdik7XG5cbiAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlZFNjcm9sbGJhcldpZHRoID0gc2Nyb2xsYmFyV2lkdGg7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBzY3JvbGxiYXJXaWR0aDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXRCcm93c2VyKCkge1xuICAgICAgICBpZighdGhpcy5icm93c2VyKSB7XG4gICAgICAgICAgICBsZXQgbWF0Y2hlZCA9IHRoaXMucmVzb2x2ZVVzZXJBZ2VudCgpO1xuICAgICAgICAgICAgdGhpcy5icm93c2VyID0ge307XG5cbiAgICAgICAgICAgIGlmIChtYXRjaGVkLmJyb3dzZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJyb3dzZXJbbWF0Y2hlZC5icm93c2VyXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5icm93c2VyWyd2ZXJzaW9uJ10gPSBtYXRjaGVkLnZlcnNpb247XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmJyb3dzZXJbJ2Nocm9tZSddKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5icm93c2VyWyd3ZWJraXQnXSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYnJvd3Nlclsnd2Via2l0J10pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJyb3dzZXJbJ3NhZmFyaSddID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmJyb3dzZXI7XG4gICAgfVxuXG4gICAgc3RhdGljIHJlc29sdmVVc2VyQWdlbnQoKSB7XG4gICAgICAgIGxldCB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgbGV0IG1hdGNoID0gLyhjaHJvbWUpWyBdKFtcXHcuXSspLy5leGVjKHVhKSB8fFxuICAgICAgICAgICAgLyh3ZWJraXQpWyBdKFtcXHcuXSspLy5leGVjKHVhKSB8fFxuICAgICAgICAgICAgLyhvcGVyYSkoPzouKnZlcnNpb258KVsgXShbXFx3Ll0rKS8uZXhlYyh1YSkgfHxcbiAgICAgICAgICAgIC8obXNpZSkgKFtcXHcuXSspLy5leGVjKHVhKSB8fFxuICAgICAgICAgICAgKHVhLmluZGV4T2YoXCJjb21wYXRpYmxlXCIpIDwgMCAmJiAvKG1vemlsbGEpKD86Lio/IHJ2OihbXFx3Ll0rKXwpLy5leGVjKHVhKSkgfHxcbiAgICAgICAgICAgIFtdO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBicm93c2VyOiBtYXRjaFsxXSB8fCBcIlwiLFxuICAgICAgICAgICAgdmVyc2lvbjogbWF0Y2hbMl0gfHwgXCIwXCJcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNWaXNpYmxlKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0UGFyZW50ICE9IG51bGw7XG4gICAgfSBcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==