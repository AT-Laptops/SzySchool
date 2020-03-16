const mongoose = require('mongoose');

const TodoBullets = new mongoose.Schema({
    text: {
        type:String,
    },
    isDoneBullet: {
        type: Boolean,
        default: false
    }
})

const TodoSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    date: {
        type: Date,
        default: null
    },
    content: {
        type: String,
    },
    isDone: {
        type: Boolean,
        default: false
    },
    bullets: [TodoBullets]
})

module.exports = Todo = mongoose.model('todo',TodoSchema);
