export default function createTodoList(todoListName, todoListId) {
    let name = todoListName;
    let id = todoListId;
    let priorityMap = {high: 1, medium: 2, low: 3};
    let todos = [];

    function addTodo(todo) {
        todos.push(todo);
        todos.sort((a, b) => priorityMap[a.getPriority()] - priorityMap[b.getPriority()]);
    }

    let getName = () => name;
    let getTodos = () => todos;
    let getId = () => id;
    
    return {addTodo, getName, getTodos, getId};
}