/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/blocks.js":
/*!**************************!*\
  !*** ./src/js/blocks.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_Preamble__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/Preamble */ "./src/js/blocks/Preamble.jsx");
/* harmony import */ var _blocks_Preamble__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blocks_Preamble__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blocks_Info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/Info */ "./src/js/blocks/Info.jsx");
/* harmony import */ var _blocks_Info__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blocks_Info__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blocks_Download__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/Download */ "./src/js/blocks/Download.jsx");
/* harmony import */ var _blocks_Download__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_blocks_Download__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _blocks_PostArchive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/PostArchive */ "./src/js/blocks/PostArchive.jsx");
/* harmony import */ var _blocks_Hero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/Hero */ "./src/js/blocks/Hero.jsx");
/* harmony import */ var _blocks_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/Button */ "./src/js/blocks/Button.jsx");
/* harmony import */ var _blocks_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_blocks_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _blocks_Buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blocks/Buttons */ "./src/js/blocks/Buttons.jsx");
/* harmony import */ var _blocks_Puff__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blocks/Puff */ "./src/js/blocks/Puff.jsx");
/* harmony import */ var _blocks_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blocks/Grid */ "./src/js/blocks/Grid.jsx");
/* harmony import */ var _blocks_Column__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blocks/Column */ "./src/js/blocks/Column.jsx");
/* harmony import */ var _blocks_Section__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blocks/Section */ "./src/js/blocks/Section.jsx");
/* harmony import */ var _blocks_SectionHeader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blocks/SectionHeader */ "./src/js/blocks/SectionHeader.jsx");
/* harmony import */ var _blocks_SectionHeader__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_blocks_SectionHeader__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _blocks_Card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./blocks/Card */ "./src/js/blocks/Card.jsx");
/* harmony import */ var _blocks_Testimonial__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./blocks/Testimonial */ "./src/js/blocks/Testimonial.jsx");
/* harmony import */ var _blocks_Glider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./blocks/Glider */ "./src/js/blocks/Glider.jsx");
/* harmony import */ var _blocks_GliderHero__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./blocks/GliderHero */ "./src/js/blocks/GliderHero.jsx");
/* harmony import */ var _blocks_Slide__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./blocks/Slide */ "./src/js/blocks/Slide.jsx");
/* harmony import */ var _blocks_Slide__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_blocks_Slide__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _blocks_HeroSlide__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./blocks/HeroSlide */ "./src/js/blocks/HeroSlide.jsx");
/* harmony import */ var _blocks_HeroSlide__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_blocks_HeroSlide__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _blocks_Icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./blocks/Icon */ "./src/js/blocks/Icon.jsx");
/* harmony import */ var _blocks_News__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./blocks/News */ "./src/js/blocks/News.jsx");
/* harmony import */ var _blocks_Visualization__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./blocks/Visualization */ "./src/js/blocks/Visualization.jsx");
/* harmony import */ var _blocks_Visualization__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_blocks_Visualization__WEBPACK_IMPORTED_MODULE_20__);






















/***/ }),

/***/ "./src/js/blocks/Button.jsx":
/*!**********************************!*\
  !*** ./src/js/blocks/Button.jsx ***!
  \**********************************/
/***/ (() => {

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
    TextControl = _wp$components.TextControl,
    CheckboxControl = _wp$components.CheckboxControl;
registerBlockType('iis/button', {
  title: __('Button'),
  category: 'iis',
  icon: 'admin-links',
  keywords: [__('button')],
  attributes: {
    size: {
      type: 'string',
      "default": 'regular'
    },
    text: {
      type: 'string',
      "default": ''
    },
    link: {
      type: 'string',
      "default": ''
    },
    target: {
      type: 'string',
      "default": '_self'
    },
    buttonColor: {
      type: 'string',
      "default": null
    }
  },
  edit: withColors({
    buttonColor: 'color'
  })(function (_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes,
        buttonColor = _ref.buttonColor,
        setButtonColor = _ref.setButtonColor;
    var sizes = [{
      value: 'small',
      label: 'Small'
    }, {
      value: 'regular',
      label: 'Default'
    }, {
      value: 'large',
      label: 'Large'
    }];
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

    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(InspectorControls, null, /*#__PURE__*/React.createElement(PanelBody, null, /*#__PURE__*/React.createElement(SelectControl, {
      label: __('Size'),
      options: sizes,
      value: attributes.size,
      onChange: function onChange(size) {
        return setAttributes({
          size: size
        });
      }
    }), /*#__PURE__*/React.createElement(TextControl, {
      label: __('URL'),
      value: attributes.link,
      help: attributes.link ? /*#__PURE__*/React.createElement("a", {
        style: {
          display: 'block',
          marginTop: '1rem'
        },
        href: attributes.link,
        target: "_blank"
      }, __('Test link')) : null,
      type: "url",
      onChange: function onChange(link) {
        return setAttributes({
          link: link
        });
      }
    }), /*#__PURE__*/React.createElement(CheckboxControl, {
      label: __('Open in new window'),
      checked: attributes.target === '_blank',
      onChange: function onChange(value) {
        return setAttributes({
          target: value ? '_blank' : '_self'
        });
      }
    })), /*#__PURE__*/React.createElement(PanelColorSettings, {
      title: __('Color Settings'),
      colorSettings: [{
        value: buttonColor.color,
        onChange: setButtonColor,
        label: __('Button Color')
      }]
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: buttonStyle
    }, /*#__PURE__*/React.createElement(RichText, {
      tagName: "span",
      value: attributes.text,
      placeholder: __('Button text'),
      onChange: function onChange(text) {
        return setAttributes({
          text: text
        });
      }
    }))));
  }),
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./src/js/blocks/Buttons.jsx":
/*!***********************************!*\
  !*** ./src/js/blocks/Buttons.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _buttons_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons.css */ "./src/js/blocks/buttons.css");

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.editor.InnerBlocks;
var useSelect = wp.data.useSelect;
registerBlockType('iis/buttons', {
  title: __('Buttons'),
  category: 'iis',
  icon: 'admin-links',
  keywords: [__('buttons', 'iis-blocks'), __('button', 'iis-blocks'), __('action', 'iis-blocks')],
  edit: function edit(_ref) {
    var clientId = _ref.clientId;

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

    return /*#__PURE__*/React.createElement("div", {
      className: "iis-block-buttons"
    }, /*#__PURE__*/React.createElement(InnerBlocks, {
      allowedBlocks: ['iis/button'],
      template: [['iis/button'], ['iis/button']],
      orientation: "horizontal",
      renderAppender: hasChildBlocks ? undefined : function () {
        return /*#__PURE__*/React.createElement(InnerBlocks.ButtonBlockAppender, null);
      }
    }));
  },
  save: function save() {
    return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
  }
});

/***/ }),

/***/ "./src/js/blocks/Card.jsx":
/*!********************************!*\
  !*** ./src/js/blocks/Card.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_DataSelect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/DataSelect */ "./src/js/components/DataSelect.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var __ = wp.i18n.__;
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect,
    useRef = _wp$element.useRef;
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
    InnerBlocks = _wp$editor.InnerBlocks,
    RichText = _wp$editor.RichText;
var useBlockProps = wp.blockEditor.useBlockProps;

function PlayIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    id: "icon-play",
    viewBox: "0 0 32 32",
    width: 87,
    height: 87
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M16 28.5c6.9 0 12.5-5.6 12.5-12.5S22.9 3.5 16 3.5 3.5 9.1 3.5 16 9.1 28.5 16 28.5m0 3C7.4 31.5.5 24.6.5 16S7.4.5 16 .5 31.5 7.4 31.5 16 24.6 31.5 16 31.5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M11.7 8.2l11.4 7.7-11.4 7.7z"
  }));
}

function parseYoutube(url) {
  if (!url) {
    return null;
  }

  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return match && match[7].length === 11 ? match[7] : false;
}

registerBlockType('iis/card', {
  title: __('Card', 'iis-blocks'),
  category: 'iis',
  icon: 'text-page',
  keywords: [__('aside'), __('sidebar'), __('content'), __('card')],
  supports: {
    align: ['right', 'wide'],
    lightBlockWrapper: true
  },
  attributes: {
    background: {
      type: 'boolean',
      "default": false
    },
    showAsTeaser: {
      type: 'boolean',
      "default": false
    },
    showOnMobile: {
      type: 'boolean',
      "default": false
    },
    imageSize: {
      type: 'string',
      "default": null
    },
    imageId: {
      type: 'number',
      "default": null
    },
    youtube: {
      type: 'string',
      "default": null
    },
    pretitle: {
      type: 'string',
      "default": ''
    },
    title: {
      type: 'string',
      "default": ''
    },
    url: {
      type: 'string',
      "default": null
    },
    target: {
      type: 'string',
      "default": '_self'
    },
    align: {
      type: 'string',
      "default": null
    },
    displayDates: {
      type: 'boolean',
      "default": false
    },
    shadow: {
      type: 'boolean',
      "default": false
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
    var ref = useRef();

    var _useState = useState(null),
        _useState2 = _slicedToArray(_useState, 2),
        imageSizes = _useState2[0],
        setImageSizes = _useState2[1];

    var _useState3 = useState(null),
        _useState4 = _slicedToArray(_useState3, 2),
        imagePreview = _useState4[0],
        setImagePreview = _useState4[1];

    var youtubeId = parseYoutube(attributes.youtube);
    var youtubeUrl = youtubeId ? "https://www.youtube-nocookie.com/embed/".concat(youtubeId, "?rel=0") : null;
    var mediaPreview = imagePreview || youtubeUrl ? imagePreview || "https://i3.ytimg.com/vi/".concat(youtubeId, "/maxresdefault.jpg") : null;
    var showAsTeaser = attributes.showAsTeaser,
        background = attributes.background;
    var styleCard = {
      position: 'relative',
      border: background ? '1px solid #bbb' : null,
      borderRadius: '.25rem',
      overflow: 'hidden'
    };

    if (attributes.shadow) {
      styleCard.boxShadow = '0 4rem 6rem rgb(31 42 54 / 20%)';
    }

    var styleCardContent = {
      padding: background ? '1rem' : null
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
      image = /*#__PURE__*/React.createElement("img", {
        src: imagePreview,
        alt: "",
        style: {
          width: '100%',
          height: 'auto'
        }
      });
    }

    if (!attributes.showAsTeaser && attributes.align === 'wide') {
      styleCard.display = 'flex';
      styleCardImage.minHeight = '100%';
      styleCardImage.flex = '0 0 100%';
      styleCardImage.width = '100%';
      styleCardImage.borderRadius = '.25rem 0 0 .25rem';
    }

    var blockProps = useBlockProps({
      ref: ref,
      className: 'test'
    });
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
    return /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement(InspectorControls, null, /*#__PURE__*/React.createElement(PanelBody, {
      title: "Content"
    }, /*#__PURE__*/React.createElement(TextControl, {
      label: __('Link', 'iis-blocks'),
      placeholder: __('/link/to/here', 'iis-blocks'),
      value: attributes.url,
      onChange: function onChange(url) {
        return setAttributes({
          url: url
        });
      }
    }), attributes.url && attributes.url.length > 0 && /*#__PURE__*/React.createElement(CheckboxControl, {
      label: "New window",
      checked: attributes.target === '_blank',
      onChange: function onChange(value) {
        return setAttributes({
          target: value ? '_blank' : '_self'
        });
      }
    })), /*#__PURE__*/React.createElement(PanelBody, {
      title: "Display"
    }, /*#__PURE__*/React.createElement(CheckboxControl, {
      label: "Background",
      checked: background,
      onChange: function onChange(value) {
        return setAttributes({
          background: value
        });
      }
    }), /*#__PURE__*/React.createElement(CheckboxControl, {
      label: "Show as teaser",
      checked: showAsTeaser,
      onChange: function onChange(value) {
        return setAttributes({
          showAsTeaser: value
        });
      }
    }), /*#__PURE__*/React.createElement(CheckboxControl, {
      label: "Shadow",
      checked: attributes.shadow,
      onChange: function onChange(shadow) {
        return setAttributes({
          shadow: shadow
        });
      }
    }), attributes.align === 'right' && /*#__PURE__*/React.createElement(CheckboxControl, {
      label: "Show on mobile",
      checked: attributes.showOnMobile,
      onChange: function onChange(showOnMobile) {
        return setAttributes({
          showOnMobile: showOnMobile
        });
      }
    }), /*#__PURE__*/React.createElement(_components_DataSelect__WEBPACK_IMPORTED_MODULE_0__["default"], {
      label: __('Image size', 'iis-blocks'),
      placeholder: {
        value: '',
        label: __('Auto', 'iis-blocks')
      },
      api: "/iis-blocks/v1/image-sizes",
      value_key: function value_key(obj) {
        return obj.size;
      },
      label_key: function label_key(obj) {
        return "".concat(obj.name, " (").concat(obj.width, "x").concat(obj.height);
      },
      value: attributes.imageSize,
      set: function set(imageSize) {
        return setAttributes({
          imageSize: imageSize
        });
      }
    })), /*#__PURE__*/React.createElement(PanelBody, {
      title: "Youtube"
    }, /*#__PURE__*/React.createElement(TextControl, {
      label: __('Youtube-URL', 'iis-blocks'),
      placeholder: __('Full youtube URL', 'iis-blocks'),
      value: attributes.youtube,
      onChange: function onChange(youtube) {
        return setAttributes({
          youtube: youtube
        });
      }
    })), /*#__PURE__*/React.createElement(PanelBody, {
      title: "Image"
    }, /*#__PURE__*/React.createElement("div", null, image), imagePreview === null && /*#__PURE__*/React.createElement(MediaUploadCheck, null, /*#__PURE__*/React.createElement(MediaUpload, {
      onSelect: function onSelect(imageObject) {
        return setAttributes({
          imageId: imageObject.id
        });
      },
      type: "image",
      value: imagePreview,
      render: function render(_ref2) {
        var open = _ref2.open;
        return /*#__PURE__*/React.createElement(Button, {
          className: "components-button editor-post-featured-image__toggle",
          onClick: open
        }, "Upload Image!");
      }
    })), imagePreview !== null && /*#__PURE__*/React.createElement(Button, {
      className: "components-button is-button is-default",
      onClick: function onClick() {
        return setAttributes({
          imageId: null
        });
      }
    }, "Remove image"))), /*#__PURE__*/React.createElement("div", {
      style: styleCard
    }, mediaPreview && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, youtubeUrl && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }
    }, /*#__PURE__*/React.createElement(PlayIcon, null)), /*#__PURE__*/React.createElement("img", {
      src: mediaPreview,
      alt: "",
      style: showAsTeaser ? styleTeaserImage : styleCardImage
    })), /*#__PURE__*/React.createElement("div", {
      style: showAsTeaser && imagePreview ? styleTeaserContent : styleCardContent
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(RichText, {
      tagName: "small",
      value: attributes.pretitle,
      placeholder: __('Title'),
      style: {
        margin: 0,
        fontFamily: 'monospace'
      },
      onChange: function onChange(pretitle) {
        return setAttributes({
          pretitle: pretitle
        });
      }
    }), /*#__PURE__*/React.createElement(RichText, {
      tagName: "h1",
      value: attributes.title,
      placeholder: __('Title'),
      style: {
        margin: 0
      },
      onChange: function onChange(title) {
        return setAttributes({
          title: title
        });
      }
    }), /*#__PURE__*/React.createElement(InnerBlocks, {
      allowedBlocks: ['core/paragraph', 'core/html', 'core/columns', 'core/list', 'iis/button', 'iis/buttons', 'iis/icon'],
      template: [['core/paragraph']]
    })))));
  },
  save: function save() {
    return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
  }
});

/***/ }),

/***/ "./src/js/blocks/Column.jsx":
/*!**********************************!*\
  !*** ./src/js/blocks/Column.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _column_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./column.css */ "./src/js/blocks/column.css");

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
      "default": '1/2'
    }
  },
  getEditWrapperProps: function getEditWrapperProps(attributes) {
    var columnWidth = attributes.columnWidth;

    if (columnWidth) {
      return {
        'data-width': columnWidth
      };
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

    return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(InspectorControls, null, /*#__PURE__*/React.createElement(PanelBody, {
      title: "Column width"
    }, /*#__PURE__*/React.createElement(SelectControl, {
      label: "Width",
      onChange: function onChange(width) {
        return setAttributes({
          columnWidth: width
        });
      },
      options: columnWidthOptions,
      value: columnWidth
    }))), /*#__PURE__*/React.createElement("div", {
      className: "iis-block-column"
    }, /*#__PURE__*/React.createElement("div", {
      className: "iis-block-column__content"
    }, /*#__PURE__*/React.createElement(InnerBlocks, {
      renderAppender: hasChildBlocks ? undefined : function () {
        return /*#__PURE__*/React.createElement(InnerBlocks.ButtonBlockAppender, null);
      }
    }))));
  },
  save: function save() {
    return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
  }
});

/***/ }),

/***/ "./src/js/blocks/Download.jsx":
/*!************************************!*\
  !*** ./src/js/blocks/Download.jsx ***!
  \************************************/
/***/ (() => {

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
      "default": null
    },
    content: {
      type: 'string',
      "default": null
    },
    file: {
      type: 'string',
      "default": ''
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(RichText, {
      identifier: "title",
      wrapperClassName: "wp-block-heading",
      tagName: "h3",
      value: attributes.title,
      onChange: function onChange(value) {
        return setAttributes({
          title: value
        });
      },
      placeholder: __('File title')
    }), /*#__PURE__*/React.createElement(RichText, {
      identifier: "description",
      wrapperClassName: "wp-block-paragraph",
      tagName: "p",
      value: attributes.content,
      onChange: function onChange(value) {
        return setAttributes({
          content: value
        });
      },
      placeholder: __('File description')
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: '16px'
      }
    }, !attributes.file && /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(MediaUploadCheck, null, /*#__PURE__*/React.createElement(MediaUpload, {
      onSelect: function onSelect(_ref2) {
        var file = _ref2.url;
        return setAttributes({
          file: file
        });
      },
      value: attributes.file,
      render: function render(_ref3) {
        var open = _ref3.open;
        return /*#__PURE__*/React.createElement(Button, {
          className: "components-button editor-post-featured-image__toggle",
          onClick: open
        }, "Upload File");
      }
    })), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("em", null, "or"))), /*#__PURE__*/React.createElement(TextControl, {
      label: __('File URL'),
      value: attributes.file,
      onChange: function onChange(url) {
        return setAttributes({
          file: url
        });
      }
    }), attributes.file && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
      className: "components-button is-button is-default",
      onClick: function onClick() {
        return setAttributes({
          file: ''
        });
      }
    }, "Remove"))));
  },
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./src/js/blocks/Glider.jsx":
/*!**********************************!*\
  !*** ./src/js/blocks/Glider.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _grid_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid.css */ "./src/js/blocks/grid.css");

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    InnerBlocks = _wp$editor.InnerBlocks,
    RichText = _wp$editor.RichText;
var useSelect = wp.data.useSelect;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    ToggleControl = _wp$components.ToggleControl;
registerBlockType('iis/glider', {
  title: __('Glider'),
  category: 'iis',
  icon: 'megaphone',
  keywords: [__('glider', 'iis-blocks'), __('slider', 'iis-blocks'), __('slide', 'iis-blocks')],
  attributes: {
    title: {
      type: 'string',
      "default": null
    },
    pagination: {
      type: 'boolean',
      "default": false
    }
  },
  getEditWrapperProps: function getEditWrapperProps() {
    return {
      'data-align': 'wide'
    };
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

    return /*#__PURE__*/React.createElement("div", {
      className: "iis-block-grid"
    }, /*#__PURE__*/React.createElement(InspectorControls, null, /*#__PURE__*/React.createElement(PanelBody, null, /*#__PURE__*/React.createElement(ToggleControl, {
      label: "Display dots",
      checked: attributes.pagination,
      onChange: function onChange(pagination) {
        return setAttributes({
          pagination: pagination
        });
      }
    }))), /*#__PURE__*/React.createElement(RichText, {
      tagName: "h1",
      value: attributes.title,
      placeholder: __('Title'),
      onChange: function onChange(title) {
        return setAttributes({
          title: title
        });
      }
    }), /*#__PURE__*/React.createElement(InnerBlocks, {
      allowedBlocks: ['iis/slide'],
      template: [['iis/slide'], ['iis/slide']],
      orientation: "horizontal",
      renderAppender: hasChildBlocks ? undefined : function () {
        return /*#__PURE__*/React.createElement(InnerBlocks.ButtonBlockAppender, null);
      }
    }));
  },
  save: function save() {
    return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
  }
});

/***/ }),

/***/ "./src/js/blocks/GliderHero.jsx":
/*!**************************************!*\
  !*** ./src/js/blocks/GliderHero.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _grid_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid.css */ "./src/js/blocks/grid.css");

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var Fragment = wp.element.Fragment;
var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    PanelBody = _wp$components.PanelBody;
var _wp$editor = wp.editor,
    InnerBlocks = _wp$editor.InnerBlocks,
    InspectorControls = _wp$editor.InspectorControls;
registerBlockType('iis/glider-hero', {
  title: __('Glider Hero'),
  category: 'iis',
  icon: 'leftright',
  keywords: [__('glider', 'iis-blocks'), __('slider', 'iis-blocks'), __('slide', 'iis-blocks'), __('hero', 'iis-blocks')],
  getEditWrapperProps: function getEditWrapperProps() {
    return {
      'data-align': 'full'
    };
  },
  attributes: {
    autoScrollTime: {
      type: 'number',
      "default": null
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
    return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(InspectorControls, null, /*#__PURE__*/React.createElement(PanelBody, null, /*#__PURE__*/React.createElement(TextControl, {
      label: __('Auto scroll', 'iis-blocks'),
      placeholder: __('Time until next slide in milliseconds', 'iis-blocks'),
      value: attributes.autoScrollTime,
      type: "number",
      onChange: function onChange(v) {
        return setAttributes({
          autoScrollTime: parseInt(v, 10)
        });
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: '#eee',
        padding: '20px 0 0',
        borderBottom: '4px solid #757575'
      }
    }, /*#__PURE__*/React.createElement(InnerBlocks, {
      allowedBlocks: ['iis/hero-hero-slide'],
      template: [['iis/hero-slide'], ['iis/hero-slide']],
      orientation: "vertical"
    })));
  },
  save: function save() {
    return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
  }
});

/***/ }),

/***/ "./src/js/blocks/Grid.jsx":
/*!********************************!*\
  !*** ./src/js/blocks/Grid.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _grid_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid.css */ "./src/js/blocks/grid.css");

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
      "default": 'center'
    },
    asymmetric: {
      type: 'boolean',
      "default": false
    }
  },
  getEditWrapperProps: function getEditWrapperProps(attributes) {
    var align = attributes.align;

    if (align === 'center') {
      return {
        'data-align': 'wide'
      };
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

    return /*#__PURE__*/React.createElement("div", {
      className: "iis-block-grid"
    }, /*#__PURE__*/React.createElement(InspectorControls, null, /*#__PURE__*/React.createElement(PanelBody, null, /*#__PURE__*/React.createElement(ToggleControl, {
      label: "Asymmetric",
      checked: attributes.asymmetric,
      onChange: function onChange(asymmetric) {
        return setAttributes({
          asymmetric: asymmetric
        });
      }
    }))), /*#__PURE__*/React.createElement(InnerBlocks, {
      allowedBlocks: ['iis/column'],
      template: [['iis/column'], ['iis/column']],
      orientation: "horizontal",
      renderAppender: hasChildBlocks ? undefined : function () {
        return /*#__PURE__*/React.createElement(InnerBlocks.ButtonBlockAppender, null);
      }
    }));
  },
  save: function save() {
    return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
  }
});

/***/ }),

/***/ "./src/js/blocks/Hero.jsx":
/*!********************************!*\
  !*** ./src/js/blocks/Hero.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hero_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hero.css */ "./src/js/blocks/hero.css");

var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    Button = _wp$components.Button,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    MediaUpload = _wp$blockEditor.MediaUpload,
    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck,
    RichText = _wp$blockEditor.RichText,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    withColors = _wp$blockEditor.withColors,
    PanelColorSettings = _wp$blockEditor.PanelColorSettings;

function parseYoutube(url) {
  if (!url) {
    return null;
  }

  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return match && match[7].length === 11 ? match[7] : false;
}

var layouts = [{
  label: 'Standard',
  value: 'standard'
}, {
  label: 'Dynamic',
  value: 'dynamic'
}];
registerBlockType('iis/hero', {
  title: __('Hero'),
  category: 'iis',
  icon: 'cover-image',
  keywords: [__('hero'), __('title')],
  supports: {
    align: ['full', 'wide']
  },
  attributes: {
    mediaUrl: {
      type: 'string',
      "default": null
    },
    mediaId: {
      type: 'number',
      "default": null
    },
    mediaType: {
      type: 'string',
      "default": null
    },
    youtube: {
      type: 'string',
      "default": null
    },
    anchor: {
      type: 'string',
      "default": ''
    },
    pretitle: {
      type: 'string',
      "default": ''
    },
    title: {
      type: 'string',
      "default": ''
    },
    introText: {
      type: 'string',
      "default": ''
    },
    align: {
      type: 'string',
      "default": 'wide'
    },
    layout: {
      type: 'string',
      "default": 'standard'
    },
    backgroundColor: {
      type: 'string',
      "default": ''
    }
  },
  edit: withColors({
    backgroundColor: 'background'
  })(function (_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes,
        backgroundColor = _ref.backgroundColor,
        setBackgroundColor = _ref.setBackgroundColor;
    var image = null;
    var noYoutube = attributes.youtube === null || attributes.youtube.length < 1 || attributes.align === 'full';
    var youtubeId = parseYoutube(attributes.youtube);
    var youtubeUrl = youtubeId ? "https://www.youtube-nocookie.com/embed/".concat(youtubeId, "?rel=0") : null;
    var displayImage = attributes.mediaUrl !== null && attributes.mediaType !== 'video';
    var displayVideo = attributes.mediaUrl && attributes.mediaType === 'video' && attributes.align !== 'full';
    var displayYoutube = !displayImage && !displayVideo && youtubeUrl && attributes.align !== 'full';
    var blockStyle = {
      backgroundColor: backgroundColor.color
    };

    if (displayVideo) {
      // eslint-disable-next-line jsx-a11y/media-has-caption
      image = /*#__PURE__*/React.createElement("video", {
        src: attributes.mediaUrl,
        style: {
          width: '100%',
          height: 'auto'
        }
      });
    } else if (displayImage) {
      image = /*#__PURE__*/React.createElement("img", {
        src: attributes.mediaUrl,
        alt: "",
        style: {
          width: '100%',
          height: 'auto'
        }
      });
    } else if (displayYoutube) {
      // eslint-disable-next-line jsx-a11y/iframe-has-title
      image = /*#__PURE__*/React.createElement("iframe", {
        width: "100%",
        height: "100%",
        src: youtubeUrl,
        frameBorder: "0",
        allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
        allowFullScreen: true
      });
    }

    return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(InspectorControls, null, /*#__PURE__*/React.createElement(PanelBody, {
      title: "Design"
    }, /*#__PURE__*/React.createElement(SelectControl, {
      label: "Layout",
      onChange: function onChange(layout) {
        if (layout === 'dynamic') {
          setAttributes({
            layout: layout,
            align: 'full'
          });
        } else {
          setAttributes({
            layout: layout
          });
        }
      },
      options: layouts,
      value: attributes.layout
    }), attributes.layout === 'dynamic' && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: '1rem'
      }
    }, /*#__PURE__*/React.createElement(TextControl, {
      label: __('Anchor link', 'iis-blocks'),
      placeholder: __('#section-id', 'iis-blocks'),
      help: __('Displays a clickable arrow that scrolls down to the provided anchor.', 'iis-blocks'),
      value: attributes.anchor,
      onChange: function onChange(anchor) {
        return setAttributes({
          anchor: anchor
        });
      }
    }))), /*#__PURE__*/React.createElement(PanelBody, {
      title: "Background image"
    }, /*#__PURE__*/React.createElement("p", null, image), attributes.mediaUrl === null && noYoutube && /*#__PURE__*/React.createElement(MediaUploadCheck, null, /*#__PURE__*/React.createElement(MediaUpload, {
      onSelect: function onSelect(imageObject) {
        console.log(imageObject);
        setAttributes({
          mediaUrl: 'sizes' in imageObject ? imageObject.sizes.full.url : imageObject.url,
          mediaId: imageObject.id,
          mediaType: imageObject.mime.split('/')[0]
        });
      },
      type: "image",
      value: attributes.mediaUrl,
      render: function render(_ref2) {
        var open = _ref2.open;
        return /*#__PURE__*/React.createElement(Button, {
          className: "components-button editor-post-featured-image__toggle",
          onClick: open
        }, "Upload Image!");
      }
    })), attributes.mediaUrl !== null && /*#__PURE__*/React.createElement(Button, {
      className: "components-button is-button is-default",
      onClick: function onClick() {
        return setAttributes({
          mediaUrl: null,
          mediaId: null
        });
      }
    }, "Remove background"), attributes.align !== 'full' && !attributes.mediaUrl && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: '1rem'
      }
    }, /*#__PURE__*/React.createElement(TextControl, {
      label: __('Youtube-URL', 'iis-blocks'),
      placeholder: __('Full youtube URL', 'iis-blocks'),
      value: attributes.youtube,
      onChange: function onChange(youtube) {
        return setAttributes({
          youtube: youtube
        });
      }
    }))), /*#__PURE__*/React.createElement(PanelColorSettings, {
      title: __('Color Settings'),
      colorSettings: [{
        value: backgroundColor.color,
        onChange: setBackgroundColor,
        label: __('Background Color')
      }]
    })), /*#__PURE__*/React.createElement("div", {
      style: blockStyle,
      className: "iis-block-hero ".concat(!displayImage && !displayYoutube && !displayVideo ? 'iis-block-hero--no-image' : '', " ").concat(displayVideo || displayYoutube ? 'iis-block-hero--video' : '', " ").concat(attributes.layout === 'dynamic' ? 'iis-block-hero--dynamic' : '')
    }, displayVideo &&
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/alt-text,jsx-a11y/media-has-caption
    React.createElement("video", {
      src: attributes.mediaUrl,
      autoPlay: true,
      loop: true,
      controls: true,
      muted: true,
      className: "iis-block-hero__image"
    }), displayImage &&
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/alt-text
    React.createElement("img", {
      src: attributes.mediaUrl,
      className: "iis-block-hero__image"
    }), displayYoutube &&
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/iframe-has-title
    React.createElement("iframe", {
      width: "100%",
      height: "100%",
      src: youtubeUrl,
      frameBorder: "0",
      allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
      allowFullScreen: true
    }), !displayVideo && !displayYoutube && /*#__PURE__*/React.createElement("div", {
      className: "iis-block-hero__content"
    }, /*#__PURE__*/React.createElement("div", {
      className: "iis-block-hero__inner-content"
    }, attributes.layout === 'dynamic' && /*#__PURE__*/React.createElement(RichText, {
      tagName: "div",
      value: attributes.pretitle,
      placeholder: __('Pre title'),
      onChange: function onChange(pretitle) {
        return setAttributes({
          pretitle: pretitle
        });
      },
      style: {
        textTransform: 'uppercase',
        fontSize: '1.2em',
        marginBottom: '-20px'
      }
    }), attributes.layout !== 'dynamic' && /*#__PURE__*/React.createElement(RichText, {
      tagName: "span",
      value: attributes.pretitle,
      placeholder: __('Pre title'),
      onChange: function onChange(pretitle) {
        return setAttributes({
          pretitle: pretitle
        });
      },
      style: {
        marginTop: 0
      }
    }), /*#__PURE__*/React.createElement(RichText, {
      tagName: "h1",
      value: attributes.title,
      placeholder: __('Title'),
      onChange: function onChange(title) {
        return setAttributes({
          title: title
        });
      },
      style: {
        marginTop: 0
      }
    }), attributes.layout === 'standard' && /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(RichText, {
      tagName: "p",
      value: attributes.introText,
      placeholder: __('Content'),
      onChange: function onChange(introText) {
        return setAttributes({
          introText: introText
        });
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "iis-block-hero__buttons"
    }, /*#__PURE__*/React.createElement(InnerBlocks, {
      allowedBlocks: ['iis/button']
    })))))));
  }),
  save: function save() {
    return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
  }
});

/***/ }),

/***/ "./src/js/blocks/HeroSlide.jsx":
/*!*************************************!*\
  !*** ./src/js/blocks/HeroSlide.jsx ***!
  \*************************************/
/***/ (() => {

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
    withColors = _wp$editor.withColors,
    PanelColorSettings = _wp$editor.PanelColorSettings;
registerBlockType('iis/hero-slide', {
  title: __('Slide'),
  category: 'iis',
  icon: 'cover-image',
  keywords: [__('slide', 'iis-blocks'), __('slider', 'iis-blocks'), __('glider', 'iis-blocks')],
  parent: ['iis/glider-hero'],
  getEditWrapperProps: function getEditWrapperProps() {
    return {
      'data-align': 'full'
    };
  },
  attributes: {
    mediaUrl: {
      type: 'string',
      "default": null
    },
    mediaId: {
      type: 'number',
      "default": null
    },
    title: {
      type: 'string',
      "default": ''
    },
    linkColor: {
      type: 'string',
      "default": null
    }
  },
  edit: withColors({
    linkColor: 'color'
  })(function (_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes,
        linkColor = _ref.linkColor,
        setLinkColor = _ref.setLinkColor;
    var image = /*#__PURE__*/React.createElement("img", {
      src: attributes.mediaUrl,
      alt: "",
      style: {
        width: '100%',
        height: 'auto'
      }
    });
    return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(InspectorControls, null, /*#__PURE__*/React.createElement(PanelColorSettings, {
      title: __('Color Settings'),
      colorSettings: [{
        value: linkColor.color,
        onChange: setLinkColor,
        label: __('Link Color')
      }]
    }), /*#__PURE__*/React.createElement(PanelBody, {
      title: "Background image"
    }, /*#__PURE__*/React.createElement("p", null, image), attributes.mediaUrl === null && /*#__PURE__*/React.createElement(MediaUploadCheck, null, /*#__PURE__*/React.createElement(MediaUpload, {
      onSelect: function onSelect(imageObject) {
        console.log(imageObject);
        setAttributes({
          mediaUrl: 'sizes' in imageObject ? imageObject.sizes.full.url : imageObject.url,
          mediaId: imageObject.id,
          mediaType: imageObject.mime.split('/')[0]
        });
      },
      type: "image",
      value: attributes.mediaUrl,
      render: function render(_ref2) {
        var open = _ref2.open;
        return /*#__PURE__*/React.createElement(Button, {
          className: "components-button editor-post-featured-image__toggle",
          onClick: open
        }, "Upload Image!");
      }
    })), attributes.mediaUrl !== null && /*#__PURE__*/React.createElement(Button, {
      className: "components-button is-button is-default",
      onClick: function onClick() {
        return setAttributes({
          mediaUrl: null,
          mediaId: null
        });
      }
    }, "Remove background"))), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        textAlign: 'center',
        color: '#757575',
        textTransform: 'uppercase',
        fontSize: '13px'
      }
    }, "Glider hero slide"), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '4px solid #757575',
        paddingTop: '10px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "iis-block-hero ".concat(attributes.mediaUrl === null ? 'iis-block-hero--no-image' : '')
    }, attributes.mediaUrl !== null &&
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/alt-text
    React.createElement("img", {
      src: attributes.mediaUrl,
      className: "iis-block-hero__image"
    }), /*#__PURE__*/React.createElement("div", {
      className: "iis-block-hero__content"
    }, /*#__PURE__*/React.createElement("div", {
      className: "iis-block-hero__inner-content"
    }, /*#__PURE__*/React.createElement(RichText, {
      tagName: "h1",
      wrapperClassName: linkColor.slug,
      value: attributes.title,
      placeholder: __('Title'),
      onChange: function onChange(title) {
        return setAttributes({
          title: title
        });
      },
      style: {
        marginTop: 0
      }
    }))))));
  }),
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./src/js/blocks/Icon.jsx":
/*!********************************!*\
  !*** ./src/js/blocks/Icon.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_IconSelect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/IconSelect */ "./src/js/components/IconSelect.jsx");

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
    TextControl = _wp$components.TextControl,
    ToggleControl = _wp$components.ToggleControl;
registerBlockType('iis/icon', {
  title: __('Icon'),
  category: 'iis',
  icon: 'megaphone',
  keywords: [__('icon')],
  attributes: {
    size: {
      type: 'string',
      "default": 'large'
    },
    icon: {
      type: 'string',
      "default": null
    },
    title: {
      type: 'string',
      "default": null
    },
    text: {
      type: 'string',
      "default": null
    },
    iconColor: {
      type: 'string',
      "default": 'cyberspace'
    },
    url: {
      type: 'string',
      "default": null
    },
    newWindow: {
      type: 'boolean',
      "default": true
    }
  },
  edit: withColors({
    iconColor: 'color'
  })(function (_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes,
        iconColor = _ref.iconColor,
        setIconColor = _ref.setIconColor;
    var sizes = {
      small: '16px',
      medium: '20px',
      large: '28px',
      supersize: '42px'
    };
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(InspectorControls, null, /*#__PURE__*/React.createElement(PanelBody, {
      title: "Link"
    }, /*#__PURE__*/React.createElement(TextControl, {
      label: "Url",
      value: attributes.url,
      onChange: function onChange(url) {
        return setAttributes({
          url: url
        });
      }
    }), /*#__PURE__*/React.createElement(ToggleControl, {
      label: "Open in new window",
      checked: attributes.newWindow,
      onChange: function onChange(newWindow) {
        return setAttributes({
          newWindow: newWindow
        });
      }
    })), /*#__PURE__*/React.createElement(PanelBody, null, /*#__PURE__*/React.createElement(SelectControl, {
      label: "Size",
      onChange: function onChange(size) {
        return setAttributes({
          size: size
        });
      },
      options: [{
        label: 'Small',
        value: 'small'
      }, {
        label: 'Medium',
        value: 'medium'
      }, {
        label: 'Large',
        value: 'large'
      }, {
        label: 'Supersize',
        value: 'supersize'
      }],
      value: attributes.size
    })), /*#__PURE__*/React.createElement(PanelColorSettings, {
      title: __('Color settings'),
      colorSettings: [{
        value: iconColor.color,
        onChange: setIconColor,
        label: __('Icon Color')
      }]
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        position: 'relative',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-block',
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement(_components_IconSelect__WEBPACK_IMPORTED_MODULE_0__["default"], {
      size: attributes.size in sizes ? sizes[attributes.size] : '24px',
      value: attributes.icon,
      onChange: function onChange(icon) {
        return setAttributes({
          icon: icon
        });
      },
      color: iconColor.color || '#1f2a36'
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginLeft: '24px'
      }
    }, /*#__PURE__*/React.createElement(RichText, {
      tagName: "h2",
      value: attributes.title,
      placeholder: __('Title'),
      style: {
        marginTop: 0,
        marginBottom: 0
      },
      onChange: function onChange(title) {
        return setAttributes({
          title: title
        });
      },
      allowedFormats: []
    }), /*#__PURE__*/React.createElement(RichText, {
      tagName: "div",
      value: attributes.text,
      placeholder: __('Content'),
      onChange: function onChange(text) {
        return setAttributes({
          text: text
        });
      },
      allowedFormats: []
    }))));
  }),
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./src/js/blocks/Info.jsx":
/*!********************************!*\
  !*** ./src/js/blocks/Info.jsx ***!
  \********************************/
/***/ (() => {

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
      "default": false
    },
    customBorder: {
      type: 'boolean',
      "default": false
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
    var allowed = ['core/paragraph'];
    var template = [];
    var templateLock = null;
    var className = 'iis-info-block';

    if (attributes.big) {
      template = [['core/paragraph']];
      templateLock = 'all';
      className += " ".concat(className, "--big");
    } else if (attributes.customBorder) {
      template = [['core/paragraph']];
      templateLock = 'all';
      className += " ".concat(className, "--custom-border");
    } else {
      allowed.push('core/heading');
      allowed.push('core/list');
    }

    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(InspectorControls, null, /*#__PURE__*/React.createElement(PanelBody, null, /*#__PURE__*/React.createElement(ToggleControl, {
      label: "Big",
      checked: attributes.big,
      onChange: function onChange(big) {
        return setAttributes({
          big: big
        });
      }
    })), /*#__PURE__*/React.createElement(PanelBody, null, /*#__PURE__*/React.createElement(ToggleControl, {
      label: "Custom border",
      checked: attributes.customBorder,
      onChange: function onChange(customBorder) {
        return setAttributes({
          customBorder: customBorder
        });
      }
    }))), /*#__PURE__*/React.createElement("div", {
      className: className
    }, /*#__PURE__*/React.createElement(InnerBlocks, {
      allowedBlocks: allowed,
      template: template,
      templateLock: templateLock
    })));
  },
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    return /*#__PURE__*/React.createElement("div", {
      className: "iis-m-info-box ".concat(attributes.big ? 'iis-m-info-box--big' : '', " ").concat(attributes.customBorder ? 'iis-m-info-box--custom-border' : '')
    }, /*#__PURE__*/React.createElement(InnerBlocks.Content, null));
  }
});

/***/ }),

/***/ "./src/js/blocks/News.jsx":
/*!********************************!*\
  !*** ./src/js/blocks/News.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_DataSelect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/DataSelect */ "./src/js/components/DataSelect.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    useState = _wp$element.useState;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    RichText = _wp$editor.RichText;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    ToggleControl = _wp$components.ToggleControl,
    TextControl = _wp$components.TextControl;
registerBlockType('iis/news', {
  title: __('News', 'iis-blocks'),
  category: 'iis',
  icon: 'edit-large',
  keywords: [__('news', 'iis-blocks')],
  attributes: {
    postType: {
      type: 'string',
      "default": 'post'
    },
    category: {
      type: 'string',
      "default": null
    },
    pinned: {
      type: 'number',
      "default": null
    },
    limit: {
      type: 'number',
      "default": 4
    },
    firstWide: {
      type: 'boolean',
      "default": true
    },
    displayDates: {
      type: 'boolean',
      "default": false
    },
    displayTags: {
      type: 'boolean',
      "default": false
    },
    buttonText: {
      type: 'string',
      "default": 'Show more'
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;

    var _useState = useState(null),
        _useState2 = _slicedToArray(_useState, 2),
        items = _useState2[0],
        setItems = _useState2[1];

    var buttonStyle = {
      display: 'inline-block',
      position: 'relative',
      margin: '1em 0 0',
      padding: '.556rem 1rem',
      overflow: 'hidden',
      border: '0',
      borderRadius: '.25rem',
      backgroundColor: '#ffce2e',
      color: '#1f2a36',
      fontFamily: 'sans-serif',
      textDecoration: 'none',
      textShadow: 'none',
      hyphens: 'auto',
      cursor: 'pointer'
    };
    return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
      alt: "",
      src: "data:image/png;base64,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"
    }), /*#__PURE__*/React.createElement("div", {
      style: buttonStyle
    }, /*#__PURE__*/React.createElement(RichText, {
      tagName: "span",
      value: attributes.buttonText,
      placeholder: __('Button text'),
      onChange: function onChange(buttonText) {
        return setAttributes({
          buttonText: buttonText
        });
      }
    }))), /*#__PURE__*/React.createElement(InspectorControls, null, /*#__PURE__*/React.createElement(PanelBody, null, /*#__PURE__*/React.createElement(_components_DataSelect__WEBPACK_IMPORTED_MODULE_0__["default"], {
      label: __('Select post type', 'iis-blocks'),
      placeholder: {
        value: '',
        label: __('Post type', 'iis-blocks')
      },
      api: "/wp/v2/types",
      value_key: function value_key(obj) {
        return obj.slug;
      },
      label_key: function label_key(obj) {
        return obj.name;
      },
      value: attributes.postType,
      set: function set(postType) {
        return setAttributes({
          postType: postType,
          pinned: null
        });
      },
      onItems: setItems
    }), attributes.postType === 'post' && /*#__PURE__*/React.createElement(_components_DataSelect__WEBPACK_IMPORTED_MODULE_0__["default"], {
      label: __('Select category', 'iis-blocks'),
      placeholder: {
        value: '',
        label: __('All categories', 'iis-blocks')
      },
      api: "/wp/v2/categories",
      value_key: function value_key(obj) {
        return obj.slug;
      },
      label_key: function label_key(obj) {
        return obj.name;
      },
      value: attributes.category,
      set: function set(category) {
        return setAttributes({
          category: category
        });
      }
    }), items && items.length > 0 && /*#__PURE__*/React.createElement(_components_DataSelect__WEBPACK_IMPORTED_MODULE_0__["default"], {
      label: __('Pinned post', 'iis-blocks'),
      placeholder: {
        value: '',
        label: __('No pinned post', 'iis-blocks')
      },
      api: items.find(function (i) {
        return i.value === attributes.postType;
      }).link.split('/wp-json').pop(),
      value_key: function value_key(obj) {
        return obj.id;
      },
      label_key: function label_key(obj) {
        return obj.title.rendered;
      },
      value: attributes.pinned,
      set: function set(pinned) {
        return setAttributes({
          pinned: parseInt(pinned, 10)
        });
      },
      key: attributes.postType
    }), /*#__PURE__*/React.createElement(ToggleControl, {
      label: "First wide",
      checked: attributes.firstWide,
      onChange: function onChange(firstWide) {
        return setAttributes({
          firstWide: firstWide
        });
      }
    }), /*#__PURE__*/React.createElement(ToggleControl, {
      label: "Display dates",
      checked: attributes.displayDates,
      onChange: function onChange(displayDates) {
        return setAttributes({
          displayDates: displayDates
        });
      }
    }), /*#__PURE__*/React.createElement(ToggleControl, {
      label: "Display tags",
      checked: attributes.displayTags,
      onChange: function onChange(displayTags) {
        return setAttributes({
          displayTags: displayTags
        });
      }
    }), /*#__PURE__*/React.createElement(TextControl, {
      label: __('Limit'),
      value: attributes.limit,
      type: "number",
      onChange: function onChange(limit) {
        return setAttributes({
          limit: limit
        });
      }
    }))));
  },
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./src/js/blocks/PostArchive.jsx":
/*!***************************************!*\
  !*** ./src/js/blocks/PostArchive.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_DataSelect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/DataSelect */ "./src/js/components/DataSelect.jsx");

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
      "default": false
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "\xAB Post Archive \xBB")), /*#__PURE__*/React.createElement(InspectorControls, null, /*#__PURE__*/React.createElement(PanelBody, null, /*#__PURE__*/React.createElement(_components_DataSelect__WEBPACK_IMPORTED_MODULE_0__["default"], {
      label: __('Select post type', 'iis-blocks'),
      placeholder: {
        value: null,
        label: __('Post type', 'iis-blocks')
      },
      api: "/wp/v2/types",
      value_key: function value_key(obj) {
        return obj.slug;
      },
      label_key: function label_key(obj) {
        return obj.name;
      },
      value: attributes.postType,
      set: function set(postType) {
        return setAttributes({
          postType: postType
        });
      }
    }))));
  },
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./src/js/blocks/Preamble.jsx":
/*!************************************!*\
  !*** ./src/js/blocks/Preamble.jsx ***!
  \************************************/
/***/ (() => {

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
      "default": ''
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 'bold',
        fontSize: 'bigger'
      }
    }, /*#__PURE__*/React.createElement(RichText, {
      tagName: "p",
      value: attributes.content,
      placeholder: __('Preamble'),
      onChange: function onChange(content) {
        return setAttributes({
          content: content
        });
      }
    }));
  },
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    // eslint-disable-next-line react/no-danger
    return /*#__PURE__*/React.createElement("p", {
      className: "preamble",
      dangerouslySetInnerHTML: {
        __html: attributes.content
      }
    });
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

/***/ "./src/js/blocks/Puff.jsx":
/*!********************************!*\
  !*** ./src/js/blocks/Puff.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_DataSelect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/DataSelect */ "./src/js/components/DataSelect.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var __ = wp.i18n.__;
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect,
    useRef = _wp$element.useRef;
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
var useBlockProps = wp.blockEditor.useBlockProps;
registerBlockType('iis/puff', {
  title: __('Post puff', 'iis-blocks'),
  category: 'iis',
  icon: 'format-aside',
  keywords: [__('card', 'iis-blocks'), __('teaser', 'iis-blocks'), __('puff', 'iis-blocks')],
  supports: {
    align: ['right', 'wide'],
    lightBlockWrapper: true
  },
  attributes: {
    custom: {
      type: 'boolean',
      "default": false
    },
    postId: {
      type: 'string',
      "default": null
    },
    postPreview: {
      type: 'object',
      "default": {}
    },
    showAsTeaser: {
      type: 'boolean',
      "default": false
    },
    showOnMobile: {
      type: 'boolean',
      "default": false
    },
    displayTags: {
      type: 'boolean',
      "default": false
    },
    displayExcerpt: {
      type: 'boolean',
      "default": true
    },
    displayPostType: {
      type: 'boolean',
      "default": false
    },
    displayReadTime: {
      type: 'boolean',
      "default": false
    },
    imageSize: {
      type: 'string',
      "default": null
    },
    imageId: {
      type: 'number',
      "default": null
    },
    title: {
      type: 'string',
      "default": ''
    },
    text: {
      type: 'string',
      "default": ''
    },
    url: {
      type: 'string',
      "default": null
    },
    align: {
      type: 'string',
      "default": null
    },
    button: {
      type: 'boolean',
      "default": false
    },
    displayDates: {
      type: 'boolean',
      "default": false
    },
    shadow: {
      type: 'boolean',
      "default": false
    },
    target: {
      type: 'string',
      "default": '_self'
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
    var ref = useRef();

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
      image = /*#__PURE__*/React.createElement("img", {
        src: imagePreview,
        alt: "",
        style: {
          width: '100%',
          height: 'auto'
        }
      });
    }

    if (!attributes.showAsTeaser && attributes.align === 'wide') {
      styleCard.display = 'flex';
      styleCardImage.maxWidth = '50%';
      styleCardImage.height = '100%';
      styleCardImage.flex = '0 0 100%';
      styleCardImage.width = '100%';
      styleCardImage.borderRadius = '.25rem 0 0 .25rem';
    }

    var blockProps = useBlockProps({
      ref: ref,
      className: 'test'
    });
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
    return (
      /*#__PURE__*/
      // eslint-disable-next-line react/jsx-props-no-spreading
      React.createElement("div", blockProps, /*#__PURE__*/React.createElement(InspectorControls, null, /*#__PURE__*/React.createElement(PanelBody, {
        title: "Content"
      }, custom && /*#__PURE__*/React.createElement(TextControl, {
        label: __('Link', 'iis-blocks'),
        placeholder: __('/link/to/here', 'iis-blocks'),
        value: attributes.url,
        onChange: function onChange(url) {
          return setAttributes({
            url: url
          });
        }
      }), /*#__PURE__*/React.createElement(CheckboxControl, {
        label: "Button",
        checked: attributes.button,
        onChange: function onChange(value) {
          return setAttributes({
            button: value
          });
        }
      })), /*#__PURE__*/React.createElement(PanelBody, {
        title: "Display"
      }, /*#__PURE__*/React.createElement(CheckboxControl, {
        label: "Open link in new tab",
        checked: attributes.target === '_blank',
        onChange: function onChange(value) {
          return setAttributes({
            target: value ? '_blank' : '_self'
          });
        }
      }), /*#__PURE__*/React.createElement(CheckboxControl, {
        label: "Show as teaser",
        checked: showAsTeaser,
        onChange: function onChange(value) {
          return setAttributes({
            showAsTeaser: value
          });
        }
      }), /*#__PURE__*/React.createElement(CheckboxControl, {
        label: "Shadow",
        checked: attributes.shadow,
        onChange: function onChange(shadow) {
          return setAttributes({
            shadow: shadow
          });
        }
      }), attributes.align === 'right' && /*#__PURE__*/React.createElement(CheckboxControl, {
        label: "Show on mobile",
        checked: attributes.showOnMobile,
        onChange: function onChange(showOnMobile) {
          return setAttributes({
            showOnMobile: showOnMobile
          });
        }
      }), !custom && /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(CheckboxControl, {
        label: __('Display tags/categories', 'iis-blocks'),
        checked: attributes.displayTags,
        onChange: function onChange(displayTags) {
          return setAttributes({
            displayTags: displayTags
          });
        }
      }), /*#__PURE__*/React.createElement(CheckboxControl, {
        label: "Display excerpt",
        checked: attributes.displayExcerpt,
        onChange: function onChange(displayExcerpt) {
          return setAttributes({
            displayExcerpt: displayExcerpt
          });
        }
      }), /*#__PURE__*/React.createElement(CheckboxControl, {
        label: "Display dates",
        checked: attributes.displayDates,
        onChange: function onChange(displayDates) {
          return setAttributes({
            displayDates: displayDates
          });
        }
      }), /*#__PURE__*/React.createElement(CheckboxControl, {
        label: "Display post type name",
        checked: attributes.displayPostType,
        onChange: function onChange(displayPostType) {
          return setAttributes({
            displayPostType: displayPostType
          });
        }
      }), /*#__PURE__*/React.createElement(CheckboxControl, {
        label: "Display read time",
        checked: attributes.displayReadTime,
        onChange: function onChange(displayReadTime) {
          return setAttributes({
            displayReadTime: displayReadTime
          });
        }
      })), /*#__PURE__*/React.createElement(_components_DataSelect__WEBPACK_IMPORTED_MODULE_0__["default"], {
        label: __('Image size', 'iis-blocks'),
        placeholder: {
          value: '',
          label: __('Auto', 'iis-blocks')
        },
        api: "/iis-blocks/v1/image-sizes",
        value_key: function value_key(obj) {
          return obj.size;
        },
        label_key: function label_key(obj) {
          return "".concat(obj.name, " (").concat(obj.width, "x").concat(obj.height, ")");
        },
        value: attributes.imageSize,
        set: function set(imageSize) {
          return setAttributes({
            imageSize: imageSize
          });
        }
      })), attributes.custom && /*#__PURE__*/React.createElement(PanelBody, {
        title: "Image"
      }, /*#__PURE__*/React.createElement("div", null, image), imagePreview === null && /*#__PURE__*/React.createElement(MediaUploadCheck, null, /*#__PURE__*/React.createElement(MediaUpload, {
        onSelect: function onSelect(imageObject) {
          return setAttributes({
            imageId: imageObject.id
          });
        },
        type: "image",
        value: imagePreview,
        render: function render(_ref2) {
          var open = _ref2.open;
          return /*#__PURE__*/React.createElement(Button, {
            className: "components-button editor-post-featured-image__toggle",
            onClick: open
          }, "Upload Image!");
        }
      })), imagePreview !== null && /*#__PURE__*/React.createElement(Button, {
        className: "components-button is-button is-default",
        onClick: function onClick() {
          return setAttributes({
            imageId: null
          });
        }
      }, "Remove image"))), /*#__PURE__*/React.createElement("div", {
        style: styleCard
      }, custom && imagePreview && /*#__PURE__*/React.createElement("img", {
        src: imagePreview,
        alt: "",
        style: showAsTeaser ? styleTeaserImage : styleCardImage
      }), /*#__PURE__*/React.createElement("div", {
        style: showAsTeaser && custom && imagePreview ? styleTeaserContent : styleCardContent
      }, !custom && /*#__PURE__*/React.createElement(_components_DataSelect__WEBPACK_IMPORTED_MODULE_0__["default"], {
        label: __('Select post', 'iis-blocks'),
        placeholder: {
          value: null,
          label: __('Choose a post', 'iis-blocks')
        },
        api: "/iis-blocks/v1/puff-posts?include=".concat(attributes.postId),
        value_key: function value_key(obj) {
          return obj.ID;
        },
        label_key: function label_key(obj) {
          return obj.post_title;
        },
        value: attributes.postId,
        set: function set(postId) {
          return setAttributes({
            postId: postId
          });
        },
        search: true
      }), custom && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(RichText, {
        tagName: "h1",
        value: attributes.title,
        placeholder: __('Title'),
        style: {
          margin: 0
        },
        onChange: function onChange(title) {
          return setAttributes({
            title: title
          });
        }
      }), /*#__PURE__*/React.createElement(RichText, {
        tagName: "div",
        value: attributes.text,
        placeholder: __('Content'),
        onChange: function onChange(text) {
          return setAttributes({
            text: text
          });
        }
      })), attributes.button && /*#__PURE__*/React.createElement(InnerBlocks, {
        allowedBlocks: ['iis/button'],
        template: [['iis/button']],
        templateLock: "all"
      }))))
    );
  },
  save: function save(_ref3) {
    var attributes = _ref3.attributes;

    if (attributes.button) {
      return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
    }

    return null;
  }
});

/***/ }),

/***/ "./src/js/blocks/Section.jsx":
/*!***********************************!*\
  !*** ./src/js/blocks/Section.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _section_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./section.css */ "./src/js/blocks/section.css");

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
      "default": false
    },
    align: {
      type: 'string',
      "default": 'full'
    },
    highlightColor: {
      type: 'string',
      "default": 'ruby-light'
    },
    decoration: {
      type: 'string',
      "default": null
    },
    style: {
      type: 'string',
      "default": 'landing-page'
    },
    backgroundColor: {
      type: 'string',
      "default": null
    }
  },
  supports: {
    align: ['full']
  },
  edit: withColors({
    highlightColor: 'color',
    backgroundColor: 'background'
  })(function (_ref) {
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

    var className = "iis-block-section iis-block-section--".concat(highlightColor.slug);
    return /*#__PURE__*/React.createElement("div", {
      className: className
    }, /*#__PURE__*/React.createElement(InspectorControls, null, /*#__PURE__*/React.createElement(PanelBody, {
      title: __('Design', 'iis-blocks')
    }, /*#__PURE__*/React.createElement(SelectControl, {
      label: __('Style', 'iis-blocks'),
      onChange: function onChange(val) {
        return setAttributes({
          style: val
        });
      },
      options: [{
        label: __('Landing page', 'iis-blocks'),
        value: 'landing-page'
      }, {
        label: __('Colored background', 'iis-blocks'),
        value: 'colored-background'
      }],
      value: attributes.style
    }), attributes.style === 'landing-page' && /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(ToggleControl, {
      label: __('White background', 'iis-blocks'),
      checked: attributes.white,
      onChange: function onChange(white) {
        return setAttributes({
          white: white
        });
      }
    }), /*#__PURE__*/React.createElement(SelectControl, {
      label: __('Decoration', 'iis-blocks'),
      onChange: function onChange(decoration) {
        return setAttributes({
          decoration: decoration
        });
      },
      options: [{
        label: __('None', 'iis-blocks'),
        value: null
      }, {
        label: __('Rectangle left', 'iis-blocks'),
        value: 'rectangle-left'
      }, {
        label: __('Rectangle right', 'iis-blocks'),
        value: 'rectangle-right'
      }],
      value: attributes.decoration
    }))), attributes.style === 'landing-page' && /*#__PURE__*/React.createElement(PanelColorSettings, {
      title: __('Color settings', 'iis-blocks'),
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
        label: __('Color of rectangle', 'iis-blocks')
      }]
    }), attributes.style === 'colored-background' && /*#__PURE__*/React.createElement(PanelColorSettings, {
      title: __('Color settings', 'iis-blocks'),
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
        label: __('Background Color', 'iis-blocks')
      }]
    })), /*#__PURE__*/React.createElement("div", {
      style: style
    }, /*#__PURE__*/React.createElement(InnerBlocks, null)));
  }),
  save: function save() {
    return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
  }
});

/***/ }),

/***/ "./src/js/blocks/SectionHeader.jsx":
/*!*****************************************!*\
  !*** ./src/js/blocks/SectionHeader.jsx ***!
  \*****************************************/
/***/ (() => {

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var RichText = wp.editor.RichText;
registerBlockType('iis/section-header', {
  title: __('Section Header'),
  category: 'iis',
  icon: 'align-center',
  keywords: [__('section'), __('title')],
  attributes: {
    title: {
      type: 'string',
      "default": ''
    },
    text: {
      type: 'string',
      "default": ''
    },
    preTitle: {
      type: 'string',
      "default": ''
    }
  },
  parent: 'iis/section',
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: '0.5rem',
        borderBottom: '1px solid #ccc'
      }
    }, /*#__PURE__*/React.createElement(RichText, {
      tagName: "span",
      value: attributes.preTitle,
      placeholder: __('Content'),
      style: {
        fontSize: 'small',
        textTransform: 'uppercase'
      },
      onChange: function onChange(preTitle) {
        return setAttributes({
          preTitle: preTitle
        });
      }
    }), /*#__PURE__*/React.createElement(RichText, {
      tagName: "h1",
      value: attributes.title,
      placeholder: __('Title'),
      style: {
        marginTop: 0
      },
      onChange: function onChange(title) {
        return setAttributes({
          title: title
        });
      }
    }), /*#__PURE__*/React.createElement(RichText, {
      tagName: "p",
      value: attributes.text,
      placeholder: __('Content'),
      onChange: function onChange(text) {
        return setAttributes({
          text: text
        });
      }
    }));
  },
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./src/js/blocks/Slide.jsx":
/*!*********************************!*\
  !*** ./src/js/blocks/Slide.jsx ***!
  \*********************************/
/***/ (() => {

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var useSelect = wp.data.useSelect;
var InnerBlocks = wp.editor.InnerBlocks;
registerBlockType('iis/slide', {
  title: __('Slide'),
  category: 'iis',
  icon: 'megaphone',
  keywords: [__('slide', 'iis-blocks'), __('slider', 'iis-blocks'), __('glider', 'iis-blocks')],
  parent: ['iis/glider'],
  getEditWrapperProps: function getEditWrapperProps() {
    return {
      'data-width': '1/2'
    };
  },
  edit: function edit(_ref) {
    var clientId = _ref.clientId;

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

    return /*#__PURE__*/React.createElement("div", {
      className: "iis-block-column"
    }, /*#__PURE__*/React.createElement("div", {
      className: "iis-block-column__content"
    }, /*#__PURE__*/React.createElement(InnerBlocks, {
      allowedBlocks: ['iis/testimonial'],
      template: [['iis/testimonial']],
      templateLock: "all",
      orientation: "horizontal",
      renderAppender: hasChildBlocks ? undefined : function () {
        return /*#__PURE__*/React.createElement(InnerBlocks.ButtonBlockAppender, null);
      }
    })));
  },
  save: function save() {
    return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
  }
});

/***/ }),

/***/ "./src/js/blocks/Testimonial.jsx":
/*!***************************************!*\
  !*** ./src/js/blocks/Testimonial.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hero_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hero.css */ "./src/js/blocks/hero.css");

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
registerBlockType('iis/testimonial', {
  title: __('Testimonial'),
  category: 'iis',
  icon: 'format-quote',
  keywords: [__('testimonial'), __('quote')],
  attributes: {
    photoUrl: {
      type: 'string',
      "default": null
    },
    photoId: {
      type: 'number',
      "default": null
    },
    quote: {
      type: 'string',
      "default": ''
    },
    name: {
      type: 'string',
      "default": ''
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
    var image = null;
    var displayImage = attributes.photoUrl !== null;

    if (displayImage) {
      image = /*#__PURE__*/React.createElement("img", {
        src: attributes.photoUrl,
        alt: "",
        style: {
          width: '100%',
          height: 'auto'
        }
      });
    }

    return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(InspectorControls, null, /*#__PURE__*/React.createElement(PanelBody, {
      title: "Photo"
    }, /*#__PURE__*/React.createElement("p", null, image), attributes.photoUrl === null && /*#__PURE__*/React.createElement(MediaUploadCheck, null, /*#__PURE__*/React.createElement(MediaUpload, {
      onSelect: function onSelect(imageObject) {
        setAttributes({
          photoUrl: 'sizes' in imageObject && imageObject.sizes.thumbnail ? imageObject.sizes.thumbnail.url : imageObject.url,
          photoId: imageObject.id
        });
      },
      type: "image",
      value: attributes.photoUrl,
      render: function render(_ref2) {
        var open = _ref2.open;
        return /*#__PURE__*/React.createElement(Button, {
          className: "components-button editor-post-featured-image__toggle",
          onClick: open
        }, "Upload Image!");
      }
    })), attributes.photoUrl !== null && /*#__PURE__*/React.createElement(Button, {
      className: "components-button is-button is-default",
      onClick: function onClick() {
        return setAttributes({
          photoUrl: null,
          photoId: null
        });
      }
    }, "Remove background"))), /*#__PURE__*/React.createElement("div", {
      className: "iis-block-testimonial"
    }, /*#__PURE__*/React.createElement("blockquote", {
      className: "wp-block-quote"
    }, /*#__PURE__*/React.createElement(RichText, {
      tagName: "div",
      value: attributes.quote,
      placeholder: __('Quote'),
      onChange: function onChange(quote) {
        return setAttributes({
          quote: quote
        });
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '1em'
      }
    }, displayImage && /*#__PURE__*/React.createElement("img", {
      src: attributes.photoUrl,
      width: 25,
      height: 25,
      style: {
        borderRadius: '50%',
        height: '25px',
        marginRight: '10px'
      },
      alt: ""
    }), /*#__PURE__*/React.createElement(RichText, {
      tagName: "cite",
      value: attributes.name,
      placeholder: __('Name'),
      onChange: function onChange(name) {
        return setAttributes({
          name: name
        });
      },
      style: {
        marginTop: 0
      }
    })))));
  },
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./src/js/blocks/Visualization.jsx":
/*!*****************************************!*\
  !*** ./src/js/blocks/Visualization.jsx ***!
  \*****************************************/
/***/ (() => {

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var useSelect = wp.data.useSelect;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    withColors = _wp$blockEditor.withColors,
    PanelColorSettings = _wp$blockEditor.PanelColorSettings,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
var PanelBody = wp.components.PanelBody;
registerBlockType('iis/visualization', {
  title: __('Visualization'),
  category: 'iis',
  icon: 'welcome-view-site',
  keywords: [__('visualization')],
  attributes: {
    backgroundColor: {
      type: 'string',
      "default": 'snow'
    }
  },
  edit: withColors({
    backgroundColor: 'background'
  })(function (_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes,
        backgroundColor = _ref.backgroundColor,
        setBackgroundColor = _ref.setBackgroundColor;
    var blockStyle = {
      display: 'block',
      position: 'relative',
      margin: '0',
      padding: '2rem',
      overflow: 'hidden',
      border: '0',
      borderRadius: '.25rem',
      backgroundColor: backgroundColor.color ? backgroundColor.color : '#ffffff',
      color: '#1f2a36',
      fontFamily: 'sans-serif',
      textDecoration: 'none',
      textShadow: 'none'
    };
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(InspectorControls, null, /*#__PURE__*/React.createElement(PanelColorSettings, {
      title: __('Color Settings'),
      colorSettings: [{
        value: backgroundColor.color,
        onChange: setBackgroundColor,
        label: __('Background Color')
      }]
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: blockStyle
    }, /*#__PURE__*/React.createElement(InnerBlocks, null))));
  }),
  save: function save() {
    return /*#__PURE__*/React.createElement(InnerBlocks.Content, null);
  }
});

/***/ }),

/***/ "./src/js/components/DataSelect.jsx":
/*!******************************************!*\
  !*** ./src/js/components/DataSelect.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DataSelect)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __ = wp.i18n.__;
var _wp$components = wp.components,
    SelectControl = _wp$components.SelectControl,
    Notice = _wp$components.Notice,
    TextControl = _wp$components.TextControl;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;

var DataSelect = /*#__PURE__*/function (_Component) {
  _inherits(DataSelect, _Component);

  var _super = _createSuper(DataSelect);

  function DataSelect() {
    var _this;

    _classCallCheck(this, DataSelect);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      loading: true,
      data: [],
      value: _this.props.value,
      error: false,
      search: ''
    });

    _defineProperty(_assertThisInitialized(_this), "searchThrottle", null);

    _defineProperty(_assertThisInitialized(_this), "fetch", function () {
      _this.setState({
        loading: true,
        error: false
      });

      var url = _this.props.api;

      if (url.indexOf('?') > -1) {
        url += "&search=".concat(_this.state.search);
      } else {
        url += "?search=".concat(_this.state.search);
      }

      wp.apiFetch({
        path: url
      }).then(function (json) {
        if ('data' in json && 'status' in json.data && json.data.status > 299) {
          throw new Error(json.message);
        }

        return json;
      }).then(function (json) {
        if (_typeof(json) === 'object') {
          return Object.values(json);
        }

        return json;
      }).then(function (json) {
        return json.map(function (type) {
          return {
            value: _this.props.value_key(type),
            label: _this.props.label_key(type),
            link: '_links' in type && type._links['wp:items'] ? type._links['wp:items'][0].href : null
          };
        });
      }).then(function (items) {
        if (_this.props.onItems) {
          _this.props.onItems(items);
        }

        return items;
      }).then(function (items) {
        return _this.setState({
          items: items,
          loading: false
        });
      })["catch"](function (error) {
        return _this.setState({
          error: error,
          loading: false
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "search", function (value) {
      _this.setState({
        search: value
      }, function () {
        clearTimeout(_this.searchThrottle);
        _this.searchThrottle = setTimeout(function () {
          _this.fetch();
        }, 250);
      });
    });

    return _this;
  }

  _createClass(DataSelect, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetch();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.state.loading && !this.props.search) {
        return /*#__PURE__*/React.createElement("span", {
          className: "components-spinner",
          style: {
            "float": 'none'
          }
        });
      }

      if (this.state.error) {
        var error = _typeof(this.state.error) === 'object' ? this.state.error.message : this.state.error;
        return /*#__PURE__*/React.createElement(Notice, {
          status: "error",
          actions: [{
            label: __('Try again'),
            onClick: this.fetch
          }]
        }, /*#__PURE__*/React.createElement("p", null, error));
      }

      return /*#__PURE__*/React.createElement(Fragment, null, this.props.search && /*#__PURE__*/React.createElement(TextControl, {
        label: this.props.label,
        value: this.state.search,
        placeholder: __('Search'),
        onChange: this.search,
        disabled: this.props.disabled
      }), this.state.loading && /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("span", {
        className: "components-spinner",
        style: {
          "float": 'none'
        }
      })), !this.state.loading && this.state.items.length > 0 && /*#__PURE__*/React.createElement(SelectControl, {
        label: this.props.search ? null : this.props.label,
        help: this.props.help,
        options: [this.props.placeholder].concat(_toConsumableArray(this.state.items)),
        value: this.state.value,
        onChange: function onChange(value) {
          _this2.props.set(value);

          _this2.setState({
            value: value
          });
        },
        disabled: this.props.disabled
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
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

/***/ }),

/***/ "./src/js/components/IconSelect.jsx":
/*!******************************************!*\
  !*** ./src/js/components/IconSelect.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internetstiftelsen_styleguide_src_configurations_icons_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @internetstiftelsen/styleguide/src/configurations/icons.json */ "./node_modules/@internetstiftelsen/styleguide/src/configurations/icons.json");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/js/components/style.css");


var _wp$components = wp.components,
    Popover = _wp$components.Popover,
    Button = _wp$components.Button;
var withState = wp.compose.withState;
var IconSelect = withState({
  isVisible: false
})(function (_ref) {
  var isVisible = _ref.isVisible,
      setState = _ref.setState,
      value = _ref.value,
      onChange = _ref.onChange,
      size = _ref.size,
      color = _ref.color;

  var onSelect = function onSelect(e) {
    onChange(e.target.closest('button').value);
    setState({
      isVisible: false
    });
  };

  var toggleVisible = function toggleVisible() {
    setState(function (state) {
      return {
        isVisible: !state.isVisible
      };
    });
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, !value && /*#__PURE__*/React.createElement(Button, {
    isSecondary: true,
    onClick: toggleVisible
  }, "Select icon"), value && /*#__PURE__*/React.createElement("div", {
    className: "iis-icon-select__btn"
  }, /*#__PURE__*/React.createElement(Button, {
    isLink: true,
    onClick: toggleVisible
  }, /*#__PURE__*/React.createElement("svg", {
    className: "icon u-icon",
    style: {
      width: size,
      height: size,
      color: color
    }
  }, /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#icon-".concat(value)
  })))), isVisible && /*#__PURE__*/React.createElement(Popover, {
    onFocusOutside: function onFocusOutside() {
      return toggleVisible();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "iis-icon-select"
  }, _internetstiftelsen_styleguide_src_configurations_icons_json__WEBPACK_IMPORTED_MODULE_0__.map(function (icon) {
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "iis-icon-select__icon ".concat(value === icon.id ? 'is-selected' : ''),
      value: icon.id,
      onClick: onSelect
    }, /*#__PURE__*/React.createElement("svg", {
      className: "icon u-icon"
    }, /*#__PURE__*/React.createElement("use", {
      xlinkHref: "#icon-".concat(icon.id)
    })));
  })))), /*#__PURE__*/React.createElement("svg", {
    style: {
      display: 'none'
    },
    width: "100%",
    height: "100%",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("symbol", {
    id: "icon-search",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M24,21.8l8,8L29.9,32l-8-8c-5.9,4.6-14.3,3.6-19-2.2S-0.7,7.6,5.1,2.9S19.3-0.7,24,5.1C27.9,10,27.9,16.9,24,21.8L24,21.8z M13.4,23.9c5.8,0,10.5-4.7,10.5-10.5S19.2,3,13.4,3S3,7.7,3,13.4S7.7,23.9,13.4,23.9z"
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-arrow-forwards",
    viewBox: "0 0 18.9 32"
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "2.8,0 18.9,16 2.8,32 0,29.1 12.5,16 0,2.9 "
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-arrow-backwards",
    viewBox: "0 0 18.1 32"
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "16,32 0,16 16,0 18.9,2.9 5.9,16 18.9,29.1 "
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-arrow-down",
    viewBox: "0 0 32 18.9"
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "32,2.9 16,18.9 0,2.9 2.9,0 16,13.1 29.1,0 "
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-arrow-variant",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16.4 1.5l-2.2 2.2 10.4 10.7H1.5v3.2h23.1L14.2 28.3l2.2 2.2L30.5 16z"
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-hamburger",
    viewBox: "0 0 32 22.4"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M32,0v3.2H0V0H32z M32,9.6v3.2H0V9.6C0,9.6,32,9.6,32,9.6z M32,19.2v3.2H0v-3.2H32z"
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-close",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M27.5,2L30,4.5L4.5,30L2,27.5L27.5,2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M30,27.5L27.5,30L2,4.5L4.5,2L30,27.5z"
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-check",
    viewBox: "0 0 32 24.42"
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "12.04 24.42 0 13.26 2.87 10.16 11.81 18.44 28.9 0 32 2.87 12.04 24.42"
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-quote",
    viewBox: "0 0 16 32"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16,0v24H8v-8H0V0H16z M0,24h8v8H0C0,32,0,24,0,24z"
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-file",
    viewBox: "0 0 23.4 32"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0,1.8h0.8v28.5H0V1.8z M22.6,8.8h0.8v21.5h-0.8V8.8z M1.5,31.2h20.6V32H1.5V31.2z M1.5,0h12v0.8h-12V0z M13.5,2.1h0.8v6.8 h-0.8V2.1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.6,1.2l0.6-0.6l7.6,7.1l-0.6,0.6L14.6,1.2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.4,8.8h7.3v0.8h-7.3C14.4,9.6,14.4,8.8,14.4,8.8z"
  }), /*#__PURE__*/React.createElement("text", {
    transform: "matrix(1 0 0 1 3.5493 27.0766)",
    className: "icon-file-text",
    fontSize: "6"
  }, ".FILE")), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-download",
    viewBox: "0 0 28.6 32"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M13.2,0h2.7v23.7h-2.7V0L13.2,0z M24.9,13.7l1.7,2.1l-12,9.6L2.5,15.7l1.7-2.1l10.3,8.3L24.9,13.7z M0,32v-2.7h28.6V32H0z"
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-upload",
    viewBox: "0 0 28.6 32"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M15.4 32h-2.7V8.3h2.7V32zM3.7 18.3L2 16.2l12-9.6 12.1 9.7-1.7 2.1-10.3-8.3-10.4 8.2zM28.6 0v2.7H0V0h28.6z"
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-filter",
    viewBox: "0 0 32 22"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 3.4h32v3.2H0zM0 15.4h32v3.2H0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.4 0h3.2v10H5.4zM23.4 12h3.2v10h-3.2z"
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-read",
    viewBox: "0 0 32 16.5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M32,9.6l-2.6,1.3c-2.5-5.1-7-8-13.4-8C10,2.9,5.3,6.1,2.6,11L0,9.6C3.1,3.8,8.8,0,16,0C23.5,0,29,3.6,32,9.6z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16,16.2c-3.2,0-5.9-2.6-5.9-5.9s2.6-5.9,5.9-5.9s5.9,2.6,5.9,5.9S19.2,16.2,16,16.2z M16,13.2c1.6,0,2.9-1.3,2.9-2.9 S17.6,7.4,16,7.4s-3,1.3-3,2.9C13,11.9,14.4,13.2,16,13.2z"
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-pin",
    viewBox: "0 0 22 32"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11 5.8c-2.4 0-4.4 2-4.4 4.4s2 4.4 4.4 4.4 4.4-2 4.4-4.4-2-4.4-4.4-4.4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 2.6c4.3 0 8 3.5 8 8 0 1.9-2.5 7.9-7.9 16.4-5.5-8.5-7.9-14.6-7.9-16.4-.2-4.5 3.5-8 7.8-8M11 0C5.1 0 .3 4.8.3 10.7S11 32 11 32s10.7-15.4 10.7-21.3S16.9 0 11 0z"
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-user",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16 22c-1.3 0-2.6-.5-3.7-1.4l-.1-.1c-2.2-1.8-3.7-4.9-3.7-7.7 0-4.2 3.4-7.6 7.6-7.6s7.6 3.4 7.6 7.6c0 2.8-1.5 6-3.7 7.7l-.1.1c-1.3.9-2.6 1.4-3.9 1.4zm1.9-3.8l1 1.1-1-1.1c1.6-1.2 2.7-3.6 2.7-5.4 0-2.5-2-4.6-4.6-4.6-2.5 0-4.6 2-4.6 4.6 0 1.9 1.1 4.2 2.6 5.4 1.4 1.1 2.6 1 3.9 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 31.5c-3.6 0-7.1-1.3-9.9-3.5-.3-.3-.5-.7-.5-1.2 0-4.5 2.8-7.4 7-8.9.4-.2.9-.1 1.3.2.1 0 .1.1.2.2 1.2.9 2.5.9 3.7 0 .1-.1.2-.1.2-.2.4-.3.9-.3 1.3-.2 4.2 1.4 7 4.4 7 8.8 0 .4-.2.9-.5 1.2-2.7 2.3-6.2 3.6-9.8 3.6zm-7.4-5.4c2.1 1.6 4.7 2.4 7.4 2.4s5.2-.8 7.4-2.4c-.2-2.6-1.9-3.9-4.3-5-2 1.2-4.2 1.2-6.2 0-2.4 1.1-4 2.4-4.3 5zm16.3.7zm-12.8-6.3z"
  }), /*#__PURE__*/React.createElement("g", {
    transform: "translate(-624 -576)"
  }, /*#__PURE__*/React.createElement("path", {
    className: "st0",
    d: "M640 604.5c6.9 0 12.5-5.6 12.5-12.5s-5.6-12.5-12.5-12.5-12.5 5.6-12.5 12.5 5.6 12.5 12.5 12.5m0 3c-8.6 0-15.5-6.9-15.5-15.5s6.9-15.5 15.5-15.5 15.5 6.9 15.5 15.5-6.9 15.5-15.5 15.5"
  }))), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-language",
    viewBox: "0 0 26 26"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18.678 11.45h1.69L26 25.92h-2.376l-1.178-3.256h-5.817L15.43 25.92h-2.406l5.654-14.47zm3.072 9.319l-2.212-6.114-2.223 6.114h4.435zM7.294.08h2.067v4.775H7.294z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 3.822h16.656v2.067H0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.924 17.286l-.957-1.833A21.99 21.99 0 0013.068 4.458l1.908.797A24.072 24.072 0 013.924 17.286z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.693 17.265a24.114 24.114 0 01-8.928-8.089L5.493 8.04a22.036 22.036 0 008.16 7.394l-.96 1.831z"
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-linkedin",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M29.6,0H2.4C1.1,0,0,1,0,2.3v27.4C0,31,1.1,32,2.4,32h27.3c1.3,0,2.4-1,2.4-2.3V2.3C32,1,30.9,0,29.6,0z M9.7,26.8H4.9V12.3 h4.8V26.8z M7.3,10.4L7.3,10.4c-1.7,0-2.7-1.1-2.7-2.5c0-1.4,1.1-2.5,2.7-2.5C9,5.4,10,6.5,10,7.9C10,9.3,9,10.4,7.3,10.4z M27.1,26.8h-4.8v-7.7c0-1.9-0.7-3.3-2.4-3.3c-1.3,0-2.1,0.9-2.5,1.8c-0.1,0.3-0.2,0.7-0.2,1.2v8.1h-4.8c0,0,0.1-13.1,0-14.4h4.8v2 c0.6-1,1.8-2.4,4.4-2.4c3.2,0,5.6,2.1,5.6,6.5L27.1,26.8L27.1,26.8z M17.2,14.4C17.2,14.4,17.2,14.4,17.2,14.4L17.2,14.4L17.2,14.4z "
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-facebook",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M30.2,0H1.8C0.8,0,0,0.8,0,1.8c0,0,0,0,0,0v28.5c0,1,0.8,1.8,1.8,1.8c0,0,0,0,0,0h15.3V19.6h-4.2v-4.8h4.2v-3.6 c0-4.1,2.5-6.4,6.2-6.4C25.1,4.8,26.6,5,27,5v4.3l-2.6,0c-2,0-2.4,1-2.4,2.4v3.1h4.8l-0.6,4.8h-4.2V32h8.2c1,0,1.8-0.8,1.8-1.8V1.8 C32,0.8,31.2,0,30.2,0C30.2,0,30.2,0,30.2,0z"
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-instagram",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M23.2,0H8.8C4,0,0,4,0,8.8v14.3C0,28,4,32,8.8,32h14.3c4.9,0,8.8-4,8.8-8.8V8.8C32,4,28,0,23.2,0z M29.2,23.2 c0,3.3-2.7,6-6,6H8.8c-3.3,0-6-2.7-6-6V8.8c0-3.3,2.7-6,6-6h14.3c3.3,0,6,2.7,6,6L29.2,23.2L29.2,23.2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16,7.8c-4.5,0-8.2,3.7-8.2,8.2c0,4.5,3.7,8.2,8.2,8.2s8.2-3.7,8.2-8.2C24.2,11.5,20.5,7.8,16,7.8z M16,21.4 c-3,0-5.4-2.4-5.4-5.4c0-3,2.4-5.4,5.4-5.4s5.4,2.4,5.4,5.4C21.4,19,19,21.4,16,21.4z M24.6,5.3c-0.5,0-1.1,0.2-1.5,0.6 c-0.4,0.4-0.6,0.9-0.6,1.5c0,0.5,0.2,1.1,0.6,1.5c0.4,0.4,0.9,0.6,1.5,0.6c0.5,0,1.1-0.2,1.5-0.6c0.4-0.4,0.6-0.9,0.6-1.5 c0-0.5-0.2-1.1-0.6-1.5C25.7,5.6,25.1,5.3,24.6,5.3z"
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-twitter",
    viewBox: "0 0 32 26.02"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M32,3.1c-1.2,0.5-2.5,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6C25.7,0.8,24,0,22.2,0 c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5C10.4,7.8,5.6,5.2,2.3,1.2c-0.6,1-0.9,2.1-0.9,3.3c0,2.3,1.2,4.3,2.9,5.5 c-1,0-2.1-0.3-3-0.8v0.1c0,3.2,2.3,5.8,5.3,6.4c-0.5,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1c0.8,2.6,3.3,4.5,6.1,4.6 c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,3,10.1,3c12.1,0,18.6-10,18.6-18.6V6.6C30,5.5,31.1,4.4,32,3.1L32,3.1z"
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-external-link",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "18,0 23.3,5.3 14.3,14.3 17.7,17.7 26.7,8.7 32,14 32,0"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "28.5,18.5 28.5,28.5 3.5,28.5 3.5,3.5 10.5,3.5 10.5,0 0,0 0,32 32,32 32,18.5"
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-app-share",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6.3 10.2h7.4V23h4.9V10.2H26L16.1.3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M28.5 4v24.5h-25V4H0v28h32V4z"
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-print",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/React.createElement("path", {
    className: "cls-1",
    d: "M32 9.78h-5.51V6L20.6 0h-15v9.78H0v14.44h5.56V32h20.93v-7.78H32zM23 6h-3.14V2.82zM8.06 2.5h9.8V8H24v1.78H8.06zM24 29.5H8.06v-7.62l15.94.05zm5.51-7.78h-3v-2.28l-20.95-.07v2.35H2.5v-9.44h27z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "cls-1",
    d: "M10.94 23.25h10v1.5h-10zM10.94 26.5h10V28h-10zM23.85 14h3.8v2h-3.8z"
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-chapters",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M26.7 6.4V1H2.5v25.7L7.1 31h22.4V6.4h-2.8zm-2.3-3.1v3H8.9l-2.7-3h18.2zm2.8 25.4H8l-3.2-3V5.4l3 3.3h3.9v7.6l2.4-1.5 2.2 1.5V8.7h10.8v20z"
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-article",
    viewBox: "0 0  32 32"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M27.2 30.2H4.8V1.8h16.8l5.7 5.7v22.7zm-20-2.4h17.5V8.5l-4.2-4.3H7.2v23.6z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.7 20.3h-2.2v-2.5h11v2.5h-8.8zM12.3 25.3h-1.8v-2.5h9v2.5h-7.2zM25 9.7h-5.7V4h1.5v4.2H25zM12.7 15.3h-2.2v-2.5h11v2.5h-8.8z"
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-padlock",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M26.5 12V7.4c0-3.3-2.6-5.9-5.9-5.9h-9.2c-3.3 0-5.9 2.6-5.9 5.9V12H3v18h26V12h-2.5zm-18-4.6c0-1.6 1.3-2.9 2.9-2.9h9.2c1.6 0 2.9 1.3 2.9 2.9V12h-15V7.4zM26 27H6V15h20v12z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.9 19.4c0-1.1-.9-1.9-1.9-1.9s-1.9.9-1.9 1.9c0 .6.2 1.1.6 1.4v3.7h2.5v-3.7c.5-.3.7-.8.7-1.4z"
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-trash",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M28.3 6.9h-8V2.4h-8.5v4.5h-8v2.5h2v20.8h20.5V9.4h2V6.9zM11.6 27.6H8.2V9.4h3.4v18.2zm6.1 0h-3.5V9.4h3.5v18.2zm.1-20.7h-3.5v-2h3.5v2zm6 20.9h-3.6V9.4h3.6v18.4z"
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-link",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14.3 16.3l.7.7c.9.9 2.1 1.4 3.3 1.4 1.3 0 2.5-.5 3.4-1.4l5.1-5.1c1.9-1.9 1.9-4.9 0-6.8s-4.9-1.9-6.8 0l-3.6 3.6L13.7 6l3.6-3.6c3.3-3.3 8.8-3.3 12.1 0 3.3 3.3 3.3 8.8 0 12.1l-5.1 5.1c-1.6 1.6-3.8 2.5-6.1 2.5s-4.4-.9-6-2.5l-.7-.7 2.8-2.6z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.7 15.7L17 15c-1.9-1.8-4.9-1.8-6.7 0l-5.1 5c-1.9 1.9-1.9 4.9 0 6.8.9.9 2.1 1.4 3.4 1.4s2.5-.5 3.4-1.4l3.6-3.6 2.7 2.7-3.6 3.6C13 31.1 10.9 32 8.6 32s-4.5-.9-6.1-2.5c-3.3-3.3-3.3-8.8 0-12.1l5.1-5.1c3.3-3.3 8.8-3.3 12.1 0l.7.7-2.7 2.7z"
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-share",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17.4 19.6c.5-.4 1.1-.6 1.7-.6 1.6.1 2.8 1.4 2.8 3 .1 1.6-1.2 3-2.8 3-1.6-.1-2.8-1.4-2.8-3v-.5l-4.9-3.2c-.5.4-1.1.6-1.7.6-1.6-.1-2.9-1.4-2.8-3 0-1.6 1.2-2.9 2.8-3 .6 0 1.2.2 1.7.6l4.9-3.2v-.5c-.1-1.6 1.2-3 2.8-3 1.6.1 2.9 1.4 2.8 3 0 1.6-1.2 2.9-2.8 3-.6 0-1.2-.2-1.7-.6l-4.9 3.2v1l4.9 3.2z"
  }), /*#__PURE__*/React.createElement("g", {
    transform: "translate(-624 -576)"
  }, /*#__PURE__*/React.createElement("path", {
    className: "st0",
    d: "M640 604.5c6.9 0 12.5-5.6 12.5-12.5s-5.6-12.5-12.5-12.5-12.5 5.6-12.5 12.5 5.6 12.5 12.5 12.5m0 3c-8.6 0-15.5-6.9-15.5-15.5s6.9-15.5 15.5-15.5 15.5 6.9 15.5 15.5-6.9 15.5-15.5 15.5"
  }))), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-questionmark",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16.5 23.9h-2.2v-2.3h2.2v2.3zm3.6-10c-.5.8-1.1 1.5-1.8 2.1-.6.5-1.3 1.1-1.6 1.8-.2.4-.3.8-.3 1.3h-2c0-.7.2-1.4.5-2 .5-.8 1-1.5 1.7-2.1.6-.5 1.2-1 1.6-1.6.3-.4.3-.8.3-1.3 0-.8-.3-1.5-.8-2.1-.8-.6-1.7-1-2.4-.9-1.7 0-2.7 1-3.1 3h-2c.1-1.3.6-2.6 1.6-3.4 1-.9 2.3-1.4 3.7-1.3 1.4-.1 2.7.4 3.8 1.3.9.8 1.5 2 1.5 3.2-.2.7-.4 1.4-.7 2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 21.1h3.2v3.3H14v-3.3zm3-1.5h-3v-.5c0-.7.2-1.4.5-2.2.5-.9 1.1-1.6 1.9-2.3.7-.5 1.1-1 1.4-1.5.2-.3.2-.6.2-1 0-.7-.2-1.2-.7-1.8-.5-.4-1.2-.7-1.8-.7-1.5 0-2.4.8-2.7 2.6l-.1.4h-3v-.5c.1-1.5.7-2.8 1.7-3.7 1.1-1 2.5-1.5 4-1.4 1.4-.1 2.8.4 4.1 1.4 1 .9 1.7 2.3 1.7 3.6-.1.9-.4 1.7-.7 2.2-.5.9-1.2 1.6-1.9 2.2-.7.5-1.2 1.1-1.5 1.7-.1.3-.2.7-.2 1.1v.4h.1z"
  }), /*#__PURE__*/React.createElement("g", {
    transform: "translate(-624 -576)"
  }, /*#__PURE__*/React.createElement("path", {
    className: "st0",
    d: "M640 604.5c6.9 0 12.5-5.6 12.5-12.5s-5.6-12.5-12.5-12.5-12.5 5.6-12.5 12.5 5.6 12.5 12.5 12.5m0 3c-8.6 0-15.5-6.9-15.5-15.5s6.9-15.5 15.5-15.5 15.5 6.9 15.5 15.5-6.9 15.5-15.5 15.5"
  }))), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-info",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14.5 7.1h3v3.1h-3V7.1zm3 17.8h-3.1V12.7h3.1v12.2z"
  }), /*#__PURE__*/React.createElement("g", {
    transform: "translate(-624 -576)"
  }, /*#__PURE__*/React.createElement("path", {
    className: "st0",
    d: "M640 604.5c6.9 0 12.5-5.6 12.5-12.5s-5.6-12.5-12.5-12.5-12.5 5.6-12.5 12.5 5.6 12.5 12.5 12.5m0 3c-8.6 0-15.5-6.9-15.5-15.5s6.9-15.5 15.5-15.5 15.5 6.9 15.5 15.5-6.9 15.5-15.5 15.5"
  }))), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-contrast",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M15.4 6c5.5 0 10 4.5 10 10s-4.5 10-10 10V6z"
  }), /*#__PURE__*/React.createElement("g", {
    transform: "translate(-624 -576)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M640 604.5c6.9 0 12.5-5.6 12.5-12.5s-5.6-12.5-12.5-12.5-12.5 5.6-12.5 12.5 5.6 12.5 12.5 12.5m0 3c-8.6 0-15.5-6.9-15.5-15.5s6.9-15.5 15.5-15.5 15.5 6.9 15.5 15.5-6.9 15.5-15.5 15.5"
  }))), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-gauge",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9.2 23.1c0 .3-.2.5-.5.5s-.5-.2-.5-.5.2-.5.5-.5.5.2.5.5M6.9 20c0 .3-.2.5-.5.5s-.5-.3-.5-.5c0-.3.2-.5.5-.5s.5.2.5.5M6.9 12.8c0 .3-.2.5-.5.5s-.5-.3-.5-.5c0-.3.2-.5.5-.5s.5.2.5.5M9.2 9.5c0 .3-.2.5-.5.5s-.4-.2-.4-.5.2-.5.4-.5c.3 0 .5.2.5.5M12.4 6.9c0 .3-.2.5-.5.5s-.5-.2-.5-.5.2-.5.5-.5.5.2.5.5M16.6 5.8c0 .4-.3.7-.7.7-.4 0-.7-.3-.7-.7s.3-.7.7-.7c.4-.1.7.3.7.7M6.3 16.6c0 .4-.3.7-.7.7-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7.4 0 .7.3.7.7M22.7 23.1c0 .3.2.5.5.5s.5-.2.5-.5-.2-.5-.5-.5-.5.2-.5.5M25 20c0 .3.2.5.5.5s.5-.2.5-.5-.2-.5-.5-.5-.5.2-.5.5M25 12.8c0 .3.2.5.5.5s.5-.2.5-.5-.2-.5-.5-.5-.5.2-.5.5M22.7 9.5c0 .3.2.5.5.5s.5-.2.5-.5-.3-.5-.6-.5c-.2 0-.4.2-.4.5M19.4 6.9c0 .3.2.5.5.5s.5-.2.5-.5-.2-.5-.5-.5-.5.2-.5.5M25.5 16.6c0 .4.3.7.7.7.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7"
  }), /*#__PURE__*/React.createElement("g", {
    transform: "translate(-624 -576)"
  }, /*#__PURE__*/React.createElement("path", {
    className: "st0",
    d: "M640 604.5c6.9 0 12.5-5.6 12.5-12.5s-5.6-12.5-12.5-12.5-12.5 5.6-12.5 12.5 5.6 12.5 12.5 12.5m0 3c-8.6 0-15.5-6.9-15.5-15.5s6.9-15.5 15.5-15.5 15.5 6.9 15.5 15.5-6.9 15.5-15.5 15.5"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M18.1 14.1c-1-1.1-2.8-1.2-3.9-.2s-3.6 7-3.6 7 6.2-1.9 7.3-3c1.2-1 1.3-2.7.2-3.8zM16 17.4c-.7 0-1.3-.6-1.3-1.3 0-.7.6-1.3 1.3-1.3.7 0 1.3.6 1.3 1.3.1.7-.5 1.3-1.3 1.3z"
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-backward-15",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16.6 4.1V1l-4.5 4.5 4.5 4.5V7c5.6.3 10 4.9 10 10.6 0 5.9-4.8 10.6-10.6 10.6S5.4 23.4 5.4 17.5c0-3.5 1.8-6.8 4.7-8.8L8.5 6.4c-3.7 2.5-5.9 6.7-5.9 11.2C2.5 25 8.6 31 16 31s13.5-6 13.5-13.5c0-7.2-5.8-13.1-12.9-13.4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 14.5c0 .2-.1.5-.6.5h-1.1v1.3h1.6v4.8H14v-7.2h-1.5v.6zM18.7 16c-.3 0-.6 0-.8.1l.2-.8H21v-1.5h-4.1l-.9 4 1.4.4.1-.1c.2-.3.6-.6 1-.6.7 0 1.1.5 1.1 1.1 0 .6-.4 1.1-1.1 1.1-.8 0-1-.6-1.2-1.1v-.2l-1.5.4v.2c.3 1.3 1.4 2.2 2.6 2.2 1.5 0 2.7-1.2 2.7-2.6.1-1.4-1.1-2.6-2.4-2.6z"
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-play",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16 28.5c6.9 0 12.5-5.6 12.5-12.5S22.9 3.5 16 3.5 3.5 9.1 3.5 16 9.1 28.5 16 28.5m0 3C7.4 31.5.5 24.6.5 16S7.4.5 16 .5 31.5 7.4 31.5 16 24.6 31.5 16 31.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.7 8.2l11.4 7.7-11.4 7.7z"
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-forward-60",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M15.4 4.1V1l4.5 4.5-4.5 4.5V7c-5.6.2-10.1 4.9-10.1 10.5 0 5.9 4.8 10.6 10.7 10.6s10.7-4.8 10.7-10.6c0-3.5-1.8-6.8-4.7-8.8l1.6-2.3c3.7 2.5 6 6.7 6 11.2C29.5 25 23.4 31 16 31S2.5 25 2.5 17.5c0-7.2 5.7-13.1 12.9-13.4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.2 16.3c-.2-.1-.5-.1-.7-.2l1.4-2.2H13l-2.1 3.4c-.3.4-.4.9-.4 1.4 0 1.4 1.2 2.6 2.7 2.6 1.5 0 2.7-1.2 2.7-2.6 0-1.1-.7-2-1.7-2.4zm-1 3.4c-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1.6 0 1.1.5 1.1 1.1 0 .7-.5 1.1-1.1 1.1zM18.9 13.8c-2.5 0-2.5 2.8-2.5 3.7 0 2.5.9 3.7 2.6 3.7 1.6 0 2.5-1.3 2.5-3.7 0-2.4-.9-3.7-2.6-3.7zm0 1.6c.9 0 .9 1 .9 2.2 0 1.2-.1 2.2-.9 2.2-.9 0-1-1-1-2.2.1-1.3.2-2.2 1-2.2z"
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-pause",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 3h8v26H6zM18 3h8v26h-8z"
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-author",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 29h24v2H4zM10.3 26H4v-6.3L22.1 1.6l6.3 6.3L10.3 26zM6 24h3.5L25.6 7.9l-3.5-3.5L6 20.5V24z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.07 6.69l1.414-1.414 6.293 6.293-1.414 1.415z"
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-speaker",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 29a1 1 0 0 1-.57-.18l-10-7A1 1 0 0 1 7 21V11a1 1 0 0 1 .43-.82l10-7a1 1 0 0 1 1-.07A1 1 0 0 1 19 4v24a1 1 0 0 1-.54.89A1 1 0 0 1 18 29zm-9-8.52l8 5.6V5.92l-8 5.6z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "cls-1",
    d: "M8 22H4a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3h4a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM4 12a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3v-8zM18 21v-2a3 3 0 0 0 2.12-5.12l1.42-1.42A5 5 0 0 1 18 21z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "cls-1",
    d: "M23.65 22.65a1 1 0 0 1-.7-.29A1 1 0 0 1 23 21a7 7 0 0 0 0-9.9 1 1 0 0 1 1.41-1.41 9 9 0 0 1 0 12.72 1 1 0 0 1-.76.24z"
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-mute",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/React.createElement("path", {
    className: "cls-1",
    d: "M18 29a1 1 0 0 1-.57-.18l-10-7A1 1 0 0 1 7 21V11a1 1 0 0 1 .43-.82l10-7a1 1 0 0 1 1-.07A1 1 0 0 1 19 4v24a1 1 0 0 1-.54.89A1 1 0 0 1 18 29zm-9-8.52l8 5.6V5.92l-8 5.6z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "cls-1",
    d: "M8 22H4a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3h4a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM4 12a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3v-8z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "cls-1",
    transform: "rotate(-45 25.758 16)",
    d: "M24.76 10h2v12h-2z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "cls-1",
    transform: "rotate(-45 25.758 16)",
    d: "M19.76 15h12v2h-12z"
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-settings",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M31.5 18.2v-4.4h-4.7c-.3-1.4-.8-2.6-1.5-3.7l3.3-3.3-3.1-3.1L22.2 7c-1.2-.8-2.6-1.4-4-1.7V.5h-4.4v4.7c-1.4.2-2.7.8-3.9 1.6L6.7 3.6 3.6 6.7l3.2 3.2c-.8 1.2-1.3 2.5-1.6 3.9H.5v4.4h4.7c.3 1.5.9 2.8 1.7 4l-3.3 3.3 3.1 3.1 3.3-3.3c1.1.7 2.4 1.3 3.7 1.5v4.7h4.4v-4.7c1.4-.3 2.7-.8 3.9-1.6l3.4 3.4 3.1-3.1-3.4-3.4c.8-1.2 1.3-2.5 1.6-3.9h4.8zM16 23.5c-4.1 0-7.5-3.4-7.5-7.5s3.4-7.5 7.5-7.5 7.5 3.4 7.5 7.5-3.4 7.5-7.5 7.5z"
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-lte",
    viewBox: "0 0  32 32"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1.5 16v14.5h8.6v-2.8H4.4V16zM10.2 16v2.9h2.9v11.6H16V18.9h2.8V16zM21.9 16v14.3h8.6v-2.7h-5.8v-2.9l5.6-.1v-2.8h-5.6v-2.9h5.8V16zM20.5 12.3c-1.4-1.2-3.1-1.9-5.1-1.9-2 0-3.8.7-5.2 1.9L8.1 10c1.9-1.7 4.5-2.8 7.3-2.8s5.3 1 7.2 2.7l-2.1 2.4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M24.5 8.1c-2.5-2.3-5.7-3.5-9.1-3.5-3.4 0-6.7 1.3-9.2 3.6L4 6c3.1-2.9 7.1-4.5 11.4-4.5 4.2 0 8.2 1.6 11.3 4.4l-2.2 2.2z"
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-wifi",
    viewBox: "0 0 32 21.9"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16.1 16.3c-1.6 0-2.8 1.3-2.8 2.8s1.3 2.8 2.8 2.8c1.6 0 2.8-1.3 2.8-2.8 0-1.6-1.2-2.8-2.8-2.8z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22.8 14.3c-1.8-1.5-4.1-2.5-6.7-2.5-2.6 0-5 1-6.8 2.6l-2.8-3c2.6-2.3 5.9-3.6 9.6-3.6 3.6 0 7 1.3 9.5 3.6l-2.8 2.9z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M28.1 8.7c-3.3-3-7.6-4.6-12-4.6-4.5 0-8.8 1.7-12.2 4.7L1 5.9C5.1 2.1 10.4 0 16.1 0 21.6 0 26.9 2.1 31 5.8l-2.9 2.9z"
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-reception",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M24 3h5v26h-5zM17 10h5v19h-5zM10 17h5v12h-5zM3 24h5v5H3z"
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-2g",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M24 3h5v26h-5V3zm-7 7h5v19h-5V10zm-7 7h5v12h-5V17zm-7 7h5v5H3v-5z"
  }), /*#__PURE__*/React.createElement("text", {
    transform: "translate(2.72 9.396)",
    className: "u-weight-bolder",
    fontSize: "9"
  }, "2G")), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-3g",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M24 3h5v26h-5V3zm-7 7h5v19h-5V10zm-7 7h5v12h-5V17zm-7 7h5v5H3v-5z"
  }), /*#__PURE__*/React.createElement("text", {
    transform: "translate(2.72 9.396)",
    className: "u-weight-bolder",
    fontSize: "9"
  }, "3G")), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-4g",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M24 3h5v26h-5V3zm-7 7h5v19h-5V10zm-7 7h5v12h-5V17zm-7 7h5v5H3v-5z"
  }), /*#__PURE__*/React.createElement("text", {
    transform: "translate(2.72 9.396)",
    className: "u-weight-bolder",
    fontSize: "9"
  }, "4G")), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-5g",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M24 3h5v26h-5V3zm-7 7h5v19h-5V10zm-7 7h5v12h-5V17zm-7 7h5v5H3v-5z"
  }), /*#__PURE__*/React.createElement("text", {
    transform: "translate(2.72 9.396)",
    className: "u-weight-bolder",
    fontSize: "9"
  }, "5G")), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-latency",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20.3 1h-8.6v2.9h8.6V1zm-5.7 18.6h2.9V11h-2.9v8.6zM26 10.1l2.1-2c-.7-.7-1.4-1.4-2.1-2l-2 2c-2.1-1.7-5-2.9-8-2.9-7.1 0-12.9 5.7-12.9 12.9S8.9 31 16 31s12.9-5.7 12.9-12.9c0-3-1-5.8-2.9-8zm-10 18c-5.6 0-10-4.4-10-10s4.4-10 10-10 10 4.4 10 10-4.4 10-10 10z",
    fillRule: "evenodd",
    clipRule: "evenodd"
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-spinner",
    viewBox: "0 0 100 100",
    className: "spinner"
  }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "50",
    fill: "none",
    r: "43",
    stroke: "#50b2fc",
    strokeWidth: "7"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "50",
    fill: "none",
    r: "43",
    stroke: "#a7d8fd",
    strokeWidth: "7",
    strokeLinecap: "square",
    transform: "rotate(27.6965 50 50)"
  }, /*#__PURE__*/React.createElement("animatetransform", {
    attributename: "transform",
    type: "rotate",
    calcmode: "linear",
    values: "0 50 50;180 50 50;720 50 50",
    keytimes: "0;0.5;1",
    dur: "2.5s",
    begin: "0s",
    repeatcount: "indefinite"
  }), /*#__PURE__*/React.createElement("animate", {
    attributeName: "stroke-dasharray",
    calcMode: "linear",
    values: "9.42477796076938 179.0707812546182;188.4955592153876 -2.842170943040401e-14;9.42477796076938 179.0707812546182",
    keyTimes: "0;0.5;1",
    dur: "2.5",
    begin: "0s",
    repeatCount: "indefinite"
  })))), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-spinner-white",
    viewBox: "0 0 100 100",
    className: "spinner"
  }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "50",
    fill: "none",
    r: "43",
    stroke: "none",
    strokeWidth: "7"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "50",
    fill: "none",
    r: "43",
    stroke: "#fff",
    strokeWidth: "7",
    strokeLinecap: "square",
    transform: "rotate(27.6965 50 50)"
  }, /*#__PURE__*/React.createElement("animatetransform", {
    attributename: "transform",
    type: "rotate",
    calcmode: "linear",
    values: "0 50 50;180 50 50;720 50 50",
    keytimes: "0;0.5;1",
    dur: "2.5s",
    begin: "0s",
    repeatcount: "indefinite"
  }), /*#__PURE__*/React.createElement("animate", {
    attributeName: "stroke-dasharray",
    calcMode: "linear",
    values: "9.42477796076938 179.0707812546182;188.4955592153876 -2.842170943040401e-14;9.42477796076938 179.0707812546182",
    keyTimes: "0;0.5;1",
    dur: "2.5",
    begin: "0s",
    repeatCount: "indefinite"
  })))), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-3d",
    viewBox: "0 0 30 18"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 12.186l2.954-.183c0 1.927 1.501 3.027 3.503 3.027 1.77 0 3.393-.879 3.393-2.722 0-2.453-2.27-2.527-4.223-2.527V7.425c2.905 0 3.271-.867 3.271-2.197 0-1.501-1.098-2.221-2.49-2.221-1.575 0-2.625.927-2.649 2.454L.83 5.253C.83 2.006 3.381.127 6.359.127c2.868 0 5.516 1.757 5.516 4.722 0 1.355-.55 2.759-2.245 3.552 2.294.623 3.174 2.282 3.174 4.149 0 3.503-3.027 5.321-6.395 5.321C2.978 17.873 0 16.006 0 12.186zM16.026.383h5.004c5.871 0 8.97 3.148 8.97 8.75 0 5.37-3.198 8.494-8.995 8.494h-4.979V.383zM20.7 14.785c3.808 0 6.2-1.477 6.2-5.786 0-4.088-1.671-5.772-5.919-5.772h-1.855v11.558H20.7z"
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-accessibility",
    viewBox: "0 0 28 31"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17.244 20.144a7.335 7.335 0 0 1-4.359 7.172 7.271 7.271 0 0 1-5.597.117 7.26 7.26 0 0 1-4.04-3.875c-1.621-3.692.065-8.016 3.757-9.637l.16-.07-.347-2.669-.273.1a10 10 0 0 0-6.072 6.326 9.876 9.876 0 0 0 .643 7.581 9.87 9.87 0 0 0 5.815 4.905 9.891 9.891 0 0 0 7.581-.643 9.875 9.875 0 0 0 4.906-5.815l.029-.09-2.277-4.554.074 1.152z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M26.811 21.501l-3.333 1.669-3.739-7.459a1.304 1.304 0 0 0-1.169-.718h-7.46l-.211-1.691h6.824v-2.624H10.57l-.563-4.398a2.902 2.902 0 0 0 2.001-.854 2.902 2.902 0 0 0 .858-2.068 2.903 2.903 0 0 0-.855-2.068A2.916 2.916 0 0 0 9.904.431a2.9 2.9 0 0 0-2.779 2.088c-.073.254-.11.514-.108.803l1.618 13.129a1.347 1.347 0 0 0 1.309 1.163h7.811l3.962 7.91c.224.443.672.718 1.165.719h.02c.203 0 .404-.05.577-.143L28 23.838l-1.189-2.337z"
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-cafe",
    viewBox: "0 0 22 30"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21.52 3.195h-1.104L19.39.064H2.61L1.584 3.195H.48V8.69h1.169l1.018 21.245h16.667L20.352 8.69h1.169V3.195zM3.595 15.888h14.809l-.209 4.354H3.804l-.209-4.354zm.597 12.448l-.311-6.494H18.12l-.311 6.494H4.192zm14.289-14.048H3.519L3.25 8.691h15.5l-.269 5.597z"
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-capacity",
    viewBox: "0 0 30 18"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21.516 14.702a5.911 5.911 0 0 0-4.344-5.566h-.136c.136 0 .136-.136.271-.136a6.14 6.14 0 0 0 2.172-4.344 4.344 4.344 0 0 0-8.688-.004v.004A5.466 5.466 0 0 0 12.963 9l.137.137h-.136c-2.579.95-4.344 2.715-4.344 5.566v2.986h12.896v-2.987z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.473 9.646a4.486 4.486 0 0 0-2.631-1.785h-.109c.109 0 .109-.109.217-.109a5.362 5.362 0 0 0 1.738-3.584A3.43 3.43 0 0 0 5.303.693h-.09a3.43 3.43 0 0 0-3.475 3.385v.09a4.37 4.37 0 0 0 1.737 3.475l.109.109h-.109A4.728 4.728 0 0 0 0 12.205v2.389h7.269c.027-1.983.794-3.666 2.204-4.948zM26.525 7.752h-.109c.109 0 .109-.109.217-.109a4.912 4.912 0 0 0 1.738-3.475 3.475 3.475 0 1 0-6.951-.003v.003a4.37 4.37 0 0 0 1.738 3.475l.109.109h-.109c-1.091.402-1.991.993-2.606 1.792a7.322 7.322 0 0 1 2.311 5.05H30v-2.389a4.727 4.727 0 0 0-3.475-4.453z"
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-display",
    viewBox: "0 0 30 25"
  }, /*#__PURE__*/React.createElement("path", {
    id: "Rectangle_158_1_",
    d: "M28 2.295v16.411H2V2.295h26m2-2H0v20.411h30V.295z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1.834 22.705h26.332v2H1.834z"
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-email",
    viewBox: "0 0 26 19"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M.375.454v18.092h25.25V.454H.375zm23.333 5.504v7.997l-6.773-3.72 6.773-4.277zm0 10.184v.488H2.292v-.488l8.627-4.738L13 12.716l2.082-1.312 8.626 4.738zm0-12.451L13 10.45 2.292 3.691v-1.32h21.417v1.32zM2.292 13.954V5.958l6.774 4.276-6.774 3.72z"
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-headset",
    viewBox: "0 0 25 25"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M22.63 11.185v-1C22.63 4.597 18.084.051 12.496.051S2.362 4.597 2.362 10.185v1H.365v7.258h2.448l3.075 5.808H10v.699h5v-2.997h-5v.698H6.852l-2.49-4.703v-7.763c0-4.485 3.649-8.134 8.134-8.134S20.63 5.7 20.63 10.185v8.258h4.005v-7.258H22.63z"
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-phone",
    viewBox: "0 0 20 29"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17.52.174H2.479C1.385.174.495 1.093.495 2.223v24.554c0 1.13.89 2.049 1.984 2.049H17.52c1.094 0 1.984-.919 1.984-2.049V2.223c.001-1.13-.89-2.049-1.984-2.049zm-.005 20.827H2.495V7.098h15.012l.008 13.903zm-.01-18.778l.002 3.875H2.495V2.223l-.016-.049 15.026.049zM2.495 26.777v-4.776h15.021l.004 4.825-15.025-.049z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "10.008",
    cy: "24.413",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.932 3.636h4.135v1H7.932z"
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-plus",
    viewBox: "0 0 37 37"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M36.531 16.732H20.268V.469h-3.536v16.263H.469v3.536h16.263v16.263h3.536V20.268h16.263z"
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-podcast",
    viewBox: "0 0 21 28"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18.312 13.274h2.49a9.319 9.319 0 0 1-2.593 6.534 10.434 10.434 0 0 1-6.257 3.353V28h-2.9v-4.839a10.445 10.445 0 0 1-6.257-3.353 9.315 9.315 0 0 1-2.597-6.534h2.49c-.054 2.04.793 4 2.316 5.358a7.89 7.89 0 0 0 5.5 2.109 7.89 7.89 0 0 0 5.5-2.109 6.932 6.932 0 0 0 2.316-5.358h-.008zm-7.813 4.425a4.488 4.488 0 0 1-4.425-4.425V4.425a4.248 4.248 0 0 1 1.314-3.111 4.34 4.34 0 0 1 6.221 0 4.255 4.255 0 0 1 1.314 3.111v8.85a4.488 4.488 0 0 1-4.425 4.425l.001-.001z"
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-richtext-bold",
    viewBox: "0 0 10 14"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M.55 13.209h4.844c2.109 0 4.056-1.292 4.056-3.6a3.45 3.45 0 0 0-2-3.041A2.797 2.797 0 0 0 8.83 4.14C8.83 1.653 6.747.791 4.857.791H.55v12.418zm2.232-7.418V2.803h2.111c1.063 0 1.89.492 1.89 1.459 0 1.222-.844 1.529-1.714 1.529H2.782zm0 5.291V7.716h2.559A1.734 1.734 0 0 1 7.25 9.359c0 1.169-.67 1.723-1.821 1.723H2.782z"
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-richtext-bullet-list",
    viewBox: "0 0 17 15"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "1.86",
    cy: "2.291",
    r: "1.86"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "1.86",
    cy: "7.5",
    r: "1.86"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "1.86",
    cy: "12.709",
    r: "1.86"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.07 1.291H17v2H6.07zM6.07 6.5H17v2H6.07zM6.07 11.709H17v2H6.07z"
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-richtext-italic",
    viewBox: "0 0 10 14"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10.082 2.282v-2H4.364v2h1.508l-3.908 9.436H-.082v2h5.718v-2H4.129l3.908-9.436z"
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-streaming",
    viewBox: "0 0 28 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M25.967 9.989a11.93 11.93 0 0 1-3.49 8.438l1.436 1.436A13.97 13.97 0 0 0 28 9.98c-.032-3.804-1.603-7.267-4.113-9.797l-1.433 1.433c2.144 2.165 3.486 5.124 3.513 8.373zM2.031 9.989c0-3.279 1.327-6.252 3.471-8.416L4.066.137A13.953 13.953 0 0 0 0 9.989c0 3.85 1.563 7.341 4.086 9.874l1.436-1.436a11.93 11.93 0 0 1-3.491-8.438z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20.772 9.989a6.75 6.75 0 0 1-1.967 4.766L20.4 16.35a9.014 9.014 0 0 0 2.63-6.371c-.021-2.445-1.029-4.67-2.638-6.3l-1.593 1.593a6.798 6.798 0 0 1 1.973 4.717zM7.228 9.989c0-1.846.745-3.521 1.947-4.744L7.579 3.65A8.998 8.998 0 0 0 4.97 9.989a8.997 8.997 0 0 0 2.629 6.361l1.595-1.595a6.753 6.753 0 0 1-1.966-4.766z"
  }), /*#__PURE__*/React.createElement("path", {
    id: "Path_68",
    d: "M14 6.885a3.104 3.104 0 1 0 3.104 3.104A3.132 3.132 0 0 0 14 6.885z"
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-time",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2.2c4.301 0 7.8 3.499 7.8 7.8s-3.499 7.8-7.8 7.8-7.8-3.499-7.8-7.8S5.699 2.2 10 2.2M10 0C4.486 0 0 4.486 0 10s4.486 10 10 10 10-4.486 10-10S15.514 0 10 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.522 11.46H8.941V4.078h2.118v5.265h3.463z"
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-drag-item",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "10",
    cy: "6",
    r: "3.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "10",
    cy: "16",
    r: "3.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "10",
    cy: "26",
    r: "3.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "21",
    cy: "6",
    r: "3.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "21",
    cy: "16",
    r: "3.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "21",
    cy: "26",
    r: "3.5"
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-personal-data",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 19.2c0-2-1.4-3.7-3.3-4.2h-.1c.1 0 .1-.1.2-.1 1-.8 1.6-2 1.6-3.3 0-1.8-1.5-3.3-3.3-3.3-1.8 0-3.3 1.5-3.3 3.3 0 1.3.6 2.5 1.6 3.3l.1.1h-.1c-2 .7-3.3 2.1-3.3 4.2v1.4H18v-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 25.6c-2.3 1.6-4.8 2.5-5.7 2.8-.2.1-.4.1-.5 0-1.7-.6-10.1-3.7-10.1-9.8v-13c1.5-.6 6-2.1 10.4-2.1S22 5 23.5 5.6v8.3c.6-.1 1.1-.2 1.7-.2V4.5l-.5-.2c-.3-.1-5.9-2.5-11.7-2.5S1.7 4.2 1.4 4.3l-.5.2v14.1c0 7.2 8.7 10.6 11.3 11.5.3.1.5.1.8.1.3 0 .5 0 .8-.1 1.3-.4 3.9-1.4 6.3-3.1-.4-.5-.8-.9-1.1-1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25.3 15.8c-3.1 0-5.5 2.5-5.5 5.5s2.5 5.5 5.5 5.5 5.5-2.5 5.5-5.5-2.4-5.5-5.5-5.5zm-.7 7.8l-2.3-2.1.5-.6 1.7 1.6 3.2-3.5.6.5-3.7 4.1z"
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-romance",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M15.953 29.329l-12.6-12.7c-3.2-3.2-3.2-8.4 0-11.7 1.5-1.6 3.6-2.4 5.8-2.4 2.2 0 4.3.8 5.8 2.4l.9.9.9-.9c3.2-3.2 8.5-3.2 11.7 0 3.2 3.2 3.2 8.5 0 11.7l-12.5 12.7zm-6.8-24.6c-1.6 0-3.2.6-4.4 1.8-2.4 2.4-2.4 6.3 0 8.8l11.1 11.1 11.1-11.1c2.4-2.4 2.4-6.3 0-8.8-2.4-2.4-6.3-2.4-8.8 0l-2.4 2.4-2.4-2.4c-.9-1.2-2.6-1.8-4.2-1.8z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.953 29.329l-12.6-12.7c-3.2-3.2-3.2-8.4 0-11.7 1.5-1.6 3.6-2.4 5.8-2.4 2.2 0 4.3.8 5.8 2.4l.9.9.9-.9c3.2-3.2 8.5-3.2 11.7 0 3.2 3.2 3.2 8.5 0 11.7l-12.5 12.7zm-6.8-24.6c-1.6 0-3.2.6-4.4 1.8-2.4 2.4-2.4 6.3 0 8.8l11.1 11.1 11.1-11.1c2.4-2.4 2.4-6.3 0-8.8-2.4-2.4-6.3-2.4-8.8 0l-2.4 2.4-2.4-2.4c-.9-1.2-2.6-1.8-4.2-1.8z"
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-shopping",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M23.3 2H8.6c-1.1 0-2 .9-1.9 2v24c0 1.1.9 2 1.9 2h14.7c1.1 0 2-.9 1.9-2V4c.1-1.1-.8-2-1.9-2zM8.6 28V4H18v24H8.6zm14.7 0h-2.5V4h2.5v24z"
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "icon-warning",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17 24.1h-2v-2h2v2zm-2-11.7h2v8h-2v-8z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M29 28.3H3c-.4 0-.7-.2-.9-.5-.2-.3-.2-.7 0-1l13-22.5c.2-.3.5-.5.9-.5s.7.2.9.5l13 22.5c.2.3.2.7 0 1-.2.3-.5.5-.9.5zm-24.3-2h22.6L16 6.7 4.7 26.3z"
  })))));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconSelect);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./src/js/blocks/buttons.css":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./src/js/blocks/buttons.css ***!
  \*********************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".iis-block-buttons > .block-editor-inner-blocks > .block-editor-block-list__layout {\n\tdisplay: flex;\n}\n\n.iis-block-buttons > .block-editor-inner-blocks > .block-editor-block-list__layout > * {\n\tmargin: 10px 10px 0 0;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./src/js/blocks/column.css":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./src/js/blocks/column.css ***!
  \********************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".iis-block-column {\n\theight: 100%;\n\tpadding: 0 1rem;\n\tborder: 1px dotted #888;\n}\n\n.iis-block-column__heading {\n\tfont-family: sans-serif;\n\tfont-size: 14px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./src/js/blocks/grid.css":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./src/js/blocks/grid.css ***!
  \******************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".iis-block-grid > .block-editor-inner-blocks > .block-editor-block-list__layout {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n}\n\n.iis-block-grid > .block-editor-inner-blocks > .block-editor-block-list__layout > * {\n\tflex: 0 0 50%;\n\twidth: 50%;\n\tmargin-right: unset;\n\tmargin-left: unset;\n\tmax-width: none;\n\tbox-sizing: border-box;\n}\n\n.iis-block-grid > .block-editor-inner-blocks > .block-editor-block-list__layout > *[data-width=\"1/3\"] {\n\tflex: 0 0 33.333%;\n\twidth: 33.333%;\n}\n\n.iis-block-grid > .block-editor-inner-blocks > .block-editor-block-list__layout > *[data-width=\"1\"] {\n\tflex: 0 0 100%;\n\twidth: 100%;\n}\n\n.iis-block-grid > .block-editor-inner-blocks > .block-editor-block-list__layout > *[data-width=\"2/3\"] {\n\tflex: 0 0 66.666%;\n\twidth: 66.666%;\n}\n\n.iis-block-grid > .block-editor-inner-blocks > .block-editor-block-list__layout > *[data-type=\"iis/slide\"] {\n\tmargin-top: 0;\n\tmargin-bottom: 0;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./src/js/blocks/hero.css":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./src/js/blocks/hero.css ***!
  \******************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".iis-block-hero {\n\tposition: relative;\n\ttext-align: left;\n\tcolor: #fff;\n\tz-index: 1;\n}\n\n.iis-block-hero--no-image {\n\tcolor: #000;\n}\n\n.iis-block-hero--video {\n\tpadding-top: 56.25%;\n}\n\n.iis-block-hero--video iframe {\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n}\n\n.iis-block-hero__content {\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tdisplay: flex;\n\talign-items: flex-end;\n\ttext-shadow: 0 0 1rem rgba(0,0,0,.5);\n\tbackground-image: linear-gradient(180deg,hsla(0,0%,100%,0) 0,transparent 55%,#000);\n\tz-index: 1;\n}\n\n.iis-block-hero--no-image .iis-block-hero__content {\n\tposition: static;\n\tbackground: none;\n\ttext-shadow: none;\n}\n\n.iis-block-hero--dynamic .iis-block-hero__content {\n\tposition: static;\n\talign-items: flex-start;\n}\n\n.iis-block-hero--dynamic .iis-block-hero__content h1 {\n\t--minFontSize: 22px;\n\t--maxFontSize: 300px;\n\t--scaler: 10vw;\n\tfont-size: clamp(var(--minFontSize),var(--scaler),var(--maxFontSize));\n\tline-height: 1.2;\n\tmargin: 0;\n\tpadding: 0;\n}\n\n.iis-block-hero__inner-content {\n\tpadding: 4rem;\n\tmax-width: 80%;\n}\n\n.iis-block-hero--no-image .iis-block-hero__inner-content {\n\tpadding: 0 2rem;\n\tmax-width: none;\n}\n\n.iis-block-hero__image {\n\tmin-height: 27.77778rem;\n\tmax-height: 50vh;\n\t-o-object-fit: cover;\n\t   object-fit: cover;\n\twidth: 100%;\n\tdisplay: block;\n}\n\n.iis-block-hero--dynamic .iis-block-hero__image {\n\theight: 100%;\n\tmin-height: 0;\n\tmax-height: none;\n\tposition: absolute;\n\tz-index: -1;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n}\n\n.iis-block-hero__buttons .block-editor-block-list__layout {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.iis-block-hero__buttons .block-editor-block-list__layout > * {\n\tmargin-right: 20px;\n}\n\n.cyberspace a { color: #1f2a36; }\n.ocean a { color: #50b2fc; }\n.ocean-light a { color: #a7d8fd; }\n.ocean-dark a { color: #0477ce; }\n.ruby a { color: #ff4069; }\n.ruby-light a { color: #ff9fb4; }\n.ruby-dark a { color: #d9002f; }\n.jade a { color: #55c7b4; }\n.jade-light a { color: #aae3d9; }\n.jade-dark a { color: #2d897a; }\n.lemon a { color: #ffce2e; }\n.lemon-light a { color: #ffe696; }\n.peacock a { color: #c27fec; }\n.peacock-light a { color: #e0bff5; }\n.sandstone a { color: #f99963; }\n.sandstone-light a { color: #fcccb1; }\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./src/js/blocks/section.css":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./src/js/blocks/section.css ***!
  \*********************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".iis-block-section .rich-text::-moz-selection {\n\tbackground-color: #ff9fb4;\n}\n\n.iis-block-section .rich-text::selection {\n\tbackground-color: #ff9fb4;\n}\n\n.iis-block-section .rich-text::-moz-selection {\n\tbackground-color: #ff9fb4;\n}\n.iis-block-section--jade-light .rich-text::-moz-selection {\n\tbackground-color: #aae3d9;\n}\n.iis-block-section--jade-light .rich-text::selection {\n\tbackground-color: #aae3d9;\n}\n\n.iis-block-section--jade-light .rich-text::-moz-selection {\n\tbackground-color: #aae3d9;\n}\n\n.iis-block-section--peacock-light .rich-text::-moz-selection {\n\tbackground-color: #e0bff5;\n}\n\n.iis-block-section--peacock-light .rich-text::selection {\n\tbackground-color: #e0bff5;\n}\n\n.iis-block-section--peacock-light .rich-text::-moz-selection {\n\tbackground-color: #e0bff5;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./src/js/components/style.css":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./src/js/components/style.css ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.iis-icon-select {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\twidth: 280px !important;\n\theight: 250px !important;\n\toverflow: auto;\n}\n\n.iis-icon-select__icon {\n\tdisplay: flex;\n\tposition: relative;\n\tflex: 0 0 70px;\n\talign-items: center;\n\tjustify-content: center;\n\twidth: 70px;\n\theight: 70px;\n\tmargin: 0;\n\tpadding: 22px;\n\tborder: none;\n\toutline: none;\n\tbackground: none;\n}\n\n.iis-icon-select__icon.is-selected::after {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 10px;\n\tright: 10px;\n\tbottom: 10px;\n\tleft: 10px;\n\tborder: 2px solid #55c7b4;\n\tborder-radius: 50%;\n}\n\n.iis-icon-select__icon img {\n\tdisplay: block;\n\tmax-width: 100%;\n\theight: auto;\n\tmax-height: 100%;\n}\n\n.iis-icon-select__btn {\n\tposition: relative;\n}\n\n.iis-icon-select__btn .components-button {\n\tpadding: 0;\n}\n\n.iis-icon-select__btn .components-button::after {\n\tcontent: '';\n\tposition: absolute;\n\ttop: -1rem;\n\tright: -1rem;\n\tbottom: -1rem;\n\tleft: -1rem;\n}\n\n.iis-icon-select__icon svg {\n\twidth: 24px;\n\theight: 24px;\n\tcolor: #000;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./src/scss/blocks.scss":
/*!******************************!*\
  !*** ./src/scss/blocks.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/blocks/buttons.css":
/*!***********************************!*\
  !*** ./src/js/blocks/buttons.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_buttons_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./buttons.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./src/js/blocks/buttons.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_buttons_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_buttons_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/js/blocks/column.css":
/*!**********************************!*\
  !*** ./src/js/blocks/column.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_column_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./column.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./src/js/blocks/column.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_column_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_column_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/js/blocks/grid.css":
/*!********************************!*\
  !*** ./src/js/blocks/grid.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_grid_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./grid.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./src/js/blocks/grid.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_grid_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_grid_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/js/blocks/hero.css":
/*!********************************!*\
  !*** ./src/js/blocks/hero.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_hero_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./hero.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./src/js/blocks/hero.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_hero_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_hero_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/js/blocks/section.css":
/*!***********************************!*\
  !*** ./src/js/blocks/section.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_section_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./section.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./src/js/blocks/section.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_section_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_section_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/js/components/style.css":
/*!*************************************!*\
  !*** ./src/js/components/style.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./style.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./src/js/components/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_style_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_style_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/@internetstiftelsen/styleguide/src/configurations/icons.json":
/*!***********************************************************************************!*\
  !*** ./node_modules/@internetstiftelsen/styleguide/src/configurations/icons.json ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"id":"search","name":"Search"},{"id":"arrow-forwards","name":"Arrow Forwards"},{"id":"arrow-backwards","name":"Arrow Backwards"},{"id":"arrow-down","name":"Arrow Down"},{"id":"arrow-variant","name":"Arrow Variant"},{"id":"hamburger","name":"Hamburger"},{"id":"close","name":"Close"},{"id":"check","name":"Check"},{"id":"quote","name":"Quote"},{"id":"file","name":"File"},{"id":"download","name":"Download"},{"id":"upload","name":"Upload"},{"id":"filter","name":"Filter"},{"id":"read","name":"Read"},{"id":"pin","name":"Pin"},{"id":"user","name":"User"},{"id":"language","name":"Language"},{"id":"linkedin","name":"Linkedin"},{"id":"facebook","name":"Facebook"},{"id":"instagram","name":"Instagram"},{"id":"twitter","name":"Twitter"},{"id":"external-link","name":"External Link"},{"id":"app-share","name":"App Share"},{"id":"print","name":"Print"},{"id":"chapters","name":"Chapters"},{"id":"article","name":"Article"},{"id":"padlock","name":"Padlock"},{"id":"trash","name":"Trash"},{"id":"link","name":"Link"},{"id":"share","name":"Share"},{"id":"questionmark","name":"Questionmark"},{"id":"info","name":"Info"},{"id":"contrast","name":"Contrast"},{"id":"gauge","name":"Gauge"},{"id":"backward-15","name":"Backward 15"},{"id":"play","name":"Play"},{"id":"forward-60","name":"Forward 60"},{"id":"pause","name":"Pause"},{"id":"author","name":"Author"},{"id":"speaker","name":"Speaker"},{"id":"mute","name":"Mute"},{"id":"settings","name":"Settings"},{"id":"lte","name":"Lte"},{"id":"wifi","name":"Wifi"},{"id":"reception","name":"Reception"},{"id":"2g","name":"2g"},{"id":"3g","name":"3g"},{"id":"4g","name":"4g"},{"id":"5g","name":"5g"},{"id":"latency","name":"Latency"},{"id":"spinner","name":"Spinner"},{"id":"spinner-white","name":"Spinner White"},{"id":"3d","name":"3d"},{"id":"accessibility","name":"Accessibility"},{"id":"cafe","name":"Cafe"},{"id":"capacity","name":"Capacity"},{"id":"display","name":"Display"},{"id":"email","name":"Email"},{"id":"headset","name":"Headset"},{"id":"phone","name":"Phone"},{"id":"plus","name":"Plus"},{"id":"podcast","name":"Podcast"},{"id":"richtext-bold","name":"Richtext Bold"},{"id":"richtext-bullet-list","name":"Richtext Bullet List"},{"id":"richtext-italic","name":"Richtext Italic"},{"id":"streaming","name":"Streaming"},{"id":"time","name":"Time"},{"id":"drag-item","name":"Drag Item"},{"id":"personal-data","name":"Personal Data"},{"id":"romance","name":"Romance"},{"id":"shopping","name":"Shopping"},{"id":"warning","name":"Warning"}]');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/dist/js/blocks": 0,
/******/ 			"dist/css/blocks": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkiis_blocks"] = self["webpackChunkiis_blocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["dist/css/blocks"], () => (__webpack_require__("./src/js/blocks.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["dist/css/blocks"], () => (__webpack_require__("./src/scss/blocks.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;