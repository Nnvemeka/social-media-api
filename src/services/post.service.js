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
        const post = await Post.findByIdAndUpdate(
            { _id: postId },
            { $set: data },
            { new: true }
        )

        if (!post) throw new CustomError('Post not found', 404)

        return post
    }

    // Delete a post 
    async deletePost(postId) {
        const post = await Post.findByIdAndDelete({ _id: postId })
        if (!post) throw new CustomError('Post not found', 404)

        return post
    }

    // Like/dislike a post
    async likePost(postId, data) {
        const post = await Post.findById({ _id: postId })
        if (!post) throw new CustomError('Post not found', 404)

        if (!post.likes.includes(data.userId)) {
            await post.updateOne({ $push: { likes: data.userId } })
        } else {
            await post.updateOne({ $pull: { likes: data.userId } })
        }

        return post
    }
}

module.exports = new PostService()