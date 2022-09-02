<section>
    <div>Description</div>
    <div><%= activity.description%></div>
</br>   
    <div>Location:</div>
    <div><%= activity.location%></div>
</br>  
    <div>Type</div>
    <div><%= activity.activityType%></div>
    <form action="/activities/<%= activity.id %>/editActivities" method="GET">
    <button type="submit">Edit</button>
</form>
</section>

update review function option 2
<!-- // function updateReview (req, res) {
//     Activity.findOne({'reviews._id': req.params.id}, function(err, activity){
//         const review = activity.reviews.id(req.params.id);
//         if(!review.userId.equals(req.user.id)) return res.redirect(`/activiites/${activity._id}`);
//         review.text= req.body.text;
//         activity.save(function(err){
//             res.redirect(`/activities/${activity._id}`)
//         })
//     })
        
// }
 -->

 icebox: delete option for user review 
 function deleteReview(req, res, next) {
    Activity.findOne({'reviews._id}': req.params.id}).then(function(movie){
        const review = activity.reviews.id(req.params.id);
        if (!review.user.equals(req.user._id)) return res.redirect(`/movies/${movie._id}`);
        review.remove();
        activity.save().then(function(){
            res.redirect(`/activities/${movie._id}`);
        }).catch(function(err) {
            return next(err);
        })
    })
}
