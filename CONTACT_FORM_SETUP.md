# Contact Form Setup

The contact form uses **Formspree** for email delivery. This is a simple, reliable solution that works with static site exports (GitHub Pages compatible).

## Setup

1. **Sign up for Formspree**: Go to [https://formspree.io](https://formspree.io) and create a free account.

2. **Create a new form**:
   - In your Formspree dashboard, click "New Form"
   - Give it a name (e.g., "Portfolio Contact Form")
   - Copy the form endpoint URL (format: `https://formspree.io/f/YOUR_FORM_ID`)

3. **Configure environment variable**:
   - Create a `.env.local` file in the root directory (for local development)
   - Add your Formspree endpoint:
   ```env
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
   ```
   - **Note**: For GitHub Pages deployment, add this as a repository secret and reference it in your GitHub Actions workflow

## How It Works

1. **Client Component** (`app/components/Contact.tsx`):
   - Handles form UI and user interactions
   - Includes a honeypot field for spam protection
   - Validates inputs client-side
   - Sends data to Formspree via `fetch` API
   - Shows loading states and success/error messages

2. **Formspree**:
   - Receives form submissions
   - Validates and processes the data
   - Sends email notifications to your configured email address
   - Provides spam protection and rate limiting

3. **Email Format**:
   - Subject: "New message from jfelicio.github.io"
   - Body includes: Name, Email, Message
   - Reply-to: Set to sender's email (configured in Formspree)

## Security Features

- **Honeypot field**: Hidden field that bots may fill, but humans won't see
- **Client-side validation**: All inputs validated before submission
- **Formspree spam protection**: Built-in spam filtering and rate limiting
- **Input sanitization**: Basic validation and length checks

## Testing

1. Fill out the contact form on your site
2. Submit the form
3. Check your email inbox (and spam folder)
4. Verify the email contains the correct information
5. Test the reply-to functionality

## Troubleshooting

**Emails not sending:**
- Check that `NEXT_PUBLIC_FORMSPREE_ENDPOINT` is set correctly
- Verify your Formspree account is active
- Check browser console for errors
- Ensure the form endpoint URL is correct

**Form not submitting:**
- Check browser console for client-side errors
- Verify the Formspree endpoint is accessible
- Check that all required fields are filled
- Ensure the endpoint doesn't include `YOUR_FORM_ID` placeholder

**CORS errors:**
- Formspree handles CORS automatically
- If you see CORS errors, verify your endpoint URL is correct

## Production Deployment (GitHub Pages)

For GitHub Pages deployment:

1. **Add environment variable to GitHub Secrets**:
   - Go to your repository → Settings → Secrets and variables → Actions
   - Add a new secret: `NEXT_PUBLIC_FORMSPREE_ENDPOINT`
   - Value: Your Formspree endpoint URL

2. **Update GitHub Actions workflow** (if using one):
   ```yaml
   env:
     NEXT_PUBLIC_FORMSPREE_ENDPOINT: ${{ secrets.NEXT_PUBLIC_FORMSPREE_ENDPOINT }}
   ```

3. **Build and deploy**:
   - The form will work in the static export
   - No server-side code required

**Note**: Since this is a static site, the environment variable must be prefixed with `NEXT_PUBLIC_` to be available in the browser.
