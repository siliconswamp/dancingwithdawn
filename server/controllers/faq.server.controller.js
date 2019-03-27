/* Dependencies */
var mongoose = require('mongoose'),
    Collections = require('../models/portal.server.model.js'),
    config = require('../config/config'),
    nodeMailer = require('nodemailer');

var faqText = Collections.FAQSchema;

exports.faq_text = function(req, res) {
    faqText.find({}).sort({order: 1}).exec(function (err,items) {
        if(err)
            res.status(400).send(err);
        else
            res.status(200).json(items);
    });
};

exports.faq_update = function(req, res) {
    var updated_faq = req.body;
    faqText.findByIdAndUpdate(req.params.faqID, updated_faq, function(err, doc){
        if(err)
            res.status(400).send(err);
        else
            res.status(200).send(doc);
    });
};

exports.faq_add = function(req, res) {
    var new_faq = new faqText(req.body);
    new_faq.save(function(err) {
        if(err) {
            console.log(err);
            res.status(400).send(err);
        } else {
            res.json(new_faq);
        }
    });
};

exports.faq_delete = function(req, res) {
    var faq_details = req.body;
    console.log(faq_details._id);
    faqText.find({_id: req.params.faqID}).remove(function(err){
        if(err)
            res.status(400).send(err);
        else
            res.status(200).send(faq_details);
    });
};