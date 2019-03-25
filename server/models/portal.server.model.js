/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema,
   NumberInt = require('mongoose-int32');

/* Create your schema */
var loginSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

/* Create your schema */
var faqSchema = new Schema({
  question: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: false
  }
},{collection:'faq'});

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
var FAQSchema = mongoose.model('faq', faqSchema);

/* Export the model to make it available to other parts of your Node application */
module.exports={
  Portal:Portal,
  WebText:WebText,
  FAQSchema:FAQSchema
};