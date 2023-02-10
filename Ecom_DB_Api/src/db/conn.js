const mongoose = require("mongoose");

//local server

// mongoose.connect("mongodb://localhost:27017/students-api", {
//     // useCreateIndex: false,
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => {
//     console.log("connection successful");
// }).catch((err) => {
//     console.log(err);
// });

//global global server

mongoose.connect("mongodb+srv://chinu_01:chinu123@cluster0.gch4j.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connection successful");
}).catch((err) => {
    console.log(err);
});