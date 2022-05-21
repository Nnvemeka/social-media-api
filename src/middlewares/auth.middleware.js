const JWT = require('jsonwebtoken')
const User = require('../models/user.model')
const CustomError = require('../utils/custom-error')
const { JWT_SECRET } = process.env

const verifyToken = async (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '')
    if (!token) {
        res.status(401).send('Unauthorized access: Token not found')
    }
    const decoded = JWT.verify(token, JWT_SECRET)
    const user = await User.findOne({ _id: decoded.id, 'tokens.token': token })

    if (!user) {
        res.status(401).send('Unauthorized access: User does not exist')
    }

    req.user = user
    next()
}

const auth = (req, res, next) => {
    verifyToken(req, res, async () => {
        if (req.user.id === req.params.userId || req.user.isAdmin) {
            next()
        } else {
            res.status(403).send('Unauthorized access!')
        }
    })
}

module.exports = {verifyToken, auth}