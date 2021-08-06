const express = require("express");
const task2Controller = require("../controller/task2.controller");


var api = express.Router();

api.post('/getResult', task2Controller.sumaYCuadrados);

module.exports = api;