(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ea981dc"],{"14af":function(t,e,i){},2525:function(t,e,i){t.exports=i.p+"static/img/logo.a04052b6.jpg"},"31d2":function(t,e,i){},"40c3":function(t,e,i){"use strict";i("31d2")},"987a":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"clientLayout"}},[n("nav",{staticClass:"navbar"},[n("div",{staticClass:"content"},[n("div",{staticClass:"logo"},[n("router-link",{attrs:{to:"/"}},[n("img",{attrs:{src:i("2525"),alt:""}})])],1),t._v(" "),n("ul",{staticClass:"menu-list"},[n("div",{staticClass:"icon cancel-btn",on:{click:t.removeClickSo}},[n("svg-icon",{attrs:{"icon-class":"cancel",width:"30%"}})],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/introduce"}},[t._v("Giới thiệu")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/price-sum"}},[t._v("Bảng Giá")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/contact"}},[t._v("Liên hệ")])],1)]),t._v(" "),n("div",{staticClass:"icon menu-btn",on:{click:t.addCLickso}},[n("svg-icon",{attrs:{"icon-class":"menu-client",width:"30%"}})],1)])]),t._v(" "),n("div",{staticClass:"about"},[n("div",{staticClass:"content"},[n("router-view")],1)]),t._v(" "),t._l(t.content,(function(e){return n("span",{key:e.id},[n("div",{staticClass:"footer content"},[n("div",{staticClass:"col-4 col-s-12"},[n("h5",[t._v("Thông tin liên hệ")]),t._v(" "),t._m(0,!0),t._v(" "),n("p",[n("b",[t._v("Gmal: ")]),n("span",{staticClass:"sdt"},[t._v(t._s(e.email))]),n("span",[t._v("( Tư vấn 24/7)")])]),t._v(" "),n("p",[n("b",[t._v("Hotline tư vấn: ")]),n("span",{staticClass:"sdt"},[t._v(t._s(e.phone))]),n("span",[t._v("( Tư vấn 24/7)")])])]),t._v(" "),n("div",{staticClass:"col-3 col-s-12"},[n("h5",[t._v("Nhận báo giá")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.posts.email,expression:"posts.email"}],attrs:{id:"",type:"email",name:"email",placeholder:"Nhận Email cua bạn"},domProps:{value:t.posts.email},on:{change:function(e){return t.postData(t.e)},input:function(e){e.target.composing||t.$set(t.posts,"email",e.target.value)}}}),t._v(" "),n("button",[t._v("Nhận báo giá và hình ảnh")])])]),t._v(" "),n("div",{staticClass:"call-user"},[n("p",[t._v("Gọi để xem và đặt phòng "),n("button",[t._v(t._s(e.phone))])])]),t._v(" "),n("go-top")],1)}))],2)},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[i("b",[t._v("Địa chỉ:  ")]),i("span",[t._v("89 Trần Văn Dư, P.13,Q.Tân Bình,TP HCM")])])}],o=i("bc3a"),a=i.n(o),l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"vue-go-top"}},[t.isActive&&t.enabled?i("div",{staticClass:"vue-go-top",style:t.mainStyle,attrs:{role:"button",tabindex:t.tabindex},on:{click:function(e){return e.preventDefault(),t.clickHandle(e)},keydown:function(e){return e.preventDefault(),t.keyEnter(e)}}},[null!==t.src?i("div",{staticClass:"vue-go-top__icon"},[i("img",{staticClass:"vue-go-top__image",attrs:{src:t.src,alt:t.alt}}),t._v(" "),i("div",{staticClass:"vue-go-top__ripple",style:t.rippleStyle,attrs:{"is-active":t.isRippleActive}})]):i("div",{staticClass:"vue-go-top__content"},[i("div",{staticClass:"vue-go-top__ripple",style:t.rippleStyle,attrs:{"is-active":t.isRippleActive}}),t._v(" "),t._t("default")],2)]):t._e()])},c=[],r=i("5530"),u=(i("c5f6"),i("a481"),i("15d3")),d=i("6cbf"),h=i.n(d),p=13,v=32,m=750,f=100,g=function(t,e){var i=e.replace(/^#/,"");return"bold"===t?"data:image/svg+xml;charset=utf8, %3Csvg version=%271.1%27 xmlns=%27http://www.w3.org/2000/svg%27 width=%2710px%27 height=%2710px%27%3E %3Cpolygon fill=%27%23"+i+"%27 stroke=%27none%27 points=%278.646,7.354 5,3.707 1.354,7.354 0.646,6.646 5,2.293 9.354,6.646%27 /%3E %3C/svg%3E":"data:image/svg+xml;charset=utf8,%3Csvg version=%271.1%27 xmlns=%27http://www.w3.org/2000/svg%27 width=%2710px%27 height=%2710px%27%3E %3Cpolygon fill=%27%23"+i+"%27 stroke=%27none%27 points=%278.589,6.945 5,3.22 1.413,6.945 1.052,6.598 5,2.499 8.948,6.598%27 /%3E %3C/svg%3E"},b=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"px";return"number"===typeof t?t+e:t},_=new h.a,y={props:{size:{type:Number,default:40},right:{type:[String,Number],default:50},bottom:{type:[String,Number],default:100},bottomGap:{type:[String,Number],default:0},zIndex:{type:Number,default:1e3},fgColor:{type:String,default:"#ffffff"},bgColor:{type:String,default:"#ffc966"},radius:{type:[String,Number],default:"50%"},weight:{type:String,default:"normal"},rippleBg:{type:String,default:"rgba(255, 255, 255, .5)"},boundary:{type:Number,default:200},maxWidth:{type:Number,default:640},src:{type:String,default:null},alt:{type:String,default:""},hasOutline:{type:Boolean,default:!0},boxShadow:{type:String,default:"1px 1px 2px rgba(0, 0, 0, .3)"},tabindex:{type:Number,default:0}},data:function(){var t=this.hasOutline?{}:{outline:"0 none"};return{enabled:!1,isActive:!1,isRippleActive:!1,mainStyle:Object(r["a"])({width:b(this.size),height:b(this.size),right:b(this.right),bottom:"calc(".concat(b(this.bottom)," - ").concat(b(this.bottomGap),")"),zIndex:this.zIndex,color:this.fgColor,backgroundColor:this.bgColor,backgroundImage:this.bgImage(),backgroundSize:"".concat(this.size," auto"),boxShadow:this.boxShadow,opacity:this.opacity,borderRadius:b(this.radius)},t),rippleStyle:{top:b(-this.size),left:b(-this.size),width:"200%",height:"200%",backgroundColor:this.rippleBg},throttleScroll:null,throttleResize:null}},created:function(){this.handleResize(),this.throttleScroll=Object(u["a"])(f,this.handleScroll),this.throttleResize=Object(u["a"])(f,this.handleResize),window.addEventListener("resize",this.throttleResize),window.addEventListener("scroll",this.throttleScroll)},beforeDestroy:function(){this.throttleResize&&window.removeEventListener("resize",this.throttleResize),this.throttleScroll&&window.removeEventListener("scroll",this.throttleScroll)},methods:{clickHandle:function(t){var e=this;if(!this.isRippleActive){var i=t.target;if(i){var n=i.getBoundingClientRect(),s=t.clientY-n.top,o=t.clientX-n.left;this.rippleStyle.top=b(s-this.size),this.rippleStyle.left=b(o-this.size)}this.isRippleActive=!0,setTimeout((function(){e.isRippleActive=!1}),m)}_.to(0)},handleScroll:function(){this.isActive=window.pageYOffset>this.boundary},handleResize:function(){this.maxWidth>0?this.enabled=!window.matchMedia("(max-width: ".concat(this.maxWidth,"px)")).matches:this.enabled=!0},keyEnter:function(t){t.keyCode!==p&&t.keyCode!==v||_.to(0)},bgImage:function(){return null!==this.src?"none":'url("'.concat(g(this.weight,this.fgColor),'")')}}},w=y,C=(i("d79d"),i("2877")),S=Object(C["a"])(w,l,c,!1,null,"5e2e70b9",null),x=S.exports,k={name:"ClientLayoutPage",components:{GoTop:x},data:function(){return{content:[],posts:{id:"",fullname:"",email:"",phone:"",schedule:""}}},created:function(){var t=this;fetch("http://112.169.209.92:8080/rentroom/api/contact").then((function(t){return t.json()})).then((function(e){t.content=e.content}))},methods:{postData:function(t){a.a.post("http://112.169.209.92:8080/rentroom/api/contactclient",this.posts).then((function(t){alert("Ban da gửi thành công!!!")})),t.preventDefault()},addCLickso:function(){var t=document.querySelector("body"),e=document.querySelector(".menu-list"),i=document.querySelector(".menu-btn"),n=document.querySelector(".cancel-btn");e.classList.add("active"),i.classList.add("hide"),n.classList.add("show"),t.classList.add("disabledScroll")},removeClickSo:function(){var t=document.querySelector("body"),e=document.querySelector(".menu-list"),i=document.querySelector(".menu-btn"),n=document.querySelector(".cancel-btn");e.classList.remove("active"),i.classList.remove("hide"),n.classList.remove("show"),t.classList.remove("disabledScroll")}}},z=k,L=(i("40c3"),Object(C["a"])(z,n,s,!1,null,"f37ac730",null));e["default"]=L.exports},d79d:function(t,e,i){"use strict";i("14af")}}]);