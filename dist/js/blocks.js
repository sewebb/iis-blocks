!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){n(1),e.exports=n(4)},function(e,t,n){"use strict";n(2),n(3)},function(e,t,n){"use strict";var r=wp.i18n.__,a=wp.blocks,o=a.registerBlockType,c=a.createBlock,i=wp.editor.RichText;o("iis/preamble",{title:r("Preamble"),category:"iis",icon:"editor-paragraph",keywords:[r("preamble"),r("text"),r("paragraph")],attributes:{content:{type:"string",default:""}},edit:function(e){var t=e.attributes,n=e.setAttributes;return React.createElement("div",{style:{fontWeight:"bold",fontSize:"bigger"}},React.createElement(i,{tagName:"p",value:t.content,placeholder:r("Preamble"),onChange:function(e){return n({content:e})}}))},save:function(e){var t=e.attributes;return React.createElement("p",{className:"preamble",dangerouslySetInnerHTML:{__html:t.content}})},transforms:{from:[{type:"block",blocks:["core/paragraph"],transform:function(e){return c("iis/preamble",{content:e.content})}}]}})},function(e,t,n){"use strict";var r=wp.i18n.__,a=wp.blocks.registerBlockType,o=wp.editor,c=o.InspectorControls,i=o.InnerBlocks,l=wp.components,s=l.PanelBody,u=l.ToggleControl;a("iis/info",{title:r("Info box"),category:"iis",icon:"megaphone",keywords:[r("info"),r("facts"),r("message")],attributes:{big:{type:"boolean",default:!1}},edit:function(e){var t=e.attributes,n=e.setAttributes,r=["core/paragraph"],a=[],o=null,l="iis-info-block";return t.big?(a=[["core/paragraph"]],o="all",l+=" "+l+"--big"):(r.push("core/heading"),r.push("core/list")),React.createElement("div",null,React.createElement(c,null,React.createElement(s,null,React.createElement(u,{label:"Big",checked:t.big,onChange:function(e){return n({big:e})}}))),React.createElement("div",{className:l},React.createElement(i,{allowedBlocks:r,template:a,templateLock:o})))},save:function(e){var t=e.attributes;return React.createElement("div",{className:"iis-m-info-box "+(t.big?"iis-m-info-box--big":"")},React.createElement(i.Content,null))}})},function(e,t){}]);