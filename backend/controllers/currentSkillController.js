const CurrentSkill = require('../models/currentSkillModel')
const mongoose = require('mongoose')

// get all currentSkills
const getCurrentSkills = async (req, res) => {
  const currentSkills = await CurrentSkill.find({}).sort({createdAt: -1})

  res.status(200).json(currentSkills)
}

// get a single currentSkill
const getCurrentSkill = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such currentSkill'})
  }

  const currentSkill = await CurrentSkill.findById(id)

  if (!currentSkill) {
    return res.status(404).json({error: 'No such currentSkill'})
  }
  
  res.status(200).json(currentSkill)
}


// create new currentSkill
const createCurrentSkill = async (req, res) => {
  const {skillset, frequency, description, languagelink} = req.body

  let emptyFields = []

  if(!skillset) {
    emptyFields.push('skillset')
  }
  if(!frequency) {
    emptyFields.push('frequency')
  }
  if(!description) {
    emptyFields.push('description')
  }
  if(!languagelink) {
    emptyFields.push('languagelink')
  }
  if(emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
  }

  // add doc to db
  try {
    const currentSkill = await CurrentSkill.create({skillset, frequency, description, languagelink})
    res.status(200).json(currentSkill)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// delete a currentSkill
const deleteCurrentSkill = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such currentSkill'})
  }

  const currentSkill = await CurrentSkill.findOneAndDelete({_id: id})

  if (!currentSkill) {
    return res.status(404).json({error: 'No such currentSkill'})
  }

  res.status(200).json(currentSkill)
}

// update a currentSkill
const updateCurrentSkill = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such currentSkill'})
  }

  const currentSkill = await CurrentSkill.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!currentSkill) {
    return res.status(404).json({error: 'No such currentSkill'})
  }

  res.status(200).json(currentSkill)
}


module.exports = {
  getCurrentSkills,
  getCurrentSkill,
  createCurrentSkill,
  deleteCurrentSkill,
  updateCurrentSkill
}