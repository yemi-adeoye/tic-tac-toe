(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(7),s=c.n(r),i=(c(12),c(13),c(4)),l=c(2),o=c(0),u=function(e){var t=e.fncHandleClick,c=e.id,n=e.value;return Object(o.jsx)("button",{id:c,className:"square",onClick:t,children:n})},j=function(e){var t=e.squares,c=e.isXTurn,a=e.gameWinner,r=e.squareBoardHandler,s=Object(n.useState)(!0),i=Object(l.a)(s,2),j=(i[0],i[1]),b=function(e){r(e.target.id),j(Math.random()),console.log(t)},d=t.map((function(e,c){return n=c,Object(o.jsx)(u,{id:n+1,value:t[n],fncHandleClick:b},n);var n}));return Object(o.jsxs)("div",{className:"board",children:[Object(o.jsxs)("div",{className:"winner",children:[" ","Winner: ".concat(a)," "]}),Object(o.jsxs)("div",{className:"status",children:[" ","Next player ".concat(c)," "]}),Object(o.jsxs)("div",{className:"board-row",children:[" ",d.slice(0,3)," "]}),Object(o.jsxs)("div",{className:"board-row",children:[" ",d.slice(3,6)," "]}),Object(o.jsxs)("div",{className:"board-row",children:[" ",d.slice(6)," "]})]})},b=function(){var e=Object(n.useState)([Array(9).fill(null)]),t=Object(l.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(["X"]),s=Object(l.a)(r,2),u=s[0],b=s[1],d=Object(n.useState)(["Start..."]),O=Object(l.a)(d,2),v=O[0],f=O[1],h=Object(n.useState)(!0),g=Object(l.a)(h,2),m=g[0],x=g[1],p=Object(n.useState)(""),N=Object(l.a)(p,2),S=N[0],C=N[1];Object(n.useEffect)((function(){console.log(u)}),[c]);var X=function(e){var t=e.target.id;if("0"===t)return a([Array(9).fill(null)]),f(["Start..."]),void b(["X"]);var n=c.slice(0,t);a(n);var r=v.slice(0,t);f(r);var s=u.slice(0,t);b(s)},k=v.map((function(e,t){return Object(o.jsx)("button",{id:t,onClick:X,children:e},t)}));return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(j,{squares:c[c.length-1],squareBoardHandler:function(e){var t=e-1,n=c[c.length-1];if(null===n[t]&&!S){var r=Object(i.a)(n);r[t]=m?"X":"O";var s=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],c=t.length,n=0;n<c;n++){var a=Object(l.a)(t[n],3),r=a[0],s=a[1],i=a[2];if(e[r]&&e[r]===e[s]&&e[r]===e[i])return e[r]}return null}(r),o="Player ".concat(m?"X":"O"," sets cell ").concat(e),j=[].concat(Object(i.a)(c),[r]);a(j);var d=[].concat(Object(i.a)(v),[o]);if(f(d),s)C(s);else{var O=!m;x(O);var h=[].concat(Object(i.a)(u),[O?"X":"O"]);b(h)}}},isXTurn:u[u.length-1],gameWinner:S}),Object(o.jsxs)("div",{className:"history",children:[" ",k," "]})]})};var d=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(b,{})})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(d,{})}),document.getElementById("root")),O()}},[[15,1,2]]]);
//# sourceMappingURL=main.6fe73ec7.chunk.js.map