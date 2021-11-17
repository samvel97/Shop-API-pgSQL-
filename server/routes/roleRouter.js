const Router = require('express')
const router = new Router()
const roleController = require('../controller/roleController')

router.post('/', roleController.create)
router.get('/', roleController.getAll)
router.get('/:id', roleController.getOne)


module.exports = router