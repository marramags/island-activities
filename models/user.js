const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// defining the schema for User model
const userSchema = new Schema({
    name: String,
    googleId: { 
        type: String,
        required: true
    },
    email: String,
    avatar: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema); //compiling userSchema into a model & exporting it