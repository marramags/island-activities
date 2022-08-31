const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewsSchema = new Schema ({
    review: {type: String, required: true},
    name: String,
    rating: {type: Number, min: 1, max: 5},
    userId: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    // activityId: {type: Schema.Types.ObjectId, ref: 'Activity'}
}, {
    timestamps: true
})

const activitiesSchema = new Schema ({
    activityName: String,
    description: String,
    // kidFriendly: {type: Boolean, default: false},
    activityType: String,
    location: String,
    reviews: [reviewsSchema]
}, {
    timestamps: true
})

module.exports = mongoose.model('Activity', activitiesSchema);