(this["webpackJsonpsocial-net"]=this["webpackJsonpsocial-net"]||[]).push([[0],{128:function(e,t,n){e.exports={userPhoto:"users_userPhoto__2krnJ"}},129:function(e,t,n){e.exports={content:"ProfileInfo_content__2q0GZ",discriptionBlock:"ProfileInfo_discriptionBlock__14Cp7"}},130:function(e,t,n){e.exports={item:"Post_item__17Zex"}},15:function(e,t,n){e.exports={nav:"Navbar_nav__1fB6F",item:"Navbar_item__Djm--",activeLink:"Navbar_activeLink__2QY_b"}},158:function(e,t,n){},163:function(e,t,n){},25:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__3Cht7",dialogsItems:"Dialogs_dialogsItems__3Vmz4",active:"Dialogs_active__3GB6a",messages:"Dialogs_messages__1IUR8",message:"Dialogs_message__1emO6"}},287:function(e,t,n){"use strict";n.r(t);n(158);var r=n(64),s=n.n(r),a=n(1),i=n.n(a),c=n(28),o=n(29),u=n(32),l=n(31),j=(n(163),n(15)),d=n.n(j),b=n(13),f=n(0),p=function(){return Object(f.jsxs)("nav",{className:d.a.nav,children:[Object(f.jsx)("div",{className:d.a.item,children:Object(f.jsx)(b.b,{to:"/profile",activeClassName:d.a.activeLink,children:"Profile"})}),Object(f.jsx)("div",{className:"".concat(d.a.item," ").concat(d.a.active),children:Object(f.jsx)(b.b,{to:"/dialogs",activeClassName:d.a.activeLink,children:"Messages"})}),Object(f.jsx)("div",{className:d.a.item,children:Object(f.jsx)(b.b,{to:"/news",activeClassName:d.a.activeLink,children:"News"})}),Object(f.jsx)("div",{className:d.a.item,children:Object(f.jsx)(b.b,{to:"/users",activeClassName:d.a.activeLink,children:"Users"})}),Object(f.jsx)("div",{className:d.a.item,children:Object(f.jsx)(b.b,{to:"/music",activeClassName:d.a.activeLink,children:"Music"})}),Object(f.jsx)("div",{className:d.a.item,children:Object(f.jsx)(b.b,{to:"/settings",activeClassName:d.a.activeLink,children:"Settings"})})]})},h=n(10),O=function(){return Object(f.jsx)("div",{children:"News"})},g=function(){return Object(f.jsx)("div",{children:"Music"})},m=function(){return Object(f.jsx)("div",{children:"Settings"})},v=n(44),x=n(3),w="SEND-MESSAGE",P={dialogs:[{id:"1",name:"Vova"},{id:"2",name:"July"},{id:"3",name:"Sasha"},{id:"4",name:"Pasha"}],messages:[{id:"1",message:"Hi"},{id:"2",message:"How are you?"},{id:"3",message:"Yo"}]},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:var n=t.newMessageBody;return Object(x.a)(Object(x.a)({},e),{},{messages:[].concat(Object(v.a)(e.messages),[{id:"4",message:n}])});default:return e}},A=n(25),k=n.n(A),N=function(e){var t="/dialogs/"+e.id;return Object(f.jsx)("div",{className:k.a.dialog+" "+k.a.active,children:Object(f.jsx)(b.b,{to:t,children:e.name})})},C=function(e){return Object(f.jsx)("div",{className:k.a.message,children:e.message})},y=n(122),M=n(123),U=n(38),I=n(52),D=n.n(I),E=function(e){var t=e.meta,n=t.touched,r=t.error,s=e.children,a=n&&r;return Object(f.jsxs)("div",{className:D.a.formControl+" "+(a?D.a.error:""),children:[Object(f.jsx)("div",{children:s}),a&&Object(f.jsx)("span",{children:r})]})},_=function(e){var t=e.input,n=(e.meta,Object(U.a)(e,["input","meta"]));return Object(f.jsx)(E,Object(x.a)(Object(x.a)({},e),{},{children:Object(f.jsx)("textarea",Object(x.a)(Object(x.a)({},t),n))}))},z=function(e){var t=e.input,n=(e.meta,Object(U.a)(e,["input","meta"]));return Object(f.jsx)(E,Object(x.a)(Object(x.a)({},e),{},{children:Object(f.jsx)("input",Object(x.a)(Object(x.a)({},t),n))}))},F=function(e,t,n,r){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{type:""},a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(f.jsxs)("div",{children:[Object(f.jsx)(y.a,Object(x.a)({placeholder:e,name:t,validate:n,component:r},s)),a]})},L=function(e){if(!e)return"Field is required"},T=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}},Z=T(50),B=Object(M.a)({form:"AddMessageForm"})((function(e){return Object(f.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(f.jsx)("div",{children:Object(f.jsx)(y.a,{component:_,name:"newMessageBody",placeholder:"Enter you message",validate:[L,Z]})}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{children:"Send"})})]})})),R=function(e){var t=e.dialogsPage,n=t.dialogs.map((function(e){return Object(f.jsx)(N,{name:e.name,id:e.id},e.id)})),r=t.messages.map((function(e){return Object(f.jsx)(C,{message:e.message},e.id)}));return Object(f.jsxs)("div",{className:k.a.dialogs,children:[Object(f.jsx)("div",{className:k.a.dialogsItems,children:n}),Object(f.jsx)("div",{className:k.a.messages,children:r}),Object(f.jsx)(B,{onSubmit:function(t){e.sendMessage(t.newMessageBody)}})]})},Y=n(12),W=function(e){return{isAuth:e.auth.isAuth}};var X=n(9),V=Object(X.d)(Object(Y.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(t){e(function(e){return{type:w,newMessageBody:e}}(t))}}})),(function(e){return Object(Y.b)(W)((function(t){var n=t.isAuth,r=Object(U.a)(t,["isAuth"]);return n?Object(f.jsx)(e,Object(x.a)({},r)):Object(f.jsx)(h.a,{to:"/login"})}))}))(R),K=n(11),q=n.n(K),G=n(19),H=n(126),J=n.n(H).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"08f8988c-36d5-478a-8bca-6bc3626a17f4"}}),Q={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:30;return J.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return J.post("follow/".concat(e))},unfollow:function(e){return J.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please use profileAPI object"),$.getProfile(e)}},$={getProfile:function(e){return J.get("profile/"+e)},getStatus:function(e){return J.get("profile/status/"+e)},updateStatus:function(e){return J.put("profile/status/",{status:e})}},ee=function(){return J.get("auth/me")},te=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return J.post("auth/login",{email:e,password:t,rememberMe:n})},ne=function(){return J.delete("auth/login")},re=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(x.a)(Object(x.a)({},e),r):e}))},se="FOLLOW",ae="UNFOLLOW",ie="SET_USERS",ce="SET_CURRENT_PAGE",oe="SET_TOTAL_USERS_COUNT",ue="TOGGLE_IS_FETCHING",le="TOGGLE_IS_FOLLOWING_PROGRESS",je={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},de=function(e){return{type:se,userId:e}},be=function(e){return{type:ae,userId:e}},fe=function(e){return{type:ue,isFetching:e}},pe=function(e,t){return{type:le,isFetchingForFollowing:e,userId:t}},he=function(){var e=Object(G.a)(q.a.mark((function e(t,n,r,s){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(pe(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(s(n)),t(pe(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,s){return e.apply(this,arguments)}}(),Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case se:return Object(x.a)(Object(x.a)({},e),{},{users:re(e.users,t.userId,"id",{followed:!0})});case ae:return Object(x.a)(Object(x.a)({},e),{},{users:re(e.users,t.userId,"id",{followed:!1})});case ie:return Object(x.a)(Object(x.a)({},e),{},{users:t.users});case ce:return Object(x.a)(Object(x.a)({},e),{},{currentPage:t.currentPage});case oe:return Object(x.a)(Object(x.a)({},e),{},{totalUsersCount:t.count});case ue:return Object(x.a)(Object(x.a)({},e),{},{isFetching:t.isFetching});case le:return Object(x.a)(Object(x.a)({},e),{},{followingInProgress:t.isFetchingForFollowing?[].concat(Object(v.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},ge=n(55),me=n(67),ve=n(70),xe=n.n(ve),we=n(127),Pe=n.n(we),Se=function(e,t,n){return Object(f.jsxs)("span",{className:Pe()(Object(me.a)({},xe.a.selectedPage,e===t),xe.a.pageNumber),onClick:function(){n(t)},children:[" ",t]},t)},Ae=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,s=void 0===r?1:r,i=e.onPageChanged,c=e.portionSize,o=void 0===c?20:c,u=Math.ceil(t/n),l=[],j=1;j<=u;j++)l.push(j);var d=Math.ceil(u/o),b=Object(a.useState)(1),p=Object(ge.a)(b,2),h=p[0],O=p[1],g=(h-1)*o+1,m=h*o;return Object(a.useEffect)((function(){return O(Math.ceil(s/o))}),[s]),Object(f.jsxs)("div",{className:xe.a.paginator,children:[Se(s,1,i),"...",h>1&&Object(f.jsx)("button",{onClick:function(){return O(h-1)},children:"<"}),l.filter((function(e){return e>=g&&e<=m})).map((function(e){return Se(s,e,i)})),d>h&&Object(f.jsx)("button",{onClick:function(){return O(h+1)},children:">"}),"...",Se(s,u,i)]})},ke=n(128),Ne=n.n(ke),Ce=n.p+"static/media/user.de73c074.png",ye=function(e){var t=e.user,n=e.follow,r=e.unfollow,s=e.followingInProgress;return Object(f.jsxs)("div",{children:[Object(f.jsxs)("span",{children:[Object(f.jsx)("div",{children:Object(f.jsx)(b.b,{to:"/profile/"+t.id,children:Object(f.jsx)("img",{src:null!=t.photos.small?t.photos.small:Ce,className:Ne.a.userPhoto})})}),Object(f.jsx)("div",{children:t.followed?Object(f.jsx)("button",{disabled:s.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Unfollow"}):Object(f.jsx)("button",{disabled:s.some((function(e){return e===t.id})),onClick:function(){n(t.id)},children:"Follow"})})]}),Object(f.jsxs)("span",{children:[Object(f.jsxs)("span",{children:[Object(f.jsx)("div",{children:t.name}),Object(f.jsx)("div",{children:t.status})]}),Object(f.jsxs)("span",{children:[Object(f.jsx)("div",{children:"user.location.country"}),Object(f.jsx)("div",{children:"user.location.city"})]})]})]},t.id)},Me=function(e){var t=e.totalUsersCount,n=e.pageSize,r=e.currentPage,s=e.onPageChanged,a=e.users,i=Object(U.a)(e,["totalUsersCount","pageSize","currentPage","onPageChanged","users"]);return Object(f.jsxs)("div",{children:[Object(f.jsx)(Ae,{totalItemsCount:t,pageSize:n,currentPage:r,onPageChanged:s,portionSize:void 0}),Object(f.jsx)("div",{children:a.map((function(e){return Object(f.jsx)(ye,{user:e,follow:i.follow,unfollow:i.unfollow,followingInProgress:i.followingInProgress},e.id)}))})]})},Ue=n.p+"static/media/1495 (1).5afb2e9e.gif",Ie=function(){return Object(f.jsx)("div",{style:{backgroundColor:"white"},children:Object(f.jsx)("img",{src:Ue})})},De=n(132),Ee=Object(De.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),_e=function(e){return e.usersPage.pageSize},ze=function(e){return e.usersPage.totalUsersCount},Fe=function(e){return e.usersPage.currentPage},Le=function(e){return e.usersPage.isFetching},Te=function(e){return e.usersPage.followingInProgress},Ze=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){for(var e=Math.ceil(this.props.totalUsersCount/this.props.pageSize),t=[],n=1;n<=e;n++)t.push(n);return Object(f.jsxs)(f.Fragment,{children:[this.props.isFetching?Object(f.jsx)(Ie,{}):null,Object(f.jsx)(Me,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(i.a.Component),Be=Object(X.d)(Object(Y.b)((function(e){return{users:Ee(e),pageSize:_e(e),totalUsersCount:ze(e),currentPage:Fe(e),isFetching:Le(e),followingInProgress:Te(e)}}),{follow:function(e){return function(){var t=Object(G.a)(q.a.mark((function t(n){return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:he(n,e,Q.follow.bind(Q),de);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(G.a)(q.a.mark((function t(n){return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:he(n,e,Q.unfollow.bind(Q),be);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},toggleFollowingProgress:pe,getUsers:function(e,t){return function(){var n=Object(G.a)(q.a.mark((function n(r){var s;return q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(fe(!0)),r({type:ce,currentPage:e}),n.next=4,Q.getUsers(e,t);case 4:s=n.sent,r(fe(!1)),r((i=s.items,{type:ie,users:i})),r((a=s.totalCount,{type:oe,count:a}));case 8:case"end":return n.stop()}var a,i}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(Ze),Re=n(129),Ye=n.n(Re),We=function(e){var t=Object(a.useState)(!1),n=Object(ge.a)(t,2),r=n[0],s=n[1],i=Object(a.useState)(e.status),c=Object(ge.a)(i,2),o=c[0],u=c[1];Object(a.useEffect)((function(){u(e.status)}),[e.status]);return Object(f.jsxs)("div",{children:[!r&&Object(f.jsx)("div",{children:Object(f.jsx)("span",{onDoubleClick:function(){s(!0)},children:e.status||"---"})}),r&&Object(f.jsx)("div",{children:Object(f.jsx)("input",{onChange:function(e){u(e.currentTarget.value)},autoFocus:!0,onBlur:function(){s(!1),e.updateStatus(o)},value:o})})]})},Xe=function(e){var t=e.profile,n=e.status,r=e.updateStatus;return t?Object(f.jsx)("div",{children:Object(f.jsxs)("div",{className:Ye.a.discriptionBlock,children:[Object(f.jsx)("img",{src:t.photos.large}),Object(f.jsx)(We,{status:n,updateStatus:r})]})}):Object(f.jsx)(Ie,{})},Ve="ADD-POST",Ke="DELETE_POST",qe="SET-USER-PROFILE",Ge="SET_STATUS",He={posts:[{id:1,message:"Hi, how are you?",likesCount:2},{id:2,message:"Hi, what are you doing?",likesCount:5},{id:3,message:"It's my first post.",likesCount:4}],profile:{aboutMe:"",contacts:{facebook:"",website:null,vk:"",twitter:"",instagram:"",youtube:null,github:"",mainLink:null},lookingForAJob:!1,lookingForAJobDescription:"",fullName:"",userId:"2",photos:{small:"",large:""}},status:""},Je=function(e){return{type:Ge,status:e}},Qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ve:var n={id:4,message:t.newPostText,likesCount:0};return Object(x.a)(Object(x.a)({},e),{},{posts:[].concat(Object(v.a)(e.posts),[n])});case Ge:return Object(x.a)(Object(x.a)({},e),{},{status:t.status});case qe:return Object(x.a)(Object(x.a)({},e),{},{profile:t.profile});case Ke:return Object(x.a)(Object(x.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});default:return e}},$e=n(71),et=n.n($e),tt=n(130),nt=n.n(tt),rt=function(e){return Object(f.jsxs)("div",{className:nt.a.item,children:[Object(f.jsx)("img",{src:"https://cspromogame.ru//storage/upload_images/avatars/3863.jpg"}),e.message,Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:"Like "}),e.likesCount]})]})},st=T(10),at=Object(M.a)({form:"ProfileAddNewPostForm"})((function(e){return Object(f.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(f.jsx)("div",{children:Object(f.jsx)(y.a,{component:_,name:"newPostText",placeholder:"Enter you post",validate:[L,st]})}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{children:"Add Post"})})]})})),it=i.a.memo((function(e){var t=e.posts.map((function(e){return Object(f.jsx)(rt,{message:e.message,likesCount:e.likesCount},e.id)}));return Object(f.jsxs)("div",{className:et.a.postsBlock,children:[Object(f.jsx)("h3",{children:"New posts"}),Object(f.jsx)(at,{onSubmit:function(t){e.addPost(t.newPostText)}}),Object(f.jsx)("div",{className:et.a.posts,children:Object(f.jsx)("div",{className:et.a.item,children:t})})]})})),ct=Object(Y.b)((function(e){return{posts:e.profilePage.posts}}),(function(e){return{addPost:function(t){return e(function(e){return{type:Ve,newPostText:e}}(t))}}}))(it),ot=function(e){return Object(f.jsxs)("div",{children:[Object(f.jsx)(Xe,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),Object(f.jsx)(ct,{})]})},ut=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return Object(f.jsx)(ot,Object(x.a)(Object(x.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),n}(i.a.Component),lt=Object(X.d)(Object(Y.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:function(e){return function(){var t=Object(G.a)(q.a.mark((function t(n){var r;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Q.getProfile(e);case 2:r=t.sent,n((s=r.data,{type:qe,profile:s}));case 4:case"end":return t.stop()}var s}),t)})));return function(e){return t.apply(this,arguments)}}()},getStatus:function(e){return function(){var t=Object(G.a)(q.a.mark((function t(n){var r;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,$.getStatus(e);case 2:r=t.sent,n(Je(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(G.a)(q.a.mark((function t(n){return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,$.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(Je(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),h.f)(ut),jt=n(92),dt=n.n(jt),bt=function(e){return Object(f.jsxs)("header",{className:dt.a.header,children:[Object(f.jsx)("img",{src:"data:image/png;base64,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",alt:""}),Object(f.jsx)("div",{className:dt.a.loginBlock,children:e.isAuth?Object(f.jsxs)("div",{children:[" ",e.login," - ",Object(f.jsx)("button",{onClick:e.logout,children:"Log Out"})," "]}):Object(f.jsx)(b.b,{to:"/login",children:"Login"})})]})},ft=n(36),pt="auth/SET_USER_DATA",ht={userId:null,email:null,login:null,isAuth:!1},Ot=function(e,t,n,r){return{type:pt,payload:{userId:e,email:t,login:n,isAuth:r}}},gt=function(){return function(){var e=Object(G.a)(q.a.mark((function e(t){var n,r,s,a,i;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,s=r.id,a=r.email,i=r.login,t(Ot(s,a,i,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},mt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ht,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case pt:return Object(x.a)(Object(x.a)({},e),t.payload);default:return e}},vt=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsx)(bt,Object(x.a)({},this.props))}}]),n}(i.a.Component),xt=Object(Y.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(G.a)(q.a.mark((function e(t){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne();case 2:0===e.sent.data.resultCode&&t(Ot(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(vt),wt=Object(M.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(f.jsxs)("form",{onSubmit:t,children:[F("Email","email",[L],z),F("Password","password",[L],z,{type:"Password"}),F(null,"rememberMe",[],z,{type:"checkbox"},"remember me"),n&&Object(f.jsx)("div",{className:D.a.formSummaryError,children:n}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{children:"Login"})})]})})),Pt=Object(Y.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(G.a)(q.a.mark((function r(s){var a,i;return q.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,te(e,t,n);case 2:0===(a=r.sent).data.resultCode?s(gt()):(i=a.data.messages.length>0?a.data.messages[0]:"Some error",s(Object(ft.a)("login",{_error:i})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(f.jsx)(h.a,{to:"/profile"}):Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"LOGIN"}),Object(f.jsx)(wt,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),St={},At=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:St;return e},kt=n(131),Nt=n(124),Ct="INITIALIZED_SUCCESS",yt={initialized:!1},Mt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:yt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ct:return Object(x.a)(Object(x.a)({},e),{},{initialized:!0});default:return e}},Ut=Object(X.c)({profilePage:Qe,dialogsPage:S,sidebar:At,usersPage:Oe,auth:mt,form:Nt.a,app:Mt}),It=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||X.d,Dt=Object(X.e)(Ut,It(Object(X.a)(kt.a)));window.__store__=Dt;var Et=Dt,_t=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(f.jsxs)("div",{className:"app-wrapper",children:[Object(f.jsx)(xt,{}),Object(f.jsx)(p,{}),Object(f.jsxs)("div",{className:"app-wrapper-content",children:[Object(f.jsx)(h.b,{path:"/dialogs",render:function(){return Object(f.jsx)(V,{})}}),Object(f.jsx)(h.b,{path:"/profile/:userId?",render:function(){return Object(f.jsx)(lt,{})}}),Object(f.jsx)(h.b,{path:"/users",render:function(){return Object(f.jsx)(Be,{})}}),Object(f.jsx)(h.b,{path:"/news",render:function(){return Object(f.jsx)(O,{})}}),Object(f.jsx)(h.b,{path:"/music",render:function(){return Object(f.jsx)(g,{})}}),Object(f.jsx)(h.b,{path:"/settings",render:function(){return Object(f.jsx)(m,{})}}),Object(f.jsx)(h.b,{path:"/login",render:function(){return Object(f.jsx)(Pt,{})}})]})]}):Object(f.jsx)(Ie,{})}}]),n}(i.a.Component),zt=Object(X.d)(h.f,Object(Y.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(gt());Promise.all([t]).then((function(){e({type:Ct})}))}}}))(_t),Ft=function(){return Object(f.jsx)(b.a,{children:Object(f.jsx)(Y.a,{store:Et,children:Object(f.jsx)(zt,{})})})};s.a.render(Object(f.jsx)(Ft,{}),document.getElementById("root"))},52:function(e,t,n){e.exports={formControl:"FormsControls_formControl__gSNWk",error:"FormsControls_error__3eYEl",formSummaryError:"FormsControls_formSummaryError__1SDVO"}},70:function(e,t,n){e.exports={paginator:"Paginator_paginator__1EbGO",pageNumber:"Paginator_pageNumber__zICHr",selectedPage:"Paginator_selectedPage__bLouY"}},71:function(e,t,n){e.exports={postsBlock:"MyPosts_postsBlock__DKnWn",posts:"MyPosts_posts__CU8Vc"}},92:function(e,t,n){e.exports={header:"header_header__2nTYT",loginBlock:"header_loginBlock__3sDK8"}}},[[287,1,2]]]);
//# sourceMappingURL=main.2c3c68fb.chunk.js.map