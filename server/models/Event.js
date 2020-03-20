const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  date: {
    type: Date,
    default: null
  },
  timeInHours: {
    type: Number,
    default:null
  },
  title: {
    type:String,
    default:"Wydarzenie"
  },
  description: {
    type:String,
    default:""
  },
  predefinedType: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'eventpredefinedtype',
    default:null
  },
  lessonSubject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'subject',
    default:null,
  }
})

module.exports = Event = mongoose.model('event',EventSchema);