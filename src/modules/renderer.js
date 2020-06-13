import createEvent from './event'
import createTodo from './todo';

let renderer = (function() {
    // Events
    const addTodoListEvent = createEvent();
    const createTodoListEvent = createEvent();
    const addTodoEvent = createEvent();
    const todoCreatedEvent = createEvent();

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

    function createTodoForm() {
        // Create DOM Elements
        let createTodoDiv = document.createElement('div');
        let createTodoH2 = document.createElement('h2');
        let createTodoTitleLabel = document.createElement('label');
        let createTodoDescLabel = document.createElement('label');
        let createTodoDueDateLabel = document.createElement('label');
        let createTodoPriorityLabel = document.createElement('label');
        let createTodoTitleField = document.createElement('input');
        let createTodoDescField = document.createElement('input');
        let createTodoDueDateField = document.createElement('input');
        let createTodoPriorityField = document.createElement('select');
        let createTodoSubmitBtn = document.createElement('button');

        // Add options for priority selector
        let todoPriorityHigh = document.createElement('option');
        let todoPriorityMedium = document.createElement('option');
        let todoPriorityLow = document.createElement('option');

        todoPriorityHigh.textContent = 'High';
        todoPriorityMedium.textContent = 'Medium';
        todoPriorityLow.textContent = 'Low';

        // Add option to the selector
        createTodoPriorityField.appendChild(todoPriorityHigh);
        createTodoPriorityField.appendChild(todoPriorityMedium);
        createTodoPriorityField.appendChild(todoPriorityLow);

        // Set attributes for DOM Elements
        createTodoH2.textContent = 'New Todo';
        createTodoTitleLabel.textContent = 'Todo Title: ';
        createTodoDescLabel.textContent = 'Todo Description: ';
        createTodoDueDateLabel.textContent = 'Due Date: ';
        createTodoPriorityLabel.textContent = 'Todo Priority';
        createTodoSubmitBtn.textContent = 'Submit Todo';
        
        createTodoTitleLabel.setAttribute('for', 'todo-form-title-field');
        createTodoTitleField.setAttribute('id', 'todo-form-title-field');
        createTodoDescLabel.setAttribute('for', 'todo-form-desc-field');
        createTodoDescField.setAttribute('id', 'todo-form-desc-field');
        createTodoDueDateLabel.setAttribute('for', 'todo-form-date-field');
        createTodoDueDateField.setAttribute('id', 'todo-form-date-field');

        // Submit button event listener
        createTodoSubmitBtn.addEventListener('click', (event) => {
            event.preventDefault();
            todoCreatedEvent.emit();
        });

        // Add all of the element to the createTodoDiv
        createTodoDiv.appendChild(createTodoH2);
        createTodoDiv.appendChild(createTodoTitleLabel);
        createTodoDiv.appendChild(createTodoTitleField);
        createTodoDiv.appendChild(createTodoDescLabel);
        createTodoDiv.appendChild(createTodoDescField);
        createTodoDiv.appendChild(createTodoDueDateLabel);
        createTodoDiv.appendChild(createTodoDueDateField);
        createTodoDiv.appendChild(createTodoPriorityLabel);
        createTodoDiv.appendChild(createTodoPriorityField);
        createTodoDiv.appendChild(createTodoSubmitBtn);

        return createTodoDiv;
    }

    function createTodoElement(todoTitle, todoDesc, todoDueDate, todoPriority) {
        let todoDiv = document.createElement('div');
        let todoH2 = document.createElement('h2');
        let todoDescP = document.createElement('p');
        let todoDueDateP = document.createElement('p');
        let todoPriorityP = document.createElement('p');

        todoH2.textContent = todoTitle;
        todoDescP.textContent = todoDesc;
        todoDueDateP.textContent = todoDueDate;
        todoPriorityP.textContent = todoPriority;

        todoDiv.appendChild(todoH2);
        todoDiv.appendChild(todoDescP);
        todoDiv.appendChild(todoDueDateP);
        todoDiv.appendChild(todoPriorityP);

        return todoDiv;
    }

    return {addTodoListEvent,
        createTodoListEvent,
        addTodoEvent,
        todoCreatedEvent, 
        createPageHeadingDiv, 
        createTodoListForm, 
        createTodoListDiv,
        createTodoForm,
        createTodoElement
    };
})();

export default renderer;