(this.webpackJsonpday_33=this.webpackJsonpday_33||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),s=n(6),a=n.n(s),r=n(3),i=(n(12),{theme:!1,setTheme:function(e){}}),j=o.a.createContext(i),d=n(0),u=function(){var e=Object(c.useContext)(j),t=e.theme,n=e.setTheme;return Object(d.jsx)("button",{className:t?"toggle-theme dark":"toggle-theme",onClick:function(){n(!t)},children:t?"light":"dark"})},b=n(7),l=function(e){var t=e.title;e.done;return Object(d.jsx)("div",{children:Object(d.jsx)("h2",{children:t})})},h=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],o=t[1],s=Object(c.useContext)(j).theme,a=Object(c.useState)(""),i=Object(r.a)(a,2),u=i[0],h=i[1];return Object(d.jsxs)("div",{className:s?"todos dark":"todos",children:[Object(d.jsx)("input",{type:"text",value:u,onChange:function(e){h(e.target.value)}}),Object(d.jsx)("button",{onClick:function(){o([].concat(Object(b.a)(n),[{title:u,done:!1}])),h("")},children:"Add todos"}),n.map((function(e,t){return Object(d.jsx)(l,{title:e.title,done:e.done},t)}))]})},O=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),n=t[0],o=t[1];return Object(d.jsx)(j.Provider,{value:{theme:n,setTheme:o},children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(h,{}),Object(d.jsx)(u,{})]})})};a.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.d4b33cd1.chunk.js.map