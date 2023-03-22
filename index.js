const express = require("express");
const path = require("path");
const app = express();
const Connection = require("./database/db.js");
const Route = require("./routes/route");
const Cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(Cors());
app.use("/", Route);

app.use(express.static(path.join(__dirname, "./frontend/build")));

app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./frontend/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});

app.listen(
  process.env.PORT || 5000,
  console.log(`Server started on port ${process.env.PORT} `)
);

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);
