const express = require('express')
const router = express.Router()
const profileController = require('../controllers/profileController/profileController')
const JwtAuthorize = require('../middlewares/authMiddleware')

router.get('/details', JwtAuthorize, profileController.getProfile)

router.post('/create-profile', JwtAuthorize, profileController.createProfile)

router.patch('/update-profile', JwtAuthorize, profileController.updateProfile)

router.post('/add-saved-job/:id', JwtAuthorize, profileController.addSavedJobs)

router.delete('/remove-saved-job/:id', JwtAuthorize, profileController.removeSavedJobs)

router.get('/get-saved-jobs', JwtAuthorize, profileController.getSavedJobs)

router.get('/get-application-history', JwtAuthorize, profileController.getApplicationHistory)

module.exports = router;