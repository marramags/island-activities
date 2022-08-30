const Activity = require('../models/activity');

function activitiesIndex (req, res){ //all added activities
    Activity.find({}, function(err, activities){
        // if (err) return res.redirect('/');
        res.render('activities/index', { title: 'All Activities', activities });
    })
}

function newActivity (req, res) { //creating new activity page with form
    res.render('activities/new', {title: 'Add Activity'}); 
}

function addActivity (req, res) { //adding activity from form
    const activity = new Activity (req.body);
    activity.save(function(err){
        if (err) return res.render('flights/new');
        res.redirect('/activities')
    })
}

function seeMore(req, res) {
    Activity.findById(req.params.id, function (err, activity){
        res.render('activities/show', {title: 'Details', activity})
    })
}

module.exports = {
    activitiesIndex,
    newActivity,
    addActivity,
    seeMore
}