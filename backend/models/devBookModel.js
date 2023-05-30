const mongoose = require('mongoose')

const Schema = mongoose.Schema

const devBookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imagepath: {
    type: String,
    required: true
  },
  isbn: {
    type: Number,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('DevBook', devBookSchema)