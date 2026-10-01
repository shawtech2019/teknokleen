const TestService = require("../../services/tests/testService");
const { okResponse, errorResponse } = require("../../helpers/response");
const { StatusCodes } = require("http-status-codes");
class TestController {
  static async CreateTest(req, res) {
    const {
      body: { lastname, firstname, address, city },
    } = req;
    const createTest = await TestService.CreateTests([
      lastname,
      firstname,
      address,
      city,
    ]);
    if (createTest["affectedRows"]) {
      return okResponse({
        res,
        message: "test created successfully",
        status: "success",
        statusCode: StatusCodes.OK,
      });
    }
    return errorResponse({
      res,
      message: "Unable to create test",
      data: {},
      status: "error",
      statusCode: StatusCodes.BAD_REQUEST,
    });
  }
  static async GetTests(req, res) {
    const getTests = await TestService.GetTests();
    console.log("here")
    return okResponse({
      res,
      message: "tests fetched succesfully",
      data: getTests,
      status: "success",
      statusCode: StatusCodes.OK,
    });
  }
}
module.exports = TestController;
