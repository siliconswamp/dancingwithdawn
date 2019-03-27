/* Dependencies */
var methods = require('../controllers/faq.server.controller.js'),
    express = require('express'),
    router = express.Router();

router.route('/')
    .get(methods.faq_text)
    .post(methods.faq_add);

router.route('/:faqID')
    .post(methods.faq_update)
    .delete(methods.faq_delete);

module.exports = router;