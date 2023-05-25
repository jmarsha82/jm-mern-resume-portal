const mongoose = require('mongoose')

const Schema = mongoose.Schema

const fullSkillSchema = new Schema({
  skillset: {
    type: String,
    required: true
  },
  frequency: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  languagelink: {
    type: String,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('FullSkill', fullSkillSchema)