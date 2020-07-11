(this.webpackJsonptinder=this.webpackJsonptinder||[]).push([[0],{56:function(e,n,t){e.exports=t(78)},73:function(e,n,t){},75:function(e,n,t){},78:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(30),o=t.n(c),i=t(19),u=t(15),l=t(20),s=t(47),p=t(11),f=t.n(p),d=t(16),m=t(5),g=t(24),b=t.n(g);t(67),t(69);b.a.initializeApp({apiKey:"AIzaSyCdevtJAXbq-bd59KGr06i4mncbSJPjgi8",authDomain:"react-hector-bliss.firebaseapp.com",databaseURL:"https://react-hector-bliss.firebaseio.com",projectId:"react-hector-bliss",storageBucket:"react-hector-bliss.appspot.com",messagingSenderId:"479725401674",appId:"1:479725401674:web:0877497994de92b9ecd8b3",measurementId:"G-RGJ11BJCHW"});var h=b.a.firestore().collection("favs"),v=function(){var e=Object(d.a)(f.a.mark((function e(n){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.doc(n).get();case 3:return t=e.sent,e.abrupt("return",t.data().array);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",console.error(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),E=function(){var e=Object(d.a)(f.a.mark((function e(){var n,t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new b.a.auth.GoogleAuthProvider,e.prev=1,e.next=4,b.a.auth().signInWithPopup(n);case 4:return t=e.sent,e.abrupt("return",t.user);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",console.error(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),O=t(7),y=t(28),j=t(38);function x(){var e=Object(O.a)(["\n      query($page: Int) {\n        characters(page: $page) {\n          info {\n            pages\n            next\n            prev\n          }\n          results {\n            name\n            image\n          }\n        }\n      }\n    "]);return x=function(){return e},e}var S={fetching:!1,array:[],current:{},favorites:[],nextPage:1},C=new j.a({uri:"https://rickandmortyapi.com/graphql"});var A=function(){return function(){var e=Object(d.a)(f.a.mark((function e(n,t){var r,a,c,o,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(j.b)(x()),n({type:"GET_CHARACTERS"}),a=t().characters.nextPage,e.next=5,C.query({query:r,variables:{page:a}});case 5:if(c=e.sent,o=c.data,!(i=c.error)){e.next=11;break}return n({type:"GET_CHARACTERS_ERROR",payload:i}),e.abrupt("return");case 11:n({type:"GET_CHARACTERS_SUCCESS",payload:o.characters.results}),n({type:"UPDATE_PAGE",payload:o.characters.info.next?o.characters.info.next:1});case 13:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()},R={loggedIn:!1,fetching:!1},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"LOGIN":return Object(m.a)(Object(m.a)({},e),{},{fetching:!0});case"LOGIN_ERROR":return Object(m.a)(Object(m.a)({},e),{},{fetching:!1,error:n.payload});case"LOGIN_SUCCESS":return Object(m.a)(Object(m.a)(Object(m.a)({},e),{},{fetching:!1},n.payload),{},{loggedIn:!0});case"LOG_OUT":return Object(m.a)({},R);default:return e}},w=function(e){localStorage.storage=JSON.stringify(e)},T=Object(l.c)({user:_,characters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"GET_CHARACTERS":return Object(m.a)(Object(m.a)({},e),{},{fetching:!0});case"GET_CHARACTERS_SUCCESS":return Object(m.a)(Object(m.a)({},e),{},{fetching:!1,array:n.payload});case"GET_CHARACTERS_ERROR":return Object(m.a)(Object(m.a)({},e),{},{fetching:!1,error:n.payload});case"REMOVE_CHARACTER":return Object(m.a)(Object(m.a)({},e),{},{array:n.payload});case"ADD_TO_FAVORITES":return Object(m.a)(Object(m.a)({},e),n.payload);case"GET_FAVS ":return Object(m.a)(Object(m.a)({},e),{},{fetching:!0});case"GET_FAVS_SUCCESS ":return Object(m.a)(Object(m.a)({},e),{},{fetching:!1,favorites:n.payload});case"GET_FAVS_ERROR":return Object(m.a)(Object(m.a)({},e),{},{fetching:!1,error:n.payload});case"UPDATE_PAGE":return Object(m.a)(Object(m.a)({},e),{},{nextPage:n.payload});default:return e}}}),k=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,G=function(){var e=Object(l.e)(T,k(Object(l.a)(s.a)));return A()(e.dispatch,e.getState),function(e){var n=localStorage.getItem("storage");(n=JSON.parse(n))&&n.user&&e({type:"LOGIN_SUCCESS",payload:n.user})}(e.dispatch),e},I=t(9),N=(t(73),t(55)),L=t(17),U=t(35),F=t.n(U);function z(){var e=Object(O.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(246, 36, 89, 0.3);\n  border-radius: 0 1rem 1rem 0;\n  &:hover span {\n    font-size: 7rem;\n  }\n"]);return z=function(){return e},e}function P(){var e=Object(O.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(189, 195, 199, 0.3);\n  border-radius: 1rem 0 0 1rem;\n  &:hover span {\n    font-size: 7rem;\n  }\n"]);return P=function(){return e},e}function V(){var e=Object(O.a)(["\n  transition: all 0.3s;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n\n  &:hover {\n    opacity: 0.9;\n  }\n"]);return V=function(){return e},e}function H(){var e=Object(O.a)(["\n  font-size: 2rem;\n  font-weight: bold;\n  margin: 30px 0 10px 0;\n"]);return H=function(){return e},e}function D(){var e=Object(O.a)(["\n  background: #381460;\n  color: #eee;\n  width: 320px;\n  padding: 15px;\n  border-radius: 1rem;\n  box-sizing: border-box;\n  box-shadow: 0px 2px 10px black;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n\n  img {\n    border-radius: 1rem;\n    max-height: 300px;\n    width: 100%;\n  }\n"]);return D=function(){return e},e}function J(){var e=Object(O.a)(["\n  display: flex;\n  justify-content: center;\n  font-family: Avenir;\n  cursor: pointer;\n  min-width: 250px;\n  max-width: 450px;\n  margin: 20px 10px;\n\n  span {\n    color: white;\n    font-size: 6rem;\n    transition: all 0.3s;\n  }\n"]);return J=function(){return e},e}var q=I.a.div(J()),B=I.a.div(D()),M=I.a.p(H()),X=I.a.div(V()),K=I.a.div(P()),W=I.a.div(z()),$=function(e){var n=e.name,t=e.image,r=e.rightClick,c=e.leftClick,o=e.hide;return a.a.createElement(a.a.Fragment,null,n?a.a.createElement(q,null,a.a.createElement(B,null,t&&a.a.createElement("img",{alt:n,src:t}),a.a.createElement(M,null,n),!o&&a.a.createElement(X,null,a.a.createElement(K,{onClick:c},a.a.createElement(F.a,{name:"thumbs-down",size:"2x"})),a.a.createElement(W,{onClick:r},a.a.createElement(F.a,{name:"heart",size:"2x"}))))):a.a.createElement("h2",null,"No more characters..."))},Q=$;function Y(){var e=Object(O.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n"]);return Y=function(){return e},e}$.defaultProps={name:"Loading...",image:""};var Z=I.a.div(Y()),ee=Object(u.b)((function(e){return{chars:e.characters.array}}),{addToFavoritesAction:function(){return function(e,n){var t=n().characters,r=t.array,a=t.favorites,c=n().user.uid,o=r.shift();a.push(o),function(e,n){h.doc(n).set({array:e})}(a,c),e({type:"ADD_TO_FAVORITES",payload:{array:Object(y.a)(r),favorites:Object(y.a)(a)}})}},removeCharacterAction:function(){return function(e,n){var t=n().characters.array;t.shift(),t.length?e({type:"REMOVE_CHARACTER",payload:Object(y.a)(t)}):A()(e,n)}}})((function(e){var n=e.chars,t=e.removeCharacterAction,r=e.addToFavoritesAction,c=function(){return r()};return a.a.createElement(Z,null,a.a.createElement("h2",null,a.a.createElement("span",{role:"img","aria-label":"alien"},"\ud83d\udc7d")),a.a.createElement("div",null,function(){var e=n[0];return a.a.createElement(Q,Object.assign({rightClick:c,leftClick:t},e))}()))}));function ne(){var e=Object(O.a)([""]);return ne=function(){return e},e}function te(){var e=Object(O.a)(["\n  font-size: 2rem;\n  margin: 10px 0 20px 0;\n"]);return te=function(){return e},e}function re(){var e=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return re=function(){return e},e}var ae=I.a.div(re()),ce=I.a.span(te()),oe=I.a.div(ne()),ie=Object(u.b)((function(e){return{characters:e.characters.favorites}}))((function(e){var n=e.characters,t=void 0===n?[0]:n;return a.a.createElement(ae,null,a.a.createElement(ce,null,a.a.createElement("span",{role:"img","aria-label":"hearth"},"\u2764\ufe0f")),a.a.createElement(oe,null,t.map((function(e,n){return a.a.createElement(Q,Object.assign({},e,{key:n,hide:!0}))})),!t.length&&a.a.createElement("h3",null,"No characters added")))}));function ue(){var e=Object(O.a)(["\n  padding: 20px 50px;\n  border: none;\n  margin: 20px 0px;\n  border-radius: 5px;\n  background-color: transparent;\n  color: orangered;\n  font-size: 1.2rem;\n  box-sizing: border-box;\n  transition: all 0.3s;\n  cursor: pointer;\n  border: 2px solid orangered;\n\n  &:hover {\n    background-color: orangered;\n    color: white;\n    border: 2px solid transparent;\n  }\n"]);return ue=function(){return e},e}function le(){var e=Object(O.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n"]);return le=function(){return e},e}var se=I.a.div(le()),pe=I.a.button(ue()),fe=Object(u.b)((function(e){var n=e.user;return{fetching:n.fetching,loggedIn:n.loggedIn}}),{doGoogleLoginAction:function(){return function(){var e=Object(d.a)(f.a.mark((function e(n,t){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:"LOGIN"}),e.prev=1,e.next=4,E();case 4:r=e.sent,n({type:"LOGIN_SUCCESS",payload:{uid:r.uid,displayName:r.displayName,email:r.email,photoURL:r.photoURL}}),w(t()),function(){var e=Object(d.a)(f.a.mark((function e(n,t){var r,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:"GET_FAVS "}),r=t().user.uid,e.prev=2,e.next=5,v(r);case 5:a=e.sent,n({type:"GET_FAVS_SUCCESS ",payload:Object(y.a)(a)}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0),n({type:"GET_FAVS_ERROR",payload:e.t0.message});case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(n,t){return e.apply(this,arguments)}}()(n,t),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0),n({type:"LOGIN_ERROR",payload:e.t0.message});case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(n,t){return e.apply(this,arguments)}}()},logOutAction:function(){return function(e){b.a.auth().signOut(),e({type:"LOG_OUT"}),localStorage.removeItem("storage")}}})((function(e){var n=e.loggedIn,t=e.logOutAction,r=e.fetching,c=e.doGoogleLoginAction;return r?a.a.createElement("h2",{style:{textAlign:"center"}},"Loading..."):a.a.createElement(se,null,n?a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,a.a.createElement("span",{role:"img","aria-label":"bye"},"\ud83d\udc4b")),a.a.createElement(pe,{onClick:function(){t()}},"Log Out")):a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Sign In with Google"),a.a.createElement(pe,{onClick:function(){c()}},"Sign In")))})),de=function(e){var n=e.path,t=e.component,r=Object(N.a)(e,["path","component"]),c=localStorage.getItem("storage");return(c=JSON.parse(c))&&c.user?a.a.createElement(L.b,Object.assign({path:n,component:t},r)):a.a.createElement(L.a,Object.assign({to:"/login"},r))},me=function(){return a.a.createElement(L.d,null,a.a.createElement(de,{exact:!0,path:"/",component:ee}),a.a.createElement(de,{path:"/favs",component:ie}),a.a.createElement(L.b,{path:"/login",component:fe}))};function ge(){var e=Object(O.a)(["\n  margin-bottom: 20px;\n  width: 100%;\n  display: flex;\n  box-sizing: border-box;\n  font-weight: bold;\n  font-size: 1.5rem;\n"]);return ge=function(){return e},e}var be=I.a.div(ge()),he=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(be,null,a.a.createElement(i.b,{className:"link",activeClassName:"active",exact:!0,to:"/"},"Home"),a.a.createElement(i.b,{className:"link",activeClassName:"active",to:"/favs"},"Favorites"),a.a.createElement(i.b,{className:"link",activeClassName:"active",to:"/login"},"User")),a.a.createElement(me,null))},ve=(t(75),t(76),G()),Ee=function(){return a.a.createElement(i.a,null,a.a.createElement(he,null))},Oe=function(){return a.a.createElement(u.a,{store:ve},a.a.createElement(Ee,null))};o.a.render(a.a.createElement(Oe,null),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.a82371c4.chunk.js.map