const Activity = require('../models/activity')

function newReview (req, res) {
    res.render('activities/addreview', {title: 'Add Review'}); //rendering a review form
}

function addReview (req, res) { //create a review
    Activity.findById(req.params.id, function (err, activity){
        req.body.user = req.user._id;
        req.body.userName = req.user.name
        req.body.userAvatar = req.user.avatar;
        console.log("req.body.user----", req.user._id)
        console.log("req.user.name----", req.user.name)
        console.log("req.body.userAvatar = ", req.user.avatar);
        activity.reviews.push(req.body);
        activity.save(function(err){
            res.redirect(`/activities/${activity._id}`)
        })
    })
}

function editReview (req, res, next) {
   Activity.findOne({'reviews.id': req.params.id})
    .then(function(activity){
        const review = activity.reviews.id(req.params.id);
        console.log(review);
        res.render('activities/editReview', {title: 'edit review', activity, review})
    }).catch(function (err){
        return next (err);
    })
    }
//     Activity.findOne({'reviews._id': req.params.id}, function(err, activity) {
//         const review = activity.reviews.id(req.params.id);
//         res.render('/activities/editReview', {title: "Edit Review", review})
//     })
// }

function updateReview (req, res, next) {
    Activity.findOne({'reviews._id' : req.params.id}).then(function(activity){
        const review = activity.reviews.id(req.params.id);
        review.body = req.body.review;
        activity.save().then(function (){
            res.direct(`/activities/${review._id}/editReview`)
        }).catch(function(err){
            return next (err);
        })
    })
}


module.exports = {
    newReview,
    addReview,
    editReview,
    updateReview
}