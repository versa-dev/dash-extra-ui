webpackHotUpdateextra_dash_ui_components("main",{

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/lib/components/OrganizationChart/OrganizationChart.css":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/lib/components/OrganizationChart/OrganizationChart.css ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".p-organizationchart .p-organizationchart-table {\n    border-spacing: 0;\n    border-collapse: separate;\n    margin: 0 auto;\n}\n\n.p-organizationchart .p-organizationchart-table > tbody > tr > td {\n    text-align: center;\n    vertical-align: top;\n    padding: 0;\n    padding: 0 .75em;\n}\n\n.p-organizationchart .p-organizationchart-node-content {\n    padding: .5em .75em;\n    display: inline-block;\n    position: relative;\n}\n\n.p-organizationchart .p-organizationchart-node-content .p-node-toggler {\n    position: absolute;\n    bottom: -9px;\n    margin-left: -8px;\n    z-index: 2;\n    left: 50%;\n    user-select: none;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n}\n\n.p-organizationchart .p-organizationchart-line-down {\n    margin: 0 auto;\n    height: 20px;\n    width: 1px;\n    float: none;\n}\n\n.p-organizationchart .p-organizationchart-line-right {\n    float: none;\n    border-radius: 0px;\n}\n\n.p-organizationchart .p-organizationchart-line-left {\n    float: none;\n    border-radius: 0;\n}\n\n.p-organizationchart .p-organizationchart-node-content.p-organizationchart-selectable-node {\n    cursor: pointer;\n}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/lib/components/OrganizationChart/OrganizationChart.css":
/*!********************************************************************!*\
  !*** ./src/lib/components/OrganizationChart/OrganizationChart.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./OrganizationChart.css */ "./node_modules/css-loader/dist/cjs.js!./src/lib/components/OrganizationChart/OrganizationChart.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"insertAt":"top","hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader/dist/cjs.js!./OrganizationChart.css */ "./node_modules/css-loader/dist/cjs.js!./src/lib/components/OrganizationChart/OrganizationChart.css", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./OrganizationChart.css */ "./node_modules/css-loader/dist/cjs.js!./src/lib/components/OrganizationChart/OrganizationChart.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/lib/components/OrganizationChart/OrganizationChart.react.js":
/*!*************************************************************************!*\
  !*** ./src/lib/components/OrganizationChart/OrganizationChart.react.js ***!
  \*************************************************************************/
/*! exports provided: OrganizationChartNode, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationChartNode", function() { return OrganizationChartNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OrganizationChart; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _OrganizationChart_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OrganizationChart.css */ "./src/lib/components/OrganizationChart/OrganizationChart.css");
/* harmony import */ var _OrganizationChart_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_OrganizationChart_css__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var OrganizationChartNode =
/*#__PURE__*/
function (_Component) {
  _inherits(OrganizationChartNode, _Component);

  function OrganizationChartNode(props) {
    var _this;

    _classCallCheck(this, OrganizationChartNode);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(OrganizationChartNode).call(this, props));
    _this.node = _this.props.node;
    _this.state = {
      expanded: _this.node.expanded
    };
    return _this;
  }

  _createClass(OrganizationChartNode, [{
    key: "getLeaf",
    value: function getLeaf() {
      return this.node.leaf === false ? false : !(this.node.children && this.node.children.length);
    }
  }, {
    key: "getColspan",
    value: function getColspan() {
      return this.node.children && this.node.children.length ? this.node.children.length * 2 : null;
    }
  }, {
    key: "onNodeClick",
    value: function onNodeClick(event, node) {
      this.props.onNodeClick(event, node);
    }
  }, {
    key: "toggleNode",
    value: function toggleNode(event, node) {
      var _expanded = !this.state.expanded;

      this.setState({
        expanded: _expanded
      });
      event.preventDefault();
    }
  }, {
    key: "isSelected",
    value: function isSelected() {
      return this.props.isSelected(this.node);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      this.node = this.props.node;
      var colspan = this.getColspan();
      var nodeStyleClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()('p-organizationchart-node-content', this.node.className, {
        'p-organizationchart-selectable-node': this.props.selectionMode && this.node.selectable !== false,
        'p-highlight': this.isSelected()
      }),
          nodeLabel = this.props.nodeTemplate && this.props.nodeTemplate(this.node) ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.props.nodeTemplate(this.node)) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.node.label),
          toggleIcon = classnames__WEBPACK_IMPORTED_MODULE_2___default()('p-node-toggler-icon', {
        'pi pi-chevron-down': this.state.expanded,
        'pi pi-chevron-up': !this.state.expanded
      }),
          nodeContent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        colSpan: colspan
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: nodeStyleClass,
        onClick: function onClick(e) {
          return _this2.onNodeClick(e, _this2.node);
        }
      }, nodeLabel, !this.getLeaf() && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "p-node-toggler p-link",
        onClick: function onClick(e) {
          return _this2.toggleNode(e, _this2.node);
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: toggleIcon
      })))));

      var _visibility = !this.getLeaf() && this.state.expanded ? 'inherit' : 'hidden',
          linesDown = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        style: {
          visibility: _visibility
        },
        className: "p-organizationchart-lines"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        colSpan: colspan
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-organizationchart-line-down"
      }))),
          nodeChildLength = this.node.children && this.node.children.length,
          linesMiddle = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        style: {
          visibility: _visibility
        },
        className: "p-organizationchart-lines"
      }, this.node.children && this.node.children.map(function (item, index) {
        var leftClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()('p-organizationchart-line-left', {
          'p-organizationchart-line-top': index !== 0
        }),
            rightClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()('p-organizationchart-line-right', {
          'p-organizationchart-line-top': index !== nodeChildLength - 1
        });
        console.log(leftClass, rightClass);
        return [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          key: index + '_lineleft',
          className: leftClass
        }, "\xA0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          key: index + '_lineright',
          className: rightClass
        }, "\xA0")];
      })),
          childNodes = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        style: {
          visibility: _visibility
        },
        className: "p-organizationchart-nodes"
      }, this.node.children && this.node.children.map(function (child, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          key: index,
          colSpan: "2"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OrganizationChartNode, {
          node: child,
          nodeTemplate: _this2.props.nodeTemplate,
          selectionMode: _this2.props.selectionMode,
          onNodeClick: _this2.props.onNodeClick,
          isSelected: _this2.props.isSelected
        }));
      }));

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        className: "p-organizationchart-table"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, nodeContent, linesDown, linesMiddle, childNodes));
    }
  }]);

  return OrganizationChartNode;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(OrganizationChartNode, "defaultProps", {
  node: null,
  nodeTemplate: null,
  root: false,
  first: false,
  last: false,
  selectionMode: null,
  onNodeClick: null,
  isSelected: null
});

_defineProperty(OrganizationChartNode, "propTypes", {
  node: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  nodeTemplate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  root: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  first: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  last: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  selectionMode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onNodeClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  isSelected: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
});

var OrganizationChart =
/*#__PURE__*/
function (_Component2) {
  _inherits(OrganizationChart, _Component2);

  function OrganizationChart(props) {
    var _this3;

    _classCallCheck(this, OrganizationChart);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(OrganizationChart).call(this, props));
    _this3.root = _this3.props.value && _this3.props.value.length ? _this3.props.value[0] : null;
    _this3.onNodeClick = _this3.onNodeClick.bind(_assertThisInitialized(_this3));
    _this3.isSelected = _this3.isSelected.bind(_assertThisInitialized(_this3));
    return _this3;
  }

  _createClass(OrganizationChart, [{
    key: "onNodeClick",
    value: function onNodeClick(event, node) {
      if (this.props.selectionMode) {
        var eventTarget = event.target;

        if (eventTarget.className && (eventTarget.className.indexOf('p-node-toggler') !== -1 || eventTarget.className.indexOf('p-node-toggler-icon') !== -1)) {
          return;
        }

        if (node.selectable === false) {
          return;
        }

        var index = this.findIndexInSelection(node);
        var selected = index >= 0;
        var selection;

        if (this.props.selectionMode === 'single') {
          if (selected) {
            selection = null;

            if (this.props.onNodeUnselect) {
              this.props.onNodeUnselect({
                originalEvent: event,
                node: node
              });
            }
          } else {
            selection = node;

            if (this.props.onNodeSelect) {
              this.props.onNodeSelect({
                originalEvent: event,
                node: node
              });
            }
          }
        } else if (this.props.selectionMode === 'multiple') {
          if (selected) {
            selection = this.props.selection.filter(function (val, i) {
              return i !== index;
            });

            if (this.props.onNodeUnselect) {
              this.props.onNodeUnselect({
                originalEvent: event,
                node: node
              });
            }
          } else {
            selection = [].concat(_toConsumableArray(this.props.selection || []), [node]);

            if (this.props.onNodeSelect) {
              this.props.onNodeSelect({
                originalEvent: event,
                node: node
              });
            }
          }
        }

        if (this.props.onSelectionChange) {
          this.props.onSelectionChange({
            originalEvent: event,
            data: selection
          });
        }
      }
    }
  }, {
    key: "findIndexInSelection",
    value: function findIndexInSelection(node) {
      var index = -1;

      if (this.props.selectionMode && this.props.selection) {
        if (this.props.selectionMode === 'single') {
          index = this.props.selection === node ? 0 : -1;
        } else if (this.props.selectionMode === 'multiple') {
          for (var i = 0; i < this.props.selection.length; i++) {
            if (this.props.selection[i] === node) {
              index = i;
              break;
            }
          }
        }
      }

      return index;
    }
  }, {
    key: "isSelected",
    value: function isSelected(node) {
      return this.findIndexInSelection(node) !== -1;
    }
  }, {
    key: "render",
    value: function render() {
      // return 'noo'
      this.root = this.props.value && this.props.value.length ? this.props.value[0] : null;
      var className = classnames__WEBPACK_IMPORTED_MODULE_2___default()('p-organizationchart p-component', this.props.className);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: this.props.id,
        style: this.props.style,
        className: className
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OrganizationChartNode, {
        node: this.root,
        nodeTemplate: this.props.nodeTemplate,
        selectionMode: this.props.selectionMode,
        onNodeClick: this.onNodeClick,
        isSelected: this.isSelected
      }));
    }
  }]);

  return OrganizationChart;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(OrganizationChart, "defaultProps", {
  id: null,
  value: null,
  style: null,
  className: null,
  selectionMode: null,
  selection: null,
  nodeTemplate: null,
  onSelectionChange: null,
  onNodeSelect: null,
  onNodeUnselect: null
});

_defineProperty(OrganizationChart, "propTypes", {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  selectionMode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  selection: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  nodeTemplate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  onSelectionChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onNodeSelect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onNodeUnselect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
});



/***/ }),

/***/ "./src/lib/components/OrganizationChart/OrganizationChartComponent.react.js":
/*!**********************************************************************************!*\
  !*** ./src/lib/components/OrganizationChart/OrganizationChartComponent.react.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OrganizationChartComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _OrganizationChart_react_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrganizationChart.react.js */ "./src/lib/components/OrganizationChart/OrganizationChart.react.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


 // import './OrganizationChart.css'



var OrganizationChartComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(OrganizationChartComponent, _Component);

  function OrganizationChartComponent() {
    var _this;

    _classCallCheck(this, OrganizationChartComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(OrganizationChartComponent).call(this));
    _this.state = {
      data1: [{
        label: 'CEO',
        type: 'person',
        className: 'p-person',
        expanded: true,
        data: {
          name: 'Walter White',
          avatar: 'walter.jpg'
        },
        children: [{
          label: 'CFO',
          type: 'person',
          className: 'p-person',
          expanded: true,
          data: {
            name: 'Saul Goodman',
            avatar: 'saul.jpg'
          },
          children: [{
            label: 'Tax',
            className: 'department-cfo'
          }, {
            label: 'Legal',
            className: 'department-cfo'
          }]
        }, {
          label: 'COO',
          type: 'person',
          className: 'p-person',
          expanded: true,
          data: {
            name: 'Mike E.',
            avatar: 'mike.jpg'
          },
          children: [{
            label: 'Operations',
            className: 'department-coo'
          }]
        }, {
          label: 'CTO',
          type: 'person',
          className: 'p-person',
          expanded: true,
          data: {
            name: 'Jesse Pinkman',
            avatar: 'jesse.jpg'
          },
          children: [{
            label: 'Development',
            className: 'department-cto',
            expanded: true,
            children: [{
              label: 'Analysis',
              className: 'department-cto'
            }, {
              label: 'Front End',
              className: 'department-cto'
            }, {
              label: 'Back End',
              className: 'department-cto'
            }]
          }, {
            label: 'QA',
            className: 'department-cto'
          }, {
            label: 'R&D',
            className: 'department-cto'
          }]
        }]
      }],
      data2: [{
        label: 'F.C Barcelona',
        expanded: true,
        children: [{
          label: 'F.C Barcelona',
          expanded: true,
          children: [{
            label: 'Chelsea FC'
          }, {
            label: 'F.C. Barcelona'
          }]
        }, {
          label: 'Real Madrid',
          expanded: true,
          children: [{
            label: 'Bayern Munich'
          }, {
            label: 'Real Madrid'
          }]
        }]
      }],
      selection: []
    };
    _this.nodeTemplate = _this.nodeTemplate.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(OrganizationChartComponent, [{
    key: "nodeTemplate",
    value: function nodeTemplate(node) {
      if (node.type === 'person') {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "node-header"
        }, node.label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "node-content"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          alt: node.data.avatar,
          src: "showcase/resources/demo/images/organization/".concat(node.data.avatar),
          style: {
            width: '32px'
          }
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, node.data.name)));
      }

      if (node.type === 'department') {
        return node.label;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      // return 'hey test'
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "content-section implementation organizationchart-demo"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Advanced"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OrganizationChart_react_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
        value: this.state.data1,
        nodeTemplate: this.nodeTemplate,
        selection: this.state.selection,
        selectionMode: "multiple",
        onSelectionChange: function onSelectionChange(event) {
          return _this2.setState({
            selection: event.data
          });
        },
        className: "company"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Basic"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OrganizationChart_react_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
        value: this.state.data2
      })));
    }
  }]);

  return OrganizationChartComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


OrganizationChartComponent.defaultProps = {};
OrganizationChartComponent.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};

/***/ }),

/***/ "./src/lib/components/OrganizationChartComponent.react.js":
false,

/***/ "./src/lib/index.js":
/*!**************************!*\
  !*** ./src/lib/index.js ***!
  \**************************/
/*! exports provided: ExtraDashUiComponents, OrganizationChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ExtraDashUiComponents_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ExtraDashUiComponents.react */ "./src/lib/components/ExtraDashUiComponents.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExtraDashUiComponents", function() { return _components_ExtraDashUiComponents_react__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _components_OrganizationChart_OrganizationChartComponent_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/OrganizationChart/OrganizationChartComponent.react */ "./src/lib/components/OrganizationChart/OrganizationChartComponent.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrganizationChartComponent", function() { return _components_OrganizationChart_OrganizationChartComponent_react__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* eslint-disable import/prefer-default-export */




/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvT3JnYW5pemF0aW9uQ2hhcnQvT3JnYW5pemF0aW9uQ2hhcnQuY3NzIiwid2VicGFjazovL2V4dHJhX2Rhc2hfdWlfY29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZXh0cmFfZGFzaF91aV9jb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovL2V4dHJhX2Rhc2hfdWlfY29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vZXh0cmFfZGFzaF91aV9jb21wb25lbnRzLy4vc3JjL2xpYi9jb21wb25lbnRzL09yZ2FuaXphdGlvbkNoYXJ0L09yZ2FuaXphdGlvbkNoYXJ0LmNzcz8wODNmIiwid2VicGFjazovL2V4dHJhX2Rhc2hfdWlfY29tcG9uZW50cy8uL3NyYy9saWIvY29tcG9uZW50cy9Pcmdhbml6YXRpb25DaGFydC9Pcmdhbml6YXRpb25DaGFydC5yZWFjdC5qcyIsIndlYnBhY2s6Ly9leHRyYV9kYXNoX3VpX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvT3JnYW5pemF0aW9uQ2hhcnQvT3JnYW5pemF0aW9uQ2hhcnRDb21wb25lbnQucmVhY3QuanMiLCJ3ZWJwYWNrOi8vZXh0cmFfZGFzaF91aV9jb21wb25lbnRzLy4vc3JjL2xpYi9pbmRleC5qcyJdLCJuYW1lcyI6WyJPcmdhbml6YXRpb25DaGFydE5vZGUiLCJwcm9wcyIsIm5vZGUiLCJzdGF0ZSIsImV4cGFuZGVkIiwibGVhZiIsImNoaWxkcmVuIiwibGVuZ3RoIiwiZXZlbnQiLCJvbk5vZGVDbGljayIsIl9leHBhbmRlZCIsInNldFN0YXRlIiwicHJldmVudERlZmF1bHQiLCJpc1NlbGVjdGVkIiwiY29sc3BhbiIsImdldENvbHNwYW4iLCJub2RlU3R5bGVDbGFzcyIsImNsYXNzTmFtZXMiLCJjbGFzc05hbWUiLCJzZWxlY3Rpb25Nb2RlIiwic2VsZWN0YWJsZSIsIm5vZGVMYWJlbCIsIm5vZGVUZW1wbGF0ZSIsImxhYmVsIiwidG9nZ2xlSWNvbiIsIm5vZGVDb250ZW50IiwiZSIsImdldExlYWYiLCJ0b2dnbGVOb2RlIiwiX3Zpc2liaWxpdHkiLCJsaW5lc0Rvd24iLCJ2aXNpYmlsaXR5Iiwibm9kZUNoaWxkTGVuZ3RoIiwibGluZXNNaWRkbGUiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJsZWZ0Q2xhc3MiLCJyaWdodENsYXNzIiwiY29uc29sZSIsImxvZyIsImNoaWxkTm9kZXMiLCJjaGlsZCIsIkNvbXBvbmVudCIsInJvb3QiLCJmaXJzdCIsImxhc3QiLCJQcm9wVHlwZXMiLCJhbnkiLCJib29sIiwic3RyaW5nIiwiZnVuYyIsIk9yZ2FuaXphdGlvbkNoYXJ0IiwidmFsdWUiLCJiaW5kIiwiZXZlbnRUYXJnZXQiLCJ0YXJnZXQiLCJpbmRleE9mIiwiZmluZEluZGV4SW5TZWxlY3Rpb24iLCJzZWxlY3RlZCIsInNlbGVjdGlvbiIsIm9uTm9kZVVuc2VsZWN0Iiwib3JpZ2luYWxFdmVudCIsIm9uTm9kZVNlbGVjdCIsImZpbHRlciIsInZhbCIsImkiLCJvblNlbGVjdGlvbkNoYW5nZSIsImRhdGEiLCJpZCIsInN0eWxlIiwib2JqZWN0IiwiT3JnYW5pemF0aW9uQ2hhcnRDb21wb25lbnQiLCJkYXRhMSIsInR5cGUiLCJuYW1lIiwiYXZhdGFyIiwiZGF0YTIiLCJ3aWR0aCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsZ0JBQWdC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R0ksaUJBQVMsRUFBRSxLQUFLbkIsS0FBTCxDQUFXeUQsU0FIMUI7QUFJSSxxQkFBYSxFQUFDLFVBSmxCO0FBS0kseUJBQWlCLEVBQUUsMkJBQUFwRCxLQUFLO0FBQUEsaUJBQ3BCLE1BQUksQ0FBQ0csUUFBTCxDQUFjO0FBQUNpRCxxQkFBUyxFQUFFcEQsS0FBSyxDQUFDNEQ7QUFBbEIsV0FBZCxDQURvQjtBQUFBLFNBTDVCO0FBUUksaUJBQVMsRUFBQztBQVJkLFFBRkosRUFhSSwrRUFiSixFQWNJLDJEQUFDLG1FQUFEO0FBQ0ksYUFBSyxFQUFFLEtBQUtqRSxLQUFMLENBQVcwRTtBQUR0QixRQWRKLENBREosQ0FESjtBQXdCSDs7OztFQXZLbURsQywrQzs7O0FBMEt4RDZCLDBCQUEwQixDQUFDTyxZQUEzQixHQUEwQyxFQUExQztBQUVBUCwwQkFBMEIsQ0FBQ1EsU0FBM0IsR0FBdUM7QUFDbkM7OztBQUdBWCxJQUFFLEVBQUV0QixpREFBUyxDQUFDRztBQUpxQixDQUF2QyxDOzs7Ozs7Ozs7Ozs7Ozs7QUNsTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYTM3ZTQyNy1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE3IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpICYmIGFyZy5sZW5ndGgpIHtcblx0XHRcdFx0dmFyIGlubmVyID0gY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXHRcdFx0XHRpZiAoaW5uZXIpIHtcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2goaW5uZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRjbGFzc05hbWVzLmRlZmF1bHQgPSBjbGFzc05hbWVzO1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5wLW9yZ2FuaXphdGlvbmNoYXJ0IC5wLW9yZ2FuaXphdGlvbmNoYXJ0LXRhYmxlIHtcXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4ucC1vcmdhbml6YXRpb25jaGFydCAucC1vcmdhbml6YXRpb25jaGFydC10YWJsZSA+IHRib2R5ID4gdHIgPiB0ZCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgcGFkZGluZzogMCAuNzVlbTtcXG59XFxuXFxuLnAtb3JnYW5pemF0aW9uY2hhcnQgLnAtb3JnYW5pemF0aW9uY2hhcnQtbm9kZS1jb250ZW50IHtcXG4gICAgcGFkZGluZzogLjVlbSAuNzVlbTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5wLW9yZ2FuaXphdGlvbmNoYXJ0IC5wLW9yZ2FuaXphdGlvbmNoYXJ0LW5vZGUtY29udGVudCAucC1ub2RlLXRvZ2dsZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogLTlweDtcXG4gICAgbWFyZ2luLWxlZnQ6IC04cHg7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5wLW9yZ2FuaXphdGlvbmNoYXJ0IC5wLW9yZ2FuaXphdGlvbmNoYXJ0LWxpbmUtZG93biB7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiAxcHg7XFxuICAgIGZsb2F0OiBub25lO1xcbn1cXG5cXG4ucC1vcmdhbml6YXRpb25jaGFydCAucC1vcmdhbml6YXRpb25jaGFydC1saW5lLXJpZ2h0IHtcXG4gICAgZmxvYXQ6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcXG59XFxuXFxuLnAtb3JnYW5pemF0aW9uY2hhcnQgLnAtb3JnYW5pemF0aW9uY2hhcnQtbGluZS1sZWZ0IHtcXG4gICAgZmxvYXQ6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxufVxcblxcbi5wLW9yZ2FuaXphdGlvbmNoYXJ0IC5wLW9yZ2FuaXphdGlvbmNoYXJ0LW5vZGUtY29udGVudC5wLW9yZ2FuaXphdGlvbmNoYXJ0LXNlbGVjdGFibGUtbm9kZSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XCIsIFwiXCJdKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwie1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW19pXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCIoXCIuY29uY2F0KGl0ZW1bMl0sIFwiKSBhbmQgKFwiKS5jb25jYXQobWVkaWFRdWVyeSwgXCIpXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vT3JnYW5pemF0aW9uQ2hhcnQuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJpbnNlcnRBdFwiOlwidG9wXCIsXCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL09yZ2FuaXphdGlvbkNoYXJ0LmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vT3JnYW5pemF0aW9uQ2hhcnQuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCAnLi9Pcmdhbml6YXRpb25DaGFydC5jc3MnXG5cblxuZXhwb3J0IGNsYXNzIE9yZ2FuaXphdGlvbkNoYXJ0Tm9kZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgbm9kZTogbnVsbCxcbiAgICAgICAgbm9kZVRlbXBsYXRlOiBudWxsLFxuICAgICAgICByb290OiBmYWxzZSxcbiAgICAgICAgZmlyc3Q6IGZhbHNlLFxuICAgICAgICBsYXN0OiBmYWxzZSxcbiAgICAgICAgc2VsZWN0aW9uTW9kZTogbnVsbCxcbiAgICAgICAgb25Ob2RlQ2xpY2s6IG51bGwsXG4gICAgICAgIGlzU2VsZWN0ZWQ6IG51bGxcbiAgICB9XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBub2RlOiBQcm9wVHlwZXMuYW55LFxuICAgICAgICBub2RlVGVtcGxhdGU6IFByb3BUeXBlcy5hbnksXG4gICAgICAgIHJvb3Q6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBmaXJzdDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIGxhc3Q6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBzZWxlY3Rpb25Nb2RlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBvbk5vZGVDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIGlzU2VsZWN0ZWQ6IFByb3BUeXBlcy5mdW5jXG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLm5vZGUgPSB0aGlzLnByb3BzLm5vZGU7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7ZXhwYW5kZWQ6IHRoaXMubm9kZS5leHBhbmRlZH07XG4gICAgfVxuXG4gICAgZ2V0TGVhZigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZS5sZWFmID09PSBmYWxzZSA/IGZhbHNlIDogISh0aGlzLm5vZGUuY2hpbGRyZW4mJnRoaXMubm9kZS5jaGlsZHJlbi5sZW5ndGgpO1xuICAgIH1cbiAgICBcbiAgICBnZXRDb2xzcGFuKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMubm9kZS5jaGlsZHJlbiAmJiB0aGlzLm5vZGUuY2hpbGRyZW4ubGVuZ3RoKSA/IHRoaXMubm9kZS5jaGlsZHJlbi5sZW5ndGggKiAyOiBudWxsO1xuICAgIH1cblxuICAgIG9uTm9kZUNsaWNrKGV2ZW50LCBub2RlKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25Ob2RlQ2xpY2soZXZlbnQsIG5vZGUpXG4gICAgfVxuICAgIFxuICAgIHRvZ2dsZU5vZGUoZXZlbnQsIG5vZGUpIHtcbiAgICAgICAgbGV0IF9leHBhbmRlZCA9ICF0aGlzLnN0YXRlLmV4cGFuZGVkO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtleHBhbmRlZDogX2V4cGFuZGVkfSk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIFxuICAgIGlzU2VsZWN0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmlzU2VsZWN0ZWQodGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMubm9kZSA9IHRoaXMucHJvcHMubm9kZTtcblxuICAgICAgICB2YXIgY29sc3BhbiA9IHRoaXMuZ2V0Q29sc3BhbigpO1xuICAgICAgICBsZXQgbm9kZVN0eWxlQ2xhc3MgPSBjbGFzc05hbWVzKCdwLW9yZ2FuaXphdGlvbmNoYXJ0LW5vZGUtY29udGVudCcsIHRoaXMubm9kZS5jbGFzc05hbWUsIHtcbiAgICAgICAgICAgICAgICAncC1vcmdhbml6YXRpb25jaGFydC1zZWxlY3RhYmxlLW5vZGUnOiB0aGlzLnByb3BzLnNlbGVjdGlvbk1vZGUgJiYgdGhpcy5ub2RlLnNlbGVjdGFibGUgIT09IGZhbHNlLFxuICAgICAgICAgICAgICAgICdwLWhpZ2hsaWdodCc6IHRoaXMuaXNTZWxlY3RlZCgpXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIG5vZGVMYWJlbCA9ICh0aGlzLnByb3BzLm5vZGVUZW1wbGF0ZSAmJiB0aGlzLnByb3BzLm5vZGVUZW1wbGF0ZSh0aGlzLm5vZGUpKSA/IDxkaXY+e3RoaXMucHJvcHMubm9kZVRlbXBsYXRlKHRoaXMubm9kZSl9PC9kaXY+IDogPGRpdj57dGhpcy5ub2RlLmxhYmVsfTwvZGl2PixcbiAgICAgICAgICAgIHRvZ2dsZUljb24gPSBjbGFzc05hbWVzKCdwLW5vZGUtdG9nZ2xlci1pY29uJywgeydwaSBwaS1jaGV2cm9uLWRvd24nOiB0aGlzLnN0YXRlLmV4cGFuZGVkLCAncGkgcGktY2hldnJvbi11cCc6ICF0aGlzLnN0YXRlLmV4cGFuZGVkfSksXG4gICAgICAgICAgICBub2RlQ29udGVudCA9ICg8dHI+XG4gICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49e2NvbHNwYW59PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bm9kZVN0eWxlQ2xhc3N9IG9uQ2xpY2s9eyhlKSA9PiB0aGlzLm9uTm9kZUNsaWNrKGUsdGhpcy5ub2RlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bm9kZUxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLmdldExlYWYoKSAmJiA8YnV0dG9uIGNsYXNzTmFtZT1cInAtbm9kZS10b2dnbGVyIHAtbGlua1wiIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnRvZ2dsZU5vZGUoZSwgdGhpcy5ub2RlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17dG9nZ2xlSWNvbn0+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj4pO1xuXG4gICAgICAgIGxldCBfdmlzaWJpbGl0eSA9ICghdGhpcy5nZXRMZWFmKCkgJiYgdGhpcy5zdGF0ZS5leHBhbmRlZCkgPyAnaW5oZXJpdCcgOiAnaGlkZGVuJyxcbiAgICAgICAgICAgIGxpbmVzRG93biA9ICg8dHIgc3R5bGU9e3t2aXNpYmlsaXR5OiBfdmlzaWJpbGl0eX19IGNsYXNzTmFtZT1cInAtb3JnYW5pemF0aW9uY2hhcnQtbGluZXNcIj5cbiAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17Y29sc3Bhbn0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1vcmdhbml6YXRpb25jaGFydC1saW5lLWRvd25cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj4pLFxuICAgICAgICAgICAgbm9kZUNoaWxkTGVuZ3RoID0gdGhpcy5ub2RlLmNoaWxkcmVuICYmIHRoaXMubm9kZS5jaGlsZHJlbi5sZW5ndGgsXG4gICAgICAgICAgICBsaW5lc01pZGRsZSA9ICg8dHIgc3R5bGU9e3t2aXNpYmlsaXR5OiBfdmlzaWJpbGl0eX19IGNsYXNzTmFtZT1cInAtb3JnYW5pemF0aW9uY2hhcnQtbGluZXNcIj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5jaGlsZHJlbiAmJiB0aGlzLm5vZGUuY2hpbGRyZW4ubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxlZnRDbGFzcyA9IGNsYXNzTmFtZXMoJ3Atb3JnYW5pemF0aW9uY2hhcnQtbGluZS1sZWZ0JywgeydwLW9yZ2FuaXphdGlvbmNoYXJ0LWxpbmUtdG9wJzogaW5kZXggIT09IDB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0Q2xhc3MgPSBjbGFzc05hbWVzKCdwLW9yZ2FuaXphdGlvbmNoYXJ0LWxpbmUtcmlnaHQnLCB7J3Atb3JnYW5pemF0aW9uY2hhcnQtbGluZS10b3AnOiBpbmRleCAhPT0gbm9kZUNoaWxkTGVuZ3RoIC0gMX0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobGVmdENsYXNzLHJpZ2h0Q2xhc3MpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbPHRkIGtleT17aW5kZXggKyAnX2xpbmVsZWZ0J30gY2xhc3NOYW1lPXtsZWZ0Q2xhc3N9PiZuYnNwOzwvdGQ+LCA8dGQga2V5PXtpbmRleCArICdfbGluZXJpZ2h0J30gY2xhc3NOYW1lPXtyaWdodENsYXNzfT4mbmJzcDs8L3RkPl07XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC90cj4pLFxuICAgICAgICAgICAgY2hpbGROb2RlcyA9ICg8dHIgc3R5bGU9e3t2aXNpYmlsaXR5OiBfdmlzaWJpbGl0eX19IGNsYXNzTmFtZT1cInAtb3JnYW5pemF0aW9uY2hhcnQtbm9kZXNcIj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuICYmIHRoaXMubm9kZS5jaGlsZHJlbi5tYXAoKGNoaWxkLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPHRkIGtleT17aW5kZXh9IGNvbFNwYW49XCIyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3JnYW5pemF0aW9uQ2hhcnROb2RlIG5vZGU9e2NoaWxkfSBub2RlVGVtcGxhdGU9e3RoaXMucHJvcHMubm9kZVRlbXBsYXRlfSBzZWxlY3Rpb25Nb2RlPXt0aGlzLnByb3BzLnNlbGVjdGlvbk1vZGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Ob2RlQ2xpY2s9e3RoaXMucHJvcHMub25Ob2RlQ2xpY2t9IGlzU2VsZWN0ZWQ9e3RoaXMucHJvcHMuaXNTZWxlY3RlZH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvdHI+KTtcblxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwicC1vcmdhbml6YXRpb25jaGFydC10YWJsZVwiPlxuICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAge25vZGVDb250ZW50fVxuICAgICAgICAgICAgICAgICAgICB7bGluZXNEb3dufVxuICAgICAgICAgICAgICAgICAgICB7bGluZXNNaWRkbGV9XG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZE5vZGVzfVxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICApO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmdhbml6YXRpb25DaGFydCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgIHN0eWxlOiBudWxsLFxuICAgICAgICBjbGFzc05hbWU6IG51bGwsXG4gICAgICAgIHNlbGVjdGlvbk1vZGU6IG51bGwsXG4gICAgICAgIHNlbGVjdGlvbjogbnVsbCxcbiAgICAgICAgbm9kZVRlbXBsYXRlOiBudWxsLFxuICAgICAgICBvblNlbGVjdGlvbkNoYW5nZTogbnVsbCxcbiAgICAgICAgb25Ob2RlU2VsZWN0OiBudWxsLFxuICAgICAgICBvbk5vZGVVbnNlbGVjdDogbnVsbFxuICAgIH1cblxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICB2YWx1ZTogUHJvcFR5cGVzLmFueSxcbiAgICAgICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgc2VsZWN0aW9uTW9kZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgc2VsZWN0aW9uOiBQcm9wVHlwZXMuYW55LFxuICAgICAgICBub2RlVGVtcGxhdGU6IFByb3BUeXBlcy5hbnksXG4gICAgICAgIG9uU2VsZWN0aW9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgb25Ob2RlU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgb25Ob2RlVW5zZWxlY3Q6IFByb3BUeXBlcy5mdW5jXG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnJvb3QgPSB0aGlzLnByb3BzLnZhbHVlICYmIHRoaXMucHJvcHMudmFsdWUubGVuZ3RoID8gdGhpcy5wcm9wcy52YWx1ZVswXSA6IG51bGw7XG4gICAgICAgIHRoaXMub25Ob2RlQ2xpY2sgPSB0aGlzLm9uTm9kZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaXNTZWxlY3RlZCA9IHRoaXMuaXNTZWxlY3RlZC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIG9uTm9kZUNsaWNrKGV2ZW50LCBub2RlKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGlvbk1vZGUpIHtcbiAgICAgICAgICAgIGxldCBldmVudFRhcmdldCA9IChldmVudC50YXJnZXQpO1xuICAgICAgICAgICAgaWYgKGV2ZW50VGFyZ2V0LmNsYXNzTmFtZSAmJiAoZXZlbnRUYXJnZXQuY2xhc3NOYW1lLmluZGV4T2YoJ3Atbm9kZS10b2dnbGVyJykgIT09IC0xIHx8IGV2ZW50VGFyZ2V0LmNsYXNzTmFtZS5pbmRleE9mKCdwLW5vZGUtdG9nZ2xlci1pY29uJykgIT09IC0xKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5vZGUuc2VsZWN0YWJsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMuZmluZEluZGV4SW5TZWxlY3Rpb24obm9kZSk7XG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWQgPSAoaW5kZXggPj0gMCk7XG4gICAgICAgICAgICBsZXQgc2VsZWN0aW9uO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3Rpb25Nb2RlID09PSAnc2luZ2xlJykge1xuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vbk5vZGVVbnNlbGVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbk5vZGVVbnNlbGVjdCh7b3JpZ2luYWxFdmVudDogZXZlbnQsIG5vZGU6IG5vZGV9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uID0gbm9kZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub25Ob2RlU2VsZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uTm9kZVNlbGVjdCh7b3JpZ2luYWxFdmVudDogZXZlbnQsIG5vZGU6IG5vZGV9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMucHJvcHMuc2VsZWN0aW9uTW9kZSA9PT0gJ211bHRpcGxlJykge1xuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb24gPSB0aGlzLnByb3BzLnNlbGVjdGlvbi5maWx0ZXIoKHZhbCxpKSA9PiBpICE9PSBpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9uTm9kZVVuc2VsZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uTm9kZVVuc2VsZWN0KHtvcmlnaW5hbEV2ZW50OiBldmVudCwgbm9kZTogbm9kZX0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb24gPSBbLi4udGhpcy5wcm9wcy5zZWxlY3Rpb258fFtdLCBub2RlXTtcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5wcm9wcy5vbk5vZGVTZWxlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25Ob2RlU2VsZWN0KHtvcmlnaW5hbEV2ZW50OiBldmVudCwgbm9kZTogbm9kZX0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdGlvbkNoYW5nZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25TZWxlY3Rpb25DaGFuZ2Uoe1xuICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogc2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZmluZEluZGV4SW5TZWxlY3Rpb24obm9kZSkge1xuICAgICAgICBsZXQgaW5kZXggPSAtMTtcblxuICAgICAgICBpZih0aGlzLnByb3BzLnNlbGVjdGlvbk1vZGUgJiYgdGhpcy5wcm9wcy5zZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIGlmKHRoaXMucHJvcHMuc2VsZWN0aW9uTW9kZSA9PT0gJ3NpbmdsZScpIHtcbiAgICAgICAgICAgICAgICBpbmRleCA9ICh0aGlzLnByb3BzLnNlbGVjdGlvbiA9PT0gbm9kZSkgPyAwIDogLSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZih0aGlzLnByb3BzLnNlbGVjdGlvbk1vZGUgPT09ICdtdWx0aXBsZScpIHtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpICA8IHRoaXMucHJvcHMuc2VsZWN0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMucHJvcHMuc2VsZWN0aW9uW2ldID09PSBub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gICAgXG4gICAgaXNTZWxlY3RlZChub2RlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbmRJbmRleEluU2VsZWN0aW9uKG5vZGUpICE9PSAtMTsgICAgICAgICBcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIC8vIHJldHVybiAnbm9vJ1xuICAgICAgICB0aGlzLnJvb3QgPSB0aGlzLnByb3BzLnZhbHVlICYmIHRoaXMucHJvcHMudmFsdWUubGVuZ3RoID8gdGhpcy5wcm9wcy52YWx1ZVswXSA6IG51bGw7XG5cbiAgICAgICAgdmFyIGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoJ3Atb3JnYW5pemF0aW9uY2hhcnQgcC1jb21wb25lbnQnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPXt0aGlzLnByb3BzLmlkfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0gY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICAgICAgICAgIDxPcmdhbml6YXRpb25DaGFydE5vZGUgbm9kZT17dGhpcy5yb290fSBub2RlVGVtcGxhdGU9e3RoaXMucHJvcHMubm9kZVRlbXBsYXRlfSBzZWxlY3Rpb25Nb2RlPXt0aGlzLnByb3BzLnNlbGVjdGlvbk1vZGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbk5vZGVDbGljaz17dGhpcy5vbk5vZGVDbGlja30gaXNTZWxlY3RlZD17dGhpcy5pc1NlbGVjdGVkfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgT3JnYW5pemF0aW9uQ2hhcnQgZnJvbSAnLi9Pcmdhbml6YXRpb25DaGFydC5yZWFjdC5qcyc7XG4vLyBpbXBvcnQgJy4vT3JnYW5pemF0aW9uQ2hhcnQuY3NzJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmdhbml6YXRpb25DaGFydENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBkYXRhMTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdDRU8nLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncGVyc29uJyxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAncC1wZXJzb24nLFxuICAgICAgICAgICAgICAgICAgICBleHBhbmRlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge25hbWU6ICdXYWx0ZXIgV2hpdGUnLCBhdmF0YXI6ICd3YWx0ZXIuanBnJ30sXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdDRk8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwZXJzb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3AtcGVyc29uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBhbmRlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7bmFtZTogJ1NhdWwgR29vZG1hbicsIGF2YXRhcjogJ3NhdWwuanBnJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdUYXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnZGVwYXJ0bWVudC1jZm8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0xlZ2FsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2RlcGFydG1lbnQtY2ZvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0NPTycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3BlcnNvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAncC1wZXJzb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtuYW1lOiAnTWlrZSBFLicsIGF2YXRhcjogJ21pa2UuanBnJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdPcGVyYXRpb25zJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2RlcGFydG1lbnQtY29vJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0NUTycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3BlcnNvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAncC1wZXJzb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtuYW1lOiAnSmVzc2UgUGlua21hbicsIGF2YXRhcjogJ2plc3NlLmpwZyd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnRGV2ZWxvcG1lbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnZGVwYXJ0bWVudC1jdG8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdBbmFseXNpcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2RlcGFydG1lbnQtY3RvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdGcm9udCBFbmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdkZXBhcnRtZW50LWN0bycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnQmFjayBFbmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdkZXBhcnRtZW50LWN0bycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnUUEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnZGVwYXJ0bWVudC1jdG8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1ImRCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdkZXBhcnRtZW50LWN0bycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBkYXRhMjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdGLkMgQmFyY2Vsb25hJyxcbiAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdGLkMgQmFyY2Vsb25hJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBhbmRlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0NoZWxzZWEgRkMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0YuQy4gQmFyY2Vsb25hJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1JlYWwgTWFkcmlkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBhbmRlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0JheWVybiBNdW5pY2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1JlYWwgTWFkcmlkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHNlbGVjdGlvbjogW10sXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5ub2RlVGVtcGxhdGUgPSB0aGlzLm5vZGVUZW1wbGF0ZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIG5vZGVUZW1wbGF0ZShub2RlKSB7XG4gICAgICAgIGlmIChub2RlLnR5cGUgPT09ICdwZXJzb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm9kZS1oZWFkZXJcIj57bm9kZS5sYWJlbH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJub2RlLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e25vZGUuZGF0YS5hdmF0YXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgc2hvd2Nhc2UvcmVzb3VyY2VzL2RlbW8vaW1hZ2VzL29yZ2FuaXphdGlvbi8ke25vZGUuZGF0YS5hdmF0YXJ9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiAnMzJweCd9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e25vZGUuZGF0YS5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobm9kZS50eXBlID09PSAnZGVwYXJ0bWVudCcpIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlLmxhYmVsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAvLyByZXR1cm4gJ2hleSB0ZXN0J1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtc2VjdGlvbiBpbXBsZW1lbnRhdGlvbiBvcmdhbml6YXRpb25jaGFydC1kZW1vXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5BZHZhbmNlZDwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxPcmdhbml6YXRpb25DaGFydFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGF0YTF9XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlVGVtcGxhdGU9e3RoaXMubm9kZVRlbXBsYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uPXt0aGlzLnN0YXRlLnNlbGVjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbk1vZGU9XCJtdWx0aXBsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdGlvbkNoYW5nZT17ZXZlbnQgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3Rpb246IGV2ZW50LmRhdGF9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29tcGFueVwiXG4gICAgICAgICAgICAgICAgICAgID48L09yZ2FuaXphdGlvbkNoYXJ0PlxuXG4gICAgICAgICAgICAgICAgICAgIDxoMz5CYXNpYzwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxPcmdhbml6YXRpb25DaGFydFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGF0YTJ9XG4gICAgICAgICAgICAgICAgICAgID48L09yZ2FuaXphdGlvbkNoYXJ0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgey8qIDxPcmdhbml6YXRpb25DaGFydERvYz48L09yZ2FuaXphdGlvbkNoYXJ0RG9jPiAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuT3JnYW5pemF0aW9uQ2hhcnRDb21wb25lbnQuZGVmYXVsdFByb3BzID0ge307XG5cbk9yZ2FuaXphdGlvbkNoYXJ0Q29tcG9uZW50LnByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBUaGUgSUQgdXNlZCB0byBpZGVudGlmeSB0aGlzIGNvbXBvbmVudCBpbiBEYXNoIGNhbGxiYWNrcy5cbiAgICAgKi9cbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5pbXBvcnQgRXh0cmFEYXNoVWlDb21wb25lbnRzIGZyb20gJy4vY29tcG9uZW50cy9FeHRyYURhc2hVaUNvbXBvbmVudHMucmVhY3QnO1xuaW1wb3J0IE9yZ2FuaXphdGlvbkNoYXJ0Q29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9Pcmdhbml6YXRpb25DaGFydC9Pcmdhbml6YXRpb25DaGFydENvbXBvbmVudC5yZWFjdCc7XG5cbmV4cG9ydCB7XG4gICAgRXh0cmFEYXNoVWlDb21wb25lbnRzLFxuICAgIE9yZ2FuaXphdGlvbkNoYXJ0Q29tcG9uZW50XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==