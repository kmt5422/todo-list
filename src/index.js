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
    pageHeadingDiv = document.createElement('div');

    let pageHeading = document.createElement('h1');
    pageHeading.textContent = 'Todo List Project';
    pageHeadingDiv.appendChild(pageHeading);

    let addTodoListBtn = document.createElement('button');
    addTodoListBtn.textContent = 'Create New Todo List';
    pageHeadingDiv.appendChild(addTodoListBtn);

    // Event Listeners
    addTodoListBtn.addEventListener('click', (event) => {
        event.preventDefault();

        // Bring up form to create new Todo List
        contentDiv.removeChild(pageHeadingDiv);
        showCreateTodoListForm();
    });

    contentDiv.appendChild(pageHeadingDiv);
}

function showCreateTodoListForm() {
    if (!createTodoListForm) {
        // Create the form
        createTodoListForm = document.createElement('div');

        let fieldLabel = document.createElement('label');
        let namefield = document.createElement('input');
        let submitBtn = document.createElement('button');

        fieldLabel.textContent = 'Todo List Name: ';
        fieldLabel.setAttribute('for', 'name-field');
        namefield.id = 'name-field';
        submitBtn.textContent = 'Create Todo List';

        createTodoListForm.appendChild(fieldLabel);
        createTodoListForm.appendChild(namefield);
        createTodoListForm.appendChild(submitBtn);

        submitBtn.addEventListener('click', (event) => {
            event.preventDefault();

            // Add a new Todo List

            contentDiv.removeChild(createTodoListForm);
            contentDiv.appendChild(pageHeadingDiv)
        })

        contentDiv.appendChild(createTodoListForm);
    }
    createTodoListForm.classList.add('show-form');
}