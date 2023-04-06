const APIRouter = require('express').Router();
const shows = require('../Controller/showsController');


APIRouter.get('/', shows.homePage);
APIRouter.get('/shows', shows.getShowsList);
APIRouter.get("/shows/:id",shows.getShowsById);




module.exports = APIRouter;