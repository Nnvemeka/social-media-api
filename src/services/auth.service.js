const User = require("../models/user.model")
const CustomError = require("../utils/custom-error")

class AuthService {
    // User Sign Up
    async signup(data) {
        let user = await User.findOne({ email: data.email })
        if (user) throw new CustomError('Email already exists')

        user = new User(data)
        await user.save()

        return data = {
            id: user._id,
            email: user.email,
            username: user.username,
            password: user.password
        }
    }
}

module.exports = new AuthService()