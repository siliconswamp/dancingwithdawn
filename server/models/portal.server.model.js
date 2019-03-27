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
  },
  admin: {
    type: Boolean,
    required: false
  }
},{collection:'logins'});

/* Create your schema */
var faqSchema = new Schema({
  order: {
    type: NumberInt,
    required: true
  },
  question: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: false
  }
},{collection:'faq'});

var classesSchema = new Schema({
  class_name: {
    type: String,
    required: true
  },
  header: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  }
},{collection:'classes'});

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
},{collection:'admin_features'});

/* Use your schema to instantiate a Mongoose model */
var Logins = mongoose.model('logins', loginSchema);
var WebText = mongoose.model('admin_features', websiteTextSchema);
var FAQSchema = mongoose.model('faq', faqSchema);
var ClassesSchema = mongoose.model('classes', classesSchema);

/* Export the model to make it available to other parts of your Node application */
module.exports={
  Logins:Logins,
  WebText:WebText,
  FAQSchema:FAQSchema,
  ClassesSchema:ClassesSchema
};