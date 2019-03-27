/* Dependencies */
var mongoose = require('mongoose'),
    Collections = require('../models/portal.server.model.js'),
    config = require('../config/config'),
    nodeMailer = require('nodemailer');

var classesText = Collections.ClassesSchema;

exports.classes_text = function(req, res) {
    faqText.find({}).exec(function (err,items) {
        if(err)
            res.status(400).send(err);
        else
            res.status(200).json(items);
    });
};

exports.classes_update = function(req, res) {
    var updated_classes = req.body;
    classesText.findByIdAndUpdate(req.params.classesID, updated_classes, function(err, doc){
        if(err)
            res.status(400).send(err);
        else
            res.status(200).send(doc);
    });
};

exports.classes_add = function(req, res) {
    var new_classes = new classesText(req.body);
    new_faq.save(function(err) {
        if(err) {
            console.log(err);
            res.status(400).send(err);
        } else {
            res.json(new_classes);
        }
    });
};

exports.classes_delete = function(req, res) {
    var classes_details = req.body;
    classesText.find({_id: req.params.classesID}).remove(function(err){
        if(err)
            res.status(400).send(err);
        else
            res.status(200).send(classes_details);
    });
};