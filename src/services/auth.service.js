const User = require("../models/user.model")
const bcrypt = require('bcrypt')
const CustomError = require("../utils/custom-error")

class AuthService {
    // User Sign Up
    async signup(data) {
        let user = await User.findOne({ email: data.email })
        if (user) throw new CustomError('Email already exists', 404)

        user = new User(data)

        //Generate token
        token = await user.generateAuthToken()

        await user.save()

        return data = {
            id: user._id,
            email: user.email,
            username: user.username,
            password: user.password,
            token
        }
    }

    // User login
    async login(data) {
        if (!data.email) throw new CustomError('Email is required')
        if (!data.password) throw new CustomError('Password is required')

        // Check if user exists
        const user = await User.findOne({ email: data.email })
        if (!user) throw new CustomError('User does not exist!', 404)

        // Check if password is correct
        const isCorrect = await bcrypt.compare(data.password, user.password)
        if (!isCorrect) throw new CustomError('Incorrect email or password')

        // Generate token
        const token = await user.generateAuthToken()

        return data = {
            uid: user._id,
            email: user.email,
            token
        }

    }
}

module.exports = new AuthService()