const mongoose = require('mongoose')

const Schema = mongoose.Schema

const devLinkSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imagepath: {
    type: String,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('DevLink', devLinkSchema)