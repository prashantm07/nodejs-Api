const express = require("express");
require("../src/db/dbConnection");
const routers = require("../src/routers/mensRouters");

require("dotenv").config();

const port = process.env.PORT;
const hostName = process.env.HOST;

const app = express();

//use json data in express
app.use(express.json());
app.use(routers);

app.listen(port, hostName, () => {
  console.log(`server Rnning at http://${hostName}/${port}`);
});
