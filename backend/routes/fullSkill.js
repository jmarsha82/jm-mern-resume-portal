const express = require('express')
const {
  getFullSkills, 
  getFullSkill, 
  createFullSkill, 
  deleteFullSkill, 
  updateFullSkill
} = require('../controllers/fullSkillController')

const router = express.Router()

// GET all fullSkills
router.get('/', getFullSkills)

//GET a single fullSkill
router.get('/:id', getFullSkill)

// POST a new fullSkill
router.post('/', createFullSkill)

// DELETE a fullSkill
router.delete('/:id', deleteFullSkill)

// UPDATE a fullSkill
router.patch('/:id', updateFullSkill)


module.exports = router