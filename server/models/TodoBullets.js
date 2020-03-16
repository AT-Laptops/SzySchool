const mongoose = require('mongoose');

const TodoBulletsSchema = new mongoose.Schema({
    text: {
        type:String,
    },
    isDoneBullet: {
        type: Boolean,
        default: false
    }
})
module.exports = TodoBulletsSchema = mongoose.model('todobullets',TodoBulletsSchema);