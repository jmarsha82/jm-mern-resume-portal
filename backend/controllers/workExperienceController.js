const WorkExperience = require('../models/workExperienceModel')
const mongoose = require('mongoose')

// get all workExperiences
const getWorkExperiences = async (req, res) => {
  const workExperiences = await WorkExperience.find({}).sort({createdAt: -1})

  res.status(200).json(workExperiences)
}

// get a single workExperience
const getWorkExperience = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such workExperience'})
  }

  const workExperience = await WorkExperience.findById(id)

  if (!workExperience) {
    return res.status(404).json({error: 'No such workExperience'})
  }
  
  res.status(200).json(workExperience)
}


// create new workExperience
const createWorkExperience = async (req, res) => {
  const {company, jobtitle, timerange, location, commentone, commenttwo, commentthree, commentfour, commentfive, commentsix, commentseven,
    commenteight, commentnine, commentten} = req.body

  let emptyFields = []

  if(!company) {
    emptyFields.push('company')
  }
  if(!jobtitle) {
    emptyFields.push('jobtitle')
  }
  if(!timerange) {
    emptyFields.push('timerange')
  }
  if(!location) {
    emptyFields.push('location')
  }
  if(!commentone) {
    emptyFields.push('commentone')
  }
  if(!commenttwo) {
    emptyFields.push('commenttwo')
  }
  if(!commentthree) {
    emptyFields.push('commentthree')
  }
  if(!commentfour) {
    emptyFields.push('commentfour')
  }
  if(!commentfive) {
    emptyFields.push('commentfive')
  }
  if(!commentsix) {
    emptyFields.push('commentsix')
  }
  if(!commentseven) {
    emptyFields.push('commentseven')
  }
  if(!commenteight) {
    emptyFields.push('commenteight')
  }
  if(!commentnine) {
    emptyFields.push('commentnine')
  }
  if(!commentten) {
    emptyFields.push('commentten')
  }
  if(emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
  }

  // add doc to db
  try {
    const workExperience = await WorkExperience.create({company, jobtitle, timerange, location, commentone, commenttwo, commentthree, commentfour, commentfive, commentsix, commentseven,
      commenteight, commentnine, commentten})
    res.status(200).json(workExperience)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// delete a workExperience
const deleteWorkExperience = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such workExperience'})
  }

  const workExperience = await WorkExperience.findOneAndDelete({_id: id})

  if (!workExperience) {
    return res.status(404).json({error: 'No such workExperience'})
  }

  res.status(200).json(workExperience)
}

// update a workExperience
const updateWorkExperience = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such workExperience'})
  }

  const workExperience = await WorkExperience.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!workExperience) {
    return res.status(404).json({error: 'No such workExperience'})
  }

  res.status(200).json(workExperience)
}


module.exports = {
  getWorkExperiences,
  getWorkExperience,
  createWorkExperience,
  deleteWorkExperience,
  updateWorkExperience
}