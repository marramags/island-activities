const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const activitiesSchema = new Schema ({
    activityName: String,
    description: String,
    // kidFriendly: {type: Boolean, default: false},
    typeOfActivity: String,
    location: String,
})

module.exports = mongoose.model('Activity', activitiesSchema);