const mongoose = require("mongoose");

const FlightSchema = mongoose.Schema(
  {
    flightNumber: {
      type: String,
      require: true,
    },
    airline: {
      type: String,
      require: true,
    },
    destination: {
      type: String,
      require: true,
    },
    departureTime: {
      type: String,
      require: true,
    },
    terminal: {
      type: String,
      require: true,
    },
    gateNumber: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const Flight = mongoose.model("FlightDetail", FlightSchema);
module.exports = Flight;
