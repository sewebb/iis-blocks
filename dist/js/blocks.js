!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=3)}([function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),l=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(l).concat([o]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var l=this[o][0];"number"==typeof l&&(r[l]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){var r,o,l={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),i=function(e){var t={};return function(e){return void 0===t[e]&&(t[e]=function(e){return document.querySelector(e)}.call(this,e)),t[e]}}(),c=null,s=0,u=[],d=n(12);function p(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=l[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(y(r.parts[a],t))}else{var i=[];for(a=0;a<r.parts.length;a++)i.push(y(r.parts[a],t));l[r.id]={id:r.id,refs:1,parts:i}}}}function f(e,t){for(var n=[],r={},o=0;o<e.length;o++){var l=e[o],a=t.base?l[0]+t.base:l[0],i={css:l[1],media:l[2],sourceMap:l[3]};r[a]?r[a].parts.push(i):n.push(r[a]={id:a,parts:[i]})}return n}function m(e,t){var n=i(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),u.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function g(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=u.indexOf(e);t>=0&&u.splice(t,1)}function b(e){var t=document.createElement("style");return e.attrs.type="text/css",h(t,e.attrs),m(e,t),t}function h(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function y(e,t){var n,r,o,l;if(t.transform&&e.css){if(!(l=t.transform(e.css)))return function(){};e.css=l}if(t.singleton){var a=s++;n=c||(c=b(t)),r=w.bind(null,n,a,!1),o=w.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",h(t,e.attrs),m(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,l=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||l)&&(r=d(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(a),i&&URL.revokeObjectURL(i)}.bind(null,n,t),o=function(){g(n),n.href&&URL.revokeObjectURL(n.href)}):(n=b(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){g(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=f(e,t);return p(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var a=n[o];(i=l[a.id]).refs--,r.push(i)}e&&p(f(e,t),t);for(o=0;o<r.length;o++){var i;if(0===(i=r[o]).refs){for(var c=0;c<i.parts.length;c++)i.parts[c]();delete l[i.id]}}}};var v,k=(v=[],function(e,t){return v[e]=t,v.filter(Boolean).join("\n")});function w(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=k(t,o);else{var l=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(l,a[t]):e.appendChild(l)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var a=wp.i18n.__,i=wp.components,c=i.SelectControl,s=i.Notice,u=i.TextControl,d=wp.element,p=d.Component,f=d.Fragment,m=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=Array(a),c=0;c<a;c++)i[c]=arguments[c];return n=o=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o.state={loading:!0,data:[],value:o.props.value,error:!1,search:""},o.searchThrottle=null,o.fetch=function(){o.setState({loading:!0,error:!1});var e=o.props.api;e.indexOf("?")>-1?e+="&search="+o.state.search:e+="?search="+o.state.search,wp.apiFetch({path:e}).then(function(e){if("data"in e&&"status"in e.data&&e.data.status>299)throw new Error(e.message);return e}).then(function(e){return"object"===(void 0===e?"undefined":r(e))?Object.values(e):e}).then(function(e){return e.map(function(e){return{value:o.props.value_key(e),label:o.props.label_key(e)}})}).then(function(e){return o.setState({items:e,loading:!1})}).catch(function(e){return o.setState({error:e,loading:!1})})},o.search=function(e){o.setState({search:e},function(){clearTimeout(o.searchThrottle),o.searchThrottle=setTimeout(function(){o.fetch()},250)})},l(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,p),o(t,[{key:"componentDidMount",value:function(){this.fetch()}},{key:"render",value:function(){var e=this;if(this.state.loading&&!this.props.search)return React.createElement("span",{className:"components-spinner",style:{float:"none"}});if(this.state.error){var t="object"===r(this.state.error)?this.state.error.message:this.state.error;return React.createElement(s,{status:"error",actions:[{label:a("Try again"),onClick:this.fetch}]},React.createElement("p",null,t))}return React.createElement(f,null,this.props.search&&React.createElement(u,{label:this.props.label,value:this.state.search,placeholder:a("Search"),onChange:this.search,disabled:this.props.disabled}),this.state.loading&&React.createElement("p",null,React.createElement("span",{className:"components-spinner",style:{float:"none"}})),!this.state.loading&&this.state.items.length>0&&React.createElement(c,{label:this.props.search?null:this.props.label,help:this.props.help,options:[this.props.placeholder].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(this.state.items)),value:this.state.value,onChange:function(t){e.props.set(t),e.setState({value:t})},disabled:this.props.disabled}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.value!==t.value?{value:e.value}:null}}]),t}();t.default=m,m.defaultProps={set:function(){}}},function(e,t,n){n(4),e.exports=n(27)},function(e,t,n){"use strict";n(5),n(6),n(7),n(8),n(9),n(13),n(14),n(15),n(18),n(21),n(24),n(25),n(26)},function(e,t,n){"use strict";var r=wp.i18n.__,o=wp.blocks,l=o.registerBlockType,a=o.createBlock,i=wp.editor.RichText;l("iis/preamble",{title:r("Preamble"),category:"iis",icon:"editor-paragraph",keywords:[r("preamble"),r("text"),r("paragraph")],attributes:{content:{type:"string",default:""}},edit:function(e){var t=e.attributes,n=e.setAttributes;return React.createElement("div",{style:{fontWeight:"bold",fontSize:"bigger"}},React.createElement(i,{tagName:"p",value:t.content,placeholder:r("Preamble"),onChange:function(e){return n({content:e})}}))},save:function(e){var t=e.attributes;return React.createElement("p",{className:"preamble",dangerouslySetInnerHTML:{__html:t.content}})},transforms:{from:[{type:"block",blocks:["core/paragraph"],transform:function(e){return a("iis/preamble",{content:e.content})}}]}})},function(e,t,n){"use strict";var r=wp.i18n.__,o=wp.blocks.registerBlockType,l=wp.editor,a=l.InspectorControls,i=l.InnerBlocks,c=wp.components,s=c.PanelBody,u=c.ToggleControl;o("iis/info",{title:r("Info box"),category:"iis",icon:"megaphone",keywords:[r("info"),r("facts"),r("message")],attributes:{big:{type:"boolean",default:!1}},edit:function(e){var t=e.attributes,n=e.setAttributes,r=["core/paragraph"],o=[],l=null,c="iis-info-block";return t.big?(o=[["core/paragraph"]],l="all",c+=" "+c+"--big"):(r.push("core/heading"),r.push("core/list")),React.createElement("div",null,React.createElement(a,null,React.createElement(s,null,React.createElement(u,{label:"Big",checked:t.big,onChange:function(e){return n({big:e})}}))),React.createElement("div",{className:c},React.createElement(i,{allowedBlocks:r,template:o,templateLock:l})))},save:function(e){var t=e.attributes;return React.createElement("div",{className:"iis-m-info-box "+(t.big?"iis-m-info-box--big":"")},React.createElement(i.Content,null))}})},function(e,t,n){"use strict";var r=wp.i18n.__,o=wp.blocks.registerBlockType,l=wp.editor,a=l.RichText,i=l.MediaUpload,c=l.MediaUploadCheck,s=wp.element.Fragment,u=wp.components,d=u.Button,p=u.TextControl;o("iis/download",{title:r("Download"),category:"iis",icon:"download",keywords:[r("download"),r("pdf"),r("attach")],attributes:{title:{type:"string",default:null},content:{type:"string",default:null},file:{type:"string",default:""}},edit:function(e){var t=e.attributes,n=e.setAttributes;return React.createElement("div",null,React.createElement(a,{identifier:"title",wrapperClassName:"wp-block-heading",tagName:"h3",value:t.title,onChange:function(e){return n({title:e})},placeholder:r("File title")}),React.createElement(a,{identifier:"description",wrapperClassName:"wp-block-paragraph",tagName:"p",value:t.content,onChange:function(e){return n({content:e})},placeholder:r("File description")}),React.createElement("div",{style:{marginTop:"16px"}},!t.file&&React.createElement(s,null,React.createElement(c,null,React.createElement(i,{onSelect:function(e){var t=e.url;return n({file:t})},value:t.file,render:function(e){var t=e.open;return React.createElement(d,{className:"components-button editor-post-featured-image__toggle",onClick:t},"Upload File")}})),React.createElement("p",null,React.createElement("em",null,"or"))),React.createElement(p,{label:r("File URL"),value:t.file,onChange:function(e){return n({file:e})}}),t.file&&React.createElement("div",null,React.createElement(d,{className:"components-button is-button is-default",onClick:function(){return n({file:""})}},"Remove"))))},save:function(){return null}})},function(e,t,n){"use strict";var r,o=n(2),l=(r=o)&&r.__esModule?r:{default:r};var a=wp.i18n.__,i=wp.blocks.registerBlockType,c=wp.editor.InspectorControls,s=wp.components.PanelBody;i("iis/postarchive",{title:a("Post Archive","iis-blocks"),category:"iis",icon:"media-archive",keywords:[a("archive","iis-blocks")],attributes:{postType:{type:"string",default:!1}},edit:function(e){var t=e.attributes,n=e.setAttributes;return React.createElement("div",null,React.createElement("div",null,React.createElement("strong",null,"« Post Archive »")),React.createElement(c,null,React.createElement(s,null,React.createElement(l.default,{label:a("Select post type","iis-blocks"),placeholder:{value:null,label:a("Post type","iis-blocks")},api:"/wp/v2/types",value_key:function(e){return e.slug},label_key:function(e){return e.name},value:t.postType,set:function(e){return n({postType:e})}}))))},save:function(){return null}})},function(e,t,n){"use strict";n(10);var r=wp.i18n.__,o=wp.element.Fragment,l=wp.blocks.registerBlockType,a=wp.components,i=a.PanelBody,c=a.Button,s=wp.editor,u=s.InspectorControls,d=s.MediaUpload,p=s.MediaUploadCheck,f=s.RichText,m=s.InnerBlocks;l("iis/hero",{title:r("Hero"),category:"iis",icon:"megaphone",keywords:[r("hero"),r("title")],supports:{align:["full","wide"]},attributes:{mediaUrl:{type:"string",default:null},mediaId:{type:"number",default:null},title:{type:"string",default:""},introText:{type:"string",default:""},align:{type:"string",default:"wide"}},edit:function(e){var t=e.attributes,n=e.setAttributes,l=null;return t.mediaUrl&&(l=React.createElement("img",{src:t.mediaUrl,alt:"",style:{width:"100%",height:"auto"}})),React.createElement(o,null,React.createElement(u,null,React.createElement(i,{title:"Background image"},React.createElement("p",null,l),null===t.mediaUrl&&React.createElement(p,null,React.createElement(d,{onSelect:function(e){return n({mediaUrl:e.sizes.full.url,mediaId:e.id})},type:"image",value:t.mediaUrl,render:function(e){var t=e.open;return React.createElement(c,{className:"components-button editor-post-featured-image__toggle",onClick:t},"Upload Image!")}})),null!==t.mediaUrl&&React.createElement(c,{className:"components-button is-button is-default",onClick:function(){return n({mediaUrl:null,mediaId:null})}},"Remove background"))),React.createElement("div",{className:"iis-block-hero "+(t.mediaId?null:"iis-block-hero--no-image")},t.mediaUrl&&React.createElement("img",{src:t.mediaUrl,className:"iis-block-hero__image"}),React.createElement("div",{className:"iis-block-hero__content"},React.createElement("div",{className:"iis-block-hero__inner-content"},React.createElement(f,{tagName:"h1",value:t.title,placeholder:r("Title"),onChange:function(e){return n({title:e})}}),React.createElement(f,{tagName:"p",value:t.introText,placeholder:r("Content"),onChange:function(e){return n({introText:e})}}),React.createElement("div",{className:"iis-block-hero__buttons"},React.createElement(m,{allowedBlocks:["iis/button"]}))))))},save:function(){return React.createElement(m.Content,null)}})},function(e,t,n){var r=n(11);"string"==typeof r&&(r=[[e.i,r,""]]);var o={transform:void 0};n(1)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,".iis-block-hero{position:relative;text-align:left;color:#fff}.iis-block-hero--no-image{color:#000}.iis-block-hero__content{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:flex-end;text-shadow:0 0 1rem rgba(0,0,0,.5);background-image:linear-gradient(180deg,hsla(0,0%,100%,0),transparent 55%,#000)}.iis-block-hero--no-image .iis-block-hero__content{position:static;background:none;text-shadow:none}.iis-block-hero__inner-content{padding:4rem;max-width:80%}.iis-block-hero--no-image .iis-block-hero__inner-content{padding:0 2rem;max-width:none}.iis-block-hero__image{min-height:27.77778rem;max-height:50vh;object-fit:cover;width:100%;display:block}.iis-block-hero__buttons .block-editor-block-list__layout{display:flex;align-items:center}.iis-block-hero__buttons .block-editor-block-list__layout>*{margin-right:20px}",""])},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,l=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(l)?e:(o=0===l.indexOf("//")?l:0===l.indexOf("/")?n+l:r+l.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,t,n){"use strict";var r=wp.i18n.__,o=wp.blocks.registerBlockType,l=wp.editor,a=l.InspectorControls,i=l.RichText,c=l.withColors,s=l.PanelColorSettings,u=wp.components,d=u.PanelBody,p=u.SelectControl,f=u.TextControl;o("iis/button",{title:r("Button"),category:"iis",icon:"admin-links",keywords:[r("button")],attributes:{size:{type:"string",default:"regular"},text:{type:"string",default:""},link:{type:"string",default:""},buttonColor:{type:"string",default:null}},edit:c({buttonColor:"color"})(function(e){var t=e.attributes,n=e.setAttributes,o=e.buttonColor,l=e.setButtonColor,c={display:"inline-block",position:"relative",margin:"0",padding:".556rem 1rem",overflow:"hidden",border:"0",borderRadius:".25rem",backgroundColor:o.color?o.color:"#0477ce",color:"#fff",fontFamily:"sans-serif",textDecoration:"none",textShadow:"none",hyphens:"auto",cursor:"pointer"};return"small"===t.size?(c.padding=".3rem .75rem",c.fontSize=".88889rem"):"large"===t.size?(c.padding=".8rem 2rem",c.fontSize="1.33333rem"):c.fontSize=".88889rem",!o.slug||["jade-dark","ruby-dark","ocean-dark","cyberspace"].includes(o.slug)?c.color="#fff":c.color="#1f2a36",React.createElement("div",null,React.createElement(a,null,React.createElement(d,null,React.createElement(p,{label:r("Size"),options:[{value:"small",label:"Small"},{value:"regular",label:"Default"},{value:"large",label:"Large"}],value:t.size,onChange:function(e){return n({size:e})}}),React.createElement(f,{label:r("URL"),value:t.link,help:t.link?React.createElement("a",{style:{display:"block",marginTop:"1rem"},href:t.link,target:"_blank"},r("Test link")):null,type:"url",onChange:function(e){return n({link:e})}})),React.createElement(s,{title:r("Color Settings"),colorSettings:[{value:o.color,onChange:l,label:r("Button Color")}]})),React.createElement("div",null,React.createElement("div",{style:c},React.createElement(i,{tagName:"span",value:t.text,placeholder:r("Button text"),onChange:function(e){return n({text:e})}}))))}),save:function(){return null}})},function(e,t,n){"use strict";var r,o=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,l=void 0;try{for(var a,i=e[Symbol.iterator]();!(r=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,l=e}finally{try{!r&&i.return&&i.return()}finally{if(o)throw l}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l=n(2),a=(r=l)&&r.__esModule?r:{default:r};var i=wp.i18n.__,c=wp.element,s=c.Fragment,u=c.useState,d=c.useEffect,p=wp.blocks.registerBlockType,f=wp.components,m=f.CheckboxControl,g=f.PanelBody,b=f.Button,h=f.TextControl,y=wp.editor,v=y.InspectorControls,k=y.MediaUpload,w=y.MediaUploadCheck,R=y.RichText,E=y.InnerBlocks;p("iis/puff",{title:i("Post puff","iis-blocks"),category:"iis",icon:"format-aside",keywords:[i("card","iis-blocks"),i("teaser","iis-blocks"),i("puff","iis-blocks")],supports:{align:["right","wide"]},attributes:{custom:{type:"boolean",default:!1},postId:{type:"string",default:null},postPreview:{type:"object",default:{}},showAsTeaser:{type:"boolean",default:!1},showOnMobile:{type:"boolean",default:!1},displayTags:{type:"boolean",default:!1},displayExcerpt:{type:"boolean",default:!0},imageSize:{type:"string",default:null},imageId:{type:"number",default:null},title:{type:"string",default:""},text:{type:"string",default:""},url:{type:"string",default:null},align:{type:"string",default:null},button:{type:"boolean",default:!1},displayDates:{type:"boolean",default:!1}},edit:function(e){var t=e.attributes,n=e.setAttributes,r=u(null),l=o(r,2),c=l[0],p=l[1],f=u(null),y=o(f,2),C=y[0],x=y[1],_=t.showAsTeaser,T=t.custom,B={position:"relative",border:"1px solid #bbb",borderRadius:".25rem",overflow:"hidden"},S={width:"100%",display:"block",borderRadius:".25rem .25rem 0 0"},I=null;return C&&(I=React.createElement("img",{src:C,alt:"",style:{width:"100%",height:"auto"}})),t.showAsTeaser||"wide"!==t.align||(B.display="flex",S.maxWidth="50%",S.height="100%",S.flex="0 0 100%",S.width="100%",S.borderRadius=".25rem 0 0 .25rem"),d(function(){if(!t.imageId)return x(null),void p(null);wp.data.subscribe(function(){var e=wp.data.select("core").getMedia(t.imageId);e&&p(e.media_details.sizes)}),wp.data.select("core").getMedia(t.imageId)},[t.imageId]),d(function(){if(c&&t.imageId){var e=t.imageSize;!e&&t.showAsTeaser?e="puff-teaser-image":e||t.showAsTeaser||(e="puff-image"),e in c||(e="full"),x(c[e].source_url)}},[c,t.imageSize,t.showAsTeaser,t.imageId]),React.createElement(s,null,React.createElement(v,null,React.createElement(g,{title:"Content"},React.createElement(m,{label:"Custom content",checked:T,onChange:function(e){return n({custom:e})}}),T&&React.createElement(h,{label:i("Link","iis-blocks"),placeholder:i("/link/to/here","iis-blocks"),value:t.url,onChange:function(e){return n({url:e})}}),React.createElement(m,{label:"Button",checked:t.button,onChange:function(e){return n({button:e})}})),React.createElement(g,{title:"Display"},React.createElement(m,{label:"Show as teaser",checked:_,onChange:function(e){return n({showAsTeaser:e})}}),"right"===t.align&&React.createElement(m,{label:"Show on mobile",checked:t.showOnMobile,onChange:function(e){return n({showOnMobile:e})}}),!T&&React.createElement(s,null,React.createElement(m,{label:i("Display tags/categories","iis-blocks"),checked:t.displayTags,onChange:function(e){return n({displayTags:e})}}),React.createElement(m,{label:"Display excerpt",checked:t.displayExcerpt,onChange:function(e){return n({displayExcerpt:e})}}),React.createElement(m,{label:"Display dates",checked:t.displayDates,onChange:function(e){return n({displayDates:e})}})),React.createElement(a.default,{label:i("Image size","iis-blocks"),placeholder:{value:"",label:i("Auto","iis-blocks")},api:"/iis-blocks/v1/image-sizes",value_key:function(e){return e.size},label_key:function(e){return e.name+" ("+e.width+"x"+e.height},value:t.imageSize,set:function(e){return n({imageSize:e})}})),t.custom&&React.createElement(g,{title:"Image"},React.createElement("div",null,I),null===C&&React.createElement(w,null,React.createElement(k,{onSelect:function(e){return n({imageId:e.id})},type:"image",value:C,render:function(e){var t=e.open;return React.createElement(b,{className:"components-button editor-post-featured-image__toggle",onClick:t},"Upload Image!")}})),null!==C&&React.createElement(b,{className:"components-button is-button is-default",onClick:function(){return n({imageId:null})}},"Remove image"))),React.createElement("div",{style:B},T&&C&&React.createElement("img",{src:C,alt:"",style:_?{width:"100%",height:"100%",minHeight:"300px",display:"block",objectFit:"cover"}:S}),React.createElement("div",{style:_&&T&&C?{display:"flex",flexDirection:"column",alignContent:"stretch",justifyContent:"flex-end",position:"absolute",right:0,bottom:0,left:0,textShadow:"0 0 1rem rgba(0,0,0,.5)",backgroundImage:"linear-gradient(180deg,hsla(0,0%,100%,0) 0,transparent 55%,#000)",padding:"2rem",color:"#fff"}:{padding:"1rem"}},!T&&React.createElement(a.default,{label:i("Select post","iis-blocks"),placeholder:{value:null,label:i("Choose a post","iis-blocks")},api:"/iis-blocks/v1/puff-posts?include="+t.postId,value_key:function(e){return e.ID},label_key:function(e){return e.post_title},value:t.postId,set:function(e){return n({postId:e})},search:!0}),T&&React.createElement("div",null,React.createElement(R,{tagName:"h1",value:t.title,placeholder:i("Title"),style:{margin:0},onChange:function(e){return n({title:e})}}),React.createElement(R,{tagName:"div",value:t.text,placeholder:i("Content"),onChange:function(e){return n({text:e})}})),t.button&&React.createElement(E,{allowedBlocks:["iis/button"],template:[["iis/button"]],templateLock:"all"}))))},save:function(e){return e.attributes.button?React.createElement(E.Content,null):null}})},function(e,t,n){"use strict";n(16);var r=wp.i18n.__,o=wp.blocks.registerBlockType,l=wp.editor,a=l.InspectorControls,i=l.InnerBlocks,c=wp.data.useSelect,s=wp.components,u=s.PanelBody,d=s.ToggleControl;o("iis/grid",{title:r("Grid"),category:"iis",icon:"megaphone",keywords:[r("grid","iis-blocks"),r("columns","iis-blocks"),r("column","iis-blocks")],supports:{align:["full","center"]},attributes:{align:{type:"string",default:"center"},asymmetric:{type:"boolean",default:!1}},getEditWrapperProps:function(e){return"center"===e.align?{"data-align":"wide"}:{}},edit:function(e){var t=e.clientId,n=e.attributes,r=e.setAttributes,o=c(function(e){var n=e("core/block-editor"),r=n.getBlockOrder,o=n.getBlockRootClientId;return{hasChildBlocks:r(t).length>0,rootClientId:o(t)}},[t]).hasChildBlocks;return React.createElement("div",{className:"iis-block-grid"},React.createElement(a,null,React.createElement(u,null,React.createElement(d,{label:"Asymmetric",checked:n.asymmetric,onChange:function(e){return r({asymmetric:e})}}))),React.createElement(i,{allowedBlocks:["iis/column"],template:[["iis/column"],["iis/column"]],orientation:"horizontal",renderAppender:o?void 0:function(){return React.createElement(i.ButtonBlockAppender,null)}}))},save:function(){return React.createElement(i.Content,null)}})},function(e,t,n){var r=n(17);"string"==typeof r&&(r=[[e.i,r,""]]);var o={transform:void 0};n(1)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,'.iis-block-grid>.block-editor-inner-blocks>.block-editor-block-list__layout{display:flex;flex-wrap:wrap}.iis-block-grid>.block-editor-inner-blocks>.block-editor-block-list__layout>*{flex:0 0 50%;width:50%;margin-right:unset;margin-left:unset;max-width:none}.iis-block-grid>.block-editor-inner-blocks>.block-editor-block-list__layout>[data-width="1/3"]{flex:0 0 33.333%;width:33.333%}.iis-block-grid>.block-editor-inner-blocks>.block-editor-block-list__layout>[data-width="1"]{flex:0 0 100%;width:100%}.iis-block-grid>.block-editor-inner-blocks>.block-editor-block-list__layout>[data-width="2/3"]{flex:0 0 66.666%;width:66.666%}',""])},function(e,t,n){"use strict";n(19);var r=wp.i18n.__,o=wp.element.Fragment,l=wp.blocks.registerBlockType,a=wp.components,i=a.PanelBody,c=a.SelectControl,s=wp.data.useSelect,u=wp.editor,d=u.InspectorControls,p=u.InnerBlocks,f=[{label:"1/3",value:"1/3"},{label:"1/2",value:"1/2"},{label:"2/3",value:"2/3"},{label:"Full width",value:"1"}];l("iis/column",{title:r("Column"),category:"iis",icon:"megaphone",keywords:[r("grid","iis-blocks"),r("columns","iis-blocks"),r("column","iis-blocks")],parent:["iis/grid"],attributes:{columnWidth:{type:"string",default:"1/2"}},getEditWrapperProps:function(e){var t=e.columnWidth;return t?{"data-width":t}:{}},edit:function(e){var t=e.attributes,n=e.setAttributes,r=e.clientId,l=t.columnWidth,a=s(function(e){var t=e("core/block-editor"),n=t.getBlockOrder,o=t.getBlockRootClientId;return{hasChildBlocks:n(r).length>0,rootClientId:o(r)}},[r]).hasChildBlocks;return React.createElement(o,null,React.createElement(d,null,React.createElement(i,{title:"Column width"},React.createElement(c,{label:"Width",onChange:function(e){return n({columnWidth:e})},options:f,value:l}))),React.createElement("div",{className:"iis-block-column"},React.createElement("div",{className:"iis-block-column__content"},React.createElement(p,{renderAppender:a?void 0:function(){return React.createElement(p.ButtonBlockAppender,null)}}))))},save:function(){return React.createElement(p.Content,null)}})},function(e,t,n){var r=n(20);"string"==typeof r&&(r=[[e.i,r,""]]);var o={transform:void 0};n(1)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,".iis-block-column{height:100%;padding:0 1rem;border:1px dotted #888}.iis-block-column__heading{font-family:sans-serif;font-size:14px}",""])},function(e,t,n){"use strict";n(22);var r=wp.i18n.__,o=wp.element.Fragment,l=wp.blocks.registerBlockType,a=wp.editor,i=a.InspectorControls,c=a.InnerBlocks,s=a.withColors,u=a.PanelColorSettings,d=wp.components,p=d.PanelBody,f=d.ToggleControl,m=d.SelectControl;l("iis/section",{title:r("Section"),category:"iis",icon:"align-center",keywords:[r("section")],attributes:{white:{type:"boolean",default:!1},align:{type:"string",default:"full"},highlightColor:{type:"string",default:"ruby-light"},decoration:{type:"string",default:null},style:{type:"string",default:"landing-page"},backgroundColor:{type:"string",default:null}},supports:{align:["full"]},edit:s({highlightColor:"color",backgroundColor:"background"})(function(e){var t=e.attributes,n=e.setAttributes,l=e.highlightColor,a=e.setHighlightColor,s=e.backgroundColor,d=e.setBackgroundColor,g={backgroundColor:t.white?"#fff":"#ededed",border:t.white?"1px dashed #ededed":null,padding:"20px 0"};"colored-background"===t.style&&s&&(g.backgroundColor=s.color);var b="iis-block-section iis-block-section--"+l.slug;return React.createElement("div",{className:b},React.createElement(i,null,React.createElement(p,{title:"Design"},React.createElement(m,{label:"Style",onChange:function(e){return n({style:e})},options:[{label:"Landing page",value:"landing-page"},{label:"Colored background",value:"colored-background"}],value:t.style}),"landing-page"===t.style&&React.createElement(o,null,React.createElement(f,{label:"White",checked:t.white,onChange:function(e){return n({white:e})}}),React.createElement(m,{label:"Decoration",onChange:function(e){return n({decoration:e})},options:[{label:"None",value:null},{label:"Rectangle left",value:"rectangle-left"},{label:"Rectangle right",value:"rectangle-right"}],value:t.decoration}))),"landing-page"===t.style&&React.createElement(u,{title:r("Color settings"),colorSettings:[{colors:[{name:r("Ruby"),slug:"ruby-light",color:"#ff9fb4"},{name:r("Peacock"),slug:"peacock-light",color:"#e0bff5"},{name:r("Jade"),slug:"jade-light",color:"#aae3d9"}],value:l.color,onChange:a,label:r("Highlight Color")}]}),"colored-background"===t.style&&React.createElement(u,{title:r("Color settings"),colorSettings:[{colors:[{name:r("Ruby"),slug:"rub-light",color:"#ff9fb4"},{name:r("Peacock"),slug:"peacock-light",color:"#e0bff5"},{name:r("Jade"),slug:"jade-light",color:"#aae3d9"},{name:r("Sandstone"),slug:"sandstone-light",color:"#fcccb1"},{name:r("Lemon"),slug:"lemon-light",color:"#ffe696"},{name:r("Ocean"),slug:"ocean-light",color:"#a7d8fd"}],value:s.color,onChange:d,label:r("Background Color")}]})),React.createElement("div",{style:g},React.createElement(c,null)))}),save:function(){return React.createElement(c.Content,null)}})},function(e,t,n){var r=n(23);"string"==typeof r&&(r=[[e.i,r,""]]);var o={transform:void 0};n(1)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,".iis-block-section .rich-text::selection{background-color:#ff9fb4}.iis-block-section .rich-text::-moz-selection{background-color:#ff9fb4}.iis-block-section--jade-light .rich-text::selection{background-color:#aae3d9}.iis-block-section--jade-light .rich-text::-moz-selection{background-color:#aae3d9}.iis-block-section--peacock-light .rich-text::selection{background-color:#e0bff5}.iis-block-section--peacock-light .rich-text::-moz-selection{background-color:#e0bff5}",""])},function(e,t,n){"use strict";var r=wp.i18n.__,o=wp.blocks.registerBlockType,l=wp.editor,a=(l.InnerBlocks,l.RichText);o("iis/section-header",{title:r("Section Header"),category:"iis",icon:"align-center",keywords:[r("section"),r("title")],attributes:{title:{type:"string",default:""},text:{type:"string",default:""},preTitle:{type:"string",default:""}},parent:"iis/section",edit:function(e){var t=e.attributes,n=e.setAttributes;return React.createElement("div",{style:{paddingBottom:"0.5rem",borderBottom:"1px solid #ccc"}},React.createElement(a,{tagName:"span",value:t.preTitle,placeholder:r("Content"),style:{fontSize:"small",textTransform:"uppercase"},onChange:function(e){return n({preTitle:e})}}),React.createElement(a,{tagName:"h1",value:t.title,placeholder:r("Title"),style:{marginTop:0},onChange:function(e){return n({title:e})}}),React.createElement(a,{tagName:"p",value:t.text,placeholder:r("Content"),onChange:function(e){return n({text:e})}}))},save:function(){return null}})},function(e,t,n){"use strict";var r=wp.i18n.__;(0,wp.blocks.registerBlockType)("iis/subpages",{title:r("Submenu","iis-blocks"),category:"iis",icon:"admin-page",keywords:[r("pages","iis-blocks"),r("sub","iis-blocks")],supports:{align:["right","wide"]},attributes:{align:{type:"string",default:"right"}},edit:function(e){var t=e.attributes;return React.createElement("div",{style:{width:"right"===t.align?"300px":"auto",padding:"20px",border:"1px solid #eee"}},React.createElement("strong",null,"« "+r("Submenu","iis-blocks")+" »"))},save:function(){return null}})},function(e,t,n){"use strict";var r=wp.i18n.__,o=wp.blocks.registerBlockType,l=wp.editor.InnerBlocks;o("iis/sidebar",{title:r("Sidebar"),category:"iis",icon:"megaphone",keywords:[r("aside"),r("sidebar"),r("content"),r("free")],supports:{align:["right"]},attributes:{align:{type:"string",default:"right"}},edit:function(){return React.createElement("div",{style:{width:"300px",margin:"0 0 10px 10px",padding:"20px",border:"1px solid #eee"}},React.createElement(l,null))},save:function(){return React.createElement("aside",{className:"alignright"},React.createElement(l.Content,null))}})},function(e,t){}]);