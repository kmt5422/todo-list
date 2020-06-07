export default function createTodoList(todoListName) {
    let name = todoListName;
    let priorityMap = {high: 1, medium: 2, low: 3};
    let todos = [];

    function addTodo(todo) {
        todos.push(todo);
        todos.sort((a, b) => priorityMap[a.getPriority()] - priorityMap[b.getPriority()]);
    }

    let getName = () => name;
    let getTodos = () => todos;
    
    return {addTodo, getName, getTodos};
}