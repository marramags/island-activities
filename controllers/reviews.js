const Activity = require('../models/activity')

function newReview (req, res) {
    res.render('activities/addreview', {title: 'Add Review'});
}

function addReview (req, res) { //create
    Activity.findById(req.params.id, function (err, activity){
        req.body.user = req.user._id;
        req.body.userName = req.user.userName
        req.body.userAvatar = req.user.avatar;
        activity.reviews.push(req.body);
        activity.save(function(err){
            res,redirect(`/activities/${activity._id}`)
        })
    })
}

module.exports = {
    newReview,
    addReview
}