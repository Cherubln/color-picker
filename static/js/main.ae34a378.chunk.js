(this["webpackJsonpcolor-picker"]=this["webpackJsonpcolor-picker"]||[]).push([[0],{14:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(0),a=c.n(r),o=c(2),s=c.n(o),i=(c(14),c(7)),l=c(3),u=function(e){var t=e.rgb,c=e.weight,a=e.index,o=e.hex,s=Object(r.useState)(!1),i=Object(l.a)(s,2),u=i[0],j=i[1],b=t.join(","),h="#".concat(o);return Object(r.useEffect)((function(){var e=setTimeout((function(){j(!1)}),2e3);return function(){return clearTimeout(e)}}),[u]),Object(n.jsxs)("article",{className:"color ".concat(a>10&&"color-light"),style:{backgroundColor:"rgb(".concat(b,")")},onClick:function(){j(!0),navigator.clipboard.writeText(h)},children:[Object(n.jsxs)("p",{className:"percent-value",children:[c,"% ",Object(n.jsx)("span",{className:"alert",children:u&&"copied"})]}),Object(n.jsx)("p",{className:"color-value",children:h})]})},j=c(4),b=(c(15),c(6)),h=c.n(b);var O=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),c=t[0],a=t[1],o=Object(r.useState)(!1),s=Object(l.a)(o,2),b=s[0],O=s[1],d=Object(r.useState)(new h.a("#617d98").all(10)),p=Object(l.a)(d,2),x=p[0],m=p[1];return j.b.configure(),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("section",{className:"container",children:[Object(n.jsx)("h3",{children:"Color Generator"}),Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault();try{var t=new h.a(c).all(10);m(t),console.log(t)}catch(b){O(!0),function(e){j.b.error(e,{transition:j.a,hideProgressBar:!0,position:"top-right"})}(b.message)}},children:[Object(n.jsx)("input",{type:"text",value:c,onChange:function(e){return a(e.target.value)},placeholder:"#617d98",className:b?"error":null}),Object(n.jsx)("button",{type:"submit",className:"btn",children:"Submit"})]})]}),Object(n.jsx)("section",{className:"colors",children:x.map((function(e,t){return Object(n.jsx)(u,Object(i.a)(Object(i.a)({},e),{},{index:t,hex:e.hex}),t)}))})]})};s.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(O,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.ae34a378.chunk.js.map