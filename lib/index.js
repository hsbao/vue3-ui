!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("vue")):"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports["v-ui"]=n(require("vue")):e["v-ui"]=n(e.Vue)}(self,(function(e){return(()=>{"use strict";var n={744:(e,n)=>{n.Z=(e,n)=>{const o=e.__vccOpts||e;for(const[e,t]of n)o[e]=t;return o}},789:n=>{n.exports=e}},o={};function t(e){var r=o[e];if(void 0!==r)return r.exports;var c=o[e]={exports:{}};return n[e](c,c.exports,t),c.exports}t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return(()=>{t.r(r),t.d(r,{default:()=>s});var e=t(789),n={class:"v-button"};const o=(0,e.defineComponent)({name:"VButton"});var c=t(744);const u=(0,c.Z)(o,[["render",function(o,t,r,c,u,i){return(0,e.openBlock)(),(0,e.createElementBlock)("button",n,"按钮")}]]);u.install=function(e){e.component(u.name,u)};const i=u,a=(0,e.defineComponent)({name:"VIcon",props:{name:{type:String,default:""}}}),l=(0,c.Z)(a,[["render",function(n,o,t,r,c,u){return(0,e.openBlock)(),(0,e.createElementBlock)("i",{class:(0,e.normalizeClass)("v-ui-icons v-icon-".concat(n.name))},null,2)}]]);l.install=function(e){e.component(l.name,l)};var f=[i,l];const s={install:function(e){f.forEach((function(n){e.component(n.name,n)}))}}})(),r})()}));