(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{145:function(t,n,e){var content=e(149);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(32).default)("d7119172",content,!0,{sourceMap:!1})},147:function(t,n,e){"use strict";var o=e(15),component=Object(o.a)({},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"tabs"},[n("ul",[n("nuxt-link",{attrs:{tag:"li","exact-active-class":"is-active",to:"/"}},[n("a",[this._v("Random")])]),this._v(" "),n("nuxt-link",{attrs:{tag:"li","exact-active-class":"is-active",to:"/tfo"}},[n("a",[this._v("2→5→1")])])],1)])},[],!1,null,null,null);n.a=component.exports},148:function(t,n,e){"use strict";var o=e(145);e.n(o).a},149:function(t,n,e){(t.exports=e(31)(!1)).push([t.i,".results{padding-top:16px}.append,label:nth-of-type(n+2){margin-left:1em}sup{line-height:0}.length{width:5em}",""])},152:function(t,n,e){"use strict";e.r(n);var o=e(147),l=["F","C","G","D","A","E","B","G♭","D♭","A♭","E♭","B♭"],c=["m7","7","△"],r={components:{Navi:o.a},data:function(){return{chords:[],kinds:{},isShowOptions:!1,length:4}},methods:{choiceChord:function(){this.chords.length=0;for(var i=0;i<this.length;i++){var t=this.makeChordList();this.chords=this.chords.concat(t)}},toggleOptions:function(){this.isShowOptions=!this.isShowOptions},makeChordList:function(){var t=Math.floor(Math.random()*l.length),n=[];console.log(t);for(var i=0;i<3;i++){var e=t+i;e>=l.length&&(e-=l.length);var o=l[e],r=c[i];console.log(o,r),n.push(o+r)}return n}}},h=(e(148),e(15)),component=Object(h.a)(r,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("navi"),t._v(" "),e("section",{staticClass:"section"},[e("button",{staticClass:"button is-primary is-large",on:{click:t.choiceChord}},[t._v("EXEC")]),t._v(" "),e("div",{staticClass:"options is-size-4"},[e("p",{staticClass:"button is-text is-size-4",on:{click:t.toggleOptions}},[t.isShowOptions?e("span",[t._v("▼")]):e("span",[t._v("▲")]),t._v("Options\n      ")]),t._v(" "),t.isShowOptions?e("div",{staticClass:"append"},[e("label",{},[t._v("\n          Length:\n          "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.length,expression:"length"}],staticClass:"input length",attrs:{type:"number",name:"length"},domProps:{value:t.length},on:{input:function(n){n.target.composing||(t.length=n.target.value)}}})])]):t._e()]),t._v(" "),e("div",{staticClass:"columns is-multiline results"},t._l(t.chords,function(n){return e("div",{staticClass:"column is-one-third"},[e("p",{staticClass:"notification is-info is-size-3"},[t._v(t._s(n))])])}),0)])],1)},[],!1,null,null,null);n.default=component.exports}}]);