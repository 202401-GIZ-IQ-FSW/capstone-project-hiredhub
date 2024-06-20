const express = require('express');
const emailController = require("../controllers/emailController/emailController");

const router = express.Router();

router.post('/', emailController.sendEmail);

module.exports = router;
