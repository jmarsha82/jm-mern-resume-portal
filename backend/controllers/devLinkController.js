const DevLink = require('../models/devLinkModel')
const mongoose = require('mongoose')

// get all devLinks
const getDevLinks = async (req, res) => {
  const devLinks = await DevLink.find({}).sort({createdAt: -1})

  res.status(200).json(devLinks)
}

// get a single devLink
const getDevLink = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such devLink'})
  }

  const devLink = await DevLink.findById(id)

  if (!devLink) {
    return res.status(404).json({error: 'No such devLink'})
  }
  
  res.status(200).json(devLink)
}


// create new devLink
const createDevLink = async (req, res) => {
  const {title, link, description, imagepath} = req.body

  let emptyFields = []

  if(!title) {
    emptyFields.push('title')
  }
  if(!link) {
    emptyFields.push('link')
  }
  if(!description) {
    emptyFields.push('description')
  }
  if(!imagepath) {
    emptyFields.push('imagepath')
  }
  if(emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
  }

  // add doc to db
  try {
    const devLink = await DevLink.create({title, link, description, imagepath})
    res.status(200).json(devLink)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// delete a devLink
const deleteDevLink = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such devLink'})
  }

  const devLink = await DevLink.findOneAndDelete({_id: id})

  if (!devLink) {
    return res.status(404).json({error: 'No such devLink'})
  }

  res.status(200).json(devLink)
}

// update a devLink
const updateDevLink = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such devLink'})
  }

  const devLink = await DevLink.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!devLink) {
    return res.status(404).json({error: 'No such devLink'})
  }

  res.status(200).json(devLink)
}


module.exports = {
  getDevLinks,
  getDevLink,
  createDevLink,
  deleteDevLink,
  updateDevLink
}