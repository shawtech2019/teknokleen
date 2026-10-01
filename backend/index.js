const express = require("express");
// const expressConfig = require("./config/express.js");
const expressConfig = require("./config/express");
// import expressConfig from "./config/express.js";
var app = express();
expressConfig(app);
var server = app.listen(9000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("app listening at http://%s:%s", host, port);
});
