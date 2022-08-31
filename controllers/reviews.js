const Activity = require('../models/activity')

function newReview (req, res) {
    res.render('activities/addreview', {title: 'Add Review'});
}

function addReview (req, res) { //create
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

// function editReview (req, res) {
//    Activity.findOne({'reviews._id': req.params.id})
//     .then(function(activity){
//         const review = activity.reviews.id(req.params.id);
//         res.render('./activities/editReview', {title: 'edit review', review, activity})
//     })
//     }
    // Activity.findOne({'reviews._id': req.params.id}, function(err, activity) {
    //     const review = activity.reviews.id(req.params.id);
    //     res.render('reviews/edit', {review})
    // })
// }


module.exports = {
    newReview,
    addReview,
    // editReview
}