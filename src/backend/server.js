// Load environment variables first
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5002;

app.post('/send', async (req, res) => {
  const { name, email, phone = '', message } = req.body || {};

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: 'Name, email, and message are required.' });
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    return res.status(400).json({ ok: false, error: 'Invalid email address.' });
  }

  const EMAIL_USER = process.env.EMAIL_USER;
  const EMAIL_PASS = process.env.EMAIL_PASS;
  const EMAIL_TO = process.env.EMAIL_TO || EMAIL_USER;

  if (!EMAIL_USER || !EMAIL_PASS) {
    console.error('Missing email credentials in .env');
    return res.status(500).json({ ok: false, error: 'Email credentials missing in .env' });
  }

  // Create transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.mail.yahoo.com',
    port: Number(process.env.SMTP_PORT) || 465,
    secure: process.env.SMTP_SECURE === 'true', // Ensure boolean
    auth: { user: EMAIL_USER, pass: EMAIL_PASS },
  });

  const mailOptions = {
    from: `"${name}" <${EMAIL_USER}>`,
    to: EMAIL_TO,
    subject: `New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully!');
    res.status(200).json({ ok: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('❌ Error sending mail:', error);
    res.status(500).json({ ok: false, error: 'Failed to send email.' });
  }
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
