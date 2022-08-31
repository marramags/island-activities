var express = require('express');
var router = express.Router();
const activitiesCtrl = require('../controllers/activities');

// http://localhost:3000/activities
router.get('/', activitiesCtrl.activitiesIndex); //INDEX: see all activities

//http://localhost:3000/activities/new
router.get('/new', activitiesCtrl.newActivity) // viewing form for add new activity

router.post('/', activitiesCtrl.addActivity) //CREATE: add new activity

router.get('/:id', activitiesCtrl.seeMore) //SHOW more details on each activity

// http://localhost:3000/activities/delete	
router.delete('/:id', activitiesCtrl.deleteActivity)	

// http://localhost:3000/activities/12345/edit
router.get('/:id/editActivities', activitiesCtrl.editActivity)	
router.put('/:id', activitiesCtrl.updateActivity)	
	
	
	

module.exports = router;