const { Router } = require('express');
const validateRequestBody = require('../helpers/validateRequestBody');
const { catchInternalServerError } = require('../middlewares/catchError');
const ApplicationController = require('../controllers/application_form/applicationController');
const { validateCreateApplication, validateCreateApplicationCourse, validateCreateApplicationHygiene } = require("../../config/validators/application.validators");
const applicationRouter = Router();
const multer = require("multer")

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });





// API endpoint to handle form submissions
applicationRouter.post('/application-form', upload.single('file'),
 validateRequestBody(validateCreateApplication, "payload" ),
 catchInternalServerError(ApplicationController.postApplication)
  )
applicationRouter.post('/submit-form',
  validateRequestBody(validateCreateApplication),
  catchInternalServerError(ApplicationController.postApplication)
)
applicationRouter.post('/hygiene-form',
  validateRequestBody(validateCreateApplicationHygiene, 'payload'),
  catchInternalServerError(ApplicationController.postApplicationHygiene)
)
applicationRouter.post(
  '/courses-form',
  validateRequestBody(validateCreateApplicationCourse, 'payload'),
  catchInternalServerError(ApplicationController.postApplicationCourses)
)
module.exports = applicationRouter 
