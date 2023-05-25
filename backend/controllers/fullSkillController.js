const FullSkill = require('../models/fullSkillModel')
const mongoose = require('mongoose')

// get all fullSkills
const getFullSkills = async (req, res) => {
  const fullSkills = await FullSkill.find({}).sort({createdAt: -1})

  res.status(200).json(fullSkills)
}

// get a single fullSkill
const getFullSkill = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such fullSkill'})
  }

  const fullSkill = await FullSkill.findById(id)

  if (!fullSkill) {
    return res.status(404).json({error: 'No such fullSkill'})
  }
  
  res.status(200).json(fullSkill)
}


// create new fullSkill
const createFullSkill = async (req, res) => {
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
    const fullSkill = await FullSkill.create({skillset, frequency, description, languagelink})
    res.status(200).json(fullSkill)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// delete a fullSkill
const deleteFullSkill = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such fullSkill'})
  }

  const fullSkill = await FullSkill.findOneAndDelete({_id: id})

  if (!fullSkill) {
    return res.status(404).json({error: 'No such fullSkill'})
  }

  res.status(200).json(fullSkill)
}

// update a fullSkill
const updateFullSkill = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such fullSkill'})
  }

  const fullSkill = await FullSkill.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!fullSkill) {
    return res.status(404).json({error: 'No such fullSkill'})
  }

  res.status(200).json(fullSkill)
}


module.exports = {
  getFullSkills,
  getFullSkill,
  createFullSkill,
  deleteFullSkill,
  updateFullSkill
}