const todos = [];

const addTodo = (name) => {
    todos.push({name, done: false});
    return true;
};

const deleteTodo = (index) => {
    todos.splice(index, 1);
    return true;
};

const markAsDone = (index) => {
    todos[index].done = true;
    return true;
};

const getAllTodos = () => {
    return todos;
}

module.exports = {
    getAllTodos,
    markAsDone,
    addTodo,
    deleteTodo
}