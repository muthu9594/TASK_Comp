const express = require("express");
const Route = express.Router();
const {
  AddFlightDetails,
  getFlightDetails,
} = require("../controller/AddDetails");
const Chat = require("../controller/chat");

Route.post("/addDetails", AddFlightDetails);
Route.get("/getDetails", getFlightDetails);
Route.post("/chat", Chat);

module.exports = Route;
