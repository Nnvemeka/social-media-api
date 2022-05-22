const PostServ = require('../services/post.service')
const response = require('../utils/response')

class PostController {
    async createPost(req, res) {
        const result = await PostServ.create(req.body)
        res.status(201).send(response('Post created', result))
    }
    async updatePost(req, res) {
        const result = await PostServ.updatePost(req.params.postId, req.body)
        res.status(200).send(response('Post updated', result))
    }
    async deletePost(req, res) {
        const result = await PostServ.deletePost(req.params.postId)
        res.status(200).send(response('Post deleted', result))
    }
    async likePost(req, res) {
        const result = await PostServ.likePost(req.params.postId, req.body)
        res.status(200).send(response('Post liked', result))
    }
    async getPost(req, res) {
        const result = await PostServ.getPost(req.params.postId)
        res.status(200).send(response('Post data', result))
    }
    async getTimelinePosts(req, res) {
        const result = await PostServ.getTimelinePosts(req.params.userId)
        res.status(200).send(response('Timeline posts', result))
    }
}

module.exports = new PostController()