const emailService = require("../../services/emailService");

exports.sendEmail = async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).send('All fields are required');
    }

    const result = await emailService({ name, email, message });

    if (result.success) {
        res.status(200).send('Email sent successfully');
    } else {
        console.error('Error sending email:', result.error);
        res.status(500).send('Error sending email: ' + result.error);
    }
};

