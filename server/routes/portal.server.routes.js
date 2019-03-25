/* Dependencies */
var methods = require('../controllers/portal.server.controller.js'),
    express = require('express'), 
    router = express.Router();

router.route('/')
    .get(methods.admin_text)
    .post(methods.email);

router.route('/:listingId')
    .get(methods.faq_text);

module.exports = router;