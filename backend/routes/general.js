const express = require('express')
const {
  getGenerals,
  createGeneral
} = require('../controllers/generalController')

const router = express.Router()

// GET all generals
router.get('/', getGenerals)

// POST a new workout
router.post('/', createGeneral)

module.exports = router