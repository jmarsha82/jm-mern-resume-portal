require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const generalRoutes = require('./routes/general')
const currentSkillRoutes = require('./routes/currentSkill')
const userRoutes = require('./routes/user')
const workExperienceRoutes = require('./routes/workExperience')
const educationRoutes = require('./routes/education')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/generals', generalRoutes)
app.use('/api/currentSkill', currentSkillRoutes)
app.use('/api/user', userRoutes)
app.use('/api/workExperience', workExperienceRoutes)
app.use('/api/education', educationRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })