const Cat8Model = require("../Model/Cat8Model");



module.exports.getCat8List = async (request, response) => {
    try {
      let result = await Cat8Model.find();
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