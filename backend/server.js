require('dotenv').config()

const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')
const port = process.env.PORT || 4000
const emailUser = (process.env.EMAIL_USER || '').trim()
const emailPass = (process.env.EMAIL_PASS || '').trim()
const contactRecipient = (process.env.CONTACT_RECIPIENT || 'jmitchum80@outlook.com').trim()

const app = express()

app.use(express.json({ limit: '25mb' }))
app.use(express.urlencoded({ extended: true, limit: '25mb' }))
app.use(cors())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  console.log(req.path, req.method)
  next()
})

const isValidEmail = (value = '') =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())

const transporter = nodemailer.createTransport({
  host: 'smtp.mail.yahoo.com',
  port: 465,
  secure: true,
  auth: {
    user: emailUser,
    pass: emailPass
  }
})

function sendEmail(email, subject, message) {
  return new Promise((resolve, reject) => {
    const normalizedEmail = email.trim()
    const normalizedSubject = subject.trim()
    const normalizedMessage = message.trim()

    const textContent = `
New Contact Form Submission
==========================

Sender Email: ${normalizedEmail}
Subject: ${normalizedSubject}

Message:
${normalizedMessage}

---
Received on: ${new Date().toLocaleString()}
This email was sent from your portfolio contact form.
Reply manually to: ${normalizedEmail}
    `

    const mail_config = {
      from: emailUser,
      to: contactRecipient,
      envelope: {
        from: emailUser,
        to: [contactRecipient]
      },
      subject: `Portfolio Contact: ${normalizedSubject}`,
      text: textContent
    }
    
    transporter.sendMail(mail_config, (error, info) => {
      if (error) {
        console.log('Mail transport error:', {
          message: error.message,
          code: error.code,
          responseCode: error.responseCode,
          command: error.command,
          to: contactRecipient,
          envelopeFrom: mail_config.envelope.from
        })
        reject(error)
      } else {
        console.log('Email sent', info)
        resolve(info)
      }
    })
  })
}

app.get('/', (req, res) => {
  res.json({ status: 'ok', service: 'contact-email-api' })
})

app.post('/api/contact', async (req, res) => {
  const { email, subject, message } = req.body

  if (!emailUser || !emailPass) {
    return res.status(500).json({
      error: 'Email transport is not configured on the server'
    })
  }

  if (!email || !subject || !message) {
    return res.status(400).json({
      error: 'Missing required fields: email, subject, and message are required'
    })
  }

  if (!isValidEmail(contactRecipient)) {
    return res.status(500).json({
      error: 'Server recipient email is invalid'
    })
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({
      error: 'Please enter a valid email address'
    })
  }

  try {
    const response = await sendEmail(email, subject, message)
    console.log('Email sent successfully:', response)
    res.json({ success: true, message: 'Email sent successfully' })
  } catch (error) {
    console.log('Email sending failed:', error)
    res.status(500).json({ error: 'Failed to send email' })
  }
})

app.listen(port, () => {
  console.log(`nodemail is listening on port ${port}`)
  transporter.verify((error) => {
    if (error) {
      console.log('SMTP verification failed:', {
        message: error.message,
        code: error.code,
        responseCode: error.responseCode,
        command: error.command
      })
      return
    }

    console.log(`SMTP transport ready for ${emailUser} -> ${contactRecipient}`)
  })
})
