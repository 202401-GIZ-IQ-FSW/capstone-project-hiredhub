const nodemailer = require('nodemailer');

const emailService = async ({ name, email, message }) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS
        }
    });

    const mailOptions = {
        from: `${email} to <${process.env.GMAIL_USER}>`,
        replyTo: email,
        to: process.env.GMAIL_USER,
        subject: `A message from ${name}`,
        text: message
    };

    

    try {
        await transporter.sendMail(mailOptions);
        return { success: true };
    } catch (error) {
        return { success: false, error: error.message };
    }
};

module.exports = emailService;
