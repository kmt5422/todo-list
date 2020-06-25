import createEvent from './event'
import appState from './state';

let renderer = (function() {
    // Events
    const addTodoListEvent = createEvent();
    const createTodoListEvent = createEvent();
    const addTodoEvent = createEvent();
    const todoCreatedEvent = createEvent();
    const todoRemovedEvent = createEvent();
    const todoListDropdownEvent = createEvent();

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

        pageHeadingDiv.setAttribute('id', 'page-heading');

        return pageHeadingDiv;
    }

    function createTodoListForm() {
        let formDiv = document.createElement('div');
        let labelFieldDiv = document.createElement('div');
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

        labelFieldDiv.appendChild(fieldLabel);
        labelFieldDiv.appendChild(nameField);
        labelFieldDiv.classList.add('label-field-div');

        formDiv.appendChild(labelFieldDiv);
        formDiv.appendChild(submitBtn);

        formDiv.setAttribute('id', 'create-todoList-form');

        return formDiv;
    }


    function createTodoListDiv(name, id) {
        // DOM Elements
        let todoListDiv = document.createElement('div');
        let todoListHeading = document.createElement('h2');
        let numberOfTodos = document.createElement('p');
        let addTodoBtn = document.createElement('button');
        let todosDiv = document.createElement('div');
        let dropdownSpan = document.createElement('span');

        todoListDiv.setAttribute('id', `todo-list-${id}`);
        todoListHeading.textContent = name;
        numberOfTodos.textContent = 'Number of Todos: 0';
        addTodoBtn.textContent = 'Add Todo';
        addTodoBtn.addEventListener('click', (event) => {
            event.preventDefault();
            appState.setCurrentTodoListId(todoListDiv.id);
            addTodoEvent.emit();
        });
        dropdownSpan.textContent = String.fromCharCode(43); // '+' character
        dropdownSpan.addEventListener('click', () => {
            appState.setCurrentTodoListId(todoListDiv.id);
            todoListDropdownEvent.emit();
        });

        todosDiv.classList.add('hidden');

        todoListDiv.appendChild(todoListHeading);
        todoListDiv.appendChild(numberOfTodos);
        todoListDiv.appendChild(addTodoBtn);
        todoListDiv.appendChild(dropdownSpan);
        todoListDiv.appendChild(todosDiv);

        todoListDiv.classList.add('todo-list');
        todosDiv.classList.add('todos');

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
        createTodoDueDateField.setAttribute('type', 'date');
        createTodoDueDateField.setAttribute('id', 'todo-form-date-field');

        // Submit button event listener
        createTodoSubmitBtn.addEventListener('click', (event) => {
            event.preventDefault();
            todoCreatedEvent.emit();
        });

        // Create label-field divs
        let nameLabelFieldDiv = document.createElement('div');
        let descLabelFieldDiv = document.createElement('div');
        let dateLabelFieldDiv = document.createElement('div');
        let priorityLabelFieldDiv = document.createElement('div');

        nameLabelFieldDiv.classList.add('label-field-div');
        descLabelFieldDiv.classList.add('label-field-div');
        dateLabelFieldDiv.classList.add('label-field-div');
        priorityLabelFieldDiv.classList.add('label-field-div');

        nameLabelFieldDiv.appendChild(createTodoTitleLabel);
        nameLabelFieldDiv.appendChild(createTodoTitleField);
        descLabelFieldDiv.appendChild(createTodoDescLabel);
        descLabelFieldDiv.appendChild(createTodoDescField);
        dateLabelFieldDiv.appendChild(createTodoDueDateLabel);
        dateLabelFieldDiv.appendChild(createTodoDueDateField);
        priorityLabelFieldDiv.appendChild(createTodoPriorityLabel);
        priorityLabelFieldDiv.appendChild(createTodoPriorityField);

        // Add all of the element to the createTodoDiv
        createTodoDiv.appendChild(createTodoH2);
        createTodoDiv.appendChild(nameLabelFieldDiv);
        createTodoDiv.appendChild(descLabelFieldDiv);
        createTodoDiv.appendChild(dateLabelFieldDiv);
        createTodoDiv.appendChild(priorityLabelFieldDiv);
        createTodoDiv.appendChild(createTodoSubmitBtn);

        createTodoDiv.setAttribute('id', 'create-todo-form');

        return createTodoDiv;
    }

    function createTodoElement(todoTitle, todoDesc, todoDueDate, todoPriority) {
        let todoDiv = document.createElement('div');
        let todoH2 = document.createElement('h2');
        let todoDescP = document.createElement('p');
        let todoDueDateP = document.createElement('p');
        let todoPriorityP = document.createElement('p');
        let removeTodoSpan = document.createElement('span');

        todoH2.textContent = todoTitle;
        todoDescP.textContent = todoDesc;
        todoDueDateP.textContent = todoDueDate;
        todoPriorityP.textContent = todoPriority;
        removeTodoSpan.textContent = 'Remove Todo';

        removeTodoSpan.classList.add('remove-todo-span');

        todoDiv.appendChild(todoH2);
        todoDiv.appendChild(todoDescP);
        todoDiv.appendChild(todoDueDateP);
        todoDiv.appendChild(todoPriorityP);
        todoDiv.appendChild(removeTodoSpan);

        todoDiv.classList.add('todo');
        todoDiv.classList.add(`todo-${todoPriority}`);

        todoDiv.setAttribute('id', appState.createIdFromTodoCount());

        removeTodoSpan.addEventListener('click', (event) => {
            appState.setCurrentTodoId(todoDiv.id);
            todoRemovedEvent.emit();
        });

        return todoDiv;
    }

    return {addTodoListEvent,
        createTodoListEvent,
        addTodoEvent,
        todoCreatedEvent,
        todoRemovedEvent, 
        createPageHeadingDiv, 
        createTodoListForm, 
        createTodoListDiv,
        createTodoForm,
        createTodoElement
    };
})();

export default renderer;