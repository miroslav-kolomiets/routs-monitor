(window["webpackJsonprouts-monitor"]=window["webpackJsonprouts-monitor"]||[]).push([[0],{115:function(t,e,a){},116:function(t,e,a){},118:function(t,e,a){},119:function(t,e,a){},120:function(t,e,a){},121:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(20),c=a.n(o),l=a(18),i=a(50),s=a(26),u=a(52);function m(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}var d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{data:""},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FETCH_DATA":return function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?m(a,!0).forEach((function(e){Object(u.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):m(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},t,{data:e.data});default:return t}},f=a(53),p=(a(66),a(5)),h=a(6),b=a(8),v=a(7),y=a(9),g=(a(67),a(10));function O(t){for(var e=1350,a=g.h("#chart").append("svg").attr("width",e).attr("height",1e3).attr("class","svg"),n=g.k("%Y-%m-%d"),r=g.f().domain([g.d(t,(function(t){return n(t.startTime)})),g.c(t,(function(t){return n(t.endTime)}))]).range([0,1200]),o=[],c=0;c<t.length;c++)o.push(t[c].type);var l=o;function i(t){for(var e=t.length,a={};e;)a[t[--e]]=(a[t[e]]||0)+1;return a}o=function(t){for(var e={},a=[],n=0,r=t.length;n<r;++n)e.hasOwnProperty(t[n])||(e[t[n]]=!0,a.push(t[n]));return a}(o),function(t,e,c){g.e().domain([0,o.length]).range(["#00B9FA","#F95002"]).interpolate(g.b);(function(t,e,n,o){var c=g.a(r).ticks(g.i,1).tickSize(-o+e+20,0,0).tickFormat(g.j("%B %e, %Y %I %p"));a.append("g").attr("class","grid").attr("stroke","black").attr("stroke-dasharray","5,5").attr("transform","translate("+t+", "+(o-50)+")").call(c).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("transform","matrix(-0.00 ,-1.00, 1.00, -0.00, 5, -75)").attr("stroke","none").attr("font-size",14).attr("dy","1em")})(75,75,0,c),function(t,e,c,l,i,s,u,m){a.append("g").selectAll("rect").data(t).enter().append("rect").attr("x",0).attr("y",(function(t,a){return a*e+c-2})).attr("width",(function(t){return u-l/2})).attr("height",e).attr("fill",(function(t){for(var e=0;e<o.length;e++)if(t.type===o[e])return"#fff"})).attr("class","main-block").attr("opacity",.2);var d=a.append("g").selectAll("rect").data(t).enter(),f=d.append("rect").attr("rx",3).attr("ry",3).attr("x",(function(t){return r(n(t.startTime))+l})).attr("y",(function(t,a){return a*e+c})).attr("width",(function(t){return r(n(t.endTime))-r(n(t.startTime))})).attr("height",i).attr("stroke","none").attr("fill",(function(t){for(var e=0;e<o.length;e++)if(t.type===o[e])return"#7791ad"}));d.append("text").text((function(t){return t.task})).attr("x",(function(t){return(r(n(t.endTime))-r(n(t.startTime)))/2+r(n(t.startTime))+l})).attr("y",(function(t,a){return a*e+24+c})).attr("font-size",16).attr("text-anchor","middle").attr("text-height",i).attr("fill","#fff"),d.append("text").text((function(t){return t.load})).attr("x",(function(t){return(r(n(t.endTime))-r(n(t.startTime)))/2+r(n(t.startTime))+l})).attr("y",(function(t,a){return a*e+44+c})).attr("font-size",16).attr("text-anchor","middle").attr("text-height",i).attr("fill","#fff");f.on("click",(function(t){var e;e='<p class="text text--size--14">'.concat(g.g(this).data()[0].details,'</p>\n          <p class="text text--size--14">Date: ').concat(g.g(this).data()[0].startTime,'</p>\n          <p class="text text--size--14">Time: ').concat(g.g(this).data()[0].startTime,'</p>\n          <div class="tag__controls">\n            <div class="tag__controls-row">\n              <button class="btn btn-secondary">Experiment</button>\n              <button class="btn btn-secondary">Kibana</button>\n            </div>\n            <div class="tag__controls-row">\n              <button class="btn btn-secondary">Funnel</button>\n              <button class="btn btn-secondary">Update</button>\n            </div>\n          </div>');var a=document.getElementById("tag"),n=this.x.animVal.value+this.width.animVal.value/2-120+"px",r=this.y.animVal.value+65+"px";a.innerHTML=e,a.style.top=r,a.style.left=n,a.style.display="block"})).on("mouseout",(function(){document.getElementById("tag")}))}(t,64,75,75,60,0,e),function(t,e,n,r,c){for(var s=[],u=0,m=0;m<o.length;m++)s[m]=[o[m],(d=o[m],f=l,i(f)[d]||0)];var d,f;a.append("g").selectAll("text").data(s).enter().append("text").text((function(t){return t[0]})).attr("x",10).attr("y",(function(a,n){if(!(n>0))return a[1]*t/2+e;for(var r=0;r<n;r++)return u+=s[n-1][1],a[1]*t/2+u*t+e})).attr("font-size",14).attr("text-anchor","start").attr("text-height",14).attr("fill",(function(t){for(var e=0;e<o.length;e++)if(t[0]===o[e])return"#414141"}))}(64,75)}(t,e,1e3)}var j=function(t){function e(){return Object(p.a)(this,e),Object(b.a)(this,Object(v.a)(e).apply(this,arguments))}return Object(y.a)(e,t),Object(h.a)(e,[{key:"componentDidUpdate",value:function(){document.getElementById("chart").innerHTML=null,O(this.props.data)}},{key:"render",value:function(){return r.a.createElement("div",{id:"container"},r.a.createElement("div",{id:"chart"}),r.a.createElement("div",{id:"tag",className:"tag"}))}}]),e}(r.a.Component),E=(a(68),a(69),function(t){function e(){return Object(p.a)(this,e),Object(b.a)(this,Object(v.a)(e).apply(this,arguments))}return Object(y.a)(e,t),Object(h.a)(e,[{key:"render",value:function(){var t=this.props,e=t.id,a=t.className,n=t.labelclassname,o=t.type,c=t.name,l=t.label,i=t.value,s=t.onClick,u=t.onChange,m=t.error,d=t.checked;return r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{className:n,htmlFor:e},l),r.a.createElement("button",{className:a,id:e,htmlFor:e,autoComplete:e,type:o,name:c,checked:d,onChange:u,onClick:s},i),m&&r.a.createElement("div",{className:"error invalid-feedback"},m))}}]),e}(r.a.Component)),w=(a(70),function(t){function e(){return Object(p.a)(this,e),Object(b.a)(this,Object(v.a)(e).apply(this,arguments))}return Object(y.a)(e,t),Object(h.a)(e,[{key:"render",value:function(){var t=this.props,e=t.id,a=t.className,n=t.type,o=t.name,c=t.placeholder,l=t.value,i=t.onClick,s=t.onChange,u=t.checked;return r.a.createElement("input",{className:a,id:e,placeholder:c,htmlFor:e,autoComplete:e,type:n,name:o,value:l,onClick:i,checked:u,onChange:s})}}]),e}(r.a.Component)),k=a(47),x=a.n(k),N=(a(115),function(t){function e(){return Object(p.a)(this,e),Object(b.a)(this,Object(v.a)(e).apply(this,arguments))}return Object(y.a)(e,t),Object(h.a)(e,[{key:"render",value:function(){var t=this.props,e=t.id,a=t.labelclassname,n=t.label,o=t.error;return r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{className:a,htmlFor:e},n),r.a.createElement("select",{className:"custom-select",id:e},r.a.createElement("option",{defaultValue:!0},"Quick ranges"),r.a.createElement("option",{value:"1"},"Last 30 minutes"),r.a.createElement("option",{value:"2"},"Yesterday"),r.a.createElement("option",{value:"3"},"Last week")),o&&r.a.createElement("div",{className:"error invalid-feedback"},o))}}]),e}(r.a.Component)),D=(a(116),a(117),[{value:"Last 30 minutes",label:"Last 30 minutes"},{value:"Today",label:"Today"},{value:"Yesterday",label:"Yesterday"},{value:"Last week",label:"Last week"}]),T=function(t){function e(){var t,a;Object(p.a)(this,e);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(b.a)(this,(t=Object(v.a)(e)).call.apply(t,[this].concat(r)))).state={startDate:new Date,endDate:null},a.setStartDate=function(t){a.setState({startDate:t})},a.setEndDate=function(t){a.setState({endDate:t})},a}return Object(y.a)(e,t),Object(h.a)(e,[{key:"render",value:function(){var t=this;return r.a.createElement("form",{className:"form"},r.a.createElement("div",{className:"form__row"},r.a.createElement("div",{className:"form__group form__column"},r.a.createElement("label",{className:"from",htmlFor:"from"},"From:"),r.a.createElement(x.a,{selected:this.state.startDate,timeInputLabel:"Time:",dateFormat:"MM/dd/yyyy h:mm aa",showTimeInput:!0,peekNextMonth:!0,showMonthDropdown:!0,showYearDropdown:!0,dropdownMode:"select",customInput:r.a.createElement(w,{className:"input-field"}),onChange:function(e){return t.setStartDate(e)}}),r.a.createElement("small",{id:"dateHelp",className:"form-text text-muted"},"YYYY-MM-DD HH:MM")),r.a.createElement("div",{className:"form__group form__column"},r.a.createElement("label",{className:"to",htmlFor:"to"},"To:"),r.a.createElement(x.a,{selected:this.state.endDate,timeInputLabel:"Time:",dateFormat:"MM/dd/yyyy h:mm aa",showTimeInput:!0,peekNextMonth:!0,showMonthDropdown:!0,showYearDropdown:!0,dropdownMode:"select",customInput:r.a.createElement(w,{className:"input-field"}),onChange:function(e){return t.setEndDate(e)}}),r.a.createElement("small",{id:"dateHelp",className:"form-text text-muted"},"YYYY-MM-DD HH:MM"))),r.a.createElement("div",{className:"form__row"},r.a.createElement(N,{options:D,placeholder:"Quick ranges"}),r.a.createElement(E,{className:"btn btn-primary",value:"Update",onClick:this.props.handleSubmit})))}}]),e}(r.a.Component),_=(a(118),function(t){function e(){return Object(p.a)(this,e),Object(b.a)(this,Object(v.a)(e).apply(this,arguments))}return Object(y.a)(e,t),Object(h.a)(e,[{key:"render",value:function(){var t=this.props,e=t.content,a=t.className;return r.a.createElement("p",{className:a},e)}}]),e}(r.a.Component)),C=(a(119),function(t){function e(){return Object(p.a)(this,e),Object(b.a)(this,Object(v.a)(e).apply(this,arguments))}return Object(y.a)(e,t),Object(h.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"logo"},r.a.createElement(_,{className:"text text--size--36",content:"JSFiller"}),r.a.createElement(_,{className:"text text--size--22",content:"Routes monitor"}))}}]),e}(r.a.Component)),M=(a(120),function(t){function e(){return Object(p.a)(this,e),Object(b.a)(this,Object(v.a)(e).apply(this,arguments))}return Object(y.a)(e,t),Object(h.a)(e,[{key:"render",value:function(){return r.a.createElement("header",{className:"header"},r.a.createElement(C,null),r.a.createElement("div",{className:"column"},r.a.createElement(T,{handleSubmit:this.props.handleSubmit})))}}]),e}(r.a.Component));var F=function(){var t=Object(s.c)((function(t){return t})),e=Object(s.b)();function a(){return function(t){fetch("./data.json").then((function(t){return t.json()})).then((function(e){t({type:"FETCH_DATA",data:e}),console.log("data:",e)}))}}return Object(n.useEffect)((function(){e(a())}),[]),r.a.createElement("div",null,r.a.createElement(M,{handleSubmit:function(t){t.preventDefault(),e(a())}}),r.a.createElement(j,{data:t.data}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y=Object(l.createStore)(d,Object(l.compose)(Object(l.applyMiddleware)(i.a),Object(f.devToolsEnhancer)()));c.a.render(r.a.createElement(s.a,{store:Y},r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},57:function(t,e,a){t.exports=a(121)},66:function(t,e,a){},67:function(t,e,a){},68:function(t,e,a){},69:function(t,e,a){},70:function(t,e,a){}},[[57,1,2]]]);
//# sourceMappingURL=main.9b8bd73d.chunk.js.map