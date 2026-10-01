const router = require("express").Router();
const nodemailer = require("nodemailer");
require("dotenv").config();
const sendMail = async ({subject, html, to, from = "Teknokleen", attachments = null}) => {
  var transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAILER_USER,
      pass: process.env.MAILSWORD 
    },
  });

  let mailOptions = {
    from: from,
    to: to,
    subject: subject,
    html: html, 
  };
  if(attachments) mailOptions.attachments = attachments

  var r = await transport.sendMail(mailOptions).catch((err)=> {
    if(err){
      return {error : err};
    }
  });
  return r;
};


module.exports = sendMail;