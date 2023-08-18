const { Router } = require('express')
const recipeController = require('../controllers/recipe.controller')

const router = Router()

router.get('/recipes', recipeController.get)
router.post('/recipes', recipeController.post)
router.put('/recipes/:id', recipeController.put)
router.delete('/recipes/:id', recipeController.delete)

module.exports = router
