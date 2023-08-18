const { seedService } = require('../services')

module.exports.get = async (req, res, next) => {
    try {
        const { id } = req.query
        if (id) {
            if (await seedService.exists(id)) return res.json(await seedService.getById(id))
        }
        res.json({ error: 'Provided id does not exist.' })
    } catch (err) {
        next(err)
    }
}

module.exports.post = async (req, res, next) => {
    try {
        const id = await seedService.generateUniqueId()
        await seedService.create(id, req.body)
        res.json({ id })
    } catch (err) {
        next(err)
    }
}