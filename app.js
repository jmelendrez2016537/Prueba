const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const cors = require("cors")

const task1_rute = require("./src/rute/task1.rute");
const task2_rute = require("./src/rute/task2.rute");
const task3_rute = require("./src/rute/task3.rute")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors());

app.use('/api', task1_rute, task2_rute, task3_rute);

module.exports = app;