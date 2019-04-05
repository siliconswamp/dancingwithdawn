/* Dependencies */
var methods = require('../controllers/classes.server.controller.js'),
    express = require('express'),
    router = express.Router();

router.route('/')
    .get(methods.classes_text)
    .post(methods.classes_add);

router.route('/:classesID')
    .post(methods.classes_update)
    .delete(methods.classes_delete);

module.exports = router;