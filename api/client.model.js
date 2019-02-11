const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Client = new Schema({
  name: {
    type: String
  },
  psid: {
    type: Number
  },
  time:{
    type: Number
  }
},{
  collection: 'client'
});

module.exports = mongoose.model('Client', Client);
