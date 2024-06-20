require('dotenv').config();
const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "h4lv35t@gmail.com",
      pass: "rrlm ewvg vhhm yruk" 
    },
  });


transporter.verify((error, success) => {
    if (error) {
        console.error('Error configuring transporter:', error);
    } else {
        console.log('Nodemailer transporter configured successfully:', success);
    }
});

const sendEmail = (to, subject, text, html) => {
    const mailOptions = {
        from: "h4lv35t@gmail.com",
        to, 
        subject,
        text,
        html
    };

    return transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };
