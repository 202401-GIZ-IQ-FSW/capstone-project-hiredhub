const emailService = require('../../services/emailService');

exports.sendEmail = async (req, res) => {
    const { to, subject, text, html } = req.body;

    try {
        await emailService.sendEmail(to, subject, text, html);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Error sending email' });
    }
};


