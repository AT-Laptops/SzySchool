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
    title: {
      type:String,
      default:"Wydarzenie"
    },
    description: {
      type:String,
      default:""
    }
})

module.exports = Event = mongoose.model('event',EventSchema);