const Activity = require('../models/activity');

function activitiesIndex (req, res){
    Activity.find({}, function(err, activities){
        // if (err) return res.redirect('/');
        res.render('activities/index', { title: 'All Activities', activities });
    })
}

function newActivity (req, res) {
    res.render('activities/new');
}

module.exports = {
    activitiesIndex,
    newActivity
}