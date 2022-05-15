const router = require('express').Router()
const UserCtrl = require('../controllers/user.controller')

router.patch('/:userId', UserCtrl.updateUser)

module.exports = router