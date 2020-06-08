let renderer = (function() {
    function renderTodoList(todoList) {
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

    return {renderTodoList};
})();

export default renderer;