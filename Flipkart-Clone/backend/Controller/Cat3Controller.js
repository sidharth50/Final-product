const Cat3Model = require("../Model/Cat3Model");



module.exports.getCat3List = async (request, response) => {
    try {
      let result = await Cat3Model.find();
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