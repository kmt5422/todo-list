!function(e){var t={};function n(d){if(t[d])return t[d].exports;var o=t[d]={i:d,l:!1,exports:{}};return e[d].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,d){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:d})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var d=Object.create(null);if(n.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(d,o,function(t){return e[t]}.bind(null,o));return d},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function d(){let e=[];return{subscribe:function(t){e.push(t)},emit:function(){for(let t of e)t()}}}n.r(t);var o=(()=>{let e=0;return{getCurrentTodoListId:()=>e,setCurrentTodoListId:t=>e=t}})();var i=function(){const e=d(),t=d(),n=d(),i=d();return{addTodoListEvent:e,createTodoListEvent:t,addTodoEvent:n,todoCreatedEvent:i,createPageHeadingDiv:function(){let t=document.createElement("div"),n=document.createElement("h1"),d=document.createElement("button");return n.textContent="TodoList Project",d.textContent="Add New Todo List",d.addEventListener("click",t=>{t.preventDefault(),e.emit()}),t.appendChild(n),t.appendChild(d),t.setAttribute("id","page-heading"),t},createTodoListForm:function(){let e=document.createElement("div"),n=document.createElement("div"),d=document.createElement("label"),o=document.createElement("input"),i=document.createElement("button");return d.textContent="Todo List Name: ",d.setAttribute("for","name-field"),o.setAttribute("id","name-field"),i.textContent="Create Todo List",i.addEventListener("click",e=>{e.preventDefault(),t.emit()}),n.appendChild(d),n.appendChild(o),n.classList.add("label-field-div"),e.appendChild(n),e.appendChild(i),e.setAttribute("id","create-todoList-form"),e},createTodoListDiv:function(e,t){let d=document.createElement("div"),i=document.createElement("h2"),r=document.createElement("p"),l=document.createElement("button");return d.setAttribute("id","todo-list-"+t),i.textContent=e,r.textContent="Number of Todos: 0",l.textContent="Add Todo",l.addEventListener("click",e=>{e.preventDefault(),o.setCurrentTodoListId(d.id),n.emit()}),d.appendChild(i),d.appendChild(r),d.appendChild(l),d.classList.add("todo-list"),d},createTodoForm:function(){let e=document.createElement("div"),t=document.createElement("h2"),n=document.createElement("label"),d=document.createElement("label"),o=document.createElement("label"),r=document.createElement("label"),l=document.createElement("input"),c=document.createElement("input"),a=document.createElement("input"),u=document.createElement("select"),s=document.createElement("button"),m=document.createElement("option"),p=document.createElement("option"),f=document.createElement("option");return m.textContent="High",p.textContent="Medium",f.textContent="Low",u.appendChild(m),u.appendChild(p),u.appendChild(f),t.textContent="New Todo",n.textContent="Todo Title: ",d.textContent="Todo Description: ",o.textContent="Due Date: ",r.textContent="Todo Priority",s.textContent="Submit Todo",n.setAttribute("for","todo-form-title-field"),l.setAttribute("id","todo-form-title-field"),d.setAttribute("for","todo-form-desc-field"),c.setAttribute("id","todo-form-desc-field"),o.setAttribute("for","todo-form-date-field"),a.setAttribute("id","todo-form-date-field"),s.addEventListener("click",e=>{e.preventDefault(),i.emit()}),e.appendChild(t),e.appendChild(n),e.appendChild(l),e.appendChild(d),e.appendChild(c),e.appendChild(o),e.appendChild(a),e.appendChild(r),e.appendChild(u),e.appendChild(s),e},createTodoElement:function(e,t,n,d){let o=document.createElement("div"),i=document.createElement("h2"),r=document.createElement("p"),l=document.createElement("p"),c=document.createElement("p");return i.textContent=e,r.textContent=t,l.textContent=n,c.textContent=d,o.appendChild(i),o.appendChild(r),o.appendChild(l),o.appendChild(c),o}}}();const r=document.querySelector(".container");let l,c,a,u,s;function m(){let e=r.lastElementChild;for(;e;)r.removeChild(e),e=r.lastElementChild}function p(e){return()=>{r.appendChild(e)}}c=i.createPageHeadingDiv(),r.appendChild(c),l=i.createTodoListForm(),a=document.createElement("div"),u=i.createTodoForm(),i.addTodoListEvent.subscribe(m),i.addTodoListEvent.subscribe(p(l)),i.createTodoListEvent.subscribe(m),i.createTodoListEvent.subscribe(p(c)),i.createTodoListEvent.subscribe(p(a)),i.createTodoListEvent.subscribe(()=>{let e=l.childNodes[0].childNodes[1].value,t=a.childNodes.length;s=t,l.childNodes[1].value="",a.appendChild(i.createTodoListDiv(e,t))}),i.addTodoEvent.subscribe(m),i.addTodoEvent.subscribe(p(u)),i.todoCreatedEvent.subscribe(m),i.todoCreatedEvent.subscribe(p(c)),i.todoCreatedEvent.subscribe(p(a)),i.todoCreatedEvent.subscribe(()=>{for(let e of a.childNodes)if(e.id==o.getCurrentTodoListId()){let t=u.childNodes[2].textContent.value,n=u.childNodes[4].value,d=u.childNodes[6].value,o=u.childNodes[8].value;e.appendChild(i.createTodoElement(t,n,d,o)),u.childNodes[2].value="",u.childNodes[4].value="",u.childNodes[6].value=""}})}]);