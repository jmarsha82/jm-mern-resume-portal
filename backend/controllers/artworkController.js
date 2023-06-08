const Artwork = require('../models/artworkModel')
const mongoose = require('mongoose')

// get all artworks
const getArtworks = async (req, res) => {
  const artworks = await Artwork.find({}).sort({createdAt: -1})

  res.status(200).json(artworks)
}

// get a single artwork
const getArtwork = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such artwork'})
  }

  const artwork = await Artwork.findById(id)

  if (!artwork) {
    return res.status(404).json({error: 'No such artwork'})
  }
  
  res.status(200).json(artwork)
}


// create new artwork
const createArtwork = async (req, res) => {
  const {title, size, media, price, imagepath} = req.body

  let emptyFields = []

  if(!title) {
    emptyFields.push('title')
  }
  if(!size) {
    emptyFields.push('size')
  }
  if(!media) {
    emptyFields.push('media')
  }
  if(!price) {
    emptyFields.push('price')
  }
  if(!imagepath) {
    emptyFields.push('imagepath')
  }
  if(emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
  }

  // add doc to db
  try {
    const artwork = await Artwork.create({title, size, media, price, imagepath})
    res.status(200).json(artwork)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// delete a artwork
const deleteArtwork = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such artwork'})
  }

  const artwork = await Artwork.findOneAndDelete({_id: id})

  if (!artwork) {
    return res.status(404).json({error: 'No such artwork'})
  }

  res.status(200).json(artwork)
}

// update a artwork
const updateArtwork = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such artwork'})
  }

  const artwork = await Artwork.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!artwork) {
    return res.status(404).json({error: 'No such artwork'})
  }

  res.status(200).json(artwork)
}


module.exports = {
  getArtworks,
  getArtwork,
  createArtwork,
  deleteArtwork,
  updateArtwork
}