const express = require('express');

//MAKE SURE Author NAME IS UPDATED BELOW
const {
    handleCreateAuthor,
    handleGetAllAuthors,
    handleGetAuthorById,
    handleUpdateAuthorById,
    handleDeleteAuthorById
} = require('../controllers/author.controller')

const router = express.Router();

router.post('/', handleCreateAuthor);
router.get('/', handleGetAllAuthors);
router.get('/:id', handleGetAuthorById);
router.put('/:id', handleUpdateAuthorById);
router.delete('/:id', handleDeleteAuthorById);

//make sure to update model name below
module.exports ={ authorRouter: router};