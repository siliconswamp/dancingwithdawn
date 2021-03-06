var express = require("express");
var router  = express.Router();
var passport = require("passport");
var User = require("../models/user");

function loggedIn(req, res, next) {
    if (req.user) {
        next();
    } else {
        res.redirect('/login');
    }
}

// Render home page
router.get("/", function(req, res){
    res.render("index", {page: 'index'});
});

 // Render home page
router.get("/index", function(req, res){
    res.render("index", {page: 'index'}); 
 });

// Render contact page
router.get("/contact", function(req, res){
    res.render("contact", {page: 'contact'});
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
router.get("/admin_text", loggedIn, function(req, res){
    res.render("admin_text", {page: 'admin_text'}); 
});

// Render admin portal editing page
router.get("/admin_portal", loggedIn, function(req, res){
    res.render("admin_portal", {page: 'admin_portal'});
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
router.get("/paypal-temp", loggedIn, function(req, res){
    res.render("paypal-temp", {page: 'paypal-temp'}); 
});

// Render photo admin page
router.get("/admin_photos", loggedIn, function(req, res){
    res.render("admin_photos", {page: 'admin_photos'});
});

// Render photo test page
router.get("/photos_test", function(req, res){
    res.render("photos_test", {page: 'photos_test'}); 
});

// Render photo page
router.get("/photos", loggedIn, function(req, res){
    res.render("photos", {page: 'photos'}); 
});

// Render parent portal forms page
router.get("/parent_forms", function(req, res){
    res.render("parent_forms", {page: 'parent_forms'});
});

// Render parent portal history page
router.get("/parent_history", loggedIn, function(req, res){
    res.render("parent_history", {page: 'parent_history'});
});

// Render parent portal pictures admins page
router.get("/ppPictures_admin", loggedIn, function(req, res){
    res.render("ppPictures_admin", {page: 'ppPictures_admin'}); 
});

// Render parent portal pictures page
router.get("/parent_pictures", loggedIn, function(req, res){
    res.render("parent_pictures", {page: 'parent_pictures'});
});

// Render parent portal forms page
router.get("/parent_settings", loggedIn, function(req, res){
    res.render("parent_settings", {page: 'parent_settings'});
});

// Render parent portal
router.get("/parent_portal", loggedIn, function(req, res){
    res.render("parent_portal", {page: 'parent_portal'});
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
           res.redirect("/parent_portal"); 
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
        failureRedirect: "/login",
    }), (req, res) => {
        if (req.user.isAdmin === true) {
          res.redirect("/admin_portal");
        }
        if (req.user.isAdmin === false) {
          res.redirect("/parent_portal");
        }
    });



// logout route
router.get("/logout", function(req, res){
   req.logout();
   req.flash("success", "Later Gator");
   res.redirect("/index");
});


module.exports = router;
