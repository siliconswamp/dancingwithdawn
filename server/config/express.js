var path = require('path'),
    express = require('express'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    portalRouter = require('../routes/portal.server.routes');

module.exports.init = function() {
  //connect to database
  mongoose.connect(config.db.uri);

  //initialize app
  var app = express();

  //enable request logging for development debugging
  app.use(morgan('dev'));

  //body parsing middleware
  app.use(bodyParser.json());

  /**TODO
   Serve static files */
  app.use('/', express.static('client'));

  /** Return web text fields **/
  app.use('/api/admin_features', portalRouter);

  /** Return web text fields **/
  app.use('/api/contact_form', portalRouter);

  return app;
};