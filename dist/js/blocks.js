!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=2)}([function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(i=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),a=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(a).concat([o]).join("\n")}var i;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<e.length;o++){var i=e[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(e,t,n){var r,o,a={},i=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),l=function(e){var t={};return function(e){return void 0===t[e]&&(t[e]=function(e){return document.querySelector(e)}.call(this,e)),t[e]}}(),c=null,s=0,u=[],p=n(16);function f(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=a[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(v(r.parts[i],t))}else{var l=[];for(i=0;i<r.parts.length;i++)l.push(v(r.parts[i],t));a[r.id]={id:r.id,refs:1,parts:l}}}}function d(e,t){for(var n=[],r={},o=0;o<e.length;o++){var a=e[o],i=t.base?a[0]+t.base:a[0],l={css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(l):n.push(r[i]={id:i,parts:[l]})}return n}function h(e,t){var n=l(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),u.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function m(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=u.indexOf(e);t>=0&&u.splice(t,1)}function g(e){var t=document.createElement("style");return e.attrs.type="text/css",b(t,e.attrs),h(e,t),t}function b(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function v(e,t){var n,r,o,a;if(t.transform&&e.css){if(!(a=t.transform(e.css)))return function(){};e.css=a}if(t.singleton){var i=s++;n=c||(c=g(t)),r=k.bind(null,n,i,!1),o=k.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",b(t,e.attrs),h(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,a=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||a)&&(r=p(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([r],{type:"text/css"}),l=e.href;e.href=URL.createObjectURL(i),l&&URL.revokeObjectURL(l)}.bind(null,n,t),o=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=g(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){m(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=i()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=d(e,t);return f(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var i=n[o];(l=a[i.id]).refs--,r.push(l)}e&&f(d(e,t),t);for(o=0;o<r.length;o++){var l;if(0===(l=r[o]).refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete a[l.id]}}}};var y,w=(y=[],function(e,t){return y[e]=t,y.filter(Boolean).join("\n")});function k(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}},function(e,t,n){n(3),e.exports=n(25)},function(e,t,n){"use strict";n(4),n(5),n(6),n(7),n(9),n(13),n(17),n(18),n(19),n(22)},function(e,t,n){"use strict";var r=wp.i18n.__,o=wp.blocks,a=o.registerBlockType,i=o.createBlock,l=wp.editor.RichText;a("iis/preamble",{title:r("Preamble"),category:"iis",icon:"editor-paragraph",keywords:[r("preamble"),r("text"),r("paragraph")],attributes:{content:{type:"string",default:""}},edit:function(e){var t=e.attributes,n=e.setAttributes;return React.createElement("div",{style:{fontWeight:"bold",fontSize:"bigger"}},React.createElement(l,{tagName:"p",value:t.content,placeholder:r("Preamble"),onChange:function(e){return n({content:e})}}))},save:function(e){var t=e.attributes;return React.createElement("p",{className:"preamble",dangerouslySetInnerHTML:{__html:t.content}})},transforms:{from:[{type:"block",blocks:["core/paragraph"],transform:function(e){return i("iis/preamble",{content:e.content})}}]}})},function(e,t,n){"use strict";var r=wp.i18n.__,o=wp.blocks.registerBlockType,a=wp.editor,i=a.InspectorControls,l=a.InnerBlocks,c=wp.components,s=c.PanelBody,u=c.ToggleControl;o("iis/info",{title:r("Info box"),category:"iis",icon:"megaphone",keywords:[r("info"),r("facts"),r("message")],attributes:{big:{type:"boolean",default:!1}},edit:function(e){var t=e.attributes,n=e.setAttributes,r=["core/paragraph"],o=[],a=null,c="iis-info-block";return t.big?(o=[["core/paragraph"]],a="all",c+=" "+c+"--big"):(r.push("core/heading"),r.push("core/list")),React.createElement("div",null,React.createElement(i,null,React.createElement(s,null,React.createElement(u,{label:"Big",checked:t.big,onChange:function(e){return n({big:e})}}))),React.createElement("div",{className:c},React.createElement(l,{allowedBlocks:r,template:o,templateLock:a})))},save:function(e){var t=e.attributes;return React.createElement("div",{className:"iis-m-info-box "+(t.big?"iis-m-info-box--big":"")},React.createElement(l.Content,null))}})},function(e,t,n){"use strict";var r=wp.i18n.__,o=wp.blocks.registerBlockType,a=wp.editor,i=a.RichText,l=a.MediaUpload,c=a.MediaUploadCheck,s=wp.element.Fragment,u=wp.components,p=u.Button,f=u.TextControl;o("iis/download",{title:r("Download"),category:"iis",icon:"download",keywords:[r("download"),r("pdf"),r("attach")],attributes:{title:{type:"string",default:null},content:{type:"string",default:null},file:{type:"string",default:""}},edit:function(e){var t=e.attributes,n=e.setAttributes;return React.createElement("div",null,React.createElement(i,{identifier:"title",wrapperClassName:"wp-block-heading",tagName:"h3",value:t.title,onChange:function(e){return n({title:e})},placeholder:r("File title")}),React.createElement(i,{identifier:"description",wrapperClassName:"wp-block-paragraph",tagName:"p",value:t.content,onChange:function(e){return n({content:e})},placeholder:r("File description")}),React.createElement("div",{style:{marginTop:"16px"}},!t.file&&React.createElement(s,null,React.createElement(c,null,React.createElement(l,{onSelect:function(e){var t=e.url;return n({file:t})},value:t.file,render:function(e){var t=e.open;return React.createElement(p,{className:"components-button editor-post-featured-image__toggle",onClick:t},"Upload File")}})),React.createElement("p",null,React.createElement("em",null,"or"))),React.createElement(f,{label:r("File URL"),value:t.file,onChange:function(e){return n({file:e})}}),t.file&&React.createElement("div",null,React.createElement(p,{className:"components-button is-button is-default",onClick:function(){return n({file:""})}},"Remove file"))))},save:function(){return null}})},function(e,t,n){"use strict";var r,o=n(8),a=(r=o)&&r.__esModule?r:{default:r};var i=wp.i18n.__,l=wp.blocks.registerBlockType,c=wp.editor.InspectorControls,s=wp.components.PanelBody;l("iis/postarchive",{title:i("Post Archive","iis"),category:"iis",icon:"media-archive",keywords:[i("archive","iis")],attributes:{postType:{type:"string",default:!1}},edit:function(e){var t=e.attributes,n=e.setAttributes;return React.createElement("div",null,React.createElement("div",null,React.createElement("strong",null,"« Post Archive »")),React.createElement(c,null,React.createElement(s,null,React.createElement(a.default,{label:i("Select post type","iis"),placeholder:{value:null,label:i("Post type","iis")},api:"/wp-json/wp/v2/types",value_key:function(e){return e.slug},label_key:function(e){return e.name},value:t.postType,set:function(e){return n({postType:e})}}))))},save:function(){return null}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var i=wp.i18n.__,l=wp.components,c=l.SelectControl,s=l.Notice,u=l.TextControl,p=wp.element,f=p.Component,d=p.Fragment,h=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,l=Array(i),c=0;c<i;c++)l[c]=arguments[c];return n=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o.state={loading:!0,data:[],value:o.props.value,error:!1,search:""},o.searchThrottle=null,o.fetch=function(){o.setState({loading:!0,error:!1});var e=o.props.api;e.indexOf("?")>-1?e+="&search="+o.state.search:e+="?search="+o.state.search,fetch(e).then(function(e){return e.json()}).then(function(e){if("data"in e&&"status"in e.data&&e.data.status>299)throw new Error(e.message);return e}).then(function(e){return"object"===(void 0===e?"undefined":r(e))?Object.values(e):e}).then(function(e){return e.map(function(e){return{value:o.props.value_key(e),label:o.props.label_key(e)}})}).then(function(e){return o.setState({items:e,loading:!1})}).catch(function(e){return o.setState({error:e,loading:!1})})},o.search=function(e){o.setState({search:e},function(){clearTimeout(o.searchThrottle),o.searchThrottle=setTimeout(function(){o.fetch()},250)})},a(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,f),o(t,[{key:"componentDidMount",value:function(){this.fetch()}},{key:"render",value:function(){var e=this;if(this.state.loading&&!this.props.search)return React.createElement("span",{className:"components-spinner",style:{float:"none"}});if(this.state.error){var t="object"===r(this.state.error)?this.state.error.message:this.state.error;return React.createElement(s,{status:"error",actions:[{label:i("Try again"),onClick:this.fetch}]},React.createElement("p",null,t))}return React.createElement(d,null,this.props.search&&React.createElement(u,{label:this.props.label,value:this.state.search,placeholder:i("Search"),onChange:this.search,disabled:this.props.disabled}),this.state.loading&&React.createElement("p",null,React.createElement("span",{className:"components-spinner",style:{float:"none"}})),!this.state.loading&&this.state.items.length>0&&React.createElement(c,{label:this.props.search?null:this.props.label,help:this.props.help,options:[this.props.placeholder].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(this.state.items)),value:this.state.value,onChange:function(t){e.props.set(t),e.setState({value:t})},disabled:this.props.disabled}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.value!==t.value?{value:e.value}:null}}]),t}();h.defaultProps={set:function(){}},t.default=h},function(e,t,n){"use strict";var r,o=n(10),a=(r=o)&&r.__esModule?r:{default:r},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var c=wp.i18n.__,s=wp.blocks.registerBlockType,u=wp.element.Component,p=wp.editor,f=p.RichText,d=p.InspectorControls,h=wp.components,m=h.PanelBody,g=h.SelectControl,b=function(e){function t(){var e,n,r,o,i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var c=arguments.length,s=Array(c),u=0;u<c;u++)s[u]=arguments[u];return n=r=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r.state={loading:!0,lists:[],error:!1},r.fetchLists=(o=a.default.mark(function e(){var t;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,wp.apiFetch({path:"/iis-blocks/v1/mailchimp-lists",method:"GET"});case 3:e.t0=function(e){return{label:e.name,value:e.id}},t=e.sent.map(e.t0),r.setState({lists:t,loading:!1}),e.next=11;break;case 8:e.prev=8,e.t1=e.catch(0),r.setState({loading:!1,error:e.t1.message});case 11:case"end":return e.stop()}},e,i,[[0,8]])}),function(){var e=o.apply(this,arguments);return new Promise(function(t,n){return function r(o,a){try{var i=e[o](a),l=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(l).then(function(e){r("next",e)},function(e){r("throw",e)});t(l)}("next")})}),l(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u),i(t,[{key:"componentDidMount",value:function(){this.fetchLists()}},{key:"render",value:function(){var e=this;return this.state.loading?React.createElement("span",{className:"components-spinner",style:{float:"none"}}):this.state.error?React.createElement("span",{style:{color:"#d94f4f"}},this.state.error):React.createElement(g,{value:this.props.list_id,options:this.state.lists,onChange:function(t){return e.props.setListId(t)}})}}]),t}();b.defaultProps={setListId:function(){}},s("iis/newsletter",{title:c("Newsletter"),category:"iis",icon:"email",keywords:[c("newsletter"),c("mailchimp"),c("email")],attributes:{title:{type:"string",default:""},content:{type:"string",default:""},termsText:{type:"string",default:""},buttonText:{type:"string",default:""},listId:{type:"string",default:""}},edit:function(e){var t=e.attributes,n=e.setAttributes;return React.createElement("div",null,React.createElement(d,null,React.createElement(m,{title:"Mailchimp list"},React.createElement(b,{setListId:function(e){return n({listId:e})}}))),React.createElement(f,{identifier:"content",wrapperClassName:"wp-block-heading",tagName:"h3",value:t.title,onChange:function(e){return n({title:e})},placeholder:c("Title")}),React.createElement(f,{identifier:"content",wrapperClassName:"wp-block-paragraph",tagName:"p",value:t.content,onChange:function(e){return n({content:e})},placeholder:c("Description")}),React.createElement("p",null,"« Newsletter form »"),React.createElement(f,{identifier:"content",wrapperClassName:"wp-block-paragraph",tagName:"p",style:{fontSize:"small"},value:t.termsText,onChange:function(e){return n({termsText:e})},placeholder:c("Terms text")}),React.createElement("div",{className:"components-button is-button is-default is-primary"},React.createElement(f,{identifier:"content",tagName:"span",formattingControls:["bold","italic","strikethrough"],value:t.buttonText,onChange:function(e){return n({buttonText:e})},placeholder:c("Button text")})))},save:function(){return null}})},function(e,t,n){e.exports=n(11)},function(e,t,n){var r=function(){return this}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,a=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,e.exports=n(12),o)r.regeneratorRuntime=a;else try{delete r.regeneratorRuntime}catch(e){r.regeneratorRuntime=void 0}},function(e,t){!function(t){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",l=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag",s="object"==typeof e,u=t.regeneratorRuntime;if(u)s&&(e.exports=u);else{(u=t.regeneratorRuntime=s?e.exports:{}).wrap=w;var p="suspendedStart",f="suspendedYield",d="executing",h="completed",m={},g={};g[i]=function(){return this};var b=Object.getPrototypeOf,v=b&&b(b(P([])));v&&v!==r&&o.call(v,i)&&(g=v);var y=x.prototype=E.prototype=Object.create(g);R.prototype=y.constructor=x,x.constructor=R,x[c]=R.displayName="GeneratorFunction",u.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===R||"GeneratorFunction"===(t.displayName||t.name))},u.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,x):(e.__proto__=x,c in e||(e[c]="GeneratorFunction")),e.prototype=Object.create(y),e},u.awrap=function(e){return{__await:e}},_(C.prototype),C.prototype[l]=function(){return this},u.AsyncIterator=C,u.async=function(e,t,n,r){var o=new C(w(e,t,n,r));return u.isGeneratorFunction(t)?o:o.next().then(function(e){return e.done?e.value:o.next()})},_(y),y[c]="Generator",y[i]=function(){return this},y.toString=function(){return"[object Generator]"},u.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},u.values=P,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,o){return l.type="throw",l.arg=e,t.next=r,o&&(t.method="next",t.arg=n),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],l=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),s=o.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),N(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;N(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:P(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=n),m}}}function w(e,t,n,r){var o=t&&t.prototype instanceof E?t:E,a=Object.create(o.prototype),i=new L(r||[]);return a._invoke=function(e,t,n){var r=p;return function(o,a){if(r===d)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw a;return j()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var l=T(i,n);if(l){if(l===m)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===p)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var c=k(e,t,n);if("normal"===c.type){if(r=n.done?h:f,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=h,n.method="throw",n.arg=c.arg)}}}(e,n,i),a}function k(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}function E(){}function R(){}function x(){}function _(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function C(e){var t;this._invoke=function(n,r){function a(){return new Promise(function(t,a){!function t(n,r,a,i){var l=k(e[n],e,r);if("throw"!==l.type){var c=l.arg,s=c.value;return s&&"object"==typeof s&&o.call(s,"__await")?Promise.resolve(s.__await).then(function(e){t("next",e,a,i)},function(e){t("throw",e,a,i)}):Promise.resolve(s).then(function(e){c.value=e,a(c)},i)}i(l.arg)}(n,r,t,a)})}return t=t?t.then(a,a):a()}}function T(e,t){var r=e.iterator[t.method];if(r===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=n,T(e,t),"throw"===t.method))return m;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=k(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,m;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,m):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function P(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(o.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=n,t.done=!0,t};return a.next=a}}return{next:j}}function j(){return{value:n,done:!0}}}(function(){return this}()||Function("return this")())},function(e,t,n){"use strict";n(14);var r=wp.i18n.__,o=wp.element.Fragment,a=wp.blocks.registerBlockType,i=wp.components,l=i.PanelBody,c=i.Button,s=wp.editor,u=s.InspectorControls,p=s.MediaUpload,f=s.MediaUploadCheck,d=s.RichText,h=s.InnerBlocks;a("iis/hero",{title:r("Hero"),category:"iis",icon:"megaphone",keywords:[r("hero"),r("title")],supports:{align:["full","center"]},attributes:{mediaUrl:{type:"string",default:null},mediaId:{type:"number",default:null},title:{type:"string",default:""},introText:{type:"string",default:""}},getEditWrapperProps:function(e){return"center"===e.align?{"data-align":"wide"}:{}},edit:function(e){var t=e.attributes,n=e.setAttributes,a=null;return t.mediaUrl&&(a=React.createElement("img",{src:t.mediaUrl,alt:"",style:{width:"100%",height:"auto"}})),React.createElement(o,null,React.createElement(u,null,React.createElement(l,{title:"Background image"},React.createElement("p",null,a),null===t.mediaUrl&&React.createElement(f,null,React.createElement(p,{onSelect:function(e){return n({mediaUrl:e.sizes.full.url,mediaId:e.id})},type:"image",value:t.mediaUrl,render:function(e){var t=e.open;return React.createElement(c,{className:"components-button editor-post-featured-image__toggle",onClick:t},"Upload Image!")}})),null!==t.mediaUrl&&React.createElement(c,{className:"components-button is-button is-default",onClick:function(){return n({mediaUrl:null})}},"Remove background"))),React.createElement("div",{className:"iis-block-hero"},React.createElement("img",{src:t.mediaUrl,className:"iis-block-hero__image"}),React.createElement("div",{className:"iis-block-hero__content"},React.createElement("div",{className:"iis-block-hero__inner-content"},React.createElement(d,{tagName:"h1",value:t.title,placeholder:r("Title"),onChange:function(e){return n({title:e})}}),React.createElement(d,{tagName:"p",value:t.introText,placeholder:r("Content"),onChange:function(e){return n({introText:e})}}),React.createElement("div",{className:"iis-block-hero__buttons"},React.createElement(h,{allowedBlocks:["iis/button"]}))))))},save:function(){return React.createElement(h.Content,null)}})},function(e,t,n){var r=n(15);"string"==typeof r&&(r=[[e.i,r,""]]);var o={transform:void 0};n(1)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,".iis-block-hero{position:relative;text-align:left;color:#fff;background-color:#1f2a36}.iis-block-hero__content{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:flex-end;text-shadow:0 0 1rem rgba(0,0,0,.5);background-image:linear-gradient(180deg,hsla(0,0%,100%,0),transparent 55%,#000)}.iis-block-hero__inner-content{padding:4rem;max-width:80%}.iis-block-hero__image{min-height:27.77778rem;max-height:50vh;object-fit:cover;width:100%;display:block}.iis-block-hero__buttons .block-editor-block-list__layout{display:flex;align-items:center}.iis-block-hero__buttons .block-editor-block-list__layout>*{margin-right:20px}",""])},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,a=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(a)?e:(o=0===a.indexOf("//")?a:0===a.indexOf("/")?n+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,t,n){"use strict";var r=wp.i18n.__,o=wp.blocks.registerBlockType,a=wp.editor,i=a.InspectorControls,l=a.RichText,c=a.withColors,s=a.PanelColorSettings,u=wp.components,p=u.PanelBody,f=u.SelectControl,d=u.TextControl;o("iis/button",{title:r("Button"),category:"iis",icon:"admin-links",keywords:[r("button")],attributes:{size:{type:"string",default:"regular"},text:{type:"string",default:""},link:{type:"string",default:""},buttonColor:{type:"string",default:null}},edit:c({buttonColor:"color"})(function(e){var t=e.attributes,n=e.setAttributes,o=e.buttonColor,a=e.setButtonColor,c={display:"inline-block",position:"relative",margin:"0",padding:".556rem 1rem",overflow:"hidden",border:"0",borderRadius:".25rem",backgroundColor:o.color?o.color:"#0477ce",color:"#fff",fontFamily:"sans-serif",textDecoration:"none",textShadow:"none",hyphens:"auto",cursor:"pointer"};return"small"===t.size?(c.padding=".3rem .75rem",c.fontSize=".88889rem"):"large"===t.size?(c.padding=".8rem 2rem",c.fontSize="1.33333rem"):c.fontSize=".88889rem",console.log(o),!o.slug||["jade-dark","ruby-dark","ocean-dark"].includes(o.slug)?c.color="#fff":c.color="#1f2a36",React.createElement("div",null,React.createElement(i,null,React.createElement(p,null,React.createElement(f,{label:r("Size"),options:[{value:"small",label:"Small"},{value:"regular",label:"Default"},{value:"large",label:"Large"}],value:t.size,onChange:function(e){return n({size:e})}}),React.createElement(d,{label:r("URL"),value:t.link,help:t.link?React.createElement("a",{style:{display:"block",marginTop:"1rem"},href:t.link,target:"_blank"},r("Test link")):null,type:"url",onChange:function(e){return n({link:e})}})),React.createElement(s,{title:r("Color Settings"),colorSettings:[{value:o.color,onChange:a,label:r("Button Color")}]})),React.createElement("div",null,React.createElement("div",{style:c},React.createElement(l,{tagName:"span",value:t.text,placeholder:r("Button text"),onChange:function(e){return n({text:e})}}))))}),save:function(e){e.attributes;return null}})},function(e,t,n){"use strict";var r=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&l.return&&l.return()}finally{if(o)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();var o=wp.i18n.__,a=wp.element.Fragment,i=wp.element,l=i.useEffect,c=i.useState,s=wp.blocks.registerBlockType,u=wp.components,p=u.SelectControl,f=u.CheckboxControl,d=u.PanelBody,h=u.Button,m=u.TextControl,g=wp.editor,b=g.InspectorControls,v=g.MediaUpload,y=g.MediaUploadCheck,w=g.RichText;s("iis/puff",{title:o("Post puff","iis"),category:"iis",icon:"format-aside",keywords:[o("card","iis"),o("teaser","iis"),o("puff","iis")],supports:{align:["right"]},attributes:{custom:{type:"boolean",default:!1},postId:{type:"string",default:null},postPreview:{type:"object",default:{}},showAsTeaser:{type:"boolean",default:!1},showOnMobile:{type:"boolean",default:!1},imagePreviewUrl:{type:"string",default:null},imageId:{type:"number",default:null},title:{type:"string",default:""},text:{type:"string",default:""},url:{type:"string",default:null},align:{type:"string",default:null}},edit:function(e){var t=e.attributes,n=e.setAttributes,i=c([]),s=r(i,2),u=s[0],g=s[1],k=t.showAsTeaser,E=t.custom,R=null;return t.imagePreviewUrl&&(R=React.createElement("img",{src:t.imagePreviewUrl,alt:"",style:{width:"100%",height:"auto"}})),l(function(){wp.apiFetch({path:"/wp/v2/posts?parent=0&per_page=-1"}).then(function(e){var t=e.map(function(e){return{label:e.title.rendered,value:e.id}});g(t)})},[]),React.createElement(a,null,React.createElement(b,null,React.createElement(d,{title:"Content"},React.createElement(f,{label:"Custom content",checked:E,onChange:function(e){return n({custom:e})}}),E&&React.createElement(m,{label:o("Link","iis"),placeholder:o("/link/to/here","iis"),value:t.url,onChange:function(e){return n({url:e})}})),React.createElement(d,{title:"Display"},React.createElement(f,{label:"Show as teaser",checked:k,onChange:function(e){return n({showAsTeaser:e})}}),"right"===t.align&&React.createElement(f,{label:"Show on mobile",checked:t.showOnMobile,onChange:function(e){return n({showOnMobile:e})}})),t.custom&&React.createElement(d,{title:"Image"},React.createElement("div",null,R),null===t.imagePreviewUrl&&React.createElement(y,null,React.createElement(v,{onSelect:function(e){return n({imagePreviewUrl:e.sizes.full.url,imageId:e.id})},type:"image",value:t.imagePreviewUrl,render:function(e){var t=e.open;return React.createElement(h,{className:"components-button editor-post-featured-image__toggle",onClick:t},"Upload Image!")}})),null!==t.imagePreviewUrl&&React.createElement(h,{className:"components-button is-button is-default",onClick:function(){return n({imagePreviewUrl:null,imageId:null})}},"Remove image"))),React.createElement("div",{style:{position:"relative",border:"1px solid #bbb",borderRadius:".25rem",overflow:"hidden",maxWidth:"400px"}},E&&t.imagePreviewUrl&&React.createElement("img",{src:t.imagePreviewUrl,alt:"",style:k?{width:"100%",height:"100%",minHeight:"300px",display:"block",objectFit:"cover"}:{width:"100%",display:"block",borderRadius:".25rem .25rem 0 0"}}),React.createElement("div",{style:k&&E?{display:"flex",flexDirection:"column",alignContent:"stretch",justifyContent:"flex-end",position:"absolute",right:0,bottom:0,left:0,textShadow:"0 0 1rem rgba(0,0,0,.5)",backgroundImage:"linear-gradient(180deg,hsla(0,0%,100%,0) 0,transparent 55%,#000)",padding:"2rem",color:"#fff"}:{padding:"1rem"}},!E&&React.createElement(p,{label:o("Post","iis"),onChange:function(e){return n({postId:e})},options:u.length?[{label:o("Choose a post","internetkunskap"),value:null}].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(u)):[{label:o("Loading posts...","internetkunskap"),value:"",disabled:!0}],value:t.postId}),E&&React.createElement("div",null,React.createElement(w,{tagName:"h1",value:t.title,placeholder:o("Title"),style:{margin:0},onChange:function(e){return n({title:e})}}),React.createElement(w,{tagName:"div",value:t.text,placeholder:o("Content"),onChange:function(e){return n({text:e})}})))))},save:function(){return null}})},function(e,t,n){"use strict";n(20);var r=wp.i18n.__,o=wp.blocks.registerBlockType,a=wp.editor.InnerBlocks;o("iis/grid",{title:r("Grid"),category:"iis",icon:"megaphone",keywords:[r("grid","iis"),r("columns","iis"),r("column","iis")],supports:{align:["full","center"]},attributes:{big:{type:"boolean",default:!1},align:{type:"string",default:"center"}},getEditWrapperProps:function(e){return"center"===e.align?{"data-align":"wide"}:{}},edit:function(){return React.createElement("div",{className:"iis-block-grid"},React.createElement(a,{allowedBlocks:["iis/column"]}))},save:function(){return React.createElement(a.Content,null)}})},function(e,t,n){var r=n(21);"string"==typeof r&&(r=[[e.i,r,""]]);var o={transform:void 0};n(1)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,'.iis-block-grid>.block-editor-inner-blocks>.block-editor-block-list__layout{display:flex;flex-wrap:wrap}.iis-block-grid>.block-editor-inner-blocks>.block-editor-block-list__layout>*{flex:0 0 50%;width:50%;margin-right:unset;margin-left:unset;max-width:none}.iis-block-grid>.block-editor-inner-blocks>.block-editor-block-list__layout>[data-width="1/3"]{flex:0 0 33.333%;width:33.333%}.iis-block-grid>.block-editor-inner-blocks>.block-editor-block-list__layout>[data-width="1"]{flex:0 0 100%;width:100%}.iis-block-grid>.block-editor-inner-blocks>.block-editor-block-list__layout>[data-width="2/3"]{flex:0 0 66.666%;width:66.666%}',""])},function(e,t,n){"use strict";n(23);var r=wp.i18n.__,o=wp.element.Fragment,a=wp.blocks.registerBlockType,i=wp.components,l=i.PanelBody,c=i.SelectControl,s=wp.editor,u=s.InspectorControls,p=s.InnerBlocks,f=[{label:"1/3",value:"1/3"},{label:"1/2",value:"1/2"},{label:"2/3",value:"2/3"},{label:"Full width",value:"1"}];a("iis/column",{title:r("Column"),category:"iis",icon:"megaphone",keywords:[r("grid","iis"),r("columns","iis"),r("column","iis")],parent:["iis/grid"],attributes:{columnWidth:{type:"string",default:"1/2"}},getEditWrapperProps:function(e){var t=e.columnWidth;return t?{"data-width":t}:{}},edit:function(e){var t=e.attributes,n=e.setAttributes,r=t.columnWidth;return React.createElement(o,null,React.createElement(u,null,React.createElement(l,{title:"Column width"},React.createElement(c,{label:"Width",onChange:function(e){return n({columnWidth:e})},options:f,value:r}))),React.createElement("div",{className:"iis-block-column"},React.createElement("div",{className:"iis-block-column__content"},React.createElement(p,null))))},save:function(){return React.createElement(p.Content,null)}})},function(e,t,n){var r=n(24);"string"==typeof r&&(r=[[e.i,r,""]]);var o={transform:void 0};n(1)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,".iis-block-column{padding:0 1rem;border:1px dotted #bbb}.iis-block-column__heading{font-family:sans-serif;font-size:14px}",""])},function(e,t){}]);