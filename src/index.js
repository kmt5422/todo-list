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

// Delete this function after the new loadpage function is finished
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
        if(todoListsDiv) {
            contentDiv.removeChild(todoListsDiv);
        }
        showCreateTodoListForm();
    });

    contentDiv.appendChild(pageHeadingDiv);
}

function loadPage() {
    pageHeadingDiv = renderer.createPageHeadingDiv();
    renderer.addTodoListEvent.subscribe(detachNodes);
    renderer.addTodoListEvent.subscribe(attachToContentDiv(createTodoListForm));

    createTodoListForm = renderer.createTodoListForm();
    // Subscribe functions that show the create todo form to the renderer.createTodoList event
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
            let todoListName = createTodoListForm.childNodes[1].value;
            createTodoListForm.childNodes[1].value = '';
            todoLists.push(createTodoList(todoListName, `todo-list-${todoLists.length}`));

            if (!todoListsDiv) {
                todoListsDiv = document.createElement('div');
            }
            let todoListDiv = document.createElement('div');
            let todoListHeading = document.createElement('h2');
            let numberOfTodosP = document.createElement('p');
            let addTodoBtn = document.createElement('button');

            todoListDiv.id = todoLists[todoLists.length -1].getId();
            todoListHeading.textContent = todoListName;
            numberOfTodosP.textContent = `Number of Todos: 0`;
            addTodoBtn.textContent = 'Add a New Todo'

            todoListDiv.appendChild(todoListHeading);
            todoListDiv.appendChild(numberOfTodosP);
            todoListDiv.appendChild(addTodoBtn);

            todoListsDiv.appendChild(todoListDiv);

            contentDiv.removeChild(createTodoListForm);
            contentDiv.appendChild(pageHeadingDiv);
            contentDiv.appendChild(todoListsDiv);

            // Event listeners
            addTodoBtn.addEventListener('click', (event) => {
                event.preventDefault();

                // Bring up createTodo form
                showCreateTodoForm();
            });

        })
    }
    contentDiv.appendChild(createTodoListForm);
    //createTodoListForm.classList.add('show-form');
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