var express = require('express');
var router = express.Router();
const reviewsCtrl = require('../controllers/reviews');

// http://localhost:3000/activities/12345/addreview	
router.post('/activities/:id/', reviewsCtrl.addReview);

module.exports = router;