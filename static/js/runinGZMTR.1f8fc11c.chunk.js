(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[90],{124:function(e,t,a){"use strict";a.r(t);var n=a(25),r=a(3),c=a(1),l=a.n(c),i=a(5),m=a(29),s=a(10),o=a(0),u=a(4),g=a(30),f=function(){var e,t=l.a.useContext(i.b).param,a=t.stn_list[t.current_stn_idx],n=l.a.useRef(null),m=Object(c.useState)({width:0}),s=Object(u.a)(m,2),o=s[0],g=s[1];Object(c.useEffect)((function(){return g(n.current.getBBox())}),[a.name[0],a.name[1]]);var f=a["l"===t.direction?"parents":"children"],h={name:"translate(".concat(("l"===t.direction?1:-1)*t.svgWidth.runin/4,",45)"),next:"translate(".concat(("l"===t.direction?1:-1)*t.svgWidth.runin/10,",45)")};return l.a.createElement("g",null,l.a.createElement("g",{transform:"gz2otis"===t.info_panel_type?h.name:""},l.a.createElement(d,{ref:n,curName:a.name,curSecName:a.secondaryName,style:Object(r.a)({},"--translate-y","".concat(.5*t.svg_height-50-18*(a.name[1].split("\\").length-1)-(a.secondaryName?29:0),"px"))}),l.a.createElement(x,{lineNum:t.line_num,stnNum:a.num,style:(e={},Object(r.a)(e,"--translate-x","".concat((t.svgWidth.runin+o.width)/2+55,"px")),Object(r.a)(e,"--translate-y","".concat(.5*t.svg_height-30-18*(a.name[1].split("\\").length-1)-(a.secondaryName?29:0),"px")),e)})),l.a.createElement("g",{transform:"gz2otis"===t.info_panel_type?h.next:""},f.includes("linestart")||f.includes("lineend")?l.a.createElement(l.a.Fragment,null):1===f.length?l.a.createElement(E,{nextId:f[0],nameBBox:o}):l.a.createElement(p,{nextIds:f,nameBBox:o})))},d=l.a.forwardRef((function(e,t){var a=e.curName,r=e.curSecName,c=Object(n.a)(e,["curName","curSecName"]);return l.a.createElement("g",Object.assign({id:"big_name"},c),l.a.useMemo((function(){return l.a.createElement("g",{ref:t},l.a.createElement("text",{className:"rmg-name__zh",fontSize:90},a[0]),l.a.createElement("g",{fontSize:36,className:"rmg-name__en"},a[1].split("\\").map((function(e,t){return l.a.createElement("text",{key:t,dy:70+36*t},e)}))))}),[a]),r&&l.a.createElement(h,{secName:r,transform:"translate(0,".concat(70+36*a[1].split("\\").length,")")}))})),h=function(e){var t=e.secName,a=Object(n.a)(e,["secName"]),r=Object(c.useRef)(null),i=Object(c.useState)({x:0,width:0}),m=Object(u.a)(i,2),s=m[0],o=m[1];return Object(c.useEffect)((function(){return o(r.current.getBBox())}),[e.secName.toString()]),l.a.createElement("g",a,l.a.createElement("g",{transform:"translate(0,4.5)",fontSize:36},l.a.createElement("text",{textAnchor:"end",x:s.x-3,className:"rmg-name__zh"},"("),l.a.createElement("text",{textAnchor:"start",x:s.width+s.x+3,className:"rmg-name__zh"},")")),l.a.createElement("g",{ref:r,textAnchor:"middle"},l.a.createElement("text",{className:"rmg-name__zh",fontSize:26},t[0]),l.a.createElement("text",{dy:22,className:"rmg-name__en",fontSize:14},t[1])))},x=function(e){var t=e.lineNum,a=e.stnNum,r=Object(n.a)(e,["lineNum","stnNum"]);return l.a.createElement("g",Object.assign({id:"big_stn_num"},r),l.a.useMemo((function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("path",{className:"rmg-stn rmg-stn--future",d:"M 0,12.95 V -12.95 H -12.95 a 12.95,12.95 0 0,0 0,25.9 h 25.9 a 12.95,12.95 0 0,0 0,-25.9 H 0 "}),l.a.createElement(g.a,Object.assign({transform:"scale(1.4)"},{lineNum:t,stnNum:a})))}),[t,a]))},E=function(e){var t,a=l.a.useContext(i.b).param,n=a.stn_list[e.nextId],m=n.name,s=n.secondaryName,o=Object(c.useState)({width:0}),g=Object(u.a)(o,2),f=g[0],d=g[1],h=l.a.useRef(null);Object(c.useEffect)((function(){return d(h.current.getBBox())}),[m.toString()]);var x=a.stn_list[e.nextId].name[0].length,E=(a.svgWidth.runin-e.nameBBox.width)/2;return l.a.createElement(l.a.Fragment,null,l.a.createElement("g",{id:"big_next"},l.a.createElement("g",{textAnchor:"middle",style:Object(r.a)({},"--translate-x","l"===a.direction?"80px":"".concat(x<=2?a.svgWidth.runin-45-f.width-70:a.svgWidth.runin-45-f.width-52.5,"px"))},l.a.createElement("text",{className:"rmg-name__zh",fontSize:35},"\u4e0b\u7ad9"),l.a.createElement("text",{className:"rmg-name__en",fontSize:17,dy:30},"Next")),l.a.createElement("g",{textAnchor:"start",ref:h,style:Object(r.a)({},"--translate-x","l"===a.direction?"".concat(x<=2?150:132.5,"px"):"".concat(a.svgWidth.runin-45-f.width,"px"))},l.a.createElement("text",{className:"rmg-name__zh",fontSize:35},m[0]),l.a.createElement("g",{fontSize:17},m[1].split("\\").map((function(e,t){return l.a.createElement("text",{className:"rmg-name__en",dy:30+17*t,key:t},e)})))),s&&l.a.createElement("g",{textAnchor:"middle",style:Object(r.a)({},"--translate-x","l"===a.direction?"".concat(x<=2?150:132.5,"px"):"".concat(a.svgWidth.runin-45-f.width,"px"))},l.a.createElement(_,{secName:s,transform:"translate(".concat(f.width/2,",").concat(30+17*m[1].split("\\").length+5,")")}))),l.a.createElement("path",{id:"arrow",d:"M 60,60 L 0,0 L 60,-60 H 100 L 55,-15 H 160 V 15 H 55 L 100,60z",fill:"black",style:(t={},Object(r.a)(t,"--translate-x","l"===a.direction?"".concat((115+35*((x<=2?1:.5)+x)+E)/2-20,"px"):"".concat((a.svgWidth.runin-45-f.width-(x<=2?105:87.5)+E+e.nameBBox.width+55+25.9)/2+20,"px")),Object(r.a)(t,"--rotate","l"===a.direction?"0deg":"180deg"),t)}))},_=function(e){var t=e.secName,a=Object(n.a)(e,["secName"]),r=Object(c.useRef)(null),i=Object(c.useState)({x:0,width:0}),m=Object(u.a)(i,2),s=m[0],o=m[1];return Object(c.useEffect)((function(){return o(r.current.getBBox())}),[e.secName.toString()]),l.a.createElement("g",a,l.a.createElement("g",{transform:"translate(0,2.5)",fontSize:25},l.a.createElement("text",{textAnchor:"end",x:s.x-3,className:"rmg-name__zh"},"("),l.a.createElement("text",{textAnchor:"start",x:s.width+s.x+3,className:"rmg-name__zh"},")")),l.a.createElement("g",{ref:r},l.a.createElement("text",{className:"rmg-name__zh",fontSize:18},t[0]),l.a.createElement("text",{className:"rmg-name__en",fontSize:10,dy:15},t[1])))},p=function(e){var t,a=l.a.useContext(i.b),n=a.param,m=a.routes,g=e.nextIds.map((function(e){return n.stn_list[e].name})),f=Object(c.useState)({width:0}),d=Object(u.a)(f,2),h=d[0],x=d[1],E=Object(c.useRef)([]);Object(c.useEffect)((function(){x((function(e){return Object(o.a)(Object(o.a)({},e),{},{width:0})})),E.current.forEach((function(e){var t=null===e||void 0===e?void 0:e.getBBox();x((function(e){return t?e.width>t.width?e:t:e}))}))}),[g.toString()]);var _=e.nextIds.map((function(e){return m.reduce((function(t,a){return a.includes(e)?t.concat(a.filter((function(e){return!["linestart","lineend"].includes(e)})).slice("l"===n.direction?0:-1)[0]):t}),[])})),p=Math.max.apply(Math,Object(s.a)(g.map((function(e){return e[0].length})))),z=(n.svgWidth.runin-e.nameBBox.width)/2;return l.a.createElement(l.a.Fragment,null,l.a.createElement("g",{id:"big_next_2"},g.map((function(e,t){return l.a.createElement(l.a.Fragment,{key:t},l.a.createElement("g",{textAnchor:"middle",style:Object(r.a)({},"--translate-x","l"===n.direction?"72px":"".concat(n.svgWidth.runin-45-h.width-41,"px"))},l.a.createElement("text",{className:"rmg-name__zh"},"\u4e0b\u7ad9"),l.a.createElement("text",{className:"rmg-name__en",y:22},"Next")),l.a.createElement("g",{ref:function(e){return E.current[t]=e},textAnchor:"start",style:Object(r.a)({},"--translate-x","l"===n.direction?"113px":"".concat(n.svgWidth.runin-45-h.width,"px"))},l.a.createElement("text",{className:"rmg-name__zh"},e[0]),e[1].split("\\").map((function(e,t){return l.a.createElement("text",{key:t,className:"rmg-name__en",y:22+13*t},e)})),l.a.createElement("text",{className:"rmg-name__zh",y:-35},_[t].map((function(e){return n.stn_list[e].name[0]})).join("/")+"\u65b9\u5411"),l.a.createElement("text",{className:"rmg-name__en rmg-name__gzmtr--next2-dest",y:-20},"Towards "+_[t].map((function(e){return n.stn_list[e].name[1]})).join("/").replace("\\"," "))))}))),l.a.createElement("path",{id:"arrow",d:"M 60,60 L 0,0 L 60,-60 H 100 L 55,-15 H 160 V 15 H 55 L 100,60z",fill:"black",style:(t={},Object(r.a)(t,"--translate-x","l"===n.direction?"".concat((99+27*(1+p)+z)/2-20,"px"):"".concat((n.svgWidth.runin-45-h.width-41-27+z+e.nameBBox.width+55+25.9)/2+20,"px")),Object(r.a)(t,"--rotate","l"===n.direction?"0deg":"180deg"),t)}))},z=(t.default=function(){var e=c.useContext(i.b).param,t={platform:"translate(".concat("l"===e.direction?50:-50,",45)")};return c.createElement(c.Fragment,null,c.createElement(m.a,{variant:e.info_panel_type,isShowLight:"gz2otis"!==e.info_panel_type,isShowPSD:"gz2otis"!==e.info_panel_type&&e.psd_num}),c.createElement("g",{transform:"gz2otis"===e.info_panel_type?t.platform:""},c.createElement(z,{num:e.platform_num,style:Object(r.a)({},"--translate-x","".concat("l"===e.direction?e.svgWidth.runin-100:100,"px"))})),c.createElement(f,null),"gz2otis"===e.info_panel_type&&c.createElement(b,null))},function(e){var t=e.num,a=Object(n.a)(e,["num"]);return c.createElement("g",Object.assign({id:"platform"},a),c.useMemo((function(){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:0,cy:0,r:30,fill:"var(--rmg-theme-colour)"}),c.createElement("text",{className:"rmg-name__en",fontSize:38,dy:-9.5},t),c.createElement("text",{className:"rmg-name__zh",fontSize:13,dy:10},"\u7ad9\u53f0"),c.createElement("text",{className:"rmg-name__en",fontSize:9,dy:21},"Platform"))}),[t]))}),b=function(){var e=c.useContext(i.b).param;return c.createElement("g",{id:"otis_frame",strokeWidth:3,stroke:"black"},c.createElement("line",{y2:e.svg_height,transform:"translate(".concat(e.svgWidth.runin/2,",0)")}),c.createElement("line",{x2:e.svgWidth.runin,transform:"translate(0,90)"}))}},25:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}a.d(t,"a",(function(){return n}))},29:function(e,t,a){"use strict";var n=a(3),r=a(1),c=a.n(r);t.a=function(e){var t=function(e){switch(e){case"gz28":case"gz2otis":case"gz6":case"gzgf":return 60;case"gz1":case"gz3":return 40;case"gz4":case"gz5":case"gz1421":return 20;default:return 0}}(e.variant),a=c.a.useMemo((function(){switch(e.variant){case"gz1":return c.a.createElement("circle",{cy:-58,r:16,fill:"red"});case"gz28":case"gz2otis":return c.a.createElement("ellipse",{cy:-30,rx:24,ry:12,fill:"orange"});case"gz3":return c.a.createElement("rect",{x:-15,y:-55,height:30,width:30,fill:"red"});case"gz6":return c.a.createElement("ellipse",{cy:-30,rx:24,ry:12,fill:"white"});case"gz1421":return c.a.createElement("ellipse",{cy:-38,rx:24,ry:12,fill:"orange"});case"gz5":return c.a.createElement("rect",{x:-30,y:-70,height:30,width:60,fill:"orange"});case"gz4":return c.a.createElement("rect",{x:-50,y:-50,height:25,width:100,fill:"whitesmoke"});case"gzgf":return c.a.createElement("rect",{x:-30,y:-58,height:30,width:60,fill:"orange"});default:return c.a.createElement(c.a.Fragment,null)}}),[e.variant]);return c.a.createElement("g",{transform:"translate(0,".concat("gz4"===e.variant?-20:0,")")},c.a.createElement("rect",{id:"strip_gz",style:Object(n.a)({},"--height","".concat(t,"px"))}),c.a.createElement("g",{style:{transform:"translate(calc(var(--rmg-svg-width) / 2),var(--rmg-svg-height))"}},e.isShowLight&&a),!1!==e.isShowPSD&&c.a.createElement(l,e))};var l=c.a.memo((function(e){var t,a=["gz28","gz2otis","gz6","gzgf"].includes(e.variant),r=function(e){switch(e){case"gz1":case"gz3":return"82px";case"gz4":return"65px";case"gz5":return"80px";case"gz1421":return"62px";default:return"58px"}}(e.variant);return c.a.createElement("g",{textAnchor:"middle",fill:a?"#000":"var(--rmg-theme-fg)",style:(t={},Object(n.a)(t,"--psd-dy",r),Object(n.a)(t,"transform","translate(var(--translate-x), var(--translate-y))"),Object(n.a)(t,"--translate-x","calc(var(--rmg-svg-width) / 2 + 80px)"),Object(n.a)(t,"--translate-y","calc(var(--rmg-svg-height) - var(--psd-dy, 58px))"),t)},c.a.createElement("rect",{height:40,width:40,rx:4,x:-20,fill:a?"#fff":"var(--rmg-theme-colour)"}),c.a.createElement("text",{className:"rmg-name__en",fontSize:20,dy:12},e.isShowPSD),c.a.createElement("text",{className:"rmg-name__zh",fontSize:12,dy:26},"\u5c4f\u853d\u95e8"),c.a.createElement("text",{className:"rmg-name__en",fontSize:6.5,dy:36},"Screen Door"))}),(function(e,t){return e.variant===t.variant&&e.isShowPSD===t.isShowPSD}))},30:function(e,t,a){"use strict";var n=a(4),r=a(25),c=a(1),l=a.n(c);t.a=function(e){var t=e.lineNum,a=e.stnNum,c=Object(r.a)(e,["lineNum","stnNum"]),i=l.a.useRef(null),m=l.a.useState({width:15.03125}),s=Object(n.a)(m,2),o=s[0],u=s[1];l.a.useEffect((function(){return u(i.current.getBBox())}),[t]);var g=o.width>15.03125?15.03125/o.width:1,f=2===t.length?g:1;return l.a.createElement("g",Object.assign({textAnchor:"middle",fontSize:13.5},c),l.a.useMemo((function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("g",{transform:"translate(-9.25,0)scale(".concat(g,")")},l.a.createElement("text",{ref:i,className:"rmg-name__zh"},t)),l.a.createElement("g",{transform:"translate(9.25,0)scale(".concat(f,")")},l.a.createElement("text",{className:"rmg-name__zh"},a)))}),[o.width,t,a]))}}}]);
//# sourceMappingURL=runinGZMTR.1f8fc11c.chunk.js.map