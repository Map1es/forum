const mongoose = require('mongoose')

const usersSchema = mongoose.Schema({
  user_name: String,
  user_id: String,
  user_pwd: String,
  avatar: {
    type: String,
    default: ''
  },
  token: {
    type: String,
    default: ''
  }
})

module.exports = mongoose.model('user', usersSchema)
