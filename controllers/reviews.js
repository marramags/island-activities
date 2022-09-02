const Activity = require('../models/activity')
const Review = require('../models/activity')

function newReview (req, res) {
    res.render('activities/addreview', {title: 'Add Review'}); //rendering a review form
}

function addReview (req, res) { //create a review
    Activity.findById(req.params.id, function (err, activity){
        req.body.user = req.user._id;
        req.body.userName = req.user.name
        req.body.userAvatar = req.user.avatar;
        // console.log("req.body.user----", req.user._id)
        // console.log("req.user.name----", req.user.name)
        // console.log("req.body.userAvatar = ", req.user.avatar);
        activity.reviews.push(req.body);
        // console.log(activity.reviews)
        // console.log(req.body.user)

        activity.save(function(err){
            res.redirect(`/activities/${activity._id}`)
        })
    })
}

function editReview (req, res) {

   Activity.findOne({'reviews.id': req.params.id}) //OG
    .then(function(activity){
        const review = activity.reviews.id(req.params.id);
        console.log(activity.reviews);
        console.log(req.body.user)
        res.render('activities/editReview', {title: 'edit review', activity, review})


    }).catch(function (err){
        return next (err);
    })
    }


function updateReview (req, res, next) {
        Activity.findById(req.params.id, function (err, activity){
            req.body.user = req.user._id;
            req.body.userName = req.user.name
            req.body.userAvatar = req.user.avatar;
            activity.reviews.push(req.body);
            // console.log(activity.reviews)
            // console.log(req.body)
    
            activity.save(function(err){
                res.redirect(`/activities/${activity._id}`)
            })
        })
    }


    // console.log(req.params.id)
    // Activity.findOne({'reviews._id': req.params.id})
    // console.log("AR------", Activity.reviews)

    // .then(function(activity){
    //     const review = activity.reviews.id(req.params.id);
    //     review.body = req.body.review;

    //     activity.save().then(function (){
    //     res.direct(`/activities/${review.id}`)
    //     }).catch(function(err){
    //         return next (err);
    //     })
    // })


        // Activity.findByIdAndUpdate(req.params.id, req.body, function(err, activity){
        //     console.log("AR------", activity.reviews)
        //     res.redirect(`/activities/${activity._id}/`);
        // });



 


module.exports = {
    newReview,
    addReview,
    editReview,
    updateReview,
    
}