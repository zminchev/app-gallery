(this["webpackJsonpgame-gallery-app"]=this["webpackJsonpgame-gallery-app"]||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},40:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){"use strict";c.r(t);var n=c(3),s=c.n(n),a=c(25),r=c.n(a),i=(c(37),c(38),c(32)),l=c(7),o=c(6),d=c(2),j=c.n(d),u=c(5),b=c(4),p=(c(40),c(31)),O=Object(p.a)("https://mlrgblouczagbxdupdkp.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMjk5ODg2OSwiZXhwIjoxOTQ4NTc0ODY5fQ.1vL5_Pa8YUX-b1MFCPFdmbkDs6wco8xZOYB54XKHT4E"),h=c(1),m=s.a.createContext();function x(){return Object(n.useContext)(m)}var f=function(e){var t=e.children,c=Object(n.useState)(),s=Object(b.a)(c,2),a=s[0],r=s[1],i=Object(n.useState)(!0),l=Object(b.a)(i,2),o=l[0],d=l[1];Object(n.useEffect)((function(){var e,t=O.auth.session();r(null!==(e=null===t||void 0===t?void 0:t.user)&&void 0!==e?e:null),d(!1);var c=O.auth.onAuthStateChange(function(){var e=Object(u.a)(j.a.mark((function e(t,c){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r(null!==(n=null===c||void 0===c?void 0:c.user)&&void 0!==n?n:null),d(!1);case 2:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}()),n=c.data;return function(){null===n||void 0===n||n.unsubscribe()}}),[]);var p={signUp:function(e){return O.auth.signUp(e)},signIn:function(e){return O.auth.signIn(e)},signOut:function(){return O.auth.signOut()},user:a};return Object(h.jsx)(m.Provider,{value:p,children:!o&&t})},v=c(15);var g=function(e){return Object(h.jsxs)("button",{disabled:e.disabled,onClick:e.onClick,id:e.id,type:e.type,className:e.className,children:[e.value,e.icon]})},N=c.p+"static/media/GGA Logo.e8635831.svg";var y=function(){var e=x(),t=e.user,c=e.signOut,s=Object(n.useState)(!1),a=Object(b.a)(s,2),r=a[0],i=a[1],d=Object(n.useState)(),p=Object(b.a)(d,2),O=p[0],m=p[1],f=Object(n.useState)(!0),y=Object(b.a)(f,2),w=y[0],k=y[1],C=Object(o.f)(),S={color:"white",width:"40",height:"40"};function R(){return L.apply(this,arguments)}function L(){return(L=Object(u.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c();case 2:C.push("/login");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(){return(I=Object(u.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C.push("/login");case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(){return(F=Object(u.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k(!w);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(){return D.apply(this,arguments)}function D(){return(D=Object(u.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k(!0);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(e){return q.apply(this,arguments)}function q(){return(q=Object(u.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m(t);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){i(!!t)}),[t,O]),Object(h.jsxs)("div",{className:"navigation",children:[Object(h.jsx)("div",{className:"logo",children:Object(h.jsx)(l.b,{onClick:G,id:"logo",to:"/app-gallery",children:Object(h.jsx)("img",{src:N,alt:"Back to homepage"})})}),Object(h.jsx)("div",{className:"web-nav",children:Object(h.jsxs)("div",{className:"nav-links",children:[[{id:0,title:"Games",url:"/games"},{id:1,title:"Discussions",url:"/discussions"},{id:2,title:"Upload",url:"/upload"}].map((function(e){return Object(h.jsxs)("div",{className:"nav-item",children:[Object(h.jsx)(l.b,{onClick:function(){G(e.id)},id:O===e.id?"option-active":"option",to:"".concat(e.url),children:e.title}),Object(h.jsx)("div",{className:O===e.id?"active":null})]},e.id)})),r?Object(h.jsx)("div",{className:"nav-item",children:Object(h.jsx)(l.b,{onClick:G,id:"option",to:"/dashboard",children:"Account"})}):null]})}),r?Object(h.jsx)("div",{className:"btn-container",children:Object(h.jsx)(g,{id:"logout-btn",onClick:R,value:"Log out"})}):Object(h.jsx)("div",{className:"btn-container",children:Object(h.jsx)(g,{id:"login-btn",onClick:function(){return I.apply(this,arguments)},value:"Log in"})}),Object(h.jsx)("div",{className:"mobile-nav",children:Object(h.jsx)("div",{className:"hamburger-menu",onClick:function(){return F.apply(this,arguments)},children:w?Object(h.jsx)(v.c,{style:S}):Object(h.jsx)(v.a,{style:S})})}),Object(h.jsx)("div",{className:w?"nav-menu":"nav-menu active",children:r?Object(h.jsxs)("div",{className:"menu",children:[Object(h.jsx)(l.b,{onClick:U,id:"m-option",to:"/games",children:"Games"}),Object(h.jsx)(l.b,{onClick:U,id:"m-option",to:"/discussions",children:"Discussions"}),Object(h.jsx)(l.b,{onClick:U,id:"m-option",to:"/upload",children:"Upload"}),Object(h.jsx)(l.b,{onClick:U,id:"m-option",to:"/dashboard",children:"Account"}),Object(h.jsx)(l.b,{onClick:function(){R(),U()},id:"logout-btn-m",to:"/login",children:"Log out"})]}):Object(h.jsxs)("div",{className:"menu",children:[Object(h.jsx)(l.b,{onClick:U,id:"m-option",to:"/games",children:"Games"}),Object(h.jsx)(l.b,{onClick:U,id:"m-option",to:"/discussions",children:"Discussions"}),Object(h.jsx)(l.b,{onClick:U,id:"m-option",to:"/register",children:"Sign up"}),Object(h.jsx)(l.b,{onClick:U,id:"login-btn-m",to:"/login",children:"Log in"})]})})]})},w=(c(50),c.p+"static/media/bgImage.99dc8eaf.jpg"),k=c(29);var C=function(){var e=Object(o.f)(),t=x().user,c=Object(n.useState)(!1),s=Object(b.a)(c,2),a=s[0],r=s[1];function i(){return(i=Object(u.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.push("/register");case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(n.useEffect)((function(){r(!!t)}),[t]),Object(h.jsxs)("div",{className:"content",children:[Object(h.jsxs)("div",{className:"content-container",children:[Object(h.jsxs)("div",{className:"welcome-message",children:[Object(h.jsx)("h1",{children:"Game Gallery"}),Object(h.jsx)("span",{children:"If you are a game-dev enthusiast, this is the place for you to promote your games!"})]}),Object(h.jsx)("div",{className:"top-highlight"}),Object(h.jsx)("div",{className:"bottom-highlight"})]}),Object(h.jsx)("img",{src:w,alt:""}),a?null:Object(h.jsx)(g,{onClick:function(){return i.apply(this,arguments)},id:"sign-up",value:"Sign up",icon:Object(h.jsx)(k.a,{size:"20"})})]})},S=(c(23),Object(n.forwardRef)((function(e,t){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("label",{htmlFor:e.for,children:[" ",e.labelTitle," "]}),Object(h.jsx)("input",{type:e.type,className:e.className,id:e.id,placeholder:e.placeholder,ref:t,required:e.required,errorStyle:e.errorStyle,onChange:e.onChange})]})})));var R=function(){var e=Object(n.useState)(!1),t=Object(b.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(""),r=Object(b.a)(a,2),i=r[0],d=r[1],p=Object(n.createRef)(),O=Object(n.createRef)(),m=x().signIn,f=Object(o.f)();function v(){return v=Object(u.a)(j.a.mark((function e(t){var c,n,a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c=p.current.value,n=O.current.value,s(!0),d(""),e.next=7,m({email:c,password:n});case 7:a=e.sent,(r=a.error)?d(r.message):f.push("/app-gallery"),s(!1);case 11:case"end":return e.stop()}}),e)}))),v.apply(this,arguments)}return Object(h.jsx)("div",{className:"login-page",children:Object(h.jsxs)("div",{className:"login-container",children:[Object(h.jsx)("h2",{id:"heading",children:"Log in"}),Object(h.jsx)("div",{className:i?"error":null,children:i}),Object(h.jsxs)("form",{className:"login-form",onSubmit:function(e){return v.apply(this,arguments)},children:[Object(h.jsx)(S,{type:"email",className:"email",placeholder:"Email",ref:p,required:!0}),Object(h.jsx)(S,{type:"password",className:"password",placeholder:"Password",ref:O,required:!0}),Object(h.jsx)(g,{id:"auth-button",disabled:c,type:"submit",value:c?Object(h.jsx)("span",{children:"Loading..."}):Object(h.jsx)("span",{children:"Log in"})}),Object(h.jsx)(l.b,{to:"/register",id:"reg-redirect",children:"Don't have an account? Register here."})]})]})})};var L=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(!1),r=Object(b.a)(a,2),i=r[0],d=r[1],p=Object(n.createRef)(),O=Object(n.createRef)(),m=Object(n.createRef)(),f=Object(o.f)(),v=x().signUp;function N(){return N=Object(u.a)(j.a.mark((function e(t){var c,n,a,r,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),c=p.current.value,n=O.current.value,a=m.current.value,n===a){e.next=6;break}return e.abrupt("return",s("Passwords do not match."));case 6:return d(!0),s(""),e.next=10,v({email:c,password:n});case 10:r=e.sent,(i=r.error)?s(i.message):f.push("/app-gallery"),d(!1);case 14:case"end":return e.stop()}}),e)}))),N.apply(this,arguments)}return Object(h.jsx)("div",{className:"register-page",children:Object(h.jsxs)("div",{className:"register-container",children:[Object(h.jsx)("h2",{id:"heading",children:"Create an account"}),Object(h.jsxs)("form",{className:"register-form",onSubmit:function(e){return N.apply(this,arguments)},children:[Object(h.jsx)("div",{className:"error",children:c}),Object(h.jsx)(S,{type:"email",className:"email",placeholder:"Email",ref:p,required:!0}),Object(h.jsx)(S,{type:"password",className:"password",placeholder:"Password",ref:O,required:!0}),Object(h.jsx)(S,{type:"password",className:"password",placeholder:"Confirm password",ref:m,required:!0}),Object(h.jsx)(g,{id:"auth-button",disabled:i,type:"submit",value:i?Object(h.jsx)("span",{children:"Loading..."}):Object(h.jsx)("span",{children:"Sign in"})}),Object(h.jsx)(l.b,{to:"/login",id:"reg-redirect",children:"Already have an account? Log in."})]})]})})};c(51);var I=function(e){return Object(h.jsx)("div",{className:"card",onClick:e.onClick,children:Object(h.jsxs)("div",{className:"card-info",children:[Object(h.jsx)("h3",{id:"card-title",children:e.title}),Object(h.jsx)("small",{id:"card-description",children:e.description}),Object(h.jsx)("p",{id:"card-item-price",children:e.price}),Object(h.jsx)("p",{id:"card-item-developer",children:e.developer}),Object(h.jsx)("img",{src:"".concat(e.URL),alt:""})]})})},F=(c(52),c(30)),U=function(e){var t=e.openModal,c=e.setOpenModal;return Object(h.jsx)(h.Fragment,{children:t?Object(h.jsx)("div",{className:"card-modal",children:Object(h.jsx)("div",{className:"window",children:Object(h.jsxs)("div",{className:"window-content",children:[Object(h.jsx)("div",{className:"close-modal",children:Object(h.jsx)("button",{className:"close",onClick:function(){c(!1)},children:Object(h.jsx)(F.a,{style:{color:"whitesmoke",width:"30",height:"30"}})})}),Object(h.jsx)("div",{className:"image-container",children:Object(h.jsx)("img",{src:e.imageURL,alt:"s"})}),Object(h.jsxs)("div",{className:"card-info-container",children:[Object(h.jsx)("h2",{className:"title",children:e.title}),Object(h.jsx)("p",{className:"description",children:e.desc}),Object(h.jsx)("p",{className:"price",children:e.price}),Object(h.jsx)("p",{className:"developer",children:e.dev})]}),Object(h.jsx)("div",{className:"button",children:Object(h.jsx)(g,{id:"buy-btn",value:"Buy"})})]})})}):null})};c(53);var D=function(){var e=Object(n.useState)(),t=Object(b.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(""),r=Object(b.a)(a,2),i=r[0],l=r[1],d=Object(n.useState)(!1),p=Object(b.a)(d,2),m=p[0],x=p[1],f=Object(n.useState)(!1),g=Object(b.a)(f,2),N=g[0],y=g[1],w=Object(n.useState)(),k=Object(b.a)(w,2),C=k[0],S=k[1],R=Object(n.useState)(),L=Object(b.a)(R,2),F=L[0],D=L[1],G=Object(n.useState)(),q=Object(b.a)(G,2),P=q[0],T=q[1],E=Object(n.useState)(),M=Object(b.a)(E,2),_=M[0],J=M[1],A=Object(n.useState)(),B=Object(b.a)(A,2),Y=B[0],z=B[1],X=[],Q=[],W=[],Z=[],$=[],H=[],K=(Object(o.g)().slug,Object(n.useCallback)((function(){y(!0)}),[])),V=function(e){S(e)},ee=function(e){D(e)},te=function(e){T(e)},ce=function(e){J(e)},ne=function(e){z(e)};function se(){return(se=Object(u.a)(j.a.mark((function e(){var t,c,n,a,r,i,o,d,u,b,p,m,f,v,g,N,y,w,k,C;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.next=3,O.from("games").select();case 3:return t=e.sent,c=t.data,e.next=7,O.from("games").select("title");case 7:return n=e.sent,a=n.data,e.next=11,O.from("games").select("description");case 11:return r=e.sent,i=r.data,e.next=15,O.from("games").select("price");case 15:return o=e.sent,d=o.data,e.next=19,O.from("games").select("image_url");case 19:return u=e.sent,b=u.data,e.next=23,O.from("games").select("developer");case 23:if(p=e.sent,m=p.data,0===c.length)l("Sorry... There aren't any games yet.");else{for(f=0;f<c.length;f++)v=X[f],X.push(v);for(g in a)Q.push(a[g]);for(N in i)W.push(i[N]);for(y in d)Z.push(d[y]);for(w in m)$.push(m[w]);for(k in b)H.push(b[k]);C=X.map((function(e,t){return Object(h.jsx)(I,{URL:H[t].image_url,title:Q[t].title,description:W[t].description,price:"".concat(Z[t].price,"$"),developer:$[t].developer,onClick:function(){K(),V(Q[t].title),ee(W[t].description),te("".concat(Z[t].price,"$")),ne($[t].developer),ce(H[t].image_url)}},t)})),s(C),x(!1)}case 26:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){c||function(){se.apply(this,arguments)}()}),[C]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(U,{title:C,desc:F,price:P,imageURL:_,dev:Y,openModal:N,setOpenModal:y}),Object(h.jsx)("div",{className:"game-display-page",children:m?Object(h.jsx)("div",{className:"loader-container",children:Object(h.jsx)("div",{className:"loader",children:Object(h.jsx)(v.b,{style:{color:"007fc4",width:"50",height:"50"}})})}):Object(h.jsx)("div",{className:i?"content-error":"content-page",children:i||c})})]})};c(24);var G=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(""),r=Object(b.a)(a,2),i=r[0],l=r[1],o=Object(n.useRef)(),d=Object(n.useRef)(),p=Object(n.useRef)(),m=Object(n.useRef)(),f=x().user;function v(){return v=Object(u.a)(j.a.mark((function e(){var t,c,n,a,r,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.current.value,c=d.current.value,n=p.current.value,a=m.current.value,s(""),l(),e.next=8,O.from("profiles").upsert({id:null===f||void 0===f?void 0:f.id,username:t,first_name:c,last_name:n,website:a});case 8:r=e.sent,(i=r.error)?(l(""),s(i.message)):(s(""),l("Changes saved successfully."));case 11:case"end":return e.stop()}}),e)}))),v.apply(this,arguments)}return Object(h.jsxs)("div",{className:"dashboard-content",children:[Object(h.jsxs)("div",{className:"notification-handling",children:[Object(h.jsx)("div",{className:i?"success":null,children:i}),Object(h.jsx)("div",{className:c?"error":null,children:c})]}),Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("div",{className:"header",children:Object(h.jsx)("label",{children:"General"})}),Object(h.jsxs)("div",{className:"sub-header",children:[Object(h.jsxs)("div",{className:"sub-header-content",children:[Object(h.jsx)("label",{children:"Username"}),Object(h.jsx)("input",{type:"text",id:"username",ref:o})]}),Object(h.jsxs)("div",{className:"sub-header-content",children:[Object(h.jsx)("label",{children:"First name"}),Object(h.jsx)("input",{type:"text",id:"fname",ref:d})]}),Object(h.jsxs)("div",{className:"sub-header-content",children:[Object(h.jsx)("label",{children:"Last name"}),Object(h.jsx)("input",{type:"text",id:"lname",ref:p})]}),Object(h.jsxs)("div",{className:"sub-header-content",children:[Object(h.jsx)("label",{children:"Website"}),Object(h.jsx)("input",{type:"text",id:"website",ref:m})]})]})]}),Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("div",{className:"header",children:Object(h.jsx)("label",{children:"Security"})}),Object(h.jsxs)("div",{className:"sub-header",children:[Object(h.jsxs)("div",{className:"sub-header-content",children:[Object(h.jsx)("label",{children:"Password"}),Object(h.jsx)("input",{type:"password",id:"password"})]}),Object(h.jsxs)("div",{className:"sub-header-content",children:[Object(h.jsx)("label",{children:"Confirm new password"}),Object(h.jsx)("input",{type:"password",id:"c-password"})]})]})]}),Object(h.jsx)("div",{className:"button-container",children:Object(h.jsx)(g,{onClick:function(){return v.apply(this,arguments)},id:"save-btn",value:"Save"})})]})};var q=function(){return Object(h.jsxs)("div",{className:"account-page",children:[Object(h.jsxs)("div",{className:"profile-container",children:[Object(h.jsx)("div",{className:"avatar-container",children:Object(h.jsx)("div",{className:"avatar"})}),Object(h.jsx)("div",{className:"user-info",children:Object(h.jsx)("div",{className:"names",children:Object(h.jsx)("p",{children:"Test Test"})})})]}),Object(h.jsx)(G,{})]})};c(54);var P=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(""),r=Object(b.a)(a,2),i=r[0],l=r[1],o=Object(n.useState)(!1),d=Object(b.a)(o,2),p=d[0],m=d[1],f=Object(n.createRef)(),v=Object(n.createRef)(),N=Object(n.createRef)(),y=Object(n.createRef)(),w=x().user,k={url:""};function C(){return(C=Object(u.a)(j.a.mark((function e(t){var c,n,s,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.target.files[0],e.next=3,O.storage.from("card-images").upload("images/".concat(c.name),c);case 3:n=e.sent,n.data,n.error,s=O.storage.from("card-images").getPublicUrl("images/".concat(c.name)),a=s.publicURL,k.url=a;case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(){return R=Object(u.a)(j.a.mark((function e(t){var c,n,a,r,i,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=f.current.value,n=v.current.value,a=N.current.value,r=y.current.value,t.preventDefault(),m(!0),s(""),e.next=9,O.from("games").upsert({uploaded_by:null===w||void 0===w?void 0:w.id,image_url:k.url,title:c,description:n,price:a,developer:r});case 9:i=e.sent,(o=i.error)?s(o.message):(l("Game was uploaded successfully!"),m(!1));case 12:case"end":return e.stop()}}),e)}))),R.apply(this,arguments)}return Object(h.jsxs)("div",{className:"page",children:[Object(h.jsx)("div",{className:"upload-container",children:Object(h.jsxs)("form",{className:"upload-form",children:[Object(h.jsx)("h1",{id:"header",children:"Upload a game"}),Object(h.jsx)("div",{className:"notification-handling",children:Object(h.jsx)("div",{className:i?"success":"error",children:i||c})}),Object(h.jsxs)("div",{className:"input-container",children:[Object(h.jsx)("label",{htmlFor:"title",children:"Game title"}),Object(h.jsx)(S,{type:"text",id:"title",ref:f,required:!0})]}),Object(h.jsxs)("div",{className:"input-container",children:[Object(h.jsx)("label",{htmlFor:"image",children:"Display image"}),Object(h.jsx)(S,{type:"file",id:"image",onChange:function(e){return C.apply(this,arguments)},required:!0})]}),Object(h.jsxs)("div",{className:"input-container",children:[Object(h.jsx)("label",{htmlFor:"description",children:"Game description"}),Object(h.jsx)("textarea",{type:"text",id:"description",ref:v,required:!0})]}),Object(h.jsxs)("div",{className:"input-container",children:[Object(h.jsx)("label",{htmlFor:"price",children:"Game Price"}),Object(h.jsx)(S,{type:"text",id:"price",ref:N,required:!0})]}),Object(h.jsxs)("div",{className:"input-container",children:[Object(h.jsx)("label",{htmlFor:"developer",children:"Developer"}),Object(h.jsx)(S,{type:"text",id:"developer",ref:y,required:!0})]}),Object(h.jsx)(g,{disabled:p,onClick:function(e){return R.apply(this,arguments)},id:"upload-btn",value:p?Object(h.jsx)("span",{children:"Uploading..."}):Object(h.jsx)("span",{children:"Upload"})})]})}),Object(h.jsx)("div",{className:"upload-guidelines"})]})};var T=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(l.a,{children:Object(h.jsx)(f,{children:Object(h.jsxs)(i.a,{value:O,children:[Object(h.jsx)(o.c,{children:Object(h.jsx)(y,{})}),Object(h.jsx)(o.a,{exact:!0,path:"/app-gallery",component:C}),Object(h.jsx)(o.a,{path:"/login",component:R}),Object(h.jsx)(o.a,{path:"/register",component:L}),Object(h.jsx)(o.a,{exact:!0,path:"/games",component:D}),Object(h.jsx)(o.a,{path:"/dashboard",component:q}),Object(h.jsx)(o.a,{path:"/upload",component:P})]})})})})},E=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,58)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};r.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(T,{})}),document.getElementById("root")),E()}},[[55,1,2]]]);
//# sourceMappingURL=main.201fd6ef.chunk.js.map