var express = require('express');
var router = express.Router();
const activitiesCtrl = require('../controllers/activities');

router.get('/', activitiesCtrl.activitiesIndex);

module.exports = router;