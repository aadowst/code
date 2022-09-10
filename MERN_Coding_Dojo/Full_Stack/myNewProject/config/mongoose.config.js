const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/crmdb", {
    useNewUrlParser:  true,
    useUnifiedTopology:  true,
})
.then(() => console.log("Established a connection to the database"))
.catch(err => console.log("Smething went wrong connecting to the database", err));