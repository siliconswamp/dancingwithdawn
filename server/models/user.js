var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    username: {type: String, unique: true},
    password: String,
    isAdmin: {type: Boolean, default: false},
	first_name: String,
	last_name: String,
	street: String,
	city: String,
	state: String,
	zip: Number,
	cell_number: Number,
	alt_number: Number,
	relationship: String,
	notes: String,
	email: String
});

UserSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model("User", UserSchema);