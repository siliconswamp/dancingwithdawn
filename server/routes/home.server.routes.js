/* Dependencies */
var methods = require('../controllers/home.server.controller.js'),
    express = require('express'),
    router = express.Router();

router.route('/')
    .get(methods.admin_text)
    .post(methods.email);

// Render parent portal
router.get("/parentportal", function(req, res){
    res.render("parentportal", {page: 'parentportal'}); 
 });

module.exports = router;