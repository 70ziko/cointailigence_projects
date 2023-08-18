const recipeService = require('../services/recipe.service')

module.exports.get = async (req, res, next) => {
    try {
        const { id } = req.query
        if (id) {
            if (await recipeService.getById(id)) 
                return res.json(await recipeService.getById(id))
            else 
                return res.json({ error: 'Provided id does not exist.' })
        }
        res.json(await recipeService.getAll())
    } catch (err) {
        next(err)
    }
}

module.exports.post = async (req, res, next) => {
    try {
        const recipe = await recipeService.create(req.body)
        res.json(recipe)
    } catch (err) {
        next(err)
    }
}

module.exports.put = async (req, res, next) => {
    try {
        const { id } = req.params
        const recipe = await recipeService.update(id, req.body)
        res.json(recipe)
    } catch (err) {
        next(err)
    }
}

module.exports.delete = async (req, res, next) => {
    try {
        const { id } = req.params
        await recipeService.delete(id)
        res.json({ success: 'Recipe deleted successfully.' })
    } catch (err) {
        next(err)
    }
}
