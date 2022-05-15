const router = require('express').Router()
const AuthCtrl = require('../controllers/auth.controller')

router.post('/sign-up', AuthCtrl.signup)
router.post('/login', AuthCtrl.login)

module.exports = router