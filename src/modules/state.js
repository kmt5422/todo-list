const appState = (() => {
    let currentTodoListId = 0;
    let currentTodoId = 0;
    let todoCount = 0;

    // Getters and Setters
    const getCurrentTodoListId = () => currentTodoListId;
    const setCurrentTodoListId = (value) => currentTodoListId = value;
    const getCurrentTodoId = () => currentTodoId;
    const setCurrentTodoId = (value) => currentTodoId = value;
    const createIdFromTodoCount = () => `todo-${todoCount++}`;

    return {getCurrentTodoListId, 
        setCurrentTodoListId, 
        getCurrentTodoId, 
        setCurrentTodoId,
        createIdFromTodoCount,
    };
})();

export default appState;