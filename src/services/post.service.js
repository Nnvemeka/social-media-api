const Post = require('../models/post.model')
const CustomError = require('../utils/custom-error')

class PostService {
    // Create post
    async create(data) {
        const newPost =  new Post(data)
        await newPost.save()

        return data = {
            userID: newPost.userId,
            desc: newPost.description,
            image: newPost.image,
            likes: newPost.likes
        }
    }
}

module.exports = new PostService()