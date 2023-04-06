const mongoose = require('mongoose');

const showsSchema = new mongoose.Schema(
    {
        _id: {type: String},
        title: {type: String},
        title_img: {type: String},
        synopsis: {type: String},
        banner: {type: String},
        ratings: {type: String},
        path: {type: String}
      }
);

const ShowsModel = mongoose.model("show", showsSchema, "videos");

module.exports = ShowsModel;