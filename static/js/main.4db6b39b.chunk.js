(this["webpackJsonphangman-project"]=this["webpackJsonphangman-project"]||[]).push([[0],{10:function(e,n,t){e.exports=t(16)},16:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(7),c=t.n(o),i=t(5),u=t.n(i),l=t(3),s=t(4),f=t(1),p=t(2);function m(){var e=Object(f.a)(["\nmargin: 0;\ncolor: #2D1E2F;\n"]);return m=function(){return e},e}function d(){var e=Object(f.a)(["\nmargin: 0;\n"]);return d=function(){return e},e}function g(){var e=Object(f.a)(["\n  width: 100%; \n  background-color: #FCF6B1;\n  color: #E3170A;\n  font-weight: bold;\n  font-family: 'Courier New', Courier, monospace;\n  padding: 16px 32px;\n"]);return g=function(){return e},e}var h=p.a.header(g()),v=p.a.h1(d()),b=p.a.p(m()),j=function(e){var n=e.appName,t=e.appDescription;return r.a.createElement(h,null,r.a.createElement(v,null,n),r.a.createElement(b,null,t))};function O(){var e=Object(f.a)(["\n  font-size: 16px;\n  height: 24px;\n  padding: 0 8px;\n  display: inline-block;\n  border-bottom: ",";\n  text-align: center;\n  margin-right: 4px;\n"]);return O=function(){return e},e}var E=p.a.span(O(),(function(e){return" "===e.letter?"none":"2px solid black"})),w=function(e){var n=e.filmArr,t=e.guessedLetters;return r.a.createElement(r.a.Fragment,null,n.map((function(e,n){return r.a.createElement(E,{key:n,letter:e},t.indexOf(e)>-1?e:"?")})))},x=Object(l.a)(Array(26)).map((function(e,n){return String.fromCharCode(n+65)})),k=[" ","'",":",1,2,3,4,5,6,7,8,9].concat(Object(l.a)(x),Object(l.a)(x.map((function(e){return e.toLowerCase()}))));function C(){var e=Object(f.a)(["\n  padding: 8px;\n  font-weight: bold;\n  margin: 2px;\n"]);return C=function(){return e},e}var y=p.a.button(C()),L=function(e){var n=e.guessedLetters,t=e.onClickHandler;return r.a.createElement("div",null,x.map((function(e,a){return r.a.createElement(y,{onClick:function(e){return t(e.target.innerHTML)},key:a,value:e,disabled:n.indexOf(e)>-1},e)})))},S="53271a6c0a576518314f7d376d2af74b",_=7,A=function(e){return Math.floor(e*Math.random())},D=function(e,n){return n.filter((function(n){return e===n.name}))[0]};var F=function(){var e=Object(a.useState)(_),n=Object(s.a)(e,2),t=n[0],o=n[1],c=Object(a.useState)(""),i=Object(s.a)(c,2),f=i[0],p=i[1],m=Object(a.useState)([]),d=Object(s.a)(m,2),g=d[0],h=d[1],v=Object(a.useState)("Drama"),b=Object(s.a)(v,2),O=b[0],E=b[1],x=Object(a.useState)([" "]),C=Object(s.a)(x,2),y=C[0],F=C[1];return Object(a.useEffect)((function(){!function(){var e;u.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.a.awrap(fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=".concat(S,"&language=en-US")).then((function(e){return e.json()})));case 2:e=n.sent,h(e.genres);case 4:case"end":return n.stop()}}))}()}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(j,{appName:"Hangman",appDescription:"Guess the film"}),g&&g.length>0?r.a.createElement("select",{value:O,onClick:function(){return p("")},onChange:function(e){return E(e.target.value)}},r.a.createElement("option",{value:""},"Choose a genre"),g.map((function(e){return r.a.createElement("option",{key:e.id,value:e.name},e.name)}))):null,r.a.createElement("button",{onClick:function(){return function(e){var n,t,a;return u.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return p(""),F(" "),o(_),n=D(e,g)||{id:99},r.next=6,u.a.awrap(fetch("https://api.themoviedb.org/3/discover/movie?api_key=".concat(S,"&language=en-US&with_genres=").concat(n.id,"&sort_by=popularity.desc&include_adult=false&include_video=false&page=1")).then((function(e){return e.json()})));case 6:t=r.sent,a=A(t.results.length),p(t.results[a].title);case 9:case"end":return r.stop()}}))}(O)}},"Get film"),""!==f&&r.a.createElement("div",null,r.a.createElement("div",null,"Guesses left: ",t),r.a.createElement("button",{onClick:function(){return F(k)}},"Reveal"),r.a.createElement(w,{filmArr:f.split(""),guessedLetters:y}),r.a.createElement(L,{guessedLetters:y,onClickHandler:function(e){F([].concat(Object(l.a)(y),[e,e.toLowerCase()])),(f.indexOf(e)>-1||f.indexOf(e.toLowerCase())>-1)&&o(t-1)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.4db6b39b.chunk.js.map