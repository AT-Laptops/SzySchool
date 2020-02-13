const mongoose = require('mongoose');
const NoteSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title: {
        type: String,
        default: "Tytuł"
    },
    content: {
        type: String,
    }
})

module.exports = Note = mongoose.model('note',NoteSchema);