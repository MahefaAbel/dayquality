(this["webpackJsonpday-quality"]=this["webpackJsonpday-quality"]||[]).push([[0],{24:function(a,t,e){a.exports=e(39)},29:function(a,t,e){},30:function(a,t,e){},33:function(a,t,e){},39:function(a,t,e){"use strict";e.r(t);var n=e(19),o=e.n(n);e(29),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=e(1),c=e.n(r),i=e(20),l=e(6),s=e(8),u=e(9),h=e(11),m=e(10),d=(e(30),e(13)),p=e.n(d),v=function(){function a(){Object(s.a)(this,a)}return Object(u.a)(a,null,[{key:"convertToMalagasyName",value:function(a,t,e){var n=this.getDiffsDate(a,t,e)%28,o=this.getDateNameMalagasy(n);return"".concat(o)}},{key:"getDiffsDate",value:function(a,t,e){var n=parseInt("".concat(t))+1,o=p()("".concat(e,"/").concat(n,"/").concat(a),"D/M/YYYY"),r=this.getFirstDateReference(),c=p()("".concat(r),"YYYY-M-D");return o.diff(c,"days")}},{key:"getFirstDateReference",value:function(){var a=null,t=Object.keys(y);return t.length>0&&(a=t[0]),a}},{key:"getDateNameMalagasy",value:function(a){var t=null,e=Object.values(y);return e.length>0&&(t=e[a]),t}}]),a}(),y={"2019-07-22":"Lohalakaosy","2019-07-23":"Tsidina","2019-07-24":"Ranomaso","2019-07-25":"Tratrany","2019-07-26":"Sandramody","2019-07-27":"Adalomanara","2019-07-28":"Faradalo","2019-07-29":"Lohalohotsy","2019-07-30":"Faralohotsy","2019-07-31":"Vavalamadina","2019-08-01":"Handrona","2019-08-02":"Soria","2019-08-03":"Adaorovokatra","2019-08-04":"Faralahaka","2019-08-05":"Ravina","2019-08-06":"Vahany","2019-08-07":"Vavasorotany","2019-08-08":"Kokony","2019-08-09":"Hifiny","2019-08-10":"Alasata","2019-08-11":"Haravoana","2019-08-12":"Soambola","2019-08-13":"Alaova","2019-08-14":"Alakaforo","2019-08-15":"Admizana","2019-08-16":"Kididy","2019-08-17":"Alakarabo","2019-08-18":"Fanagnorena"},f=function(a){Object(h.a)(e,a);var t=Object(m.a)(e);function e(){var a;Object(s.a)(this,e);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=t.call.apply(t,[this].concat(o))).state={},a}return Object(u.a)(e,[{key:"render",value:function(){var a=this.props.match.params.year,t=this.props.match.params.mounth,e=this.props.match.params.day,n=v.convertToMalagasyName(a,t,e);return c.a.createElement("div",{id:"container"},c.a.createElement("div",null,c.a.createElement("h2",null,"Detail pour ".concat(this.props.match.params.year,"-").concat(this.props.match.params.mounth,"-").concat(this.props.match.params.day)),c.a.createElement("div",null,c.a.createElement("span",{id:"detail-name"},"Anarana : ".concat(n)))))}}]),e}(r.Component),g=e(23),k=(e(32),e(33),function(a){Object(h.a)(e,a);var t=Object(m.a)(e);function e(){var a;Object(s.a)(this,e);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=t.call.apply(t,[this].concat(o))).state={date:new Date},a.onChange=function(t){a.setState({date:t}),a.props.history.push("/detail/".concat(t.getFullYear(),"/").concat(t.getMonth(),"/").concat(t.getDate()))},a}return Object(u.a)(e,[{key:"render",value:function(){return c.a.createElement("div",{id:"calendarContainer"},c.a.createElement("div",{id:"calendarWidthContainer"},c.a.createElement(g.a,{onChange:this.onChange,value:this.state.date})))}}]),e}(r.Component)),b=c.a.createElement(c.a.StrictMode,null,c.a.createElement(i.a,null,c.a.createElement("div",null,c.a.createElement(l.a,{path:"/",component:k}),c.a.createElement(l.a,{path:"/detail/:year/:mounth/:day",component:f}))));o.a.render(b,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(a){a.unregister()})).catch((function(a){console.error(a.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.612cdfc0.chunk.js.map