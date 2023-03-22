const mongoose = require("mongoose");

const Connection = async (username, password) => {
  const URL = `mongodb://${username}:${password}@ac-ifxfquy-shard-00-00.hkcs7yo.mongodb.net:27017,ac-ifxfquy-shard-00-01.hkcs7yo.mongodb.net:27017,ac-ifxfquy-shard-00-02.hkcs7yo.mongodb.net:27017/?ssl=true&replicaSet=atlas-ymnyjj-shard-0&authSource=admin&retryWrites=true&w=majority`;
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
