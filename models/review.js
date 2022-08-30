const mongood = require('mongoose');

const Schema = mongoose.Schema;

const reviewsSchema = new Schema ({
    reviewContent: String,
    name: String,
    rating: {type: Number, min: 1, max: 5},
    userId: {type: Schema.Types.ObjectId, ref: 'User'},
    activityId: {type: Schema.Types.ObjectId, ref: 'Activity'}
}, {
    timestamps: true
})

module.exports = mongoose.model('Review', reviewsSchema);

