(this["webpackJsonplogin-authentication"]=this["webpackJsonplogin-authentication"]||[]).push([[0],{21:function(A,e,c){},36:function(A,e,c){"use strict";c.r(e);var t=c(9),i=c.n(t),a=c(22),n=c.n(a),l=c(17),o=c.n(l),s=c(23),p=c(14),r=c(19);r.a.initializeApp({apiKey:"AIzaSyB3oTqMcTycSJ2zym_uPcwlh4cEVkc_QCo",authDomain:"login-authentication-d6e8a.firebaseapp.com",projectId:"login-authentication-d6e8a",storageBucket:"login-authentication-d6e8a.appspot.com",messagingSenderId:"271149541372",appId:"1:271149541372:web:d2e4c0d256897c14217479"});var S=r.a,d=new S.auth.FacebookAuthProvider,U=new S.auth.GoogleAuthProvider,h=function(A){return S.auth().signInWithPopup(A).then((function(A){return A.user})).catch((function(A){return A}))},j=c(24),g=c(11),m=c(2);function Q(A){return Object(m.jsxs)("header",{className:"block row center",children:[Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:"E-Cart"})}),Object(m.jsxs)("div",{style:{width:"12vw"},children:[Object(m.jsx)("span",{children:Object(m.jsxs)("a",{href:"#cart",children:["Cart",A.countCartItems?Object(m.jsx)("button",{className:"badge",children:A.countCartItems}):""]})}),Object(m.jsx)("button",{className:"logout-btn",onClick:A.handleLogout,children:"Logout"})]})]})}function K(A){var e=A.product,c=A.onAdd;return Object(m.jsxs)("div",{className:"product-row",children:[Object(m.jsx)("img",{className:"small",src:e.image,alt:e.name}),Object(m.jsx)("h3",{children:e.name}),Object(m.jsxs)("div",{children:["$",e.price]}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{className:"add-item",onClick:function(){return c(e)},children:"Add To Cart"})})]})}function k(A){var e=A.products,c=A.onAdd;return Object(m.jsxs)("main",{className:"block col-2",children:[Object(m.jsx)("h2",{children:"Products"}),Object(m.jsx)("div",{className:"row",children:e.map((function(A){return Object(m.jsx)(K,{product:A,onAdd:c},A.id)}))})]})}function E(A){var e=A.cartItems,c=A.onAdd,t=A.onRemove,i=e.reduce((function(A,e){return A+e.qty*e.price}),0),a=.14*i,n=i>2e3?0:20,l=i+a+n;return Object(m.jsxs)("aside",{id:"cart",className:"block col-1",children:[Object(m.jsx)("h2",{children:"Cart Items"}),Object(m.jsxs)("div",{children:[0===e.length&&Object(m.jsx)("div",{children:"Cart is empty"}),e.map((function(A){return Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-2",children:A.name}),Object(m.jsxs)("div",{className:"col-2",children:[Object(m.jsx)("button",{onClick:function(){return t(A)},className:"remove",children:"-"}),Object(m.jsx)("button",{onClick:function(){return c(A)},className:"add",children:"+"})]}),Object(m.jsxs)("div",{className:"col-2 text-right",children:[A.qty," x $",A.price.toFixed(2)]})]},A.id)})),0!==e.length&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("hr",{}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-2",children:"Items Price"}),Object(m.jsxs)("div",{className:"col-1 text-right",children:["$",i.toFixed(2)]})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-2",children:"Tax Price"}),Object(m.jsxs)("div",{className:"col-1 text-right",children:["$",a.toFixed(2)]})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-2",children:"Shipping Price"}),Object(m.jsxs)("div",{className:"col-1 text-right",children:["$",n.toFixed(2)]})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-2",children:Object(m.jsx)("strong",{children:"Total Price"})}),Object(m.jsx)("div",{className:"col-1 text-right",children:Object(m.jsxs)("strong",{children:["$",l.toFixed(2)]})})]}),Object(m.jsx)("hr",{}),Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("button",{onClick:function(){return alert("This Option is Not prompted")},children:"Checkout"})})]})]})]})}var C={products:[{id:"1",name:"iWatch",price:600,image:"https://cdn.pixabay.com/photo/2015/06/25/17/22/smart-watch-821559_960_720.jpg"},{id:"2",name:"MacBook",price:1e3,image:"https://cdn.pixabay.com/photo/2014/05/02/21/50/laptop-336378_960_720.jpg"},{id:"3",name:"Sailing Boat",price:2500,image:"https://cdn.pixabay.com/photo/2018/05/14/08/38/sailing-boat-3399014_960_720.jpg"},{id:"4",name:"iPhone",price:900,image:"https://cdn.pixabay.com/photo/2013/07/12/18/39/smartphone-153650_960_720.png"},{id:"5",name:"Female Dress",price:100,image:"https://cdn.pixabay.com/photo/2013/07/13/09/38/dresses-155838_960_720.png"},{id:"6",name:"Bicycle",price:50,image:"https://cdn.pixabay.com/photo/2013/07/13/13/39/bicycle-161315_960_720.png"},{id:"7",name:"Airplane",price:250500,image:"data:image/jpeg;base64,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"},{id:"8",name:"Mountain- bike",price:900,image:"https://cdn.pixabay.com/photo/2017/01/31/23/29/motocross-2028195_960_720.png"},{id:"9",name:"Harry Potter Merchandise",price:2500,image:"data:image/jpeg;base64,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"},{id:"10",name:"Binoculars",price:50,image:"https://images-na.ssl-images-amazon.com/images/I/61jpcfCCGfL._AC_SL1500_.jpg"},{id:"11",name:"Air Purifier",price:800,image:"https://images-na.ssl-images-amazon.com/images/I/71oEVIJI0HL.__AC_SX300_SY300_QL70_FMwebp_.jpg"},{id:"12",name:"Gaming Laptop",price:1800,image:"https://images-na.ssl-images-amazon.com/images/I/71u0GGtWGDL._AC_SL1001_.jpg"}]};c(21);var B=function(A){var e=A.handleLogout,c=C.products,i=Object(t.useState)([]),a=Object(p.a)(i,2),n=a[0],l=a[1],o=function(A){var e=n.find((function(e){return e.id===A.id}));l(e?n.map((function(c){return c.id===A.id?Object(g.a)(Object(g.a)({},e),{},{qty:e.qty+1}):c})):[].concat(Object(j.a)(n),[Object(g.a)(Object(g.a)({},A),{},{qty:1})]))};return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(Q,{handleLogout:e,countCartItems:n.length}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)(k,{products:c,onAdd:o}),Object(m.jsx)(E,{cartItems:n,onAdd:o,onRemove:function(A){var e=n.find((function(e){return e.id===A.id}));1===e.qty?l(n.filter((function(e){return e.id!==A.id}))):l(n.map((function(c){return c.id===A.id?Object(g.a)(Object(g.a)({},e),{},{qty:e.qty-1}):c})))}})]})]})},J=function(){var A=Object(t.useState)(!0),e=Object(p.a)(A,2),c=e[0],i=e[1],a=function(){var A=Object(s.a)(o.a.mark((function A(e){var t;return o.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,h(e);case 2:t=A.sent,i(!c),console.log(t);case 5:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}();return Object(m.jsx)(m.Fragment,{children:c?Object(m.jsxs)("div",{className:"login-container",children:[Object(m.jsx)("span",{className:"login-heading",children:"Welcome to E-kart"}),Object(m.jsx)("button",{className:"google-login",onClick:function(){return a(U)},children:" Login With Google "}),Object(m.jsx)("button",{className:"fb-login",onClick:function(){return a(d)},children:" Login With Facebook "})]}):Object(m.jsx)(B,{handleLogout:function(){S.auth().signOut().then((function(){console.log("clicked"),i(!0)})).catch((function(A){console.log(A)}))}})})};n.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(J,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.2899a204.chunk.js.map