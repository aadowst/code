const mongoose = require('mongoose');

//UPDATE MODEL NAME (PASCAL CASE) AND ATTRIBUTES BELOW, INCLUDING MIN- AND MAXLENGTH
const ModelSchema = new mongoose.Schema({
    attribute1: {
        type: String,
        required: [true, `{PATH} is required.`],
        minLength: [x, `{PATH} must be at least {MINLENGTH} characters.`],
        maxLength: [y, `{PATH} must be less than {MAXLENGTH} characters.`]
    },
    
    attribute2: {
        type: Boolean,
        default: false
    }
    //add other attributes as needed
},
{timestamps: true}
)

const Model = mongoose.model('Model', ModelSchema)
module.exports = {Model: Model}