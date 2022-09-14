//Make sure to update "Model" with actual
const {
    createModel,
    getAllModels,
    getModelById,
    updateModelById,
    deleteModelById
    //This is the only lower case "model"
} = require('../services/model.service')

const handleCreateModel = async (req, res) => {
    try {
        const newModel = await createModel(req.body);
        return res.json(newModel);
    }catch (error) {
        return res.status(400).json(error);
    }
}

const handleGetAllModels = async (req, res) => {
    try {
        const allModels = await getAllModels();
        return res.json(allModels);
    }catch (error) {
        return res.status(400).json(error);
    }
}

const handleGetModelById = async (req, res) => {
    try {
        const oneModel = await getModelById(req.params.id);
        return res.json(oneModel);
    }catch (error) {
        return res.status(400).json(error);
    }
}

const handleUpdateModelById = async (req, res) => {
    try {
        const updatedModel = await updateModelById(req.params.id, req.body);
        return res.json(updatedModel);
    }catch (error) {
        return res.status(400).json(error);
    }
}

const handleDeleteModelById = async (req, res) => {
    try {
        const deletedModel = await deleteModelById(req.params.id);
        return res.json(deletedModel);
    }catch (error) {
        return res.status(400).json(error);
    }
}

module.exports = {
    handleCreateModel,
    handleGetAllModels,
    handleGetModelById,
    handleUpdateModelById,
    handleDeleteModelById
};