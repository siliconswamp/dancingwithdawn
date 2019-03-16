/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

/* Create your schema */
var existingUserSchema = new Schema({
  email: {
    type: String, 
    required: true
  }, 
  password: {
    type: String, 
    required: true, 
    unique: true
  }
});

/* Use your schema to instantiate a Mongoose model */
var Portal = mongoose.model('Portal', existingUserSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Portal;
