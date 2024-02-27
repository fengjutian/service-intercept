const mongoose = require('./db.js')

const LogSchema = mongoose.Schema({
  time: String,
  msg: String
}, {
  timestamps: true
})

const Log = mongoose.model('log', LogSchema)

module.exports = {
  Log
}