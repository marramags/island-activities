const Activity = require('../models/activity');
const { render } = require('../server');

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
    const activity = new Activity(req.body);
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

// function editActivity (req, res) { //Original
//     // res.render('activities/editActivities', {
//     //     activity: Activity.findByIdAndUpdate(req.params.id)
//     // })
//     console.log(req.query)
//     Activity.findOne({_id: req.params.id}, function(err, activity){
//         if (err || !activity) return res.redirect('/activities');
//         res.render('activities/editA', {title: "Edit Activity", activity});
//     });

// }

// function editActivity (req, res) {
//     // console.log("calling editActivity");
//     // console.log(req.query);
//     Activity.findOne({_id: req.params.id}, function(err, activity){
//         if (err || !activity) return res.redirect('/activities');
//         res.render('activities/editA', {title: "Edit Activity", activity});
//     });
// }

function editActivity (req, res) { //bev
    //     Activity.findById(req.params.id, function(err, activity){  //this one!!!!
    //         // if (err || !activity) return res.redirect('/activities');
    //         res.render('activities/editA', {title: "Edit Activity", activity});
    //     });
    // }

    Activity.findOne({_id: req.params.id}, function(err, activity) {
        if (err || !activity) return res.redirect('/activity');
        res.render('activities/editA', {title: 'Edit Activities', activity});
      });
    }

    // function editActivity (req, res) {
    //     Activity.findOne(req.params.id, function(err, activity){
    //         if (err || !activity) return res.redirect('/activities');
    //         res.render('activities/editA', {title: "Edit Activity", activity});
    //     });
    // }

function updateActivity(req, res){  //OG function
    // console.log(req.query)
    // Activity.findOneAndUpdate(
    //     {_id: req.params.id}, //criteria
    //     req.body,
    //     {new: true}),
    //     // console.log("update done!")
    //     function(err, activity) {
    //     console.log(activity)
    //       if (err || !activity) return console.log(err);
    //       res.redirect(`/activities/${activity._id}`);
    //     }

// function updateActivity(req, res){
//     Activity.findById(req.params.id, function(err, activity) {
//         activity.update(req.body, function (err, dive) {
//             if (err) return res.redirect('/activities')
//         })
//           res.redirect('/activities');
//         })
    
    // const selectedActivity = req.activity;


    // Activity.findByIdAndUpdate(req.params.id, req.body) 
    //     .then(activity=> {
    //         console.log(req.body)
    //         res.redirect(`/activites/${activity._id}`);
    //     })

        Activity.findOneAndUpdate(
            {_id: req.params.id},
            // update object with updated properties
            req.body,
            // options object with new: true to make sure updated doc is returned
            {new: true},
            function(err, activity) {
              if (err || !activity) return res.redirect('/activity');
              res.redirect(`/cars/${activity._id}`);
            }
          );
        
}


module.exports = {
    activitiesIndex,
    newActivity,
    addActivity,
    seeMore,
    deleteActivity,
    editActivity,
    updateActivity
}