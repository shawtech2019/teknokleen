const { Router } = require("express");
const { invalidRoute } = require("../helpers/index.js");
const ROUTES = require("./constants.routes.js");
const shopRoutes = require("./shop.routes.js");
const testsRouter = require("./tests.routes.js");
const contactRouter = require("./contactRoute.js");
const applicationRouter = require("./applicationRoute.js");

const { WILD_CARD, HOME } = ROUTES;

// handle unknown routes in the api domain
const invalidRoutes = Router();
invalidRoutes.all(WILD_CARD, invalidRoute);

const allRoutes = [shopRoutes, testsRouter, contactRouter, applicationRouter, invalidRoutes];

module.exports = allRoutes;
