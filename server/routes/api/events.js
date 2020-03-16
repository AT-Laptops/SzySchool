const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Event = require('../../models/Event');

// @route   GET api/events/mine
// @desc    Get mine events (ALL)
// @access  Private
router.get('/mine',auth,async(req,res)=>{
  try {
    const event = await Event.find({owner: req.user.id});
    res.json(event)
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error')
  }
})

// @route   POST api/events/add
// @desc    Add an event
// @access  Private
router.post('/add',
  [
    check('predefinedType','Type is required').not().isEmpty(),
    check('date','Date is required').not().isEmpty(),
  ],auth,async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
      return res.status(400).json({
        errors: errors.array()
      });
    }

    const {date,description,title,timeInHours,predefinedType,lessonSubject} = req.body;

    try {
      event = new Event({owner: req.user.id,date,description,title,timeInHours,predefinedType,lessonSubject});
      await event.save();
      res.json(event);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
)

// @route   POST api/events
// @desc    View specific todos by date
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
    const event = await Event.find({owner: req.user.id,date:{"$gte": date1 , "$lt": date2}})
    res.json(event);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
})

// @route   GET api/events/:id
// @desc    View a specific event
// @access  Private
router.get('/:id',auth,async(req,res)=>{
  const id = req.params.id;
  try {
      event = await Event.findById(id);
      res.json(event);
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
        check('title','Content is required, even if it is the same').not().isEmpty(),
        check('date','Date is required, even if it is the same').not().isEmpty(),
        check('description','Description is required, even if it is the same').not().isEmpty(),
        check('timeInHours','timeInHours is required, even if it is the same').not().isEmpty(),
        check('lessonSubject','lessonSubject is required, even if it is the same').not().isEmpty(),
        check('predefinedType','predefinedType is required, even if it is the same').not().isEmpty(),
    ]
    ,auth,async(req,res)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array()
            });
        }
        const id = req.params.id;
        const {date,title,description} = req.body
        try {
            event = await Event.findByIdAndUpdate(
              {_id: id},
              {date,title,description},
              {new:true}
            )
            return res.json({"message":"complete"})
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Server Error');
        }
    }
)

/*
    POST api/events -> wysyłasz date, zwraca eventy z danej daty
    GET api/events/mine  -> zwróci ci wszystkie eventy zalogowanego użytkownika
    POST api/events/add   -> wysylasz dane eventa i tyle
    GET api/events/:id   -> zwraca ci dane o konkretnym evencie
    POST api/events/:id  -> zapisuje zmiany, musiz mu wysłac dane nawet jak sa takie same (wszystkie) po zapisaniu zwroci ci "message":"complete". to znaczy ze masz przeładować stronę.
*/


module.exports = router;