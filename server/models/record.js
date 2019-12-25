
const mongoose = require('mongoose')

const recordSchema = mongoose.Schema({
  title: String,
  type: String,
  detail: String,
  create_time: {
    type: String,
    default: Date.now
  },
  img: Array,
  view: 0,
  creater: String,
  // TODO:这里很重要，需要什么记得加上
  avatar: String,
  user_id: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  }
})

module.exports = mongoose.model('Record', recordSchema)
