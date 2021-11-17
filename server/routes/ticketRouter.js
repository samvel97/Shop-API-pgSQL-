const Router = require('express')
const router = new Router()
const ticketController = require('../controller/ticketController')

router.post('/', ticketController.create)
router.get('/', ticketController.getAll)
router.put('/', ticketController.update)

module.exports = router