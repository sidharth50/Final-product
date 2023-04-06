const mongoose = require('mongoose');


const CategorySchema = new mongoose.Schema(
    {
        category : { type: String, require: true },
        category_id: { type: Number, require: true },
        images: { type: String, require: true }
    }
);


const CategoryModel = mongoose.model("category", CategorySchema, "CategoryList");

module.exports = CategoryModel;