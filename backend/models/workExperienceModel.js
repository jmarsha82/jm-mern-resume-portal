const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workExperienceSchema = new Schema({
  company: {
    type: String,
    required: true
  },
  jobtitle: {
    type: String,
    required: true
  },
  timerange: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  commentone: {
    type: String,
    required: true
  },
  commenttwo: {
    type: String,
    required: true
  },
  commentthree: {
    type: String,
    required: true
  },
  commentfour: {
    type: String,
    required: true
  },
  commentfive: {
    type: String,
    required: true
  },
  commentsix: {
    type: String,
    required: true
  },
  commentseven: {
    type: String,
    required: true
  },
  commenteight: {
    type: String,
    required: true
  },
  commentnine: {
    type: String,
    required: true
  },
  commentten: {
    type: String,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('WorkExperience', workExperienceSchema)