(this.webpackJsonptrial=this.webpackJsonptrial||[]).push([[0],{14:function(e,t,a){e.exports=a(26)},19:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(5),i=a.n(s),l=(a(19),a(11)),c=a(6),r=a(7),u=a(12),d=a(8),p=a(13),m=a(9),h=a(10),v=(a(25),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={newItem:"",list:[],doneTasks:0},a}return Object(p.a)(t,e),Object(r.a)(t,[{key:"addItem",value:function(e){if(""!==e){var t={id:Date.now(),value:e,isDone:!1,strike:"none"},a=Object(l.a)(this.state.list);a.push(t),this.setState({newItem:"",list:a})}}},{key:"deleteItem",value:function(e){var t=this.state.list.filter((function(t){return t.id!==e}));this.setState({list:t})}},{key:"updateInput",value:function(e){this.setState({newItem:e})}},{key:"doneTask",value:function(e){var t=this.state.list;t.forEach((function(t){t.id===e.id&&(!1===t.isDone?(t.isDone=!0,t.strike="line-through"):(t.isDone=!1,t.strike="none"))}));var a=t.filter((function(e){return!0===e.isDone})).length;this.setState({list:t,doneTasks:a})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"app"},o.a.createElement("h1",{className:"app-to-do-title"},"To-Do List App"),o.a.createElement("div",{className:"app-to-do"},o.a.createElement("div",{className:"app-to-do-container"},o.a.createElement("div",{className:"app-to-do-input-container"},o.a.createElement("button",{className:"app-to-do-button-add",onClick:function(){return e.addItem(e.state.newItem)}},"Add"),o.a.createElement("span",{className:"app-to-do-input-span"},o.a.createElement("input",{type:"text",className:"app-to-do-input",placeholder:"Your To-Do",value:this.state.newItem,onChange:function(t){return e.updateInput(t.target.value)}}))),o.a.createElement("div",{className:"app-to-do-list-container"},o.a.createElement("ul",{className:"app-to-do-item-list"},this.state.list.map((function(t){var a={textDecoration:t.strike};return o.a.createElement("li",{className:"app-to-do-item",key:t.id},o.a.createElement("input",{type:"checkbox",name:"",id:"",className:"app-to-do-checkbox",checked:t.isDone,onChange:function(){return e.doneTask(t)}}),o.a.createElement("span",{style:a}," ",t.value),o.a.createElement("button",{className:"app-to-do-button-delete",onClick:function(){return e.deleteItem(t.id)}},o.a.createElement(m.a,{icon:h.a})))}))))),o.a.createElement("div",{className:"app-to-do-details-container"},o.a.createElement("p",{className:"app-to-do-details"}," ","Number of tasks : ",o.a.createElement("b",null," ",this.state.list.length," ")," "),o.a.createElement("p",{className:"app-to-do-details"}," ","Tasks Completed : ",o.a.createElement("b",null,this.state.doneTasks)," "))),o.a.createElement("div",{className:"app-to-do-footer"},o.a.createElement("p",null,"Designed and Developed by ",o.a.createElement("b",null,"@shridharulli"))))}}]),t}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.79503446.chunk.js.map