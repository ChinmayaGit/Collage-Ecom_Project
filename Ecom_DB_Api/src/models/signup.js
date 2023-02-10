const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');

const signupSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        minlength: 5,
        unique: [true, "Email already exist."],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invilid Email");
            }
        }
    },
    password: {
        type: String,
        require: true,
        minlength: 5,
    },
    phone: {
        type: Number,
        // require: true,
    },
    address: {
        type: String,
        // require: true,
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }
    ]
})

// token creation
signupSchema.methods.generateAuthToken = async function () {
    try {
        const token = jwt.sign({ _id: this._id }, "thisisakeyCryptokeyof32bitiamaut");
        this.tokens = this.tokens.concat({ token: token })
        await this.save();
        return token;

        console.log(token);
    } catch (error) {
        res.send("res sen" + error);
        console.log("cons send" + error);
    }
}

const Signup = new mongoose.model("Signup", signupSchema);

module.exports = Signup;


