const { Group } = require("../models/index")

class GroupController {
    async create(req, res){
        const {name} = req.body
        const type = await Group.create({name})
        return res.json(type)
    }
    async getAll(req, res){
        const types = await Group.findAll()
        return res.json(types)
    }
}

module.exports = new GroupController()