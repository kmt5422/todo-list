import createEvent from './event'

let renderer = (function() {
    // Events
    const addTodoListEvent = createEvent();
    const createTodoListEvent = createEvent();
    const addTodoEvent = createEvent();

    function createPageHeadingDiv() {
        let pageHeadingDiv = document.createElement('div');
        let pageHeadingH1 = document.createElement('h1');
        let addTodoListBtn = document.createElement('button');

        pageHeadingH1.textContent = 'TodoList Project';
        addTodoListBtn.textContent = 'Add New Todo List';
        addTodoListBtn.addEventListener('click', (event) => {
            event.preventDefault();
            addTodoListEvent.emit();
        });

        pageHeadingDiv.appendChild(pageHeadingH1);
        pageHeadingDiv.appendChild(addTodoListBtn);

        return pageHeadingDiv;
    }

    function createTodoListForm() {
        let formDiv = document.createElement('div');
        let fieldLabel = document.createElement('label');
        let nameField = document.createElement('input');
        let submitBtn = document.createElement('button');

        fieldLabel.textContent = 'Todo List Name: ';
        fieldLabel.setAttribute('for', 'name-field');
        nameField.setAttribute('id', 'name-field');
        submitBtn.textContent = 'Create Todo List';

        submitBtn.addEventListener('click', (event) => {
            event.preventDefault();
            createTodoListEvent.emit();
        });

        formDiv.appendChild(fieldLabel);
        formDiv.appendChild(nameField);
        formDiv.appendChild(submitBtn);

        return formDiv;
    }


    function createTodoListDiv(name, id) {
        // DOM Elements
        let todoListDiv = document.createElement('div');
        let todoListHeading = document.createElement('h2');
        let numberOfTodos = document.createElement('p');
        let addTodoBtn = document.createElement('button');

        todoListDiv.setAttribute('id', `todo-list-${id}`);
        todoListHeading.textContent = name;
        numberOfTodos.textContent = 'Number of Todos: 0';
        addTodoBtn.textContent = 'Add Todo';
        addTodoBtn.addEventListener('click', (event) => {
            event.preventDefault();
            addTodoEvent.emit();
        });

        todoListDiv.appendChild(todoListHeading);
        todoListDiv.appendChild(numberOfTodos);
        todoListDiv.appendChild(addTodoBtn);

        return todoListDiv;
    }

    return {addTodoListEvent,
        createTodoListEvent, 
        createPageHeadingDiv, 
        createTodoListForm, 
        createTodoListDiv};
})();

export default renderer;