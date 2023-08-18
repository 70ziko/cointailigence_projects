const { Router } = require('express')
const { seedController, userController, recipeController } = require('../controllers')

const router = Router()

// Seed routes
router.get('/', seedController.get)
router.post('/', seedController.post)

// User routes
router.post('/register', userController.register)
router.post('/login', userController.login)

// Recipe routes
router.post('/recipe', recipeController.create)
router.put('/recipe/:id', recipeController.update)
router.delete('/recipe/:id', recipeController.delete)
router.get('/recipe/:id/share', recipeController.share)

module.exports = router
