//Make sure to update "Author" with actual
const {
    createAuthor,
    getAllAuthors,
    getAuthorById,
    updateAuthorById,
    deleteAuthorById
    //This is the only lower case "Author"
} = require('../services/author.service')

const handleCreateAuthor = async (req, res) => {
    try {
        const newAuthor = await createAuthor(req.body);
        return res.json(newAuthor);
    }catch (error) {
        return res.status(400).json(error);
    }
}

const handleGetAllAuthors = async (req, res) => {
    try {
        const allAuthors = await getAllAuthors();
        return res.json(allAuthors);
    }catch (error) {
        return res.status(400).json(error);
    }
}

const handleGetAuthorById = async (req, res) => {
    try {
        const oneAuthor = await getAuthorById(req.params.id);
        return res.json(oneAuthor);
    }catch (error) {
        return res.status(400).json(error);
    }
}

const handleUpdateAuthorById = async (req, res) => {
    console.log("controller", req)
    try {
        const updatedAuthor = await updateAuthorById(req.params.id, req.body);
        console.log("controller", updatedAuthor)
        return res.json(updatedAuthor);
    }catch (error) {
        return res.status(400).json(error);
    }
}

const handleDeleteAuthorById = async (req, res) => {
    try {
        const deletedAuthor = await deleteAuthorById(req.params.id);
        return res.json(deletedAuthor);
    }catch (error) {
        return res.status(400).json(error);
    }
}

module.exports = {
    handleCreateAuthor,
    handleGetAllAuthors,
    handleGetAuthorById,
    handleUpdateAuthorById,
    handleDeleteAuthorById
};