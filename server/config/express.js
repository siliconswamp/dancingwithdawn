var path = require('path'),
    express = require('express'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    passport = require("passport"),
    flash = require("connect-flash"),
    config = require('./config'),
    User = require("../models/user"),
    LocalStrategy = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose"),
    cors = require('cors');
    
    
  // Routes
var portalRouter = require('../routes/portal.server.routes'),
    homeRouter = require('../routes/home.server.routes'),
    faqRouter = require('../routes/faq.server.routes');
    authRouter = require("../routes/auth.server.routes");

const corsOptions = {
    origin: 'http://dancingwithdawn.herokuapp.com/'
}

module.exports.init = function() {
  // assign mongoose promise library and connect to database
  mongoose.Promise = global.Promise;
  
  //connect to database
  mongoose.connect(config.db.uri);

  //initialize app
  var app = express();

  // Enable EJS
  app.set('view engine', 'ejs');

  //enable request logging for development debugging
  app.use(morgan('dev'));

  //body parsing middleware
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));

  // Setup sessions
  app.use(require("express-session")({
    secret: "Rusty is the best and cutest dog in the world",
    resave: false,
    saveUninitialized: false
  }));

  app.use(flash());
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(new LocalStrategy(User.authenticate()));
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());

  // Allows access to the currently signed in user
  app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
  });

  // CORS Fix
  app.use(cors(corsOptions))

  /**TODO
   Serve static files */
  app.use('/', express.static('client'));
  app.use('/api/admin_features', homeRouter);
  app.use('/api/contact_form', homeRouter);
  app.use('/api/faq', faqRouter);

  // Auth Routes
  app.use("/", authRouter);

  return app;
};