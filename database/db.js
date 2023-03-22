const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const Connection = async (username, password) => {
  const URL = process.env.DB_URL;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting to the database", error);
  }
};

module.exports = Connection;
