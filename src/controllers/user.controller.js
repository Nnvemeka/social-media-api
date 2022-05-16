const UserServ = require('../services/user.service')
const response = require('../utils/response')

class UserController {
    async updateUser(req, res) {
        const result = await UserServ.updateUser(req.params.userId, req.body)
        res.status(200).send(response('User updated', result))
    }
    async deleteUser(req, res) {
        const result = await UserServ.deleteUser(req.params.userId)
        res.status(200).send(response('User deleted', result))
    }
    async getUser(req, res) {
        const result = await UserServ.getUser(req.params.userId)
        res.status(200).send(response('User data', result))
    }
}

module.exports = new UserController()