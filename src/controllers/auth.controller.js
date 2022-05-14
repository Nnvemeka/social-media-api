const AuthServ = require('../services/auth.service')
const response = require('../utils/response')

class AuthController {
    async signup(req, res) {
        const result = await AuthServ.signup(req.body)
        res.status(201).send(response('User created', result))
    }
}

module.exports = new AuthController()