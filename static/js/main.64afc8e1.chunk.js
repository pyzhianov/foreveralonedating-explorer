(window["webpackJsonpreddit-diagram"]=window["webpackJsonpreddit-diagram"]||[]).push([[0],{11:function(e,t,a){e.exports={post:"Face_post__28TVh",selected:"Face_selected__3RvCB"}},16:function(e,t,a){e.exports={app:"App_app__1kX79",attribution:"App_attribution__1Q091"}},32:function(e,t,a){e.exports={tooltip:"Tooltip_tooltip__2efxb"}},34:function(e,t,a){e.exports=a(57)},5:function(e,t,a){e.exports={storyline:"StoryLine_storyline__3sU0T",column:"StoryLine_column__38MPb",tick:"StoryLine_tick__2rO5J",year:"StoryLine_year__1d-fD",month:"StoryLine_month__29zMZ",fixedYear:"StoryLine_fixedYear__36n6t",fixedMonth:"StoryLine_fixedMonth__4DKR0"}},56:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(27),c=a.n(o),l=a(28),i=a(3),s=a(29),m=a.n(s),u=a(17),d=a(30),p=a(31),f=a.n(p),h=a(6),b=a(12),v=a(14),y=a(13),O=a(15),g=a(7),_=a(33),j=a(59),E=a(60),S=a(32),w=a.n(S),x=function(e){var t=e.top,a=e.title,n=e.score,o=e.comments,c=e.url;return r.a.createElement("div",{className:w.a.tooltip,style:{top:t}},r.a.createElement("h4",null,a),r.a.createElement("p",null,r.a.createElement("span",{role:"img","aria-label":"post score"},"\u2b06\ufe0f")," ",n),r.a.createElement("p",null,r.a.createElement("span",{role:"img","aria-label":"comments"},"\ud83d\udcac\ufe0f")," ",o),r.a.createElement("a",{href:"https://www.reddit.com/r/ForeverAloneDating/comments/"+c,target:"_blank",rel:"noopener noreferrer"},"Open the post"))},k=a(11),M=a.n(k);var C=function(e){var t,a,n=e.isSelected,o=e.top,c=e.fontSize,l=e.post,i=e.onSelect;return r.a.createElement("div",{className:"".concat(M.a.post," ").concat(n?M.a.selected:""),style:{top:o,fontSize:c},onClick:i},(t=l.age,a=l.fromGender,t<20&&"m"===a?"\ud83d\udc66":t<20&&"f"===a?"\ud83d\udc67":t<40&&"m"===a?"\ud83d\udc68":t<40&&"f"===a?"\ud83d\udc69":t<60&&"m"===a?"\ud83d\udc68\u200d\ud83e\uddb3":t<60&&"f"===a?"\ud83d\udc69\u200d\ud83e\uddb3":"f"===a?"\ud83d\udc75":"m"===a?"\ud83d\udc74":"\ud83d\udc7d"))},N=/\d\d/,I=/([M,F,f,m])4([M,F,f,m])/;function L(e){return e.fromGender&&e.toGender&&e.age}function P(e){var t=N.exec(e.h)||[null],a=Object(i.a)(t,1)[0],n=I.exec(e.h)||[null,null,null],r=Object(i.a)(n,3),o=r[1],c=r[2];return{createdUtc:new Date(1e3*e.t),age:a&&parseInt(a)>=14&&parseInt(a)<150?parseInt(a):void 0,score:e.s,url:e.u,fromGender:o?o.toLowerCase():void 0,toGender:c?c.toLowerCase():void 0,title:e.h,comments:e.c}}var D=a(5),G=a.n(D);function z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var F=[0,500],U=Object(_.a)().domain([0,100]).range([18,60]),A=Array(55).fill(0).map(function(e,t){return"./data/data".concat(t,".json")}),R=[];var T=r.a.memo(function(e){var t=e.style,a=e.date,n=e.posts,o=e.selectedUrl,c=e.setSelectedUrl,l=e.verticalScale,i=Object(O.a)(a,Object(y.a)(a))?Object(g.a)(a,"y"):null,s=Object(O.a)(a,Object(v.a)(a))?Object(g.a)(a,"MMMM"):null;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:G.a.column,style:t},r.a.createElement("div",{className:G.a.tick},i&&r.a.createElement("div",{className:G.a.year},i),s&&r.a.createElement("div",{className:G.a.month},s),r.a.createElement("div",null,Object(g.a)(a,"dd"))),n.map(function(e){var t=l(e.score),a=e.url===o;return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,{key:e.url,isSelected:a,top:t,fontSize:U(e.comments),post:e,onSelect:function(t){return c(e.url)}}),a&&r.a.createElement(x,Object.assign({top:t},e)))})))},u.b),B=function(){var e=r.a.useState({year:"2019",month:"September"}),t=Object(i.a)(e,2),a=t[0],n=t[1],o=r.a.useRef(null),c=f()(o),s=r.a.useState(""),p=Object(i.a)(s,2),O=p[0],_=p[1],S=r.a.useState([]),w=Object(i.a)(S,2),x=w[0],k=w[1],M=r.a.useCallback(function(){var e=A.shift();return e?m.a.get(e).then(function(e){Array.prototype.push.apply(R,e.data.map(P).filter(L));var t=Array.from(Object(E.a)(R,function(e){return Object(h.a)(e.createdUtc).valueOf()}));k(t)}):Promise.resolve()},[]),C=Object(j.a)().exponent(.7).domain(F).range([64,c?c.height:600]),N=function(e){return 0===A.length||e<x.length},I=A.length>0?x.length+1:x.length,D=r.a.useCallback(function(e){var t=function(e){var t=Object(b.a)(e,Object(y.a)(e));return t<3||t>363}(e),r=function(e){var t=Object(b.a)(e,Object(v.a)(e));return t<3||t>29}(e),o=Object(g.a)(e,"y"),c=Object(g.a)(e,"MMMM");(!a.month&&!r||!a.year&&!t||a.month&&r||a.year&&t||o!==a.year||c!==a.month)&&n({year:t?"":o,month:r?"":c})},[a]);return r.a.createElement("div",{className:G.a.storyline,ref:o},c.height&&r.a.createElement(d.a,{isItemLoaded:N,itemCount:I,loadMoreItems:M},function(e){var t=e.onItemsRendered,a=e.ref;return r.a.createElement(u.a,{height:c.height,width:c.width,itemCount:I,itemData:x,itemSize:40,layout:"horizontal",overscanCount:2,onItemsRendered:function(e){var a=x[e.visibleStartIndex]?x[e.visibleStartIndex]:[null],n=Object(i.a)(a,1)[0];t(e),n&&D(n)},ref:a},function(e){var t=e.index,a=e.style,n=e.data[t]||[],o=Object(i.a)(n,2),c=o[0],s=o[1],m=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?z(a,!0).forEach(function(t){Object(l.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):z(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},a,{left:a.left+20});return N(t)?r.a.createElement(T,{style:m,date:c,posts:s,selectedUrl:O,setSelectedUrl:_,verticalScale:C}):r.a.createElement("div",{className:G.a.column,style:m},'"..."')})}),r.a.createElement("div",{className:G.a.fixedYear},a.year),r.a.createElement("div",{className:G.a.fixedMonth},a.month))},J=a(16),W=a.n(J);var Y=function(){return r.a.createElement("main",{className:W.a.app},r.a.createElement(B,null),r.a.createElement("div",{className:W.a.attribution},r.a.createElement("p",null,"Get the full"," ",r.a.createElement("a",{href:"https://drive.google.com/open?id=1GHJROCkmbGTE6K9WfCQ8z636aGuTcqIB",target:"_blank",rel:"noopener noreferrer"},"dataset")," "),r.a.createElement("p",null,r.a.createElement("a",{href:"https://pyzhianov.github.io/"},"Contact")," the developer")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(56);c.a.render(r.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.64afc8e1.chunk.js.map