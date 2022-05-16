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
}

module.exports = new UserService()