const User = require('../models/user.model')
const CustomError = require('../utils/custom-error')

class UserService {
    // Update user
    async updateUser(userId, data) {
        const user = await User.findByIdAndUpdate(
            { _id: userId },
            { $set: data },
            { new: true }
        )
        if (!user) throw new CustomError('User does not exist!', 404)

        return user
    }
    // Delete User
    async deleteUser(userId) {
        const user = await User.findByIdAndDelete({ _id: userId })
        if (!user) throw new CustomError('User does not exist', 404)

        return user
    }

    // Get User
    async getUser(userId) {
        const user = await User.findOne({ _id: userId})
        if (!user) throw new CustomError('User not found', 404)

        return user
    }
    // Follow a user
    async followUser(userId, data) {
        if (userId === data._id) throw new CustomError('You cannot follow yourself', 403)

        const user = await User.findById({ _id: userId})
        if (!user) throw new CustomError('User not found', 404)

        const currentUser = await User.findById({ _id: data._id })
        if (!currentUser) throw new CustomError('User not found', 404)

        if (!user.followers.includes(data._id)) {
            await user.updateOne({ $push: { followers: data._id } })
            await currentUser.updateOne({ $push: { followings: userId } })
        }

        return user
    }    
}

module.exports = new UserService()