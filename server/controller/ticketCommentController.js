const {TicketComments} = require('../models/index')

class TicketCommentController {
    async create(req, res){
        let {comments, ticketId} = req.body
        let comment = await TicketComments.bulkCreate([{comments}], { individualHooks: true }, ticketId)
        return res.json(comment)
    }
    async getAll(req, res){
        const comment = await TicketComments.findAll()
        return res.json(comment)
    }
    async update(req, res){
        let {id, comments} = req.body
        const comment = await TicketComments.update([{comments}],{where:{id:id}})
        return res.json(comment)
    }
}

module.exports = new TicketCommentController()