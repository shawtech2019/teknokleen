const bodyParser = require("body-parser");
const express = require("express");
const helmet = require("helmet");
const ROUTES = require("../app/routes/constants.routes.js");
const allRoutes = require("../app/routes/index.js");
const invalidRoute = require("../app/helpers/index.js");

const expressConfig = (app) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.json())

  

  // Use helmet to secure Express headers
  app.use(helmet());
  app.disable("x-powered-by");

  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Authorization, Origin, Content-Type, Accept"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
  });

  // handle every valid request i.e request to api/
  app.use("/api", allRoutes);

  // reject all unknown routes (routes not directed to api/v1)
  // app.all(ROUTES.WILD_CARD, invalidRoute);
};

module.exports = expressConfig;