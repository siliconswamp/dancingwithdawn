/* Dependencies */
var methods = require('../controllers/portal.server.controller.js'),
    express = require('express'), 
    router = express.Router();

router.route('/')
    .get(methods.list)
    .post(methods.email);

module.exports = router;