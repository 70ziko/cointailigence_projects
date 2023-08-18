const mongoose = require('mongoose');
const Recipe = require('../models/recipe.model');

module.exports.create = async (data) => {
    const recipe = new Recipe(data);
    return await recipe.save();
}

module.exports.getAll = async () => {
    return await Recipe.find();
}

module.exports.getById = async (id) => {
    return await Recipe.findById(id);
}

module.exports.update = async (id, data) => {
    return await Recipe.findByIdAndUpdate(id, data, { new: true });
}

module.exports.delete = async (id) => {
    return await Recipe.findByIdAndRemove(id);
}
