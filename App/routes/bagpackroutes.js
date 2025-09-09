let express = require('express');
const { userlist, findUserByEmail, addUser } = require('../controllers/usercontroller');
const { getpackages, findPackagesByEmail, addPackage } = require('../controllers/packagecontroller');
const { getReviews, deleteReview } = require('../controllers/reviewcontroller');
const { getTripPacks, findTripPackageById } = require('../controllers/builtpackcontroller');
const { addCustomTrip, findCustomTripByEmail, getCustomTrips } = require('../controllers/customcontroller');
const { addTripPack } = require('../controllers/trippackagecontroller');
const { generateqr } = require('../controllers/qrgenerator');
let bagpackRoutes = express.Router();



bagpackRoutes.get('/test', userlist);

bagpackRoutes.get('/userlogin', findUserByEmail);

bagpackRoutes.post('/adduser', addUser);

bagpackRoutes.get('/getpackages',getpackages);

bagpackRoutes.get('/getbookedtrips/:email', findPackagesByEmail);

bagpackRoutes.get('/getreviews', getReviews);

bagpackRoutes.delete('/deletereview/:id', deleteReview);

bagpackRoutes.get('/builtpackages', getTripPacks);

bagpackRoutes.get('/builtpackages/:id', findTripPackageById);

bagpackRoutes.post('/addpackage', addPackage);

bagpackRoutes.post('/addCustom',addCustomTrip);

bagpackRoutes.get('/getCustomTripById/:email',findCustomTripByEmail );

bagpackRoutes.get('/getCustomTrips', getCustomTrips);

bagpackRoutes.post('/addTrip', addTripPack);

bagpackRoutes.post('/qrgenerte',generateqr);

module.exports = bagpackRoutes;