const DevBook = require('../models/devBookModel')
const mongoose = require('mongoose')

// get all devBooks
const getDevBooks = async (req, res) => {
  const devBooks = await DevBook.find({}).sort({createdAt: -1})

  res.status(200).json(devBooks)
}

// get a single devBook
const getDevBook = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such devBook'})
  }

  const devBook = await DevBook.findById(id)

  if (!devBook) {
    return res.status(404).json({error: 'No such devBook'})
  }
  
  res.status(200).json(devBook)
}


// create new devBook
const createDevBook = async (req, res) => {
  const {title, author, year, description, imagepath, isbn} = req.body

  let emptyFields = []

  if(!title) {
    emptyFields.push('title')
  }
  if(!author) {
    emptyFields.push('author')
  }
  if(!year) {
    emptyFields.push('year')
  }
  if(!description) {
    emptyFields.push('description')
  }
  if(!imagepath) {
    emptyFields.push('imagepath')
  }
  if(!isbn) {
    emptyFields.push('isbn')
  }
  if(emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
  }

  // add doc to db
  try {
    const devBook = await DevBook.create({title, author, year, description, imagepath, isbn})
    res.status(200).json(devBook)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// delete a devBook
const deleteDevBook = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such devBook'})
  }

  const devBook = await DevBook.findOneAndDelete({_id: id})

  if (!devBook) {
    return res.status(404).json({error: 'No such devBook'})
  }

  res.status(200).json(devBook)
}

// update a devBook
const updateDevBook = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such devBook'})
  }

  const devBook = await DevBook.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!devBook) {
    return res.status(404).json({error: 'No such devBook'})
  }

  res.status(200).json(devBook)
}


module.exports = {
  getDevBooks,
  getDevBook,
  createDevBook,
  deleteDevBook,
  updateDevBook
}