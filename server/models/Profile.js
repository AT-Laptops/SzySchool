const mongoose = require('mongoose');
const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    name: {
        type: String,
        required: true  
    },
    status: {
        type: String,
        default: "active",
        enum: ['active','inactive','deleted']
    },
    notes: [{
        title: {
            type:String,
            default: "Tytuł",
        },
        content: {
            type:String,
        }
    }],
    friends: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }],
})

module.exports = Profile = mongoose.model('profile',ProfileSchema);