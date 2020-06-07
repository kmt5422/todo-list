import createTodo from './modules/todo';
import createTodoList from './modules/todo-list';
import renderer from './modules/renderer';

// TESTING CODE BELOW

let todo = createTodo('Test Todo', 'Just a test Todo Object', '05/25/2022', 'low');
let todo2 = createTodo('Test Todo 2', 'Just another Todo Object', '05/26/2022', 'medium');
let todo3 = createTodo('Todo 3', 'Nothing new', '12/23/2020', 'high');

let todoList = createTodoList('TodoList');
todoList.addTodo(todo);
todoList.addTodo(todo2);
todoList.addTodo(todo3);

console.log(todo);
console.log(todo.getTitle());
console.log(todo2);
console.log(todo2.getTitle());
console.log(todoList.getTodos());

renderer.renderTodoList(todoList);