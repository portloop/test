"use strict";(self["webpackChunkadmin"]=self["webpackChunkadmin"]||[]).push([[8703],{8703:function(O,e,r){r.r(e),r.d(e,{json:function(){return i},jsonLanguage:function(){return c},jsonParseLinter:function(){return o}});var t=r(2915),n=r(1048);const a=(0,n.Gv)({String:n.pJ.string,Number:n.pJ.number,"True False":n.pJ.bool,PropertyName:n.pJ.propertyName,Null:n.pJ.null,",":n.pJ.separator,"[ ]":n.pJ.squareBracket,"{ }":n.pJ.brace}),P=t.WQ.deserialize({version:14,states:"$bOVQPOOOOQO'#Cb'#CbOnQPO'#CeOvQPO'#CjOOQO'#Cp'#CpQOQPOOOOQO'#Cg'#CgO}QPO'#CfO!SQPO'#CrOOQO,59P,59PO![QPO,59PO!aQPO'#CuOOQO,59U,59UO!iQPO,59UOVQPO,59QOqQPO'#CkO!nQPO,59^OOQO1G.k1G.kOVQPO'#ClO!vQPO,59aOOQO1G.p1G.pOOQO1G.l1G.lOOQO,59V,59VOOQO-E6i-E6iOOQO,59W,59WOOQO-E6j-E6j",stateData:"#O~OcOS~OQSORSOSSOTSOWQO]ROePO~OVXOeUO~O[[O~PVOg^O~Oh_OVfX~OVaO~OhbO[iX~O[dO~Oh_OVfa~OhbO[ia~O",goto:"!kjPPPPPPkPPkqwPPk{!RPPP!XP!ePP!hXSOR^bQWQRf_TVQ_Q`WRg`QcZRicQTOQZRQe^RhbRYQR]R",nodeNames:"⚠ JsonText True False Null Number String } { Object Property PropertyName ] [ Array",maxTerm:25,nodeProps:[["openedBy",7,"{",12,"["],["closedBy",8,"}",13,"]"]],propSources:[a],skippedNodes:[0],repeatNodeCount:2,tokenData:"(|~RaXY!WYZ!W]^!Wpq!Wrs!]|}$u}!O$z!Q!R%T!R![&c![!]&t!}#O&y#P#Q'O#Y#Z'T#b#c'r#h#i(Z#o#p(r#q#r(w~!]Oc~~!`Wpq!]qr!]rs!xs#O!]#O#P!}#P;'S!];'S;=`$o<%lO!]~!}Oe~~#QXrs!]!P!Q!]#O#P!]#U#V!]#Y#Z!]#b#c!]#f#g!]#h#i!]#i#j#m~#pR!Q![#y!c!i#y#T#Z#y~#|R!Q![$V!c!i$V#T#Z$V~$YR!Q![$c!c!i$c#T#Z$c~$fR!Q![!]!c!i!]#T#Z!]~$rP;=`<%l!]~$zOh~~$}Q!Q!R%T!R![&c~%YRT~!O!P%c!g!h%w#X#Y%w~%fP!Q![%i~%nRT~!Q![%i!g!h%w#X#Y%w~%zR{|&T}!O&T!Q![&Z~&WP!Q![&Z~&`PT~!Q![&Z~&hST~!O!P%c!Q![&c!g!h%w#X#Y%w~&yOg~~'OO]~~'TO[~~'WP#T#U'Z~'^P#`#a'a~'dP#g#h'g~'jP#X#Y'm~'rOR~~'uP#i#j'x~'{P#`#a(O~(RP#`#a(U~(ZOS~~(^P#f#g(a~(dP#i#j(g~(jP#X#Y(m~(rOQ~~(wOW~~(|OV~",tokenizers:[0],topRules:{JsonText:[0,1]},tokenPrec:0});var s=r(2235);const o=()=>O=>{try{JSON.parse(O.state.doc.toString())}catch(e){if(!(e instanceof SyntaxError))throw e;const r=Q(e,O.state.doc);return[{from:r,message:e.message,severity:"error",to:r}]}return[]};function Q(O,e){let r;return(r=O.message.match(/at position (\d+)/))?Math.min(+r[1],e.length):(r=O.message.match(/at line (\d+) column (\d+)/))?Math.min(e.line(+r[1]).from+ +r[2]-1,e.length):0}const c=s.qp.define({name:"json",parser:P.configure({props:[s.uj.add({Object:(0,s.tC)({except:/^\s*\}/}),Array:(0,s.tC)({except:/^\s*\]/})}),s.x0.add({"Object Array":s.Dv})]}),languageData:{closeBrackets:{brackets:["[","{",'"']},indentOnInput:/^\s*[\}\]]$/}});function i(){return new s.ri(c)}}}]);
//# sourceMappingURL=8703.96bc653a.js.map