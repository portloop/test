"use strict";(self["webpackChunkadmin"]=self["webpackChunkadmin"]||[]).push([[9344],{9344:function(t,n,a){a.r(n),a.d(n,{troff:function(){return h}});var r={};function e(t){if(t.eatSpace())return null;var n=t.sol(),a=t.next();if("\\"===a)return t.match("fB")||t.match("fR")||t.match("fI")||t.match("u")||t.match("d")||t.match("%")||t.match("&")?"string":t.match("m[")?(t.skipTo("]"),t.next(),"string"):t.match("s+")||t.match("s-")?(t.eatWhile(/[\d-]/),"string"):t.match("(")||t.match("*(")?(t.eatWhile(/[\w-]/),"string"):"string";if(n&&("."===a||"'"===a)&&t.eat("\\")&&t.eat('"'))return t.skipToEnd(),"comment";if(n&&"."===a){if(t.match("B ")||t.match("I ")||t.match("R "))return"attribute";if(t.match("TH ")||t.match("SH ")||t.match("SS ")||t.match("HP "))return t.skipToEnd(),"quote";if(t.match(/[A-Z]/)&&t.match(/[A-Z]/)||t.match(/[a-z]/)&&t.match(/[a-z]/))return"attribute"}t.eatWhile(/[\w-]/);var e=t.current();return r.hasOwnProperty(e)?r[e]:null}function c(t,n){return(n.tokens[0]||e)(t,n)}const h={name:"troff",startState:function(){return{tokens:[]}},token:function(t,n){return c(t,n)}}}}]);
//# sourceMappingURL=9344.bfff11f7.js.map