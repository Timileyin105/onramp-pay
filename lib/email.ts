import { Resend } from 'resend';

// Ensure RESEND_API_KEY is defined in your .env file
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendPluginEmail = async (email: string, customerName: string) => {
      if (!process.env.RESEND_API_KEY) {
            console.warn("RESEND_API_KEY is missing. Email skipped.");
            return false;
      }

      try {
            const { data, error } = await resend.emails.send({
                  from: 'Onramp Pay <onboarding@resend.dev>', // Default testing sender, user should change this
                  to: [email],
                  subject: 'Your Onramp Pay Plugin Purchase',
                  html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #4f46e5;">Thank you for your purchase!</h1>
          <p>Hi ${customerName},</p>
          <p>We successfully received your payment. You can now download the Onramp Pay plugin.</p>
          <br/>
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://onramp-pay.com/downloads/onramppay-plugin.zip" 
               style="background-color: #4f46e5; color: white; padding: 14px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
               Download Plugin
            </a>
          </div>
          <br/>
          <p>If the button above doesn't work, copy and paste this link into your browser:</p>
          <p>https://onramp-pay.com/downloads/onramppay-plugin.zip</p>
          <hr style="border: 1px solid #eee; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">© ${new Date().getFullYear()} Onramp Pay. All rights reserved.</p>
        </div>
      `,
            });

            if (error) {
                  console.error('Resend error:', error);
                  return false;
            }

            console.log('Email sent successfully:', data);
            return true;

      } catch (error) {
            console.error('Email sending failed:', error);
            return false;
      }
};
