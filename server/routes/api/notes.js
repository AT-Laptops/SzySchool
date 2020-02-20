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

// @route   GET api/notes/add
// @desc    Add a note
// @access  Private
router.get('/add',auth,async(req,res)=>{
    try {
        note = new Note({owner: req.user.id});
        await note.save();
        res.json(note._id);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
})

// @route   GET api/notes/:id
// @desc    View a specific note
// @access  Private
router.get('/:id',auth,async(req,res)=>{
    const id = req.params.id;
    try {
        note = await Note.findById(id);
        res.json(note);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
})

// @route   POST api/notes/:id
// @desc    make changes to specific note
// @access  Private
router.post('/:id',auth,async(req,res)=>{
    const id = req.params.id;
    const {title,content} = req.body
    try {
        note = await Note.findByIdAndUpdate(
            {_id: id},
            {title,content},
            {new:true}
        )
        return res.json({"message":"complete"})
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
})

/*

    GET api/notes/mine  -> zwróci ci wszystkie notatki zalogowanego użytkownika, każda notatka ma id, po kliknieciu na konkretna notatke nalezy przekierowac na GET api/notes/:id
    GET api/notes/add   -> widze to tak, że po naciśnieciu na guzik dodawania notatki wywołujesz tego GETa i dostajesz z powrotem id notatki
    GET api/notes/:id   -> zwraca ci tytuł, autora i content notatki
    POST api/notes/:id  -> zapisuje zmiany, musiz mu wysłac tytuł nawet jak jest taki sam oraz content nawet jak jest taki sam
*/

module.exports = router;