// import mongoose

const mongoose = require('mongoose');

// create schema

const locationSchema = new mongoose.Schema({
    name: {type: String, require: true},
    city_id: {type: String, require: true},
    location_id: {type: String, require: true},
    country_name: {type: String, require: true}
  });

// create model

const LocationModel = mongoose.model("location", locationSchema, "locations");

// export model

module.exports = LocationModel;