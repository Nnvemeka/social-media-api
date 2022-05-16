const JWT = require('jsonwebtoken')
const User = require('../models/user.model')
const CustomError = require('../utils/custom-error')
const { JWT_SECRET } = process.env

const verifyToken = async (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '')
    if (!token) throw new CustomError('Unauthorized access: Token not found!', 401)

    const decoded = JWT.verify(token, JWT_SECRET)
    const user = await User.findOne({ _id: decoded.id, 'tokens.token': token })

    if (!user) throw new CustomError('Unauthorized access: User does not exist', 401)

    req.user = user
    next()
}

const auth = (req, res, next) => {
    verifyToken(req, res, async () => {
        if (req.user.id === req.params.userId || req.user.isAdmin) {
            next()
        } else {
            res.status(401).send('Unauthorized access!')
        }
    })
}

module.exports = auth