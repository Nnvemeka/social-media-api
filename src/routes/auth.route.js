const router = require('express').Router()
const AuthCtrl = require('../controllers/auth.controller')

router.post('/sign-up', AuthCtrl.signup)

module.exports = router