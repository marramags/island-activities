const mongood = require('mongoose');

const Schema = mongoose.Schema;

const reviewsSchema = new Schema ({
    review: String,
    name: String,
    rating: Number,
    userID: {type: Schema.Types.ObjectId, ref: 'Activity'},
    activity: {type: Schema.Types.ObjectId, ref: 'User'},
})

module.exports = mongoose.model('Review', reviewsSchema);

