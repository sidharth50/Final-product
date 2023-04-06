const mongoose = require('mongoose');


const CartSchema = new mongoose.Schema({

    id: { type: Number, require: true },
    description1: { type: String, require: true },
    image: { type: String, require: true }, 
    price: { type: Number, require: true },
    oldprice: { type: Number, require: true },
    offer : {type: Number, require: true},
    qty: {type: String, require: true },
});

const CartModel = mongoose.model("cart", CartSchema, 'Cart');

module.exports = CartModel;