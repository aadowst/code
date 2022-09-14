//UPDATE name of object and the route
const {Author } = require('../models/author.model')

//REPLACE Model WITH ACTUAL MODEL NAME
const createAuthor = async (data) => {
    const newAuthor = await Author.create(data);
    return newAuthor;
}

const getAllAuthors = async () => {
    const allAuthors = await Author.find();
    return allAuthors;
}

const getAuthorById = async (id) => {
    const oneAuthor = await Author.findById(id);
    return oneAuthor;
}

const updateAuthorById = async (id, data) => {
    const updatedAuthor = await Author.findByIdAndUpdate(id, data, {
        //re-run validators
        runValidators: true,
        //return the update document
        new: true
    })
    console.log("service ",updatedAuthor)
    return updatedAuthor
}

const deleteAuthorById = async (id) => {
    const deletedAuthor = await Author.findByIdAndDelete(id);
    return deletedAuthor;
}

module.exports = {
    createAuthor,
    getAllAuthors,
    getAuthorById,
    updateAuthorById,
    deleteAuthorById
};