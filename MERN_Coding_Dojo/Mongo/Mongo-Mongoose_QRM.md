Mongos Instructions

Create project folder.
add a server folder
in it add:
*config folder
*controllers folder
*models folder
*routes folder
*server.js

navigate to the project folder in the terminal
type:  npm init -y
type: npm install mongoose express

create a mongoose.config.js file and set it up like
```js
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/name_of_your_DB", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("Established a connection to the database"))
	.catch(err => console.log("Something went wrong when connecting to the database", err));
```

create a models file with a schema
Example:
```js
const mongoose = require('mongoose');
 
const UserSchema = new mongoose.Schema({
    name: String,
    age: Number
});
 
const User = mongoose.model('User', UserSchema);
module.exports = User;

// Note:  these could probably be combined as module.exports = mongoose.model('User', UserSchema);
```

create a controller file and add CRUD functions
Example:
```js
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
```

Add a routes file and associate routes with the functions in the controller
example code:
```js
const UserController = require('../controllers/user.controller');
 
module.exports = app => {
    app.get('/api/users', UserController.findAllUsers);
    app.get('/api/users/:id', UserController.findOneSingleUser);
    app.put('/api/users/:id', UserController.updateExistingUser);
    app.post('/api/users', UserController.createNewUser);
    app.delete('/api/users/:id', UserController.deleteAnExistingUser);
}
```
Set up the server.js 
example code:
```js
const express = require("express");
const app = express();

// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

// This is where we import the users routes function from our user.routes.js file
const AllMyJokesRoutes = require("./server/routes/jokes.routes");
AllMyJokesRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));
```

run the server by typing in the terminal:  nodemon server.js


Basic Mongo Commands

clear screen:  cls
show all databases:  show dbs
show current database: db
change to a database: use DB_NAME
delete current database:  db.dropDatabase()

view all collections in a database:  show collections
create a collection: db.createCollection('NAME')
delete a collection:  db.COLLECTION_NAME.drop()

CRUD Functionality:

CREATE:

add documents (i.e. JSON objects) to a collection:  db.COLLECION_NAME.insert({KEY: "Value", KEY2: "Value2"})

READ:

find all documents: db.COLLECTION_NAME.find().pretty()

find documents that meet query:  db.COLLECTION_NAME.find({key: "value"}).pretty()

find by ObjectId:  db.COLLECTION_NAME.find({_id: ObjectId("###############")})

UPDATE:

to update a document, overwriting all existing data: db.ninjas.update({keyToQuery: "ValueToQuery"}, {keyToUpdate:  "ValueToUpdate"})

to update a document to add in new data (w/o overwritting): ({keyToQuery: "ValueToQuery"}, {$set: {keyToUpdate:  "ValueToUpdate"}})
    Explanation:  the set operator has a value, which is an object that contains the key-value pair that you want to add to the document.

DELETE

delete all documents that meet criteria:  db.COLLECTION_NAME.remove({key: "value"})

to remove just one document that meets the criteria:  db.COLLECTION_NAME.remove({key: "value"}, true)

