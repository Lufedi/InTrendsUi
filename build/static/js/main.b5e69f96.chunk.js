(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{253:function(e,t,a){e.exports=a(589)},258:function(e,t,a){},259:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},260:function(e,t,a){},589:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(22),i=a.n(o),c=(a(258),a(78)),s=a(79),u=a(84),l=a(80),m=a(85),p=(a(259),a(260),a(211)),h=a(35),f=a.n(h),d=a(86),b=a(33),g=a(226),v=a.n(g),y=a(229),j=a.n(y),k=a(224),w=a.n(k),O=a(227),E=a.n(O),T=a(228),x=a.n(T),M=a(77),C=a.n(M),J=a(591),D=a(212),L=a.n(D).a.create({baseURL:"https://in-trends.herokuapp.com",timeout:3e4}),S=function(e){return console.log(e),L.get("/terms/records",{params:{t:e}})},W=a(87),Y=a.n(W),N=a(36),P=["#f44336","#8bc34a","#e91e63","#9c27b0","#4caf50","#795548","#3f51b5","#9e9e9e","#2196f3","#ffd600","#00bcd4","#009688","#cddc39","#ff9800"],V={PaperProps:{style:{maxHeight:224,width:250}}},B=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).state={terms:[],termsMultiple:[],term:"",jobs:[],chartData:[],mappedTerms:{},selectedTerm:null},e.getTerms=e.getTerms.bind(Object(b.a)(e)),e.handleChange=e.handleChange.bind(Object(b.a)(e)),e.handleChangeMultiple=e.handleChangeMultiple.bind(Object(b.a)(e)),e.formatTooltip=e.formatTooltip.bind(Object(b.a)(e)),e.updateJobList=e.updateJobList.bind(Object(b.a)(e)),e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"getTerms",value:function(){var e=Object(d.a)(f.a.mark(function e(){var t,a,n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.get("/terms");case 3:t=e.sent,a=[],200==t.status&&(a=t.data),n=a.reduce(function(e,t){return e[t.term]=t.id,e[t.id]=t.term,e},{}),this.setState({terms:a,mappedTerms:n}),e.next=14;break;case 10:throw e.prev=10,e.t0=e.catch(0),console.error(e.t0),e.t0;case 14:case"end":return e.stop()}},e,this,[[0,10]])}));return function(){return e.apply(this,arguments)}}()},{key:"getJobs",value:function(){var e=Object(d.a)(f.a.mark(function e(t){var a,n,r;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S(t);case 3:return a=e.sent,n=null,200==a.status&&(n=a.data),n=n.slice(-100),r=n.map(function(e){return{value:e.total,time:Y()(e.created_at).toDate().getTime()}}),e.abrupt("return",r);case 11:throw e.prev=11,e.t0=e.catch(0),console.error(e.t0),e.t0;case 15:case"end":return e.stop()}},e,this,[[0,11]])}));return function(t){return e.apply(this,arguments)}}()},{key:"formatTooltip",value:function(e,t){switch(t){case"Time":e=Y.a.utc(e).format("MMMM Do YYYY, h:mm:ss a");break;case"Value":t="Opened Jobs"}return[e,t]}},{key:"handleChange",value:function(e){console.log(e.target),this.setState(Object(p.a)({},e.target.name,e.target.value)),this.getJobs(e.target.value)}},{key:"handleChangeMultiple",value:function(e){var t=e.target.value;this.updateJobList(t),this.setState({termsMultiple:t})}},{key:"updateJobList",value:function(){var e=Object(d.a)(f.a.mark(function e(t){var a,n,r,o,i,c,s,u;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=this.state,n=a.jobs,r=a.mappedTerms,o=t.reduce(function(e,t){return e[t]=!0,e},{}),i=n.filter(function(e){return o[e.term]}),c=t.filter(function(e){return n.filter(function(t){return t.term===e}).length<=0}),e.t0=f.a.keys(c);case 5:if((e.t1=e.t0()).done){e.next=13;break}return s=e.t1.value,e.next=9,this.getJobs(r[c[s]]);case 9:u=e.sent,i.push({term:c[s],jobs:u}),e.next=5;break;case 13:this.setState({jobs:i}),console.log("savedJobs",i);case 15:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getTerms()}},{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.terms,n=t.termsMultiple,o=t.jobs;return r.a.createElement("div",null,r.a.createElement(w.a,{className:e.formControl},r.a.createElement(v.a,{htmlFor:"select-multiple-chip"},"Term"),r.a.createElement(E.a,{multiple:!0,value:n,onChange:this.handleChangeMultiple,input:r.a.createElement(C.a,{id:"select-multiple-chip"}),renderValue:function(t){return r.a.createElement("div",{className:e.chips},t.map(function(t){return r.a.createElement(x.a,{key:t,label:t,className:e.chip})}))},MenuProps:V},a.map(function(e){return r.a.createElement(j.a,{key:e.term,value:e.term},e.term)}))),r.a.createElement(N.b,{width:"95%",height:500},r.a.createElement(N.d,null,r.a.createElement(N.f,{dataKey:"time",domain:["auto","auto"],name:"Time",tickFormatter:function(e){return Y()(e).format()},type:"number"}),r.a.createElement(N.g,{dataKey:"value",name:"Value"}),r.a.createElement(N.a,null),o.map(function(e,t){return r.a.createElement(N.c,{data:e.jobs,line:{stroke:"#eee"},fill:P[t],lineJointType:"monotoneX",lineType:"joint",name:e.term})}),r.a.createElement(N.e,{cursor:{strokeDasharray:"3 3"},formatter:this.formatTooltip}))))}}]),t}(n.Component),F=Object(J.withStyles)(function(e){return{root:{display:"flex",flexWrap:"wrap"},formControl:{margin:e.spacing.unit,minWidth:120},selectEmpty:{marginTop:2*e.spacing.unit},chips:{display:"flex",flexWrap:"wrap"},chip:{margin:e.spacing.unit/4}}})(B),K=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(F,null)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[253,1,2]]]);
//# sourceMappingURL=main.b5e69f96.chunk.js.map