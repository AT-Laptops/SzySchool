const mongoose = require('mongoose');
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
    }
})

module.exports = Todo = mongoose.model('todo',TodoSchema);