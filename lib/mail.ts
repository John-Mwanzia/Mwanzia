import nodemailer from 'nodemailer';

export async function sendMail({
  to,
  name,
  subject,
  body,
}: {
  to: string;
  name: string;
  subject: string;
  body: string;
}) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  try {
    const result = await transporter.verify();
  } catch (error) {
    console.log(error);
    return;
  }

  try {
    const info = await transporter.sendMail({
      from: `"${name}" <${SMTP_EMAIL}>`,
      to,
      subject,
      html: body,
    });
  } catch (error) {
    console.log(error);
  }
}
