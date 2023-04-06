const Cat6Model = require("../Model/Cat6Model");



module.exports.getCat6List = async (request, response) => {
    try {
      let result = await Cat6Model.find();
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