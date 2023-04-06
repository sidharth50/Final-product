const ProductModel = require("../Model/ProductModel");



module.exports.homePage = (request, response)=> {
  response.status(200).send({ status: false,
     message :"Welcome"});
}

module.exports.getProductList = async (request, response) => {
    try {
      let result = await ProductModel.find();
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

  module.exports.getProductById = async(request, response) => {
    let {id} = request.params;
    let result = await ProductModel.find({category_id : id}); 
    if(result){
    response.status(200).send({ status: true,
        result,
    });
    }else{
        response.status(500).send({ status: false,
            message: "Result not found",
        });
    }   
};

module.exports.getProductDetailsById = async (request, response) => {
    let { id } = request.params;
    try {
      let result = await ProductModel.find({id : id});
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

  module.exports.filter = async (request, response) => {
    let { meal_type, location, cuisines, sort } = request.body;
    if (sort === undefined) {
      sort = 1;
    }
    // 1 = asc , -1 = desc
    let filterRecord = {};
  
    if (meal_type !== undefined) filterRecord["mealtype_id"] = meal_type;
    if (location !== undefined) filterRecord["location_id"] = location;
    if (cuisines !== undefined) filterRecord["cuisine_id"] = { $in: cuisines };
  
    console.log(filterRecord);
    try {
      let result = await ProductModel.find(filterRecord).sort({
        min_price: sort,
      });
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