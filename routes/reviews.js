var express = require('express');
var router = express.Router();
const reviewsCtrl = require('../controllers/reviews');

// http://localhost:3000/activities/12345/newReview	
// router.get('/activities/:id/reviews', reviewsCtrl.newReview)	
	


// http://localhost:3000/activities/12345/addreview	
// router.post('/:id/reviews', reviewsCtrl.addReview);

// http://localhost:3000/activities/12345/	
// router.get('/:id/reviews/editReview', reviewsCtrl.editReview); //update view page route

// router.put('/:id', activitiesCtrl.updateReview)	
	

module.exports = router;