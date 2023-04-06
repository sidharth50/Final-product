const Cat2Model = require("../Model/Cat2Model");



module.exports.getCat2List = async (request, response) => {
    try {
      let result = await Cat2Model.find();
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