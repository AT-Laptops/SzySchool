const mongoose = require('mongoose');
const SubjectSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  title: {
    type: String,
    default: "Przedmiot"
  },
})

module.exports = Subject = mongoose.model('subject',SubjectSchema);