(window["webpackJsonprouts-monitor"]=window["webpackJsonprouts-monitor"]||[]).push([[0],{130:function(t,e,a){},131:function(t,e,a){},133:function(t,e,a){},134:function(t,e,a){},135:function(t,e,a){},136:function(t,e,a){},137:function(t,e,a){},138:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),c=a(27),o=a.n(c),l=a(24),i=a(61),s=a(22),m=a(63);function u(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,n)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(a,!0).forEach(function(e){Object(m.a)(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{data:"",startDate:new Date,endDate:new Date},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FETCH_DATA":return d({},t,{data:e.data});case"START_DATE":return d({},t,{startDate:e.startDate});case"END_DATE":return d({},t,{endDate:e.endDate});default:return t}},f=a(64),h=(a(78),a(35)),b=a(23),y=(a(79),a(12));function v(t){for(var e=1400,a=y.h("#chart").append("svg").attr("width",e).attr("height",1e3).attr("class","svg"),n=y.k("%Y-%m-%d"),r=y.f().domain([y.d(t,function(t){return n(t.startTime)}),y.c(t,function(t){return n(t.endTime)})]).range([0,1250]),c=[],o=0;o<t.length;o++)c.push(t[o].type);var l=c;function i(t){for(var e=t.length,a={};e;)a[t[--e]]=(a[t[e]]||0)+1;return a}c=function(t){for(var e={},a=[],n=0,r=t.length;n<r;++n)e.hasOwnProperty(t[n])||(e[t[n]]=!0,a.push(t[n]));return a}(c),function(t,e,o){y.e().domain([0,c.length]).range(["#00B9FA","#F95002"]).interpolate(y.b);(function(t,e,n,c){var o=y.a(r).ticks(y.i,1).tickSize(-c+e+20,0,0).tickFormat(y.j("%B %e, %Y %I %p"));a.append("line").style("stroke","#2c435c").attr("x1",75).attr("y1",750).attr("x2",n-40).attr("y2",750),a.append("svg").attr("width",20).attr("height",20).attr("x",n-60).attr("y",745).append("polyline").attr("points","10 5, 0 0, 0 10").style("fill","#2c435c"),a.append("line").style("stroke","#2c435c").attr("x1",75).attr("y1",40).attr("x2",75).attr("y2",c-250),a.append("svg").attr("width",20).attr("height",20).attr("x",70).attr("y",30).append("polyline").attr("points","10 10, 5 0, 0 10").style("fill","#2c435c"),a.append("text").attr("x",45).attr("y",20).text("Routes").attr("font-family","sans-serif").attr("font-size","18px").attr("font-weight","bold").attr("fill","#414141"),a.append("text").attr("x",n-200).attr("y",c-220).text("Events Timeline").attr("font-family","sans-serif").attr("font-size","18px").attr("font-weight","bold").attr("fill","#414141");a.append("g").attr("class","grid").attr("stroke","black").attr("stroke-dasharray","5,5").attr("transform","translate("+t+", "+(c-50)+")").call(o).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("transform","matrix(-0.00 ,-1.00, 1.00, -0.00, 5, -75)").attr("stroke","none").attr("font-size",14).attr("dy","1em")})(75,75,e,o),function(t,e,o,l,i,s,m,u){a.append("g").selectAll("rect").data(t).enter().append("rect").attr("x",0).attr("y",function(t,a){return a*e+o-2}).attr("width",function(t){return m-l/2}).attr("height",e).attr("fill",function(t){for(var e=0;e<c.length;e++)if(t.type===c[e])return"#fff"}).attr("class","main-block").attr("opacity",.2),a.append("g").selectAll("rect").data(t).enter().append("line").style("stroke","#777").style("stroke-dasharray","5").attr("x1",65).attr("y1",function(t,a){return a*e+o-2}).attr("x2",m-70).attr("y2",function(t,a){return a*e+o-2}).attr("width",function(t){return m-l/2}).attr("fill","#red").attr("opacity",.5);var d=a.append("g").selectAll("rect").data(t).enter(),p=d.append("rect").attr("rx",3).attr("ry",3).attr("x",function(t){return r(n(t.startTime))+l}).attr("y",function(t,a){return a*e+o}).attr("width",function(t){return r(n(t.endTime))-r(n(t.startTime))}).attr("height",i).attr("stroke","none").attr("fill",function(t){for(var e=0;e<c.length;e++)if(t.type===c[e])return"#7791ad"});d.append("text").text(function(t){return t.task}).attr("x",function(t){return(r(n(t.endTime))-r(n(t.startTime)))/2+r(n(t.startTime))+l}).attr("y",function(t,a){return a*e+24+o}).attr("font-size",16).attr("text-anchor","middle").attr("text-height",i).attr("fill","#fff"),d.append("text").text(function(t){return t.load}).attr("x",function(t){return(r(n(t.endTime))-r(n(t.startTime)))/2+r(n(t.startTime))+l}).attr("y",function(t,a){return a*e+44+o}).attr("font-size",16).attr("text-anchor","middle").attr("text-height",i).attr("fill","#fff");p.on("click",function(t){var e;e='<p class="tag-details">'.concat(y.g(this).data()[0].details,'</p>\n          <p class="tag-date">\n          <span class="tag-date__label">Date:</span> ').concat(y.g(this).data()[0].startTime,'</p>\n          <p class="tag-time">\n          <span class="tag-time__label">Time:</span> ').concat(y.g(this).data()[0].startTime,'</p>\n          <div class="tag__controls">\n            <div class="tag__controls-row">\n              <button class="btn btn-secondary">Experiment</button>\n              <button class="btn btn-secondary">Kibana</button>\n            </div>\n            <div class="tag__controls-row">\n              <button class="btn btn-secondary">Funnel</button>\n              <button class="btn btn-secondary">Update</button>\n            </div>\n          </div>');var a=document.getElementById("tag"),n=this.x.animVal.value+this.width.animVal.value/2-120+"px",r=this.y.animVal.value+65+"px";a.innerHTML=e,a.style.top=r,a.style.left=n,a.style.display="block",document.addEventListener("click",function(t){var e=document.getElementById("tag"),a=t.target;do{if(a==e)return;a=a.parentNode}while(a);"block"===e.style.display&&console.log("block")})}).on("mouseout",function(){document.getElementById("tag")})}(t,64,75,75,60,0,e),function(t,e,n,r,o){for(var s=[],m=0,u=0;u<c.length;u++)s[u]=[c[u],(d=c[u],p=l,i(p)[d]||0)];var d,p;a.append("g").selectAll("text").data(s).enter().append("text").text(function(t){return t[0]}).attr("x",10).attr("y",function(a,n){if(!(n>0))return a[1]*t/2+e;for(var r=0;r<n;r++)return m+=s[n-1][1],a[1]*t/2+m*t+e}).attr("font-size",14).attr("text-anchor","start").attr("text-height",14).attr("fill",function(t){for(var e=0;e<c.length;e++)if(t[0]===c[e])return"#414141"})}(64,75)}(t,e,1e3)}var g=function(t){return Object(n.useEffect)(function(){document.getElementById("chart").innerHTML=null,v(t.data)},[]),r.a.createElement("div",{id:"container"},r.a.createElement("div",{id:"chart"}),r.a.createElement("div",{id:"tag",className:"tag"}))};a(80);var E=function(){var t=Object(b.g)();return r.a.createElement("div",{className:"page-404"},r.a.createElement("p",{className:"page-404__error"},r.a.createElement("span",{className:"error"},"Error:")," ","Page"," ",r.a.createElement("span",{className:"error-href"},t.pathname)," ","Not Found"),r.a.createElement("p",{className:"page-404__message"},"We apologize for any inconvenience this may have caused."))},O=a(6),j=a(7),w=a(9),x=a(8),N=a(10),k=a(65),D=a.n(k),_=(a(84),function(t){function e(){return Object(O.a)(this,e),Object(w.a)(this,Object(x.a)(e).apply(this,arguments))}return Object(N.a)(e,t),Object(j.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"loader-wrapper"},r.a.createElement("p",{className:"loader-heading"},"No data for display, select another time range."),r.a.createElement("img",{src:D.a,alt:"Loader",className:"loader"}))}}]),e}(r.a.Component)),T=(a(85),function(t){function e(){return Object(O.a)(this,e),Object(w.a)(this,Object(x.a)(e).apply(this,arguments))}return Object(N.a)(e,t),Object(j.a)(e,[{key:"render",value:function(){var t=this.props,e=t.id,a=t.className,n=t.labelclassname,c=t.type,o=t.name,l=t.label,i=t.value,s=t.onClick,m=t.onChange,u=t.error,d=t.checked;return r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{className:n,htmlFor:e},l),r.a.createElement("button",{className:a,id:e,htmlFor:e,autoComplete:e,type:c,name:o,checked:d,onChange:m,onClick:s},i),u&&r.a.createElement("div",{className:"error invalid-feedback"},u))}}]),e}(r.a.Component)),C=(a(86),function(t){function e(){return Object(O.a)(this,e),Object(w.a)(this,Object(x.a)(e).apply(this,arguments))}return Object(N.a)(e,t),Object(j.a)(e,[{key:"render",value:function(){var t=this.props,e=t.id,a=t.className,n=t.type,c=t.name,o=t.placeholder,l=t.value,i=t.onClick,s=t.onChange,m=t.checked;return r.a.createElement("input",{className:a,id:e,placeholder:o,htmlFor:e,autoComplete:e,type:n,name:c,value:l,onClick:i,checked:m,onChange:s})}}]),e}(r.a.Component)),M=a(58),F=a.n(M),A=(a(130),function(t){function e(){return Object(O.a)(this,e),Object(w.a)(this,Object(x.a)(e).apply(this,arguments))}return Object(N.a)(e,t),Object(j.a)(e,[{key:"render",value:function(){var t=this.props,e=t.id,a=t.labelclassname,n=t.label,c=t.error;return r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{className:a,htmlFor:e},n),r.a.createElement("select",{className:"custom-select",id:e},r.a.createElement("option",{defaultValue:!0},"Quick ranges"),r.a.createElement("option",{value:"1"},"Last 30 minutes"),r.a.createElement("option",{value:"2"},"Yesterday"),r.a.createElement("option",{value:"3"},"Last week")),c&&r.a.createElement("div",{className:"error invalid-feedback"},c))}}]),e}(r.a.Component)),Y=(a(131),a(132),[{value:"Last 30 minutes",label:"Last 30 minutes"},{value:"Today",label:"Today"},{value:"Yesterday",label:"Yesterday"},{value:"Last week",label:"Last week"}]);var L=function(){var t=Object(s.c)(function(t){return t}),e=Object(s.b)();function a(e){var a=e.filter(function(e){var a=e.datesRange||{};return(a=(a=Object.keys(a)).map(function(t){return new Date(t)})).filter(function(e){return e>=t.startDate&&e<=t.endDate}).length>0});if(a.length>0)return a}return r.a.createElement("form",{className:"form"},r.a.createElement("div",{className:"form__row"},r.a.createElement("div",{className:"form__group form__column"},r.a.createElement("label",{className:"form-label",htmlFor:"from"},"From:"),r.a.createElement(F.a,{selected:t.startDate,timeInputLabel:"Time:",dateFormat:"yyyy-MM-dd hh:mm",showTimeInput:!0,peekNextMonth:!0,showMonthDropdown:!0,showYearDropdown:!0,dropdownMode:"select",maxDate:new Date,customInput:r.a.createElement(C,{className:"input-field"}),onChange:function(t){e({type:"START_DATE",startDate:t})}}),r.a.createElement("small",{id:"dateHelp",className:"form-text text-muted"},"YYYY-MM-DD HH:MM")),r.a.createElement("div",{className:"form__group form__column"},r.a.createElement("label",{className:"form-label",htmlFor:"to"},"To:"),r.a.createElement(F.a,{selected:t.endDate,timeInputLabel:"Time:",dateFormat:"yyyy-MM-dd hh:mm",showTimeInput:!0,peekNextMonth:!0,showMonthDropdown:!0,showYearDropdown:!0,dropdownMode:"select",maxDate:new Date,customInput:r.a.createElement(C,{className:"input-field"}),onChange:function(t){e({type:"END_DATE",endDate:t})}}),r.a.createElement("small",{id:"dateHelp",className:"form-text text-muted"},"YYYY-MM-DD HH:MM"))),r.a.createElement("div",{className:"form__row"},r.a.createElement(A,{options:Y,placeholder:"Quick ranges"}),r.a.createElement(T,{className:"btn btn-primary",value:"Update",onClick:function(t){t.preventDefault(),fetch("./data.json").then(function(t){return t.json()}).then(function(t){e({type:"FETCH_DATA",data:a(t)})})}})))},I=(a(133),function(t){function e(){return Object(O.a)(this,e),Object(w.a)(this,Object(x.a)(e).apply(this,arguments))}return Object(N.a)(e,t),Object(j.a)(e,[{key:"render",value:function(){var t=this.props,e=t.content,a=t.className;return r.a.createElement("p",{className:a},e)}}]),e}(r.a.Component)),P=(a(134),function(t){function e(){return Object(O.a)(this,e),Object(w.a)(this,Object(x.a)(e).apply(this,arguments))}return Object(N.a)(e,t),Object(j.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"logo"},r.a.createElement(I,{className:"text text--size--36",content:"JSFiller"}),r.a.createElement(I,{className:"text text--size--22",content:"Routes monitor"}))}}]),e}(r.a.Component)),z=(a(135),function(t){function e(){return Object(O.a)(this,e),Object(w.a)(this,Object(x.a)(e).apply(this,arguments))}return Object(N.a)(e,t),Object(j.a)(e,[{key:"render",value:function(){return r.a.createElement("header",{className:"header"},r.a.createElement(P,null),r.a.createElement("div",{className:"column"},r.a.createElement(L,{handleSubmit:this.props.handleSubmit})))}}]),e}(r.a.Component));a(136);var H=function(){var t=Object(b.f)();return r.a.createElement("div",{className:"login-page"},r.a.createElement("form",{className:"login-form"},r.a.createElement("label",{className:"from",htmlFor:"from"},r.a.createElement(C,{className:"login-form__input",placeholder:"Email"})),r.a.createElement("label",{className:"to",htmlFor:"to"},r.a.createElement(C,{className:"login-form__input",placeholder:"Password"})),r.a.createElement("div",{className:"login-form__row"},r.a.createElement(T,{className:"btn btn-primary",value:"Login",onClick:function(e){e.preventDefault(),t.push("/main")}}))))};a(137);var S=function(){var t=Object(s.c)(function(t){return t});return Object(s.b)(),r.a.createElement(h.a,{basename:"/routs-monitor"},r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,path:"/"},r.a.createElement(H,null)),r.a.createElement(b.a,{path:"/main"},r.a.createElement(n.Fragment,null,r.a.createElement(z,null),t.data?r.a.createElement(g,{data:t.data}):r.a.createElement(_,null))),r.a.createElement(b.a,{path:"*"},r.a.createElement(E,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=Object(l.createStore)(p,Object(l.compose)(Object(l.applyMiddleware)(i.a),Object(f.devToolsEnhancer)()));o.a.render(r.a.createElement(s.a,{store:B},r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},65:function(t,e,a){t.exports=a.p+"static/media/loader.fb5bf093.svg"},69:function(t,e,a){t.exports=a(138)},78:function(t,e,a){},79:function(t,e,a){},80:function(t,e,a){},84:function(t,e,a){},85:function(t,e,a){},86:function(t,e,a){}},[[69,1,2]]]);
//# sourceMappingURL=main.66bb5455.chunk.js.map