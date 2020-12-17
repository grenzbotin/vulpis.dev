/* eslint-disable */

const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

var transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
});

module.exports = transporter;