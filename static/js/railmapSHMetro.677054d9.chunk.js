(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[89],{120:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(4),i=n(3),l=n(0),o=n(5),s=n(26),u=n(25),f=n(10),m=function(e){var t=Object(r.useContext)(o.b).param,n=t.stn_list[e.stnId],c=([].concat(Object(f.a)(n.branch.left),Object(f.a)(n.branch.right)).length?8+12*n.name[1].split("\\").length:0)*("l"===t.direction?1:-1),i="stn_sh";return 3===n.services.length?i="direct_sh":2===n.services.length?i="express_sh":n.transfer.info.reduce((function(e,t){return e+t.length}),0)&&(i="int2_sh"),a.a.createElement(a.a.Fragment,null,a.a.createElement("use",{xlinkHref:"#".concat(i),stroke:-1===e.stnState?"#aaa":"var(--rmg-theme-colour)"}),a.a.createElement("g",{transform:"translate(".concat(c,",0)")},a.a.createElement(h,{name:n.name,infos:n.transfer.info,stnState:e.stnState,direction:t.direction})))},h=function(e){var t,n,i=e.name[1].split("\\").length,l=Object(r.useRef)(null),o=a.a.useState({width:0}),s=Object(c.a)(o,2),u=s[0],m=s[1];a.a.useEffect((function(){return m(l.current.getBBox())}),Object(f.a)(e.name));var h=u.width+5;return a.a.createElement("g",{transform:"translate(".concat("l"===e.direction?6:-6,",-6)rotate(").concat("l"===e.direction?-45:45,")")},e.infos.reduce((function(e,t){return e+t.length}),0)&&a.a.createElement("line",{x1:0,x2:"l"===e.direction?h:-h,stroke:-1===e.stnState?"#aaa":"black",strokeWidth:.5}),a.a.createElement(g,{intInfos:e.infos[1]?(t=[]).concat.apply(t,Object(f.a)(e.infos)):e.infos[0],transform:"translate(".concat(h*("l"===e.direction?1:-1),",-10.75)"),direction:e.direction}),a.a.createElement("g",{textAnchor:"l"===e.direction?"start":"end",transform:"translate(0,".concat(-16.15625-12*(i-1),")")},a.a.createElement(d,{ref:l,stnName:e.name,fill:-1===e.stnState?"#aaa":0===e.stnState?"red":"black"}),(null===(n=e.infos[1])||void 0===n?void 0:n.length)&&a.a.createElement("g",{transform:"translate(".concat((h+15*e.infos.reduce((function(e,t){return e+t.length}),0))*("l"===e.direction?1:-1),",-22)")},a.a.createElement(v,{osiInfos:e.infos[1]}))))},d=a.a.forwardRef((function(e,t){var n=e.stnName,r=Object(u.a)(e,["stnName"]);return a.a.createElement("g",Object.assign({ref:t},r),a.a.useMemo((function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("text",{className:"rmg-name__zh"},n[0]),a.a.createElement("g",{fontSize:9.6},n[1].split("\\").map((function(e,t){return a.a.createElement("text",{key:t,className:"rmg-name__en",dy:12*(t+1)},e)}))))}),Object(f.a)(n)))})),g=function(e){var t=e.intInfos,n=(e.direction,Object(u.a)(e,["intInfos","direction"])),r=0;return a.a.createElement("g",Object.assign({fontSize:14,textAnchor:"middle"},n),t.map((function(t,n){var c=Boolean(t[4].match(/^\d.*$/)),i=Boolean(t[4].match(/^\u78c1(\u60ac)*\u6d6e/));"r"===e.direction&&(r-=(c||i?20:14*t[4].length+12+0)+(0===n?0:5));var l=a.a.createElement("g",null);return l=i?a.a.createElement("g",{transform:"translate(".concat(r,",-16)scale(0.1428571429)"),key:n},a.a.createElement(p,{info:t})):c?a.a.createElement("g",{transform:"translate(".concat(r,",0)"),key:n},a.a.createElement(E,{info:t})):a.a.createElement("g",{transform:"translate(".concat(r,",0)"),key:n},a.a.createElement(b,{info:t})),"l"===e.direction&&(r+=c||i?25:14*t[4].length+12+5),l})))},p=Object(r.memo)((function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement("use",{xlinkHref:"#intbox_maglev",fill:e.info[2],stroke:e.info[2]}))}),(function(e,t){return e.info.toString()===t.info.toString()})),E=Object(r.memo)((function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement("use",{xlinkHref:"#intbox_number",fill:e.info[2]}),a.a.createElement("text",{x:10,className:"rmg-name__zh",fill:e.info[3],dominantBaseline:"central"},e.info[4].match(/(\d*)\w+/)[0]))}),(function(e,t){return e.info.toString()===t.info.toString()})),b=Object(r.memo)((function(e){var t=e.info[4].split("\\")[0].length;return a.a.createElement(a.a.Fragment,null,a.a.createElement("rect",{height:22,width:14*t+12,y:-11,fill:e.info[2]}),a.a.createElement("text",{x:7*t+6,className:"rmg-name__zh",fill:e.info[3],dominantBaseline:"central"},e.info[4].split("\\")[0]))}),(function(e,t){return e.info.toString()===t.info.toString()})),v=function(e){var t=e.osiInfos.map((function(e){return e[4]}));return a.a.useMemo((function(){return a.a.createElement("g",{textAnchor:"middle",fontSize:"50%"},a.a.createElement("text",{className:"rmg-name__zh",dy:-5},"\u6362\u4e58"+t.join("\uff0c")),a.a.createElement("text",{className:"rmg-name__zh",dy:5},"\u4ec5\u9650\u516c\u5171\u4ea4\u901a\u5361"),a.a.createElement("text",{className:"rmg-name__en",dy:12.5,fontSize:"75%"},"Only for Public Transportation Card"))}),[t.toString()])},O=function(){var e=Object(r.useContext)(o.b),t=e.param,n=e.routes,c=e.branches,u=e.deps,f=Object(s.b)(t.stn_list,(function(){return 0}),(function(){return 0})),m=Object(s.c)("linestart","lineend",f),h=Object(s.c)(m.nodes[1],m.nodes.slice(-2)[0],f),d=a.a.useMemo((function(){return console.log("computing x shares"),Object.keys(t.stn_list).reduce((function(e,t){return Object(l.a)(Object(l.a)({},e),{},Object(i.a)({},t,Object(s.f)(t,f,c)))}),{})}),[c.toString(),JSON.stringify(f)]),g=[t.svgWidth.railmap*t.padding/100,t.svgWidth.railmap*(1-t.padding/100)],p=Object.keys(d).reduce((function(e,t){return Object(l.a)(Object(l.a)({},e),{},Object(i.a)({},t,g[0]+d[t]/h.len*(g[1]-g[0])))}),{}),E=a.a.useMemo((function(){return console.log("computing y shares"),Object.keys(t.stn_list).reduce((function(e,t){return Object(l.a)(Object(l.a)({},e),{},Object(i.a)({},t,c[0].includes(t)?0:3))}),{})}),[u]),b=Object.keys(E).reduce((function(e,n){return Object(l.a)(Object(l.a)({},e),{},Object(i.a)({},n,-E[n]*t.branch_spacing))}),{}),v=a.a.useMemo((function(){return Object(s.e)(t.current_stn_idx,n,t.direction)}),[t.current_stn_idx,t.direction,n.toString()]),O=["local","express","direct"],S=Object.values(t.stn_list).map((function(e){return e.services})).flat().reduce((function(e,t){return e[O.indexOf(t)]=!0,e}),[!1,!1,!1]).map((function(e,t){return[O[t],e]})).filter((function(e){return e[1]})).map((function(e){return e[0]})),w=Object(s.d)(c,v),M=S.map((function(e){return Object.keys(w).reduce((function(n,r){var a;return Object(l.a)(Object(l.a)({},n),{},(a={},Object(i.a)(a,r,w[r].map((function(n){return _(n,r,p,b,t.direction,e,S.length)})).filter((function(e){return""!==e}))),Object(i.a)(a,"service",e),a))}),{})}));return a.a.createElement("g",{id:"main",transform:"translate(0,".concat(t.svg_height-63,")")},a.a.createElement(y,{paths:M,direction:t.direction}),a.a.createElement(j,{xs:p,ys:b,stnStates:v}),a.a.createElement(x,{servicesLevel:S,dy:100-t.svg_height,direction:t.direction,lineXs:g}),a.a.createElement(k,null))},y=function(e){return a.a.createElement(a.a.Fragment,null,e.paths.map((function(t,n){return a.a.createElement("g",{key:"servicePath".concat(n),transform:"translate(0,".concat(25*n,")")},a.a.createElement("g",null,t.pass.map((function(t,n){return a.a.createElement("path",{key:n,stroke:"gray",strokeWidth:12,fill:"none",d:t,markerStart:"l"===e.direction?"url(#arrow_gray)":void 0,markerEnd:"r"===e.direction?"url(#arrow_gray)":void 0})}))),a.a.createElement("g",null,t.main.map((function(t,r){return a.a.createElement("path",{key:r,stroke:"var(--rmg-theme-colour)",strokeWidth:12,fill:"none",d:t,markerStart:"l"===e.direction?"url(#arrow_theme_left)":void 0,markerEnd:"r"===e.direction?"url(#arrow_theme_right)":void 0,filter:2===n?"url(#contrast-direct)":1===n?"url(#contrast-express)":""})}))))})))},_=function(e,t,n,r,a,i,l){var o=Object(c.a)([],2),s=o[0],u=o[1],f={},m=30,h={local:0,express:20,direct:40}[i],d=l>1?50:0;if(e.forEach((function(e){var t=n[e],a=r[e];if(!s&&0!==s)return u=t,s=a,void(f.start=[t,a]);0===a?a!==s&&(f.bifurcate=[u,s]):a!==s&&(f.bifurcate=[t,a]),f.end=[t,a],u=t,s=a})),f.hasOwnProperty("start")){if(f.hasOwnProperty("end")){if(f.hasOwnProperty("bifurcate")){var g=Object(c.a)(f.start,2),p=g[0],E=g[1],b=Object(c.a)(f.end,2),v=b[0],O=b[1];return"main"===t?"l"===a?O>E?"M ".concat(p-m,",").concat(E," H ").concat(v," V ").concat(O):"M ".concat(p,",").concat(E," V ").concat(O," H ").concat(v):O>E?"M ".concat(p,",").concat(E," H ").concat(v," V ").concat(O):"M ".concat(p,",").concat(E," V ").concat(O," H ").concat(v+m):O>E?"M ".concat(p-m,",").concat(E," H ").concat(v," V ").concat(O):"M ".concat(p,",").concat(E," V ").concat(O," H ").concat(v+m)}var y=Object(c.a)(f.start,2),_=y[0],j=y[1],x=f.end[0];return"main"===t?"l"===a?"M ".concat(_-m-h,",").concat(j," H ").concat(x):"M ".concat(_,",").concat(j," H ").concat(x+m+h):"l"===a?"M ".concat(_,",").concat(j," H ").concat(x+m+d):"M ".concat(_-m-d,",").concat(j," H ").concat(x)}var k=Object(c.a)(f.start,2),S=k[0],w=k[1];return"main"===t?"l"===a?"M ".concat(S-m-h,",").concat(w," H ").concat(S):"M ".concat(S,",").concat(w," H ").concat(S+m+h):"l"===a?"M ".concat(S,",").concat(w," L ").concat(S+m+d,",").concat(w):"M ".concat(S-m-d,",").concat(w," L ").concat(S,",").concat(w)}return""},j=function(e){var t=Object(r.useContext)(o.b).param;return a.a.createElement("g",null,Object.keys(t.stn_list).filter((function(e){return!["linestart","lineend"].includes(e)})).map((function(t){return a.a.createElement("g",{key:t,transform:"translate(".concat(e.xs[t],",").concat(e.ys[t],")")},a.a.createElement(m,{stnId:t,stnState:e.stnStates[t]}))})))},x=function(e){var t=Object(r.useContext)(o.b).param;if(1===e.servicesLevel.length)return a.a.createElement(a.a.Fragment,null);var n=e.servicesLevel.map((function(e){return{local:"\u666e\u901a\u8f66",express:"\u5927\u7ad9\u8f66",direct:"\u76f4\u8fbe\u8f66"}[e]})),c="r"===e.direction?e.lineXs[0]-42:e.lineXs[1]+42,i=2===e.servicesLevel.length?350:500;return a.a.createElement("g",null,n.map((function(e,t){return a.a.createElement("g",{key:e,transform:"translate(".concat(c,",").concat(25*t,")")},a.a.createElement("rect",{x:-27.5,height:10,width:55,fill:"white",stroke:"black",y:-5}),a.a.createElement("text",{className:"rmg-name__zh",fontSize:9,y:3,textAnchor:"middle"},"".concat(e,"\u8fd0\u884c\u7ebf")))})),a.a.createElement("g",{transform:"translate(".concat("r"===e.direction?30:t.svgWidth.railmap-i,",").concat(e.dy,")")},a.a.createElement("text",{className:"rmg-name__zh"},"\u56fe\u4f8b\uff1a"),n.map((function(e,t){return a.a.createElement("g",{key:"serviceLevel".concat(t),transform:"translate(".concat(150*t+50,",0)")},a.a.createElement("line",{x1:"0",x2:"35",y1:"-5",y2:"-5",stroke:"var(--rmg-theme-colour)",strokeWidth:"12",filter:2===t?"url(#contrast-direct)":1===t?"url(#contrast-express)":""}),a.a.createElement("use",{x:"17.5",y:"-5",xlinkHref:"#stn_sh",fill:"var(--rmg-theme-colour)"}),a.a.createElement("text",{x:"40",className:"rmg-name__zh"},"".concat(e,"\u505c\u9760\u7ad9")))}))))},k=function(){var e=Object(r.useContext)(o.b).param;return a.a.createElement("g",{transform:"translate(".concat("l"===e.direction?50:e.svgWidth.railmap-150,",").concat(100-e.svg_height,")")},a.a.createElement("text",{className:"rmg-name__zh"},"\u5217\u8f66\u524d\u8fdb\u65b9\u5411"),a.a.createElement("path",{d:"M60,60L0,0L60-60H100L55-15H160V15H55L100,60z",fill:"var(--rmg-theme-colour)",transform:"translate(".concat("l"===e.direction?-30:125,",-5)rotate(").concat("l"===e.direction?0:180,")scale(0.15)")}))},S=r.memo((function(){return r.createElement(r.Fragment,null,r.createElement(w,null),r.createElement(O,null))})),w=(t.default=S,r.memo((function(){return r.createElement("defs",null,r.createElement("circle",{id:"stn_sh",fill:"#fff",strokeWidth:2,r:5}),r.createElement("path",{id:"int2_sh",fill:"#fff",strokeWidth:2,d:"M -5,0 a 5,5 0 1 1 10,0 V10 a 5,5 0 1 1 -10,0Z"}),r.createElement("path",{id:"express_sh",fill:"#fff",strokeWidth:2,d:"M -5,0 a 5,5 0 1 1 10,0 V25 a 5,5 0 1 1 -10,0Z"}),r.createElement("path",{id:"direct_sh",fill:"#fff",strokeWidth:2,d:"M -5,0 a 5,5 0 1 1 10,0 V50 a 5,5 0 1 1 -10,0Z"}),r.createElement("rect",{id:"intbox_number",height:22,width:20,y:-11}),r.createElement("g",{id:"intbox_maglev",transform:"translate(-25,0)"},r.createElement("rect",{id:"maglev_5",height:144,width:130,y:"40",x:"30",strokeWidth:10}),r.createElement("path",{id:"maglev_3",fill:"white",d:"m90,55a40,5 0 0 0 -40,3a5,5 0 0 0 -5,5a5,60 0 0 0 -3,60a5,5 0 0 0 5,5l96,0a5,5 0 0 0 5,-5a5,60 0 0 0 -3,-60a5,5 0 0 0 -5,-5a40,5 0 0 0 -40,-3l-5,-10l-5,10"}),r.createElement("path",{id:"maglev_4",fill:"white",d:"m90,140l-40,0a10,5 0 0 1 -10,-5l0,25a10,15 0 0 0 10,15l15,0l0,-10l-15,0l0,-15l90,0l0,15l-15,0l0,10l15,0a10,15 0 0 0 10,-15l0,-25a10,5 0 0 1 -10,5l-50,0"}),r.createElement("rect",{id:"maglev_1",height:"25",width:"40",y:"80",x:"50"}),r.createElement("rect",{id:"maglev_2",height:"25",width:"40",y:"80",x:"100"})),r.createElement("marker",{id:"arrow_gray",viewBox:"-1.5 0 3 1.5",refY:.5},r.createElement("path",{d:"M0,0L1,1H-1z",fill:"gray"})),r.createElement("marker",{id:"arrow_theme_left",refX:1,refY:.5},r.createElement("path",{d:"M1,0L0,1H1z",fill:"var(--rmg-theme-colour)"})),r.createElement("marker",{id:"arrow_theme_right",refY:.5},r.createElement("path",{d:"M0,0L1,1H-1z",fill:"var(--rmg-theme-colour)"})),r.createElement("filter",{id:"contrast-direct",filterUnits:"userSpaceOnUse"},r.createElement("feComponentTransfer",null,r.createElement("feFuncR",{type:"linear",slope:.5,intercept:.25}),r.createElement("feFuncG",{type:"linear",slope:.5,intercept:.25}),r.createElement("feFuncB",{type:"linear",slope:.5,intercept:.25}))),r.createElement("filter",{id:"contrast-express",filterUnits:"userSpaceOnUse"},r.createElement("feComponentTransfer",null,r.createElement("feFuncR",{type:"linear",slope:.75,intercept:.125}),r.createElement("feFuncG",{type:"linear",slope:.75,intercept:.125}),r.createElement("feFuncB",{type:"linear",slope:.75,intercept:.125}))))})))},25:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,"a",(function(){return r}))},26:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return f})),n.d(t,"f",(function(){return m})),n.d(t,"e",(function(){return h})),n.d(t,"a",(function(){return d})),n.d(t,"d",(function(){return g}));var r=n(4),a=n(14),c=n(15),i=n(10),l=n(16),o=n(3),s=n(0),u=(n(11),function(e,t,n){return Object.keys(e).reduce((function(r,a){return Object(s.a)(Object(s.a)({},r),{},Object(o.a)({},a,e[a].children.reduce((function(r,c){return Object(s.a)(Object(s.a)({},r),{},Object(o.a)({},c,1+t(e,c)+n(e,a)))}),{})))}),{})}),f=function e(t,n,r){if(t===n)return{len:0,nodes:[t]};var a=[],c=[];Object.keys(r[t]).forEach((function(i){var l=e(i,n,r);l.len<0||(a.push(r[t][i]+l.len),l.nodes.unshift(t),c.push(l.nodes))}));var i=Math.max.apply(Math,a);return{len:i,nodes:c[a.indexOf(i)]}},m=function(e,t,n){var r=f("linestart","lineend",t);if(r.nodes.includes(e))return f(r.nodes[1],e,t).len;for(var a=n.filter((function(t){return t.includes(e)}))[0],c=e;!r.nodes.includes(c);)c=a[a.indexOf(c)-1];for(var i=e;!r.nodes.includes(i);)i=a[a.indexOf(i)+1];var l="linestart"===c,o=[];return l||"lineend"===i?l?(o[0]=0,o[1]=f(r.nodes[1],i,t).len,o[2]=f(a[1],e,t).len,o[3]=f(e,i,t).len):(o[0]=f(r.nodes[1],c,t).len,o[1]=f(c,r.nodes.slice(-2)[0],t).len,o[2]=f(c,e,t).len,o[3]=f(e,a.slice(-2)[0],t).len):(o[0]=f(r.nodes[1],c,t).len,o[1]=f(c,i,t).len,o[2]=f(c,e,t).len,o[3]=f(e,i,t).len),o[0]+o[2]*o[1]/(o[2]+o[3])},h=function(e,t,n){var r;return console.log("computing stations' states"),Object(i.a)(new Set((r=[]).concat.apply(r,Object(i.a)(t)))).reduce((function(r,a){return Object(s.a)(Object(s.a)({},r),{},Object(o.a)({},a,a===e?0:("r"===n?function(e,t,n){var r,a=Object(l.a)(n);try{for(a.s();!(r=a.n()).done;){var c=r.value,i=c.indexOf(e),o=c.indexOf(t);if(-1!==i&&i<o)return!0}}catch(s){a.e(s)}finally{a.f()}return!1}(e,a,t):function(e,t,n){var r,a=Object(l.a)(n);try{for(a.s();!(r=a.n()).done;){var c=r.value,i=c.indexOf(e),o=c.indexOf(t);if(-1!==o&&o<i)return!0}}catch(s){a.e(s)}finally{a.f()}return!1}(e,a,t))?1:-1))}),{})},d=function(){function e(t){var n=this;Object(a.a)(this,e),this.yShares={},this.xShares={},this.namePoss={},this.stnList={},this.criticalPath={},this.leftWideFactor=function(e){return 0},this.rightWideFactor=function(e){return 0},this.pathWeight=function(e,t){return n.stnList[e].children.includes(t)?1+n.rightWideFactor(e)+n.leftWideFactor(t):-1/0},this.pathTurnParams=function(e){var t=35-17.5*Math.sqrt(3),n=e-2*t;return{tr:35,dx_a:17.5,dy_a:t,dx_l:n*Math.sqrt(3),dy_l:n}},this.pathTurnSE=function(e){var t=n.pathTurnParams(e),r=t.tr,a=t.dx_a,c=t.dy_a,i=t.dx_l,l=t.dy_l;return"a ".concat(r,",").concat(r," 0 0,1 ").concat(a,",").concat(c," l ").concat(i,",").concat(l," a ").concat(r,",").concat(r," 0 0,0 ").concat(a,",").concat(c)},this.pathTurnNE=function(e){var t=n.pathTurnParams(e),r=t.tr,a=t.dx_a,c=t.dy_a,i=t.dx_l,l=t.dy_l;return"a ".concat(r,",").concat(r," 0 0,0 ").concat(a,",").concat(-c," l ").concat(i,",").concat(-l," a ").concat(r,",").concat(r," 0 0,1 ").concat(a,",").concat(-c)},this.stnList=t.stnList,this.criticalPath=t.criticalPath}return Object(c.a)(e,[{key:"getYShare",value:function(e,t){if(e in this.yShares)return this.yShares[e];if(["linestart","lineend"].includes(e)||this.stnList[e].parents.length>1||this.stnList[e].children.length>1)return this.yShares[e]=0,0;var n=this.stnList[e].parents[0];if(n){if(1===this.stnList[n].children.length){var r=this.getYShare(n);return this.yShares[e]=r,r}var a=0===this.stnList[n].children.indexOf(e)?1:-1;return this.yShares[e]=a,a}return this.yShares[e]=0,0}},{key:"_linePath",value:function(e,t,n,a,c,i,l){var o=this,s=Object(r.a)([],3),u=s[0],f=s[1],m=s[2],h=[],d=this.pathTurnParams(i),g=d.dx_a+d.dx_l/2,p=(t[1]-t[0])/l.len*.8,E=((t[1]-t[0])/l.len-2*g)/2;return E+p<0&&console.warn("SVG width too small! ".concat(E+p)),e.forEach((function(t){var r=a[t],l=c[t];if(!f&&0!==f)return u=t,m=r,f=l,void(1===e.length?h.push("M ".concat(r,",").concat(l)):n[0].includes(t)?n[0].includes(e[1])?h.push("M ".concat(r,",").concat(l)):(a[e[1]]>0&&h.push("M ".concat(r,",").concat(l+9.68)),c[e[1]]<0&&h.push("M ".concat(r,",").concat(l-9.68))):h.push("M ".concat(r,",").concat(l)));l>f?(h.push("h ".concat(0===l?r-m-p*o.leftWideFactor(t)-E-2*g:p*o.rightWideFactor(u)+E)),h.push(o.pathTurnSE(i))):l<f&&(h.push("h ".concat(0===l?r-m-p*o.leftWideFactor(t)-E-2*g:p*o.rightWideFactor(u)+E)),h.push(o.pathTurnNE(i))),h.push("H ".concat(r)),u=t,m=r,f=l})),h.join(" ").replace(/( H ([\d.]+))+/g," H $2")}}],[{key:"getYShares",value:function(e,t){console.log("computing y shares");var n=new this({stnList:e});return Object.keys(e).forEach((function(e){["linestart","lineend"].includes(e)||e in n.yShares||n.getYShare(e,t)})),n.yShares}},{key:"drawLine",value:function(e,t,n,r,a,c,i,l){var o=this,s={main:[],pass:[]};return e.forEach((function(u,f){var m=(u=u.filter((function(e){return!["linestart","lineend"].includes(e)}))).filter((function(e){return t[e]>=0})),h=u.filter((function(e){return t[e]<=0}));1===m.length&&(h=u),0===m.filter((function(e){return-1!==h.indexOf(e)})).length&&m.length&&(h[0]===u[0]?h.push(m[0]):m[0]===u[0]&&m[m.length-1]===u[u.length-1]&&h.length?(h=u,m=[]):h.unshift(m[m.length-1])),s.main.push(new o({stnList:n,criticalPath:l})._linePath(m,r,e,a,c,i,l)),s.pass.push(new o({stnList:n,criticalPath:l})._linePath(h,r,e,a,c,i,l))})),s}}]),e}(),g=function(e,t){var n={main:[],pass:[]};return e.forEach((function(e){var r=(e=e.filter((function(e){return!["linestart","lineend"].includes(e)}))).filter((function(e){return t[e]>=0})),a=e.filter((function(e){return t[e]<=0}));1===r.length&&(a=e),0===r.filter((function(e){return-1!==a.indexOf(e)})).length&&r.length&&(a[0]===e[0]?a.push(r[0]):r[0]===e[0]&&r[r.length-1]===e[e.length-1]&&a.length?(a=e,r=[]):a.unshift(r[r.length-1])),n.main.push(r),n.pass.push(a)})),n}}}]);
//# sourceMappingURL=railmapSHMetro.677054d9.chunk.js.map