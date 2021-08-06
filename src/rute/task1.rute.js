 const express = require("express");
 const task1Controller = require("../controller/task1.controller");


 var api = express.Router();

 api.post('/getNumber', task1Controller.numberConversion);

 module.exports = api;