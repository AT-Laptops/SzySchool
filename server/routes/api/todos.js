const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Todo = require('../../models/Todo');

// @route   GET api/todos/mine
// @desc    Get mine todos (ALL)
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

// @route   GET api/todos/withoutdate
// @desc    get all mine todos without any date
// @access  Private
router.get('/withoutdate',auth,async(req,res)=>{
    try {
        const todo = await Todo.find({owner: req.user.id, date:null});
        res.json(todo)
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error')
    }
})

// @route   POST api/todos/add
// @desc    Add a todo
// @access  Private
router.post('/add',
    [
        check('content','Content is required').not().isEmpty(),
    ],auth,async(req,res)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            
            return res.status(400).json({
                errors: errors.array()
            });
        }
        const {date,content} = req.body;
        try {
            todo = new Todo({owner: req.user.id,date,content});
            await todo.save();
            res.json(todo);
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Server Error');
        }
    }
)

// @route   POST api/todos
// @desc    View a specific todo by date
// @access  Private
router.post('/',[check('date','Date is required').not().isEmpty()],auth,async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array()
        });
    }
    const { date } = req.body;
    try {
        let date1 = new Date(date)
        date1 = date1.setHours(0,0,0,0)
        let date2 = new Date(date)
        date2 = date2.setHours(23,59,59,999)
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
router.post('/:id',
    [
        check('content','Content is required').not().isEmpty(),
        check('date','Date is required').not().isEmpty(),
        check('isDone','isDone is required').not().isEmpty(),
    ]
    ,auth,async(req,res)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array()
            });
        }
        const id = req.params.id;
        const {content,date,isDone} = req.body
        try {
            // if(req.body.date && req.body.content) {
                todo = await Todo.findByIdAndUpdate(
                    {_id: id},
                    {content,date,isDone},
                    {new:true}
                )
            // }else if(req.body.content) {
            //     todo = await Todo.findByIdAndUpdate(
            //         {_id: id},
            //         {content},
            //         {new:true}
            //     )
            // }else if(req.body.date) {
            //     todo = await Todo.findByIdAndUpdate(
            //         {_id: id},
            //         {date},
            //         {new:true}
            //     )
            // }
            return res.json({"message":"complete"})
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Server Error');
        }
    }
)

module.exports = router;