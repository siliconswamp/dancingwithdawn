/* Dependencies */
var mongoose = require('mongoose'),
    Collections = require('../models/portal.server.model.js'),
    config = require('../config/config'),
    nodeMailer = require('nodemailer');

var webText = Collections.WebText;

/* Retreive all the directory listings, sorted alphabetically by listing code */
exports.admin_text = function(req, res) {
    /** TODO **/
    webText.find({}).sort({type: 1}).exec(function (err,items) {
        if(err)
            res.status(400).send(err);
        else
            res.status(200).json(items);
    });
};

exports.update_admin_text = function(req, res) {
    var updated_text = req.body;
    webText.findByIdAndUpdate(req.params._id, updated_text, function(err, doc){
        if(err)
            res.status(400).send(err);
        else
            res.status(200).send(doc);
    });
};

exports.email = function (req, res) {
    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'dancingwithdawn352@gmail.com',
            pass: 'CEN3031team3'
        }
    });
    let mailOptions = {
        from: '<' + req.body.email + '>',
        to: 'dancingwithdawn352@gmail.com', // list of receivers
        subject: 'Portal Message From: ' + req.body.name, // Subject line
        text: req.body.message, // plain text body
        html: req.body.message // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.status(400).send(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
};