const express = require('express')
const {
  getArtworks, 
  getArtwork, 
  createArtwork, 
  deleteArtwork, 
  updateArtwork
} = require('../controllers/artworkController')

const router = express.Router()

// GET all artworks
router.get('/', getArtworks)

//GET a single artwork
router.get('/:id', getArtwork)

// POST a new artwork
router.post('/', createArtwork)

// DELETE a artwork
router.delete('/:id', deleteArtwork)

// UPDATE a artwork
router.patch('/:id', updateArtwork)


module.exports = router