(this["webpackJsonpsocial-net"]=this["webpackJsonpsocial-net"]||[]).push([[3],{292:function(t,e,s){t.exports={content:"ProfileInfo_content__2q0GZ",discriptionBlock:"ProfileInfo_discriptionBlock__14Cp7",mainPhoto:"ProfileInfo_mainPhoto__1eZB1",contact:"ProfileInfo_contact__VphNp"}},293:function(t,e,s){t.exports={postsBlock:"MyPosts_postsBlock__DKnWn",posts:"MyPosts_posts__CU8Vc"}},294:function(t,e,s){t.exports={item:"Post_item__17Zex"}},295:function(t,e,s){"use strict";s.r(e);var c=s(3),o=s(36),i=s(37),n=s(40),r=s(39),a=s(0),j=s.n(a),l=s(96),u=s(292),b=s.n(u),d=s(41),h=s(1),p=function(t){var e=Object(a.useState)(!1),s=Object(l.a)(e,2),c=s[0],o=s[1],i=Object(a.useState)(t.status),n=Object(l.a)(i,2),r=n[0],j=n[1];Object(a.useEffect)((function(){j(t.status)}),[t.status]);return Object(h.jsxs)("div",{children:[!c&&Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Status"}),": ",Object(h.jsx)("span",{onDoubleClick:function(){o(!0)},children:t.status||"---"})]}),c&&Object(h.jsx)("div",{children:Object(h.jsx)("input",{onChange:function(t){j(t.currentTarget.value)},autoFocus:!0,onBlur:function(){o(!1),t.updateStatus(r)},value:r})})]})},O=s(106),f=s(33),x=s(128),m=s(49),v=s.n(m),P=Object(x.a)({form:"edit-profile"})((function(t){var e=t.handleSubmit,s=t.profile,c=t.error;return Object(h.jsxs)("form",{onSubmit:e,children:[Object(h.jsx)("div",{children:Object(h.jsx)("button",{children:"save"})}),c&&Object(h.jsx)("div",{className:v.a.formSummaryError,children:c}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Full name"}),": ",Object(f.c)("Full name","fullName",[],f.a)]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Looking for a job"}),":",Object(f.c)("","lookingForAJob",[],f.a,{type:"checkbox"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"My professional skills"}),":",Object(f.c)("My professional skills","lookingForAJobDescription",[],f.b)]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"About me"}),":",Object(f.c)("About me","aboutMe",[],f.b)]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Contacts"}),":",Object.keys(s.contacts).map((function(t){return Object(h.jsx)("div",{className:b.a.contact,children:Object(h.jsxs)("b",{children:[t,": ",Object(f.c)(t,"contacts."+t,[],f.a)]})},t)}))]})]})})),g=function(t){var e=t.profile,s=t.isOwner,c=t.goToEditMode;return Object(h.jsxs)("div",{children:[s&&Object(h.jsx)("div",{children:Object(h.jsx)("button",{onClick:c,children:"edit"})}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Full name"}),": ",e.fullName]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Looking for a job"}),": ",e.lookingForAJob?"yes":"no"]}),e.lookingForAJob&&Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"My professional skills"}),": ",e.lookingForAJobDescription]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"About me"}),": ",e.aboutMe]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Contacts"}),":",Object.keys(e.contacts).map((function(t){return Object(h.jsx)(k,{contactTitle:t,contactValue:e.contacts[t]})}))]})]})},k=function(t){var e=t.contactTitle,s=t.contactValue;return Object(h.jsxs)("div",{className:b.a.contact,children:[Object(h.jsx)("b",{children:e}),": ",s]})},_=function(t){var e=t.profile,s=t.status,c=t.updateStatus,o=t.isOwner,i=t.savePhoto,n=t.saveProfile,r=Object(a.useState)(!1),j=Object(l.a)(r,2),u=j[0],f=j[1];if(!e)return Object(h.jsx)(d.a,{});return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:b.a.discriptionBlock,children:[Object(h.jsx)("img",{src:e.photos.large||O.a,className:b.a.mainPhoto}),o&&Object(h.jsx)("input",{type:"file",onChange:function(t){var e;(null===(e=t.target.files)||void 0===e?void 0:e.length)&&i(t.target.files[0])}}),u?Object(h.jsx)(P,{initialValues:e,onSubmit:function(t){n(t).then((function(){f(!1)}))},profile:e}):Object(h.jsx)(g,{goToEditMode:function(){f(!0)},profile:e,isOwner:o}),Object(h.jsx)(p,{status:s,updateStatus:c})]})})},S=s(95),y=s(293),N=s.n(y),w=s(294),A=s.n(w),C=function(t){return Object(h.jsxs)("div",{className:A.a.item,children:[Object(h.jsx)("img",{src:"https://cspromogame.ru//storage/upload_images/avatars/3863.jpg"}),t.message,Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{children:"Like "}),t.likesCount]})]})},I=s(89),F=s(86),M=Object(F.a)(10),B=Object(x.a)({form:"ProfileAddNewPostForm"})((function(t){return Object(h.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(h.jsx)("div",{children:Object(h.jsx)(I.a,{component:f.b,name:"newPostText",placeholder:"Enter you post",validate:[F.b,M]})}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{children:"Add Post"})})]})})),J=j.a.memo((function(t){var e=t.posts.map((function(t){return Object(h.jsx)(C,{message:t.message,likesCount:t.likesCount},t.id)}));return Object(h.jsxs)("div",{className:N.a.postsBlock,children:[Object(h.jsx)("h3",{children:"New posts"}),Object(h.jsx)(B,{onSubmit:function(e){t.addPost(e.newPostText)}}),Object(h.jsx)("div",{className:N.a.posts,children:Object(h.jsx)("div",{className:N.a.item,children:e})})]})})),T=s(19),D=Object(T.b)((function(t){return{posts:t.profilePage.posts}}),(function(t){return{addPost:function(e){return t(Object(S.a)(e))}}}))(J),U=function(t){return Object(h.jsxs)("div",{children:[Object(h.jsx)(_,{isOwner:t.isOwner,profile:t.profile,status:t.status,updateStatus:t.updateStatus,savePhoto:t.savePhoto,saveProfile:t.saveProfile}),Object(h.jsx)(D,{})]})},E=s(11),V=s(10),L=function(t){Object(n.a)(s,t);var e=Object(r.a)(s);function s(){return Object(o.a)(this,s),e.apply(this,arguments)}return Object(i.a)(s,[{key:"refreshProfile",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t,e,s){this.props.match.params.userId!==t.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(h.jsx)(U,Object(c.a)(Object(c.a)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),s}(j.a.Component);e.default=Object(V.d)(Object(T.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:S.d,getStatus:S.c,updateStatus:S.g,savePhoto:S.e,saveProfile:S.f}),E.f)(L)}}]);
//# sourceMappingURL=3.32676cbb.chunk.js.map