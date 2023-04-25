const General = require('../models/generalModel')
const mongoose = require('mongoose')

// get all generals
const getGenerals = async (req, res) => {
  const generals = await General.find({}).sort({createdAt: -1})

  res.status(200).json(generals)
}

// create new general
const createGeneral = async (req, res) => {
  const {title, load, reps} = req.body

  let emptyFields = []

  if(!title) {
    emptyFields.push('title')
  }
  if(!load) {
    emptyFields.push('load')
  }
  if(!reps) {
    emptyFields.push('reps')
  }
  if(emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
  }

  // add doc to db
  try {
    const general = await General.create({title, load, reps})
    res.status(200).json(general)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = {
  getGenerals,
  createGeneral
}