const PostServ = require('../services/post.service')
const response = require('../utils/response')

class PostController {
    async createPost(req, res) {
        const result = await PostServ.create(req.body)
        res.status(201).send(response('Post created', result))
    }
    async updatePost(req, res) {
        const result = await PostServ.updatePost(req.params.postId, req.body)
        res.status(201).send(response('Post updated', result))
    }
}

module.exports = new PostController()