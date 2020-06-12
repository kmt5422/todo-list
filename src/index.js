import createTodo from './modules/todo';
import createTodoList from './modules/todo-list';
import renderer from './modules/renderer';

// DOM Elements
const contentDiv = document.querySelector('.container');
let createTodoListForm;
let pageHeadingDiv;
let todoListsDiv;
const todoLists = [];

loadPage();

function loadPage() {
    pageHeadingDiv = renderer.createPageHeadingDiv();
    contentDiv.appendChild(pageHeadingDiv);
    createTodoListForm = renderer.createTodoListForm();
    todoListsDiv = document.createElement('div');

    renderer.addTodoListEvent.subscribe(detachNodes);
    renderer.addTodoListEvent.subscribe(attachToContentDiv(createTodoListForm));

    // Subscribe functions that show the create todo form to the renderer.createTodoList event
    renderer.createTodoListEvent.subscribe(detachNodes);
    renderer.createTodoListEvent.subscribe(attachToContentDiv(pageHeadingDiv));
    renderer.createTodoListEvent.subscribe(attachToContentDiv(todoListsDiv));
    renderer.createTodoListEvent.subscribe(() => {
        let name = createTodoListForm.childNodes[1].value;
        let id = todoListsDiv.childNodes.length;
        createTodoListForm.childNodes[1].value = '';
        todoListsDiv.appendChild(renderer.createTodoListDiv(name, id));
    });
}

function showCreateTodoForm() {
    let formDiv = document.createElement('div');
    let formHeading = document.createElement('h2');
    formHeading.textContent = 'Work in progress';

    formDiv.appendChild(formHeading);

    detachNodes();
    contentDiv.appendChild(formDiv);
}

function detachNodes() {
    let child = contentDiv.lastElementChild;
    while(child) {
        contentDiv.removeChild(child);
        child = contentDiv.lastElementChild;
    }
}

function attachToContentDiv(elementDiv) {
    return () => {
        contentDiv.appendChild(elementDiv);
    };
}