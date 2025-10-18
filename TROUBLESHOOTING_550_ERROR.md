# Troubleshooting 550 "Mailbox Unavailable" Error

## What is Error 550?
The "550 Request failed; Mailbox unavailable" error indicates that the email server cannot deliver the message to the specified recipient. This is commonly caused by authentication or configuration issues.

## Quick Fixes to Try

### 1. Test Your Email Connection
First, test if your email configuration is working:
```bash
curl http://localhost:4000/test-connection
```

### 2. Check Your .env File
Make sure your `.env` file in the backend directory contains:
```
EMAIL_USER=your-email@yahoo.com
EMAIL_PASS=your-app-password-here
```

### 3. Use App Password (CRITICAL)
Yahoo requires App Passwords for automated email sending:

1. **Go to Yahoo Account Security**
   - Visit: https://login.yahoo.com/account/security
   - Sign in to your Yahoo account

2. **Enable 2-Factor Authentication**
   - Go to "Two-step verification"
   - Enable it if not already enabled

3. **Generate App Password**
   - Go to "App passwords"
   - Click "Generate app password"
   - Name it "Portfolio Contact Form"
   - Copy the generated password

4. **Update .env File**
   - Replace your regular password with the App Password
   - Restart your server

### 4. Check Recipient Email
The error might be caused by the recipient email address:
- Verify `jmarsha82@yahoo.com` is correct
- Make sure the email address exists and is active
- Try sending to a different email address for testing

### 5. Yahoo Mail Settings
Ensure your Yahoo account allows:
- **Less secure app access** (if applicable)
- **IMAP access** enabled
- **SMTP access** enabled

## Common Causes and Solutions

### Authentication Issues (535 Error)
**Problem**: Wrong password or authentication method
**Solution**: 
- Use App Password instead of regular password
- Ensure 2FA is enabled
- Check email address is correct

### Connection Issues (ECONNECTION)
**Problem**: Network or server connection problems
**Solution**:
- Check internet connection
- Verify Yahoo SMTP servers are accessible
- Try again after a few minutes

### Mailbox Issues (550 Error)
**Problem**: Recipient mailbox problems
**Solution**:
- Verify recipient email address exists
- Check if recipient's mailbox is full
- Try sending to a different email address

### TLS/SSL Issues
**Problem**: Security certificate problems
**Solution**: The code now includes `tls: { rejectUnauthorized: false }` to handle this

## Testing Steps

### Step 1: Test Connection
```bash
curl http://localhost:4000/test-connection
```
Expected response:
```json
{
  "success": true,
  "message": "Email connection test successful",
  "server": "OK"
}
```

### Step 2: Test Email Sending
```bash
curl "http://localhost:4000/?email=test@example.com&subject=Test&message=This is a test"
```

### Step 3: Check Server Logs
Look at your server console for detailed error messages:
```bash
npm start
# or
node server.js
```

## Advanced Troubleshooting

### Check Yahoo SMTP Settings
Yahoo SMTP settings:
- **Server**: smtp.mail.yahoo.com
- **Port**: 587 (TLS) or 465 (SSL)
- **Security**: TLS/SSL
- **Authentication**: Required

### Verify DNS Settings
If you have a custom domain, ensure:
- SPF record is configured
- DMARC record is set up
- No DNS issues affecting email delivery

### Check Firewall/Network
- Ensure port 587 and 465 are not blocked
- Check if your network allows SMTP connections
- Try from a different network

## Error Code Reference

| Error Code | Meaning | Solution |
|------------|---------|----------|
| 550 | Mailbox unavailable | Check recipient email, use App Password |
| 535 | Authentication failed | Use App Password, enable 2FA |
| 553 | Mailbox name not allowed | Check recipient email format |
| ECONNECTION | Connection failed | Check network, try again |
| EAUTH | Authentication error | Use App Password |

## Still Having Issues?

1. **Check Yahoo Mail Status**: Visit https://status.yahoo.com/
2. **Try Different Email Provider**: Test with Gmail or Outlook
3. **Check Server Logs**: Look for specific error details
4. **Verify Environment Variables**: Ensure .env file is loaded correctly

## Success Indicators

When working correctly, you should see:
- Connection test returns success
- Email sending returns message ID
- No error messages in console
- Emails arrive in recipient's inbox

## Need More Help?

If the issue persists:
1. Check the detailed error logs in your server console
2. Try the connection test endpoint first
3. Verify all steps in this guide
4. Consider using a different email service provider (SendGrid, Mailgun)
