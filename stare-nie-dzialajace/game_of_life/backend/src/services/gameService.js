const db = require('hgi-db')
// filename has to be the same for filename.json (data) and filename.def.js (schema)
const form = new db('filename')

module.exports.create = async (_id, data) => await form.create(_id, data) 

module.exports.exists = async _id => await form.exists(_id)

module.exports.generateUniqueId = async () => await form.generateUniqueKey()

module.exports.getAll = async () => await form.getAll()

module.exports.getById = async _id => await form.get(_id)

module.exports.getByQuery = async query => await form.getAllByFields(query)

module.exports.remove = async _id => await form.remove(_id)

module.exports.update = async (_id, data) => await form.update(_id, data)