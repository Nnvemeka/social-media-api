const router = require('express').Router()
const PostCtrl = require('../controllers/post.controller')
const { verifyToken } = require('../middlewares/auth.middleware')

router.post('/create', verifyToken, PostCtrl.createPost)
router.patch('/update/:postId', verifyToken, PostCtrl.updatePost)

module.exports = router