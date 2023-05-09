const express = require('express')
const {
  getCurrentSkills, 
  getCurrentSkill, 
  createCurrentSkill, 
  deleteCurrentSkill, 
  updateCurrentSkill
} = require('../controllers/currentSkillController')

const router = express.Router()

// GET all currentSkills
router.get('/', getCurrentSkills)

//GET a single currentSkill
router.get('/:id', getCurrentSkill)

// POST a new currentSkill
router.post('/', createCurrentSkill)

// DELETE a currentSkill
router.delete('/:id', deleteCurrentSkill)

// UPDATE a currentSkill
router.patch('/:id', updateCurrentSkill)


module.exports = router