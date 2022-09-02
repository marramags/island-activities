const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewsSchema = new Schema ({
    // review: {type: String, required: true},
    content: String,
    // name: String,
    rating: {type: Number, min: 1, max: 5},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String
}, {
    timestamps: true
})

const activitiesSchema = new Schema ({
    activityName: String,
    description: String,
    activityType: String,
    location: String,
    reviews: [reviewsSchema]
}, {
    timestamps: true
})

module.exports = mongoose.model('Activity', activitiesSchema);