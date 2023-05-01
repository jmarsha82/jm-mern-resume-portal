const express = require('express')
const {
  getGenerals, 
  getGeneral, 
  createGeneral, 
  deleteGeneral, 
  updateGeneral
} = require('../controllers/generalController')

const router = express.Router()

// GET all generals
router.get('/', getGenerals)

//GET a single general
router.get('/:id', getGeneral)

// POST a new general
router.post('/', createGeneral)

// DELETE a general
router.delete('/:id', deleteGeneral)

// UPDATE a general
router.patch('/:id', updateGeneral)


module.exports = router