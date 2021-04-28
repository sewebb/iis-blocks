/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 1 */
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

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(12);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

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
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
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

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
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

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __ = wp.i18n.__;
var _wp$components = wp.components,
    SelectControl = _wp$components.SelectControl,
    Notice = _wp$components.Notice,
    TextControl = _wp$components.TextControl;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;

var DataSelect = function (_Component) {
	_inherits(DataSelect, _Component);

	function DataSelect() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, DataSelect);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DataSelect.__proto__ || Object.getPrototypeOf(DataSelect)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			loading: true,
			data: [],
			value: _this.props.value,
			error: false,
			search: ''
		}, _this.searchThrottle = null, _this.fetch = function () {
			_this.setState({ loading: true, error: false });

			var url = _this.props.api;

			if (url.indexOf('?') > -1) {
				url += '&search=' + _this.state.search;
			} else {
				url += '?search=' + _this.state.search;
			}

			wp.apiFetch({ path: url }).then(function (json) {
				if ('data' in json && 'status' in json.data && json.data.status > 299) {
					throw new Error(json.message);
				}

				return json;
			}).then(function (json) {
				if ((typeof json === 'undefined' ? 'undefined' : _typeof(json)) === 'object') {
					return Object.values(json);
				}

				return json;
			}).then(function (json) {
				return json.map(function (type) {
					return {
						value: _this.props.value_key(type),
						label: _this.props.label_key(type)
					};
				});
			}).then(function (items) {
				return _this.setState({ items: items, loading: false });
			}).catch(function (error) {
				return _this.setState({ error: error, loading: false });
			});
		}, _this.search = function (value) {
			_this.setState({ search: value }, function () {
				clearTimeout(_this.searchThrottle);

				_this.searchThrottle = setTimeout(function () {
					_this.fetch();
				}, 250);
			});
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(DataSelect, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.fetch();
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			if (this.state.loading && !this.props.search) {
				return React.createElement('span', { className: 'components-spinner', style: { float: 'none' } });
			}

			if (this.state.error) {
				var error = _typeof(this.state.error) === 'object' ? this.state.error.message : this.state.error;

				return React.createElement(
					Notice,
					{ status: 'error', actions: [{ label: __('Try again'), onClick: this.fetch }] },
					React.createElement(
						'p',
						null,
						error
					)
				);
			}

			return React.createElement(
				Fragment,
				null,
				this.props.search && React.createElement(TextControl, {
					label: this.props.label,
					value: this.state.search,
					placeholder: __('Search'),
					onChange: this.search,
					disabled: this.props.disabled
				}),
				this.state.loading && React.createElement(
					'p',
					null,
					React.createElement('span', { className: 'components-spinner', style: { float: 'none' } })
				),
				!this.state.loading && this.state.items.length > 0 && React.createElement(SelectControl, {
					label: this.props.search ? null : this.props.label,
					help: this.props.help,
					options: [this.props.placeholder].concat(_toConsumableArray(this.state.items)),
					value: this.state.value,
					onChange: function onChange(value) {
						_this2.props.set(value);
						_this2.setState({ value: value });
					},
					disabled: this.props.disabled
				})
			);
		}
	}], [{
		key: 'getDerivedStateFromProps',
		value: function getDerivedStateFromProps(props, state) {
			if (props.value !== state.value) {
				return {
					value: props.value
				};
			}

			return null;
		}
	}]);

	return DataSelect;
}(Component);

exports.default = DataSelect;


DataSelect.defaultProps = {
	set: function set() {}
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(4);
module.exports = __webpack_require__(26);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(13);

__webpack_require__(14);

__webpack_require__(15);

__webpack_require__(18);

__webpack_require__(21);

__webpack_require__(24);

__webpack_require__(25);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __ = wp.i18n.__;
var _wp$blocks = wp.blocks,
    registerBlockType = _wp$blocks.registerBlockType,
    createBlock = _wp$blocks.createBlock;
var RichText = wp.editor.RichText;


registerBlockType('iis/preamble', {
	title: __('Preamble'),
	category: 'iis',
	icon: 'editor-paragraph',
	keywords: [__('preamble'), __('text'), __('paragraph')],
	attributes: {
		content: {
			type: 'string',
			default: ''
		}
	},
	edit: function edit(_ref) {
		var attributes = _ref.attributes,
		    setAttributes = _ref.setAttributes;

		return React.createElement(
			'div',
			{ style: { fontWeight: 'bold', fontSize: 'bigger' } },
			React.createElement(RichText, {
				tagName: 'p',
				value: attributes.content,
				placeholder: __('Preamble'),
				onChange: function onChange(content) {
					return setAttributes({ content: content });
				}
			})
		);
	},
	save: function save(_ref2) {
		var attributes = _ref2.attributes;

		// eslint-disable-next-line react/no-danger
		return React.createElement('p', { className: 'preamble', dangerouslySetInnerHTML: { __html: attributes.content } });
	},

	transforms: {
		from: [{
			type: 'block',
			blocks: ['core/paragraph'],
			transform: function transform(attributes) {
				return createBlock('iis/preamble', {
					content: attributes.content
				});
			}
		}]
	}
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    InnerBlocks = _wp$editor.InnerBlocks;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    ToggleControl = _wp$components.ToggleControl;


registerBlockType('iis/info', {
	title: __('Info box'),
	category: 'iis',
	icon: 'megaphone',
	keywords: [__('info'), __('facts'), __('message')],
	attributes: {
		big: {
			type: 'boolean',
			default: false
		}
	},
	edit: function edit(_ref) {
		var attributes = _ref.attributes,
		    setAttributes = _ref.setAttributes;

		var allowed = ['core/paragraph'];
		var template = [];
		var templateLock = null;
		var className = 'iis-info-block';

		if (!attributes.big) {
			allowed.push('core/heading');
			allowed.push('core/list');
		} else {
			template = [['core/paragraph']];
			templateLock = 'all';

			className += ' ' + className + '--big';
		}

		return React.createElement(
			'div',
			null,
			React.createElement(
				InspectorControls,
				null,
				React.createElement(
					PanelBody,
					null,
					React.createElement(ToggleControl, {
						label: 'Big',
						checked: attributes.big,
						onChange: function onChange(big) {
							return setAttributes({ big: big });
						}
					})
				)
			),
			React.createElement(
				'div',
				{ className: className },
				React.createElement(InnerBlocks, { allowedBlocks: allowed, template: template, templateLock: templateLock })
			)
		);
	},
	save: function save(_ref2) {
		var attributes = _ref2.attributes;

		return React.createElement(
			'div',
			{ className: 'iis-m-info-box ' + (attributes.big ? 'iis-m-info-box--big' : '') },
			React.createElement(InnerBlocks.Content, null)
		);
	}
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    MediaUpload = _wp$editor.MediaUpload,
    MediaUploadCheck = _wp$editor.MediaUploadCheck;
var Fragment = wp.element.Fragment;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    TextControl = _wp$components.TextControl;


registerBlockType('iis/download', {
	title: __('Download'),
	category: 'iis',
	icon: 'download',
	keywords: [__('download'), __('pdf'), __('attach')],
	attributes: {
		title: {
			type: 'string',
			default: null
		},
		content: {
			type: 'string',
			default: null
		},
		file: {
			type: 'string',
			default: ''
		}
	},
	edit: function edit(_ref) {
		var attributes = _ref.attributes,
		    setAttributes = _ref.setAttributes;

		return React.createElement(
			'div',
			null,
			React.createElement(RichText, {
				identifier: 'title',
				wrapperClassName: 'wp-block-heading',
				tagName: 'h3',
				value: attributes.title,
				onChange: function onChange(value) {
					return setAttributes({ title: value });
				},
				placeholder: __('File title')
			}),
			React.createElement(RichText, {
				identifier: 'description',
				wrapperClassName: 'wp-block-paragraph',
				tagName: 'p',
				value: attributes.content,
				onChange: function onChange(value) {
					return setAttributes({ content: value });
				},
				placeholder: __('File description')
			}),
			React.createElement(
				'div',
				{ style: { marginTop: '16px' } },
				!attributes.file && React.createElement(
					Fragment,
					null,
					React.createElement(
						MediaUploadCheck,
						null,
						React.createElement(MediaUpload, {
							onSelect: function onSelect(_ref2) {
								var file = _ref2.url;
								return setAttributes({ file: file });
							},
							value: attributes.file,
							render: function render(_ref3) {
								var open = _ref3.open;
								return React.createElement(
									Button,
									{ className: 'components-button editor-post-featured-image__toggle', onClick: open },
									'Upload File'
								);
							}
						})
					),
					React.createElement(
						'p',
						null,
						React.createElement(
							'em',
							null,
							'or'
						)
					)
				),
				React.createElement(TextControl, { label: __('File URL'), value: attributes.file, onChange: function onChange(url) {
						return setAttributes({ file: url });
					} }),
				attributes.file && React.createElement(
					'div',
					null,
					React.createElement(
						Button,
						{ className: 'components-button is-button is-default', onClick: function onClick() {
								return setAttributes({ file: '' });
							} },
						'Remove'
					)
				)
			)
		);
	},
	save: function save() {
		return null;
	}
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _DataSelect = __webpack_require__(2);

var _DataSelect2 = _interopRequireDefault(_DataSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var InspectorControls = wp.editor.InspectorControls;
var PanelBody = wp.components.PanelBody;


registerBlockType('iis/postarchive', {
	title: __('Post Archive', 'iis-blocks'),
	category: 'iis',
	icon: 'media-archive',
	keywords: [__('archive', 'iis-blocks')],
	attributes: {
		postType: {
			type: 'string',
			default: false
		}
	},

	edit: function edit(_ref) {
		var attributes = _ref.attributes,
		    setAttributes = _ref.setAttributes;

		return React.createElement(
			'div',
			null,
			React.createElement(
				'div',
				null,
				React.createElement(
					'strong',
					null,
					'\xAB Post Archive \xBB'
				)
			),
			React.createElement(
				InspectorControls,
				null,
				React.createElement(
					PanelBody,
					null,
					React.createElement(_DataSelect2.default, {
						label: __('Select post type', 'iis-blocks'),
						placeholder: { value: null, label: __('Post type', 'iis-blocks') },
						api: '/wp/v2/types',
						value_key: function value_key(obj) {
							return obj.slug;
						},
						label_key: function label_key(obj) {
							return obj.name;
						},
						value: attributes.postType,
						set: function set(postType) {
							return setAttributes({ postType: postType });
						}
					})
				)
			)
		);
	},
	save: function save() {
		return null;
	}
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(10);

var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    Button = _wp$components.Button,
    TextControl = _wp$components.TextControl;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    MediaUpload = _wp$editor.MediaUpload,
    MediaUploadCheck = _wp$editor.MediaUploadCheck,
    RichText = _wp$editor.RichText,
    InnerBlocks = _wp$editor.InnerBlocks;


function parseYoutube(url) {
	if (!url) {
		return null;
	}

	var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
	var match = url.match(regExp);
	return match && match[7].length === 11 ? match[7] : false;
}

registerBlockType('iis/hero', {
	title: __('Hero'),
	category: 'iis',
	icon: 'megaphone',
	keywords: [__('hero'), __('title')],
	supports: {
		align: ['full', 'wide']
	},
	attributes: {
		mediaUrl: {
			type: 'string',
			default: null
		},
		mediaId: {
			type: 'number',
			default: null
		},
		mediaType: {
			type: 'string',
			default: null
		},
		youtube: {
			type: 'string',
			default: null
		},
		title: {
			type: 'string',
			default: ''
		},
		introText: {
			type: 'string',
			default: ''
		},
		align: {
			type: 'string',
			default: 'wide'
		}
	},
	edit: function edit(_ref) {
		var attributes = _ref.attributes,
		    setAttributes = _ref.setAttributes;

		var image = null;
		var noYoutube = attributes.youtube === null || attributes.youtube.length < 1 || attributes.align === 'full';
		var youtubeId = parseYoutube(attributes.youtube);
		var youtubeUrl = youtubeId ? 'https://www.youtube-nocookie.com/embed/' + youtubeId + '?rel=0' : null;
		var displayImage = attributes.mediaUrl !== null && attributes.mediaType !== 'video';
		var displayVideo = attributes.mediaUrl && attributes.mediaType === 'video' && attributes.align !== 'full';
		var displayYoutube = !displayImage && !displayVideo && youtubeUrl && attributes.align !== 'full';

		if (displayVideo) {
			// eslint-disable-next-line jsx-a11y/media-has-caption
			image = React.createElement('video', { src: attributes.mediaUrl, style: { width: '100%', height: 'auto' } });
		} else if (displayImage) {
			image = React.createElement('img', { src: attributes.mediaUrl, alt: '', style: { width: '100%', height: 'auto' } });
		} else if (displayYoutube) {
			// eslint-disable-next-line jsx-a11y/iframe-has-title
			image = React.createElement('iframe', { width: '100%', height: '100%', src: youtubeUrl, frameBorder: '0', allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowFullScreen: true });
		}

		return React.createElement(
			Fragment,
			null,
			React.createElement(
				InspectorControls,
				null,
				React.createElement(
					PanelBody,
					{ title: 'Background image' },
					React.createElement(
						'p',
						null,
						image
					),
					attributes.mediaUrl === null && noYoutube && React.createElement(
						MediaUploadCheck,
						null,
						React.createElement(MediaUpload, {
							onSelect: function onSelect(imageObject) {
								console.log(imageObject);

								setAttributes({
									mediaUrl: 'sizes' in imageObject ? imageObject.sizes.full.url : imageObject.url,
									mediaId: imageObject.id,
									mediaType: imageObject.mime.split('/')[0]
								});
							},
							type: 'image',
							value: attributes.mediaUrl,
							render: function render(_ref2) {
								var open = _ref2.open;
								return React.createElement(
									Button,
									{
										className: 'components-button editor-post-featured-image__toggle',
										onClick: open
									},
									'Upload Image!'
								);
							}
						})
					),
					attributes.mediaUrl !== null && React.createElement(
						Button,
						{
							className: 'components-button is-button is-default',
							onClick: function onClick() {
								return setAttributes({ mediaUrl: null, mediaId: null });
							}
						},
						'Remove background'
					),
					attributes.align !== 'full' && !attributes.mediaUrl && React.createElement(
						'div',
						{ style: { marginTop: '1rem' } },
						React.createElement(TextControl, {
							label: __('Youtube-URL', 'iis-blocks'),
							placeholder: __('Full youtube URL', 'iis-blocks'),
							value: attributes.youtube,
							onChange: function onChange(youtube) {
								return setAttributes({ youtube: youtube });
							}
						})
					)
				)
			),
			React.createElement(
				'div',
				{ className: 'iis-block-hero ' + (!displayImage && !displayYoutube && !displayVideo ? 'iis-block-hero--no-image' : null) + ' ' + (displayVideo || displayYoutube ? 'iis-block-hero--video' : null) },
				displayVideo &&
				// eslint-disable-next-line jsx-a11y/alt-text,jsx-a11y/media-has-caption
				React.createElement('video', { src: attributes.mediaUrl, autoPlay: true, loop: true, controls: true, muted: true, className: 'iis-block-hero__image' }),
				displayImage &&
				// eslint-disable-next-line jsx-a11y/alt-text
				React.createElement('img', { src: attributes.mediaUrl, className: 'iis-block-hero__image' }),
				displayYoutube &&
				// eslint-disable-next-line jsx-a11y/iframe-has-title
				React.createElement('iframe', { width: '100%', height: '100%', src: youtubeUrl, frameBorder: '0', allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowFullScreen: true }),
				!displayVideo && !displayYoutube && React.createElement(
					'div',
					{ className: 'iis-block-hero__content' },
					React.createElement(
						'div',
						{ className: 'iis-block-hero__inner-content' },
						React.createElement(RichText, {
							tagName: 'h1',
							value: attributes.title,
							placeholder: __('Title'),
							onChange: function onChange(title) {
								return setAttributes({ title: title });
							}
						}),
						React.createElement(RichText, {
							tagName: 'p',
							value: attributes.introText,
							placeholder: __('Content'),
							onChange: function onChange(introText) {
								return setAttributes({ introText: introText });
							}
						}),
						React.createElement(
							'div',
							{ className: 'iis-block-hero__buttons' },
							React.createElement(InnerBlocks, { allowedBlocks: ['iis/button'] })
						)
					)
				)
			)
		);
	},
	save: function save() {
		return React.createElement(InnerBlocks.Content, null);
	}
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(11);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./hero.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./hero.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, ".iis-block-hero {\n\tposition: relative;\n\ttext-align: left;\n\tcolor: #fff;\n}\n\n.iis-block-hero--no-image {\n\tcolor: #000;\n}\n\n.iis-block-hero--video {\n\tpadding-top: 56.25%;\n}\n\n.iis-block-hero--video iframe {\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n}\n\n.iis-block-hero__content {\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tdisplay: flex;\n\talign-items: flex-end;\n\ttext-shadow: 0 0 1rem rgba(0,0,0,.5);\n\tbackground-image: linear-gradient(180deg,hsla(0,0%,100%,0) 0,transparent 55%,#000);\n}\n\n.iis-block-hero--no-image .iis-block-hero__content {\n\tposition: static;\n\tbackground: none;\n\ttext-shadow: none;\n}\n\n.iis-block-hero__inner-content {\n\tpadding: 4rem;\n\tmax-width: 80%;\n}\n\n.iis-block-hero--no-image .iis-block-hero__inner-content {\n\tpadding: 0 2rem;\n\tmax-width: none;\n}\n\n.iis-block-hero__image {\n\tmin-height: 27.77778rem;\n\tmax-height: 50vh;\n\tobject-fit: cover;\n\twidth: 100%;\n\tdisplay: block;\n}\n\n.iis-block-hero__buttons .block-editor-block-list__layout {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.iis-block-hero__buttons .block-editor-block-list__layout > * {\n\tmargin-right: 20px;\n}\n", ""]);

// exports


/***/ }),
/* 12 */
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
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    RichText = _wp$editor.RichText,
    withColors = _wp$editor.withColors,
    PanelColorSettings = _wp$editor.PanelColorSettings;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    SelectControl = _wp$components.SelectControl,
    TextControl = _wp$components.TextControl;


registerBlockType('iis/button', {
	title: __('Button'),
	category: 'iis',
	icon: 'admin-links',
	keywords: [__('button')],
	attributes: {
		size: {
			type: 'string',
			default: 'regular'
		},
		text: {
			type: 'string',
			default: ''
		},
		link: {
			type: 'string',
			default: ''
		},
		buttonColor: {
			type: 'string',
			default: null
		}
	},
	edit: withColors({ buttonColor: 'color' })(function (_ref) {
		var attributes = _ref.attributes,
		    setAttributes = _ref.setAttributes,
		    buttonColor = _ref.buttonColor,
		    setButtonColor = _ref.setButtonColor;

		var sizes = [{ value: 'small', label: 'Small' }, { value: 'regular', label: 'Default' }, { value: 'large', label: 'Large' }];

		var buttonStyle = {
			display: 'inline-block',
			position: 'relative',
			margin: '0',
			padding: '.556rem 1rem',
			overflow: 'hidden',
			border: '0',
			borderRadius: '.25rem',
			backgroundColor: buttonColor.color ? buttonColor.color : '#0477ce',
			color: '#fff',
			fontFamily: 'sans-serif',
			textDecoration: 'none',
			textShadow: 'none',
			hyphens: 'auto',
			cursor: 'pointer'
		};

		if (attributes.size === 'small') {
			buttonStyle.padding = '.3rem .75rem';
			buttonStyle.fontSize = '.88889rem';
		} else if (attributes.size === 'large') {
			buttonStyle.padding = '.8rem 2rem';
			buttonStyle.fontSize = '1.33333rem';
		} else {
			buttonStyle.fontSize = '.88889rem';
		}

		if (!buttonColor.slug || ['jade-dark', 'ruby-dark', 'ocean-dark', 'cyberspace'].includes(buttonColor.slug)) {
			buttonStyle.color = '#fff';
		} else {
			buttonStyle.color = '#1f2a36';
		}

		return React.createElement(
			'div',
			null,
			React.createElement(
				InspectorControls,
				null,
				React.createElement(
					PanelBody,
					null,
					React.createElement(SelectControl, {
						label: __('Size'),
						options: sizes,
						value: attributes.size,
						onChange: function onChange(size) {
							return setAttributes({ size: size });
						}
					}),
					React.createElement(TextControl, {
						label: __('URL'),
						value: attributes.link,
						help: attributes.link ? React.createElement(
							'a',
							{ style: { display: 'block', marginTop: '1rem' }, href: attributes.link, target: '_blank' },
							__('Test link')
						) : null,
						type: 'url',
						onChange: function onChange(link) {
							return setAttributes({ link: link });
						}
					})
				),
				React.createElement(PanelColorSettings, {
					title: __('Color Settings'),
					colorSettings: [{
						value: buttonColor.color,
						onChange: setButtonColor,
						label: __('Button Color')
					}]
				})
			),
			React.createElement(
				'div',
				null,
				React.createElement(
					'div',
					{ style: buttonStyle },
					React.createElement(RichText, {
						tagName: 'span',
						value: attributes.text,
						placeholder: __('Button text'),
						onChange: function onChange(text) {
							return setAttributes({ text: text });
						}
					})
				)
			)
		);
	}),
	save: function save() {
		return null;
	}
});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _DataSelect = __webpack_require__(2);

var _DataSelect2 = _interopRequireDefault(_DataSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __ = wp.i18n.__;
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$components = wp.components,
    CheckboxControl = _wp$components.CheckboxControl,
    PanelBody = _wp$components.PanelBody,
    Button = _wp$components.Button,
    TextControl = _wp$components.TextControl;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    MediaUpload = _wp$editor.MediaUpload,
    MediaUploadCheck = _wp$editor.MediaUploadCheck,
    RichText = _wp$editor.RichText,
    InnerBlocks = _wp$editor.InnerBlocks;


registerBlockType('iis/puff', {
	title: __('Post puff', 'iis-blocks'),
	category: 'iis',
	icon: 'format-aside',
	keywords: [__('card', 'iis-blocks'), __('teaser', 'iis-blocks'), __('puff', 'iis-blocks')],
	supports: {
		align: ['right', 'wide']
	},
	attributes: {
		custom: {
			type: 'boolean',
			default: false
		},
		postId: {
			type: 'string',
			default: null
		},
		postPreview: {
			type: 'object',
			default: {}
		},
		showAsTeaser: {
			type: 'boolean',
			default: false
		},
		showOnMobile: {
			type: 'boolean',
			default: false
		},
		displayTags: {
			type: 'boolean',
			default: false
		},
		displayExcerpt: {
			type: 'boolean',
			default: true
		},
		imageSize: {
			type: 'string',
			default: null
		},
		imageId: {
			type: 'number',
			default: null
		},
		title: {
			type: 'string',
			default: ''
		},
		text: {
			type: 'string',
			default: ''
		},
		url: {
			type: 'string',
			default: null
		},
		align: {
			type: 'string',
			default: null
		},
		button: {
			type: 'boolean',
			default: false
		},
		displayDates: {
			type: 'boolean',
			default: false
		},
		shadow: {
			type: 'boolean',
			default: false
		}
	},
	edit: function edit(_ref) {
		var attributes = _ref.attributes,
		    setAttributes = _ref.setAttributes;

		var _useState = useState(null),
		    _useState2 = _slicedToArray(_useState, 2),
		    imageSizes = _useState2[0],
		    setImageSizes = _useState2[1];

		var _useState3 = useState(null),
		    _useState4 = _slicedToArray(_useState3, 2),
		    imagePreview = _useState4[0],
		    setImagePreview = _useState4[1];

		var showAsTeaser = attributes.showAsTeaser,
		    custom = attributes.custom;

		var styleCard = {
			position: 'relative',
			border: '1px solid #bbb',
			borderRadius: '.25rem',
			overflow: 'hidden'
		};

		if (attributes.shadow) {
			styleCard.boxShadow = '0 4rem 6rem rgb(31 42 54 / 20%)';
		}

		var styleCardContent = {
			padding: '1rem'
		};

		var styleCardImage = {
			width: '100%',
			display: 'block',
			borderRadius: '.25rem .25rem 0 0'
		};

		var styleTeaserImage = {
			width: '100%',
			height: '100%',
			minHeight: '300px',
			display: 'block',
			objectFit: 'cover'
		};

		var styleTeaserContent = {
			display: 'flex',
			flexDirection: 'column',
			alignContent: 'stretch',
			justifyContent: 'flex-end',
			position: 'absolute',
			right: 0,
			bottom: 0,
			left: 0,
			textShadow: '0 0 1rem rgba(0,0,0,.5)',
			backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,0) 0,transparent 55%,#000)',
			padding: '2rem',
			color: '#fff'
		};

		var image = null;

		if (imagePreview) {
			image = React.createElement('img', { src: imagePreview, alt: '', style: { width: '100%', height: 'auto' } });
		}

		if (!attributes.showAsTeaser && attributes.align === 'wide') {
			styleCard.display = 'flex';
			styleCardImage.maxWidth = '50%';
			styleCardImage.height = '100%';
			styleCardImage.flex = '0 0 100%';
			styleCardImage.width = '100%';
			styleCardImage.borderRadius = '.25rem 0 0 .25rem';
		}

		useEffect(function () {
			if (!attributes.imageId) {
				setImagePreview(null);
				setImageSizes(null);

				return;
			}

			wp.data.subscribe(function () {
				var media = wp.data.select('core').getMedia(attributes.imageId);

				if (media) {
					setImageSizes(media.media_details.sizes);
				}
			});

			wp.data.select('core').getMedia(attributes.imageId);
		}, [attributes.imageId]);

		useEffect(function () {
			if (!imageSizes || !attributes.imageId) {
				return;
			}

			var size = attributes.imageSize;

			if (!size && attributes.showAsTeaser) {
				size = 'puff-teaser-image';
			} else if (!size && !attributes.showAsTeaser) {
				size = 'puff-image';
			}

			if (!(size in imageSizes)) {
				size = 'full';
			}

			setImagePreview(imageSizes[size].source_url);
		}, [imageSizes, attributes.imageSize, attributes.showAsTeaser, attributes.imageId]);

		return React.createElement(
			Fragment,
			null,
			React.createElement(
				InspectorControls,
				null,
				React.createElement(
					PanelBody,
					{ title: 'Content' },
					React.createElement(CheckboxControl, {
						label: 'Custom content',
						checked: custom,
						onChange: function onChange(value) {
							return setAttributes({ custom: value });
						}
					}),
					custom && React.createElement(TextControl, {
						label: __('Link', 'iis-blocks'),
						placeholder: __('/link/to/here', 'iis-blocks'),
						value: attributes.url,
						onChange: function onChange(url) {
							return setAttributes({ url: url });
						}
					}),
					React.createElement(CheckboxControl, {
						label: 'Button',
						checked: attributes.button,
						onChange: function onChange(value) {
							return setAttributes({ button: value });
						}
					})
				),
				React.createElement(
					PanelBody,
					{ title: 'Display' },
					React.createElement(CheckboxControl, {
						label: 'Show as teaser',
						checked: showAsTeaser,
						onChange: function onChange(value) {
							return setAttributes({ showAsTeaser: value });
						}
					}),
					React.createElement(CheckboxControl, {
						label: 'Shadow',
						checked: attributes.shadow,
						onChange: function onChange(shadow) {
							return setAttributes({ shadow: shadow });
						}
					}),
					attributes.align === 'right' && React.createElement(CheckboxControl, {
						label: 'Show on mobile',
						checked: attributes.showOnMobile,
						onChange: function onChange(showOnMobile) {
							return setAttributes({ showOnMobile: showOnMobile });
						}
					}),
					!custom && React.createElement(
						Fragment,
						null,
						React.createElement(CheckboxControl, {
							label: __('Display tags/categories', 'iis-blocks'),
							checked: attributes.displayTags,
							onChange: function onChange(displayTags) {
								return setAttributes({ displayTags: displayTags });
							}
						}),
						React.createElement(CheckboxControl, {
							label: 'Display excerpt',
							checked: attributes.displayExcerpt,
							onChange: function onChange(displayExcerpt) {
								return setAttributes({ displayExcerpt: displayExcerpt });
							}
						}),
						React.createElement(CheckboxControl, {
							label: 'Display dates',
							checked: attributes.displayDates,
							onChange: function onChange(displayDates) {
								return setAttributes({ displayDates: displayDates });
							}
						})
					),
					React.createElement(_DataSelect2.default, {
						label: __('Image size', 'iis-blocks'),
						placeholder: { value: '', label: __('Auto', 'iis-blocks') },
						api: '/iis-blocks/v1/image-sizes',
						value_key: function value_key(obj) {
							return obj.size;
						},
						label_key: function label_key(obj) {
							return obj.name + ' (' + obj.width + 'x' + obj.height;
						},
						value: attributes.imageSize,
						set: function set(imageSize) {
							return setAttributes({ imageSize: imageSize });
						}
					})
				),
				attributes.custom && React.createElement(
					PanelBody,
					{ title: 'Image' },
					React.createElement(
						'div',
						null,
						image
					),
					imagePreview === null && React.createElement(
						MediaUploadCheck,
						null,
						React.createElement(MediaUpload, {
							onSelect: function onSelect(imageObject) {
								return setAttributes({
									imageId: imageObject.id
								});
							},
							type: 'image',
							value: imagePreview,
							render: function render(_ref2) {
								var open = _ref2.open;
								return React.createElement(
									Button,
									{
										className: 'components-button editor-post-featured-image__toggle',
										onClick: open
									},
									'Upload Image!'
								);
							}
						})
					),
					imagePreview !== null && React.createElement(
						Button,
						{
							className: 'components-button is-button is-default',
							onClick: function onClick() {
								return setAttributes({ imageId: null });
							}
						},
						'Remove image'
					)
				)
			),
			React.createElement(
				'div',
				{ style: styleCard },
				custom && imagePreview && React.createElement('img', {
					src: imagePreview,
					alt: '',
					style: showAsTeaser ? styleTeaserImage : styleCardImage
				}),
				React.createElement(
					'div',
					{
						style: showAsTeaser && custom && imagePreview ? styleTeaserContent : styleCardContent
					},
					!custom && React.createElement(_DataSelect2.default, {
						label: __('Select post', 'iis-blocks'),
						placeholder: { value: null, label: __('Choose a post', 'iis-blocks') },
						api: '/iis-blocks/v1/puff-posts?include=' + attributes.postId,
						value_key: function value_key(obj) {
							return obj.ID;
						},
						label_key: function label_key(obj) {
							return obj.post_title;
						},
						value: attributes.postId,
						set: function set(postId) {
							return setAttributes({ postId: postId });
						},
						search: true
					}),
					custom && React.createElement(
						'div',
						null,
						React.createElement(RichText, {
							tagName: 'h1',
							value: attributes.title,
							placeholder: __('Title'),
							style: { margin: 0 },
							onChange: function onChange(title) {
								return setAttributes({ title: title });
							}
						}),
						React.createElement(RichText, {
							tagName: 'div',
							value: attributes.text,
							placeholder: __('Content'),
							onChange: function onChange(text) {
								return setAttributes({ text: text });
							}
						})
					),
					attributes.button && React.createElement(InnerBlocks, {
						allowedBlocks: ['iis/button'],
						template: [['iis/button']],
						templateLock: 'all'
					})
				)
			)
		);
	},
	save: function save(_ref3) {
		var attributes = _ref3.attributes;

		if (attributes.button) {
			return React.createElement(InnerBlocks.Content, null);
		}

		return null;
	}
});

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(16);

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    InnerBlocks = _wp$editor.InnerBlocks;
var useSelect = wp.data.useSelect;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    ToggleControl = _wp$components.ToggleControl;


registerBlockType('iis/grid', {
	title: __('Grid'),
	category: 'iis',
	icon: 'megaphone',
	keywords: [__('grid', 'iis-blocks'), __('columns', 'iis-blocks'), __('column', 'iis-blocks')],
	supports: {
		align: ['full', 'center']
	},
	attributes: {
		align: {
			type: 'string',
			default: 'center'
		},
		asymmetric: {
			type: 'boolean',
			default: false
		}
	},
	getEditWrapperProps: function getEditWrapperProps(attributes) {
		var align = attributes.align;


		if (align === 'center') {
			return { 'data-align': 'wide' };
		}

		return {};
	},
	edit: function edit(_ref) {
		var clientId = _ref.clientId,
		    attributes = _ref.attributes,
		    setAttributes = _ref.setAttributes;

		var _useSelect = useSelect(function (select) {
			var _select = select('core/block-editor'),
			    getBlockOrder = _select.getBlockOrder,
			    getBlockRootClientId = _select.getBlockRootClientId;

			return {
				hasChildBlocks: getBlockOrder(clientId).length > 0,
				rootClientId: getBlockRootClientId(clientId)
			};
		}, [clientId]),
		    hasChildBlocks = _useSelect.hasChildBlocks;

		return React.createElement(
			'div',
			{ className: 'iis-block-grid' },
			React.createElement(
				InspectorControls,
				null,
				React.createElement(
					PanelBody,
					null,
					React.createElement(ToggleControl, {
						label: 'Asymmetric',
						checked: attributes.asymmetric,
						onChange: function onChange(asymmetric) {
							return setAttributes({ asymmetric: asymmetric });
						}
					})
				)
			),
			React.createElement(InnerBlocks, {
				allowedBlocks: ['iis/column'],
				template: [['iis/column'], ['iis/column']],
				orientation: 'horizontal',
				renderAppender: hasChildBlocks ? undefined : function () {
					return React.createElement(InnerBlocks.ButtonBlockAppender, null);
				}
			})
		);
	},
	save: function save() {
		return React.createElement(InnerBlocks.Content, null);
	}
});

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(17);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./grid.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./grid.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, ".iis-block-grid > .block-editor-inner-blocks > .block-editor-block-list__layout {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n}\n\n.iis-block-grid > .block-editor-inner-blocks > .block-editor-block-list__layout > * {\n\tflex: 0 0 50%;\n\twidth: 50%;\n\tmargin-right: unset;\n\tmargin-left: unset;\n\tmax-width: none;\n}\n\n.iis-block-grid > .block-editor-inner-blocks > .block-editor-block-list__layout > *[data-width=\"1/3\"] {\n\tflex: 0 0 33.333%;\n\twidth: 33.333%;\n}\n\n.iis-block-grid > .block-editor-inner-blocks > .block-editor-block-list__layout > *[data-width=\"1\"] {\n\tflex: 0 0 100%;\n\twidth: 100%;\n}\n\n.iis-block-grid > .block-editor-inner-blocks > .block-editor-block-list__layout > *[data-width=\"2/3\"] {\n\tflex: 0 0 66.666%;\n\twidth: 66.666%;\n}\n", ""]);

// exports


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(19);

var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    SelectControl = _wp$components.SelectControl;
var useSelect = wp.data.useSelect;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    InnerBlocks = _wp$editor.InnerBlocks;


var columnWidthOptions = [{
	label: '1/3',
	value: '1/3'
}, {
	label: '1/2',
	value: '1/2'
}, {
	label: '2/3',
	value: '2/3'
}, {
	label: 'Full width',
	value: '1'
}];

registerBlockType('iis/column', {
	title: __('Column'),
	category: 'iis',
	icon: 'megaphone',
	keywords: [__('grid', 'iis-blocks'), __('columns', 'iis-blocks'), __('column', 'iis-blocks')],
	parent: ['iis/grid'],
	attributes: {
		columnWidth: {
			type: 'string',
			default: '1/2'
		}
	},
	getEditWrapperProps: function getEditWrapperProps(attributes) {
		var columnWidth = attributes.columnWidth;


		if (columnWidth) {
			return { 'data-width': columnWidth };
		}

		return {};
	},
	edit: function edit(_ref) {
		var attributes = _ref.attributes,
		    setAttributes = _ref.setAttributes,
		    clientId = _ref.clientId;
		var columnWidth = attributes.columnWidth;

		var _useSelect = useSelect(function (select) {
			var _select = select('core/block-editor'),
			    getBlockOrder = _select.getBlockOrder,
			    getBlockRootClientId = _select.getBlockRootClientId;

			return {
				hasChildBlocks: getBlockOrder(clientId).length > 0,
				rootClientId: getBlockRootClientId(clientId)
			};
		}, [clientId]),
		    hasChildBlocks = _useSelect.hasChildBlocks;

		return React.createElement(
			Fragment,
			null,
			React.createElement(
				InspectorControls,
				null,
				React.createElement(
					PanelBody,
					{ title: 'Column width' },
					React.createElement(SelectControl, {
						label: 'Width',
						onChange: function onChange(width) {
							return setAttributes({ columnWidth: width });
						},
						options: columnWidthOptions,
						value: columnWidth
					})
				)
			),
			React.createElement(
				'div',
				{ className: 'iis-block-column' },
				React.createElement(
					'div',
					{ className: 'iis-block-column__content' },
					React.createElement(InnerBlocks, {
						renderAppender: hasChildBlocks ? undefined : function () {
							return React.createElement(InnerBlocks.ButtonBlockAppender, null);
						}
					})
				)
			)
		);
	},
	save: function save() {
		return React.createElement(InnerBlocks.Content, null);
	}
});

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(20);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./column.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./column.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, ".iis-block-column {\n\theight: 100%;\n\tpadding: 0 1rem;\n\tborder: 1px dotted #888;\n}\n\n.iis-block-column__heading {\n\tfont-family: sans-serif;\n\tfont-size: 14px;\n}\n", ""]);

// exports


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(22);

var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    InnerBlocks = _wp$editor.InnerBlocks,
    withColors = _wp$editor.withColors,
    PanelColorSettings = _wp$editor.PanelColorSettings;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    ToggleControl = _wp$components.ToggleControl,
    SelectControl = _wp$components.SelectControl;


registerBlockType('iis/section', {
	title: __('Section'),
	category: 'iis',
	icon: 'align-center',
	keywords: [__('section')],
	attributes: {
		white: {
			type: 'boolean',
			default: false
		},
		align: {
			type: 'string',
			default: 'full'
		},
		highlightColor: {
			type: 'string',
			default: 'ruby-light'
		},
		decoration: {
			type: 'string',
			default: null
		},
		style: {
			type: 'string',
			default: 'landing-page'
		},
		backgroundColor: {
			type: 'string',
			default: null
		}
	},
	supports: {
		align: ['full']
	},
	edit: withColors({ highlightColor: 'color', backgroundColor: 'background' })(function (_ref) {
		var attributes = _ref.attributes,
		    setAttributes = _ref.setAttributes,
		    highlightColor = _ref.highlightColor,
		    setHighlightColor = _ref.setHighlightColor,
		    backgroundColor = _ref.backgroundColor,
		    setBackgroundColor = _ref.setBackgroundColor;

		var style = {
			backgroundColor: attributes.white ? '#fff' : '#ededed',
			border: attributes.white ? '1px dashed #ededed' : null,
			padding: '20px 0'
		};

		if (attributes.style === 'colored-background' && backgroundColor) {
			style.backgroundColor = backgroundColor.color;
		}

		var className = 'iis-block-section iis-block-section--' + highlightColor.slug;

		return React.createElement(
			'div',
			{ className: className },
			React.createElement(
				InspectorControls,
				null,
				React.createElement(
					PanelBody,
					{ title: 'Design' },
					React.createElement(SelectControl, {
						label: 'Style',
						onChange: function onChange(val) {
							return setAttributes({ style: val });
						},
						options: [{
							label: 'Landing page',
							value: 'landing-page'
						}, {
							label: 'Colored background',
							value: 'colored-background'
						}],
						value: attributes.style
					}),
					attributes.style === 'landing-page' && React.createElement(
						Fragment,
						null,
						React.createElement(ToggleControl, {
							label: 'White',
							checked: attributes.white,
							onChange: function onChange(white) {
								return setAttributes({ white: white });
							}
						}),
						React.createElement(SelectControl, {
							label: 'Decoration',
							onChange: function onChange(decoration) {
								return setAttributes({ decoration: decoration });
							},
							options: [{
								label: 'None',
								value: null
							}, {
								label: 'Rectangle left',
								value: 'rectangle-left'
							}, {
								label: 'Rectangle right',
								value: 'rectangle-right'
							}],
							value: attributes.decoration
						})
					)
				),
				attributes.style === 'landing-page' && React.createElement(PanelColorSettings, {
					title: __('Color settings'),
					colorSettings: [{
						colors: [{
							name: __('Ruby'),
							slug: 'ruby-light',
							color: '#ff9fb4'
						}, {
							name: __('Peacock'),
							slug: 'peacock-light',
							color: '#e0bff5'
						}, {
							name: __('Jade'),
							slug: 'jade-light',
							color: '#aae3d9'
						}],
						value: highlightColor.color,
						onChange: setHighlightColor,
						label: __('Highlight Color')
					}]
				}),
				attributes.style === 'colored-background' && React.createElement(PanelColorSettings, {
					title: __('Color settings'),
					colorSettings: [{
						colors: [{
							name: __('Ruby'),
							slug: 'rub-light',
							color: '#ff9fb4'
						}, {
							name: __('Peacock'),
							slug: 'peacock-light',
							color: '#e0bff5'
						}, {
							name: __('Jade'),
							slug: 'jade-light',
							color: '#aae3d9'
						}, {
							name: __('Sandstone'),
							slug: 'sandstone-light',
							color: '#fcccb1'
						}, {
							name: __('Lemon'),
							slug: 'lemon-light',
							color: '#ffe696'
						}, {
							name: __('Ocean'),
							slug: 'ocean-light',
							color: '#a7d8fd'
						}],
						value: backgroundColor.color,
						onChange: setBackgroundColor,
						label: __('Background Color')
					}]
				})
			),
			React.createElement(
				'div',
				{ style: style },
				React.createElement(InnerBlocks, null)
			)
		);
	}),
	save: function save() {
		return React.createElement(InnerBlocks.Content, null);
	}
});

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(23);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./section.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./section.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, ".iis-block-section .rich-text::selection {\n\tbackground-color: #ff9fb4;\n}\n\n.iis-block-section .rich-text::-moz-selection {\n\tbackground-color: #ff9fb4;\n}\n.iis-block-section--jade-light .rich-text::selection {\n\tbackground-color: #aae3d9;\n}\n\n.iis-block-section--jade-light .rich-text::-moz-selection {\n\tbackground-color: #aae3d9;\n}\n\n.iis-block-section--peacock-light .rich-text::selection {\n\tbackground-color: #e0bff5;\n}\n\n.iis-block-section--peacock-light .rich-text::-moz-selection {\n\tbackground-color: #e0bff5;\n}\n", ""]);

// exports


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    InnerBlocks = _wp$editor.InnerBlocks,
    RichText = _wp$editor.RichText;


registerBlockType('iis/section-header', {
	title: __('Section Header'),
	category: 'iis',
	icon: 'align-center',
	keywords: [__('section'), __('title')],
	attributes: {
		title: {
			type: 'string',
			default: ''
		},
		text: {
			type: 'string',
			default: ''
		},
		preTitle: {
			type: 'string',
			default: ''
		}
	},
	parent: 'iis/section',
	edit: function edit(_ref) {
		var attributes = _ref.attributes,
		    setAttributes = _ref.setAttributes;

		return React.createElement(
			'div',
			{ style: { paddingBottom: '0.5rem', borderBottom: '1px solid #ccc' } },
			React.createElement(RichText, {
				tagName: 'span',
				value: attributes.preTitle,
				placeholder: __('Content'),
				style: { fontSize: 'small', textTransform: 'uppercase' },
				onChange: function onChange(preTitle) {
					return setAttributes({ preTitle: preTitle });
				}
			}),
			React.createElement(RichText, {
				tagName: 'h1',
				value: attributes.title,
				placeholder: __('Title'),
				style: { marginTop: 0 },
				onChange: function onChange(title) {
					return setAttributes({ title: title });
				}
			}),
			React.createElement(RichText, {
				tagName: 'p',
				value: attributes.text,
				placeholder: __('Content'),
				onChange: function onChange(text) {
					return setAttributes({ text: text });
				}
			})
		);
	},
	save: function save() {
		return null;
	}
});

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _DataSelect = __webpack_require__(2);

var _DataSelect2 = _interopRequireDefault(_DataSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __ = wp.i18n.__;
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$components = wp.components,
    CheckboxControl = _wp$components.CheckboxControl,
    PanelBody = _wp$components.PanelBody,
    Button = _wp$components.Button,
    TextControl = _wp$components.TextControl;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    MediaUpload = _wp$editor.MediaUpload,
    MediaUploadCheck = _wp$editor.MediaUploadCheck,
    InnerBlocks = _wp$editor.InnerBlocks;


registerBlockType('iis/card', {
	title: __('Card', 'iis-blocks'),
	category: 'iis',
	icon: 'text-page',
	keywords: [__('aside'), __('sidebar'), __('content'), __('card')],
	supports: {
		align: ['right', 'wide']
	},
	attributes: {
		background: {
			type: 'boolean',
			default: false
		},
		showAsTeaser: {
			type: 'boolean',
			default: false
		},
		showOnMobile: {
			type: 'boolean',
			default: false
		},
		imageSize: {
			type: 'string',
			default: null
		},
		imageId: {
			type: 'number',
			default: null
		},
		url: {
			type: 'string',
			default: null
		},
		align: {
			type: 'string',
			default: null
		},
		displayDates: {
			type: 'boolean',
			default: false
		},
		shadow: {
			type: 'boolean',
			default: false
		}
	},
	edit: function edit(_ref) {
		var attributes = _ref.attributes,
		    setAttributes = _ref.setAttributes;

		var _useState = useState(null),
		    _useState2 = _slicedToArray(_useState, 2),
		    imageSizes = _useState2[0],
		    setImageSizes = _useState2[1];

		var _useState3 = useState(null),
		    _useState4 = _slicedToArray(_useState3, 2),
		    imagePreview = _useState4[0],
		    setImagePreview = _useState4[1];

		var showAsTeaser = attributes.showAsTeaser,
		    background = attributes.background;

		var styleCard = {
			position: 'relative',
			border: '1px solid #bbb',
			borderRadius: '.25rem',
			overflow: 'hidden'
		};

		if (attributes.shadow) {
			styleCard.boxShadow = '0 4rem 6rem rgb(31 42 54 / 20%)';
		}

		var styleCardContent = {
			padding: '1rem'
		};

		var styleCardImage = {
			width: '100%',
			display: 'block',
			borderRadius: '.25rem .25rem 0 0'
		};

		var styleTeaserImage = {
			width: '100%',
			height: '100%',
			minHeight: '300px',
			display: 'block',
			objectFit: 'cover'
		};

		var styleTeaserContent = {
			display: 'flex',
			flexDirection: 'column',
			alignContent: 'stretch',
			justifyContent: 'flex-end',
			position: 'absolute',
			right: 0,
			bottom: 0,
			left: 0,
			textShadow: '0 0 1rem rgba(0,0,0,.5)',
			backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,0) 0,transparent 55%,#000)',
			padding: '2rem',
			color: '#fff'
		};

		var image = null;

		if (imagePreview) {
			image = React.createElement('img', { src: imagePreview, alt: '', style: { width: '100%', height: 'auto' } });
		}

		if (!attributes.showAsTeaser && attributes.align === 'wide') {
			styleCard.display = 'flex';
			styleCardImage.maxWidth = '50%';
			styleCardImage.height = '100%';
			styleCardImage.flex = '0 0 100%';
			styleCardImage.width = '100%';
			styleCardImage.borderRadius = '.25rem 0 0 .25rem';
		}

		useEffect(function () {
			if (!attributes.imageId) {
				setImagePreview(null);
				setImageSizes(null);

				return;
			}

			wp.data.subscribe(function () {
				var media = wp.data.select('core').getMedia(attributes.imageId);

				if (media) {
					setImageSizes(media.media_details.sizes);
				}
			});

			wp.data.select('core').getMedia(attributes.imageId);
		}, [attributes.imageId]);

		useEffect(function () {
			if (!imageSizes || !attributes.imageId) {
				return;
			}

			var size = attributes.imageSize;

			if (!size && attributes.showAsTeaser) {
				size = 'puff-teaser-image';
			} else if (!size && !attributes.showAsTeaser) {
				size = 'puff-image';
			}

			if (!(size in imageSizes)) {
				size = 'full';
			}

			setImagePreview(imageSizes[size].source_url);
		}, [imageSizes, attributes.imageSize, attributes.showAsTeaser, attributes.imageId]);

		return React.createElement(
			Fragment,
			null,
			React.createElement(
				InspectorControls,
				null,
				React.createElement(
					PanelBody,
					{ title: 'Content' },
					React.createElement(TextControl, {
						label: __('Link', 'iis-blocks'),
						placeholder: __('/link/to/here', 'iis-blocks'),
						value: attributes.url,
						onChange: function onChange(url) {
							return setAttributes({ url: url });
						}
					})
				),
				React.createElement(
					PanelBody,
					{ title: 'Display' },
					React.createElement(CheckboxControl, {
						label: 'Background',
						checked: background,
						onChange: function onChange(value) {
							return setAttributes({ background: value });
						}
					}),
					React.createElement(CheckboxControl, {
						label: 'Show as teaser',
						checked: showAsTeaser,
						onChange: function onChange(value) {
							return setAttributes({ showAsTeaser: value });
						}
					}),
					React.createElement(CheckboxControl, {
						label: 'Shadow',
						checked: attributes.shadow,
						onChange: function onChange(shadow) {
							return setAttributes({ shadow: shadow });
						}
					}),
					attributes.align === 'right' && React.createElement(CheckboxControl, {
						label: 'Show on mobile',
						checked: attributes.showOnMobile,
						onChange: function onChange(showOnMobile) {
							return setAttributes({ showOnMobile: showOnMobile });
						}
					}),
					React.createElement(_DataSelect2.default, {
						label: __('Image size', 'iis-blocks'),
						placeholder: { value: '', label: __('Auto', 'iis-blocks') },
						api: '/iis-blocks/v1/image-sizes',
						value_key: function value_key(obj) {
							return obj.size;
						},
						label_key: function label_key(obj) {
							return obj.name + ' (' + obj.width + 'x' + obj.height;
						},
						value: attributes.imageSize,
						set: function set(imageSize) {
							return setAttributes({ imageSize: imageSize });
						}
					})
				),
				React.createElement(
					PanelBody,
					{ title: 'Image' },
					React.createElement(
						'div',
						null,
						image
					),
					imagePreview === null && React.createElement(
						MediaUploadCheck,
						null,
						React.createElement(MediaUpload, {
							onSelect: function onSelect(imageObject) {
								return setAttributes({
									imageId: imageObject.id
								});
							},
							type: 'image',
							value: imagePreview,
							render: function render(_ref2) {
								var open = _ref2.open;
								return React.createElement(
									Button,
									{
										className: 'components-button editor-post-featured-image__toggle',
										onClick: open
									},
									'Upload Image!'
								);
							}
						})
					),
					imagePreview !== null && React.createElement(
						Button,
						{
							className: 'components-button is-button is-default',
							onClick: function onClick() {
								return setAttributes({ imageId: null });
							}
						},
						'Remove image'
					)
				)
			),
			React.createElement(
				'div',
				{ style: styleCard },
				imagePreview && React.createElement('img', {
					src: imagePreview,
					alt: '',
					style: showAsTeaser ? styleTeaserImage : styleCardImage
				}),
				React.createElement(
					'div',
					{
						style: showAsTeaser && imagePreview ? styleTeaserContent : styleCardContent
					},
					React.createElement(
						'div',
						null,
						React.createElement(InnerBlocks, {
							allowedBlocks: ['core/heading', 'core/paragraph', 'core/html', 'core/list', 'iis/button'],
							template: [['core/heading'], ['core/paragraph']]
						})
					)
				)
			)
		);
	},
	save: function save() {
		return React.createElement(InnerBlocks.Content, null);
	}
});

/***/ }),
/* 26 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);