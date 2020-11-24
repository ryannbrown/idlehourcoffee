const express = require("express");
const helmet = require("helmet");
const bodyParser = require("body-parser");
var Client = require("ftp");
var fs = require("fs");

const app = express();
const port = process.env.PORT || 5000;

// const nodemailer = require("nodemailer");
const morgan = require("morgan");
const router = require("express").Router();
const path = require("path");

require("dotenv").config();
const cors = require("cors");
app.use(cors());

app.use(morgan("dev"));

// app.use(busboy());
// app.use(busboyBodyParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
  app.use(
    helmet({
      contentSecurityPolicy: false,
    })
  );
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));

  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
// console.log('Application running!' + cluster.worker.id);
// }
