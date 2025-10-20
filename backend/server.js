require('dotenv').config()

const express = require('express')
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

    // Create professional HTML email template
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact Form Submission</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f4f4f4;
          }
          .email-container {
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            overflow: hidden;
          }
          .email-header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px 20px;
            text-align: center;
          }
          .email-header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 300;
          }
          .email-body {
            padding: 30px 20px;
          }
          .field-label {
            font-weight: 600;
            color: #555;
            margin-bottom: 5px;
            display: block;
          }
          .field-value {
            background-color: #f8f9fa;
            border-left: 4px solid #667eea;
            padding: 15px;
            margin-bottom: 20px;
            border-radius: 0 4px 4px 0;
            word-wrap: break-word;
          }
          .message-content {
            background-color: #f8f9fa;
            border-left: 4px solid #667eea;
            padding: 20px;
            border-radius: 0 4px 4px 0;
            white-space: pre-wrap;
            word-wrap: break-word;
            font-family: inherit;
          }
          .email-footer {
            background-color: #f8f9fa;
            padding: 20px;
            text-align: center;
            color: #666;
            font-size: 14px;
            border-top: 1px solid #e9ecef;
          }
          .timestamp {
            color: #888;
            font-size: 12px;
            margin-top: 10px;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="email-header">
            <h1>New Contact Form Submission</h1>
          </div>
          <div class="email-body">
            <div class="field-label">From:</div>
            <div class="field-value">${email}</div>
            
            <div class="field-label">Subject:</div>
            <div class="field-value">${subject}</div>
            
            <div class="field-label">Message:</div>
            <div class="message-content">${message}</div>
            
            <div class="timestamp">
              Received on: ${new Date().toLocaleString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                timeZoneName: 'short'
              })}
            </div>
          </div>
          <div class="email-footer">
            <p>This email was sent from your portfolio contact form.</p>
            <p>Please respond directly to the sender's email address: <strong>${email}</strong></p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Plain text version for email clients that don't support HTML
    const textContent = `
New Contact Form Submission
==========================

From: ${email}
Subject: ${subject}

Message:
${message}

---
Received on: ${new Date().toLocaleString()}
This email was sent from your portfolio contact form.
Please respond directly to: ${email}
    `;

    const mail_config = {
      from: process.env.EMAIL_USER,
      to: 'jmitchum80@outlook.com',
      subject: `Portfolio Contact: ${subject}`,
      text: textContent,
      html: htmlContent
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