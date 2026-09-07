# EmailJS Setup Instructions

Follow these steps to configure EmailJS and enable email delivery from your contact form.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. After logging in, go to **Email Services** in the left sidebar
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended):
   - Select **Gmail**
   - Click **Connect Account**
   - Log in with your Gmail account: **avinash.santhoshk@gmail.com**
   - Allow EmailJS to send emails on your behalf
4. Give your service a name (e.g., "Portfolio Contact")
5. Copy the **Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Go to **Email Templates** in the left sidebar
2. Click **Create New Template**
3. Use this template configuration:

**Template Name:** Portfolio Contact Form

**Subject:** New Contact Form Message from {{from_name}}

**Content (Body):**
```
You have received a new message from your portfolio contact form.

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from Portfolio Contact Form
```

4. Click **Save**
5. Copy the **Template ID** (you'll need this later)

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in the left sidebar
2. Find the **Public Key** section
3. Copy your **Public Key** (it looks like: `user_xxxxxxxxxxxxxx` or a long string)

## Step 5: Update Your Code

Open the file: `src/app/components/Contact.tsx`

Find these three lines (around line 15-17):
```javascript
await emailjs.sendForm(
  'YOUR_SERVICE_ID',      // Replace with your EmailJS Service ID
  'YOUR_TEMPLATE_ID',     // Replace with your EmailJS Template ID
  form,
  'YOUR_PUBLIC_KEY'       // Replace with your EmailJS Public Key
);
```

Replace the placeholders with your actual values:
```javascript
await emailjs.sendForm(
  'service_abc1234',      // Your Service ID from Step 2
  'template_xyz5678',     // Your Template ID from Step 3
  form,
  'your_public_key_here'  // Your Public Key from Step 4
);
```

## Step 6: Test Your Form

1. Save all changes
2. Rebuild/refresh your portfolio
3. Fill out the contact form and submit
4. Check your email inbox: **avinash.santhoshk@gmail.com**
5. You should receive an email with the form submission details!

## Troubleshooting

### Emails Not Arriving?

1. **Check Spam Folder**: EmailJS emails might land in spam initially
2. **Verify Service Connection**: Make sure your Gmail is properly connected in EmailJS dashboard
3. **Check Browser Console**: Look for error messages in the developer console (F12)
4. **Free Tier Limits**: EmailJS free tier allows 200 emails/month
5. **Template Variables**: Make sure template variables match form field names:
   - `from_name` → Name field
   - `from_email` → Email field
   - `message` → Message field

### Common Issues:

- **"User ID is required"** → Public Key not set correctly
- **"Service ID is invalid"** → Service ID is wrong or service not connected
- **"Template ID is invalid"** → Template ID is wrong or template not saved

## Email Delivery Details

- **From Address**: EmailJS will send emails from their domain
- **Reply-To Address**: Will be set to the sender's email (from_email field)
- **To Address**: Your Gmail (avinash.santhoshk@gmail.com) connected to the service
- **Free Tier**: 200 emails per month
- **Upgrade**: $7/month for 1000 emails if needed

## Security Note

Your Public Key is safe to expose in frontend code - it's designed for client-side use. Never expose your Private Key (if you have one).

---

**Need Help?**
- EmailJS Documentation: https://www.emailjs.com/docs/
- Support: https://www.emailjs.com/docs/support/
