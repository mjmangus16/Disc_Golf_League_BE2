const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const server = express();

const port = process.env.PORT || 6000;

server.listen(port, () => console.log(`Server running on port ${port}`));
