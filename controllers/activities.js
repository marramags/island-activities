const Activity = require('../models/activity');

function activitiesIndex (req, res){ //INDEX method function: all added activities
    Activity.find({}, function(err, activities){
        // if (err) return res.redirect('/');
        res.render('activities/index', { title: 'All Activities', activities });
    })
}

function newActivity (req, res) { //NEW creating new activity page with form
    res.render('activities/new', {title: 'Add Activity'}); 
}

function addActivity (req, res) { //CREATE: method function || adding activity from form
    const activity = new Activity (req.body);
    activity.save(function(err){
        if (err) return res.render('activities/new');
        res.redirect('/activities')
    })
}

function seeMore(req, res) { //more details on each activity
    Activity.findById(req.params.id, function (err, activity){
        res.render('activities/show', {title: 'Details', activity})
    })
}

function deleteActivity (req, res) {
    Activity.findByIdAndDelete(req.params.id, function(err, activity) { //finding activity by id to remove
        res.redirect('/activities') //redirecting to activities index.ejs page
    })
}

module.exports = {
    activitiesIndex,
    newActivity,
    addActivity,
    seeMore,
    deleteActivity
}