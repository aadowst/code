const mongoose = require('mongoose');

//Note:  name of directory is after localhost/
mongoose.connect("mongodb://localhost/crmdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Established a connection to the database"))
.catch(err => console.log("Something went wrong when connecting to the data base", err));