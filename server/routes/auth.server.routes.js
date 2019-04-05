var express = require("express");
var router  = express.Router();
var passport = require("passport");
var User = require("../models/user");

// Render home page
router.get("/", function(req, res){
    res.render("index", {page: 'index'}); 
 });

 // Render home page
router.get("/index", function(req, res){
    res.render("index", {page: 'index'}); 
 });

 // Render about me page
router.get("/aboutme", function(req, res){
    res.render("aboutme", {page: 'aboutme'}); 
 });

 //Render admin FAQ editing page
router.get("/admin_faq", function(req, res){
    res.render("admin_faq", {page: 'admin_faq'}); 
});

// Render admin FAQ editing page
router.get("/admin_text", function(req, res){
    res.render("admin_text", {page: 'admin_text'}); 
});

// Render admin portal editing page
router.get("/adminportal", function(req, res){
    res.render("adminportal", {page: 'adminportal'}); 
});

// Render calendar page
router.get("/calendar", function(req, res){
    res.render("calendar", {page: 'calendar'}); 
});

// Render faq page
router.get("/faq", function(req, res){
    res.render("faq", {page: 'faq'}); 
});

// Render forms page
router.get("/forms", function(req, res){
    res.render("forms", {page: 'forms'}); 
});

// Render lessons page
router.get("/lessons", function(req, res){
    res.render("lessons", {page: 'lessons'}); 
});

// Render paypal page
router.get("/paypal-temp", function(req, res){
    res.render("paypal-temp", {page: 'paypal-temp'}); 
});

// Render photo admin page
router.get("/photos_admin", function(req, res){
    res.render("photos_admin", {page: 'photos_admin'}); 
});

// Render photo test page
router.get("/photos_test", function(req, res){
    res.render("photos_test", {page: 'photos_test'}); 
});

// Render photo page
router.get("/photos", function(req, res){
    res.render("photos", {page: 'photos'}); 
});

// Render parent portal forms page
router.get("/ppForms", function(req, res){
    res.render("ppForms", {page: 'ppForms'}); 
});

// Render parent portal history page
router.get("/ppHistory", function(req, res){
    res.render("ppHistory", {page: 'ppHistory'}); 
});

// Render parent portal pictures admins page
router.get("/ppPictures_admin", function(req, res){
    res.render("ppPictures_admin", {page: 'ppPictures_admin'}); 
});

// Render parent portal pictures page
router.get("/ppPictures", function(req, res){
    res.render("ppPictures", {page: 'ppPictures'}); 
});

// Render parent portal forms page
router.get("/ppSettings", function(req, res){
    res.render("ppSettings", {page: 'ppSettings'}); 
});

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
      newUser.isAdmin = false;
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