const Education = require('../models/educationModel')
const mongoose = require('mongoose')

// get all educations
const getEducations = async (req, res) => {
  const educations = await Education.find({}).sort({createdAt: -1})

  res.status(200).json(educations)
}

// get a single education
const getEducation = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such education'})
  }

  const education = await Education.findById(id)

  if (!education) {
    return res.status(404).json({error: 'No such education'})
  }
  
  res.status(200).json(education)
}


// create new education
const createEducation = async (req, res) => {
  const {college, location, degree, collegelink} = req.body

  let emptyFields = []

  if(!college) {
    emptyFields.push('college')
  }
  if(!location) {
    emptyFields.push('location')
  }
  if(!degree) {
    emptyFields.push('degree')
  }
  if(!collegelink) {
    emptyFields.push('collegelink')
  }
  if(emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
  }

  // add doc to db
  try {
    const education = await Education.create({college, location, degree, collegelink})
    res.status(200).json(education)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// delete a education
const deleteEducation = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such education'})
  }

  const education = await Education.findOneAndDelete({_id: id})

  if (!education) {
    return res.status(404).json({error: 'No such education'})
  }

  res.status(200).json(education)
}

// update a education
const updateEducation = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such education'})
  }

  const education = await Education.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!education) {
    return res.status(404).json({error: 'No such education'})
  }

  res.status(200).json(education)
}


module.exports = {
  getEducations,
  getEducation,
  createEducation,
  deleteEducation,
  updateEducation
}