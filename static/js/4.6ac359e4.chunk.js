(this["webpackJsonpsocial-net"]=this["webpackJsonpsocial-net"]||[]).push([[4],{290:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__3Cht7",dialogsItems:"Dialogs_dialogsItems__3Vmz4",active:"Dialogs_active__3GB6a",messages:"Dialogs_messages__1IUR8",message:"Dialogs_message__1emO6"}},295:function(e,s,a){"use strict";a.r(s);var t=a(125),n=(a(0),a(290)),i=a.n(n),c=a(14),o=a(1),d=function(e){var s="/dialogs/"+e.id;return Object(o.jsx)("div",{className:i.a.dialog+" "+i.a.active,children:Object(o.jsx)(c.b,{to:s,children:e.name})})},r=function(e){return Object(o.jsx)("div",{className:i.a.message,children:e.message})},j=a(89),l=a(126),u=a(33),g=a(86),b=Object(g.a)(50),m=Object(l.a)({form:"AddMessageForm"})((function(e){return Object(o.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(o.jsx)("div",{children:Object(o.jsx)(j.a,{component:u.b,name:"newMessageBody",placeholder:"Enter you message",validate:[g.b,b]})}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{children:"Send"})})]})})),O=function(e){var s=e.dialogsPage,a=s.dialogs.map((function(e){return Object(o.jsx)(d,{name:e.name,id:e.id},e.id)})),t=s.messages.map((function(e){return Object(o.jsx)(r,{message:e.message},e.id)}));return Object(o.jsxs)("div",{className:i.a.dialogs,children:[Object(o.jsx)("div",{className:i.a.dialogsItems,children:a}),Object(o.jsx)("div",{className:i.a.messages,children:t}),Object(o.jsx)(m,{onSubmit:function(s){e.sendMessage(s.newMessageBody)}})]})},h=a(18),f=a(5),x=a(51),v=a(10),_=function(e){return{isAuth:e.auth.isAuth}};var p=a(9);s.default=Object(p.d)(Object(h.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(s){e(Object(t.b)(s))}}})),(function(e){return Object(h.b)(_)((function(s){var a=s.isAuth,t=Object(x.a)(s,["isAuth"]);return a?Object(o.jsx)(e,Object(f.a)({},t)):Object(o.jsx)(v.a,{to:"/login"})}))}))(O)}}]);
//# sourceMappingURL=4.6ac359e4.chunk.js.map