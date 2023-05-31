const express = require('express')
const {
  getDevLinks, 
  getDevLink, 
  createDevLink, 
  deleteDevLink, 
  updateDevLink
} = require('../controllers/devLinkController')

const router = express.Router()

// GET all devLinks
router.get('/', getDevLinks)

//GET a single devLink
router.get('/:id', getDevLink)

// POST a new devLink
router.post('/', createDevLink)

// DELETE a devLink
router.delete('/:id', deleteDevLink)

// UPDATE a devLink
router.patch('/:id', updateDevLink)


module.exports = router