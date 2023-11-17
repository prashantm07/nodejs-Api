const express = require("express");
require("../src/db/dbConnection");
const routers = require("../src/routers/mensRouters");

const app = express();
const port = process.env.PORT || 3000;

//use json data in express
app.use(express.json());
app.use(routers);

app.listen(port, () => {
  console.log(`Server connecting to Port no ${port}`);
});
