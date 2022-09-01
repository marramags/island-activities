var express = require('express');
var router = express.Router();
const reviewsCtrl = require('../controllers/reviews');

// http://localhost:3000/activities/12345
router.get('/activities/:id/reviews', reviewsCtrl.newReview);	//all reviews per activity
	


// http://localhost:3000/activities/12345/
router.post('/activities/:id/reviews', reviewsCtrl.addReview); //adding a review for an activity

// http://localhost:3000/activities/12345/	
router.get('/activities/:id/editReview', reviewsCtrl.editReview); //update view page route

router.put('/:id', reviewsCtrl.updateReview)	
	

module.exports = router;