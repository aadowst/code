//UPDATE name of object and the route
const {Model } = require('../models/model.model')

//REPLACE Model WITH ACTUAL MODEL NAME
const createModel = async (data) => {
    const newModel = await Model.create(data);
    return newModel;
}

const getAllModels = async () => {
    const allModels = await Model.find();
    return allModels;
}

const getModelById = async (id) => {
    const oneModel = await Model.findById(id);
    return oneModel;
}

const updateModelById = async (id, data) => {
    const updatedModel = await Model.findByIdAndUpdate(id, data, {
        //re-run validators
        runValidators: true,
        //return the update document
        new: true
    })
    return updatedModel;
}

const deleteModelById = async (id) => {
    const deletedModel = await Model.findByIdAndDelete(id);
    return deletedModel;
}

module.exports = {
    createModel,
    getAllModels,
    getModelById,
    updateModelById,
    deleteModelById
};