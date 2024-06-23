const express = require('express');
const router = express.Router();
const upload = require('../config/multerConfig');
const profileController = require('../controllers/uploadController/uploadController');

router.post('/uploadProfilePicture', upload.single('profilePicture'), profileController.uploadProfilePicture);

router.post('/uploadResume', upload.single('resume'), profileController.uploadResume);

module.exports = router;
