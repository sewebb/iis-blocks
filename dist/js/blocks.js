!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s=0)}([function(t,e,r){r(1),t.exports=r(11)},function(t,e,r){"use strict";r(2),r(3),r(4),r(5),r(7)},function(t,e,r){"use strict";var n=wp.i18n.__,o=wp.blocks,a=o.registerBlockType,i=o.createBlock,c=wp.editor.RichText;a("iis/preamble",{title:n("Preamble"),category:"iis",icon:"editor-paragraph",keywords:[n("preamble"),n("text"),n("paragraph")],attributes:{content:{type:"string",default:""}},edit:function(t){var e=t.attributes,r=t.setAttributes;return React.createElement("div",{style:{fontWeight:"bold",fontSize:"bigger"}},React.createElement(c,{tagName:"p",value:e.content,placeholder:n("Preamble"),onChange:function(t){return r({content:t})}}))},save:function(t){var e=t.attributes;return React.createElement("p",{className:"preamble",dangerouslySetInnerHTML:{__html:e.content}})},transforms:{from:[{type:"block",blocks:["core/paragraph"],transform:function(t){return i("iis/preamble",{content:t.content})}}]}})},function(t,e,r){"use strict";var n=wp.i18n.__,o=wp.blocks.registerBlockType,a=wp.editor,i=a.InspectorControls,c=a.InnerBlocks,l=wp.components,s=l.PanelBody,u=l.ToggleControl;o("iis/info",{title:n("Info box"),category:"iis",icon:"megaphone",keywords:[n("info"),n("facts"),n("message")],attributes:{big:{type:"boolean",default:!1}},edit:function(t){var e=t.attributes,r=t.setAttributes,n=["core/paragraph"],o=[],a=null,l="iis-info-block";return e.big?(o=[["core/paragraph"]],a="all",l+=" "+l+"--big"):(n.push("core/heading"),n.push("core/list")),React.createElement("div",null,React.createElement(i,null,React.createElement(s,null,React.createElement(u,{label:"Big",checked:e.big,onChange:function(t){return r({big:t})}}))),React.createElement("div",{className:l},React.createElement(c,{allowedBlocks:n,template:o,templateLock:a})))},save:function(t){var e=t.attributes;return React.createElement("div",{className:"iis-m-info-box "+(e.big?"iis-m-info-box--big":"")},React.createElement(c.Content,null))}})},function(t,e,r){"use strict";var n=wp.i18n.__,o=wp.blocks.registerBlockType,a=wp.editor,i=a.RichText,c=a.MediaUpload,l=a.MediaUploadCheck,s=wp.components.Button;o("iis/download",{title:n("Download"),category:"iis",icon:"download",keywords:[n("download"),n("pdf"),n("attach")],attributes:{title:{type:"string",default:null},content:{type:"string",default:null},file:{type:"string",default:null}},edit:function(t){var e=t.attributes,r=t.setAttributes;return React.createElement("div",null,React.createElement(i,{identifier:"content",wrapperClassName:"wp-block-heading",tagName:"h3",value:e.title,onChange:function(t){return r({title:t})},placeholder:n("File title")}),React.createElement(i,{identifier:"content",wrapperClassName:"wp-block-paragraph",tagName:"p",value:e.content,onChange:function(t){return r({content:t})},placeholder:n("File description")}),React.createElement("div",{style:{marginTop:"16px"}},null===e.file&&React.createElement(l,null,React.createElement(c,{onSelect:function(t){var e=t.url;return r({file:e})},type:"pdf",value:e.file,render:function(t){var e=t.open;return React.createElement(s,{className:"components-button editor-post-featured-image__toggle",onClick:e},"Upload PDF")}})),null!==e.file&&React.createElement("div",null,React.createElement(s,{className:"components-button is-button is-default",onClick:function(){return r({file:null})}},"Remove file"),React.createElement("small",{style:{display:"block",color:"#ccc"}},e.file))))},save:function(){return null}})},function(t,e,r){"use strict";var n,o=r(6),a=(n=o)&&n.__esModule?n:{default:n};var i=wp.i18n.__,c=wp.blocks.registerBlockType,l=wp.editor.InspectorControls,s=wp.components.PanelBody;c("iis/postarchive",{title:i("Post Archive","iis"),category:"iis",icon:"media-archive",keywords:[i("archive","iis")],attributes:{postType:{type:"string",default:!1}},edit:function(t){var e=t.attributes,r=t.setAttributes;return React.createElement("div",null,React.createElement("div",null,React.createElement("strong",null,"« Post Archive »")),React.createElement(l,null,React.createElement(s,null,React.createElement(a.default,{label:i("Select post type","iis"),placeholder:{value:null,label:i("Post type","iis")},api:"/wp-json/wp/v2/types",value_key:function(t){return t.slug},label_key:function(t){return t.name},value:e.postType,set:function(t){return r({postType:t})}}))))},save:function(){return null}})},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}();function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var i=wp.i18n.__,c=wp.components,l=c.SelectControl,s=c.Notice,u=c.TextControl,p=wp.element,f=p.Component,h=p.Fragment,d=function(t){function e(){var t,r,o;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var i=arguments.length,c=Array(i),l=0;l<i;l++)c[l]=arguments[l];return r=o=a(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(c))),o.state={loading:!0,data:[],value:o.props.value,error:!1,search:""},o.searchThrottle=null,o.fetch=function(){o.setState({loading:!0,error:!1});var t=o.props.api;t.indexOf("?")>-1?t+="&search="+o.state.search:t+="?search="+o.state.search,fetch(t).then(function(t){return t.json()}).then(function(t){if("data"in t&&"status"in t.data&&t.data.status>299)throw new Error(t.message);return t}).then(function(t){return"object"===(void 0===t?"undefined":n(t))?Object.values(t):t}).then(function(t){return t.map(function(t){return{value:o.props.value_key(t),label:o.props.label_key(t)}})}).then(function(t){return o.setState({items:t,loading:!1})}).catch(function(t){return o.setState({error:t,loading:!1})})},o.search=function(t){o.setState({search:t},function(){clearTimeout(o.searchThrottle),o.searchThrottle=setTimeout(function(){o.fetch()},250)})},a(o,r)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,f),o(e,[{key:"componentDidMount",value:function(){this.fetch()}},{key:"render",value:function(){var t=this;if(this.state.loading&&!this.props.search)return React.createElement("span",{className:"components-spinner",style:{float:"none"}});if(this.state.error){var e="object"===n(this.state.error)?this.state.error.message:this.state.error;return React.createElement(s,{status:"error",actions:[{label:i("Try again"),onClick:this.fetch}]},React.createElement("p",null,e))}return React.createElement(h,null,this.props.search&&React.createElement(u,{label:this.props.label,value:this.state.search,placeholder:i("Search"),onChange:this.search,disabled:this.props.disabled}),this.state.loading&&React.createElement("p",null,React.createElement("span",{className:"components-spinner",style:{float:"none"}})),!this.state.loading&&this.state.items.length>0&&React.createElement(l,{label:this.props.search?null:this.props.label,help:this.props.help,options:[this.props.placeholder].concat(function(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}(this.state.items)),value:this.state.value,onChange:function(e){t.props.set(e),t.setState({value:e})},disabled:this.props.disabled}))}}],[{key:"getDerivedStateFromProps",value:function(t,e){return t.value!==e.value?{value:t.value}:null}}]),e}();d.defaultProps={set:function(){}},e.default=d},function(t,e,r){"use strict";var n,o=r(8),a=(n=o)&&n.__esModule?n:{default:n},i=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}();function c(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var l=wp.i18n.__,s=wp.blocks.registerBlockType,u=wp.element.Component,p=wp.editor,f=p.RichText,h=p.InspectorControls,d=wp.components,m=d.PanelBody,y=d.SelectControl,v=function(t){function e(){var t,r,n,o,i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var l=arguments.length,s=Array(l),u=0;u<l;u++)s[u]=arguments[u];return r=n=c(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(s))),n.state={loading:!0,lists:[],error:!1},n.fetchLists=(o=a.default.mark(function t(){var e;return a.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,wp.apiFetch({path:"/iis-blocks/v1/mailchimp-lists",method:"GET"});case 3:t.t0=function(t){return{label:t.name,value:t.id}},e=t.sent.map(t.t0),n.setState({lists:e,loading:!1}),t.next=11;break;case 8:t.prev=8,t.t1=t.catch(0),n.setState({loading:!1,error:t.t1.message});case 11:case"end":return t.stop()}},t,i,[[0,8]])}),function(){var t=o.apply(this,arguments);return new Promise(function(e,r){return function n(o,a){try{var i=t[o](a),c=i.value}catch(t){return void r(t)}if(!i.done)return Promise.resolve(c).then(function(t){n("next",t)},function(t){n("throw",t)});e(c)}("next")})}),c(n,r)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,u),i(e,[{key:"componentDidMount",value:function(){this.fetchLists()}},{key:"render",value:function(){var t=this;return this.state.loading?React.createElement("span",{className:"components-spinner",style:{float:"none"}}):this.state.error?React.createElement("span",{style:{color:"#d94f4f"}},this.state.error):React.createElement(y,{value:this.props.list_id,options:this.state.lists,onChange:function(e){return t.props.setListId(e)}})}}]),e}();v.defaultProps={setListId:function(){}},s("iis/newsletter",{title:l("Newsletter"),category:"iis",icon:"email",keywords:[l("newsletter"),l("mailchimp"),l("email")],attributes:{title:{type:"string",default:""},content:{type:"string",default:""},termsText:{type:"string",default:""},buttonText:{type:"string",default:""},listId:{type:"string",default:""}},edit:function(t){var e=t.attributes,r=t.setAttributes;return React.createElement("div",null,React.createElement(h,null,React.createElement(m,{title:"Mailchimp list"},React.createElement(v,{setListId:function(t){return r({listId:t})}}))),React.createElement(f,{identifier:"content",wrapperClassName:"wp-block-heading",tagName:"h3",value:e.title,onChange:function(t){return r({title:t})},placeholder:l("Title")}),React.createElement(f,{identifier:"content",wrapperClassName:"wp-block-paragraph",tagName:"p",value:e.content,onChange:function(t){return r({content:t})},placeholder:l("Description")}),React.createElement("p",null,"« Newsletter form »"),React.createElement(f,{identifier:"content",wrapperClassName:"wp-block-paragraph",tagName:"p",style:{fontSize:"small"},value:e.termsText,onChange:function(t){return r({termsText:t})},placeholder:l("Terms text")}),React.createElement("div",{className:"components-button is-button is-default is-primary"},React.createElement(f,{identifier:"content",tagName:"span",formattingControls:["bold","italic","strikethrough"],value:e.buttonText,onChange:function(t){return r({buttonText:t})},placeholder:l("Button text")})))},save:function(){return null}})},function(t,e,r){t.exports=r(9)},function(t,e,r){var n=function(){return this}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,a=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r(10),o)n.regeneratorRuntime=a;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag",s="object"==typeof t,u=e.regeneratorRuntime;if(u)s&&(t.exports=u);else{(u=e.regeneratorRuntime=s?t.exports:{}).wrap=w;var p="suspendedStart",f="suspendedYield",h="executing",d="completed",m={},y={};y[i]=function(){return this};var v=Object.getPrototypeOf,g=v&&v(v(P([])));g&&g!==n&&o.call(g,i)&&(y=g);var b=_.prototype=R.prototype=Object.create(y);x.prototype=b.constructor=_,_.constructor=x,_[l]=x.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,l in t||(t[l]="GeneratorFunction")),t.prototype=Object.create(b),t},u.awrap=function(t){return{__await:t}},k(T.prototype),T.prototype[c]=function(){return this},u.AsyncIterator=T,u.async=function(t,e,r,n){var o=new T(w(t,e,r,n));return u.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},k(b),b[l]="Generator",b[i]=function(){return this},b.toString=function(){return"[object Generator]"},u.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},u.values=P,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var l=o.call(i,"catchLoc"),s=o.call(i,"finallyLoc");if(l&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:P(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),m}}}function w(t,e,r,n){var o=e&&e.prototype instanceof R?e:R,a=Object.create(o.prototype),i=new N(n||[]);return a._invoke=function(t,e,r){var n=p;return function(o,a){if(n===h)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return j()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=O(i,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===p)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var l=E(t,e,r);if("normal"===l.type){if(n=r.done?d:f,l.arg===m)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=d,r.method="throw",r.arg=l.arg)}}}(t,r,i),a}function E(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function R(){}function x(){}function _(){}function k(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function T(t){var e;this._invoke=function(r,n){function a(){return new Promise(function(e,a){!function e(r,n,a,i){var c=E(t[r],t,n);if("throw"!==c.type){var l=c.arg,s=l.value;return s&&"object"==typeof s&&o.call(s,"__await")?Promise.resolve(s.__await).then(function(t){e("next",t,a,i)},function(t){e("throw",t,a,i)}):Promise.resolve(s).then(function(t){l.value=t,a(l)},i)}i(c.arg)}(r,n,e,a)})}return e=e?e.then(a,a):a()}}function O(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,O(t,e),"throw"===e.method))return m;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=E(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,m;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,m):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function P(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:j}}function j(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},function(t,e){}]);