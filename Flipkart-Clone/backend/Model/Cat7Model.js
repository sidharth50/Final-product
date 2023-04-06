const mongoose = require('mongoose');


const CatSchema = new mongoose.Schema(
    {
        
        id: { type: Number, require: true },
        title: { type: String, require: true },
        price: { type: Number, require: true },
        oldprice: { type: Number, require: true },
        offer: { type: String, require: true },
        category: { type: String, require: true },
        category_id: { type: Number, require: true },
        description1: { type: String, require: true },
        description2: { type: String, require: true },
        description3: { type: String, require: true },
        description4: { type: String, require: true },
        description5: { type: String, require: true },
        image: { type: String, require: true }
      }

);

const Cat7Model = mongoose.model("categoryy6", CatSchema, "Cat7");

module.exports = Cat7Model;