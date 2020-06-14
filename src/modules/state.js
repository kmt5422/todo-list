const appState = (() => {
    let currentTodoListId = 0;

    // Getters and Setters
    const getCurrentTodoListId = () => currentTodoListId;
    const setCurrentTodoListId = (value) => currentTodoListId = value;

    return {getCurrentTodoListId, setCurrentTodoListId};
})();

export default appState;