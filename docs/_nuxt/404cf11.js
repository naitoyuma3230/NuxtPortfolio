(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{521:function(t,n,r){var content=r(571);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("2a4128f8",content,!0,{sourceMap:!1})},570:function(t,n,r){"use strict";r(521)},571:function(t,n,r){var e=r(21)(!1);e.push([t.i,".programing-icon{border:1px solid #ccc}.title-pointer{cursor:pointer}",""]),t.exports=e},614:function(t,n,r){"use strict";r.r(n);var e=r(195),o=r(219),l=r(473),c=r(471),d=r(602),f=r(519),v=r(194),k=r(165),m=r(520),_=r(601),x=r(605),h=r(607),y=r(606),w=(r(26),r(23)),C=(r(82),r(8),r(4),r(45),r(58),{data:function(){return{stepId:1,stepInfo:[{title:"Learn HTML,css",discription:"How to make static web site"},{title:"First prgraming langage is JS",discription:"It based my fronend work"},{title:"Learn more about design frameworks",discription:"very usefull"},{title:"Vue of js framework",discription:"very usefull"},{title:"Backend and API servies",discription:"very usefull"},{title:"Nuxt makes SSG, SSR anable",discription:"very usefull"}]}},methods:{externalLink:function(t){window.open(t,"_blank")}},computed:{htmlWorks:function(){var t=this.contents.filter((function(t){return!t.skills.includes("JavaScript")&&t.skills.includes("HTML")}));return t},javascriptWorks:function(){var t=this.contents.filter((function(t){return t.skills.includes("JavaScript")}));return t},bootstrapWorks:function(){var t=this.contents.filter((function(t){return t.skills.includes("Bootstrap")}));return t},vueWorks:function(){var t=this.contents.filter((function(t){return t.skills.includes("Vue.js")}));return t},apiWorks:function(){var t=this.contents.filter((function(t){return t.api.length&&!t.skills.includes("Nuxt.js")}));return t},nuxtWorks:function(){var t=this.contents.filter((function(t){return t.skills.includes("Nuxt.js")}));return t},categrisedWorks:function(){return[this.htmlWorks,this.javascriptWorks,this.bootstrapWorks,this.vueWorks,this.apiWorks,this.nuxtWorks]}},asyncData:function(t){return Object(w.a)(regeneratorRuntime.mark((function n(){var r,e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.$microcms,n.next=3,r.get({endpoint:"works",queries:{limit:20}});case 3:return e=n.sent,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})))()}}),W=(r(570),r(90)),component=Object(W.a)(C,(function(){var t=this,n=t._self._c;return n("div",[n(_.a,[n(d.a,{attrs:{cols:"12",sm:"5"}},[n(c.d,{staticClass:"pb-0"},[t._v("プログラミング")]),t._v(" "),n(f.a,{staticClass:"mx-5"}),t._v(" "),n(c.b,{staticClass:"py-0"},[t._v("Programing")])],1)],1),t._v(" "),n(x.a,{attrs:{vertical:"",outlined:""},model:{value:t.stepId,callback:function(n){t.stepId=n},expression:"stepId"}},t._l(t.categrisedWorks,(function(r,i){return n("div",{key:i},[n(y.a,{staticClass:"title-pointer",attrs:{step:i+1}},[n("div",{on:{click:function(n){t.stepId=i+1}}},[t._v("\n          "+t._s(t.stepInfo[i].title)+"\n          "),n("small",[t._v(t._s(t.stepInfo[i].discription))])])]),t._v(" "),n(h.a,{attrs:{step:i+1}},[n(_.a,{staticClass:"mx-0 pa-0"},t._l(r,(function(r){return n(d.a,{key:r.id,staticClass:"pa-1 my-1",attrs:{cols:"12",sm:"6",lg:"4"}},[n(l.a,{staticClass:"mx-auto",attrs:{elevation:"1"}},["xs"==t.$vuetify.breakpoint.name?n("div",{staticClass:"pa-2 text-center"},[t._v("\n                "+t._s(r.title)+"\n              ")]):t._e(),t._v(" "),n(_.a,{attrs:{align:"center"}},[n(d.a,{attrs:{cols:"4",sm:"12"}},["xs"!==t.$vuetify.breakpoint.name?n(k.a,{attrs:{"lazy-src":"",position:"top",width:"auto",height:"10rem",src:r.thumbnail.url}}):t._e(),t._v(" "),"xs"==t.$vuetify.breakpoint.name?n(e.a,{staticClass:"ms-4",attrs:{size:"3.5rem"}},[n(k.a,{staticClass:"programing-icon",attrs:{rounded:"",src:r.thumbnail.url}})],1):t._e()],1),t._v(" "),n(d.a,{attrs:{cols:"8",sm:"12"}},["xs"!=t.$vuetify.breakpoint.name?n("div",{staticClass:"px-2"},[t._v("\n                    "+t._s(r.title)+"\n                  ")]):t._e(),t._v(" "),n("div",{staticClass:"d-flex flex-wrap pa-2"},t._l(r.skills,(function(r,i){return n(o.a,{key:i,staticClass:"mb-1",attrs:{"x-small":"",rounded:"",depressed:"",outlined:""}},[t._v("\n                      "+t._s(r))])})),1)])],1),t._v(" "),n(c.c,{staticClass:"pa-2"},[t._v("\n                "+t._s(r.discription)+"\n              ")]),t._v(" "),n(c.c,{staticClass:"pa-2"},[n(o.a,{attrs:{"x-small":"",outlined:"",fab:"",rounded:"",color:"primary"},on:{click:function(n){return t.externalLink(r.url)}}},[n(v.a,[t._v(" mdi-github ")])],1),t._v(" "),n(o.a,{attrs:{"x-small":"",outlined:"",fab:"",rounded:"",color:"primary"},on:{click:function(n){return t.externalLink(r.url)}}},[n(v.a,[t._v(" mdi-link-variant ")])],1)],1)],1)],1)})),1),t._v(" "),n(m.a,{staticClass:"my-5",attrs:{"justify-end":""}},[n(o.a,{staticClass:"mx-1",attrs:{outlined:""},on:{click:function(n){t.stepId-=1}}},[t._v(" Back ")]),t._v(" "),n(o.a,{attrs:{color:"primary mx-1"},on:{click:function(n){t.stepId+=1}}},[t._v("Next")])],1)],1)],1)})),0)],1)}),[],!1,null,null,null);n.default=component.exports}}]);