(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,n){e.exports=n(44)},44:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(14),c=n.n(i),o=n(8),l=n(9),u=n(12),d=n(10),s=n(13),p=n(5),f=n(2),b=n(3),m=n(1),h="RECEIVE_TASK_DATA",v="ADD_TASK",y="SET_TASK",x="REMOVE_TASK",k="TOGGLE_TASK",g="CLICK_TASK",O="SET_TASK_PRIORITY",j="SET_TASK_DUE_DATE",E=function(e){return{type:v,task:e}},T=function(e,t){return{type:y,task:e,id:t}},S=function(e){return{type:k,id:e}},C=n(18),D=n.n(C),I=n(6),w=n(25),A={authedUser:"oxoxx",tasks:[{title:"title1",body:void 0,dueDate:1541150030181,priority:"high",done:!1},{title:"title2",body:"body2",dueDate:void 0,priority:"normal",done:!1},{title:"title3",body:"body3",dueDate:1551150040181,priority:"normal",done:!0}]};function _(){return(_=Object(w.a)(D.a.mark(function e(){return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.all([new Promise(function(e,t){setTimeout(function(){return e(Object(m.a)({},A))},1e3)})]).then(function(e){return{taskData:Object(I.a)(e,1)[0]}}));case 1:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}var P=function(){return function(e){return function(){return _.apply(this,arguments)}().then(function(t){var n=t.taskData;e(function(e){return{type:h,taskData:e}}(n))})}};function K(){var e=Object(f.a)(["\n    padding: 10px;\n    font-size: 20px;\n"]);return K=function(){return e},e}function L(){var e=Object(f.a)(["\n    color: gray;\n    text-decoration: line-through;\n    padding: 10px;\n    font-size: 20px;\n"]);return L=function(){return e},e}function z(){var e=Object(f.a)(["\n        border-bottom: 5px solid red\n    "]);return z=function(){return e},e}function B(){var e=Object(f.a)(["\n    border: 1px solid gray;\n    border-radius: 5px;\n    margin: 10px;\n    \n    ","\n"]);return B=function(){return e},e}var N=b.b.div(B(),function(e){return"high"===e.priority&&Object(b.a)(z())}),R=b.b.div(L()),U=b.b.div(K()),V=Object(p.b)(function(e,t){var n=e.task.tasks,a=t.index;return Object(m.a)({task:n[a]},t)})(function(e){var t=e.dispatch,n=e.index,a=e.task,i=a.title,c=a.priority,o=a.done;return r.a.createElement(N,{priority:c,onClick:function(){return t({type:g,id:n})}},o?r.a.createElement(R,null,r.a.createElement("i",{className:"far fa-check-square",style:{margin:"5px"},onClick:function(){return t(S(n))}}),r.a.createElement("span",null,i),r.a.createElement("i",{className:"far fa-trash-alt",style:{margin:"5px",float:"right"},onClick:function(){return t({type:x,id:n})}})):r.a.createElement(U,null,r.a.createElement("i",{className:"far fa-square",style:{margin:"5px"},onClick:function(){return t(S(n))}}),r.a.createElement("span",null,i)))}),F=function(e,t,n,a,r){return{title:e,body:t,dueDate:n,priority:a,done:r}},M=function(e,t){var n=e.split("/"),a=Object(I.a)(n,3),r=a[0],i=a[1],c=a[2],o=t.split(":"),l=Object(I.a)(o,2),u=l[0],d=l[1];return new Date(r,i-1,c,u,d).getTime()},q=function(e){var t=e.match(/^\d{4}[.\/]\d{1,2}[.\/]\d{1,2}$/);if(""===e)return!1;if(!t)return alert("Valid date format: yyyy/mm/dd"),!1;var n=e.split(/[.\/]/),a=Object(I.a)(n,3),r=a[0],i=a[1],c=a[2];return r<1902||r>9999?(alert("Invalid value for year: "+r+" - must be between 1902 and 9999"),!1):i<1||i>12?(alert("Invalid value for month: "+i),!1):!(c<1||c>31)||(alert("Invalid value for day: "+c),!1)},G=function(e){var t=e.match(/^\d{1,2}:\d{2}([ap]m)?$/);if(""===e)return!1;if(!t)return alert("Valid date format: hh:mm"),!1;var n=e.split(/:/),a=Object(I.a)(n,2),r=a[0],i=a[1];return r<0||r>23?(alert("Invalid value for hour: "+r),!1):!(i<0||i>59)||(alert("Invalid value for minute: "+i),!1)};function J(){var e=Object(f.a)(["\n    padding: 5px;\n    font-size: 15px;\n    margin: 5px;\n"]);return J=function(){return e},e}function $(){var e=Object(f.a)(["\n    padding: 10px;\n    font-size: 15px;\n    margin: 10px;\n    border: 1px solid gray;\n    width: 90%;\n"]);return $=function(){return e},e}function W(){var e=Object(f.a)(["\n    margin-left: 10px;\n"]);return W=function(){return e},e}function Y(){var e=Object(f.a)(["\n    padding: 10px;\n    font-size: 15px;\n    margin: 10px;\n    border: 1px solid gray;\n    width: 90%;\n"]);return Y=function(){return e},e}function H(){var e=Object(f.a)(["\n    padding: 10px;\n    font-size: 20px;\n    margin: 10px;\n    border: 0px;\n"]);return H=function(){return e},e}function Q(){var e=Object(f.a)(["\n    border: 1px solid black;\n    border-radius: 5px;\n    margin: 10px;\n    display: flex;\n    flex-direction: column;\n"]);return Q=function(){return e},e}var X=b.b.div(Q()),Z=b.b.input(H()),ee=b.b.input(Y()),te=b.b.div(W()),ne=b.b.select($()),ae=b.b.input(J()),re=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",body:"",priority:"",date:"",time:""},n.handleTitleChange=function(e){n.setState({title:e.target.value})},n.handleBodyChange=function(e){n.setState({body:e.target.value})},n.handleSetPriority=function(e){console.log(e.target.value),n.setState({priority:e.target.value})},n.handleDateChange=function(e){n.setState({date:e.target.value})},n.handleTimeChange=function(e){n.setState({time:e.target.value})},n.handleSetTask=function(e){var t=n.props,a=t.index,r=t.dispatch,i=n.state,c=i.title,o=i.body,l=i.priority,u=i.date,d=i.time,s=n.props.task.done,p=q(u)&&G(d)?M(u,d):void 0,f=F(c,o,p,l,s);r(T(f,a))},n}return Object(s.a)(t,e),Object(l.a)(t,[{key:"setStateFromProps",value:function(e){var t=e.task,n=t.title,a=t.body,r=t.priority,i=t.dueDate,c=function(e){var t=new Date(e),n=t.toLocaleTimeString("it-IT"),a=t.toLocaleDateString().split("/"),r=Object(I.a)(a,3),i=r[0],c=r[1],o=r[2],l=n.split(":"),u=Object(I.a)(l,3);return{year:o,month:i,day:c,hour:u[0],minute:u[1],second:u[2]}}(i),o=c.year,l=c.month,u=c.day,d=c.hour,s=c.minute,p=void 0===a?"":a,f=void 0===i?"":o+"/"+l+"/"+u,b=void 0===i?"":d+":"+s;this.setState({title:n,body:p,priority:r,date:f,time:b})}},{key:"componentDidMount",value:function(){this.setStateFromProps(this.props)}},{key:"componentWillReceiveProps",value:function(e){this.setStateFromProps(e)}},{key:"render",value:function(){var e=this.state,t=e.title,n=e.body,a=e.priority,i=e.date,c=e.time;return r.a.createElement(X,null,r.a.createElement(Z,{type:"text",value:t,onChange:this.handleTitleChange}),r.a.createElement("label",null,r.a.createElement(te,null,"Note"),r.a.createElement(ee,{type:"text",placeholder:"Type your note",onChange:this.handleBodyChange,value:n})),r.a.createElement("label",null,r.a.createElement(te,null,"Priority"),r.a.createElement(ne,{onChange:this.handleSetPriority,value:a},r.a.createElement("option",{value:"high"},"high"),r.a.createElement("option",{value:"normal"},"normal"))),r.a.createElement("label",null,r.a.createElement(te,null,"Due Date"),r.a.createElement(te,null,"Date",r.a.createElement(ae,{type:"text",placeholder:"yyyy/mm/dd",value:i,onChange:this.handleDateChange,maxLength:"10"})),r.a.createElement(te,null,"Time",r.a.createElement(ae,{type:"text",placeholder:"hh:mm",value:c,onChange:this.handleTimeChange,maxLength:"5"}))),r.a.createElement("input",{type:"button",onClick:this.handleSetTask,value:"Save"}))}}]),t}(a.Component),ie=Object(p.b)(function(e,t){var n=e.task.tasks,a=t.index;return Object(m.a)({task:n[a]},t)})(re);function ce(){var e=Object(f.a)(["\n    border-radius: 10px;\n    padding: 10px;\n    margin: 5px;\n"]);return ce=function(){return e},e}var oe=b.b.input(ce()),le=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={title:""},n.handleTitleChange=function(e){n.setState({title:e.target.value})},n.handleAddBtn=function(){var e=n.props.dispatch,t=n.state.title,a=F(t,void 0,void 0,"normal",!1);""!==t&&(e(E(a)),n.setState({title:"",body:""}))},n}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(oe,{type:"text",value:this.state.title,placeholder:"Add TODO here!",onChange:this.handleTitleChange}),r.a.createElement("i",{className:"fas fa-arrow-circle-up fa-lg",style:{margin:"5px"},onClick:this.handleAddBtn}))}}]),t}(a.Component),ue=Object(p.b)()(le);function de(){var e=Object(f.a)(["\n    border: 1px solid black;\n    border-radius: 5px;\n    margin: 10px;\n"]);return de=function(){return e},e}function se(){var e=Object(f.a)(["\n    display: flex;\n    flex-direction: row;\n    \n"]);return se=function(){return e},e}var pe=b.b.div(se()),fe=b.b.div(de()),be=Object(p.b)(function(e,t){var n=e.task;return{authedUser:n.authedUser,clickedIndex:n.clickedIndex,tasks:n.tasks}})(function(e){var t=e.clickedIndex,n=e.tasks;return r.a.createElement(pe,null,r.a.createElement("div",null,r.a.createElement(fe,null,r.a.createElement("h1",{style:{textAlign:"center"}},"Todo List"),n.map(function(e,t){return r.a.createElement(V,{key:e.title+e.dueDate,index:t})}),r.a.createElement(ue,null))),r.a.createElement("div",null,n[t]&&r.a.createElement(ie,{index:t})))}),me=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.dispatch)(P())}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(be,null))}}]),t}(a.Component),he=Object(p.b)()(me),ve=n(7),ye=n(16),xe={authedUser:"",clickedIndex:void 0,tasks:[]},ke=Object(ve.c)({task:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(m.a)({},e,t.taskData);case v:return console.log(e),Object(m.a)({},e,{clickedIndex:0,tasks:[t.task].concat(Object(ye.a)(e.tasks))});case y:return Object(m.a)({},e,{tasks:e.tasks.map(function(e,n){return n===t.id?t.task:e})});case x:return Object(m.a)({},e,{clickedIndex:void 0,tasks:e.tasks.filter(function(e,n){return n!==t.id})});case k:var n=e.tasks,a=n[t.id],r=!a.done,i=Object(m.a)({},a,{done:r}),c=e.tasks.filter(function(e,n){return n!==t.id});return r?Object(m.a)({},e,{clickedIndex:n.length-1,tasks:Object(ye.a)(c).concat([i])}):Object(m.a)({},e,{clickedIndex:0,tasks:[i].concat(Object(ye.a)(c))});case g:return Object(m.a)({},e,{clickedIndex:t.id});case O:return Object(m.a)({},e,{tasks:e.tasks.map(function(e,n){return n===t.id?Object(m.a)({},e,{priority:t.priority}):e})});case j:return Object(m.a)({},e,{tasks:e.tasks.map(function(e,n){return n===t.id?Object(m.a)({},e,{dueDate:t.date}):e})});default:return e}}}),ge=n(27),Oe=Object(ve.a)(ge.a),je=(n(41),Object(ve.d)(ke,Oe));c.a.render(r.a.createElement(p.a,{store:je},r.a.createElement(he,null)),document.getElementById("root"))}},[[29,2,1]]]);
//# sourceMappingURL=main.ac4d8e83.chunk.js.map