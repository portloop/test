"use strict";(self["webpackChunkadmin"]=self["webpackChunkadmin"]||[]).push([[3534],{3534:function(n,e,t){t.r(e),t.d(e,{brainfuck:function(){return m}});var o="><+-.,[]".split("");const m={name:"brainfuck",startState:function(){return{commentLine:!1,left:0,right:0,commentLoop:!1}},token:function(n,e){if(n.eatSpace())return null;n.sol()&&(e.commentLine=!1);var t=n.next().toString();return-1===o.indexOf(t)?(e.commentLine=!0,n.eol()&&(e.commentLine=!1),"comment"):!0===e.commentLine?(n.eol()&&(e.commentLine=!1),"comment"):"]"===t||"["===t?("["===t?e.left++:e.right++,"bracket"):"+"===t||"-"===t?"keyword":"<"===t||">"===t?"atom":"."===t||","===t?"def":void(n.eol()&&(e.commentLine=!1))}}}}]);
//# sourceMappingURL=3534.780c1623.js.map