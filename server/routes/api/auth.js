const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../../middleware/auth');

const User = require('../../models/User');

// @route   GET api/auth
// @desc    Test route
// @access  Public
router.get('/',auth,async(req,res)=>{
    try {
        const user = await User.findById(req.user.id).select('-password')
        res.json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error')
    }
})

// @route   POST api/auth
// @desc    Login and get token
// @access  Public
router.post(
    '/',
    [
        check('email','Email is required')
            .isEmail(),
        check('password','Password is required')
            .exists()
    ],
    async (req,res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const {email,password } = req.body;

        try {
            let user = await User.findOne({email});
            if(!user){
                return res
                    .status(400)
                    .json({errors: [{msg:'Invalid creditentials'}]});
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if(!isMatch){
                return res
                    .status(400)
                    .json({errors: [{msg:'Invalid creditentials'}]});
            }

            const payload = {
                user: {
                    id: user.id
                }
            }

            jwt.sign(
                payload,
                config.get('jwtSecret'),
                {
                    expiresIn:360000
                },
                (err,token) => {
                    if(err) throw err;
                    res.json({token})
                }
            )
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Server error')
        }
    }
)
module.exports = router;