const express = require("express");
const task3Controller = require("../controller/task3.controller");


var api = express.Router();

api.post('/numPrimos', task3Controller.numPrimos);

module.exports = api;