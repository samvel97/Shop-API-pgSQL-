const Router = require('express')
const router = new Router()
const roleRouter = require('./roleRouter')
const ticketRouter = require('./ticketRouter')
const userRouter = require('./userRouter')
const groupRouter = require('./groupRouter')
const ticketcomments = require('./ticketCommentRouter')


router.use('/user', userRouter)
router.use('/group',groupRouter)
router.use('/ticket',ticketRouter)
router.use('/role',roleRouter)
router.use('/comments',ticketcomments)

module.exports = router