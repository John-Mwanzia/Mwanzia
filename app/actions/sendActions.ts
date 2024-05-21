'use server';

import { sendMail } from '@/lib/mail';

const sendActions = async (name: string, email: string, message: string) => {
  try {
    await sendMail({
      to: 'johnmwanzia277@gmail.com',
      name: name,
      subject: 'Portfolio Visit',
      body: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
      <div style="text-align: center; padding-bottom: 20px;">
        <h1 style="color: #333;">Hello, John!</h1>
        <p style="font-size: 16px; color: #555;">You have a new message from your portfolio visitor.</p>
      </div>
      <div style="padding: 20px; background-color: #f9f9f9; border-radius: 10px;">
        <h2 style="color: #333;">Visitor Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <h2 style="color: #333; margin-top: 20px;">Message</h2>
        <p style="font-size: 14px; color: #555; line-height: 1.5;">${message}</p>
      </div>
      <div style="text-align: center; padding-top: 20px;">
        <p style="font-size: 12px; color: #999;">This email was sent from your portfolio contact form.</p>
      </div>
    </div>

            `,
    });

    return {
      status: 'success',
      message: 'Email send successfully',
    };
  } catch (error) {
    return {
      status: 'error',
      message: (error as Error).message,
    };
  }
};

export default sendActions;
