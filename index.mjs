// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-arraylike2object@v0.2.1-esm/index.mjs";var t=Array.prototype.slice;function e(e,o,n){var s;return function(r,t){return"function"==typeof r[t]}(e,"slice")?e.slice(o,n):(s=r(e)).accessorProtocol?function(r,t,e){var o,n,s,a;for(o=r.data,n=r.accessors[0],s=[],a=t;a<e;a++)s.push(n(o,a));return s}(s,o,n):function(r,e,o){return t.call(r,e,o)}(e,o,n)}export{e as default};
//# sourceMappingURL=index.mjs.map
