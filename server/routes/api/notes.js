const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Note = require('../../models/Note');

// @route   GET api/notes/mine
// @desc    Get only notes made by me
// @access  Private
router.get('/mine',auth,async(req,res)=>{
    try {
        const note = await Note.find({owner: req.user.id});
        res.json(note)
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error')
    }
})

// @route   POST api/notes/
// @desc    Add a note
// @access  Private
router.post('/',auth,async(req,res)=>{
    try {
        note = new Note({owner: req.user.id});
        await note.save();
        res.json(note);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
})



module.exports = router;