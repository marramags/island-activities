var express = require('express');
var router = express.Router();
const reviewsCtrl = require('../controllers/reviews');

// http://localhost:3000/activities/12345/newReview	
router.get('/activities/:id/reviews', reviewsCtrl.newReview)	
	


// http://localhost:3000/activities/12345/addreview	
router.post('/activities/:id/reviews', reviewsCtrl.addReview);

module.exports = router;