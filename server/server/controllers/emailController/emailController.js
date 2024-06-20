const nodemailer = require('nodemailer');

const sendEmail = async (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "h4lv35t@gmail.com",
            pass: "rrlm ewvg vhhm yruk"
        }
    });

    const mailOptions = {
        from: email,
        to: process.env.GMAIL_USER,
        subject: `A message from ${name}`,
        text: message
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        res.status(500).send('Error sending email: ' + error.message);
    }
};

module.exports = {
    sendEmail
};

