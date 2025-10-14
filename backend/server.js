require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const nodemailer = require('nodemailer')
const port = 4000
const generalRoutes = require('./routes/general')
const currentSkillRoutes = require('./routes/currentSkill')
const userRoutes = require('./routes/user')
const workExperienceRoutes = require('./routes/workExperience')
const educationRoutes = require('./routes/education')
const fullSkillRoutes = require('./routes/fullSkill')
const devBookRoutes = require('./routes/devBook')
const devLinkRoutes = require('./routes/devLink')
const artworkRoutes = require('./routes/artwork')


// express app
const app = express()

// middleware
app.use(express.json({ limit: '25mb' }))
app.use(express.urlencoded({ limit: '25mb' }))

app.use(cors())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  console.log(req.path, req.method)
  next()
})

function sendEmail(email, subject, message) {
  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      service: 'yahoo',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
    const mail_config = {
      from: process.env.EMAIL_USER,
      to: 'jmarsha82@yahoo.com',
      subject,
      text: 'From: ' + email + '\n\nMessage:\n' + message
    }
    transporter.sendMail(mail_config, (error, info) => {
      if (error) {
        console.log('An error occurred', error)
        reject(error)
      } else {
        console.log('Email sent', info)
        resolve(info)
      }
    })
  })
}

// routes
app.use('/api/generals', generalRoutes)
app.use('/api/currentSkill', currentSkillRoutes)
app.use('/api/user', userRoutes)
app.use('/api/workExperience', workExperienceRoutes)
app.use('/api/education', educationRoutes)
app.use('/api/fullSkill', fullSkillRoutes)
app.use('/api/devBook', devBookRoutes)
app.use('/api/devLink', devLinkRoutes)
app.use('/api/artwork', artworkRoutes)

app.get("/", (req, res) => {
  const { email, subject, message } = req.query;
  
  if (!email || !subject || !message) {
    return res.status(400).json({ 
      error: "Missing required parameters: email, subject, and message are required" 
    });
  }

  sendEmail(email, subject, message)
    .then((response) => {
      console.log('Email sent successfully:', response);
      res.json({ success: true, message: "Email sent successfully" });
    })
    .catch((error) => {
      console.log('Email sending failed:', error);
      res.status(500).json({ error: "Failed to send email" });
    });
})

// connect to db
app.listen(port, () => {
  console.log(`nodemail is listening on port ${port}`)
})