const Router = require('express')
const router = new Router()
const ticketCommentController = require('../controller/ticketCommentController')

router.post('/', ticketCommentController.create)
router.get('/', ticketCommentController.getAll)
router.put('/', ticketCommentController.update)


module.exports = router