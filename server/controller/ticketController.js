const {Ticket} = require('../models/index')

class TicketController {
    async create(req, res){
        let {name, discription, document, userId} = req.body
        let ticket = await Ticket.create({name, discription, document, userId}) 
        return res.json(ticket)
    }
    async getAll(req, res){
        const ticket = await Ticket.findAll()
        return res.json(ticket)
    }
    async update(req, res){
        let {id, discription} = req.body
        const ticket = await Ticket.update({discription},{where:{id:id}})
        return res.json(ticket)
    }
}

module.exports = new TicketController()