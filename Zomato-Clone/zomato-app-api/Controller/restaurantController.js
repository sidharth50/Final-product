const RestaurantModel = require("../model/RestaurantModel");
const MenuItemModel = require("../model/MenuItemModel");
const restaurantList = require("../resources/restaurant.json");
module.exports.getRestaurantList = async (request, response) => {
  try {
    let result = await RestaurantModel.find();
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

module.exports.getRestaurantByLocation = async (request, response) => {
  let { loc_id } = request.params;
  try {
    let result = await RestaurantModel.find({ location_id: loc_id });
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

module.exports.getRestaurantDetailsById = async (request, response) => {
  let { id } = request.params;
  try {
    let result = await RestaurantModel.findById(id);
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

module.exports.getMenuItemsByRestaurant = async (request, response) => {
  let { id } = request.params;
  try {
    let result = await MenuItemModel.find({ restaurantId: id });
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

module.exports.getRestaurantLocationId = async function (request, response) {
  let { lid, rest } = request.query;

  try {
    let data = await RestaurantModel.find(
      {
        name: { $regex: rest + ".*", $options: "i" },
        location_id: Number(lid),
      },
      { name: 1, image: 1, locality: 1, _id: 1, city: 1 }
    );
    response.status(200).send({ status: true, result: data });
  } catch (error) {
    response.status(500).send({
      status: false,
      message: "server error",
      error,
    });
  }
},

module.exports.filter = async (request, response) => {
  let {
    mealtype,
    location,
    cuisine,
    lcost,
    hcost,
    page,
    sort,
    itemsPerPage,
  } = request.body;
  sort = sort ? sort : 1;
  page = page ? page : 1;
  itemsPerPage = itemsPerPage ? itemsPerPage : 2;

  // 1,2,3,4 = 0 1 2 3
  // [KFC , BABA ka Dhaba,Domino's, Burger King]
  // [0,1,2,3] ==> [0,1]
  // slide(2,4)
  // 2 * 2 - 2 ===> 2
  // 2 * 2===> 4

  let staringIndex = page * itemsPerPage - itemsPerPage; //0
  let lastIndex = page * itemsPerPage; // 2
  // sort high to low -1
  // sort low to high 1

  // lcost = 500
  // hcost = 1000

  let filterObject = {};

  if (mealtype) filterObject["mealtype_id"] = mealtype;
  if (location) filterObject["location_id"] = location;
  if (lcost && hcost)
    filterObject["min_price"] = { $lte: hcost, $gte: lcost };

  cuisine && (filterObject["cuisine_id"] = { $in: cuisine });

  try {
    let result = await RestaurantModel.find(filterObject, {
      aggregate_rating: 1,
      city: 1,
      image: 1,
      locality: 1,
      name: 1,
      min_price: 1,
      cuisine: 1,
    }).sort({
      min_price: sort,
    });
    const filterResult = result.slice(staringIndex, lastIndex);
    response.status(200).send({
      status: true,
      result: filterResult,
    });
  } catch (error) {
    response.status(500).send({
      status: false,
      message: "server error",
      error,
    });
  }
}


