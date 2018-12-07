const express = require("express");
let port = process.env.PORT || 3000;
let app = express();
let db = require("./src/db");
app.listen(port);