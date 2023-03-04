const express = require("express");
const { addTodo, getAllTodos } = require("../controllers/todo");

const router = express.Router();

router.get('/', (req, res) => {
    res.render("todo", {todos: getAllTodos()});
});

router.post('/add', (req, res) => {
    addTodo(req.body.data);
    res.send("Todo Added");
});

module.exports = router;