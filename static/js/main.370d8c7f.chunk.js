(this.webpackJsonpfilmoteka=this.webpackJsonpfilmoteka||[]).push([[0],{104:function(e,t,a){},12:function(e,t,a){e.exports={"mobile-brp":"320px","tablet-brp":"768px","desktop-brp":"1024px","accent-color":"#FF6B08",overlay:"Modal_overlay__29-yF",modal:"Modal_modal__1vq9d",closeBtn:"Modal_closeBtn__3U3w0",closeIcon:"Modal_closeIcon__3Ffer",imageBox:"Modal_imageBox__2at3M",modalTitle:"Modal_modalTitle__1MPWp",featureList:"Modal_featureList__2H1d2",featureName:"Modal_featureName__2TW3P",feature:"Modal_feature__27MB7",aboutTitle:"Modal_aboutTitle__3B121",description:"Modal_description__25Umd",buttonsBox:"Modal_buttonsBox__21oXG",rate:"Modal_rate__14u6g",modalContent:"Modal_modalContent__1skCv"}},123:function(e,t,a){},124:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(10),r=a.n(o),i=a(25),s=a(23),l=a(7),d=a(13),j=a(70),u=a.n(j),b=a(2),m=function(e){var t=e.children;return Object(b.jsx)("div",{className:u.a.container,children:t})},x=a(53),p=a.n(x),O=function(){return Object(b.jsx)("footer",{className:p.a.footer,children:Object(b.jsxs)("p",{className:p.a.footerText,children:["\xa9 2021 | All Rights Reserved | Developed by"," ",Object(b.jsx)("a",{href:"https://github.com/Igor-Kreshchenko",target:"_blank",rel:"noopener noreferrer",children:"Igor Kreshchenko"})]})})},h={home:"/",library:"/library",register:"/sign-up",logIn:"/sign-in"},v=a(54),f=a.n(v),g=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){window.innerWidth>=768&&c(!0)}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("svg",{className:f.a.logo,width:"24",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(b.jsx)("path",{d:"M19.82 2H4.18A2.18 2.18 0 002 4.18v15.64A2.18 2.18 0 004.18 22h15.64A2.18 2.18 0 0022 19.82V4.18A2.18 2.18 0 0019.82 2zM7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 17h5M17 7h5",stroke:"#818181",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),a&&Object(b.jsx)("h1",{className:f.a.logoText,children:"Filmoteka"})]})},B=a(24),M=a.n(B),w=function(){return Object(b.jsxs)("nav",{className:M.a.navigation,children:[Object(b.jsx)(g,{}),Object(b.jsxs)("ul",{className:M.a.navList,children:[Object(b.jsx)("li",{className:M.a.navItem,children:Object(b.jsx)(i.b,{className:M.a.navLink,to:h.home,children:"Home"})}),Object(b.jsx)("li",{className:M.a.navItem,children:Object(b.jsx)(i.b,{className:M.a.navLink,to:h.library,children:"My library"})}),Object(b.jsx)("li",{className:M.a.navItem,children:Object(b.jsx)(i.b,{className:M.a.navLink,to:h.register,children:"Sign Up"})}),Object(b.jsx)("li",{className:M.a.navItem,children:Object(b.jsx)(i.b,{className:M.a.navLink,to:h.logIn,children:"Sign In"})})]})]})},A=a(57),N=a.n(A),T=function(){return Object(b.jsx)("div",{className:N.a.bgWrapper,children:Object(b.jsx)("header",{className:N.a.header,children:Object(b.jsx)(w,{})})})},Q=a(49),H=a.n(Q),C=function(e){var t=e.children;return Object(b.jsxs)("div",{className:H.a.appWrapper,children:[Object(b.jsxs)("div",{className:H.a.contentWrapper,children:[Object(b.jsx)(T,{}),Object(b.jsx)(m,{children:Object(b.jsx)("main",{className:H.a.main,children:t})})]}),Object(b.jsx)(O,{})]})},_=a(71),L=a.n(_),D=function(e){var t=e.children;return Object(b.jsx)("section",{className:L.a.section,children:t})},F=a(31),y=a.n(F),k=function(e){var t=e.image,a=e.name,n=e.year,c=e.id,o=e.onClick;return Object(b.jsxs)("li",{className:y.a.listItem,onClick:o,id:c,children:[Object(b.jsx)("div",{className:y.a.imageBox,children:Object(b.jsx)("img",{src:t,alt:a})}),Object(b.jsx)("p",{className:y.a.title,children:a}),Object(b.jsx)("p",{className:y.a.postTitle,children:n})]})},E=function(e){var t=e.movies,a=e.onClick;return Object(b.jsx)("ul",{className:y.a.moviesList,children:t.map((function(e){var t=e.poster_path,n=e.title,c=e.original_name,o=e.release_date,r=e.id,i=t?"https://image.tmdb.org/t/p/w500".concat(t):"data:image/png;base64,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",s=n||c,l=o?o.slice(0,4):"Release date unknown";return Object(b.jsx)(k,{id:r,image:i,name:s,year:l,onClick:a},r)}))})},I=a(162),R=function(e){var t=e.onClick,a=e.name,n=e.text;return Object(b.jsx)(I.a,{color:"primary",variant:"outlined",onClick:t,name:a,children:n})},X=a(12),Y=a.n(X),U=document.querySelector("#modal-root"),S=function(e){var t=e.onClose,a=e.movie,c=Object(n.useState)(null),r=Object(l.a)(c,2),i=r[0],s=r[1];Object(n.useEffect)((function(){return s(a)}),[a]),Object(n.useEffect)((function(){var e=function(e){"Escape"===e.code&&t()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t]);var d=function(e){var a=e.currentTarget.name;fetch("https://filmoteka-43b8d-default-rtdb.firebaseio.com/".concat(a,".json"),{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"application/json"}}),t()},j=a.poster_path,u=a.title,m=a.vote_average,x=a.vote_count,p=a.popularity,O=a.original_title,h=a.overview,v="https://image.tmdb.org/t/p/w500".concat(j);return Object(o.createPortal)(Object(b.jsx)("div",{className:Y.a.overlay,onClick:function(e){e.target===e.currentTarget&&t()},children:Object(b.jsxs)("div",{className:Y.a.modal,children:[Object(b.jsx)("button",{type:"button",className:Y.a.closeBtn,onClick:function(){t()},children:Object(b.jsx)("svg",{className:Y.a.closeIcon,width:"30",height:"30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(b.jsx)("path",{d:"M8 8l14 14M8 22L22 8",stroke:"#000",strokeWidth:"2"})})}),Object(b.jsx)("div",{className:Y.a.imageBox,children:Object(b.jsx)("img",{className:Y.a.modalImg,src:v,alt:u})}),Object(b.jsxs)("div",{className:Y.a.modalContent,children:[Object(b.jsx)("h2",{className:Y.a.modalTitle,children:u}),Object(b.jsxs)("ul",{className:Y.a.featureList,children:[Object(b.jsxs)("li",{className:Y.a.feature,children:[Object(b.jsx)("span",{className:Y.a.featureName,children:"Vote / Votes"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{className:Y.a.rate,children:m})," / ".concat(x)]})]}),Object(b.jsxs)("li",{className:Y.a.feature,children:[Object(b.jsx)("span",{className:Y.a.featureName,children:"Popularity"}),parseInt(p)]}),Object(b.jsxs)("li",{className:Y.a.feature,children:[Object(b.jsx)("span",{className:Y.a.featureName,children:"Original Title"}),O]}),Object(b.jsx)("li",{className:Y.a.feature,children:Object(b.jsx)("span",{className:Y.a.featureName,children:"Genre"})})]}),Object(b.jsx)("h3",{className:Y.a.aboutTitle,children:"About"}),Object(b.jsx)("p",{className:Y.a.description,children:h}),Object(b.jsxs)("div",{className:Y.a.buttonsBox,children:[Object(b.jsx)(R,{onClick:d,name:"watched",text:"add to Watched"}),Object(b.jsx)(R,{onClick:d,name:"queue",text:"add to queue"})]})]})]})}),U)},W=a(58),P=a.n(W),K=function(e){var t=e.onChangeQuery,a=Object(n.useState)(""),c=Object(l.a)(a,2),o=c[0],r=c[1],i=function(){r("")};return Object(b.jsx)("form",{type:"submit",onSubmit:function(e){e.preventDefault(),t(o),i()},children:Object(b.jsx)("label",{className:P.a.label,children:Object(b.jsx)("input",{className:P.a.searchInput,placeholder:"Search movies",type:"text",onChange:function(e){var t=e.target.value;r(t)},value:o})})})},z=function(e){var t=e.onChangeQuery,a=e.movies,n=e.onOpenModal,c=e.showModal,o=e.onCloseModal,r=e.movie;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(K,{onChangeQuery:t}),Object(b.jsx)(D,{children:Object(b.jsx)(E,{movies:a,onClick:n})}),c&&Object(b.jsx)(S,{onClose:o,movie:r})]})},G=a(72),q=a(73),J=a.n(q),Z=function(){var e=Object(n.useState)(!0),t=Object(l.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([]),r=Object(l.a)(o,2),i=r[0],s=r[1],d=Object(n.useState)("watched"),j=Object(l.a)(d,2),u=j[0],m=j[1];if(Object(n.useEffect)((function(){c(!0),fetch("https://filmoteka-43b8d-default-rtdb.firebaseio.com/".concat(u,".json")).then((function(e){return e.json()})).then((function(e){var t=[];for(var a in e){var n=Object(G.a)({id:a},e[a]);t.push(n)}c(!1),s(t)}))}),[u]),a)return Object(b.jsx)("section",{children:Object(b.jsx)("h2",{children:"Loading..."})});var x=function(e){var t=e.currentTarget.name;m("watched"===t?"watched":"queue")};return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:J.a.buttonsBox,children:[Object(b.jsx)(R,{variant:"outlined",color:"primary",text:"watched",name:"watched",onClick:x}),Object(b.jsx)(R,{variant:"outlined",color:"primary",text:"queue",name:"queue",onClick:x})]}),Object(b.jsx)(D,{children:Object(b.jsx)(E,{movies:i})})]})},V=a(163),$=a(158),ee=a(161),te=a(160),ae=a(48),ne=a.n(ae),ce=a(159),oe=a(156),re=a(157),ie=Object(oe.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function se(){var e=ie(),t=Object(n.useState)(""),a=Object(l.a)(t,2),c=a[0],o=a[1],r=Object(n.useState)(""),i=Object(l.a)(r,2),s=i[0],j=i[1],u=Object(n.useState)(""),m=Object(l.a)(u,2),x=m[0],p=m[1],O=Object(n.useState)(""),v=Object(l.a)(O,2),f=v[0],g=v[1],B=Object(d.g)(),M=function(e){var t=e.target,a=t.name,n=t.value;switch(a){case"firstName":o(n);break;case"lastName":j(n);break;case"email":p(n);break;case"password":g(n);break;default:console.warn("\u0422\u0438\u043f \u043f\u043e\u043b\u044f ".concat(a," \u043d\u0435 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f"))}};return Object(b.jsxs)(re.a,{component:"main",maxWidth:"xs",children:[Object(b.jsx)($.a,{}),Object(b.jsxs)("div",{className:e.paper,children:[Object(b.jsx)(V.a,{className:e.avatar,children:Object(b.jsx)(ne.a,{})}),Object(b.jsx)(ce.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(b.jsxs)("form",{className:e.form,noValidate:!0,onSubmit:function(e){e.preventDefault(),console.log({firstName:c,lastName:s,email:x,password:f}),B.replace(h.home),o(""),j(""),p(""),g("")},children:[Object(b.jsxs)(te.a,{container:!0,spacing:2,children:[Object(b.jsx)(te.a,{item:!0,xs:12,sm:6,children:Object(b.jsx)(ee.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",value:c,onChange:M,autoFocus:!0})}),Object(b.jsx)(te.a,{item:!0,xs:12,sm:6,children:Object(b.jsx)(ee.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",value:s,onChange:M,autoComplete:"lname"})}),Object(b.jsx)(te.a,{item:!0,xs:12,children:Object(b.jsx)(ee.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",value:x,onChange:M,autoComplete:"email"})}),Object(b.jsx)(te.a,{item:!0,xs:12,children:Object(b.jsx)(ee.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",value:f,onChange:M,autoComplete:"current-password"})})]}),Object(b.jsx)(I.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Sign Up"}),Object(b.jsx)(te.a,{container:!0,justifyContent:"flex-end"})]})]})]})}var le=function(){return Object(b.jsx)(se,{})},de=Object(oe.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function je(){var e=de(),t=Object(n.useState)(""),a=Object(l.a)(t,2),c=a[0],o=a[1],r=Object(n.useState)(""),i=Object(l.a)(r,2),s=i[0],j=i[1],u=Object(d.g)(),m=function(e){var t=e.target,a=t.name,n=t.value;switch(a){case"email":o(n);break;case"password":j(n);break;default:console.warn("\u0422\u0438\u043f \u043f\u043e\u043b\u044f ".concat(a," \u043d\u0435 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f"))}};return Object(b.jsxs)(re.a,{component:"main",maxWidth:"xs",children:[Object(b.jsx)($.a,{}),Object(b.jsxs)("div",{className:e.paper,children:[Object(b.jsx)(V.a,{className:e.avatar,children:Object(b.jsx)(ne.a,{})}),Object(b.jsx)(ce.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(b.jsxs)("form",{className:e.form,noValidate:!0,onSubmit:function(e){e.preventDefault(),console.log({email:c,password:s}),u.replace(h.home),o(""),j("")},children:[Object(b.jsx)(ee.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",value:c,onChange:m,autoFocus:!0}),Object(b.jsx)(ee.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",value:s,onChange:m,autoComplete:"current-password"}),Object(b.jsx)(I.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Sign In"}),Object(b.jsx)(te.a,{container:!0})]})]})]})}var ue=function(){return Object(b.jsx)(je,{})},be=(a(104),a(41)),me=a.n(be),xe="4ee9f3c9031692c2042b06be7b52de80";me.a.defaults.baseURL="https://api.themoviedb.org/3";var pe=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(null),r=Object(l.a)(o,2),i=r[0],j=r[1],u=Object(n.useState)(1),m=Object(l.a)(u,2),x=(m[0],m[1]),p=Object(n.useState)(""),O=Object(l.a)(p,2),v=O[0],f=O[1],g=Object(n.useState)(!1),B=Object(l.a)(g,2),M=B[0],w=B[1];Object(n.useEffect)((function(){(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t="/trending/all/week?api_key=".concat(xe,"&page=").concat(e);return me.a.get(t).then((function(e){return e.data.results}))})().then((function(e){return c(Object(s.a)(e))}))}),[]),Object(n.useEffect)((function(){v&&function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a="/search/movie?api_key=".concat(xe,"&query=").concat(e,"&page=").concat(t,"&include_adult=false");return me.a.get(a).then((function(e){return e.data.results}))}(v).then((function(e){return c(Object(s.a)(e))}))}),[v]);return Object(b.jsx)(C,{children:Object(b.jsxs)(d.d,{children:[Object(b.jsx)(d.b,{exact:!0,path:h.home,children:Object(b.jsx)(z,{onChangeQuery:function(e){c([]),x(1),f(e)},movies:a,movie:i,onOpenModal:function(e){(function(e){var t="/movie/".concat(e,"?api_key=").concat(xe);return me.a.get(t).then((function(e){return e.data}))})(e.currentTarget.id).then((function(e){j(e),w(!0)}))},showModal:M,onCloseModal:function(){w(!1)}})}),Object(b.jsx)(d.b,{path:h.library,component:Z}),Object(b.jsx)(d.b,{path:h.register,component:le}),Object(b.jsx)(d.b,{path:h.logIn,component:ue}),Object(b.jsx)(d.a,{to:h.home})]})})};a(123);r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(i.a,{children:Object(b.jsx)(pe,{})})}),document.getElementById("root"))},24:function(e,t,a){e.exports={"light-text-color":"#ffffff","accent-color":"#FF6B08",navigation:"Navigation_navigation__3Zc_6",navList:"Navigation_navList__2hQwL",navItem:"Navigation_navItem__yY8Bx",navLink:"Navigation_navLink__3mjcj"}},31:function(e,t,a){e.exports={"dark-text-color":"#000000","accent-color":"#FF6B08","tablet-brp":"768px","desktop-brp":"1024px",listItem:"MoviesList_listItem__3pNMu",imageBox:"MoviesList_imageBox__qugm2",title:"MoviesList_title__30MO_",postTitle:"MoviesList_postTitle__3H3z6",moviesList:"MoviesList_moviesList__2RKl3"}},49:function(e,t,a){e.exports={contentWrapper:"Layout_contentWrapper__16kHb",main:"Layout_main__1m57a"}},53:function(e,t,a){e.exports={"gray-text-color":"#545454","tablet-brp":"768px",footer:"Footer_footer__n4Uyt",footerText:"Footer_footerText__ja581"}},54:function(e,t,a){e.exports={"light-text-color":"#ffffff","tablet-brp":"768px",logo:"Logo_logo__kh5-y",logoText:"Logo_logoText__1f8NQ"}},57:function(e,t,a){e.exports={"mobile-brp":"320px","tablet-brp":"768px","desktop-brp":"1024px",bgWrapper:"AppBar_bgWrapper__3a5Ft",header:"AppBar_header__2Ja2h"}},58:function(e,t,a){e.exports={"light-text-color":"#ffffff","dark-text-color":"#000000","tablet-brp":"768px",searchInput:"SearchForm_searchInput__33Edu"}},70:function(e,t,a){e.exports={"mobile-brp":"320px","tablet-brp":"768px","desktop-brp":"1024px",container:"Container_container__3avHP"}},71:function(e,t,a){e.exports={"tablet-brp":"768px",section:"Section_section__vwaY5"}},73:function(e,t,a){e.exports={buttonsBox:"LibraryPage_buttonsBox__CcPT8"}}},[[124,1,2]]]);
//# sourceMappingURL=main.370d8c7f.chunk.js.map