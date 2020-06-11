import createEvent from './event'

let renderer = (function() {
    // Events
    const addTodoListEvent = createEvent();
    const createTodoListEvent = createEvent();

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


    function createTodoListDiv(todoList) {
        // DOM Elements
        let todoListDiv = document.createElement('div');


        let todos = todoList.getTodos();
        for(let todo of todos) {
            let todoDiv = document.createElement('div');
            let todoH2 = document.createElement('h2');
            let todoDateP = document.createElement('p');
            let todoDescP = document.createElement('p');

            todoDiv.classList.add(`priority-${todo.getPriority()}`);
            todoH2.textContent = todo.getTitle();
            todoDateP.textContent = todo.getDueDate();
            todoDescP.textContent = todo.getDesc();

            todoDiv.appendChild(todoH2);
            todoDiv.appendChild(todoDateP);
            todoDiv.appendChild(todoDescP);

            todoListDiv.appendChild(todoDiv);
        }

        return todoListDiv;
    }

    return {addTodoListEvent,
        createTodoListEvent, 
        createPageHeadingDiv, 
        createTodoListForm, 
        createTodoListDiv};
})();

export default renderer;