const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
require("colors");

const testRouter = require("./testRoute.js");
const characterRouter = require("../routes/character-routes.js");

const server = express();

server.use(helmet());
server.use(morgan("dev"));
server.use(cors());
server.use(express.json());

server.use("/api", testRouter);
server.use("/api/characters", characterRouter);
module.exports = server;
