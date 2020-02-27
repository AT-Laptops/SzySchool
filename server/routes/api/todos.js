const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Todo = require('../../models/Todo');

// @route   GET api/todos/mine
// @desc    Get mine todos
// @access  Private
router.get('/mine',auth,async(req,res)=>{
    try {
        const todo = await Todo.find({owner: req.user.id});
        res.json(todo)
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error')
    }
})

// @route   GET api/todos/add
// @desc    Add a todo
// @access  Private
router.get('/add',auth,async(req,res)=>{
    try {
        todo = new Todo({owner: req.user.id});
        await todo.save();
        res.json(todo._id);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
})

// @route   POST api/todos
// @desc    View a specific todo by date
// @access  Private
router.post('/',auth,async(req,res)=>{
    const { date } = req.body;
    try {
        todo = new Todo({owner: req.user.id, date: date});
        await todo.save();
        res.json(todo._id);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
})

// @route   GET api/todos/:id
// @desc    View a specific todo
// @access  Private
router.get('/:id',auth,async(req,res)=>{
    const id = req.params.id;
    try {
        todo = await Todo.findById(id);
        res.json(todo);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
})

// @route   POST api/todos/:id
// @desc    make changes to specific todo
// @access  Private
router.post('/:id',auth,async(req,res)=>{
    const id = req.params.id;
    const {title,content,date} = req.body
    try {
        todo = await Todo.findByIdAndUpdate(
            {_id: id},
            {title,content,date},
            {new:true}
        )
        return res.json({"message":"complete"})
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
})

/*

    dokładnie tak samo jak notatki

*/

module.exports = router;