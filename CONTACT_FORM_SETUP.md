# Contact Form Setup

The contact form uses **Resend** for email delivery. This is a simple, reliable solution that requires minimal configuration.

## Installation

Install the Resend package:

```bash
npm install resend
```

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Resend API Key
# Get your API key from https://resend.com/api-keys
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Contact Form Recipient Email
# The email address where contact form submissions will be sent
CONTACT_EMAIL=your-email@example.com
```

## Resend Setup

1. **Sign up for Resend**: Go to [https://resend.com](https://resend.com) and create an account.

2. **Get your API key**: 
   - Navigate to API Keys in your Resend dashboard
   - Create a new API key
   - Copy the key (starts with `re_`)
   - Add it to `.env.local` as `RESEND_API_KEY`

3. **Verify your domain** (optional but recommended):
   - In Resend dashboard, go to Domains
   - Add and verify your domain
   - Update the `from` field in `app/actions/sendEmail.ts` to use your verified domain
   - Example: `from: 'Contact Form <contact@yourdomain.com>'`

4. **Set recipient email**:
   - Add your personal email to `.env.local` as `CONTACT_EMAIL`
   - This is where all contact form submissions will be sent

## How It Works

1. **Client Component** (`app/components/Contact.tsx`):
   - Handles form UI and user interactions
   - Includes a honeypot field for spam protection
   - Shows loading states and success/error messages

2. **Server Action** (`app/actions/sendEmail.ts`):
   - Validates form inputs server-side
   - Checks honeypot field (silently fails if filled)
   - Sends email via Resend API
   - Returns success/error status

3. **Email Format**:
   - Plain text email
   - Subject: "New message from jfelicio.github.io"
   - Reply-to: Set to sender's email
   - Body: Name, Email, Message

## Security Features

- **Honeypot field**: Hidden field that bots may fill, but humans won't see
- **Server-side validation**: All inputs validated on the server
- **No client-side API keys**: All sensitive data stays server-side
- **Input sanitization**: Basic validation and length checks

## Testing

1. Fill out the contact form on your site
2. Submit the form
3. Check your email inbox (and spam folder)
4. Verify the email contains the correct information
5. Test the reply-to functionality

## Troubleshooting

**Emails not sending:**
- Check that `RESEND_API_KEY` is set correctly in `.env.local`
- Verify your Resend account is active
- Check browser console and server logs for errors
- Ensure `CONTACT_EMAIL` is set to a valid email address

**Emails going to spam:**
- Verify your domain in Resend
- Update the `from` field to use your verified domain
- Consider adding SPF/DKIM records for your domain

**Form not submitting:**
- Check browser console for client-side errors
- Verify server action is accessible
- Check that all required fields are filled

## Production Deployment

For production (e.g., Vercel, Netlify):

1. Add environment variables in your hosting platform's dashboard
2. Set `RESEND_API_KEY` and `CONTACT_EMAIL`
3. Redeploy your application
4. Test the contact form in production

**Note**: The default `from` address (`onboarding@resend.dev`) works for testing but should be updated to your verified domain for production.

