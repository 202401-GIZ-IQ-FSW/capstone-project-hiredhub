require("dotenv").config();
const nodemailer = require("nodemailer");

const sendEmail = async ({ name, email, message }) => {
  const transporter = await nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `${email} to <${process.env.GMAIL_USER}>`,
    to: "hanohirani@gmail.com",
    subject: `A message from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

module.exports = {
  sendEmail,
};
