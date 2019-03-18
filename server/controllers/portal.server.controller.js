/* Dependencies */
var mongoose = require('mongoose'),
    Listing = require('../models/portal.server.model.js'),
    config = require('../config/config');


/* Create a listing */
exports.create = function(req, res) {

  /* Instantiate a Listing */
  var portal = new Listing(req.body);

};
