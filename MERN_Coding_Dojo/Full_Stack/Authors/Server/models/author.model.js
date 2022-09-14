const mongoose = require('mongoose');

//UPDATE MODEL NAME (PASCAL CASE) AND ATTRIBUTES BELOW, INCLUDING MIN- AND MAXLENGTH
const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, `{PATH} is required.`],
        minLength: [3, `{PATH} must be at least {MINLENGTH} characters.`],

    },

},
{timestamps: true}
)

const Author = mongoose.model('Author', AuthorSchema)
module.exports = {Author: Author}