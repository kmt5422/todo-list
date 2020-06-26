import renderer from './modules/renderer';
import appState from './modules/state';

// DOM Elements
const contentDiv = document.querySelector('.container');
let createTodoListForm;
let pageHeadingDiv;
let todoListsDiv;
let createTodoForm;
let currentIdState;

loadPage();

function loadPage() {
    pageHeadingDiv = renderer.createPageHeadingDiv();
    contentDiv.appendChild(pageHeadingDiv);
    createTodoListForm = renderer.createTodoListForm();
    todoListsDiv = document.createElement('div');
    createTodoForm = renderer.createTodoForm();

    // Subscribe functions that show the create todo form to the renderer.createTodoList event
    renderer.addTodoListEvent.subscribe(detachNodes);
    renderer.addTodoListEvent.subscribe(attachToContentDiv(createTodoListForm));

    renderer.createTodoListEvent.subscribe(detachNodes);
    renderer.createTodoListEvent.subscribe(attachToContentDiv(pageHeadingDiv));
    renderer.createTodoListEvent.subscribe(attachToContentDiv(todoListsDiv));
    renderer.createTodoListEvent.subscribe(() => {
        let name = createTodoListForm.childNodes[0].childNodes[1].value;
        let id = todoListsDiv.childNodes.length;
        currentIdState = id;
        createTodoListForm.childNodes[1].value = '';
        todoListsDiv.appendChild(renderer.createTodoListDiv(name, id));
    });

    renderer.addTodoEvent.subscribe(detachNodes);
    renderer.addTodoEvent.subscribe(attachToContentDiv(createTodoForm));

    renderer.todoCreatedEvent.subscribe(detachNodes);
    renderer.todoCreatedEvent.subscribe(attachToContentDiv(pageHeadingDiv));
    renderer.todoCreatedEvent.subscribe(attachToContentDiv(todoListsDiv));
    renderer.todoCreatedEvent.subscribe(() => {
        for(let todoListDiv of todoListsDiv.childNodes) {
            if (todoListDiv.id == appState.getCurrentTodoListId()) {
                let title = createTodoForm.childNodes[1].childNodes[1].value;
                let desc = createTodoForm.childNodes[2].childNodes[1].value;
                let dueDate = createTodoForm.childNodes[3].childNodes[1].value;
                let priority = createTodoForm.childNodes[4].childNodes[1].value;

                todoListDiv.lastChild.appendChild(renderer.createTodoElement(title, desc, dueDate, priority));
                todoListDiv.childNodes[1].textContent = `Number of Todos: ${todoListDiv.lastChild.childNodes.length}`;

                createTodoForm.childNodes[1].childNodes[1].value = '';
                createTodoForm.childNodes[2].childNodes[1].value = '';
                createTodoForm.childNodes[3].childNodes[1].value = '';
            }
        }
    });

    renderer.todoRemovedEvent.subscribe(() => {
        let todo = document.getElementById(appState.getCurrentTodoId());
        todo.parentElement.parentElement.childNodes[1].textContent = `Number of Todos: ${todo.parentElement.childNodes.length - 1}`;
        todo.parentElement.removeChild(todo);
    });

    renderer.todoListDropdownEvent.subscribe(() => {
        let todoList = document.getElementById(appState.getCurrentTodoListId());
        todoList.lastElementChild.classList.toggle('todos-hidden');
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