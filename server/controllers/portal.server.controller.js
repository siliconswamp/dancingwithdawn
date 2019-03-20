/* Dependencies */
var mongoose = require('mongoose'),
    Collections = require('../models/portal.server.model.js'),
    config = require('../config/config');

var webText = Collections.WebText;
var loginData = Collections.Portal;

/* Retreive all the directory listings, sorted alphabetically by listing code */
exports.list = function(req, res) {
  /** TODO **/
  webText.find({}).sort({type: 1}).exec(function (err,items) {
    if(err)
      res.status(400).send(err);
    else
      res.status(200).json(items);
  })
};