const Cat4Model = require("../Model/Cat4Model");



module.exports.getCat4List = async (request, response) => {
    try {
      let result = await Cat4Model.find();
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