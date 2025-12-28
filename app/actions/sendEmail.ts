'use server';

import { Resend } from 'resend';

// Initialize Resend client
// API key should be stored in RESEND_API_KEY environment variable
// Will be null if API key is not set
const getResendClient = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return null;
  }
  try {
    return new Resend(apiKey);
  } catch (error) {
    console.error('Failed to initialize Resend client:', error);
    return null;
  }
};

// Email validation helper
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Server action to send email
export async function sendEmail(formData: FormData) {
  try {
    // Extract form data
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    const honeypot = formData.get('website') as string; // Honeypot field

    // Honeypot check - if filled, it's likely a bot
    if (honeypot) {
      // Silently fail to avoid revealing the honeypot
      return { success: true };
    }

    // Server-side validation
    if (!name || !email || !message) {
      return { 
        success: false, 
        error: 'All fields are required.' 
      };
    }

    // Trim whitespace
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    // Validate email format
    if (!isValidEmail(trimmedEmail)) {
      return { 
        success: false, 
        error: 'Please enter a valid email address.' 
      };
    }

    // Validate field lengths
    if (trimmedName.length < 2 || trimmedName.length > 100) {
      return { 
        success: false, 
        error: 'Name must be between 2 and 100 characters.' 
      };
    }

    if (trimmedMessage.length < 10 || trimmedMessage.length > 2000) {
      return { 
        success: false, 
        error: 'Message must be between 10 and 2000 characters.' 
      };
    }

    // Get recipient email from environment variable
    const recipientEmail = process.env.CONTACT_EMAIL;
    
    // Check if Resend is configured
    const resend = getResendClient();
    if (!resend) {
      console.error('Resend not configured. Please set RESEND_API_KEY and CONTACT_EMAIL environment variables.');
      return { 
        success: false, 
        error: 'Email service not configured. Please contact the site administrator.' 
      };
    }

    if (!recipientEmail) {
      console.error('CONTACT_EMAIL environment variable not set.');
      return { 
        success: false, 
        error: 'Email service not configured. Please contact the site administrator.' 
      };
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Update this with your verified domain
      to: [recipientEmail],
      replyTo: trimmedEmail,
      subject: 'New message from jfelicio.github.io',
      text: `Name: ${trimmedName}\n\nEmail: ${trimmedEmail}\n\nMessage:\n${trimmedMessage}`,
    });

    if (error) {
      console.error('Resend API error:', error);
      return { 
        success: false, 
        error: 'Something went wrong. Please try again later.' 
      };
    }

    return { success: true };
  } catch (error) {
    // Log error server-side (not exposed to client)
    console.error('Email sending error:', error);
    return { 
      success: false, 
      error: 'Something went wrong. Please try again later.' 
    };
  }
}

