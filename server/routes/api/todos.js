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
        let date1 = new Date(date)
        date1 = date1.setHours(0,0,0,0)
        let date2 = new Date(date)
        date2 = date2.setHours(23,59,59,999)
        console.log(date1)
        console.log(date2)
        const todo = await Todo.find({owner: req.user.id,date:{"$gte": date1 , "$lt": date2}})
        res.json(todo);
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
    const {content} = req.body
    let date;
    if(req.body.date){
        date = req.body.date
    }   
    try {
        if(req.body.date) {
            todo = await Todo.findByIdAndUpdate(
                {_id: id},
                {content,date},
                {new:true}
            )
        }else {
            todo = await Todo.findByIdAndUpdate(
                {_id: id},
                {content},
                {new:true}
            )
        }
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