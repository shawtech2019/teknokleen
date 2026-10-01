const mysql = require("../../../config/mysql");
const db = require("../../../config/mysql");
// const applicationEmailTemplate = require("../../../emailTemplate/applicationTemplate");
const applicationEmailTemplate = require("../../../config/emailTemplate/applicationTemplate")
const nodemailer = require('nodemailer');
const sendMail = require("../../helpers/sendMail");
// const courseRegistrationTemplate = require("../../../emailTemplate/courseRegistrationTemplate");
const courseRegistrationTemplate = require("../../../config/emailTemplate/courseRegistrationTemplate")
require("dotenv").config();
const path = require("path");
const { okResponse, errorResponse } = require("../../helpers/response");
const { StatusCodes } = require("http-status-codes");
// const hygieneFeedbackTemplate = require("../../../emailTemplate/hygieneFeedbackTemplate");
const hygieneFeedbackTemplate = require("../../../config/emailTemplate/applicationTemplate")
class ApplicationController {

  static async postApplication(req, res) {
    try {
      const  formDataWithFile = req.body;
      // Creating the HTML content for the email using the contactEmailTemplate
      let html = applicationEmailTemplate({
        firstname: formDataWithFile.firstname,
        lastname: formDataWithFile.lastname,
        email: formDataWithFile.email,
        message: formDataWithFile.message,
      });
      
      // Sending email using Nodemailer
      await sendMail({
        from: formDataWithFile.email,
        to: process.env.TEKNO_NOTIFY, // Update with your Mailtrap inbox email
        subject: `Message from ${formDataWithFile.firstname, formDataWithFile.lastname} `,
        html: html,
        attachments: [{
          filename: req.file.originalname,
          content: req.file.buffer,
        }],

      });

      // Assuming the sendMail function is asynchronous and does not return a response
      // You can add additional logic or send a response back to the client if needed
     return okResponse({
        res,
        message : "Application submitted successfully",
        data : {},
        status : "success",
        statusCode : StatusCodes.OK
      })
    } catch (error) {
      return errorResponse({
        res, 
        status : 'error',
        statusCode : StatusCodes.BAD_GATEWAY,
        message : "An error occur while submitting form"
      })
    }
  }
  static async postApplicationCourses (req, res) {
    const {
      body : {name, email, phoneNumber, ref, amount, title, state, hearaboutus} 
    } = req;
    let html = courseRegistrationTemplate({
      salute : "Dear Admin",
      intro : "New Course payment was received from " + name,
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      reference: ref,
      amount: amount,
      course: title,
      state : state,
      hearaboutus: hearaboutus,
    });

    // Sending email using Nodemailer
    await sendMail({
      from: process.env.TEKNO_NOTIFY,
      to: process.env.TEKNO_NOTIFY, // Update with your Mailtrap inbox email
      subject: "New Course payment was received from " + name,
      html: html
    });

    html = courseRegistrationTemplate({
      salute : "Dear "+name,
      intro : "Your Course payment was received",
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      reference: ref,
      amount: amount,
      course: title,
      state : state,
      hearaboutus: hearaboutus,
    });
    await sendMail({
      from: process.env.TEKNO_NOTIFY,
      to: email, // Update with your Mailtrap inbox email
      subject: "Your Course payment was received",
      html: html
    });
    return res.send("success");
  }
  static async postApplicationHygiene(req, res) {
    const {
      body : {firstname, email, lastname, phone_number, location, message} 
    } = req;
    let html = hygieneFeedbackTemplate({
      salute : "Dear Admin",
      intro : "New Hygiene Feedback Message from " + firstname+ " " + lastname,
      name: firstname+ " " + lastname,
      email: email,
      phoneNumber: phone_number,
      message: message,
      location: location,
    });

    // Sending email using Nodemailer
    await sendMail({
      from: process.env.TEKNO_NOTIFY,
      to: process.env.TEKNO_NOTIFY, // Update with your Mailtrap inbox email
      subject: "New Hygiene Feedback Message from " + firstname+ " " + lastname,
      html: html
    });

    return okResponse({
      res,
      message : "Feedback received",
      data : {},
      status : "success",
      statusCode : StatusCodes.OK
    })
  }
}

module.exports = ApplicationController;
