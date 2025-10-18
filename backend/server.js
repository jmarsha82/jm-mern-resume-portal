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
      },
      // Add TLS options for better security and compatibility
      tls: {
        rejectUnauthorized: false
      },
      // Add connection timeout settings
      connectionTimeout: 60000,
      greetingTimeout: 30000,
      socketTimeout: 60000
    });
    const mail_config = {
      from: process.env.EMAIL_USER,
      to: 'jmarsha82@yahoo.com',
      replyTo: email, // This is crucial for proper email handling
      subject: `[Portfolio Contact] ${subject}`,
      text: `From: ${email}\n\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">
              New Contact Form Submission
            </h1>
            <p style="color: #f0f0f0; margin: 10px 0 0 0; font-size: 16px;">
              Someone reached out through your portfolio
            </p>
          </div>
          
          <!-- Content -->
          <div style="padding: 30px 20px; background-color: #f8f9fa;">
            <!-- Sender Info -->
            <div style="background-color: #ffffff; padding: 25px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
              <h2 style="color: #333; margin: 0 0 20px 0; font-size: 20px; border-bottom: 2px solid #667eea; padding-bottom: 10px;">
                Contact Information
              </h2>
              <div style="display: flex; align-items: center; margin-bottom: 15px;">
                <div style="background-color: #667eea; color: white; padding: 8px 12px; border-radius: 20px; margin-right: 15px; font-weight: 600; font-size: 14px;">
                  FROM
                </div>
                <span style="color: #333; font-size: 16px; font-weight: 500;">${email}</span>
              </div>
              <div style="display: flex; align-items: center;">
                <div style="background-color: #764ba2; color: white; padding: 8px 12px; border-radius: 20px; margin-right: 15px; font-weight: 600; font-size: 14px;">
                  SUBJECT
                </div>
                <span style="color: #333; font-size: 16px; font-weight: 500;">${subject}</span>
              </div>
            </div>
            
            <!-- Message -->
            <div style="background-color: #ffffff; padding: 25px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
              <h3 style="color: #333; margin: 0 0 20px 0; font-size: 18px; display: flex; align-items: center;">
                <span style="background-color: #28a745; color: white; padding: 6px 10px; border-radius: 15px; margin-right: 12px; font-size: 12px; font-weight: 600;">
                  MESSAGE
                </span>
                Content
              </h3>
              <div style="background-color: #f8f9fa; padding: 20px; border-left: 4px solid #667eea; border-radius: 0 8px 8px 0;">
                <p style="white-space: pre-wrap; line-height: 1.6; color: #333; margin: 0; font-size: 15px;">${message}</p>
              </div>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background-color: #2c3e50; padding: 20px; text-align: center; border-radius: 0 0 8px 8px;">
            <p style="color: #ecf0f1; margin: 0 0 10px 0; font-size: 14px;">
              This email was sent from your portfolio contact form
            </p>
            <p style="color: #bdc3c7; margin: 0; font-size: 12px;">
              Reply directly to this email to respond to <strong style="color: #3498db;">${email}</strong>
            </p>
            <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #34495e;">
              <p style="color: #95a5a6; margin: 0; font-size: 11px;">
                Generated by Portfolio Contact System • ${new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      `,
      // Add important headers to improve deliverability
      headers: {
        'X-Mailer': 'Portfolio Contact Form',
        'X-Priority': '3',
        'X-MSMail-Priority': 'Normal',
        'Importance': 'Normal',
        'X-Report-Abuse': 'Please forward a copy of this message, including all headers, to abuse@yahoo.com'
      }
    }
    transporter.sendMail(mail_config, (error, info) => {
      if (error) {
        console.error('Email sending failed:', {
          error: error.message,
          code: error.code,
          response: error.response,
          command: error.command,
          from: email,
          subject: subject,
          timestamp: new Date().toISOString()
        })
        
        // Provide more specific error messages
        let errorMessage = 'Failed to send email'
        if (error.code === 'EAUTH') {
          errorMessage = 'Authentication failed. Please check your email credentials.'
        } else if (error.code === 'ECONNECTION') {
          errorMessage = 'Connection failed. Please check your internet connection.'
        } else if (error.response && error.response.includes('550')) {
          errorMessage = 'Mailbox unavailable. Please check if the recipient email is valid.'
        } else if (error.response && error.response.includes('535')) {
          errorMessage = 'Authentication failed. Please use an App Password instead of your regular password.'
        }
        
        reject({
          message: errorMessage,
          error: error.message,
          code: error.code,
          response: error.response
        })
      } else {
        console.log('Email sent successfully:', {
          messageId: info.messageId,
          response: info.response,
          from: email,
          subject: subject,
          timestamp: new Date().toISOString()
        })
        resolve({
          messageId: info.messageId,
          response: info.response,
          accepted: info.accepted,
          rejected: info.rejected
        })
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

// Test email connection endpoint
app.get("/test-connection", (req, res) => {
  const transporter = nodemailer.createTransport({
    service: 'yahoo',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
    tls: {
      rejectUnauthorized: false
    },
    connectionTimeout: 60000,
    greetingTimeout: 30000,
    socketTimeout: 60000
  });

  transporter.verify((error, success) => {
    if (error) {
      console.error('Connection test failed:', error);
      res.status(500).json({
        success: false,
        error: error.message,
        code: error.code,
        response: error.response,
        message: 'Email connection test failed'
      });
    } else {
      console.log('Connection test successful:', success);
      res.json({
        success: true,
        message: 'Email connection test successful',
        server: success
      });
    }
  });
});

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
      res.json({ 
        success: true, 
        message: "Email sent successfully",
        messageId: response.messageId
      });
    })
    .catch((error) => {
      console.error('Email sending failed:', error);
      res.status(500).json({ 
        error: error.message || "Failed to send email",
        details: error.response || "Unknown error occurred",
        code: error.code
      });
    });
})

// connect to db
app.listen(port, () => {
  console.log(`nodemail is listening on port ${port}`)
})