const router = require('express').Router()
const PostCtrl = require('../controllers/post.controller')
const auth = require('../middlewares/auth.middleware')

router.post('/create-post', PostCtrl.createPost)

module.exports = router