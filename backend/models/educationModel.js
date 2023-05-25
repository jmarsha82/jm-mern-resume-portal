const mongoose = require('mongoose')

const Schema = mongoose.Schema

const educationSchema = new Schema({
  college: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  degree: {
    type: String,
    required: true
  },
  collegelink: {
    type: String,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Education', educationSchema)