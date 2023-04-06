const Cat7Model = require("../Model/Cat7Model");



module.exports.getCat7List = async (request, response) => {
    try {
      let result = await Cat7Model.find();
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