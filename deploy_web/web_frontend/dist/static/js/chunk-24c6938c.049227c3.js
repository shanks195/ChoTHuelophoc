(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24c6938c"],{"24e6":function(t,n,e){"use strict";e("5725")},5725:function(t,n,e){},"62e8":function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"paragraph-left",attrs:{id:"Introduce"}},t._l(t.content,(function(n){return e("div",{key:n.id,staticClass:"introduce"},[e("h1",{attrs:{slot:"name"},domProps:{innerHTML:t._s(n.name)},slot:"name"},[t._v(t._s(n.name))]),t._v(" "),e("p",{attrs:{slot:"title"},domProps:{innerHTML:t._s(n.title)},slot:"title"},[t._v(" "+t._s(n.title))]),t._v(" "),e("p",{attrs:{slot:"description"},domProps:{innerHTML:t._s(n.description)},slot:"description"},[t._v(t._s(n.description))]),t._v(" "),e("img",{attrs:{src:n.link,alt:""}})])})),0)},s=[],i={name:"PageIntroduce",data:function(){return{content:[]}},created:function(){var t=this;fetch("http://thuephonghoc.vn:8080/rentroom/api/introduce").then((function(t){return t.json()})).then((function(n){t.content=n.content}))},methods:{}},r=i,c=(e("24e6"),e("2877")),a=Object(c["a"])(r,o,s,!1,null,"4fe7e982",null);n["default"]=a.exports}}]);