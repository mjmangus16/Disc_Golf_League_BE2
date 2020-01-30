const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const mongoose = require("mongoose");

const formatsRouter = require("./routes/formats");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/formats", formatsRouter);

const port = process.env.PORT || 6000;

server.listen(port, () => console.log(`Server running on port ${port}`));
