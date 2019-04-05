var express = require("express");
var router  = express.Router();
var passport = require("passport");
var User = require("../models/user");

// Render parent portal
router.get("/parentportal", function(req, res){
    res.render("parentportal", {page: 'parentportal'}); 
 });

// show register form
router.get("/register", function(req, res){
   res.render("register", {page: 'register'}); 
});

// handle sign up logic
router.post("/register", function(req, res){
    var newUser = new User({username: req.body.username});
    if(req.body.adminCode === process.env.ADMIN_CODE) {
      newUser.isAdmin = true;
    }
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render("register", {error: err.message});
        }
        passport.authenticate("local")(req, res, function(){
           req.flash("success", "Successfully Signed Up! Nice to meet you " + req.body.username);
           res.redirect("parentportal.html"); 
        });
    });
});

//show login form
router.get("/login", function(req, res){
   res.render("login", {page: 'login'}); 
});

//handling login logic
router.post("/login", passport.authenticate("local", 
    {
        successRedirect: "/parentportal",
        failureRedirect: "/login",
        failureFlash: true,
        successFlash: 'Successful Login'
    }), function(req, res){
});

// logout route
router.get("/logout", function(req, res){
   req.logout();
   req.flash("success", "Later Gator");
   res.redirect("index.html");
});


module.exports = router;