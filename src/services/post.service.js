const Post = require('../models/post.model')
const CustomError = require('../utils/custom-error')

class PostService {
    // Create a post
    async create(data) {
        const newPost = new Post(data)
        await newPost.save()

        return data = {
            userID: newPost.userId,
            desc: newPost.description,
            image: newPost.image,
            likes: newPost.likes
        }
    }

    // Update a post
    async updatePost(postId, data) {
        const post = await Post.findById({ _id: postId })
        if (!post) throw new CustomError('Post not found', 404)

        if (!post.userId === data.userId) throw new CustomError('Cannot update post', 403)
        await post.updateOne({ $set: data })

        return post
    }
}

module.exports = new PostService()