export default function createTodo(todoTitle, todoDesc, todoDueDate, todoPriority) {
    // Todo Attributes
    let title = todoTitle;
    let desc = todoDesc;
    let dueDate = todoDueDate;
    let priority = todoPriority;
    
    // Todo Getters
    let getTitle = () => title;
    let getDesc = () => desc;
    let getDueDate = () => dueDate;
    let getPriority = () => priority;
 
    return {getTitle, getDesc, getDueDate, getPriority};
}