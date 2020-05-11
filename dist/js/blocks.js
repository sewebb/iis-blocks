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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(12);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

__webpack_require__(3);

__webpack_require__(4);

__webpack_require__(5);

__webpack_require__(7);

__webpack_require__(11);

__webpack_require__(17);

/***/ }),
/* 2 */
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
/* 3 */
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
/* 4 */
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _DataSelect = __webpack_require__(6);

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
						api: '/wp-json/wp/v2/types',
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
/* 6 */
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

			fetch(url).then(function (response) {
				return response.json();
			}).then(function (json) {
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

DataSelect.defaultProps = {
	set: function set() {}
};
exports.default = DataSelect;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(8);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var Component = wp.element.Component;
var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    InspectorControls = _wp$editor.InspectorControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    SelectControl = _wp$components.SelectControl;

var MailchimpLists = function (_Component) {
	_inherits(MailchimpLists, _Component);

	function MailchimpLists() {
		var _ref,
		    _this2 = this;

		var _temp, _this, _ret;

		_classCallCheck(this, MailchimpLists);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MailchimpLists.__proto__ || Object.getPrototypeOf(MailchimpLists)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			loading: true,
			lists: [],
			error: false
		}, _this.fetchLists = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
			var lists;
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.prev = 0;
							_context.next = 3;
							return wp.apiFetch({ path: '/iis-blocks/v1/mailchimp-lists', method: 'GET' });

						case 3:
							_context.t0 = function (list) {
								return {
									label: list.name,
									value: list.id
								};
							};

							lists = _context.sent.map(_context.t0);


							_this.setState({
								lists: lists,
								loading: false
							});
							_context.next = 11;
							break;

						case 8:
							_context.prev = 8;
							_context.t1 = _context['catch'](0);

							_this.setState({ loading: false, error: _context.t1.message });

						case 11:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, _this2, [[0, 8]]);
		})), _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(MailchimpLists, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.fetchLists();
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			if (this.state.loading) {
				return React.createElement('span', { className: 'components-spinner', style: { float: 'none' } });
			}

			if (this.state.error) {
				return React.createElement(
					'span',
					{ style: { color: '#d94f4f' } },
					this.state.error
				);
			}

			return React.createElement(SelectControl, {
				value: this.props.list_id,
				options: this.state.lists,
				onChange: function onChange(listId) {
					return _this3.props.setListId(listId);
				}
			});
		}
	}]);

	return MailchimpLists;
}(Component);

MailchimpLists.defaultProps = {
	setListId: function setListId() {}
};


registerBlockType('iis/newsletter', {
	title: __('Newsletter'),
	category: 'iis',
	icon: 'email',
	keywords: [__('newsletter'), __('mailchimp'), __('email')],
	attributes: {
		title: {
			type: 'string',
			default: ''
		},
		content: {
			type: 'string',
			default: ''
		},
		termsText: {
			type: 'string',
			default: ''
		},
		buttonText: {
			type: 'string',
			default: ''
		},
		listId: {
			type: 'string',
			default: ''
		}
	},
	edit: function edit(_ref3) {
		var attributes = _ref3.attributes,
		    setAttributes = _ref3.setAttributes;

		return React.createElement(
			'div',
			null,
			React.createElement(
				InspectorControls,
				null,
				React.createElement(
					PanelBody,
					{ title: 'Mailchimp list' },
					React.createElement(MailchimpLists, { setListId: function setListId(listId) {
							return setAttributes({ listId: listId });
						} })
				)
			),
			React.createElement(RichText, {
				identifier: 'content',
				wrapperClassName: 'wp-block-heading',
				tagName: 'h3',
				value: attributes.title,
				onChange: function onChange(value) {
					return setAttributes({ title: value });
				},
				placeholder: __('Title')
			}),
			React.createElement(RichText, {
				identifier: 'content',
				wrapperClassName: 'wp-block-paragraph',
				tagName: 'p',
				value: attributes.content,
				onChange: function onChange(value) {
					return setAttributes({ content: value });
				},
				placeholder: __('Description')
			}),
			React.createElement(
				'p',
				null,
				'\xAB Newsletter form \xBB'
			),
			React.createElement(RichText, {
				identifier: 'content',
				wrapperClassName: 'wp-block-paragraph',
				tagName: 'p',
				style: { fontSize: 'small' },
				value: attributes.termsText,
				onChange: function onChange(value) {
					return setAttributes({ termsText: value });
				},
				placeholder: __('Terms text')
			}),
			React.createElement(
				'div',
				{ className: 'components-button is-button is-default is-primary' },
				React.createElement(RichText, {
					identifier: 'content',
					tagName: 'span',
					formattingControls: ['bold', 'italic', 'strikethrough'],
					value: attributes.buttonText,
					onChange: function onChange(value) {
						return setAttributes({ buttonText: value });
					},
					placeholder: __('Button text')
				})
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

module.exports = __webpack_require__(9);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(10);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 10 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
    RichText = _wp$editor.RichText;


registerBlockType('iis/hero', {
	title: __('Hero'),
	category: 'iis',
	icon: 'megaphone',
	keywords: [__('hero'), __('title')],
	supports: {
		align: ['full', 'center']
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
		alignment: {
			type: 'string',
			default: 'full'
		}
	},
	edit: function edit(_ref) {
		var attributes = _ref.attributes,
		    setAttributes = _ref.setAttributes;

		var style = {
			position: 'relative',
			textAlign: 'left',
			color: '#fff',
			backgroundColor: '#1f2a36'
		};

		var imageStyle = {
			minHeight: '27.77778rem',
			maxHeight: '50vh',
			objectFit: 'cover',
			width: '100%',
			display: 'block'
		};

		var contentStyle = {
			position: 'absolute',
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
			display: 'flex',
			alignItems: 'flex-end',
			textShadow: '0 0 1rem rgba(0,0,0,.5)',
			backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,0) 0,transparent 55%,#000)'
		};

		var innerContentStyle = {
			padding: '4rem',
			maxWidth: '80%'
		};

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
									mediaUrl: imageObject.sizes.large.url,
									mediaId: imageObject.id
								});
							},
							type: 'image',
							value: attributes.mediaUrl,
							render: function render(_ref2) {
								var open = _ref2.open;
								return React.createElement(
									Button,
									{ className: 'components-button editor-post-featured-image__toggle',
										onClick: open },
									'Upload Image!'
								);
							}
						})
					),
					attributes.mediaUrl !== null && React.createElement(
						Button,
						{ className: 'components-button is-button is-default',
							onClick: function onClick() {
								return setAttributes({ mediaUrl: null });
							} },
						'Remove background'
					)
				)
			),
			React.createElement(
				'div',
				{ style: style },
				React.createElement('img', { src: attributes.mediaUrl, style: imageStyle }),
				React.createElement(
					'div',
					{ style: contentStyle },
					React.createElement(
						'div',
						{ style: innerContentStyle },
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
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
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

/***/ })
/******/ ]);