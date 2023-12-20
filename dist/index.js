"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=n(function(q,s){
var l=require('@stdlib/array-base-arraylike2object/dist'),f=Array.prototype.slice;function v(e,r){return typeof e[r]=="function"}function p(e,r,t){return f.call(e,r,t)}function y(e,r,t){var a,o,i,c;for(a=e.data,o=e.accessors[0],i=[],c=r;c<t;c++)i.push(o(a,c));return i}function b(e,r,t){var a;return v(e,"slice")?e.slice(r,t):(a=l(e),a.accessorProtocol?y(a,r,t):p(e,r,t))}s.exports=b
});var h=u();module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
