const express = require('express');

//MAKE SURE MODEL NAME IS UPDATED BELOW
const {
    handleCreateModel,
    handleGetAllModels,
    handleGetModelById,
    handleUpdateModelById,
    handleDeleteModelById
} = require('../controllers/model.controller')

const router = express.Router();

router.post('/', handleCreateModel);
router.get('/', handleGetAllModels);
router.get('/:id', handleGetModelById);
router.put('/:id', handleUpdateModelById);
router.delete('/:id', handleDeleteModelById);

//make sure to update model name below
module.exports ={ modelRouter: router};