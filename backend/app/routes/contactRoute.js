
const { Router } = require('express');
const validateRequestBody = require('../helpers/validateRequestBody');
const { validateCreateContact } = require("../../config/validators/contact.validators");
const ContactController = require('../controllers/contact/contactContoller');
const { catchInternalServerError } = require('../middlewares/catchError');
const contactRouter = Router();



// API endpoint to handle form submissions
contactRouter.post('/contact-form',
 validateRequestBody(validateCreateContact, "payload" ),
 catchInternalServerError(ContactController.postContact)
  )
module.exports = contactRouter; 
contactRouter.post('/submit-form',
 validateRequestBody(validateCreateContact),
 ContactController.postContact
  )
module.exports = contactRouter 
