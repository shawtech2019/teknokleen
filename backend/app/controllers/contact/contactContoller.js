const mysql = require("../../../config/pg");
const db = require("../../../config/pg");
// const contactEmailTemplate = require("../../../emailTemplate/contactEmail");
const contactEmailTemplate = require("../../../config/emailTemplate/contactEmail")
const sendMail = require("../../helpers/sendMail");
const nodemailer = require('nodemailer');

class ContactController {

  static async postContact(req, res) {
    try {
      let formData = req.body;
      // Creating the HTML content for the email using the contactEmailTemplate
      let html = contactEmailTemplate({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      });

      // Sending email using Nodemailer
      await sendMail({
        from: formData.email,
        to: 'orinamesunday360@gmail.com', // Update with your Mailtrap inbox email
        subject: `Message from ${formData.name}`,
        html: html
      });

      // Assuming the sendMail function is asynchronous and does not return a response
      // You can add additional logic or send a response back to the client if needed
      res.status(200).send('Form submitted successfully!');
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).send('Failed to submit form. Please try again later.');
    }
  }
}

module.exports = ContactController;
