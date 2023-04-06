const APIRouter = require('express').Router();
const product = require('../Controller/productController');
const payment = require("../controller/PaymentController");
const category = require("../Controller/CategoryController");
const cat1 = require('../Controller/Cat1Controller');
const cat2 = require('../Controller/Cat2Controller');
const cat3 = require('../Controller/Cat3Controller');
const cat4 = require('../Controller/Cat4Controller');
const cat5 = require('../Controller/Cat5Controller');
const cat6 = require('../Controller/Cat6Controller');
const cat7 = require('../Controller/Cat7Controller');
const cat8 = require('../Controller/Cat8Controller');
const cart = require('../Controller/CartController');


APIRouter.get('/', product.homePage);

APIRouter.get('/get-product-list', product.getProductList);
APIRouter.get('/get-product-by-id/:id', product.getProductById);
APIRouter.get('/get-product-details-by-id/:id', product.getProductDetailsById);

APIRouter.get('/get-category-list', category.getCategoryList);

APIRouter.get('/get-cat1-list', cat1.getCat1List);
APIRouter.get('/get-cat2-list', cat2.getCat2List);
APIRouter.get('/get-cat3-list', cat3.getCat3List);
APIRouter.get('/get-cat4-list', cat4.getCat4List);
APIRouter.get('/get-cat5-list', cat5.getCat5List);
APIRouter.get('/get-cat6-list', cat6.getCat6List);
APIRouter.get('/get-cat7-list', cat7.getCat7List);
APIRouter.get('/get-cat8-list', cat8.getCat8List);

APIRouter.get('/get-cart-list-by-id/:id', cart.getCartById);



APIRouter.post('/filter', product.filter);

APIRouter.post("/create-order", payment.createOrder);
APIRouter.post('/verify-payment', payment.verify);

module.exports = APIRouter;