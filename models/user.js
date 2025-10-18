const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
 // Note: username, hash, and salt will be added automatically by passport-local-mongoose
});

// Plugin adds username, hash, salt, and helpful methods
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);

