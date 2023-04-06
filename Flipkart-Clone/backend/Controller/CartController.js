const CartModel = require('../Model/CartModel');
const ProductModel = require('../Model/ProductModel');




module.exports.getCartById = async (request, response) => {
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

 
  