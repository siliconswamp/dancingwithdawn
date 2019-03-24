/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

/* Create your schema */
var loginSchema = new Schema({
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

var websiteTextSchema = new Schema({
  type: {
    type: String,
    required: true
  },
  header: {
    type: String,
    required: false
  },
  header2: {
    type: String,
    required: false
  },
  message: {
    type: String,
    required: false
  }
    });

/* Use your schema to instantiate a Mongoose model */
var Portal = mongoose.model('Portal', loginSchema);
var WebText = mongoose.model('admin_features', websiteTextSchema);

/* Export the model to make it available to other parts of your Node application */
module.exports={
  Portal:Portal,
  WebText:WebText
};