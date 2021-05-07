const express = require('express');
const router = express.Router();

//to check
console.log('Main/Index Router Loaded');

const homeController = require('../controllers/home_controller');
//landing page route is handled by homeController
router.get('/',homeController.home);


//exporting- to be used as a middleware
module.exports = router;