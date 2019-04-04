/* Dependencies */
var methods = require('../controllers/home.server.controller.js'),
    express = require('express'),
    router = express.Router();

router.route('/')
    .get(methods.admin_text)
    .post(methods.email);

router.route('/:_id')
    .post(methods.update_admin_text);

module.exports = router;