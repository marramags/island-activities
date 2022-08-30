const Activity = require('../models/activity');

function activitiesIndex (req, res){
    Activity.find({}, function(err, activities){
        // if (err) return res.redirect('/');
        res.render('activities/index', { title: 'All Activities', activities });
    })
}

function newActivity (req, res) {
    res.render('activities/new', {title: 'Add Activity'});
}

function addActivity (req, res) {
    const activity = new Activity (req.body);
    activity.save(function(err){
        if (err) return res.render('flights/new');
        console.log(activity);
        res.redirect('/activities')
    })
    // Activity.create({
    //     activityName: req.body.activityName,
    //     description: req.body.description,
    //     kidFriendly: {type: Boolean, default: false},
    //     typeOfActivity: req.body.typeOfActivity,
    //     location: req.body.location
    // })

}

module.exports = {
    activitiesIndex,
    newActivity,
    addActivity
}