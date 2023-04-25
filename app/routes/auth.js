const express = require('express')
const router = express.Router()
const checkAuth = require('../middleware/auth')
const { loginCtrl, registerCtrl, changePassword } = require('../controllers/auth')

router.post('/login', loginCtrl)
router.post('/changePassword', changePassword)
router.post('/register',registerCtrl)

module.exports = router 