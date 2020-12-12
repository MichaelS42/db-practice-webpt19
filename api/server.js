
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
require("colors");

const server = express();

let currentTime = new Date().toLocaleString();

server.get("/test", (req, res) => {
  res.status(200).json({
    status: 200,
    message: "GET /test is working",
    time: currentTime,
  });
});

module.exports = server