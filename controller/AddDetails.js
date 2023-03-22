const Flight = require("../model/FlightData");

const AddFlightDetails = async (req, res) => {
  const data = req.body;
  console.log(data);
  const addDetails = new Flight(data);
  try {
    await addDetails.save();
    res.status(200).json({ msg: "Flight data added successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Error while adding flight data", error: error });
  }
};

const getFlightDetails = async (req, res) => {
  try {
    const data = await Flight.find({}).sort("-createdAt");
    res.status(200).json({ msg: "Flight data successfully get", data: data });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Error while getting flight data", error: error });
  }
};

module.exports = { AddFlightDetails, getFlightDetails };
