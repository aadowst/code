const Joke = require('../models/jokes.model')

// CREATE
module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
    .then(newlyCreatedJoke => res.json({joke: newlyCreatedJoke}))
    .catch(err => res.json({message:  "Something went wrong", error:err}))
};

// READ
module.exports.findAllJokes = (req, res) => {
    Joke.find()
    .then(allJokes => res.json({jokes: allJokes}))
    .catch(err => res.json({message:  "Something went wrong", error:err}))
};

module.exports.findOneJoke = (req, res) => {
    Joke.findOne({_id: req.params.id})
    .then(oneJoke => res.json({joke: oneJoke}))
    .catch(err => res.json({message:  "Something went wrong", error:err}))
};

// UPDATE
module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(updatedJoke => res.json({joke: updatedJoke}))
    .catch(err => res.json({message:  "Something went wrong", error:err}))
};

// DELETE
module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
    .then(result => res.json({result: result}))
    .catch(err => res.json({message:  "Something went wrong", error:err}))
};