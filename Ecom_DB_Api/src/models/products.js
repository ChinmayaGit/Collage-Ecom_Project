const mongoose = require('mongoose');
const validator = require('validator');

const prodSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        minlength: 3,
    },
    des: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
        minlength: 10,
    },
    address: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
})

const Product = new mongoose.model("Product", prodSchema);

module.exports = Product;


