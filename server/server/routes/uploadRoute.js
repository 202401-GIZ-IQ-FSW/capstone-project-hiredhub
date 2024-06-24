const express = require('express');
const profileController = require("../controllers/uploadController/uploadController");

const router = express.Router();

router.post('/upload/profilepicture', profileController.uploadProfilePicture);
router.post('/upload/cv', profileController.uploadCV);

module.exports = router;
