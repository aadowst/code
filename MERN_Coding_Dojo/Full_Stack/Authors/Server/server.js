require('./config/mongoose.config');

const express = require('express');
const cors = require('cors');

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// CHANGE THE MODEL NAME BELOW (not sure if using variable will work so check)
const {authorRouter} = require('./routes/author.routes');
const modelName = "author"  

app.use(`/api/${modelName}s`, authorRouter)

const port = 8000;
app.listen(port, () => console.log(`Listening on port:  ${port}`))