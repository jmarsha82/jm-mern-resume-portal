const express = require('express')
const {
  getWorkExperiences, 
  getWorkExperience, 
  createWorkExperience, 
  deleteWorkExperience, 
  updateWorkExperience
} = require('../controllers/workExperienceController')

const router = express.Router()

// GET all workExperiences
router.get('/', getWorkExperiences)

//GET a single workExperience
router.get('/:id', getWorkExperience)

// POST a new workExperience
router.post('/', createWorkExperience)

// DELETE a workExperience
router.delete('/:id', deleteWorkExperience)

// UPDATE a workExperience
router.patch('/:id', updateWorkExperience)


module.exports = router