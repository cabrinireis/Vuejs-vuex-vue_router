(function(t){function e(e){for(var a,i,o=e[0],c=e[1],u=e[2],p=0,d=[];p<o.length;p++)i=o[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},s=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0b4b":function(t,e,n){"use strict";var a=n("f5f5"),r=n.n(a);r.a},1551:function(t,e,n){"use strict";var a=n("50dd"),r=n.n(a);r.a},4114:function(t,e,n){"use strict";var a=n("5ce9"),r=n.n(a);r.a},"50dd":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e),n.d(e,"bus",(function(){return q})),n.d(e,"vm",(function(){return H}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"container-result"}},[n("div",{staticClass:"page"},[n("div",{staticClass:"item logo"},[n("router-link",{attrs:{to:"/"}},[n("Title")],1)],1),n("div",{staticClass:"item header"},[n("Search")],1),n("div",{staticClass:"item photo"},[t.user?n("div",[n("img",{attrs:{src:t.user.data.avatar_url,alt:""}}),n("ul",{staticClass:"list-icon"},[n("li",[n("i",{staticClass:"material-icons"},[t._v("business_center")]),n("span",[t._v(t._s(t.user.data.company))])]),n("li",[n("i",{staticClass:"material-icons"},[t._v("edit_location")]),n("span",[t._v(t._s(t.user.data.location))])]),n("li",[n("i",{staticClass:"material-icons"},[t._v("all_inclusive")]),n("span",[t._v(t._s(t.user.data.followers))])]),n("li",[n("i",{staticClass:"material-icons"},[t._v("insert_drive_file")]),n("span",[t._v(t._s(t.user.data.public_repos))])])])]):t._e()]),n("div",{staticClass:"item main list-repo "},t._l(t.Repogithub,(function(e,a){return n("ul",{key:a},[n("li",{staticClass:"item main title-repo"},[t._v(" "+t._s(e.name)+" ")]),n("li",[n("span",[t._v(t._s(e.description)+" ")])]),n("span",[n("i",{staticClass:"large material-icons"},[t._v("star")]),t._v(t._s(e.stargazers_count)+" ")])])})),0)])])},o=[],c=n("5530"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"src"}},[n("div",{staticClass:"ctrl-search"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.gitUser,expression:"gitUser"}],staticClass:"input-search",attrs:{type:"text"},domProps:{value:t.gitUser},on:{input:function(e){e.target.composing||(t.gitUser=e.target.value)}}})]),n("div",{staticClass:"btn-search"},[n("button",{staticClass:"btn",on:{click:t.addData}},[t._m(0)])])])},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"btn"},[n("i",{staticClass:"material-icons"},[t._v("search")])])}],p=(n("b0c0"),{name:"Search",data:function(){return{gitUser:"",detalhes:[]}},methods:{addData:function(){""!==this.gitUser&&(this.$store.dispatch("addData",{gituser:this.gitUser}),console.log(this.$store.dispatch("addData",{gituser:this.gitUser}).then((function(t){return t}))),"home"==this.$router.currentRoute.name&&console.log("result")),this.gitUser=""}}}),d=p,f=(n("db65"),n("2877")),v=Object(f["a"])(d,u,l,!1,null,"45a4b070",null),h=v.exports,m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[n("span",[t._v("Github")]),n("span",[t._v("Search")])])}],b={},_=b,w=(n("0b4b"),Object(f["a"])(_,m,g,!1,null,null,null)),y=w.exports,C=n("2f62"),O={components:{Search:h,Title:y},data:function(){return{message:"",detalhes:[]}},computed:Object(c["a"])(Object(c["a"])({},Object(C["b"])(["Repogithub"])),Object(C["b"])(["user"]))},j=O,x=(n("4114"),Object(f["a"])(j,i,o,!1,null,"96c23542",null)),S=x.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-home"},[n("div",{staticClass:"center"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.ativo,expression:"ativo"}],attrs:{id:"show"}},[n("span",[t._v("Não foi possivel encontrar !!!")])]),n("Title"),n("Search")],1)])},D=[],E={data:function(){return{ativo:!1}},components:{Title:y,Search:h}},T=E,$=(n("cdec"),Object(f["a"])(T,R,D,!1,null,"3fa44c60",null)),U=$.exports,k=[{path:"/",name:"home",component:U,data:""},{path:"/result",name:"result",component:S,data:""},{path:"*",component:U}],A={name:"App",data:function(){return{routes:k}}},P=A,z=(n("1551"),Object(f["a"])(P,r,s,!1,null,"5a97ea65",null)),M=z.exports,N=n("8c4f"),J=(n("a4d3"),n("e01a"),n("4160"),n("159b"),n("96cf"),n("1da1")),B=n("bc3a"),G=n.n(B),I={state:{user:"",Repogithub:[],git:{nome:"tst"}},actions:{addData:function(t,e){return Object(J["a"])(regeneratorRuntime.mark((function n(){var a,r,s,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.commit,console.log("c",e.gituser),a("ADD_DATA",e),r=e.gituser,console.log("usuario",r),n.prev=5,n.next=8,G.a.get("https://api.github.com/users/".concat(r));case 8:return s=n.sent,n.next=11,G.a.get("https://api.github.com/users/".concat(r,"/repos"));case 11:return i=n.sent,n.t0=a,n.next=15,s;case 15:return n.t1=n.sent,(0,n.t0)("SET_Details",n.t1),n.t2=a,n.next=20,i;case 20:n.t3=n.sent,(0,n.t2)("SET_Reposgithub",n.t3),H.$router.push({name:"result"}),n.next=30;break;case 25:n.prev=25,n.t4=n["catch"](5),document.getElementById("show").classList.add("show"),console.error(n.t4),console.log(n.t4);case 30:case"end":return n.stop()}}),n,null,[[5,25]])})))()}},mutations:{SET_Reposgithub:function(t,e){t.Repogithub=e;var n=e,a=new Array;n.data.forEach((function(t){t&&(a.push(t.description),console.log("prov",a.push(t.description)))}));var r=t.Repogithub.data;r.sort((function(t,e){return t.stargazers_count<e.stargazers_count?1:t.stargazers_count>e.stargazers_count?-1:0})),t.Repogithub=r,console.log("arr",r),console.log(a),console.log("j",t.Repogithub)},SET_Details:function(t,e){t.user=e,t.user.data.name,console.log(t.git)},ADD_DATA:function(t,e){console.log("entrada",e.user),console.log("trasff",t.user=e.user)}},getters:{Repogithub:function(t){return t.Repogithub},user:function(t){return t.user}}};a["a"].use(C["a"]);var L=new C["a"].Store({modules:{result:I}});a["a"].use(N["a"]),a["a"].prototype.$bus=new a["a"]({}),a["a"].config.productionTip=!1;var q=new a["a"],F=new N["a"]({mode:"hash",base:"./",routes:k}),H=new a["a"]({router:F,store:L,render:function(t){return t(M)}}).$mount("#app")},"5ce9":function(t,e,n){},"6c6b":function(t,e,n){},"872c":function(t,e,n){},cdec:function(t,e,n){"use strict";var a=n("872c"),r=n.n(a);r.a},db65:function(t,e,n){"use strict";var a=n("6c6b"),r=n.n(a);r.a},f5f5:function(t,e,n){}});
//# sourceMappingURL=app.60e3513b.js.map