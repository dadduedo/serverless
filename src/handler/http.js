const serverless = require('serverless-http');
const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

app.use(bodyParser.json());

const EmailTemplate = require('email-templates');
 const email = new EmailTemplate({
    views: {root: path.join(__dirname, '..', 'tpl')},
    message: {from: process.env.EMAIL_FROM},
    transport: nodemailer.createTransport(process.env.SMTP_CONFIGURATION),
    send: true,
    preview: false,
});

app.post('/send', (req, res) => {
     email.send({
            template: req.headers.scope,
            message: {to: req.headers['email-to']},
            locals: req.body
        })
        .then(data => res.json(data))
        .catch(err => {
            console.error('Cannot send email', {
                scope: req.headers.scope,
                emailTo: req.headers['email-to'],
                documentId: req.body.id,
                error: err.message
            });
            res.status(500).json(err)
        });
});
module.exports.app = serverless(app);
