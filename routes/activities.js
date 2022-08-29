var express = require('express');
var router = express.Router();
const activitiesCtrl = require('../controllers/activities');

// http://localhost:3000/activities
router.get('/', activitiesCtrl.activitiesIndex); //see all activities

//http://localhost:3000/activities/new
router.get('/new', activitiesCtrl.newActivity) //add new activity

router.post('/', activitiesCtrl.addActivity)

module.exports = router;