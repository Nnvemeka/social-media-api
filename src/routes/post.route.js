const router = require('express').Router()
const PostCtrl = require('../controllers/post.controller')
const { verifyToken } = require('../middlewares/auth.middleware')

router.post('/create', verifyToken, PostCtrl.createPost)
router.patch('/update/:postId', verifyToken, PostCtrl.updatePost)
router.delete('/delete/:postId', verifyToken, PostCtrl.deletePost)
router.patch('/like/:postId', verifyToken, PostCtrl.likePost)
router.get('/:postId', verifyToken, PostCtrl.getPost)
router.get('/timeline/:userId', verifyToken, PostCtrl.getTimelinePosts)

module.exports = router