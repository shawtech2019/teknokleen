const { Router } = require("express");
const ROUTES = require("./constants.routes");
const TestController = require("../controllers/tests/testController");
const validateRequestBody = require("../helpers/validateRequestBody");
const { catchInternalServerError } = require("../middlewares/catchError");
// const { validateCreateTest } = require("../../validators/tests.validtors");
const { validateCreateTest } = require("../../config/validators/tests.validtors")
const testsRouter = Router();

testsRouter.get(
  ROUTES.GET_TESTS,
  catchInternalServerError(TestController.GetTests)
);

testsRouter.post(
  ROUTES.CREATE_TESTS,
  validateRequestBody(validateCreateTest, "payload"),
  catchInternalServerError(TestController.CreateTest)
);
module.exports = testsRouter;
