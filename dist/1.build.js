webpackJsonp([1],{10:function(t,s,e){var n=e(3)(e(21),e(27),null,null);t.exports=n.exports},17:function(t,s,e){"use strict"},18:function(t,s,e){"use strict";function n(t){var s="https://api.github.com/search/repositories?q="+t;return e.i(i.a)(s)}function r(t,s){var n="https://api.github.com/repos/"+s+"/"+t+"/issues";return e.i(i.a)(n)}var i=e(19);e(17);s.b=n,s.a=r},19:function(t,s,e){"use strict";function n(t){return fetch(t).then(function(t){if(!t.ok)throw Error(t.statusText);return t.json()})}s.a=n},21:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=e(18);s.default={name:"IssueList",data:function(){return{issues:[]}},computed:{isNotEmpty:function(){return this.issues&&this.issues.length}},created:function(){var t=this,s=this.$route.params.owner,r=this.$route.params.repo;r&&s&&e.i(n.a)(r,s).then(function(s){t.issues=s})},methods:{goBack:function(){this.$router.go(-1)},isClosed:function(t){return"closed"===t}}}},27:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("button",{staticClass:"btn btn-back",on:{click:t.goBack}},[t._v("Back")]),t._v(" "),e("h2",[t._v(t._s(t.$route.params.repo))]),t._v(" "),e("h3",[t._v("Author: "+t._s(t.$route.params.owner))]),t._v(" "),t.isNotEmpty?e("div",[e("ul",t._l(t.issues,function(s){return e("li",{staticClass:"repo"},[e("input",{attrs:{type:"checkbox",disabled:"disabled"},domProps:{checked:t.isClosed(s.state)}}),t._v("\n        "+t._s(s.title)+"\n      ")])}))]):t._e()])},staticRenderFns:[]}}});
//# sourceMappingURL=1.build.js.map