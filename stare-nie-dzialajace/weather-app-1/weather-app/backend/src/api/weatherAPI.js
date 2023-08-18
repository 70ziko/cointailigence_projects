const { Router } = require('express')
const { seedController } = require('../controllers')

const router = Router()

router.get('/', seedController.get)
router.post('/', seedController.post)

module.exports = router