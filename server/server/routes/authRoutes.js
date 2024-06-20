const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController/authController')

router.post('/signup', authController.signup)

router.post('/signin', authController.signin)

router.post('/signout', authController.signout)

module.exports = router;