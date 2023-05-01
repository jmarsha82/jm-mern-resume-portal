const General = require('../models/generalModel')
const mongoose = require('mongoose')

// get all generals
const getGenerals = async (req, res) => {
  const generals = await General.find({}).sort({createdAt: -1})

  res.status(200).json(generals)
}

// get a single general
const getGeneral = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such general'})
  }

  const general = await General.findById(id)

  if (!general) {
    return res.status(404).json({error: 'No such general'})
  }
  
  res.status(200).json(general)
}


// create new general
const createGeneral = async (req, res) => {
  const {position, phone, email} = req.body

  let emptyFields = []

  if(!position) {
    emptyFields.push('position')
  }
  if(!phone) {
    emptyFields.push('phone')
  }
  if(!email) {
    emptyFields.push('email')
  }
  if(emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
  }

  // add doc to db
  try {
    const general = await General.create({position, phone, email})
    res.status(200).json(general)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// delete a general
const deleteGeneral = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such general'})
  }

  const general = await General.findOneAndDelete({_id: id})

  if (!general) {
    return res.status(404).json({error: 'No such general'})
  }

  res.status(200).json(general)
}

// update a general
const updateGeneral = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such general'})
  }

  const general = await General.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!general) {
    return res.status(404).json({error: 'No such general'})
  }

  res.status(200).json(general)
}


module.exports = {
  getGenerals,
  getGeneral,
  createGeneral,
  deleteGeneral,
  updateGeneral
}