const express = require('express');
const router = express.Router();

//to check
console.log('Main/Index Router Loaded');

const homeController = require('../controllers/home_controller');
//landing page route is handled by homeController
router.get('/',homeController.home);

//home page without the welcoming animation
//prevents watching the animation everytime we submit form
const homeNoAnimation = require('../controllers/home_without_animation');
router.get('/home_no_anim',homeNoAnimation.home);

//controller for create contact route is createContoller
const createTask = require('../controllers/create_task_controller');
router.post('/create-task',createTask.add);


//exporting- to be used as a middleware
module.exports = router;