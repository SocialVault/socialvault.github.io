define("siteRegionContainer",["lodash","santa-components","componentsCore"],function(e,n,t){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(n){return e[n]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=1054)}({0:function(n,t){n.exports=e},1054:function(e,n,t){var r,i;r=[t(0),t(2),t(3)],void 0===(i=function(e,n,t){"use strict";var r={displayName:"SiteRegionContainer",mixins:[n.mixins.inlineContentMixin,t.mixins.skinBasedComp,n.mixins.scrollMixin],getSkinProperties:function(){return{inlineContent:{"data-aid":"SITE_REGION_CONTAINER",children:this.getChildrenRenderer()}}}};return t.compRegistrar.register("wysiwyg.viewer.components.SiteRegionContainer",r),r}.apply(n,r))||(e.exports=i)},2:function(e,t){e.exports=n},3:function(e,n){e.exports=t}})});
//# sourceMappingURL=siteRegionContainer.min.js.map