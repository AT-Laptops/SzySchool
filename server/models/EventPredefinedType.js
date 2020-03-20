const mongoose = require('mongoose');

const EventPredefinedTypeSchema = new mongoose.Schema({
  typeName: {
    type: String,
    default:null,
    required:true
  },
  color: {
    type:String,
    required:true
  }
})

module.exports = EventPredefinedType = mongoose.model('eventpredefinedtype',EventPredefinedTypeSchema)