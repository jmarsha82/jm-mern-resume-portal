const express = require('express')
const {
  getDevBooks, 
  getDevBook, 
  createDevBook, 
  deleteDevBook, 
  updateDevBook
} = require('../controllers/devBookController')

const router = express.Router()

// GET all devBooks
router.get('/', getDevBooks)

//GET a single devBook
router.get('/:id', getDevBook)

// POST a new devBook
router.post('/', createDevBook)

// DELETE a devBook
router.delete('/:id', deleteDevBook)

// UPDATE a devBook
router.patch('/:id', updateDevBook)


module.exports = router