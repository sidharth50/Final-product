const APIRouter = require('express').Router();
const location = require('../Controller/locationController');
const mealtype = require('../Controller/mealtypeController');
const restaurant = require('../Controller/restaurantController');
const payment = require("../controller/PaymentController");
// routing
APIRouter.get('/', location.homePage);

APIRouter.get('/about-us', location.aboutUs);

APIRouter.get('/get-location-list', location.getLocation);
APIRouter.get('/get-location-by-id/:id', location.getLocationById);
APIRouter.get('/get-location-by-city', location.getLocationByCity);
APIRouter.get('/get-meal-type-list', mealtype.getMealTypeList);
APIRouter.get('/get-restaurant-list', restaurant.getRestaurantList);
APIRouter.get('/get-restaurant-by-location/:loc_id', restaurant.getRestaurantByLocation);
APIRouter.get(
    "/get-restaurant-details-by-id/:id",
    restaurant.getRestaurantDetailsById
  );
  
  
  APIRouter.get(
    "/get-menu-items-by-restaurant-id/:id",
    restaurant.getMenuItemsByRestaurant
  );
  APIRouter.get(
    "/get-restaurant-by-location-id",
    restaurant.getRestaurantLocationId
  );
APIRouter.post('/filter', restaurant.filter);
//APIRouter.post("/payment", payment.saveOrder);
APIRouter.post("/create-order", payment.createOrder);
APIRouter.post('/verify-payment', payment.verify);

module.exports = APIRouter;
