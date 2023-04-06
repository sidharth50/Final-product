const Cat5Model = require("../Model/Cat5Model");



module.exports.getCat5List = async (request, response) => {
    try {
      let result = await Cat5Model.find();
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