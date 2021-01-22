/* eslint-disable */

const path = require('path');
const express = require('express');
const transporter = require('./config');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();

var corsOptions = {
  origin: 'https://vulpis.dev',
  allowedHeaders: 'accept, content-type',
  methods: 'POST'
};

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.json());
app.use(express.static(buildPath));
app.options('/send', cors(corsOptions));
app.post('/send', cors(corsOptions), (req, res) => {
  if (req.body.company !== '' || req.body.human_check !== '32') {
    res.send({ success: true });
  } else {
    try {
      const mailOptions = {
        from: process.env.USERNAME,
        to: process.env.USERNAME,
        subject: 'vulpis.dev | Contact Form',
        html: `
        <p>You have a new contact request.</p>
        <h3>Contact Details</h3>
        <ul>
          <li>Name: ${req.body.name}</li>
          <li>Email: ${req.body.email}</li>
          <li>Message: ${req.body.message}</li>
        </ul>
        `
      };
  
      transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
          res.status(500).send({
            success: false,
          });
        } else {
          res.send({
            success: true,
          });
        }
      });
    } catch (error) {
      res.status(500).send({
        success: false,
      });
    }
  }
});

app.listen(process.env.MAIL_PORT, () => {
  console.log('server start on port ' + process.env.MAIL_PORT);
});