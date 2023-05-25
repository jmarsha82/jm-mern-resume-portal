const express = require('express')
const {
  getEducations, 
  getEducation, 
  createEducation, 
  deleteEducation, 
  updateEducation
} = require('../controllers/educationController')

const router = express.Router()

// GET all educations
router.get('/', getEducations)

//GET a single education
router.get('/:id', getEducation)

// POST a new education
router.post('/', createEducation)

// DELETE a education
router.delete('/:id', deleteEducation)

// UPDATE a education
router.patch('/:id', updateEducation)


module.exports = router