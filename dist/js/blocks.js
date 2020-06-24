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
module.exports = __webpack_require__(21);


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
						'Remove file'
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
	title: __('Post Archive', 'iis'),
	category: 'iis',
	icon: 'media-archive',
	keywords: [__('archive', 'iis')],
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
						label: __('Select post type', 'iis'),
						placeholder: { value: null, label: __('Post type', 'iis') },
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
    Button = _wp$components.Button;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    MediaUpload = _wp$editor.MediaUpload,
    MediaUploadCheck = _wp$editor.MediaUploadCheck,
    RichText = _wp$editor.RichText,
    InnerBlocks = _wp$editor.InnerBlocks;


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

		if (attributes.mediaUrl) {
			image = React.createElement('img', { src: attributes.mediaUrl, alt: '', style: { width: '100%', height: 'auto' } });
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
					attributes.mediaUrl === null && React.createElement(
						MediaUploadCheck,
						null,
						React.createElement(MediaUpload, {
							onSelect: function onSelect(imageObject) {
								return setAttributes({
									mediaUrl: imageObject.sizes.full.url,
									mediaId: imageObject.id
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
					)
				)
			),
			React.createElement(
				'div',
				{ className: 'iis-block-hero ' + (!attributes.mediaId ? 'iis-block-hero--no-image' : null) },
				attributes.mediaUrl && React.createElement('img', { src: attributes.mediaUrl, className: 'iis-block-hero__image' }),
				React.createElement(
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
exports.push([module.i, ".iis-block-hero {\n\tposition: relative;\n\ttext-align: left;\n\tcolor: #fff;\n}\n\n.iis-block-hero--no-image {\n\tcolor: #000;\n}\n\n.iis-block-hero__content {\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tdisplay: flex;\n\talign-items: flex-end;\n\ttext-shadow: 0 0 1rem rgba(0,0,0,.5);\n\tbackground-image: linear-gradient(180deg,hsla(0,0%,100%,0) 0,transparent 55%,#000);\n}\n\n.iis-block-hero--no-image .iis-block-hero__content {\n\tposition: static;\n\tbackground: none;\n\ttext-shadow: none;\n}\n\n.iis-block-hero__inner-content {\n\tpadding: 4rem;\n\tmax-width: 80%;\n}\n\n.iis-block-hero--no-image .iis-block-hero__inner-content {\n\tpadding: 0 2rem;\n\tmax-width: none;\n}\n\n.iis-block-hero__image {\n\tmin-height: 27.77778rem;\n\tmax-height: 50vh;\n\tobject-fit: cover;\n\twidth: 100%;\n\tdisplay: block;\n}\n\n.iis-block-hero__buttons .block-editor-block-list__layout {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.iis-block-hero__buttons .block-editor-block-list__layout > * {\n\tmargin-right: 20px;\n}\n", ""]);

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

		if ('small' === attributes.size) {
			buttonStyle.padding = '.3rem .75rem';
			buttonStyle.fontSize = '.88889rem';
		} else if ('large' === attributes.size) {
			buttonStyle.padding = '.8rem 2rem';
			buttonStyle.fontSize = '1.33333rem';
		} else {
			buttonStyle.fontSize = '.88889rem';
		}

		console.log(buttonColor);

		if (!buttonColor.slug || ['jade-dark', 'ruby-dark', 'ocean-dark'].includes(buttonColor.slug)) {
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
	save: function save(_ref2) {
		var attributes = _ref2.attributes;

		return null;
	}
});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _DataSelect = __webpack_require__(2);

var _DataSelect2 = _interopRequireDefault(_DataSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
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
    RichText = _wp$editor.RichText;


registerBlockType('iis/puff', {
	title: __('Post puff', 'iis'),
	category: 'iis',
	icon: 'format-aside',
	keywords: [__('card', 'iis'), __('teaser', 'iis'), __('puff', 'iis')],
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
		imagePreviewUrl: {
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
		}
	},
	edit: function edit(_ref) {
		var attributes = _ref.attributes,
		    setAttributes = _ref.setAttributes;
		var showAsTeaser = attributes.showAsTeaser,
		    custom = attributes.custom;

		var styleCard = {
			position: 'relative',
			border: '1px solid #bbb',
			borderRadius: '.25rem',
			overflow: 'hidden'
		};

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

		if (attributes.imagePreviewUrl) {
			image = React.createElement('img', { src: attributes.imagePreviewUrl, alt: '', style: { width: '100%', height: 'auto' } });
		}

		if (!attributes.showAsTeaser && attributes.align === 'wide') {
			styleCard.display = 'flex';
			styleCardImage.maxWidth = '50%';
			styleCardImage.height = '100%';
			styleCardImage.flex = '0 0 100%';
			styleCardImage.width = '100%';
			styleCardImage.borderRadius = '.25rem 0 0 .25rem';
		}

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
						label: __('Link', 'iis'),
						placeholder: __('/link/to/here', 'iis'),
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
						label: 'Show as teaser',
						checked: showAsTeaser,
						onChange: function onChange(value) {
							return setAttributes({ showAsTeaser: value });
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
							label: __('Display tags/categories', 'iis'),
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
						})
					)
				),
				attributes.custom && React.createElement(
					PanelBody,
					{ title: 'Image' },
					React.createElement(
						'div',
						null,
						image
					),
					attributes.imagePreviewUrl === null && React.createElement(
						MediaUploadCheck,
						null,
						React.createElement(MediaUpload, {
							onSelect: function onSelect(imageObject) {
								return setAttributes({
									imagePreviewUrl: imageObject.sizes.full.url,
									imageId: imageObject.id
								});
							},
							type: 'image',
							value: attributes.imagePreviewUrl,
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
					attributes.imagePreviewUrl !== null && React.createElement(
						Button,
						{
							className: 'components-button is-button is-default',
							onClick: function onClick() {
								return setAttributes({ imagePreviewUrl: null, imageId: null });
							}
						},
						'Remove image'
					)
				)
			),
			React.createElement(
				'div',
				{ style: styleCard },
				custom && attributes.imagePreviewUrl && React.createElement('img', {
					src: attributes.imagePreviewUrl,
					alt: '',
					style: showAsTeaser ? styleTeaserImage : styleCardImage
				}),
				React.createElement(
					'div',
					{
						style: showAsTeaser && custom ? styleTeaserContent : styleCardContent
					},
					!custom && React.createElement(_DataSelect2.default, {
						label: __('Select post', 'iis'),
						placeholder: { value: null, label: __('Choose a post', 'iis') },
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(16);

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.editor.InnerBlocks;


registerBlockType('iis/grid', {
	title: __('Grid'),
	category: 'iis',
	icon: 'megaphone',
	keywords: [__('grid', 'iis'), __('columns', 'iis'), __('column', 'iis')],
	supports: {
		align: ['full', 'center']
	},
	attributes: {
		big: {
			type: 'boolean',
			default: false
		},
		align: {
			type: 'string',
			default: 'center'
		}
	},
	getEditWrapperProps: function getEditWrapperProps(attributes) {
		var align = attributes.align;


		if (align === 'center') {
			return { 'data-align': 'wide' };
		}

		return {};
	},
	edit: function edit() {
		return React.createElement(
			'div',
			{ className: 'iis-block-grid' },
			React.createElement(InnerBlocks, { allowedBlocks: ['iis/column'] })
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
	keywords: [__('grid', 'iis'), __('columns', 'iis'), __('column', 'iis')],
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
		    setAttributes = _ref.setAttributes;
		var columnWidth = attributes.columnWidth;


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
					React.createElement(InnerBlocks, null)
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
exports.push([module.i, ".iis-block-column {\n\tpadding: 0 1rem;\n\tborder: 1px dotted #bbb;\n}\n\n.iis-block-column__heading {\n\tfont-family: sans-serif;\n\tfont-size: 14px;\n}\n", ""]);

// exports


/***/ }),
/* 21 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);