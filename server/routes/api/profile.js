const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Profile = require('../../models/Profile');

// @route   GET api/profile/me
// @desc    My profile
// @access  Private
router.get('/me',auth,async(req,res)=>{
    try {
        const profile = await Profile.findOne({user: req.user.id});
        res.json(profile)
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error')
    }
})

// @route   POST api/profile
// @desc    Create or update user profile
// @access  Private
router.post(
    '/',
    [
        check('name','Name is required').not().isEmpty(),
    ],auth,
    async(req,res)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const {name} = req.body;

        const profileFields = {
            name: name,
            user: req.user.id
        }

        try {
            let profile = await Profile.findOne({user: req.user.id})
            if(profile){
                profile = await Profile.findByIdAndUpdate(
                    {user: req.user.id},
                    {$set: profileFields},
                    {new:true}
                )

                return res.json(profile)
            }

            profile = new Profile(profileFields);
            await profile.save();
            res.json(profile);
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Server Error');
        }
    }
)

// @route   PUT api/profile/name
// @desc    Change the name of profile
// @access  Private
router.put(
    '/name',
    [check('name','Name of your profile is required').not().isEmpty()],
    auth,
    async (req,res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            
            return res.status(400).json({
                errors: errors.array()
            });
        }

        try {
            let profile = await Profile.findOne({user: req.user.id});
            profile.name = req.body.name;
            await profile.save();
            res.json(profile);
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Server error')
        }
    }
)

// @route   PUT api/profile/status
// @desc    Change status of profile
// @access  Private
router.put(
    '/status',
    [check('status','Status of your profile is required').exists()],
    auth,
    async (req,res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            
            return res.status(400).json({
                errors: errors.array()
            });
        }

        try {
            let profile = await Profile.findOne({user: req.user.id});
            profile.status = req.body.status;
            await profile.save();
            res.json(profile);
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Server error')
        }
    }
)

module.exports = router;