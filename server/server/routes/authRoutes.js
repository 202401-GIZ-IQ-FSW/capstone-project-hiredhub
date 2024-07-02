const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController/authController')
const passport = require('passport')


// Route to initiate Google OAuth
router.get('/google', 
    authController.setRole,
    passport.authenticate('google', { scope: ['profile', 'email']})
)

// Callback route after Google OAuth authentication
router.get('/google/callback', 
    passport.authenticate('google', { failureRedirect: '/api/auth/signin'}),
    authController.googleCallback
)

// Other authentication routes (signup, signin, signout)
router.post('/signup', authController.signup)
router.post('/signin', authController.signin)
router.post('/signout', authController.signout)

module.exports = router;