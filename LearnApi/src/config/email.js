const nodemailer = require('nodemailer');

const createTransporter = () => {
  const { EMAIL_HOST, EMAIL_PORT, EMAIL_USER } = process.env;
  const emailPass = process.env.EMAIL_PASS || process.env.EMAIL_PASSWORD;

  if (!EMAIL_HOST || !EMAIL_PORT || !EMAIL_USER || !emailPass) {
    console.warn('Email transporter not configured. Emails will not be sent.');
    return null;
  }

  const transporter = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: Number(EMAIL_PORT),
    secure: EMAIL_PORT === '465',
    auth: {
      user: EMAIL_USER,
      pass: emailPass
    }
  });

  transporter.verify().catch((err) => {
    console.warn('Email transporter verification failed:', err.message);
  });

  return transporter;
};

const transporter = createTransporter();

const sendEmail = async (options) => {
  if (!transporter) {
    console.warn('Skipping email because transporter is not configured.');
    return;
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: options.to,
    subject: options.subject,
    text: options.text,
    html: options.html
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { transporter, sendEmail };

