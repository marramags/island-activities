var express = require('express');
var router = express.Router();
const activitiesCtrl = require('../controllers/activities');
const isLoggedIn = require('../config/auth');


// http://localhost:3000/activities
router.get('/', activitiesCtrl.activitiesIndex); //INDEX: see all activities

//http://localhost:3000/activities/new
router.get('/new', isLoggedIn, activitiesCtrl.newActivity) // NEW viewing form for add new activity

router.post('/', activitiesCtrl.addActivity) //CREATE: add new activity

router.get('/:id', activitiesCtrl.seeMore) //SHOW more details on each activity


// http://localhost:3000/activities/12345/edit
router.get('/:id/editA', activitiesCtrl.editActivity)	//get for edit page

// http://localhost:3000/activities/12345
router.put('/:id', activitiesCtrl.updateActivity) //edit a single activity - updates activity

// http://localhost:3000/activities/delete	
router.delete('/:id', activitiesCtrl.deleteActivity)	//DELETE


	
// router.put('/:id', activitiesCtrl.updateActivity)

module.exports = router;