"use strict";(self["webpackChunkadmin"]=self["webpackChunkadmin"]||[]).push([[8741],{8741:function(e,r,t){function n(e){for(var r={},t=e.split(" "),n=0;n<t.length;++n)r[t[n]]=!0;return r}t.r(r),t.d(r,{tcl:function(){return m}});var a=n("Tcl safe after append array auto_execok auto_import auto_load auto_mkindex auto_mkindex_old auto_qualify auto_reset bgerror binary break catch cd close concat continue dde eof encoding error eval exec exit expr fblocked fconfigure fcopy file fileevent filename filename flush for foreach format gets glob global history http if incr info interp join lappend lindex linsert list llength load lrange lreplace lsearch lset lsort memory msgcat namespace open package parray pid pkg::create pkg_mkIndex proc puts pwd re_syntax read regex regexp registry regsub rename resource return scan seek set socket source split string subst switch tcl_endOfWord tcl_findLibrary tcl_startOfNextWord tcl_wordBreakAfter tcl_startOfPreviousWord tcl_wordBreakBefore tcltest tclvars tell time trace unknown unset update uplevel upvar variable vwait"),i=n("if elseif else and not or eq ne in ni for foreach while switch"),o=/[+\-*&%=<>!?^\/\|]/;function l(e,r,t){return r.tokenize=t,t(e,r)}function u(e,r){var t=r.beforeParams;r.beforeParams=!1;var n=e.next();if('"'!=n&&"'"!=n||!r.inParams){if(/[\[\]{}\(\),;\.]/.test(n))return"("==n&&t?r.inParams=!0:")"==n&&(r.inParams=!1),null;if(/\d/.test(n))return e.eatWhile(/[\w\.]/),"number";if("#"==n)return e.eat("*")?l(e,r,s):"#"==n&&e.match(/ *\[ *\[/)?l(e,r,f):(e.skipToEnd(),"comment");if('"'==n)return e.skipTo(/"/),"comment";if("$"==n)return e.eatWhile(/[$_a-z0-9A-Z\.{:]/),e.eatWhile(/}/),r.beforeParams=!0,"builtin";if(o.test(n))return e.eatWhile(o),"comment";e.eatWhile(/[\w\$_{}\xa1-\uffff]/);var u=e.current().toLowerCase();return a&&a.propertyIsEnumerable(u)?"keyword":i&&i.propertyIsEnumerable(u)?(r.beforeParams=!0,"keyword"):null}return l(e,r,c(n))}function c(e){return function(r,t){var n,a=!1,i=!1;while(null!=(n=r.next())){if(n==e&&!a){i=!0;break}a=!a&&"\\"==n}return i&&(t.tokenize=u),"string"}}function s(e,r){var t,n=!1;while(t=e.next()){if("#"==t&&n){r.tokenize=u;break}n="*"==t}return"comment"}function f(e,r){var t,n=0;while(t=e.next()){if("#"==t&&2==n){r.tokenize=u;break}"]"==t?n++:" "!=t&&(n=0)}return"meta"}const m={name:"tcl",startState:function(){return{tokenize:u,beforeParams:!1,inParams:!1}},token:function(e,r){return e.eatSpace()?null:r.tokenize(e,r)},languageData:{commentTokens:{line:"#"}}}}}]);
//# sourceMappingURL=8741.22645086.js.map