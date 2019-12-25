
const mongoose = require('mongoose')

const checkcodeSchema = mongoose.Schema({
  token: String,
  code: String
})

module.exports = mongoose.model('Checkcode', checkcodeSchema)
