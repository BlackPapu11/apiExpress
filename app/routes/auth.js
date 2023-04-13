const express = require('express')
const router = express.Router()
const checkAuth = require('../middleware/auth')
const { loginCtrl, registerCtrl } = require('../controllers/auth')

router.post('/login', loginCtrl)
router.post('/register',registerCtrl)

module.exports = router 