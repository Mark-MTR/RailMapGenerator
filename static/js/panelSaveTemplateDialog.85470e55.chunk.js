(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[81],{103:function(e,n,a){var t={"./basic/blank":[33,0],"./basic/blank.ts":[33,0],"./basic/default":[70,42],"./basic/default.ts":[70,42],"./gzmtr/gf":[71,53],"./gzmtr/gf.ts":[71,53],"./gzmtr/gz1":[72,64],"./gzmtr/gz1.ts":[72,64],"./gzmtr/gz14":[73,67],"./gzmtr/gz14.ts":[73,67],"./gzmtr/gz2":[74,37],"./gzmtr/gz2.ts":[74,37],"./gzmtr/gz21":[75,38],"./gzmtr/gz21.ts":[75,38],"./gzmtr/gz3":[76,39],"./gzmtr/gz3.ts":[76,39],"./gzmtr/gz4":[77,40],"./gzmtr/gz4.ts":[77,40],"./gzmtr/gz5":[78,41],"./gzmtr/gz5.ts":[78,41],"./gzmtr/gz6":[79,43],"./gzmtr/gz6.ts":[79,43],"./gzmtr/gz7":[80,44],"./gzmtr/gz7.ts":[80,44],"./gzmtr/gz8":[81,45],"./gzmtr/gz8.ts":[81,45],"./gzmtr/gz9":[82,46],"./gzmtr/gz9.ts":[82,46],"./mlm/taipa":[83,47],"./mlm/taipa.ts":[83,47],"./mtr/ael":[84,48],"./mtr/ael.ts":[84,48],"./mtr/drl":[85,49],"./mtr/drl.ts":[85,49],"./mtr/eal":[86,50],"./mtr/eal.ts":[86,50],"./mtr/isl":[87,51],"./mtr/isl.ts":[87,51],"./mtr/ktl":[88,52],"./mtr/ktl.ts":[88,52],"./mtr/mol":[89,54],"./mtr/mol.ts":[89,54],"./mtr/sile":[90,55],"./mtr/sile.ts":[90,55],"./mtr/tkl":[91,56],"./mtr/tkl.ts":[91,56],"./mtr/twl":[92,57],"./mtr/twl.ts":[92,57],"./mtr/wrl":[93,58],"./mtr/wrl.ts":[93,58],"./shmetro/sh1":[95,60],"./shmetro/sh1 2":[94,59],"./shmetro/sh1 2.ts":[94,59],"./shmetro/sh1.ts":[95,60],"./shmetro/sh11":[96,61],"./shmetro/sh11.ts":[96,61],"./shmetro/sh16":[98,63],"./shmetro/sh16 2":[97,62],"./shmetro/sh16 2.ts":[97,62],"./shmetro/sh16.ts":[98,63],"./shmetro/sh2":[99,65],"./shmetro/sh2.ts":[99,65],"./shmetro/sh5":[100,66],"./shmetro/sh5.ts":[100,66]};function i(e){if(!a.o(t,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=t[e],i=n[0];return a.e(n[1]).then((function(){return a(i)}))}i.keys=function(){return Object.keys(t)},i.id=103,e.exports=i},123:function(e,n,a){"use strict";a.r(n);var t=a(4),i=a(3),r=a(1),s=a(6),m=a(2),l=a(12),o=[{id:"basic",name:{en:"Basic",zh:"\u57fa\u672c"}},{id:"gzmtr",name:{en:"Guangzhou Metro","zh-Hans":"\u5e7f\u5dde\u5730\u94c1","zh-Hant":"\u5ee3\u5dde\u5730\u9435"}},{id:"mlm",name:{en:"Macao LRT",pt:"Metro Ligeiro de Macau","zh-Hans":"\u6fb3\u95e8\u8f7b\u8f68","zh-Hant":"\u6fb3\u9580\u8f15\u8ecc"}},{id:"mtr",name:{en:"MTR","zh-Hans":"\u6e2f\u94c1","zh-Hant":"\u6e2f\u9435"}},{id:"shmetro",name:{en:"Shanghai Metro","zh-Hans":"\u4e0a\u6d77\u5730\u94c1","zh-Hant":"\u4e0a\u6d77\u5730\u9435"}}],z={basic:[{filename:"blank",name:{en:"Blank",zh:"\u7a7a\u767d"}},{filename:"default",name:{en:"Default","zh-Hans":"\u9ed8\u8ba4","zh-Hant":"\u9810\u8a2d"}}],gzmtr:[{filename:"gz1",name:{en:"Line 1","zh-Hans":"1\u53f7\u7ebf","zh-Hant":"1\u865f\u7dda"}},{filename:"gz2",name:{en:"Line 2","zh-Hans":"2\u53f7\u7ebf","zh-Hant":"2\u865f\u7dda"}},{filename:"gz3",name:{en:"Line 3","zh-Hans":"3\u53f7\u7ebf","zh-Hant":"3\u865f\u7dda"}},{filename:"gz4",name:{en:"Line 4","zh-Hans":"4\u53f7\u7ebf","zh-Hant":"4\u865f\u7dda"}},{filename:"gz5",name:{en:"Line 5","zh-Hans":"5\u53f7\u7ebf","zh-Hant":"5\u865f\u7dda"}},{filename:"gz6",name:{en:"Line 6","zh-Hans":"6\u53f7\u7ebf","zh-Hant":"6\u865f\u7dda"}},{filename:"gz7",name:{en:"Line 7","zh-Hans":"7\u53f7\u7ebf","zh-Hant":"7\u865f\u7dda"}},{filename:"gz8",name:{en:"Line 8","zh-Hans":"8\u53f7\u7ebf","zh-Hant":"8\u865f\u7dda"}},{filename:"gz9",name:{en:"Line 9","zh-Hans":"9\u53f7\u7ebf","zh-Hant":"9\u865f\u7dda"}},{filename:"gz14",name:{en:"Line 14","zh-Hans":"14\u53f7\u7ebf","zh-Hant":"14\u865f\u7dda"}},{filename:"gz21",name:{en:"Line 21","zh-Hans":"21\u53f7\u7ebf","zh-Hant":"21\u865f\u7dda"}},{filename:"gf",name:{en:"Guangfo Line","zh-Hans":"\u5e7f\u4f5b\u7ebf","zh-Hant":"\u5ee3\u4f5b\u7dda"}}],mlm:[{filename:"taipa",name:{en:"Taipa Line",pt:"Linha Taipa","zh-Hans":"\u6c39\u4ed4\u7ebf","zh-Hant":"\u6c39\u4ed4\u7dda"}}],mtr:[{filename:"twl",name:{en:"Tsuen Wan Line","zh-Hans":"\u8343\u6e7e\u7ebf","zh-Hant":"\u8343\u7063\u7dab"}},{filename:"ktl",name:{en:"Kwun Tong Line","zh-Hans":"\u89c2\u5858\u7ebf","zh-Hant":"\u89c0\u5858\u7dab"}},{filename:"isl",name:{en:"Island Line","zh-Hans":"\u6e2f\u5c9b\u7ebf","zh-Hant":"\u6e2f\u5cf6\u7dab"}},{filename:"tkl",name:{en:"Tseung Kwan O Line","zh-Hans":"\u5c06\u519b\u6fb3\u7ebf","zh-Hant":"\u5c07\u8ecd\u6fb3\u7dab"}},{filename:"sile",name:{en:"South Island Line","zh-Hans":"\u5357\u6e2f\u5c9b\u7ebf","zh-Hant":"\u5357\u6e2f\u5cf6\u7dab"}},{filename:"eal",name:{en:"East Rail Line","zh-Hans":"\u4e1c\u94c1\u7ebf","zh-Hant":"\u6771\u9435\u7dab"}},{filename:"drl",name:{en:"Disneyland Resort Line","zh-Hans":"\u8fea\u58eb\u5c3c\u7ebf","zh-Hant":"\u8fea\u58eb\u5c3c\u7dab"}},{filename:"ael",name:{en:"Airport Express","zh-Hans":"\u673a\u573a\u5feb\u7ebf","zh-Hant":"\u6a5f\u5834\u5feb\u7dab"}},{filename:"wrl",name:{en:"West Rail Line","zh-Hans":"\u897f\u94c1\u7ebf","zh-Hant":"\u897f\u9435\u7dab"}},{filename:"mol",name:{en:"Tuen Ma Line Phase 1","zh-Hans":"\u5c6f\u9a6c\u7ebf\u4e00\u671f","zh-Hant":"\u5c6f\u99ac\u7dab\u4e00\u671f"}}],shmetro:[{filename:"sh1",name:{en:"Line 1","zh-Hans":"1\u53f7\u7ebf","zh-Hant":"1\u865f\u7dda"}},{filename:"sh2",name:{en:"Line 2 by Tianxiu11111","zh-Hans":"2\u53f7\u7ebf by Tianxiu11111","zh-Hant":"2\u865f\u7dda by Tianxiu11111"}},{filename:"sh5",name:{en:"Line 5 by Tianxiu11111","zh-Hans":"5\u53f7\u7ebf by Tianxiu11111","zh-Hant":"5\u865f\u7dda by Tianxiu11111"}},{filename:"sh11",name:{en:"Line 11 by Tianxiu11111","zh-Hans":"11\u53f7\u7ebf by Tianxiu11111","zh-Hant":"11\u865f\u7dda by Tianxiu11111"}},{filename:"sh16",name:{en:"Line 16","zh-Hans":"16\u53f7\u7ebf","zh-Hant":"16\u865f\u7dda"}}]},h=Object(m.makeStyles)((function(e){var n,a;return Object(m.createStyles)({root:(n={display:"flex",flexDirection:"row"},Object(i.a)(n,e.breakpoints.down("xs"),{flexDirection:"column",paddingTop:0,paddingLeft:e.spacing(2),paddingRight:e.spacing(2)}),Object(i.a)(n,e.breakpoints.up("sm"),{height:350}),n),tab:(a={minWidth:0,"& .MuiTab-wrapper":{flexDirection:"row"}},Object(i.a)(a,e.breakpoints.down("xs"),{minWidth:"calc(100% / 3)"}),Object(i.a)(a,e.breakpoints.up("sm"),{"& .MuiTab-wrapper":{justifyContent:"flex-start"}}),a),tabpanel:{flex:1,overflow:"auto",minWidth:220}})})),g=function(e){var n=Object(s.useTranslation)(),i=n.t,g=n.i18n,c=h(),u=Object(m.useTheme)(),f=Object(m.useMediaQuery)(u.breakpoints.down("xs")),H=r.useState(0),b=Object(t.a)(H,2),p=b[0],d=b[1],L=o[p].id;return r.useMemo((function(){return r.createElement(m.Dialog,{open:e.open,onClose:function(){return e.onClose()}},r.createElement(m.DialogTitle,null,i("file.new.title")),r.createElement(m.DialogContent,{dividers:!0,className:c.root},r.createElement(m.Tabs,{value:p,orientation:f?"horizontal":"vertical",variant:"scrollable",scrollButtons:"off",textColor:"primary",indicatorColor:"primary",onChange:function(e,n){return d(n)}},o.map((function(e){return r.createElement(m.Tab,{key:e.id,label:Object(l.b)(e.name,g.languages),className:c.tab})}))),r.createElement(m.Typography,{component:"div",role:"tabpanel",className:c.tabpanel},r.createElement(m.List,{disablePadding:!0},z[o[p].id].map((function(e){return r.createElement(m.ListItem,{button:!0,onClick:(n=e.filename,function(){a(103)("./".concat(L,"/").concat(n)).then((function(e){localStorage.rmgParam=JSON.stringify(e.default),window.location.reload(!0)})).catch((function(e){return console.error(e)}))}),key:e.filename},r.createElement(m.ListItemText,{primary:Object(l.b)(e.name,g.languages)}));var n}))))),r.createElement(m.DialogActions,null,r.createElement(m.Button,{variant:"outlined",onClick:function(){return e.onClose()},color:"primary",autoFocus:!0},i("dialog.cancel"))))}),[e.open,p,f,g.language,JSON.stringify(c)])};n.default=g}}]);
//# sourceMappingURL=panelSaveTemplateDialog.85470e55.chunk.js.map