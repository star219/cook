module.exports=function(t){function e(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=1)}([function(t,e,r){"use strict";function n(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,r){function n(a,i){try{var o=e[a](i),s=o.value}catch(t){return void r(t)}if(!o.done)return Promise.resolve(s).then(function(t){n("next",t)},function(t){n("throw",t)});t(s)}return n("next")})}}var a=r(9),i=r.n(a),o=r(11),s=r.n(o),c={namespaced:!0,state:{records:[],totalRecs:0,record:{},pagination:{},filterData:{},defaultRec:{},crudOps:{export:null,find:null,delete:null,findOne:null,create:null,update:null}},getters:{record:function(t){return t.record},records:function(t){return t.records},totalRecs:function(t){return t.totalRecs},filterData:function(t){return t.filterData},pagination:function(t){return t.pagination},defaultRec:function(t){return t.defaultRec},crudOps:function(t){return t.crudOps}},mutations:{setRecords:function(t,e){t.records=e.records,t.totalRecs=e.totalRecs},setRecord:function(t,e){t.record=null===e?s()(t.defaultRec):s()(e)},setPagination:function(t,e){t.pagination=e},setFilterData:function(t,e){t.filterData=e}},actions:{setPagination:function(t,e){(0,t.commit)("setPagination",e)},deleteRecord:function(){function t(t,r){return e.apply(this,arguments)}var e=n(i.a.mark(function t(e,r){var n=(e.commit,e.getters);return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r.user=this.getters.user,t.next=3,n.crudOps.delete(r);case 3:case"end":return t.stop()}},t,this)}));return t}(),getRecord:function(){function t(t,r){return e.apply(this,arguments)}var e=n(i.a.mark(function t(e,r){var n,a=e.commit,o=e.getters;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r.user=this.getters.user,t.next=3,o.crudOps.findOne(r);case 3:n=t.sent,a("setRecord",n);case 5:case"end":return t.stop()}},t,this)}));return t}(),getRecords:function(){function t(t,r){return e.apply(this,arguments)}var e=n(i.a.mark(function t(e,r){var n,a,o,s,c=e.commit,u=e.getters;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r.user=this.getters.user,t.next=3,u.crudOps.find(r);case 3:n=t.sent,a=n.records,o=n.pagination,s=a.length,c("setPagination",o),c("setFilterData",r.filterData),c("setRecords",{records:a,totalRecs:s});case 10:case"end":return t.stop()}},t,this)}));return t}(),exportRecords:function(){function t(t,r){return e.apply(this,arguments)}var e=n(i.a.mark(function t(e,r){var n=(e.commit,e.getters);return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r.user=this.getters.user,t.next=3,n.crudOps.export(r);case 3:case"end":return t.stop()}},t,this)}));return t}(),updateRecord:function(){function t(t,r){return e.apply(this,arguments)}var e=n(i.a.mark(function t(e,r){var n=(e.commit,e.getters);return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r.user=this.getters.user,t.next=3,n.crudOps.update(r);case 3:case"end":return t.stop()}},t,this)}));return t}(),createRecord:function(){function t(t,r){return e.apply(this,arguments)}var e=n(i.a.mark(function t(e,r){var n=(e.commit,e.getters);e.dispatch;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r.user=this.getters.user,t.next=3,n.crudOps.create(r);case 3:case"end":return t.stop()}},t,this)}));return t}()}};e.a={props:{parentId:{type:String,default:null},storeName:{type:String,required:!0},crudFilter:{type:Object,required:!0},crudTable:{type:Object,required:!0},crudForm:{type:Object,required:!0},crudOps:{type:Object,required:!0},crudTitle:{type:String},doPage:{type:Boolean,default:!0}},created:function(){this.$t&&this.$i18n||(this.$t=null);var t=this.$store,e=this.storeName;t&&t.state&&t.state[e]||(t.registerModule(e,s()(c)),t.state[e].defaultRec=this.crudForm.defaultRec,t.state[e].filterData=this.crudFilter.filterData,t.state[e].crudOps=this.crudOps),this.$options.filters.formatters=this.crudTable.formatters,this.headers=this.crudTable.headers,this.$options.components["crud-filter"]=this.crudFilter.FilterVue,this.$options.components["crud-form"]=this.crudForm.FormVue,this.record.id&&!this.parentId&&(this.addEditDialogFlag=!0)},beforeUpdate:function(){},mounted:function(){},beforeRouteEnter:function(t,e,r){r(function(t){})},data:function(){return{addEditDialogFlag:!1,confirmDialogFlag:!1,validForm:!0,validFilter:!0,loading:!0,headers:{}}},computed:{showTitle:function(){return this.crudTitle||this.storeName},records:function(){return this.$store.getters[this.storeName+"/records"]},totalRecs:function(){return this.$store.getters[this.storeName+"/totalRecs"]},filterData:function(){return this.$store.getters[this.storeName+"/filterData"]},record:function(){return this.$store.getters[this.storeName+"/record"]},pagination:{get:function(){var t={};try{t=this.$store.state[this.storeName].pagination}catch(t){}return t},set:function(t){this.setPagination(t)}}},filters:{capitalize:function(t){return t?(t=t.toString(),t.charAt(0).toUpperCase()+t.slice(1)):""}},watch:{loading:function(t,e){},pagination:{handler:function(){this.getRecordsHelper()},deep:!0}},methods:{getRecords:function(){function t(t){return e.apply(this,arguments)}var e=n(i.a.mark(function t(e){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch(this.storeName+"/getRecords",e);case 2:case"end":return t.stop()}},t,this)}));return t}(),setPagination:function(t){this.$store.dispatch(this.storeName+"/setPagination",t)},deleteRecord:function(){function t(t){return e.apply(this,arguments)}var e=n(i.a.mark(function t(e){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch(this.storeName+"/deleteRecord",e);case 2:case"end":return t.stop()}},t,this)}));return t}(),updateRecord:function(){function t(t){return e.apply(this,arguments)}var e=n(i.a.mark(function t(e){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch(this.storeName+"/updateRecord",e);case 2:case"end":return t.stop()}},t,this)}));return t}(),createRecord:function(){function t(t){return e.apply(this,arguments)}var e=n(i.a.mark(function t(e){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch(this.storeName+"/createRecord",e);case 2:case"end":return t.stop()}},t,this)}));return t}(),getRecord:function(){function t(t){return e.apply(this,arguments)}var e=n(i.a.mark(function t(e){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch(this.storeName+"/getRecord",e);case 2:case"end":return t.stop()}},t,this)}));return t}(),setRecord:function(t){this.$store.commit(this.storeName+"/setRecord",null)},exportRecords:function(){function t(t){return e.apply(this,arguments)}var e=n(i.a.mark(function t(e){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch(this.storeName+"/exportRecords",e);case 2:case"end":return t.stop()}},t,this)}));return t}(),closeAddEditDialog:function(){this.addEditDialogFlag=!1,this.setRecord()},addEditDialogOpen:function(){function t(t){return e.apply(this,arguments)}var e=n(i.a.mark(function t(e){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=5;break}return t.next=3,this.getRecord({id:e});case 3:t.next=6;break;case 5:this.setRecord();case 6:this.addEditDialogFlag=!0;case 7:case"end":return t.stop()}},t,this)}));return t}(),addEditDialogSave:function(){function t(t){return e.apply(this,arguments)}var e=n(i.a.mark(function t(e){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.record.id){t.next=5;break}return t.next=3,this.updateRecord({record:this.record});case 3:t.next=7;break;case 5:return t.next=7,this.createRecord({record:this.record,parentId:this.parentId});case 7:return t.next=9,this.getRecordsHelper();case 9:this.closeAddEditDialog();case 10:case"end":return t.stop()}},t,this)}));return t}(),addEditDialogDelete:function(t){this.confirmDialogFlag=!0,this.addEditDialogFlag=!1},dialogConfirm:function(){function t(t){return e.apply(this,arguments)}var e=n(i.a.mark(function t(e){var r;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(r=this.record.id)){t.next=6;break}return t.next=4,this.deleteRecord({id:r});case 4:return t.next=6,this.getRecordsHelper();case 6:this.setRecord(),this.confirmDialogFlag=!1;case 8:case"end":return t.stop()}},t,this)}));return t}(),dialogAbort:function(t){this.confirmDialogFlag=!1},getRecordsHelper:function(){function t(){return e.apply(this,arguments)}var e=n(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,this.getRecords({pagination:this.pagination,filterData:this.filterData,parentId:this.parentId});case 3:this.loading=!1;case 4:case"end":return t.stop()}},t,this)}));return t}(),submitFilter:function(){function t(){return e.apply(this,arguments)}var e=n(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getRecordsHelper();case 2:case"end":return t.stop()}},t,this)}));return t}(),exportBtnClick:function(){function t(){return e.apply(this,arguments)}var e=n(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,this.exportRecords({pagination:this.pagination,filterData:this.filterData,parentId:this.parentId});case 3:this.loading=!1;case 4:case"end":return t.stop()}},t,this)}));return t}(),goBack:function(){this.$router.back()}}}},function(t,e,r){t.exports=r(2)},function(t,e,r){"use strict";function n(t){r(3)}Object.defineProperty(e,"__esModule",{value:!0});var a=r(0),i=r(12),o=r(8),s=n,c=o(a.a,i.a,!1,s,"data-v-2b122f72",null);e.default=c.exports},function(t,e,r){var n=r(4);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r(6)("5932c930",n,!0,{sourceMap:!1})},function(t,e,r){e=t.exports=r(5)(!1),e.push([t.i,".make-modal[data-v-2b122f72]{margin:0;position:fixed;top:0;left:0;z-index:100;padding:0;min-width:100%;min-height:100%;background-color:#fff}",""])},function(t,e){function r(t,e){var r=t[1]||"",a=t[3];if(!a)return r;if(e&&"function"==typeof btoa){var i=n(a);return[r].concat(a.sources.map(function(t){return"/*# sourceURL="+a.sourceRoot+t+" */"})).concat([i]).join("\n")}return[r].join("\n")}function n(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=r(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},a=0;a<this.length;a++){var i=this[a][0];"number"==typeof i&&(n[i]=!0)}for(a=0;a<t.length;a++){var o=t[a];"number"==typeof o[0]&&n[o[0]]||(r&&!o[2]?o[2]=r:r&&(o[2]="("+o[2]+") and ("+r+")"),e.push(o))}},e}},function(t,e,r){function n(t){for(var e=0;e<t.length;e++){var r=t[e],n=d[r.id];if(n){n.refs++;for(var a=0;a<n.parts.length;a++)n.parts[a](r.parts[a]);for(;a<r.parts.length;a++)n.parts.push(i(r.parts[a]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{for(var o=[],a=0;a<r.parts.length;a++)o.push(i(r.parts[a]));d[r.id]={id:r.id,refs:1,parts:o}}}}function a(){var t=document.createElement("style");return t.type="text/css",l.appendChild(t),t}function i(t){var e,r,n=document.querySelector("style["+m+'~="'+t.id+'"]');if(n){if(h)return v;n.parentNode.removeChild(n)}if(x){var i=p++;n=f||(f=a()),e=o.bind(null,n,i,!1),r=o.bind(null,n,i,!0)}else n=a(),e=s.bind(null,n),r=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else r()}}function o(t,e,r,n){var a=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=b(e,a);else{var i=document.createTextNode(a),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(i,o[e]):t.appendChild(i)}}function s(t,e){var r=e.css,n=e.media,a=e.sourceMap;if(n&&t.setAttribute("media",n),g.ssrId&&t.setAttribute(m,e.id),a&&(r+="\n/*# sourceURL="+a.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=r(7),d={},l=c&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,h=!1,v=function(){},g=null,m="data-vue-ssr-id",x="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,r,a){h=r,g=a||{};var i=u(t,e);return n(i),function(e){for(var r=[],a=0;a<i.length;a++){var o=i[a],s=d[o.id];s.refs--,r.push(s)}e?(i=u(t,e),n(i)):i=[];for(var a=0;a<r.length;a++){var s=r[a];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete d[s.id]}}}};var b=function(){var t=[];return function(e,r){return t[e]=r,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var r=[],n={},a=0;a<e.length;a++){var i=e[a],o=i[0],s=i[1],c=i[2],u=i[3],d={id:t+":"+a,css:s,media:c,sourceMap:u};n[o]?n[o].parts.push(d):r.push(n[o]={id:o,parts:[d]})}return r}},function(t,e){t.exports=function(t,e,r,n,a,i){var o,s=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(o=t,s=t.default);var u="function"==typeof s?s.options:s;e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0),r&&(u.functional=!0),a&&(u._scopeId=a);var d;if(i?(d=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},u._ssrRegister=d):n&&(d=n),d){var l=u.functional,f=l?u.render:u.beforeCreate;l?(u._injectStyles=d,u.render=function(t,e){return d.call(e),f(t,e)}):u.beforeCreate=f?[].concat(f,d):[d]}return{esModule:o,exports:s,options:u}}},function(t,e,r){t.exports=r(10)},function(t,e){t.exports=require("regenerator-runtime")},function(t,e){t.exports=require("lodash.clonedeep")},function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{class:{"make-modal":t.parentId}},[r("v-expansion-panel",[r("v-expansion-panel-content",{staticClass:"grey lighten-1"},[r("div",{attrs:{slot:"header"},slot:"header"},[r("v-icon",[t._v("search")]),t._v(" "+t._s(t._f("capitalize")(t.showTitle))+" "+t._s(t.doPage?"":" - "+t.records.length+" Records"))],1),t._v(" "),r("v-form",{ref:"searchForm",staticClass:"grey lighten-3 pa-2",attrs:{"lazy-validation":""},model:{value:t.validFilter,callback:function(e){t.validFilter=e},expression:"validFilter"}},[r("crud-filter",{attrs:{filterData:t.filterData,parentId:t.parentId,storeName:t.storeName}}),t._v(" "),r("v-layout",{attrs:{row:"","justify-end":""}},[r("v-btn",{attrs:{fab:"",disabled:!t.validFilter||t.loading},on:{click:t.submitFilter}},[r("v-icon",[t._v("replay")])],1)],1)],1)],1)],1),t._v(" "),r("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.records,"total-items":t.totalRecs,pagination:t.pagination,loading:t.loading,"hide-actions":!t.doPage},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"items",fn:function(e){return[r("tr",{ref:"props.item",on:{click:function(r){r.stopPropagation(),t.addEditDialogOpen(e.item.id)}}},t._l(t.headers,function(n){return r("td",{key:n.value},[t._v(t._s(t._f("formatters")(e.item[n.value],n.value)))])}))]}}])},[r("template",{slot:"no-data"},[r("v-flex",{staticClass:"text-xs-center"},[r("v-alert",{attrs:{value:!0,color:"error",icon:""}},[r("v-icon",[t._v("warning")]),t._v(" "+t._s(t.$t?t.$t("vueCrudX.noData"):"NO DATA"))],1)],1)],1)],2),t._v(" "),r("v-layout",{attrs:{row:"","justify-center":""}},[r("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:t.confirmDialogFlag,callback:function(e){t.confirmDialogFlag=e},expression:"confirmDialogFlag"}},[r("v-card",[r("v-card-title",{staticClass:"headline"},[r("v-flex",{staticClass:"text-xs-center"},[t._v(" "+t._s(t.$t?t.$t("vueCrudX.confirm"):"PROCEED?"))])],1),t._v(" "),r("v-card-actions",[r("v-flex",{staticClass:"text-xs-center"},[r("v-btn",{attrs:{fab:"",flat:""},nativeOn:{click:function(e){return t.dialogConfirm(e)}}},[r("v-icon",[t._v("done")])],1),t._v(" "),r("v-btn",{attrs:{fab:"",flat:""},nativeOn:{click:function(e){return t.dialogAbort(e)}}},[r("v-icon",[t._v("close")])],1)],1)],1)],1)],1),t._v(" "),r("v-dialog",{attrs:{fullscreen:"",transition:"dialog-bottom-transition",overlay:!1},model:{value:t.addEditDialogFlag,callback:function(e){t.addEditDialogFlag=e},expression:"addEditDialogFlag"}},[r("v-card",[r("v-toolbar",{attrs:{dark:"",color:"primary"}},[r("v-toolbar-title",[r("v-icon",[t._v("mode_edit")]),t._v(" "+t._s(t._f("capitalize")(t.showTitle)))],1),t._v(" "),r("v-spacer"),t._v(" "),r("v-toolbar-items")],1),t._v(" "),r("v-form",{staticClass:"grey lighten-3 pa-2",attrs:{"lazy-validation":""},model:{value:t.validForm,callback:function(e){t.validForm=e},expression:"validForm"}},[r("crud-form",{attrs:{record:t.record,parentId:t.parentId,storeName:t.storeName}}),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{fab:"",dark:""},nativeOn:{click:function(e){return t.closeAddEditDialog(e)}}},[r("v-icon",[t._v("reply")])],1),t._v(" "),t.record.id&&this.crudOps.delete?r("v-btn",{attrs:{fab:"",dark:""},nativeOn:{click:function(e){return t.addEditDialogDelete(e)}}},[r("v-icon",[t._v("delete")])],1):t._e(),t._v(" "),t.record.id&&this.crudOps.update||!t.record.id&&this.crudOps.create?r("v-btn",{attrs:{fab:"",disabled:!t.validForm},nativeOn:{click:function(e){return t.addEditDialogSave(e)}}},[r("v-icon",[t._v("done_all")])],1):t._e()],1)],1)],1)],1)],1),t._v(" "),r("v-layout",{attrs:{row:"","justify-end":""}},[this.parentId?r("v-btn",{attrs:{fab:"",top:"",dark:""},on:{click:function(e){return e.stopPropagation(),t.goBack(e)}}},[r("v-icon",[t._v("reply")])],1):t._e(),t._v(" "),this.crudOps.create?r("v-btn",{attrs:{fab:"",top:"",dark:""},on:{click:function(e){e.stopPropagation(),t.addEditDialogOpen(null)}}},[r("v-icon",[t._v("add")])],1):t._e(),t._v(" "),this.crudOps.export?r("v-btn",{attrs:{fab:"",top:"",dark:"",disabled:t.loading},on:{click:function(e){return e.stopPropagation(),t.exportBtnClick(e)}}},[r("v-icon",{class:[{"white--text":!t.loading}]},[t._v("print")])],1):t._e()],1)],1)},a=[],i={render:n,staticRenderFns:a};e.a=i}]);