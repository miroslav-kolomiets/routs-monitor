(window["webpackJsonprouts-monitor"]=window["webpackJsonprouts-monitor"]||[]).push([[0],{128:function(e,t,a){},129:function(e,t,a){},131:function(e,t,a){},132:function(e,t,a){},133:function(e,t,a){},134:function(e,t,a){},135:function(e,t,a){},136:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(27),o=a.n(c),l=a(24),i=a(61),s=a(22),u=a(63);function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(a,!0).forEach(function(t){Object(u.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{data:"",startDate:"",endDate:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_DATA":return d({},e,{data:t.data});case"START_DATE":return d({},e,{startDate:t.startDate});case"END_DATE":return d({},e,{endDate:t.endDate});default:return e}},f=a(64),h=(a(77),a(35)),b=a(23),v=a(6),g=a(7),E=a(9),y=a(8),O=a(10),j=(a(78),a(12));function w(e){for(var t=1350,a=j.h("#chart").append("svg").attr("width",t).attr("height",1e3).attr("class","svg"),n=j.k("%Y-%m-%d"),r=j.f().domain([j.d(e,function(e){return n(e.startTime)}),j.c(e,function(e){return n(e.endTime)})]).range([0,1200]),c=[],o=0;o<e.length;o++)c.push(e[o].type);var l=c;function i(e){for(var t=e.length,a={};t;)a[e[--t]]=(a[e[t]]||0)+1;return a}c=function(e){for(var t={},a=[],n=0,r=e.length;n<r;++n)t.hasOwnProperty(e[n])||(t[e[n]]=!0,a.push(e[n]));return a}(c),function(e,t,o){j.e().domain([0,c.length]).range(["#00B9FA","#F95002"]).interpolate(j.b);(function(e,t,n,c){var o=j.a(r).ticks(j.i,1).tickSize(-c+t+20,0,0).tickFormat(j.j("%B %e, %Y %I %p"));a.append("g").attr("class","grid").attr("stroke","black").attr("stroke-dasharray","5,5").attr("transform","translate("+e+", "+(c-50)+")").call(o).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("transform","matrix(-0.00 ,-1.00, 1.00, -0.00, 5, -75)").attr("stroke","none").attr("font-size",14).attr("dy","1em")})(75,75,0,o),function(e,t,o,l,i,s,u,m){a.append("g").selectAll("rect").data(e).enter().append("rect").attr("x",0).attr("y",function(e,a){return a*t+o-2}).attr("width",function(e){return u-l/2}).attr("height",t).attr("fill",function(e){for(var t=0;t<c.length;t++)if(e.type===c[t])return"#fff"}).attr("class","main-block").attr("opacity",.2);var d=a.append("g").selectAll("rect").data(e).enter(),p=d.append("rect").attr("rx",3).attr("ry",3).attr("x",function(e){return r(n(e.startTime))+l}).attr("y",function(e,a){return a*t+o}).attr("width",function(e){return r(n(e.endTime))-r(n(e.startTime))}).attr("height",i).attr("stroke","none").attr("fill",function(e){for(var t=0;t<c.length;t++)if(e.type===c[t])return"#7791ad"});d.append("text").text(function(e){return e.task}).attr("x",function(e){return(r(n(e.endTime))-r(n(e.startTime)))/2+r(n(e.startTime))+l}).attr("y",function(e,a){return a*t+24+o}).attr("font-size",16).attr("text-anchor","middle").attr("text-height",i).attr("fill","#fff"),d.append("text").text(function(e){return e.load}).attr("x",function(e){return(r(n(e.endTime))-r(n(e.startTime)))/2+r(n(e.startTime))+l}).attr("y",function(e,a){return a*t+44+o}).attr("font-size",16).attr("text-anchor","middle").attr("text-height",i).attr("fill","#fff");p.on("click",function(e){var t;t='<p class="tag-details">'.concat(j.g(this).data()[0].details,'</p>\n          <p class="tag-date">\n          <span class="tag-date__label">Date:</span> ').concat(j.g(this).data()[0].startTime,'</p>\n          <p class="tag-time">\n          <span class="tag-time__label">Time:</span> ').concat(j.g(this).data()[0].startTime,'</p>\n          <div class="tag__controls">\n            <div class="tag__controls-row">\n              <button class="btn btn-secondary">Experiment</button>\n              <button class="btn btn-secondary">Kibana</button>\n            </div>\n            <div class="tag__controls-row">\n              <button class="btn btn-secondary">Funnel</button>\n              <button class="btn btn-secondary">Update</button>\n            </div>\n          </div>');var a=document.getElementById("tag"),n=this.x.animVal.value+this.width.animVal.value/2-120+"px",r=this.y.animVal.value+65+"px";a.innerHTML=t,a.style.top=r,a.style.left=n,a.style.display="block",document.addEventListener("click",function(e){var t=document.getElementById("tag"),a=e.target;do{if(a==t)return;a=a.parentNode}while(a);"block"===t.style.display&&console.log("block")})}).on("mouseout",function(){document.getElementById("tag")})}(e,64,75,75,60,0,t),function(e,t,n,r,o){for(var s=[],u=0,m=0;m<c.length;m++)s[m]=[c[m],(d=c[m],p=l,i(p)[d]||0)];var d,p;a.append("g").selectAll("text").data(s).enter().append("text").text(function(e){return e[0]}).attr("x",10).attr("y",function(a,n){if(!(n>0))return a[1]*e/2+t;for(var r=0;r<n;r++)return u+=s[n-1][1],a[1]*e/2+u*e+t}).attr("font-size",14).attr("text-anchor","start").attr("text-height",14).attr("fill",function(e){for(var t=0;t<c.length;t++)if(e[0]===c[t])return"#414141"})}(64,75)}(e,t,1e3)}var N=function(e){function t(){return Object(v.a)(this,t),Object(E.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(g.a)(t,[{key:"componentDidUpdate",value:function(){document.getElementById("chart").innerHTML=null,w(this.props.data)}},{key:"render",value:function(){return r.a.createElement("div",{id:"container"},r.a.createElement("div",{id:"chart"}),r.a.createElement("div",{id:"tag",className:"tag"}))}}]),t}(r.a.Component);a(79);var k=function(){var e=Object(b.g)();return r.a.createElement("div",{className:"page-404"},r.a.createElement("p",{className:"page-404__error"},r.a.createElement("span",{className:"error"},"Error:")," ","Page"," ",r.a.createElement("span",{className:"error-href"},e.pathname)," ","Not Found"),r.a.createElement("p",{className:"page-404__message"},"We apologize for any inconvenience this may have caused."))},_=(a(83),function(e){function t(){return Object(v.a)(this,t),Object(E.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.className,n=e.labelclassname,c=e.type,o=e.name,l=e.label,i=e.value,s=e.onClick,u=e.onChange,m=e.error,d=e.checked;return r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{className:n,htmlFor:t},l),r.a.createElement("button",{className:a,id:t,htmlFor:t,autoComplete:t,type:c,name:o,checked:d,onChange:u,onClick:s},i),m&&r.a.createElement("div",{className:"error invalid-feedback"},m))}}]),t}(r.a.Component)),D=(a(84),function(e){function t(){return Object(v.a)(this,t),Object(E.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.className,n=e.type,c=e.name,o=e.placeholder,l=e.value,i=e.onClick,s=e.onChange,u=e.checked;return r.a.createElement("input",{className:a,id:t,placeholder:o,htmlFor:t,autoComplete:t,type:n,name:c,value:l,onClick:i,checked:u,onChange:s})}}]),t}(r.a.Component)),x=a(58),T=a.n(x),C=(a(128),function(e){function t(){return Object(v.a)(this,t),Object(E.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.labelclassname,n=e.label,c=e.error;return r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{className:a,htmlFor:t},n),r.a.createElement("select",{className:"custom-select",id:t},r.a.createElement("option",{defaultValue:!0},"Quick ranges"),r.a.createElement("option",{value:"1"},"Last 30 minutes"),r.a.createElement("option",{value:"2"},"Yesterday"),r.a.createElement("option",{value:"3"},"Last week")),c&&r.a.createElement("div",{className:"error invalid-feedback"},c))}}]),t}(r.a.Component)),M=(a(129),a(130),[{value:"Last 30 minutes",label:"Last 30 minutes"},{value:"Today",label:"Today"},{value:"Yesterday",label:"Yesterday"},{value:"Last week",label:"Last week"}]);var F=function(){var e=Object(s.c)(function(e){return e}),t=Object(s.b)();return r.a.createElement("form",{className:"form"},r.a.createElement("div",{className:"form__row"},r.a.createElement("div",{className:"form__group form__column"},r.a.createElement("label",{className:"form-label",htmlFor:"from"},"From:"),r.a.createElement(T.a,{selected:e.startDate,timeInputLabel:"Time:",dateFormat:"MM/dd/yyyy h:mm aa",showTimeInput:!0,peekNextMonth:!0,showMonthDropdown:!0,showYearDropdown:!0,dropdownMode:"select",maxDate:new Date,customInput:r.a.createElement(D,{className:"input-field"}),onChange:function(e){t({type:"START_DATE",startDate:e})}}),r.a.createElement("small",{id:"dateHelp",className:"form-text text-muted"},"YYYY-MM-DD HH:MM")),r.a.createElement("div",{className:"form__group form__column"},r.a.createElement("label",{className:"form-label",htmlFor:"to"},"To:"),r.a.createElement(T.a,{selected:e.endDate,timeInputLabel:"Time:",dateFormat:"MM/dd/yyyy h:mm aa",showTimeInput:!0,peekNextMonth:!0,showMonthDropdown:!0,showYearDropdown:!0,dropdownMode:"select",maxDate:new Date,customInput:r.a.createElement(D,{className:"input-field"}),onChange:function(e){t({type:"END_DATE",endDate:e})}}),r.a.createElement("small",{id:"dateHelp",className:"form-text text-muted"},"YYYY-MM-DD HH:MM"))),r.a.createElement("div",{className:"form__row"},r.a.createElement(C,{options:M,placeholder:"Quick ranges"}),r.a.createElement(_,{className:"btn btn-primary",value:"Update",onClick:function(a){a.preventDefault();var n=e.data.filter(function(t){var a=t.datesRange||{};return(a=(a=Object.keys(a)).map(function(e){return new Date(e)})).filter(function(t){return t>=e.startDate&&t<=e.endDate}).length>0});t({type:"FETCH_DATA",data:n}),console.log(n)}})))},A=(a(131),function(e){function t(){return Object(v.a)(this,t),Object(E.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this.props,t=e.content,a=e.className;return r.a.createElement("p",{className:a},t)}}]),t}(r.a.Component)),Y=(a(132),function(e){function t(){return Object(v.a)(this,t),Object(E.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"logo"},r.a.createElement(A,{className:"text text--size--36",content:"JSFiller"}),r.a.createElement(A,{className:"text text--size--22",content:"Routes monitor"}))}}]),t}(r.a.Component)),I=(a(133),function(e){function t(){return Object(v.a)(this,t),Object(E.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"header"},r.a.createElement(Y,null),r.a.createElement("div",{className:"column"},r.a.createElement(F,{handleSubmit:this.props.handleSubmit})))}}]),t}(r.a.Component));a(134);var L=function(){var e=Object(b.f)();return r.a.createElement("div",{className:"login-page"},r.a.createElement("form",{className:"login-form"},r.a.createElement("label",{className:"from",htmlFor:"from"},r.a.createElement(D,{className:"login-form__input",placeholder:"Email"})),r.a.createElement("label",{className:"to",htmlFor:"to"},r.a.createElement(D,{className:"login-form__input",placeholder:"Password"})),r.a.createElement("div",{className:"login-form__row"},r.a.createElement(_,{className:"btn btn-primary",value:"Login",onClick:function(t){t.preventDefault(),e.push("/main")}}))))};a(135);var H=function(){var e=Object(s.c)(function(e){return e}),t=Object(s.b)();function a(){return function(e){fetch("./data.json").then(function(e){return e.json()}).then(function(t){e({type:"FETCH_DATA",data:t})})}}return Object(n.useEffect)(function(){t(a())},[]),r.a.createElement(h.a,{basename:"/routs-monitor"},r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,path:"/"},r.a.createElement(L,null)),r.a.createElement(b.a,{path:"/main"},r.a.createElement("div",null,r.a.createElement(I,null),r.a.createElement(N,{data:e.data}))),r.a.createElement(b.a,{path:"*"},r.a.createElement(k,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=Object(l.createStore)(p,Object(l.compose)(Object(l.applyMiddleware)(i.a),Object(f.devToolsEnhancer)()));o.a.render(r.a.createElement(s.a,{store:P},r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},68:function(e,t,a){e.exports=a(136)},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){}},[[68,1,2]]]);
//# sourceMappingURL=main.18311a33.chunk.js.map