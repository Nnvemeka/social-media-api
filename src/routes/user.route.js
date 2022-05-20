const router = require('express').Router()
const UserCtrl = require('../controllers/user.controller')
const auth = require('../middlewares/auth.middleware')

router.patch('/:userId', auth, UserCtrl.updateUser)
router.delete('/:userId', auth, UserCtrl.deleteUser)
router.get('/:userId', auth, UserCtrl.getUser)
router.patch('/:userId/follow', UserCtrl.followUser)
router.patch('/:userId/unfollow', UserCtrl.unFollowUser)

module.exports = router