const catchInternalServerError = (fn) =>
  function (req, res, ...args) {
    return fn(req, res, ...args).catch((error) => {
      res.status(500).json({
        status: false,
        message:
          "We encountered a problem while processing your request. Please try again",
        errors: error.errors || error.message,
      });
    });
  };

module.exports = { catchInternalServerError };
