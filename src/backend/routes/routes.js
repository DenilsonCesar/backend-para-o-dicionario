const express = require('express');
const routes = express.Router();
const controller = require('../controllers/controllers');

routes.get("/", controller.index);
routes.get("/:id", controller.show);
routes.post("/add", controller.store);

module.exports = routes;