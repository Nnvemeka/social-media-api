const router = require('express').Router()

router.use('/auth', require('./auth.route'))
router.use('/user', require('./user.route'))
router.use('/posts', require('./post.route'))

module.exports = router