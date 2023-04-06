const showsModel = require('../model/showsModel');


module.exports.homePage =  (request, response) => {
    
    
      response.status(200).send({
        status: true,
        message: "welcome to home page",
      
      })
    };

module.exports.getShowsList = async (request, response) => {
    try {
      let result = await showsModel.find();
      response.status(200).send({
        status: true,
        result,
      });
    } catch (error) {
      console.log(error);
      response.status(500).send({
        status: false,
        message: "server error",
      });
    }
  };
  
  module.exports.getShowsById = async (request, response) => {
    let { id } = request.params;
    try {
      let result = await showsModel.findById(id);
      response.status(200).send({
        status: true,
        result,
      });
    } catch (error) {
      console.log(error);
      response.status(500).send({
        status: false,
        message: "server error",
      });
    }
  };  

  