(function(e){function t(t){for(var n,s,i=t[0],c=t[1],u=t[2],d=0,h=[];d<i.length;d++)s=i[d],o[s]&&h.push(o[s][0]),o[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(h.length)h.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,i=1;i<a.length;i++){var c=a[i];0!==o[c]&&(n=!1)}n&&(r.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},o={app:0},r=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0782":function(e,t,a){"use strict";var n=a("c366"),o=a.n(n);o.a},"0e55":function(e,t,a){},"1f4e":function(e,t,a){"use strict";var n=a("8385"),o=a.n(n);o.a},"22d7":function(e,t,a){"use strict";var n=a("0e55"),o=a.n(n);o.a},2727:function(e,t,a){"use strict";var n=a("65a3"),o=a.n(n);o.a},2785:function(e,t,a){},"285a":function(e,t,a){},"2e3b":function(e,t,a){},3220:function(e,t,a){"use strict";var n=a("4b64"),o=a.n(n);o.a},"37d5":function(e,t,a){"use strict";var n=a("89da"),o=a.n(n);o.a},"4b64":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("nav",{class:{active:e.checkboxToggle}},[a("div",{staticClass:"icon"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.checkboxToggle,expression:"checkboxToggle"}],attrs:{id:"hamburger",type:"checkbox"},domProps:{checked:Array.isArray(e.checkboxToggle)?e._i(e.checkboxToggle,null)>-1:e.checkboxToggle},on:{change:function(t){var a=e.checkboxToggle,n=t.target,o=!!n.checked;if(Array.isArray(a)){var r=null,s=e._i(a,r);n.checked?s<0&&(e.checkboxToggle=a.concat([r])):s>-1&&(e.checkboxToggle=a.slice(0,s).concat(a.slice(s+1)))}else e.checkboxToggle=o}}}),a("label",{staticClass:"hamburger",attrs:{for:"hamburger"}})]),e.checkboxToggle&&e.width<600?a("div",{staticClass:"navbar",attrs:{id:"navbar"}},[e.user?e._e():a("RouterLink",{staticClass:"navlink",attrs:{to:"/auth"}},[e._v("Sign in")]),e.user?a("RouterLink",{staticClass:"navlink",attrs:{to:"/"}},[e._v("My Dashboard")]):e._e(),a("RouterLink",{staticClass:"navlink",attrs:{to:"/how-to-play"}},[e._v("How to Play")]),a("RouterLink",{staticClass:"navlink",attrs:{to:"/about"}},[e._v("About")]),e.user?a("a",{staticClass:"navlink",attrs:{href:"/"},on:{click:function(t){return t.preventDefault(),e.handleSignOut(t)}}},[e._v("Sign Out")]):e._e()],1):e._e()]),a("RouterView",{staticClass:"routes",attrs:{id:"app-view",onUser:e.handleUser,user:e.user}})],1)},r=[],s=a("f499"),i=a.n(s),c="/api",u="".concat(c,"/auth"),l="".concat(c,"/search"),d="".concat(c,"/games"),h="".concat(c,"/me/boards"),m="".concat(c,"/teams"),v="".concat(c,"/game");function f(e){return e.ok?e.json():e.json().then(function(e){throw e.error})}var p="";function g(){var e={"Content-type":"application/json"};return p&&(e["Authorization"]=p),e}function b(){return fetch("api/games-played",{headers:g()}).then(f)}function _(){return fetch(h,{headers:g()}).then(f)}function y(e){return fetch("".concat(d,"/").concat(e.className,"/").concat(e.boardId),{method:"POST",headers:g()}).then(f)}function w(e){return fetch("".concat(m,"/").concat(e),{method:"POST",headers:g()}).then(f)}function C(e,t){return fetch("".concat(m,"/games/").concat(e,"/").concat(t),{method:"POST",headers:g()}).then(f)}function k(e){return fetch("".concat(c,"/teams/").concat(e),{headers:g()}).then(f)}function x(e){return fetch("".concat(u,"/signup"),{method:"POST",headers:g(),body:i()(e)}).then(f).then(function(e){return A(e),e})}function S(e){return fetch("".concat(u,"/signin"),{method:"POST",headers:g(),body:i()(e)}).then(f).then(function(e){return A(e),e})}function N(){p="",window.localStorage.removeItem("user")}function A(e){p=e.id,window.localStorage.setItem("user",i()(e))}function I(){var e=window.localStorage.getItem("user");if(!e)return null;var t=JSON.parse(e);return p=t.id,t}function T(e){return console.log("api keywords",e),fetch("".concat(l,"/").concat(e),{headers:g()}).then(f)}function P(e,t){return console.log("api category",e,"api board",t),fetch("".concat(h,"/").concat(t,"/categories/").concat(e),{method:"POST",headers:g()}).then(f)}function $(e){return console.log("api board",e),fetch("".concat(h,"/").concat(e),{method:"POST",headers:g()}).then(f)}function O(e,t,a,n){return console.log("api category",n,"api clue",e),fetch("".concat(c,"/me/categories/").concat(n,"/clues/").concat(e,"/").concat(t,"/").concat(a),{method:"POST",headers:g()}).then(f)}function j(e){return fetch("".concat(v,"/").concat(e),{headers:g()}).then(f)}function E(e){return fetch("".concat(c,"/categories/").concat(e),{headers:g()}).then(f)}function D(e){return fetch("".concat(c,"/scores/").concat(e),{headers:g()}).then(f)}function M(e){return fetch("".concat(c,"/delete-team-game/").concat(e),{method:"DELETE",headers:g()}).then(f)}function U(e){return fetch("".concat(c,"/delete-clues-played/").concat(e),{method:"DELETE",headers:g()}).then(f)}function J(e){return fetch("".concat(c,"/delete-game/").concat(e),{method:"DELETE",headers:g()}).then(f)}function q(e,t){return fetch("".concat(c,"/game/").concat(e,"/turn/").concat(t),{method:"PUT",headers:g()}).then(f)}function F(e,t){return fetch("".concat(c,"/team-id/").concat(e,"/set-score/").concat(t),{method:"PUT",headers:g()}).then(f)}function R(e,t){return fetch("".concat(c,"/clue-played/").concat(e,"/game/").concat(t),{method:"POST",headers:g()}).then(f)}function B(e){return fetch("".concat(c,"/clues-played/game/").concat(e),{headers:g()}).then(f)}function G(e){return fetch("".concat(c,"/get-turn/").concat(e),{headers:g()}).then(f)}function L(e){return console.log("get number called",e),fetch("".concat(h,"/categoryNumber/").concat(e),{headers:g()}).then(f)}function H(e){return fetch("".concat(h,"/clues/").concat(e),{headers:g()}).then(f)}function V(e){return fetch("".concat(h,"/categories/").concat(e),{headers:g()}).then(f)}var W={name:"app",components:{},data:function(){return{user:null,checkboxToggle:!1,width:null}},methods:{handleUser:function(e){this.user=e},handleSignOut:function(){N(),this.user=null,this.$router.push("/auth")}},created:function(){this.user=I(),this.user||this.$router.push("/auth"),this.width=window.innerWidth}},Y=W,z=(a("df63"),a("2877")),K=Object(z["a"])(Y,o,r,!1,null,"27fa1cdd",null),Q=K.exports,X=a("8c4f"),Z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",[e._v("Create your game board")]),a("form",{on:{submit:function(t){return t.preventDefault(),e.handleAddBoard(t)}}},[a("div",[e._v("Game Name: \n      "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.board,expression:"board"}],attrs:{type:"text",name:"board",placeholder:"Game Name",required:""},domProps:{value:e.board},on:{input:function(t){t.target.composing||(e.board=t.target.value)}}}),a("button",[e._v("Submit")])])])])},ee=[],te={data:function(){return{board:""}},methods:{handleAddBoard:function(){var e=this;return console.log("board",this.board),$(this.board).then(function(t){e.board=t,e.$router.push("/board/".concat(e.board.id))})}}},ae=te,ne=Object(z["a"])(ae,Z,ee,!1,null,null,null),oe=ne.exports,re=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.user?a("div",[a("h2",[e._v("Dashboard")]),a("br"),a("div",{attrs:{id:"options"}},[a("router-link",{attrs:{to:"/game"}},[e._v("Play Game")]),a("router-link",{attrs:{to:"/board"}},[e._v("Make New Game Board")])],1),a("RouterView"),a("div",{attrs:{id:"game-box"}},[a("h3",[e._v("In Progress Games:")]),a("ul",e._l(e.games,function(t,n){return a("li",{key:t.id},[e._v("\n        "+e._s(t.class_name)+" \n        "),a("button",{staticClass:"dash-button",attrs:{id:"continue-button"},on:{click:function(a){e.sendToGame(t.id)}}},[e._v("Continue")]),a("button",{staticClass:"dash-button",attrs:{id:"delete-button"},on:{click:function(t){e.handleDelete(n)}}},[e._v("Delete")])])}),0)])],1):e._e()},se=[],ie={props:{user:Object,handleNext:Function},data:function(){return{games:null}},created:function(){var e=this;b().then(function(t){e.games=t}).catch(function(t){e.error=t})},methods:{handleDelete:function(e){var t=this;if(confirm("Are you sure you want to remove game ".concat(this.games[e].class_name)))return console.log("game",this.games[e].id),U(this.games[e].id),M(this.games[e].id),J(this.games[e].id).then(function(){b().then(function(e){t.games=e}).catch(function(e){t.error=e})})},sendToGame:function(e){this.$router.push("/game/".concat(e,"/gameplay"))}}},ce=ie,ue=(a("f456"),Object(z["a"])(ce,re,se,!1,null,"3a9a8007",null)),le=ue.exports,de=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"clue-router"}},[a("router-link",{attrs:{to:"/board/"+e.board+"/categories/"+e.category+"/custom-clue"}},[e._v("Create Custom Clue")]),a("br"),a("router-link",{attrs:{to:"/board/"+e.board+"/categories/"+e.category+"/search"}},[e._v("Search Jeopardy Database for a Clue")]),a("br"),a("router-link",{attrs:{to:"/board/"+e.board+"/categories/"+e.category+"/your-board"}},[e._v("Your Board")]),e.previousClue?a("div",{staticClass:"last-saved-clue"},[a("p",[e._v("Your previous clue, answer, and point value were saved as:")]),a("ul",[a("li",[e._v("Clue: "+e._s(e.previousClue.clue))]),a("li",[e._v("Answer: "+e._s(e.previousClue.answer))]),a("li",[e._v("Value: "+e._s(e.previousClue.value))])])]):e._e(),a("RouterView",{attrs:{message:e.message,onAdd:e.handleCustomClue,category:e.category,addCustomClue:e.handleCustomClue,historicClues:e.clues,onSearch:e.handleSearch}})],1)},he=[],me={data:function(){return{clues:null,keywords:"",clueNumber:null,previousClue:null,categoryNumber:null,message:""}},created:function(){var e=this;this.category=this.$route.params.categoryId,this.board=this.$route.params.id,L(this.board).then(function(t){e.categoryNumber=t.count,console.log("cat",e.categoryNumber)})},methods:{handleSearch:function(e){this.keywords=e,console.log("handle search",this.keywords),this.searchData(this.keywords)},searchData:function(){var e=this;T(this.keywords).then(function(t){return console.log("return search view",t),e.clues=t,console.log("view clues",e.clues),e.clues})},handleCustomClue:function(e,t,a,n){var o=this;return this.clueNumber++,console.log("clue num",this.clueNumber),O(e,t,a,this.category).then(function(e){o.previousClue=e,o.clue="",o.answer="",o.value=null,o.clueNumber<5&&o.categoryNumber<=6?o.$router.push("/board/".concat(o.board,"/categories/").concat(o.category,"/").concat(n)):5===o.clueNumber&&o.categoryNumber<6?o.$router.push("/board/".concat(o.board)):5===o.clueNumber&&o.categoryNumber>=6?(o.message="You have finished your game board!",o.$router.push("/board/".concat(o.board,"/categories/").concat(o.category,"/your-board"))):alert("an error has occured")})}}},ve=me,fe=(a("af73"),Object(z["a"])(ve,de,he,!1,null,null,null)),pe=fe.exports,ge=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sign-in"},[e._m(0),a("div",{staticClass:"section-background1"},[a("h2",[e._v(e._s(e.label))]),a("div",{staticClass:"auth-toggle"},[a("button",{staticClass:"button-block",on:{click:function(t){e.type=e.isSignUp?"signIn":"signUp"}}},[e._v("\n        "+e._s(e.isSignUp?"Already a user? Click here to sign in!":"New? Click here to sign up!")+"\n      ")])]),a("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[a("div",{staticClass:"form-input"},[a("label",[e._v("Username")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.name,expression:"credentials.name"}],staticClass:"login",domProps:{value:e.credentials.name},on:{input:function(t){t.target.composing||e.$set(e.credentials,"name",t.target.value)}}})]),a("div",{staticClass:"form-input"},[a("label",[e._v("Password")]),"checkbox"===(e.show?"text":"password")?a("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.password,expression:"credentials.password"}],staticClass:"login",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.credentials.password)?e._i(e.credentials.password,null)>-1:e.credentials.password},on:{change:function(t){var a=e.credentials.password,n=t.target,o=!!n.checked;if(Array.isArray(a)){var r=null,s=e._i(a,r);n.checked?s<0&&e.$set(e.credentials,"password",a.concat([r])):s>-1&&e.$set(e.credentials,"password",a.slice(0,s).concat(a.slice(s+1)))}else e.$set(e.credentials,"password",o)}}}):"radio"===(e.show?"text":"password")?a("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.password,expression:"credentials.password"}],staticClass:"login",attrs:{type:"radio"},domProps:{checked:e._q(e.credentials.password,null)},on:{change:function(t){e.$set(e.credentials,"password",null)}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:e.credentials.password,expression:"credentials.password"}],staticClass:"login",attrs:{type:e.show?"text":"password"},domProps:{value:e.credentials.password},on:{input:function(t){t.target.composing||e.$set(e.credentials,"password",t.target.value)}}}),a("button",{staticClass:"button-inline",attrs:{type:"button"},on:{click:function(t){e.show=!e.show}}},[e._v(e._s(e.show?"Hide":"Show"))])]),a("br"),e.error?a("p",{staticClass:"error"},[e._v(e._s(e.error))]):e._e(),a("button",{staticClass:"login button-block",attrs:{type:"submit"}},[e._v("Submit")])])])])},be=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-name"},[a("h1",{staticClass:"line1"},[e._v("Jeopardy")]),a("h1",{staticClass:"line2"},[e._v("for Teachers")])])}],_e={props:{onUser:Function},data:function(){return{credentials:{name:"",password:""},show:!1,type:"signIn",error:null}},computed:{isSignUp:function(){return"signUp"===this.type},label:function(){return this.isSignUp?"Sign Up":"Sign In"}},watch:{type:function(e,t){e!==t&&(this.error=null)}},methods:{handleSubmit:function(){var e=this;this.error=null;var t=this.isSignUp?x:S;t(this.credentials).then(function(t){e.onUser(t),e.$router.push("/")}).catch(function(t){e.error=t})}}},ye=_e,we=(a("fdbd"),Object(z["a"])(ye,ge,be,!1,null,"77dc1038",null)),Ce=we.exports,ke=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[a("h2",[e._v("Select a Board")]),e.boards?a("ul",e._l(e.boards,function(t){return a("label",{key:t.id,staticClass:"board"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.boardId,expression:"boardId"}],attrs:{type:"radio"},domProps:{value:t.id,checked:e._q(e.boardId,t.id)},on:{change:function(a){e.boardId=t.id}}}),e._v("\n        "+e._s(t.name)+"\n      ")])}),0):e._e(),a("h2",[e._v("Add Class Name")]),a("label",[e._v("Class Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.className,expression:"className"}],attrs:{type:"text",name:"className",placeholder:"Class Name",required:""},domProps:{value:e.className},on:{input:function(t){t.target.composing||(e.className=t.target.value)}}}),a("button",[e._v("Next")])])])},xe=[],Se={props:{},data:function(){return{className:"",boards:null,boardId:null}},computed:{isNew:function(){return void 0===this.game}},created:function(){var e=this;_().then(function(t){e.boards=t}).catch(function(t){e.error=t})},methods:{handleSubmit:function(){var e=this,t={className:this.className,boardId:this.boardId};return y(t).then(function(t){e.game=t,e.$router.push("/game/".concat(e.game.id))})}}},Ne=Se,Ae=Object(z["a"])(Ne,ke,xe,!1,null,null,null),Ie=Ae.exports,Te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"teams"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[a("div",{staticClass:"team-list"},[e.teams.length<4?a("div",[a("h2",[e._v("Add Teams")]),a("label",[e._v("Team Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.teamName,expression:"teamName"}],attrs:{type:"text"},domProps:{value:e.teamName},on:{input:function(t){t.target.composing||(e.teamName=t.target.value)}}}),a("button",[e._v("Add")])]):e._e()])]),a("h3",[e._v("Teams:")]),a("ul",e._l(e.teams,function(t){return a("li",{key:t.id},[e._v("\n      "+e._s(t.team)+"\n    ")])}),0),a("button",{on:{click:e.handleNext}},[e._v("Next")])])},Pe=[],$e={data:function(){return{teamName:"",teams:[]}},created:function(){var e=this;this.gameId=this.$route.params.id,k(this.gameId).then(function(t){e.teams=t})},methods:{handleNext:function(){this.$router.push("/game/".concat(this.gameId,"/instructions"))},handleSubmit:function(){var e=this;return this.gameId=this.$route.params.id,w(this.teamName).then(function(t){e.teams.push(t),e.team=t,C(e.team.teamId,e.gameId)})}}},Oe=$e,je=(a("37d5"),Object(z["a"])(Oe,Te,Pe,!1,null,"4dd47de4",null)),Ee=je.exports,De=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"next"},[e._m(0),a("router-link",{attrs:{to:"/game/"+this.gameId+"/gameplay"}},[e._v("Next")])],1)},Me=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"rules"},[a("h1",[e._v("Classroom Rules for Jeopardy:")]),a("p",[e._v("Teams take turns choosing and answering questions")]),a("p",[e._v(" Scoring:")]),a("p",[e._v("If you get a question right, your team gains points")]),a("p",[e._v("If you get a question wrong, your team looses points")]),a("p",[e._v("If you choose not to answer, you neither loose nor gain points")]),a("p",[e._v("There is no double jeopardy or final jeopardy")])])}],Ue={created:function(){this.gameId=this.$route.params.id}},Je=Ue,qe=(a("2727"),Object(z["a"])(Je,De,Me,!1,null,null,null)),Fe=qe.exports,Re=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"category"},[a("form",{staticClass:"category-form",on:{submit:function(t){return t.preventDefault(),e.handleAddCategory(t)}}},[a("div",[e._v("Category Name: \n        "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.category,expression:"category"}],attrs:{type:"text",name:"category",placeholder:"Category",required:""},domProps:{value:e.category},on:{input:function(t){t.target.composing||(e.category=t.target.value)}}})]),a("button",[e._v("Submit")])])]),a("div")])},Be=[],Ge={data:function(){return{category:""}},created:function(){this.board=this.$route.params.id,console.log(this.board),E(this.board)},methods:{handleAddCategory:function(){var e=this;return this.board=this.$route.params.id,P(this.category,this.board).then(function(t){e.category=t,e.$router.push("/board/".concat(e.category.boardId,"/categories/").concat(e.category.id,"/custom-clue"))})}}},Le=Ge,He=(a("e3c5"),Object(z["a"])(Le,Re,Be,!1,null,null,null)),Ve=He.exports,We=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h3",[e._v("Find Inspiration for your game board")]),a("h4",[e._v("Search the jeopardy database by keyword(s)")]),a("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[a("div",[e._v("\n      Keywords\n      "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.keywords,expression:"keywords"}],attrs:{type:"text",name:"keywords",placeholder:"Enter your keywords",required:""},domProps:{value:e.keywords},on:{input:function(t){t.target.composing||(e.keywords=t.target.value)}}}),a("button",{on:{click:e.handleSubmit}},[e._v("Search")])])]),e.historicClues?a("div",e._l(e.historicClues,function(t){return a("div",{key:t.id},[a("div",{attrs:{id:"search-results"}},[a("h4",[e._v("Results")]),a("p",[e._v("Clue: "+e._s(t.clue))]),a("p",[e._v("Answer: "+e._s(t.answer))]),a("div",{staticClass:"select-points"},[a("label",[e._v("Select point value")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{name:"value"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.value=t.target.multiple?a:a[0]}}},[a("option",{domProps:{value:100}},[e._v("100")]),a("option",{domProps:{value:200}},[e._v("200")]),a("option",{domProps:{value:300}},[e._v("300")]),a("option",{domProps:{value:400}},[e._v("400")]),a("option",{domProps:{value:500}},[e._v("500")])]),a("button",{attrs:{value:t.id},on:{click:e.handleAdd}},[e._v("Add this clue to your board")])])])])}),0):e._e()])},Ye=[],ze=a("e814"),Ke=a.n(ze),Qe={props:{onSearch:Function,historicClues:Array,onAdd:Function},data:function(){return{keywords:"",selected:null,clue:null,value:null,search:null}},methods:{handleSubmit:function(){this.onSearch(this.keywords),console.log("search keywords",this.keywords)},handleAdd:function(e){var t=this.historicClues;this.view="search";for(var a=0;a<t.length;a++)t[a].id===Ke()(e.target.value)&&(this.clue=t[a].clue,this.answer=t[a].answer);this.onAdd(this.clue,this.answer,this.value,this.view)}}},Xe=Qe,Ze=(a("0782"),Object(z["a"])(Xe,We,Ye,!1,null,null,null)),et=Ze.exports,tt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"clue-form"},[e.category?a("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[a("div",{staticClass:"clue-input"},[e._v("Clue: \n      "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.clue,expression:"clue"}],attrs:{type:"text",name:"clue",placeholder:"Clue",value:"100",required:""},domProps:{value:e.clue},on:{input:function(t){t.target.composing||(e.clue=t.target.value)}}})]),a("div",{staticClass:"clue-input"},[e._v("Answer: \n      "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.answer,expression:"answer"}],attrs:{type:"text",name:"answer",placeholder:"Answer",required:""},domProps:{value:e.answer},on:{input:function(t){t.target.composing||(e.answer=t.target.value)}}}),a("label",[e._v("Select point value")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{name:"value",placeholder:"Please choose a point value",required:""},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.value=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"100"}},[e._v("100")]),a("option",{attrs:{value:"200"}},[e._v("200")]),a("option",{attrs:{value:"300"}},[e._v("300")]),a("option",{attrs:{value:"400"}},[e._v("400")]),a("option",{attrs:{value:"500"}},[e._v("500")])])]),a("button",[e._v("Submit")])]):e._e()])},at=[],nt={props:{category:String,addCustomClue:Function},data:function(){return{clue:"",answer:"",value:null,search:null}},methods:{handleSubmit:function(){this.view="custom-clue",this.addCustomClue(this.clue,this.answer,this.value,this.view)}}},ot=nt,rt=(a("7a3d"),Object(z["a"])(ot,tt,at,!1,null,"0f71d499",null)),st=rt.exports,it=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",[a("div",[e.turn?a("h3",[e._v("It is Team "+e._s(e.turn[0].turn)+"'s turn")]):e._e(),e.turn?e._e():a("form",{on:{submit:function(t){return t.preventDefault(),e.handleSelectTurn(t)}}},[a("h3",[e._v("Who wants to start first?")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.selected=t.target.multiple?a:a[0]}}},e._l(e.teams,function(t){return a("option",{key:t.id,domProps:{selected:t.team}},[e._v("\n          "+e._s(t.team)+"\n        ")])}),0),a("button",[e._v("Select")])])]),e.turn&&e.categories?a("div",{staticClass:"container"},[e._l(e.categories,function(t){return a("div",{key:t.id,staticClass:"column"},[a("div",{staticClass:"box-cat"},[e._v(e._s(t.category))]),e._l(e.clues,function(n){return a("div",{key:n.id},[t.category===n.category?a("button",{class:e.clueClass(n.id),attrs:{id:"show-modal",value:n,disabled:e.clueAlreadyPlayed(n.id)},on:{click:function(t){return e.handleClick(n,t)}}},[e._v(" \n          "+e._s(n.value)+"\n        ")]):e._e()])})],2)}),e.showModal?a("Modal",{on:{close:function(t){e.showModal=!1,e.showAnswer=!1}}},[a("h3",{attrs:{slot:"header"},slot:"header"}),a("h2",{attrs:{slot:"body"},slot:"body"},[e._v(e._s(e.selectedClue.clue)+" \n          "),!0===e.showAnswer?a("div",{staticClass:"answer"},[e._v(e._s(e.selectedClue.answer))]):e._e(),e.showAnswer?e._e():a("button",{staticClass:"modal-default-button",on:{click:function(t){e.showAnswer=!0}}},[e._v("\n            Show Answer\n          ")]),a("br"),e.showAnswer?a("button",{staticClass:"modal-default-button",on:{click:e.handleRightAnswer}},[e._v("\n            Correct\n          ")]):e._e(),e.showAnswer?a("button",{staticClass:"modal-default-button",on:{click:e.handleWrongAnswer}},[e._v("\n            Incorrect\n          ")]):e._e(),e.showAnswer?a("button",{staticClass:"modal-default-button",on:{click:e.handleNoAnswer}},[e._v("\n            No Answer\n          ")]):e._e()])]):e._e()],2):e._e(),e.turn?a("div",{staticClass:"leaderboard"},[a("div",[a("h3",[e._v("Scoreboard")]),e._l(e.scores,function(t){return a("ul",{key:t.id},[a("p",[e._v("Team "+e._s(t.team)+" has "+e._s(t.score)+" points")])])})],2)]):e._e()])},ct=[],ut=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("transition",{attrs:{name:"modal"}},[a("div",{staticClass:"modal-mask"},[a("div",{staticClass:"modal-wrapper"},[a("div",{staticClass:"modal-container"},[a("div",{staticClass:"modal-header"},[e._t("header",[e._v("\n              default header\n            ")])],2),a("div",{staticClass:"modal-body"},[e._t("body",[e._v("\n              default body\n            ")])],2),a("div",{staticClass:"modal-footer"},[e._t("footer",[a("button",{staticClass:"score-buttons",on:{click:function(t){e.$emit("close")}}},[e._v("\n                Close\n              ")])])],2)])])])])],1)},lt=[],dt={props:{clue:Object}},ht=dt,mt=(a("22d7"),Object(z["a"])(ht,ut,lt,!1,null,null,null)),vt=mt.exports,ft={components:{Modal:vt},data:function(){return{showModal:!1,categories:null,clues:null,scores:null,showAnswer:!1,teams:[],turn:null,selected:null,cluesPlayed:[]}},methods:{clueClass:function(e){for(var t=0;t<this.cluesPlayed.length;t++)if(e===this.cluesPlayed[t].clue_id)return"clicked-button";return"box-clue"},clueAlreadyPlayed:function(e){for(var t=0;t<this.cluesPlayed.length;t++)if(e===this.cluesPlayed[t].clue_id)return!0},handleRightAnswer:function(){var e=function(e,t,a){for(var n=0;n<t.length;n++)if(e===t[n].team)return t[n].score+=a,F(t[n].id,t[n].score),t};e(this.turn[0].turn,this.scores,this.selectedClue.value);var t=function(e,t){for(var a=t.length,n=0;n<=a-1;n++){if(n===a-1)return e[0].turn=t[0].team,e;if(e[0].turn===t[n].team)return e[0].turn=t[n+1].team,e}};t(this.turn,this.teams),q(this.gameId,this.turn[0].turn)},handleWrongAnswer:function(){var e=function(e,t,a){for(var n=0;n<t.length;n++)if(e===t[n].team)return t[n].score-=a,F(t[n].id,t[n].score),t};e(this.turn[0].turn,this.scores,this.selectedClue.value);var t=function(e,t){for(var a=t.length,n=0;n<=a-1;n++){if(n===a-1)return e[0].turn=t[0].team,e;if(e[0].turn===t[n].team)return e[0].turn=t[n+1].team,e}};t(this.turn,this.teams),q(this.gameId,this.turn[0].turn)},handleNoAnswer:function(){var e=function(e,t){for(var a=t.length,n=0;n<=a-1;n++){if(n===a-1)return e[0].turn=t[0].team,e;if(e[0].turn===t[n].team)return e[0].turn=t[n+1].team,e}};e(this.turn,this.teams),q(this.gameId,this.turn[0].turn)},handleClick:function(e,t){this.showModal=!0,this.selectedClue=e,t.target.disabled=!0,t.target.className="clicked-button",R(this.selectedClue.id,this.gameId)},handleSelectTurn:function(){var e=this;this.turn=this.selected,this.gameId=this.$route.params.id,q(this.gameId,this.turn).then(function(t){e.turn=t})}},created:function(){var e=this;this.gameId=this.$route.params.id,j(this.gameId).then(function(t){e.clues=t}),E(this.gameId).then(function(t){e.categories=t}),D(this.gameId).then(function(t){e.scores=t}),k(this.gameId).then(function(t){e.teams=t}),G(this.gameId).then(function(t){t.length>0&&(e.turn=t)}),B(this.gameId).then(function(t){e.cluesPlayed=t})}},pt=ft,gt=(a("5c7e"),Object(z["a"])(pt,it,ct,!1,null,null,null)),bt=gt.exports,_t=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",[a("h2",[e._v("Your Board")]),e.message?a("p",[e._v(e._s(e.message))]):e._e(),a("p",[e._v("Board: "+e._s(e.boardId))]),e.categories?a("div",{staticClass:"container"},[e._l(e.categories,function(t){return a("div",{key:t.id,staticClass:"column"},[a("div",{staticClass:"box-cat"},[e._v(e._s(t.category))]),e._l(e.clues,function(n){return a("div",{key:n.id},[t.category===n.category?a("button",{staticClass:"box-clue",attrs:{id:"show-modal",value:n},on:{click:function(t){return e.handleClick(n,t)}}},[e._v(e._s(n.value))]):e._e()])})],2)}),e.showModal?a("BoardModal",{on:{close:function(t){e.showModal=!1,e.showAnswer=!1}}},[a("h3",{attrs:{slot:"header"},slot:"header"}),a("h2",{attrs:{slot:"body"},slot:"body"},[e._v("\n        Clue: "+e._s(e.selectedClue.clue)+"\n        "),a("div",[e._v("Answer: "+e._s(e.selectedClue.answer))])])]):e._e()],2):e._e()])},yt=[],wt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("transition",{attrs:{name:"modal"}},[a("div",{staticClass:"modal-mask"},[a("div",{staticClass:"modal-wrapper"},[a("div",{staticClass:"modal-container"},[a("div",{staticClass:"modal-header"},[e._t("header",[e._v("\n              default header\n            ")])],2),a("div",{staticClass:"modal-body"},[e._t("body",[e._v("\n              default body\n            ")])],2),a("div",{staticClass:"modal-footer"},[e._t("footer",[a("button",{staticClass:"modal-default-button",on:{click:function(t){e.$emit("close")}}},[e._v("Close")])])],2)])])])])],1)},Ct=[],kt={props:{clue:Object}},xt=kt,St=(a("3220"),Object(z["a"])(xt,wt,Ct,!1,null,null,null)),Nt=St.exports,At={props:{message:String},components:{BoardModal:Nt},data:function(){return{showModal:!1,categories:null,clues:null,showAnswer:!1,boardId:null}},methods:{handleClick:function(e,t){this.showModal=!0,this.selectedClue=e,t.target.disabled=!0,t.target.className="clicked-button"}},created:function(){var e=this;this.boardId=this.$route.params.id,H(this.boardId).then(function(t){e.clues=t}),V(this.boardId).then(function(t){e.categories=t})}},It=At,Tt=(a("da94"),Object(z["a"])(It,_t,yt,!1,null,null,null)),Pt=Tt.exports,$t=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Ot=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("h2",[e._v("About Jeopardy For Teachers")]),a("h3",[e._v("Purpose")]),a("p",[e._v("This app is a teaching tool for educators who want to use a fun quiz game in the classroom to aid in students' learning and review of course material. Inspired by Jeopardy, Jeopardy For Teachers allows the user to create a game board with both custom clues and answers they write themselves and/or archival Jeopardy clues and answers related to their subject matter by doing a keyword search of our database of over 300,000 historical Jeopardy questions.")]),a("h3",[e._v("Who Can Use This App")]),a("p",[e._v("This app is only for use by educators in a classroom setting for educational purposes.")]),a("h3",[e._v("Acknowledgements")]),a("p",[e._v("Inspired by\n    "),a("a",{attrs:{href:"https://www.jeopardy.com/"}},[e._v("Jeopardy.")]),e._v(" Please support their wonderful program by visiting their site and tuning in to the show.\n  ")]),a("h3",[e._v("App Developers")]),a("p",[e._v("\n    This version of the Jeopardy for Teachers app was created by:\n    "),a("a",{attrs:{href:"https://github.com/sarahflynn"}},[e._v("Sarah Flynn")]),e._v(".\n  ")]),a("p",[e._v("The idea started as a student team project, the first draft of which was created in a five day coding sprint by:")]),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/R-i-t-a"}},[e._v("Claire Flanagan")])]),a("li",[a("a",{attrs:{href:"https://github.com/MikeBLambert"}},[e._v("Mike Lambert")])]),a("li",[a("a",{attrs:{href:"https://github.com/sarahflynn"}},[e._v("Sarah Flynn")])]),a("li",[a("a",{attrs:{href:"https://github.com/sophiegraham"}},[e._v("Sophie Graham")])])]),a("p",[e._v("\n    You can see the code for the team version of this app at\n    "),a("a",{attrs:{href:"https://github.com/teamupcube"}},[e._v("TeamUpCube's Github")]),e._v(".\n  ")])])}],jt={},Et=Object(z["a"])(jt,$t,Ot,!1,null,null,null),Dt=Et.exports,Mt=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Ut=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("h2",[e._v("Game Overview")]),a("h3",[e._v("How to Play")]),a("ul",[a("li",[e._v("On the welcome page either sign up or sign in")]),a("li",[e._v("From your personal dashboard, you can either play a saved game board you already created, or you can create a new game board (for info about how to create a gameboard, see instructions below)")]),a("li",[e._v("Choose a name for your game (for example: “2nd period History”). This allows us to save your progress in the game so that you can stop in the middle of a game and continue it at a later time.")]),a("li",[e._v("Choose names for the teams of students in your classroom")]),a("li",[e._v("Decide which team will take the first turn")]),a("li",[e._v("Continue through the instructions page to the game play page")]),a("li",[e._v("Teams take turns choosing a category and point value. In this classroom version of Jeopardy, each team's turn is over after they answer or decide not to answer one clue.")]),a("li",[e._v("If the team answers correctly, the clue point value is added to their score. If the answer is incorrect, the clue point value is subtracted from their score. If they decide not to attempt to answer, no points are added or subtracted from their score.")]),a("li",[e._v("Game play continues until all clues on the board have been played.")])]),a("h3",[e._v("How to Create a New Board")]),a("ul",[a("li",[e._v('Select "Make a New Game Board" from your dashboard page')]),a("li",[e._v('Choose a game board name (for example: "American History 1776-1812"). This game board will be saved to your dashboard and can be played multiple times (e.g. "2nd period History Fall 2018", "4th period History Fall 2017"). ')]),a("li",[e._v("Select the name for your first category")]),a("li",[e._v("Add 6 clues and answers to your game board by either writing your own custom clues and answers, searching the database of historical Jeopardy clues and answers by keyword, or some combination of both.")]),a("li",[e._v("Continue with these last steps until you have a full game board with 6 categories and 6 clues each.")])])])}],Jt=(a("1f4e"),{}),qt=Object(z["a"])(Jt,Mt,Ut,!1,null,"02c51f0a",null),Ft=qt.exports,Rt=new X["a"]({mode:"history",routes:[{path:"/",component:le},{path:"/auth",component:Ce},{path:"/about",component:Dt},{path:"/how-to-play",component:Ft},{path:"/board",component:oe},{path:"/board/:id",component:Ve},{path:"/game",component:Ie},{path:"/game/:id",component:Ee},{path:"/game/:id/instructions",component:Fe},{path:"/game/:id/gameplay",component:bt},{path:"/board/:id/categories/:categoryId",component:pe,children:[{path:"custom-clue",component:st},{path:"search",component:et},{path:"your-board",component:Pt}]},{path:"*",redirect:"/"}]});a("8632");n["a"].config.productionTip=!1,n["a"].use(X["a"]),n["a"].component("RouterLink",n["a"].component("router-link")),n["a"].component("RouterView",n["a"].component("router-view")),new n["a"]({router:Rt,render:function(e){return e(Q)}}).$mount("#app")},"5c7e":function(e,t,a){"use strict";var n=a("9738"),o=a.n(n);o.a},"65a3":function(e,t,a){},"7a3d":function(e,t,a){"use strict";var n=a("9d35"),o=a.n(n);o.a},8385:function(e,t,a){},8632:function(e,t,a){},"89da":function(e,t,a){},9095:function(e,t,a){},9512:function(e,t,a){},9738:function(e,t,a){},"9d35":function(e,t,a){},af73:function(e,t,a){"use strict";var n=a("2785"),o=a.n(n);o.a},c366:function(e,t,a){},da94:function(e,t,a){"use strict";var n=a("9095"),o=a.n(n);o.a},df63:function(e,t,a){"use strict";var n=a("9512"),o=a.n(n);o.a},e3c5:function(e,t,a){"use strict";var n=a("2e3b"),o=a.n(n);o.a},f456:function(e,t,a){"use strict";var n=a("fdf6"),o=a.n(n);o.a},fdbd:function(e,t,a){"use strict";var n=a("285a"),o=a.n(n);o.a},fdf6:function(e,t,a){}});
//# sourceMappingURL=app.23edad75.js.map