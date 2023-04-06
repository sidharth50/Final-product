const Cat1Model = require("../Model/Cat1Model");



module.exports.getCat1List = async (request, response) => {
    try {
      let result = await Cat1Model.find();
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