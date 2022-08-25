(function(){"use strict";var t={739:function(t,o,e){var r=e(963),n=e(252);const i={class:"row"},s=(0,n._)("div",{class:"col"},null,-1),a={class:"col"},l=(0,n.uE)('<option disabled selected value="">Sort By</option><option value="rH" class="option">Rating(Highest)</option><option value="rL" class="option">Rating(Lowest)</option><option value="tA" class="option">Title(A-Z)</option><option value="tZ" class="option">Title(Z-A)</option><option value="anA" class="option">Author Name(A-Z)</option><option value="anZ" class="option">Author Name(Z-A)</option><option value="ypM" class="option"> Year Published(Most Recent) </option><option value="ypL" class="option">Year Publish(Least Recent)</option>',9),c=[l],u=(0,n._)("div",{class:"col"},null,-1),h={class:"row"},p=(0,n._)("div",{class:"col"},null,-1),f={class:"col"},d=(0,n._)("div",{class:"col"},null,-1);function v(t,o,e,l,v,b){const g=(0,n.up)("SearchBox"),m=(0,n.up)("SearchResult");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(g,{onSearch:b.queryApi},null,8,["onSearch"]),(0,n._)("div",i,[s,(0,n._)("div",a,[(0,n.wy)((0,n._)("select",{class:"card-input__input -select","onUpdate:modelValue":o[0]||(o[0]=t=>v.sortChoice=t)},c,512),[[r.bM,v.sortChoice]])]),u]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(this.books,((t,o)=>((0,n.wg)(),(0,n.iD)("ul",{class:"list-group",key:t},[(0,n.Wm)(m,{bookData:b.booksSorted[o]},null,8,["bookData"])])))),128)),(0,n._)("div",h,[p,(0,n._)("div",f,[v.page>1?((0,n.wg)(),(0,n.iD)("button",{key:0,class:"card-form__button",onClick:o[1]||(o[1]=(...t)=>b.previousPage&&b.previousPage(...t))}," Previous Page ")):(0,n.kq)("",!0),(0,n._)("button",{class:"card-form__button",onClick:o[2]||(o[2]=(...t)=>b.nextPage&&b.nextPage(...t))},"Next Page")]),d])])}const b={class:"card-form"},g=(0,n._)("h1",null,"Book Review Search",-1),m={class:"card-input"};function y(t,o,e,i,s,a){return(0,n.wg)(),(0,n.iD)("div",b,[g,(0,n._)("div",m,[(0,n.wy)((0,n._)("input",{type:"text",class:"card-input__input",placeholder:"Search Term","onUpdate:modelValue":o[0]||(o[0]=t=>s.searchTerm=t)},null,512),[[r.nr,s.searchTerm]]),(0,n._)("button",{class:"card-form__button",onClick:o[1]||(o[1]=(...t)=>a.submitSearch&&a.submitSearch(...t))},"Search")])])}var _={name:"SearchBox",components:{},data(){return{searchTerm:""}},methods:{submitSearch(){this.$emit("search",this.searchTerm)}}},k=e(744);const w=(0,k.Z)(_,[["render",y]]);var A=w,C=e(577);const S={class:"card-form",style:{"margin-top":"10px"}},D={class:"list-group-item"},x={class:"row"},P={class:"col-2",style:{"margin-right":"50px"}},O=["src"],Z={class:"col"};function q(t,o,e,r,i,s){return(0,n.wg)(),(0,n.iD)("div",S,[(0,n._)("li",D,[(0,n._)("div",x,[(0,n._)("div",P,[(0,n._)("img",{src:this.bookData.imageUrl},null,8,O)]),(0,n._)("div",Z,[(0,n._)("h2",null,(0,C.zw)(this.bookData.title),1),(0,n._)("ul",null,[(0,n._)("li",null,"Author: "+(0,C.zw)(this.bookData.authorName),1),(0,n._)("li",null,"Rating: "+(0,C.zw)(this.bookData.rating),1),(0,n._)("li",null,"Year Published: "+(0,C.zw)(this.bookData.year),1)])])])])])}var N={name:"SearchResult",components:{},data(){return{}},props:{bookData:Object},methods:{}};const R=(0,k.Z)(N,[["render",q]]);var T=R,j=e(669),L=e.n(j),B={name:"App",components:{SearchBox:A,SearchResult:T},data(){return{query:"",books:[],sortChoice:"",page:1}},methods:{async previousPage(){this.page=this.page-1,this.queryApi(this.query)},async nextPage(){this.page++,this.queryApi(this.query)},async queryApi(t){this.query=t,console.log(t);let o="https://additionalData.marcusbenesch.repl.co/search/"+t+"?page="+this.page;L().get(o,{headers:{"Access-Control-Allow-Origin":"*"}}).then((t=>{console.log(t),this.books=t.data.list})).catch((function(t){alert("No search results found");let o=t.response;console.log(o)}))}},computed:{booksSorted(){if(""==this.sortChoice)return this.books;if("rH"==this.sortChoice){let t=this.books;return t.sort((function(t,o){return o.rating-t.rating}))}if("rL"==this.sortChoice){let t=this.books;return t.sort((function(t,o){return t.rating-o.rating}))}if("tA"==this.sortChoice){console.log("tQ");let t=this.books;return console.log(t[0].title),t.sort((function(t,o){return t.title>o.title?1:-1}))}if("tZ"==this.sortChoice){let t=this.books;return t.sort((function(t,o){return o.title>t.title?1:-1}))}if("anA"==this.sortChoice){let t=this.books;return t.sort((function(t,o){return t.authorName>o.authorName?1:-1}))}if("anZ"==this.sortChoice){let t=this.books;return t.sort((function(t,o){return o.authorName>t.authorName?1:-1}))}if("ypM"==this.sortChoice){let t=this.books;return t.sort((function(t,o){return o.year-t.year}))}if("ypL"==this.sortChoice){let t=this.books;return t.sort((function(t,o){return t.year-o.year}))}return this.books}}};const M=(0,k.Z)(B,[["render",v]]);var z=M;(0,r.ri)(z).mount("#app")}},o={};function e(r){var n=o[r];if(void 0!==n)return n.exports;var i=o[r]={exports:{}};return t[r](i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(o,r,n,i){if(!r){var s=1/0;for(u=0;u<t.length;u++){r=t[u][0],n=t[u][1],i=t[u][2];for(var a=!0,l=0;l<r.length;l++)(!1&i||s>=i)&&Object.keys(e.O).every((function(t){return e.O[t](r[l])}))?r.splice(l--,1):(a=!1,i<s&&(s=i));if(a){t.splice(u--,1);var c=n();void 0!==c&&(o=c)}}return o}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[r,n,i]}}(),function(){e.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(o,{a:o}),o}}(),function(){e.d=function(t,o){for(var r in o)e.o(o,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:o[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){var t={143:0};e.O.j=function(o){return 0===t[o]};var o=function(o,r){var n,i,s=r[0],a=r[1],l=r[2],c=0;if(s.some((function(o){return 0!==t[o]}))){for(n in a)e.o(a,n)&&(e.m[n]=a[n]);if(l)var u=l(e)}for(o&&o(r);c<s.length;c++)i=s[c],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(u)},r=self["webpackChunkdotdash"]=self["webpackChunkdotdash"]||[];r.forEach(o.bind(null,0)),r.push=o.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(739)}));r=e.O(r)})();
//# sourceMappingURL=app.37c6b78f.js.map