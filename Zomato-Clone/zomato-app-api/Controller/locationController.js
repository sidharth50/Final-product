const { request } = require('express');
const LocationModel = require('../Model/LocationModel');
const locationList = require("../resources/location.json");

module.exports.aboutUs = (request, response)=> {
    response.status(200).send({ status: true,
            message: "About us page"})}

module.exports.homePage = (request, response)=> {
                response.status(200).send({ status: false,
                   message :"Welcome"});
            }            

module.exports.getLocation = async (request, response)=> {
                let result = await LocationModel.find();
                response.status(200).send({ status: true,
                   result});
            }                  
 
module.exports.getLocationById = async(request, response) => {
    let {id} = request.params;
    let result = await LocationModel.find({location_id : id}); 
    if(result){
    response.status(200).send({ status: true,
        result,
    });
    }else{
        response.status(200).send({ status: false,
            message: "Result not found",
        });
    }   
}            
module.exports.getLocationByCity = async function (request, response) {
    let { city } = request.query;
    try {
      let result = await LocationModel.find({
        city: { $regex: city + ".*", $options: "i" },
      });
      response.status(200).send({
        status: true,
        location: result,
      });
    } catch (error) {
      response.status(500).send({
        status: false,
        message: "server error",
        error,
      });
    }
  }
