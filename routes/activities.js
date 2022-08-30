var express = require('express');
var router = express.Router();
const activitiesCtrl = require('../controllers/activities');

// http://localhost:3000/activities
router.get('/', activitiesCtrl.activitiesIndex); //INDEX: see all activities

//http://localhost:3000/activities/new
router.get('/new', activitiesCtrl.newActivity) // viewing form for add new activity

router.post('/', activitiesCtrl.addActivity) //CREATE: add new activity

router.get('/:id', activitiesCtrl.seeMore) //more details on each activity

module.exports = router;