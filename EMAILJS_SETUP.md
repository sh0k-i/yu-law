# EmailJS Setup Instructions

The contact form is now configured to send emails using EmailJS. Follow these steps to complete the setup:

## 1. Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

## 2. Add an Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. Copy the **Service ID** (you'll need this later)

## 3. Create an Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

**Subject:**
```
New Contact Form Submission from {{from_name}}
```

**Content:**
```
You have received a new message from your website contact form.

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}

---
This email was sent from the Yu Law Firm contact form.
```

4. Save the template and copy the **Template ID**

## 4. Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (also called API Key)
3. Copy this key

## 5. Update the Contact Form

Open `/src/pages/Contact.jsx` and replace the placeholder values on lines 54-56:

```javascript
const serviceId = 'YOUR_SERVICE_ID' // Replace with your Service ID from step 2
const templateId = 'YOUR_TEMPLATE_ID' // Replace with your Template ID from step 3
const publicKey = 'YOUR_PUBLIC_KEY' // Replace with your Public Key from step 4
```

## 6. Test the Form

1. Run your development server: `npm run dev`
2. Navigate to the Contact page
3. Fill out and submit the form
4. Check your email inbox for the message

## Template Variables Used

The form sends these variables to your email template:
- `from_name` - The sender's name
- `from_email` - The sender's email address
- `phone` - The sender's phone number
- `message` - The message content
- `to_email` - Your firm's email (info@yulawfirm.com)

## Troubleshooting

**Emails not sending?**
- Check that all three IDs are correctly copied
- Verify your email service is connected in EmailJS dashboard
- Check browser console for error messages
- Ensure you haven't exceeded the free tier limit (200 emails/month)

**Want to change the recipient email?**
- Update the `to_email` value in the templateParams (line 63)
- Or configure it directly in your EmailJS template settings

## Alternative: Environment Variables (Recommended for Production)

For better security, store your EmailJS credentials in environment variables:

1. Create a `.env` file in your project root:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

2. Update the Contact.jsx file to use environment variables:
```javascript
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
```

3. Add `.env` to your `.gitignore` file to keep credentials private

## Support

For more help, visit the [EmailJS Documentation](https://www.emailjs.com/docs/)
