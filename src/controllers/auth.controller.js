const AuthServ = require('../services/auth.service')
const response = require('../utils/response')

class AuthController {
    async signup(req, res) {
        const result = await AuthServ.signup(req.body)
        res.status(201).send(response('User created', result))
    }
    async login(req, res) {
        const result = await AuthServ.login(req.body)
        res.status(200).send(response('Login successful', result))
    }
}

module.exports = new AuthController()