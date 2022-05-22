const Post = require('../models/post.model')
const User = require('../models/user.model')
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

    // Get a post 
    async getPost(postId) {
        const post = await Post.findById(postId)
        if (!post) throw new CustomError('Post not found', 404)

        return post
    }

    // Get timeline post 
    async getTimelinePosts(userId) {
        const currentUser = await User.findById(userId)
        if (!currentUser) throw new CustomError('User does not exist', 404)

        const userPosts = await Post.find({ userId: currentUser._id })
        if (!userPosts) throw new CustomError('Posts not found', 404)

        const timeline = await Promise.all(
            currentUser.followings.map((friendId) => {
                return Post.find({ userId: friendId })
            })
        )
        return userPosts.concat(...timeline)
    }
}

module.exports = new PostService()