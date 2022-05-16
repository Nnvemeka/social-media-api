const UserServ = require('../services/user.service')
const response = require('../utils/response')

class UserController {
    async updateUser(req, res) {
        const result = await UserServ.updateUser(req.params.userId, req.body)
        res.status(200).send(response('User updated', result))
    }
}

module.exports = new UserController()