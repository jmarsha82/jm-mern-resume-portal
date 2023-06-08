const mongoose = require('mongoose')

const Schema = mongoose.Schema

const artworkSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  media: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  imagepath: {
    type: String,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Artwork', artworkSchema)