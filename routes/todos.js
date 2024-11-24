const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

// GET /todos
router.get('/', async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
});

// POST /todos
router.post('/', async (req, res) => {
    const newTodo = new Todo({
        text: req.body.text
    });
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
});

// PUT /todos/:id
router.put('/:id', async (req, res) => {
    const updatedTodo = await Todo.findByIdAndUpdate(
        req.params.id,
        { text: req.body.text, completed: req.body.completed },
        { new: true }
    );

    if (!updatedTodo) {
        return res.status(404).json({ message: 'Todo  not found' });
    }
    res.json(updatedTodo);
});

// DELETE /todos/:id
router.delete('/:id', async (req, res) => {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);

    if(!deletedTodo) {
        return res.status(404).json({ message: 'Todo not found' });
    }
    res.status(204).send();
})

module.exports = router;