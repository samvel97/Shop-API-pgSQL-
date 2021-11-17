const { Role } = require('../models/index')
const ApiError = require('../error/index')

class RoleController {
    async create(req, res) {
        try {
            let {role} = req.body
            const roles = await Role.create({role})
            return res.json(roles)
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const roles = await Device.findAll()
        return res.json(roles)
    }

    async getOne(req, res) {
        // const {id} = req.params
        // const device = await Device.findOne(
        //     {
        //         where:{id},
        //         // include:[{model:DeviceInfo, as:'info'}]
        //     },
        // )
        // return res.json(device)
    }
}

module.exports = new RoleController()