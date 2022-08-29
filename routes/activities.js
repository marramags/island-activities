var express = require('express');
var router = express.Router();
const activitiesCtrl = require('../controllers/activities');

// http://localhost:3000/activities
router.get('/', activitiesCtrl.activitiesIndex);

//http://localhost:3000/activities/new
router.post('/new', activitiesCtrl.newActivity)

module.exports = router;