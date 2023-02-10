// const mongoose = require('mongoose');
// const validator = require('validator');

// const userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         require: true,
//         minlength: 3,
//     },
//     email: {
//         type: String,
//         require: true,
//         minlength: 5,
//         unique: [true, "Email already exist."],
//         validate(value) {
//             if (!validator.isEmail(value)) {
//                 throw new Error("Invilid Email");
//             }
//         }
//     },
//     phone: {
//         type: Number,
//         require: true,
//     },
//     address: {
//         type: String,
//         require: true,
//     },
//     // image: {
//     //     type: String,
//     //     require: true,
//     // },
//     // date: {
//     //     type: Date,
//     //     default: Date.now
//     // }
// })

// const User = new mongoose.model("User", userSchema);

// module.exports = User;


