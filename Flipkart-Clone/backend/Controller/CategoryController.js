const CategoryModel = require('../Model/CategoryModel');



module.exports.getCategoryList = async (request, response) => {
    try {
      let result = await CategoryModel.find();
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